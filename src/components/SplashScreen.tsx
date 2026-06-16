import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("splashSeen");
    if (!seen) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem("splashSeen", "true");
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[#0a0a0c] flex items-center justify-center"
        >
          <div className="flex flex-col items-center">
            <div className="flex overflow-hidden">
              {"ED".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-5xl md:text-7xl font-montserrat font-extrabold tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#e2e2e2] to-[#737373]"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            {/* Glow line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 h-px w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent origin-center"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
