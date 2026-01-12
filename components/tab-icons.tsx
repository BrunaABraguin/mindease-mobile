import { TabIconComponent } from "@/utils/types";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { TabBarIconWrapper } from "./TabBarIconWrapper";

export const HabitsIcon: TabIconComponent = ({
  color,
  size,
  focused,
  colors,
}) => (
  <Ionicons
    name="checkmark-done-circle"
    size={size}
    color={focused ? colors.graphic.gold : color}
  />
);

export const TimerIcon: TabIconComponent = ({
  color,
  size,
  focused,
  colors,
}) => (
  <MaterialIcons
    name="timer"
    size={size}
    color={focused ? colors.graphic.gold : color}
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
    color={focused ? colors.graphic.gold : color}
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
    color={focused ? colors.graphic.gold : color}
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
    color={focused ? colors.graphic.gold : color}
  />
);

const TimerTabIcon = (props: any) => (
  <TabBarIconWrapper Icon={TimerIcon} {...props} colors={props.colors} />
);

const HabitsTabIcon = (props: any) => (
  <TabBarIconWrapper Icon={HabitsIcon} {...props} colors={props.colors} />
);

const TaskListTabIcon = (props: any) => (
  <TabBarIconWrapper Icon={TaskListIcon} {...props} colors={props.colors} />
);

const MissionsTabIcon = (props: any) => (
  <TabBarIconWrapper Icon={MissionsIcon} {...props} colors={props.colors} />
);

const ProfileTabIcon = (props: any) => (
  <TabBarIconWrapper Icon={ProfileIcon} {...props} colors={props.colors} />
);

export const TimerTab = ({ colors }: { colors: any }) => {
  const Component = (props: any) => <TimerTabIcon {...props} colors={colors} />;
  Component.displayName = "TimerTab";
  return Component;
};

export const HabitsTab = ({ colors }: { colors: any }) => {
  const Component = (props: any) => (
    <HabitsTabIcon {...props} colors={colors} />
  );
  Component.displayName = "HabitsTab";
  return Component;
};

export const TaskListTab = ({ colors }: { colors: any }) => {
  const Component = (props: any) => (
    <TaskListTabIcon {...props} colors={colors} />
  );
  Component.displayName = "TaskListTab";
  return Component;
};

export const MissionsTab = ({ colors }: { colors: any }) => {
  const Component = (props: any) => (
    <MissionsTabIcon {...props} colors={colors} />
  );
  Component.displayName = "MissionsTab";
  return Component;
};

export const ProfileTab = ({ colors }: { colors: any }) => {
  const Component = (props: any) => (
    <ProfileTabIcon {...props} colors={colors} />
  );
  Component.displayName = "ProfileTab";
  return Component;
};
