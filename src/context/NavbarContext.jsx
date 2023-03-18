import { createContext, useState } from "react";

export const NavbarContext = createContext({});

export const NavbarProvider = ({ children }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const globalState = {
    navbarOpen,
    setNavbarOpen,
  };

  return (
    <NavbarContext.Provider value={globalState}>
      {children}
    </NavbarContext.Provider>
  );
};
