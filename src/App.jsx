import Header from "./components/header";
import ConfirmationPage from "./components/servicePage/ConfirmationPage";
import SelectService from "./components/servicePage/selectService";
import SpecSheet from "./components/servicePage/SpecSheet";
import AboutProject from "./components/servicePage/webDevService/addDiscription";
import AddTags from "./components/servicePage/webDevService/chooseTag";
import WebTemplate from "./components/servicePage/webDevService/webTemplate"; // Adjust the import based on your file structure
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { SignupFormDemo } from "./components/signupForm";
import AboutUs from "./components/aboutUs";
import ContactUs from "./components/contactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/selectservice" element={<SelectService />} />
        <Route path="/web-template" element={<WebTemplate />} />
        <Route path="/adddescription" element={<AboutProject />} />
        <Route path="/addTags" element={<AddTags />} />
        <Route path="/confirmationPage" element={<ConfirmationPage />} />
        <Route path="/specsheet" element={<SpecSheet />} />
        <Route path="/signup" element={<SignupFormDemo/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
