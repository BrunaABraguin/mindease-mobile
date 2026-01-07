import type { TaskRepository } from '../repositories/TaskRepository';
import type { Task } from '../entities/Task';

export class ManageTasksUseCase {
  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  async getTasks(): Promise<Task[]> {
    return this.taskRepository.getTasks();
  }

  async createTask(task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Promise<Task> {
    return this.taskRepository.createTask(task);
  }

  async updateTask(id: string, task: Partial<Task>): Promise<Task> {
    return this.taskRepository.updateTask(id, task);
  }

  async deleteTask(id: string): Promise<void> {
    return this.taskRepository.deleteTask(id);
  }

  async completeTask(id: string): Promise<Task> {
    return this.taskRepository.updateTask(id, { completed: true });
  }

  async incrementPomodoro(id: string): Promise<Task> {
    const task = await this.taskRepository.getTask(id);
    if (!task) throw new Error('Task not found');
    return this.taskRepository.updateTask(id, {
      pomodoroCount: task.pomodoroCount + 1
    });
  }
}
