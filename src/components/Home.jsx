import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-[375px] h-[812px] bg-[#F7F8F9] shadow-lg overflow-hidden">
        <h1 className="absolute top-[549px] left-[20px] text-[28px] font-bold text-[#1D2226] font-[Rubik]">
          Welcome to PopX
        </h1>

        <p className="absolute top-[592px] left-[20px] w-[232px] text-[18px] leading-[26px] font-normal text-[#1D2226] opacity-60 font-[Rubik]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <Button
          onClick={() => navigate("/createaccount")}
          className="absolute top-[669px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF] rounded-[6px] text-white"
        >
          Create Account
        </Button>

        <Button
          onClick={() => navigate("/signin")}
          className="absolute top-[725px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF4B] rounded-[6px] text-black"
        >
          Already Registered? Login
        </Button>
      </div>
    </div>
  );
};

export default Home;
