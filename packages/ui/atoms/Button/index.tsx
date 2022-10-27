import { Typography } from "../Typography";
import { ButtonBase } from "./styles";
import { ButtonType } from "./types";

export const Button = ({
  children = "Button",
  onClick,
  variant = "primary",
  fullWidth = false,
  disabled = false,
  style,
  type = "button",
  endIcon,
  startIcon,
  className,
  buttonLabelStyle,
  ...props
}: ButtonType) => {
  return (
    <ButtonBase
      onClick={onClick}
      variant={variant}
      fullWidth={fullWidth}
      disabled={disabled}
      style={style}
      type={type}
      endIcon={endIcon}
      startIcon={startIcon}
      className={className}
      {...props}
    >
      <Typography style={buttonLabelStyle} variant="h4">
        {children}
      </Typography>
    </ButtonBase>
  );
};
