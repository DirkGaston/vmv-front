import Button1 from "../../components/Buttons/Button1";
import Button2 from "../../components/Buttons/Button2";

function AdminView() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full lg:w-3/4 mt-10">
        <div className="font-proxima text-gray-200 text-center my-7">
          <h1 className=" font-josefin text-3xl md:text-5xl uppercase mb-7">
            Administración Plataforma VMV{" "}
          </h1>
          <p className="text-md md:text-lg mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            sapiente nesciunt quam quae odio ea temporibus magni at aut
            quibusdam reprehenderit aspernatur, est fuga atque deleniti! Nostrum
            architecto odit deserunt. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cumque quis mollitia veritatis repellat, ea,
            similique nihil reiciendis dolore libero aliquam impedit! Sunt,
            laborum eveniet quae voluptatum sequi dolorem illum nam! Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Eaque quis delectus
            mollitia assumenda ut facere est fugiat quasi quidem odit eos
            voluptatibus recusandae voluptas, doloribus vitae aliquid modi qui
            impedit!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col items-center md:items-start">
            <h1 className=" font-josefin font-bold text-white text-3xl uppercase mb-7">
              Subir Ejercicios
            </h1>
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
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col items-center md:items-start">
              <h1 className=" font-josefin font-bold text-center md:text-start text-white text-3xl uppercase mb-7">
                Prácticas por revisar
              </h1>
              <form
                method="POST"
                action="#login"
                className="w-[80%] md:w-[500px] mb-10 md:mb-0"
              >
                <div className="mb-8">
                  <label
                    htmlFor="username"
                    className="block text-gray-200 text-sm font-bold mb-2 font-josefin"
                  >
                    <span className="text-red-500">&nbsp;*</span>
                    Correo Electrónico
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <input
                      id="username"
                      className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="password"
                    className="block text-gray-200 text-sm font-bold mb-2 font-josefin"
                  >
                    <span className="text-red-500">&nbsp;*</span>
                    Contraseña
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                    </div>
                    <input
                      name="password"
                      id="password"
                      type="text"
                      className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button1 text={"Entrar"} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminView;
