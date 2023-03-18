import Button1 from "../../components/UI/Buttons/Button1";

import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function AdminView() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center w-full lg:w-3/4 mt-10 font-proxima text-gray-200 text-center my-7">
        <h1 className=" font-josefin text-3xl md:text-5xl uppercase mb-7">
          Administración Plataforma VMV{" "}
        </h1>
        <p className="text-md md:text-lg mb-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sapiente
          nesciunt quam quae odio ea temporibus magni at aut quibusdam
          reprehenderit aspernatur, est fuga atque deleniti! Nostrum architecto
          odit deserunt. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Cumque quis mollitia veritatis repellat, ea, similique nihil
          reiciendis dolore libero aliquam impedit! Sunt, laborum eveniet quae
          voluptatum sequi dolorem illum nam! Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Eaque quis delectus mollitia assumenda
          ut facere est fugiat quasi quidem odit eos voluptatibus recusandae
          voluptas, doloribus vitae aliquid modi qui impedit!
        </p>
        <div className="flex justify-center mb-10">
          <div className="flex flex-col items-center md:items-start my-5 mx-7">
            <Link to="/admin/ejercicios">
              <Button1 text={"Subir Ejercicios"} />
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-start my-5 mx-7 hidden">
            <Link to="/admin/practicas">
              <Button1 text={"Revisar Prácticas"} />
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-start my-5 mx-7 hidden">
            <Link to="/admin/usuarios">
              <Button1 text={"Lista Usuarios"} />
            </Link>
          </div>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminView;
