import Button1 from "../../../components/UI/Buttons/Button1";
import UserIcon from "../../../components/Icons/UserIcon";
import LockIcon from "../../../components/Icons/LockIcon";

function PendingPracticesForm() {
  return (
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
            <UserIcon />
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
          <LockIcon />
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
  );
}

export default PendingPracticesForm;
