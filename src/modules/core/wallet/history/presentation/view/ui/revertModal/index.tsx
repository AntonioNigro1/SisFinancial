"use client";
import { Confirmation } from "@/modules/shared/presentation/view/components/ui/confirmation";
import { Dialog, DialogContent } from "@/modules/shared/presentation/view/components/ui/dialog";
import { GoBack } from "@/modules/shared/presentation/view/components/ui/goBack";
import { useURLStates } from "@/modules/shared/presentation/view/hooks/useURLStates";

export const RevertModal = () => {
  const { getURLState, handleDelUrlState } = useURLStates();
  const isModalOpen = !!getURLState("transaction");
  const handleCloseModal = () => {
    handleDelUrlState("transaction");
  };
  return (
    <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
      <DialogContent>
        <div className="w-fit flex flex-col gap-4">
          <h1 className="text-xl">Reversão de transferências</h1>
          <p className="text-lg">Tem certeza que deseja reverter a operação ?</p>
          <p className="text-md">A reversão esta sujeita a disponibilidade de saldo do destinatório original da transferência.</p>
          <div className="flex flex-col-reverse justify-between w-full gap-y-2 md:flex-row">
            <Confirmation />
            <GoBack onGoBack={handleCloseModal} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
