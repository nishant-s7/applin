import { GiCow, GiGoat, GiBuffaloHead } from "react-icons/gi";
import Reveal from "./Reveal";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Landing() {
  const [userLoggedIn, setuserLoggedIn] = useState(false)
  useEffect(() => { 
    const token  = localStorage.getItem("token");
    if(!token) {window.location.href = "/login"}
    else {setuserLoggedIn(true)};
   }, [])
  return (
    <div className="flex flex-col min-h-screen justify-center items-center p-4 space-y-8 bg-white rounded-3xl">
      {
        userLoggedIn &&
        <>
        <Reveal>
        <Link to={`/animal/Cow`}>
          <div className="flex flex-col items-center">
            <GiCow className="text-[150px] text-color3 border-2 border-color1 rounded-2xl" />
            <h2 className='text-3xl font-light text-color1'>Cow</h2>
          </div>
        </Link>
      </Reveal>


      <Reveal>
        <Link to={`/animal/Goat`}>
          <div className="flex flex-col items-center">
            <GiGoat className="text-[150px] text-color3 border-2 border-color1 rounded-2xl" />
            <h2 className='text-3xl font-light text-color1'>Goat</h2>
          </div>
        </Link>
      </Reveal>


      <Reveal>
        <Link to={`/animal/Buffalo`}>
          <div className="flex flex-col items-center">
            <GiBuffaloHead className="text-[150px] text-color3 border-2 border-color1 rounded-2xl" />
            <h2 className='text-3xl font-light text-color1'>Buffalo</h2>
          </div>
        </Link>
      </Reveal>
        
        </>
      }
      {
        !userLoggedIn &&
        <img src="/images/cow.png" />
      }
    </div>
  )
}

export default Landing