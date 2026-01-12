import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const scheme = useColorScheme();

  return (
    <>
      <StatusBar style={scheme === "dark" ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "ios_from_right",
          gestureEnabled: true,
          animationTypeForReplace: "pop",
        }}
      >
        <Stack.Screen name="(tabs)" options={{ presentation: "card" }} />
      </Stack>
    </>
  );
}
