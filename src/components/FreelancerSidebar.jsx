import { NavLink } from "react-router-dom";
import { FaUser, FaTasks, FaFileInvoice, FaLifeRing, FaBriefcase } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-[260px] min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-6 rounded-tr-2xl rounded-br-2xl">
      <div className="flex justify-center mb-6">
        <img src="/logo.png" alt="Logo" className="h-10" />
      </div>
      <nav className="space-y-4">
        <NavLink
          to="/dashboard/freelancer/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg text-lg font-medium ${
              isActive ? "text-green-400" : "text-gray-400"
            } hover:text-green-300`
          }
        >
          <FaUser className="text-xl" />
          Profile & Portfolio
        </NavLink>
        <NavLink
          to="/dashboard/freelancer/assigned-projects"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg text-lg font-medium ${
              isActive ? "text-green-400" : "text-gray-400"
            } hover:text-green-300`
          }
        >
          <FaBriefcase className="text-xl" />
          Assigned Projects
        </NavLink>
        <NavLink
          to="/dashboard/freelancer/task-management"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg text-lg font-medium ${
              isActive ? "text-green-400" : "text-gray-400"
            } hover:text-green-300`
          }
        >
          <FaTasks className="text-xl" />
          Task Management
        </NavLink>
        <NavLink
          to="/dashboard/freelancer/billing-invoice"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg text-lg font-medium ${
              isActive ? "text-green-400" : "text-gray-400"
            } hover:text-green-300`
          }
        >
          <FaFileInvoice className="text-xl" />
          Billing & Invoice
        </NavLink>
        <NavLink
          to="/dashboard/freelancer/support"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg text-lg font-medium ${
              isActive ? "text-green-400" : "text-gray-400"
            } hover:text-green-300`
          }
        >
          <FaLifeRing className="text-xl" />
          Support
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
