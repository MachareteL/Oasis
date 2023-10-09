import prisma from "@/adapters/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method != "POST") return res.status(405).send("METHOD NOT ALLOWED");

  const session = await getServerSession(req, res, authOptions);
  if (!session || !session.user?.email) {
    res.status(401).json({ message: "You must be logged in." });
    return;
  }
  const code = req.body.code;
  const email = session.user.email;
  try {
    const group = await prisma.group.update({
      where: {
        code,
      },
      data: {
        members: {
          connect: {
            email,
          },
        },
      },
    });
    return res.status(202).send(group);
  } catch (e) {
    return res.status(404).send(e);
  }
}
