import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();

  const inputField = (id, label, type = "text", top, isRequired = true) => (
    <>
      <Input
        id={id}
        type={type}
        placeholder="Mary Doe"
        className={`absolute top-[${top}px] left-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px]`}
      />
      <Label
        htmlFor={id}
        className={`absolute top-[${
          top - 9
        }px] left-[34px] text-[13px] leading-[17px] text-[#6C25FF] bg-white px-1 font-[Rubik]`}
      >
        {label}
        {isRequired && <span className="text-red-500">*</span>}
      </Label>
    </>
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-[375px] h-[812px] bg-[#F7F8F9] shadow-lg">
        <h1 className="absolute top-[40px] left-[20px] text-[28px] leading-[36px] font-bold text-[#1D2226] font-[Rubik]">
          Create your PopX account
        </h1>

        {inputField("fullname", "Full Name", "text", 140)}
        {inputField("phoneNumber", "Phone Number", "text", 209)}
        {inputField("email", "Email Address", "email", 278)}
        {inputField("password", "Password", "password", 347)}
        {inputField("company", "Company Name", "text", 416, false)}

        <Label className="absolute top-[474px] left-[20px] text-[13px] leading-[17px] font-normal font-[Rubik]">
          Are you an agency?<span className="text-red-500">*</span>
        </Label>

        <RadioGroup defaultValue="yes">
          <div className="absolute top-[499px] left-[20px] flex items-center space-x-2">
            <RadioGroupItem
              value="yes"
              id="yes"
              className="border border-[#919191]"
            />
            <Label
              htmlFor="yes"
              className="text-[14px] font-[Rubik] text-[#1D2226]"
            >
              Yes
            </Label>
          </div>
          <div className="absolute top-[499px] left-[100px] flex items-center space-x-2">
            <RadioGroupItem
              value="no"
              id="no"
              className="border border-[#919191]"
            />
            <Label
              htmlFor="no"
              className="text-[14px] font-[Rubik] text-[#1D2226]"
            >
              No
            </Label>
          </div>
        </RadioGroup>

        <button
          onClick={() => navigate("/account")}
          className="absolute top-[736px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF] text-white rounded-[6px] text-base font-medium font-[Rubik]"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
