import { GiHealthNormal } from "react-icons/gi";
import { FaCow, FaMoneyBillTrendUp } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";

const Footer = () => {
  const location = useLocation();

  return (
    <div
      className="w-full min-h-fit bg-color2 text-gray-200 p-2 py-6 flex justify-evenly items-center"
      style={{ position: "fixed", bottom: "0" }}
    >
      <Link
        className={`flex flex-col justify-center items-center h-12 w-12 ${
          location.pathname === "/" || location.pathname.startsWith("/animal")
            ? "text-green-300 font-bold"
            : ""
        }`}
        to={"/"}
      >
        <FaCow className="text-4xl" />
        <p className="text-xs">Animals</p>
      </Link>
      <Link
        className={`flex flex-col justify-center items-center h-12 w-12 ${
          location.pathname.startsWith("/sales")
            ? "text-yellow-300 font-bold"
            : ""
        }`}
        to={"/sales"}
      >
        <GrMoney className="text-4xl" />
        <p className="text-xs">Sales</p>
      </Link>
      <Link
        className={`flex flex-col justify-center items-center h-12 w-12 ${
          location.pathname.startsWith("/expenses")
            ? "text-blue-300 font-bold"
            : ""
        }`}
        to={"/expenses"}
      >
        <FaMoneyBillTrendUp className="text-4xl" />
        <p className="text-xs">Expenses</p>
      </Link>
      <Link
        className={`flex flex-col justify-center items-center h-12 w-12 ${
          location.pathname.startsWith("/add") ? "text-red-300 font-bold" : ""
        }`}
        to={"/add"}
      >
        <GiHealthNormal className="text-4xl" />
        <p className="text-xs">Add</p>
      </Link>
      <Link
        className={`flex flex-col justify-center items-center h-12 w-12 ${
          location.pathname.startsWith("/info")
            ? "text-purple-300 font-bold"
            : ""
        }`}
        to={"/info"}
      >
        <FaInfoCircle className="text-4xl" />
        <p className="text-xs">Info</p>
      </Link>
    </div>
  );
};

export default Footer;
