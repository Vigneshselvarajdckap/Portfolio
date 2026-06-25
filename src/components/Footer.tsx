import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#020617] border-t border-white/10 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Vignesh
        </h1>

        <p className="text-gray-400 text-sm">
          © 2026 Vignesh S | All Rights Reserved.
        </p>

        <div className="flex gap-4 text-xl text-gray-400">
          <a href="https://github.com/Vigneshselvarajdckap" className="hover:text-blue-400">
            <FaGithub />
          </a>

          <a href="#" className="hover:text-blue-400">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;