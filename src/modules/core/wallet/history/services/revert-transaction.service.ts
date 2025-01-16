"use server";

import { prisma } from "@/lib/prisma";

export default async function revertTransaction(transactionId: string, userId: string): Promise<number> {
  const transaction = await prisma.transaction.findUnique({
    where: { id: transactionId },
    include: {
      sender: { select: { name: true, id: true, AccountBalance: { select: { balance: true } } } },
      receiver: { select: { name: true, id: true, AccountBalance: { select: { balance: true } } } },
    },
  });
  if (!transaction) throw new Error("Transação não encontrada");

  const numberedAmount = Number(transaction.amount);

  if (transaction.sender?.AccountBalance && transaction.receiver?.AccountBalance) {
    if (Number(transaction.receiver.AccountBalance[0].balance) < numberedAmount) {
      throw new Error("Saldo insuficiente no receiver para realizar a reversão");
    }
  }

  const balance = await prisma.$transaction(async (prisma) => {
    await prisma.transaction.update({
      where: { id: transactionId },
      data: { type: "REVERSAL" },
    });

    if (transaction.sender?.AccountBalance && transaction.receiver?.AccountBalance) {
      const senderAccount = await prisma.accountBalance.update({
        where: { userId: transaction.sender.id },
        data: { balance: { increment: numberedAmount } },
      });
      const receiverAccount = await prisma.accountBalance.update({
        where: { userId: transaction.receiver.id },
        data: { balance: { decrement: numberedAmount } },
      });
      return userId === transaction.senderId ? senderAccount.balance : receiverAccount.balance;
    }
  });

  return Number(balance ?? 0);
}
