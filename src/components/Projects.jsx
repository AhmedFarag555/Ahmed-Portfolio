import { motion } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[6px] text-blue-500 font-semibold mb-3">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold">
            Featured <span className="text-blue-500">Projects</span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
            A collection of AI, Machine Learning, Data Science,
            and Backend projects demonstrating my technical
            expertise and problem-solving skills.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;