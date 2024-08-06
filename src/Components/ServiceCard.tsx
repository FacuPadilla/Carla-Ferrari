const ServiceCard = ({ title, des }: { title: string; des: string }) => {
  return (
    <div className="my-5  text-center w-[300px] md:w-[400px]">
      <h1 className="text-3xl">{title}</h1>
      <div className="py-5">
        <p>{des}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
