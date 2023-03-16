import "./index.css";

import { BrowserRouter } from "react-router-dom";

import axios from "axios";
import PageLayout from "./layout/PageLayout";

import { useState, useEffect } from "react";
import Context from "./context/Context";

const App = () => {
  const [exercises, setExercises] = useState([]);
  const [showDesktopPopup, setShowDesktopPopup] = useState(false);
  const [showMobilePopup, setShowMobilePopup] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(null);

  const globalState = {
    exercises,
    setExercises,
    showDesktopPopup,
    setShowDesktopPopup,
    showMobilePopup,
    setShowMobilePopup,
    showOverlay,
    setShowOverlay,
    isLoggedIn,
    setisLoggedIn,
  };

  useEffect(() => {
    axios.get("/exercises.json").then((res) => {
      setExercises(res.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="main"></div>
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <PageLayout />
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
};

export default App;
