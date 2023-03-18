import "../../../assets/css/Platform.css";
import Button3 from "../Buttons/Button3";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ExerciseCard({ exercise }) {
  const navigate = useNavigate();

  const goToDetailPage = () => {
    navigate(`/ejercicio/${exercise.id}`);
  };
  return (
    <div className="col-span-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-7">
      <a onClick={goToDetailPage}>
        <img
          className="rounded-t-lg cursor-pointer"
          src={exercise.image}
          alt={exercise.title}
        />
      </a>
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
    </div>
  );
}

export default ExerciseCard;
