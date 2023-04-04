import { useState, useContext } from "react";
import UserIcon from "../../../components/Icons/UserIcon";
import LockIcon from "../../../components/Icons/LockIcon";
import { UserLogin } from "../../../api/auth/auth";
// import ResetPassword from "./ResetPassword";
import { AuthContext } from "../../../context/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
  const { setUser, setHasToken } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showResetPassword, setShowResetPassword] = useState(false);

  const schema = yup
    .object({
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

  const handleForgotPassword = () => {
    setShowResetPassword(true);
  };

  const onSubmit = async (data) => {
    try {
      const response = await UserLogin(data.email, data.password, setUser);
      const role = response.data.data.role;

      if (response && response.status === 200) {
        setUser({ isAuthenticated: true });

        if (localStorage.getItem("accessToken")) {
          setHasToken(true);
        }

        setTimeout(() => {
          navigate(response.data.data.role === "admin" ? "/admin" : "/user");
        }, 0);

        toast.success("Login realizado con éxito!");
      } else {
        if (response.status === 401) {
          toast.error("El correo electrónico o la contraseña son incorrectos.");
        } else {
          toast.error("Login ha fallado...");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Login ha fallado...");
    }
  };

  return (
    <div>
      <form
        method="POST"
        action="#login"
        className="w-[500px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-8 px-5">
          <label
            htmlFor="email"
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
              {...register("email", { required: true })}
              id="email"
              className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
              placeholder="you@example.com"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              {...register("password", { required: true })}
              name="password"
              id="password"
              className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="text-sm text-gray-200 hover:text-white hover:underline cursor-pointer focus:outline-none"
            onClick={handleForgotPassword}
          >
            ¿Olvidaste tu contraseña?
          </button>
          {errors.password && (
            <p className="text-sm text-red-500 text-left font-proxima font-regular">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="shadow-md font-regular font-proxima py-2 px-7 text-white cursor-pointer bg-gray-400 hover:bg-gray-300 rounded text-lg text-center"
          >
            Log In
          </button>
        </div>
      </form>
      {/* {showResetPassword && (
        <ResetPassword
          email={email}
          setShowResetPassword={setShowResetPassword}
        />
      )} */}
    </div>
  );
}

export default LoginForm;
