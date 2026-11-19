import { motion } from "framer-motion";

function Education() {
  return (
    <section className="px-6 md:px-16 py-14 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="text-center mb-8 md:mb-10"
      >
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink">
          Education
        </h2>
        <p className="text-muted mt-4">
          Academic foundation in engineering and technology
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
        className="max-w-3xl mx-auto rounded-3xl border border-line bg-surface p-8 md:p-10 shadow-sm"
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-5">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
              Bachelor of Engineering
            </h3>
            <p className="text-accent font-medium mt-1">
              Electronics & Telecommunication
            </p>
            <p className="text-muted text-sm mt-2">
              Sir M Visvesvaraya Institute of Technology · 2018–2022
            </p>
          </div>
          <p className="text-ink font-semibold rounded-full bg-accent-soft px-4 py-2 text-sm self-start">
            CGPA 8.0 / 10
          </p>
        </div>

        <p className="text-muted text-sm leading-relaxed">
          Built a strong foundation in electronics, systems, and computer science
          fundamentals — skills that now shape how I design performant mobile
          and full-stack software.
        </p>
      </motion.div>
    </section>
  );
}

export default Education;
