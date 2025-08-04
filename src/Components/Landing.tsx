import { ImagesSlider } from "./ui/ImagesSlider";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Landing = () => {
  const [t] = useTranslation("global");

  // Estado para detectar el tamaño de la pantalla
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Detectar el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Verifica si el ancho de la pantalla es menor que 'md' (768px)
    };

    handleResize(); // Verificar al cargar la página
    window.addEventListener("resize", handleResize); // Detectar cambios en el tamaño de la pantalla

    return () => {
      window.removeEventListener("resize", handleResize); // Limpieza del evento
    };
  }, []);

  // Array de imágenes basado en el tamaño de la pantalla
  const images = isSmallScreen
    ? ["/banner2.jpg", "/banner3.jpeg"]
    : ["/banner2.jpg", "/banner3.jpeg"];

  return (
    <ImagesSlider className="h-[700px]" images={images} autoplay={true}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-10 flex flex-col justify-center items-center mt-56"
      >
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl font-chocobold md:text-7xl lg:text-[90px] text-center bg-clip-text text-white py-4 px-2"
        >
          {t("carousel.slide1.title1")} <br /> {t("carousel.slide1.title2")}
        </motion.p>
        <motion.p className="font-chocoreg text-lg md:text-4xl text-center bg-clip-text text-white py-4 px-5">
          {t("carousel.slide1.subtitle")}
        </motion.p>
        <a href="mailto:info@carlaferrari.net" className="md:hidden">
          <button className="bg-[#b1757c] hover:bg-[#9d6169]  w-56 h-12 text-center text-white font-chocobold rounded font-bold">
            {t("carousel.slide1.button")}
          </button>
        </a>
      </motion.div>
    </ImagesSlider>
  );
};

export default Landing;
