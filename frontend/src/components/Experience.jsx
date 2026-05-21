import {
  motion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Floatr — Bangalore, KA.",
    duration: "March 2024 – Present",
    points: [
      "Engineered and maintained a production-scale fintech mobile application using React Native.",
      "Designed secure APIs for KYC, NPS, and digital investments.",
      "Led React Native upgrade 0.64 → 0.82.",
      "Mentored interns and improved team productivity.",
      "Built coupons & rewards system (+30% adoption).",
      "Implemented FCM notifications and OTA updates.",
      "Reduced production issues by 40%+."
    ]
  },
  {
    role: "Associate Software Engineer",
    company: "Floatr — Bangalore, KA.",
    duration: "Mar 2023 – Mar 2024",
    points: [
      "Built reusable components and improved UI consistency.",
      "Established ESLint standards.",
      "Integrated Razorpay, Billdesk, Cashfree.",
      "Built financial calculators.",
      "Implemented logging & monitoring.",
      "Integrated Firebase Crashlytics."
    ]
  },
  {
    role: "Internship / Trainee",
    company: "Floatr — Bangalore, KA.",
    duration: "Nov 2022 – Feb 2023",
    points: [
      "Worked on onboarding flows and APIs.",
      "Built reusable UI components.",
      "Handled validations & backend integration.",
      "Participated in code reviews."
    ]
  }
];

function Experience() {
  const ref = useRef(null);

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20
  });

  // Moving dot
  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id='experience'
      ref={ref}
      className="px-6 md:px-16 py-32 relative"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-24"
      >
        <h2 className="text-5xl font-bold text-purple-400">
          Professional Experience
        </h2>
        <p className="text-gray-400 mt-4">
          3+ years crafting high-performance fintech applications
        </p>
      </motion.div>

      <div className="relative flex">
        
        {/* STATIC LINE */}
        <div className="absolute left-4 md:left-8 top-0 h-full w-[2px] bg-gray-800"></div>

        {/* ANIMATED PROGRESS LINE */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-4 md:left-8 top-0 h-full w-[2px] bg-purple-500 origin-top"
        />

        {/* MOVING DOT */}
        <motion.div
          style={{ top: dotY }}
          className="absolute left-2 md:left-6 w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"
        />

        <div className="space-y-24 w-full pl-12 md:pl-24">
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.01,
                  boxShadow:
                    "0px 30px 40px rgba(124, 58, 237, 0.25)"
                }}
                className="relative border border-gray-800 rounded-2xl p-8 bg-black/40 backdrop-blur-md overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-purple-600/10 blur-xl"></div>

                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {exp.role}
                    </h3>
                    <p className="text-purple-400 text-sm">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">
                    {exp.duration}
                  </span>
                </div>

                {/* Points (stagger animation) */}
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.08
                      }
                    }
                  }}
                  className="space-y-3 mt-4"
                >
                  {exp.points.map((point, i) => (
                    <motion.li
                      key={i}
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      className="text-gray-400 text-sm flex gap-3"
                    >
                      <span className="text-green-400 mt-1">
                        ●
                      </span>
                      {point}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Experience;