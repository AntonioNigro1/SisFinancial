import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { withdrawData, WithdrawSchema } from "../../../application/schema/withdrawSchema";

export const useWithdraw = () => {
  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm<withdrawData>({
    resolver: zodResolver(WithdrawSchema),
    mode: "all",
    defaultValues: {
      amount: undefined,
      balance: 1200,
    },
  });

  const handleWithdraw = (data: withdrawData) => {
    //make deposit request
    console.log(data);
  };

  return { control, isValid, handleSubmit, handleWithdraw };
};
