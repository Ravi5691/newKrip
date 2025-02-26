import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Video Editing",
    img: "/krip png/1.png",
    link: "/video-template",
  },
  {
    id: 2,
    title: "Graphic Design",
    img: "/krip png/2.png",
    link: "/graphic-template",
  },
  {
    id: 3,
    title: "Web Development",
    img: "/krip png/3.png",
    link: "/web-template",
  },
  {
    id: 4,
    title: "AI Automation",
    img: "/krip png/4.png",
    link: "/ai-template",
  },
  {
    id: 5,
    title: "Content Creation",
    img: "/krip png/5.png",
    link: "/contentcreation-template",
  },
  {
    id: 6,
    title: "S/W Maintenance",
    img: "/krip png/6.png",
    link: "/sw-template",
  },
];

export default function SelectService() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
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

      <div className="text-center lg:mt-15 mt-5">
        <h2 className="lg:text-4xl text-2xl font-semibold  text-green-300 mb-4">
          Select a Service
        </h2>
        <p className="text-gray-400 lg:text-base text-sm mt-2 lg:px-0 px-5">
          Choose the service that best fits your needs to get started with your
          project.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 py-10 lg:px-20 lg:mx-60 px-5 z-20 relative ">
        {services.map((service) => (
          <Link to={service.link} key={service.id}>
            <div className="bg-white text-black font-bold p-4 rounded-lg cursor-pointer hover:scale-105 transition-all">
              <img
                src={service.img}
                alt={service.title}
                className="w-full lg:h-40 h-20 object-contain shadow-xl rounded-lg"
              />
              <h3 className="text-center mt-2 lg:text-base text-sm">
                {service.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* {selected && (
        <div
          className="absolute bg-[#00000077] flex justify-center items-center z-20"
          onClick={() => setSelected(null)}
        >
          <div className="p-4 bg-white rounded-lg max-w-lg">
            <img src={selected.img} alt={selected.title} className="w-full h-auto" />
            <h2 className="text-center text-xl font-bold mt-2">{selected.title}</h2>
          </div>
        </div>
      )} */}
    </div>
  );
}
