import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const words = ["Design", "Develop", "Deliver"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden bg-[#0a0a0c]">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 100%)'
        }}
      />

      {/* Schematic overlay */}
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <circle cx="75%" cy="40%" r="350" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 12" />
          <line x1="10%" y1="0" x2="10%" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="2 6" />
          <rect x="5%" y="65%" width="250" height="120" fill="none" stroke="white" strokeWidth="1" strokeDasharray="2 6" />
        </svg>
      </div>

      {/* Background glow accents (Silver/Teal blend) */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] -translate-y-1/2 bg-gradient-to-tr from-[#ffffff]/5 to-[#0d9488]/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Shadow transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#0a0a0c] to-transparent pointer-events-none z-[2]" />

      <div className="max-w-5xl mx-auto z-10 relative flex flex-col items-center text-center w-full">
        <motion.h1
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-display text-[12vw] sm:text-6xl md:text-7xl lg:text-[6.5rem] font-bold leading-[1.05] tracking-tighter mb-6 md:mb-8 w-full"
        >
          <span className="flex flex-col md:flex-row items-center justify-center md:gap-x-5 xl:gap-x-6 w-full">
            <span className="h-[1.15em] relative overflow-hidden flex items-center justify-center flex-shrink-0">
              <AnimatePresence mode="popLayout">
                <motion.span
                  layout
                  key={words[index]}
                  initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: "-100%", opacity: 0, filter: "blur(8px)" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#e2e2e2] to-[#737373] drop-shadow-xl whitespace-nowrap px-1 md:px-2 pb-1 md:pb-2"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            <motion.span layout className="text-white whitespace-nowrap pb-1 md:pb-2 -mt-1 md:-mt-0">interfaces</motion.span>
          </span>
          <motion.span layout className="block text-white">that inspire.</motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl lg:max-w-3xl flex flex-col items-center px-4 md:px-0"
        >
          <p className="text-lg md:text-[1.35rem] text-[#a3a3a3] font-light leading-relaxed mb-10 md:mb-12 tracking-wide text-pretty">
            UI/UX Designer crafting interfaces that solve, not just decorate.
          </p>
          
          <motion.button 
            onClick={scrollToWork}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 bg-white text-black px-9 py-4 rounded-full font-medium hover:bg-white/90 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            <span>Explore Work</span>
            <ArrowRight size={20} className="stroke-[2.5]" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
