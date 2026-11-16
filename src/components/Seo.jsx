import React from "react";
import { Helmet } from "react-helmet-async";

// Datos centrales del estudio: si cambia algo (teléfono, dirección), se cambia acá.
export const SITE_URL = "https://estudiofleitasabuin.com";
export const SITE_NAME = "Estudio Jurídico Fleitas Abuin";
const DEFAULT_IMAGE = `${SITE_URL}/images/og-image.jpg`;

/**
 * Metadatos SEO de cada página: title, description, canonical, Open Graph y Twitter.
 * Uso: <Seo title="..." description="..." path="/laboral" />
 */
const Seo = ({ title, description, path = "/", image = DEFAULT_IMAGE, noindex = false, children }) => {
  const url = `${SITE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <link rel="canonical" href={url} />
      )}

      {/* Open Graph: así se ve el link al compartirlo por WhatsApp, Facebook, LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {children}
    </Helmet>
  );
};

export default Seo;
