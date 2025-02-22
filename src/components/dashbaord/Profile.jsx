import React, { useState } from "react";

const ProfilePage = () => {
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");

  const addSkill = () => {
    if (skillInput.trim() !== "") {
      setSkills([...skills, skillInput]);
      setSkillInput("");
    }
  };

  return (
    <div className="min-h-screen p-3">
      <h1 className="text-2xl font-semibold mb-6">Portfolio And Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[85vh]">
        {/* Left - Personal Info */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between items-center">
          <h2 className="text-lg font-semibold mb-4">Personal Info</h2>
          <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div>
          <h2 className="text-xl font-semibold">Name</h2>
          <p className="text-gray-500">Ratings: ★★★★★</p>
          <div className="w-full mt-4">
            <label className="text-gray-600">Email</label>
            <input type="email" className="w-full border rounded p-2 mt-1" />
            <label className="text-gray-600 mt-3 block">Bio</label>
            <textarea className="w-full border rounded p-2 mt-1 h-24"></textarea>
          </div>
        </div>

        {/* Right - Skills and Portfolio */}
        <div className="col-span-2 flex flex-col gap-6">
          {/* Skills Section */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 border rounded p-2"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
              />
              <button onClick={addSkill} className="bg-green-500 text-white px-4 py-2 rounded">
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {skills.map((skill, index) => (
                <span key={index} className="bg-black text-white px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4 text-center">Portfolio</h2>
            <div className="grid grid-cols-3 gap-4 mb-4 w-full">
              <div className="bg-gray-300 h-48 rounded"></div>
              <div className="bg-gray-300 h-48 rounded"></div>
              <div className="bg-gray-300 h-48 rounded"></div>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              New Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
