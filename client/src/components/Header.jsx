import { FaHome } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { DrawerExample } from "./Sidebar";

function Header() {
  const location = useLocation();

  return (
    <div className='w-full h-fit bg-color2 text-white font-bold p-2'>
     <div className="flex">
      <div className="flex-1">
        <h1 className="text-2xl">DairyHub</h1>
      </div>
      <div className="flex-1 flex justify-end items-center space-x-4">
        {
          location.pathname === "/login" && <a href="/signup">Register</a>
        }
        {
          location.pathname === "/signup" && <a href="/login">Login</a>
        }
        {
          location.pathname !== "/" && 
          <Link to="/">
            <FaHome fontSize={24}/>
          </Link>
        }
        <DrawerExample />
        
         
        
      </div>
     </div>
    </div>
  )
}

export default Header