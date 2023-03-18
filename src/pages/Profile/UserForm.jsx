function UserForm() {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h1 className="text-center md:text-start font-josefin font-bold text-white text-3xl uppercase mb-7">
        Tus Datos
      </h1>
      <form method="POST" action="#login" className="w-[90%] md:w-[500px]">
        <div className="mb-8">
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              id="name"
              className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
              placeholder="Nombre Completo"
            />
          </div>
        </div>

        <div className="mb-8">
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              id="birthday"
              className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
              placeholder="Fecha de Nacimiento"
            />
          </div>
        </div>
        <div className="mb-8">
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              id="emergency_contact_name"
              className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
              placeholder="Nombre Contacto Emergencia"
            />
          </div>
        </div>
        <div className="mb-8">
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              id="emergency_contact_phone"
              className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
              placeholder="Número Contacto Emergencia"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
