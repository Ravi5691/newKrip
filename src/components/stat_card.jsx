import React from "react";

const StatCard = () => {
  return (
    <div class="flex items-center w-screen">
      <div className=" flex w-full px-40">
        <div class="text-left w-4/6">
          <h1 className="text-4xl font-semibold pb-3">
            Numbers are <br /> Telling our Story
          </h1>
          <span class="leading-12 text-">Showing the stats of Product</span>
        </div>
        <div class="flex flex-col border-2 gap-y-0.5 border-[#060E0E] rounded-xl w-2/6 relative">
          <div class=" px-10 py-7 bg-[#C8FFD41A] rounded-t-2xl">
            <h1 className="text-3xl font-bold py-1">300 K</h1>
            <span className="text-sm">Views on the Video</span>
          </div>
          <div class=" px-10 py-7 bg-[#C8FFD41A]">
            <h1 className="text-3xl font-bold py-1">300 K</h1>
            <span className="text-sm">Views on the Video</span>
          </div>
          <div class=" px-10 py-7 bg-[#C8FFD41A] rounded-b-2xl">
            <h1 className="text-3xl font-bold py-1">300 K</h1>
            <span className="text-sm">Views on the Video</span>
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
