import { LuMilk } from "react-icons/lu";
import { BiDetail } from "react-icons/bi";
import { MdOutlineBedroomBaby } from "react-icons/md";
import { TbVaccine } from "react-icons/tb";

import { Link, useLocation, useParams } from "react-router-dom";

const AnimalDetailsFooter = () => {
  const location = useLocation();
  const params = useParams();

  return (
    <div
      className="w-4/5 m-auto rounded-lg min-h-fit border-2 border-color2 text-color2 py-2 flex justify-evenly items-center"
      style={{ position: "sticky", bottom: "0" }}
    >
      <Link
        className={`flex flex-col justify-center items-center h-12 w-12 ${
          location.pathname === `/animal/${params.type}/${params.id}`
            ? "text-color1 font-bold"
            : ""
        }`}
        to={`/animal/${params.type}/${params.id}`}
      >
        <BiDetail className="text-4xl" />
        <p className="text-xs">Details</p>
      </Link>
      <Link
        className={`flex flex-col justify-center items-center h-12 w-12 ${
          location.pathname === `/animal/${params.type}/${params.id}/produce`
            ? "text-color1 font-bold"
            : ""
        }`}
        to={`/animal/${params.type}/${params.id}/produce`}
      >
        <LuMilk className="text-4xl" />
        <p className="text-xs">Produce</p>
      </Link>
      <Link
        className={`flex flex-col justify-center items-center h-12 w-12 ${
          location.pathname === `/animal/${params.type}/${params.id}/vaccine`
            ? "text-color1 font-bold"
            : ""
        }`}
        to={`/animal/${params.type}/${params.id}/vaccine`}
      >
        <TbVaccine className="text-4xl" />
        <p className="text-xs">Vaccine</p>
      </Link>
      <Link
        className={`flex flex-col justify-center items-center h-12 w-12 ${
          location.pathname === `/animal/${params.type}/${params.id}/breeding`
            ? "text-color1 font-bold"
            : ""
        }`}
        to={`/animal/${params.type}/${params.id}/breeding`}
      >
        <MdOutlineBedroomBaby className="text-4xl" />
        <p className="text-xs">Breeding</p>
      </Link>
    </div>
  );
};

export default AnimalDetailsFooter;
