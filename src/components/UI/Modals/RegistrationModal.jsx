import "../../../assets/css/RegistrationModal.css";
import Cross from "../../Icons/CrossIcon";
import RegistrationForm from "../../../pages/Platform/Login/RegistrationForm";

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
          <Cross />
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

        <RegistrationForm />
      </div>
    </div>
  );
}

export default RegistrationModal;
