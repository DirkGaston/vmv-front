import { useContext } from "react";

import { useParams } from "react-router-dom";
import { ExerciseContext } from "../../context/ExerciseContext";

import VideoPlayer from "../../components/Multimedia/VideoPlayer";

import Button2 from "../../components/UI/Buttons/Button2";

function ExerciseDetail() {
  const { exercises } = useContext(ExerciseContext);
  const { id } = useParams();

  const exercise = exercises.find((e) => e.id == id);

  if (!exercise) return;

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="w-full md:w-min">
        <VideoPlayer url={exercise.video_url} />
      </div>
      <div className="text-gray-200 flex flex-col items-center my-7 w-3/4">
        <h2 className="font-josefin text-4xl">{exercise.title}</h2>
        <p>{exercise.description}</p>
      </div>
      <div className="flex justify-center mb-10">
        {" "}
        <Button2 text={"Subir Práctica"} />
      </div>
    </div>
  );
}

export default ExerciseDetail;
