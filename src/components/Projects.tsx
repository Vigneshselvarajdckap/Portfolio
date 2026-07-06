import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce App",
      image: "/images/E-commer.png",
      desc: "Modern shopping app with cart, checkout and responsive UI.",
      tech: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Firebase",
        "Cloudinary",
        "Context API",
        "Git",
        "Netlify",
        "GitHub",
      ],
      link: "https://shopvphere.netlify.app/",
      gitLink: "https://github.com/Vigneshselvarajdckap/E-commerce.git",
    },
    {
      title: "Task Management",
      image: "/images/ecom1.png",
      desc: "Premium project management app with dashboard charts, task CRUD, project tracking, team management, auth flow, localStorage persistence and 8 color themes.",
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Context API",
        "Netlify",
        "Git",
        "GitHub",
      ],
      link: "https://taskflowspro.netlify.app/",
      gitLink: "https://github.com/Vigneshselvarajdckap/TaskFlow.git",
    },
    {
      title: "Weather App",
      image: "/images/weather.png",
      desc: "Real-time weather application with API integration, city search, responsive UI and live weather details.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "OpenWeather API",
        "Netlify",
        "Git",
        "GitHub",
      ],
      link: "https://weatherappvp.netlify.app/",
      gitLink: "https://github.com/Vigneshselvarajdckap/Weather_App.git",
    },
    {
      title: "Music App",
      image: "/images/music.png",
      desc: "Responsive music player with smooth UI controls, playlist layout, audio playback and modern design.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Audio API",
        "Responsive Design",
        "Netlify",
        "Git",
        "GitHub",
      ],
      link: "https://vpsongs.netlify.app/",
      gitLink: "https://github.com/Vigneshselvarajdckap/Online_music.git",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="relative bg-[#020617] py-24 px-6 overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:border-blue-400 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-400 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-5">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.link} rel="noopener noreferrer" target="_blank">
                    <button className="bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600">
                      Live Demo
                    </button>
                  </a>


                  <a href={project.gitLink} rel="noopener noreferrer" target="_blank">
                    <button className="border border-blue-400 px-5 py-2 rounded-lg hover:bg-blue-500">
                      GitHub
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;