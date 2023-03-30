function UserForm({
  username,
  setName,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  phoneNumber,
  setPhoneNumber,
  birthday,
  setBirthday,
  emergencyContactName,
  setEmergencyContactName,
  emergencyContactPhone,
  setEmergencyContactPhone,
}) {
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
              value={username}
              onChange={(e) => setName(e.target.value)}
              className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
              placeholder="Nombre Usuario"
            />
          </div>
        </div>
        <div className="mb-8">
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
              placeholder="Nombre"
            />
          </div>
        </div>
        <div className="mb-8">
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
              placeholder="Apellido"
            />
          </div>
        </div>
        <div className="mb-8">
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
              placeholder="Número de Teléfono"
            />
          </div>
        </div>

        <div className="mb-8">
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              id="birthday"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
              placeholder="Fecha de Nacimiento (AAA-MM-DD)"
            />
          </div>
        </div>
        <div className="mb-8">
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              id="emergency_contact_name"
              value={emergencyContactName}
              onChange={(e) => setEmergencyContactName(e.target.value)}
              className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
              placeholder="Nombre Contacto Emergencia"
            />
          </div>
        </div>
        <div className="mb-8">
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              id="emergency_contact_phone"
              value={emergencyContactPhone}
              onChange={(e) => setEmergencyContactPhone(e.target.value)}
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
