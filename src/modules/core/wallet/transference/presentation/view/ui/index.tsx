import { AnimatedAccounts } from "@/modules/shared/presentation/view/components/ui/animatedAccounts";
import { AccountTypeSelector } from "./AccountTypeSelector";
import { Form } from "./form";

export const TransferenceForm = () => {
  return (
    <div className="flex flex-col gap-2 overflow-hidden min-h-[250px]">
      <AnimatedAccounts InitialComponent={<AccountTypeSelector />} FollowUpComponent={<Form />} />
    </div>
  );
};
