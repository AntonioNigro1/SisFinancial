import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Email invalido"),
  password: z
    .string()
    .refine((password) => password.length !== 0, { message: "Campo obrigatório" })
    .refine((password) => password.length >= 6, { message: "A senha deve ter no mínimo 6 dígitos." }),
});

export type LoginData = z.infer<typeof LoginSchema>;
