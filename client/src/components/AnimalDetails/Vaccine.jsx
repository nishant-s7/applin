import { useOutletContext } from "react-router-dom";

const Vaccine = () => {
  const [animal, colorHead] = useOutletContext();

  return (
    <>
      {animal?.vaccinationHistory?.length > 0 ? (
        <table className="table-auto mx-auto rounded-lg max-h-[550px] w-[400px] overflow-scroll">
          <thead>
            <tr>
              <th
                className={`py-3 px-5 border-b whitespace-normal text-center rounded-tl-lg ${
                  colorHead && "bg-color1 text-white"
                }`}
              >
                Name
              </th>
              <th
                className={`py-3 px-5 border-b whitespace-normal text-center ${
                  colorHead && "bg-color1 text-white"
                }`}
              >
                Administration Date
              </th>
              <th
                className={`py-3 px-5 border-b whitespace-normal text-center rounded-tr-lg ${
                  colorHead && "bg-color1 text-white"
                }`}
              >
                Next Due Date
              </th>
            </tr>
          </thead>
          <tbody>
            {animal?.vaccinationHistory?.map((row) => (
              <tr key={row._id}>
                <td className="py-2 text-center border-b break-words">
                  {row?.name}
                </td>
                <td className="py-2 text-center border-b break-words">
                  {new Date(row?.administeredDate).toLocaleDateString()}
                </td>
                <td className="py-2 text-center border-b break-words">
                  {new Date(row?.nextDueDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1 className="text-center text-red-500 text-3xl">No vaccinations!</h1>
      )}
    </>
  );
};

export default Vaccine;
