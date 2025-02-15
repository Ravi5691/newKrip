import React from "react";

const StatCard = () => {
  return (
    <div class="flex items-center w-screen">
      <div className=" flex w-full lg:px-40 px-5">
        <div class="text-left lg:w-4/6 pr-8 lg:pr-0">
          <h1 className="lg:text-4xl text-lg font-semibold lg:pb-3">
            Numbers are <br /> Telling our Story
          </h1>
          <span class="leading-12 lg:text-base text-[10px]">Showing the stats of Product</span>
        </div>
        <div class="flex flex-col border-2 gap-y-0.5 border-[#060E0E] rounded-xl lg:w-2/6 w-1/2 relative">
          <div class=" lg:px-10 lg:py-7 px-4 py-3 bg-[#C8FFD41A] rounded-t-2xl">
            <h1 className="lg:text-3xl text-lg font-bold py-1">300 K</h1>
            <span className="lg:text-sm text-[10px]">Views on the Video</span>
          </div>
          <div class=" lg:px-10 lg:py-7 px-4 py-3 bg-[#C8FFD41A]">
            <h1 className="lg:text-3xl text-lg font-bold py-1">300 K</h1>
            <span className="lg:text-sm text-[10px]">Views on the Video</span>
          </div>
          <div class=" lg:px-10 lg:py-7 px-4 py-3 bg-[#C8FFD41A] rounded-b-2xl">
            <h1 className="lg:text-3xl text-lg font-bold py-1">300 K</h1>
            <span className="lg:text-sm text-[10px]">Views on the Video</span>
          </div>
          <div
            className="absolute w-100 h-20 bg-[#83ff98a2] opacity-50 bg-blend-saturation top-40 rounded-full pointer-events-none"
            style={{
              transform: "rotate(140deg)",
              filter: "blur(75px) ",
              zIndex: 50,
            }}
          />
          <div
            className="absolute w-30 h-5 bg-[#83ff98a2] opacity-90 bg-blend-saturation top-45 left-40 rounded-full pointer-events-none"
            style={{
              transform: "rotate(140deg)",
              filter: "blur(75px) ",
              zIndex: 50,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
