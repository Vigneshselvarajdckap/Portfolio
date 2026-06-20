import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "EMI Calculator",
      desc: "Interactive EMI calculator for monthly loan payment calculation.",
      tech: "HTML, CSS, JavaScript",
    },
    {
      title: "Weather App",
      desc: "Real-time weather app using API integration.",
      tech: "HTML, CSS, JavaScript",
    },
    {
      title: "Music App",
      desc: "Responsive music player with interactive controls.",
      tech: "HTML, CSS, JavaScript",
    },
    {
      title: "Online Keyboard",
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
              className="bg-slate-900 p-8 rounded-xl shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {project.desc}
              </p>

              <p className="text-sm text-gray-400">
                Tech: {project.tech}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;