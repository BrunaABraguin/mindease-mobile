export interface AccessibilitySettings {
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
  theme: 'light' | 'dark' | 'high-contrast';
  reduceMotion: boolean;
  enableScreenReader: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  accessibilitySettings: AccessibilitySettings;
  createdAt: Date;
  updatedAt: Date;
}
