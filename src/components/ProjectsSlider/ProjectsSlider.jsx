import Slider from "react-slick";
import image1 from "../../assets/chauni_mokup.png";
import image2 from "../../assets/event_mokup.png";
import image3 from "../../assets/fast_mokup.png";
import image4 from "../../assets/car_mokup.png";

const projects = [
  {
    image: image1,
    title: "Chauni Cafe & Restaurant",
    githubLink:
      "https://github.com/Freelancerhatem/chauni-cafe-and-restaurant-front",
    demoLink: "https://chauni-cafe-and-resturant.web.app/",
  },
  {
    image: image3,
    title: "Fastway Parcel",
    githubLink: "https://github.com/Freelancerhatem/Fastway-Parcel-Frontend",
    demoLink: "https://fastway-parcel.web.app/",
  },
  {
    image: image2,
    title: "Event Management",
    githubLink: "https://github.com/Freelancerhatem/event-management-react",
    demoLink: "https://event-management-auth-devhatem.web.app/",
  },
  {
    image: image4,
    title: "Velocity Motors",
    githubLink: "https://github.com/Freelancerhatem/velocity-motors-frontend",
    demoLink: "https://velocity-motors-devhatem.web.app/",
  },
];

const ProjectsSlider = () => {
  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {projects.map((project, index) => (
        <div key={index} className="relative p-4">
          <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full h-64 object-cover"
              src={project.image}
              alt={project.title}
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center p-6 transition-opacity duration-300 opacity-0 hover:opacity-100">
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>
              <div className="flex flex-col gap-2">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-green-400 hover:bg-green-400 text-white px-4 py-2 rounded-full text-sm  transition-colors">
                    GitHub
                  </button>
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full text-sm  transition-colors">
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ProjectsSlider;
