import { useState, useContext } from "react";
import "../../../assets/css/Platform.css";
import Button3 from "../Buttons/Button3";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ExerciseModal from "../../UI/Modals/ExerciseModal";
import { AuthContext } from "../../../context/AuthContext";
import { ExerciseContext } from "../../../context/ExerciseContext";
import {
  GetExercises,
  DeleteExercise,
  UpdateExercise,
} from "../../../api/exercises/exercises";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ExerciseCard({ exercise }) {
  const navigate = useNavigate();

  const [isEditMode, setIsEditMode] = useState(false);

  const [updatedTitle, setUpdatedTitle] = useState(exercise.title);
  const [updatedDescription, setUpdatedDescription] = useState(
    exercise.description
  );
  const [updatedVideoURL, setUpdatedVideoURL] = useState(exercise.video_url);
  const [updatedImageURL, setUpdatedImageURL] = useState(exercise.image_url);

  const { setExercises } = useContext(ExerciseContext);
  const { user } = useContext(AuthContext);

  const editIcon = (
    <FontAwesomeIcon icon={faPenToSquare} style={{ color: "blue" }} />
  );
  const deleteIcon = (
    <FontAwesomeIcon icon={faTrash} style={{ color: "red" }} />
  );

  const goToDetailPage = () => {
    navigate(`/ejercicio/${exercise.id}`);
  };

  async function fetchAndSetExercises(setExercises) {
    try {
      const exercises = await GetExercises();
      setExercises(exercises);
    } catch (error) {
      console.error(error);
    }
  }

  const handleDeleteClick = async () => {
    try {
      const response = await DeleteExercise(exercise.id);
      console.log(response);
      if (response && response.status === 204) {
        toast.success("Ejercicio eliminado con éxito!");
        await fetchAndSetExercises(setExercises);
      } else {
        toast.error("No se ha podido eliminar el ejercicio...");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleExerciseUpdate = async (updatedExercise) => {
    try {
      const response = await UpdateExercise(exercise.id, updatedExercise);
      console.log(response);
      if (response && response.status === 200) {
        toast.success("Ejercicio actualizado con éxito!");
        await fetchAndSetExercises(setExercises);
      } else {
        toast.error("No se ha podido actualizar el ejercicio...");
      }
    } catch (error) {
      console.log(error);
      toast.error("No se ha podido actualizar el ejercicio...");
    }
  };

  return (
    <div className="col-span-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-7">
      <div
        className="exercise-card-image relative"
        style={{ backgroundImage: `url(${exercise.image_url})` }}
      >
        {user.role === "admin" && (
          <div className="absolute top-0 right-0 m-2 flex gap-2">
            <button onClick={() => setIsEditMode(true)}>{editIcon}</button>
            <button onClick={handleDeleteClick}>{deleteIcon}</button>
          </div>
        )}
      </div>

      <div className="p-5">
        <a onClick={goToDetailPage}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer">
            {exercise.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {exercise.description}
        </p>
        <Link to={`/ejercicio/${exercise.id}`}>
          <Button3 text={"Detalles"} />
        </Link>
      </div>
      {isEditMode && (
        <ExerciseModal
          exerciseId={exercise.id}
          updatedTitle={updatedTitle}
          setUpdatedTitle={setUpdatedTitle}
          updatedDescription={updatedDescription}
          setUpdatedDescription={setUpdatedDescription}
          updatedVideoURL={updatedVideoURL}
          setUpdatedVideoURL={setUpdatedVideoURL}
          updatedImageURL={updatedImageURL}
          setUpdatedImageURL={setUpdatedImageURL}
          onClose={() => setIsEditMode(false)}
          onExerciseUpdate={handleExerciseUpdate}
        />
      )}
    </div>
  );
}

export default ExerciseCard;
