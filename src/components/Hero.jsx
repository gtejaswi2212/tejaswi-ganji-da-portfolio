import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#050509]">

      {/* 🔵 Animated Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 2 }}
        className="
          
          absolute top-[-120px] right-[-80px] w-[450px] h-[450px] max-w-full overflow-hidden

          bg-[radial-gradient(circle_at_30%_20%,rgba(74,222,128,0.4),transparent_65%)]
          bg-[radial-gradient(circle_at_70%_60%,rgba(34,211,238,0.35),transparent_65%)]
          bg-[radial-gradient(circle_at_40%_80%,rgba(249,115,22,0.35),transparent_65%)]
          blur-3xl
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-emerald-400 tracking-widest text-sm mb-3">
            HI, MY NAME IS
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.08)]">
          

            Tejaswi Ganji
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mt-3 font-semibold">
            Data Analyst & BI Engineer
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl">
            I specialize in analytics, KPI dashboards, SQL pipelines,
            automations, and business intelligence systems that help companies
            make high-impact, data-driven decisions.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-black rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/20 text-white rounded-full font-semibold hover:border-white transition"
            >
              Say Hello
            </a>
          </div>
        </motion.div>

        {/* RIGHT: Mastra-Style Animated BLOB */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center"
        >
          {/* 🟢 Breathing Blob */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              w-[400px] h-[400px] rounded-[45%]
              bg-gradient-to-br from-sky-500/25 via-emerald-400/20 to-orange-400/20
              border border-white/10 shadow-2xl backdrop-blur-xl
              flex items-center justify-center
            "
          >
            {/* Center box */}
            <motion.div
              animate={{
                scale: [1, 1.07, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                bg-black/60 backdrop-blur-xl px-10 py-8
                rounded-[40%] border border-white/10 text-center
              "
            >
              <p className="text-gray-300 tracking-widest text-xs mb-2">FOCUS</p>
              <p className="text-lg font-semibold text-gray-200 leading-snug">
                Business Intelligence <br />
                Analytics & Reporting
              </p>
            </motion.div>

            {/* FLOATING LABELS */}

            {/* SQL */}
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="
                absolute -top-4 right-8 px-4 py-1 text-xs
                border border-emerald-400 rounded-full bg-black/60
              "
            >
              SQL • ETL Pipelines
            </motion.span>

        





            {/* Power BI / Tableau */}
            <motion.span
              animate={{ y: [3, -3, 3] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="
                absolute bottom-10 right-6 px-4 py-1 text-xs
                border border-sky-400 rounded-full bg-black/60
              "
            >
              Power BI • Tableau
            </motion.span>

            {/* Forecasting */}
            <motion.span
              animate={{ x: [-4, 4, -4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="
                absolute -bottom-4 left-6 px-4 py-1 text-xs
                border border-orange-400 rounded-full bg-black/60
              "
            >
              KPIs • Forecasting
            </motion.span>

            {/* Excel Automation */}
            <motion.span
              animate={{ x: [4, -4, 4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="
                absolute -top-4 left-6 px-4 py-1 text-xs
                border border-fuchsia-400 rounded-full bg-black/60
              "
            >
              Excel • Automation
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
