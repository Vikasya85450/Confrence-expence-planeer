import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductSelectionPage from "./pages/ProductSelection.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/selection" element={<ProductSelectionPage />} />
      </Routes>
    </Router>
  );
}

export default App;