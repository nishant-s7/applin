import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import App from "./App";
import { Landing, Sales, Expenses, Notifications, Info, Result, AnimalDetails, AddAnimal, AddSales, AddExpenses } from "./components";
import {Details, Produce, Vaccine, Breeding} from "./components/AnimalDetails"
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Landing />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/sales/new" element={<AddSales />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/expenses/new" element={<AddExpenses />} />
      <Route path="/add" element={<Notifications />} />
      <Route path="/info" element={<Info />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/animal/new" element={<AddAnimal />} />
      <Route path="/animal/:type" element={<Result />} />
      <Route path="/animal/:type/:id" element={<AnimalDetails />}>
        <Route index element={<Details />} />
        <Route path="produce" element={<Produce />} />
        <Route path="vaccine" element={<Vaccine />} />
        <Route path="breeding" element={<Breeding />} />
      </Route>
    </Route>
  )
);
export default router;