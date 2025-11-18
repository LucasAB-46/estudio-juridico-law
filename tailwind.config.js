/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Asegura que lea todos tus componentes
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0D2144',     // Un azul corporativo oscuro y profesional
        'secondary': '#D4AF37',   // Un dorado/ocre para acentos y botones
        'light': '#F9FAFB',       // Un fondo casi blanco (más suave que el blanco puro)
        'dark-text': '#1F2937',   // Color de texto principal (casi negro)
        'light-text': '#6B7280',  // Color de texto secundario (gris)
      }
    },
  },
  plugins: [],
}