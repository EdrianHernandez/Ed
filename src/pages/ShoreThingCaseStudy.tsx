import { useEffect, useState, type CSSProperties } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

type EcosystemImage = {
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
};

type LockupData = {
  src: string;
  alt: string;
};

const lockups: LockupData[] = [
  { src: "/SHORETHING ASSETS/SHORETHING HOME FULL.png", alt: "ShoreThing Home Full Flow" },
  { src: "/SHORETHING ASSETS/SHORETHING EXPLORE FULL.png", alt: "ShoreThing Explore Full Flow" },
  { src: "/SHORETHING ASSETS/SHORETHING ROOMS PAGE FULL.png", alt: "Rooms Catalog Flow" },
  { src: "/SHORETHING ASSETS/SHORETHING ROOMS DETAILED PAGE FULL.png", alt: "Detailed Property Flow" },
  { src: "/SHORETHING ASSETS/SHORETHING ABOUT FULL.png", alt: "ShoreThing Brand Story" },
];

type AutoScrollLockupProps = {
  src: string;
  alt: string;
  duration?: number;
  travel?: string;
  className?: string;
  imageClassName?: string;
  variant?: "home" | "rooms" | "detail" | "about";
};

function AutoScrollLockup({
  src,
  alt,
  duration = 48,
  travel = "-50%",
  className,
  imageClassName
  , variant = "home"
}: AutoScrollLockupProps) {
  const animationStyle = {
    "--lockup-duration": `${duration}s`,
    "--lockup-distance": travel
  } as CSSProperties & Record<string, string>;

  // Per-variant framing and image behaviour
  const variantMap: Record<NonNullable<AutoScrollLockupProps["variant"]>, { frame?: string; img?: string; travel?: string }> = {
    home: { frame: "scale-105 shadow-[0_0_80px_rgba(255,255,255,0.06)]", img: "object-cover", travel: "-60%" },
    rooms: { frame: "rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.04)]", img: "object-contain", travel: "-48%" },
    detail: { frame: "rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.03)]", img: "object-cover", travel: "-40%" },
    about: { frame: "w-full max-w-4xl mx-auto", img: "object-contain", travel: "-36%" }
  };

  const picked = variantMap[variant];
  // prefer explicit travel prop if provided, otherwise variant default
  if (!travel && picked.travel) animationStyle["--lockup-distance"] = picked.travel;

  const outerClass = cn("relative", picked.frame, className);

  return (
    <div className={outerClass}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="h-150 lg:h-200 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)] bg-neutral-900 overflow-hidden relative">
        <div className="absolute inset-x-0 top-0 h-12 sm:h-16 md:h-28 z-20 pointer-events-none bg-linear-to-b from-neutral-900 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-12 sm:h-16 md:h-28 z-20 pointer-events-none bg-linear-to-t from-neutral-900 to-transparent" />

        <div className="absolute inset-0 overflow-hidden">
          <div
            className="animate-lockup-scroll will-change-transform"
            style={animationStyle}
          >
            <img
              src={src}
              alt={alt}
              className={cn("block w-full h-auto select-none pointer-events-none", picked.img, imageClassName)}
              loading="eager"
              decoding="async"
            />
            <img
              src={src}
              alt=""
              aria-hidden="true"
              className={cn("block w-full h-auto select-none pointer-events-none", picked.img, imageClassName)}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ index, title, description }: { index: string; title: string; description: string; }) {
  return (
    <div className="max-w-4xl space-y-4">
      <span className="font-montserrat text-[0.7rem] md:text-xs uppercase tracking-[0.4em] text-neutral-500 block">
        {index}
      </span>
      <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white text-balance">
        {title}
      </h3>
      <p className="max-w-3xl text-base md:text-lg leading-relaxed text-neutral-400 text-pretty font-light">
        {description}
      </p>
    </div>
  );
}

