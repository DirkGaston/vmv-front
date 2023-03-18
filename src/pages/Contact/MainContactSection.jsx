import ContactDetails from "./ContactDetails";
import ContactSocials from "./ContactSocials";

function MainContactSection() {
  return (
    <div className="flex flex-col w-full lg:w-3/4 mt-10 justify-center items-center">
      <div className="flex flex-col font-proxima text-gray-200">
        <h1 className="font-josefin text-center text-3xl md:text-sxl uppercase mb-7">
          Contáctame
        </h1>
        <p className="text-lg mx-2 md:mx-0 mb-7 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
          expedita ea similique necessitatibus, corrupti unde recusandae
          reiciendis totam, iure, nulla quos illum eligendi ut. Tempora a sed
          totam voluptatem. Veniam!
        </p>
      </div>
      <div className="flex flex-col justify-between md:flex-row w-1/2">
        <ContactDetails />
        <ContactSocials />
      </div>
    </div>
  );
}

export default MainContactSection;
