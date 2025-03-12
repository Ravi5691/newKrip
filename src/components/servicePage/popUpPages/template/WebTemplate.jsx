import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const templates = [
  { id: 1, title: "Landing Page", img: "/krip png/1.png" },
  { id: 2, title: "Ecommerce Site", img: "/krip png/2.png" },
  { id: 3, title: "Portfolio Site", img: "/krip png/3.png" },
];

export default function WebDevTemplateSelection() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [selectedTemplate, setSelectedTemplate] = useState(
    state?.selectedTemplate || null
  );

  const handleNext = () => {
    navigate("/specsheet", {
      state: { formData: state.formData, selectedTemplate },
    });
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

      <div className="text-center lg:px-0 px-5 lg:mt-15 mt-5">
        <h2 className="lg:text-4xl text-2xl font-semibold  text-green-300 mb-4">
          Choose a Template
        </h2>
        <p className="lg:text-lg text-sm text-gray-400 mt-2">
          Select a template that matches your project's requirements to <br />{" "}
          customize and start building.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:py-20 py-5 lg:px-20 lg:mx-40 mx-7 z-20 relative">
        {templates.map((template) => (
          <div
            key={template}
            className={`border p-4 rounded bg-white  ${
              selectedTemplate === template ? "scale-105" : "scale-100"
            }`}
            onClick={() => setSelectedTemplate(template)}
          >
            <img
              src={template.img}
              alt={template.title}
              className="w-full lg:h-50 h-20 object-contain shadow-xl rounded-lg"
            />
            <h3 className="text-center  text-black lg:text-base text-sm mt-2">
              {template.title}
            </h3>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-7 text-sm font-medium mt-5 pb-10 lg:px-0 px-5">
        <button
          onClick={handleBack}
          className="mx-2 text-white border-1 cursor-pointer border-[#37f9a270] px-10 py-2 rounded-lg"
        >
          Go Back
        </button>
        <button
          disabled={!selectedTemplate}
          onClick={handleNext}
          className="mx-2 text-black cursor-pointer bg-[#37f9a2] px-12 py-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}
