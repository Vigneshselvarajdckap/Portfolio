import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "EMI Calculator",
      image: "/images/emi.png",
      desc: "Interactive EMI calculator for monthly loan payment calculation.",
      tech: "HTML, CSS, JavaScript",
    },
    {
      title: "Weather App",
      image: "/images/weather.png",
      desc: "Real-time weather app using API integration.",
      tech: "HTML, CSS, JavaScript",
    },
    {
      title: "Music App",
      image: "/images/music.png",
      desc: "Responsive music player with interactive controls.",
      tech: "HTML, CSS, JavaScript",
    },
    {
      title: "Online Keyboard",
      image: "/images/keyboard.png",
      desc: "Virtual keyboard application with smooth interactions.",
      tech: "HTML, CSS, JavaScript",
    },
  ];
  return (
    <motion.section
      id="projects"
      className="bg-slate-800 py-20 px-8"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 p-8 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover rounded-lg mb-4"
              />

              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {project.desc}
              </p>

              <div className="mt-4">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                  {project.tech}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;