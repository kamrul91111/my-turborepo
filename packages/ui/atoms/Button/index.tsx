import { ButtonType } from "./types";

export const Button = ({
  children = "Button",
  onClick,
  variant = "ghost",
}: ButtonType) => {
  return <button onClick={onClick}>{children}</button>;
};
