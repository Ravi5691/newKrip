import React, { useState } from "react";
import GetServiceCard from "./getServiceCard";
import StatCard from "./stat_card";
import { HeroScroll } from "./HeroScroll";
import Faq from "./faq";
import Footer from "./footer";
import { Link } from "react-router-dom";
import Bentobox from "./portfolioBentoBox";
import { SignupFormDemo } from "./signupForm";
import BarAnimation from "./customBar";
import { TypewriterEffectSmoothDemo } from "./typeWrittingDemo";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="bg-[#060E0E] text-white">
      <nav>
        <div className="flex flex-col md:flex-row lg:justify-between lg:items-center items-start px-5 lg:pt-0 pt-5 md:pr-18 md:px-24 lg:h-20 h-15 relative">
          <button className="cursor-pointer">
            <img src="logo.png" alt="" className="lg:h-8 h-6 w-auto" />
          </button>
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
                      <Link to="/signup">
                        <button
                          className="w-full px-8 py-2 rounded-lg text-black font-bold bg-[#37f9a2] text-center"
                          onClick={closeDrawer}
                        >
                          Login
                        </button>
                      </Link>
                    </li>
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
            <Link to="/signup">
              <button className="mx-2 md:mx-6 px-8 py-2 rounded-lg text-black font-bold bg-[#37f9a2] text-center hidden md:block cursor-pointer">
                Login
              </button>
            </Link>
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

      <main>
        <div className="flex flex-col justify-center lg:my-15 my-5 mb-8 text-center">
          {/* <span className="lg:text-5xl text-2xl font-semibold lg:leading-15 leading-10 lg:p-10 p-4 lg:block hidden ">
            "AI That Plans Your Project, Estimates Costs, <br /> and Assigns the
            Best Talent"
          </span> */}
          <div className="my-10 mb-5 lg:block hidden">
           <TypewriterEffectSmoothDemo/>
          </div>
          <span className="lg:text-5xl text-xl font-semibold lg:leading-15 leading-10 lg:p-10 p-4 lg:hidden block ">
            Find the best talent for your project
          </span>
          <span className="lg:leading-7 lg:text-lg text-sm lg:tracking-wider tracking-wide lg:px-0 px-4">
            Our Ai will help you generate a detailed Spec-sheet and find
            freelancer who meet your needs with live <br /> project tracking
            through the process
          </span>
          <div className="flex flex-row lg:p-16 p-6 justify-center lg:gap-5 gap-2  lg:text-sm text-[10px]  font-medium">
            <Link to="/selectservice">
              <button className="lg:mx-2 mx-1 text-black cursor-pointer bg-[#37f9a2] lg:px-7 px-6 py-3 rounded-lg">
                Get a Service
              </button>
            </Link>
            <button className="mx-2 text-white border-1 cursor-pointer border-[#37f9a270] px-4 py-3 rounded-lg">
              Get a Freelancer
            </button>
          </div>
        </div>
        <GetServiceCard />
        {/* <BarAnimation/> */}
        <StatCard />
        {/* <HeroScroll /> */}
      </main>
      <Bentobox />
      <Faq />
      <Footer />
     
    </div>
  );
};

export default Header;