function ImageModal({
  image,
  onClose,
}: {
  image: EcosystemImage;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative flex flex-col md:flex-row max-w-5xl w-full max-h-[90vh] rounded-2xl sm:rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-[0_0_80px_rgba(255,255,255,0.04)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.03] pointer-events-none" />
        <div className="absolute top-2 left-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border-t border-l border-white/15 pointer-events-none" />
        <div className="absolute top-2 right-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border-t border-r border-white/15 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border-b border-l border-white/15 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border-b border-r border-white/15 pointer-events-none" />

        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring", damping: 20 }}
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md hover:bg-white/10 hover:rotate-90 transition-all duration-300 z-20"
          aria-label="Close preview"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70 sm:w-4 sm:h-4">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex items-center justify-center p-3 sm:p-4 md:p-10 min-h-[30vh] sm:min-h-[35vh] md:min-h-0 bg-gradient-to-br from-neutral-900/80 to-neutral-950/80"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[45vh] sm:max-h-[55vh] md:max-h-[70vh] w-auto object-contain rounded-xl sm:rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.06)] ring-1 ring-white/5"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-[380px] border-t md:border-t-0 md:border-l border-white/10 p-5 sm:p-6 md:p-10 flex flex-col justify-center bg-[#0a0a0c]/90 backdrop-blur-md"
        >
          <span className="inline-block self-start text-[9px] sm:text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase px-2.5 sm:px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-4 sm:mb-5">
            {image.category}
          </span>
          <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight mb-2 sm:mb-3">
            {image.title}
          </h4>
          <div className="w-full h-px bg-gradient-to-r from-white/30 via-white/10 to-transparent mb-4 sm:mb-5" />
          <p className="text-neutral-400 text-xs sm:text-sm md:text-base font-light leading-relaxed">
            {image.description}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function LockupModal({
  lockup,
  onClose,
}: {
  lockup: LockupData;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-neutral-900 ring-1 ring-white/10 shadow-[0_0_80px_rgba(255,255,255,0.04)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.03] pointer-events-none" />
        <div className="absolute top-2 left-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border-t border-l border-white/15 pointer-events-none" />
        <div className="absolute top-2 right-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border-t border-r border-white/15 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border-b border-l border-white/15 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border-b border-r border-white/15 pointer-events-none" />

        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring", damping: 20 }}
          onClick={onClose}
          className="sticky top-3 right-3 sm:left-full sm:ml-2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md hover:bg-white/10 hover:rotate-90 transition-all duration-300 z-20"
          aria-label="Close preview"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70 sm:w-4 sm:h-4">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </motion.button>

        <img
          src={lockup.src}
          alt={lockup.alt}
          className="w-full h-auto block"
        />
      </motion.div>
    </motion.div>
  );
}

