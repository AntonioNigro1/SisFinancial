import { historyStore } from "../../../application/store/historyStore";
import { IHistoryStore } from "../../../domain/types/historyStore";

export const useHistoryStore = (): IHistoryStore => {
  return {
    page: historyStore((state) => state.page),
    pageSize: historyStore((state) => state.pageSize),
    totalPages: historyStore((state) => state.totalPages),
    data: historyStore((state) => state.data),
    setPage: historyStore((state) => state.setPage),
    setTotalPages: historyStore((state) => state.setTotalPages),
    setData: historyStore((state) => state.setData),
    loading: historyStore((state) => state.loading),
    setLoading: historyStore((state) => state.setLoading),
  };
};
