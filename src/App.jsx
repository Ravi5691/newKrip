import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/homepage/header";
import { ClientLogin } from "./components/signup/clientsignup";
import { FreelancerLogin } from "./components/signup/freelancersignup";
import FreelancerDashboardLayout from "./components/dashbaord/layouts/freelancerDashboardLayout";
import Profile from "./components/dashbaord/freelancer/Profile";
import AssignedProjects from "./components/dashbaord/freelancer/AssignedProjects";
import TaskManagement from "./components/dashbaord/freelancer/TaskManagement";
import BillingInvoice from "./components/dashbaord/freelancer/BillingInvoice";
import Support from "./components/dashbaord/freelancer/Support";
import AboutUs from "./components/aboutUs";
import ContactUs from "./components/contactUs";
import ClientDashboardLayout from "./components/dashbaord/layouts/clientDashboardLayout";
import Billing from "./components/dashbaord/client/Billing";
import ProjectManagement from "./components/dashbaord/client/ProjectManagement";
import ProjectList from "./components/dashbaord/client/ProjectList";
import Specsheet from "./components/servicePage/popUpPages/specsheet/Specsheet";
import GraphicTemplateSelection from "./components/servicePage/popUpPages/template/GraphicTemplate";
import WebDevTemplateSelection from "./components/servicePage/popUpPages/template/WebTemplate";
import VideoTemplateSelection from "./components/servicePage/popUpPages/template/VideoTemplate";
// import SupportCli from "./components/dashbaord/client/SupportCli";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Header />} />
        <Route path="/client-signup" element={<ClientLogin/>} />
        <Route path="/freelancer-signup" element={<FreelancerLogin/>} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route
          path="/graphic-template"
          element={<GraphicTemplateSelection />}
        />
        <Route path="/specsheet" element={<Specsheet />} />
        <Route path="/web-template" element={<WebDevTemplateSelection />} />
        <Route path="/video-template" element={<VideoTemplateSelection />} />

        {/* Freelancer Dashboard Routes */}
        <Route
          path="/dashboard/freelancer"
          element={<FreelancerDashboardLayout />}
        >
          <Route index element={<Navigate to="profile" replace />} />
          <Route path="profile" element={<Profile />} />
          <Route path="assigned-projects" element={<AssignedProjects />} />
          <Route path="task-management" element={<TaskManagement />} />
          <Route path="billing-invoice" element={<BillingInvoice />} />
          <Route path="support" element={<Support />} />
        </Route>

        {/* Client dashboard routes*/}
        <Route path="/dashboard/client" element={<ClientDashboardLayout />}>
          <Route index element={<Navigate to="projects" replace />} />
          <Route path="billing" element={<Billing />} />
          <Route path="projects" element={<ProjectManagement />} />
          <Route path="projects-list" element={<ProjectList />} />
          {/* <Route path="support" element={<SupportCli />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
