import React, { type FormEvent, useState } from "react";

import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMeetingOpen, setIsMeetingOpen] = useState(false);
  const [meetingName, setMeetingName] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("mañana");

  const handleMenuToggle = () => setOpenMenu(!openMenu);

  const [t, i18n] = useTranslation("global");

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setHasScrolled(scrollTop > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  const handleMeetingSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `Hola, soy ${meetingName}. Quisiera agendar una reunión. Mi preferencia de día es ${meetingDate} y mi preferencia horaria es ${meetingTime}. Entiendo que es una referencia para coordinar disponibilidad.`;
    window.open(
      `https://wa.me/5491138201129?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setIsMeetingOpen(false);
    setMeetingName("");
    setMeetingDate("");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 rose-text-shimmer ${
        openMenu
          ? "bg-white text-black shadow-md"
          : hasScrolled
          ? "text-white rose-divider-shimmer"
          : "text-white"
      }`}
      style={
        openMenu
          ? undefined
          : hasScrolled
          ? {
              backgroundColor: "rgba(177, 117, 124, 0.82)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.35)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }
          : { backgroundColor: "transparent" }
      }
    >
      <div className="h-20 lg:h-24 px-5 md:px-10 flex items-center justify-between bg-transparent w-full">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={`${
              openMenu ? "/logoccompletoColor.png" : "/locoCCompletoBlanco.png"
            }`}
            className="h-80 lg:h-[28rem] w-auto origin-left object-contain"
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
          <button
            type="button"
            onClick={() => setIsMeetingOpen(true)}
            className="bg-[#b1757c] hover:bg-[#9d6169] w-48 h-12 text-center text-white font-chocobold rounded"
          >
              {t("carousel.slide1.button")}
          </button>
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
        <div className="lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto py-10 text-black bg-white">
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
                <span className="inline-flex items-center justify-center bg-black hover:bg-black/80 transition-all transform text-white w-52 h-12">
                  {t("navbar.contact")}
                </span>
              </a>
            </div>
            <div>
              <button
                type="button"
                onClick={() => {
                  setOpenMenu(false);
                  setIsMeetingOpen(true);
                }}
                className="bg-[#b1757c] hover:bg-[#9d6169] text-white w-52 h-12 rounded"
              >
                {t("carousel.slide1.button")}
              </button>
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

      {isMeetingOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true" aria-labelledby="meeting-title">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-2xl">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-sm uppercase tracking-wider text-[#b1757c]">Agenda</p>
                <h2 id="meeting-title" className="font-chocobold text-2xl text-gray-900">Agendá una reunión</h2>
              </div>
              <button type="button" onClick={() => setIsMeetingOpen(false)} aria-label="Cerrar ventana" className="text-2xl text-gray-500">×</button>
            </div>
            <form onSubmit={handleMeetingSubmit} className="space-y-4">
              <div>
                <label htmlFor="meeting-name" className="mb-1 block font-chocobold text-sm">Tu nombre</label>
                <input id="meeting-name" required minLength={2} value={meetingName} onChange={(event) => setMeetingName(event.target.value)} className="w-full rounded border border-gray-300 px-4 py-3 outline-none focus:border-[#b1757c]" placeholder="Tu nombre" />
              </div>
              <div>
                <label htmlFor="meeting-date" className="mb-1 block font-chocobold text-sm">Día de preferencia</label>
                <input id="meeting-date" required type="date" value={meetingDate} onChange={(event) => setMeetingDate(event.target.value)} className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-gray-900 color-scheme-light outline-none focus:border-[#b1757c]" />
              </div>
              <div>
                <label htmlFor="meeting-time" className="mb-1 block font-chocobold text-sm">Preferencia horaria</label>
                <select id="meeting-time" value={meetingTime} onChange={(event) => setMeetingTime(event.target.value)} className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-gray-900 color-scheme-light outline-none focus:border-[#b1757c]">
                  <option value="mañana">Mañana</option>
                  <option value="mediodía">Mediodía</option>
                  <option value="tarde">Tarde</option>
                  <option value="noche">Noche</option>
                </select>
              </div>
              <p className="text-sm text-gray-600">La fecha y el horario son una preferencia para coordinar disponibilidad, no una reserva confirmada.</p>
              <button type="submit" className="w-full rounded bg-[#b1757c] px-4 py-3 font-chocobold text-white hover:bg-[#9d6169]">Continuar a WhatsApp</button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
