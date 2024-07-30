import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { scrollY } = useScroll();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < prevScrollY) {
      setNavbarVisible(true);
    } else {
      setNavbarVisible(false);
    }
    setPrevScrollY(latest);
  });

  const handleMenuToggle = () => setOpenMenu(!openMenu);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: navbarVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 bg-primary z-20 border-b-[1px] border-black/20"
    >
      <div className="h-24 px-5 md:px-10 flex justify-between items-center bg-primary">
        <div className="text-center">
          <p className="font-amsterdam text-[22px]">Carla Ferrari</p>
          <p className="font-Questrial text-[10px] my-2">
            Ad & marketing specialist
          </p>
        </div>
        <div>
          <div className="hidden md:block">
            <ul className="flex gap-5 font-normal">
              <li className="hover:scale-105 transition-all transform hover:font-bold">
                <a href="#about">Acerca de mi</a>
              </li>
              <li className="hover:scale-105 transition-all transform hover:font-bold">
                <a href="#services">Servicios</a>
              </li>
              <li className="hover:scale-105 transition-all transform hover:font-bold">
                <a href="#cases">Casos de Éxito</a>
              </li>
              <li className="hover:scale-105 transition-all transform hover:font-bold">
                <a href="#book">Libro</a>
              </li>
              <li className="hover:scale-105 transition-all transform hover:font-bold">
                <a href="#testimonials">Testimonios</a>
              </li>
              <li className="hover:scale-105 transition-all transform hover:font-bold">
                <a href="#contact">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            {openMenu ? (
              <button onClick={handleMenuToggle}>
                <IoClose className="w-8 h-8" />
              </button>
            ) : (
              <button onClick={handleMenuToggle}>
                <IoMdMenu className="w-8 h-8" />
              </button>
            )}
          </div>
        </div>
      </div>
      {openMenu && (
        <div className="md:hidden h-screen overflow-hidden">
          <div className="grid text-center font-bold items-center justify-center h-full text-2xl">
            <a href="#about" onClick={handleMenuToggle}>
              Acerca de mi
            </a>
            <a href="#services" onClick={handleMenuToggle}>
              Servicios
            </a>
            <a href="#cases" onClick={handleMenuToggle}>
              Casos de Éxito
            </a>
            <a href="#book" onClick={handleMenuToggle}>
              Libro
            </a>
            <a href="#testimonials" onClick={handleMenuToggle}>
              Testimonios
            </a>
            <a href="#contact" onClick={handleMenuToggle}>
              Contacto
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
