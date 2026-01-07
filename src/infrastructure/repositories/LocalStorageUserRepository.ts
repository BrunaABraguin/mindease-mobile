import type { UserRepository } from '../../domain/repositories/UserRepository';
import type { User, AccessibilitySettings } from '../../domain/entities/User';
import { LocalStorageService } from '../storage/LocalStorageService';

export class LocalStorageUserRepository implements UserRepository {
  private readonly STORAGE_KEY = 'user';

  async getUser(): Promise<User | null> {
    const user = LocalStorageService.get<User>(this.STORAGE_KEY);
    if (!user) return null;
    return {
      ...user,
      createdAt: new Date(user.createdAt),
      updatedAt: new Date(user.updatedAt)
    };
  }

  async saveUser(user: User): Promise<void> {
    LocalStorageService.set(this.STORAGE_KEY, user);
  }

  async updateAccessibilitySettings(settings: AccessibilitySettings): Promise<void> {
    const user = await this.getUser();
    if (!user) {
      // Create default user if none exists
      const defaultUser: User = {
        id: crypto.randomUUID(),
        name: 'User',
        email: '',
        accessibilitySettings: settings,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      await this.saveUser(defaultUser);
    } else {
      user.accessibilitySettings = settings;
      user.updatedAt = new Date();
      await this.saveUser(user);
    }
  }
}
