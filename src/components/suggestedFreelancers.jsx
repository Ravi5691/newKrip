import React from "react";
import { Mail, Phone, Briefcase } from "lucide-react";

const freelancers = [
  {
    name: "John Doe",
    role: "Full Stack Developer",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
  },
  {
    name: "Sarah Smith",
    role: "UI/UX Designer",
    email: "sarah.smith@example.com",
    phone: "+1 987 654 321",
  },
  {
    name: "Michael Brown",
    role: "Digital Marketer",
    email: "michael.brown@example.com",
    phone: "+1 456 789 123",
  },
];

export default function RecommendedFreelancers() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-[#0e2e1e] text-white p-8">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Recommended Freelancers
      </h2>
      <p className="text-center text-gray-300 mb-8">
        These are your top recommended freelancers based on your requirements.
      </p>

      <div className="w-full max-w-3xl space-y-6">
        {freelancers.map((freelancer, index) => (
          <div
            key={index}
            className="p-6 bg-[#1a3f2d] rounded-lg flex flex-col sm:flex-row items-center justify-between shadow-lg"
          >
            <div>
              <h3 className="text-xl font-medium text-[#2bbb7f]">
                {freelancer.name}
              </h3>
              <p className="text-gray-300 flex items-center gap-2">
                <Briefcase size={16} /> {freelancer.role}
              </p>
            </div>
            <div className="mt-4 sm:mt-0 text-right">
              <p className="flex items-center gap-2 text-gray-300">
                <Mail size={16} /> {freelancer.email}
              </p>
              <p className="flex items-center gap-2 text-gray-300">
                <Phone size={16} /> {freelancer.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
