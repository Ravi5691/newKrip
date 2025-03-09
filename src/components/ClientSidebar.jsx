import { Link, useLocation } from "react-router-dom";
import { FaThLarge, FaClipboardList, FaFileAlt, FaLifeRing } from "react-icons/fa";

const ClientSidebar = () => {
  const location = useLocation(); // Get current route path

  return (
    <div className="h-screen w-64 bg-gradient-to-b from-black to-[#0f1f0f] text-white p-5 rounded-tr-2xl">
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-10">
        <img src="/logo.png" alt="Krip Logo" className="w-28" />
      </div>

      {/* Menu */}
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              to="/dashboard/client/projects"
              className={`flex items-center space-x-2 font-semibold hover:text-white ${
                location.pathname === "/dashboard/client/projects"
                  ? "text-green-400"
                  : "text-gray-300"
              }`}
            >
              <FaThLarge size={16} />
              <span>Project Management</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/client/projects-list"
              className={`flex items-center space-x-2 hover:text-white ${
                location.pathname === "/dashboard/client/projects-list"
                  ? "text-green-400"
                  : "text-gray-300"
              }`}
            >
              <FaClipboardList size={16} />
              <span>Project List</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/client/billing"
              className={`flex items-center space-x-2 hover:text-white ${
                location.pathname === "/dashboard/client/billing"
                  ? "text-green-400"
                  : "text-gray-300"
              }`}
            >
              <FaFileAlt size={16} />
              <span>Billing</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/client/support"
              className={`flex items-center space-x-2 hover:text-white ${
                location.pathname === "/dashboard/client/support"
                  ? "text-green-400"
                  : "text-gray-300"
              }`}
            >
              <FaLifeRing size={16} />
              <span>Support</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ClientSidebar;
