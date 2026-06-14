import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";
import { Link, useNavigate } from "react-router-dom";

const projects = [
  {
    title: "FLOODGUARD",
    description: "Flood monitoring and disaster response dashboard for Batangas",
    tags: ["UI/UX Design", "Dashboard"],
    tech: ["Figma"],
    link: "/projects/floodguard",
    image: "/FLOODGUARD ASSETS/Floodguard thumbnail.png"
  },
  {
    title: "ShoreThing",
    description: "Coastal travel booking platform for Batangas destinations",
    tags: ["UI/UX Design", "Booking Platform"],
    tech: ["Figma"],
    link: "/projects/shorething",
    image: "/SHORETHING ASSETS/Shorething Thumbnail.png",
  },
  {
    title: "TsekApp",
    description: "Mobile-first clinical triaging and preventative health system for Naga City",
    tags: ["UI/UX Design", "Health Tech"],
    tech: ["Figma"],
    link: "/projects/tsekapp",
    image: "/TSEKAPP ASSETS/TSEKAPP HERO.jpg"
  },
  {
    title: "Bahanihan",
    description: "Community disaster response command center with live data",
    tags: ["UI/UX Design", "Community Platform"],
    tech: ["Figma"],
    link: "/projects/bahanihan",
    image: "/BAHANIHAN ASSETS/Bahanihan Thumbnail.png"
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

export function Works() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative z-10 bg-[#0a0a0c]">
      <div className="mb-12 md:mb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-mono text-xs md:text-sm text-[#666] font-semibold uppercase tracking-[0.25em] mb-4 md:mb-6 block"
        >
          01 // Work
        </motion.span>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6 md:mb-8 flex justify-center origin-center"
        >
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent relative">
            <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-4xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tighter mb-4 md:mb-6 leading-none text-transparent bg-clip-text bg-[length:200%_200%] animate-gradient-shift drop-shadow-[0_0_40px_rgba(255,255,255,0.12)]"
          style={{
            backgroundImage: "linear-gradient(90deg, #ffffff 0%, #c0c0c0 25%, #e8e8e8 50%, #a0a0a0 75%, #ffffff 100%)",
          }}
        >
          Selected Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[#8a8a8a] text-base md:text-xl font-light max-w-2xl mx-auto text-pretty leading-relaxed"
        >
          Projects that push boundaries in UI/UX design and creative development.
        </motion.p>
      </div>

      {/* Mobile: Vertical Stack */}
      <div className="lg:hidden flex flex-col gap-3">
        {projects.map((project, i) => {
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
              {/* Collapsed Header */}
              <div className="flex items-center gap-4 p-5">
                <span className="text-2xl font-bold text-white/20 font-display">{getNumber(i)}</span>
                <TitleFont title={project.title} className="text-lg text-white/90 flex-1" />
                <motion.span
                  animate={{ rotate: isExpanded ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-white/30 text-xl"
                >
                  ›
                </motion.span>
              </div>

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
                      {project.image && (
                        <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                      )}
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
                      <Link to={project.link} className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
                        <span>View Project</span>
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Border */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
            </motion.div>
          );
        })}
      </div>

      {/* Desktop: Horizontal Accordion */}
      <div className="hidden lg:flex h-[500px]">
        {projects.map((project, i) => {
          const isExpanded = hoveredCard === project.title;
          return (
            <motion.div
              key={project.title}
              layout
              onMouseEnter={() => setHoveredCard(project.title)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => {
                if (isExpanded) {
                  navigate(project.link);
                } else {
                  setHoveredCard(project.title);
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                layout: { duration: 0.45, type: "spring", bounce: 0.12 },
                opacity: { duration: 0.5, delay: i * 0.1 },
                y: { duration: 0.5, delay: i * 0.1 }
              }}
              className={cn(
                "relative overflow-hidden cursor-pointer transition-colors duration-300",
                isExpanded ? "bg-[#111114]" : "bg-[#0d0d10] hover:bg-[#111114]"
              )}
              style={{
                flex: isExpanded ? 5 : 1,
                borderRight: i < projects.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none"
              }}
            >
              {/* Collapsed Content */}
              <motion.div
                animate={{ opacity: isExpanded ? 0 : 1 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 flex flex-col p-7 pointer-events-none"
              >
                {project.image && (
                  <img src={project.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.15] pointer-events-none" />
                )}
                <span className="text-5xl font-bold text-white/15 font-display select-none relative z-10">{getNumber(i)}</span>
                <div className="flex-1 flex items-center justify-center relative z-10">
                  <span className="-rotate-90 whitespace-nowrap text-xl font-bold uppercase tracking-[0.15em] text-white/50 select-none">
                    {project.title}
                  </span>
                </div>
              </motion.div>

              {/* Expanded Content */}
              <motion.div
                animate={{ opacity: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.3, delay: isExpanded ? 0.15 : 0 }}
                className="absolute inset-0 flex flex-col p-8 pointer-events-none"
                style={{ pointerEvents: isExpanded ? "auto" : "none" }}
              >
                {/* Background image */}
                {project.image && (
                  <div className="absolute inset-0 z-0">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#111114]/100 via-[#111114]/60 to-[#111114]/40" />
                  </div>
                )}

                {/* Text content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-5xl font-bold text-white/15 font-display select-none">{getNumber(i)}</span>
                  </div>
                  <TitleFont title={project.title} className="text-4xl xl:text-5xl text-white leading-tight mb-5" />

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-white/10 backdrop-blur-sm text-white/70 text-xs font-medium px-3 py-1 rounded-full border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-[#a3a3a3] text-base leading-relaxed font-light line-clamp-4 text-pretty mb-6">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <Link
                      to={project.link}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
                    >
                      <span>View Project</span>
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mt-16 flex justify-center"
      >
        <Link to="/projects">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white px-8 py-4 rounded-full font-medium transition-all duration-300"
          >
            <span>View All Works</span>
            <ArrowUpRight size={18} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
