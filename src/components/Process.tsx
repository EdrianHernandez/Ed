import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "motion/react";
import React, { useRef, useState } from "react";

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

function ProcessCard({ step, index }: { step: typeof processes[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group relative flex flex-col md:flex-row items-start -ml-4 md:-ml-12 p-4 md:p-8 rounded-[2rem] overflow-hidden"
    >
      {/* Background Hover Effect - Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 rounded-[2rem] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.04),
              transparent 40%
            )
          `,
        }}
      />
      
      {/* Ambient Brushed Silver Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-white/[0.01]" />
      
      {/* Subtle Silver Edge Glow */}
      <div className="absolute inset-0 pointer-events-none rounded-[2rem] border border-transparent group-hover:border-white/10 transition-colors duration-700 shadow-[inset_0_0_0_1px_transparent] group-hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]" />

      {/* Step Number */}
      <div className="relative pt-1 mb-3 md:mb-0 flex-[0_0_auto] md:flex-[0_0_6rem]">
        <span className="font-display text-2xl md:text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-[#a3a3a3] to-[#525252] drop-shadow-sm select-none transition-all duration-700 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] group-hover:from-white group-hover:to-white">
          {step.num}<span className="text-[#525252] group-hover:text-white/60 transition-colors duration-700 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">.</span>
        </span>
      </div>
      
      {/* Content */}
      <div className="flex-1">
        <h3 className="font-display text-lg md:text-2xl leading-tight text-white font-bold mb-3 md:mb-6 tracking-tight transition-colors duration-700">
          {step.title}
        </h3>
        <p className="font-sans text-sm md:text-base text-[#737373] font-light leading-relaxed max-w-2xl transition-all duration-700 group-hover:text-white group-hover:drop-shadow-[0_0_1px_rgba(255,255,255,0.2)]">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0c] relative overflow-hidden">
      {/* Background ambient radial glow (Cool Silver-Grey) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#ffffff]/5 to-[#a3a3a3]/5 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Grid Pattern Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 20%, transparent 100%)'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10" ref={containerRef}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-20 pl-0 md:pl-12"
        >
          <span className="font-mono text-xs md:text-sm text-[#525252] font-semibold uppercase tracking-[0.25em] mb-4 md:mb-6 block">
            03 // Process
          </span>
          <h2 className="font-display text-3xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-none">
            Engineered Aesthetics
          </h2>
        </motion.div>

        <div className="relative pl-6 md:pl-24">
          {/* Static Track Line */}
          <div className="absolute left-[0px] md:left-[4px] top-4 bottom-12 w-[1px] bg-white/[0.05]" />
          
          {/* Animated Draw Line - Sleek Silver */}
          <motion.div 
            className="absolute left-[0px] md:left-[4px] top-4 w-[2px] bg-gradient-to-b from-white via-[#a3a3a3] to-transparent shadow-[0_0_12px_rgba(255,255,255,0.4)] z-10"
            style={{ height: lineHeight }}
          />

          <div className="space-y-6 md:space-y-12">
            {processes.map((step, index) => (
              <ProcessCard key={step.num} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
