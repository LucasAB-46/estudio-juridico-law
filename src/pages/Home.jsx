import React from "react";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import About from "../components/About";
import PracticeAreas from "../components/PracticeAreas";
import International from "../components/International";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <main className="flex-grow">
      {/* SEO: Configuración para la Home */}
      <Seo
        title="Estudio Jurídico Fleitas Abuin | Abogados en CABA"
        description="Abogados especialistas en Despidos, Accidentes de Tránsito, Sucesiones y Ciudadanías. Asesoramiento legal honesto y estratégico en Buenos Aires."
        path="/"
      >
        {/* La foto del hero es lo primero que se ve: la pedimos antes para que cargue más rápido */}
        <link rel="preload" as="image" href="/images/edificio.webp" type="image/webp" />
      </Seo>

      {/* SECCIONES: Los IDs deben coincidir con los links del Navbar */}
      
      <div id="hero">
        <Hero />
      </div>
      
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
  );
};

export default Home;