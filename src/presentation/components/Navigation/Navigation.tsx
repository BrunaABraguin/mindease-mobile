import React from 'react';
import styles from './Navigation.module.css';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  return (
    <nav className={styles.nav} role="navigation" aria-label="Main navigation">
      <div className={styles['nav-container']}>
        <a href="#" className={styles.brand} onClick={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>
          🧠 MindEase
        </a>
        <ul className={styles['nav-links']}>
          <li>
            <a
              href="#dashboard"
              className={`${styles['nav-link']} ${currentPage === 'dashboard' ? styles.active : ''}`}
              onClick={(e) => { e.preventDefault(); onNavigate('dashboard'); }}
              aria-current={currentPage === 'dashboard' ? 'page' : undefined}
            >
              📊 Dashboard
            </a>
          </li>
          <li>
            <a
              href="#tasks"
              className={`${styles['nav-link']} ${currentPage === 'tasks' ? styles.active : ''}`}
              onClick={(e) => { e.preventDefault(); onNavigate('tasks'); }}
              aria-current={currentPage === 'tasks' ? 'page' : undefined}
            >
              ✓ Tasks
            </a>
          </li>
          <li>
            <a
              href="#profile"
              className={`${styles['nav-link']} ${currentPage === 'profile' ? styles.active : ''}`}
              onClick={(e) => { e.preventDefault(); onNavigate('profile'); }}
              aria-current={currentPage === 'profile' ? 'page' : undefined}
            >
              ⚙️ Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
