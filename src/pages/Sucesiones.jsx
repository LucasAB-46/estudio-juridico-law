import React from "react";
import { Helmet } from "react-helmet-async";

const Sucesiones = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Helmet>
        <title>Abogados de Sucesiones | Trámites Rápidos en CABA y PBA</title>
        <meta name="description" content="Gestionamos sucesiones de principio a fin. Declaratoria de herederos, inscripción de bienes y tracto abreviado. Consulta honorarios." />
      </Helmet>

      <div className="bg-[#0a1f44] text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">Sucesiones y Herencias</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Resolvemos los trámites legales de la herencia para que vos solo te ocupes de lo importante.
        </p>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#d4af37]">
            <h3 className="text-xl font-bold text-[#0a1f44] mb-3">Sucesiones Sin Testamento (AB-intestato)</h3>
            <p className="text-gray-600">Cuando la persona fallece sin dejar escrito su deseo, la ley determina los herederos (hijos, cónyuge, padres).</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#d4af37]">
            <h3 className="text-xl font-bold text-[#0a1f44] mb-3">Sucesiones Testamentarias</h3>
            <p className="text-gray-600">Hacemos valer la voluntad del fallecido respetando la legítima de los herederos forzosos.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#0a1f44] mb-6 text-center">¿Cómo trabajamos?</h2>
        <ul className="space-y-4 bg-white p-8 rounded-xl shadow-sm">
          <li className="flex gap-3">
            <span className="text-[#d4af37] font-bold text-xl">1.</span>
            <span className="text-gray-700"><strong>Inicio Inmediato:</strong> Solo necesitamos la partida de defunción y la documentacion respaldatoria para acreditar los vinculos (nacimientos/matrimonio) para comenzar.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#d4af37] font-bold text-xl">2.</span>
            <span className="text-gray-700"><strong>Declaratoria de Herederos:</strong> Obtenemos la sentencia que dice "quiénes heredan" en el menor tiempo posible.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#d4af37] font-bold text-xl">3.</span>
            <span className="text-gray-700"><strong>Inscripción / Venta:</strong> Inscribimos los bienes a tu nombre o a un tercero mediante tracto abreviado (venta directa).</span>
          </li>
        </ul>

        <div className="mt-12 text-center">
          <a href="https://wa.me/5491124076677?text=Hola,%20quisiera%20consultar%20por%20una%20sucesión." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#0a1f44] text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all shadow-lg">
            Solicitar Presupuesto
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sucesiones;