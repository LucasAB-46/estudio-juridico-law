import React from 'react';
// Importamos íconos representativos
import { FaBalanceScale, FaPassport, FaPlane, FaBriefcase, FaGavel, FaHandshake } from 'react-icons/fa';

const PracticeAreas = () => {
  
  // Definimos los datos de las tarjetas aquí para mantener el código limpio
  const practices = [
    {
      id: 1,
      title: "Derecho Laboral",
      description: "Defensa ante despidos injustificados, trabajo no registrado y acoso laboral. Protegemos tu indemnización.",
      icon: <FaBriefcase className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "Daños y Perjuicios",
      description: "Reclamos por accidentes de tránsito, mala praxis y daños a la propiedad. Logramos la compensación justa.",
      icon: <FaGavel className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "Ciudadanías",
      description: "Asesoría integral para la obtención de ciudadanías europeas (Italiana, Española), gestión de actas, armado de carpetas y solicitud de turnos.",
      icon: <FaPassport className="w-8 h-8" />,
    },
    {
      id: 4,
      title: "Viajes al Exterior",
      description: "Resolución de conflictos con aerolíneas, cancelaciones, pérdida de equipaje y seguros de viaje.",
      icon: <FaPlane className="w-8 h-8" />,
    },
    {
      id: 5,
      title: "Derecho Societario",
      description: "Constitución de sociedades, contratos comerciales y resolución de conflictos entre socios.",
      icon: <FaHandshake className="w-8 h-8" />,
    },
    {
      id: 6,
      title: "Sucesiones",
      description: "Tramitamos sucesiones con agilidad y transparencia para proteger el patrimonio familiar.",
      icon: <FaBalanceScale className="w-8 h-8" />,
    }
  ];

  return (
    <section id="practice" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Áreas de Práctica
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Brindamos asesoría jurídica integral con un enfoque estratégico y personalizado para cada caso.
          </p>
          {/* Una pequeña línea decorativa dorada */}
          <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
        </div>

        {/* Grilla de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-transparent hover:border-secondary group"
            >
              {/* Ícono con círculo de fondo */}
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              
              {/* Título */}
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                {item.title}
              </h3>
              
              {/* Descripción */}
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PracticeAreas;