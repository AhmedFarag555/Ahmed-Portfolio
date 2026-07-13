import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 flex items-center">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-blue-500 text-xl mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            Ahmed Farag
          </h1>

          <TypeAnimation
            sequence={[
              "Data Scientist",
              2000,
              "Machine Learning Engineer",
              2000,
              "AI Engineer",
              2000,
            ]}
            wrapper="h2"
            repeat={Infinity}
            className="text-3xl text-blue-400 font-semibold"
          />

          <p className="text-gray-400 mt-8 leading-8 text-lg max-w-xl">

            Passionate about Machine Learning, Artificial
            Intelligence, Data Science, and developing intelligent
            systems that create real business impact.

          </p>

          <div className="mt-12 flex gap-5">

            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition inline-flex items-center justify-center"
            >
              View Projects
            </a>

            <a
              href="/Ahmed_Farag_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 hover:border-blue-500 px-8 py-4 rounded-xl transition inline-flex items-center justify-center"
            >
              Download CV
            </a>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <img
            src="/profile.png"
            alt="Ahmed Farag"
            className="w-[380px] md:w-[430px] rounded-full border-4 border-blue-500 shadow-[0_0_80px_rgba(59,130,246,.35)]"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;