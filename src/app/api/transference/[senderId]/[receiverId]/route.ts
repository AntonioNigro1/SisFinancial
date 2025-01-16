import { getUserBalance } from "@/modules/core/wallet/base/services/get-balance";
import makeTransference from "@/modules/core/wallet/transference/services/make-transference.service";
import { formatCurrency } from "@/modules/shared/utils/formatters";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, { params }: { params: { senderId: string; receiverId: string } }) {
  const { senderId, receiverId } = await params;
  const body = await req.json();

  if (!senderId) {
    return NextResponse.json({ error: "Sender ID é obrigatório" }, { status: 400 });
  }
  if (!receiverId) {
    return NextResponse.json({ error: "Receiver ID é obrigatório" }, { status: 400 });
  }

  if (!body.amount) {
    return NextResponse.json({ error: "Valor a ser transferido é obrigatório" }, { status: 400 });
  }

  const balance = await getUserBalance(senderId);
  try {
    const newBalance = await makeTransference({ userId: senderId, amount: body.amount, balance: formatCurrency(Number(balance)) }, receiverId);
    return NextResponse.json({ balance: newBalance });
  } catch (error) {
    if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
