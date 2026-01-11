import { useThemeStore } from "@/stores/themeStore";
import { getAdaptiveColors, type CognitiveMode } from "@/utils/theme";
import { useMemo } from "react";

export function useTheme(cognitiveMode: CognitiveMode = "standard") {
  const { mode } = useThemeStore();

  const colors = useMemo(
    () => getAdaptiveColors(mode === "dark", cognitiveMode),
    [mode, cognitiveMode]
  );

  return {
    colors,
    mode,
  };
}
