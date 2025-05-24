import React from "react";

const Account = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[375px] h-[812px] bg-[#F7F8F9] shadow-lg overflow-hidden relative">
        <div className="absolute top-0 left-0 w-[375px] h-[68px] bg-white shadow-md opacity-100 flex items-center px-5">
          <h1 className="absolute top-[27px] left-[15px] w-[146px] h-[22px] text-left text-[18px] leading-[21px] font-medium font-Rubik text-[#1D2226] capitalize opacity-100">
            Account settings
          </h1>
        </div>
        <div>
          <img
            src="/profile.png"
            alt="profile"
            className="absolute top-[98px] left-[20px] w-[76px] h-[76px] opacity-100 bg-no-repeat bg-left-top"
          />
          <img
            src="/camera.svg"
            alt="camera"
            className="absolute top-[147px] left-[79px] w-[21px] h-[23px] opacity-100"
          />

          <div className="absolute top-[98px] left-[116px] w-[73px] h-[18px] text-left text-[15px] leading-[19px] font-medium font-[Rubik] text-[#1D2226] capitalize opacity-100">
            Mary Doe
          </div>
          <div className="absolute top-[122px] left-[116px] w-[118px] h-[17px] text-left text-[14px] leading-[19px] font-normal font-[Rubik] text-[#1D2226] capitalize opacity-100">
            Marry@Gmail.com
          </div>
        </div>
        <div className="absolute top-[204px] left-[20px] w-[337px] h-[63px] text-left text-[14px] leading-[22px] font-normal font-[Rubik] text-[#1D2226] capitalize opacity-100">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </div>
      </div>
    </div>
  );
};

export default Account;
