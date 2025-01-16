import { useWallet } from "@/modules/shared/presentation/view/hooks/useWallet";
import { useEffect } from "react";
import requestHistory from "../../../services/request-history.service";
import { useHistoryStore } from "./useHistoryStore";

export const useHistory = () => {
  const { user } = useWallet();
  const { page, pageSize, setPage, data, setData, setTotalPages, totalPages, loading, setLoading } = useHistoryStore();

  const handleChangePage = (page: string) => {
    setPage(page);
  };

  useEffect(() => {
    const getHistory = async () => {
      const historyData = await requestHistory({ userId: user.userId, page, pageSize, setLoading });
      setData(historyData?.data ?? []);
      setTotalPages(historyData?.totalPages ?? 0);
    };
    getHistory();
  }, [pageSize, page, user.userId, setData, setTotalPages, setLoading]);

  return {
    data,
    handleChangePage,
    totalPages,
    page,
    pageSize,
    setData,
    setTotalPages,
    loading,
    setLoading,
  };
};
