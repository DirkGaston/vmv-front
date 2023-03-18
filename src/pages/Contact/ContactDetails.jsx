import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function ContactDetails() {
  return (
    <div className="flex flex-col font-proxima text-gray-200 font-bold">
      <div className="flex">
        <FontAwesomeIcon
          className="text-white text-4xl relative mr-5 mb-7"
          icon={["fab", "whatsapp"]}
        />
        <p>+56937644604</p>
      </div>
      <div className="flex">
        <FontAwesomeIcon
          className="text-white text-4xl relative mr-5 mb-7"
          icon={faEnvelope}
        />
        <p>test@inventmail.com</p>
      </div>
    </div>
  );
}

export default ContactDetails;
