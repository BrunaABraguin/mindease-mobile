import {
  HabitsTab,
  MissionsTab,
  ProfileTab,
  TaskListTab,
  TimerTab,
} from "@/components/tab-icons";
import { useTheme } from "@/hooks/useTheme";
import { fontSize, spacingY } from "@/utils/theme";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background.card,
          borderTopColor: colors.border.light,
          height: spacingY._60,
        },
        tabBarActiveTintColor: colors.accent.primary,
        tabBarInactiveTintColor: colors.text.muted,
        tabBarLabelStyle: {
          fontSize: fontSize._12,
        },
      }}
    >
      <Tabs.Screen
        name="timer"
        options={{
          title: "Timer",
          tabBarIcon: TimerTab({ colors }),
        }}
      />

      <Tabs.Screen
        name="habits"
        options={{
          title: "Hábitos",
          tabBarIcon: HabitsTab({ colors }),
        }}
      />

      <Tabs.Screen
        name="task-list"
        options={{
          title: "Tarefas",
          tabBarIcon: TaskListTab({ colors }),
        }}
      />

      <Tabs.Screen
        name="missions"
        options={{
          title: "Missões",
          tabBarIcon: MissionsTab({ colors }),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ProfileTab({ colors }),
        }}
      />
    </Tabs>
  );
}
