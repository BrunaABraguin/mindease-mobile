import { Colors, TabIconComponent } from "@/utils/types";

type TabBarIconWrapperProps = {
  Icon: TabIconComponent;
  color: string;
  size: number;
  focused: boolean;
  colors: Colors;
};

export function TabBarIconWrapper({
  Icon,
  color,
  size,
  focused,
  colors,
}: Readonly<TabBarIconWrapperProps>) {
  return <Icon color={color} size={size} focused={focused} colors={colors} />;
}
