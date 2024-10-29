const CardProject = ({
  title,
  text,
  img,
  link,
}: {
  title: string;
  text: string;
  img: string;
  link: string;
}) => {
  return (
    <article className="mx-auto w-[370px] md:w-[400px] shadow-xl h-[450px] transform duration-500 hover:-translate-y-2 cursor-pointer group my-10 lg:my-6">
      <a href={link}>
        <div className="relative h-full">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover" // Asegura que la imagen no se recorte ni distorsione
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 px-10 pt-52 hover:bg-opacity-75 transform duration-300">
            <h1 className="text-white text-3xl mb-8 transform translate-y-10 group-hover:-translate-y-20 duration-300">
              {title}
            </h1>
            <div className="w-16 h-2 bg-[#f8c761] rounded-full mb-8 transform translate-y-10 group-hover:translate-y-0 duration-300"></div>
            <p className="opacity-0 py-5 font-chocoreg text-white text-xl group-hover:opacity-80 transform duration-500">
              {text}
            </p>
          </div>
        </div>
      </a>
    </article>
  );
};

export default CardProject;
