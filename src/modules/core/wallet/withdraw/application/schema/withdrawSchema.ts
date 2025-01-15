import { z } from "zod";

export const WithdrawSchema = z
  .object({
    amount: z.string().refine((data) => data !== "0,00", { message: "Campo obrigatório" }),
    balance: z.number(),
  })
  .refine(
    (data) => {
      console.log(data);
      const amountNumber = parseFloat(data.amount.replaceAll(".", "").replace(",", "."));
      console.log(amountNumber);
      return amountNumber <= data.balance;
    },
    {
      message: "O valor de saque não pode ser maior que o saldo.",
      path: ["amount"],
    }
  );

export type withdrawData = z.infer<typeof WithdrawSchema>;
