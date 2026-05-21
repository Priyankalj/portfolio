import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

function Skills() {
  return (
    <section
      id="skills"
      className="px-6 md:px-16 py-24"
    >
      {/* Title */}
      <div className="text-center mb-16">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-purple-400"
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 mt-4"
        >
          A comprehensive toolkit for building modern mobile and web applications
        </motion.p>

      </div>
      <div className="grid md:grid-cols-3 gap-8">

       <motion.div
  variants={cardVariant}
  initial="hidden"
  whileInView="visible"
  whileHover={{
    y: -8,
    boxShadow: "0px 20px 20px rgba(124, 58, 237, 0.15)"
  }}
  transition={{ type: "spring", stiffness: 300 }}
  viewport={{ once: true }}
  className="group border border-gray-800 rounded-2xl p-8 bg-black/40 backdrop-blur-md transition"
>

          <div className="absolute inset-0 bg-purple-600/10 blur-xl opacity-0  transition"></div>

          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
            Frontend (Mobile & Web)
          </h3>

          <div className="grid grid-cols-3 gap-4 text-gray-300 text-sm">
            <p>React Native</p>
            <p>React.js</p>
            <p>JavaScript</p>
            <p>Redux</p>
            <p>Context API</p>
            <p>React Navigation</p>
            <p>Tailwind CSS</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>
        </motion.div>

        {/* Backend */}

 <motion.div
  variants={cardVariant}
  initial="hidden"
  whileInView="visible"
  whileHover={{
    y: -8,
    boxShadow: "0px 20px 20px rgba(124, 58, 237, 0.15)"
  }}
  transition={{ type: "spring", stiffness: 300 }}
  viewport={{ once: true }}
  className="group border border-gray-800 rounded-2xl p-8 bg-black/40 backdrop-blur-md transition"
>

         <div className="absolute inset-0 bg-purple-600/10 blur-xl opacity-0  transition"></div>

          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            Backend & APIs
          </h3>

          <div className="grid grid-cols-2 gap-4 text-gray-400 text-sm">
            <p>Node.js</p>
            <p>Express.js</p>
            <p>REST APIs</p>
            <p>JWT Authentication</p>
          </div>
        </motion.div>

        {/* Database */}

       <motion.div
  variants={cardVariant}
  initial="hidden"
  whileInView="visible"
  whileHover={{
    y: -8,
    boxShadow: "0px 20px 20px rgba(124, 58, 237, 0.15)"
  }}
  transition={{ type: "spring", stiffness: 300 }}
  viewport={{ once: true }}
  className="group border border-gray-800 rounded-2xl p-8 bg-black/40 backdrop-blur-md transition"
>

        <div className="absolute inset-0 bg-purple-600/10 blur-xl opacity-0  transition"></div>

          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Database
          </h3>

          <div className="grid grid-cols-2 gap-4 text-gray-400 text-sm">
            <p>PostgreSQL</p>
            <p>MySQL</p>
          </div>

        </motion.div>

        {/* Cloud */}

   <motion.div
  variants={cardVariant}
  initial="hidden"
  whileInView="visible"
  whileHover={{
    y: -8,
    boxShadow: "0px 20px 20px rgba(124, 58, 237, 0.15)"
  }}
  transition={{ type: "spring", stiffness: 300 }}
  viewport={{ once: true }}
  className="group border border-gray-800 rounded-2xl p-8 bg-black/40 backdrop-blur-md transition"
>

          <div className="absolute inset-0 bg-purple-600/10 blur-xl opacity-0  transition"></div>

          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
            Cloud & Services
          </h3>

          <div className="grid grid-cols-2 gap-4 text-gray-400 text-sm">
            <p>Firebase Push Notifications</p>
            <p>Firebase Crashlytics</p>
            <p>Firebase Analytics</p>
            <p>OTA Updates</p>
          </div>

        </motion.div>

        {/* Animations */}

        <motion.div
  variants={cardVariant}
  initial="hidden"
  whileInView="visible"
  whileHover={{
    y: -8,
    boxShadow: "0px 20px 20px rgba(124, 58, 237, 0.15)"
  }}
  transition={{ type: "spring", stiffness: 300 }}
  viewport={{ once: true }}
  className="group border border-gray-800 rounded-2xl p-8 bg-black/40 backdrop-blur-md transition"
>

          <div className="absolute inset-0 bg-purple-600/10 blur-xl opacity-0  transition"></div>
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            Animations & Performance
          </h3>

          <div className="grid grid-cols-2 gap-4 text-gray-400 text-sm">
            <p>React Native Reanimated</p>
            <p>React Native Skia</p>
            <p>Performance Optimization</p>
          </div>

        </motion.div>

        {/* Tools */}

          <motion.div
  variants={cardVariant}
  initial="hidden"
  whileInView="visible"
  whileHover={{
    y: -8,
    boxShadow: "0px 20px 20px rgba(124, 58, 237, 0.15)"
  }}
  transition={{ type: "spring", stiffness: 300 }}
  viewport={{ once: true }}
  className="group border border-gray-800 rounded-2xl p-8 bg-black/40 backdrop-blur-md transition"
>

          <div className="absolute inset-0 bg-purple-600/10 blur-xl opacity-0  transition"></div>

          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            Tools
          </h3>

          <div className="grid grid-cols-3 gap-4 text-gray-400 text-sm">
            <p>Git</p>
            <p>GitHub</p>
            <p>Bitbucket</p>
            <p>VSCode</p>
            <p>Jira</p>
            <p>Postman</p>
            <p>CI/CD</p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Skills;