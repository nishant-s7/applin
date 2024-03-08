import { GiHealthNormal } from "react-icons/gi";
import { FaCow, FaMoneyBillTrendUp } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
const Footer = () => {
  const location = useLocation();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) window.location.href = "/login";
    else setUserLoggedIn(true);
  }, []);
  return (
    <div
      className="w-full min-h-fit bg-color2 "
      style={{ position: "fixed", bottom: "0" }}
    >
      {userLoggedIn && (
        <>
          <div
            className="w-full min-h-fit bg-white text-gray-200 p-3 pb-2 flex justify-between items-center"
            style={{ position: "fixed", bottom: "0" }}
          >
            <div className="flex flex-col items-center">
              <div
                className={`${
                  location.pathname === "/" ||
                  location.pathname.startsWith("/animal")
                    ? "bg-green-800 rounded-full"
                    : ""
                }`}
              >
                <Link
                  className={`flex flex-col justify-center items-center h-10 w-10 ${
                    location.pathname === "/" ||
                    location.pathname.startsWith("/animal")
                      ? " font-bold "
                      : "text-color2"
                  }`}
                  to={"/"}
                >
                  <FaHome className="text-2xl" />
                </Link>
              </div>
              <p className="text-xs text-gray-700">Animals</p>
            </div>
            <div className="flex flex-col items-center">
              <div
                className={`${
                  location.pathname.startsWith("/sales")
                    ? "bg-green-800 rounded-full"
                    : ""
                }`}
              >
                <Link
                  className={`flex flex-col justify-center items-center h-10 w-10 ${
                    location.pathname.startsWith("/sales")
                      ? " font-bold"
                      : "text-color2"
                  }`}
                  to={"/sales"}
                >
                  <GrMoney className="text-2xl" />
                </Link>
              </div>
              <p className="text-xs text-gray-700">Sales</p>
            </div>
            <div className="flex flex-col items-center">
              <div
                className={`${
                  location.pathname.startsWith("/expenses")
                    ? "bg-green-800 rounded-full"
                    : ""
                }`}
              >
                <Link
                  className={`flex flex-col justify-center items-center h-10 w-10 ${
                    location.pathname.startsWith("/expenses")
                      ? "font-bold"
                      : "text-color2"
                  }`}
                  to={"/expenses"}
                >
                  <FaMoneyBillTrendUp className="text-2xl" />
                </Link>
              </div>
              <p className="text-xs text-gray-700">Expenses</p>
            </div>
            <div className="flex flex-col items-center">
              <div
                className={`${
                  location.pathname.startsWith("/add")
                    ? "bg-green-800 rounded-full"
                    : ""
                }`}
              >
                <Link
                  className={`flex flex-col justify-center items-center h-10 w-10 ${
                    location.pathname.startsWith("/add")
                      ? " font-bold"
                      : "text-color2"
                  }`}
                  to={"/add"}
                >
                  <GiHealthNormal className="text-2xl" />
                </Link>
              </div>
              <p className="text-xs text-gray-700">Add</p>
            </div>
            <div className="flex flex-col items-center">
              <div
                className={`${
                  location.pathname.startsWith("/info")
                    ? "bg-green-800 rounded-full"
                    : ""
                }`}
              >
                <Link
                  className={`flex flex-col justify-center items-center h-10 w-10 ${
                    location.pathname.startsWith("/info")
                      ? "font-bold"
                      : "text-color2"
                  }`}
                  to={"/info"}
                >
                  <FaInfoCircle className="text-2xl" />
                </Link>
              </div>
              <p className="text-xs text-gray-700">Info</p>
            </div>
          </div>
        </>
      )}
      {!userLoggedIn && <img src="/images/bottom.png" />}
    </div>
  );
};

export default Footer;
