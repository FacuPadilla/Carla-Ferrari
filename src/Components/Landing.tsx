import { ImagesSlider } from "./ui/ImagesSlider";
import { motion } from "framer-motion";

const Landing = () => {
  const images = [
    "../../public/brooke.jpg",
    "../../public/lous.jpg",
    "../../public/vitaly.jpg",
  ];
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
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold  text-3xl md:text-6xl text-center bg-clip-text text-white py-4 px-2">
          Las ideas poderosas pueden cambiar el mundo.
        </motion.p>
        <motion.p className="font-bold  text-lg md:text-4xl text-center bg-clip-text text-white/90 py-4 px-5">
          Llevá tu negocio al siguiente nivel.
        </motion.p>
        <a href="mailto:carferrari94@gmail.com">
          <a
            href="mailto:carferrari94@gmail.com"
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 mt-10 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-primary rounded-full shadow-md group w-[200px]"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-primary duration-300 -translate-x-full bg-black/50 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease text-center">
              Agenda una reunion
            </span>
            <span className="relative invisible">Button Text</span>
          </a>
        </a>
      </motion.div>
    </ImagesSlider>
  );
};

export default Landing;
