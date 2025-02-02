import React from "react";
import GetServiceCard from "./getServiceCard";
import StatCard from "./stat_card";
import  { AppleCardsCarousel } from "./featureSection";

const Header = () => {
  return (
    <div>
      <nav>
        <div className="flex justify-between items-center px-30 h-20 border-b-2">
          <button>Logo</button>
          <span class="flex justify-around">
            <button class="px-6">Home</button>
            <button class="px-6">About Us</button>
            <button class="px-6">Contact Us</button>
            <button class="pl-6">Login</button>
          </span>
        </div>
        <div class=" flex justify-around h-15 border-b-2 ">
          <span class="self-center">Programming & Tech</span>
          <span class="self-center">Graphic design</span>
          <span class="self-center">AI Service</span>
          <span class="self-center">Video & Animation</span>
          <span class="self-center">Indemand</span>
        </div>
      </nav>

      <main>
        <div class="flex flex-col justify-center my-15 mb-8">
          <span class=" text-4xl text-center leading-15 p-10">
            "AI That Plans Your Project, Estimates Costs, <br /> and Assigns the
            Best Talent"
          </span>
          <span class="text-center leading-7">
            Our Ai will help you generate a detailed Spec-sheet and find
            freelancer who meet your needs with live <br/> project tracking throught
            the process Get a Service Get a Freelancer
          </span>
          <div class="flex flex-row p-16 justify-center gap-16">
            <button>Get a Service</button>
            <button>Get a Freelancer</button>
          </div>
        </div>
        <GetServiceCard/>
        <div class="flex justify-between client-name-container my-10">
          <a href="#">client name</a>
          <a href="#">client name</a>
          <a href="#">client name</a>
          <a href="#">client name</a>
          <a href="#">client name</a>
          <a href="#">client name</a>
          <a href="#">client name</a>
        </div>
        <StatCard/>
        <AppleCardsCarousel/>
        
      </main>
    </div>
  );
};

export default Header;
