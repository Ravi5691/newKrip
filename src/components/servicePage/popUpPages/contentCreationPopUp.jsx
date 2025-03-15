import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function ContentCreationPopup({ onBack }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    option5: "",
    option6: "",
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
    if (step === 6) {
      navigate("/specsheet", { state: { formData } });
    } else {
      setStep(step + 1);
    }
  };
  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  // Function to render scrollable options
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
            What type of content do you need?{" "}
            <span className="text-[10px] text-gray-500">
              (Pick one or more)
            </span>
          </h2>
          {renderScrollableOptions(
            [
              "Blog Writing (SEO-optimized, thought leadership, listicles)",
              "Website Content (Landing pages, service pages, about us)",
              "Email Copywriting (Newsletters, promotional emails, drip campaigns)",
              "Social Media Content (Captions, post descriptions, ad copies)",
              "E-books & Whitepapers (Guides, reports, industry insights)",
              "Case Studies & Success Stories (Client testimonials, project breakdowns)",
              "Scriptwriting (YouTube, podcasts, ads)",
              "Product Descriptions (E-commerce, Amazon listings)",
              "Technical Writing (Docs, manuals, research papers)",
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
            What’s the purpose of the content?
            {/* <span className="text-[10px] text-gray-500">
              (choose one or more option)
            </span> */}
          </h2>
          {renderScrollableOptions(
            [
              "Brand Awareness & Thought Leadership",
              "Lead Generation & Sales Conversion",
              "SEO & Organic Traffic Growth",
              "Engagement & Community Building",
              "Product Promotion & Marketing",
              "Other (Specify in brief)",
            ],
            "option2",
            true
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className="m-2 lg:p-2 p-1 px-2 lg:px-4 text-white text-lg font-mono font-semibold"
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

      {/* Add remaining steps (3-10) similarly */}
      {step === 3 && (
       <div className="lg:p-4">
          <h2 className="lg:text-base text-[12px]">
            What’s your preferred tone and writing style?
          </h2>
          {renderScrollableOptions(
            [
              "Professional & Formal (Business, B2B, technical, corporate)",
              "Conversational & Engaging (Storytelling, relatable, friendly)",
              "Informative & Educational (How-to guides, research-based)",
              "Persuasive & Sales-Oriented (Marketing-focused, strong CTAs)",
              "Fun & Witty (Casual, humor-driven, trendy)",
              "I'm open to suggestions - Impress me",
            ],
            "option3"
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className="m-2 lg:p-2 p-1 px-2 lg:px-4 text-white text-lg font-mono font-semibold"
            >
              &lt; <span className="font-sans text-sm">Back</span>
            </button>
            <button
              disabled={!formData.option3}
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
          Do you have any existing content guidelines or references?
          </h2>
          {renderScrollableOptions(
            [
              " Yes, I have a brand voice/style guide (Upload or link)",
              " Yes, I have inspiration or reference content (Upload or link)",
              " No, but I have a preferred tone and format",
              " No, I need help defining my content style",
            ],
            "option4"
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className="m-2 lg:p-2 p-1 px-2 lg:px-4 text-white text-lg font-mono font-semibold"
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
          <h2 className="lg:text-base text-[12px]">Preferred Length</h2>
          {renderScrollableOptions(
            [
              " Short-form (<500 words)",
              " Standard (500-1000 words)",
              " Long-form (1000+ words)",
            ],
            "option5"
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className="m-2 lg:p-2 p-1 px-2 lg:px-4  text-white text-lg font-mono font-semibold"
            >
              &lt; <span className="font-sans text-sm">Back</span>
            </button>
            <button
              disabled={!formData.option5}
              onClick={handleNext}
              className="m-2 lg:p-2 p-1 px-2 lg:px-4 bg-[#37f9a2] rounded-lg text-black text-lg font-mono font-semibold"
            >
              <span className="font-sans text-sm">Next</span> &gt;
            </button>
          </div>
        </div>
      )}

      {step === 6 && (
        <div className="lg:p-4">
          <h2 className="lg:text-base text-[12px]">SEO Requirements</h2>
          {renderScrollableOptions(
            [
              " Yes, include SEO keywords (Client inputs keywords)",
              "  No, SEO not required",
            ],
            "option6"
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className="m-2 lg:p-2 p-1 px-2 lg:px-4 text-white text-lg font-mono font-semibold"
            >
              &lt; <span className="font-sans text-sm">Back</span>
            </button>
            <button
              disabled={!formData.option6}
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
