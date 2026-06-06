import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "FLOODGUARD",
    description: "Flood monitoring and disaster response dashboard for Batangas",
    tags: ["UI/UX Design", "Dashboard"],
    tech: ["Figma"],
    span: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2",
    link: "/projects/floodguard",
    image: "/FLOODGUARD ASSETS/Floodguard thumbnail.png"
  },
  {
    title: "ShoreThing",
    description: "Coastal travel booking platform for Batangas destinations",
    tags: ["UI/UX Design", "Booking Platform"],
    tech: ["Figma"],
    span: "col-span-1 row-span-1",
    link: "/projects/shorething",
    image: "/SHORETHING ASSETS/Shorething Thumbnail.png",
  },
  {
    title: "Bahanihan",
    description: "Community disaster response command center with live data",
    tags: ["UI/UX Design", "Community Platform"],
    tech: ["Figma"],
    span: "col-span-1 row-span-1",
    link: "/projects/bahanihan",
    image: "/BAHANIHAN ASSETS/Bahanihan Thumbnail.png"
  }
];

export function BentoGrid() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative z-10 bg-[#0a0a0c]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12 md:mb-20"
      >
        <span className="font-mono text-xs md:text-sm text-[#525252] font-semibold uppercase tracking-[0.25em] mb-4 md:mb-6 block">
          01 // Work
        </span>
        <h2 className="font-display text-4xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tighter mb-4 md:mb-6 text-white leading-none">
          Featured Studies
        </h2>
        <p className="text-[#8a8a8a] text-base md:text-xl font-light max-w-2xl text-pretty leading-relaxed">
          A showcase of pixel-perfect interfaces where aesthetic depth meets seamless functionality.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] md:auto-rows-[320px] gap-4 md:gap-6">
        {projects.map((project, i) => {
          const content = (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -12, scale: 0.98 }}
              className={cn(
                "bento-card group relative flex flex-col justify-end p-6 md:p-8 rounded-[1.5rem] overflow-hidden transition-all duration-500 cursor-pointer h-full w-full",
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
          );

          return project.link ? (
            <Link key={project.title} to={project.link} className={cn("block h-full", project.span)}>
              {content}
            </Link>
          ) : (
            <div key={project.title} className={cn("block h-full", project.span)}>
              {content}
            </div>
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