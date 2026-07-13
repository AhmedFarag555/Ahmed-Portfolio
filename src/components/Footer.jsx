import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Ahmed <span className="text-blue-500">Farag</span>
          </h2>

          <p className="text-gray-400 mt-2">
            Machine Learning Engineer • Data Scientist • Backend Developer
          </p>
        </div>

        <div className="flex gap-6 text-gray-300">
          <a href="#home" className="hover:text-blue-500 transition">Home</a>
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#experience" className="hover:text-blue-500 transition">Professional Development</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </div>

        <div className="flex gap-5 text-2xl text-gray-300">
          <a
            href="https://github.com/AhmedFarag555"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ahmed-farag-89331a264"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:af0112651@gmail.com"
            className="hover:text-blue-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-500 text-sm border-t border-slate-800 pt-6">
        © {new Date().getFullYear()} Ahmed Farag. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;