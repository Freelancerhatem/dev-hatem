import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import green from "../../assets/greenlogo.png";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isScroll, setScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [sectionOffsets, setSectionOffsets] = useState({});

  useEffect(() => {
    // Function to update section offsets
    const updateOffsets = () => {
      const offsets = {};
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const id = section.getAttribute("id");
        if (id) {
          offsets[id] = section.offsetTop;
        }
      });

      setSectionOffsets(offsets);
    };

    // Update offsets on mount and on window resize
    updateOffsets();
    window.addEventListener("resize", updateOffsets);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", updateOffsets);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      setScroll(scrollValue > 0);

      // Determine the active section based on scroll position
      let currentSection = "home";
      for (const [section, offset] of Object.entries(sectionOffsets)) {
        if (scrollValue < offset + window.innerHeight / 2) {
          currentSection = section;
          break;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionOffsets]);

  // Handle swipe to open/close mobile menu
  useEffect(() => {
    const handleSwipe = (event) => {
      if (event.touches[0].clientX < 50 && !isOpen) {
        setIsOpen(true);
      } else if (event.touches[0].clientX > window.innerWidth - 50 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("touchstart", handleSwipe);

    return () => {
      window.removeEventListener("touchstart", handleSwipe);
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed w-full top-0 left-0 right-0 px-4 py-3 z-30 transition-all duration-300 ease-in-out ${
        isScroll
          ? "bg-green-400 text-white shadow-lg"
          : "bg-transparent text-green-400"
      } flex items-center justify-between`}
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          className="w-32 lg:w-36"
          src={isScroll ? logo : green}
          alt="Logo"
        />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden relative  flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
          className="text-3xl"
        >
          {isOpen ? (
            <MdClose className="absolute left-0" />
          ) : (
            <GiHamburgerMenu />
          )}
        </button>
      </div>

      {/* Drawer Menu for Mobile */}
      <div
        className={`fixed  inset-0 bg-green-400  z-40 transform ${
          isOpen ? "translate-x-20" : "translate-x-full"
        } transition-transform duration-300 lg:hidden`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 left-4 text-3xl text-white z-50"
          aria-label="Close Navigation"
        >
          <MdClose />
        </button>

        {/* Menu Items */}
        <div className="flex flex-col items-center h-full space-y-4 mt-12">
          {Object.keys(sectionOffsets).map((name) => (
            <Link
              key={name}
              to={name}
              smooth={true}
              duration={300}
              offset={-70}
              className={`  ${
                activeSection === name
                  ? "text-white border-b-2 border-white"
                  : "text-gray-300"
              } hover:text-white transition-colors`}
              onClick={() => setIsOpen(false)} // Close menu on mobile after selection
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Link>
          ))}
          <div className="">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1d-wfV1gshJkmS3KQ6Y35rJKue7uqqRXq/view?usp=sharing"
              rel="noopener noreferrer"
            >
              <button
                className={`px-4 py-2 rounded-full text-md  transition-colors 
                  bg-white text-green-400 hover:text-black
                    `}
              >
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Links for Desktop */}
      <nav
        className={`hidden lg:flex lg:items-center lg:gap-8 flex-grow lg:flex-grow-0 ${
          isOpen ? "block" : "hidden"
        } transition-transform duration-300`}
      >
        {Object.keys(sectionOffsets).map((name) => (
          <Link
            key={name}
            to={name}
            smooth={true}
            duration={300}
            offset={-70}
            className={`text-lg font-medium py-2 ${
              activeSection === name ? "border-b-2 border-white" : ""
            } hover:text-gray-300 transition-colors`}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Link>
        ))}
      </nav>

      {/* Resume Button */}
      <div className="hidden lg:flex">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1d-wfV1gshJkmS3KQ6Y35rJKue7uqqRXq/view?usp=sharing"
          rel="noopener noreferrer"
        >
          <button
            className={`px-4 py-2 rounded-full text-md  transition-colors ${
              isScroll
                ? "bg-white text-green-400 hover:text-black"
                : "border border-green-400 text-green-400 hover:bg-green-400 hover:text-white"
            }`}
          >
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
