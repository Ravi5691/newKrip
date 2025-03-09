import { useState } from "react";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [budget, setBudget] = useState(500);
  const [deadline, setDeadline] = useState("");
  const [skillLevel, setSkillLevel] = useState("Intermediate");
  const [showPopup, setShowPopup] = useState(true); // Control visibility of the popup

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setShowPopup(false); // Hide popup on completion
    }
  };

  return showPopup ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.3 }}
        className="bg-[#0F1D13] text-white p-6 rounded-lg w-[65%] h-[65%] relative shadow-lg flex flex-col justify-between"
      >
        <div className="absolute top-4 right-4 text-gray-400 text-sm">{step} / 3</div>
        <h2 className="text-sm font-semibold text-gray-300 mb-2 text-center">Customize Your Request</h2>
        <hr className="border-gray-700 mb-4" />

        <div className="flex-grow flex flex-col justify-center items-center">
          {step === 1 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-center">
              <p className="text-3xl font-bold flex justify-center items-center gap-2">
                <span className="text-green-500 text-4xl">$</span> What's your budget?
              </p>
              <p className="text-4xl font-bold mt-2">${budget}</p>
              <div className="mt-6 w-full px-10">
                <input
                  type="range"
                  min="100"
                  max="10000"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full cursor-pointer appearance-none bg-transparent"
                  style={{
                    WebkitAppearance: "none",
                    appearance: "none",
                    height: "6px",
                    background: `linear-gradient(to right, #16A34A ${(budget - 100) / 99}%, #374151 ${(budget - 100) / 99}%, #374151 100%)`,
                    borderRadius: "3px",
                    outline: "none"
                  }}
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>$100</span>
                  <span>$10,000</span>
                </div>
              </div>
            </motion.div>
          ) : step === 2 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-center">
              <p className="text-3xl font-bold flex justify-center items-center gap-2">
                <Calendar className="w-8 h-8" /> When do you need this completed?
              </p>
              <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="mt-4 px-4 py-2 rounded-lg text-black text-lg"
              />
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-center">
              <p className="text-3xl font-bold">What skill level do you require?</p>
              <div className="mt-6 space-y-4">
                {["Beginner", "Intermediate", "Expert"].map((level) => (
                  <div
                    key={level}
                    className={`cursor-pointer p-4 border rounded-lg text-lg font-medium flex items-center justify-between ${skillLevel === level ? 'border-green-500' : 'border-gray-600'}`}
                    onClick={() => setSkillLevel(level)}
                  >
                    <span>{level}</span>
                    {skillLevel === level && <span className="text-green-500">✔</span>}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        <hr className="border-gray-700 mt-4" />

        <div className="flex justify-between mt-2">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="bg-gray-600 hover:bg-gray-500 text-white py-3 px-6 rounded-lg transition text-lg font-medium"
            >
              Back
            </button>
          )}
          <button
            onClick={handleNext}
            className="bg-[#16A34A] hover:bg-[#15803D] text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition text-lg font-medium ml-auto"
          >
            {step < 3 ? "Next" : "Complete"} <span className="text-lg">→</span>
          </button>
        </div>
      </motion.div>
    </div>
  ) : null;
}
