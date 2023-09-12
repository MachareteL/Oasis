import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST() {
  console.log("passou");

  await prisma.group.create({
    data: {
      area: "",
      name: "",
      Messages: {},
      description: "",
    },
  });

  return NextResponse.json({ code: 200, status: "ok" });
}
