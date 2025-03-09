import React from "react";

const Footer = () => {
  return (
    <div className="w-screen h-screen mt-30">
      <div className="flex flex-col justify-center w-full h-full">
        <div className="h-[70%] w-full flex lg:flex-row flex-col justify-around relative">
          <div className="absolute w-full h-150 bg-gradient-to-t from-[#83FF9780] to-[#060E0E] bg-blend-lighten bottom-0 opacity-20 pointer-events-none" />
          <div className="lg:h-full h-70 w-full lg:w-[50%] text-gray-100 lg:px-40 px-5 lg:pl-45 lg:py-40">
            <h1 className="lg:text-3xl text-lg lg:mb-7 mb-1">
              Ready to get started?
            </h1>
            <p className="lg:text-lg text-[10px] lg:mb-10 mb-8">
              Experience Krip’s AI-powered platform today—like no other!
            </p>
            <div className="flex lg:gap-10 gap-5">
              <button className="text-black lg:text-base text-[12px] cursor-pointer bg-[#2cef80] lg:px-7 px-4 lg:py-3 py-2 rounded-lg font-semibold">
                Get a Service
              </button>
              <button className="text-white lg:text-base text-[12px] border-1 cursor-pointer border-[#37f9a270] lg:px-7 px-7 lg:py-3 py-2 rounded-lg font-semibold">
                Get a Guy
              </button>
            </div>
          </div>
          <div className="h-full w-full lg:w-[50%] relative lg:p-10 p-5">
            <div className=" absolute lg:h-[50%] lg:w-[30%] h-[60%] w-[40%] rounded-2xl bg-gray-200 lg:top-40 top-15 left-30 lg:left-60 z-10"></div>
            <div className=" absolute lg:h-[30%] lg:w-[30%] h-[38%] w-[40%] rounded-2xl bg-gray-600 lg:top-20 left-12 lg:left-30"></div>
            <div className=" absolute lg:h-[15%] lg:w-[15%] h-[20%] w-[20%]  rounded-2xl lg:top-30 lg:right-55 right-15 top-8 bg-white z-20"></div>
          </div>
        </div>
        <div className=" w-full">
          <div className="flex">
            <div></div>
            <div>
              <ol>
                <li>Home</li>
                <li>About Us</li>
                <li>Support</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
