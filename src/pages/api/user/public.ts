import prisma from "@/adapters/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method != "GET") return res.status(405).send("METHOD NOT ALLOWED");

  const users = await prisma.user.findMany({
    select: {
      name: true,
      email: true,
    },
  });

  return res.status(200).send(users);
}
