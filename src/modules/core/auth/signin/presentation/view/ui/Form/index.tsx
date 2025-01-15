"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/modules/shared/presentation/view/components/ui/button";
import { GoBack } from "@/modules/shared/presentation/view/components/ui/goBack";
import { IfRender } from "@/modules/shared/presentation/view/components/ui/ifRender";
import { TextInput } from "@/modules/shared/presentation/view/components/ui/textInput";
import { useAccountType } from "@/modules/shared/presentation/view/hooks/useAccountType";
import { CheckCircle2, Eraser } from "lucide-react";
import { Controller } from "react-hook-form";
import { AccountTypeEnum } from "../../../../domain/enum/accountTypeEnum";
import { useAccountForm } from "../../hooks/useAccountForm";
import { CompanyAccount } from "../CompanyAccount";
import { PersonalAccount } from "../PersonalAccount";

export const Form = () => {
  const { accountType, clearAccountType } = useAccountType();
  const { control, handleSignin, handleSubmit, isValid, resetForm } = useAccountForm(accountType);

  return (
    <div
      className={cn(
        "w-full h-fit flex justify-center items-center transition-transform duration-300 ease-in-out",
        !accountType ? "translate-x-full" : "translate-x-0"
      )}
    >
      <form onSubmit={handleSubmit(handleSignin)} className="w-full h-full flex flex-col items-center gap-2">
        <IfRender condition={accountType === AccountTypeEnum.FISICA}>
          <PersonalAccount control={control} />
        </IfRender>

        <IfRender condition={accountType === AccountTypeEnum.JURIDICA}>
          <CompanyAccount control={control} />
        </IfRender>

        <Controller
          control={control}
          name="email"
          render={({ field, fieldState: { error } }) => (
            <TextInput label="Email" placeholder="xxxxxxx@xxxxx.com" {...field} type="email" errorMessage={error?.message} />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field, fieldState: { error } }) => (
            <TextInput label="Senha" placeholder="******" {...field} type="password" errorMessage={error?.message} />
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field, fieldState: { error } }) => (
            <TextInput label="Confirmar Senha" placeholder="******" {...field} type="password" errorMessage={error?.message} />
          )}
        />

        <div className="flex w-full flex-col md:flex-row gap-y-2 justify-between">
          <div className="flex flex-col sm:flex-row gap-2">
            <Button type="submit" className="flex-grow md:flex-grow-0" disabled={!isValid}>
              Criar conta
              <CheckCircle2 className="w-6 h-6" />
            </Button>
            <Button variant="outline" title="limpar" onClick={resetForm} formNoValidate>
              <Eraser className="w-6 h-6" />
            </Button>
          </div>
          <GoBack onGoBack={clearAccountType} isDefaultPrevented />
        </div>
      </form>
    </div>
  );
};
