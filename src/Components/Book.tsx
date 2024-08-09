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
            <h1 className="lg:text-6xl font-chocobold text-5xl font-bold">
              {t("book.title")} <br />
              {t("book.title1")}
            </h1>
            <p className="lg:text-3xl text-2xl my-5">{t("book.content")}</p>
          </div>
          <div className="">
            <img src="/book.jpg" alt="" className="w-[700px] h-[600px]" />
          </div>
        </div>
      </div>
      ;
    </motion.div>
  );
};

export default Book;
