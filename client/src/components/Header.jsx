import { FaHome } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { DrawerExample } from "./Sidebar";
import { useSelector } from "react-redux";
import { GiCow } from "react-icons/gi";

function Header() {
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      {isAuthenticated && (
        <div className="w-full h-fit bg-color2 text-white font-bold p-2 py-3">
          <div className="flex">
            <div className="flex">
              <h1 className="text-2xl">DairyDash</h1> <GiCow />
            </div>
            <div className="flex-1 flex justify-end items-center space-x-4">
              {location.pathname !== "/" && isAuthenticated && (
                <Link to="/">
                  <FaHome fontSize={24} />
                </Link>
              )}

              <DrawerExample />
            </div>
          </div>
        </div>
      )}
      {!isAuthenticated &&
        (location.pathname === "/login" || location.pathname === "/signup") && (
          <div className="w-full h-fit bg-color2 text-white font-bold p-2 py-3">
            <div className="flex">
              <div className="flex-1">
                <h1 className="text-2xl">DairyDash</h1>
              </div>
              <div className="flex-1 flex justify-end items-center space-x-4">
                {location.pathname !== "/" && isAuthenticated && (
                  <Link to="/">
                    <FaHome fontSize={24} />
                  </Link>
                )}

                <DrawerExample />
              </div>
            </div>
          </div>
        )}
    </>
  );
}

export default Header;
