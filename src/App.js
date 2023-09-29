import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer"
import AboutPage from "./pages/AboutPage";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NoPage />} />
      </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
