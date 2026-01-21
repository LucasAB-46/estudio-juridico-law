import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import About from "../components/About";
import PracticeAreas from "../components/PracticeAreas";
import International from "../components/International";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <main className="flex-grow">
      {/* SEO: Configuración para la Home */}
      <Helmet>
        <title>Estudio Jurídico Fleitas Abuin | Abogados en CABA</title>
        <meta 
          name="description" 
          content="Abogados especialistas en Despidos, Accidentes de Tránsito, Sucesiones y Ciudadanías. Asesoramiento legal honesto y estratégico en Buenos Aires." 
        />
        <link rel="canonical" href="https://estudiofleitasabuin.com/" />
      </Helmet>

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