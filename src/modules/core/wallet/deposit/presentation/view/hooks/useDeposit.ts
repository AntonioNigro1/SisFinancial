import { useSetId } from "@/modules/shared/presentation/view/hooks/useId";
import { useWallet } from "@/modules/shared/presentation/view/hooks/useWallet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DepositData, DepositSchema } from "../../../application/schema/depositSchema";
import requestDeposit from "../../../services/request-deposit.service";

export const useDeposit = () => {
  const { updateBalance, user, setLoading } = useWallet();
  const {
    control,
    formState: { isValid },
    handleSubmit,
    setValue,
  } = useForm<DepositData>({
    resolver: zodResolver(DepositSchema),
    mode: "all",
    defaultValues: {
      amount: "",
    },
  });

  useSetId(setValue);

  const handleDeposit = async (data: DepositData) => {
    await requestDeposit({ data, setLoading, updateBalance, user });
  };

  return { control, isValid, handleSubmit, handleDeposit };
};
