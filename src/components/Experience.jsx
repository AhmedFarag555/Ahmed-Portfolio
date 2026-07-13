import { motion } from "framer-motion";
import experience from "../data/experience";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
} from "react-icons/fa";

import { FiExternalLink } from "react-icons/fi";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-blue-500 font-semibold mb-3">
            Professional Development
          </p>

          <h2 className="text-5xl font-bold">
            Education, Training &
            <span className="text-blue-500"> Certifications</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            My academic background, professional training, and certifications
            that have shaped my expertise in Artificial Intelligence, Machine
            Learning, Data Science, and Computer Networks.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative border-l-2 border-blue-500 ml-6">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="mb-16 ml-10 relative"
            >
              {/* Icon */}

              <div className="absolute -left-[58px] w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                {
                    index === 0 ? (
                        <FaGraduationCap />
                    ) : item.title.toLowerCase().includes("deep learning") ||
                        item.title.toLowerCase().includes("data science") ? (
                        <FaCertificate />
                    ) : (
                        <FaBriefcase />
                    )
                }
              </div>

              {/* Year */}

              <span className="text-blue-400 font-semibold">
                {item.year}
              </span>

              {/* Title */}

              <h3 className="text-2xl font-bold mt-2">
                {item.title}
              </h3>

              {/* Company */}

              <h4 className="text-lg text-gray-400 mt-1">
                {item.company}
              </h4>

              {/* Description */}

              <p className="text-gray-400 mt-4 leading-8">
                {item.description}
              </p>

              {/* Certificate Button */}

             {item.file && (
                <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 mt-6
                            px-5 py-3 rounded-xl
                            border border-blue-500
                            text-blue-400
                            hover:bg-blue-600
                            hover:text-white
                            transition-all duration-300"
                >
                    {item.type === "certificate" ? (
                    <>
                        <FaCertificate className="group-hover:rotate-12 transition-transform" />
                        <span>View Certificate</span>
                    </>
                    ) : (
                    <>
                        🏅
                        <span>View Badge</span>
                    </>
                    )}

                    <FiExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
            )}
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;