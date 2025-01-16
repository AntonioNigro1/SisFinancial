"use server";

import { comparePassword } from "@/lib/bcrypt";
import { prisma } from "@/lib/prisma";
import { Credentials } from "@/modules/shared/types/credentials";
import { LoginSchema } from "../application/schema/login-schema";

export async function authenticateUser(credentials: Credentials) {
  const result = LoginSchema.safeParse(credentials);

  if (!result.success) {
    throw new Error(result.error.errors.map((err) => err.message).join(", "));
  }
  const { email, password } = result.data;
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) throw Error("Não foi encontrado usuario com as credenciais fornecidas.");

  const isValidPassword = await comparePassword(password, user.password);
  return isValidPassword ? user : null;
}
