import React, { useState, useEffect } from "react";
import { ChevronRight, ArrowLeft, X } from "lucide-react";

export default function MultiStepForm({ isOpen, setIsOpen }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [budget, setBudget] = useState(500);
  const [date, setDate] = useState("");
  const [skillLevel, setSkillLevel] = useState("Intermediate");

  const totalSteps = 3;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSliderChange = (e) => setBudget(parseInt(e.target.value, 10));
  const handleDateChange = (e) => setDate(e.target.value);
  const handleSkillLevelChange = (level) => setSkillLevel(level);

  const handleContinue = () => {
    if (currentStep === 2 && !date) {
      alert("Please select a valid date.");
      return;
    }
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      console.log("Form submitted:", { budget, date, skillLevel });
      setIsOpen(false);
      window.location.href = "/get-a-guy/recommended-freelancers";
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div
        className="w-full max-w-3xl bg-[#0e2e1e] text-white rounded-lg shadow-lg overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300"
          onClick={() => setIsOpen(false)}
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Progress Bar */}
        <div className="h-1 bg-[#1a3f2d]">
          <div className="h-full bg-[#2bbb7f]" style={{ width: `${(currentStep / totalSteps) * 100}%` }} />
        </div>

        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Customize Your Request</h2>
            <div className="text-lg">
              {currentStep} / {totalSteps}
            </div>
          </div>

          <div className="min-h-[280px] flex flex-col justify-center">
            {currentStep === 1 && (
              <div className="text-center">
                <h3 className="text-2xl font-medium mb-6">What's your budget?</h3>
                <div className="text-5xl font-bold text-[#2bbb7f]">${budget.toLocaleString()}</div>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={budget}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer mt-4"
                />
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h3 className="text-2xl font-medium mb-6">When do you need this completed?</h3>
                <input
                  type="date"
                  value={date}
                  onChange={handleDateChange}
                  className="w-full py-3 px-5 bg-[#0e2e1e] border border-[#2bbb7f] rounded-lg text-white text-lg focus:outline-none"
                />
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h3 className="text-2xl font-medium mb-6">What skill level do you require?</h3>
                <div className="space-y-4">
                  {["Beginner", "Intermediate", "Expert"].map((level) => (
                    <button
                      key={level}
                      onClick={() => handleSkillLevelChange(level)}
                      className={`w-full py-3 px-5 bg-[#0e2e1e] border rounded-lg flex items-center justify-between cursor-pointer hover:border-[#2bbb7f] ${
                        skillLevel === level ? "border-[#2bbb7f]" : "border-[#1a3f2d]"
                      }`}
                    >
                      <span className="text-lg">{level}</span>
                      {skillLevel === level && <div className="w-4 h-4 bg-[#2bbb7f] rounded-full"></div>}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12">
            {currentStep > 1 ? (
              <button
                onClick={handleBack}
                className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition flex items-center gap-2"
              >
                <ArrowLeft size={20} /> Back
              </button>
            ) : (
              <div></div>
            )}

            <button
              onClick={handleContinue}
              className="px-6 py-3 rounded-lg bg-[#1a3f2d] hover:bg-[#2a5f3d] transition flex items-center gap-2"
            >
              {currentStep < totalSteps ? (
                <>
                  Continue <ChevronRight size={20} />
                </>
              ) : (
                "Complete"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
