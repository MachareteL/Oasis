import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST() {
  console.log("passou");

  await prisma.group.create({
    data: {
      area: "Cap/ETS",
      name: "Grupo teste",
      Messages: {},
      description: "Primeiro grupo de teste!",
    },
  });

  return NextResponse.json({ code: 200, status: "ok" });
}
