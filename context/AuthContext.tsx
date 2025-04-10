// context/AuthContext.tsx
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useMemo,
} from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void; // Simulate successful login
  logout: () => void; // Simulate logout
}

// Create the context with a default value (or null)
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

// Create the provider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // Simulate authentication state - initially not logged in
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulate login function
  const login = () => {
    console.log('Simulating successful login...');
    setIsAuthenticated(true);
  };

  // Simulate logout function
  const logout = () => {
    console.log('Simulating logout...');
    setIsAuthenticated(false);
  };

  // Use useMemo to prevent unnecessary re-renders of consumers
  const value = useMemo(
    () => ({
      isAuthenticated,
      login,
      logout,
    }),
    [isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Create a custom hook for easy access to the context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
