import React from "react";
import NewHeader from "./components/NewHeader";
import Home from "./components/Home";
import Application from "./components/Application";
import Benefits from "./components/modals/Benefits";
import HireingProcess from "./components/modals/HireingProcess";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {

 

  return (
      <Router>

         <div className="w-full aspect-auto">
         {/* <NewHeader /> */}
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/hireingprocess" element={<HireingProcess />} />
          <Route path="/application" element={<Application />} />
        </Routes>
         </div>
       
     
      </Router>
  );
}

export default App;
