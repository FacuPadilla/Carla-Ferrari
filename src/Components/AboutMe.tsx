import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const AboutMe = () => {
  const [t] = useTranslation("global");
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  return (
    <section className=" " id="about">
      <div className="md:grid md:grid-cols-2 py-20 justify-center lg:px-20 px-8 items-center gap-x-10 text-[#ae8871]">
        <div className="md:col-span-1 ">
          {/* Pequeño texto arriba del título - versión desktop */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-chocobold text-sm tracking-wider uppercase mb-4 hidden md:block"
          >
            {t("about.info")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font- font-chocobold md:text-6xl xl:text-6xl hidden md:block text-left"
            id="title1"
          >
            {t("about.title1")}
          </motion.h1>

          {/* Pequeño texto arriba del título - versión mobile */}
          <p className="font-chocobold text-sm tracking-wider uppercase mb-4 md:hidden">
            Nosotros |
          </p>

          <h1
            id="title"
            className="font-bold font-opensans text-5xl my-10  md:hidden"
          >
            {t("about.title1")}
          </h1>

          <div className="md:col-span-1 py-10 md:hidden ">
            <img
              src="/about.jpg"
              alt=""
              className="w-full md:h-[550px] h-[450px]  object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="py-10 font-chocoreg text-lg"
          >
            <p>{t("about.content1")} </p> <br />
            <p>{t("about.content2")}</p>
            <br />
            <p>{t("about.content3")}</p> <br />
            <p> {t("about.content4")}</p>
          </motion.div>

          <div className="w-full flex justify-center">
              <motion.button
                type="button"
                onClick={() => setIsSocialOpen(true)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-[#b1757c] hover:bg-[#9d6169] font-chocobold transition-all transform  text-white   w-48 h-12"
              >
                {t("about.button")}
              </motion.button>
          </div>
        </div>

        <div className="md:col-span-1 my-5 hidden md:block">
          <img
            src="/about.jpg"
            alt=""
            className="w-full md:h-[700px] h-[350px] p-10  object-cover"
          />
        </div>
      </div>
      {isSocialOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true" aria-labelledby="social-title">
          <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-2xl">
            <div className="mb-6 flex items-start justify-between">
              <h2 id="social-title" className="font-chocobold text-2xl text-[#b1757c]">Más de mí</h2>
              <button type="button" onClick={() => setIsSocialOpen(false)} aria-label="Cerrar redes sociales" className="text-2xl text-gray-500">×</button>
            </div>
            <div className="grid gap-3">
              <a href="https://www.linkedin.com/in/carla-ferrari-0b234220a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded bg-[#b1757c] px-4 py-3 font-chocobold text-white hover:bg-[#9d6169]">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://www.instagram.com/communicationco/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded bg-[#b1757c] px-4 py-3 font-chocobold text-white hover:bg-[#9d6169]">
                <FaInstagram /> Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutMe;
