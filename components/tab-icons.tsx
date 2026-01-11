import { TabIconComponent } from "@/utils/types";

import { Ionicons } from "@expo/vector-icons";

export const HabitsIcon: TabIconComponent = ({
  color,
  size,
  focused,
  colors,
}) => (
  <Ionicons
    name="checkmark-done-circle"
    size={size}
    color={focused ? colors.semantic.success : color}
  />
);

export const TimerIcon: TabIconComponent = ({
  color,
  size,
  focused,
  colors,
}) => (
  <Ionicons
    name="alarm"
    size={size}
    color={focused ? colors.cognitive.timerFocus : color}
  />
);

export const MissionsIcon: TabIconComponent = ({
  color,
  size,
  focused,
  colors,
}) => (
  <Ionicons
    name="book"
    size={size}
    color={focused ? colors.graphic.pink : color}
  />
);

export const TaskListIcon: TabIconComponent = ({
  color,
  size,
  focused,
  colors,
}) => (
  <Ionicons
    name="sparkles"
    size={size}
    color={focused ? colors.semantic.warning : color}
  />
);

export const ProfileIcon: TabIconComponent = ({
  color,
  size,
  focused,
  colors,
}) => (
  <Ionicons
    name="person"
    size={size}
    color={focused ? colors.accent.secondary : color}
  />
);
