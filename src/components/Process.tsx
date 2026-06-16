import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { useEffect, useRef, useState } from "react";

const processes = [
  {
    num: "01",
    title: "System Analysis",
    description: "Before rendering a single pixel, I dissect the core problem. I map the underlying architecture to isolate clean logic from chaotic requirements."
  },
  {
    num: "02",
    title: "Structural Blueprinting",
    description: "I establish rigorous spatial foundations and fluid user paths. Using strict grid systems and logical hierarchy, I architect wireframes built for seamless navigation."
  },
  {
    num: "03",
    title: "High-Fidelity Execution",
    description: "Structure evolves into premium minimalism. I apply precise typography, intentional negative space, and refined visual systems to craft a flawless interface."
  },
  {
    num: "04",
    title: "The Handoff",
    description: "Engineered for scale. I structure Figma files with rigorous component architecture, tokens, and auto-layout to ensure a frictionless transition to React and Tailwind developers."
  }
];

function ProcessCard({ step, index }: { step: typeof processes[0]; index: number }) {
  return (
    <div className="min-w-[75vw] sm:min-w-[60vw] md:min-w-[420px] lg:min-w-[480px] flex-shrink-0 flex items-center justify-center py-12 md:py-16 px-4 md:px-8 lg:px-12">
      <div className="relative w-full h-full p-8 md:p-10 lg:p-12 rounded-[1.5rem] bg-[#0a0a0c]/20 backdrop-blur-md border border-white/5 group hover:bg-[#0a0a0c]/85 hover:border-white/10 transition-all duration-500 overflow-hidden">
        {/* Large faded background number */}
        <span className="absolute top-6 right-6 md:top-8 md:right-8 text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-montserrat font-black text-white/[0.025] leading-none select-none pointer-events-none group-hover:text-white/[0.05] transition-colors duration-700">
          {step.num}
        </span>

        {/* Title */}
        <h3 className="relative font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-white tracking-tight leading-[1.1] mb-5 md:mb-6 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500">
          {step.title}
        </h3>

        {/* Description */}
        <p className="relative text-[#636363] text-sm md:text-base font-light leading-relaxed max-w-md group-hover:text-[#8a8a8a] transition-colors duration-500">
          {step.description}
        </p>

        {/* Bottom accent line */}
        <div className="relative mt-8 md:mt-10 w-0 h-px bg-gradient-to-r from-white/40 to-transparent group-hover:w-20 transition-all duration-700" />
      </div>
    </div>
  );
}

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end 90%"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["2%", "-100%"]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.min(
      processes.length - 1,
      Math.floor(latest * processes.length)
    );
    setActiveIndex(newIndex);
  });

  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  if (isMobile) {
    return (
      <section id="process" className="relative bg-[#0a0a0c]">
        <div className="relative flex flex-col items-center px-5 py-24 gap-2">
          {/* Ambient glow */}
          <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] -translate-y-1/2 bg-gradient-to-tr from-[#ffffff]/[0.03] to-[#a3a3a3]/[0.02] rounded-full blur-[120px] pointer-events-none" />

          {/* Section Header */}
          <span className="font-mono text-xs text-[#525252] font-semibold uppercase tracking-[0.25em] mb-4 block">
            03 // Process
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tighter text-white leading-[1.1] mb-8">
            PROCESS
          </h2>

          {processes.map((step, index) => (
            <div key={step.num} className="w-full max-w-[480px] mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <ProcessCard step={step} index={index} />
              </motion.div>
              {index < processes.length - 1 && (
                <div className="flex justify-center py-2">
                  <div className="w-px h-8 bg-gradient-to-b from-white/15 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative h-[300vh] bg-[#0a0a0c]"
    >
      {/* Sticky viewport container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

        {/* Background METHODOLOGY watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="text-[20vw] sm:text-[12vw] md:text-[10vw] font-montserrat font-black text-white/[0.05] whitespace-none select-none tracking-tighter leading-none">
            PROCESS
          </span>
        </div>

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] -translate-y-1/2 bg-gradient-to-tr from-[#ffffff]/[0.03] to-[#a3a3a3]/[0.02] rounded-full blur-[150px] pointer-events-none" />

        {/* Horizontal Card Track */}
        <motion.div
          style={{ x }}
          className="flex items-stretch pl-6 md:pl-12 lg:pl-24 pr-[30vw] md:pr-[20vw]"
        >
          {processes.map((step, index) => (
            <ProcessCard key={step.num} step={step} index={index} />
          ))}
        </motion.div>

        {/* Scroll hint (fades out as you scroll) */}
        <motion.div
          style={{ opacity: scrollHintOpacity }}
          className="absolute bottom-8 md:bottom-12 right-6 md:right-12 lg:right-24 flex items-center gap-2"
        >
          <span className="font-mono text-[0.6rem] md:text-[0.65rem] text-white/30 uppercase tracking-[0.2em]">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/30">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
