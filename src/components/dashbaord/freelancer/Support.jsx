import React from "react";

const SupportCommunity = () => {
  return (
    <div className="p-3 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold mb-6">Support & Community Page</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-8 w-full h-80 flex flex-col justify-center items-center mx-auto text-center">
        <h2 className="text-xl font-semibold mb-2">How Can We Help You?</h2>
        <p className="text-gray-600 mb-4">
          Find Answers And Issues Solved From Our Support Team Fast
        </p>
        <input
          type="text"
          placeholder="Search..."
          className="w-3xl border border-gray-300 rounded p-2 mb-4"
        />
        <button className="bg-green-500 text-white px-6 py-2 rounded">
          Submit
        </button>
      </div>
      
      <h2 className="text-2xl font-semibold mt-8">FAQs</h2>
    </div>
  );
};

export default SupportCommunity;
