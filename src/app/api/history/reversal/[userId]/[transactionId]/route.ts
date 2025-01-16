import revertTransaction from "@/modules/core/wallet/history/services/revert-transaction.service";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, { params }: { params: { transactionId: string; userId: string } }) {
  const { transactionId, userId } = await params;

  if (!transactionId) {
    return NextResponse.json({ error: "ID da transação é obrigatório" }, { status: 400 });
  }

  try {
    const newBalance = await revertTransaction(transactionId, userId);
    return NextResponse.json({ userId, balance: newBalance });
  } catch (error) {
    if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
