import styled from "@emotion/styled";
import { TypographyType } from "./types";

export const TypographyBase = styled.span`
  color: ${(props: TypographyType) => props.color};
  margin: 0px;
  font-size: ${(props: TypographyType) =>
    props.variant === "h1"
      ? "2rem"
      : props.variant === "h2"
      ? "1.75rem"
      : props.variant === "h3"
      ? "1.5rem"
      : props.variant === "h4"
      ? "1.25rem"
      : props.variant === "h5"
      ? "1rem"
      : props.variant === "label"
      ? "0.8rem"
      : props.variant === "body-large"
      ? "0.7rem"
      : props.variant === "body-small"
      ? "0.875rem"
      : props.variant === "caption"
      ? "0.75rem"
      : "1rem"};
  font-weight: ${(props: TypographyType) => props.fontWeight};
`;
