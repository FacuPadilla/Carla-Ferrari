import React, { useState } from "react";

import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuToggle = () => setOpenMenu(!openMenu);

  const [t, i18n] = useTranslation("global");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-20 ${
        openMenu ? "bg-white text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="h-20 lg:h-24 px-5 md:px-10 flex items-center justify-between bg-transparent w-full">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={`${
              openMenu ? "/logoccompletoColor.png" : "/locoCCompletoBlanco.png"
            }`}
            className="h-80  lg:h-96 w-auto object-contain "
            alt="Logo"
          />
        </div>

        {/* Navegación Desktop */}
        <div className="hidden lg:flex items-center">
          <ul className="flex gap-5 font-normal items-center justify-center text-center text-md">
            <li className="hover:scale-105 text-center transition-all transform hover:font-bold">
              <a href="#about">{t("navbar.about")}</a>
            </li>
            <li className="hover:scale-105 transition-all transform hover:font-bold">
              <a href="#plans">{t("navbar.plans")}</a>
            </li>
            <li className="hover:scale-105 transition-all transform hover:font-bold">
              <a href="#cases">{t("navbar.portfolio")}</a>
            </li>
            <li className="hover:scale-105 transition-all transform hover:font-bold">
              <a href="#book">{t("navbar.book")}</a>
            </li>
            <li className="hover:scale-105 transition-all transform hover:font-bold">
              <a href="#testimonials">{t("navbar.testimonials")}</a>
            </li>
            <li className="hover:scale-105 transition-all transform hover:font-bold">
              <a href="#contact">{t("navbar.contact")}</a>
            </li>
          </ul>
        </div>

        {/* Botones Desktop (idioma + CTA) */}
        <div className="hidden lg:flex items-center gap-5">
          <button
            className="hover:scale-105 transition-all transform hover:font-bold"
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </button>
          <button
            className="hover:scale-105 transition-all transform hover:font-bold"
            onClick={() => i18n.changeLanguage("es")}
          >
            ES
          </button>
          <a href="https://wa.me/5491138201129">
            <button className="bg-[#b1757c] hover:bg-[#9d6169] w-48 h-12 text-center text-white font-chocobold rounded">
              {t("carousel.slide1.button")}
            </button>
          </a>
        </div>

        {/* Botón Hamburguesa Mobile */}
        <div className="lg:hidden flex items-center">
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

      {/* Menú Mobile */}
      {openMenu && (
        <div className="lg:hidden py-10 h-screen overflow-hidden text-black bg-white">
          <div className="text-center space-y-10 font-bold h-full text-2xl">
            <div>
              <a href="#about" onClick={handleMenuToggle}>
                {t("navbar.about")}
              </a>
            </div>
            <div>
              <a href="#plans" onClick={handleMenuToggle}>
                {t("navbar.plans")}
              </a>
            </div>
            <div>
              <a href="#cases" onClick={handleMenuToggle}>
                {t("navbar.portfolio")}
              </a>
            </div>
            <div>
              <a href="#book" onClick={handleMenuToggle}>
                {t("navbar.book")}
              </a>
            </div>
            <div>
              <a href="#testimonials" onClick={handleMenuToggle}>
                {t("navbar.testimonials")}
              </a>
            </div>
            <div>
              <a href="#trabaja-con-nosotros" onClick={handleMenuToggle}>
                {t("navbar.trabaja")}
              </a>
            </div>
            <div>
              <a href="#contact" onClick={handleMenuToggle}>
                <button className="bg-black hover:bg-black/80 transition-all transform text-white w-52 h-12">
                  {t("navbar.contact")}
                </button>
              </a>
            </div>
            <div className="flex text-black items-center justify-center gap-5">
              <button
                className="hover:scale-105 transition-all transform hover:font-bold"
                onClick={() => i18n.changeLanguage("en")}
              >
                EN
              </button>
              <button
                className="hover:scale-105 transition-all transform hover:font-bold"
                onClick={() => i18n.changeLanguage("es")}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
