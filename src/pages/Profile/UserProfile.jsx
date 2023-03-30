import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { UpdateUser } from "../../api/auth/auth";
import UserForm from "./UserForm";
import SocialMediaForm from "./SocialMediaForm";
import Button1 from "../../components/UI/Buttons/Button1";
import Button2 from "../../components/UI/Buttons/Button2";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

library.add(fab);

function UserProfile() {
  const { user, role } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [birthday, setBirthday] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [emergencyContactPhone, setEmergencyContactPhone] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [tiktokLink, setTiktokLink] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");

  useEffect(() => {
    if (!user.id) {
      console.log("User ID not set yet");
    }
  }, [user]);

  const id = user.id;

  console.log(id);

  const handleUpdateUser = async () => {
    const updatedUser = {
      username,
      firstName,
      lastName,
      phoneNumber,
      birthday,
      emergencyContactName,
      emergencyContactPhone,
    };

    try {
      const data = await UpdateUser(user.id, updatedUser);
      console.log(data);
      toast.success("Tus datos se han actualizado con éxito!");
    } catch (err) {
      console.log(err);
      toast.error("Hubo un error al actualizar tus datos...");
    }
  };

  const handleUpdateSocials = async () => {
    const updatedUser = {
      instagramLink,
      facebookLink,
      tiktokLink,
      youtubeLink,
    };

    try {
      console.log(updatedUser);
      const data = await UpdateUser(user.id, updatedUser);
      console.log(data);
      toast.success("Tus redes se han actualizado con éxito!");
    } catch (err) {
      console.log(err);
      toast.error("Hubo un error al actualizar tus redes...");
    }
  };

  if (!user.id) {
    return (
      <div class="flex flex-col items-center justify-center space-x-2 my-10">
        <div
          class="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-amber-400 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
        <p className="mt-5 font-medium  font-proxima text-gray-200">
          Retrieving User Profile...
        </p>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full lg:w-3/4 mt-10">
        <div className="flex flex-col md:flex-row justify-between font-proxima text-gray-200 text-center my-7">
          <h1 className=" font-josefin text-5xl uppercase mb-7">
            ¡Hola {user.username}!
          </h1>
          <Link to="/ejercicios">
            <Button1 text={"IR A PRÁCT. VOC."} />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center md:justify-start font-proxima text-gray-200 text-center my-7">
          <img
            className="w-[300px] h-[300px] rounded-full md:mr-[70px] mb-5 md:mb-0"
            src="https://assets.stickpng.com/images/610e8796f8bb190004769dcd.png"
            alt="userPhoto"
          />
          {role === "student" && (
            <div className="flex flex-col items-start font-proxima text-xl">
              <p className="mb-3">Mi último pago fue:</p>
              <p className="mb-3">Mi última clase fue:</p>
              <p>Clases disponibles en paquete:</p>
            </div>
          )}
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col items-center">
            <UserForm
              name={username}
              setName={setUsername}
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              birthday={birthday}
              setBirthday={setBirthday}
              emergencyContactName={emergencyContactName}
              setEmergencyContactName={setEmergencyContactName}
              emergencyContactPhone={emergencyContactPhone}
              setEmergencyContactPhone={setEmergencyContactPhone}
            />
            <div className="w-[250px]">
              <Button2 text={"Actualizar Datos"} onClick={handleUpdateUser} />;
            </div>
          </div>

          <div className="flex flex-col items-center">
            <SocialMediaForm
              instagramLink={instagramLink}
              setInstagramLink={setInstagramLink}
              facebook={facebookLink}
              setFacebookLink={setFacebookLink}
              tiktokLink={tiktokLink}
              setTiktokLink={setTiktokLink}
              youtubeLink={youtubeLink}
              setYoutubeLink={setYoutubeLink}
            />
            <div className="w-[250px]">
              <Button2
                text={"Actualizar Redes"}
                onClick={handleUpdateSocials}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:justify-between font-proxima text-gray-200 text-center mb-7 mt-[70px]">
          {role === "student" && <Button1 text={"IR A MI REPERTORIO"} />}
          {role === "student" && <Button1 text={"IR A MIS CLASES"} />}
          {role === "student" && <Button1 text={"IR A MIS PRÁCTICAS"} />}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
