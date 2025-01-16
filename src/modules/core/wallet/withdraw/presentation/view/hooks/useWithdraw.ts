import { useWallet } from "@/modules/shared/presentation/view/hooks/useWallet";
import { formatCurrency } from "@/modules/shared/utils/formatters";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { withdrawData, WithdrawSchema } from "../../../application/schema/withdrawSchema";
import requestWithdraw from "../../../services/request-withdraw.service";

export const useWithdraw = () => {
  const { updateBalance, user, setLoading } = useWallet();
  const {
    control,
    formState: { isValid },
    handleSubmit,
    setValue,
  } = useForm<withdrawData>({
    resolver: zodResolver(WithdrawSchema),
    mode: "all",
    defaultValues: {
      amount: "",
      balance: formatCurrency(Number(user.balance)),
    },
  });

  const handleWithdraw = async (data: withdrawData) => {
    await requestWithdraw({ data, setLoading, updateBalance, user });
  };

  useEffect(() => {
    setValue("userId", user.userId);
    setValue("balance", formatCurrency(Number(user.balance)));
  }, [setValue, user]);

  return { control, isValid, handleSubmit, handleWithdraw };
};
