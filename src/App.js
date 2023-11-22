import React from "react";
import "./App.scss"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
