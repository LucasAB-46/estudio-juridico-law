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
      title: 'Estrategia y acompañamiento',
      text: 'Reuniones claras, información transparente y decisiones tomadas en conjunto.',
      vertical: false,
    },
    {
      src: '/images/estudio.png',
      title: 'Estudio jurídico de alto nivel',
      text: 'Nuestro estudio cuenta con instalaciones y recursos profesionales.',
      vertical: false,
    },
    {
      src: '/images/trabajando.png',
      title: 'Compromiso en cada detalle',
      text: 'Analizamos tu caso a fondo para brindarte la mejor estrategia legal.',
      vertical: false,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* COLUMNA IZQUIERDA */}
          <div>
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">
              Sobre el Estudio
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
              Más que abogados, <br />
              <span className="text-secondary">tus aliados estratégicos.</span>
            </h2>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Con más de 6 años de trayectoria, nos hemos consolidado como un referente en
                <strong> Derecho Internacional, Empresarial, Daños y Laboral.</strong>
              </p>
              <p>
                Nuestro enfoque combina la solidez técnica de un gran estudio con la atención personalizada de una firma boutique.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
              <div>
                <span className="block text-3xl font-bold text-primary">+6</span>
                <span className="text-sm text-gray-500">Años de Exp.</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-primary">+200</span>
                <span className="text-sm text-gray-500">Casos de éxito</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-primary">24h</span>
                <span className="text-sm text-gray-500">Respuesta</span>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA – Carrusel */}
          <div className="h-[430px] w-full rounded-2xl overflow-hidden shadow-2xl border border-secondary/60 relative">
            <Swiper
              modules={[Pagination, Autoplay, EffectFade]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop={true}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              className="h-full w-full"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full">

                    {/* Fondo blur solo si es vertical */}
                    {slide.vertical && (
                      <img
                        src={slide.src}
                        className="absolute inset-0 w-full h-full object-cover blur-lg scale-105 opacity-40"
                      />
                    )}

                    {/* Imagen principal */}
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className={`relative z-10 w-full h-full ${
                        slide.vertical
                          ? 'object-contain object-center max-h-[95%]'
                          : 'object-cover'
                      }`}
                    />

                    {/* Degradado */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

                    {/* Texto */}
                    <div className="absolute bottom-0 left-0 p-6 text-white z-20">
                      <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-2">
                        Estudio Jurídico
                      </p>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-1">
                        {slide.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-100 max-w-md">
                        {slide.text}
                      </p>
                    </div>

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
