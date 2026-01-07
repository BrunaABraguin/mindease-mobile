export interface DashboardPanel {
  id: string;
  type: 'tasks' | 'pomodoro' | 'focus' | 'stats';
  position: number;
  visible: boolean;
  settings: Record<string, unknown>;
}
