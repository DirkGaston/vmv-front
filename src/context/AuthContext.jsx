import { createContext, useState, useEffect } from "react";
import { AESDecrypt } from "../utils/Encrypt";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    isAuthenticated: false,
    id: null,
    role: null,
    email: null,
    username: null,
    firstName: null,
  });

  const [hasToken, setHasToken] = useState(false);

  const globalState = {
    user,
    setUser,
    hasToken,
    setHasToken,
  };

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (token) {
      const decryptedToken = AESDecrypt(token);
      const decodedToken = jwtDecode(decryptedToken);
      const { id, email, role, username, firstName } = decodedToken;
      setUser((prevUser) => ({
        ...prevUser,
        isAuthenticated: true,
        id: id,
        email: email,
        role: role,
        username: username,
        firstName: firstName,
      }));
    }
  }, [token]);

  return (
    <AuthContext.Provider value={globalState}>{children}</AuthContext.Provider>
  );
};
