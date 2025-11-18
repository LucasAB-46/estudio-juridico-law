import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // <-- Se importa el CSS aquí
import App from './App.jsx'

// Este es el único contenido que debe tener este archivo
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)