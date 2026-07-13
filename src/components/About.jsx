import { motion } from "framer-motion";
import {
  FaBrain,
  FaChartLine,
  FaDatabase,
  FaChartBar,
  FaServer,
  FaCloud,
} from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaChartBar className="text-5xl text-blue-500" />,
      title: "Data Science",
      description:
        "Cleaning, transforming, visualizing, and analyzing structured data using Pandas, NumPy, Matplotlib, and modern data science workflows.",
    },
    {
      icon: <FaBrain className="text-5xl text-blue-500" />,
      title: "Machine Learning & AI",
      description:
        "Developing predictive models using Scikit-learn, TensorFlow, feature engineering, model evaluation, and AI-powered intelligent systems.",
    },
    {
      icon: <FaChartLine className="text-5xl text-blue-500" />,
      title: "Data Analytics & Statistics",
      description:
        "Applying statistical analysis, hypothesis testing, probability, exploratory data analysis (EDA), Power BI , and business intelligence to uncover actionable insights.",
    },
    {
      icon: <FaDatabase className="text-5xl text-blue-500" />,
      title: "Database Systems",
      description:
        "Designing relational databases using MySQL and PostgreSQL with optimized SQL queries, normalization, indexing, and efficient data management.",
    },
    
    {
      icon: <FaServer className="text-5xl text-blue-500" />,
      title: "Backend Development",
      description:
        "Building scalable REST APIs with FastAPI, integrating databases, authentication, and deploying machine learning solutions.",
    },
    {
      icon: <FaCloud className="text-5xl text-blue-500" />,
      title: "Big Data & Modern Tools",
      description:
        "Working with Apache Spark, Git, GitHub, Data Lack , Data Warehouse , Hadoop , Docker , and modern software development tools.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-blue-500 uppercase tracking-[6px] mb-3 font-semibold">
            About Me
          </p>

          <h2 className="text-5xl font-bold mb-8">
            Transforming <span className="text-blue-500">Data</span> Into
            Intelligent Solutions
          </h2>

          <p className="text-gray-400 max-w-4xl mx-auto text-lg leading-9">
            Computer and Data Science graduate with a strong foundation in
            Artificial Intelligence, Machine Learning, Data Science,
            Statistics, Database Systems, Data Analytics, and Backend
            Development.
            <br /><br />
            Passionate about transforming complex data into intelligent,
            scalable solutions that enable organizations to make
            data-driven decisions, automate processes, and solve real-world
            business challenges through modern AI technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-blue-500 hover:-translate-y-3 transition-all duration-300 hover:shadow-[0_0_35px_rgba(59,130,246,.25)]"
            >
              <div className="mb-6">
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {card.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;