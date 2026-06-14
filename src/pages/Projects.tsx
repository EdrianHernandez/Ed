import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { NavBar } from "../components/NavBar";

const allProjects = [
  {
    title: "FLOODGUARD",
    description: "Flood monitoring and disaster response dashboard for Batangas",
    tags: ["UI/UX Design", "Dashboard"],
    link: "/projects/floodguard",
    image: "/FLOODGUARD ASSETS/Floodguard thumbnail.png"
  },
  {
    title: "ShoreThing",
    description: "Coastal travel booking platform for Batangas destinations",
    tags: ["UI/UX Design", "Booking Platform"],
    link: "/projects/shorething",
    image: "/SHORETHING ASSETS/Shorething Thumbnail.png",
  },
  {
    title: "Bahanihan",
    description: "Community disaster response command center with live data",
    tags: ["UI/UX Design", "Community Platform"],
    link: "/projects/bahanihan",
    image: "/BAHANIHAN ASSETS/Bahanihan Thumbnail.png"
  },
  {
    title: "PhilHealth",
    description: "Redesigned the PhilHealth website for Technofusion 2025 at Batangas State University, winning 2nd Place",
    tags: ["UI/UX Redesign"],
    link: "/projects/philhealth",
    image: "/PHILHEALTH ASSETS/Philhealth Thumbnail.png"
  },
  {
    title: "TsekApp",
    description: "Mobile-first clinical triaging and preventative health system for Naga City",
    tags: ["UI/UX Design", "Health Tech"],
    link: "/projects/tsekapp",
    image: "/TSEKAPP ASSETS/TSEKAPP Thumbnail.png"
  }
];

function getNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

function TitleFont({ title, className }: { title: string; className?: string }) {
  if (title === "FLOODGUARD") {
    return (
      <h3 className={cn("font-montserrat tracking-tight", className)}>
        <span className="font-[1000]">FLOOD</span>
        <span className="font-[200]">GUARD</span>
      </h3>
    );
  }
  if (title === "ShoreThing") {
    return (
      <h3 className={cn("font-serif font-bold tracking-tight uppercase", className)}>
        {title}
      </h3>
    );
  }
  if (title === "TsekApp") {
    return (
      <h3 className={cn("font-montserrat font-bold tracking-tight", className)}>
        <span className="font-[800]">TSEK</span>
        <span className="font-[200]">APP</span>
      </h3>
    );
  }
  return (
    <h3 className={cn("font-montserrat font-bold tracking-tight uppercase", className)}>
      {title}
    </h3>
  );
}

export function Projects() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, backgroundColor: "#000000" }} 
      animate={{ opacity: 1, backgroundColor: "transparent" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="pb-24 min-h-screen bg-[#0a0a0c]"
    >
      <NavBar />
      <div className="pt-32 sm:pt-36 md:pt-44 px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-16 md:mb-24"
        >
          <div className="flex flex-wrap items-end justify-between gap-y-4">
            <div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2 mb-3 sm:mb-4"
              >
                <Link
                  to="/"
                  className="font-mono text-[0.6rem] sm:text-[0.65rem] md:text-xs text-[#737373] uppercase tracking-[0.2em] hover:text-white transition-colors duration-500"
                >
                  Home
                </Link>
                <ChevronRight size={10} className="text-white/20" />
                <span className="font-mono text-[0.6rem] sm:text-[0.65rem] md:text-xs text-white/50 uppercase tracking-[0.2em]">
                  Archive
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#e2e2e2] to-[#737373]"
              >
                Archive
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#737373] text-xs sm:text-sm md:text-lg font-light mt-2 sm:mt-3 md:mt-4"
              >
                A collection of my featured design work
              </motion.p>
            </div>

            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-[0.6rem] sm:text-[0.65rem] md:text-xs text-white/40 uppercase tracking-[0.2em] shrink-0"
            >
              {String(allProjects.length).padStart(2, '0')} Projects
            </motion.span>
          </div>
        </motion.div>

        <div className="flex flex-col gap-3">
          {allProjects.map((project, i) => {
            const isExpanded = hoveredCard === project.title;
            return (
              <motion.div
                key={project.title}
                layout
                onMouseEnter={() => setHoveredCard(project.title)}
                onMouseLeave={() => setHoveredCard(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  layout: { duration: 0.4, type: "spring", bounce: 0.1 },
                  opacity: { duration: 0.5, delay: i * 0.1 },
                  y: { duration: 0.5, delay: i * 0.1 }
                }}
                className="relative overflow-hidden rounded-2xl cursor-pointer"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                {/* Shared background image — always present */}
                <div className="absolute inset-0 z-0">
                  {project.image && (
                    <>
                      <img
                        src={project.image}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                      />
                      <motion.div
                        animate={{ opacity: isExpanded ? 0.5 : 0.15 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0"
                      />
                    </>
                  )}
                  <motion.div
                    animate={{
                      background: isExpanded
                        ? "linear-gradient(to right, rgba(10,10,12,1) 0%, rgba(10,10,12,0.6) 50%, rgba(10,10,12,0.4) 100%)"
                        : "linear-gradient(to right, rgba(10,10,12,0.8) 0%, rgba(10,10,12,0.5) 50%, rgba(10,10,12,0.8) 100%)"
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  />
                </div>

                <Link to={project.link} className="relative z-10 block">
                  {/* Collapsed Header */}
                  <motion.div
                    animate={{ opacity: isExpanded ? 0.6 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-4 p-5"
                  >
                    <span className="text-2xl font-bold text-white/20 font-display">{getNumber(i)}</span>
                    <TitleFont title={project.title} className="text-lg text-white/90 flex-1" />
                    <motion.span
                      animate={{ rotate: isExpanded ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white/30 text-xl"
                    >
                      ›
                    </motion.span>
                  </motion.div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.tags.map((tag) => (
                              <span key={tag} className="bg-white/10 backdrop-blur-sm text-white/70 text-[10px] md:text-xs font-medium px-2.5 py-1 rounded-full border border-white/10">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <p className="text-[#a3a3a3] text-sm leading-relaxed font-light line-clamp-3 mb-4 text-pretty">
                            {project.description}
                          </p>
                          <span className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 self-start">
                            <span>View Project</span>
                            <ArrowUpRight size={14} />
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Link>

                {/* Border */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-20" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
