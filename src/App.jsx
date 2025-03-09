import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header";
import ConfirmationPage from "./components/servicePage/ConfirmationPage";
import SelectService from "./components/servicePage/selectService";
import SpecSheet from "./components/servicePage/SpecSheet";
import AboutProject from "./components/servicePage/addDiscription";
import AddTags from "./components/servicePage/chooseTag";
import WebTemplate from "./components/servicePage/webDevService/webTemplate";
import { SignupFormDemo } from "./components/signupForm";
import FreelancerDashboardLayout from "./components/dashbaord/layouts/freelancerDashboardLayout"
import Profile from "./components/dashbaord/freelancer/Profile"
import AssignedProjects from "./components/dashbaord/freelancer/AssignedProjects"
import TaskManagement from "./components/dashbaord/freelancer/TaskManagement"
import BillingInvoice from "./components/dashbaord/freelancer/BillingInvoice";
import Support from "./components/dashbaord/freelancer/Support";
import AboutUs from "./components/aboutUs";
import ContactUs from "./components/contactUs";
import VideoEditingTemplate from "./components/servicePage/videoEditing/videoEditingTemplate";
import GraphicDesignTemplate from "./components/servicePage/graphicDesign/graphicDesignTemplate";
import SwMaintenanceTemplate from "./components/servicePage/swMaintenance/swMaintenanceTemplate";
import AiTemplate from "./components/servicePage/aiAutomation/aiTemplate";
import ContentCreationTemplate from "./components/servicePage/contentCreation/contentCreation";
<<<<<<< HEAD

=======
import MultiStepForm from "./components/servicePage/lastpage";
import ClientDashboardLayout from "./components/dashbaord/layouts/clientDashboardLayout";
import Billing from "./components/dashbaord/client/Billing"
import ProjectList from "./components/dashbaord/client/ProjectList"
import ProjectManagement from "./components/dashbaord/client/ProjectManagement"
import SupportCli from "./components/dashbaord/client/Support";
>>>>>>> c9f6476f30ea9271768c61b1d84a5b97ecd1ec1e

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Header />} />
        <Route path="/selectservice" element={<SelectService />} />
        <Route path="/web-template" element={<WebTemplate />} />
        <Route path="/video-template" element={<VideoEditingTemplate/>}/>
        <Route path="/adddescription" element={<AboutProject />} />
        <Route path="/graphic-template" element={<GraphicDesignTemplate/>}/>
        <Route path="/sw-template" element={<SwMaintenanceTemplate/>}/>
        <Route path="/ai-template" element={<AiTemplate/>}/>
        <Route path="/contentcreation-template" element={<ContentCreationTemplate/>}/>
        <Route path="/addTags" element={<AddTags />} />
        <Route path="/confirmationPage" element={<ConfirmationPage />} />
        <Route path="/specsheet" element={<SpecSheet />} />
        <Route path="/signup" element={<SignupFormDemo />} />
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
<<<<<<< HEAD
        {/* <Route path="/form" element={<WebMultiStepForm/>}/> */}
=======
        <Route path="/form" element={<MultiStepForm/>}/>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
>>>>>>> c9f6476f30ea9271768c61b1d84a5b97ecd1ec1e

        {/* Freelancer Dashboard Routes */}
        <Route path="/dashboard/freelancer" element={<FreelancerDashboardLayout />}>
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
        <Route path="support" element={<SupportCli />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
