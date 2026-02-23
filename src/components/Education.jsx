import { motion } from "framer-motion";
import { education } from "../data";

export default function Education() {
  return (
    <section
      id="education"
      className="py-28 bg-[#050509] border-t border-white/5 relative"
    >
      <div
        className="
          absolute left-[-200px] bottom-[50px] w-[500px] h-[500px]
          bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.12),transparent_70%)]
          blur-3xl
        "
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm text-emerald-400 font-medium mb-2"
        >
          04. Education
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-semibold mb-12 text-white"
        >
          Background
        </motion.h2>

        <div className="space-y-8">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="
                bg-white/5 border border-white/10 backdrop-blur-xl
                rounded-xl p-6 hover:border-emerald-300/30 transition
                shadow-[0_0_40px_rgba(0,0,0,0.4)]
              "
            >
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">
                {edu.period}
              </p>
              <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
              <p className="text-sm text-gray-300 mb-4">{edu.school}</p>
              <p className="text-xs text-gray-400 mb-2">Relevant coursework</p>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-black/50 border border-white/10 px-3 py-1 text-xs text-gray-300"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
