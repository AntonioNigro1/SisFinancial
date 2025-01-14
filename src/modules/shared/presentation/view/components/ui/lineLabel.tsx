import { LineLabelProps } from "@/modules/shared/types/lineLabel";

export const LineLabel = ({ children }: LineLabelProps) => {
  return (
    <div className="w-full relative my-2">
      <hr className="w-full mt-2" />
      <div className="absolute w-full justify-center flex -top-1">{children}</div>
    </div>
  );
};
