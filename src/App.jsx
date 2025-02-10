
import ConfirmationPage from './components/servicePage/ConfirmationPage';
import SelectService from './components/servicePage/selectService';
import AboutProject from './components/servicePage/webDevService/addDiscription';
import AddTags from './components/servicePage/webDevService/chooseTag';
import WebTemplate from './components/servicePage/webDevService/chooseTemplate'; // Adjust the import based on your file structure
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/service/:id" element={<ServiceDetail />} /> {/* Example route for service details */}
      <Route path ="/" element={<SelectService/>}/>
      <Route path="/web-template" element={<WebTemplate/>}/>
      <Route path="/adddescription" element={<AboutProject/>}/>
      <Route path="/addTags" element={<AddTags/>}/>
      <Route path="/confirmationPage" element={<ConfirmationPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;