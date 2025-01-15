export interface IUseURLStates {
  getURLState: (key: string) => string | null;
  handleSetUrlState: (name: string, value: string) => void;
  handleDelUrlState: (name: string) => void;
}
