import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../helpers/baseUrl";
import { useState, useEffect } from "react";
import Preloader from "./Preloader";
import Banner from "./Banner";

function Result() {
  const { type } = useParams();

  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  const colorHead = true;

  const fetchAnimals = async () => {
    try {
      const response = await axios.post(`${BASE_URL}animal/getAnimals`, {
        type: type,
      });
      if (Array.isArray(response.data.animals)) {
        setResult(response.data.animals);
        console.log(response.data.animals);
      } else {
        console.error(
          "Fetched data is not an array:",
          response.data.categories
        );
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnimals();
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <Banner text={"Cows"} bgStyle={"bg-cow-banner"} />
      <table className="table-auto my-4 m-auto rounded-lg max-h-[550px] w-5/6 overflow-scroll">
        <thead>
          <tr>
            <th
              className={`py-3 px-5 border-b whitespace-normal text-left rounded-tl-lg ${
                colorHead && "bg-color1 text-white"
              }`}
            >
              Gender
            </th>
            <th
              className={`py-3 px-5 border-b whitespace-normal text-left ${
                colorHead && "bg-color1 text-white"
              }`}
            >
              Breed
            </th>
            <th
              className={`py-3 px-5 border-b whitespace-normal text-left ${
                colorHead && "bg-color1 text-white"
              }`}
            >
              Status
            </th>
            <th
              className={`py-3 px-5 border-b whitespace-normal text-left rounded-tr-lg ${
                colorHead && "bg-color1 text-white"
              }`}
            >
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          {result?.map((row) => (
            <tr key={row._id}>
              <td className="py-2 text-center border-b break-words">
                {row?.gender}
              </td>
              <td className="py-2 text-center border-b break-words">
                {row?.breed}
              </td>
              <td className="py-2 text-center border-b break-words">
                {Math.floor(
                  (new Date() - new Date(row?.dob)) / (1000 * 60 * 60 * 24)
                )}{" "}
                days
              </td>
              <td className="py-2 text-center border-b break-words">
                <Link
                  to={`/animal/${type}/${row._id}`}
                  className="bg-color1 py-1 px-2 rounded-md text-white"
                >
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Result;
