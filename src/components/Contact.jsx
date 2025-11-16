import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-[#050509] border-t border-white/5 relative overflow-hidden"
    >
      {/* Background spotlight */}
      <div
        className="
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-[700px] h-[700px]
          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_70%)]
          blur-3xl
        "
      />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        {/* Heading Animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm text-emerald-400 font-medium mb-2"
        >
          04. Get In Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-white mb-4"
        >
          Let’s build something together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-sm text-gray-300 leading-relaxed mb-10"
        >
          I’m actively looking for roles and collaborations in Data Engineering,
          BI Analytics, and systems that blend SQL pipelines, dashboards,
          automation, and real-world insights.  
          If that sounds like you—let’s talk.
        </motion.p>

        {/* CTA BUTTON WITH ANIMATED GLOW */}
        <motion.a
          href="mailto:tejaswi.ganji@stonybrook.edu"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(16,185,129,0.5)",
          }}
          className="
            relative inline-flex items-center justify-center
            px-10 py-3 text-sm font-semibold rounded-full
            bg-white text-black shadow-xl
            hover:bg-gray-200 transition
          "
        >
          Say Hello

          {/* Animated Glow Ring */}
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-transparent"
            animate={{
              borderColor: [
                "rgba(16,185,129,0.1)",
                "rgba(16,185,129,0.4)",
                "rgba(16,185,129,0.1)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.a>
      </div>
    </section>
  );
}
