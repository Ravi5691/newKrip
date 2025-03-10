import { useState } from "react";

export default function WebMultiStepForm({ onBack }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    option1: "",
    option2: "",
    option3: "",
    option4: "",
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
    <div className="flex flex-col w-100 mt-5">
      {step === 1 && (
        <div className="p-4">
          <h2 className="text-base"> Which service do you need?</h2>
          {renderScrollableOptions(
            [
              " Web Development (Website, Web App, SaaS, etc.)",
              "App Development (Mobile App, API, Internal Tool, etc.)",
              "Both Web & App Development (Multi-Platform Solutions, Marketplaces, etc.)",
            ],
            "option1"
          )}
          <div className="mt-4 flex justify-end">
            <button
              disabled={!formData.option1}
              onClick={handleNext}
              className="m-2 p-2 px-4 bg-[#37f9a2] rounded-lg text-black text-lg font-mono font-semibold"
            >
              <span className="font-sans text-sm">Next</span> &gt;
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
          {formData.option1 ===
            " Web Development (Website, Web App, SaaS, etc.)" && (
            <>
              {renderScrollableOptions(
                [
                  "Business Website (Portfolio, Blog, Landing Page)",
                  "E-commerce Website (Online Store, Product Listings, Payments)",
                  "Web Application (SaaS, Dashboard, Custom Solutions, Internal Tool)",
                ],
                "option2",
                true // Multi-select
              )}
            </>
          )}
          {formData.option1 ===
            "App Development (Mobile App, API, Internal Tool, etc.)" && (
            <>
              {renderScrollableOptions(
                [
                  "Mobile App (iOS, Android, Hybrid)",
                  "Business Tool (CRM, ERP, Task Management, etc.)",
                  "API / Backend Development (Data Processing, Cloud Integrations, Payment Systems)",
                ],
                "option2",
                true // Multi-select
              )}
            </>
          )}
          {formData.option1 ===
            "Both Web & App Development (Multi-Platform Solutions, Marketplaces, etc.)" && (
            <>
              {renderScrollableOptions(
                [
                  "SaaS or Marketplace (Web + Mobile App Combined)",
                  "E-commerce Platform (Online Store + Shopping App)",
                  "Community or Social Platform (Forum, Membership App, Social Network, etc.)",
                ],
                "option2",
                true // Multi-select
              )}
            </>
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className="m-2 p-2  text-white text-lg font-mono font-semibold"
            >
              &lt; <span className="font-sans text-sm">Back</span>
            </button>
            <button
              disabled={formData.option2.length === 0}
              onClick={handleNext}
              className="m-2 p-2 px-4 bg-[#37f9a2] rounded-lg text-black text-lg font-mono font-semibold"
            >
              <span className="font-sans text-sm">Next</span> &gt;
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="p-4">
          <h2 className="text-base">What's the purpose of your project?</h2>
          {renderScrollableOptions(
            [
              "Business / Brand Presence (Showcase company, services, or products)",
              "E-commerce & Sales (Selling products, managing orders, customer engagement)",
              "User Engagement & Community (Social networking, forums, messaging apps)",
              "Automation & Productivity (Workflow automation, task management, CRM)",
              "Education & Training (Courses, learning portals, assessments)",
              "Entertainment & Media (Streaming, news, content platforms)",
              "Other (Briefly describe the goal of your project)",
            ],
            "option3"
          )}
          {formData.option3 ===
            "Other (Briefly describe the goal of your project)" && (
            <textarea
              placeholder="Please describe the goal of your project..."
              className="mt-2 w-full p-2 border-b-1 text-sm border-gray-300 focus:outline-none"
              maxLength={100}
              onChange={(e) =>
                setFormData({ ...formData, option3Description: e.target.value })
              }
            />
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className="m-2 p-2  text-white text-lg font-mono font-semibold"
            >
              &lt; <span className="font-sans text-sm">Back</span>
            </button>
            <button
              disabled={!formData.option3}
              onClick={handleNext}
              className="m-2 p-2 px-4 bg-[#37f9a2] rounded-lg text-black text-lg font-mono font-semibold"
            >
              <span className="font-sans text-sm">Next</span> &gt;
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="p-4">
          <h2 className="text-base">What key features do you need?</h2>
          {formData.option1 ===
            " Web Development (Website, Web App, SaaS, etc.)" && (
            <div>
              {renderScrollableOptions(
                [
                  "Product Listings & Online Payments (Shopping Cart, Checkout, Stripe, Razorpay, etc.)",
                  " User Authentication & Login System (Google/Facebook SSO, OTP-based access, etc.)",
                  "Contact Forms / Chat Support (WhatsApp, AI Chatbot, Help Desk Integration)",
                  " SEO & Performance Optimization (Faster loading, ranking optimization, mobile responsiveness)",
                ],
                "option4",
                true // Multi-select
              )}
            </div>
          )}
          {formData.option1 ===
            "App Development (Mobile App, API, Internal Tool, etc.)" && (
            <div>
              {renderScrollableOptions(
                [
                  " Push Notifications (Automated alerts, promotional messages, transactional updates)",
                  " Location & Maps Integration (Google Maps, GPS Tracking, Geo-Fencing, Live Tracking)",
                  "API & Third-Party Integrations (Payment Gateway, CRM, External Services, Social Logins)",
                  "Media Uploads & Galleries (User-Generated Content, File Uploads, Video Integration)",
                ],
                "option4",
                true // Multi-select
              )}
            </div>
          )}
          {formData.option1 ===
            "Both Web & App Development (Multi-Platform Solutions, Marketplaces, etc.)" && (
            <div>
              {renderScrollableOptions(
                [
                  "Product Listings & Online Payments (Shopping Cart, Checkout, Stripe, Razorpay, etc.)",
                  " User Authentication & Login System (Google/Facebook SSO, OTP-based access, etc.)",
                  "Contact Forms / Chat Support (WhatsApp, AI Chatbot, Help Desk Integration)",
                  " SEO & Performance Optimization (Faster loading, ranking optimization, mobile responsiveness)",
                  " Push Notifications (Automated alerts, promotional messages, transactional updates)",
                  " Location & Maps Integration (Google Maps, GPS Tracking, Geo-Fencing, Live Tracking)",
                  "API & Third-Party Integrations (Payment Gateway, CRM, External Services, Social Logins)",
                  "Media Uploads & Galleries (User-Generated Content, File Uploads, Video Integration)",
                ],
                "option4",
                true // Multi-select
              )}
            </div>
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className="m-2 p-2  text-white text-lg font-mono font-semibold"
            >
              &lt; <span className="font-sans text-sm">Back</span>
            </button>
            <button
              disabled={formData.option4.length === 0}
              onClick={handleNext}
              className="m-2 p-2 px-4 bg-[#37f9a2] rounded-lg text-black text-lg font-mono font-semibold"
            >
              <span className="font-sans text-sm">Next</span> &gt;
            </button>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="p-4">
          <h2 className="text-base">Do you have a design preference?</h2>
          {renderScrollableOptions(
            [
              " I have a ready UI/UX design (Figma, Adobe XD, Sketch, etc.)",
              " I need a UI/UX designer to create a custom design",
              " I am not sure and need expert guidance",
            ],
            "option5"
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className="m-2 p-2  text-white text-lg font-mono font-semibold"
            >
              &lt; <span className="font-sans text-sm">Back</span>
            </button>
            <button
              disabled={!formData.option5}
              onClick={handleNext}
              className="m-2 p-2 px-4 bg-[#37f9a2] rounded-lg text-black text-lg font-mono font-semibold"
            >
              <span className="font-sans text-sm">Next</span> &gt;
            </button>
          </div>
        </div>
      )}

      {step === 6 && (
        <div className="p-4">
          <h2 className="text-base">
            Which Backend & Performance Optimization you want?
          </h2>
          {renderScrollableOptions(
            [
              " Basic Backend (Node.js, PHP, Firebase, Small-Scale Projects)",
              " Scalable Backend (AWS, Google Cloud, Firebase, High-Traffic Apps, Enterprise Security)",
              " Enterprise-Level Backend (Microservices, AI Integration, Large Data Processing, Blockchain, High Security)",
            ],
            "option6"
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className="m-2 p-2  text-white text-lg font-mono font-semibold"
            >
              &lt; <span className="font-sans text-sm">Back</span>
            </button>
            <button
              disabled={!formData.option6}
              onClick={handleNext}
              className="m-2 p-2 px-4 bg-[#37f9a2] rounded-lg text-black text-lg font-mono font-semibold"
            >
              <span className="font-sans text-sm">Next</span> &gt;
            </button>
          </div>
        </div>
      )}

      {step === 7 && (
        <div className="p-4">
          <h2 className="text-base">
            Do you want any Ongoing Maintenance & Support?
          </h2>
          {renderScrollableOptions(
            [
              "Basic Maintenance (Bug Fixes, Security Updates, ₹5,000/month)",
              "Standard Maintenance (Monthly Updates, Performance Optimization, ₹10,000/month)",
              "Advanced Maintenance (24/7 Support, Server Scaling, Feature Enhancements, ₹20,000/month)",
            ],
            "option7"
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className="m-2 p-2  text-white text-lg font-mono font-semibold"
            >
              &lt; <span className="font-sans text-sm">Back</span>
            </button>
            <button
              disabled={!formData.option7}
              onClick={handleNext}
              className="m-2 p-2 px-4 bg-[#37f9a2] rounded-lg text-black text-lg font-mono font-semibold"
            >
              <span className="font-sans text-sm">Next</span> &gt;
            </button>
          </div>
        </div>
      )}

      {step === 8 && (
        <div className="p-4">
          <h2 className="text-base">AI-Based Price Estimation</h2>
          {renderScrollableOptions(
            [
              "Base Price for Selected Service (Web, App, Full-Stack)",
              "Additional Cost for Features Chosen (Authentication, APIs, Chatbots, Payment Gateway, etc.)",
              "Complexity-Based Cost Adjustments (Basic, Standard, Advanced, Enterprise)",
              "Design & UI/UX Cost Factor (Pre-Made, Custom, Advanced UI)",
              "Backend Infrastructure & Maintenance Pricing (Scalability, API Handling, Cloud Storage, AI Automation, etc.)",
            ],
            "option8"
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className="m-2 p-2  text-white text-lg font-mono font-semibold"
            >
              &lt; <span className="font-sans text-sm">Back</span>
            </button>
            <button
              disabled={!formData.option8}
              onClick={handleNext}
              className="m-2 p-2 px-4 bg-[#37f9a2] rounded-lg text-black text-lg font-mono font-semibold"
            >
              <span className="font-sans text-sm">Next</span> &gt;
            </button>
          </div>
        </div>
      )}

      {step === 9 && (
        <div className="p-4">
          <h2 className="text-base">
            Why This Flow Works for AI-Based Pricing?
          </h2>
          {renderScrollableOptions(
            [
              "Clear separation between Web, App, and Full-Stack Development Needs",
              "Ensures AI Can Estimate the Right Price Based on User Selection",
              "Avoids Redundant Questions, Making It User-Friendly",
              "Applies Weighted Pricing to Each Choice for Better Accuracy",
            ],
            "option9"
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className="m-2 p-2  text-white text-lg font-mono font-semibold"
            >
              &lt; <span className="font-sans text-sm">Back</span>
            </button>
            <button
              disabled={!formData.option9}
              onClick={handleNext}
              className="m-2 p-2 px-4 bg-[#37f9a2] rounded-lg text-black text-lg font-mono font-semibold"
            >
              <span className="font-sans text-sm">Next</span> &gt;
            </button>
          </div>
        </div>
      )}

      {step === 10 && (
        <div className="p-4">
          <h2 className="text-base">Show templates</h2>
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
