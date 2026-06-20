import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
  id="about"
  className="bg-slate-800 py-20 px-8"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              Frontend Developer & SAP Professional
            </h3>

            <p className="text-gray-300 leading-8">
              I am a passionate Frontend Developer with experience in
              building responsive web applications using React,
              TypeScript, and Tailwind CSS.
            </p>

            <p className="text-gray-300 leading-8 mt-4">
              I have worked on UI development, AI-driven projects,
              demand forecasting systems, and business applications.
            </p>

            <p className="text-gray-300 leading-8 mt-4">
              Currently, I am growing my career in SAP SD while
              continuing to build modern web experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-700 p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-blue-400">2+</h3>
              <p>Years Experience</p>
            </div>

            <div className="bg-slate-700 p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-blue-400">10+</h3>
              <p>Projects</p>
            </div>

            <div className="bg-slate-700 p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-blue-400">3</h3>
              <p>Domains</p>
            </div>

            <div className="bg-slate-700 p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-blue-400">100%</h3>
              <p>Passion</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;