"use client";
import { Button } from "@/modules/shared/presentation/view/components/ui/button";
import { Input } from "@/modules/shared/presentation/view/components/ui/input";
import Link from "next/link";
import { Controller } from "react-hook-form";
import { useLoginForm } from "../hooks/useLoginForm";

export const LoginForm = () => {
  const { control, isValid, handleLogin, handleSubmit } = useLoginForm();

  return (
    <form className="w-full h-full flex flex-col items-center gap-2" onSubmit={handleSubmit(handleLogin)}>
      <h1 className="text-2xl font-bold">SisFinancial</h1>
      <h2 className="text-xl font-semibold">Operações bancarias com segurança!</h2>
      <Controller
        control={control}
        name="email"
        render={({ field, fieldState: { error } }) => (
          <div className="flex flex-col gap-2 w-full">
            <p>Email</p>
            <div className="flex flex-col gap-1">
              <Input {...field} />
              {error && <p className="text-red-500">{error.message}</p>}
            </div>
          </div>
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field, fieldState: { error } }) => (
          <div className="flex flex-col gap-2 w-full">
            <p>Senha</p>
            <div className="flex flex-col gap-1">
              <Input {...field} />
              {error && <p className="text-red-500">{error.message}</p>}
            </div>
          </div>
        )}
      />
      <div className="flex w-full flex-col md:flex-row gap-y-2 justify-between">
        <Button disabled={!isValid} type="submit">
          Entrar
        </Button>
        <Button variant="outline" type="button" formNoValidate>
          <Link href="/app/signin">Registrar</Link>
        </Button>
      </div>
    </form>
  );
};
