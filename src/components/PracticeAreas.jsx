import React from 'react';
// Importamos íconos representativos
import { FaBalanceScale, FaPassport, FaPlane, FaBriefcase, FaGavel, FaHandshake } from 'react-icons/fa';

const PracticeAreas = () => {
  
  // OPTIMIZACIÓN SEO: Cambiamos títulos académicos por "Keywords de Negocio"
  const practices = [
    {
      id: 1,
      title: "Despidos y Reclamos Laborales", // Antes: "Derecho Laboral" (Muy genérico)
      description: "¿Te despidieron o estás en negro? Reclamá tu indemnización justa. No firmes nada sin consultarnos.",
      icon: <FaBriefcase className="w-8 h-8" />,
      link: "#contacto"
    },
    {
      id: 2,
      title: "Accidentes de Tránsito y ART", // Antes: "Daños y Perjuicios"
      description: "Si sufriste un accidente o una enfermedad laboral, aseguramos que la aseguradora te pague lo que corresponde.",
      icon: <FaGavel className="w-8 h-8" />,
      link: "#contacto"
    },
    {
      id: 3,
      title: "Ciudadanía Italiana y Española", // Antes: "Ciudadanías" (Hay que ser específico)
      description: "Armado de carpetas, rectificación de actas y gestión de turnos. Hacé realidad tu pasaporte europeo.",
      icon: <FaPassport className="w-8 h-8" />,
      link: "#contacto"
    },
    {
      id: 4,
      title: "Reclamos Aéreos y Turismo", // Antes: "Viajes al Exterior"
      description: "Vuelos cancelados, pérdida de equipaje o estafas turísticas. Defendemos tus derechos como pasajero.",
      icon: <FaPlane className="w-8 h-8" />,
      link: "#contacto"
    },
    {
      id: 5,
      title: "Contratos y Sociedades (PyMEs)", // Agregamos PyMEs para atraer empresas
      description: "Constitución de SAS/SRL, acuerdos de socios y blindaje legal para tu negocio o emprendimiento.",
      icon: <FaHandshake className="w-8 h-8" />,
      link: "#contacto"
    },
    {
      id: 6,
      title: "Sucesiones y Herencias", // Palabra clave fuerte
      description: "Trámite sucesorio ágil. Gestionamos la declaratoria de herederos y la inscripción de bienes sin vueltas.",
      icon: <FaBalanceScale className="w-8 h-8" />,
      link: "#contacto"
    }
  ];

  return (
    <section id="areas-practica" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <span className="text-secondary font-bold uppercase tracking-wider text-sm">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
            ¿En qué podemos ayudarte?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones legales concretas para problemas reales. Elegí tu área de consulta.
          </p>
          {/* Una pequeña línea decorativa dorada */}
          <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Grilla de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-secondary group relative flex flex-col"
            >
              {/* Ícono con círculo de fondo */}
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              
              {/* Título - Usamos h3 para SEO */}
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                {item.title}
              </h3>
              
              {/* Descripción */}
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>

              {/* Call To Action (Pequeño enlace) */}
              <a href={item.link} className="inline-flex items-center text-secondary font-semibold hover:underline mt-auto">
                Consultar ahora 
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Botón extra por si no encuentran lo que buscan */}
        <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">¿No encontrás lo que buscás?</p>
            <a href="https://wa.me/5491124076677" target="_blank" rel="noopener noreferrer" className="text-primary font-bold border-b-2 border-secondary hover:text-secondary transition-colors">
                Hacé una consulta general por WhatsApp
            </a>
        </div>

      </div>
    </section>
  );
};

export default PracticeAreas;