import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Video Editing",
    img: "/krip png/1.png",
    link: "/adddescription",
  },
  {
    id: 2,
    title: "Graphic Design",
    img: "/krip png/2.png",
    link: "/adddescription",
  },
  {
    id: 3,
    title: "Web Development",
    img: "/krip png/3.png",
    link: "/web-template",
  },
  {
    id: 4,
    title: "AI Automation",
    img: "/krip png/4.png",
    link: "/adddescription",
  },
  {
    id: 5,
    title: "Content Creation",
    img: "/krip png/5.png",
    link: "/adddescription",
  },
  {
    id: 6,
    title: "S/W Maintenance",
    img: "/krip png/6.png",
    link: "/adddescription",
  },
];

const GetServiceCard = () => {
  return (
    <div className="flex items-center w-screen justify-center lg:mt-20 mt-5 mb-40 relative">
      <div
        className="absolute w-screen h-70 bg-[#83ff9884] bg-blend-lighten opacity-25 pointer-events-none"
        style={{
          filter: "blur(100px)",
          zIndex: 50,
        }}
      />
      <div className="rounded-2xl  flex lg:flex-row flex-col text-white w-full relative lg:mx-40 mx-7">
        {/* OR Separator */}
        <div className="flex lg:h-20 lg:w-20 h-12 w-12  place-items-center justify-center absolute rounded-full z-70 bg-[#060E0E] lg:right-111 right-35 top-72 lg:top-65  border-[#37f9a270] lg:border-2 border-1">
          <div className=" lg:text-xl text-sm text-center font-bold text-gray-300">OR</div>
        </div>
        {/* Get A Service Section */}
        <div className="flex-1 bg-[#8de29c1e] border-2 border-r-1 border-[#37f9a270] lg:py-13 py-8 lg:px-20 px-5 rounded-xl flex flex-col z-60">
          <h2 className="lg:text-3xl text-lg font-bold lg:mb-2 text-center">Get A Service</h2>
          <p className="lg:text-sm text-[10px] text-gray-200 lg:mb-6 mb-2 text-center">Subtext</p>
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:gap-6 gap-2 lg:py-10 py-3 z-20 relative ">
            {services.map((service) => (
              <Link to={service.link} key={service.id}>
                <div className="bg-white text-black font-bold p-4 rounded-lg cursor-pointer hover:scale-105 transition-all">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full lg:h-20 h-8 object-contain shadow-xl rounded-lg"
                  />
                  <h3 className="text-center text-[6px] lg:text-base mt-2">{service.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Get A Guy Section */}
        <div className="flex bg-[#8de29c1e] border-2 border-r-1 border-[#37f9a270] lg:w-[40%] lg:py-13 py-8 lg:px-20 px-5 rounded-xl z-60 flex-col">
          <h2 className="lg:text-3xl text-lg font-bold lg:mb-8 mb-2 text-center">Get A Pro</h2>
          <div className="flex flex-col gap-4 mt-4">
            <input
              type="text"
              placeholder="Enter the Prompt"
              className="w-full bg-white p-2 rounded-lg placeholder-gray-400 lg:text-sm text-[10px] focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetServiceCard;
