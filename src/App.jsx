import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PracticeAreas from "./components/PracticeAreas";
import International from "./components/International";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
// Importar Footer si lo tienes, sino es un pendiente para después
// import Footer from "./components/Footer"; 

function App() {
  return (
    <div className="flex flex-col min-h-screen"> 
      {/* Navbar fijo arriba */}
      <Navbar /> 
      
      {/* Todo el contenido principal va DENTRO de main */}
      <main className="flex-grow">
        <Hero />
        
        {/* ID para navegación (scroll) */}
        <div id="areas-practica">
           <PracticeAreas />
        </div>

        <div id="nosotros">
           <About />
        </div>

        <div id="internacional">
           <International /> 
        </div>

        <div id="contacto">
           <Contact />
        </div>
      </main>

      <WhatsAppButton />
      {/* <Footer /> */}
      
    </div>
  );
}

export default App;