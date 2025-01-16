import { z } from "zod";

export const DepositSchema = z.object({
  amount: z.string().refine((data) => data !== "0,00", { message: "Campo obrigatório" }),
  userId: z.string(),
});

export type DepositData = z.infer<typeof DepositSchema>;
