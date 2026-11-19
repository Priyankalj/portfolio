import { motion } from "framer-motion";
import {
  ChevronsLeftRightEllipsis,
  Database,
  Smartphone,
  Zap,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const features = [
  {
    icon: Smartphone,
    title: "Mobile First",
    desc: "Specialized in React Native development",
  },
  {
    icon: ChevronsLeftRightEllipsis,
    title: "Full Stack",
    desc: "Backend expertise with Node.js & PostgreSQL",
  },
  {
    icon: Database,
    title: "Fintech Focus",
    desc: "Building secure financial applications",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Optimizing for scale and speed",
  },
];

function About() {
  return (
    <section id="about" className="px-6 md:px-16 py-14 md:py-16">
      <div className="text-center mb-8 md:mb-10">
        <motion.h2
          className="font-display text-4xl md:text-5xl font-semibold text-ink"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-muted mt-4 max-w-xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Passionate about shipping high-performance mobile products that people
          actually use.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
        <motion.div
          className="rounded-[1.75rem] border border-line bg-surface/80 backdrop-blur p-8 md:p-10 leading-relaxed text-muted shadow-[0_20px_50px_rgba(28,46,36,0.05)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="mb-5">
            I&apos;m a{" "}
            <span className="text-accent font-semibold">Software Engineer</span>{" "}
            with{" "}
            <span className="text-ink font-semibold">4 years of experience</span>{" "}
            building high-performance mobile applications, specializing in
            fintech product development.
          </p>
          <p className="mb-5">
            My work spans the full stack — pixel-perfect React Native UIs to
            scalable Node.js and PostgreSQL backends — with a focus on secure,
            performant systems.
          </p>
          <p>
            At Floatr, I&apos;ve shipped features for thousands of users:
            payments, KYC, and investment flows, while cutting recurring
            production issues through careful optimization.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="rounded-3xl border border-line bg-surface p-6 shadow-sm hover:shadow-[0_16px_40px_rgba(28,46,36,0.08)] hover:-translate-y-1 transition duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="h-10 w-10 rounded-2xl bg-accent-soft text-accent flex items-center justify-center mb-3">
                <Icon size={18} />
              </div>
              <h3 className="font-semibold text-ink text-lg mb-1">{title}</h3>
              <p className="text-muted text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
