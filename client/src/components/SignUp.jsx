import { Link , useNavigate} from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import { BASE_URL } from "../helpers/baseUrl";
import { useToast } from "@chakra-ui/toast";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
  });
  const toast = useToast();
  const router = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const response = await fetch(BASE_URL +'auth/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const res = await response.json();
      if (response.status == 433) {
      // setbuttondisabled(false)
        router.push("/signUp");
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
        router("/login");
      }
     else {
      // setbuttondisabled(false)
      router("/signUp");
    }
  }catch(err){
    console.log(err)
    }
  };

  return (
    <section className="bg-white rounded-3xl">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div class="flex justify-center mx-auto">
            <img
              class="w-auto  h-24"
              src="/images/cow.png"
              alt=""
            />
          </div>

          <div className="flex items-center justify-center mt-6">
            <Link
              to="/login"
              className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b border-gray-2 "
            >
              Sign in
            </Link>

            <Link
              href="/signup"
              className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-color2 dark:border-blue-400 dark:text-white"
            >
              Sign up
            </Link>
          </div>

          <div className="relative flex items-center mt-6">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>

            <input
              type="email"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email address"
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className="relative flex items-center mt-6">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <FaPhoneAlt />
              </svg>
            </span>

            <input
              type="phone"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Mobile Number"
              name="phone"
              onChange={handleChange}
            />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>

            <input
              type="password"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>

          <div className="mt-6">
            <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-color2 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Sign Up
            </button>

            <div className="mt-6 text-center ">
              <Link
                to="/login"
                className="text-sm text-color3 hover:underline dark:text-blue-400"
              >
                Already have an account?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
