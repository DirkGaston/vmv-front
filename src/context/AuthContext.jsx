import { createContext, useState, useEffect } from "react";
import { AESDecrypt } from "../utils/Encrypt";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    isAuthenticated: false,
    id: null,
    email: null,
  });
  const [role, setRole] = useState(null);
  const [hasToken, setHasToken] = useState(false);

  const globalState = {
    user,
    setUser,
    role,
    setRole,
    hasToken,
    setHasToken,
  };

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (token) {
      const decryptedToken = AESDecrypt(token);
      const decodedToken = jwtDecode(decryptedToken);
      const { id, email } = decodedToken;
      console.log(`User ID: ${id}`);
      setUser((prevUser) => ({
        ...prevUser,
        isAuthenticated: true,
        id: id,
        email: email,
      }));
    }
  }, [token]);

  return (
    <AuthContext.Provider value={globalState}>{children}</AuthContext.Provider>
  );
};
