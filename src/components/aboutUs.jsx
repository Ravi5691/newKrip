import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedTestimonialsDemo from "./animatedTestimonial";

const cards = [
  { id: 1, text: "Card 1" },
  { id: 2, text: "Card 2" },
  { id: 3, text: "Card 3" },
  { id: 4, text: "Card 4" },
  { id: 5, text: "Card 5" },
];

export default function AboutUs() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoginOptionsOpen, setIsLoginOptionsOpen] = useState(false);

  const toggleLoginOptions = () => {
    setIsLoginOptionsOpen(!isLoginOptionsOpen);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

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
    <div className="min-h-screen bg-[#060E0E] text-white">
      <nav>
        <div className="flex flex-col md:flex-row lg:justify-between lg:items-center items-start px-5 lg:pt-0 pt-5 md:pr-18 md:px-24 lg:h-20 h-15 relative">
          <Link to="/">
            <button className="cursor-pointer">
              <img src="logo.png" alt="" className="lg:h-8 h-6 w-auto" />
            </button>
          </Link>

          <button
            className="md:hidden ml-auto p-2 text-slate-200 right-4 top-3 absolute"
            onClick={toggleDrawer}
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Drawer */}
          {isDrawerOpen && (
            <div className="fixed inset-0 z-80 flex" onClick={closeDrawer}>
              {/* Overlay */}
              <div className="fixed inset-0 bg-black opacity-50"></div>

              {/* Drawer Content */}
              <div
                className="relative bg-[#060e0ec4] w-64 h-full shadow-lg p-5 backdrop-blur-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-5 right-4 text-slate-200"
                  onClick={closeDrawer}
                >
                  {/* Close Icon */}
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
                <nav className="mt-10">
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/"
                        className="text-slate-200"
                        onClick={closeDrawer}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/aboutus"
                        className="text-slate-200"
                        onClick={closeDrawer}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contactus"
                        className="text-slate-200"
                        onClick={closeDrawer}
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <button
                          className="w-full px-8 py-2 rounded-lg text-black font-bold bg-[#37f9a2] text-center"
                          onClick={toggleLoginOptions}
                        >
                          Login
                        </button>
                      </Link>
                    </li>
                    {/* Dropdown Menu */}
                    {isLoginOptionsOpen && (
                      <div className="absolute left-0 lg:mt-2 w-full lg:px-2 px-5 text-center lg:bg-[#11292956] backdrop-blur-lg rounded shadow-lg z-50 transition-all duration-300 ease-in-out">
                        <ul className="lg:py-2">
                          <li>
                            <Link
                              to="/freelancer-signup"
                              className="block lg:px-4 py-2 lg:border-b-1 border-1 border-[#37f9a277] lg:rounded-none rounded"
                              onClick={toggleLoginOptions}
                            >
                              Login as Freelancer
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/client-signup"
                              className="block px-4 py-2 lg:border-b-0 mt-1 lg:mt-0 border-1 border-[#37f9a277] lg:rounded-none rounded"
                              onClick={toggleLoginOptions}
                            >
                              Login as Client
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          )}

          <span className="flex flex-col md:flex-row justify-around place-items-center w-full md:w-auto gap-3">
            <Link to="/">
              <button className="mx-2 md:mx-6 hidden md:block cursor-pointer">
                Home
              </button>
            </Link>
            <Link to="/aboutus">
              <button className="mx-2 md:mx-6 hidden md:block cursor-pointer">
                About Us
              </button>
            </Link>
            <Link to="/contactus">
              <button className="mx-2 md:mx-6 hidden md:block cursor-pointer">
                Contact Us
              </button>
            </Link>
            <div className="relative">
              <Link to="#">
                <button
                  className="mx-2 md:mx-6 px-8 py-2 rounded-lg text-black font-bold bg-[#37f9a2] text-center hidden md:block cursor-pointer"
                  onClick={toggleLoginOptions}
                >
                  Login
                </button>
              </Link>
              {/* Dropdown Menu */}
              {isLoginOptionsOpen && (
                <div className="absolute -right-5 mt-4 w-48 px-2 text-center bg-[#11292956] backdrop-blur-lg rounded shadow-lg z-50 transition-all duration-300 ease-in-out lg:block hidden">
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/freelancer-signup"
                        className="block px-4 py-2 border-b-1 border-[#37f9a277]"
                        onClick={toggleLoginOptions}
                      >
                        Login as Freelancer
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/client-signup"
                        className="block px-4 py-2"
                        onClick={toggleLoginOptions}
                      >
                        Login as Client
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </span>
        </div>
        <div className="flex flex-row justify-around gap-2 lg:h-12 h-8 border-b-1 border-t-1 lg:text-sm text-[10px] border-[#13e78820]">
          <span className="self-center">Programming & Tech</span>
          <span className="self-center">Graphic design</span>
          <span className="self-center">AI Service</span>
          <span className="self-center">Video & Animation</span>
          <span className="self-center lg:block hidden">Indemand</span>
        </div>
      </nav>
      <div className="relative group h-60 lg:h-120 lg:px-25 px-4 flex flex-col justify-center text-left overflow-hidden">
        <div className="absolute inset-0 bg-[url('/kripverse.png')] bg-cover bg-center transition-all duration-300 lg:group-hover:blur-lg blur-[5px] lg:blur-none"></div>
        <div className="relative opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
          <h1 className="lg:text-5xl text-xl font-bold text-white">About Us</h1>
          <p className="lg:mt-4 lg:text-2xl text-sm font-semibold text-gray-200">
            To bridge the gap between businesses and talented professionals by
            fostering an <br className="lg:block hidden" />
            efficient and trustworthy platform for project collaboration.
          </p>
        </div>
      </div>
      {/* Vision & Mission */}
      <div className="bg-gradient-to-t from-[#83ff9815] to-[#060E0E] bg-blend-lighten bottom-0 pointer-events-none text-white py-10 px-5 lg:px-25 grid md:grid-cols-2 gap-8">
        <div className="lg:mr-20">
          <h2 className="lg:text-xl text-base font-bold">Vision</h2>
          <p className="mt-2 lg:text-base text-[12px] text-gray-300">
            To become the world's leading AI-powered platform, empowering
            businesses with innovative tools for outsourcing, workflow
            optimization, and talent sourcing.
          </p>
        </div>
        <div className="lg:ml-20">
          <h2 className="lg:text-xl text-base font-bold">Mission</h2>
          <p className="mt-2 lg:text-base text-[12px] text-gray-300">
            To deliver exceptional value through cutting-edge AI technology and
            a controlled freelance environment that ensures timely delivery and
            quality results for businesses of all sizes.
          </p>
        </div>
        <div className="col-span-2 mt-10 lg:text-base text-[12px] text-gray-400 text-left">
          At Krip.ai, we believe in harnessing the power of artificial
          intelligence to transform the way businesses operate. Our platform is
          designed to provide businesses with access to quality freelancers and
          cutting-edge project management tools, ensuring seamless execution of
          tasks. With a focus on innovation, transparency, and efficiency, we
          are committed to delivering unparalleled results for our clients.
        </div>
      </div>

      {/*Features*/}
      {/* <div className="text-white flex flex-col lg:gap-20 gap-10 lg:pt-20 lg:pb-20 pt-15 pb-25 lg:min-h-screen ">
        <div className="flex flex-col gap-3">
          <h1 className="text-center lg:text-4xl text-2xl font-semibold rounded-3xl">
            Features
          </h1>
          <p className="lg:text-sm text-[12px] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            consequuntur sint vitae cumque
          </p>
        </div>
        <div className="flex flex-col items-center justify-center lg:px-0 px-5 text-white relative">
          <div
            className="relative w-full lg:max-w-6xl max-w-4xl  overflow-hidden"
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
                  className={`w-1/3 min-w-[33.33%] lg:h-100 h-50 bg-[#66bb853f] flex items-center justify-center text-2xl font-bold rounded-lg shadow-lg ${card.color}`}
                >
                  {card.text}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-6 flex gap-4 absolute lg:-bottom-20 -bottom-13 lg:right-45 right-5">
            <button
              onClick={prevCard}
              className="px-4 py-2 text-[12px] lg:text-base bg-gray-700 rounded-lg hover:bg-gray-600 transition"
            >
              Prev
            </button>
            <button
              onClick={nextCard}
              className="px-4 py-2 text-[12px] lg:text-base bg-gray-700 rounded-lg hover:bg-gray-600 transition"
            >
              Next
            </button>
          </div>
        </div>
      </div> */}

      <AnimatedTestimonialsDemo/>
    </div>
  );
}
