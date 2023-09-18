import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  const formada = await request.formData();
  const name = formada.get("name")?.toString();
  const description = formada.get("description")?.toString();
  const area = formada.get("area")?.toString();

  if (!area || !name || !description || !session?.user) {
    return;
  }

  const email = session.user.email!;

  await prisma.group.create({
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

  return NextResponse.json({ code: 200, status: "ok" });
}
