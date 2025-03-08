import React from "react";

const projects = [
  {
    id: 1,
    name: "Project name",
    deadline: "01 Dec 2024",
    manager: "abc name",
    contact: "+91 98765 43210",
  },
  {
    id: 2,
    name: "Project name",
    deadline: "01 Dec 2024",
    manager: "abc name",
    contact: "+91 98765 43210",
  },
  {
    id: 3,
    name: "Project name",
    deadline: "01 Dec 2024",
    manager: "abc name",
    contact: "+91 98765 43210",
  },
];

const ProjectManagement = () => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-5">Project Management</h1>
      <h2 className="text-xl font-medium mb-5">Active Project</h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-xl p-5 w-72"
          >
            {/* Project Name */}
            <div className="bg-black text-white text-center py-2 rounded-lg font-medium">
              {project.name}
            </div>

            {/* Details */}
            <div className="mt-4 text-sm">
              <p className="text-gray-600">Deadline</p>
              <p className="font-medium">{project.deadline}</p>
            </div>

            {/* Status */}
            <div className="mt-4">
              <p className="text-gray-600">Status</p>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
                <div className="bg-green-400 h-2 w-3/5 rounded-full"></div>
              </div>
            </div>

            {/* Attachments */}
            <div className="mt-4 flex justify-between items-center">
              <p className="text-gray-600">Attachments</p>
              <a href="#" className="text-green-400 font-medium">
                View
              </a>
            </div>

            {/* Manager Name */}
            <div className="mt-4">
              <p className="text-gray-600">Manager Name</p>
              <p className="font-medium">{project.manager}</p>
            </div>

            {/* Contact */}
            <div className="mt-4">
              <p className="text-gray-600">Contact</p>
              <p className=" text-sm text-black">{project.contact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectManagement;
