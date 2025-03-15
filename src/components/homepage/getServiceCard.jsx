import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Video, Brush, Code, BrainCircuit, PenTool, Wrench } from "lucide-react"; // Importing icons
import WebMultiStepForm from "../servicePage/popUpPages/webPopUp";
import VideoMultiStepForm from "../servicePage/popUpPages/videoEditPopup";
import GraphicDesignPopup from "../servicePage/popUpPages/graphicPopUp";
import ContentCreationPopup from "../servicePage/popUpPages/contentCreationPopUp";
import AiAutomationPopup from "../servicePage/popUpPages/aiPopUp";
import SoftwareMaintenancePopup from "../servicePage/popUpPages/swPopUp";

const services = [
  { id: 1, title: "Video Editing", icon: <Video size={30} />, form: VideoMultiStepForm },
  { id: 2, title: "Graphic Design", icon: <Brush size={30} />, form: GraphicDesignPopup },
  { id: 3, title: "Web & App Development", icon: <Code size={30} />, form: WebMultiStepForm },
  { id: 4, title: "AI Automation", icon: <BrainCircuit size={30} />, form: AiAutomationPopup },
  { id: 5, title: "Content Creation", icon: <PenTool size={30} />, form: ContentCreationPopup },
  { id: 6, title: "Software Maintenance", icon: <Wrench size={30} />, form: SoftwareMaintenancePopup },
];

