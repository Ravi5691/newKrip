import React from "react";

const AssignedProjects = () => {
  return (
    <div className="p-3">
      <h1 className="text-2xl font-semibold mb-6">Assigned Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side - Projects List */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">Projects</h2>
          <div className="flex flex-col gap-4">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-100 rounded-lg p-3">
                  <span className="text-gray-700">Project name</span>
                  <button className="bg-green-500 text-white px-4 py-1 rounded">Submit</button>
                </div>
              ))}
          </div>
        </div>

        {/* Right Side - Project Details */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-center mb-4">Project Name</h2>
          <div className="flex justify-between text-black">
            <div>
              <p className="font-semibold">Client Name</p>
              <p>Abc Name</p>
            </div>
            <div>
              <p className="font-semibold">Deadline</p>
              <p>20 / 10 / 2025</p>
            </div>
          </div>

          {/* Task List */}
          <h3 className="text-lg font-semibold mt-6 mb-2">Task List</h3>
          <div className="grid grid-cols-2 gap-4">
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="bg-gray-100 h-16 rounded-lg"></div>
              ))}
          </div>

          {/* Files Section */}
          <h3 className="text-lg font-semibold mt-6 mb-2">Files</h3>
          <div className="bg-gray-100 h-16 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default AssignedProjects;
