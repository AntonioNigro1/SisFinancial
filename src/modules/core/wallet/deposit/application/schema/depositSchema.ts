import { z } from "zod";

export const DepositSchema = z.object({
  amount: z.string().refine((data) => data !== "0,00", { message: "Campo obrigatório" }),
});

export type DepositData = z.infer<typeof DepositSchema>;
