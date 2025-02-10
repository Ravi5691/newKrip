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
          {/* <div className="grid grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-white h-40 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105"
              >
                {/* Add Service Icon or Text */}
          {/* <span className="text-[#08482bf9]">Service {index + 1}</span>
              </div>
            ))}
          </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-10 z-20 relative ">
            {services.map((service) => (
              <Link to={service.link} key={service.id}>
                <div className="bg-white text-black font-bold p-4 rounded-lg cursor-pointer hover:scale-105 transition-all">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-20 object-contain shadow-xl rounded-lg"
                  />
                  <h3 className="text-center mt-2">{service.title}</h3>
                </div>
              </Link>
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
      </div>
    </div>
  );
};

export default GetServiceCard;
