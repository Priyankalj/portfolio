import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { ArrowRight, Download } from "lucide-react";

function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <section className="px-6 md:px-16 pt-10 md:pt-20 pb-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.span
            className="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            React Native Developer
          </motion.span>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mt-6 leading-tight 
  bg-gradient-to-r from-white to-[rgba(209,158,255,1)] 
  bg-clip-text text-transparent"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Hi, I'm Priyanka
          </motion.h1>
          <motion.h2
            className="text-gray-300 text-xl mt-4 font-medium"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            Building scalable mobile apps that power fintech innovation
          </motion.h2>

          <motion.p
            className="text-gray-400 mt-6 max-w-xl font-normal"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            With 3.4 years of experience crafting high-performance React Native
            applications for fintech products, I specialize in building scalable
            mobile solutions that handle thousands of users with seamless
            performance.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            {/* View Projects */}
            <a
              href="#projects"
              className="bg-gradient-to-r from-[rgba(146,31,250,1)] to-[rgba(43,90,251,1)] px-6 py-3 rounded-lg font-normal transition hover:opacity-90 flex items-center"
            >
              View Projects
              <ArrowRight size={16} className="ml-2.5" />
            </a>

            {/* Resume */}
            <a
    href="/priyanka_lj_resume.pdf"
  download
  className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 font-normal transition flex items-center"
>
  <Download className="mr-2" size={16} />
  Download Resume
</a>
            {/* Contact */}
            <a
              href="#contact"
              className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 font-normal transition flex items-center"
            >
              Contact Me
            </a>
          </motion.div>
          <motion.div
            className="flex gap-4 mt-8"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <a
              href="https://www.linkedin.com/in/priyankalj/"
              target="_blank"
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://github.com/Priyankalj?tab=repositories"
              target="_blank"
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ljpriyanka7@gmail.com&su=Portfolio%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition"
            >
              <HiOutlineMail size={18} />
            </a>
          </motion.div>
        </div>

        <div className="relative">
  {/* Experience Badge */}
  <motion.div
    className="absolute top-4 right-4 bg-purple-600 px-4 py-3 rounded-xl text-center z-10"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.7, type: "spring", stiffness: 120 }}
  >
    <p className="text-lg font-bold">3.4</p>
    <p className="text-xs font-medium">Years Exp</p>
  </motion.div>

  {/* Image */}
  <motion.img
  src="https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwY29kaW5nfGVufDF8fHx8MTc3MzI1MDczMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  alt="Developer Workspace"
  className="rounded-3xl w-full h-[320px] object-cover shadow-2xl"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.5, duration: 0.6 }}
/>

  {/* Glow */}
  <div className="absolute inset-0 bg-purple-500/20 blur-3xl -z-10"></div>
</div>
      </div>
    </section>
  );
}

export default Hero;
