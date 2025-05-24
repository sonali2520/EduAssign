import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const formFieldStyle = {
    container:
      "absolute w-[335px] h-[40px] left-[20px] border border-[#CBCBCB] rounded-[6px] opacity-100",
    label:
      "absolute text-[13px] leading-[17px] font-normal text-[#6C25FF] font-[Rubik] bg-white px-1",
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-[375px] h-[812px] bg-[#F7F8F9] shadow-lg overflow-hidden">
        <h1 className="absolute top-[40px] left-[20px] w-[188px] text-[28px] leading-[36px] font-bold text-[#1D2226] font-[Rubik]">
          Signin to your PopX account
        </h1>

        <p className="absolute top-[123px] left-[20px] w-[232px] text-[18px] leading-[26px] font-normal text-[#1D2226] opacity-60 font-[Rubik]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        {/* Email Field */}

        <Input
          id="email"
          type="email"
          placeholder="Enter email address"
          className={`${formFieldStyle.container} top-[204px]`}
        />
        <Label
          htmlFor="email"
          className={`${formFieldStyle.label} top-[195px] left-[34px]`}
        >
          Email address
        </Label>

        {/* Password Field */}

        <Input
          id="password"
          type="password"
          placeholder="Enter Password"
          className={`${formFieldStyle.container} top-[267px]`}
        />
        <Label
          htmlFor="password"
          className={`${formFieldStyle.label} top-[258px] left-[34px]`}
        >
          Password
        </Label>

        {/* Button */}
        <button
          onClick={() => navigate("/account")}
          className="absolute top-[321px] left-[20px] w-[335px] h-[46px] bg-[#CBCBCB] rounded-[6px] text-white font-[Rubik]"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Signin;
