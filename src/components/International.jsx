import React, { useState } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { FaPassport, FaPlane, FaGlobeAmericas } from 'react-icons/fa';

const International = () => {
  // Estado para controlar cuál ítem del acordeón está abierto (por defecto el primero: 0)
  const [activeIndex, setActiveIndex] = useState(0);

  // Datos de los servicios internacionales
  const items = [
    {
      title: "Gestión de Ciudadanías",
      icon: <FaPassport className="w-6 h-6" />,
      content: "Asesoría integral para la obtención de ciudadanías europeas (Italiana, Española). Nos encargamos de la búsqueda y rectificación de actas, armado de carpetas consulares y juicios por falta de turno. Hacemos que el sueño de emigrar o tener el pasaporte europeo sea realidad.",
    },
    {
      title: "Problemas en Viajes al Exterior",
      icon: <FaPlane className="w-6 h-6" />,
      content: "Si tuviste problemas con tu aerolínea (cancelaciones, demoras, pérdida de equipaje) o seguros de viaje que no responden, nosotros nos ocupamos. Conocemos la normativa internacional (Convenio de Montreal) para asegurar que recibas la indemnización máxima en dólares o euros.",
    },
    {
      title: "Derecho Societario & Negocios",
      icon: <FaGlobeAmericas className="w-6 h-6" />,
      content: "Asesoramiento a empresas y particulares en la constitución de sociedades extranjeras, contratos comerciales internacionales y planificación fiscal. Brindamos seguridad jurídica para tus inversiones fuera del país.",
    }
  ];

  // Función para alternar el acordeón
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="international" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: Títulos e Introducción */}
          <div>
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">
              Alcance Global
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-2">
              Derecho Internacional <br/> 
              <span className="text-gray-400">Privado.</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              En un mundo globalizado, los problemas legales no tienen fronteras. 
              Somos uno de los pocos estudios con especialización real en conflictos 
              transnacionales, brindando soluciones tanto para emigrar como para hacer negocios.
            </p>
            
            {/* Imagen decorativa o abstracta */}
            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-xl border border-white/10 hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop" 
                alt="Avión internacional" 
                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* COLUMNA DERECHA: El Acordeón (Desplegable) */}
          <div className="space-y-4">
            {items.map((item, index) => (
              <div 
                key={index} 
                className={`bg-white/5 rounded-lg border transition-all duration-300 ${
                  activeIndex === index ? 'border-secondary bg-white/10' : 'border-white/10 hover:border-white/30'
                }`}
              >
                {/* Cabecera del ítem (Clickable) */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className={`text-secondary ${activeIndex === index ? 'scale-110' : ''} transition-transform`}>
                      {item.icon}
                    </div>
                    <span className="text-lg font-bold text-left">{item.title}</span>
                  </div>
                  <span className="text-secondary">
                    {activeIndex === index ? <IoChevronUp size={24} /> : <IoChevronDown size={24} />}
                  </span>
                </button>

                {/* Contenido desplegable */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-0 text-gray-300 leading-relaxed border-t border-white/10 mt-2">
                    <div className="pt-4">
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default International;