import React from "react";
import { Helmet } from "react-helmet-async";

const Turismo = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Helmet>
        <title>Reclamos Aéreos y Turismo | Vuelos Cancelados y Equipaje</title>
        <meta name="description" content="¿Vuelo cancelado o valija perdida? Reclamamos tu indemnización en dólares/euros según normas internacionales. No aceptes vouchers." />
      </Helmet>

      <div className="bg-[#0a1f44] text-white py-16 px-6 text-center relative overflow-hidden">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">Defensa del Viajero</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Las aerolíneas apuestan a que te canses. Nosotros hacemos que paguen lo que dice la ley.
        </p>
      </div>

      <div className="max-w-5xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🧳</div>
            <h3 className="text-lg font-bold text-[#0a1f44] mb-2">Equipaje Perdido o Dañado</h3>
            <p className="text-sm text-gray-600">La aerolínea debe pagarte por los días sin ropa y por el valor de la valija. Reclamamos daño moral.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🛫</div>
            <h3 className="text-lg font-bold text-[#0a1f44] mb-2">Vuelos Cancelados</h3>
            <p className="text-sm text-gray-600">Si te reprogramaron o cancelaron sin aviso, te corresponde hotel, comida y una compensación económica.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🏨</div>
            <h3 className="text-lg font-bold text-[#0a1f44] mb-2">Estafas Turísticas</h3>
            <p className="text-sm text-gray-600">Problemas con agencias de viaje, hoteles que no existen o servicios no cumplidos.</p>
          </div>
        </div>

        <div className="bg-[#d4af37]/10 p-8 rounded-xl border border-[#d4af37] text-center">
          <h2 className="text-2xl font-bold text-[#0a1f44] mb-4">¿Sabías que podés cobrar en Dólares?</h2>
          <p className="text-gray-700 mb-6">
            Al aplicar el Convenio de Montreal, las indemnizaciones suelen fijarse en moneda extranjera. No aceptes millas ni vouchers sin sentido antes de consultarnos.
          </p>
          <a href="https://wa.me/5491124076677?text=Hola,%20tuve%20un%20problema%20con%20un%20vuelo/viaje." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#0a1f44] text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all">
            Iniciar Reclamo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Turismo;