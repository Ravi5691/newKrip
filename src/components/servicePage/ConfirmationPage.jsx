import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
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

//   const handleNext = () => {
//     // Store the tags in localStorage
//     localStorage.setItem("projectTags", JSON.stringify(tags));
//     navigate("/confirmationPage");
//   };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="min-h-screen bg-[#060E0E]  text-white relative">
        <nav>
          <div className="flex flex-col md:flex-row justify-between items-center px-4 md:pr-18 md:px-24 h-20">
            <button className="cursor-pointer">
              <img src="logo.png" alt="" className="h-8 w-auto" />
            </button>
            <span className="flex flex-col md:flex-row justify-around w-full md:w-auto gap-3">
              <button className="mx-2 md:mx-6 hidden md:block">Home</button>
              <button className="mx-2 md:mx-6 hidden md:block">About Us</button>
              <button className="mx-2 md:mx-6 hidden md:block">
                Contact Us
              </button>
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

        <main className="mt-15 text-center flex flex-col justify-center w-screen">
          <h2 className="text-4xl font-semibold text-green-300">
            About Project
          </h2>
          <p className="mt-2 text-lg text-gray-300">
            Provide a brief description of your project and suited tags
          </p>

          <div className="mt-15 flex justify-around">
            <div>
              <h3 className="text-xl text-green-300 text-left">Service</h3>
              <p className="text-gray-300 pt-2">Web Development</p>
            </div>
            <div>
              <h3 className="text-xl text-green-300 text-left">Template</h3>
              <p className="text-gray-300 pt-2">{templateTitle}</p>
            </div>
          </div>

          <div className="mt-10 text-left w-full flex flex-col justify-center place-items-center">
            <h3 className="text-xl text-green-300 mb-5 w-[58%] text-left">
              Description of Project
            </h3>
            <div className=" text-white p-2 w-[58%] rounded-xl shadow-2xl">
              {description}
            </div>
          </div>

          <div className="mt-10 text-left w-full flex flex-col justify-center place-items-center">
            <h3 className="text-xl text-green-300 mb-5 w-[58%] text-left">Tags</h3>
            <div className=" text-black p-2 w-[58%] rounded-xl shadow-2xl">
              {tags.length > 0 ? (
                tags.map((tag, index) => (
                  <span key={index} className="bg-gray-700 text-white px-2 py-1 rounded-lg mr-2">
                    {tag}
                  </span>
                ))
              ) : (
                <p className="text-gray-500">No tags added yet.</p>
              )}
            </div>
          </div>
        </main>

        <div className="flex flex-col md:flex-row justify-center gap-7  text-sm  font-medium mt-15">
          <button
            onClick={() => navigate(-1)}
            className="mx-2 text-white border-1 cursor-pointer border-[#37f9a270] px-10 py-2 rounded-lg"
          >
            Go Back
          </button>
          <button
            // onClick={handleNext}
            className="mx-2 text-black cursor-pointer bg-[#37f9a2] px-12 py-2 rounded-lg"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
