import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";
const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuToggle = () => setOpenMenu(!openMenu);

  const [t, i18n] = useTranslation("global");

  return (
    <nav
      className={`fixed top-0 left-0 right-0  z-20 ${
        openMenu ? "bg-primary text-black" : "bg-transparent text-white"
      } `}
    >
      <div className="h-24 px-5 md:px-10 flex  items-center bg-transparent w-full">
        <div className=" w-full flex justify-start items-center mt-5">
          <div>
            <p className="font-amsterdam text-[28px] md:text-[22px] lg:text-[18px] xl:text-[26px]">
              Carla Ferrari
            </p>
            <p className="font-Questrial text-[15px] md:text-[10px] xl:text-[13px] my-2 text-center">
              Ad & marketing specialist
            </p>
          </div>
        </div>
        <div>
          <div className="hidden lg:block   w-[550px]">
            <ul className="flex gap-5 font-normal items-center justify-center text-center text-sm ">
              <li className="hover:scale-105 text-center transition-all transform hover:font-bold">
                <a href="#about">{t("navbar.about")}</a>
              </li>
              <li className="hover:scale-105 transition-all transform hover:font-bold">
                <a href="#services">{t("navbar.services")}</a>
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

          <div className="lg:hidden">
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
        <div className="hidden lg:block  w-full">
          <div className="flex gap-5 justify-end">
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
            <a href="mailto:carferrari94@gmail.com">
              <button className="bg-[#f8c761]  hover:bg-[#f8c761]/90 w-48 h-12 text-center text-black font-bold">
                {t("carousel.slide1.button")}
              </button>
            </a>
          </div>
        </div>
      </div>
      {openMenu && (
        <div className="lg:hidden py-10  h-screen overflow-hidden text-black bg-primary ">
          <div className=" text-center space-y-10 font-bold  h-full text-2xl">
            <div>
              <a href="#about" onClick={handleMenuToggle}>
                {t("navbar.about")}
              </a>
            </div>
            <div>
              {" "}
              <a href="#services" onClick={handleMenuToggle}>
                {t("navbar.services")}
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
              <a href="#contact" onClick={handleMenuToggle}>
                {t("navbar.contact")}
              </a>
            </div>
            <button className="bg-black hover:bg-black/80 transition-all transform  text-white   w-52 h-12">
              {t("about.button")}
            </button>
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
