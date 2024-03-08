import { GiHealthNormal } from "react-icons/gi";
import { FaCow, FaMoneyBillTrendUp } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="w-full min-h-fit bg-color2 text-gray-200 p-2 flex justify-evenly items-center"
      style={{ position: "fixed", bottom: "0" }}
    >
      <Link
        className={`flex flex-col justify-center items-center h-16 w-16 ${
          location.pathname === "/" ? "text-green-400 font-bold" : ""
        }`}
        to={"/"}
      >
        <FaCow className="text-4xl" />
        <p>Animals</p>
      </Link>
      <Link
        className={`flex flex-col justify-center items-center h-16 w-16 ${
          location.pathname === "/sales" ? "text-green-400 font-bold" : ""
        }`}
        to={"/sales"}
      >
        <GrMoney className="text-4xl" />
        <p>Sales</p>
      </Link>
      <Link
        className={`flex flex-col justify-center items-center h-16 w-16 ${
          location.pathname === "/expenses" ? "text-green-400 font-bold" : ""
        }`}
        to={"/expenses"}
      >
        <FaMoneyBillTrendUp className="text-4xl" />
        <p>Expenses</p>
      </Link>
      <Link
        className={`flex flex-col justify-center items-center h-16 w-16 ${
          location.pathname === "/health" ? "text-green-400 font-bold" : ""
        }`}
        to={"/health"}
      >
        <GiHealthNormal className="text-4xl" />
        <p>Health</p>
      </Link>
    </div>
  );
};

export default Footer;
