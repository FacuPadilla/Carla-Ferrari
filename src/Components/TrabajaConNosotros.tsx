import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import WhatsAppLeadModal from "./WhatsAppLeadModal";

const TrabajaConNosotros = () => {
  const [t] = useTranslation("global");
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  return (
    <div id="trabaja-con-nosotros">
      {/* Contenido debajo de la imagen */}
      <div className="flex items-center justify-center py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto px-10"
        >
          <h1 className="text-[#b1757c] font-chocobold text-4xl md:text-6xl lg:text-7xl mb-6 font-bold">
            {t("workWithUs.title")}
          </h1>
          <p className="mt-5 md:text-lg text-base text-gray-700 font-chocoreg mb-6">
            {t("workWithUs.content1")}
          </p>
          <p className="md:text-lg text-base text-gray-700 font-chocoreg mb-8">
            {t("workWithUs.content2")}
          </p>
          <motion.button
              type="button"
              onClick={() => setIsWhatsAppOpen(true)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="bg-[#b1757c] hover:bg-[#9d6169] transition-all transform hover:scale-105 w-48 h-12 text-center text-white font-chocobold rounded"
            >
              {t("workWithUs.button")}
            </motion.button>
        </motion.div>
      </div>
      <WhatsAppLeadModal
        isOpen={isWhatsAppOpen}
        title="Trabajar con nosotros"
        context="charlar sobre una propuesta de trabajo"
        onClose={() => setIsWhatsAppOpen(false)}
      />
    </div>
  );
};

export default TrabajaConNosotros;
