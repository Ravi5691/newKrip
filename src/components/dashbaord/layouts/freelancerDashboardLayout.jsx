import { Outlet } from "react-router-dom";
import FreelancerSidebar from "../../FreelancerSidebar";

const FreelancerDashboardLayout = () => {
  return (
    <div className="flex bg-gray-100">
      <FreelancerSidebar />
      <div className="flex-1 px-5">
        <Outlet /> {/* This will load different pages dynamically */}
      </div>
    </div>
  );
};

export default FreelancerDashboardLayout;
