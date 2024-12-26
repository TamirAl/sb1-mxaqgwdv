import { createContext, useContext } from 'react';
import { supabase } from './supabase';

export async function loginWithCredentials(email: string, password: string) {
  return supabase.auth.signInWithPassword({ email, password });
}

export async function logout() {
  return supabase.auth.signOut();
}

export type AuthContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isLoading: true,
});