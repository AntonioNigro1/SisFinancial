import { cn } from "@/lib/utils";
import { Button } from "@/modules/shared/presentation/view/components/ui/button";
import { Input } from "@/modules/shared/presentation/view/components/ui/input";
import { FormProps } from "../../../../domain/types/formProps";

export const Form = ({ accountType, clearAccountType }: FormProps) => {
  return (
    <div
      className={cn(
        "w-full h-fit flex justify-center items-center transition-transform duration-300 ease-in-out",
        !accountType ? "translate-x-full" : "translate-x-0"
      )}
    >
      <form className="w-full h-full flex flex-col items-center gap-2">
        {accountType === "física" && (
          <>
            <div className="flex flex-col gap-2 w-full">
              <p>Nome</p>
              <Input type="text" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p>CPF</p>
              <Input type="text" />
            </div>
          </>
        )}
        {accountType === "jurídica" && (
          <>
            <div className="flex flex-col gap-2 w-full">
              <p>Razão social</p>
              <Input type="text" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p>CNPJ</p>
              <Input type="text" />
            </div>
          </>
        )}
        <div className="flex flex-col gap-2 w-full">
          <p>Email</p>
          <Input type="email" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p>Senha</p>
          <Input type="password" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p>Confirmação de senha</p>
          <Input type="password" />
        </div>
        <div className="flex w-full flex-col md:flex-row gap-y-2 justify-between">
          <Button>Criar conta</Button>
          <Button
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              clearAccountType();
            }}
            formNoValidate
          >
            Voltar
          </Button>
        </div>
      </form>
    </div>
  );
};
