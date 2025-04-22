import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthContextType } from '../types';

// Create mock users for demo purposes
const mockUsers = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'password123',
    isAdmin: true
  },
  {
    id: '2',
    name: 'Test User',
    email: 'test@example.com',
    password: 'password123'
  }
];

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => {},
  register: async () => {},
  logout: () => {}
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already logged in from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Find user with matching email and password
    const foundUser = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      // Create a user object without the password
      const { password: _, ...safeUserData } = foundUser;
      setUser(safeUserData);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(safeUserData));
    } else {
      throw new Error('Invalid email or password');
    }
  };

  const register = async (name: string, email: string, password: string): Promise<void> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check if user already exists
    const existingUser = mockUsers.find((u) => u.email === email);
    if (existingUser) {
      throw new Error('Email already in use');
    }

    // Create new user (in a real app, this would be saved to a database)
    const newUser = {
      id: String(mockUsers.length + 1),
      name,
      email,
      password,
    };

    // Add to mock users (for demo purposes only)
    mockUsers.push(newUser);

    // Log in the new user
    const { password: _, ...safeUserData } = newUser;
    setUser(safeUserData);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(safeUserData));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};