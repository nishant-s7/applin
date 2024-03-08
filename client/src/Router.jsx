import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import App from "./App";
import { Landing, Sales, Expenses, Health, Result } from "./components";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Landing />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/health" element={<Health />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/animal/:type" element={<Result />} />
    </Route>
  )
);
export default router;