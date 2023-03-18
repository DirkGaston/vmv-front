import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import UserForm from "./UserForm";
import SocialMediaForm from "./SocialMediaForm";
import Button1 from "../../components/UI/Buttons/Button1";
import Button2 from "../../components/UI/Buttons/Button2";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function UserProfile() {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full lg:w-3/4 mt-10">
        <div className="flex flex-col md:flex-row justify-between font-proxima text-gray-200 text-center my-7">
          <h1 className=" font-josefin text-5xl uppercase mb-7">
            ¡Hola {user.id}!
          </h1>
          <Link to="/ejercicios">
            <Button1 text={"IR A PRÁCT. VOC."} />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center md:justify-start font-proxima text-gray-200 text-center my-7">
          <img
            className="w-[300px] h-[300px] rounded-full md:mr-[70px] mb-5 md:mb-0"
            src="/img/800px-Symphony_x_10.jpg"
            alt="userPhoto"
          />
          <div className="flex flex-col items-start font-proxima text-xl">
            <p className="mb-3">Mi último pago fue:</p>
            <p className="mb-3">Mi última clase fue:</p>
            <p>Clases disponibles en paquete:</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col items-center">
            <UserForm />
            <div className="w-[250px]">
              <Button2 text={"Actualizar Datos"} />;
            </div>
          </div>

          <div className="flex flex-col items-center">
            <SocialMediaForm />
            <div className="w-[250px]">
              <Button2 text={"Actualizar Redes"} />;
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
