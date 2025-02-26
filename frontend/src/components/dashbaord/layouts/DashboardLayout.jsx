import { Outlet } from "react-router-dom";
import Sidebar from "../../DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="flex bg-gray-100">
      <Sidebar />
      <div className="flex-1 px-5 ">
        <Outlet /> {/* This will load different pages dynamically */}
      </div>
    </div>
  );
};

export default DashboardLayout;
