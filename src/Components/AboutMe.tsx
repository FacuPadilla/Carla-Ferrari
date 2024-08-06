import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const [t] = useTranslation("global");
  return (
    <section className="bg-primary " id="about">
      <div className="md:grid md:grid-cols-2 py-20 justify-center lg:px-20 px-8 items-center">
        <div className="md:col-span-1 ">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font- font-opensans md:text-6xl xl:text-7xl hidden md:block "
            id="title1"
          >
            {t("about.title1")}
            <br /> {t("about.title2")}
            <br />
            {t("about.title3")}
          </motion.h1>
          <h1
            id="title"
            className="font-bold font-opensans text-5xl my-10  md:hidden"
          >
            {t("about.title4")}
            <br />
            {t("about.title3")}
          </h1>
          <div className="md:col-span-1 py-10 md:hidden ">
            <img
              src="aboutMe.jpg"
              alt=""
              className="w-full md:h-[550px] h-[350px]  object-cover"
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="py-10 "
          >
            {t("about.content")}
          </motion.p>
          <div className="w-full flex justify-center">
            <a
              href="
            https://www.linkedin.com/in/carla-ferrari-0b234220a/"
            >
              <motion.button
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-black hover:bg-black/80 transition-all transform  text-white   w-48 h-12"
              >
                {t("about.button")}
              </motion.button>
            </a>
          </div>
        </div>
        <div className="md:col-span-1 my-5 hidden md:block">
          <img
            src="aboutMe.jpg"
            alt=""
            className="w-full md:h-[550px] h-[350px]  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
