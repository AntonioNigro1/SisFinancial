"use server";

import { prisma } from "@/lib/prisma";
import { parseCurrencyToNumber } from "@/modules/shared/utils/formatters";
import { withdrawData, WithdrawSchema } from "../application/schema/withdrawSchema";

export default async function makeWithdraw(data: withdrawData): Promise<number> {
  const result = WithdrawSchema.safeParse(data);
  if (!result.success) {
    throw new Error(result.error.errors.map((err) => err.message).join(", "));
  }
  const { amount, userId, balance } = result.data;

  const newBalance = parseCurrencyToNumber(balance) - parseCurrencyToNumber(amount);

  prisma.$transaction(async (prisma) => {
    await prisma.transaction.create({
      data: {
        amount: parseCurrencyToNumber(amount),
        type: "WITHDRAWAL",
        receiverId: userId,
        senderId: userId,
      },
    });

    if (newBalance < 0) throw new Error("Saldo insuficiente");

    await prisma.accountBalance.update({ where: { userId }, data: { balance: newBalance } });
  });

  return newBalance;
}
