import { useState } from "react";
import { motion } from "framer-motion";

const BentoGrid = () => {
  const [hovered, setHovered] = useState(null);

  const items = [
    {
      id: 1,
      text: "Make Post with AI",
      size: "col-span-2 row-span-1 h-32",
      color: "bg-blue-500",
    },
    {
      id: 2,
      text: "Proven Results",
      size: "col-span-1 row-span-1 h-32",
      color: "bg-green-500",
    },
    {
      id: 3,
      text: "White Temple",
      size: "col-span-1 row-span-2 h-72",
      color: "bg-yellow-500",
    },
    {
      id: 4,
      text: "Build on Web3",
      size: "col-span-2 row-span-1 h-32",
      color: "bg-purple-500",
    },
    {
      id: 5,
      text: "Generate Photos",
      size: "col-span-1 row-span-1 h-32",
      color: "bg-black text-white",
    },
  ];

  return (
    <div className="p-6 min-h-screen flex items-center justify-center bg-[#0f0f0f]">
      <div className="grid grid-cols-3 gap-4 w-full max-w-4xl">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className={`p-6 rounded-xl ${item.color} flex items-center justify-center text-lg font-bold ${item.size} w-full`}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
            animate={{
              scale: hovered === null ? 1 : hovered === item.id ? 1.1 : 0.9,
            }}
            transition={{ duration: 0.3 }}
          >
            {item.text}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
