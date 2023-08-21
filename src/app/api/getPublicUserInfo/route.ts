import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany({
    select: {
      name: true,
      email: true,
    },
  });

  return NextResponse.json({ code: 200, status: "okay", users });
}
