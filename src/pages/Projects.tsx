import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

const allProjects = [
  {
    title: "FLOODGUARD",
    description: "Designed a high-stakes, mission-critical interface for disaster response. Engineered intuitive data visualizations and streamlined the navigation hierarchy for rapid decision-making in high-pressure environments.",
    span: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2"
  },
  {
    title: "ShoreThing",
    description: "Architected a seamless, client-centric digital experience. Focused on optimizing user flow friction and establishing a stark, brutalist aesthetic combined with micro-interactions.",
    span: "col-span-1 row-span-1"
  },
  {
    title: "Bahanihan",
    description: "Sculpted a purpose-driven layout for community engagement. Simplified dense information architectures into highly scannable, digestible components.",
    span: "col-span-1 row-span-1"
  },
  {
    title: "Karma Cleaning",
    description: "Overhauled visual hierarchy for a professional service platform. Refined typography pairings and strategic contrast to dramatically improve CTA conversion rates.",
    span: "col-span-1 md:col-span-2 lg:col-span-1 row-span-1"
  }
];

function ArchiveCard({ project }: { project: typeof allProjects[0] }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -8, scale: 0.98 }}
      className={cn(
        "group relative flex flex-col justify-end p-6 md:p-8 rounded-[1.5rem] bg-card border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] cursor-pointer",
        project.span
      )}
    >
      {/* Subtle inner gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-20 w-full">
        <div className="flex justify-between items-end w-full mb-3 md:mb-4">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white group-hover:text-white/95 transition-colors tracking-tight">
            {project.title}
          </h3>
        </div>
        <p className="text-[#a3a3a3] text-sm md:text-base leading-relaxed font-light line-clamp-3 group-hover:line-clamp-none transition-all duration-500 text-pretty">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <motion.div 
      initial={{ opacity: 0, backgroundColor: "#000000" }} 
      animate={{ opacity: 1, backgroundColor: "transparent" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="pb-24 min-h-screen bg-[#0a0a0c]"
    >
      <div className="pt-12 md:pt-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <Link 
            to="/" 
            className="group inline-flex items-center space-x-3 text-[#737373] hover:text-white transition-colors duration-500 mb-12"
          >
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-500 shrink-0">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-500" />
            </div>
            <span className="font-mono text-[0.65rem] md:text-xs uppercase tracking-[0.25em] font-semibold">Back to Home</span>
          </Link>
          
          <h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#e2e2e2] to-[#737373] drop-shadow-[0_4px_24px_rgba(255,255,255,0.1)]">
            Archive.
          </h1>
        </motion.div>

        <motion.div 
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
          }}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[300px] md:auto-rows-[340px] gap-4 md:gap-6"
        >
          {allProjects.map((project) => (
            <ArchiveCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
