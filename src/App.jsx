// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Ciudadania from "./pages/Ciudadania";
import Laboral from "./pages/Laboral";

// 1. IMPORTAR
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="flex flex-col min-h-screen"> 
      {/* 2. AGREGAR AQUÍ (Tiene que estar dentro del BrowserRouter que está en main.jsx) */}
      <ScrollToTop />
      
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ciudadania" element={<Ciudadania />} />
        <Route path="/laboral" element={<Laboral />} />
      </Routes>

      <WhatsAppButton />
    </div>
  );
}

export default App;