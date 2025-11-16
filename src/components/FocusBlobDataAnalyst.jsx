import { motion } from "framer-motion";

export default function FocusBlobDataAnalyst() {
  return (
    <div className="relative flex items-center justify-center py-20">

      {/* Glowing Multi-Gradient Blob */}
      <div
        className="
          w-[420px] h-[420px] rounded-[45%]
          bg-gradient-to-br from-sky-500/20 via-emerald-400/15 to-orange-400/20
          border border-white/10 shadow-[0px_0px_120px_rgba(0,0,0,0.6)]
          backdrop-blur-xl flex items-center justify-center
        "
      >
        {/* Inner oval */}
        <div
          className="
            bg-black/60 border border-white/10 rounded-[40%]
            px-10 py-8 text-center
          "
        >
          <p className="text-gray-400 text-xs tracking-widest mb-1">
            FOCUS
          </p>
          <p className="text-xl font-semibold leading-snug">
            Business Intelligence
            <br />
            Analytics, Dashboards & Reporting
          </p>
        </div>
      </div>

      {/* Floating Labels — Data Analyst Version */}

      {/* Top Right Label */}
      <span
        className="
          absolute -top-4 right-10
          bg-black/60 border border-emerald-400 rounded-full
          px-4 py-1 text-xs
        "
      >
        SQL • ETL Pipelines
      </span>

      {/* Bottom Right Label */}
      <span
        className="
          absolute bottom-12 right-6
          bg-black/60 border border-sky-400 rounded-full
          px-4 py-1 text-xs
        "
      >
        Power BI • Tableau
      </span>

      {/* Bottom Left Label */}
      <span
        className="
          absolute bottom-2 left-6
          bg-black/60 border border-orange-400 rounded-full
          px-4 py-1 text-xs
        "
      >
        KPIs • Forecasting
      </span>

      {/* Upper Left Label */}
      <span
        className="
          absolute -top-4 left-10
          bg-black/60 border border-fuchsia-400 rounded-full
          px-4 py-1 text-xs
        "
      >
        Excel • Automation
      </span>
    </div>
  );
}
