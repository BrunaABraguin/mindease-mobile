import { useTheme } from "@/hooks/useTheme";
import { spacingX } from "@/utils/theme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View } from "react-native";

interface ScreenWrapperProps {
  children: React.ReactNode;
}

const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
  const { colors, mode } = useTheme();

  const lightGradient = [
    colors.background.info,
    colors.background.focus,
    colors.background.secondary,
  ] as const;

  const darkGradient = [
    colors.background.primary,
    colors.background.surface,
    colors.background.card,
  ] as const;

  return (
    <LinearGradient
      colors={mode === "dark" ? darkGradient : lightGradient}
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          padding: spacingX._25,
        }}
      >
        {children}
      </View>
    </LinearGradient>
  );
};

export default ScreenWrapper;
