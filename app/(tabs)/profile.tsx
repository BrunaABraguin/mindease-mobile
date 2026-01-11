import ScreenWrapper from "@/components/ScreenWrapper";
import { useTheme } from "@/hooks/useTheme";
import { useThemeStore } from "@/stores/themeStore";
import { fontSize, fontWeight, spacingX } from "@/utils/theme";
import { Pressable, Text } from "react-native";

export default function ProfileScreen() {
  const { mode, setMode } = useThemeStore();
  const { colors } = useTheme();

  return (
    <ScreenWrapper>
      <Text
        style={{
          color: colors.text.primary,
          fontSize: fontSize._20,
          fontWeight: fontWeight._600,
        }}
      >
        Profile
      </Text>
      <Pressable
        onPress={() => setMode(mode === "dark" ? "light" : "dark")}
        style={{
          padding: spacingX._12,
          backgroundColor: colors.background.card,
          borderRadius: spacingX._12,
        }}
        accessibilityRole="button"
        accessibilityLabel="Alternar tema"
      >
        <Text style={{ color: colors.text.primary }}>Alternar tema</Text>
      </Pressable>
    </ScreenWrapper>
  );
}
