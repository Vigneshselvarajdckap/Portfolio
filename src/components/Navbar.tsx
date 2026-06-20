const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-slate-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between">
        <h1 className="text-2xl font-bold text-blue-400">Vignesh</h1>

        <div className="flex gap-8 text-gray-300 font-medium">
          <a
            href="#about"
            className="relative group transition duration-300 hover:text-white"
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#skills"
            className="relative group transition duration-300 hover:text-white"
          >
            Skills
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#projects"
            className="relative group transition duration-300 hover:text-white"
          >
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#contact"
            className="relative group transition duration-300 hover:text-white"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;