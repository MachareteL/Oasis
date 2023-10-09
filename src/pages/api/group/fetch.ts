import prisma from "@/adapters/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method != "GET") return res.status(405).send("METHOD NOT ALLOWED");

  const session = await getServerSession(req, res, authOptions);
  if (!session || !session.user?.email) {
    res.status(401).json({ message: "You must be logged in." });
    return;
  }

  const rooms = await prisma.group.findMany({
    where: {
      members: {
        some: {
          email: session.user.email,
        },
      },
    },
    select: {
      id: true,
      area: true,
      description: true,
      name: true,
      _count: {
        select: {
          members: true,
        },
      },
    },
  });

  res.status(200).send(
    rooms.map((group) => ({
      id: group.id,
      area: group.area,
      name: group.name,
      description: group.description,
      members: group._count.members,
    })),
  );
}
