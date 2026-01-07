/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { User, AccessibilitySettings } from '../../domain/entities/User';
import { ManageUserUseCase } from '../../domain/usecases/ManageUserUseCase';
import { LocalStorageUserRepository } from '../../infrastructure/repositories/LocalStorageUserRepository';

interface UserContextType {
  user: User | null;
  loading: boolean;
  updateAccessibilitySettings: (settings: AccessibilitySettings) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const userRepository = new LocalStorageUserRepository();
const manageUserUseCase = new ManageUserUseCase(userRepository);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const userData = await manageUserUseCase.getUser();
      if (!userData) {
        // Create default user
        const defaultUser: User = {
          id: crypto.randomUUID(),
          name: 'User',
          email: '',
          accessibilitySettings: {
            fontSize: 'medium',
            theme: 'light',
            reduceMotion: false,
            enableScreenReader: false
          },
          createdAt: new Date(),
          updatedAt: new Date()
        };
        await manageUserUseCase.saveUser(defaultUser);
        setUser(defaultUser);
      } else {
        setUser(userData);
      }
    } catch (error) {
      console.error('Error loading user:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateAccessibilitySettings = async (settings: AccessibilitySettings) => {
    try {
      await manageUserUseCase.updateAccessibilitySettings(settings);
      const updatedUser = await manageUserUseCase.getUser();
      setUser(updatedUser);
    } catch (error) {
      console.error('Error updating accessibility settings:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, loading, updateAccessibilitySettings }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
