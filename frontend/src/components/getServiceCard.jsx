import React, { useState } from "react";

const GetServiceCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  return (
    <div className="flex items-center w-screen justify-center mt-20 mb-40 relative">
      <div
        className="absolute w-screen h-70 bg-[#83ff9884] bg-blend-lighten opacity-25 pointer-events-none"
        style={{
          filter: "blur(100px)",
          zIndex: 50,
        }}
      />
      <div className="rounded-2xl  flex text-white w-full relative mx-40">
        {/* OR Separator */}
        <div className="flex h-20 w-20  place-items-center justify-center absolute rounded-full z-70 bg-[#060E0E] right-111 top-65  border-[#37f9a270] border-2">
          <div className=" text-xl text-center font-bold text-gray-300">OR</div>
        </div>
        {/* Get A Service Section */}
        <div className="flex-1 bg-[#8de29c1e] border-2 border-r-1 border-[#37f9a270] py-13 px-20 rounded-xl flex flex-col z-60">
          <h2 className="text-3xl font-bold mb-2 text-center">Get A Service</h2>
          <p className="text-sm text-gray-200 mb-6 text-center">Subtext</p>
          <div className="grid grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-white h-40 rounded-lg flex items-center justify-center cursor-pointer"
                onClick={() => openModal(`Service ${index + 1} details`)}
              >
                {/* Add Service Icon or Text */}
                <span className="text-[#08482bf9]">Service {index + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Get A Guy Section */}
        <div className="flex bg-[#8de29c1e] border-2 border-r-1 border-[#37f9a270] w-[40%] py-13 px-20 rounded-xl z-60 flex-col">
          <h2 className="text-3xl font-bold mb-8 text-center">Get A Guy</h2>
          <div className="flex flex-col gap-4 mt-4">
            <input
              type="text"
              placeholder="Enter the Prompt"
              className="w-full bg-white p-2 rounded-lg placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
            />
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center  bg-[#000000a4] backdrop-blur-[5px] z-70">
            <div className="bg-white p-5 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-2">Service Details</h2>
              <p>{modalContent}</p>
              <button
                onClick={closeModal}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetServiceCard;
