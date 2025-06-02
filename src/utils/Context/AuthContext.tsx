import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  accountRole: "student" | "company";
  setAccountRole: (newValue: "student" | "company") => void;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [accountRole, setAccountRole] = useState<"student" | "company">("student")

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, accountRole, setAccountRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
