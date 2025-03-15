import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VideoMultiStepForm({ onBack }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    option5: "",
    option6: "",
    option7: "",
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
    if (step === 7) {
      navigate("/video-template", { state: { formData } });
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
            What type of video do you need edited?
            <span className="text-[10px] text-gray-500">
              (choose one or more option)
            </span>
          </h2>
          {renderScrollableOptions(
            [
              "Social Media Video (Reels, TikTok, Shorts, Instagram, Twitter, etc.)",
              "YouTube Video (Vlogs, Tutorials, Reviews, Podcasts, etc.)",
              "Corporate / Business Video (Company intro, promo, testimonial, event recap, etc.)",
              "Cinematic / Storytelling Video (Short films, trailers, cinematic ads, etc.)",
              "Product / E-commerce Video (Ads, product showcases, Amazon/eBay listings, etc.)",
              "Explainer / Animated Video (Infographics, whiteboard animation, SaaS demo, etc.)",
              "Event / Wedding / Celebration Video (Birthday, wedding, concert, conference, etc.)",
              "Fitness / Sports Video (Workout edits, transformation videos, highlights, etc.)",
              "Gaming Video (Montages, stream highlights, commentary, etc.)",
              "Other (Briefly describe your needs)",
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
            What’s the purpose of this video?
            <span className="text-[10px] text-gray-500">
              (Helps determine pacing, style, and tone)
            </span>
          </h2>
          {renderScrollableOptions(
            [
              "Entertainment & Engagement (Social media, fun, fast-paced content)",
              "Branding & Marketing (Promotional, storytelling, or awareness videos)",
              "Education & Training (Tutorials, courses, step-by-step guides, explainer videos)",
              "Emotional Impact (Cinematic, slow-paced, powerful storytelling visuals)",
              "Sales & Conversions (Ad creatives, direct response videos, product-focused clips)",
              "Other (Briefly describe the objective)",
            ],
            "option2"
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className="m-2 lg:p-2 p-1 px-2 lg:px-4 text-white text-lg font-mono font-semibold"
            >
              &lt; <span className="font-sans text-sm">Back</span>
            </button>
            <button
              disabled={!formData.option2}
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
            What kind of editing style do you prefer?
            <span className="text-[10px] text-gray-500">
              (Choose one or more)
            </span>
          </h2>
          {renderScrollableOptions(
            [
              "Fast-Paced & High Energy (Trendy, snappy cuts, jump cuts, zoom-ins, memes, etc.)",
              "Cinematic & Smooth (Professional, seamless transitions, color grading, dramatic effects)",
              "Informative & Clean (Minimal, text overlays, voiceover sync, clear explanations)",
              "Creative & Experimental (Glitch effects, unique transitions, artistic cuts, etc.)",
              "Funny / Meme-Style Editing (Viral edits, subtitles, reaction overlays, sound effects, etc.)",
              "Not sure - Show me the best option for my video",
            ],
            "option3",
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
            What elements do you need in the edit?
            <span className="text-[10px] text-gray-500">
              (Select all that apply – Helps AI customize the project)
            </span>
          </h2>
          {renderScrollableOptions(
            [
              "Background Music / Sound Design (Licensed music, sound effects, voice sync, etc.)",
              " Subtitles / Captions (English, Hindi, Auto-Generated, Burned-In, etc.)",
              "Transitions & Effects (Smooth cuts, glitch, zoom, flash, shake, etc.)",
              "Color Grading (Warm, cool, cinematic, black & white, vibrant, etc.)",
              " Motion Graphics & Animations (Text pop-ups, graphics, visual storytelling, etc.)",
              " Voiceover Sync / Dubbing (Aligning with narration, lip-syncing, etc.)",
              " Custom Requests (Briefly describe additional needs) ",
            ],
            "option4",
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
          <h2 className="lg:text-base text-[12px]">Duration:</h2>
          {renderScrollableOptions(
            [
              "Under 30 sec (Reels, TikTok, Shorts, Ads)",
              "30 sec - 2 min (Promo, Product Video, YouTube Intro)",
              "2 - 5 min (YouTube Content, Corporate Video, Tutorials)",
              "5 - 10 min (Documentary, Detailed Explainer, Vlogs)",
              "10+ min (Long-form Content, Interviews, Movies)",
            ],
            "option5"
          )}
          <h2 className="text-sm">Format:</h2>
          {renderScrollableOptions(
            [
              "16:9 (YouTube, TV, Standard Video)",
              "9:16 (Vertical - TikTok, Instagram Reels, Shorts)",
              "1:1 (Square - Facebook, Instagram Feeds)",
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
          <h2 className="lg:text-base text-[12px]">Do you have raw footage & references?</h2>
          {renderScrollableOptions(
            [
              "Yes, I have raw footage & will upload it (Dropbox/Drive/Wetransfer link: _______ )",
              "Yes, I have sample/reference videos (Share links: _______ )",
              "No, I need help with sourcing stock footage (AI can suggest relevant clips)",
              "‍♂ Not sure, need expert guidance",
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

      {step === 7 && (
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
