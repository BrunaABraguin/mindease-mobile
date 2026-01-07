import type { UserRepository } from '../repositories/UserRepository';
import type { User, AccessibilitySettings } from '../entities/User';

export class ManageUserUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getUser(): Promise<User | null> {
    return this.userRepository.getUser();
  }

  async saveUser(user: User): Promise<void> {
    return this.userRepository.saveUser(user);
  }

  async updateAccessibilitySettings(settings: AccessibilitySettings): Promise<void> {
    return this.userRepository.updateAccessibilitySettings(settings);
  }
}
