import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const services = [
  { id: 1, title: "Landing Page", img: "/krip png/1.png" ,},
  { id: 2, title: "Ecommerce Site", img: "/krip png/2.png", },
  { id: 3, title: "Portfolio Site", img: "/krip png/3.png", },
];

export default function WebTemplate() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (service) => {
    setSelected(service);
    localStorage.setItem("selectedTemplateTitle", service.title);
  };

  const handleNext = () => {
    if (selected) {
      localStorage.setItem("selectedTemplateTitle", selected.title);
      navigate("/adddescription");
    }
  };

  return (
    <div className="min-h-screen bg-[#060E0E]  text-white relative">
      <nav>
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:pr-18 md:px-24 h-20">
          <button className="cursor-pointer">
            <img src="logo.png" alt="" className="h-8 w-auto" />
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

      <div className="text-center mt-15">
        <h2 className="text-4xl font-semibold  text-green-300 mb-4">
          Choose a Template
        </h2>
        <p className="text-gray-400 mt-2">
          Select a template that matches your project's requirements to <br />{" "}
          customize and start building.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-20 px-20 mx-40 z-20 relative">
        {services.map((service) => (
          <Link 
            key={service.id} 
            to="/adddescription"
            onClick={() => handleSelect(service)}
          >
            <div
              className="bg-white text-black font-bold p-4 rounded-lg cursor-pointer hover:scale-105 transition-all"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-50 object-contain shadow-xl rounded-lg"
              />
              <h3 className="text-center mt-2">{service.title}</h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-7 text-sm font-medium">
        <button onClick={() => navigate(-1)} className="mx-2 text-white border-1 cursor-pointer border-[#37f9a270] px-10 py-2 rounded-lg">
          Go Back
        </button>
        <button onClick={handleNext} className="mx-2 text-black cursor-pointer bg-[#37f9a2] px-12 py-2 rounded-lg">
          Next
        </button>
      </div>

      {/* {selected && (
        // <div
        //   className="fixed inset-0 bg-[#00000077] flex justify-center items-center z-20"
        //   onClick={() => setSelected(null)}
        // >
        //   <div className="p-4 bg-white rounded-lg max-w-lg">
        //     <img
        //       src={selected.img}
        //       alt={selected.title}
        //       className="w-full h-auto"
        //     />
        //     <h2 className="text-center text-xl font-bold mt-2">
        //       {selected.title}
        //     </h2>
        //   </div>
        // </div>
      )} */}
    </div>
  );
}
