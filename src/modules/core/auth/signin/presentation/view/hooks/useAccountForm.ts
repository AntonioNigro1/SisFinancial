"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IAccountType } from "../../../../../../shared/types/accountTypeStore";
import { SigninData, SigninSchema } from "../../../application/schema/signin-schema";
import { IUseAccountForm } from "../../../domain/types/useAccountForm";

export const useAccountForm = (accountType: IAccountType): IUseAccountForm => {
  const {
    control,
    formState: { isValid },
    handleSubmit,
    setValue,
    reset,
  } = useForm<SigninData>({
    resolver: zodResolver(SigninSchema),
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

  const handleSignin = (data: SigninData) => {
    //make signin request
    console.log(data);
  };

  useEffect(() => {
    if (accountType) setValue("accountType", accountType);
  }, [setValue, accountType]);

  return { isValid, control, handleSubmit, handleSignin, resetForm };
};
