import React, { useState } from 'react';
import { useTasks } from '../../contexts/TaskContext';
import { usePomodoro } from '../../hooks/usePomodoro';
import type { Task } from '../../../domain/entities/Task';
import styles from './TaskOrganizer.module.css';

export const TaskOrganizer: React.FC = () => {
  const { tasks, createTask, deleteTask, completeTask, incrementPomodoro } = useTasks();
  const [showModal, setShowModal] = useState(false);
  const [currentTask, setCurrentTask] = useState<string | null>(null);
  const { state, minutes, seconds, isBreak, start, pause, reset, skip } = usePomodoro(25, 5);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium' as 'low' | 'medium' | 'high',
    estimatedPomodoros: 1
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createTask({
      ...formData,
      completed: false,
      pomodoroCount: 0
    });
    setFormData({
      title: '',
      description: '',
      priority: 'medium',
      estimatedPomodoros: 1
    });
    setShowModal(false);
  };

  const handleComplete = async (id: string) => {
    await completeTask(id);
  };

  const handleDelete = async (id: string) => {
    await deleteTask(id);
  };

  const handleTimerStart = () => {
    if (state === 'idle' || state === 'paused') {
      start();
    } else {
      pause();
    }
  };

  React.useEffect(() => {
    const handleComplete = async () => {
      if (state === 'idle' && minutes === 0 && seconds === 0) {
        if (currentTask && !isBreak) {
          await incrementPomodoro(currentTask);
        }
      }
    };
    handleComplete();
  }, [state, minutes, seconds, currentTask, isBreak, incrementPomodoro]);

  return (
    <div className={styles['task-organizer']} role="main" aria-label="Task Organizer">
      <div className={styles.header}>
        <h1 className={styles.title}>Task Organizer</h1>
        <button
          className={styles['add-button']}
          onClick={() => setShowModal(true)}
          aria-label="Add new task"
        >
          + Add Task
        </button>
      </div>

      <div className={styles.content}>
        <section 
          className={styles['tasks-section']}
          aria-labelledby="tasks-title"
        >
          <h2 id="tasks-title" className="sr-only">Tasks List</h2>
          <div className={styles['tasks-list']} role="list">
            {tasks.length === 0 ? (
              <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                No tasks yet. Create your first task to get started!
              </p>
            ) : (
              tasks.map((task: Task) => (
                <div
                  key={task.id}
                  className={styles['task-item']}
                  role="listitem"
                  aria-label={`Task: ${task.title}`}
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleComplete(task.id)}
                    className={styles['task-checkbox']}
                    aria-label={`Mark task "${task.title}" as ${task.completed ? 'incomplete' : 'complete'}`}
                  />
                  <div className={styles['task-content']}>
                    <h3 className={`${styles['task-title']} ${task.completed ? styles.completed : ''}`}>
                      {task.title}
                    </h3>
                    {task.description && (
                      <p className={styles['task-description']}>{task.description}</p>
                    )}
                    <div className={styles['task-meta']}>
                      <span className={`${styles.priority} ${styles[task.priority]}`}>
                        {task.priority}
                      </span>
                      <span>🍅 {task.pomodoroCount}/{task.estimatedPomodoros}</span>
                    </div>
                  </div>
                  <div className={styles['task-actions']}>
                    <button
                      className={styles['icon-button']}
                      onClick={() => {
                        setCurrentTask(task.id);
                      }}
                      aria-label={`Start pomodoro for task "${task.title}"`}
                      title="Start Pomodoro"
                    >
                      🍅
                    </button>
                    <button
                      className={styles['icon-button']}
                      onClick={() => handleDelete(task.id)}
                      aria-label={`Delete task "${task.title}"`}
                      title="Delete task"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        <aside 
          className={styles['pomodoro-section']}
          aria-labelledby="pomodoro-title"
        >
          <h2 id="pomodoro-title" className={styles['pomodoro-title']}>
            Pomodoro Timer
          </h2>
          <div className={styles['pomodoro-timer']}>
            <div 
              className={`${styles['timer-display']} ${isBreak ? styles.break : ''}`}
              role="timer"
              aria-live="polite"
              aria-label={`${minutes} minutes and ${seconds} seconds remaining`}
            >
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </div>
            <p className={styles['timer-status']}>
              {isBreak ? '☕ Break Time' : '🎯 Focus Time'}
            </p>
            {currentTask && (
              <p style={{ fontSize: 'var(--font-sm)', color: 'var(--text-secondary)', textAlign: 'center' }}>
                Working on: {tasks.find(t => t.id === currentTask)?.title}
              </p>
            )}
            <div className={styles['timer-controls']}>
              <button
                className={`${styles['timer-button']} ${styles.primary}`}
                onClick={handleTimerStart}
                aria-label={state === 'running' ? 'Pause timer' : 'Start timer'}
              >
                {state === 'running' ? '⏸️ Pause' : '▶️ Start'}
              </button>
              <button
                className={`${styles['timer-button']} ${styles.secondary}`}
                onClick={reset}
                aria-label="Reset timer"
              >
                🔄 Reset
              </button>
              <button
                className={`${styles['timer-button']} ${styles.secondary}`}
                onClick={skip}
                aria-label="Skip to next session"
              >
                ⏭️ Skip
              </button>
            </div>
          </div>
        </aside>
      </div>

      {showModal && (
        <div 
          className={styles['modal-overlay']}
          onClick={() => setShowModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2 id="modal-title" className={styles['modal-title']}>Create New Task</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles['form-group']}>
                <label htmlFor="task-title" className={styles['form-label']}>
                  Title *
                </label>
                <input
                  id="task-title"
                  type="text"
                  className={styles['form-input']}
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  autoFocus
                />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="task-description" className={styles['form-label']}>
                  Description
                </label>
                <textarea
                  id="task-description"
                  className={styles['form-textarea']}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="task-priority" className={styles['form-label']}>
                  Priority
                </label>
                <select
                  id="task-priority"
                  className={styles['form-select']}
                  value={formData.priority}
                  onChange={(e) => setFormData({ ...formData, priority: e.target.value as 'low' | 'medium' | 'high' })}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="task-pomodoros" className={styles['form-label']}>
                  Estimated Pomodoros
                </label>
                <input
                  id="task-pomodoros"
                  type="number"
                  min="1"
                  className={styles['form-input']}
                  value={formData.estimatedPomodoros}
                  onChange={(e) => setFormData({ ...formData, estimatedPomodoros: parseInt(e.target.value) })}
                />
              </div>
              <div className={styles['form-actions']}>
                <button
                  type="button"
                  className={`${styles['timer-button']} ${styles.secondary}`}
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`${styles['timer-button']} ${styles.primary}`}
                >
                  Create Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
