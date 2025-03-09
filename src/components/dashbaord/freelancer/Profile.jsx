import React, { useState, useEffect } from "react";

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [bioInput, setBioInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [skillInput, setSkillInput] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [portfolioImage, setPortfolioImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/freelancer")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch profile");
        return res.json();
      })
      .then((data) => {
        setProfile(data);
        setBioInput(data.bio || "");
        setEmailInput(data.email || "");
        setProfileImage(data.profile_image || "");
      })
      .catch((err) => {
        console.error("Error fetching profile:", err);
        setError("Error loading profile. Please try again.");
      });
  }, []);

  const updateProfile = () => {
    const formData = new FormData();
    formData.append("bio", bioInput);
    formData.append("email", emailInput);
    if (profileImage) formData.append("profile_image", profileImage);

    fetch("http://localhost:5000/api/freelancer/update", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setProfile({
          ...profile,
          bio: bioInput,
          email: emailInput,
          profile_image: URL.createObjectURL(profileImage),
        });
        setIsModalOpen(false);
        alert("Profile updated successfully!");
      })
      .catch((err) => console.error("Error updating profile:", err));
  };

  const addSkill = () => {
    if (skillInput.trim() === "") return;
    fetch("http://localhost:5000/api/freelancer/add-skill", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ skill: skillInput }),
    })
      .then((res) => res.json())
      .then(() => {
        setProfile({
          ...profile,
          skills: [...(profile.skills || []), skillInput],
        });
        setSkillInput("");
      })
      .catch((err) => console.error("Error adding skill:", err));
  };

  const addPortfolioWork = () => {
    if (!portfolioImage) return;
    const formData = new FormData();
    formData.append("portfolio_image", portfolioImage);

    fetch("http://localhost:5000/api/freelancer/add-portfolio", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setProfile({
          ...profile,
          portfolio: [
            ...(profile.portfolio || []),
            URL.createObjectURL(portfolioImage),
          ],
        });
        setIsPortfolioModalOpen(false);
      })
      .catch((err) => console.error("Error adding portfolio work:", err));
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen p-3">
      <h1 className="text-2xl font-semibold mb-6">Portfolio And Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[85vh]">
        {/* Left - Personal Info */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between items-center">
          <h2 className="text-lg font-semibold mb-4">Personal Info</h2>
          <img
            src={profile.profile_image || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold">{profile.name}</h2>
          <p className="text-gray-500">
            Ratings: <span className="text-yellow-500">{profile.rating}</span>
          </p>
          <div className="w-full mt-4">
            <p className="text-gray-600">Email</p>
            <p className="text-black font-medium">{profile.email}</p>
            <p className="text-gray-600 mt-3">Bio</p>
            <p className="text-black font-medium">{profile.bio}</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-500 text-white px-4 py-2 cursor-pointer rounded mt-3 w-full"
            >
              Update Profile
            </button>
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
              <button
                onClick={addSkill}
                className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
              >
                Add Skill
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {profile.skills?.length > 0 ? (
                profile.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-black text-white px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <p>No skills added yet</p>
              )}
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {profile.portfolio?.length > 0 ? (
                profile.portfolio.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="Portfolio Work"
                    className="w-full h-24 object-cover rounded-md"
                  />
                ))
              ) : (
                <>
                  <div className="w-full h-24 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
                    No work added yet
                  </div>
                  <div className="w-full h-24 bg-gray-200 rounded-md"></div>
                  <div className="w-full h-24 bg-gray-200 rounded-md"></div>
                </>
              )}
            </div>
            {/* Button to add new work */}
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => setIsPortfolioModalOpen(true)}
                className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
              >
                Add New Work
              </button>
            </div>
          </div>

          {/* Modal for uploading portfolio image */}
          {isPortfolioModalOpen && (
            <div className="fixed inset-0 flex justify-center items-center bg-black/70">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h3 className="text-xl font-semibold mb-4">
                  Upload Portfolio Image
                </h3>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setPortfolioImage(e.target.files[0])}
                  className="mb-4"
                />
                <div className="flex justify-between">
                  <button
                    onClick={() => setIsPortfolioModalOpen(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={addPortfolioWork}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal for updating profile */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
            <input
              type="email"
              className="w-full border rounded p-2 mt-1"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <textarea
              className="w-full border rounded p-2 mt-3 h-24"
              value={bioInput}
              onChange={(e) => setBioInput(e.target.value)}
            />
            <input
              type="file"
              className="mt-3"
              onChange={(e) => setProfileImage(e.target.files[0])}
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={updateProfile}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
