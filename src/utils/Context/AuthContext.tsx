import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import API from "../API";

interface AuthContextType {
  isAuthenticated: boolean;
  accountRole: "student" | "company";
  setAccountRole: (newValue: "student" | "company") => void;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accountRole, setAccountRole] = useState<"student" | "company">("student")
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);
  const api = new API();

  useEffect(() => {
    // api.postData(api.authUrl + "/api/auth/register", {

    // }, false)
    fetch(api.authUrl + "/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-api-key": "sourcing_key_ftd237sourcingkey"
      }
    })
      .then((res) => {
        console.log(res)
      }).catch((err) => {
        throw new Error(err);
      })
  }, []);

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
