// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
import React, { useState } from "react";
import { motion } from "framer-motion";

const Input = React.forwardRef(
  ({ className, type = "text", ...props }, ref) => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative p-[2px] rounded-lg"
        style={{
          background: isHovered
            ? `radial-gradient(circle at ${coords.x}px ${coords.y}px, rgba(59, 130, 246, 0.5), transparent 90%)`
            : "transparent",
          transition: "background 0.2s ease",
        }}
      >
        <input
          type={type}
          className={`flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);

Input.displayName = "Input";

export { Input };
