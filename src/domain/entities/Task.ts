export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  pomodoroCount: number;
  estimatedPomodoros: number;
  createdAt: Date;
  updatedAt: Date;
}
