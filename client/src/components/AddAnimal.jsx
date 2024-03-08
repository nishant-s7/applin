import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../helpers/baseUrl";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";

const AddAnimal = () => {
  const [animalType, setAnimalType] = useState("");
  const [gender, setGender] = useState("Male");
  const [breed, setBreed] = useState("");
  const [dob, setDob] = useState("");
  const [healthStatus, setHealthStatus] = useState("Healthy");
  const uid = useSelector((state) => state?.auth?.userId);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}animal/addAnimal`, {
        type: animalType,
        breed: breed,
        dob: dob,
        gender: gender,
        userId: uid,
      });
      console.log(response.data.message);
      setAnimalType("");
      setGender("Male");
      setBreed("");
      setDob("");
      setHealthStatus("Healthy");
    } catch (error) {
      console.error("Error adding animal:", error.message);
    }
  };

  return (
    <Box maxW="full" borderWidth="1px" borderRadius="lg" p="4" m='6' boxShadow="lg">
      <form onSubmit={handleSubmit}>
        <FormControl id="animalType" isRequired>
          <FormLabel>Type</FormLabel>
          <Select
            placeholder="Select animal type"
            value={animalType}
            onChange={(e) => setAnimalType(e.target.value)}
          >
            <option value="cow">Cow</option>
            <option value="goat">Goat</option>
            <option value="buffalo">Buffalo</option>
          </Select>
        </FormControl>
        <FormControl id="gender" isRequired>
          <FormLabel>Gender</FormLabel>
          <Select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>
        </FormControl>
        <FormControl id="breed" isRequired>
          <FormLabel>Breed</FormLabel>
          <Input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </FormControl>
        <FormControl id="dob" isRequired>
          <FormLabel>Date of Birth</FormLabel>
          <Input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </FormControl>
        <FormControl id="healthStatus" isRequired>
          <FormLabel>Health Status</FormLabel>
          <Select
            value={healthStatus}
            onChange={(e) => setHealthStatus(e.target.value)}
          >
            <option value="Healthy">Healthy</option>
            <option value="Sick">Sick</option>
            <option value="Recovering">Recovering</option>
          </Select>
        </FormControl>
        <Button mt="4" type="submit">
          Add Animal
        </Button>
      </form>
    </Box>
  );
};

export default AddAnimal;
