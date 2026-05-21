import { motion } from "framer-motion";
import {
  ChevronsLeftRightEllipsis,
  Database,
  Smartphone,
  Zap,
} from "lucide-react";

function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const boxHover = {
    whileHover: {
      scale: 1.05,
      backgroundColor: "rgba(40,40,40,0.9)",
    },
  };

  return (
    <section id="about" className="px-6 md:px-16 py-24 bg-[#0a0a0a]">
      {/* Title */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-purple-400"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-400 mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Passionate developer with a track record of building high-performance
          mobile applications
        </motion.p>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Card */}
        <motion.div
          className="border border-gray-800 rounded-xl p-8 text-gray-300 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="mb-6 text-gray-300 font-normal">
            I'm a{" "}
            <span className="text-purple-400 font-semibold">
              React Native Developer
            </span>{" "}
            with
            <span className="text-blue-400 font-semibold">
              {" "}
              3.4 years of experience{" "}
            </span>
            building high-performance mobile applications, specializing in
            fintech product development.
          </p>

          <p className="mb-6 text-gray-300 font-normal">
            My expertise spans the full mobile development stack — from crafting
            pixel-perfect UIs with React Native to architecting scalable
            backends with Node.js and PostgreSQL. I focus on building secure,
            performant solutions that handle real-world complexity.
          </p>

          <p className=" text-gray-300 font-normal">
            At Floatr, I've contributed to a fintech platform serving thousands
            of users, implementing features like payment gateway integrations,
            KYC workflows, and investment systems while reducing production
            issues by 40% through optimization and best practices.
          </p>
        </motion.div>

        {/* Right Feature Boxes */}
        <div className="grid sm:grid-cols-2 gap-6">
          <motion.div
            className="bg-gray-900 p-6 rounded-xl border border-gray-800 cursor-pointer transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            whileHover={{ scale: 1.05, borderColor: "#a978d6" }}
          >
            <Smartphone className="text-purple-500 mb-1" />
            <h3 className="font-semibold text-lg mb-2"> Mobile First</h3>
            <p className="text-gray-400 text-sm">
              Specialized in React Native development
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-900 p-6 rounded-xl border border-gray-800 cursor-pointer transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            whileHover={{ scale: 1.05, borderColor: "#a855f7" }}
          >
            <ChevronsLeftRightEllipsis className="text-purple-500 mb-1" />
            <h3 className="font-semibold text-lg mb-2">Full Stack</h3>
            <p className="text-gray-400 text-sm">
              Backend expertise with Node.js & PostgreSQL
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-900 p-6 rounded-xl border border-gray-800 cursor-pointer transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            whileHover={{ scale: 1.05, borderColor: "#a855f7" }}
          >
            <Database className="text-purple-500 mb-1" />
            <h3 className="font-semibold text-lg mb-2">Fintech Focus</h3>
            <p className="text-gray-400 text-sm">
              Building secure financial applications
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-900 p-6 rounded-xl border border-gray-800 cursor-pointer transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            whileHover={{ scale: 1.05, borderColor: "#a855f7" }}
          >
            <Zap className="text-purple-500 mb-1" />
            <h3 className="font-semibold text-lg mb-2">Performance</h3>
            <p className="text-gray-400 text-sm">
              Optimizing for scale and speed
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
