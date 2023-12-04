import prisma from "@/adapters/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method != "GET") return res.status(405).send("Method not allowed");
  const groupId = req.query.id as string;
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(405).send("you are not authenticated");
  }

  const userGroups = await prisma.group.findMany({
    where: {
      members: { some: { email: session.user!.email! } },
    },
  });

  if (!userGroups) {
    return res.status(405).send("You don't belong to any groups");
  }
  if (!userGroups.some(group => group.id === groupId)) {
    return res.status(405).send("You dont belong to this specified group");
  }

  const group = await prisma.group.findUnique({
    where: {
      id: groupId,
    },
  });

  res.status(200).send(group);
}
