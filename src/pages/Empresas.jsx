import React from "react";
import { Helmet } from "react-helmet-async";

const Empresas = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Helmet>
        <title>Abogados para PyMEs y Empresas | Contratos y Sociedades</title>
        <meta name="description" content="Asesoramiento legal corporativo. Constitución de SAS/SRL, redacción de contratos y blindaje legal para tu negocio." />
      </Helmet>

      <div className="bg-gray-50 py-16 px-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
             <span className="text-[#d4af37] font-bold tracking-widest uppercase text-sm mb-2 block">Servicios Corporativos</span>
             <h1 className="text-4xl font-bold text-[#0a1f44] mb-4 font-serif">Blindaje Legal para tu Negocio</h1>
             <p className="text-lg text-gray-600">
               Que los problemas legales no frenen tu crecimiento. Asesoramiento preventivo para emprendedores y PyMEs.
             </p>
          </div>
          <div className="md:w-1/3">
             {/* Aquí podría ir un icono de edificio o handshake */}
             <div className="bg-[#0a1f44] p-6 rounded-lg text-white shadow-xl">
               <p className="font-bold mb-2">Abonos Mensuales</p>
               <p className="text-sm opacity-80 mb-4">Tené un departamento legal externo a una fracción del costo.</p>
               <a href="https://wa.me/5491124076677" className="block text-center bg-[#d4af37] text-[#0a1f44] font-bold py-2 rounded">Consultar Abono</a>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-[#0a1f44] mb-8 text-center">Soluciones para cada etapa</h2>
        <div className="space-y-8">
          <div className="flex gap-4 items-start">
            <div className="bg-gray-100 p-3 rounded-full text-xl">🚀</div>
            <div>
              <h3 className="text-xl font-bold text-[#0a1f44]">Constitución de Sociedades</h3>
              <p className="text-gray-600">Te ayudamos a elegir entre SAS, SRL o SA. Redactamos el estatuto y gestionamos la inscripción en IGJ.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-gray-100 p-3 rounded-full text-xl">📄</div>
            <div>
              <h3 className="text-xl font-bold text-[#0a1f44]">Contratos Comerciales</h3>
              <p className="text-gray-600">Redacción y revisión de contratos con proveedores, clientes y socios. Evitá cláusulas abusivas.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-gray-100 p-3 rounded-full text-xl">🛡️</div>
            <div>
              <h3 className="text-xl font-bold text-[#0a1f44]">Registro de Marca</h3>
              <p className="text-gray-600">Protegé el nombre de tu empresa y tu logo antes de que otro lo registre.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empresas;