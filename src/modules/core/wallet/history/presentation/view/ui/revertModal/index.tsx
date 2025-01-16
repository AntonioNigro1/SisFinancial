"use client";
import { Confirmation } from "@/modules/shared/presentation/view/components/ui/confirmation";
import { Dialog, DialogContent, DialogDescription } from "@/modules/shared/presentation/view/components/ui/dialog";
import { GoBack } from "@/modules/shared/presentation/view/components/ui/goBack";
import { useURLStates } from "@/modules/shared/presentation/view/hooks/useURLStates";
import { useWallet } from "@/modules/shared/presentation/view/hooks/useWallet";
import { DialogTitle } from "@radix-ui/react-dialog";
import requestRevertTransaction from "../../../../services/request-revert-transaction.service";
import { useHistory } from "../../hooks/useHistory";

export const RevertModal = () => {
  const { updateBalance, user } = useWallet();
  const { setData, setTotalPages, setLoading } = useHistory();
  const { getURLState, handleDelUrlState } = useURLStates();
  const transactionId = getURLState("transaction");
  const handleCloseModal = () => {
    handleDelUrlState("transaction");
  };

  const handleRevertTransaction = () => {
    if (!transactionId) return;
    requestRevertTransaction({ transactionId, updateBalance, user, setData, setTotalPages, setLoading });
    handleCloseModal();
  };

  return (
    <Dialog open={!!transactionId} onOpenChange={handleCloseModal}>
      <DialogContent>
        <DialogTitle>Reverter</DialogTitle>
        <DialogDescription>Modal de reversão</DialogDescription>
        <div className="w-fit flex flex-col gap-4">
          <h1 className="text-xl">Reversão de transferências</h1>
          <p className="text-lg">Tem certeza que deseja reverter a operação ?</p>
          <p className="text-md">A reversão esta sujeita a disponibilidade de saldo do destinatório original da transferência.</p>
          <div className="flex flex-col justify-between w-full gap-y-2 md:flex-row">
            <Confirmation onClick={handleRevertTransaction} />
            <GoBack onGoBack={handleCloseModal} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
