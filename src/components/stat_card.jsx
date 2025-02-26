import React from "react";

const StatCard = () => {
  return (
    // <div className="flex items-center w-screen">
    //   <div className=" flex w-full lg:px-40 px-5">
    //     <div className="text-left lg:w-4/6 pr-8 lg:pr-0">
    //       <h1 className="lg:text-4xl text-lg font-semibold lg:pb-3">
    //         Numbers are <br /> Telling our Story
    //       </h1>
    //       <span className="leading-12 lg:text-base text-[10px]">Showing the stats of Product</span>
    //     </div>
    //     <div className="flex flex-col border-2 gap-y-0.5 border-[#060E0E] rounded-xl lg:w-2/6 w-1/2 relative">
    //       <div className=" lg:px-10 lg:py-7 px-4 py-3 bg-[#C8FFD41A] rounded-t-2xl">
    //         <h1 className="lg:text-3xl text-lg font-bold py-1">300 K</h1>
    //         <span className="lg:text-sm text-[10px]">Views on the Video</span>
    //       </div>
    //       <div className=" lg:px-10 lg:py-7 px-4 py-3 bg-[#C8FFD41A]">
    //         <h1 className="lg:text-3xl text-lg font-bold py-1">300 K</h1>
    //         <span className="lg:text-sm text-[10px]">Views on the Video</span>
    //       </div>
    //       <div className=" lg:px-10 lg:py-7 px-4 py-3 bg-[#C8FFD41A] rounded-b-2xl">
    //         <h1 className="lg:text-3xl text-lg font-bold py-1">300 K</h1>
    //         <span className="lg:text-sm text-[10px]">Views on the Video</span>
    //       </div>
    //       <div
    //         className="absolute lg:w-100 lg:h-20 w-50 h-10 bg-[#83ff98a2] opacity-80 bg-blend-saturation lg:top-40 top-30 rounded-full pointer-events-none"
    //         style={{
    //           transform: "rotate(140deg)",
    //           filter: "blur(75px) ",
    //           zIndex: 50,
    //         }}
    //       />
    //       <div
    //         className="absolute w-30 h-5 bg-[#83ff98a2] opacity-90 bg-blend-saturation lg:top-45 lg:left-40 top-30 left-10 rounded-full pointer-events-none"
    //         style={{
    //           transform: "rotate(140deg)",
    //           filter: "blur(75px) ",
    //           zIndex: 50,
    //         }}
    //       />
    //     </div>
    //   </div>
    // </div>
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
