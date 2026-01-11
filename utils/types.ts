import { JSX } from "react";
import { lightColors } from "./theme";

export type Colors = typeof lightColors;

export type TabIconProps = {
  color: string;
  size: number;
  focused: boolean;
  colors: Colors;
};

export type TabIconComponent = (props: TabIconProps) => JSX.Element;
