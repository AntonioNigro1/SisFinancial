export enum OperationTypeEnum {
  TRANSFER = "transferência",
  DEPOSIT = "deposito",
  WITHDRAW = "saque",
  REVERT = "estorno",
}

export type HistoryData = { amount: number; date: string; id: number; finalBalance: number; receiver: string; type: OperationTypeEnum };

export interface HistoryProps {
  data: HistoryData[];
}
