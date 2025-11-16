import { motion } from "framer-motion";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-[#050509] relative">

      {/* Background Glow */}
      <div
        className="
          absolute left-[-200px] top-[100px] w-[500px] h-[500px]
          bg-[radial-gradient(circle_at_40%_40%,rgba(74,222,128,0.18),transparent_70%)]
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
          03. Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-semibold mb-12 text-white"
        >
          Some Things I’ve Built
        </motion.h2>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="
                relative rounded-3xl overflow-hidden
                bg-white/5 border border-white/10
                backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.4)]
                p-6 flex flex-col justify-between
                hover:shadow-[0_0_60px_rgba(16,185,129,0.35)]
                hover:border-emerald-400/40
                transition-all duration-300
              "
            >
              {/* Animated border highlight */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-transparent"
                animate={{
                  borderColor: ["rgba(16,185,129,0.1)", "rgba(16,185,129,0.4)", "rgba(16,185,129,0.1)"],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Content */}
              <div className="relative z-10">
                <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-300 mb-2">
                  {p.tag}
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {p.title}
                </h3>

                <p className="text-sm text-gray-300 mb-4">
                  {p.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 text-[11px] text-gray-300 mb-4">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full bg-black/50
                        border border-white/10
                        px-3 py-1 backdrop-blur-md
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Repo link */}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      text-sm text-emerald-400 hover:text-emerald-300
                      font-medium transition
                    "
                  >
                    View Repo →
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
