import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ isAuthenticated: false });
  const [isAdmin, setIsAdmin] = useState(false);
  const [hasToken, setHasToken] = useState(false);

  const globalState = {
    user,
    setUser,
    isAdmin,
    setIsAdmin,
    hasToken,
    setHasToken,
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setUser({ isAuthenticated: true });
    }
  }, []);

  return (
    <AuthContext.Provider value={globalState}>{children}</AuthContext.Provider>
  );
};
