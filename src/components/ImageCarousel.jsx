// src/components/ImageCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

function ImageCarousel() {
  return (
    <div className="w-full h-64 md:h-80 lg:h-[420px] rounded-3xl overflow-hidden border border-white/10 shadow-xl">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
        className="w-full h-full"
      >
        {/* IMAGEN 1 */}
        <SwiperSlide>
          <img
            src="/images/hero1.jpg"
            alt="Estudio Jurídico - Imagen 1"
            className="w-full h-full object-cover opacity-90"
          />
        </SwiperSlide>

        {/* IMAGEN 2 */}
        <SwiperSlide>
          <img
            src="/images/hero2.jpg"
            alt="Estudio Jurídico - Imagen 2"
            className="w-full h-full object-cover opacity-90"
          />
        </SwiperSlide>

        {/* IMAGEN 3 */}
        <SwiperSlide>
          <img
            src="/images/hero3.jpg"
            alt="Estudio Jurídico - Imagen 3"
            className="w-full h-full object-cover opacity-90"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ImageCarousel;
