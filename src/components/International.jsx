import React, { useState } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { FaPassport, FaPlane, FaGlobeAmericas } from 'react-icons/fa';

const International = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // DATOS OPTIMIZADOS PARA VENTAS (Copywriting)
  const items = [
    {
      title: "Ciudadanía Italiana y Juicios por Turnos", // PALABRA CLAVE FUERTE
      icon: <FaPassport className="w-6 h-6" />,
      content: (
        <span>
          ¿Imposible conseguir turno en el consulado? No esperes años. Iniciamos el 
          <strong> Juicio por Falta de Turno</strong> directamente en Italia para que obtengas tu ciudadanía más rápido.
          <br /><br />
          También gestionamos rectificación de partidas, armado de carpetas consulares (Italiana y Española) y recursos administrativos.
        </span>
      ),
    },
    {
      title: "Reclamos por Vuelos y Turismo",
      icon: <FaPlane className="w-6 h-6" />,
      content: "Si te cancelaron el vuelo, perdieron tu valija o tuviste demoras, la ley internacional te protege. Gestionamos tu reclamo contra aerolíneas para que cobres la indemnización en moneda dura (Dólares/Euros) según el Convenio de Montreal.",
    },
    {
      title: "Negocios Internacionales y Sociedades",
      icon: <FaGlobeAmericas className="w-6 h-6" />,
      content: "Asesoramos a PyMEs y emprendedores que quieren exportar servicios o constituir sociedades (LLC/Delaware). Te brindamos el blindaje legal necesario para operar globalmente sin riesgos fiscales ni normativos.",
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="internacional" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: Títulos e Introducción */}
          <div>
            <span className="text-secondary font-bold tracking-wider uppercase text-sm border-b border-secondary pb-1">
              Sin Fronteras
            </span>
            
            {/* TÍTULO CORREGIDO: Más comercial, menos académico */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-4 leading-tight">
              Ciudadanías y <br/> 
              <span className="text-secondary">Derecho Internacional.</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Vivimos en un mundo globalizado, y tus derechos también deberían serlo. 
              Somos especialistas en destrabar trámites consulares y defenderte ante conflictos en el exterior.
            </p>
            
            {/* Imagen decorativa */}
            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-2xl border border-white/10 hidden lg:block group">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop" 
                alt="Avión internacional" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />
              {/* Overlay sutil para integrar la imagen al fondo azul */}
              <div className="absolute inset-0 bg-primary/40 mix-blend-color"></div>
            </div>
          </div>

          {/* COLUMNA DERECHA: El Acordeón */}
          <div className="space-y-4">
            {items.map((item, index) => (
              <div 
                key={index} 
                className={`bg-white/5 rounded-lg border transition-all duration-300 ${
                  activeIndex === index ? 'border-secondary bg-white/10 shadow-lg shadow-secondary/10' : 'border-white/10 hover:border-white/30'
                }`}
              >
                {/* Cabecera del ítem */}
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
                  <span className={`text-secondary transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                    <IoChevronDown size={24} />
                  </span>
                </button>

                {/* Contenido desplegable */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-0 text-gray-300 leading-relaxed border-t border-white/10 mt-2">
                    <div className="pt-4 text-base">
                      {item.content}
                    </div>
                    {/* Botón de acción rápida dentro del acordeón */}
                    <div className="mt-4">
                        <a href="#contacto" className="text-sm font-bold text-secondary hover:text-white transition-colors border-b border-secondary hover:border-white pb-0.5">
                            Consultar sobre esto &rarr;
                        </a>
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