import styled from "@emotion/styled";
import { ButtonType } from "./types";

export const ButtonBase = styled.button`
  background-color: ${(props: ButtonType) =>
    props.variant === "primary"
      ? "red"
      : props.variant === "secondary"
      ? "green"
      : "blue"};
`;
