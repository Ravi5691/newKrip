import { useState } from "react";

export default function MultiStepForm({ onBack }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    option1: "",
    option2: "",
    option3: "",
    option4: [],
    option5: "",
    option6: "",
    option7: "",
    option8: "",
    option9: "",
    option10: "",
  });

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
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    if (step === 1) {
      onBack();
    } else {
      setStep(step > 1 ? step - 1 : step);
    }
  };

  // Function to render scrollable options
  const renderScrollableOptions = (options, key, isMultiSelect = false) => (
    <div className="flex flex-col mt-2 h-48 overflow-y-auto border p-2">
      {options.map((option) => (
        <label
          key={option}
          className="flex items-center text-[10px] space-x-2 p-1"
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
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col w-100 mt-5">
      {step === 1 && (
        <div className="p-4">
          <h2 className="text-base">What type of website</h2>
          {renderScrollableOptions(
            ["Website Design", "App Design", "Web and App Design"],
            "option1"
          )}
          <div className="mt-4">
            <button
              disabled
              className="m-2 p-2 bg-gray-300 text-gray-600 cursor-not-allowed"
            >
              Back
            </button>
            <button
              disabled={!formData.option1}
              onClick={handleNext}
              className="m-2 p-2 bg-green-500 text-white"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="p-4">
          <h2 className="text-base">
            What do you need developed?{" "}
            <span className="text-[10px] text-gray-500">
              (choose one or more option)
            </span>
          </h2>
          {renderScrollableOptions(
            [
              "🌐 Website (Business site, portfolio, blog, landing page, etc.)",
              "🛍 E-commerce Website (Online store, product catalog, payment integration)",
              "📱 Mobile App (iOS, Android, or Hybrid app)",
              "💻 Web App (Dashboard, SaaS platform, booking system, etc.)",
              "🛠 Custom Software / Internal Tool (CRM, ERP, management system)",
              "🔌 API or Backend Development (Data management, integrations, cloud solutions)",
              "🎭 Other (Briefly describe your project)",
            ],
            "option2",
            true // Multi-select
          )}
          <div className="mt-4">
            <button
              onClick={handleBack}
              className="m-2 p-2 bg-gray-500 text-white"
            >
              Back
            </button>
            <button
              disabled={formData.option2.length === 0}
              onClick={handleNext}
              className="m-2 p-2 bg-green-500 text-white"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="p-4">
          <h2 className="text-base">What’s the purpose of your project?</h2>
          {renderScrollableOptions(
            [
              "✅ Business / Brand Presence (Showcase company, services, or products)",
              "✅ E-commerce & Sales (Selling products, managing orders, customer engagement)",
              "✅ User Engagement & Community (Social networking, forums, messaging apps)",
              "✅ Automation & Productivity (Workflow automation, task management, CRM)",
              "✅ Education & Training (Courses, learning portals, assessments)",
              "✅ Entertainment & Media (Streaming, news, content platforms)",
              "✅ Other (Briefly describe the goal of your project)",
            ],
            "option3"
          )}
          <div className="mt-4">
            <button
              onClick={handleBack}
              className="m-2 p-2 bg-gray-500 text-white"
            >
              Back
            </button>
            <button
              disabled={!formData.option3}
              onClick={handleNext}
              className="m-2 p-2 bg-green-500 text-white"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="p-4">
          <h2 className="text-lg">What key features do you need?</h2>
          {renderScrollableOptions(
            [
              "🛍 Product Listings & Online Payments (For e-commerce websites)",
              "🔗 User Authentication & Login System (Email, phone, Google, etc.)",
              "📞 Contact Forms / Chat Support (WhatsApp, AI chatbot, help desk)",
              "📊 Dashboard & Analytics (User insights, reports, data tracking)",
              "📍 Location & Maps Integration (Google Maps, live tracking, etc.)",
              "🔌 Third-Party Integrations (Payment gateways, APIs, CRM, etc.)",
              "📸 Media Uploads & Galleries (User-generated content, images, videos)",
              "🚀 SEO & Performance Optimization (Ranking, fast load time, mobile-friendly)",
              "🛠 Other (Describe any additional features needed)",
            ],
            "option4",
            true // Multi-select
          )}
          <div className="mt-4">
            <button
              onClick={handleBack}
              className="m-2 p-2 bg-gray-500 text-white"
            >
              Back
            </button>
            <button
              disabled={formData.option4.length === 0}
              onClick={handleNext}
              className="m-2 p-2 bg-green-500 text-white"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="p-4">
          <h2 className="text-lg">Do you have a design preference?</h2>
          {renderScrollableOptions(
            [
              "🎨 Yes, I have a UI/UX design ready (Figma, Adobe XD, etc.)",
              "📌 No, I need a designer to create one",
              "🤷‍♂ Not sure – Need expert guidance",
            ],
            "option5"
          )}
          <div className="mt-4">
            <button
              onClick={handleBack}
              className="m-2 p-2 bg-gray-500 text-white"
            >
              Back
            </button>
            <button
              disabled={!formData.option5}
              onClick={handleNext}
              className="m-2 p-2 bg-green-500 text-white"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 6 && (
        <div className="p-4">
          <h2 className="text-lg">What platform do you prefer?</h2>
          {renderScrollableOptions(
            [
              "🌐 Website Builders (Wix, Shopify, WordPress) – Easy to manage, quick setup",
              "🖥 Custom Website (React, Angular, PHP, Laravel, etc.) – Tailored for full control",
              "📱 Native Mobile App (Android – Kotlin, iOS – Swift) – High-performance apps",
              "🌍 Hybrid / Cross-Platform (Flutter, React Native) – Works on both iOS & Android",
              "🔌 Not sure – Need expert recommendation",
            ],
            "option6"
          )}
          <div className="mt-4">
            <button
              onClick={handleBack}
              className="m-2 p-2 bg-gray-500 text-white"
            >
              Back
            </button>
            <button
              disabled={!formData.option6}
              onClick={handleNext}
              className="m-2 p-2 bg-green-500 text-white"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Add remaining steps (7-10) similarly */}
      {step === 7 && (
        <div className="p-4">
          <h2 className="text-lg">Do you have any reference websites/apps?</h2>
          <div className="flex flex-col mt-2">
            {[
              "📌 Yes, here are some examples: (Share links)",
              "📌 No, but I have a rough idea of what I want",
            ].map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="option7"
                  value={option}
                  checked={formData.option7 === option}
                  onChange={() => handleSelect("option7", option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
          <div className="mt-4">
            <button
              onClick={handleBack}
              className="m-2 p-2 bg-gray-500 text-white"
            >
              Back
            </button>
            <button
              disabled={!formData.option7}
              onClick={handleNext}
              className="m-2 p-2 bg-green-500 text-white"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 8 && (
        <div className="p-4">
          <h2 className="text-lg">Do you have an existing domain & hosting?</h2>
          <div className="flex flex-col mt-2">
            {[
              "🌐 Yes, I have a domain and hosting (Share details if needed)",
              "🛠 No, I need help setting it up",
            ].map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="option8"
                  value={option}
                  checked={formData.option8 === option}
                  onChange={() => handleSelect("option8", option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
          <div className="mt-4">
            <button
              onClick={handleBack}
              className="m-2 p-2 bg-gray-500 text-white"
            >
              Back
            </button>
            <button
              disabled={!formData.option8}
              onClick={handleNext}
              className="m-2 p-2 bg-green-500 text-white"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 9 && (
        <div className="p-4">
          <h2 className="text-lg">
            Do you need post-launch support & maintenance?
          </h2>
          <div className="flex flex-col mt-2">
            {[
              "✅ Yes, I need ongoing support for updates, security, and scaling",
              "✅ No, just the development – I’ll manage updates myself",
              "🤷‍♂ Not sure, need expert advice",
            ].map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="option9"
                  value={option}
                  checked={formData.option9 === option}
                  onChange={() => handleSelect("option9", option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
          <div className="mt-4">
            <button
              onClick={handleBack}
              className="m-2 p-2 bg-gray-500 text-white"
            >
              Back
            </button>
            <button
              disabled={!formData.option9}
              onClick={handleNext}
              className="m-2 p-2 bg-green-500 text-white"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 10 && (
        <div className="p-4">
          <h2 className="text-lg">Show templates</h2>
          <div className="flex flex-col mt-2">
            <p>Here are some templates based on your selections:</p>
            {/* Add template display logic here */}
          </div>
          <div className="mt-4">
            <button
              onClick={handleBack}
              className="m-2 p-2 bg-gray-500 text-white"
            >
              Back
            </button>
            <button
              onClick={() => setStep(1)}
              className="m-2 p-2 bg-red-500 text-white"
            >
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
