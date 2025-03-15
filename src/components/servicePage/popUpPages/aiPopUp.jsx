import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AiAutomationPopup({ onBack }) {
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
            What process do you want to automate?
            <span className="text-[10px] text-gray-500">
              (choose one or more option)
            </span>{" "}
          </h2>
          {renderScrollableOptions(
            [
              " Customer Support & Chatbots (AI-powered chatbots for customer service, FAQs, lead generation)",
              "Email & Marketing Automation (Auto-replies, email sequences, personalized outreach)",
              " Business Process Automation (Data entry, reports, CRM updates, invoice generation)",
              " Data Analysis & Insights (Summarizing reports, tracking KPIs, AI-powered dashboards)",
              " AI Call Assistants (Voice-based AI answering calls, booking appointments, handling queries)",
              "Social Media Automation (Auto-posting, content scheduling, engagement tracking)",
              " Custom AI Automation (Describe your needs)",
            ],
            "option1"
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
            What’s the purpose of this automation?
            <span className="text-[10px] text-gray-500">
              (choose one or more option)
            </span>
          </h2>
          {renderScrollableOptions(
            [
              "Save Time & Reduce Manual Effort (Automate repetitive tasks)",
              "Improve Customer Engagement (Chatbots, personalized responses, quick support)",
              "Boost Sales & Conversions (Lead nurturing, smart recommendations, email follow-ups)",
              "Enhance Business Efficiency (Data processing, workflow automation, internal tools)",
              "Gain Insights & Predictions (AI-driven analytics, forecasting, tracking)",
              " Other (Briefly describe the objective)",
            ],
            "option2",
            true // Multi-select
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className="m-2 lg:p-2 p-1 px-2 text-white text-lg font-mono font-semibold"
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
            {" "}
            How do you currently handle this process?
          </h2>
          {renderScrollableOptions(
            [
              "Manual Work (Employees/staff manually complete tasks)",
              "Using Basic Software (Spreadsheets, simple tools, manual data entry)",
              "Some Automation Exists, But Not Efficient (Partially automated, but needs improvement)",
              " Not Sure - Need Expert Advice",
            ],
            "option3"
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className="m-2 lg:p-2 p-1 px-2 text-white text-lg font-mono font-semibold"
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
            What features do you need?
            <span className="text-[10px] text-gray-500">
              (Select all that apply)
            </span>
          </h2>
          {renderScrollableOptions(
            [
              "Automated Responses & Messages (Email, WhatsApp, chat, SMS)",
              "Data Processing & Report Generation (Organizing, summarizing, analytics)",
              "Task & Workflow Automation (Auto-assigning tasks, reminders, approvals)",
              " AI-Based Decision Making (Predictions, smart suggestions, AI-generated reports)",
              "AI Voice Calls (Handling customer calls, booking meetings, answering FAQs)",
              " Integration with Other Tools (CRM, databases, websites, etc.)",
              " Custom Automation (Describe your specific needs)",
            ],
            "option4"
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className="m-2 lg:p-2 p-1 px-2 text-white text-lg font-mono font-semibold"
            >
              &lt; <span className="font-sans text-sm">Back</span>
            </button>
            <button
              disabled={formData.option4.length === 0}
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
            How do you want the AI to interact with users or data?
          </h2>
          {renderScrollableOptions(
            [
              "Text-Based (Chatbots, WhatsApp, Email, SMS)",
              "Voice-Based (AI answering calls, customer support)",
              "Automated Data Processing (Generating reports, organizing data)",
              "Behind-the-Scenes (No direct interaction, just automating tasks in the background)",
            ],
            "option5"
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className="m-2 lg:p-2 p-1 px-2 text-white text-lg font-mono font-semibold"
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
          <h2 className="lg:text-base text-[12px]">
            {" "}
            How do you currently handle this process?
          </h2>
          {renderScrollableOptions(
            [
              " Yes, I use (Specify: CRM, website, database, social media, etc.)",
              " ♂ Not sure - Need recommendations",
              " No, I need a complete AI solution from scratch",
            ],
            "option6"
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className="m-2 lg:p-2 p-1 px-2 text-white text-lg font-mono font-semibold"
            >
              &lt; <span className="font-sans text-sm">Back</span>
            </button>
            <button
              disabled={!formData.option6}
              onClick={handleNext}
              className="m-2 lg:p-2 p-1 px-2 bg-[#37f9a2] rounded-lg text-black text-lg font-mono font-semibold"
            >
              <span className="font-sans text-sm">Next</span> &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
