import { motion } from "framer-motion";
import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[6px] text-blue-500 font-semibold mb-3">
            My Skills
          </p>

          <h2 className="text-5xl font-bold">
            Technical <span className="text-blue-500">Expertise</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            My technical toolkit covers Machine Learning, Artificial Intelligence,
            Backend Development, Data Analytics, Databases, and modern software
            engineering tools.
          </p>

        </motion.div>

        {/* Categories */}

        <div className="grid lg:grid-cols-2 gap-8">

          {skills.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .8,
                delay: index * .15
              }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,.25)]"
            >

              <h3 className="text-2xl font-bold mb-8 text-blue-500">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.items.map((skill, i) => (

                  <span
                    key={i}
                    className="px-5 py-3 rounded-full bg-slate-800 border border-slate-700 hover:bg-blue-500 hover:border-blue-500 transition duration-300 cursor-default"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;