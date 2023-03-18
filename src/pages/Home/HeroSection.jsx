import "../../assets/css/Hero.css";
import { NavLink } from "react-router-dom";

function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-white text-center text-5xl md:text-7xl uppercase font-josefin font-semibold">
        Vanessa Medo
      </h1>
      <h2 className="text-white text-2xl md:text-3xl font-josefin font-light mt-5">
        Clases de Canto y Vocal Coach
      </h2>
      <div className="py-10 flex flex-col items-center justify-center">
        <h3 className="text-white uppercase text-3xl md:text-4xl font-josefin font-regular">
          ¡Confíame tu voz!
        </h3>
        <p className="text-white text-center text-lg md:text-xl font-proxima font-light w-5/6 md:w-1/2 mt-5">
          Soy Profesional de la Música; Soprano, Licenciada en Música y
          Entrenadora Vocal. Tengo diplomas de perfeccionamiento en dirección
          coral, interpretación, técnica y pedagogía vocal, con reconocidos
          maestros de Chile y el extranjero. Llevo +10 años en la enseñanza de
          técnica vocal tanto a niños como a adultos y guía a cantautores e
          intérpretes, con evoluciones muy exitosas. <br></br> ¡Ven a trabajar conmigo en
          ti!
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
