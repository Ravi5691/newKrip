import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeftLong , FaArrowRightLong } from "react-icons/fa6";

const cards = [
  { id: 1, text: "Card 1",},
  { id: 2, text: "Card 2",},
  { id: 3, text: "Card 3",},
  { id: 4, text: "Card 4",},
  { id: 5, text: "Card 5",},
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
    <div className='min-h-screen p-20 px-45'>
        <p className='text-4xl font-bold my-10'>Save Time and effort with <br />AI-driven, user-friendly features.</p>
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
                  className={`w-1/3 min-w-[33.33%] h-150 bg-[#66bb853f] flex items-center justify-center text-2xl font-bold rounded-3xl shadow-lg ${card.color}`}
                >
                  {card.text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Buttons */}
          <div className=" flex gap-4 absolute -bottom-20 right-10">
            <button
              onClick={prevCard}
              className="w-12 h-12 bg-gray-700 rounded-full hover:bg-gray-600 transition flex items-center justify-center"
            >
              <FaArrowLeftLong />
            </button>
            <button
              onClick={nextCard}
              className="w-12 h-12  bg-gray-700 rounded-full hover:bg-gray-600 transition flex items-center justify-center"
            >
              <FaArrowRightLong/>
            </button>
          </div>
        </div>
    </div>
  )
}

export default FeatureCard