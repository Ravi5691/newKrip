import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import {Link} from "react-router-dom"

const AboutProject = () => {
  const [templateTitle, setTemplateTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the title from localStorage when the component mounts
    const title = localStorage.getItem("selectedTemplateTitle");
    if (title) {
      setTemplateTitle(title); // Set the title to state
    }
  }, []);

  const handleNext = () => {
    // Store the description in localStorage
    localStorage.setItem("projectDescription", description);
    navigate("/addTags"); // Replace with your actual next page route
  };

  return (
    <div className="min-h-screen bg-[#060E0E] text-white relative">
      <nav>
        <div className="flex flex-col md:flex-row lg:justify-between lg:items-center items-start px-5 lg:pt-0 pt-5 md:pr-18 md:px-24 lg:h-20 h-15">
          <button className="cursor-pointer">
            <img src="logo.png" alt="" className="lg:h-8 h-6 w-auto" />
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
      </nav>

      <div
        className="absolute w-screen h-70 bg-[#83ff9884] bg-blend-lighten top-90 opacity-25 pointer-events-none"
        style={{
          filter: "blur(100px)",
          zIndex: 10,
        }}
      />

      <main className="lg:mt-15 mt-5 lg:px-0 px-5 text-center flex flex-col justify-center w-screen">
        <h2 className="lg:text-4xl text-2xl font-semibold text-green-300">
          About Project
        </h2>
        <p className="mt-2 lg:text-lg text-sm text-gray-300">
          Provide a brief description of your project and suited tags
        </p>

        <div className="mt-15 flex lg:justify-around justify-between lg:px-0 px-3">
          <div>
            <h3 className="lg:text-xl text-base text-green-300 text-left">
              Service
            </h3>
            <p className="text-gray-300 pt-2 lg:text-base text-sm">
              Web Development
            </p>
          </div>
          <div>
            <h3 className="lg:text-xl text-base text-green-300 text-left">
              Template
            </h3>
            <p className="text-gray-300 pt-2 lg:text-base text-sm">
              {templateTitle}
            </p>
          </div>
        </div>

        <div className="mt-10 text-left w-full flex flex-col justify-center lg:place-items-center lg:px-0 px-3">
          <h3 className="lg:text-xl text-base text-green-300 lg:mb-5 mb-2 lg:w-[58%] w-full text-left">
            Description of Project
          </h3>
          <div className="bg-white text-black p-2 lg:w-[58%] w-[100%] rounded-xl shadow-2xl">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="The freelancing platform connects businesses with top-tier talent, transforming project ideas into high-quality deliverables. By skillfully combining AI-driven matching, seamless collaboration tools, and secure payments, it ensures an efficient and hassle-free experience for both clients and freelancers."
              className="w-full p-2 border border-transparent focus:outline-none focus:ring-0 h-40"
            ></textarea>
          </div>
        </div>
      </main>

      <div className="flex flex-col md:flex-row justify-center gap-7 text-sm font-medium mt-15 pb-10 lg:px-0 px-5">
        <button
          onClick={() => navigate(-1)}
          className="mx-2 text-white border-1 cursor-pointer border-[#37f9a270] px-10 py-2 rounded-lg"
        >
          Go Back
        </button>
        <button
          onClick={handleNext}
          className="mx-2 text-black cursor-pointer bg-[#37f9a2] px-12 py-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AboutProject;
