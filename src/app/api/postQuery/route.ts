import axiosGlobal from "@/lib/axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { data }: { data: { question: string } } = await request.json();
  const { question } = data;

  const { data: res } = await axiosGlobal.post("/gepete", { question });
  const answer = res.answer;

  return NextResponse.json({ code: 200, status: "ok", answer });
}
