import React, { useState, useEffect } from "react";
import PopBox from "./PopBox"; // Import the PopBox component

const templates = [
  { id: 1, title: "Portfolio Website", description: "A modern portfolio template" },
  { id: 2, title: "E-commerce Store", description: "A sleek e-commerce layout" },
  { id: 3, title: "Landing Page", description: "A high-converting landing page" },
  { id: 4, title: "Blog Template", description: "A minimal blog design" },
  { id: 5, title: "Dashboard UI", description: "A clean dashboard interface" },
];

const TemplatesPage = () => {
  const [filteredTemplates, setFilteredTemplates] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);

  const getParamFromURL = () => {
    const pathParts = window.location.pathname.split("/");
    return pathParts[pathParts.length - 1];
  };

  const param = getParamFromURL();

  useEffect(() => {
    if (param && param.trim() !== "") {
      const keyword = param.toLowerCase();
      const filtered = templates.filter((template) =>
        template.title.toLowerCase().includes(keyword)
      );
      setFilteredTemplates(filtered);
    } else {
      setFilteredTemplates([]);
    }
  }, [param]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0e2e1e] text-white flex flex-col items-center p-6 sm:px-12 md:px-20">
      <div className="w-full max-w-5xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">Select Template</h1>
          <button
            className="px-4 py-2 bg-[#16A34A] text-white rounded-lg font-medium hover:bg-[#22C55E] transition"
            onClick={() => setIsModalOpen(true)}
          >
            Start from Scratch
          </button>
        </div>

        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <div key={template.id} className="bg-[#1A1F1D] p-4 rounded-lg shadow-lg border border-[#16A34A]">
                <div className="w-full h-40 bg-gray-600 rounded-lg mb-4"></div>
                <h2 className="text-lg font-semibold text-[#B6F09C]">{template.title}</h2>
                <p className="text-gray-400">{template.description}</p>
                <button className="mt-3 px-4 py-2 w-full bg-[#16A34A] text-white rounded-lg hover:bg-[#22C55E] transition">
                  Select Template
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center">No matching templates found.</p>
        )}
      </div>

      {/* Use PopBox component instead of modal */}
      <PopBox isOpen={isModalOpen} setIsOpen={setIsModalOpen} step={step} setStep={setStep} />
    </div>
  );
};

export default TemplatesPage;
