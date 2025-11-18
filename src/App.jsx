import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // <-- Importamos el Hero
import About from "./components/About";
import PracticeAreas from "./components/PracticeAreas";
import International from "./components/International";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div>
      <Navbar /> 
      
      <main>
        {/* Renderizamos el Hero justo debajo del Navbar */}
        <Hero />
        
        {/* Espacios reservados para los siguientes componentes */}
        
        
        
        
      </main>
       <PracticeAreas />
       <About />
       <International /> 
       <Contact />
       <WhatsAppButton />
      
    </div>
  );
}

export default App;