import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

const allProjects = [
  {
    title: "FLOODGUARD",
    description: "Flood monitoring and disaster response dashboard for Batangas",
    tags: ["UI/UX Design", "Dashboard"],
    span: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2",
    link: "/projects/floodguard",
    image: "/FLOODGUARD ASSETS/Floodguard thumbnail.png"
  },
  {
    title: "ShoreThing",
    description: "Coastal travel booking platform for Batangas destinations",
    tags: ["UI/UX Design", "Booking Platform"],
    span: "col-span-1 row-span-1",
    link: "/projects/shorething",
    image: "/SHORETHING ASSETS/Shorething Thumbnail.png",
  },
  {
    title: "Bahanihan",
    description: "Community disaster response command center with live data",
    tags: ["UI/UX Design", "Community Platform"],
    span: "col-span-1 row-span-1",
    link: "/projects/bahanihan",
    image: "/BAHANIHAN ASSETS/Bahanihan Thumbnail.png"
  }
];

function ArchiveCard({ project }: { project: typeof allProjects[0] }) {
  return (
    <Link to={project.link} className={cn("block h-full", project.span)}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 }
        }}
        whileHover={{ y: -12, scale: 0.98 }}
        className={cn(
          "bento-card group relative flex flex-col justify-end p-6 md:p-8 rounded-[1.5rem] overflow-hidden transition-all duration-500 h-full w-full",
          "shadow-[0_4px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_50px_rgba(99,102,241,0.15)]"
        )}
      >
        {project.image && (
          <img 
            src={project.image} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700 ease-out" 
          />
        )}
        {/* Stronger vignette for text readability */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
        
        <div className="relative z-20 w-full">
          {/* Tags - hidden by default, reveal on hover */}
          <div className="flex flex-wrap gap-2 mb-0 group-hover:mb-3 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-12 transition-all duration-500">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-white/10 backdrop-blur-sm text-white/70 text-[10px] md:text-xs font-medium px-2.5 py-1 rounded-full border border-white/10">
                {tag}
              </span>
            ))}
          </div>

          {/* Title - shifts up on hover to make room */}
          <div className="flex justify-between items-end w-full mb-0 group-hover:mb-4 transition-all duration-500">
            {project.title === "FLOODGUARD" ? (
              <h3 className="font-montserrat text-2xl md:text-3xl text-white group-hover:text-white/95 transition-colors tracking-tight">
                <span className="font-[1000]">FLOOD</span>
                <span className="font-[200]">GUARD</span>
              </h3>
            ) : project.title === "ShoreThing" ? (
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white group-hover:text-white/95 transition-colors tracking-tight uppercase">
                {project.title}
              </h3>
            ) : (
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-white group-hover:text-white/95 transition-colors tracking-tight uppercase">
                {project.title}
              </h3>
            )}
          </div>

          {/* Description - hidden by default, reveal on hover */}
          <p className="text-[#a3a3a3] text-sm md:text-base leading-relaxed font-light line-clamp-2 transition-all duration-500 text-pretty mb-0 group-hover:mb-4 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-24">
            {project.description}
          </p>

          {/* View Project CTA - hidden by default, reveal on hover */}
          <div className="flex items-center gap-2 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-10 transition-all duration-500">
            <span className="text-sm font-medium">View Project</span>
            <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export function Projects() {
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
      <div className="pt-8 sm:pt-12 md:pt-24 px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-16 md:mb-24"
        >
          <div className="flex flex-wrap items-center justify-between gap-y-4">
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
              {/* Back button - icon only */}
              <Link 
                to="/" 
                className="group w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors duration-500 shrink-0"
              >
                <ArrowLeft size={18} className="text-[#737373] group-hover:text-white group-hover:-translate-x-0.5 transition-all duration-500" />
              </Link>

              {/* Title + Subtitle */}
              <div>
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
            </div>

            {/* Project count */}
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
