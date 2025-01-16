"use server";

import { prisma } from "@/lib/prisma";
import { parseCurrencyToNumber } from "@/modules/shared/utils/formatters";
import { DepositData, DepositSchema } from "../application/schema/depositSchema";

export default async function makeDeposit(data: DepositData): Promise<number> {
  const result = DepositSchema.safeParse(data);

  if (!result.success) {
    throw new Error(result.error.errors.map((err) => err.message).join(", "));
  }
  const { amount, userId } = result.data;

  const account = await prisma.$transaction(async (prisma) => {
    await prisma.transaction.create({
      data: {
        amount: parseCurrencyToNumber(amount),
        type: "DEPOSIT",
        receiverId: userId,
        senderId: userId,
      },
    });

    return await prisma.accountBalance.update({ where: { userId }, data: { balance: { increment: parseCurrencyToNumber(amount) } } });
  });
  return parseCurrencyToNumber(account.balance.toString().replace(".", ","));
}
