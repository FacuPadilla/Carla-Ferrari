import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const TrabajaConNosotros = () => {
  const [t] = useTranslation("global");
  const mailUrl = `mailto:carferrari94@gmail.com`;

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
          <a href={mailUrl}>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="bg-[#b1757c] hover:bg-[#9d6169] transition-all transform hover:scale-105 w-48 h-12 text-center text-white font-chocobold rounded"
            >
              {t("workWithUs.button")}
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default TrabajaConNosotros;
