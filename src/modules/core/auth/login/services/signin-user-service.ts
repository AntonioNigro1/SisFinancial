"use server";

import { signIn } from "@/auth";
import { Credentials } from "@/modules/shared/types/credentials";

export default async function login(credentials: Credentials) {
  await signIn("credentials", credentials);
}
