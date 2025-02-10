import { useState } from "react";
import Home from "./selectService";
import ChooseTemplate from "./webDevService/chooseTemplate"

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    option1: "",
    option2: "",
    description: "",
  });

  const handleNext = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setStep(step + 1);
  };

  return (
    <div className="flex flex-col items-center p-6">
      {step === 1 && (
        <div className="p-4">
          <h2 className="text-lg font-bold">Step 1: Choose Option</h2>
          <button onClick={() => handleNext("option1", "A")} className="m-2 p-2 bg-blue-500 text-white">Option A</button>
          <button onClick={() => handleNext("option1", "B")} className="m-2 p-2 bg-blue-500 text-white">Option B</button>
          <Home/>
          <div className="mt-4">
            <button disabled className="m-2 p-2 bg-gray-300 text-gray-600 cursor-not-allowed">Back</button>
            <button disabled={!formData.option1} onClick={() => setStep(2)} className="m-2 p-2 bg-green-500 text-white">Next</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="p-4">
          <h2 className="text-lg font-bold">Step 2: Choose Next Option</h2>
          <button onClick={() => handleNext("option2", "X")} className="m-2 p-2 bg-green-500 text-white">Option X</button>
          <button onClick={() => handleNext("option2", "Y")} className="m-2 p-2 bg-green-500 text-white">Option Y</button>
          <ChooseTemplate/>
          <div className="mt-4">
            <button onClick={() => setStep(1)} className="m-2 p-2 bg-gray-500 text-white">Back</button>
            <button disabled={!formData.option2} onClick={() => setStep(3)} className="m-2 p-2 bg-green-500 text-white">Next</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="p-4">
          <h2 className="text-lg font-bold">Step 3: Enter Description</h2>
          <textarea
            className="border p-2 w-64"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
          <div className="mt-4">
            <button onClick={() => setStep(2)} className="m-2 p-2 bg-gray-500 text-white">Back</button>
            <button disabled={!formData.description.trim()} onClick={() => setStep(4)} className="m-2 p-2 bg-green-500 text-white">Next</button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="p-4 border">
          <h2 className="text-lg font-bold">Summary</h2>
          <p><strong>Option 1:</strong> {formData.option1}</p>
          <p><strong>Option 2:</strong> {formData.option2}</p>
          <p><strong>Description:</strong> {formData.description}</p>
          <div className="mt-4">
            <button onClick={() => setStep(3)} className="m-2 p-2 bg-gray-500 text-white">Back</button>
            <button onClick={() => setStep(1)} className="m-2 p-2 bg-red-500 text-white">Restart</button>
          </div>
        </div>
      )}
    </div>
  );
}
