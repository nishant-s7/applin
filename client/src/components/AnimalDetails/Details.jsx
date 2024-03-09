import { useOutletContext, useParams } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

const Details = () => {
  const params = useParams();
  const [animal, colorHead] = useOutletContext();
  return (
    <TableContainer className="bg-white">
      <Table className="table-auto mx-auto rounded-lg max-h-[550px] w-[400px] overflow-scroll">
        <Thead>
          <Tr>
            <Th
              className={`py-3 px-5 border-b whitespace-normal text-center rounded-t-lg ${colorHead && "bg-color1 text-white"
                }`}
              colSpan="2"
            >
              {params.type}
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td className="py-2 text-center border-b break-words">Gender</Td>
            <Td className="py-2 text-center border-b break-words font-bold">
              {animal?.gender}
            </Td>
          </Tr>
          <Tr>
            <Td className="py-2 text-center border-b break-words">Breed</Td>
            <Td className="py-2 text-center border-b break-words font-bold">
              {animal?.breed}
            </Td>
          </Tr>
          <Tr>
            <Td className="py-2 text-center border-b break-words">Age</Td>
            <Td className="py-2 text-center border-b break-words font-bold">
              {Math.floor(
                (new Date() - new Date(animal?.dob)) / (1000 * 60 * 60 * 24)
              )}{" "}
              days
            </Td>
          </Tr>
          <Tr>
            <Td className="py-2 text-center border-b break-words">
              Health Status
            </Td>
            <Td className="py-2 text-center border-b break-words font-bold">
              {animal?.healthStatus}
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Details;
