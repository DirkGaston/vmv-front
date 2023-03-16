import "../../assets/css/RegistrationModal.css";
import CTAButton from "../Buttons/CTAButton";

function RegistrationModal(props) {
  const handleClosePopup = () => {
    props.closePopup(false);
    props.closeOverlay(false);
  };
  return (
    <div
      id="popupModal"
      className="registration-modal flex items-center bg-white rounded-[35px] fixed top-0 left-0 right-0 z-50 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] md:h-full backdrop-blur-sm"
    >
      <div className="w-2/5 modal-photo"></div>
      <div className="flex flex-col w-3/5 modal-form justify-center">
        <button
          type="button"
          className="text-gray-400 close-modal-button bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mr-3 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={handleClosePopup}
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <h1 className="font-josefin text-indigo-900 font-bold text-4xl uppercase px-5">
          REGÍSTRATE AQUÍ
        </h1>
        <p className="font-proxima py- px-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          doloremque sed eos unde et totam?
        </p>
        <p className="font-proxima py-3 px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem
          dolorum, similique, est unde dolor et maiores repellendus recusandae
        </p>

        <form method="POST" action="#login">
          <div className="mb-8 px-5">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              <span className="text-red-500">&nbsp;*</span>
              Nombre
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
              />
            </div>
          </div>

          <div className="mb-8 px-5">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
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
              className="block text-gray-700 text-sm font-bold mb-2"
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
            <button
              type="button"
              className="shadow-md font-regular font-proxima py-2 px-7 text-white cursor-pointer bg-yellow-600 hover:bg-yellow-500 rounded text-lg text-center"
            >
              🎤
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationModal;
