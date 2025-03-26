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
            <h1 className="lg:text-6xl text-[#b1757c]  font-chocobold text-5xl font-bold">
              {t("book.title")} <br />
              {t("book.title1")}
            </h1>
            <p className="lg:text-3xl text-2xl my-5 text-[#b1757c] ">
              {t("book.content")}
            </p>
          </div>
          <div className="">
            <a href="https://a.co/d/6y8uyd3">
              <img
                src="/booknew.jpg"
                alt="Libro"
                className="md:w-[700px] md:h-[720px] w-full h-auto object-cover "
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
      ;
    </motion.div>
  );
};

export default Book;
