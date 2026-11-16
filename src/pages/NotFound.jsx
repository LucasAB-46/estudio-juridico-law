import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const NotFound = () => (
  <main className="flex-grow bg-slate-50 flex items-center justify-center py-40 px-6">
    <Seo
      title="Página no encontrada | Estudio Jurídico Fleitas Abuin"
      description="La página que buscás no existe. Volvé al inicio o consultanos por WhatsApp."
      noindex
    />
    <div className="text-center max-w-xl">
      <p className="text-[#d4af37] font-bold tracking-widest uppercase text-sm mb-4">Error 404</p>
      <h1 className="text-4xl md:text-5xl font-bold text-[#0a1f44] font-serif mb-6">
        Esta página no existe
      </h1>
      <p className="text-gray-600 text-lg mb-10">
        Puede que el link esté mal escrito o que la página se haya movido. Igual podemos ayudarte con tu caso.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/" className="bg-[#0a1f44] text-white font-bold py-3 px-8 rounded-full hover:bg-[#13306a] transition-all">
          Volver al inicio
        </Link>
        <a
          href="https://wa.me/5491124076677?text=Hola,%20quisiera%20hacer%20una%20consulta%20legal."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition-all"
        >
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  </main>
);

export default NotFound;
