import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm">
            Estamos para ayudarte
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            Hablemos de tu caso
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* COLUMNA IZQUIERDA: Información de Contacto */}
          <div className="space-y-8">
            <p className="text-gray-600 text-lg leading-relaxed">
              La primera consulta es fundamental para entender tu situación. 
              Contactanos por cualquiera de nuestros canales directos o completá 
              el formulario y te responderemos en menos de 24 horas hábiles.
            </p>

            {/* Tarjetas de info */}
            <div className="space-y-6">
              
              {/* Teléfono */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 text-secondary">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary">Llamanos / WhatsApp</h4>
                  <p className="text-gray-600">+54 9 11 1234-5678</p>
                  <p className="text-sm text-gray-500">Lun a Vie de 9:00 a 18:00 hs</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 text-secondary">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary">Envianos un correo</h4>
                  <p className="text-gray-600">contacto@estudiojuridico.com</p>
                </div>
              </div>

              {/* Dirección */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 text-secondary">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary">Nuestras Oficinas</h4>
                  <p className="text-gray-600">Av. del Libertador 1000, Piso 5, CABA</p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Formulario */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-secondary">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Apellido</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition"
                  placeholder="Cod. Área + Número"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition resize-none"
                  placeholder="Contanos brevemente tu caso..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-white font-bold py-4 rounded-md hover:bg-opacity-90 transition duration-300 shadow-md"
              >
                Enviar Consulta
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;