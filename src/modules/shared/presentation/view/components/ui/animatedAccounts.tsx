"use client";
import { IAccountType } from "@/modules/shared/types/accountTypeStore";
import { animatedAccountsProps } from "@/modules/shared/types/animatedAccountsProps";
import { useEffect, useState } from "react";
import { useAccountType } from "../../hooks/useAccountType";

export const AnimatedAccounts = ({ FollowUpComponent, InitialComponent }: animatedAccountsProps) => {
  const [delayedComponent, setDelayedComponent] = useState<IAccountType>();
  const { accountType, clearAccountType } = useAccountType();

  useEffect(() => {
    setTimeout(() => {
      setDelayedComponent(accountType);
    }, 300);
  }, [accountType]);

  useEffect(() => {
    clearAccountType();
    return () => {};
  }, [clearAccountType]);

  return (
    <div className="w-full flex-1 flex items-center">
      {!delayedComponent && InitialComponent}
      {delayedComponent && FollowUpComponent}
    </div>
  );
};
