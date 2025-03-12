import React from "react";

const Bentobox = () => {
  return (
    <div className="w-screen lg:h-screen h-80 flex flex-col lg:justify-center items-center lg:my-30 my-10 p-2 lg:p-0 overflow-x-hidden relative">
       <div className=" lg:h-[50%] absolute  z-10 lg:block hidden">
          <div
            className="absolute w-120 h-120 bg-[#83FF9780] bg-blend-lighten opacity-30 top-50 rounded-full pointer-events-none "
            style={{
              transform: "translate(-50%, -50%)",
              filter: "blur(100px)",
              zIndex: 50,
            }}
          />
        </div>
      <h1 className="text-[#37f9a2] text-lg md:text-4xl font-semibold lg:font-bold my-2 lg:my-10 z-20">
        PORTFOLIO
      </h1>
      <div className="flex flex-row gap-1 md:gap-4 lg:gap-4 w-full md:w-[85%] lg:w-[68%] h-[90%] md:h-[90%] overflow-x-hidden p-5 z-20">
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
