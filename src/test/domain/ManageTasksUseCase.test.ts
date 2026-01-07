import { describe, it, expect, beforeEach } from 'vitest';
import { ManageTasksUseCase } from '../../domain/usecases/ManageTasksUseCase';
import { LocalStorageTaskRepository } from '../../infrastructure/repositories/LocalStorageTaskRepository';
import { LocalStorageService } from '../../infrastructure/storage/LocalStorageService';

describe('ManageTasksUseCase', () => {
  let useCase: ManageTasksUseCase;
  let repository: LocalStorageTaskRepository;

  beforeEach(() => {
    LocalStorageService.clear();
    repository = new LocalStorageTaskRepository();
    useCase = new ManageTasksUseCase(repository);
  });

  it('should create a new task', async () => {
    const taskData = {
      title: 'Test Task',
      description: 'Test Description',
      completed: false,
      priority: 'medium' as const,
      pomodoroCount: 0,
      estimatedPomodoros: 2
    };

    const task = await useCase.createTask(taskData);

    expect(task).toHaveProperty('id');
    expect(task.title).toBe('Test Task');
    expect(task.completed).toBe(false);
  });

  it('should get all tasks', async () => {
    await useCase.createTask({
      title: 'Task 1',
      description: '',
      completed: false,
      priority: 'low',
      pomodoroCount: 0,
      estimatedPomodoros: 1
    });

    await useCase.createTask({
      title: 'Task 2',
      description: '',
      completed: false,
      priority: 'high',
      pomodoroCount: 0,
      estimatedPomodoros: 3
    });

    const tasks = await useCase.getTasks();
    expect(tasks).toHaveLength(2);
  });

  it('should complete a task', async () => {
    const task = await useCase.createTask({
      title: 'Task to Complete',
      description: '',
      completed: false,
      priority: 'medium',
      pomodoroCount: 0,
      estimatedPomodoros: 1
    });

    const completedTask = await useCase.completeTask(task.id);
    expect(completedTask.completed).toBe(true);
  });

  it('should increment pomodoro count', async () => {
    const task = await useCase.createTask({
      title: 'Pomodoro Task',
      description: '',
      completed: false,
      priority: 'medium',
      pomodoroCount: 0,
      estimatedPomodoros: 5
    });

    const updatedTask = await useCase.incrementPomodoro(task.id);
    expect(updatedTask.pomodoroCount).toBe(1);

    const updatedAgain = await useCase.incrementPomodoro(task.id);
    expect(updatedAgain.pomodoroCount).toBe(2);
  });

  it('should delete a task', async () => {
    const task = await useCase.createTask({
      title: 'Task to Delete',
      description: '',
      completed: false,
      priority: 'low',
      pomodoroCount: 0,
      estimatedPomodoros: 1
    });

    await useCase.deleteTask(task.id);
    const tasks = await useCase.getTasks();
    expect(tasks).toHaveLength(0);
  });
});
