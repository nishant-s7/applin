import { useOutletContext } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

const Produce = () => {
  const [animal, colorHead] = useOutletContext();

  return (
    <>
    <TableContainer>
      {animal?.productionHistory?.length > 0 ? (
        <Table className="table-auto mx-auto rounded-lg max-h-[550px] w-[400px] overflow-scroll">
          <Thead>
            <Tr>
              <Th
                className={`py-3 px-5 border-b whitespace-normal text-center rounded-tl-lg ${
                  colorHead && "bg-color1 text-white"
                }`}
              >
                Quantity
              </Th>
              <Th
                className={`py-3 px-5 border-b whitespace-normal text-center rounded-tr-lg ${
                  colorHead && "bg-color1 text-white"
                }`}
              >
                Date
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {animal?.productionHistory?.map((row) => (
              <Tr key={row._id}>
                <Td className="py-2 text-center border-b break-words">
                  {row?.quantity}
                </Td>
                <Td className="py-2 text-center border-b break-words">
                  {new Date(row?.createdAt).toLocaleDateString()}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      ) : (
        <h1 className="text-center text-red-500 text-3xl">No milk produces!</h1>
      )}
    </TableContainer>

    </>
  );
};

export default Produce;
