import { IGetHistory } from "@/modules/core/wallet/history/domain/types/getHistory";

export interface HistoryTableContentProps {
  showData: boolean;
  data: IGetHistory[];
  pageSize: string;
  loading?: boolean;
}
