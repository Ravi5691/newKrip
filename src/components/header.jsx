import React from "react";
import GetServiceCard from "./getServiceCard";
import StatCard from "./stat_card";
import { HeroScroll } from "./HeroScroll";
import Faq from "./faq";
import Footer from "./footer";
import { Link } from "react-router-dom";
import Bentobox from "./portfolioBentoBox";
import { SignupFormDemo } from "./signupForm";

const Header = () => {
  return (
    <div className="bg-[#060E0E] text-white">
      <nav>
        <div className="flex flex-col md:flex-row lg:justify-between lg:items-center items-start px-5 lg:pt-0 pt-5 md:pr-18 md:px-24 lg:h-20 h-15">
          <button className="cursor-pointer">
            <img src="logo.png" alt="" className="lg:h-8 h-6 w-auto" />
          </button>
          <span className="flex flex-col md:flex-row justify-around w-full md:w-auto gap-3">
            <button className="mx-2 md:mx-6 hidden md:block">Home</button>
            <button className="mx-2 md:mx-6 hidden md:block">About Us</button>
            <button className="mx-2 md:mx-6 hidden md:block">Contact Us</button>
            <Link to="/signup">
              <button className="mx-2 md:mx-6 px-8 py-2 rounded-lg text-black font-bold bg-[#37f9a2] text-center hidden md:block">
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
          <span className="lg:text-5xl text-2xl font-semibold lg:leading-15 leading-10 lg:p-10 p-4 lg:block hidden ">
            "AI That Plans Your Project, Estimates Costs, <br /> and Assigns the
            Best Talent"
          </span>
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
        {/* <div class="flex justify-between client-name-container my-10">
          <a href="#">client name</a>
          <a href="#">client name</a>
          <a href="#">client name</a>
          <a href="#">client name</a>
          <a href="#">client name</a>
          <a href="#">client name</a>
          <a href="#">client name</a>
        </div> */}
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
