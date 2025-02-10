import React from "react";

const Footer = () => {
  return (
    <div className="w-screen h-screen mt-30">
      <div className="flex flex-col justify-center w-full h-full">
        <div className="h-[70%] w-full flex flex-row justify-around relative">
          <div className="absolute w-full h-150 bg-gradient-to-t from-[#83FF9780] to-[#060E0E] bg-blend-lighten bottom-0 opacity-20 pointer-events-none" />
          <div className="h-full w-full lg:w-[50%] text-gray-100 px-40 pl-45 py-40">
            <h1 className="text-3xl mb-7">Ready to get started?</h1>
            <p className="text-lg mb-10">
              Experience Krip’s AI-powered platform today—like no other!
            </p>
            <div className="flex gap-10">
              <button className="text-black cursor-pointer bg-[#2cef80] px-7 py-3 rounded-lg font-semibold">
                Get a Service
              </button>
              <button className="text-white border-1 cursor-pointer border-[#37f9a270] px-10 py-3 rounded-lg font-semibold">
                Get a Guy
              </button>
            </div>
          </div>
          <div className="h-full w-full lg:w-[50%] relative p-10">
            <div className=" absolute h-[50%] w-[30%] rounded-2xl bg-gray-200 top-40 left-60 z-10"></div>
            <div className=" absolute h-[30%] w-[30%] rounded-2xl bg-gray-600 top-20 left-30"></div>
            <div className=" absolute h-[15%] w-[15%] rounded-2xl top-30 right-55 bg-white z-20"></div>
          </div>
        </div>
        <div className="h-[20%] w-full"></div>
      </div>
    </div>
  );
};

export default Footer;
