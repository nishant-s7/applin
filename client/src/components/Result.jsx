import { useParams } from "react-router-dom"
import axios from 'axios'
import { BASE_URL } from "../helpers/baseUrl";
import { useState, useEffect } from "react";
import Preloader from "./Preloader";

function Result() {
    const { type } = useParams();
    console.log(type);

    const [result, setResult] = useState([]);
    const heading = [];
    const [loading, setLoading] = useState(true);

    const fetchAnimals = async () => {
        try{
            const response = await axios.post(`${BASE_URL}animal/getAnimals`, {type: type});
            if(Array.isArray(response.data.animals)){
                setResult(response.data.animals);
                console.log(response.data.animals);
            } else {
                console.error(
                    "Fetched data is not an array:",
                    response.data.categories
                  );
            }
        } catch(error){
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchAnimals();
    }, [])

    if(loading){
        return <Preloader />
    }

  return (
    <table className="w-full table-auto bg-white max-h-14 overflow-scroll">
      <thead>
        <tr>
          {headings?.length > 0 &&
            headings.map((heading, index) => (
              <th
                key={index}
                className={`py-3 px-5 border-b whitespace-normal text-left ${
                  colorHead && "bg-blue-950"
                }`}
              >
                {heading}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {rows?.map((row) => (
          <tr key={row._id} className="max-h-14">
            <td className="py-3 px-5 border-b break-words font-bold">
              {isProject
                ? row?.name
                : isFreelancer
                ? row?.client?.firstName
                : row?.freelancer?.firstName}
            </td>
            <td className="py-3 px-5 border-b break-words">
              {isProject ? row?.subCategoryId?.name : row?.gig?.name}
            </td>
            <td className="py-3 px-5 border-b break-words">
              {isProject ? row?.price : row?.gig?.price}
            </td>
            <td className="py-3 px-5 border-b break-words">
              {isProject ? row?.description : row?.details}
            </td>
            {!isProject && (
              <td className="py-3 px-5 border-b break-words">{row?.status}</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Result