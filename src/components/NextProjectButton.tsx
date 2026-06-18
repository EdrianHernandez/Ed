import { motion } from "motion/react";
import { Link } from "react-router-dom";

interface NextProjectButtonProps {
  path: string;
  direction: "next" | "previous";
  projectName: string;
}

export function NextProjectButton({ path, direction, projectName }: NextProjectButtonProps) {
  const isNext = direction === "next";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 w-auto"
    >
      <Link
        to={path}
        className={`group relative w-full px-5 py-3 sm:px-6 sm:py-3.5 rounded-full bg-black/50 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_0_30px_-5px_rgba(255,255,255,0.05)] flex items-center justify-between gap-5 transition-all duration-500 ease-out hover:ring-white/40 hover:bg-white/10 hover:shadow-[0_0_40px_0px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95 ${
          isNext ? "" : "flex-row-reverse"
        }`}
      >
        {/* Direction Label + Project Name */}
        <div className={`flex flex-col ${isNext ? "text-left" : "text-right"}`}>
          <span className="text-[10px] sm:text-xs font-medium text-neutral-500 uppercase tracking-wider transition-colors duration-500 group-hover:text-neutral-300">
            {isNext ? "Next" : "Prev"}
          </span>
          <span className="text-sm sm:text-base font-semibold text-neutral-300 transition-colors duration-500 group-hover:text-white">
            {projectName}
          </span>
        </div>

        {/* Arrow */}
        <svg
          className={`w-4 h-4 text-neutral-500 transition-all duration-500 group-hover:text-white flex-shrink-0 ${
            isNext ? "group-hover:translate-x-1" : "group-hover:-translate-x-1"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isNext ? (
            <path d="M5 12h14M12 5l7 7-7 7" />
          ) : (
            <path d="M19 12H5M12 19l-7-7 7-7" />
          )}
        </svg>
      </Link>
    </motion.div>
  );
}
