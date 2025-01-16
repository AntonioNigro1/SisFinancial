"use server";

import { prisma } from "@/lib/prisma";

export default async function getPersonByCPF(cpf: string) {
  const account = await prisma.accountDetails.findUnique({
    where: { cpf },
    include: { user: true },
  });

  if (!account) {
    throw new Error("Não foi encontrado um usuario com esse CPF");
  }

  return account;
}
