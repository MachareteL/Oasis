import prisma from "@/lib/prisma";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log("passou");
  const formada = await request.formData();
  const name = formada.get("name")?.toString();
  const description = formada.get("description")?.toString();
  const area = formada.get("area")?.toString();

  if (!area || !name || !description) {
    return;
  }
  await prisma.group.create({
    data: {
      area,
      name,
      Messages: {},
      description,
    },
  });

  return NextResponse.json({ code: 200, status: "ok" });
}
