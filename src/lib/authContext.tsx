'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { User } from '@/types/auth';
import { MockAuthService } from '@/lib/mockAuth';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  checkSession: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const checkSession = () => {
    try {
      const sessionData = localStorage.getItem('session');
      if (!sessionData) {
        setUser(null);
        setIsLoading(false);
        return;
      }

      const session = JSON.parse(sessionData);
      const expiresAt = new Date(session.expiresAt);
      const now = new Date();

      // Check if session expired
      if (now > expiresAt) {
        localStorage.removeItem('session');
        localStorage.removeItem('currentUser');
        setUser(null);
        
        // Redirect to login if on protected route
        if (pathname?.startsWith('/admin')) {
          router.push('/login');
        }
        setIsLoading(false);
        return;
      }

      // Session is valid
      const currentUser = MockAuthService.getCurrentUser();
      setUser(currentUser);
      setIsLoading(false);
    } catch (error) {
      console.error('Session check error:', error);
      setUser(null);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkSession();
    
    // Check session every minute
    const interval = setInterval(checkSession, 60000);
    
    return () => clearInterval(interval);
  }, [pathname]);

  const login = async (email: string, password: string) => {
    const userData = await MockAuthService.login({ email, password });
    
    // Create session with 2 hour expiry
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 2);
    
    localStorage.setItem('session', JSON.stringify({
      userId: userData.id,
      expiresAt: expiresAt.toISOString(),
      createdAt: new Date().toISOString(),
    }));
    
    setUser(userData);
  };

  const logout = () => {
    MockAuthService.logout();
    localStorage.removeItem('session');
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, logout, checkSession }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}