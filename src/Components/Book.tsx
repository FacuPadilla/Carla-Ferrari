import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Book = () => {
  const [t] = useTranslation("global");
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="mt-32"
    >
      <div id="book">
        <div className="md:grid md:gap-5 md:grid-cols-2 px-10">
          <div>
            {/* Pequeño texto arriba del título */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-chocobold text-sm tracking-wider uppercase mb-4 text-[#b1757c]"
            >
              {t("book.sectionTitle")}
            </motion.p>

            <h1 className="lg:text-6xl text-[#b1757c] font-chocobold text-5xl font-bold mb-6">
              {t("book.title")} <br />
              {t("book.title1")}
            </h1>

            {/* Descripción del libro */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-6"
            >
              <p className="text-gray-700 font-chocoreg text-lg mb-4">
                <span className="mr-2">📖</span>
                {t("book.description")}
              </p>

              <p className="text-gray-700 font-chocoreg text-lg mb-4">
                {t("book.origin")}
              </p>

              <p className="text-gray-700 font-chocoreg text-lg mb-4">
                {t("book.about")}
              </p>

              <p className="text-gray-700 font-chocoreg text-lg mb-6">
                {t("book.reach")}
              </p>
            </motion.div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p className="text-[#b1757c] font-chocobold text-xl mb-4">
                <span className="mr-2">🛒</span>
                {t("book.cta")}
              </p>

              {/* Nota solo en inglés */}
              {t("book.note") && (
                <p className="text-gray-600 font-chocoreg text-sm italic mb-4">
                  {t("book.note")}
                </p>
              )}

              <a
                href={t("book.amazonLink")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-[#b1757c] hover:bg-[#9d6169] transition-all text-white font-chocobold py-3 px-8 rounded">
                  {t("book.buttonText")}
                </button>
              </a>
            </motion.div>
          </div>

          <div className="mt-8 md:mt-0">
            <a
              href={t("book.amazonLink")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                src="/booknew.jpg"
                alt="Libro Destrucción es una forma de creación"
                className="md:w-[700px] md:h-[720px] w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Book;
