import React from 'react';

const Hero = () => {
  // CORRECCIÓN CRÍTICA: 
  // 1. Quitamos el punto '.' del inicio. La ruta debe ser desde la raíz ("/images/...")
  // 2. CONFIRMA EL NOMBRE: Si tu archivo en la carpeta es 'edificio.jpg', pon eso aquí.
  const heroImage = "/images/edificio.jpg"; 

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden">
      {/* 1. Imagen de Fondo */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-10000 ease-linear hover:scale-110"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* 2. Overlay (Capa oscura para legibilidad) */}
      {/* CAMBIO: Bajamos a 'bg-primary/60' para que la foto se vea más a través del azul */}
      <div className="absolute inset-0 bg-primary/60"></div>

      {/* 3. Contenido */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start">
        
        {/* Etiqueta superior pequeña */}
        <span className="text-secondary font-bold tracking-wider uppercase mb-4 text-sm md:text-base">
          Defensa Legal Estratégica
        </span>

        {/* Título Principal (H1) */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Protegemos tus derechos <br/>
          <span className="text-gray-300">con firmeza y experiencia.</span>
        </h1>

        {/* Subtítulo (Párrafo) */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light">
          Especialistas en Derecho Internacional, Laboral y Daños. 
          Transformamos conflictos complejos en soluciones claras.
        </p>

        {/* Botones de Acción (CTAs) */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Botón Principal (Dorado) */}
          <a 
            href="#contact" 
            className="px-8 py-4 bg-secondary text-primary font-bold text-lg rounded-md shadow-lg hover:bg-yellow-500 transition duration-300 text-center"
          >
            Reclamá tu Indemnización
          </a>

          {/* Botón Secundario (Borde blanco/transparente) */}
          <a 
            href="#practice" 
            className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-md hover:bg-white hover:text-primary transition duration-300 text-center"
          >
            Conocé nuestras áreas
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;