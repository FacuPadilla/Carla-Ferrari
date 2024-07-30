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
    <article
      className="mx-auto w-[400px] shadow-xl h-96  bg-cover bg-no-repeat bg-center   transform duration-500 hover:-translate-y-2 cursor-pointer group my-10 lg:my-6 rounded-lg"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {" "}
      <a href={link}>
        <div className="bg-black bg-opacity-20 min-h-150 h-full px-10  pt-52 hover:bg-opacity-75 transform duration-300 rounded-lg">
          <h1 className="text-white text-3xl mb-5 transform translate-y-10 group-hover:-translate-y-20 duration-300">
            {title}
          </h1>
          <div className="w-16 h-2 bg-secondary rounded-full mb-5 transform translate-y-10 group-hover:translate-y-0 duration-300"></div>
          <p className="opacity-0 py-5  text-white text-xl group-hover:opacity-80 transform duration-500">
            {text}
          </p>
        </div>
      </a>
    </article>
  );
};

export default CardProject;
