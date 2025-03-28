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
    <div className="">
      <a
        href="https://www.linkedin.com/in/carla-ferrari-0b234220a/details/recommendations/?detailScreenTabIndex=0
      "
      >
        <div className="bg-transparent h-[540px]  w-[500px] md:px-0 px-12 hover:scale-105 transform transition-all">
          <div className="flex justify-between py-5 px-10 ">
            <h1 className="font-bold text-lg">{title}</h1>
            <h2 className="text-xs">{subtitle}</h2>
          </div>
          <div className="w-full">
            <img src={img} alt="" className="w-full md:h-[350px] px-10 " />
          </div>

          <p className=" py-5 md:py-10 md:px-5 px-10 text-center text-sm md:text-normal">
            "{text}"
          </p>
        </div>
      </a>
    </div>
  );
};
