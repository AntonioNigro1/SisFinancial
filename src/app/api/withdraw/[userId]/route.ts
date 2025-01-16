import { getUserBalance } from "@/modules/core/wallet/base/services/get-balance";
import makeWithdraw from "@/modules/core/wallet/withdraw/services/make-withdraw-service";
import { formatCurrency } from "@/modules/shared/utils/formatters";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, { params }: { params: { userId: string } }) {
  const { userId } = await params;
  const body = await req.json();

  if (!userId) {
    return NextResponse.json({ error: "User ID é obrigatório" }, { status: 400 });
  }

  if (!body.amount) {
    return NextResponse.json({ error: "Valor a ser sacado é obrigatório" }, { status: 400 });
  }

  const balance = await getUserBalance(userId);
  try {
    const newBalance = await makeWithdraw({ userId, amount: body.amount, balance: formatCurrency(Number(balance)) });
    return NextResponse.json({ userId, balance: newBalance });
  } catch (error) {
    if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
