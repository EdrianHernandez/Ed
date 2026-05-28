import { motion } from "motion/react";

export function Philosophy() {
  const lines = [
    "Find the chaos, Pull the weight.",
    "Clear the paths they navigate.",
    "Design to solve, Not decorate."
  ];

  return (
    <section id="manifesto" className="py-24 md:py-50 px-4 sm:px-6 md:px-12 lg:px-24 flex items-center justify-center relative overflow-hidden bg-[#0a0a0c]">
      <div className="w-full text-center flex flex-col items-center cursor-default group z-10">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-16 md:mb-24 relative"
        >
          <span className="font-mono text-xs md:text-sm text-[#525252] font-semibold uppercase tracking-[0.25em] inline-block px-5 py-2 md:px-6 md:py-3 relative z-10">
            MANIFESTO
          </span>
          <div className="absolute inset-0 border border-white/10 rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:border-white/30" />
        </motion.div>

        <div className="flex flex-col space-y-4 sm:space-y-4 md:space-y-6 lg:space-y-8 w-full items-center">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 1,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1] // Custom sleek ease out
              }}
              className="relative inline-block w-fit perspective-1000"
            >
              {/* Offset shadow layer - deep charcoal */}
              <div 
                className="absolute inset-0 font-display text-[6.5vw] sm:text-4xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-tighter text-[#2a2a2a] select-none translate-x-[4px] translate-y-[4px] sm:translate-x-3 sm:translate-y-3 md:translate-x-5 md:translate-y-5 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0 whitespace-nowrap"
                aria-hidden="true"
              >
                {line}
              </div>
              
              {/* Main text layer */}
              <h2 className="relative z-10 font-display text-[6.5vw] sm:text-4xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-tighter text-white transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0 whitespace-nowrap drop-shadow-sm">
                {line}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

