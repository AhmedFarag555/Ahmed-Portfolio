import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,.25)] transition-all duration-300"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 object-cover hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-7">

        <p className="text-blue-500 font-semibold">
          {project.category}
        </p>

        <h3 className="text-3xl font-bold mt-2">
          {project.title}
        </h3>

        <p className="text-gray-400 mt-5 leading-7">
          {project.description}
        </p>

        {/* Tech */}

        <div className="flex flex-wrap gap-2 mt-6">

          {project.technologies.map((tech, index) => (

            <span
              key={index}
              className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm"
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="mt-8">
            <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition font-medium"
            >
                <FaGithub />
                View on GitHub
            </a>
        </div>      

      </div>
    </motion.div>
  );
}

export default ProjectCard;