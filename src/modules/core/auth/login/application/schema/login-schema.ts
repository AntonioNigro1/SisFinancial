import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z
    .string()
    .refine((password) => password.length !== 0, { message: "Campo obrigatório" })
    .refine((password) => /[A-Z]/.test(password), { message: "A senha deve conter pelo menos uma letra maiúscula." })
    .refine((password) => /[0-9]/.test(password), { message: "A senha deve conter pelo menos um número." })
    .refine((password) => /[!@#$%^&*(),.?":{}|<>]/.test(password), { message: "A senha deve conter pelo menos um símbolo especial." })
    .refine((password) => password.length >= 6, { message: "A senha deve ter no mínimo 6 dígitos." }),
});

export type LoginData = z.infer<typeof LoginSchema>;
