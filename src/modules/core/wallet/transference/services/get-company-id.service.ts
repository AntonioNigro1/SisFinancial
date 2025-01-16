"use server";

import { prisma } from "@/lib/prisma";

export default async function getCompanyByCNPJ(cnpj: string) {
  const account = await prisma.accountDetails.findUnique({
    where: { cnpj },
    include: { user: true },
  });

  if (!account) {
    throw new Error("Não foi encontrado uma empresa com esse CNPJ");
  }

  return account;
}
