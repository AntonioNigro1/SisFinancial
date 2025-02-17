import { AccountTypeEnum } from "@/modules/core/auth/signup/domain/enum/accountTypeEnum";
import { parseCurrencyToNumber } from "@/modules/shared/utils/formatters";
import { validateCNPJ, validateCPF } from "@/modules/shared/utils/validators";
import { z } from "zod";

export const TransferenceSchema = z
  .object({
    amount: z.string().refine((data) => data !== "0,00", { message: "Campo obrigatório" }),
    balance: z.string(),
    accountType: z.nativeEnum(AccountTypeEnum).optional(),
    cpf: z.string().optional(),
    cnpj: z.string().optional(),
    userId: z.string(),
  })
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
      return parseCurrencyToNumber(data.balance) >= parseCurrencyToNumber(data.amount);
    },
    {
      message: "O valor da transferência não pode ser maior que o saldo.",
      path: ["amount"],
    }
  );

export type TransferenceData = z.infer<typeof TransferenceSchema>;
