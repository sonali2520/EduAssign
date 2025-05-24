import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[375px] h-[812px] bg-[#F7F8F9] shadow-lg overflow-hidden relative">
        <div className="absolute top-[40px] left-[20px] w-[188px] h-[69px] text-left font-bold text-[28px] leading-[36px] text-[#1D2226] opacity-100 font-[Rubik]">
          Create your PopX account
        </div>

        <Input
          id="fullname"
          type="text"
          placeholder="Mary Doe"
          className="absolute top-[140px] left-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] opacity-100"
        />
        <Label
          htmlFor="fullname"
          className="absolute top-[131px] left-[34px] w-auto h-[15px] text-left text-[13px] leading-[17px] font-normal text-[#6C25FF] opacity-100 font-[Rubik] bg-white px-1"
        >
          Full Name<span className="text-red-500">*</span>
        </Label>

        <Input
          id="phoneNumber"
          type="text"
          placeholder="Mary Doe"
          className="absolute top-[209px] left-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] opacity-100"
        />
        <Label
          htmlFor="phoneNumber"
          className="absolute top-[200px] left-[34px] w-auto h-[15px] text-left text-[13px] leading-[17px] font-normal text-[#6C25FF] opacity-100 font-[Rubik] bg-white px-1"
        >
          Phone Number<span className="text-red-500">*</span>
        </Label>

        <Input
          id="email"
          type="email"
          placeholder="Mary Doe"
          className="absolute top-[278px] left-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] opacity-100"
        />
        <Label
          htmlFor="email"
          className="absolute top-[269px] left-[34px] w-auto h-[15px] text-left text-[13px] leading-[17px] font-normal text-[#6C25FF] opacity-100 font-[Rubik] bg-white px-1"
        >
          Email Address<span className="text-red-500">*</span>
        </Label>

        <Input
          id="password"
          type="password"
          placeholder="Mary Doe"
          className="absolute top-[347px] left-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] opacity-100"
        />
        <Label
          htmlFor="password"
          className="absolute top-[338px] left-[34px] w-auto h-[15px] text-left text-[13px] leading-[17px] font-normal text-[#6C25FF] opacity-100 font-[Rubik] bg-white px-1"
        >
          Password<span className="text-red-500">*</span>
        </Label>

        <Input
          id="company"
          type="text"
          placeholder="Mary Doe"
          className="absolute top-[416px] left-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] opacity-100"
        />
        <Label
          htmlFor="company"
          className="absolute top-[407px] left-[34px] w-[94px] h-[15px] text-left text-[13px] leading-[17px] font-normal text-[#6C25FF] opacity-100 font-[Rubik] bg-white px-1"
        >
          Company Name
        </Label>

        <Label className="absolute top-[474px] left-[20px] w-auto h-[15px] text-left text-[13px] leading-[17px] font-normal font-Rubik opacity-100">
          Are you an agency?<span className="text-red-500">*</span>
        </Label>
        <RadioGroup defaultValue="yes" className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="yes"
              id="yes"
              className="absolute top-[499px] left-[20px] w-[22px] h-[22px] border border-[#919191] opacity-100"
            />
            <Label
              htmlFor="yes"
              className="absolute top-[502px] left-[54px] w-[23px] h-[17px] text-left text-[14px] leading-[17px] font-normal font-[Rubik] text-[#1D2226] opacity-100"
            >
              Yes
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="no"
              id="no"
              className="absolute top-[499px] left-[100px] w-[22px] h-[22px] border border-[#919191] opacity-100"
            />
            <Label
              htmlFor="no"
              className="absolute top-[502px] left-[134px] w-[18px] h-[17px] text-left text-[14px] leading-[17px] font-normal font-[Rubik] text-[#1D2226] opacity-100"
            >
              No
            </Label>
          </div>
        </RadioGroup>
        <button
          onClick={() => navigate("/account")}
          className="absolute top-[736px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF] rounded-[6px] opacity-100 text-white font-medium text-base font-Rubik"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
