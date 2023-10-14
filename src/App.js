import React from "react";
import NewHeader from "./components/NewHeader";
import Home from "./components/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {

 

  return (
      <Router>
         <div className="App">
         <NewHeader />
         <Routes>
          <Route path="/" element={<Home />} />
        
        </Routes>
         </div>
       
     
      </Router>
  );
}

export default App;
