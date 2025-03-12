import React from "react";

const StatCard = () => {
  return (
    <div className="text-white py-12 px-4 relative">
       <div
        className="absolute w-screen lg:h-70 h-120 bg-[#83ff9883] bg-blend-lighten opacity-25 pointer-events-none top-30"
        style={{
          filter: "blur(100px)",
          zIndex: 50,
        }}
      />
  {/* Title */}
  <div className="text-center relative z-60">
    <h2 className="text-2xl md:text-4xl font-bold">Numbers Are Telling Our Story</h2>
    <p className="text-gray-400 lg:mt-7 mt-2 text-sm md:text-base">Showing the stats of product</p>
  </div>

  {/* Stats Container */}
  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 max-w-5xl gap-[2px] mx-auto lg:mt-20 rounded-lg overflow-hidden relative z-60">
    {[1, 2, 3].map((_, i) => (
      <div
        key={i}
        className="bg-[#304b35a0] lg:p-15 p-10 text-center shadow-lg"
      >
        <h3 className="text-3xl md:text-4xl font-bold">300K</h3>
        <p className="text-gray-400 text-sm md:text-base">Views on the video</p>
      </div>
    ))}
  </div>
</div>

  );
};

export default StatCard;
