import CardProject from "./CardProject";
import { motion } from "framer-motion";

const CasosDeExito = () => {
  return (
    <motion.div
      className="py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex items-center justify-center">
        <h1 className="text-center text-5xl font-bold font-opensans" id="cases">
          Casos de exito
        </h1>
      </div>
      <div className="lg:flex lg:flex-wrap   my-10">
        <div className="lg:w-1/3">
          <CardProject
            title="Bodega Norton"
            text="Estrategia de Redes sociales
"
            img="/portfolio1.jpg"
            link="https://www.behance.net/gallery/148663751/Bodega-Norton-Social-media"
          />
        </div>
        <div className="lg:w-1/3">
          <CardProject
            title="Chicco"
            text="Un bebé lo cambia todo | Campaña publicitaria"
            img="/portfolio2.JPG"
            link="https://www.behance.net/gallery/147608179/Chicco-Campaign"
          />
        </div>
        <div className="lg:w-1/3">
          <CardProject
            title="Allergan"
            text=" Go for it | Campaña publicitaria"
            img="/portfolio3.JPG"
            link="https://www.behance.net/gallery/147506437/Allergan-Campaign"
          />
        </div>
        <div className="lg:w-1/3">
          <CardProject
            title="La Malbequería"
            text="Estrategia de Redes sociales"
            img="/portfolio4.JPG"
            link="https://www.behance.net/gallery/147510987/La-Malbequeria-Social-media"
          />
        </div>
        <div className="lg:w-1/3">
          {" "}
          <CardProject
            title="Lo De Jesús"
            text=" 66 fuegos | Campaña publicitaria"
            img="/portfolio5.JPG"
            link="https://www.behance.net/gallery/148733719/Lo-De-Jesus-Campaign"
          />
        </div>
        <div className="lg:w-1/3">
          <CardProject
            title="Coolsculpting"
            text="Sentite de 10, sentite Cool sculpting | Campaña publicitaria"
            img="/portfolio6.JPG"
            link="https://www.behance.net/gallery/147586873/Coolsculpting-Campaign"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CasosDeExito;
