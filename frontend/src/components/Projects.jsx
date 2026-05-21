import { motion } from "framer-motion";

const projects = [
  {
    title: "SkillGig",
    desc: "Personalized learning platform with roadmaps, quizzes, streaks, and gamified leaderboard system.",
    tech: ["React Native", "Node.js", "PostgreSQL", "Firebase", "Redux"],
    color: "from-pink-500 to-purple-500"
  },
  {
    title: "Expense Tracker",
    desc: "Secure expense manager with REST APIs, analytics dashboards, and category-based insights.",
    tech: ["React Native", "Express", "PostgreSQL", "JWT"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "To-Do App",
    desc: "Task manager with smooth UI, local storage, and optimized interactions.",
    tech: ["React Native", "AsyncStorage", "Context API"],
    color: "from-green-400 to-emerald-500"
  }
];

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ type: "spring", stiffness: 200 }}
      className="group relative h-[250px] flex flex-col justify-between border border-gray-800 rounded-2xl p-6 bg-black/40 backdrop-blur-md overflow-hidden"
    >
      {/* Animated Top Gradient */}
      <motion.div
        initial={{ opacity: 0.6 }}
        whileHover={{ opacity: 1 }}
        className={`h-1 w-16 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${project.color}`}
      />

      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-purple-600/10 blur-2xl"></div>

      {/* Content */}
      <div className="flex-1 mt-6">
        <h3 className="text-xl font-semibold mb-2">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm mb-4">
          {project.desc}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1 }}
              className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      {/* <div className="flex gap-3 mt-6">
        <motion.button
          whileHover={{ y: -2 }}
          className="flex-1 border border-gray-700 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
        >
          Code
        </motion.button>

        <motion.button
          whileHover={{ y: -2 }}
          className="flex-1 border border-gray-700 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
        >
          Demo
        </motion.button>
      </div> */}
    </motion.div>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-6 md:px-16 py-32">
      
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl font-bold text-purple-400">
          Featured Projects
        </h2>
        <p className="text-gray-400 mt-4">
          Showcasing my work in building innovative applications
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.15
            }}
            viewport={{ once: true }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;