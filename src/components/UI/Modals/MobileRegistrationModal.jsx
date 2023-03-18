import "../../../assets/css/RegistrationModal.css";
import Cross from "../../Icons/CrossIcon";
import UserIcon from "../../Icons/UserIcon";
import LockIcon from "../../Icons/LockIcon";

function MobileRegistrationModal(props) {
  const handleClosePopup = () => {
    props.closePopup(false);
    props.closeOverlay(false);
  };
  return (
    <div
      id="popupModal"
      className="registration-modal flex flex-col justify-center items-center bg-white rounded-[35px] fixed top-0 left-0 right-0 z-50 overflow-x-hidden overflow-y-auto"
    >
      <div className="flex flex-col modal-form justify-center items-center">
        <button
          type="button"
          className="text-gray-400 close-modal-button bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mr-3 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={handleClosePopup}
        >
          <Cross />
        </button>
        <h1 className="font-josefin text-indigo-900 font-bold text-3xl uppercase px-5">
          REGÍSTRATE AQUÍ
        </h1>

        <p className="font-proxima text-center py-3 px-5">
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
                <UserIcon />
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
                <UserIcon />
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
                <LockIcon />
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

export default MobileRegistrationModal;
