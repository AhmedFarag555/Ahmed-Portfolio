import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          Ahmed <span className="text-blue-500">Farag</span>
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex gap-10 text-gray-300 font-medium">

          <a href="#about" className="hover:text-blue-500 transition duration-300">
            About
          </a>

          <a href="#skills" className="hover:text-blue-500 transition duration-300">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-500 transition duration-300">
            Projects
          </a>

          <a href="#experience" className="hover:text-blue-500 transition duration-300">
            Experience
          </a>

          <a href="#contact" className="hover:text-blue-500 transition duration-300">
            Contact
          </a>

        </nav>

        {/* Social */}
        <div className="flex gap-5 text-2xl">

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

        </div>

      </div>
    </header>
  );
}

export default Navbar;