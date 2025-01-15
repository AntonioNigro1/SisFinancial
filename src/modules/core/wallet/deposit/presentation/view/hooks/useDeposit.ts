import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DepositData, DepositSchema } from "../../../application/schema/depositSchema";

export const useDeposit = () => {
  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm<DepositData>({
    resolver: zodResolver(DepositSchema),
    mode: "all",
    defaultValues: {
      amount: undefined,
    },
  });

  const handleDeposit = (data: DepositData) => {
    //make deposit request
    console.log(data);
  };

  return { control, isValid, handleSubmit, handleDeposit };
};
