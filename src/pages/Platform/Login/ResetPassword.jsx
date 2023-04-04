import { useState } from "react";
import { ForgotPasswordRequest } from "../../../api/auth/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

const schema = yup
  .object({
    email: yup
      .string()
      .email("El correo electrónico debe ser válido")
      .required("Campo Requerido!"),
  })
  .required();

function ResetPassword({ email, setShowResetPassword }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: email,
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await ForgotPasswordRequest(data.email);
      if (response && response.status === 200) {
        toast.success(
          "Se ha enviado un correo electrónico con instrucciones para restablecer la contraseña."
        );
        setShowResetPassword(false);
      } else {
        toast.error("No se pudo restablecer la contraseña en este momento.");
      }
    } catch (error) {
      console.error(error);
      toast.error("No se pudo restablecer la contraseña en este momento.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="bg-gray-900 bg-opacity-50 absolute top-0 left-0 w-screen h-screen z-10 flex items-center justify-center">
      <div className="bg-white rounded-lg w-[500px] py-6 px-8">
        <h2 className="text-gray-800 font-bold text-xl text-center mb-4">
          ¿Olvidaste tu Contraseña?
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="resetPasswordEmail"
              className="block text-gray-700 font-bold mb-2"
            >
              Correo Electrónico
            </label>
            <input
              {...register("email", { required: true })}
              id="resetPasswordEmail"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => setShowResetPassword(false)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${
                isSubmitting ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500"
              } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            >
              Restablecer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
