// Envía eventos de conversión a Google Tag Manager (dataLayer).
// En GTM se crea un activador "Evento personalizado" con estos nombres
// (click_whatsapp, form_submit, click_phone, click_email) y se mandan a GA4 como conversiones.
export function trackLead(event, params = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    page_path: window.location.pathname,
    ...params,
  });
}
