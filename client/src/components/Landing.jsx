import { GiCow, GiGoat, GiBuffaloHead } from "react-icons/gi";
import Reveal from "./Reveal";

function Landing() {
  return (
    <div className="flex flex-col justify-center items-center p-4 space-y-8">

      <Reveal>
        <div className="flex flex-col items-center">
          <GiCow className="text-[150px] text-color3 border-2 border-color1 rounded-2xl" />
          <h2 className='text-3xl font-light text-color1'>Cow</h2>
        </div>
      </Reveal>


      <Reveal>
        <div className="flex flex-col items-center">
          <GiGoat className="text-[150px] text-color3 border-2 border-color1 rounded-2xl" />
          <h2 className='text-3xl font-light text-color1'>Goat</h2>
        </div>
      </Reveal>


      <Reveal>
        <div className="flex flex-col items-center">
          <GiBuffaloHead className="text-[150px] text-color3 border-2 border-color1 rounded-2xl" />
          <h2 className='text-3xl font-light text-color1'>Buffalo</h2>
        </div>
      </Reveal>
    </div>
  )
}

export default Landing