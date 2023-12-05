import prisma from "@/adapters/prisma";
import { getServerSession } from "next-auth";
import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { Oaxios } from "@/adapters/axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method != "DELETE") return res.status(405).send("METHOD NOT ALLOWED");

  const session = await getServerSession(req, res, authOptions);
  const groupId = req.query.id as string;

  if (!groupId) {
    return res.status(400).send("BAD REQUEST | MISSING FIELDS");
  }

  if (!session?.user || !session.user.email) {
    return res.status(403).send("NOT AUTHENTICATED");
  }

  const email = session.user.email;

  const userGroups = await prisma.group.findMany({
    where: {
      members: { some: { email } },
    },
  });

  if (!userGroups) {
    return res.status(405).send("You don't belong to any groups");
  }
  if (!userGroups.some((group) => group.id === groupId)) {
    return res.status(405).send("You dont belong to this specified group");
  }

  const newGroup = await prisma.group.delete({ where: { id: groupId} });
  // const backendGroup = await fetch("http://192.168.88.28:5000/create-group", {
  //   method: "POST",
  //   body: JSON.stringify({ path: newGroup.id }),
  // });

  res.status(200).send(`Group ${newGroup.name} deleted successfully`);
}
