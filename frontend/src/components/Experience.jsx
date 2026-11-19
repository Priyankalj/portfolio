import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Floatr — Bangalore",
    duration: "Mar 2024 – Present",
    points: [
      "Shipped Floatr, a cross-platform React Native app for Android and iOS covering mutual funds, NPS, digital gold, KYC, and payments. Live on the App Store and Google Play.",
      "Led the React Native upgrade from 0.64 to 0.83 and updated dependent packages so the production app stayed releasable.",
      "Built the employee web app and the HR dashboard in React and Tailwind for NPS enrollment, KYC, loans, contributions, and employee exit.",
      "Built the Express and PostgreSQL REST APIs behind those products: employee records, contribution uploads, KYC documents, and payment webhooks.",
      "Implemented NPS account-shift and registration APIs, including scheme allocation, corporate profile rules, and SIP retry dates after a failed debit.",
      "Built rewards, external coupons, and the mutual-fund loan flow, and encrypted REST payloads between the server and the app.",
      "Reduced recurring production errors by triaging email alerts and API logs, then shipping the fix in the same release cycle.",
      "Mentored interns and tracked Agile stories in Jira.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Floatr — Bangalore",
    duration: "Mar 2023 – Mar 2024",
    points: [
      "Integrated Razorpay, Cashfree, and Billdesk payment SDKs and REST APIs, and added server-side logs for failed payment requests.",
      "Built calculators for SIP, retirement, insurance, tax, and budgeting, plus a React transaction dashboard.",
      "Added Firebase Crashlytics and Cloud Messaging for crash reports and offer alerts.",
      "Introduced ESLint rules used across the mobile codebase.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Floatr — Bangalore",
    duration: "Nov 2022 – Feb 2023",
    points: [
      "Built onboarding screens, form validation, and React Native flows backed by Node.js REST APIs.",
    ],
  },
];

function Experience() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative overflow-x-clip px-4 sm:px-6 md:px-16 py-14 md:py-16"
    >
      <div className="mx-auto w-full max-w-5xl min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ink text-balance">
            Professional Experience
          </h2>
          <p className="text-muted mt-4 text-sm sm:text-base max-w-md mx-auto text-balance leading-relaxed">
            4 years crafting high-performance fintech applications
          </p>
        </motion.div>

        <div className="relative min-w-0">
          <div className="pointer-events-none absolute left-1 sm:left-2 top-0 bottom-0 w-4 overflow-hidden">
            <div className="absolute left-[7px] top-0 h-full w-[2px] bg-line" />
            <motion.div
              style={{ scaleY }}
              className="absolute left-[7px] top-0 h-full w-[2px] bg-accent origin-top"
            />
            <motion.div
              style={{ top: dotY }}
              className="absolute left-0 w-4 h-4 bg-accent rounded-full shadow-md border-2 border-page"
            />
          </div>

          <div className="min-w-0 space-y-6 sm:space-y-8 pl-8 sm:pl-14">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="min-w-0"
              >
                <div className="min-w-0 rounded-3xl border border-line bg-surface/90 p-5 sm:p-7 md:p-9 shadow-sm hover:shadow-[0_20px_50px_rgba(28,46,36,0.07)] transition">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4 mb-4">
                    <div className="min-w-0">
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink">
                        {exp.role}
                      </h3>
                      <p className="text-accent text-sm font-medium mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-muted text-sm shrink-0 sm:pt-1">
                      {exp.duration}
                    </span>
                  </div>

                  <ul className="space-y-3 mt-5">
                    {exp.points.map((point) => (
                      <li
                        key={point}
                        className="text-muted text-sm flex gap-3 leading-relaxed min-w-0"
                      >
                        <span className="text-accent-bright mt-1 shrink-0">●</span>
                        <span className="min-w-0 break-words">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
