import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="relative py-24 px-6 bg-[#020617] overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 opacity-10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500 opacity-10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          About{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400">
              Frontend Developer & SAP Professional
            </h3>

            <p className="text-gray-400 leading-8 mb-5">
              I build modern, scalable, and responsive web applications
              using React, TypeScript, and Tailwind CSS.
            </p>

            <p className="text-gray-400 leading-8 mb-5">
              Experienced in UI development, AI-based solutions,
              demand forecasting systems, and business applications.
            </p>

            <p className="text-gray-400 leading-8">
              Currently growing in SAP SD while continuously building
              premium digital experiences with modern frontend technologies.
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-2 gap-5">
            {[
              { value: "2+", label: "Years Experience" },
              { value: "10+", label: "Projects" },
              { value: "3", label: "Domains" },
              { value: "100%", label: "Passion" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-7 rounded-2xl text-center hover:scale-105 hover:border-blue-400 transition duration-300 shadow-lg"
              >
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                  {item.value}
                </h3>
                <p className="text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;