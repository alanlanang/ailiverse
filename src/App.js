import React from "react";
import Projects from "./view/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./common-component/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Projects />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
