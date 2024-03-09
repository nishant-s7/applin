import { Link , useNavigate} from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import { BASE_URL } from "../helpers/baseUrl";
import { useToast } from "@chakra-ui/toast";
import { useDispatch } from "react-redux";
import { login, userId, userToken, userInfo } from "../store/authSlice";
export const Login = () => {
    const router = useNavigate();
    const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const toast = useToast();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
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


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(BASE_URL+'auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const res = await response.json();
      if (response.status == 433) {
        // setbuttondisabled(false)
        router("/login");
          toast({
            title: res.message,
            status: "error",
            isClosable: true,
          });
        } else if (response.status == 403) {
        // setbuttondisabled(false)
        router("/login");
          toast({
            title: res.message,
            status: "error",
            isClosable: true,
          });
        } else if (response.status == 201) {
        // setbuttondisabled(false)
    
          toast({
            title: res.message,
            status: "success",
            isClosable: true,
          });
          localStorage.setItem("token", res.token);
          localStorage.setItem("userId", res.userId);
          localStorage.setItem("user", res.user);
          dispatch(userToken(res.token));
          dispatch(login(true));
          dispatch(userId(res.userId));
          dispatch(userInfo(res.user));
          const remainingMilliseconds = 60 * 60 * 1000;
          const expiryDate = new Date(
            new Date().getTime() + remainingMilliseconds
          );
          localStorage.setItem("expiryDate", expiryDate.toISOString());
          router("/");
        }
       else {
        router.push("/login");
      }
    }catch(err){
        console.log(err)
    }
    }
  return (
    <section class=" bg-white rounded-3xl rounded-b-none">
      <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form class="w-full max-w-md" onSubmit={handleSubmit}>
          <div class="flex justify-center mx-auto">
            <img
              class="w-auto  h-24"
              src="/images/cow.png"
              alt=""
            />
          </div>

          <div class="flex items-center justify-center mt-6">
            <Link
              to="/login"
              class="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-color2 dark:border-blue-400 dark:text-white"
            >
              Sign in
            </Link>

            <Link
              to="/signup"
              class="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b border-gray-300 dark:border-blue-400 dark:text-white dark:border-gray-400 dark:text-gray-300"
            >
              Sign up
            </Link>
          </div>

          <div class="relative flex items-center mt-6">
            <span class="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <FaPhoneAlt />
              </svg>
            </span>

            <input
              type="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Mobile Number"
            />
          </div>

          <div class="relative flex items-center mt-4">
            <span class="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>

            <input
              type="password"
              name="password"
              onChange={handleChange}
              class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
            />
          </div>

          <div class="mt-6">
            <button type="submit" class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-color2 rounded-lg hover:bg-color3 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Sign Up
            </button>

            <div class="mt-6 text-center ">
              <Link
                to="/signup"
                class="text-sm text-color3 hover:underline dark:text-blue-400"
              >
                Don't Have an Account? Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
