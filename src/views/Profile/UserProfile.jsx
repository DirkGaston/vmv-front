import CTAButton from "../../components/Buttons/CTAButton";
import Button1 from "../../components/Buttons/Button1";
import Button2 from "../../components/Buttons/Button2";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function UserProfile() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full lg:w-3/4 mt-10">
        <div className="flex flex-col md:flex-row justify-between font-proxima text-gray-200 text-center my-7">
          <h1 className=" font-josefin text-5xl uppercase mb-7">¡Hola XXXX!</h1>
          <Link to="/ejercicios">
            <Button1 text={"IR A PRÁCT. VOC."} />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center md:justify-start font-proxima text-gray-200 text-center my-7">
          <img
            className="w-[300px] h-[300px] rounded-full md:mr-[70px] mb-5 md:mb-0"
            src="/src/assets/img/800px-Symphony_x_10.jpg"
            alt="userPhoto"
          />
          <div className="flex flex-col items-start font-proxima text-xl">
            <p className="mb-3">Mi último pago fue:</p>
            <p className="mb-3">Mi última clase fue:</p>
            <p>Clases disponibles en paquete:</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-center md:text-start font-josefin font-bold text-white text-3xl uppercase mb-7">
              Tus Datos
            </h1>
            <form
              method="POST"
              action="#login"
              className="w-[90%] md:w-[500px]"
            >
              <div className="mb-8">
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="name"
                    className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                    placeholder="Nombre Completo"
                  />
                </div>
              </div>

              <div className="mb-8">
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="birthday"
                    className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                    placeholder="Fecha de Nacimiento"
                  />
                </div>
              </div>
              <div className="mb-8">
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="emergency_contact_name"
                    className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                    placeholder="Nombre Contacto Emergencia"
                  />
                </div>
              </div>
              <div className="mb-8">
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="emergency_contact_phone"
                    className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                    placeholder="Número Contacto Emergencia"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-center md:text-start font-josefin font-bold text-white text-3xl uppercase mb-7">
                Tus Redes
              </h1>
              <form
                method="POST"
                action="#login"
                className="w-[90%] md:w-[500px]"
              >
                <div className="mb-8">
                  <div className="mt-1 relative rounded-md shadow-sm flex">
                    <FontAwesomeIcon
                      className="text-white text-4xl relative mr-5"
                      icon={["fab", "instagram"]}
                    />
                    <input
                      id="instagram"
                      className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <div className="mt-1 relative rounded-md shadow-sm flex">
                    <FontAwesomeIcon
                      className="text-white text-4xl relative mr-5"
                      icon={["fab", "facebook"]}
                    />
                    <input
                      id="instagram"
                      className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <div className="mt-1 relative rounded-md shadow-sm flex">
                    <FontAwesomeIcon
                      className="text-white text-4xl relative mr-5"
                      icon={["fab", "tiktok"]}
                    />
                    <input
                      id="instagram"
                      className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <div className="mt-1 relative rounded-md shadow-sm flex">
                    <FontAwesomeIcon
                      className="text-white text-4xl relative mr-5"
                      icon={["fab", "youtube"]}
                    />
                    <input
                      id="instagram"
                      className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button2 text={"Actualizar Datos"} />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:justify-between font-proxima text-gray-200 text-center mb-7 mt-[70px]">
          <Button1 text={"IR A MI REPERTORIO"} />
          <Button1 text={"IR A MIS CLASES"} />
          <Button1 text={"IR A MIS PRÁCTICAS"} />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
