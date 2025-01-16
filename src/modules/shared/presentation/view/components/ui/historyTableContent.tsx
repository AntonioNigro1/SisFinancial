import { OperationTypeEnum } from "@/modules/core/wallet/base/domain/types/historyProps";
import { HistoryTableContentProps } from "@/modules/shared/types/historyTableContentProps";
import { capitalizeFirstLetter, formatCurrency, formatDateTime } from "@/modules/shared/utils/formatters";
import { RefreshCcw } from "lucide-react";
import { usePathname } from "next/navigation";
import { useURLStates } from "../../hooks/useURLStates";
import { Button } from "./button";
import { Skeleton } from "./skeleton";
import { TableBody, TableCell, TableRow } from "./table";

export const HistoryTableContent = ({ data, pageSize, showData, loading }: HistoryTableContentProps) => {
  const pathname = usePathname();
  const { handleSetUrlState } = useURLStates();

  const actionComponent = (id: string, type: OperationTypeEnum) => {
    return (
      <Button
        size="icon"
        variant="outline"
        onClick={() => {
          handleSetUrlState("transaction", id);
        }}
        disabled={type !== OperationTypeEnum.TRANSFER}
        title={"Reverter"}
      >
        <RefreshCcw className="w-5 h-5" />
      </Button>
    );
  };

  return (
    <TableBody>
      {showData &&
        !loading &&
        data?.length > 0 &&
        data.map((entry) => (
          <TableRow key={entry.transactionId}>
            {pathname === "/app/history" && <TableCell>{actionComponent(entry.transactionId, entry.type)}</TableCell>}
            <TableCell>{formatDateTime(entry.date)}</TableCell>
            {(entry.type === OperationTypeEnum.DEPOSIT || entry.type === OperationTypeEnum.WITHDRAW || entry.type === OperationTypeEnum.TRANSFER) && (
              <TableCell className="text-center"> -- </TableCell>
            )}
            {entry.type !== OperationTypeEnum.DEPOSIT && entry.type !== OperationTypeEnum.WITHDRAW && entry.type !== OperationTypeEnum.TRANSFER && (
              <TableCell className="text-center"> {entry.sender} </TableCell>
            )}
            {(entry.type === OperationTypeEnum.DEPOSIT || entry.type === OperationTypeEnum.WITHDRAW) && <TableCell className="text-center"> -- </TableCell>}
            {entry.type !== OperationTypeEnum.DEPOSIT && entry.type !== OperationTypeEnum.WITHDRAW && (
              <TableCell className="text-center"> {entry.receiver} </TableCell>
            )}
            <TableCell className="text-center">{capitalizeFirstLetter(entry.type)}</TableCell>
            <TableCell className="text-right">
              {(entry.type === OperationTypeEnum.WITHDRAW || (entry.type === OperationTypeEnum.TRANSFER && entry.receiver !== "")) && "-"}
              {formatCurrency(entry.amount)}
            </TableCell>
          </TableRow>
        ))}
      {(!showData || loading) &&
        Array.from({ length: Number(pageSize) }).map((entry, index) => (
          <TableRow key={index}>
            {pathname === "/app/history" && (
              <TableCell>
                <Skeleton className="h-6 w-full" />
              </TableCell>
            )}
            <TableCell>
              <Skeleton className="h-6 w-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-6 w-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-6 w-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-6 w-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-6 w-full" />
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
};
