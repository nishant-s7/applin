import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Router.jsx";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { makeStore } from "./store/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={makeStore}>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </Provider>
);
