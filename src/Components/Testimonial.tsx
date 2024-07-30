import { TestiCard } from "./TestiCard";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <motion.div
      className="px-10 my-10"
      id="testimonials"
      initial={{ opacity: 0, scale: 0.5 }} // Empieza oculto y con escala reducida
      whileInView={{ opacity: 1, scale: 1 }} // Aparece y escala a su tamaño original
      transition={{ duration: 1 }}
    >
      {/* <h1 className="text-center text-5xl font-bold  py-10">Testimonios</h1>
      <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
        <figure className="flex flex-col items-center justify-center p-8 text-center  border-b border-black rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e bg-secondary opacity-90 ">
          <blockquote className="max-w-2xl mx-auto mb-4 text-black lg:mb-8 ">
            <h3 className="text-lg font-semibold text-black">
              Very easy this was to integrate
            </h3>
            <p className="my-4">
              "Fue un placer trabajar con Carli. Además de una gran persona, es
              una gran profesional. Llevó adelante cada desafío con dedicación y
              responsabilidad, siempre atenta al más mínimo detalle. Destaco su
              creatividad y energía positiva para trabajar. Sus aportes eran
              siempre acertados y fueron claves para el éxito de muchas campañas
              publicitarias."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <img
              className="rounded-full w-20 h-20"
              src="/testimonio1.jpg"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium text-black text-left rtl:text-right ms-3">
              <div>Ana, 32</div>
              <div className="text-sm text-black ">
                Gerenta de Marketing | WeWork
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-secondary opacity-90 border-b border-black md:rounded-se-lg ">
          <blockquote className="max-w-2xl mx-auto mb-4 text-black lg:mb-8 ">
            <h3 className="text-lg font-semibold text-black ">
              Solid foundation for any project
            </h3>
            <p className="my-4">
              "Trabajar con Carli es un gusto enorme. Es una persona sumamente
              creativa y encara los proyectos con la mejor predisposición,
              entendiendo y resolviendo los pedidos y necesidades del cliente. A
              nivel personal siempre está dispuesta a ayudar y trasmite la mejor
              energía."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <img
              className="rounded-full w-20 h-20"
              src="/testimonio2.jpg"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
              <div>Lucía, 31</div>
              <div className="text-sm text-black ">
                Supervisora de cuentas | The community
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center  border-b border-black md:rounded-es-lg md:border-b-0 md:border-e bg-secondary opacity-90">
          <blockquote className="max-w-2xl mx-auto mb-4 text-black lg:mb-8 ">
            <h3 className="text-lg font-semibold text-black">
              Mindblowing workflow
            </h3>
            <p className="my-4">
              "Trabajar con Carla es hacerlo con una persona que ama lo que
              hace. Siempre dispuesta a trabajar en equipo, aportando
              creatividad, organización y compromiso, con una energía que se
              contagia. Espero podamos volver a trabajar juntos pronto!"
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <img
              className="rounded-full w-20 h-20"
              src="testimonio3.jpg"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium text-black text-left rtl:text-right ms-3">
              <div>Facundo, 33</div>
              <div className="text-sm text-black">
                Desarrollador web | Montagne
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center  border-black rounded-b-lg md:rounded-se-lg bg-secondary opacity-90">
          <blockquote className="max-w-2xl mx-auto mb-4 text-black">
            <h3 className="text-lg font-semibold text-black">
              Efficient Collaborating
            </h3>
            <p className="my-4">
              "Trabajamos juntas y puedo asegurar que es una gran profesional.
              Responsable, buena compañera, resolutiva y sobretodo apasionada
              por lo que hace. Todo eso hace que sea un gusto trabajar con
              ella."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <img
              className="rounded-full w-20 h-20"
              src="testimonio4.jpg"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium text-black text-left rtl:text-right ms-3">
              <div>Brenda, 26</div>
              <div className="text-sm text-black">
                Diseñadora gráfica | Alma Buenos Aires
              </div>
            </div>
          </figcaption>
        </figure>
      </div> */}
      <h1 className="text-center text-5xl font-bold  py-10">Testimonios</h1>
      <div className="flex flex-wrap gap-5 items-center justify-center">
        <TestiCard
          title="Ana, 32"
          img="/testimonio1.jpg"
          subtitle="Gerenta de Marketing | WeWork"
          text="Fue un placer trabajar con Carli. Además de una gran persona, es una gran profesional. Llevó adelante cada desafío con dedicación y responsabilidad, siempre atenta al más mínimo detalle. Destaco su creatividad y energía positiva para trabajar. Sus aportes eran siempre acertados y fueron claves para el éxito de muchas campañas publicitarias."
        />
        <TestiCard
          title="Lucia, 31"
          img="/testimonio2.jpg"
          subtitle="Supervisora de cuentas | The community"
          text="Trabajar con Carli es un gusto enorme. Es una persona sumamente creativa y encara los proyectos con la mejor predisposición, entendiendo y resolviendo los pedidos y necesidades del cliente. A nivel personal siempre está dispuesta a ayudar y trasmite la mejor energía."
        />
        <TestiCard
          title="Facundo, 33"
          img="/testimonio3.jpg"
          subtitle="Desarrollador web | Montagne"
          text="Trabajar con Carla es hacerlo con una persona que ama lo que hace. Siempre dispuesta a trabajar en equipo, aportando creatividad, organización y compromiso, con una energía que se contagia. Espero podamos volver a trabajar juntos pronto!"
        />
        <TestiCard
          title="Brenda, 26"
          img="/testimonio4.jpg"
          subtitle="Diseñadora gráfica | Alma Buenos Aires"
          text="Trabajamos juntas y puedo asegurar que es una gran profesional. Responsable, buena compañera, resolutiva y sobretodo apasionada por lo que hace. Todo eso hace que sea un gusto trabajar con ella."
        />
      </div>
    </motion.div>
  );
};

export default Testimonial;
