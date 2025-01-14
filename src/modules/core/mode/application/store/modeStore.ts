import { create } from "zustand";
import { IMode, IModeStore } from "../../domain/types/modeStore";

const modeObjActions = {
  light: (htmlElement: HTMLElement) => {
    htmlElement.classList.remove("dark");
  },
  dark: (htmlElement: HTMLElement) => {
    htmlElement.classList.add("dark");
  },
};

const modeStore = create<IModeStore>((set) => ({
  mode: "light",
  updateMode: (mode: IMode) => {
    set({ mode });
    modeObjActions[mode](document.documentElement);
    localStorage.setItem("mode", mode);
  },
}));

export { modeStore };
