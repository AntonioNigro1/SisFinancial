import { OperationTypeEnum } from "../../../base/domain/types/historyProps";

export interface IGetHistory {
  transactionId: string;
  sender: string;
  date: string;
  receiver: string;
  type: OperationTypeEnum;
  amount: number;
}

export interface IPaginatedHistory {
  totalPages: number;
  data: IGetHistory[];
}

export interface IRequestHistory {
  userId: string;
  page: string;
  pageSize: string;
  setLoading: (looading: boolean) => void;
}
