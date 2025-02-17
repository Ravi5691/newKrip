import React from "react";

const Bentobox = () => {
  return (
    <div className="w-screen lg:h-screen h-80 flex flex-col lg:justify-center items-center my-30 p-2 lg:p-0 overflow-x-hidden">
      <h1 className="text-[#37f9a2] text-lg md:text-4xl font-semibold lg:font-bold my-2 lg:my-10">
        PORTFOLIO
      </h1>
      <div className="flex flex-row gap-1 md:gap-4 lg:gap-4 w-full md:w-[85%] lg:w-[68%] h-[90%] md:h-[90%] overflow-x-hidden p-5">
        <div className="w-3/5 md:w-4/6 flex flex-col gap-1 md:gap-4 h-full">
          <div className="w-full h-1/2 flex flex-row gap-1 md:gap-4">
            <div className="w-1/2 h-full rounded-[8px] lg:rounded-2xl overflow-hidden ">
              <img
                src="/bentoimg/1.jpg"
                alt="img"
                className="w-full h-full object-cover hover:scale-110 transition-all duration-400 delay-100 ease-in-out"
              />
            </div>
            <div className="w-1/2 h-full flex flex-col gap-1 md:gap-4">
              <div className="w-full h-[65%]  rounded-[8px] lg:rounded-2xl overflow-hidden">
                <img
                  src="/bentoimg/2.png"
                  alt="img"
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-400 delay-100 ease-in-out"
                />
              </div>
              <div className="w-full h-[35%] flex justify-center items-center bg-gradient-to-r from-[#9AE7DF] via-[#83FF97] to-[#9AE7DF] rounded-[8px] lg:rounded-2xl">
                <span className="text-[#000000c3] lg:text-3xl text-[10px] font-semibold  hover:scale-110 transition-all duration-400 delay-100 ease-in-out">
                  Proven Result
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2  rounded-[8px] lg:rounded-2xl overflow-hidden">
            <img
              src="/bentoimg/4.jpg"
              alt="img"
              className="w-full h-full object-cover hover:scale-110 transition-all duration-400 delay-100 ease-in-out"
            />
          </div>
        </div>
        <div className="w-2/5 md:w-2/6 flex flex-col gap-1 md:gap-4 h-full">
          <div className="w-full h-[65%] rounded-[8px] lg:rounded-2xl overflow-hidden">
            <img
              src="/bentoimg/3.jpg"
              alt="img"
              className="w-full h-full object-cover hover:scale-110 transition-all duration-400 delay-100 ease-in-out"
            />
          </div>
          <div className="w-full h-[35%] rounded-[8px] lg:rounded-2xl  overflow-hidden">
            <img
              src="/bentoimg/5.jpg"
              alt="img"
              className="w-full h-full object-cover hover:scale-110 transition-all duration-400 delay-100 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bentobox;
