import React from "react";
import GetServiceCard from "./getServiceCard";
import StatCard from "./stat_card";
import { HeroScroll } from "./HeroScroll";
import Faq from "./faq";
import Footer from "./footer";

const Header = () => {
  return (
    <div className="bg-[#060E0E] text-white">
      <nav>
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:pr-18 md:px-24 h-20">
          <button className="cursor-pointer">
            <img src="logo.png" alt="" className="h-8 w-auto" />
          </button>
          <span className="flex flex-col md:flex-row justify-around w-full md:w-auto gap-3">
            <button className="mx-2 md:mx-6 hidden md:block">Home</button>
            <button className="mx-2 md:mx-6 hidden md:block">About Us</button>
            <button className="mx-2 md:mx-6 hidden md:block">Contact Us</button>
            <button className="mx-2 md:mx-6 px-8 py-2 rounded-lg text-black font-bold bg-[#37f9a2] text-center hidden md:block">
              Login
            </button>
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-around gap-2 h-12 border-b-1 border-t-1 text-sm border-[#13e78820]">
          <span className="self-center">Programming & Tech</span>
          <span className="self-center">Graphic design</span>
          <span className="self-center">AI Service</span>
          <span className="self-center">Video & Animation</span>
          <span className="self-center">Indemand</span>
        </div>
      </nav>

      <main>
        <div className="flex flex-col justify-center my-15 mb-8 text-center">
          <span className="text-5xl font-semibold leading-15 p-10 ">
            "AI That Plans Your Project, Estimates Costs, <br /> and Assigns the
            Best Talent"
          </span>
          <span className="leading-7 text-lg tracking-wider">
            Our Ai will help you generate a detailed Spec-sheet and find
            freelancer who meet your needs with live <br /> project tracking
            through the process
          </span>
          <div className="flex flex-col md:flex-row p-16 justify-center gap-5  text-sm  font-medium">
            <button className="mx-2 text-black cursor-pointer bg-[#37f9a2] px-7 py-3 rounded-lg">
              Get a Service
            </button>
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
        <HeroScroll />
      </main>
      <Faq />
      <Footer />
    </div>
  );
};

export default Header;
