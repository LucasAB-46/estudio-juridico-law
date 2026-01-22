import React from 'react';
// Importamos Link para la navegación interna rápida
import { Link } from 'react-router-dom'; 
import { FaBalanceScale, FaPassport, FaPlane, FaBriefcase, FaGavel, FaHandshake } from 'react-icons/fa';

const PracticeAreas = () => {
  
  const practices = [
    {
      id: 1,
      title: "Despidos y Reclamos Laborales",
      description: "¿Te despidieron o estás en negro? Reclamá tu indemnización justa. No firmes nada sin consultarnos.",
      icon: <FaBriefcase className="w-8 h-8" />,
      link: "/laboral", // Va a la página Laboral
      cta: "Calcular indemnización"
    },
    {
      id: 2,
      title: "Accidentes de Tránsito y ART",
      description: "Si sufriste un accidente o una enfermedad laboral, aseguramos que la aseguradora te pague lo que corresponde.",
      icon: <FaGavel className="w-8 h-8" />,
      link: "/laboral#art", // Va a la sección ART de Laboral
      cta: "Iniciar reclamo ART"
    },
    {
      id: 3,
      title: "Ciudadanía Italiana y Española",
      description: "Armado de carpetas, rectificación de actas y gestión de turnos. Hacé realidad tu pasaporte europeo.",
      icon: <FaPassport className="w-8 h-8" />,
      link: "/ciudadania", // Va a la Landing de Ciudadanía
      cta: "Ver requisitos"
    },
    {
      id: 4,
      title: "Reclamos Aéreos y Turismo",
      description: "Vuelos cancelados, pérdida de equipaje o estafas turísticas. Defendemos tus derechos como pasajero.",
      icon: <FaPlane className="w-8 h-8" />,
      link: "/reclamos-turismo", // ¡NUEVO! Conectado a Turismo.jsx
      cta: "Iniciar reclamo"
    },
    {
      id: 5,
      title: "Contratos y Sociedades (PyMEs)",
      description: "Constitución de SAS/SRL, acuerdos de socios y blindaje legal para tu negocio o emprendimiento.",
      icon: <FaHandshake className="w-8 h-8" />,
      link: "/empresas", // ¡NUEVO! Conectado a Empresas.jsx
      cta: "Ver servicios"
    },
    {
      id: 6,
      title: "Sucesiones y Herencias",
      description: "Trámite sucesorio ágil. Gestionamos la declaratoria de herederos y la inscripción de bienes sin vueltas.",
      icon: <FaBalanceScale className="w-8 h-8" />,
      link: "/sucesiones", // ¡NUEVO! Conectado a Sucesiones.jsx
      cta: "Consultar trámite"
    }
  ];

  return (
    <section id="areas-practica" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-bold uppercase tracking-wider text-sm">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D2144] mt-2 mb-4">
            ¿En qué podemos ayudarte?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones legales concretas para problemas reales. Elegí tu área de consulta.
          </p>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Grilla de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#d4af37] group relative flex flex-col"
            >
              <div className="w-14 h-14 bg-[#d4af37]/10 rounded-lg flex items-center justify-center text-[#d4af37] mb-6 group-hover:bg-[#d4af37] group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[#0D2144] mb-3 group-hover:text-[#d4af37] transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>

              {/* LÓGICA CONDICIONAL: ¿Es Link interno o Ancla normal? */}
              {item.link.startsWith('/') ? (
                // Si empieza con "/", usamos Link para navegación SPA instantánea
                <Link to={item.link} className="inline-flex items-center text-[#d4af37] font-semibold hover:underline mt-auto">
                   {item.cta} 
                   <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                   </svg>
                </Link>
              ) : (
                // Si no (ej: #contacto), usamos <a> normal
                <a href={item.link} className="inline-flex items-center text-[#d4af37] font-semibold hover:underline mt-auto">
                   {item.cta}
                   <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                   </svg>
                </a>
              )}

            </div>
          ))}
        </div>

        {/* Botón extra */}
        <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">¿No encontrás lo que buscás?</p>
            <a href="https://wa.me/5491124076677" target="_blank" rel="noopener noreferrer" className="text-[#0D2144] font-bold border-b-2 border-[#d4af37] hover:text-[#d4af37] transition-colors">
                Hacé una consulta general por WhatsApp
            </a>
        </div>

      </div>
    </section>
  );
};

export default PracticeAreas;