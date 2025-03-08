import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    id: "",
    name: "Name",
    email: "",
    bio: "",
    rating: "",
    skills: [],
    portfolio: [],
    profileImage: "",
  });

  const [bioInput, setBioInput] = useState("");
  const [skillInput, setSkillInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/profile");
      setProfile(res.data);
      setBioInput(res.data.bio);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setLoading(false);
    }
  };

  const updateBio = async () => {
    try {
      await axios.post("http://localhost:5000/api/update-profile", {
        id: profile.id,
        email: profile.email,
        bio: bioInput,
      });
      alert("Bio updated successfully!");
      setProfile({ ...profile, bio: bioInput });
    } catch (error) {
      console.error("Error updating bio:", error);
      alert("Failed to update bio.");
    }
  };

  const addSkill = async () => {
    if (skillInput.trim() === "") return;
    try {
      await axios.post("http://localhost:5000/api/add-skill", {
        id: profile.id,
        skill: skillInput,
      });
      setProfile({ ...profile, skills: [...profile.skills, skillInput] });
      setSkillInput("");
    } catch (error) {
      console.error("Error adding skill:", error);
      alert("Failed to add skill.");
    }
  };

  return (
    <div className="min-h-screen p-3">
      <h1 className="text-2xl font-semibold mb-6">Portfolio And Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[85vh]">
        {/* Left - Personal Info */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between items-center">
          <h2 className="text-lg font-semibold mb-4">Personal Info</h2>
          {loading ? (
            <div className="w-32 h-32 bg-gray-200 rounded-full animate-pulse mb-4"></div>
          ) : (
            <img src={profile.profileImage || "https://via.placeholder.com/150"} alt="Profile" className="w-32 h-32 rounded-full mb-4" />
          )}
          <h2 className="text-xl font-semibold">{loading ? <div className="h-6 w-24 bg-gray-200 animate-pulse"></div> : profile.name}</h2>
          <p className="text-gray-500">Ratings: <span className="text-yellow-500">{profile.rating}</span></p>
          <div className="w-full mt-4">
            <label className="text-gray-600">Email</label>
            {loading ? (
              <div className="w-full h-10 bg-gray-200 animate-pulse mt-1 rounded"></div>
            ) : (
              <input type="email" className="w-full border rounded p-2 mt-1 bg-gray-100" value={profile.email} readOnly />
            )}
            <label className="text-gray-600 mt-3 block">Bio</label>
            {loading ? (
              <div className="w-full h-24 bg-gray-200 animate-pulse mt-1 rounded"></div>
            ) : (
              <textarea className="w-full border rounded p-2 mt-1 h-24" value={bioInput} onChange={(e) => setBioInput(e.target.value)} />
            )}
            {!loading && (
              <button onClick={updateBio} className="bg-green-500 text-white px-4 py-2 cursor-pointer rounded mt-3 w-full">
                Update Bio
              </button>
            )}
          </div>
        </div>

        {/* Right - Skills and Portfolio */}
        <div className="col-span-2 flex flex-col gap-6">
          {/* Skills Section */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="flex gap-2">
              <input type="text" className="flex-1 border rounded p-2" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} />
              <button onClick={addSkill} className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer">Add</button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {loading ? (
                <div className="w-full h-6 bg-gray-200 animate-pulse rounded"></div>
              ) : profile.skills.length > 0 ? (
                profile.skills.map((skill, index) => (
                  <span key={index} className="bg-black text-white px-3 py-1 rounded-full">{skill}</span>
                ))
              ) : (
                <p>No skills added yet</p>
              )}
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4 text-center">Portfolio</h2>
            <div className="grid grid-cols-3 gap-4 mb-4 w-full">
              {loading ? (
                <div className="w-full h-48 bg-gray-200 animate-pulse rounded"></div>
              ) : profile.portfolio.length > 0 ? (
                profile.portfolio.map((item, index) => (
                  <img key={index} src={item} alt={`Portfolio item ${index + 1}`} className="w-full h-48 object-cover rounded" />
                ))
              ) : (
                <p>No portfolio items added yet</p>
              )}
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer">New Work</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
