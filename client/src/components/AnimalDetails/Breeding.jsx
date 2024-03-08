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

const Breeding = () => {
  const [animal, colorHead] = useOutletContext();

  return (
    <>
    <TableContainer>
      {animal?.breedingHistory?.length > 0 ? (
        <Table className="table-auto mx-auto rounded-lg max-h-[550px] w-[400px] overflow-scroll">
          <Thead>
            <Tr>
              <Th
                className={`py-3 px-5 border-b whitespace-normal text-center rounded-tl-lg ${
                  colorHead && "bg-color1 text-white"
                }`}
              >
                Insemination Date
              </Th>
              <Th
                className={`py-3 px-5 border-b whitespace-normal text-center rounded-tr-lg ${
                  colorHead && "bg-color1 text-white"
                }`}
              >
                Expected Delivery
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {animal?.breedingHistory?.map((row) => (
              <Tr key={row._id}>
                <Td className="py-2 text-center border-b break-words">
                  {new Date(row?.inseminationDate).toLocaleDateString()}
                </Td>
                <Td className="py-2 text-center border-b break-words">
                  {new Date(row?.expectedDeliveryDate).toLocaleDateString()}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      ) : (
        <h1 className="text-center text-red-500 text-3xl">No breedings!</h1>
      )}
    </TableContainer>
    </>
  );
};

export default Breeding;
