import React from 'react';
// Importamos Swiper y sus componentes para React
import { Swiper, SwiperSlide } from 'swiper/react';
// Importamos los módulos necesarios (paginación y autoplay)
import { Pagination, Autoplay } from 'swiper/modules';

// Importamos los estilos de Swiper (obligatorio)
import 'swiper/css';
import 'swiper/css/pagination';

const About = () => {
  
  // Imágenes de demostración para el carrusel (Oficinas, Reuniones, Equipo)
  const images = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop", // Oficina moderna
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop", // Reunión
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop", // Escritorio ejecutivo
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: Texto y Propuesta de Valor */}
          <div>
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">
              Sobre el Estudio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
              Más que abogados, <br/>
              <span className="text-secondary">tus aliados estratégicos.</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Con más de 15 años de trayectoria, nos hemos consolidado como un referente en 
                <strong> Derecho Internacional y Laboral</strong>. Entendemos que detrás de cada caso hay una historia, 
                una familia o un proyecto de vida.
              </p>
              <p>
                Nuestro enfoque combina la solidez técnica de un gran estudio con la atención 
                personalizada de una firma boutique. No delegamos tu caso: lo asumimos con 
                responsabilidad directa.
              </p>
            </div>

            {/* Datos de impacto (Social Proof) */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
              <div>
                <span className="block text-3xl font-bold text-primary">+15</span>
                <span className="text-sm text-gray-500">Años de Exp.</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-primary">+500</span>
                <span className="text-sm text-gray-500">Casos Éxito</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-primary">24h</span>
                <span className="text-sm text-gray-500">Respuesta</span>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Carrusel de Imágenes */}
          <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-2xl">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="h-full w-full"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${img})` }}
                  >
                    {/* Overlay suave para unificar tono */}
                    <div className="absolute inset-0 bg-primary/10"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;