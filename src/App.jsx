import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { NavbarProvider } from "./context/NavbarContext";
import { AuthProvider } from "./context/AuthContext";
import { ExerciseProvider } from "./context/ExerciseContext";
import { PopupProvider } from "./context/PopupContext";

import PageLayout from "./layout/PageLayout";

const App = () => {
  return (
    <div className="App">
      <div className="main"></div>
      <NavbarProvider>
        <AuthProvider>
          <ExerciseProvider>
            <PopupProvider>
              <BrowserRouter>
                <PageLayout />
              </BrowserRouter>
            </PopupProvider>
          </ExerciseProvider>
        </AuthProvider>
      </NavbarProvider>
    </div>
  );
};

export default App;
