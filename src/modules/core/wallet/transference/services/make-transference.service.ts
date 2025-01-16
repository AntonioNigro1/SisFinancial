"use server";

import { prisma } from "@/lib/prisma";
import { parseCurrencyToNumber } from "@/modules/shared/utils/formatters";
import { TransferenceData } from "../application/schema/transferenceSchema";

export default async function makeTransference(data: TransferenceData, receiverId: string): Promise<number> {
  const { amount, balance, userId } = data;
  const newBalance = parseCurrencyToNumber(balance) - parseCurrencyToNumber(amount);

  if (newBalance < 0) {
    throw new Error("Saldo insuficiente");
  }

  const numberedAmount = Number(amount.replaceAll(".", "").replace(",", "."));

  prisma.$transaction(async (prisma) => {
    await prisma.transaction.create({
      data: {
        amount: numberedAmount,
        type: "TRANSFER",
        senderId: userId,
        receiverId,
      },
    });

    await prisma.accountBalance.update({
      where: { userId },
      data: { balance: newBalance },
    });

    await prisma.accountBalance.update({
      where: { userId: receiverId },
      data: { balance: { increment: numberedAmount } },
    });
  });

  return newBalance;
}
