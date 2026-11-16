import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import { trackLead } from './analytics';

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

const root = document.getElementById('root');

// Si la página viene prerenderizada (HTML ya cargado), React "hidrata" ese HTML
// en vez de borrarlo y dibujarlo de nuevo. Si no (ej: npm run dev), renderiza normal.
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}

// MEDICIÓN DE CONSULTAS: cualquier clic en un link de WhatsApp, teléfono o mail
// manda un evento a Google Tag Manager. Un solo listener cubre todos los botones del sitio.
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href]');
  if (!link) return;
  const href = link.getAttribute('href');
  if (href.includes('wa.me/')) trackLead('click_whatsapp', { link_text: link.textContent.trim().slice(0, 60) });
  else if (href.startsWith('tel:')) trackLead('click_phone');
  else if (href.startsWith('mailto:')) trackLead('click_email');
});
