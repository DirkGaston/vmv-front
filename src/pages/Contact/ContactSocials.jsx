import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactSocials() {
  return (
    <div className="flex flex-col font-proxima font-bold text-gray-200">
      <div className="flex">
        <FontAwesomeIcon
          className="text-white text-4xl relative mr-5 mb-7"
          icon={["fab", "instagram"]}
        />
        <p>Clases de Canto</p>
      </div>
      <div className="flex">
        <FontAwesomeIcon
          className="text-white text-4xl relative mr-5 mb-7"
          icon={["fab", "facebook"]}
        />
        <p>Clases de Canto</p>
      </div>
      <div className="flex">
        <FontAwesomeIcon
          className="text-white text-4xl relative mr-5 mb-7"
          icon={["fab", "youtube"]}
        />
        <p>Clases de Canto</p>
      </div>
      <div className="flex">
        <FontAwesomeIcon
          className="text-white text-4xl relative mr-5 mb-7"
          icon={["fab", "tiktok"]}
        />
        <p>Clases de Canto</p>
      </div>
    </div>
  );
}

export default ContactSocials;