const GetServiceCard = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const handleRedirect = () => {
    if (prompt.trim() !== "") {
      navigate(`/get-a-guy/templates/${encodeURIComponent(prompt)}`);
    }
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleClosePopup = () => {
    setSelectedService(null);
  };

  return (
    <div className="flex items-center justify-center w-screen lg:mt-20 mt-5 mb-28 relative">
      <div className="flex flex-col lg:flex-row text-white w-full lg:mx-40 mx-7 relative">
        {/* Get A Service Section */}
        <div className="flex-[1.3] bg-[#11261D] border-2 border-[#37f9a270] p-8 rounded-xl flex flex-col items-center relative lg:min-h-[400px]">
          <h2 className="lg:text-2xl text-xl font-bold mb-4 text-center">Get A Service</h2>
          <div className="grid grid-cols-3 lg:gap-4 gap-2 w-full">
            {services.map((service) => (
              <div
                key={service.id}
                className="text-center"
                onClick={() => handleServiceClick(service)}
              >
                <div className="bg-[#183024] text-white p-4 rounded-lg cursor-pointer hover:scale-105 transition-all lg:h-36 flex flex-col items-center justify-center lg:mb-2">
                  <div className="text-green-400 mb-2">{service.icon}</div>
                  <h3 className="lg:text-sm text-[12px]">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OR Button */}
        <div className="absolute left-[58%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 lg:flex items-center justify-center text-sm font-bold border border-white z-10 hidden">
          OR
        </div>

        {/* Get A Guy Section */}
        <div className="flex-[0.9] bg-[#11261D] border-2 border-[#37f9a270] p-8 rounded-xl flex flex-col items-center justify-center relative lg:min-h-[400px]">
          <h2 className="lg:text-2xl text-xl font-bold mb-4 text-center">Get A Guy</h2>
          <div className="relative w-full flex items-center mb-6">
            <input
              type="text"
              placeholder="Enter the Prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full bg-white p-3 rounded-lg placeholder-gray-500 text-black lg:text-sm text-[10px] focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleRedirect}
              className="absolute right-1 bg-[#37f9a2] text-black lg:py-2 px-2 py-1 rounded-lg hover:bg-green-400 transition duration-300"
            >
              ➜
            </button>
          </div>
          <h3 className="text-gray-300 text-sm font-medium lg:mt-12 mt-3 mb-3">Common Search</h3>
          <div className="w-full flex flex-col gap-2">
            <div className="bg-white text-black p-3 rounded-lg lg:text-sm text-[10px]">
              I want to make an E-commerce website
            </div>
            <div className="bg-white text-black p-3 rounded-lg lg:text-sm text-[10px]">
              I want to make a Portfolio using Next.js
            </div>
          </div>
        </div>
      </div>

      {/* Popup for Selected Service */}
      {selectedService && (
        <div className="fixed inset-0 bg-[#00000095] backdrop-blur-[2px] flex items-center justify-center z-70">
        <div></div>
          <div className="bg-[#0c1b14] border-1 border-[#37f9a270] lg:p-8 p-5 pb-0 rounded-xl relative">
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-white hover:text-gray-300"
            >
              &times;
            </button>
            <h2 className="lg:text-xl text-base mt-4 font-bold mb-4 text-center text-white">{selectedService.title}</h2>
            <selectedService.form />
          </div>
        </div>
      )}
    </div>
  );
};

export default GetServiceCard;

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Video, Brush, Code, BrainCircuit, PenTool, Wrench } from "lucide-react";
// import WebMultiStepForm from "./servicePage/popUpPages/webPopUp";
// import VideoMultiStepForm from "./servicePage/popUpPages/videoEditPopup";
// import GraphicDesignPopup from "./servicePage/popUpPages/graphicPopUp";
// import ContentCreationPopup from "./servicePage/popUpPages/contentCreationPopUp";
// import AiAutomationPopup from "./servicePage/popUpPages/aiPopUp";
// import SoftwareMaintenancePopup from "./servicePage/popUpPages/swPopUp";

// const services = [
//   { id: 1, title: "Video Editing", icon: <Video size={30} />, form: VideoMultiStepForm },
//   { id: 2, title: "Graphic Design", icon: <Brush size={30} />, form: GraphicDesignPopup },
//   { id: 3, title: "Web & App Development", icon: <Code size={30} />, form: WebMultiStepForm },
//   { id: 4, title: "AI Automation", icon: <BrainCircuit size={30} />, form: AiAutomationPopup },
//   { id: 5, title: "Content Creation", icon: <PenTool size={30} />, form: ContentCreationPopup },
//   { id: 6, title: "Software Maintenance", icon: <Wrench size={30} />, form: SoftwareMaintenancePopup },
// ];

// const GetServiceCard = () => {
//   const [prompt, setPrompt] = useState("");
//   const [selectedService, setSelectedService] = useState(null);
//   const navigate = useNavigate();

//   const loggedIn = localStorage.getItem("user"); // Example: Check login status using localStorage

//   const handleRedirect = () => {
//     if (prompt.trim() !== "") {
//       if (loggedIn) {
//         navigate(`/get-a-guy/templates/${encodeURIComponent(prompt)}`);
//       } else {
//         alert("Please log in to use this service.");
//         navigate("/login");
//       }
//     }
//   };

//   const handleServiceClick = (service) => {
//     if (loggedIn) {
//       setSelectedService(service);
//     } else {
//       alert("Please log in to use this service.");
//       navigate("/client-signup");
//     }
//   };

//   const handleClosePopup = () => {
//     setSelectedService(null);
//   };

//   return (
//     <div className="flex items-center justify-center w-screen lg:mt-20 mt-5 mb-28 relative">
//       <div className="flex flex-col lg:flex-row text-white w-full lg:mx-40 mx-7 relative">
//         {/* Get A Service Section */}
//         <div className="flex-[1.3] bg-[#11261D] border-2 border-[#37f9a270] p-8 rounded-xl flex flex-col items-center relative min-h-[400px]">
//           <h2 className="text-2xl font-bold mb-4 text-center">Get A Service</h2>
//           <div className="grid grid-cols-3 gap-4 w-full">
//             {services.map((service) => (
//               <div
//                 key={service.id}
//                 className="text-center"
//                 onClick={() => handleServiceClick(service)}
//               >
//                 <div className="bg-[#183024] text-white p-4 rounded-lg cursor-pointer hover:scale-105 transition-all h-36 flex flex-col items-center justify-center mb-2">
//                   <div className="text-green-400 mb-2">{service.icon}</div>
//                   <h3 className="text-sm">{service.title}</h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* OR Button */}
//         <div className="absolute left-[58%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold border border-white z-10">
//           OR
//         </div>

//         {/* Get A Guy Section */}
//         <div className="flex-[0.9] bg-[#11261D] border-2 border-[#37f9a270] p-8 rounded-xl flex flex-col items-center justify-center relative min-h-[400px]">
//           <h2 className="text-2xl font-bold mb-4 text-center">Get A Guy</h2>
//           <div className="relative w-full flex items-center mb-6">
//             <input
//               type="text"
//               placeholder="Enter the Prompt"
//               value={prompt}
//               onChange={(e) => setPrompt(e.target.value)}
//               className="w-full bg-white p-3 rounded-lg placeholder-gray-500 text-black text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//             <button
//               onClick={handleRedirect}
//               className="absolute right-1 bg-[#37f9a2] text-black p-2 rounded-lg hover:bg-green-400 transition duration-300"
//             >
//               ➜
//             </button>
//           </div>
//           <h3 className="text-gray-300 text-sm font-medium mt-12 mb-3">Common Search</h3>
//           <div className="w-full flex flex-col gap-2">
//             <div className="bg-white text-black p-3 rounded-lg text-sm">
//               I want to make an E-commerce website
//             </div>
//             <div className="bg-white text-black p-3 rounded-lg text-sm">
//               I want to make a Portfolio using Next.js
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Popup for Selected Service */}
//       {selectedService && (
//         <div className="fixed inset-0 bg-[#00000095] backdrop-blur-[2px] flex items-center justify-center z-70">
//           <div className="bg-[#0c1b14] border-1 border-[#37f9a270] p-8 pb-0 rounded-xl relative">
//             <button
//               onClick={handleClosePopup}
//               className="absolute top-2 right-2 text-white hover:text-gray-300"
//             >
//               &times;
//             </button>
//             <h2 className="text-xl mt-4 font-bold mb-4 text-center text-white">
//               {selectedService.title}
//             </h2>
//             <selectedService.form />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GetServiceCard;
