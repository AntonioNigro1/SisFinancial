"use client";
import { useEffect, useState } from "react";
import { IAccountType } from "../../../domain/types/accountTypeStore";
import { useAccountType } from "../hooks/useAccountType";
import { AccountType } from "./AccountType";
import { Form } from "./Form";

export const SigninForm = () => {
  const { accountType, clearAccountType, updateAccountType } = useAccountType();

  const [delayedComponent, setDelayedComponent] = useState<IAccountType>();

  useEffect(() => {
    setTimeout(() => {
      setDelayedComponent(accountType);
    }, 300);
  }, [accountType]);

  return (
    <div className="flex flex-col justify-start items-center overflow-hidden w-full min-h-[500px]">
      <h1 className="text-2xl font-bold">SisFinancial</h1>
      <h2 className="text-xl font-semibold">Operações bancarias com segurança!</h2>
      <div className="w-full flex-1 flex items-center">
        {!delayedComponent && <AccountType accountType={accountType} updateAccountType={updateAccountType} />}
        {delayedComponent && <Form accountType={accountType} clearAccountType={clearAccountType} />}
      </div>
    </div>
  );
};
