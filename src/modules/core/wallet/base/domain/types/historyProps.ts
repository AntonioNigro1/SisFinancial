export type HistoryData = { amount: number; date: string; id: number; finalBalance: number };

export interface HistoryProps {
  showData: boolean;
  data: HistoryData[];
}
