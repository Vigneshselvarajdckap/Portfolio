const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-slate-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between">
        <h1 className="text-2xl font-bold text-blue-400">Vignesh</h1>

        <div className="flex gap-6 text-white">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;