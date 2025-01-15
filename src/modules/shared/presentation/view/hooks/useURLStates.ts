"use client";

import { IUseURLStates } from "@/modules/shared/types/useURLStates";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useURLStates = (): IUseURLStates => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const getURLState = (key: string) => {
    return searchParams.get(key);
  };

  const setURLState = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleSetUrlState = (name: string, value: string) => {
    router.push(pathname + "?" + setURLState(name, value));
  };

  const delURLState = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name);

      return params.toString();
    },
    [searchParams]
  );

  const handleDelUrlState = (name: string) => {
    router.push(pathname + "?" + delURLState(name));
  };

  return {
    getURLState,
    handleSetUrlState,
    handleDelUrlState,
  };
};
