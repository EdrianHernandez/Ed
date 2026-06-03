import { useEffect, type CSSProperties, type ReactNode } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

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
        <div className="absolute inset-x-0 top-0 h-28 z-20 pointer-events-none bg-linear-to-b from-neutral-900 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 z-20 pointer-events-none bg-linear-to-t from-neutral-900 to-transparent" />

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

type FlowSectionProps = {
  eyebrow: string;
  description: string;
  children: ReactNode;
};

function FlowSection({ eyebrow, description, children }: FlowSectionProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-12 lg:gap-16 items-start">
      <div className="lg:sticky lg:top-24 lg:self-start h-fit max-w-sm space-y-6">
        <span className="font-montserrat text-[0.7rem] md:text-xs uppercase tracking-[0.35em] text-neutral-500 block mb-5">
          {eyebrow}
        </span>
        <p className="text-neutral-400 text-base md:text-lg leading-relaxed font-light text-pretty max-w-2xl">
          {description}
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-neutral-300 font-montserrat">
            Luxury UI
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-neutral-300 font-montserrat">
            Premium Motion
          </span>
        </div>
      </div>

      <div className="space-y-8 md:space-y-12">
        {children}
      </div>
    </section>
  );
}

export function ShoreThingEcosystemShowcase() {
  return (
    <section className="bg-neutral-950 py-32 md:py-40 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <div className="space-y-32 md:space-y-40">
          <motion.header
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="font-montserrat text-[0.7rem] md:text-xs uppercase tracking-[0.45em] text-neutral-500 block mb-5">
              SYSTEM / DIGITAL ECOSYSTEM
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white">
              THE DIGITAL ECOSYSTEM.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.65rem] uppercase tracking-[0.28em] text-neutral-300 font-montserrat">
                Editorial View
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.65rem] uppercase tracking-[0.28em] text-neutral-300 font-montserrat">
                Seamless Motion
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.65rem] uppercase tracking-[0.28em] text-neutral-300 font-montserrat">
                Full-Height Lockups
              </span>
            </div>
          </motion.header>

          <div className="space-y-40 md:space-y-48">
            <FlowSection
              eyebrow="01 // DISCOVERY FLOW (Home & Explore)."
              description="Architected to translate the luxury of San Juan, Batangas into an immediate digital experience. From the high-impact homepage to the curated property explore engine, the flow emphasizes high-fidelity visual immersion."
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, delay: 0 }}
                  className="md:translate-y-0"
                >
                  <AutoScrollLockup
                    src="/SHORETHING ASSETS/SHORETHING HOME FULL.png"
                    alt="ShoreThing home page full-length design"
                    duration={50}
                    variant="home"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="md:translate-y-14"
                >
                  <AutoScrollLockup
                    src="/SHORETHING ASSETS/SHORETHING EXPLORE FULL.png"
                    alt="ShoreThing explore page full-length design"
                    duration={56}
                    variant="home"
                  />
                </motion.div>
              </div>
            </FlowSection>

            <FlowSection
              eyebrow="02 // PROPERTY SHOWCASE (Rooms & Details)."
              description="Engineered to convert interest into bookings without cognitive friction. Detailed room amenities and intuitive reservation data are presented as a frictionless, immersive journey."
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, delay: 0 }}
                  className="md:translate-y-0"
                >
                  <AutoScrollLockup
                    src="/SHORETHING ASSETS/SHORETHING ROOMS PAGE FULL.png"
                    alt="ShoreThing rooms page full-length design"
                    duration={52}
                    variant="rooms"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="md:translate-y-14"
                >
                  <AutoScrollLockup
                    src="/SHORETHING ASSETS/SHORETHING ROOMS DETAILED PAGE FULL.png"
                    alt="ShoreThing rooms detailed page full-length design"
                    duration={58}
                    variant="detail"
                  />
                </motion.div>
              </div>
            </FlowSection>

            <FlowSection
              eyebrow="03 // BRAND STORY (About)."
              description="Establishing trust and high-end positioning through localized narratives."
            >
              <div className="md:max-w-6xl md:mx-auto md:pt-8">
                <AutoScrollLockup
                  src="/SHORETHING ASSETS/SHORETHING ABOUT FULL.png"
                  alt="ShoreThing about page full-length design"
                  duration={54}
                  variant="about"
                />
              </div>
            </FlowSection>
          </div>
        </div>
      </div>
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
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/SHORETHING ASSETS/SHORETHING HOME FULL.png"
            alt="ShoreThing home design background"
            className="w-full h-full object-cover blur-3xl opacity-20 brightness-50 scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
        </div>

        <div className="fixed top-6 left-0 md:top-12 md:left-0 z-50 group/back">
          <div className="relative">
            <div className="h-10 w-10 sm:h-12 sm:w-12" />
            <Link
              to="/"
              className="absolute top-0 left-0 flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 -translate-x-full group-hover/back:translate-x-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
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

        <div className="flex flex-col items-center justify-center w-full z-10 mt-12 md:mt-0 space-y-12 md:space-y-16">
          <div className="flex flex-col items-center justify-center">
            <motion.div className="overflow-hidden py-4 pb-2 flex flex-col items-center">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[11vw] sm:text-6xl md:text-8xl lg:text-9xl font-montserrat tracking-tighter uppercase leading-none text-center text-white drop-shadow-sm w-full"
              >
                <span className="font-extrabold">SHORE</span>
                <span className="font-extralight">THING</span>
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] font-montserrat text-neutral-400 uppercase mt-2 md:mt-4 text-center px-4"
            >
              TECHNICAL LUXURY STAY EXPERIENCE
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row flex-wrap justify-center items-center sm:items-start w-full gap-8 sm:gap-6 md:gap-16 lg:gap-24 mt-4 px-4 sm:px-0"
          >
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1 md:space-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.35)]" />
                <span className="text-neutral-500 font-mono text-[10px] md:text-xs tracking-widest uppercase font-semibold">Role</span>
              </div>
              <span className="text-white font-medium text-xs sm:text-sm md:text-base tracking-wide uppercase">Lead UI/UX Designer</span>
            </div>

            <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1 md:space-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.35)]" />
                <span className="text-neutral-500 font-mono text-[10px] md:text-xs tracking-widest uppercase font-semibold">Focus</span>
              </div>
              <span className="text-white font-medium text-xs sm:text-sm md:text-base tracking-wide uppercase">Luxury Booking Flow Design</span>
            </div>

            <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1 md:space-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.35)]" />
                <span className="text-neutral-500 font-mono text-[10px] md:text-xs tracking-widest uppercase font-semibold">Context</span>
              </div>
              <span className="text-white font-medium text-xs sm:text-sm md:text-base tracking-wide uppercase">San Juan, Batangas Hospitality Brand</span>
            </div>
          </motion.div>
        </div>
      </section>

      <ShoreThingEcosystemShowcase />
    </motion.div>
  );
}