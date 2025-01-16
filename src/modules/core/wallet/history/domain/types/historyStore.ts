import { IGetHistory } from "./getHistory";

export interface IHistoryStore {
  page: string;
  pageSize: string;
  totalPages: number;
  data: IGetHistory[];
  setPage: (page: string) => void;
  setTotalPages: (totalPages: number) => void;
  setData: (data: IGetHistory[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}
