export const TestiCard = ({
  img,
  title,
  subtitle,
  text,
}: {
  img: string;
  title: string;
  subtitle: string;
  text: string;
}) => {
  return (
    <div>
      <div className="bg-secondary lg:w-[700px] md:w-[600px] md:h-[250px] lg:h-[200px] w-[400px] border rounded-xl shadow-sm opacity-80 hover:scale-105 hover:opacity-100 transition-all transform">
        <div className="w-full md:grid px-5 md:grid-cols-4 items-center ">
          <div className="flex justify-center my-2">
            <img src={img} alt="" className="rounded-full w-32 h-32" />
          </div>
          <div className="col-span-3 my-4">
            <h1 className="font-bold md:text-2xl my-1 text-center">{title}</h1>
            <h2 className="md:text-lg text-md text-center">{subtitle}</h2>
            <p className="md:text-sm text-xs my-2 text-center">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
