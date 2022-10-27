import React, { ReactNode, ReactPropTypes } from "react";

export interface ButtonType {
  children: ReactNode;
  onClick?: (a?: React.ChangeEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary" | "ghost";
  props?: ReactPropTypes;
  fullWidth?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  className?: string;
  buttonLabelStyle?: React.CSSProperties;
}
