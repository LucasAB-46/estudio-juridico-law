// PRERENDER: después de "vite build", genera un HTML real por cada ruta.
// Resultado: dist/index.html, dist/laboral/index.html, ..., dist/404.html
// Así Google lee title, description y contenido sin tener que ejecutar JavaScript.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

// Si agregás una página nueva en App.jsx, sumala acá y en public/sitemap.xml
const routes = ["/", "/laboral", "/ciudadania", "/sucesiones", "/reclamos-turismo", "/empresas"];

const template = fs.readFileSync(path.join(dist, "index.html"), "utf-8");
const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

function buildPage(url) {
  const { html, head } = render(url);
  return template
    .replace("<!--app-head-->", head)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
}

for (const url of routes) {
  const out = url === "/" ? path.join(dist, "index.html") : path.join(dist, url.slice(1), "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, buildPage(url));
  console.log("✔ prerender", url);
}

// Página 404 (Vercel la sirve con status 404 para cualquier URL que no exista)
fs.writeFileSync(path.join(dist, "404.html"), buildPage("/pagina-inexistente-404"));
console.log("✔ prerender 404.html");

fs.rmSync(ssrDir, { recursive: true, force: true });
