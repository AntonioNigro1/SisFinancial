"use client";
import { DepositData } from "@/modules/core/wallet/deposit/application/schema/depositSchema";
import { withdrawData } from "@/modules/core/wallet/withdraw/application/schema/withdrawSchema";
import { useEffect } from "react";
import { UseFormSetValue } from "react-hook-form";
import { useWallet } from "./useWallet";

export const useSetId = (setValue: UseFormSetValue<DepositData | withdrawData>): void => {
  const { user } = useWallet();
  useEffect(() => {
    setValue("userId", user.userId);
  }, [setValue, user]);
};
