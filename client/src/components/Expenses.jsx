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

const Expenses = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate(`/expenses/new`);
  }

  const fetchExpenses = async () => {
    try {
      const response = await axios.post(`${BASE_URL}expenses/getExpenses`, {
        userId: userId,
      });
      if (Array.isArray(response.data.expenses)) {
        setResult(response.data.expenses);
        console.log(response.data.expenses);
      } else {
        console.error(
          "Fetched data is not an array:",
          response.data.expenses
        );
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
    useEffect(() => {
      fetchExpenses();
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
              <Th>Category</Th>
              <Th>Amount</Th>
              <Th>Description</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {result.map((expense) => (
              <Tr key={expense._id}>
                <Td>{expense.category}</Td>
                <Td>{expense.amount}</Td>
                <Td>{expense.description}</Td>
                <Td>{expense.createdAt}</Td>
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

export default Expenses