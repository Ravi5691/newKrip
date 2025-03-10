import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const services = [
  { id: 1, title: "Video Editing", img: "/krip png/1.png" },
  { id: 2, title: "Graphic Design", img: "/krip png/2.png" },
  { id: 3, title: "Web & App Development", img: "/krip png/3.png" },
  { id: 4, title: "AI Automation", img: "/krip png/4.png" },
  { id: 5, title: "Content Creation", img: "/krip png/5.png" },
  { id: 6, title: "Software Maintenance", img: "/krip png/6.png" },
];

const GetServiceCard = () => {
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();

  const handleRedirect = () => {
    if (prompt.trim() !== "") {
      navigate(`/get-a-guy/templates/${encodeURIComponent(prompt)}`);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen lg:mt-20 mt-5 mb-28 relative">
      <div className="flex flex-col lg:flex-row text-white w-full lg:mx-40 mx-7 relative">
        {/* Get A Service Section */}
        <div className="flex-[1.3] bg-[#11261D] border-2 border-[#37f9a270] p-8 rounded-xl flex flex-col items-center relative min-h-[400px]">
          <h2 className="text-2xl font-bold mb-4 text-center">Get A Service</h2>
          <div className="grid grid-cols-3 gap-4 w-full">
            {services.map((service) => (
              <Link to={service.link} key={service.id} className="text-center">
                <div className="bg-[#183024] text-white p-4 rounded-lg cursor-pointer hover:scale-105 transition-all h-36 flex flex-col items-center justify-center mb-2">
                  <img src={service.img} alt={service.title} className="w-10 h-10 object-contain mb-2" />
                  <h3 className="text-sm">{service.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* OR Button */}
        <div className="absolute left-[58%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold border border-white z-10">
          OR
        </div>

        {/* Get A Guy Section */}
        <div className="flex-[0.9] bg-[#11261D] border-2 border-[#37f9a270] p-8 rounded-xl flex flex-col items-center justify-center relative min-h-[400px]">
          <h2 className="text-2xl font-bold mb-4 text-center">Get A Guy</h2>
          <div className="relative w-full flex items-center mb-6">
            <input
              type="text"
              placeholder="Enter the Prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full bg-white p-3 rounded-lg placeholder-gray-500 text-black text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleRedirect}
              className="absolute right-1 bg-[#37f9a2] text-black p-2 rounded-lg hover:bg-green-400 transition duration-300"
            >
              ➜
            </button>
          </div>
          <h3 className="text-gray-300 text-sm font-medium mt-12 mb-3">Common Search</h3>
          <div className="w-full flex flex-col gap-2">
            <div className="bg-white text-black p-3 rounded-lg text-sm">
              I want to make a Ecommerce website
            </div>
            <div className="bg-white text-black p-3 rounded-lg text-sm">
              I want to make a Portfolio using Next.js
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetServiceCard;
