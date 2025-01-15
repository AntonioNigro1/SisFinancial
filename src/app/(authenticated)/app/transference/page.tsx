import { TransferenceForm } from "@/modules/core/wallet/transference/presentation/view/ui";

export default function Transference() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-4/5 md:1/2 xl:w-1/3 flex flex-col justify-center rounded-md bg-card p-4 border">
        <h1 className="text-2xl text-center">Transferir</h1>
        <TransferenceForm />
      </div>
    </div>
  );
}
