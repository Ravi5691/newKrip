import React, { useEffect, useState } from "react";
import TagSelector from "../tag";
import { useNavigate } from "react-router-dom";

const AddTags = () => {
  const [templateTitle, setTemplateTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const navigate = useNavigate();

  const suggestedTags = [
    "UI/UX Design",
    "React.js",
    "Responsive Design",
    "Next.js",
    "SaaS Development",
  ];

  useEffect(() => {
    const title = localStorage.getItem("selectedTemplateTitle");
    if (title) {
      setTemplateTitle(title);
    }

    const savedTags = JSON.parse(localStorage.getItem("projectTags")) || [];
    setTags(savedTags);
  }, []);

  const handleAddTag = (tag) => {
    if (tag && !tags.includes(tag)) {
      const updatedTags = [...tags, tag];
      setTags(updatedTags);
      localStorage.setItem("projectTags", JSON.stringify(updatedTags));
    }
    setNewTag("");
  };

  const handleRemoveTag = (tagToRemove) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
    localStorage.setItem("projectTags", JSON.stringify(updatedTags));
  };

  const handleNext = () => {
    localStorage.setItem("projectTags", JSON.stringify(tags));
    navigate("/confirmationPage");
  };

  const handleBack = () => {
    navigate(-1);
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
        style={{ filter: "blur(100px)", zIndex: 10 }}
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
            Select the Tags
          </h3>

          <div className="p-2 w-[58%]">
            <TagSelector
              tags={tags}
              onAddTag={handleAddTag}
              onRemoveTag={handleRemoveTag}
            />
          </div>

          {/* Suggested Tags Section */}
          <div className="p-2 w-[58%] mt-4">
            <h4 className="text-green-300 mb-2">Suggested Tags</h4>
            <div className="flex flex-wrap gap-2">
              {suggestedTags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => handleAddTag(tag)}
                  className="text-sm bg-gray-700 text-white px-3 py-1 rounded-lg cursor-pointer hover:bg-green-500"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      <div className="flex flex-col md:flex-row justify-center gap-7 text-sm font-medium mt-15 pb-10 lg:px-0 px-5">
        <button
          onClick={handleBack}
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

export default AddTags;
