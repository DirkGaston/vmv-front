import Button2 from "../../../components/UI/Buttons/Button2";
import ExerciseCard from "../../../components/UI/Cards/ExerciseCard";
import CategoryFilter from "./CategoryFilter";
import { useState, useContext } from "react";

import UsePagination from "../../../hooks/UsePagination";
import PaginationButtons from "../../../components/UI/Buttons/PaginationButton";
import { ExerciseContext } from "../../../context/ExerciseContext";

import { Link } from "react-router-dom";

function ExerciseGallery() {
  const { exercises } = useContext(ExerciseContext);
  const exercisesPerPage = 6;

  const { currentPage, totalPages, currentData, goToPage } = UsePagination(
    exercises,
    exercisesPerPage
  );

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full lg:w-3/4 mt-10">
        <div className="flex justify-center">
          <h1 className=" font-josefin text-5xl text-gray-200 uppercase mb-10">
            Ejercicios
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center mdd:items-start md:justify-between font-proxima text-gray-200 text-center my-7 px-6">
          <CategoryFilter />

          <Link to="/ejercicios">
            <Button2 text={"Sube tu Práctica"} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 font-proxima text-gray-200 text-center my-7">
          {currentData.map((exercise, index) => (
            <ExerciseCard exercise={exercise} key={index} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
        <PaginationButtons
          goToPage={goToPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
        </div>
      </div>
    </div>
  );
}

export default ExerciseGallery;
