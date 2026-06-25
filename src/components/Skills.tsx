import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaFigma,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiSap,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={40} /> },
    { name: "CSS", icon: <FaCss3Alt size={40} /> },
    { name: "JavaScript", icon: <SiJavascript size={40} /> },
    { name: "React", icon: <FaReact size={40} /> },
    { name: "TypeScript", icon: <SiTypescript size={40} /> },
    { name: "Tailwind", icon: <SiTailwindcss size={40} /> },
    { name: "Figma", icon: <FaFigma size={40} /> },
    { name: "SAP SD", icon: <SiSap size={40} /> },
  ];

  return (
    <motion.section
      id="skills"
      className="relative bg-[#020617] py-24 px-6 overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-blue-500 opacity-10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-cyan-500 opacity-10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-white">
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl text-center shadow-lg hover:border-blue-400 transition duration-300"
            >
              <div className="flex justify-center mb-4 text-blue-400">
                {skill.icon}
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-white">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;