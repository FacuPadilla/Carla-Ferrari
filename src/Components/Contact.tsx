const Contact = () => {
  return (
    <div className="relative" id="contact">
      <img
        src="/contact.jpg"
        alt=""
        className="object-cover h-[450px] w-full "
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="md:text-7xl text-4xl font-bold">
            Un producto bien comunicado es una nueva venta.
          </h1>
          <p className="mt-5 md:text-2xl text-lg">
            Contactame hoy y agendemos una meeting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
