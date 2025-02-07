import React, { useState } from 'react'

const GetServiceCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  return (
    <div className="flex items-center w-screen justify-center my-10">
      <div className="rounded-2xl  flex text-white w-[80%] relative">
        {/* OR Separator */}
        <div className="flex h-20 w-20  place-items-center justify-center absolute rounded-full bg-white right-92 top-60">
          <div className=" text-xlv text-center font-bold text-gray-300">OR</div>
        </div>
        {/* Get A Service Section */}
        <div className="flex-1 bg-gray-800 p-20 rounded-xl flex flex-col">
          <h2 className="text-xl font-bold mb-2 text-center">Get A Service</h2>
          <p className="text-sm text-gray-400 mb-4 text-center">Subtext</p>
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-gray-700 h-40 rounded-lg flex items-center justify-center cursor-pointer"
                onClick={() => openModal(`Service ${index + 1} details`)}
              >
                {/* Add Service Icon or Text */}
                <span className="text-white">Service {index + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Get A Guy Section */}
        <div className="flex bg-gray-800 w-2/6 p-20 rounded-xl  flex-col">
          <h2 className="text-xl font-bold mb-2 text-center">Get A Guy</h2>
          <div className="flex flex-col gap-4 mt-4">
            <input
              type="text"
              placeholder="Enter the Prompt"
              className="w-full bg-gray-700 p-2 rounded-lg placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="flex flex-col gap-2">
              <div className="bg-gray-700 h-10 rounded-lg"></div>
              <div className="bg-gray-700 h-10 rounded-lg"></div>
              <div className="bg-gray-700 h-10 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-lg z-10">
            <div className="bg-white p-5 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-2">Service Details</h2>
              <p>{modalContent}</p>
              <button onClick={closeModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GetServiceCard