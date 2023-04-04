import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

function ExerciseModal({
  exerciseId,
  updatedTitle,
  setUpdatedTitle,
  updatedDescription,
  setUpdatedDescription,
  updatedVideoURL,
  setUpdatedVideoURL,
  updatedImageURL,
  setUpdatedImageURL,
  onClose,
  onExerciseUpdate,
}) {
  const handleSubmit = async () => {
    try {
      await onExerciseUpdate({
        title: updatedTitle,
        description: updatedDescription,
        video_url: updatedVideoURL,
        image_url: updatedImageURL,
      });

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  if (!onClose) {
    return null;
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-32 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="fixed z-10 top-0 right-0 bottom-0 left-0 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6">
            <div className="absolute top-0 right-0 pt-4 pr-4">
              <button
                className="text-gray-400 hover:text-gray-500 focus:outline-none"
                onClick={onClose}
              >
                <span className="sr-only">Close</span>
                <FontAwesomeIcon
                  icon={faXmark}
                  style={{ color: "blue" }}
                  className="h-6 w-6"
                  aria-hidden="true"
                />
              </button>
            </div>

            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Editar Ejercicio
            </h3>

            <div className="mt-2">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Título
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-700"
              />

              <label
                htmlFor="video_url"
                className="block mt-4 text-sm font-medium text-gray-700"
              >
                URL Video
              </label>
              <input
                type="text"
                name="video_url"
                id="video_url"
                value={updatedVideoURL}
                onChange={(e) => setUpdatedVideoURL(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-700"
              />

              <label
                htmlFor="image_url"
                className="block mt-4 text-sm font-medium text-gray-700"
              >
                URL Imágen
              </label>
              <input
                type="text"
                name="image_url"
                id="image_url"
                value={updatedImageURL}
                onChange={(e) => setUpdatedImageURL(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-700"
              />

              <label
                htmlFor="description"
                className="block mt-4 text-sm font-medium text-gray-700"
              >
                Descripción
              </label>
              <textarea
                name="description"
                id="description"
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-700"
              ></textarea>
            </div>

            <div className="mt-5 sm:mt-6">
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleSubmit}
              >
                Actualizar Ejercicio
              </button>
              <button
                type="button"
                className="inline-flex justify-center ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                onClick={onClose}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExerciseModal;
