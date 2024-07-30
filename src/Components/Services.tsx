const Services = () => {
  return (
    <div id="services" className="relative w-full lg:h-[450px] h-[850px]">
      <img
        src="/work.jpg"
        alt="Descripción de la imagen"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0  bg-black bg-opacity-40 grid items-center">
        <div className="flex items-center justify-center">
          <h1 className="text-white text-2xl lg:text-4xl font-bold py-10 h-10 text-center ">
            ¿Querés comunicar tu producto, lanzar tu marca o destacar en el
            mercado?
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <h2 className="text-white mt-10 lg:mt-0 px-2 lg:text-xl text-lg text-gray text-center ">
            Conocé nuestros servicios y consultá por nuestros paquetes
            personalizados
          </h2>
        </div>
        <div className="lg:flex gap-10 items-center justify-center grid">
          <span className="bg-white/20 cursor-pointer hover:scale-105 transform transition-all  rounded p-3 border border-white/50 text-white  w-[350px] md:w-[330px] text-center">
            Redacción publicitaria
          </span>
          <span className="bg-white/20 hover:scale-105 transform cursor-pointer transition-all  rounded p-3 border border-white/50 text-white  w-[350px] md:w-[330px] text-center">
            Project management
          </span>
          <span className="bg-white/20 hover:scale-105 transform cursor-pointer transition-all  rounded p-3 border border-white/50 text-white  w-[350px] md:w-[330px] text-center">
            {" "}
            Estrategia de comunicación
          </span>
          <span className="bg-white/20 hover:scale-105 transform cursor-pointer transition-all  rounded p-3 border border-white/50 text-white  w-[350px] md:w-[330px] text-center">
            Identidad de marca
          </span>
        </div>
        <div className="lg:flex items-center justify-center grid gap-10 mt-5 md:mt-0">
          <span className="bg-white/20 hover:scale-105 transform cursor-pointer transition-all  rounded p-3 border border-white/50 text-white w-[350px] md:w-[330px] text-center">
            Redacción de guiones audiovisuales
          </span>
          <span className="bg-white/20 hover:scale-105 transform cursor-pointer transition-all  rounded p-3 border border-white/50 text-white  w-[350px] md:w-[330px] text-center">
            Creación de contenido en Redes sociales
          </span>
          <span className="bg-white/20 hover:scale-105 transform cursor-pointer transition-all  rounded p-3 border border-white/50 text-white  w-[350px] md:w-[330px] text-center">
            Redacción de textos SEO/SEM
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
