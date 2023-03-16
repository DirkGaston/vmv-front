import { useContext } from "react";
import { Link } from "react-router-dom";
import RegistrationModal from "../../components/Modals/RegistrationModal";
import MobileRegistrationModal from "../../components/Modals/MobileRegistrationModal";
import Context from "../../context/Context";

function PlatformHome() {
  const context = useContext(Context);

  const {
    showDesktopPopup,
    setShowDesktopPopup,
    showMobilePopup,
    setShowMobilePopup,
    showOverlay,
    setShowOverlay,
    isLoggedIn,
    setisLoggedIn,
  } = useContext(Context);

  const handlePopup = () => {
    if (window.innerWidth >= 1024) {
      setShowDesktopPopup(!showDesktopPopup);
      setShowOverlay(!showOverlay);
    } else {
      setShowMobilePopup(!showMobilePopup);
      setShowOverlay(!showOverlay);
    }
  };

  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
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
          <form method="POST" action="#login" className="w-[500px]">
            <div className="mb-8 px-5">
              <label
                htmlFor="username"
                className="block text-gray-200 text-sm font-bold mb-2 font-josefin"
              >
                <span className="text-red-500">&nbsp;*</span>
                Correo Electrónico
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <input
                  id="username"
                  className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="mb-8 px-5">
              <label
                htmlFor="password"
                className="block text-gray-200 text-sm font-bold mb-2 font-josefin"
              >
                <span className="text-red-500">&nbsp;*</span>
                Contraseña
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <input
                  name="password"
                  id="password"
                  type="text"
                  className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                />
              </div>
            </div>
            <div className="flex justify-center">
              {isLoggedIn ? (
                <Link to="/user">
                  <button
                    type="button"
                    className="shadow-md font-regular font-proxima py-2 px-7 text-white cursor-pointer bg-gray-400 hover:bg-gray-300 rounded text-lg text-center"
                    onClick={logOut}
                  >
                    Log Out
                  </button>
                </Link>
              ) : (
                <Link to="/user">
                  <button
                    type="button"
                    className="shadow-md font-regular font-proxima py-2 px-7 text-white cursor-pointer bg-gray-400 hover:bg-gray-300 rounded text-lg text-center"
                    onClick={logIn}
                  >
                    Log In
                  </button>
                </Link>
              )}
            </div>
          </form>
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

export default PlatformHome;
