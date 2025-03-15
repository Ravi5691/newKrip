import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GraphicDesignPopup({ onBack }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    option1: [],
    option2: [],
    option3: [],
    option4: "",
    projectDescription: "",
  });

  const navigate = useNavigate();

  const handleSelect = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleMultiSelect = (key, value) => {
    setFormData((prev) => {
      const currentValues = prev[key];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];
      return { ...prev, [key]: newValues };
    });
  };

  const handleNext = () => {
    if (step === 5) {
      navigate("/graphic-template", { state: { formData } });
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderScrollableOptions = (options, key, isMultiSelect = false) => (
    <div className="flex flex-col mt-2 h-48 overflow-y-auto p-2">
      {options.slice(0, 10).map((option) => (
        <label
          key={option}
          className="flex items-center text-[12px] space-x-2 p-3 hover:bg-[#00000061] hover:border-[1px] rounded"
        >
          <input
            type={isMultiSelect ? "checkbox" : "radio"}
            name={key}
            value={option}
            checked={
              isMultiSelect
                ? formData[key].includes(option)
                : formData[key] === option
            }
            onChange={() =>
              isMultiSelect
                ? handleMultiSelect(key, option)
                : handleSelect(key, option)
            }
            className="accent-black cursor-pointer"
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col lg:w-100 w-65 lg:mt-5">
      {step === 1 && (
       <div className="lg:p-4">
          <h2 className="lg:text-base text-[12px]">
            What type of design do you need?
            <span className="text-[10px] text-gray-500">
              {" "}
              (Pick one or more)
            </span>
          </h2>
          {renderScrollableOptions(
            [
              "Logo Design (Branding, wordmark, abstract, mascot, etc.)",
              "Website UI/UX Design (Full website, landing page, app UI, dashboard, etc.)",
              "Product Packaging (Box, label, bottle, bag, etc.)",
              "Marketing Materials (Brochures, flyers, banners, posters, etc.)",
              "Social Media Graphics (Instagram posts, ads, YouTube thumbnails, etc.)",
              "Presentation & Pitch Decks (Corporate decks, investor presentations, etc.)",
              "Merchandise & Print Design (T-shirts, mugs, stickers, business cards, etc.)",
              "Motion Graphics / Animated Visuals (Logo animation, explainer video, GIFs, etc.)",
              "Custom Illustrations (Hand-drawn, vector, 3D renders, etc.)",
              "Not sure, need expert suggestion",
            ],
            "option1",
            true
          )}
          <div className="mt-4 flex justify-end">
            <button
              disabled={formData.option1.length === 0}
              onClick={handleNext}
              className="m-2 lg:p-2 p-1 px-2 lg:px-4 bg-[#37f9a2] rounded-lg text-black text-lg font-mono font-semibold"
            >
              <span className="font-sans text-sm">Next</span> &gt;
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
       <div className="lg:p-4">
          <h2 className="lg:text-base text-[12px]">
            What's the purpose of the design?
            <span className="text-[10px] text-gray-500">
              {" "}
              (Helps refine the creative direction)
            </span>
          </h2>
          {renderScrollableOptions(
            [
              "Branding / Business Identity (Logo, brand kit, stationery, etc.)",
              "Product Promotion & Advertising (Ad creatives, sales graphics, digital campaigns)",
              "Social Media Engagement (Consistent visuals, content marketing assets, influencer branding)",
              "Event Promotion (Posters, invitations, banners, standees, etc.)",
              "Presentation or Corporate Use (Investor decks, business reports, company profile, etc.)",
              "Other (Briefly describe your need)",
            ],
            "option2",
            true
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className="m-2 lg:p-2 p-1 px-2 lg:px-4 text-lg font-mono font-semibold"
            >
              &lt; <span className="font-sans text-sm">Back</span>
            </button>
            <button
              disabled={formData.option2.length === 0}
              onClick={handleNext}
              className="m-2 lg:p-2 p-1 px-2 lg:px-4 bg-[#37f9a2] rounded-lg text-black text-lg font-mono font-semibold"
            >
              <span className="font-sans text-sm">Next</span> &gt;
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="lg:p-4">
          <h2 className="lg:text-base text-[12px]">
            What's the style or theme you prefer?
            <span className="text-[10px] text-gray-500">
              {" "}
              (Pick one or more)
            </span>
          </h2>
          {renderScrollableOptions(
            [
              "Minimal & Clean (Sleek, modern, whitespace-heavy)",
              "Bold & Vibrant (Colorful, high contrast, eye-catching)",
              "Elegant & Luxury (Sleek typography, gold/black/white tones, premium feel)",
              "Futuristic & Techy (Glitch, cyberpunk, neon, dark mode, etc.)",
              "Classic & Traditional (Hand-drawn, vintage, ornate details, serif fonts, etc.)",
              "Corporate & Professional (Formal, structured, neutral colors, etc.)",
              "I'm open to suggestions – Impress me",
            ],
            "option3",
            true
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className="m-2 lg:p-2 p-1 px-2 lg:px-4 text-lg font-mono font-semibold"
            >
              &lt; <span className="font-sans text-sm">Back</span>
            </button>
            <button
              disabled={formData.option3.length === 0}
              onClick={handleNext}
              className="m-2 lg:p-2 p-1 px-2 lg:px-4 bg-[#37f9a2] rounded-lg text-black text-lg font-mono font-semibold"
            >
              <span className="font-sans text-sm">Next</span> &gt;
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="lg:p-4">
          <h2 className="lg:text-base text-[12px]">
            Do you have any brand guidelines or references?
            <span className="text-[10px] text-gray-500"> (Pick one)</span>
          </h2>
          {renderScrollableOptions(
            [
              "Yes, I have a brand style guide (Upload or share a link)",
              "Yes, I have inspiration or reference designs (Upload or link)",
              "No, but I have a color scheme and font preference",
              "No, I need help defining my brand style",
            ],
            "option4"
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className="m-2 lg:p-2 p-1 px-2 lg:px-4 text-lg font-mono font-semibold"
            >
              &lt; <span className="font-sans text-sm">Back</span>
            </button>
            <button
              disabled={!formData.option4}
              onClick={handleNext}
              className="m-2 lg:p-2 p-1 px-2 lg:px-4 bg-[#37f9a2] rounded-lg text-black text-lg font-mono font-semibold"
            >
              <span className="font-sans text-sm">Next</span> &gt;
            </button>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="lg:p-4">
          <h2 className="lg:text-base text-[12px]">
            Please provide a brief description of your project:
          </h2>
          <textarea
            value={formData.projectDescription}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                projectDescription: e.target.value,
              }))
            }
            className="mt-2 w-full h-24 p-3 border border-gray-300 rounded"
            placeholder="Describe your project here..."
          />
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className="m-2 lg:p-2 p-1 px-2 lg:px-4 text-lg font-mono font-semibold"
            >
              &lt; <span className="font-sans text-sm">Back</span>
            </button>
            <button
              onClick={handleNext}
              className="m-2 lg:p-2 p-1 px-2 lg:px-4 bg-[#37f9a2] rounded-lg text-black text-lg font-mono font-semibold"
            >
              <span className="font-sans text-sm">Next</span> &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
