import prisma from "@/adapters/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method != "PATCH") return res.status(405).send("Method not allowed");
  const body = req.body as Group;
  console.log(body);
  function generateRandomCode() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%-_&*";
    let randomCode = "";

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomCode += characters.charAt(randomIndex);
    }

    return randomCode;
  }
  const randomCode = generateRandomCode();
  const updatedGroup = await prisma.group.update({
    where: {
      id: body.id,
    },
    data:{
      code: randomCode
    }
  });
  res.status(201).send(updatedGroup);
}
