import { useState } from "react";
import Button2 from "../../../components/UI/Buttons/Button2";
import { AddExercise } from "../../../api/exercises/exercises";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ExerciseUploadForm() {
  const [title, setTitle] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = async (data) => {
    try {
      const exercise = {
        title: title,
        videoURL: videoURL,
        description: description,
      };
      const response = await AddExercise(exercise);
      console.log(response);
      if (response && response.status === 200) {
        toast.success("Ejercicio añadido con éxito!");
      } else {
        toast.error("Registro del ejercicio ha fallado...");
      }
    } catch (error) {
      console.error(error);
      toast.error("Registro del ejercicio ha fallado...");
    }
  };
  return (
    <form
      method="POST"
      action="#login"
      className="w-[80%] md:w-[500px] mb-10 md:mb-0"
    >
      <div className="mb-8">
        <label
          htmlFor="exercise_title"
          className="block text-gray-200 text-sm font-bold mb-2 font-josefin"
        >
          Título{" "}
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            id="exercise_title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
          />
        </div>
      </div>

      <div className="mb-8">
        <label
          htmlFor="file_upload"
          className="block text-gray-200 text-sm font-bold mb-2 font-josefin"
        >
          URL del Vídeo
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            name="file_upload"
            id="file_upload"
            value={videoURL}
            onChange={(e) => setVideoURL(e.target.value)}
            className="block pr-10 shadow appearance-none border-2 border-orange-100 bg-white rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
          />
        </div>
      </div>
      <div className="mb-8">
        <label
          htmlFor="file_upload"
          className="block text-gray-200 text-sm font-bold mb-2 font-josefin"
        >
          Descripción del Ejercicio
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <textarea
            id="message"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center">
        <Button2 text={"Subir"} onClick={onSubmit} />
      </div>
    </form>
  );
}

export default ExerciseUploadForm;
