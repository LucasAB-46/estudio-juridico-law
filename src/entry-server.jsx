// Entrada para el PRERENDER (se ejecuta en Node durante el build, no en el navegador).
// Renderiza cada ruta a HTML para que Google y WhatsApp vean el contenido real sin ejecutar JS.
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";

export function render(url) {
  const helmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );
  const { helmet } = helmetContext;
  const head = [helmet.title, helmet.meta, helmet.link, helmet.script]
    .map((t) => t.toString())
    .join("\n    ");
  return { html, head };
}
