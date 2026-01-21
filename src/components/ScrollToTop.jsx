import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // useLocation nos dice en qué ruta estamos (ej: "/ciudadania")
  const { pathname } = useLocation();

  useEffect(() => {
    // Cada vez que "pathname" cambie, mandamos la ventana arriba
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Este componente no renderiza nada visual
};

export default ScrollToTop;