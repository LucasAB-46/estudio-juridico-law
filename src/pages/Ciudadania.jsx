import React from "react";
import { Helmet } from "react-helmet-async";

const Ciudadania = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* SEO: Configuración específica para esta Landing Page */}
      <Helmet>
        <title>Ciudadanía Italiana y Juicios por Falta de Turno | Estudio Fleitas Abuin</title>
        <meta 
          name="description" 
          content="¿Imposible conseguir turno en el consulado? Iniciamos tu juicio por falta de turno en Italia. Obtené tu ciudadanía europea sin viajar y para toda la familia." 
        />
        <link rel="canonical" href="https://estudiofleitasabuin.com/ciudadania" />
      </Helmet>
      
      {/* 1. HERO SECTION: Atacando el dolor principal (Falta de Turnos) */}
      <div className="relative bg-[#0a1f44] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-[#d4af37]">
            ¿Imposible conseguir turno en el consulado?
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            No esperes años refrescando la página. Obtené tu Ciudadanía Italiana por la vía judicial "Por Falta de Turno".
          </p>
          <a 
            href="https://wa.me/5491124076677?text=Hola,%20quisiera%20consultar%20por%20la%20ciudadanía%20italiana%20y%20la%20falta%20de%20turnos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#d4af37] hover:bg-[#b5952f] text-[#0a1f44] font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            CONSULTAR SI PUEDO INICIAR JUICIO
          </a>
        </div>
      </div>

      {/* 2. EXPLICACIÓN: ¿Qué es el Juicio por Falta de Turno? */}
      <div className="max-w-5xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0a1f44] mb-4 font-serif">
              La vía judicial es la solución más rápida
            </h2>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Los consulados están colapsados. Sin embargo, la ley italiana establece que el trámite no puede demorar más de 2 años. 
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Al demostrar que es imposible conseguir turno, iniciamos una demanda directamente en los tribunales de Roma. 
              <span className="font-bold text-[#0a1f44]"> No necesitás viajar a Italia.</span> Nosotros nos encargamos de todo con nuestros corresponsales allá.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <span className="text-green-600 mr-2 text-xl">✓</span> Sin viajes costosos.
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-600 mr-2 text-xl">✓</span> Incluye a toda la familia en un mismo juicio.
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-600 mr-2 text-xl">✓</span> Sentencia definitiva.
              </li>
            </ul>
          </div>
          
          {/* IMAGEN: Asegurate de tener 'pasaporte-italia.jpg' en public/images/ */}
          <div className="rounded-xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-all duration-500">
             <img 
               src="/images/pasaporte-italia.jpg" 
               alt="Pasaporte Italiano y trámite judicial" 
               className="w-full h-80 object-cover"
               onError={(e) => {
                 e.target.onerror = null; 
                 e.target.src="https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?q=80&w=800&auto=format&fit=crop"; // Fallback por si no tenés la foto aún
               }}
             />
          </div>
        </div>
      </div>

      {/* 3. OTROS SERVICIOS (Cards) */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0a1f44] mb-12 font-serif">
            Gestión Integral de Ciudadanías
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="border border-gray-100 bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📂</span>
              </div>
              <h3 className="text-xl font-bold text-[#0a1f44] mb-3">Armado de Carpeta</h3>
              <p className="text-gray-600">
                Revisamos y organizamos todas tus actas para asegurar que no te rechacen el trámite por errores formales.
              </p>
            </div>
            {/* Card 2 */}
            <div className="border border-gray-100 bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center mb-4">
                 <span className="text-2xl">✍️</span>
              </div>
              <h3 className="text-xl font-bold text-[#0a1f44] mb-3">Rectificación de Actas</h3>
              <p className="text-gray-600">
                Corregimos errores de nombres, fechas y lugares en las partidas argentinas e italianas mediante sumaria judicial.
              </p>
            </div>
            {/* Card 3 */}
            <div className="border border-gray-100 bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center mb-4">
                 <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-[#0a1f44] mb-3">Búsqueda de Actas</h3>
              <p className="text-gray-600">
                Gestionamos la búsqueda de partidas de nacimiento y matrimonio directamente en las comunas italianas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. CTA FINAL */}
      <div className="bg-[#d4af37] py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#0a1f44] mb-6">
          ¿Tenés dudas sobre tu caso?
        </h2>
        <p className="text-[#0a1f44] text-lg mb-8 max-w-2xl mx-auto font-medium">
          Cada familia es un mundo. Analizamos tu árbol genealógico para decirte la verdad sobre tus posibilidades.
        </p>
        <a 
          href="https://wa.me/5491124076677?text=Hola,%20necesito%20asesoramiento%20sobre%20mi%20ciudadanía."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#0a1f44] text-white font-bold py-4 px-10 rounded-full hover:bg-opacity-90 transition-all shadow-xl transform hover:-translate-y-1"
        >
          Hablar con un Abogado Ahora
        </a>
      </div>

    </div>
  );
};

export default Ciudadania;