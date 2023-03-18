import { createContext, useState } from "react";

export const PopupContext = createContext({});

export const PopupProvider = ({ children }) => {
  const [showDesktopPopup, setShowDesktopPopup] = useState(false);
  const [showMobilePopup, setShowMobilePopup] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const globalState = {
    showDesktopPopup,
    setShowDesktopPopup,
    showMobilePopup,
    setShowMobilePopup,
    showOverlay,
    setShowOverlay,
  };

  return (
    <PopupContext.Provider value={globalState}>
      {children}
    </PopupContext.Provider>
  );
};
