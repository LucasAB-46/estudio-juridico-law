import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoChevronDown } from 'react-icons/io5';

const Navbar = () => {
  // Estado para el menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Estado para el menú desplegable de escritorio
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Links principales de navegación
  const links = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Áreas de Práctica', href: '#practice' },
    { name: 'Sobre el Estudio', href: '#about' },
  ];
  
  // Sub-links para el dropdown. Todos apuntan a la sección internacional
  const internationalLinks = [
    { name: 'Ciudadanías', href: '#international' },
    { name: 'Viajes al Exterior', href: '#international' },
    { name: 'Sociedades', href: '#international' },
  ];

  return (
    <nav className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" className="text-white text-2xl font-bold tracking-wide">
              Estudio Jurídico
            </a>
          </div>

          {/* Links de Escritorio */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  {link.name}
                </a>
              ))}

              {/* Dropdown Derecho Internacional */}
              <div 
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center focus:outline-none"
                >
                  Derecho Internacional
                  <IoChevronDown className="ml-1" />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    {internationalLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-dark-text hover:bg-light hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <a
                href="#contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Contacto
              </a>

              {/* Botón CTA (Agendar Consulta) */}
              <a 
                href="#contact" 
                className="ml-4 bg-secondary text-primary hover:bg-yellow-500 px-4 py-2 rounded-md text-sm font-bold shadow-md transition duration-300"
              >
                Agendar Consulta
              </a>
            </div>
          </div>

          {/* Botón de Menú Móvil */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary shadow-xl border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)} 
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            
            <div className="px-3 py-2 text-gray-400 font-semibold text-sm uppercase tracking-wider">
              Internacional
            </div>
            {internationalLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)} 
                className="text-gray-300 hover:text-white block pl-6 pr-3 py-2 rounded-md text-base font-medium"
              >
                • {link.name}
              </a>
            ))}

            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)} 
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contacto
            </a>
            
            {/* Botón CTA móvil */}
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-secondary text-primary hover:bg-yellow-500 px-4 py-3 rounded-md text-base font-bold shadow-md mt-4 mb-2"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;