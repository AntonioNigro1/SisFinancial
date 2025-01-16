"use client";
import { GoBack } from "@/modules/shared/presentation/view/components/ui/goBack";
import { HistoryTableContent } from "@/modules/shared/presentation/view/components/ui/historyTableContent";
import { Table, TableHead, TableHeader, TableRow } from "@/modules/shared/presentation/view/components/ui/table";
import { WalletData } from "@/modules/shared/presentation/view/components/ui/walletData";
import { useWallet } from "@/modules/shared/presentation/view/hooks/useWallet";
import { historyTableDataHeader } from "../../../../data/const/historyTableDataHeader";
import { useHistory } from "../../hooks/useHistory";
import Paginator from "../paginator";

export const HistoryTable = () => {
  const { data, handleChangePage, totalPages, page, pageSize, loading } = useHistory();
  const { showData } = useWallet();

  return (
    <div className="flex flex-col gap-2 mt-2">
      <div className="w-full flex items-end">
        <WalletData />
      </div>
      {data?.length > 0 && (
        <Table>
          <TableHeader>
            <TableRow className="">
              {historyTableDataHeader.map((item) => (
                <TableHead key={item.header} className={item.className}>
                  {item.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <HistoryTableContent data={data} pageSize={pageSize} showData={showData} loading={loading} />
        </Table>
      )}
      {data?.length === 0 && (
        <div className="w-full flex items-center justify-center mt-1">
          <p>Nenhum registro disponível.</p>
        </div>
      )}
      <Paginator currentPage={Number(page)} totalPages={totalPages} onPageChange={(page) => handleChangePage(String(page))} />
      <div className="flex w-full justify-start">
        <GoBack hasLink href="/app" />
      </div>
    </div>
  );
};
