import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "FLOODGUARD",
    description: "My 1st place winning piece from the Warframes Competition at UPLB. A masterful blend of high-stakes problem-solving and flawless, intuitive interface design drafted entirely in Figma. The crown jewel.",
    span: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2",
    link: "/projects/floodguard",
    image: "/MAIN%20DASHBOARD%20(LANDING%20PAGE).png"
  },
  {
    title: "ShoreThing",
    description: "Commissioned design project. Focused entirely on crafting a client-centric, aesthetically captivating, and highly responsive digital experience from the ground up.",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Bahanihan",
    description: "Commissioned design highlighting engaging visual storytelling. A user-friendly layout sculpted for purpose-driven interaction.",
    span: "col-span-1 row-span-1",
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
              whileHover={{ y: -8, scale: 0.98 }}
              className={cn(
                "group relative flex flex-col justify-end p-6 md:p-8 rounded-[1.5rem] bg-card border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] cursor-pointer h-full w-full"
              )}
            >
              {project.image && (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
                />
              )}
              {/* Text readability vignette (bottom only) */}
              <div className="absolute inset-x-0 bottom-0 h-2/4 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              
              <div className="relative z-20 w-full">
                <div className="flex justify-between items-end w-full mb-3 md:mb-4">
                  {project.title === "FLOODGUARD" ? (
                    <h3 className="font-montserrat text-2xl md:text-3xl text-white group-hover:text-white/95 transition-colors tracking-tight">
                      <span className="font-[1000]">FLOOD</span>
                      <span className="font-[200]">GUARD</span>
                    </h3>
                  ) : (
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white group-hover:text-white/95 transition-colors tracking-tight">
                      {project.title}
                    </h3>
                  )}
                </div>
                <p className="text-[#a3a3a3] text-sm md:text-base leading-relaxed font-light line-clamp-3 group-hover:line-clamp-none transition-all duration-500 text-pretty">
                  {project.description}
                </p>
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
