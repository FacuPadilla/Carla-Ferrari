import {
  FaBehanceSquare,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer className=" rounded-lg shadow bg-primary mt-5 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="flex items-center justify-between">
            <a
              href=""
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl  whitespace-nowrap font-amsterdam">
                Carla Ferrari <br />
                <span className="text-xs font-Questrial">
                  Ad & marketing specialist
                </span>
              </span>
            </a>
            <ul className="flex flex-wrap  mb-6 text-sm   sm:mb-0 ">
              <li>
                <a
                  href="https://www.instagram.com/carferrari94"
                  className="me-8 md:me-10"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/carla_ferrari"
                  className="me-8 md:me-10 "
                >
                  <FaBehanceSquare className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/carla-ferrari-0b234220a/"
                  className="me-8 md:me-10"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:carferrari94@gmail.com"
                  className="me-8 md:me-10"
                >
                  <IoMdMail className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="https://wa.me/61400738349" className="">
                  <FaWhatsapp className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-black lg:my-8" />
          <span className="block text-sm  sm:text-center ">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Carla Ferrari
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
