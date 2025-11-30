import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import PlanCard from "./PlanCard";

const Plans = () => {
  const [t] = useTranslation("global");

  return (
    <div>
      <div id="plans" className="w-full">
        {/* Imagen sin texto superpuesto */}
        <div className="relative w-full lg:h-[450px] h-[400px]">
          <img
            src="/service1.jpg"
            alt="Descripción de la imagen"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Titular debajo de la foto */}
        <div className="flex items-center justify-center py-16 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto px-10"
          >
            <h1 className="text-[#b1757c] font-chocobold text-4xl md:text-5xl lg:text-6xl mb-6 font-bold">
              {t("plans.hero.title")}
            </h1>
            <div className="flex items-center justify-center">
              <h2 className="text-gray-700 font-chocoreg md:text-2xl text-xl text-center">
                {t("plans.hero.subtitle")}
              </h2>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex mt-10 items-center justify-center w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">
            {/* Plan 1 */}
            <PlanCard
              planNumber="1"
              title={t("plans.plan1.title")}
              subtitle={t("plans.plan1.subtitle")}
              description={t("plans.plan1.description")}
              forWho={[
                t("plans.plan1.forWho.item1"),
                t("plans.plan1.forWho.item2"),
                t("plans.plan1.forWho.item3"),
              ]}
              includes={[
                t("plans.plan1.includes.item1"),
                t("plans.plan1.includes.item2"),
                t("plans.plan1.includes.item3"),
              ]}
              modality={t("plans.plan1.modality")}
              pricing={t("plans.plan1.pricing")}
              extra={t("plans.plan1.extra")}
            />

            {/* Plan 2 */}
            <PlanCard
              planNumber="2"
              title={t("plans.plan2.title")}
              subtitle={t("plans.plan2.subtitle")}
              description={t("plans.plan2.description")}
              forWho={[
                t("plans.plan2.forWho.item1"),
                t("plans.plan2.forWho.item2"),
                t("plans.plan2.forWho.item3"),
              ]}
              includes={[
                t("plans.plan2.includes.item1"),
                t("plans.plan2.includes.item2"),
                t("plans.plan2.includes.item3"),
                t("plans.plan2.includes.item4"),
                t("plans.plan2.includes.item5"),
              ]}
              modality={t("plans.plan2.modality")}
              pricing={t("plans.plan2.pricing")}
              extra={t("plans.plan2.extra")}
            />

            {/* Plan 3 */}
            <PlanCard
              planNumber="3"
              title={t("plans.plan3.title")}
              subtitle={t("plans.plan3.subtitle")}
              description={t("plans.plan3.description")}
              forWho={[
                t("plans.plan3.forWho.item1"),
                t("plans.plan3.forWho.item2"),
                t("plans.plan3.forWho.item3"),
              ]}
              includes={[
                t("plans.plan3.includes.item1"),
                t("plans.plan3.includes.item2"),
              ]}
              topics={[
                t("plans.plan3.topics.item1"),
                t("plans.plan3.topics.item2"),
                t("plans.plan3.topics.item3"),
                t("plans.plan3.topics.item4"),
                t("plans.plan3.topics.item5"),
                t("plans.plan3.topics.item6"),
              ]}
              modality={t("plans.plan3.modality")}
              pricing={t("plans.plan3.pricing")}
              extra={t("plans.plan3.extra")}
            />
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center p-12">
        <h3 className="text-2xl font-chocobold mb-4">
          {t("plans.cta.question")}
        </h3>
        <p className="text-lg font-chocoreg mb-8">{t("plans.cta.answer")}</p>
        <a href="mailto:info@carlaferrari.net">
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-[#b1757c] hover:bg-[#9d6169] rounded font-chocobold transition-all transform text-white w-48 h-12"
          >
            {t("plans.cta.button")}
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default Plans;
