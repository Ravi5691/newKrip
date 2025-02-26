import React, { useEffect, useState } from "react";
import { useNavigate , Link } from "react-router-dom";

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

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <div className="">
      <div className="min-h-screen bg-[#060E0E]  text-white relative">
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
          style={{
            filter: "blur(100px)",
            zIndex: 10,
          }}
        />

        <div className="mt-5 flex items-center justify-center p-4">
          <div className="grid md:grid-cols-2 gap-10 lg:max-w-5xl max-w-2xl w-full">
            {/* Checklist Section */}
            <div className="lg:mt-10">
              <span className="lg:text-4xl text-2xl font-serif font-semibold lg:leading-11 tracking-wider bg-gradient-to-r from-[#9AE7DF] via-[#83FF97] to-[#9AE7DF] bg-clip-text text-transparent">
                Take a Overview <br /> of your Specsheet
              </span>
              <div className="flex lg:gap-10 gap-5 lg:mt-10 mt-5">
                <button className="text-black lg:text-sm text-[10px] cursor-pointer bg-[#2cef80] lg:px-7 px-6 lg:py-2 py-1 rounded-lg font-semibold">
                  Confirm
                </button>
                <button className="text-white lg:text-sm text-[10px] border-1 cursor-pointer border-[#37f9a270] lg:px-10 px-7 lg:py-2 py-1 rounded-lg font-semibold">
                  Edit
                </button>
              </div>
            </div>

            {/* Spec Sheet Section */}
            <div className="bg-[#102525] lg:p-10 p-5 rounded-lg shadow-lg text-white">
              <h2 className="lg:text-xl text-base text-center font-serif tracking-widest font-semibold lg:mb-4 mb-2">
                SPECSHEET
              </h2>
              <p className="text-sm text-center lg:mb-7 mb-3">
                This sheet has all the scope of work listed below based on the
                questions you answered previously.{" "}
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
                <h3 className="font-medium mb-2">Descriptive</h3>
                <p className="text-white text-sm p-2 text-left w-72 lg:w-full text-wrap max-h-[300px] break-words overflow-hidden">
                  {description}
                </p>
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
