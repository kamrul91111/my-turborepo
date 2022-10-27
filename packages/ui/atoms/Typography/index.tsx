import { TypographyBase } from "./styles";
import { TypographyType } from "./types";

export const Typography = ({
  children = "Typoography",
  variant = "h1",
  color = "black",
  style,
  className,
  fontWeight = 400,
}: TypographyType) => {
  return (
    <TypographyBase
      style={style}
      className={className}
      color={color}
      variant={variant}
      fontWeight={fontWeight}
    >
      {children}
    </TypographyBase>
  );
};
