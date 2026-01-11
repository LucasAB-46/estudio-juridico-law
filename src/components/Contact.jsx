import React, { useState } from 'react';

// --- Iconos SVG Inlined ---
const PhoneIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className || ''}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-5.63-5.63A19.79 19.79 0 0 1 2 4.18a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2 15 15 0 0 0 1 2.91 2 2 0 0 1-.41 2.44l-1.55 1.55a16 16 0 0 0 6 6l1.55-1.55a2 2 0 0 1 2.44-.41 15 15 0 0 0 2.91 1z"/></svg>
);

const MailIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className || ''}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const MapPinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className || ''}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const InstagramIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className || ''}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const ShieldIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className || ''}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);

const Contact = () => {
  // SIMPLIFICACIÓN: Unificamos nombre y apellido para reducir fricción
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const formspreeEndpoint = 'https://formspree.io/f/xanzayrv';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Enviando consulta...');

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: '🔥 NUEVA CONSULTA WEB - FLEITAS ABUIN', // Asunto llamativo para que el abogado lo abra rápido
        }),
      });

      if (response.ok) {
        setStatus('¡Consulta recibida! Te contactaremos a la brevedad.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('Hubo un error. Por favor envianos un WhatsApp.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error de conexión. Intenta por WhatsApp.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(''), 8000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const whatsappNumber = '5491124076677';
  const whatsappMessage = 'Hola, quisiera asesoramiento sobre mi caso...';

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm">
            Consulta Inicial Sin Cargo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            Contanos tu caso hoy mismo
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* COLUMNA IZQUIERDA: Info + Confianza */}
          <div className="space-y-8 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-4">
              ¿Por qué elegirnos?
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Entendemos que detrás de cada consulta hay una preocupación real. 
              Te ofrecemos <strong>honestidad, rapidez y una estrategia clara</strong> desde el primer día.
            </p>

            <div className="space-y-6 pt-6 border-t border-gray-100">
              
              {/* WhatsApp (Prioridad 1) */}
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  <PhoneIcon size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-primary">Atención Inmediata</h4>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-gray-700 hover:text-green-600 font-bold transition"
                  >
                    11 2407-6677 (WhatsApp)
                  </a>
                </div>
              </div>

              {/* Oficinas */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-secondary">
                  <MapPinIcon size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-primary">Oficinas en Microcentro</h4>
                  <p className="text-gray-600">Roque Saenz Peña 832, Piso 6, CABA</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-secondary">
                  <MailIcon size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-primary">Email</h4>
                  <a href="mailto:Afleitasabuin@gmail.com" className="text-gray-600 hover:text-secondary">
                    Afleitasabuin@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Instagram */}
              <div className="flex items-center space-x-4">
                 <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-pink-600">
                  <InstagramIcon size={20} />
                </div>
                <div>
                  <a href="https://www.instagram.com/abogada.law" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 font-semibold">
                    Seguinos en Instagram
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* COLUMNA DERECHA: Formulario de Alta Conversión */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl border-t-8 border-secondary relative overflow-hidden">
            
            {/* Mensaje de estado */}
            {status && (
              <div className={`p-4 mb-6 rounded-lg text-center font-bold animate-pulse ${
                status.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-800'
              }`}>
                {status}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Nombre Completo (Unificado) */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition duration-200"
                  placeholder="Juan Pérez"
                />
              </div>

              {/* Teléfono (OBLIGATORIO) */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Teléfono / Celular <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required // <--- CRÍTICO: Sin teléfono no hay venta
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition duration-200"
                  placeholder="11 1234 5678"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition duration-200"
                  placeholder="juan@email.com"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">¿Cómo podemos ayudarte?</label>
                <textarea
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition duration-200 resize-none"
                  placeholder="Breve descripción de tu situación..."
                ></textarea>
              </div>

              {/* BOTÓN DE ACCIÓN (CTA FUERTE) */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary hover:bg-yellow-500 text-primary font-bold py-4 rounded-lg shadow-lg transform active:scale-95 transition duration-200 text-lg uppercase tracking-wide flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Procesando...' : (
                    <>
                        Solicitar Revisión Gratuita
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                    </>
                )}
              </button>

              {/* MENSAJE DE CONFIANZA */}
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-4">
                <ShieldIcon className="w-4 h-4 text-green-600" />
                <span>Tus datos son 100% confidenciales y seguros.</span>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;