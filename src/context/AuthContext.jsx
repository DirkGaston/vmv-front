import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ isAuthenticated: false });

  const globalState = {
    user,
    setUser,
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
