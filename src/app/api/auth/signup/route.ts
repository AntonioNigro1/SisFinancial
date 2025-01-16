import { registerUser } from "@/modules/core/auth/signup/services/register-user.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body) {
    return NextResponse.json({ error: "Falha ao registrar." }, { status: 400 });
  }
  try {
    await registerUser(body);
  } catch (error) {
    if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
