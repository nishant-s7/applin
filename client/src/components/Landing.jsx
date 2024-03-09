import { GiCow, GiGoat, GiBuffaloHead } from "react-icons/gi";
import Reveal from "./Reveal";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userInfo as sendInfo } from "../store/authSlice";
function Landing() {
  const [userLoggedIn, setuserLoggedIn] = useState(false);
  const userInfo = useSelector((state) => state.auth.userInfo);
  console.log(userInfo);
  const dispatch = useDispatch();
  const fetchUserData = async (userId, token) => {
    fetch("http://localhost:3000/auth/myinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userId: userId }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.user);
        dispatch(sendInfo(data.user));
      });
  };
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    const userInfo = localStorage.getItem("userInfo");
    fetchUserData(userId, token);
    if (!token) {
      window.location.href = "/login";
    } else {
      setuserLoggedIn(true);
    }
  }, []);
  return (
    <div className="flex flex-col justify-center items-center p-4 space-y-8 bg-white rounded-3xl pb-24">
      {userLoggedIn && (
        <>
          <div className="py-6 shadow-lg px-4 m-2 flex justify-between align-center w-full rounded-xl border-2 text-xl">
            <h1 className="text-xl">
              <span style={{ fontWeight: 700 }}>
                Hi {userInfo.firstName} {userInfo.lastName}!
              </span>{" "}
              <br />
              Welcome to the DairyDash.
            </h1>
            <img className="w-14 rounded-full h-14" src={userInfo.profile} />
          </div>
          <div className="p-4 rounded-xl shadow-lg border-2 w-full">
            <h2 className="text-left text-xl font-bold " >Pet Summary : </h2>
            <div className="flex mt-3 flex-wrap justify-between items-center">
            {   userInfo?.animals?.map((animal, index) => (
                <div key={index} className="flex flex-col w-1/2 gap-4">
                  <h3 className="text-lg">{`Total ${animal.type}s: ${animal.count}`}</h3>
                </div>
              ))}
          </div>
          </div>
          <div className="flex flex-col gap-8">
            <Reveal>
              <Link to={`/animal/Cow`}>
                <div className="flex px-4 g h-[120px] rounded-lg shadow-xl items-center justify-between bg-color2">
                  <GiCow className="text-[120px] text-white rounded-2xl" />
                  <h2 className="text-3xl font-bold text-white ">Cow</h2>
                </div>
              </Link>
            </Reveal>

            <Reveal>
              <Link to={`/animal/Goat`}>
                <div className="flex px-4 rounded-lg  h-[120px] shadow-lg items-center justify-between bg-color2">
                  <GiGoat className="text-[100px]  text-white rounded-2xl" />
                  <h2 className="text-3xl font-bold text-white">Goat</h2>
                </div>
              </Link>
            </Reveal>

            <Reveal>
              <Link to={`/animal/Buffalo`}>
                <div className="flex px-4 rounded-lg  h-[120px] shadow-lg items-center justify-between bg-color2">
                  <GiBuffaloHead className="text-[90px] text-white rounded-2xl" />
                  <h2 className="text-3xl font-bold text-white">Buffalo</h2>
                </div>
              </Link>
            </Reveal>
          </div>
        </>
      )}
      {!userLoggedIn && <div className="h-screen flex justify-center items-center">
        
        <img src="/images/cow.png" />
        </div>}
    </div>
  );
}

export default Landing;

