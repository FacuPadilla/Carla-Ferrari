import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="bg-primary " id="about">
      <motion.div
        className="md:grid md:grid-cols-2 py-20 justify-center lg:px-20 px-8 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="md:col-span-1 ">
          <h1 className="font-bold text-6xl hidden md:block" id="title1">
            Apostar a calidad <br /> y experiencia,
            <br />
            marca la diferencia.
          </h1>
          <h1 id="title" className="font-bold text-5xl  md:hidden">
            Apostar a calidad y experiencia,
            <br />
            marca la diferencia.
          </h1>
          <p className="py-10 font-light">
            Con más de 10 años de experiencia en la industria, he trabajado en
            agencias de publicidad y empresas para diversas marcas y rubros en
            Argentina, España e Irlanda. Desde emprendimientos con bajo
            presupuesto hasta empresas posicionadas en el mercado, he logrado
            hacer crecer cada negocio de forma eficiente, posicionando la marca
            y fidelizando clientes. Soy una profesional apasionada y detallista
            que le da un valor agregado a cada proyecto. ¿Empezamos?
          </p>
          <div className="w-full flex justify-center">
            <a
              href="
            https://www.linkedin.com/in/carla-ferrari-0b234220a/"
            >
              <button className="bg-black hover:scale-105 transition-all transform  text-white border rounded-md w-40 h-10">
                Mas de mi
              </button>
            </a>
          </div>
        </div>
        <div className="md:col-span-1 my-5">
          <img
            src="aboutMe.jpg"
            alt=""
            className="w-full md:h-[550px] h-[350px]  object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
