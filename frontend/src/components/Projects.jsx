import { motion } from "framer-motion";

const projects = [
  {
    title: "Artsy",
    desc: "Two-sided artist booking app. Customers request a booking, and artists set weekly hours, complete KYC, and get paid through Razorpay.",
    tech: ["React Native", "Node.js", "Express", "PostgreSQL", "Firebase"],
    link: "https://github.com/Priyankalj/artsy",
    linkLabel: "View code",
  },
  {
    title: "Prasidhi Foods",
    desc: "Website for a Bengaluru homemade health-food brand, with a product catalog and WhatsApp ordering.",
    tech: ["React", "Vite", "CSS"],
    link: "https://prasidhi-foods.vercel.app",
    linkLabel: "Live site",
  },
  {
    title: "Costume Store",
    desc: "Costume rental site with a shop catalog, school bulk bookings, makeup packages, and WhatsApp enquiries.",
    tech: ["React", "Vite", "CSS"],
    link: "https://fancydress-costumes.vercel.app",
    linkLabel: "Live site",
  },
  {
    title: "SkillGig",
    desc: "Personalized learning platform with roadmaps, quizzes, streaks, and gamified leaderboard system.",
    tech: ["React Native", "Node.js", "PostgreSQL", "Firebase", "Redux"],
    link: "https://github.com/Priyankalj/lms-nativeApp",
    linkLabel: "View code",
  },
  {
    title: "To-Do App",
    desc: "Task manager with smooth UI, local storage, and optimized interactions.",
    tech: ["React Native", "AsyncStorage", "Context API"],
    link: "https://github.com/Priyankalj/ToDoList",
    linkLabel: "View code",
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col justify-between min-h-[240px] rounded-3xl border border-line bg-surface p-7 shadow-sm hover:shadow-[0_24px_50px_rgba(28,46,36,0.09)] transition"
    >
      <div>
        <div className="h-1 w-10 rounded-full bg-accent group-hover:w-20 transition-all duration-500" />
        <h3 className="font-display text-2xl font-semibold text-ink mt-5">
          {project.title}
        </h3>
        <p className="text-muted text-sm mt-3 leading-relaxed">{project.desc}</p>
      </div>

      <div className="mt-6">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-accent-soft text-accent font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-5 text-sm font-semibold text-accent hover:text-ink transition"
          >
            {project.linkLabel} →
          </a>
        )}
      </div>
    </motion.article>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-6 md:px-16 py-14 md:py-16 bg-page-soft/35">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="text-center mb-8 md:mb-10"
      >
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink">
          Featured Projects
        </h2>
        <p className="text-muted mt-4">
          Selected work across mobile, web, and full-stack products
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-7">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
