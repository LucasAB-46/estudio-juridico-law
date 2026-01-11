import React, { useState } from 'react';

// ---------------- SVG ICONOS ----------------
const MenuIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);

const CloseIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronDownIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

// ---------------- RUTA DEL LOGO ----------------
// Guardá tu SVG en: public/images/logo.svg
const logoPath = '/images/logo.svg';

// Colores Tailwind
const colors = {
  primary: '#0D2144',
  secondary: '#D4AF37',
  light: '#F9FAFB',
  'dark-text': '#374151',
};

const tailwindConfig = {
  theme: {
    extend: { colors },
  },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // CORRECCIÓN DE LINKS: Nombres más comerciales y IDs correctos
  const links = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Nuestros Servicios', href: '#areas-practica' }, // Corregido ID y Nombre
    { name: 'Sobre el Estudio', href: '#nosotros' }, // Corregido ID (antes #about)
  ];

  const internationalLinks = [
    { name: 'Ciudadanías', href: '#internacional' }, // Corregido ID (antes #international)
    { name: 'Viajes al Exterior', href: '#internacional' },
    { name: 'Sociedades', href: '#internacional' },
  ];

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Solo aplica si usás Tailwind por CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `tailwind.config = ${JSON.stringify(tailwindConfig)}`,
        }}
      />

      <nav className="bg-primary shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">

            {/* ---------------- LOGO + MARCA ---------------- */}
            <div className="flex-shrink-0 flex items-center h-full">
              <a href="#hero" className="flex items-center space-x-3">
                {/* Logo sin fondo blanco extra */}
                <div className="flex items-center justify-center">
                  <img
                    src={logoPath}
                    alt="Logo Abogada Law"
                    className="h-12 sm:h-14 w-auto object-contain drop-shadow-lg"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        'https://placehold.co/120x120/FFFFFF/0D2144?text=LOGO';
                    }}
                  />
                </div>

                {/* Marca / Nombre del estudio */}
                <div className="flex flex-col">
                  <span className="text-light text-xs sm:text-sm font-semibold tracking-wide uppercase">
                    DRA. FLEITAS ABUIN & Asoc.
                  </span>
                  <span className="text-secondary text-[0.65rem] sm:text-xs font-semibold tracking-[0.25em] uppercase mt-1">
                    Estudio Jurídico
                  </span>
                </div>
              </a>
            </div>

            {/* ---------------- MENÚ DESKTOP ---------------- */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                  >
                    {link.name}
                  </a>
                ))}

                {/* Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button className="text-gray-300 hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center">
                    Derecho Internacional
                    <ChevronDownIcon className="ml-1 w-4 h-4" />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-2xl py-1 z-50 border border-gray-100">
                      {internationalLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          className="block px-4 py-2 text-sm text-dark-text hover:bg-light hover:text-primary"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Contacto */}
                <a
                  href="#contacto" // Corregido ID
                  className="text-gray-300 hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Contacto
                </a>

                {/* CTA */}
                <a
                  href="#contacto" // Corregido ID
                  className="ml-4 bg-secondary text-primary hover:bg-yellow-500 px-4 py-2 rounded-full text-sm font-bold shadow-lg transition transform hover:scale-105"
                >
                  Agendar Consulta
                </a>
              </div>
            </div>

            {/* ---------------- MENÚ MÓVIL ---------------- */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-secondary hover:bg-white/10"
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* ---------------- MOBILE MENU ---------------- */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary shadow-2xl border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleMobileLinkClick}
                  className="text-gray-300 hover:text-secondary block px-3 py-2 rounded-md text-base"
                >
                  {link.name}
                </a>
              ))}

              <div className="px-3 py-2 text-secondary font-semibold text-sm uppercase tracking-wider border-t border-white/5 mt-2">
                Internacional
              </div>

              {internationalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleMobileLinkClick}
                  className="text-gray-300 hover:text-secondary block pl-6 pr-3 py-2 text-base"
                >
                  • {link.name}
                </a>
              ))}

              <a
                href="#contacto"
                onClick={handleMobileLinkClick}
                className="text-gray-300 hover:text-secondary block px-3 py-2 rounded-md text-base border-t border-white/5 mt-2"
              >
                Contacto
              </a>

              <a
                href="#contacto"
                onClick={handleMobileLinkClick}
                className="block w-full text-center bg-secondary text-primary hover:bg-yellow-500 px-4 py-3 rounded-full text-base font-bold shadow-lg mt-4 mb-2 transform hover:scale-[1.01]"
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;