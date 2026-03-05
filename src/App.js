
import React from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Header from "./component/Landing/Header";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Education from "./component/Education/Education";
import Header_component from "./component/Landing/Header_component";
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
    {/* <ToastContainer/> */}
      <Header/>
      
      <Routes>
      <Route path="/" element={<Header_component/>} />
      
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/education" element={<Education/>} />
      </Routes>
      
      </BrowserRouter>
   
      
      
      
    </div>
  );
}

export default App;
