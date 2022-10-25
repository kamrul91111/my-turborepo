import React, { ReactElement } from "react";

export interface ButtonType {
  children: string | string[] | ReactElement;
  onClick?: (a?: React.ChangeEvent<HTMLButtonElement>) => void;
  variant: "primary" | "secondary" | "ghost";
}
