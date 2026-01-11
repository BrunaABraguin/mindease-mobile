import {
  HabitsIcon,
  MissionsIcon,
  ProfileIcon,
  TaskListIcon,
  TimerIcon,
} from "@/components/tab-icons";
import { TabBarIconWrapper } from "@/components/TabBarIconWrapper";
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
          tabBarIcon: (props) => (
            <TabBarIconWrapper
              Icon={TimerIcon}
              {...props}
              colors={colors as any}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="habits"
        options={{
          title: "Hábitos",
          tabBarIcon: (props) => (
            <TabBarIconWrapper
              Icon={HabitsIcon}
              {...props}
              colors={colors as any}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="task-list"
        options={{
          title: "Tarefas",
          tabBarIcon: (props) => (
            <TabBarIconWrapper
              Icon={TaskListIcon}
              {...props}
              colors={colors as any}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="missions"
        options={{
          title: "Missões",
          tabBarIcon: (props) => (
            <TabBarIconWrapper
              Icon={MissionsIcon}
              {...props}
              colors={colors as any}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: (props) => (
            <TabBarIconWrapper
              Icon={ProfileIcon}
              {...props}
              colors={colors as any}
            />
          ),
        }}
      />
    </Tabs>
  );
}
