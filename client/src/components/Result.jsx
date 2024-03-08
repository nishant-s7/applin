import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../helpers/baseUrl";
import { useState, useEffect } from "react";
import Preloader from "./Preloader";
import Banner from "./Banner";
import { MdAdd } from "react-icons/md";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function Result() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = useSelector(state => state.auth.userId);
  const colorHead = false;

  const fetchAnimals = async () => {
    try {
      const response = await axios.post(`${BASE_URL}animal/getAnimals`, {
        type: type,
        userId: userId
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

  const handleAdd = () => {
    navigate(`/animal/new`);
  }

  return (
    <section className="flex flex-col bg-white rounded-t-xl">
      <Banner text={"Cows"} bgStyle={"bg-cow-banner"} />
      <TableContainer>
        <Table className="table-auto my-4 m-auto rounded-lg max-h-[550px] w-5/6 overflow-scroll">
          <Thead>
            <Tr>
              <Th
                className={`py-3 px-5 border-b whitespace-normal text-left rounded-tl-lg ${colorHead && "bg-color3 text-white"
                  }`}
              >
                Gender
              </Th>
              <Th
                className={`py-3 px-5 border-b whitespace-normal text-left ${colorHead && "bg-color3 text-white"
                  }`}
              >
                Breed
              </Th>
              <Th
                className={`py-3 px-5 border-b whitespace-normal text-left ${colorHead && "bg-color3 text-white"
                  }`}
              >
                Status
              </Th>
              <Th
                className={`py-3 px-5 border-b whitespace-normal text-left rounded-tr-lg ${colorHead && "bg-color3 text-white"
                  }`}
              >
                Details
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {result?.map((row) => (
              <Tr key={row._id}>
                <Td className="py-2 text-center border-b break-words">
                  {row?.gender}
                </Td>
                <Td className="py-2 text-center border-b break-words">
                  {row?.breed}
                </Td>
                <Td className="py-2 text-center border-b break-words">
                  {Math.floor(
                    (new Date() - new Date(row?.dob)) / (1000 * 60 * 60 * 24)
                  )}{" "}
                  days
                </Td>
                <Td className="py-2 text-center border-b break-words">
                  <Link
                    to={`/animal/${type}/${row._id}`}
                    className="bg-color3 py-1 px-2 rounded-md text-white"
                  >
                    Details
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <button onClick={handleAdd} className="border-2 border-color3 w-16 h-16 rounded-[30%] self-center mx-[20px] my-[20px] flex justify-center items-center ">
        <MdAdd className="text-5xl text-color2" />
      </button>
    </section>
  );
}

export default Result;
