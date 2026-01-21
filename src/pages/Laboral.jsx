import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Laboral = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* SEO: Palabras clave de ART y Despidos */}
      <Helmet>
        <title>Abogados Laborales y ART | Reclamos por Despidos y Accidentes</title>
        <meta 
          name="description" 
          content="¿Te despidieron o tuviste un accidente de trabajo? Reclamá tu indemnización completa. Especialistas en ART y Trabajo en Negro. Consulta gratuita." 
        />
        <link rel="canonical" href="https://estudiofleitasabuin.com/laboral" />
      </Helmet>

      {/* 1. HERO COMPARTIDO: Ataca la urgencia general */}
      <div className="bg-[#0a1f44] text-white py-20 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[#d4af37] font-bold tracking-widest uppercase text-sm mb-4 block">
            Defensa Exclusiva del Trabajador
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif leading-tight">
            Hacemos valer tus derechos <br/>
            <span className="text-[#d4af37]">hasta el último centavo.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Ya sea por un <strong>despido injustificado</strong> o un <strong>accidente laboral (ART)</strong>, 
            las empresas siempre intentan pagar menos. Nosotros nos aseguramos de que cobres lo que te corresponde.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#despidos" 
              className="bg-white text-[#0a1f44] font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Me Despidieron / Estoy en Negro
            </a>
            <a 
              href="#art" 
              className="bg-[#d4af37] text-[#0a1f44] font-bold py-4 px-8 rounded-lg hover:bg-[#b5952f] transition-colors shadow-lg"
            >
              Tuve un Accidente (ART)
            </a>
          </div>
        </div>
      </div>

      {/* 2. SECCIÓN DESPIDOS (Bloque Izquierdo) */}
      <div id="despidos" className="py-20 px-6 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-bold mb-4">
              RECLAMOS LABORALES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-6 font-serif">
              ¿Trabajo en Negro o Despido Injustificado?
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Si te echaron de palabra, no te dejan entrar a trabajar o te pagan "una parte en blanco y otra en negro", 
              estás ante un fraude laboral. La normativa laboral te protege.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3 text-xl">⚠</span>
                <span className="text-gray-700"><strong>No renuncies:</strong> Si enviás el telegrama de renuncia, perdés tu indemnización.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <span className="text-gray-700"><strong>Liquidación Final:</strong> Reclamamos vacaciones, aguinaldo y antigüedad real.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                <span className="text-gray-700"><strong>Indemnización sobre tu Sueldo Real:</strong> Si cobrabas una parte 'por fuera', exigimos que tu liquidación se calcule sobre el total real que llevabas a tu casa.</span>
              </li>
            </ul>
            <a 
              href="https://wa.me/5491124076677?text=Hola,%20me%20despidieron%20y%20necesito%20asesoramiento."
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block border-2 border-[#0a1f44] text-[#0a1f44] font-bold py-3 px-8 rounded-full hover:bg-[#0a1f44] hover:text-white transition-all"
            >
              Consultar por mi Despido
            </a>
          </div>
          <div className="bg-gray-100 rounded-xl p-8 border-l-4 border-[#0a1f44]">
            <h3 className="text-xl font-bold mb-4 text-[#0a1f44]">Caso Frecuente:</h3>
            <p className="italic text-gray-600 mb-4">
              "Trabajaba de mozo hace 5 años, pero en el recibo figuro con media jornada y fecha de ingreso 2024. Me echaron y me quieren pagar 2 pesos."
            </p>
            <p className="text-sm text-gray-500 font-bold">
              👉 SOLUCIÓN: Se reclama la antigüedad real y las diferencias salariales. La indemnización suele ser mucho mayor a la ofrecida.
            </p>
          </div>
        </div>
      </div>

      {/* 3. SECCIÓN ART / ACCIDENTES (Bloque Derecho - Fondo Gris) */}
      <div id="art" className="py-20 px-6 bg-slate-100 scroll-mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             {/* Aquí podrías poner una foto de un trabajador con casco o médica */}
             <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-[#d4af37] mb-2">¿Sabías que...?</h3>
                <p className="text-gray-600">
                  La ART tiene sus propios médicos que siempre intentan darte el alta antes de tiempo y con "0% de incapacidad" para no pagarte nada. 
                  <br/><br/>
                  <strong>Nunca aceptes el alta sin consultar a un abogado.</strong>
                </p>
             </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-[#d4af37] text-[#0a1f44] px-4 py-1 rounded-full text-sm font-bold mb-4">
              ACCIDENTES DE TRABAJO (ART)
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-6 font-serif">
              Que la ART no se quede con tu salud
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Si te lastimaste trabajando o yendo al trabajo (in itinere), la ART debe cubrir el tratamiento y pagarte una indemnización si te quedan secuelas.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0a1f44] rounded-full flex items-center justify-center text-white font-bold">1</div>
                <p className="text-gray-700">Denunciamos el accidente.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0a1f44] rounded-full flex items-center justify-center text-white font-bold">2</div>
                <p className="text-gray-700">Te revisa nuestro médico legista (para saber tu incapacidad real).</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0a1f44] rounded-full flex items-center justify-center text-white font-bold">3</div>
                <p className="text-gray-700">Reclamamos la indemnización máxima.</p>
              </div>
            </div>
            <a 
              href="https://wa.me/5491124076677?text=Hola,%20tuve%20un%20accidente%20de%20trabajo%20y%20quiero%20reclamar%20a%20la%20ART."
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#d4af37] text-[#0a1f44] font-bold py-3 px-8 rounded-full hover:bg-[#b5952f] transition-all shadow-lg"
            >
              Iniciar Reclamo a la ART
            </a>
          </div>
        </div>
      </div>

      {/* 4. CTA FINAL UNIFICADO */}
      <div className="bg-[#0a1f44] py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          No dejes que se venzan los plazos
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          En derecho laboral, el tiempo es clave. La consulta es gratuita y confidencial.
        </p>
        <a 
          href="https://wa.me/5491124076677"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white font-bold py-4 px-10 rounded-full hover:bg-green-600 transition-all shadow-xl transform hover:-translate-y-1 flex items-center justify-center w-fit mx-auto gap-2"
        >
          <span>Envianos un WhatsApp</span>
        </a>
      </div>

    </div>
  );
};

export default Laboral;