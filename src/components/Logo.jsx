import React from 'react';
// Usaremos un icono de Balanza estilizada de lucide-react (asume que está disponible en React Icons)
import { Scale } from 'lucide-react'; 

const Logo = ({ color = 'text-white', size = 'text-2xl' }) => {
  return (
    <div className={`flex items-center space-x-2 ${size}`}>
      {/* Ícono de Balanza (Símbolo abstracto de justicia y equilibrio) */}
      <div className={`p-1 rounded-sm ${color} bg-secondary/20`}>
        {/* Usamos un SVG como fallback si lucide-react no carga, pero la intención es usar un icono moderno */}
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={`w-6 h-6 text-secondary`}
        >
            <path d="M12 3v18" />
            <path d="M4 17h16" />
            <path d="M8 13h8" />
            <path d="M8 9h8" />
            <path d="M12 3L4 17h16L12 3z" />
        </svg>

      </div>
      
      {/* Texto Tipográfico (Usando la fuente Lato) */}
      <span className={`font-bold tracking-wider ${color}`}>
        Abogada 
        <span className="text-secondary font-extrabold ml-0.5">Law</span>
      </span>
    </div>
  );
};

export default Logo;