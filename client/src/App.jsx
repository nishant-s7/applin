import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Header, Footer } from "./components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userToken, userId as setuserId, login } from "./store/authSlice";

const App = () => { 
  const dispatch = useDispatch();
  const router = useNavigate();
  const auth = useSelector((state) => state.auth.userToken);
  const location = useLocation();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiryDate");
    localStorage.removeItem("userId");
    router("/");
  };
  const setAutoLogout = (milliseconds) => {
    setTimeout(() => {
      logoutHandler();
    }, milliseconds);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const expiryDate = localStorage.getItem("expiryDate");
    const userId = localStorage.getItem("userId");
    if (!token || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      logoutHandler();
      return;
    }
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    setAutoLogout(remainingMilliseconds);
    if (token) {
      dispatch(userToken(token));
      dispatch(setuserId(userId));
      dispatch(login(true))
    }
  }, []);
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";
  return (
    <section className="min-h-full w-full relative bg-color2">
      <Header />
      <Outlet />
      {!isAuthPage && <Footer />}
    </section>
  );
};

export default App;
