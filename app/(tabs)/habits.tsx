import ScreenWrapper from "@/components/ScreenWrapper";
import { useTheme } from "@/hooks/useTheme";
import { fontSize, fontWeight } from "@/utils/theme";
import { Text } from "react-native";

export default function HabitsScreen() {
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
        Hábitos
      </Text>
    </ScreenWrapper>
  );
}
