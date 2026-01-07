import type { TaskRepository } from '../../domain/repositories/TaskRepository';
import type { Task } from '../../domain/entities/Task';
import { LocalStorageService } from '../storage/LocalStorageService';

export class LocalStorageTaskRepository implements TaskRepository {
  private readonly STORAGE_KEY = 'tasks';

  async getTasks(): Promise<Task[]> {
    const tasks = LocalStorageService.get<Task[]>(this.STORAGE_KEY) || [];
    return tasks.map(task => ({
      ...task,
      createdAt: new Date(task.createdAt),
      updatedAt: new Date(task.updatedAt)
    }));
  }

  async getTask(id: string): Promise<Task | null> {
    const tasks = await this.getTasks();
    return tasks.find(task => task.id === id) || null;
  }

  async createTask(taskData: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Promise<Task> {
    const tasks = await this.getTasks();
    const newTask: Task = {
      ...taskData,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    tasks.push(newTask);
    LocalStorageService.set(this.STORAGE_KEY, tasks);
    return newTask;
  }

  async updateTask(id: string, taskData: Partial<Task>): Promise<Task> {
    const tasks = await this.getTasks();
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) throw new Error('Task not found');
    
    const updatedTask = {
      ...tasks[index],
      ...taskData,
      updatedAt: new Date()
    };
    tasks[index] = updatedTask;
    LocalStorageService.set(this.STORAGE_KEY, tasks);
    return updatedTask;
  }

  async deleteTask(id: string): Promise<void> {
    const tasks = await this.getTasks();
    const filteredTasks = tasks.filter(task => task.id !== id);
    LocalStorageService.set(this.STORAGE_KEY, filteredTasks);
  }
}
