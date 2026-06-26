import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="relative bg-[#020617] py-24 px-6 overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 opacity-10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500 opacity-10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Contact{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          Let’s connect and build something amazing together.
        </p>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 shadow-lg">

          <p className="text-gray-300 text-lg mb-5">
            📧 svigneshselvaraj046@gmail.com
          </p>

          <div className="flex justify-center gap-4 flex-wrap mt-8">

            <a
              href="mailto:svigneshselvaraj046@gmail.com"
              className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition flex items-center gap-2"
              // target="_blank"
              // rel="noopener noreferrer"
            >
              <FaEnvelope />
              Email Me
            </a>

            <a
              href="https://github.com/Vigneshselvarajdckap"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-400 px-6 py-3 rounded-xl hover:bg-blue-500 transition flex items-center gap-2"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/vignesh-selvaraj-/"
              className="border border-blue-400 px-6 py-3 rounded-xl hover:bg-blue-500 transition flex items-center gap-2"
              target="_blank"
              // rel="noopener noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;