import { useTranslation } from "react-i18next";
const Contact = () => {
  const [t] = useTranslation("global");
  return (
    <div className="relative" id="contact">
      <img
        src="/contact2.jpg"
        alt=""
        className="object-cover h-[450px] w-full "
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="md:text-7xl font-chocobold text-4xl font-bold">
            {t("contact.intro")} <br />
            {t("contact.intro1")}
          </h1>
          <p className="mt-5 md:text-2xl text-lg">
            {t("contact.call_to_action")}
          </p>
          <a href="mailto:carferrari94@gmail.com">
            <button className="mt-5 bg-[#f8c761]  hover:bg-[#f8c761]/90 w-48 h-12 text-center text-black font-bold">
              {t("contact.boton")}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
