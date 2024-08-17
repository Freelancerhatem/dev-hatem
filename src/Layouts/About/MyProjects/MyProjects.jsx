/* eslint-disable react/no-unescaped-entities */
import ProjectsSlider from "../../../components/ProjectsSlider/ProjectsSlider";

const MyProjects = () => {
  return (
    <section
      id="projects"
      className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white"
    >
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl  mb-6">My Projects</h2>

        {/* Description */}
        <p className="mb-12 text-lg leading-relaxed font-font2">
          Explore the diverse range of projects I've worked on. Each project
          showcases my skills and expertise in various fields.
        </p>

        {/* Slider Container */}
        <div className="relative">
          <ProjectsSlider />
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
