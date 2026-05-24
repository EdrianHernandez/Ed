import { motion } from "motion/react";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-card/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
        
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10 md:mb-12">
            <span className="font-mono text-xs md:text-sm text-[#525252] font-semibold uppercase tracking-[0.25em] mb-4 md:mb-6 block">
              02 // Experience
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tighter text-white leading-[1.1] mb-8 md:mb-10">
              Professional Exposure.
            </h2>
          </div>
          
          <div className="relative pl-6 md:pl-8 border-l border-white/10 ml-2 md:ml-4">
            <div className="absolute w-3 h-3 bg-white rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
              Center for Artificial Intelligence & Smart Technologies (CAIST)
            </h3>
            <p className="text-white/70 font-mono text-xs md:text-sm mb-4">Batangas State University</p>
            <p className="text-[#8a8a8a] text-sm md:text-base leading-relaxed font-light text-pretty">
              On-the-Job Training exposing me to the bleeding edge of smart tech environments. 
              This immersion heavily influences my forward-thinking design process, bridging 
              the gap between complex artificial intelligence systems and human-centric, 
              intuitive UI/UX.
            </p>
          </div>
        </motion.div>

        {/* The Trophy Room */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-10 lg:mb-12 pt-0 lg:pt-[5.5rem]">
             <h2 className="font-display text-3xl md:text-4xl lg:text-[2.5rem] font-bold tracking-tighter text-white leading-[1.1]">
              The Trophy Room.
            </h2>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="group p-6 md:p-8 rounded-[1.5rem] bg-[#0a0a0c] border border-white/5 hover:border-white/20 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <div className="flex items-start justify-between mb-4 md:mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-[0.65rem] md:text-xs font-mono uppercase tracking-widest font-semibold">1st Place</span>
                <span className="text-[#525252] text-[0.65rem] md:text-xs font-mono font-semibold uppercase tracking-widest">2024 //</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold mb-1 md:mb-2 text-white">Warframes Competition</h3>
              <p className="text-[#a3a3a3] font-mono text-[0.7rem] md:text-xs mb-3 md:mb-4 uppercase tracking-widest">42nd Computer Science Week, UPLB</p>
              <p className="text-[#8a8a8a] text-sm md:text-base font-light text-pretty leading-relaxed">Awarded for FLOODGUARD, cementing the interface as a paragon of high-stakes utility and aesthetic mastery.</p>
            </div>

            <div className="group p-6 md:p-8 rounded-[1.5rem] bg-[#0a0a0c] border border-white/5 hover:border-white/20 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <div className="flex items-start justify-between mb-4 md:mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-[0.65rem] md:text-xs font-mono uppercase tracking-widest font-semibold">2nd Place</span>
                <span className="text-[#525252] text-[0.65rem] md:text-xs font-mono font-semibold uppercase tracking-widest">2025 //</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold mb-1 md:mb-2 text-white">UI/UX Redesign Challenge</h3>
              <p className="text-[#a3a3a3] font-mono text-[0.7rem] md:text-xs mb-3 md:mb-4 uppercase tracking-widest">Technofusion 2025, BatStateU</p>
              <p className="text-[#8a8a8a] text-sm md:text-base font-light text-pretty leading-relaxed">Acknowledged for transforming rigorous systemic constraints into a fluid, user-first design language.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
