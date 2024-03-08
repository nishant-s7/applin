import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import App from "./App";
import {
    Landing
} from './components'
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/rooms" element={<Rooms />} />
        <Route path="/book/:roomId" element={<BookForm />} />
        <Route path="/addRoom" element={<AddRoom />} />
        <Route path="/checkout" element={<CheckoutForm />} /> */}
      </Route>
    )
);
export default router;