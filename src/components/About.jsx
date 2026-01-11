import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const About = () => {
  const slides = [
    {
      src: '/images/reunion.png',
      title: 'Trato Personalizado',
      text: 'No delegamos tu caso a asistentes. Hablás directo con los abogados responsables.',
      vertical: false,
    },
    {
      src: '/images/estudio.png',
      title: 'Infraestructura Profesional',
      text: 'Ubicados en el corazón de la City Porteña, con acceso inmediato a Tribunales.',
      vertical: false,
    },
    {
      src: '/images/trabajando.png',
      title: 'Estrategia Ganadora',
      text: 'No improvisamos. Cada expediente se estudia a fondo antes de dar un paso.',
      vertical: false,
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* COLUMNA IZQUIERDA: Storytelling y Autoridad */}
          <div>
            <span className="text-secondary font-bold tracking-wider uppercase text-sm border-b-2 border-secondary pb-1">
              Trayectoria y Confianza
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-6 mb-6 leading-tight">
              Defendemos tus derechos con <br />
              <span className="text-secondary">pasión y estrategia legal.</span>
            </h2>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed text-justify">
              <p>
                En <strong>Estudio Fleitas Abuin & Asoc.</strong>, entendemos que detrás de cada expediente hay una historia de vida, un trabajo o un patrimonio que proteger.
              </p>
              <p>
                Con más de <strong>6 años de litigio activo</strong> en el fuero Laboral, Civil y Comercial, nos diferenciamos por hablar claro: sin promesas falsas ni tecnicismos imposibles de entender.
              </p>
              <p className="font-medium text-primary bg-gray-50 p-4 rounded-lg border-l-4 border-secondary">
                "Nuestro compromiso es simple: peleamos tu caso como si fuera nuestro."
              </p>
            </div>

            {/* Estadísticas de Autoridad (Social Proof) */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100 text-center">
              <div>
                <span className="block text-3xl font-bold text-primary">+6</span>
                <span className="text-sm text-gray-500 font-semibold">Años de Exp.</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-primary">+200</span>
                <span className="text-sm text-gray-500 font-semibold">Casos Ganados</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-primary">100%</span>
                <span className="text-sm text-gray-500 font-semibold">Transparencia</span>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA – Carrusel Visual */}
          <div className="h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-200 relative group">
            <Swiper
              modules={[Pagination, Autoplay, EffectFade]}
              slidesPerView={1}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              className="h-full w-full"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full">

                    {/* Imagen principal con efecto Zoom lento */}
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] ease-linear scale-100 group-hover:scale-110"
                    />

                    {/* Degradado Mejorado para legibilidad */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>

                    {/* Texto sobre la imagen */}
                    <div className="absolute bottom-0 left-0 p-8 text-white z-20 w-full">
                      <div className="w-12 h-1 bg-secondary mb-4"></div>
                      <h3 className="text-2xl font-bold mb-2 text-white">
                        {slide.title}
                      </h3>
                      <p className="text-gray-200 text-sm md:text-base max-w-md font-light leading-relaxed">
                        {slide.text}
                      </p>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Etiqueta flotante "Estudio Jurídico" */}
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-white z-30 uppercase tracking-widest">
                Fleitas Abuin
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;