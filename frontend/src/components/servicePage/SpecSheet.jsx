import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SpecSheet = () => {
  const [templateTitle, setTemplateTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the title from localStorage when the component mounts
    const title = localStorage.getItem("selectedTemplateTitle");
    const savedDescription = localStorage.getItem("projectDescription");
    const savedTags = JSON.parse(localStorage.getItem("projectTags")) || [];

    if (title) {
      setTemplateTitle(title);
    }
    if (savedDescription) {
      setDescription(savedDescription);
    }
    setTags(savedTags);
  }, []);

  return (
    <div className="">
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

        <div className="mt-5 flex items-center justify-center p-4">
          <div className="grid md:grid-cols-2 gap-10 lg:max-w-5xl max-w-2xl w-full">
            {/* Checklist Section */}
            <div className="bg-[#102525] lg:p-10 p-5 rounded-lg shadow-lg text-white">
              <h1 className="lg:text-xl text-base lg:pb-2">Order Date : </h1>
              <h1 className="lg:text-xl text-base lg:pb-2">Invoice Details : </h1>
              <div className="lg:my-7 my-4 border-1 border-[#83ff9884] p-5 rounded-2xl">
                <h2 className="lg:text-xl text-base font-serif text-center font-semibold mb-4">
                  Checklist
                </h2>
                <div className="space-y-2">
                  {[
                    { label: "Trimming/Sequencing", value: "100%" },
                    { label: "Green screen", value: "50%" },
                    { label: "VFX", value: "0%" },
                    { label: "Color Grading", value: "0%" },
                    { label: "Sound Editing", value: "0%" },
                    { label: "Subtitles", value: "0%" },
                  ].map((item, index) => (
                    <div key={index} className="flex text-sm lg:text-base justify-between">
                      <span>{item.label}</span>
                      <span>{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 border-t border-gray-600 pt-2 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>25%</span>
                </div>
              </div>
            </div>

            {/* Spec Sheet Section */}
            <div className="bg-[#102525] lg:p-10 p-5 rounded-lg shadow-lg text-white">
              <h2 className="lg:text-xl text-base text-center font-serif tracking-widest font-semibold lg:mb-4 mb-2">
                SPECSHEET
              </h2>
              <p className="text-sm text-center lg:mb-7 mb-3">
                This sheet has all the scope of work listed below based on{" "}
                the questions you answered previously.{" "}
              </p>
              <div className="text-sm lg:mb-7 mb-4">
                <h3 className="lg:text-lg text-base font-medium lg:mb-2 mb-1">
                  Scope of Work
                </h3>
                {/* <p>Prompt: Video editor for Instagram</p>
                <p>Type of video: Infotainment reel</p>
                <p>Subtype of video: Velocity edit</p>
                <p>Frequency of video: Recurring videos</p>
                <p>Length of video: 30-60 seconds</p> */}
                <p className="text-sm"> Template : {templateTitle}</p>
              </div>

              <div className="mt-4 text-sm lg:mb-7 mb-4">
                <h3 className="font-medium mb-2">Description</h3>
                <p className="text-white text-sm p-2 text-left w-72 lg:w-full text-wrap max-h-[300px] break-words overflow-hidden">{description}</p>
              </div>

              <div className="lg:mb-7 mb-5">
                <h3 className="font-medium lg:mb-2 mb-1">Tags</h3>
                <div className="text-black p-2 w-full rounded-xl flex flex-wrap">
                  {tags.length > 0 ? (
                    tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-sm bg-gray-700 text-white px-2 py-1 rounded-lg mr-2 mb-2"
                      >
                        {tag}
                      </span>
                    ))
                  ) : (
                    <p className="text-gray-500">No tags added yet.</p>
                  )}
                </div>
              </div>

              <div className="mt-4 text-sm">
                <h3 className="font-medium mb-2">Order Details</h3>
                <p>Order Number: __________</p>
                <p>Order Date: __________</p>
                <p>Invoice Details: __________</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecSheet;
