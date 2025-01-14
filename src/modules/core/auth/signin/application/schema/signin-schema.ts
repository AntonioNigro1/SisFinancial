import { validateCNPJ, validateCPF } from "@/modules/shared/utils/validators";
import { z } from "zod";
import { AccountTypeEnum } from "../../domain/enum/accountTypeEnum";

export const SigninSchema = z
  .object({
    accountType: z.nativeEnum(AccountTypeEnum),
    cpf: z.string().optional(),
    cnpj: z.string().optional(),
    companyName: z.string().optional(),
    name: z.string().optional(),
    email: z.string().email("Email invalido"),
    password: z
      .string()
      .refine((password) => password.length !== 0, { message: "Campo obrigatório" })
      .refine((password) => /[A-Z]/.test(password), { message: "A senha deve conter pelo menos uma letra maiúscula." })
      .refine((password) => /[0-9]/.test(password), { message: "A senha deve conter pelo menos um número." })
      .refine((password) => /[!@#$%^&*(),.?":{}|<>]/.test(password), { message: "A senha deve conter pelo menos um símbolo especial." })
      .refine((password) => password.length >= 6, { message: "A senha deve ter no mínimo 6 dígitos." }),
    confirmPassword: z
      .string()
      .refine((password) => password.length !== 0, { message: "Campo obrigatório" })
      .refine((password) => /[A-Z]/.test(password), { message: "A senha deve conter pelo menos uma letra maiúscula." })
      .refine((password) => /[0-9]/.test(password), { message: "A senha deve conter pelo menos um número." })
      .refine((password) => /[!@#$%^&*(),.?":{}|<>]/.test(password), { message: "A senha deve conter pelo menos um símbolo especial." })
      .refine((password) => password.length >= 6, { message: "A senha deve ter no mínimo 6 dígitos." }),
  })
  .refine(
    (data) => {
      if (data.accountType === AccountTypeEnum.FISICA) {
        return data.name && data.name.length !== 0;
      }
      return true;
    },
    {
      message: "Campo obrigatório",
      path: ["name"],
    }
  )
  .refine(
    (data) => {
      if (data.accountType === AccountTypeEnum.FISICA) {
        return data.cpf && data.cpf.length !== 0;
      }
      return true;
    },
    {
      message: "Campo obrigatório",
      path: ["cpf"],
    }
  )
  .refine(
    (data) => {
      if (data.accountType === AccountTypeEnum.FISICA) {
        return validateCPF(data.cpf || "");
      }
      return true;
    },
    {
      message: "CPF inválido",
      path: ["cpf"],
    }
  )
  .refine(
    (data) => {
      if (data.accountType === AccountTypeEnum.JURIDICA) {
        return data.cnpj && data.cnpj.length !== 0;
      }
      return true;
    },
    {
      message: "Campo obrigatório",
      path: ["cnpj"],
    }
  )
  .refine(
    (data) => {
      if (data.accountType === AccountTypeEnum.JURIDICA) {
        return validateCNPJ(data.cnpj || "");
      }
      return true;
    },
    {
      message: "CNPJ inválido",
      path: ["cnpj"],
    }
  )
  .refine(
    (data) => {
      console.log(data);
      if (data.accountType === AccountTypeEnum.JURIDICA) {
        return data.companyName && data.companyName.length !== 0;
      }
      return true;
    },
    {
      message: "Campo obrigatório",
      path: ["companyName"],
    }
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: "A senha e a confirmação da senha devem ser iguais.",
    path: ["confirmPassword"],
  });

export type SigninData = z.infer<typeof SigninSchema>;
