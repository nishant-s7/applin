import { useOutletContext, useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
  const [animal, colorHead] = useOutletContext();
  return (
    <table className="table-auto mx-auto rounded-lg max-h-[550px] w-[400px] overflow-scroll">
      <thead>
        <tr>
          <th
            className={`py-3 px-5 border-b whitespace-normal text-center rounded-t-lg ${
              colorHead && "bg-color1 text-white"
            }`}
            colSpan="2"
          >
            {params.type}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 text-center border-b break-words">Gender</td>
          <td className="py-2 text-center border-b break-words font-bold">
            {animal?.gender}
          </td>
        </tr>
        <tr>
          <td className="py-2 text-center border-b break-words">Breed</td>
          <td className="py-2 text-center border-b break-words font-bold">
            {animal?.breed}
          </td>
        </tr>
        <tr>
          <td className="py-2 text-center border-b break-words">Age</td>
          <td className="py-2 text-center border-b break-words font-bold">
            {Math.floor(
              (new Date() - new Date(animal?.dob)) / (1000 * 60 * 60 * 24)
            )}{" "}
            days
          </td>
        </tr>
        <tr>
          <td className="py-2 text-center border-b break-words">
            Health Status
          </td>
          <td className="py-2 text-center border-b break-words font-bold">
            {animal?.healthStatus}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Details;
