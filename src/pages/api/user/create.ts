import prisma from "@/adapters/prisma";
import { hash } from "bcrypt";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method != "POST") return res.status(405).send("METHOD NOT ALLOWED");

  const {name, email, password} = req.body

  if (!name || !email || !password) {
    return;
  }
  const user = await prisma.user.create({
    data: {
      email,
      password: await hash(password, 12),
      name,
    },
  });

  return res.status(200).send(user);
}
