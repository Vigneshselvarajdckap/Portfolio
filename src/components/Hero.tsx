import { TypeAnimation } from "react-type-animation";
import { FaReact, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#020617] text-white overflow-hidden flex items-center">

      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 opacity-20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <div className="inline-block px-4 py-2 rounded-full border border-blue-500 bg-slate-800/50 backdrop-blur-md mb-5">
            <span className="text-blue-400">⚡ Code. Build. Repeat.</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Vignesh
            </span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold mb-5">
            <TypeAnimation
              sequence={[
                "Frontend Engineer",
                1500,
                "React Developer",
                1500,
                "SAP Professional",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
            />
          </div>

          <p className="text-gray-400 text-lg leading-8 max-w-xl mb-8">
            I build modern, responsive, and user-friendly web applications
            using React, TypeScript, and Tailwind CSS.
          </p>

          {/* Buttons */}
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition inline-block"
            >
              View My Work →
            </a>

            <a
              href="/resume/Vignesh-Resume.pdf"
              download="Vignesh-Resume.pdf"
              className="border border-blue-400 px-8 py-3 rounded-xl hover:bg-blue-500 transition inline-block"
            >
              Download Resume
            </a>
          </div>

          {/* Tech Stack */}
          <div>
            <p className="text-gray-400 mb-4">Tech Stack</p>
            <div className="flex gap-5 text-3xl text-blue-400 flex-wrap">
              <FaHtml5 />
              <FaCss3Alt />
              <SiJavascript />
              <FaReact />
              <SiTypescript />
              <SiTailwindcss />
              <FaGithub />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative hidden md:flex justify-center items-center">

          {/* Code Window */}
          <div className="w-[500px] bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl p-6">

            <div className="flex gap-2 mb-5">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>

            <pre className="text-gray-300 text-sm leading-7">
              {`import React from 'react';

const Developer = () => {
 return (
   <div>
    <h1>Build Modern UI</h1>
    <p>One line of code at a time.</p>
   </div>
 )
}

export default Developer;`}
            </pre>
          </div>

          {/* Floating Card 1 */}
          <div className="absolute top-0 left-0 px-4 py-3 rounded-xl bg-slate-800 border border-blue-500 animate-bounce shadow-lg">
            ⚛ React Expert
          </div>

          {/* Floating Card 2 */}
          <div className="absolute bottom-10 right-0 px-4 py-3 rounded-xl bg-slate-800 border border-cyan-500 animate-pulse shadow-lg">
            🚀 UI Engineer
          </div>

          {/* Floating Card 3 */}
        </div>
      </div>
    </section>
  );
};

export default Hero;