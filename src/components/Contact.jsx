import React, { useState } from 'react';

// --- Iconos SVG Inlined para evitar dependencia externa ---
// Icono de Teléfono
const PhoneIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className || ''}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-5.63-5.63A19.79 19.79 0 0 1 2 4.18a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2 15 15 0 0 0 1 2.91 2 2 0 0 1-.41 2.44l-1.55 1.55a16 16 0 0 0 6 6l1.55-1.55a2 2 0 0 1 2.44-.41 15 15 0 0 0 2.91 1z"/></svg>
);

// Icono de Correo Electrónico
const MailIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className || ''}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

// Icono de Ubicación
const MapPinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className || ''}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

// Icono de Instagram
const InstagramIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className || ''}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const Contact = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  // ✅ Endpoint real de Formspree
  const formspreeEndpoint = 'https://formspree.io/f/xanzayrv';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Enviando...');

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'Nueva consulta desde el sitio web',
        }),
      });

      if (response.ok) {
        setStatus('Mensaje enviado con éxito. ¡Gracias por contactarnos!');
        setFormData({ name: '', lastname: '', email: '', phone: '', message: '' });
      } else {
        setStatus('¡Error! No se pudo enviar el mensaje. Intente de nuevo.');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('Hubo un error de conexión al enviar el formulario.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Para usar el número en el link de WhatsApp de la tarjeta
  const whatsappNumber = '5491124076677';
  const whatsappMessage = 'Hola, estuve viendo su sitio web y quisiera hacer una consulta legal.';

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

            <div className="space-y-6">
              {/* Teléfono y WhatsApp */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 text-secondary">
                  <PhoneIcon size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary">Llamanos / WhatsApp</h4>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 font-semibold hover:text-secondary transition"
                  >
                    +54 9 11 2407-6677
                  </a>
                  <p className="text-sm text-gray-500">Lun a Vie de 9:00 a 18:00 hs</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 text-secondary">
                  <MailIcon size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary">Envianos un correo</h4>
                  <a
                    href="mailto:Afleitasabuin@gmail.com"
                    className="text-gray-600 font-semibold hover:text-secondary transition"
                  >
                    Afleitasabuin@gmail.com
                  </a>
                </div>
              </div>

              {/* Dirección */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 text-secondary">
                  <MapPinIcon size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary">Nuestras Oficinas</h4>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Roque+Saenz+Pe%C3%B1a+832,+Piso+6,+CABA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 font-semibold hover:text-secondary transition"
                  >
                    Roque Saenz Peña 832, Piso 6, CABA
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start space-x-4 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 text-secondary">
                  <InstagramIcon size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary">Síguenos en Instagram</h4>
                  <a 
                    href="https://www.instagram.com/abogada.law"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary font-semibold transition duration-200"
                  >
                    @abogada.law
                  </a>
                  <p className="text-sm text-gray-500">Contenido legal y noticias.</p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Formulario */}
          <div className="bg-white p-8 rounded-lg shadow-2xl border-t-4 border-secondary">
            {status && (
              <div
                className={`p-3 mb-4 rounded-lg text-center font-bold ${
                  status.toLowerCase().includes('error') || status.toLowerCase().includes('hubo')
                    ? 'bg-red-100 text-red-700'
                    : 'bg-green-100 text-green-700'
                }`}
              >
                {status}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre y Apellido */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-2">
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition"
                  placeholder="Cod. Área + Número"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  rows="4"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition resize-none"
                  placeholder="Contanos brevemente tu caso..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-bold py-4 rounded-md hover:bg-opacity-90 transition duration-300 shadow-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
