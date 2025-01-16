"use server";

import { saltAndHashPassword } from "@/lib/bcrypt";
import { prisma } from "@/lib/prisma";
import { Decimal } from "@/modules/shared/types/decimal";
import { SignupData, SignupSchema } from "../application/schema/signup-schema";
import { AccountTypeEnum } from "../domain/enum/accountTypeEnum";

export async function registerUser(data: SignupData): Promise<void> {
  const result = SignupSchema.safeParse(data);

  if (!result.success) {
    throw new Error(result.error.errors.map((err) => err.message).join(", "));
  }

  const { accountType, cpf, cnpj, companyName, name, email, password } = result.data;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("E-mail já cadastrado.");
  }

  const hashedPassword = await saltAndHashPassword(password);

  await prisma.$transaction(async (prisma) => {
    const user = await prisma.user.create({
      data: {
        accountType: accountType === AccountTypeEnum.FISICA ? "FISICA" : "JURIDICA",
        name: name || "",
        email,
        password: hashedPassword,
      },
    });

    if (accountType === AccountTypeEnum.FISICA && cpf) {
      await prisma.accountDetails.create({
        data: {
          userId: user.id,
          cpf,
        },
      });
    }

    if (accountType === AccountTypeEnum.JURIDICA && cnpj && companyName) {
      await prisma.accountDetails.create({
        data: {
          userId: user.id,
          cnpj,
          companyName,
        },
      });
    }

    await prisma.accountBalance.create({
      data: { userId: user.id, balance: new Decimal(0).toNumber() },
    });
  });
}
