import { authenticateUser } from "@/modules/core/auth/login/services/authenticate-user.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body) {
    return NextResponse.json({ error: "Falha ao fazer login." }, { status: 400 });
  }
  try {
    const user = await authenticateUser(body);
    return NextResponse.json({ user });
  } catch (error) {
    if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
