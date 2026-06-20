import { TypeAnimation } from 'react-type-animation';


const Hero = () => {

  return (
    <section className="relative h-screen bg-slate-900 flex items-center justify-center overflow-hidden">

      {/* Background Blur Effects */}
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 top-20 left-20"></div>
      <div className="absolute w-72 h-72 bg-cyan-400 rounded-full blur-3xl opacity-20 bottom-20 right-20"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p className="text-blue-400 text-lg mb-4">
          Welcome to my portfolio
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Vignesh S
          </span>
        </h1>

        <div className="text-xl md:text-3xl mb-6 font-semibold">
          <TypeAnimation
            sequence={[
              'Frontend Developer',
              1500,
              'React Developer',
              1500,
              'SAP Professional',
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
          />
        </div>

        <p className="text-gray-400 max-w-2xl mx-auto leading-8 mb-8">
          I build modern, responsive, and user-friendly web applications
          using React, TypeScript, and Tailwind CSS.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-blue-500 px-8 py-3 rounded-lg hover:bg-blue-600 hover:scale-105 transition-all duration-300"
          >
            View Projects
          </button>

          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-400 hover:text-white hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;