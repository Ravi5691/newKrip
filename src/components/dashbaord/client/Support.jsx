import React from "react";

const SupportPage = () => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-5">Support & Community Page</h1>

      {/* Support Box */}
      <div className="bg-white shadow-md rounded-xl p-10 max-w-3xl mx-auto text-center">
        <h2 className="text-lg font-semibold">How Can We Help You?</h2>
        <p className="text-gray-500 mt-1">
          Find Answers And Issues Solved From Our Support Team Fast
        </p>

        {/* Search Input */}
        <div className="mt-5">
          <input
            type="text"
            placeholder=""
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        {/* Submit Button */}
        <button className="bg-green-400 text-white font-medium px-6 py-2 mt-4 rounded-lg hover:bg-green-500">
          Submit
        </button>
      </div>

      {/* FAQs Section */}
      <h2 className="text-xl font-semibold mt-10">FAQs</h2>
    </div>
  );
};

export default SupportPage;
