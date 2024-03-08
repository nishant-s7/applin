import { GiFarmTractor, GiMilkCarton } from "react-icons/gi";
function Landing() {
  return (
    <div className="max-w-full p-4 min-h-fit m-2 border border-red-600 rounded-lg flex flex-col justify-center items-center gap-8">

        <div className="w-[175px] h-[175px] min-h-fit border-2 border-color2 rounded-2xl flex justify-center items-center">
            <GiMilkCarton className="text-[150px]" />
        </div>

        <div className="w-[175px] h-[175px] min-h-fit border-2 border-color2 rounded-2xl flex justify-center items-center">
            <GiFarmTractor className="text-[150px]" />
        </div>
    </div>
  )
}

export default Landing