import { IoNotifications } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { FaCloud, FaHome, FaInfoCircle } from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { BASE_URL } from "../helpers/baseUrl";

const Footer = () => {
  const location = useLocation();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [messageCount, setMessageCount] = useState(0);

  const showAlert = useRef(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) window.location.href = "/login";
    else setUserLoggedIn(true);

    axios
      .post(`${BASE_URL}messages/sendMessages`, {
        userId: localStorage.getItem("userId"),
      })
      .then((res) => {
        console.log(res.data.count);
        setMessageCount(res.data.count);
      })
      .catch((err) => console.log(err));
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
                className={`relative ${
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
                  onClick={() => showAlert.current = false}
                >
                  <IoNotifications className="text-2xl" />
                </Link>
                {(messageCount > 0 && showAlert.current) && (
                  <div className="bg-red-600 rounded-full h-5 w-5 absolute top-0 right-0 flex items-center justify-center text-xs">
                    {messageCount}
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-700">Alerts</p>
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
                  <FaCloud className="text-2xl" />
                </Link>
              </div>
              <p className="text-xs text-gray-700">Weather</p>
            </div>
          </div>
        </>
      )}
      {!userLoggedIn && <img src="/images/bottom.png" />}
    </div>
  );
};

export default Footer;
