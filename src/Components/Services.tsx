import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
const Services = () => {
  const [t] = useTranslation("global");
  return (
    <div>
      <div id="services" className="relative w-full lg:h-[450px] h-[850px]">
        <img
          src="/service1.jpg"
          alt="Descripción de la imagen"
          className="object-cover w-full md:h-full h-[90%]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center h-[90%] md:h-full ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center "
          >
            <h1 className="text-white text-[30px] md:text-5xl lg:text-6xl my-10 px-10 font-bold text-center ">
              {t("services.intro")}
            </h1>
            <div className="flex items-center justify-center">
              <h2 className="text-white px-10  md:text-2xl text-xl  text-gray text-center ">
                {t("services.description")}
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex mt-10  items-center justify-center w-full">
        <div>
          <div className="flex mt-10 gap-x-10 flex-wrap items-center justify-center w-full">
            <div>
              <ServiceCard
                title={t("services.list.copywriting")}
                des={t("services.serviceDescription1")}
              />
            </div>
            <div>
              <ServiceCard
                title={t("services.list.project_management")}
                des={t("services.serviceDescription2")}
              />
            </div>
            <div>
              <ServiceCard
                title={t("services.list.communication_strategy")}
                des={t("services.serviceDescription3")}
              />
            </div>
            <div>
              <ServiceCard
                title={t("services.list.brand_identity")}
                des={t("services.serviceDescription4")}
              />
            </div>
            <div>
              <ServiceCard
                title={t("services.list.script_writing")}
                des={t("services.serviceDescription5")}
              />
            </div>
            <div>
              <ServiceCard
                title={t("services.list.social_media_content")}
                des={t("services.serviceDescription6")}
              />
            </div>
            <div>
              <ServiceCard
                title={t("services.list.seo_sem_writing")}
                des={t("services.serviceDescription7")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-black mt-12 hover:bg-black/80 transition-all transform  text-white   w-48 h-12"
        >
          {t("Empezar ahora")}
        </motion.button>
      </div>
    </div>
  );
};

export default Services;
