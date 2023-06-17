import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Page2 from "./Components/page2";
import Home from "./pages/Home";
import Devices from "./pages/devices";

function App() {
  return (
    <div className="main-container">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="devices" element={<Devices />} />
          <Route exact path="page2" element={<Page2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
