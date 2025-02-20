import React, { useState, useRef } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  // const contentRefs = useRef([]);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <section className=" w-screen h-screen py-20 relative">
        {/* Blur component */}
        <div className=" lg:h-[50%] absolute h-30 w:30  lg:w-[30%] lg:top-10 top-90 lg:-left-40 -right-60 z-10 lg:block hidden">
          <div
            className="absolute w-100 h-100 bg-[#83FF9780] bg-blend-lighten top-60 opacity-25 -right-30 rounded-full pointer-events-none "
            style={{
              transform: "translate(-50%, -50%)",
              filter: "blur(100px)",
              zIndex: 50,
            }}
          />
        </div>
        <div className=" lg:h-[50%] absolute h-20 w:20  lg:w-[30%] lg:top-90 top-90 lg:-right-60 -right-60 z-10 lg:block hidden">
          <div
            className="absolute w-100 h-100 bg-[#83FF9780] bg-blend-lighten top-60 opacity-25 -right-30 rounded-full pointer-events-none"
            style={{
              transform: "translate(-50%, -50%)",
              filter: "blur(100px)",
              zIndex: 50,
            }}
          />
        </div>
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-base font-bold leading-tight text-green sm:text-xs lg:text-lg pb-3">
              FAQ
            </h2>
            <h2 className="text-3xl font-bold leading-tight text-[#37f9a2] sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, recusandae necessitatibus. Animi dicta soluta eum ullam
              eius! Ab, error.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            {/* FAQ Item 1 */}
            <div className="transition-all duration-300 bg-white border border-gray-200 rounded-xl shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleFaq(0)}
              >
                <span className="text-sm sm:text-lg font-semibold text-black">
                  How to create an account?
                </span>
                <svg
                  className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
                    activeIndex === 0 ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === 0 ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-4 pb-5 sm:px-6 text-black sm:pb-6">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit{" "}
                    <a
                      href="#"
                      title=""
                      className="text-blue-600 transition-all duration-200 hover:underline"
                    >
                      aliqua dolor
                    </a>{" "}
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="transition-all duration-300 bg-white border border-gray-200 rounded-xl shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleFaq(1)}
              >
                <span className="text-sm sm:text-lg font-semibold text-black">
                  How can I make payment using Paypal?
                </span>
                <svg
                  className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
                    activeIndex === 1 ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === 1 ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-4 pb-5 sm:px-6 text-black sm:pb-6">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit{" "}
                    <a
                      href="#"
                      title=""
                      className="text-blue-600 transition-all duration-200 hover:underline"
                    >
                      aliqua dolor
                    </a>{" "}
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="transition-all duration-300 bg-white border border-gray-200 rounded-xl shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleFaq(2)}
              >
                <span className="text-sm sm:text-lg font-semibold text-black">
                  Can I cancel my plan?
                </span>
                <svg
                  className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
                    activeIndex === 2 ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === 2 ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-4 pb-5 sm:px-6 text-black sm:pb-6">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit{" "}
                    <a
                      href="#"
                      title=""
                      className="text-blue-600 transition-all duration-200 hover:underline"
                    >
                      aliqua dolor
                    </a>{" "}
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="transition-all duration-300 bg-white border border-gray-200 rounded-xl shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleFaq(3)}
              >
                <span className="text-sm sm:text-lg font-semibold text-black">
                  How can I reach support?
                </span>
                <svg
                  className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
                    activeIndex === 3 ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === 3 ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-4 pb-5 sm:px-6 text-black sm:pb-6">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit{" "}
                    <a
                      href="#"
                      title=""
                      className="text-blue-600 transition-all duration-200 hover:underline"
                    >
                      aliqua dolor
                    </a>{" "}
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-slate-300 text-base mt-9">
            Didn’t find the answer you are looking for?{" "}
            <a
              href="#"
              title=""
              className="font-medium text-green transition-all text-[#37f9a2] duration-200 hover:underline"
            >
              Contact our support
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Faq;
