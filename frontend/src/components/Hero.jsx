import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiPostgresql, SiTailwindcss } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { ArrowRight, Download } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

const techLogos = [
  { name: "React", Icon: FaReact },
  { name: "JavaScript", Icon: FaJs },
  { name: "Node.js", Icon: FaNodeJs },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
];

function Hero() {
  return (
    <section className="relative px-6 md:px-16 pt-4 md:pt-8 pb-10 md:pb-14 flex flex-col justify-center">
      <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-8 md:gap-12 items-center">
        <div>
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 rounded-full bg-accent-soft text-accent px-4 py-1.5 text-sm font-medium"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" />
            Software Engineer · Sunnyvale, CA
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mt-6 leading-[0.95] tracking-tight text-ink"
          >
            Priyanka
            <span className="block italic font-medium text-accent">L J</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 text-lg md:text-xl text-muted max-w-lg leading-relaxed"
          >
            Building scalable React Native apps and full-stack systems for
            fintech — clean, fast, and production-ready.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-3 mt-9"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-6 py-3 font-medium hover:bg-accent-bright transition"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="/Priyanka_LJ_Fullstack.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 backdrop-blur px-6 py-3 font-medium text-ink hover:bg-accent-soft transition"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-5 mt-10 text-sm text-muted"
          >
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/priyankalj/"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full border border-line bg-surface flex items-center justify-center text-ink hover:border-accent hover:text-accent transition"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="https://github.com/Priyankalj?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full border border-line bg-surface flex items-center justify-center text-ink hover:border-accent hover:text-accent transition"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ljpriyanka7@gmail.com&su=Portfolio%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-line bg-surface flex items-center justify-center text-ink hover:border-accent hover:text-accent transition"
              >
                <HiOutlineMail size={16} />
              </a>
            </div>
            <span className="hidden sm:block h-8 w-px bg-line" />
            <p className="hidden sm:block">
              <span className="font-semibold text-ink">4 years</span> shipping
              fintech products
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="hidden md:block"
        >
          <div className="rounded-[2rem] border border-line bg-surface p-8 lg:p-9 shadow-[0_24px_60px_rgba(20,32,28,0.06)]">
            <div className="flex items-end justify-between gap-4 mb-8">
              <div>
                <p className="font-display text-5xl font-semibold text-accent leading-none">
                  4
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">
                  Years experience
                </p>
              </div>
              <p className="text-sm text-muted text-right max-w-[9rem] leading-snug">
                Core stack I ship with every day
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {techLogos.slice(0, 3).map(({ name, Icon }, i) => (
                <motion.div
                  key={name}
                  title={name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 + i * 0.06 }}
                  whileHover={{ y: -3 }}
                  className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-line bg-page-soft/80 px-3 py-5 transition hover:border-accent hover:bg-accent-soft"
                >
                  <Icon className="text-[1.75rem] text-accent" aria-label={name} />
                  <span className="text-[11px] font-medium text-muted">{name}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 max-w-[70%] mx-auto">
              {techLogos.slice(3).map(({ name, Icon }, i) => (
                <motion.div
                  key={name}
                  title={name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.48 + i * 0.06 }}
                  whileHover={{ y: -3 }}
                  className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-line bg-page-soft/80 px-3 py-5 transition hover:border-accent hover:bg-accent-soft"
                >
                  <Icon className="text-[1.75rem] text-accent" aria-label={name} />
                  <span className="text-[11px] font-medium text-muted text-center leading-tight">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.5 }}
        className="mt-8 md:mt-10 flex flex-wrap items-center gap-6 md:gap-10 text-sm text-muted border-t border-line/80 pt-6"
      >
        <span className="flex items-center gap-2">
          <span className="text-accent">◆</span> React Native
        </span>
        <span className="hidden sm:block h-4 w-px bg-line" />
        <span className="flex items-center gap-2">
          <span className="text-accent">◆</span> Express & PostgreSQL
        </span>
        <span className="hidden sm:block h-4 w-px bg-line" />
        <a
          href="https://app.floatr.in/"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 hover:text-accent transition"
        >
          <span className="text-accent">◆</span>
          <span className="group-hover:underline underline-offset-4">
            Floatr · App Store & Play
          </span>
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
