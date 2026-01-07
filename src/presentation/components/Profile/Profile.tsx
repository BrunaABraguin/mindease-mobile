import React, { useState, useEffect } from 'react';
import { useUser } from '../../contexts/UserContext';
import type { AccessibilitySettings } from '../../../domain/entities/User';
import styles from './Profile.module.css';

export const Profile: React.FC = () => {
  const { user, updateAccessibilitySettings } = useUser();
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    return user?.accessibilitySettings || {
      fontSize: 'medium',
      theme: 'light',
      reduceMotion: false,
      enableScreenReader: false
    };
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // Apply settings to document
    document.documentElement.setAttribute('data-theme', settings.theme);
    document.documentElement.setAttribute('data-font-size', settings.fontSize);
    
    if (settings.reduceMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    } else {
      document.documentElement.style.removeProperty('--animation-duration');
    }
  }, [settings]);

  const handleSave = async () => {
    await updateAccessibilitySettings(settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className={styles.profile} role="main" aria-label="User Profile">
      <div className={styles.header}>
        <h1 className={styles.title}>Profile & Settings</h1>
        <p className={styles.subtitle}>
          Customize your cognitive accessibility experience
        </p>
      </div>

      <div className={styles.card} role="region" aria-labelledby="accessibility-title">
        <h2 id="accessibility-title" className={styles['card-title']}>
          ♿ Accessibility Settings
        </h2>
        
        <div className={styles['settings-group']}>
          <div className={styles['setting-item']}>
            <label htmlFor="font-size-group" className={styles['setting-label']}>
              📏 Font Size
            </label>
            <p className={styles['setting-description']}>
              Choose a comfortable reading size
            </p>
            <div className={styles['radio-group']} role="radiogroup" aria-labelledby="font-size-group">
              {(['small', 'medium', 'large', 'extra-large'] as const).map((size) => (
                <div key={size} className={styles['radio-option']}>
                  <input
                    type="radio"
                    id={`font-${size}`}
                    name="fontSize"
                    value={size}
                    checked={settings.fontSize === size}
                    onChange={(e) => setSettings({ ...settings, fontSize: e.target.value as AccessibilitySettings['fontSize'] })}
                    className={styles['radio-input']}
                  />
                  <label htmlFor={`font-${size}`} className={styles['radio-label']}>
                    {size === 'extra-large' ? 'XL' : size.charAt(0).toUpperCase() + size.slice(1)}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className={styles['setting-item']}>
            <label htmlFor="theme-group" className={styles['setting-label']}>
              🎨 Theme
            </label>
            <p className={styles['setting-description']}>
              Select a theme that works best for you
            </p>
            <div className={styles['radio-group']} role="radiogroup" aria-labelledby="theme-group">
              {(['light', 'dark', 'high-contrast'] as const).map((theme) => (
                <div key={theme} className={styles['radio-option']}>
                  <input
                    type="radio"
                    id={`theme-${theme}`}
                    name="theme"
                    value={theme}
                    checked={settings.theme === theme}
                    onChange={(e) => setSettings({ ...settings, theme: e.target.value as AccessibilitySettings['theme'] })}
                    className={styles['radio-input']}
                  />
                  <label htmlFor={`theme-${theme}`} className={styles['radio-label']}>
                    {theme.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className={styles['setting-item']}>
            <div className={styles['toggle-container']}>
              <div>
                <label htmlFor="reduce-motion" className={styles['setting-label']}>
                  🎬 Reduce Motion
                </label>
                <p className={styles['setting-description']}>
                  Minimize animations and transitions
                </p>
              </div>
              <label className={styles.toggle}>
                <input
                  id="reduce-motion"
                  type="checkbox"
                  checked={settings.reduceMotion}
                  onChange={(e) => setSettings({ ...settings, reduceMotion: e.target.checked })}
                  className={styles['toggle-input']}
                  aria-label="Toggle reduce motion"
                />
                <span className={styles['toggle-slider']}></span>
              </label>
            </div>
          </div>

          <div className={styles['setting-item']}>
            <div className={styles['toggle-container']}>
              <div>
                <label htmlFor="screen-reader" className={styles['setting-label']}>
                  🔊 Enhanced Screen Reader Support
                </label>
                <p className={styles['setting-description']}>
                  Optimize interface for screen readers
                </p>
              </div>
              <label className={styles.toggle}>
                <input
                  id="screen-reader"
                  type="checkbox"
                  checked={settings.enableScreenReader}
                  onChange={(e) => setSettings({ ...settings, enableScreenReader: e.target.checked })}
                  className={styles['toggle-input']}
                  aria-label="Toggle screen reader support"
                />
                <span className={styles['toggle-slider']}></span>
              </label>
            </div>
          </div>
        </div>

        <button
          className={styles['save-button']}
          onClick={handleSave}
          aria-label="Save accessibility settings"
        >
          💾 Save Settings
        </button>

        {saved && (
          <div className={styles['success-message']} role="status" aria-live="polite">
            ✓ Settings saved successfully!
          </div>
        )}
      </div>

      <div className={styles.card} role="region" aria-labelledby="info-title">
        <h2 id="info-title" className={styles['card-title']}>
          ℹ️ About MindEase
        </h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          MindEase is a cognitive accessibility platform designed to help you manage tasks,
          stay focused with the Pomodoro technique, and customize your workspace to match
          your needs. All settings are saved locally in your browser for privacy.
        </p>
      </div>
    </div>
  );
};
