import { motion } from "framer-motion";
import { experience } from "../data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 bg-[#050509] border-t border-white/5 relative"
    >
      {/* Background glow */}
      <div
        className="
        absolute right-[-200px] top-[50px] w-[500px] h-[500px]
        bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.15),transparent_70%)]
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
          02. Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-semibold mb-12 text-white"
        >
          Where I’ve Worked
        </motion.h2>

        {/* TIMELINE WRAPPER */}
        <div className="relative pl-10 border-l border-white/10 space-y-14">

          {/* Animated glowing timeline pulse */}
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute left-[-2px] top-0 bottom-0 w-[3px] bg-emerald-400/40 blur-[2px]"
          />

          {experience.map((job, idx) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline glowing dot */}
              <motion.div
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="
                  absolute -left-[16px] top-1 h-4 w-4
                  rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.8)]
                "
              />

              {/* JOB CARD */}
              <div
                className="
                  bg-white/5 border border-white/10 backdrop-blur-xl
                  rounded-xl p-6 hover:border-emerald-300/30 transition
                  shadow-[0_0_40px_rgba(0,0,0,0.4)]
                "
              >
                <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">
                  {job.period}
                </p>

                <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                <p className="text-sm text-gray-300 mb-4">{job.company}</p>

                <ul className="space-y-2 text-sm text-gray-300">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3 items-start">
                      <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-emerald-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
