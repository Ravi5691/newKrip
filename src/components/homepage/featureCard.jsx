import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const cards = [
  { id: 1, img: "/featureimg/frame1.png" },
  { id: 2, img: "/featureimg/frame2.png" },
  { id: 3, img: "/featureimg/frame3.png" },
  { id: 4, img: "/featureimg/frame4.png" },
];

const FeatureCard = () => {
  // feature toogle card
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  const nextCard = () => {
    if (index < cards.length - 2) setIndex(index + 1);
  };

  const prevCard = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="lg:min-h-screen py-20 lg:p-30 px-5 lg:px-45 overflow-x-hidden lg:mb-0 mb-25">
      <p className="lg:text-4xl text-2xl text-[#ffffff] font-bold my-10">
        Save <span className="text-green-400">Time</span> and <span className="text-green-400">Effort</span> with <br />
        AI-driven, user-friendly <span className="text-green-400">features</span>.
      </p>
      <div className="flex flex-col items-center justify-center text-white relative">
        {/* Card Container */}
        <div
          className="relative w-full max-w-6xl overflow-hidden"
          ref={containerRef}
        >
          <motion.div
            className="flex gap-4 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{
              left: -(
                (cards.length - 2.5) *
                  (containerRef.current?.offsetWidth / 3) || 0
              ),
              right: 0,
            }}
            animate={{ x: `-${index * (100 / 3)}%` }}
            transition={{ duration: 0.5 }}
            dragElastic={0.5}
            dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }} // ✅ Replaces dragSnapToOrigin
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="lg:w-1/3 w-2/3 min-w-[45%] lg:min-w-[33.33%] h-75 lg:h-150 bg-cover bg-center flex items-center justify-center text-2xl font-bold lg:rounded-3xl rounded-xl shadow-lg brightness-200"
                style={{ backgroundImage: `url(${card.img})` }}
              ></div>
            ))}
          </motion.div>
        </div>

        {/* Buttons */}
        <div className=" flex gap-4 absolute lg:-bottom-20 -bottom-12 lg:right-10 right-5">
          <button
            onClick={prevCard}
            className="lg:w-12 lg:h-12 h-7 w-7 bg-gray-700 rounded-full hover:bg-gray-600 transition flex items-center justify-center"
          >
            <FaArrowLeftLong />
          </button>
          <button
            onClick={nextCard}
            className="lg:w-12 lg:h-12 h-7 w-7 bg-gray-700 rounded-full hover:bg-gray-600 transition flex items-center justify-center"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
