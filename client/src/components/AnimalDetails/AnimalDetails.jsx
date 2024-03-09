import { Link, Outlet, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../helpers/baseUrl";
import { useState, useEffect } from "react";
import Preloader from "../Preloader";
import AnimalDetailsFooter from "./AnimalDetailsFooter";

const AnimalDetails = () => {
  const params = useParams();

  const [animal, setAnimal] = useState({});
  const [loading, setLoading] = useState(true);

  const colorHead = false;

  useEffect(() => {
    axios
      .post(`${BASE_URL}animal/getAnimal`, { animalId: params.id })
      .then((response) => {
        console.log(response.data.animal);
        setAnimal(response.data.animal);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <div className="h-[500px] bg-white rounded-t-3xl py-6">
            <Outlet context={[animal, colorHead]}/>
          </div>
          <AnimalDetailsFooter />
        </>
      )}
    </>
  );
};

export default AnimalDetails;
