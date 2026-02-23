import { motion } from "framer-motion";
import { skills } from "../data";

export default function SkillsOrbit() {
  return (
    <section id="about" className="py-28 bg-[#050509] text-white relative">

      {/* Background Glow */}
      <div
        className="
          absolute top-[-200px] left-[-200px] w-[600px] h-[600px]
          bg-[radial-gradient(circle_at_40%_40%,rgba(16,185,129,0.12),transparent_70%)]
          blur-3xl
        "
      />

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm text-emerald-400 font-medium mb-2">
            01. About
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-5">
            About Me
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            I’m a Data Scientist with 4+ years building end-to-end AI systems, RAG pipelines,
            LLM integration, and production ML. I've deployed generative AI solutions, predictive
            models, and data engineering pipelines at scale—and I'm passionate about translating
            complex AI for non-technical stakeholders with measurable business impact.
          </p>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            I design scalable ETL pipelines (3M+ records daily), develop models on HIPAA-regulated
            healthcare data, and optimize systems for reliability and speed. What sets me apart is
            the combination of production deployment and cross-functional collaboration.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm mt-4">
            {skills.map((s) => (
              <li key={s} className="text-gray-300 flex items-start gap-2">
                <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-emerald-400" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT SIDE — Photo or initials placeholder; add my_photo.jpg to src/assets to show photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center"
        >
          <div className="relative">
            <div
              className="
                w-64 h-64 md:w-80 md:h-80 rounded-3xl
                border border-white/10 shadow-2xl
                bg-gradient-to-br from-emerald-500/20 via-sky-500/10 to-transparent
                flex items-center justify-center
              "
            >
              <span className="text-5xl md:text-6xl font-bold text-white/90 tracking-tight">TG</span>
            </div>
            <div className="
              absolute inset-0 rounded-3xl blur-3xl
              bg-[radial-gradient(circle,rgba(16,185,129,0.25),transparent_60%)]
            " />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
