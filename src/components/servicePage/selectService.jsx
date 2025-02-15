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

export default function SelectService() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#060E0E]  text-white relative">
      <nav>
        <div className="flex flex-col md:flex-row lg:justify-between lg:items-center items-start px-5 lg:pt-0 pt-5 md:pr-18 md:px-24 lg:h-20 h-15">
          <button className="cursor-pointer">
            <img src="logo.png" alt="" className="lg:h-8 h-6 w-auto" />
          </button>
          <span className="flex flex-col md:flex-row justify-around w-full md:w-auto gap-3">
            <button className="mx-2 md:mx-6 hidden md:block">Home</button>
            <button className="mx-2 md:mx-6 hidden md:block">About Us</button>
            <button className="mx-2 md:mx-6 hidden md:block">Contact Us</button>
            <button className="mx-2 md:mx-6 px-8 py-2 rounded-lg text-black font-bold bg-[#37f9a2] text-center hidden md:block">
              Login
            </button>
          </span>
        </div>
      </nav>

      <div
        className="absolute w-screen h-70 bg-[#83ff9884] bg-blend-lighten top-90 opacity-25 pointer-events-none"
        style={{
          filter: "blur(100px)",
          zIndex: 10,
        }}
      />

      <div className="text-center lg:mt-15 mt-5">
        <h2 className="lg:text-4xl text-2xl font-semibold  text-green-300 mb-4">
          Select a Service
        </h2>
        <p className="text-gray-400 lg:text-base text-sm mt-2 lg:px-0 px-5">
          Choose the service that best fits your needs to get started with your
          project.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 py-10 lg:px-20 lg:mx-60 px-5 z-20 relative ">
        {services.map((service) => (
          <Link to={service.link} key={service.id}>
            <div className="bg-white text-black font-bold p-4 rounded-lg cursor-pointer hover:scale-105 transition-all">
              <img
                src={service.img}
                alt={service.title}
                className="w-full lg:h-40 h-20 object-contain shadow-xl rounded-lg"
              />
              <h3 className="text-center mt-2 lg:text-base text-sm">
                {service.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* {selected && (
        <div
          className="absolute bg-[#00000077] flex justify-center items-center z-20"
          onClick={() => setSelected(null)}
        >
          <div className="p-4 bg-white rounded-lg max-w-lg">
            <img src={selected.img} alt={selected.title} className="w-full h-auto" />
            <h2 className="text-center text-xl font-bold mt-2">{selected.title}</h2>
          </div>
        </div>
      )} */}
    </div>
  );
}
