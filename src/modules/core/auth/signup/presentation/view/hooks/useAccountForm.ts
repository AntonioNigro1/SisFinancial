"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IAccountType } from "../../../../../../shared/types/accountTypeStore";
import { SignupData, SignupSchema } from "../../../application/schema/signup-schema";
import { IUseAccountForm } from "../../../domain/types/useAccountForm";
import requestRegisterUser from "../../../services/request-register-user.service";

export const useAccountForm = (accountType: IAccountType): IUseAccountForm => {
  const router = useRouter();
  const {
    control,
    formState: { isValid },
    handleSubmit,
    setValue,
    reset,
  } = useForm<SignupData>({
    resolver: zodResolver(SignupSchema),
    mode: "all",
    defaultValues: {
      cnpj: "",
      companyName: "",
      confirmPassword: "",
      cpf: "",
      email: "",
      name: "",
      password: "",
    },
  });

  const resetForm = () => {
    reset({ cnpj: "", companyName: "", confirmPassword: "", cpf: "", email: "", name: "", password: "" });
  };

  const handleSignup = async (data: SignupData) => {
    await requestRegisterUser(data, router);
  };

  useEffect(() => {
    if (accountType) setValue("accountType", accountType);
  }, [setValue, accountType]);

  return { isValid, control, handleSubmit, handleSignup, resetForm };
};
