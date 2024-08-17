import TypedTextComponent from "../TypeText/TypedTextComponent";
import img from "../../assets/1.png";

const Banner = () => {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-[#000000d2] to-purple-200 opacity-80 z-10"></div>

      {/* Main Banner Content */}
      <div
        className="relative w-full h-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="text-center text-white px-4 lg:px-8 py-6 lg:py-12 max-w-lg lg:max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 animate-text">
              Hello, I am <span className="text-green-400">Hatem</span>
            </h1>
            <TypedTextComponent />
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-green-400 text-white  text-lg rounded-full shadow-lg hover:bg-green-400 transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
