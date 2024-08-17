/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiRedux, SiTypescript, SiNextdotjs } from "react-icons/si";
import img from "../../assets/abt.png";

const About = () => {
  const [active, setActive] = useState("skills");

  return (
    <section id="about" className="p-6 lg:p-12  text-gray-800">
      <div className="lg:flex lg:justify-between lg:gap-8">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-start mb-6 lg:mb-0 lg:w-1/2">
          <img
            className="w-64 lg:w-96 rounded-xl  transform transition-transform hover:scale-105"
            src={img}
            alt="About Me"
          />
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-8">
            Hello, I'm a Full Stack Developer
          </h2>

          <div className="flex gap-4 mb-8 border-b-2 border-gray-300">
            <button
              onClick={() => setActive("skills")}
              className={`tab-button ${
                active === "skills" ? "text-blue-500 border-blue-500" : ""
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActive("edu")}
              className={`tab-button ${
                active === "edu" ? "text-blue-500 border-blue-500" : ""
              }`}
            >
              Education
            </button>
          </div>

          {/* Content Display */}
          <div>
            {active === "skills" && (
              <div>
                <h3 className="text-2xl  mb-4">Technical Skills</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                  <div className="flex flex-col items-center">
                    <FaReact className="text-4xl mb-2 text-blue-600 transition-transform transform hover:scale-110" />
                    <span className="text-center">React</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiTypescript className="text-4xl mb-2 text-blue-500 transition-transform transform hover:scale-110" />
                    <span className="text-center">TypeScript</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiRedux className="text-4xl mb-2 text-purple-600 transition-transform transform hover:scale-110" />
                    <span className="text-center">Redux</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaNodeJs className="text-4xl mb-2 text-green-400 transition-transform transform hover:scale-110" />
                    <span className="text-center">Node.js</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaDatabase className="text-4xl mb-2 text-gray-800 transition-transform transform hover:scale-110" />
                    <span className="text-center">MongoDB</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiNextdotjs className="text-4xl mb-2 text-black transition-transform transform hover:scale-110" />
                    <span className="text-center">Next.js</span>
                  </div>
                </div>
              </div>
            )}

            {active === "edu" && (
              <div>
                <h3 className="text-2xl  mb-4">Education</h3>
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <h4 className="text-xl  mb-2">
                    Bachelor of Science (BSc) in Physics
                  </h4>
                  <p className="text-lg text-gray-700">
                    Govt. Ashek Mahmud College, Jamalpur <br />
                    2019-present
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
