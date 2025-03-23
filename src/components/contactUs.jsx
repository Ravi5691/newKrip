import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdConnectWithoutContact } from "react-icons/md";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoginOptionsOpen, setIsLoginOptionsOpen] = useState(false);

  const toggleLoginOptions = () => {
    setIsLoginOptionsOpen(!isLoginOptionsOpen);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div>
      <div className="min-h-screen bg-[#060E0E] text-white">
        {/* Navbar */}
        <nav>
          <div className="flex flex-col md:flex-row lg:justify-between lg:items-center items-start px-5 lg:pt-0 pt-5 md:pr-18 md:px-24 lg:h-20 h-15 relative">
            <Link to="/">
              <button className="cursor-pointer">
                <img src="logo.png" alt="" className="lg:h-8 h-6 w-auto" />
              </button>
            </Link>

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
                        <Link to="#">
                          <button
                            className="w-full px-8 py-2 rounded-lg text-black font-bold bg-[#37f9a2] text-center"
                            onClick={toggleLoginOptions}
                          >
                            Login
                          </button>
                        </Link>
                      </li>
                      {/* Dropdown Menu */}
                      {isLoginOptionsOpen && (
                        <div className="absolute left-0 lg:mt-2 w-full lg:px-2 px-5 text-center lg:bg-[#11292956] backdrop-blur-lg rounded shadow-lg z-50 transition-all duration-300 ease-in-out">
                          <ul className="lg:py-2">
                            <li>
                              <Link
                                to="/freelancer-signup"
                                className="block lg:px-4 py-2 lg:border-b-1 border-1 border-[#37f9a277] lg:rounded-none rounded"
                                onClick={toggleLoginOptions}
                              >
                                Login as Freelancer
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/client-signup"
                                className="block px-4 py-2 lg:border-b-0 mt-1 lg:mt-0 border-1 border-[#37f9a277] lg:rounded-none rounded"
                                onClick={toggleLoginOptions}
                              >
                                Login as Client
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}
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
              <div className="relative">
                <Link to="#">
                  <button
                    className="mx-2 md:mx-6 px-8 py-2 rounded-lg text-black font-bold bg-[#37f9a2] text-center hidden md:block cursor-pointer"
                    onClick={toggleLoginOptions}
                  >
                    Login
                  </button>
                </Link>
                {/* Dropdown Menu */}
                {isLoginOptionsOpen && (
                  <div className="absolute -right-5 mt-4 w-48 px-2 text-center bg-[#11292956] backdrop-blur-lg rounded shadow-lg z-50 transition-all duration-300 ease-in-out lg:block hidden">
                    <ul className="py-2">
                      <li>
                        <Link
                          to="/freelancer-signup"
                          className="block px-4 py-2 border-b-1 border-[#37f9a277]"
                          onClick={toggleLoginOptions}
                        >
                          Login as Freelancer
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/client-signup"
                          className="block px-4 py-2"
                          onClick={toggleLoginOptions}
                        >
                          Login as Client
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
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

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:mt-15 p-5 lg:p-0 ">
          {/* Left Section */}
          <div className="w-full lg:w-1/3 space-y-6 lg:ml-25 lg:mt-10">
            <h2 className="lg:text-5xl text-2xl font-bold">Contact Us</h2>
            <div>
              <CiLocationOn />
              <p className="text-[#83FF97] font-medium">Address</p>
              <p>TBI, GEU, Dehradun, 249002</p>
            </div>
            <div>
              <div>
                <BsFillTelephoneFill />
                <p className="text-[#83FF97] font-medium">Contact</p>
              </div>

              <p>Phone No.: +91-09811009862</p>
              <p>Email: contact@xyz.in</p>
            </div>
            <div>
              <MdConnectWithoutContact />
              <p className="text-[#83FF97] font-medium">Stay Connected</p>
              <div className="flex space-x-4 text-xl">
                <FaFacebookF className="cursor-pointer hover:text-[#83FF97]" />
                <FaInstagram className="cursor-pointer hover:text-[#83FF97]" />
                <FaTwitter className="cursor-pointer hover:text-[#83FF97]" />
                <FaLinkedinIn className="cursor-pointer hover:text-[#83FF97]" />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div
            className="absolute lg:w-130 lg:h-30 w-50 h-10 bg-[#83ff98a2] opacity-80 bg-blend-saturation lg:top-90 right-40  rounded-full pointer-events-none lg:block hidden"
            style={{
              transform: "rotate(130deg)",
              filter: "blur(75px) ",
              zIndex: 10,
            }}
          />
          <div className="w-full lg:w-[30%] bg-[#C8FFD41A] p-8 rounded-lg mt-8 mr-45 lg:mt-0 relative z-20">
            <h3 className="text-xl text-center font-semibold mb-8">
              Get in Touch
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-15 gap-4 text-black mb-4">
              <div>
                <span className="text-white">First Name</span>
                <input
                  // placeholder="First Name"
                  className="bg-white border border-gray-700 p-2 w-full rounded-lg mt-2"
                />
              </div>
              <div>
                <span className="text-white">Last Name</span>
                <input
                  // placeholder="Last Name"
                  className="bg-white border border-gray-700 p-2 w-full rounded-lg mt-2"
                />
              </div>
            </div>
            <div>
              <span className="text-white">Email ID</span>
              <input
                //   placeholder="Email ID"
                className="bg-white text-black p-2 w-full rounded-lg mt-2"
              />
            </div>
            <div className="mt-4">
              <span className="text-white">Message / Questions</span>
              <textarea
                //   placeholder="Message / Question"
                className="bg-white border lg:h-25 text-black border-gray-700 p-2 w-full mt-2 rounded-lg"
              />
            </div>
            <div className="flex justify-center">
              <button className="bg-[#83FF97] text-black px-6 py-2 mt-4 w-40  rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
