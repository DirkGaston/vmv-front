import CTAButton from "../../components/Buttons/CTAButton";
import Button1 from "../../components/Buttons/Button1";
import Button2 from "../../components/Buttons/Button2";
import ExerciseCard from "../../components/Cards/ExerciseCard";
import { useContext } from "react";
import Context from "../../context/Context";

import { Link } from "react-router-dom";

function ExerciseGallery() {
  const { exercises } = useContext(Context);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full lg:w-3/4 mt-10">
        <div className="flex flex-col md:flex-row items-center mdd:items-start md:justify-between font-proxima text-gray-200 text-center my-7">
          <div className="flex flex-col items-center">
            <h1 className=" font-josefin text-5xl uppercase mb-10">
              Ejercicios
            </h1>
            <div className="relative inline-block text-left mt-3">
              <div className="mb-7 md:mb-0">
                <label
                  htmlFor="filter"
                  className="block text-gray-100 text-lg font-bold mb-2"
                >
                  Filtrar por Categoría
                </label>
                <button
                  type="button"
                  className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Selecciona
                  <svg
                    className="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <Link to="/ejercicios">
            <Button2 text={"Sube tu Práctica"} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 font-proxima text-gray-200 text-center my-7">
          {exercises.map((exercise, index) => (
            <ExerciseCard exercise={exercise} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExerciseGallery;
