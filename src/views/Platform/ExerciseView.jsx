import { useContext } from "react";

import { useParams } from "react-router-dom";
import Context from "../../context/Context";

import VideoPlayer from "../../components/VideoPlayer";

import Button2 from "../../components/Buttons/Button2";

function ExerciseView() {
  const context = useContext(Context);
  const { id } = useParams();

  const exercise = context.exercises.find((e) => e.id == id);

  if (!exercise) return;

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="w-full md:w-min">
        <VideoPlayer
          url={
            "https://www.youtube.com/watch?v=9sz7MHtuhp8&ab_channel=VanessaMedo"
          }
        />
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

export default ExerciseView;
