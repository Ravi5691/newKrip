import React, { useEffect, useState } from "react";
import TagSelector from "./tag";
import { useNavigate, Link } from "react-router-dom";

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

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#060E0E] text-white relative">
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
              {localStorage.getItem("serviceName")}
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
