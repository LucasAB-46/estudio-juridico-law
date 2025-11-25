import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  // Número REAL del estudio en formato internacional para WhatsApp:
  // +54 9 11 2407-6677 -> "5491124076677"
  // SIN '+', SIN espacios, SIN guiones.
  const phoneNumber = '5491124076677';

  const message = 'Hola, estuve viendo su sitio web y quisiera hacer una consulta legal.';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-[#20ba5a] transition-all duration-300 flex items-center justify-center group animate-bounce-slow"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={32} />

      {/* Tooltip a la izquierda en desktop */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
        ¡Hablemos ahora!
      </span>
    </button>
  );
};

export default WhatsAppButton;
