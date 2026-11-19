import { motion } from "framer-motion";

const cards = [
  {
    title: "Frontend",
    items: [
      "React Native",
      "React.js",
      "JavaScript",
      "Redux",
      "Context API",
      "React Navigation",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Cloud & Services",
    items: [
      "Firebase Push Notifications",
      "Firebase Crashlytics",
      "Firebase Analytics",
      "OTA Updates",
    ],
  },
  {
    title: "Performance",
    items: [
      "React Native Reanimated",
      "React Native Skia",
      "Performance Optimization",
    ],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Bitbucket", "VSCode", "Jira", "Postman", "CI/CD"],
  },
];

function Skills() {
  return (
    <section id="skills" className="px-6 md:px-16 py-14 md:py-16 bg-page-soft/40">
      <div className="text-center mb-8 md:mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-semibold text-ink"
        >
          Skills & Technologies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="text-muted mt-4"
        >
          A focused toolkit for modern mobile and web products
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 md:gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-line bg-surface p-7 shadow-sm hover:shadow-[0_18px_40px_rgba(28,46,36,0.08)] transition"
          >
            <h3 className="font-display text-2xl font-semibold text-ink mb-5">
              {card.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {card.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-accent-soft text-accent px-3 py-1.5 text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
