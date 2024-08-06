import { useTranslation } from "react-i18next";
const Book = () => {
  const [t] = useTranslation("global");
  return (
    <div className="mt-32">
      <div id="book">
        <div className="md:grid md:gap-5 md:grid-cols-2 px-10">
          <div>
            <h1 className="lg:text-6xl text-5xl font-bold">
              {t("book.title")}
            </h1>
            <p className="lg:text-3xl text-2xl my-5">{t("book.content")}</p>
          </div>
          <div className="">
            <img src="/book.jpg" alt="" />
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Book;
