import prisma from "@/adapters/prisma";
import { getServerSession } from "next-auth";
import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { Oaxios } from "@/adapters/axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method != "POST") return res.status(405).send("METHOD NOT ALLOWED");

  const session = await getServerSession(req, res, authOptions);
  const { area, name, description } = req.body;
  if (!area || !name || !description) {
    return res.status(400).send("BAD REQUEST | MISSING FIELDS");
  }

  if (!session?.user || !session.user.email) {
    return res.status(403).send("NOT AUTHENTICATED");
  }

  const email = session.user.email;

  const newGroup = await prisma.group.create({
    data: {
      area,
      name,
      Messages: {},
      description,
      members: {
        connect: {
          email,
        },
      },
    },
  });

  await Oaxios.post("/create-group", { path: newGroup.id })
    .then(({ data }) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
  // const backendGroup = await fetch("http://192.168.88.28:5000/create-group", {
  //   method: "POST",
  //   body: JSON.stringify({ path: newGroup.id }),
  // });

  res.status(200).send(`Group ${newGroup.name} created successfully`);
}
