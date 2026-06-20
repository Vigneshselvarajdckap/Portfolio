import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="bg-slate-900 py-20 px-8"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

        <p className="text-gray-300 mb-8 text-lg">
          Let’s connect and build something amazing together.
        </p>

        <div className="space-y-4">
          <p className="text-xl">
            📧 vigneshselvarajdckap@gmail.com
          </p>

          <p className="text-xl">
            📱 +91 7845848612
          </p>

          <p className="text-xl">
            💻 GitHub: github.com/yourusername
          </p>
        </div>

        <button className="mt-8 bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition">
          Contact Me
        </button>
      </div>
    </motion.section>
  );
};

export default Contact;