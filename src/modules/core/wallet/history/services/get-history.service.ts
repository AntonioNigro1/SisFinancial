"use server";

import { prisma } from "@/lib/prisma";
import { mapOperationType } from "@/modules/shared/utils/mapOperationType";
import { IGetHistory, IPaginatedHistory } from "../domain/types/getHistory";

export default async function getHistory(userId: string, page: number, pageSize: number): Promise<IPaginatedHistory> {
  const transactions = await prisma.transaction.findMany({
    where: { OR: [{ senderId: userId }, { receiverId: userId }] },
    include: {
      sender: { select: { name: true } },
      receiver: { select: { name: true } },
    },
  });
  transactions.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  const splicedTransactions = transactions.slice((page - 1) * pageSize, page * pageSize);

  const data: IGetHistory[] = splicedTransactions.map((transaction) => ({
    transactionId: transaction.id,
    amount: Number(transaction.amount),
    date: transaction.createdAt.toISOString(),
    receiver: transaction.receiver ? transaction.receiver.name : "",
    sender: transaction.sender ? transaction.sender.name : "",
    type: mapOperationType(transaction.type),
  }));

  return {
    totalPages: Math.ceil(transactions.length / pageSize),
    data,
  };
}
