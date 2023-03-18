import Button2 from "../../../components/UI/Buttons/Button2";

function ExerciseUploadForm() {
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
            className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
          />
        </div>
      </div>

      <div className="mb-8">
        <label
          htmlFor="file_upload"
          className="block text-gray-200 text-sm font-bold mb-2 font-josefin"
        >
          Subir Archivo
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            name="file_upload"
            id="file_upload"
            type="file"
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
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center">
        <Button2 text={"Subir"} />
      </div>
    </form>
  );
}

export default ExerciseUploadForm;
