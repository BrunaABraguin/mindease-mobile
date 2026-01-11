import { useTheme } from "@/hooks/useTheme";
import { spacingX } from "@/utils/theme";
import React from "react";
import { View } from "react-native";

interface ScreenWrapperProps {
  children: React.ReactNode;
}

const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background.primary,
        padding: spacingX._25,
      }}
    >
      {children}
    </View>
  );
};

export default ScreenWrapper;
