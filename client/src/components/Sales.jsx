import axios from "axios";
import { BASE_URL } from "../helpers/baseUrl";
import { useState, useEffect } from "react";
import Preloader from "./Preloader";
import { MdAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

const Sales = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  const handleAdd = () => {
    navigate(`/sales/new`);
  }

  const fetchSales = async () => {
    try {
      const response = await axios.post(`${BASE_URL}sales/getSales`, {
        userId: userId,
      });
      if (Array.isArray(response.data.sales)) {
        setResult(response.data.sales);
        console.log(response.data.sales);
      } else {
        console.error(
          "Fetched data is not an array:",
          response.data.sales
        );
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
    useEffect(() => {
      fetchSales();
    }, []);

    if (loading) {
      return <Preloader />;
    }
  }
  return (
    <section className="flex flex-col bg-white rounded-t-xl">
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Amount</Th>
              <Th>Description</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {result.map((sale) => (
              <Tr key={sale._id}>
                <Td>{sale.amount}</Td>
                <Td>{sale.description}</Td>
                <Td>{sale.createdAt}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <button onClick={handleAdd} className="border-2 border-color3 w-16 h-16 rounded-[30%] self-center mx-[20px] my-[20px] flex justify-center items-center ">
        <MdAdd className="text-5xl text-color2" />
      </button>
    </section>
  )
}

export default Sales