import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Contact = () => {
  const [t] = useTranslation("global");
  const whatsappUrl = `https://wa.me/5491138201129`;
  return (
    <div id="contact">
      {/* Imagen sin texto superpuesto */}
      <div className="relative w-full h-[450px]">
        <img
          src="/contact2.jpg"
          alt="Contact"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Contenido debajo de la imagen */}
      <div className="flex items-center justify-center py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto px-10"
        >
          <h1 className="text-[#b1757c] font-chocobold text-4xl md:text-6xl lg:text-7xl mb-6 font-bold">
            {t("contact.intro")} <br />
            {t("contact.intro1")}
          </h1>
          <p className="mt-5 md:text-2xl text-lg text-gray-700 font-chocoreg mb-8">
            {t("contact.call_to_action")}
          </p>
          <a href={whatsappUrl}>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="bg-[#b1757c] hover:bg-[#9d6169] transition-all transform hover:scale-105 w-48 h-12 text-center text-white font-chocobold rounded"
            >
              {t("contact.boton")}
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
