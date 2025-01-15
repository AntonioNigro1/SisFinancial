import { useAccountType } from "@/modules/shared/presentation/view/hooks/useAccountType";
import { useWallet } from "@/modules/shared/presentation/view/hooks/useWallet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TransferenceData, TransferenceSchema } from "../../../application/schema/transferenceSchema";

export const useTransference = () => {
  const { balance } = useWallet();
  const { accountType } = useAccountType();
  const {
    control,
    formState: { isValid },
    handleSubmit,
    setValue,
    reset,
  } = useForm<TransferenceData>({
    resolver: zodResolver(TransferenceSchema),
    mode: "all",
    defaultValues: {
      amount: undefined,
      cpf: "",
      cnpj: "",
    },
  });

  const resetForm = () => {
    reset({ cpf: "", cnpj: "", amount: "0,00" });
  };

  const handleTransference = (data: TransferenceData) => {
    //make transference request
    console.log(data);
  };

  useEffect(() => {
    setValue("balance", balance ?? 0);
    setValue("accountType", accountType);
  }, [balance, accountType, setValue]);

  return { control, isValid, handleSubmit, handleTransference, resetForm };
};
