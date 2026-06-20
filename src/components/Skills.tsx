import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Figma",
    "SAP SD",
  ];

  return (
    <motion.section
  id="skills"
  className="bg-slate-900 py-20 px-8"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl text-center shadow-lg hover:scale-105 hover:bg-slate-700 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-400">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;