import { create } from "zustand";
import { IHistoryStore } from "../../domain/types/historyStore";

const historyStore = create<IHistoryStore>((set) => ({
  page: "1",
  pageSize: "10",
  data: [],
  setData: (data) => set({ data }),
  setPage: (page) => set({ page }),
  setTotalPages: (totalPages) => set({ totalPages }),
  totalPages: 0,
  loading: false,
  setLoading: (loading: boolean) => set({ loading }),
}));

export { historyStore };
