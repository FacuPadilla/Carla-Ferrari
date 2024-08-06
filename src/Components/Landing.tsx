import { ImagesSlider } from "./ui/ImagesSlider";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Landing = () => {
  const [t] = useTranslation("global");

  const images = ["/brooke.jpg", "/banner2.jpg", "/vitaly.jpg"];
  return (
    <ImagesSlider className="h-[700px]" images={images} autoplay={true}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-10 flex flex-col justify-center items-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-7xl text-center bg-clip-text text-white py-4 px-2"
        >
          {t("carousel.slide1.title1")} <br /> {t("carousel.slide1.title2")}
        </motion.p>
        <motion.p className="font-light font-opensans  text-lg md:text-4xl text-center bg-clip-text text-white/90 py-4 px-5">
          {t("carousel.slide1.subtitle")}
        </motion.p>
        <a href="mailto:carferrari94@gmail.com">
          <button className="bg-[#f8c761] mt-10 hover:bg-[#f8c761]/90 w-56 h-12 text-center text-black font-bold">
            {t("carousel.slide1.button")}
          </button>
        </a>
      </motion.div>
    </ImagesSlider>
  );
};

export default Landing;
