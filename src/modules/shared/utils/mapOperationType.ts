import { OperationTypeEnum } from "@/modules/core/wallet/base/domain/types/historyProps";
import { TransactionType } from "@prisma/client";

export const mapOperationType = (type: TransactionType) => {
  switch (type) {
    case TransactionType.DEPOSIT:
      return OperationTypeEnum.DEPOSIT;
    case TransactionType.TRANSFER:
      return OperationTypeEnum.TRANSFER;
    case TransactionType.WITHDRAWAL:
      return OperationTypeEnum.WITHDRAW;
    case TransactionType.REVERSAL:
      return OperationTypeEnum.REVERT;
    default:
      return OperationTypeEnum.DEPOSIT;
  }
};