export function ShoreThingEcosystemShowcase() {
  const [selectedImage, setSelectedImage] = useState<EcosystemImage | null>(null);
  const [selectedLockup, setSelectedLockup] = useState<LockupData | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
        setSelectedLockup(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);
  return (
    <section className="relative bg-[#030305] pt-0 pb-20 md:pb-32 lg:pb-40 text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[40px_40px]"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"
          }}
        />
      </div>

      <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-250 w-250 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/2 blur-[150px]" />

      {/* Brief Section - Full Width Breakout */}
      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#030305] py-24 md:py-32 lg:py-48 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] md:w-[70%] h-[100%] md:h-[80%] bg-white/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <span className="block text-neutral-600 text-[10px] tracking-[0.2em] uppercase mb-4 md:mb-6 lg:mb-8">[ THE BRIEF ]</span>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="md:col-span-5 border-l border-white/10 pl-5 md:pl-8">
              <h2 className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-[1.1]">Digitizing the luxury of San Juan&apos;s coastline.</h2>
            </div>

            <div className="md:col-span-7 flex items-center">
              <p className="text-neutral-400 leading-relaxed text-base md:text-lg lg:text-xl font-light text-pretty">Architect an immersive, frictionless web application exclusively for San Juan&apos;s elite resorts. The goal was to translate high-fidelity property imagery into an effortless digital journey—converting inspiration directly into confirmed bookings without cognitive overload.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-24 z-10">
        <div className="space-y-24 md:space-y-32 lg:space-y-40">
            <motion.section
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              <div className="flex flex-col items-center text-center gap-6 mb-16 md:mb-24 relative z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[150%] bg-white/5 blur-[80px] rounded-full pointer-events-none -z-10"></div>

                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
                  <span className="text-neutral-500 text-[10px] tracking-[0.3em] uppercase font-bold">Discovery Flow</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
                </div>

                <h3 className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter drop-shadow-2xl">The Landing Experience</h3>

                <p className="text-neutral-400 leading-relaxed text-base md:text-lg max-w-2xl font-light">Engineered for immediate visual impact. The homepage breaks away from standard booking templates, acting as an immersive gateway that establishes high-end brand trust within seconds.</p>
              </div>

              <div className="max-w-5xl mx-auto relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/5 blur-[120px] rounded-full pointer-events-none -z-10" />

                <div onClick={() => setSelectedLockup(lockups[0])} className="cursor-pointer lockup-pause-on-hover w-full aspect-[16/10] rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)] bg-neutral-900 overflow-hidden relative">
                  <div className="absolute inset-x-0 top-0 h-12 sm:h-16 md:h-28 z-20 pointer-events-none bg-linear-to-b from-neutral-900 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-12 sm:h-16 md:h-28 z-20 pointer-events-none bg-linear-to-t from-neutral-900 to-transparent" />

                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className="animate-lockup-scroll will-change-transform"
                      style={{ "--lockup-duration": "35s", "--lockup-distance": "-70%" } as React.CSSProperties}
                    >
                      <img
                        src="/SHORETHING ASSETS/SHORETHING HOME FULL.png"
                        alt="ShoreThing Home Full Flow"
                        className="block w-full h-auto select-none pointer-events-none object-cover"
                        loading="eager"
                        decoding="async"
                      />
                      <img
                        src="/SHORETHING ASSETS/SHORETHING HOME FULL.png"
                        alt=""
                        aria-hidden="true"
                        className="block w-full h-auto select-none pointer-events-none object-cover"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12 mt-20 md:mt-32 lg:mt-40"
            >
              <div className="flex flex-col items-center text-center gap-6 mb-16 md:mb-24 relative z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[150%] bg-white/5 blur-[80px] rounded-full pointer-events-none -z-10"></div>

                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
                  <span className="text-neutral-500 text-[10px] tracking-[0.3em] uppercase font-bold">Discovery Engine</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
                </div>

                <h3 className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter drop-shadow-2xl">Visualizing the Coast</h3>

                <p className="text-neutral-400 leading-relaxed text-base md:text-lg max-w-2xl font-light">A frictionless, highly visual infinite scroll. The Explore engine strips away cluttered search filters, replacing them with a curated, immersive browsing experience that lets the properties speak for themselves.</p>
              </div>

              <div className="max-w-5xl mx-auto relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/5 blur-[120px] rounded-full pointer-events-none -z-10" />

                <div onClick={() => setSelectedLockup(lockups[1])} className="cursor-pointer lockup-pause-on-hover w-full aspect-[16/10] rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)] bg-neutral-900 overflow-hidden relative">
                  <div className="absolute inset-x-0 top-0 h-12 sm:h-16 md:h-28 z-20 pointer-events-none bg-linear-to-b from-neutral-900 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-12 sm:h-16 md:h-28 z-20 pointer-events-none bg-linear-to-t from-neutral-900 to-transparent" />

                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className="animate-lockup-scroll will-change-transform"
                      style={{ "--lockup-duration": "90s", "--lockup-distance": "-70%" } as React.CSSProperties}
                    >
                      <img
                        src="/SHORETHING ASSETS/SHORETHING EXPLORE FULL.png"
                        alt="ShoreThing Explore Full Flow"
                        className="block w-full h-auto select-none pointer-events-none object-cover"
                        loading="eager"
                        decoding="async"
                      />
                      <img
                        src="/SHORETHING ASSETS/SHORETHING EXPLORE FULL.png"
                        alt=""
                        aria-hidden="true"
                        className="block w-full h-auto select-none pointer-events-none object-cover"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="mt-20 md:mt-32 lg:mt-40 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-24 relative items-center"
            >
              <div className="lg:col-span-7 relative order-last lg:order-first">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/5 blur-[100px] rounded-full pointer-events-none -z-10" />

                <div onClick={() => setSelectedLockup(lockups[2])} className="cursor-pointer lockup-static-lg lockup-pause-on-hover aspect-[16/10] lg:h-[800px] w-full rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)] bg-neutral-900 overflow-hidden relative">
                  <div className="absolute inset-x-0 top-0 h-12 sm:h-16 md:h-28 z-20 pointer-events-none bg-linear-to-b from-neutral-900 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-12 sm:h-16 md:h-28 z-20 pointer-events-none bg-linear-to-t from-neutral-900 to-transparent" />

                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className="animate-lockup-scroll will-change-transform"
                      style={{ "--lockup-duration": "30s", "--lockup-distance": "-70%" } as React.CSSProperties}
                    >
                      <img
                        src="/SHORETHING ASSETS/SHORETHING ROOMS PAGE FULL.png"
                        alt="Rooms Catalog Flow"
                        className="block w-full h-auto select-none pointer-events-none object-cover"
                        loading="eager"
                        decoding="async"
                      />
                      <img
                        src="/SHORETHING ASSETS/SHORETHING ROOMS PAGE FULL.png"
                        alt=""
                        aria-hidden="true"
                        className="block w-full h-auto select-none pointer-events-none object-cover"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="flex flex-col gap-6 relative z-10 text-center items-center lg:text-left lg:items-start">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] bg-white/5 blur-[80px] rounded-full pointer-events-none -z-10"></div>

                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
                    <span className="text-neutral-500 text-[10px] tracking-[0.3em] uppercase font-bold">The Catalog</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
                  </div>

                  <h3 className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-[1.1]">Curated Selection</h3>

                  <p className="text-neutral-400 leading-relaxed text-base md:text-lg font-light">A highly visual browsing experience designed to remove cognitive load. The catalog focuses purely on high-fidelity imagery and upfront amenity data, allowing the properties to command attention before the user even clicks.</p>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="mt-20 md:mt-32 lg:mt-40 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-24 relative items-center"
            >
              <div className="lg:col-span-5">
                <div className="flex flex-col gap-6 relative z-10 text-center items-center lg:text-left lg:items-start">
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[120%] h-[150%] bg-white/5 blur-[80px] rounded-full pointer-events-none -z-10"></div>

                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
                    <span className="text-neutral-500 text-[10px] tracking-[0.3em] uppercase font-bold">Property Conversion</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
                  </div>

                  <h3 className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-[1.1]">The Deep Dive</h3>

                  <p className="text-neutral-400 leading-relaxed text-base md:text-lg font-light">Engineered to convert interest into confirmed reservations. The detailed property page immerses the user in the space, transparently displaying amenities, pricing, and a frictionless booking flow without taking them out of the experience.</p>
                </div>
              </div>

              <div className="lg:col-span-7 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/5 blur-[100px] rounded-full pointer-events-none -z-10" />

                <div onClick={() => setSelectedLockup(lockups[3])} className="cursor-pointer lockup-pause-on-hover w-full aspect-[16/10] rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)] bg-neutral-900 overflow-hidden relative">
                  <div className="absolute inset-x-0 top-0 h-12 sm:h-16 md:h-28 z-20 pointer-events-none bg-linear-to-b from-neutral-900 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-12 sm:h-16 md:h-28 z-20 pointer-events-none bg-linear-to-t from-neutral-900 to-transparent" />

                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className="animate-lockup-scroll will-change-transform"
                      style={{ "--lockup-duration": "35s", "--lockup-distance": "-70%" } as React.CSSProperties}
                    >
                      <img
                        src="/SHORETHING ASSETS/SHORETHING ROOMS DETAILED PAGE FULL.png"
                        alt="Detailed Property Flow"
                        className="block w-full h-auto select-none pointer-events-none object-cover"
                        loading="eager"
                        decoding="async"
                      />
                      <img
                        src="/SHORETHING ASSETS/SHORETHING ROOMS DETAILED PAGE FULL.png"
                        alt=""
                        aria-hidden="true"
                        className="block w-full h-auto select-none pointer-events-none object-cover"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12 mt-20 md:mt-32 lg:mt-40"
            >
              <div className="flex flex-col items-center text-center gap-6 mb-16 md:mb-24 relative z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[150%] bg-white/5 blur-[80px] rounded-full pointer-events-none -z-10"></div>

                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
                  <span className="text-neutral-500 text-[10px] tracking-[0.3em] uppercase font-bold">The Brand Story</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
                </div>

                <h3 className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter drop-shadow-2xl">Establishing Trust</h3>

                <p className="text-neutral-400 leading-relaxed text-base md:text-lg max-w-2xl font-light">A localized narrative that positions the platform not just as a utility, but as a premium digital concierge for San Juan's finest coastal resorts. It builds immediate credibility through clean typography and immersive photography.</p>
              </div>

              <div className="max-w-6xl mx-auto relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-white/5 blur-[130px] rounded-full pointer-events-none -z-10" />

                <div onClick={() => setSelectedLockup(lockups[4])} className="cursor-pointer lockup-pause-on-hover aspect-[16/10] lg:h-[800px] w-full rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(255,255,255,0.05)] bg-neutral-900 overflow-hidden relative">
                  <div className="absolute inset-x-0 top-0 h-12 sm:h-16 md:h-28 z-20 pointer-events-none bg-linear-to-b from-neutral-900 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-12 sm:h-16 md:h-28 z-20 pointer-events-none bg-linear-to-t from-neutral-900 to-transparent" />

                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className="animate-lockup-scroll will-change-transform"
                      style={{ "--lockup-duration": "40s", "--lockup-distance": "-70%" } as React.CSSProperties}
                    >
                      <img
                        src="/SHORETHING ASSETS/SHORETHING ABOUT FULL.png"
                        alt="ShoreThing Brand Story"
                        className="block w-full h-auto select-none pointer-events-none object-cover"
                        loading="eager"
                        decoding="async"
                      />
                      <img
                        src="/SHORETHING ASSETS/SHORETHING ABOUT FULL.jpg"
                        alt=""
                        aria-hidden="true"
                        className="block w-full h-auto select-none pointer-events-none object-cover"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full py-14 sm:py-16 md:py-20 lg:py-28 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden mt-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none z-0" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center py-8 sm:py-10 md:p-16 lg:p-20 w-full max-w-5xl"
          >
            <div className="absolute top-0 left-0 w-4 h-4 md:w-6 md:h-6 border-t border-l border-white/20" />
            <div className="absolute top-0 right-0 w-4 h-4 md:w-6 md:h-6 border-t border-r border-white/20" />
            <div className="absolute bottom-0 left-0 w-4 h-4 md:w-6 md:h-6 border-b border-l border-white/20" />
            <div className="absolute bottom-0 right-0 w-4 h-4 md:w-6 md:h-6 border-b border-r border-white/20" />

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter uppercase leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 px-2 md:px-0">
              EXPERIENCE THE ARCHITECTURE
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg md:text-xl font-light max-w-lg mt-5 md:mt-6 text-pretty px-4 md:px-0">
              Explore the raw Figma file, auto-layout architecture, and interactive flows.
            </p>

            <a
              href="https://www.figma.com/proto/[PLACEHOLDER]"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 sm:mt-10 md:mt-12 px-6 sm:px-8 py-3.5 sm:py-4 w-full max-w-[280px] sm:max-w-max rounded-full bg-black/50 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_0_30px_-5px_rgba(255,255,255,0.05)] flex items-center justify-center gap-3 transition-all duration-500 ease-out hover:ring-white/40 hover:bg-white/10 hover:shadow-[0_0_40px_0px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95"
            >
              <svg
                className="w-5 h-5 transition-transform duration-500 group-hover:scale-110"
                viewBox="0 0 38 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 28.5C19 33.7467 14.7467 38 9.5 38C4.25329 38 0 33.7467 0 28.5C0 23.2533 4.25329 19 9.5 19H19V28.5Z" fill="#0ACF83" />
                <path d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 14.7467 0 9.5Z" fill="#F24E1E" />
                <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#FF7262" />
                <path d="M38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5C19 23.2533 23.2533 19 28.5 19H38V28.5Z" fill="#1ABCFE" />
                <path d="M19 47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5C0 42.2533 4.25329 38 9.5 38C14.7467 38 19 42.2533 19 47.5Z" fill="#A259FF" />
              </svg>
              <span className="text-white text-sm font-medium tracking-wide uppercase transition-colors duration-500">Interact with Prototype</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative z-10 w-full flex flex-col items-center mt-16 md:mt-24"
          >
            <div className="w-full max-w-sm h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="mt-6 text-[10px] md:text-xs font-mono tracking-[0.3em] text-neutral-600 uppercase">
              END OF CASE STUDY
            </span>
          </motion.div>
        </motion.section>

      <AnimatePresence>
        {selectedImage && (
          <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedLockup && (
          <LockupModal lockup={selectedLockup} onClose={() => setSelectedLockup(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

export default function ShoreThingCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-screen bg-neutral-950 overflow-hidden text-white font-sans selection:bg-white/30"
    >
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 sm:px-8 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden bg-neutral-950">
          <div className="absolute inset-[-8%] bg-neutral-950">
            <div
              className="absolute inset-0 scale-110 bg-cover bg-center opacity-30 blur-2xl"
              style={{
                backgroundImage: "url('/SHORETHING ASSETS/SHORETHING HOME FULL.png')",
                maskImage: "radial-gradient(circle at center, black 0%, black 34%, transparent 78%)",
                WebkitMaskImage: "radial-gradient(circle at center, black 0%, black 34%, transparent 78%)"
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.07)_18%,rgba(255,255,255,0.02)_35%,transparent_66%)] opacity-75 mix-blend-screen" />
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.18)_48%,rgba(10,10,10,0.78)_78%,#0a0a0a_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[42%] bg-linear-to-t from-neutral-950 via-neutral-950/90 to-transparent" />
        </div>

        <div className="fixed top-6 left-0 md:top-12 md:left-0 z-50 group/back">
          <div className="relative">
            <div className="h-10 w-10 sm:h-12 sm:w-12" />
            <Link
              to="/"
              className="absolute top-0 left-0 flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 translate-x-3 md:-translate-x-full md:group-hover/back:translate-x-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
              aria-label="Back to Works"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/60 group-hover/back:text-white transition-colors duration-300"
              >
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full z-10 mt-12 md:mt-0 space-y-8 sm:space-y-10 md:space-y-16">

          {/* Project Logo */}
            <motion.img 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              src="/SHORETHING ASSETS/SHORETHING LOGO.png" 
              alt="Shorething Logo"
              className="h-32 sm:h-40 md:h-55 w-auto mb-4 sm:mb-6 md:mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            />

          <div className="flex flex-col items-center justify-center">
            <motion.div className="overflow-hidden py-4 pb-2 flex flex-col items-center">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[11vw] sm:text-6xl md:text-7xl lg:text-9xl font-montserrat font-black tracking-tighter uppercase leading-none text-center text-white drop-shadow-sm w-full"
              >
                SHORETHING
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] font-montserrat text-neutral-400 uppercase mt-2 md:mt-4 text-center px-4"
            >
              SURE DESTINATION, SURE FUN
            </motion.div>
          </div>


        </div>
      </section>

      {/* Metadata Grid */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { label: "ROLE", value: "Lead UI/UX Designer" },
              { label: "FOCUS", value: "Luxury Booking Flow Design" },
              { label: "CONTEXT", value: "San Juan, Batangas Hospitality Brand" },
              { label: "TYPE", value: "Commissioned Project" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="py-8 md:py-12 md:border-r border-white/10 last:border-r-0 md:first:pl-0 pl-0 md:px-8 first:md:pr-8"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  <span className="text-neutral-500 font-mono text-[10px] md:text-xs tracking-widest uppercase font-semibold">
                    {item.label}
                  </span>
                </div>
                <span className="text-white font-medium text-sm md:text-base tracking-wide">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ShoreThingEcosystemShowcase />
    </motion.div>
  );
}