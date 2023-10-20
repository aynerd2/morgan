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
         <div className="App">
         <NewHeader />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/application" element={<Application />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/hireingprocess" element={<HireingProcess />} />
        
        </Routes>
         </div>
       
     
      </Router>
  );
}

export default App;
