import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className={styles.nav} role="navigation" aria-label="Main navigation">
      <div className={styles['nav-container']}>
        <Link to="/dashboard" className={styles.brand}>
          🧠 MindEase
        </Link>
        <ul className={styles['nav-links']}>
          <li>
            <Link
              to="/dashboard"
              className={`${styles['nav-link']} ${currentPath === '/dashboard' ? styles.active : ''}`}
              aria-current={currentPath === '/dashboard' ? 'page' : undefined}
            >
              📊 Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/tasks"
              className={`${styles['nav-link']} ${currentPath === '/tasks' ? styles.active : ''}`}
              aria-current={currentPath === '/tasks' ? 'page' : undefined}
            >
              ✓ Tasks
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className={`${styles['nav-link']} ${currentPath === '/profile' ? styles.active : ''}`}
              aria-current={currentPath === '/profile' ? 'page' : undefined}
            >
              ⚙️ Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
