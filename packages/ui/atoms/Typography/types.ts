import { ReactNode } from "react";

export interface TypographyType {
  /**
   * Sets the content inside of our Typography
   */
  children: ReactNode;
  /**
   * color property of font
   */
  color?: string;
  /**
   * Sets which HTML Tag or variant to be used
   */
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "label"
    | "p"
    | "caption"
    | "body-small"
    | "body-large";
  /**
   * Custom Style
   */
  style?: React.CSSProperties;
  /**
   * class
   */
  className?: string;
  /**
   * Directly pass the weight of the font
   */
  fontWeight?: number;
}
