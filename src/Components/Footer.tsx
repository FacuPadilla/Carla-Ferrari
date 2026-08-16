import {
  FaBehanceSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useState } from "react";
import LegalModal from "./LegalModal";

const Footer = () => {
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  return (
    <div>
      <footer className="mt-5 rounded-lg shadow footer-text-shimmer">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
            <div className="flex items-center justify-center lg:justify-self-start">
              <img src="/logoccColor.png" alt="" className="md:h-48 h-40" />
            </div>
            <span className="order-3 text-center text-sm lg:order-none">
              Copyright {new Date().getFullYear()} Communication Co. {" "}
              <button type="button" onClick={() => setIsLegalOpen(true)} className="hover:underline">
                Todos los derechos reservados.
              </button>
            </span>
            <ul className="order-2 grid grid-cols-2 justify-self-center gap-x-7 gap-y-5 text-[#b1757c] lg:order-none lg:justify-self-end">
              <li>
                <a
                  href="https://www.instagram.com/communicationco/?igsh=MW16aWJhdm1peWZqag%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir Instagram de Communication Co."
                >
                  <FaInstagram className="w-7 h-7" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/carla_ferrari"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir Behance de Carla Ferrari"
                >
                  <FaBehanceSquare className="w-7 h-7" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/carla-ferrari-0b234220a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir LinkedIn de Carla Ferrari"
                >
                  <FaLinkedin className="w-7 h-7" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5491138201129?text=Hola%2C%20quiero%20hacer%20una%20consulta%20general."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactar por WhatsApp"
                >
                  <IoMdMail className="w-7 h-7" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <LegalModal isOpen={isLegalOpen} onClose={() => setIsLegalOpen(false)} />
    </div>
  );
};

export default Footer;
