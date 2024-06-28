/** @type {import('next').NextConfig} */
const nextConfig = {
  // Agregar configuraciones adicionales si es necesario
  output: "export", // Habilitar la exportación estática
  assetPrefix: process.env.NODE_ENV === "production" ? "/gervisbermudez-blog/" : "", // Ruta base para GitHub Pages
  trailingSlash: true, // Agregar barra inclinada al final de cada ruta
};

export default nextConfig;
