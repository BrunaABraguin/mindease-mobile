import React from 'react';
import { useTasks } from '../../contexts/TaskContext';
import styles from './Dashboard.module.css';

export const Dashboard: React.FC = () => {
  const { tasks } = useTasks();

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalPomodoros = tasks.reduce((sum, task) => sum + task.pomodoroCount, 0);
  const pendingTasks = tasks.filter(task => !task.completed).length;

  return (
    <div className={styles.dashboard} role="main" aria-label="Cognitive Dashboard">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div id="main-content" className={styles['dashboard-header']}>
        <h1 className={styles['dashboard-title']}>MindEase Dashboard</h1>
        <p className={styles['dashboard-subtitle']}>
          Your personalized cognitive accessibility workspace
        </p>
      </div>

      <div className={styles['dashboard-panels']} role="region" aria-label="Dashboard panels">
        <section 
          className={styles.panel}
          aria-labelledby="tasks-panel-title"
        >
          <div className={styles['panel-header']}>
            <h2 id="tasks-panel-title" className={styles['panel-title']}>
              📋 Tasks Overview
            </h2>
          </div>
          <div className={styles['panel-content']}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <div>
                <p style={{ fontSize: 'var(--font-xl)', fontWeight: 'bold' }}>
                  {tasks.length}
                </p>
                <p style={{ color: 'var(--text-secondary)' }}>Total tasks</p>
              </div>
              <div>
                <p style={{ fontSize: 'var(--font-xl)', fontWeight: 'bold', color: 'var(--color-secondary)' }}>
                  {completedTasks}
                </p>
                <p style={{ color: 'var(--text-secondary)' }}>Completed</p>
              </div>
              <div>
                <p style={{ fontSize: 'var(--font-xl)', fontWeight: 'bold', color: 'var(--color-warning)' }}>
                  {pendingTasks}
                </p>
                <p style={{ color: 'var(--text-secondary)' }}>Pending</p>
              </div>
            </div>
          </div>
        </section>

        <section 
          className={styles.panel}
          aria-labelledby="pomodoro-panel-title"
        >
          <div className={styles['panel-header']}>
            <h2 id="pomodoro-panel-title" className={styles['panel-title']}>
              🍅 Pomodoro Stats
            </h2>
          </div>
          <div className={styles['panel-content']}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <div>
                <p style={{ fontSize: 'var(--font-xl)', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                  {totalPomodoros}
                </p>
                <p style={{ color: 'var(--text-secondary)' }}>Completed pomodoros</p>
              </div>
              <div>
                <p style={{ fontSize: 'var(--font-xl)', fontWeight: 'bold' }}>
                  {Math.round(totalPomodoros * 25 / 60)}h
                </p>
                <p style={{ color: 'var(--text-secondary)' }}>Focus time</p>
              </div>
            </div>
          </div>
        </section>

        <section 
          className={styles.panel}
          aria-labelledby="focus-panel-title"
        >
          <div className={styles['panel-header']}>
            <h2 id="focus-panel-title" className={styles['panel-title']}>
              🎯 Focus Tips
            </h2>
          </div>
          <div className={styles['panel-content']}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <li>✨ Take regular breaks</li>
              <li>💧 Stay hydrated</li>
              <li>🧘 Practice mindfulness</li>
              <li>📱 Minimize distractions</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
