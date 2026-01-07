import type { User, AccessibilitySettings } from '../entities/User';

export interface UserRepository {
  getUser(): Promise<User | null>;
  saveUser(user: User): Promise<void>;
  updateAccessibilitySettings(settings: AccessibilitySettings): Promise<void>;
}
