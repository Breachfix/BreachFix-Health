import { createContext, useContext, useEffect, useState } from 'react';
import {
  login,
  logout,
  fetchUserProfile,
  signup,
} from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeUser = async () => {
      try {
        const profile = await fetchUserProfile();
        setUser(profile);
        setIsAuthenticated(true);
      } catch (err) {
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    initializeUser();
  }, []);

  const handleLogin = async (credentials) => {
    const result = await login(credentials);
    if (result.success && !result.twoFactorRequired) {
      const profile = await fetchUserProfile();
      setUser(profile);
      setIsAuthenticated(true);
    }
    return result;
  };

  const handleSignup = async (userData) => {
    const response = await signup(userData);
    return response;
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        handleLogin,
        handleLogout,
        handleSignup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
