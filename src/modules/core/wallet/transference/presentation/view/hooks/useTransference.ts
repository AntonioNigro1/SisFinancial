"use client";
import { useAccountType } from "@/modules/shared/presentation/view/hooks/useAccountType";
import { useWallet } from "@/modules/shared/presentation/view/hooks/useWallet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TransferenceData, TransferenceSchema } from "../../../application/schema/transferenceSchema";
import requestTransference from "../../../services/request-transference.service";

export const useTransference = () => {
  const { updateBalance, user, setLoading } = useWallet();
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
      amount: "",
      cpf: "",
      cnpj: "",
    },
  });

  const resetForm = () => {
    reset({ cpf: "", cnpj: "", amount: "0,00" });
  };

  const handleTransference = async (data: TransferenceData) => {
    await requestTransference({ data, setLoading, updateBalance, user });
    resetForm();
  };

  useEffect(() => {
    setValue("balance", user.balance);
    setValue("accountType", accountType);
    setValue("userId", user.userId);
  }, [user, accountType, setValue]);

  return { control, isValid, handleSubmit, handleTransference, resetForm };
};
