import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../helpers/baseUrl";

function AddSales() {
  const userId = useSelector((state) => state.auth.userId);

  const [products, setProducts] = useState([]);
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState({})

  const handleSubmit = (e) => {

  }

  useEffect(() => {
    axios
      .post(`${BASE_URL}animal/getProducts`, { userId })
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.messages);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box
      maxW="full"
      borderWidth="1px"
      p="4"
      boxShadow="sm"
      backgroundColor="white"
      className="rounded-t-xl"
    >
      <form onSubmit={handleSubmit}>
        <FormControl id="selected" isRequired>
          <FormLabel>Type</FormLabel>
          <Select
            placeholder="Select products"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            {
              products.map((product, index) => (
                <option key={index} value={product._id}>
                  {product.quantity} {product.processing}
                </option>
              ))
            }
          </Select>
        </FormControl>
        <FormControl id="description" isRequired>
          <FormLabel>Description</FormLabel>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
        <Button mt="4" type="submit">
          Add Sale
        </Button>
      </form>
    </Box>
  );
}

export default AddSales;
