"use client";
import { AccountTypeEnum } from "@/modules/core/auth/signin/domain/enum/accountTypeEnum";
import { AnimatedAccounts } from "@/modules/shared/presentation/view/components/ui/animatedAccounts";
import { useAccountType } from "@/modules/shared/presentation/view/hooks/useAccountType";
import { AccountTypeSelector } from "./AccountTypeSelector";
import { Form } from "./form";

export const TransferenceForm = () => {
  const { accountType } = useAccountType();
  return (
    <div className="flex flex-col gap-2">
      <p>
        {accountType === AccountTypeEnum.FISICA && "Para pessoa física."}
        {accountType === AccountTypeEnum.JURIDICA && "Para pessoa jurídica."}
      </p>
      <AnimatedAccounts InitialComponent={<AccountTypeSelector />} FollowUpComponent={<Form />} />
    </div>
  );
};
