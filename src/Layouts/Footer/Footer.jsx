import logo from "../../assets/logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer lg:p-14 p-6 bg-green-400 text-neutral-content">
      <div className="max-w-full mx-auto  flex flex-col justify-center items-center">
        <aside className="flex flex-col justify-center items-center">
          <img className="lg:w-44 w-20 " src={logo} alt="" />
          <p className=" text-white font-font2">
            All Rights Reserved By MD HATEM
          </p>
        </aside>
        <nav className="flex flex-col justify-center items-center">
          <header className="text-white text-base mb-1 underline underline-offset-4 ">
            Social Links
          </header>
          <div className="grid grid-flow-col gap-4">
            <a
              className="text-2xl text-white"
              href="https://www.linkedin.com/in/md-hatem-tai/"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="text-2xl text-white"
              href="https://www.facebook.com/hatem.flower.t"
            >
              <FaFacebookSquare />
            </a>
            <a
              className="text-2xl text-white"
              href="https://twitter.com/Hatem5373"
            >
              <FaTwitterSquare />
            </a>
            <a
              className="text-2xl text-white"
              href="https://www.instagram.com/delta_grapix"
            >
              <RiInstagramFill />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
