import { useEffect, type CSSProperties } from "react";
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

type MediaPanelProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
};

function MediaPanel({ src, alt, className, imageClassName }: MediaPanelProps) {
  return (
    <figure
      className={cn(
        "group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/80 shadow-[0_0_60px_rgba(255,255,255,0.04)] transition-transform duration-500 ease-[0.16,1,0.3,1] hover:scale-[1.02]",
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className={cn("h-full w-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-[1.04]", imageClassName)}
        loading="lazy"
        decoding="async"
      />
    </figure>
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

export function ShoreThingEcosystemShowcase() {
  return (
    <section className="relative bg-[#030305] py-32 md:py-40 text-white overflow-hidden">
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

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-24 z-10">
        <div className="space-y-40 md:space-y-48">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 px-6 py-10 md:px-10 md:py-14 lg:px-12 lg:py-16"
          >
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.12)_18%,rgba(255,255,255,0.04)_36%,transparent_72%)] blur-[70px] opacity-70 md:h-[120%] md:w-[120%] md:blur-[110px] lg:h-full lg:w-full"
            />
            <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 items-start">
              <div className="lg:col-span-4 space-y-4 md:space-y-6">
                <span className="font-montserrat text-[0.7rem] md:text-xs uppercase tracking-[0.45em] text-neutral-500 block">
                  PROJECT OVERVIEW / THE BRIEF
                </span>
                <h3 className="max-w-md font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-balance">
                  Digitizing the luxury of San Juan&apos;s coastline.
                </h3>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
                <div className="space-y-3">
                  <span className="font-montserrat text-[0.7rem] uppercase tracking-[0.35em] text-neutral-500 block">
                    The Problem
                  </span>
                  <p className="text-base md:text-lg leading-relaxed text-neutral-300 font-light text-pretty">
                    Despite being a premier destination, San Juan&apos;s coastal booking experience remains highly fragmented. Traditional property showcases fail to capture the true exclusivity of the locale, forcing users through high-friction, disjointed reservation flows.
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="font-montserrat text-[0.7rem] uppercase tracking-[0.35em] text-neutral-500 block">
                    The Objective
                  </span>
                  <p className="text-base md:text-lg leading-relaxed text-neutral-300 font-light text-pretty">
                    Architect an immersive, frictionless web application exclusively for San Juan&apos;s elite resorts. The goal was to translate high-fidelity property imagery into an effortless digital journey—converting inspiration directly into confirmed bookings without cognitive overload.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

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
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10"
            >
              <SectionLabel
                index="01 // The Landing Experience"
                title="Engineered for immediate visual impact."
                description="The homepage breaks away from standard booking templates, acting as an immersive gateway. It establishes high-end brand trust within seconds, seamlessly transitioning users from initial inspiration to targeted property discovery."
              />

              <MediaPanel
                src="/SHORETHING ASSETS/SHORETHING HOME.png"
                alt="ShoreThing homepage top fold"
                className="w-full"
                imageClassName="h-[clamp(22rem,58vw,44rem)] w-full"
              />

              <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-12 md:gap-8">
                <MediaPanel
                  src="/SHORETHING ASSETS/SHORETHING HOME 2.png"
                  alt="ShoreThing homepage supporting feature section"
                  className="md:col-span-7 aspect-4/3"
                />
                <MediaPanel
                  src="/SHORETHING ASSETS/SHORETHING HOME 3.png"
                  alt="ShoreThing homepage staggered support panel"
                  className="md:col-span-5 md:mt-24 aspect-3/4"
                />
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-4xl space-y-10"
            >
              <SectionLabel
                index="02 // THE DISCOVERY ENGINE."
                title="A frictionless, highly visual infinite scroll to explore San Juan's premium properties."
                description="The retained auto-scroll lockup becomes the only animated system in the showcase, centered as a luminous discovery engine with diffuse atmosphere and minimal chrome."
              />

              <div className="relative mx-auto max-w-4xl pt-4">
                <AutoScrollLockup
                  src="/SHORETHING ASSETS/SHORETHING EXPLORE FULL.png"
                  alt="ShoreThing explore page full-length design"
                  duration={56}
                  variant="about"
                  className="mx-auto"
                />
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start"
            >
              <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-6">
                <SectionLabel
                  index="03 // PROPERTY CONVERSION."
                  title="Engineered to convert interest into bookings without cognitive friction."
                  description="Amenities and reservation data are presented as an immersive journey, so the content reads like a guided product story instead of a static list of rooms."
                />
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-neutral-300 font-montserrat">
                    Sticky Narrative
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-neutral-300 font-montserrat">
                    Conversion Focus
                  </span>
                </div>
              </div>

              <div className="lg:col-span-8 flex flex-col gap-12">
                <MediaPanel
                  src="/SHORETHING ASSETS/SHORETHING ROOMS PAGE.png"
                  alt="ShoreThing rooms page overview"
                  className="aspect-16/11"
                />
                <MediaPanel
                  src="/SHORETHING ASSETS/SHORETHING ROOMS DETAILED PAGE.png"
                  alt="ShoreThing rooms detailed page"
                  className="aspect-4/5 lg:w-[92%]"
                />
                <MediaPanel
                  src="/SHORETHING ASSETS/SHORETHING ROOMS DETAILED PAGE 2.png"
                  alt="ShoreThing rooms detail close-up"
                  className="aspect-16/10 lg:w-[82%] lg:self-end"
                />
                <MediaPanel
                  src="/SHORETHING ASSETS/SHORETHING ROOMS DETAILED PAGE 3.png"
                  alt="ShoreThing rooms final detail panel"
                  className="aspect-4/5 lg:w-[74%]"
                />
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
            >
              <div className="lg:col-span-5 space-y-6 lg:pt-8">
                <SectionLabel
                  index="04 // THE BRAND STORY."
                  title="Establishing trust and high-end positioning through localized narratives."
                  description="The brand mosaic uses tight editorial offsets and layered framing to feel closer to a luxury magazine spread than a standard case study block."
                />
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:pt-10">
                <MediaPanel
                  src="/SHORETHING ASSETS/SHORETHING ABOUT.png"
                  alt="ShoreThing about page anchor"
                  className="sm:mt-10 aspect-4/5"
                />
                <MediaPanel
                  src="/SHORETHING ASSETS/SHORETHING ABOUT 2.png"
                  alt="ShoreThing about page staggered detail"
                  className="sm:-mt-10 sm:ml-4 aspect-3/4"
                />
                <MediaPanel
                  src="/SHORETHING ASSETS/SHORETHING ABOUT 3.png"
                  alt="ShoreThing about page supporting feature"
                  className="sm:col-span-2 sm:-mt-8 sm:ml-16 aspect-video"
                />
              </div>
            </motion.section>
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

          {/* Project Logo */}
            <motion.img 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              src="/SHORETHING ASSETS/SHORETHING LOGO.png" 
              alt="Shorething Logo"
              className="h-55 w-auto mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            />

          <div className="flex flex-col items-center justify-center">
            <motion.div className="overflow-hidden py-4 pb-2 flex flex-col items-center">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[11vw] sm:text-6xl md:text-8xl lg:text-9xl font-montserrat font-black tracking-tighter uppercase leading-none text-center text-white drop-shadow-sm w-full"
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