import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0c]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 lg:gap-20 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-white/10 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img
              src="/PROFILE%20PHOTO.JPG"
              alt="Edrian"
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover object-top rounded-[2rem] border border-white/10 group-hover:border-white/20 transition-all duration-500"
            />
          </div>
        </motion.div>

        {/* Bio Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-center lg:text-left lg:max-w-2xl"
        >
          <span className="font-mono text-xs md:text-sm text-[#525252] font-semibold uppercase tracking-[0.25em] mb-4 md:mb-6 block">
            About
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-white leading-[1.1] mb-6 md:mb-8">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e2e2e2] to-[#737373]">
              Edrian
            </span>
          </h2>

          <p className="text-[#a3a3a3] text-base md:text-lg leading-relaxed font-light text-pretty mb-8 md:mb-10 max-w-xl">
            UI/UX Designer with a focus on crafting clean, human-centered interfaces. Experienced in front-end technologies including React, TypeScript, and Tailwind CSS.
          </p>

          {/* Divider */}
          <div className="border-t border-white/5 mb-8 md:mb-10" />

          {/* Info Row */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 sm:divide-x sm:divide-white/10 mb-8 md:mb-10 justify-center lg:justify-start">
            {/* Education */}
            <div className="flex flex-col sm:pr-8">
              <span className="font-mono text-[0.65rem] md:text-xs text-[#525252] uppercase tracking-[0.2em] mb-1.5">
                Education
              </span>
              <span className="text-white text-sm md:text-base font-medium">
                Batangas State University
              </span>
              <span className="text-[#737373] text-xs md:text-sm">
                Computer Science
              </span>
            </div>

            {/* Specialization */}
            <div className="flex flex-col sm:pl-8">
              <span className="font-mono text-[0.65rem] md:text-xs text-[#525252] uppercase tracking-[0.2em] mb-1.5">
                Specialization
              </span>
              <span className="text-white text-sm md:text-base font-medium">
                UI/UX Design
              </span>
              <span className="text-[#737373] text-xs md:text-sm">
                Design Systems · Front-end
              </span>
            </div>
          </div>

          {/* Availability Badge */}
          <div className="flex justify-center lg:justify-start">
            <div className="flex items-center gap-2.5 border border-emerald-500/20 bg-emerald-500/5 rounded-full px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-[0.65rem] md:text-xs text-emerald-500/80 uppercase tracking-[0.15em]">
                Open to opportunities
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
