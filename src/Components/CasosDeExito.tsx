import CardProject from "./CardProject";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CasosDeExito = () => {
  const [t] = useTranslation("global");
  return (
    <motion.div
      className="py-10 mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="cases"
    >
      <div className="text-[#ae8871]">
        <h1 className="text-left px-14 text-5xl lg:text-7xl font-bold font-opensans">
          {t("portfolio.title")}
        </h1>
        <h1 className="text-left px-14 text-5xl lg:text-7xl font-bold font-opensans">
          {t("portfolio.title2")}
        </h1>
        <h2 className="text-left px-14 py-5 text-2xl lg:text-3xl">
          {t("portfolio.subtitle")}
        </h2>
      </div>
      <div className="lg:flex lg:flex-wrap   my-10">
        <div className="lg:w-1/3">
          <CardProject
            title="Bodega Norton"
            text={t("portfolio.project1.description")}
            img="/portfolio1.jpg"
            link="https://www.behance.net/gallery/148663751/Bodega-Norton-Social-media"
          />
        </div>
        <div className="lg:w-1/3">
          <CardProject
            title="Chicco"
            text={t("portfolio.project2.description")}
            img="/10.jpg"
            link="https://www.behance.net/gallery/147608179/Chicco-Campaign"
          />
        </div>
        <div className="lg:w-1/3">
          <CardProject
            title="Allergan"
            text={t("portfolio.project3.description")}
            img="/portfolio3.JPG"
            link="https://www.behance.net/gallery/147506437/Allergan-Campaign"
          />
        </div>
        <div className="lg:w-1/3">
          <CardProject
            title="La Malbequería"
            text={t("portfolio.project4.description")}
            img="/11.jpg"
            link="https://www.behance.net/gallery/147510987/La-Malbequeria-Social-media"
          />
        </div>
        <div className="lg:w-1/3">
          {" "}
          <CardProject
            title="Lo De Jesús"
            text={t("portfolio.project5.description")}
            img="/12.jpg"
            link="https://www.behance.net/gallery/148733719/Lo-De-Jesus-Campaign"
          />
        </div>
        <div className="lg:w-1/3">
          <CardProject
            title="Coolsculpting"
            text={t("portfolio.project6.description")}
            img="/portfolio6.JPG"
            link="https://www.behance.net/gallery/147586873/Coolsculpting-Campaign"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CasosDeExito;
