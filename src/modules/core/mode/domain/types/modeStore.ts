export type IMode = "light" | "dark";

export interface IModeStore {
  mode: IMode;
  updateMode: (mode: IMode) => void;
}
