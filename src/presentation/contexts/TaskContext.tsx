/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Task } from '../../domain/entities/Task';
import { ManageTasksUseCase } from '../../domain/usecases/ManageTasksUseCase';
import { LocalStorageTaskRepository } from '../../infrastructure/repositories/LocalStorageTaskRepository';

interface TaskContextType {
  tasks: Task[];
  loading: boolean;
  createTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateTask: (id: string, task: Partial<Task>) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  completeTask: (id: string) => Promise<void>;
  incrementPomodoro: (id: string) => Promise<void>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

const taskRepository = new LocalStorageTaskRepository();
const manageTasksUseCase = new ManageTasksUseCase(taskRepository);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const taskList = await manageTasksUseCase.getTasks();
      setTasks(taskList);
    } catch (error) {
      console.error('Error loading tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const createTask = async (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      await manageTasksUseCase.createTask(task);
      await loadTasks();
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const updateTask = async (id: string, task: Partial<Task>) => {
    try {
      await manageTasksUseCase.updateTask(id, task);
      await loadTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await manageTasksUseCase.deleteTask(id);
      await loadTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const completeTask = async (id: string) => {
    try {
      await manageTasksUseCase.completeTask(id);
      await loadTasks();
    } catch (error) {
      console.error('Error completing task:', error);
    }
  };

  const incrementPomodoro = async (id: string) => {
    try {
      await manageTasksUseCase.incrementPomodoro(id);
      await loadTasks();
    } catch (error) {
      console.error('Error incrementing pomodoro:', error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        createTask,
        updateTask,
        deleteTask,
        completeTask,
        incrementPomodoro
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};
