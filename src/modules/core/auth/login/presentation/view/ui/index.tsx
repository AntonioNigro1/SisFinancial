"use client";
import { Button } from "@/modules/shared/presentation/view/components/ui/button";
import { TextInput } from "@/modules/shared/presentation/view/components/ui/textInput";
import { DoorOpen, Plus } from "lucide-react";
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
          <TextInput label="Email" placeholder="xxxxxxx@xxxxx.com" {...field} type="email" errorMessage={error?.message} />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field, fieldState: { error } }) => <TextInput placeholder="******" label="Senha" {...field} type="password" errorMessage={error?.message} />}
      />
      <div className="flex w-full flex-col md:flex-row gap-y-2 justify-between">
        <Button disabled={!isValid} type="submit">
          Entrar
          <DoorOpen className="w-6 h-6" />
        </Button>
        <Button variant="outline" type="button" formNoValidate>
          <Link href="/signup" className="w-full flex items-center justify-center gap-1">
            Nova conta
            <Plus className="w-6 h-6" />
          </Link>
        </Button>
      </div>
    </form>
  );
};
