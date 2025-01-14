"use client";
import { useEffect } from "react";
import { modeStore } from "../../../application/store/modeStore";
import { IMode, IModeStore } from "../../../domain/types/modeStore";

const useMode = (): IModeStore => {
  const mode = modeStore((state) => state.mode);
  const updateMode = modeStore((state) => state.updateMode);

  useEffect(() => {
    const mode = localStorage.getItem("mode");
    if (mode) updateMode(mode as IMode);
  }, [updateMode]);

  return {
    mode,
    updateMode,
  };
};

export { useMode };
