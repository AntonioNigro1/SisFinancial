import { AnimatedAccounts } from "@/modules/shared/presentation/view/components/ui/animatedAccounts";
import { AccountType } from "./AccountType";
import { Form } from "./Form";

export const SignupForm = () => {
  return (
    <div className="flex flex-col justify-start items-center overflow-hidden w-full min-h-[500px]">
      <h1 className="text-2xl font-bold text-center">SisFinancial</h1>
      <h2 className="text-xl font-semibold text-center">Operações bancarias com segurança!</h2>
      <h3 className="text-lg font-medium text-center">Criar nova conta</h3>
      <AnimatedAccounts FollowUpComponent={<Form />} InitialComponent={<AccountType />} />
    </div>
  );
};
