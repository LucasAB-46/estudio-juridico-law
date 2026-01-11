import React from 'react';

const Hero = () => {
  // Asegúrate de que esta ruta sea correcta según tu carpeta public
  const heroImage = "/images/edificio.jpg"; 

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden">
      {/* 1. Imagen de Fondo con efecto Zoom suave */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-10000 ease-linear hover:scale-110"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* 2. Overlay (Capa oscura + Filtro de color) */}
      {/* mix-blend-multiply ayuda a que la foto se tiña del azul corporativo */}
      <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-black/30"></div>

      {/* 3. Contenido Principal */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start">
        
        {/* SEO LOCAL: Etiqueta de ubicación */}
        <span className="text-secondary font-bold tracking-wider uppercase mb-4 text-sm md:text-base border-l-4 border-secondary pl-3">
          Estudio Jurídico en CABA
        </span>

        {/* Título Principal (H1) */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
          ¿Necesitás un Abogado? <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200">
            Defendemos tus intereses.
          </span>
        </h1>

        {/* Subtítulo (Propuesta de Valor) */}
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl font-normal leading-relaxed">
          Especialistas en <strong>Despidos, Accidentes, Sucesiones y Ciudadanías</strong>. 
          Te acompañamos en cada paso con una estrategia sólida y honesta.
          <br className="hidden md:block"/> 
          <span className="text-secondary font-semibold mt-2 block">
            ✅ Primera evaluación de tu caso sin costo.
          </span>
        </p>

        {/* Botones de Acción (CTAs) */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          
          {/* Botón Principal: Amarillo -> Lleva al Formulario */}
          <a 
            href="#contacto" 
            className="px-8 py-4 bg-secondary text-primary font-bold text-lg rounded-md shadow-xl hover:bg-yellow-500 transition duration-300 text-center flex items-center justify-center"
          >
            Hablemos de tu caso
          </a>

          {/* Botón Secundario: Transparente -> Lleva a los Servicios */}
          <a 
            href="#areas-practica" 
            className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-md hover:bg-white hover:text-primary transition duration-300 text-center"
          >
            Nuestros Servicios
          </a>
        </div>

      </div>
    </div>
  );
};

export default Hero;