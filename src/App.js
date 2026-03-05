
import React from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Header from "./component/Landing/Header";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Education from "./component/Education/Education";
import HeaderComponent from "./component/Landing/HeaderComponent";
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
    {/* npm run build */}
      <Header/>
      
      <Routes>
      <Route path="/" element={<HeaderComponent/>} />
      
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/education" element={<Education/>} />
      </Routes>
      
      </BrowserRouter>
   
      
      
      
    </div>
  );
}

export default App;
