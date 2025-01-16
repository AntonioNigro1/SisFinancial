import { parseCurrencyToNumber } from "@/modules/shared/utils/formatters";
import { z } from "zod";

export const WithdrawSchema = z
  .object({
    amount: z.string().refine((data) => data !== "0,00", { message: "Campo obrigatório" }),
    balance: z.string(),
    userId: z.string(),
  })
  .refine(
    (data) => {
      return parseCurrencyToNumber(data.balance) >= parseCurrencyToNumber(data.amount);
    },
    {
      message: "O valor de saque não pode ser maior que o saldo.",
      path: ["amount"],
    }
  );

export type withdrawData = z.infer<typeof WithdrawSchema>;
