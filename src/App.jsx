import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header";
import ConfirmationPage from "./components/servicePage/ConfirmationPage";
import SelectService from "./components/servicePage/selectService";
import SpecSheet from "./components/servicePage/SpecSheet";
import AboutProject from "./components/servicePage/webDevService/addDiscription";
import AddTags from "./components/servicePage/webDevService/chooseTag";
import WebTemplate from "./components/servicePage/webDevService/webTemplate";
import { SignupFormDemo } from "./components/signupForm";
import DashboardLayout from "./components/dashbaord/layouts/DashboardLayout";
import Profile from "./components/dashbaord/Profile";
import AssignedProjects from "./components/dashbaord/AssignedProjects";
import TaskManagement from "./components/dashbaord/TaskManagement";
import BillingInvoice from "./components/dashbaord/BillingInvoice";
import Support from "./components/dashbaord/Support";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/selectservice" element={<SelectService />} />
        <Route path="/web-template" element={<WebTemplate />} />
        <Route path="/adddescription" element={<AboutProject />} />
        <Route path="/addTags" element={<AddTags />} />
        <Route path="/confirmationPage" element={<ConfirmationPage />} />
        <Route path="/specsheet" element={<SpecSheet />} />
        <Route path="/signup" element={<SignupFormDemo />} />

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
