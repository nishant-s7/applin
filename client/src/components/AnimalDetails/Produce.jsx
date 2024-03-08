import { useOutletContext } from "react-router-dom";

const Produce = () => {
  const [animal, colorHead] = useOutletContext();

  return (
    <>
      {animal?.productionHistory?.length > 0 ? (
        <table className="table-auto mx-auto rounded-lg max-h-[550px] w-[400px] overflow-scroll">
          <thead>
            <tr>
              <th
                className={`py-3 px-5 border-b whitespace-normal text-center rounded-tl-lg ${
                  colorHead && "bg-color1 text-white"
                }`}
              >
                Quantity
              </th>
              <th
                className={`py-3 px-5 border-b whitespace-normal text-center rounded-tr-lg ${
                  colorHead && "bg-color1 text-white"
                }`}
              >
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {animal?.productionHistory?.map((row) => (
              <tr key={row._id}>
                <td className="py-2 text-center border-b break-words">
                  {row?.quantity}
                </td>
                <td className="py-2 text-center border-b break-words">
                  {new Date(row?.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1 className="text-center text-red-500 text-3xl">No milk produces!</h1>
      )}
    </>
  );
};

export default Produce;
