import { Link } from "react-router-dom";
import CTAButton from "../../components/UI/Buttons/CTAButton";

function MainClassesSection() {
  return (
    <div className="flex flex-col w-full lg:w-3/4 mt-10">
      <div className="font-proxima text-gray-200 text-center my-7">
        <h1 className=" font-josefin text-3xl md:text-sxl uppercase mb-7">
          Clases y Sesiones Personalizadas
        </h1>
        <p className="text-lg mx-2 md:mx-0 mb-7">
          Sea cual sea la modalidad que elijas, para ti o para alguien más,
          individuales o en parejas, todas las clases son totalmente
          personalizadas según los gustos y objetivos de cada asistente.
          Avanzarás de acuerdo a tus intereses, reforzaremos las áreas que
          necesiten más trabajo y potenciaremos tu talento y estilo.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row  justify-center items-center xl:items-start md:justify-between mb-10">
        <img
          className="w-[500px] mb-5 md:mr-5 xl:mb-0"
          src="/src/assets/img/online-lessons.jpg"
          alt="vanessa-soprano"
        />
        <div className="text-center md:text-start mx-2 md:mx-0 md:ml-5">
          <h2 className="font-josefin text-3xl text-gray-200 font-bold uppercase mb-5">
            Clases Online
          </h2>
          <p className="font-proxima text-lg text-gray-200 mb-7">
            Donde sea que te encuentres, en cualquier momento y desde el
            dispositivo de tu preferencia puedes tener a tu profesora o vocal
            coach contigo. Ya sea que estés acostumbrado a esta modalidad o
            nunca lo hayas probado, no te preocupes! Sólo necesitas contar con
            audífonos (ojalá tipo manos libres, como los de celular, con
            micrófono) y una buena conexión a internet. Y, por supuesto, muchas
            ganas de aprender y progresar!
          </p>

          <div className="flex justify-center md:block">
            <Link to="/contact">
              <CTAButton text={"Agenda tu Clase"} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row  justify-center items-center xl:items-start md:justify-between mb-5 mt-10">
        <img
          className="w-[500px] mb-5 md:mr-5 xl:mb-0"
          src="/src/assets/img/studio-lessons.jpg"
          alt="vanessa-soprano"
        />
        <div className="text-center md:text-start mx-2 md:mx-0 md:ml-5">
          <h2 className="font-josefin text-3xl text-gray-200 font-bold uppercase mb-5">
            Clases Presenciales
          </h2>
          <p className="font-proxima text-lg text-gray-200 mb-7">
            Si estás en La Serena, Coquimbo o alrededores, puedes venir a
            sesiones en vivo en mi sala de clases, para sacar el máximo provecho
            a tu voz y oído!
          </p>

          <div className="flex justify-center md:block">
            <Link to="/contact">
              <CTAButton text={"Agenda tu Sesión"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainClassesSection;
