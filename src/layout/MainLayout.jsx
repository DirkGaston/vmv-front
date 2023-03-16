import { Routes, Route } from "react-router-dom";
import Home from "../views/Home/Home";
import Bio from "../views/Bio/Bio";
import Class from "../views/Class/Class";
import PlatformHome from "../views/Platform/PlatformHome";
import ExerciseGallery from "../views/Platform/ExerciseGallery";
import ExerciseView from "../views/Platform/ExerciseView";
import AdminView from "../views/Admin/Admin";
import UserProfile from "../views/Profile/UserProfile";
import Protected from "./Protected";
import { useContext } from "react";
import Context from "../context/Context";

function MainLayout() {
  const context = useContext(Context);

  const { isLoggedIn, setisLoggedIn } = useContext(Context);
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/bio" element={<Bio />} />
        <Route exact path="/clases" element={<Class />} />
        <Route exact path="/plataforma" element={<PlatformHome />} />
        <Route exact path="/ejercicios" element={<ExerciseGallery />} />
        <Route exact path="/ejercicio/:id" element={<ExerciseView />} />
        <Route
          exact
          path="/user"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <UserProfile />
            </Protected>
          }
        />
        <Route exact path="/admin" element={<AdminView />} />
      </Routes>
    </div>
  );
}

export default MainLayout;
