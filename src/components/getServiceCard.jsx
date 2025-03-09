import { useState } from "react";
import { Link } from "react-router-dom";
import PopBox from "../components/PopBox";

const templates = [
  {
    title: "Minimalist Logo",
    description: "Clean, modern logo design perfect for tech startups",
  },
  {
    title: "3D Logo",
    description: "Eye-catching 3D logo design with depth and dimension",
  },
  {
    title: "Mascot Logo",
    description: "Playful character-based logo design",
  },
];

const freelancers = [
  { name: "John Doe", skill: "Full Stack Developer", img: "/freelancers/john.png" },
  { name: "Jane Smith", skill: "Graphic Designer", img: "/freelancers/jane.png" },
  { name: "Alex Brown", skill: "AI Engineer", img: "/freelancers/alex.png" },
];

const services = [
  { id: 1, title: "Video Editing", img: "/krip png/1.png" },
  { id: 2, title: "Graphic Design", img: "/krip png/2.png" },
  { id: 3, title: "Web Development", img: "/krip png/3.png" },
  { id: 4, title: "AI Automation", img: "/krip png/4.png" },
  { id: 5, title: "Content Creation", img: "/krip png/5.png" },
  { id: 6, title: "S/W Maintenance", img: "/krip png/6.png" },
];

const GetServiceCard = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showFreelancers, setShowFreelancers] = useState(false);

  const handleTemplateSelection = (template) => {
    setSelectedTemplate(template);
    setIsPopupOpen(true);
  };

  const handleFormCompletion = () => {
    setIsPopupOpen(false);
    setShowFreelancers(true);
  };

  return (
    <div className="flex items-center w-screen justify-center lg:mt-20 mt-5 mb-40 relative">
      <div className="rounded-2xl flex lg:flex-row flex-col text-white w-full relative lg:mx-40 mx-7">
        {/* Left Section - Get A Service */}
        <div className="flex-1 bg-[#8de29c1e] border-2 border-r-1 border-[#37f9a270] lg:py-13 py-8 lg:px-20 px-5 rounded-xl flex flex-col">
          <h2 className="lg:text-3xl text-lg font-bold lg:mb-2 text-center">Get A Service</h2>
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:gap-6 gap-2 lg:py-10 py-3">
            {services.map((service) => (
              <Link to={service.link} key={service.id}>
                <div className="bg-white text-black font-bold p-4 rounded-lg cursor-pointer hover:scale-105 transition-all">
                  <img src={service.img} alt={service.title} className="w-full lg:h-20 h-8 object-contain shadow-xl rounded-lg" />
                  <h3 className="text-center text-[6px] lg:text-base mt-2">{service.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section - Get A Guy */}
        <div className="flex bg-[#8de29c1e] border-2 border-r-1 border-[#37f9a270] lg:w-[40%] lg:py-13 py-8 lg:px-20 px-5 rounded-xl flex-col">
          <h2 className="lg:text-3xl text-lg font-bold lg:mb-8 mb-2 text-center">Get A Guy</h2>

          {!showTemplates && !showFreelancers && (
            <div className="flex flex-col gap-4 mt-4">
              <input
                type="text"
                placeholder="Enter the Prompt"
                className="w-full bg-white p-2 rounded-lg placeholder-gray-400 lg:text-sm text-[10px] focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
              />
              <button
                className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition duration-300"
                onClick={() => setShowTemplates(true)}
              >
                Submit
              </button>
            </div>
          )}

          {showTemplates && !showFreelancers && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Select a Template</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {templates.map((template, index) => (
                  <div
                    key={index}
                    className="bg-[#0d2217] text-white p-2 rounded-xl flex flex-col items-center text-center shadow-md border border-gray-600 w-40 h-56"
                  >
                    <div className="bg-gray-300 w-full h-36 flex items-center justify-center rounded-lg mb-4">
                      <span className="text-gray-500">+</span>
                    </div>
                    <h4 className="text-sm font-semibold">{template.title}</h4>
                    <p className="text-xs text-gray-400 mb-4">{template.description}</p>
                    <button
                      className="bg-green-600 text-xs text-white p-2 rounded-lg hover:bg-green-700 transition duration-300"
                      onClick={() => handleTemplateSelection(template)}
                    >
                      Use Template
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {showFreelancers && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Recommended Freelancers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {freelancers.map((freelancer, index) => (
                  <div
                    key={index}
                    className="bg-[#0d2217] text-white p-4 rounded-xl flex flex-col items-center text-center shadow-md border border-gray-600 w-40 h-56"
                  >
                    <img src={freelancer.img} alt={freelancer.name} className="w-16 h-16 rounded-full mb-4" />
                    <h4 className="text-sm font-semibold">{freelancer.name}</h4>
                    <p className="text-xs text-gray-400">{freelancer.skill}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {isPopupOpen && <PopBox template={selectedTemplate} onComplete={handleFormCompletion} />}
    </div>
  );
};

export default GetServiceCard;
