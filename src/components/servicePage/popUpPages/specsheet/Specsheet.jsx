import { useNavigate, useLocation, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Specsheet() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { formData, selectedTemplate } = state;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      id: 1,
      text: "10% (Upfront Pay) : 40% (Pay Mid-way) : 50% (Pay by Delivery)",
      delivery: "5 Days Delivery",
    },
    {
      id: 2,
      text: "50% (Upfront Pay) : 50% (Pay by Delivery)",
      delivery: "3 Days Delivery",
    },
    {
      id: 3,
      text: "100% (Pay by Delivery)",
      delivery: "1 Days Delivery",
    },
  ];

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
        className="fixed w-screen h-70 bg-[#83ff9884] bg-blend-lighten top-90 opacity-25 pointer-events-none"
        style={{
          filter: "blur(100px)",
          zIndex: 10,
        }}
      />
      <div className="mt-5 flex items-center justify-center p-4">
        <div className="grid md:grid-cols-2 lg:gap-30 gap-10 lg:max-w-6xl max-w-2xl w-full">
          {/* Checklist Section */}
          <div className="lg:mt-5">
            <div className="border-b-2 border-gray-500 border-dashed py-4">
              <h2 className="lg:text-xl text-lg font-semibold bg-gradient-to-r from-[#9AE7DF] via-[#83FF97] to-[#9AE7DF] bg-clip-text text-transparent">
                Payment Details
              </h2>
              <div className="w-full rounded-xl border-2 border-[#265b5bf1] px-4 py-3 flex justify-between mt-4">
                <span className="text-lg">Total Price</span>
                <span className="text-lg">
                  Rs. <span>1000</span>
                </span>
              </div>
            </div>

            <div className="border-b-2 border-gray-500 border-dashed py-4">
              <h2 className="lg:text-xl text-lg font-semibold lg:leading-11 bg-gradient-to-r from-[#9AE7DF] via-[#83FF97] to-[#9AE7DF] bg-clip-text text-transparent">
                Delivery Details
              </h2>
              <div className="w-full rounded-xl  flex justify-between mt-2">
                <span className="">Estimated Time of Delivery</span>
                <span className="">2-5 Days</span>
              </div>
            </div>

            <div className="py-4">
              <h2 className="font-semibold">
                Select Your Preferred Payment Options
              </h2>
              <div className="w-full rounded-lg border-2 border-[#265b5bf1] px-4 py-3 flex flex-col justify-between mt-4">
                {options.map((option) => (
                  <label
                    key={option.id}
                    className={`flex items-center gap-2 py-2 px-2 rounded-lg cursor-pointer w-full`}
                  >
                    <input
                      type="radio"
                      name="paymentOption"
                      value={option.id}
                      checked={selectedOption === option.id}
                      onChange={() => setSelectedOption(option.id)}
                      className="hidden"
                    />
                    <div className="w-[14px] h-[14px] border-2 border-gray-400 rounded-full flex items-center justify-center">
                      {selectedOption === option.id && (
                        <div className="w-[6px] h-[6px] bg-[#83ff988e] rounded-full"></div>
                      )}
                    </div>
                    <div className="w-full flex justify-between">
                      <p className="text-[12px]">{option.text}</p>
                      <span className="text-[12px]">{option.delivery}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex lg:gap-10 gap-5 lg:mt-4 mt-2 justify-center">
              <button
                onClick={() => alert("Form Submitted!")}
                className="text-black lg:text-sm text-[10px] cursor-pointer bg-[#2cef80] lg:px-7 px-6 lg:py-2 py-1 rounded-lg font-semibold"
              >
                Place Order
              </button>
              {/* <button
                onClick={() =>
                  navigate(-1, {
                    state: { formData, selectedTemplate },
                  })
                }
                className="text-white lg:text-sm text-[10px] border-1 cursor-pointer border-[#37f9a270] lg:px-10 px-7 lg:py-2 py-1 rounded-lg font-semibold"
              >
                Edit
              </button> */}
            </div>
          </div>

          {/* Spec Sheet Section */}
          <div className="bg-[#1d4444a7] lg:p-8 p-5 rounded-lg shadow-lg text-white border-2 border-[#265b5bf1]">
            <h2 className="lg:text-xl text-base text-center tracking-widest font-semibold lg:mb-4 mb-2">
              SPECSHEET
            </h2>
            <p className="text-[13px] text-center lg:mb-7 mb-3">
              This sheet has all the scope of work listed below based on the
              questions you answered previously.{" "}
            </p>
            <div className="text-[12px] lg:mb-7 mb-4">
              {Object.entries(formData).map(
                ([key, value]) =>
                  value && (
                    <div key={key} className="mb-3">
                      <h3>{key.replace(/([A-Z])/g, " $1")}</h3>
                      {Array.isArray(value) ? (
                        <ul>
                          {value.map((item) => (
                            <li key={item}>&bull; {item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>&bull; {value}</p>
                      )}
                    </div>
                  )
              )}

              {/* <div className="mt-4">
                <h3>Template: {`Template ${selectedTemplate}`}</h3>
                <img
                  src={`/images/template${selectedTemplate}.jpg`}
                  alt={`Template ${selectedTemplate}`}
                  className="w-48 h-32 object-cover mt-2"
                />
              </div> */}
            </div>

            {/* <div className="mt-4 text-sm">
              <h3 className="font-medium mb-2">Order Details</h3>
              <p>Order Number: __________</p>
              <p>Order Date: __________</p>
              <p>Invoice Details: __________</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
