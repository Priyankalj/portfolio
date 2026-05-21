import { motion } from "framer-motion";

function Education() {
  return (
    <section className="px-6 md:px-16 py-32">
      
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl font-bold text-purple-400">
          Education
        </h2>
        <p className="text-gray-400 mt-4">
          Academic foundation in engineering and technology
        </p>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{
          y: -4,
          boxShadow: "0px 20px 30px rgba(0,0,0,0.4)"
        }}
        className="max-w-4xl mx-auto border border-gray-800 rounded-2xl p-8 md:p-10 bg-[#0b0f1a]"
      >

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
          
          {/* Left */}
          <div className="flex items-center gap-4">
            
            {/* Icon (ONLY gradient here) */}
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-xl">
              🎓
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                Bachelor of Engineering
              </h3>

              <p className="text-purple-400 text-sm">
                Electronics & Telecommunication
              </p>

              <p className="text-gray-500 text-sm mt-1">
                Sir M Visvesvaraya Institute of Technology
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="mt-4 md:mt-0 text-right">
            <p className="text-yellow-400 font-medium">
              CGPA: 8.0
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed">
          Built a strong foundation in electronics, telecommunication systems,
          and computer science fundamentals. Developed problem-solving skills
          and technical expertise that translated seamlessly into software
          development, particularly in building performant mobile applications.
        </p>

      </motion.div>
    </section>
  );
}

export default Education;