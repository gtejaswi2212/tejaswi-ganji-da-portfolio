import { motion } from "framer-motion";
import { skills } from "../data";
import myPhoto from "../assets/my_photo.jpg"; // ← put your image in /src/assets/

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
            I’m a data-focused engineer and MS Data Science student at Stony Brook University,
            working on clinical analytics, dashboards, and reproducible data pipelines.
          </p>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            I build predictive models, create high-signal dashboards, automate reporting,
            and support decision-making through clean data systems and explainable analytics.
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

        {/* RIGHT SIDE — YOUR PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center"
        >
          <div className="relative">
            <img
              src={myPhoto}
              alt="Tejaswi Ganji"
              className="
                w-64 h-64 md:w-80 md:h-80 rounded-3xl object-cover
                border border-white/10 shadow-2xl
              "
            />

            {/* Glow behind image */}
            <div className="
              absolute inset-0 rounded-3xl blur-3xl
              bg-[radial-gradient(circle,rgba(16,185,129,0.25),transparent_60%)]
            "></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
