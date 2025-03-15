import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SoftwareMaintenancePopup({ onBack }) {
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
      {options.slice(0, 6).map((option) => (
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
            {" "}
            What type of software do you need maintenance for?
            <span className="text-[10px] text-gray-500">
              (choose one or more option)
            </span>
          </h2>
          {renderScrollableOptions(
            [
              "Website / Web App (Business site, eCommerce, SaaS, dashboards, etc.)",
              "Mobile App (iOS, Android, Hybrid apps)",
              "Desktop Software (Windows, Mac, Linux applications)",
              "Custom Software / Internal Tools (ERP, CRM, Inventory Management, etc.)",
              "API / Backend System (Databases, server-side logic, cloud services)",
              "AI & Automation Systems (Chatbots, automated workflows, ML models)",
              "Other (Describe your software and needs)",
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
            What kind of maintenance do you need?
            <span className="text-[10px] text-gray-500">
              (choose one or more option)
            </span>
          </h2>
          {renderScrollableOptions(
            [
              " Bug Fixes & Issue Resolution (Fixing crashes, errors, and broken features)",
              " Performance Optimization (Speed improvements, reducing downtime, faster loading)",
              " Feature Updates & Enhancements (Adding new features, improving UI/UX)",
              " Security Updates & Protection (Patching vulnerabilities, data security, backups)",
              " Third-Party Integrations (Payment gateways, APIs, automation tools)",
              " Regular Maintenance & Support (Ongoing monitoring, updates, technical support)",
              "‍♂ Not sure – Need expert assessment",
            ],
            "option2",
            true // Multi-select
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
          <h2 className="lg:text-base text-[12px]">How often do you need maintenance?</h2>
          {renderScrollableOptions(
            [
              "One-Time Fix (Immediate issue resolution, bug fixes, performance boost)",
              "Monthly Maintenance (Regular check-ups, updates, security patches)",
              "Ongoing Support & Development (Long-term improvements, active monitoring)",
            ],
            "option3"
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className="m-2 lg:p-2 p-1 px-2 lg:px-4  text-white text-lg font-mono font-semibold"
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
          <h2 className="lg:text-base text-[12px]">How often do you need maintenance?</h2>
          {renderScrollableOptions(
            [
              " Yes, I have full access (Source code, server, database, admin panel, etc.)",
              " Limited access (Some credentials but not full access)",
              " No access – Need help retrieving it",
              " ‍♂ Not sure – Need expert assistance",
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
          <h2 className="lg:text-base text-[12px]">
            What platform or technology is your software built on?
          </h2>
          {renderScrollableOptions(
            [
              "Website / Web App: (WordPress, React, Angular, Laravel, PHP, etc.)",
              "Mobile App: (Android – Kotlin, Java | iOS – Swift, Objective-C | Flutter, React Native)",
              "Desktop Software: (Windows – .NET, C# | Mac – Swift | Linux – Python, C++)",
              "Backend / Database: (Node.js, Django, MySQL, PostgreSQL, Firebase, AWS, etc.)",
              "APIs / Third-Party Tools: (Stripe, Zapier, Twilio, Chatbots, etc.)",
              "‍♂ Not sure – Need an assessment",
            ],
            "option5"
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className="m-2 lg:p-2 p-1 px-2 lg:px-4 text-white text-lg font-mono font-semibold"
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
            Do you have any specific issues or challenges?
          </h2>
          {renderScrollableOptions(
            [
              " Frequent crashes or downtime",
              " Slow performance & lagging issues",
              " Outdated design or functionality",
              " Security concerns or data breaches",
              " Third-party service issues (Payment, API, hosting, etc.)",
              " Other (Describe the problem briefly: _______) ",
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
