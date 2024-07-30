import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Definir tipos para los parámetros
interface AnimationProps {
  [key: string]: any; // Esto permite cualquier propiedad adicional que GSAP pueda aceptar
}

interface ScrollProps {
  [key: string]: any; // Esto permite cualquier propiedad adicional que ScrollTrigger pueda aceptar
}

export const animatedWithGsap = (
  target: Element | string, // Aseguramos que el target sea un Elemento DOM o un selector de CSS
  animationProps: AnimationProps,
  scrollProps?: ScrollProps
) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};
