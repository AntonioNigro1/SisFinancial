import makeDeposit from "@/modules/core/wallet/deposit/services/make-deposit.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, { params }: { params: { userId: string } }) {
  const { userId } = await params;
  const body = await req.json();
  if (!userId) {
    return NextResponse.json({ error: "User ID é obrigatório" }, { status: 400 });
  }

  if (!body.amount) {
    return NextResponse.json({ error: "Valor a ser depositado é obrigatório" }, { status: 400 });
  }
  try {
    const newBalance = await makeDeposit({ userId, amount: body.amount });
    return NextResponse.json({ userId, balance: newBalance });
  } catch (error) {
    if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
