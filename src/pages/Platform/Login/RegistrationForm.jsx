import { useState, useContext } from "react";
import UserIcon from "../../../components/Icons/UserIcon";
import LockIcon from "../../../components/Icons/LockIcon";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../../../api/auth/auth";
import { AuthContext } from "../../../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegistrationForm() {
  const { setUser, hasToken, setHasToken } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const schema = yup
    .object({
      username: yup.string().required(),
      email: yup
        .string()
        .email("El correo electrónico debe ser válido")
        .required("Campo Requerido!"),
      password: yup.string().required("Campo Requerido!"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await RegisterUser(
        data.username,
        data.email,
        data.password,
        setUser
      );

      if (response && response.status === 200) {
        if (localStorage.getItem("accessToken")) {
          setHasToken(true);
        }

        navigate("/user");
        toast.success("Registro realizado con éxito!");
      } else {
        toast.error("Registro ha fallado...");
      }
    } catch (error) {
      console.error(error);
      toast.error("Registro ha fallado...");
    }
  };

  return (
    <form method="POST" action="#login" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-8 px-5">
        <label
          htmlFor="username"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          <span className="text-red-500">&nbsp;*</span>
          Nombre
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <UserIcon />
          </div>
          <input
            {...register("username", { required: true })}
            id="username"
            className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
          />
        </div>
        {errors.username && (
          <p className="text-sm text-red-500 text-left font-proxima font-regular">
            {errors.username.message}
          </p>
        )}
      </div>

      <div className="mb-8 px-5">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          <span className="text-red-500">&nbsp;*</span>
          Correo Electrónico
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <UserIcon />
          </div>
          <input
            {...register("email", { required: true })}
            id="username"
            className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
            placeholder="you@example.com"
          />
        </div>
        {errors.email && (
          <p className="text-sm text-red-500 text-left font-proxima font-regular">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="mb-8 px-5">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          <span className="text-red-500">&nbsp;*</span>
          Contraseña
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <LockIcon />
          </div>
          <input
            {...register("password", { required: true })}
            name="password"
            id="password"
            type="password"
            className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
          />
        </div>
        {errors.password && (
          <p className="text-sm text-red-500 text-left font-proxima font-regular">
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="shadow-md font-regular font-proxima py-2 px-7 text-white cursor-pointer bg-yellow-600 hover:bg-yellow-500 rounded text-lg text-center"
        >
          🎤
        </button>
      </div>
    </form>
  );
}

export default RegistrationForm;
