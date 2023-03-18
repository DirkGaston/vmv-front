import { useContext } from "react";

import RegistrationModal from "../../../components/UI/Modals/RegistrationModal";
import MobileRegistrationModal from "../../../components/UI/Modals/MobileRegistrationModal";
import LoginForm from "./LoginForm";
import { PopupContext } from "../../../context/PopupContext";

function Login() {
  const {
    showDesktopPopup,
    setShowDesktopPopup,
    showMobilePopup,
    setShowMobilePopup,
    showOverlay,
    setShowOverlay,
  } = useContext(PopupContext);

  const handlePopup = () => {
    if (window.innerWidth >= 1024) {
      setShowDesktopPopup(!showDesktopPopup);
      setShowOverlay(!showOverlay);
    } else {
      setShowMobilePopup(!showMobilePopup);
      setShowOverlay(!showOverlay);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full lg:w-3/4 mt-10">
        <div className="font-proxima text-gray-200 text-center my-7">
          <h1 className=" font-josefin text-3xl md:text-5xl uppercase mb-7">
            Acceso a plataforma de Cantantes
          </h1>
          <p className="text-lg mx-2 md:mx-0 mb-7">
            Aquí podrás acceder a diferentes ejercicios, vocalizaciones e info
            que te ayudarán en la práctica vocal diaria. Si eres alumno regular
            de mis clases, podrás además subir tus prácticas y obtener
            correcciones para que sepas qué debes trabajar y en qué poner
            énfasis.
          </p>
        </div>
        <div className="flex justify-center">
          <LoginForm />
        </div>
        <div className="font-proxima text-gray-200 text-center my-7">
          <p className="text-lg mb-7">
            ¿Aún no tienes una cuenta? <br></br> Regístrate{" "}
            <span
              className="font-bold uppercase hover:text-amber-300 hover:underline cursor-pointer"
              onClick={handlePopup}
            >
              AQUÍ
            </span>{" "}
            para acceder a ejercicios y novedades acerca de las clases, nuevo
            contenido y presentaciones!
          </p>
        </div>
      </div>
      <div className="w-full h-full justify-center items-center">
        {showDesktopPopup && (
          <RegistrationModal
            closePopup={setShowDesktopPopup}
            closeOverlay={setShowOverlay}
          />
        )}
      </div>
      <div className="w-full h-full justify-center items-center">
        {showMobilePopup && (
          <MobileRegistrationModal
            closePopup={setShowMobilePopup}
            closeOverlay={setShowOverlay}
          />
        )}
      </div>
      {showOverlay && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-75 z-40"></div>
      )}
    </div>
  );
}

export default Login;
