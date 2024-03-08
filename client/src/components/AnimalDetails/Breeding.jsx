import { useOutletContext } from "react-router-dom";

const Breeding = () => {
  const [animal, colorHead] = useOutletContext();

  return (
    <>
      {animal?.breedingHistory?.length > 0 ? (
        <table className="table-auto mx-auto rounded-lg max-h-[550px] w-[400px] overflow-scroll">
          <thead>
            <tr>
              <th
                className={`py-3 px-5 border-b whitespace-normal text-center rounded-tl-lg ${
                  colorHead && "bg-color1 text-white"
                }`}
              >
                Insemination Date
              </th>
              <th
                className={`py-3 px-5 border-b whitespace-normal text-center rounded-tr-lg ${
                  colorHead && "bg-color1 text-white"
                }`}
              >
                Expected Delivery
              </th>
            </tr>
          </thead>
          <tbody>
            {animal?.breedingHistory?.map((row) => (
              <tr key={row._id}>
                <td className="py-2 text-center border-b break-words">
                  {new Date(row?.inseminationDate).toLocaleDateString()}
                </td>
                <td className="py-2 text-center border-b break-words">
                  {new Date(row?.expectedDeliveryDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1 className="text-center text-red-500 text-3xl">No breedings!</h1>
      )}
    </>
  );
};

export default Breeding;
