import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Para el prerender (build SSR): empaquetamos estas librerías en vez de importarlas
  // desde node_modules, porque vienen en formato CommonJS / con CSS y Node no las lee directo.
  ssr: {
    noExternal: ['react-helmet-async', 'swiper'],
  },
})
