import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importamos Link por si acaso

// ... (ICONOS SVG IGUAL QUE ANTES, NO  TOCAR) ...
const MenuIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" {...props}>
    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
  </svg>
);
const CloseIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" {...props}>
    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
);
const ChevronDownIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" {...props}>
    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
);

const logoPath = '/images/logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // CORRECCIÓN CLAVE: Usar rutas absolutas (con "/") para que funcionen desde cualquier página
  const links = [
    { name: 'Inicio', href: '/' }, 
    { name: 'Laboral', href: '/laboral' },
    { name: 'Servicios', href: '/#areas-practica' }, 
    { name: 'Nosotros', href: '/#nosotros' }, 
  ];

  // Enlaces del dropdown
  const internationalLinks = [
    { name: 'Ciudadanía Italiana', href: '/ciudadania' }, // ¡Este va directo a la nueva página!
    { name: 'Viajes y Turismo', href: '/#internacional' },
    { name: 'Sociedades', href: '/#internacional' },
  ];

  return (
    <nav className="bg-[#0D2144] shadow-xl sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">

          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center h-full">
            <a href="/" className="flex items-center space-x-3">
              <img
                src={logoPath}
                alt="Logo Abogada Law"
                className="h-12 sm:h-14 w-auto object-contain drop-shadow-lg"
              />
              <div className="flex flex-col">
                <span className="text-gray-50 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                  DRA. FLEITAS ABUIN & Asoc.
                </span>
                <span className="text-[#D4AF37] text-[0.65rem] sm:text-xs font-semibold tracking-[0.25em] uppercase mt-1">
                  Estudio Jurídico
                </span>
              </div>
            </a>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-[#D4AF37] px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  {link.name}
                </a>
              ))}

              {/* DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="text-gray-300 hover:text-[#D4AF37] px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center focus:outline-none">
                  Internacional
                  <ChevronDownIcon className="ml-1 w-4 h-4" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-2xl py-2 z-50 border border-gray-100">
                    {internationalLinks.map((link) => (
                      <Link // Usamos Link aquí para navegación interna más suave si es ruta de react
                        key={link.name}
                        to={link.href.startsWith('/#') ? '/' : link.href} // Truco: si es ancla, va al href normal. Si es ruta, usa to.
                        onClick={(e) => {
                            // Si es un ancla, dejamos que el navegador maneje el href
                            if(link.href.startsWith('/#')) return;
                            setIsDropdownOpen(false);
                        }}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0D2144]"
                      >
                         {/* Si es un ancla con hash, usamos <a> dentro, sino dejamos el Link actuar */}
                         {link.href.startsWith('/#') ? (
                             <a href={link.href} className="block w-full h-full">{link.name}</a>
                         ) : (
                             link.name
                         )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/#contacto"
                className="bg-[#D4AF37] text-[#0D2144] hover:bg-yellow-500 px-5 py-2 rounded-full text-sm font-bold shadow-lg transition transform hover:scale-105 ml-4"
              >
                Agendar Consulta
              </a>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-[#D4AF37] hover:bg-white/10 focus:outline-none"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0D2144] shadow-2xl border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-[#D4AF37] block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}

            <div className="px-3 py-2 text-[#D4AF37] font-semibold text-sm uppercase tracking-wider border-t border-white/5 mt-2">
              Internacional
            </div>
            
            {/* Links del dropdown en versión móvil */}
            {internationalLinks.map((link) => (
                 link.href.startsWith('/#') ? (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-gray-300 hover:text-[#D4AF37] block pl-6 pr-3 py-2 text-base"
                    >
                        • {link.name}
                    </a>
                 ) : (
                    <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-gray-300 hover:text-[#D4AF37] block pl-6 pr-3 py-2 text-base"
                    >
                        • {link.name}
                    </Link>
                 )
            ))}

            <a
              href="/#contacto"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-[#D4AF37] text-[#0D2144] hover:bg-yellow-500 px-4 py-3 rounded-full text-base font-bold shadow-lg mt-6 mb-2"
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