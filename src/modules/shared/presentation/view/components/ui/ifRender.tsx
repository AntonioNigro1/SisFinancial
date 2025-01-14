import { ifRenderProps } from "@/modules/shared/types/ifRender";
import { Fragment } from "react";

export const IfRender = ({ children, condition }: ifRenderProps) => {
  if (condition) return children;
  return <Fragment />;
};
