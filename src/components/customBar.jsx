import React from "react";

const BarAnimation = () => {
  return (
    //   {/* Text Animation */}
    <div className="bg-[#00000095] w-screen relative mb-20">
      <div className="p-4 flex items-center lg:h-10 h-5 scroll-smooth">
        {/* Wrapper for scrolling content */}
        <div className="animate whitespace-nowrap flex items-center">
          {Array(24)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="text-white lg:text-2xl text-base p-3 font-semibold whitespace-nowrap inline-flex items-center justify-center"
              >
                • NEW SITE LAUNCHING SOON&nbsp;
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BarAnimation;
