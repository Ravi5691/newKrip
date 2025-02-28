import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header";
import ConfirmationPage from "./components/servicePage/ConfirmationPage";
import SelectService from "./components/servicePage/selectService";
import SpecSheet from "./components/servicePage/SpecSheet";
import AboutProject from "./components/servicePage/addDiscription";
import AddTags from "./components/servicePage/chooseTag";
// Adjust the import based on your file structure
// import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
// import AboutProject from "./components/servicePage/webDevService/addDiscription";
// import AddTags from "./components/servicePage/webDevService/chooseTag";
import WebTemplate from "./components/servicePage/webDevService/webTemplate";
import { SignupFormDemo } from "./components/signupForm";
import DashboardLayout from "./components/dashbaord/layouts/DashboardLayout";
import Profile from "./components/dashbaord/Profile";
import AssignedProjects from "./components/dashbaord/AssignedProjects";
import TaskManagement from "./components/dashbaord/TaskManagement";
import BillingInvoice from "./components/dashbaord/BillingInvoice";
import Support from "./components/dashbaord/Support";
import AboutUs from "./components/aboutUs";
import ContactUs from "./components/contactUs";
import VideoEditingTemplate from "./components/servicePage/videoEditing/videoEditingTemplate";
import GraphicDesignTemplate from "./components/servicePage/graphicDesign/graphicDesignTemplate";
import SwMaintenanceTemplate from "./components/servicePage/swMaintenance/swMaintenanceTemplate";
import AiTemplate from "./components/servicePage/aiAutomation/aiTemplate";
import ContentCreationTemplate from "./components/servicePage/contentCreation/contentCreation";
import MultiStepForm from "./components/servicePage/lastpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>} />
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
        <Route path="/form" element={<MultiStepForm/>}/>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Navigate to="profile" replace />} />
          <Route path="profile" element={<Profile />} />
          <Route path="assigned-projects" element={<AssignedProjects />} />
          <Route path="task-management" element={<TaskManagement />} />
          <Route path="billing-invoice" element={<BillingInvoice />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
