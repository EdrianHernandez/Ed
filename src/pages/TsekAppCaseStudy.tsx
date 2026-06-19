import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { NavBar } from "../components/NavBar";
import { NextProjectButton } from "../components/NextProjectButton";
import { Stethoscope, Brain, Pill, UserRound, ClipboardList } from "lucide-react";

export function TsekAppCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-neutral-950 min-h-screen overflow-x-hidden text-white selection:bg-white selection:text-neutral-950"
    >
      <NavBar variant="case-study" prevLink={{ path: "/projects/shorething", name: "ShoreThing" }} nextLink={{ path: "/projects/bahanihan", name: "Bahanihan" }} />

      {/* ============================== */}
      {/* 1. Hero Section                 */}
      {/* ============================== */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/TSEKAPP%20ASSETS/TSEKAPP%20HERO.jpg"
            alt=""
            className="w-full h-full object-cover blur-xl opacity-20 scale-105"
            style={{ maskImage: "radial-gradient(ellipse at center, black, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 75%)" }}
          />
        </div>
        <div className="bg-teal-500/5 blur-[130px] rounded-full absolute w-[60%] h-[60%] pointer-events-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="flex flex-col items-center justify-center w-full z-10 space-y-6">
          <motion.img
            src="/TSEKAPP%20ASSETS/TSEKAPP%20LOGO.png"
            alt="TsekApp Logo"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-36 md:w-44 lg:w-52 h-auto mb-8 drop-shadow-[0_0_30px_rgba(45,212,191,0.15)]"
          />
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-montserrat text-5xl md:text-7xl lg:text-[9rem] text-white tracking-tighter leading-none drop-shadow-2xl text-center relative z-10"
          >
            <span className="font-[800]">TSEK</span><span className="font-[200]">APP</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-neutral-400 text-lg md:text-xl tracking-widest uppercase font-light text-center max-w-3xl mx-auto"
          >
            From symptom to treatment in one seamless flow.
          </motion.p>
        </div>
      </section>

      {/* ============================== */}
      {/* 2. Metadata Grid                */}
      {/* ============================== */}
      <section className="border-t border-white/10 pt-8 mt-24">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
            {[
              { label: "ROLE", value: "Lead UI/UX Designer" },
              { label: "TIMELINE", value: "2025" },
              { label: "CONTEXT", value: "Mayoral Hackathon" },
              { label: "CATEGORY", value: "Digital Health Tech" },
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
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
                  <span className="text-neutral-500 font-mono text-[10px] md:text-xs tracking-widest uppercase font-semibold">{item.label}</span>
                </div>
                <span className="text-white font-medium text-sm md:text-base tracking-wide">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* 3. Project Overview              */}
      {/* ============================== */}
      <section className="relative py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-24 overflow-hidden mt-16">
        <div className="w-[120%] md:w-[70%] h-[100%] md:h-[80%] bg-white/5 blur-[150px] -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <h2 className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-[1.1]">
                Democratizing civic health.
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-7 flex items-center"
            >
              <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed text-pretty">
                Seeking medical clarity during a health surge often forces citizens through a gauntlet of misinformation and confusing administrative paths. Developed rapidly for the Naga City Mayoral Hackathon, TsekApp bridges the communication gap between local municipal health departments and the community. By pairing an intuitive, linear symptom evaluation matrix with bilingual hyper-local health alerts, the platform empowers citizens to self-triage safely and access vetted clinical resources without friction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* BLOCK 01: Ecosystem Synergy      */}
      {/* ============================== */}
      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#030305] overflow-hidden py-14 md:py-24 lg:py-32">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"
            style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          {/* Header */}
          <div className="relative mb-8 md:mb-12 text-center">
            <span className="absolute -top-8 md:-top-12 left-1/2 -translate-x-1/2 text-[8rem] md:text-[12rem] font-montserrat font-black text-white/[0.02] leading-none select-none pointer-events-none">
              01
            </span>
            <span className="text-neutral-600 text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">Pillar 01</span>
            <h2 className="font-montserrat font-black text-3xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-[1.1]">
              Ecosystem Synergy
            </h2>
            <div className="mt-6 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-teal-400/40 to-transparent" />
          </div>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
          >
            <p className="text-neutral-300 text-base md:text-lg lg:text-xl font-light leading-relaxed text-pretty">
              Every feature connects to the next — from symptom to treatment in one seamless flow.
            </p>
          </motion.div>

          {/* Vertical Timeline */}
          <EcosystemTimeline />
        </div>
      </section>

      {/* ============================== */}
      {/* BLOCK 02: Landing Page           */}
      {/* ============================== */}
      <BlockScrollSlideshow
        number="02"
        label="Pillar 02"
        title="Landing Page"
        screens={[
          "/TSEKAPP%20ASSETS/TSEKAPP%20LANDING%20PAGE.png",
          "/TSEKAPP%20ASSETS/TSEKAPP%20Symptoms%20Check%20-%20Step%201.png",
          "/TSEKAPP%20ASSETS/TSEKAPP%20DETAILED%20ARTICLE.png",
        ]}
        screenLabels={["Landing Page", "Health Insights", "Detailed Article"]}
        staticOnDesktop
        texts={[
          {
            heading: "The front door of civic health.",
            body: "The first thing citizens see — a calm, focused entry point designed for health urgency. Quick-access symptom checker, local health alerts, and curated services all in one screen.",
            tags: ["Quick Access", "Health Alerts", "Bilingual"],
          },
          {
            heading: "Hyper-local intelligence.",
            body: "Real-time community health data, trending conditions in the area, and preventative care tips — delivered in the user's language, tailored to Naga City.",
            tags: ["Local Data", "Trend Alerts", "Preventative Care"],
          },
          {
            heading: "Vetted, readable guidance.",
            body: "Medical content written for citizens, not doctors. Clear explanations of symptoms, treatments, and when to seek professional care — eliminating misinformation at the source.",
            tags: ["Evidence-Based", "Plain Language", "Actionable"],
          },
        ]}
      />

      {/* ============================== */}
      {/* BLOCK 03: Symptom Checker        */}
      {/* ============================== */}
      <BlockScrollSlideshow
        number="03"
        label="Pillar 03"
        title="Symptom Checker"
        screens={[
          "/TSEKAPP%20ASSETS/TSEKAPP%20Symptoms%20Check%20-%20Step%201.png",
          "/TSEKAPP%20ASSETS/TSEKAPP%20Symptoms%20Check%20-%20Step%202.png",
          "/TSEKAPP%20ASSETS/TSEKAPP%20RESULTS%20LIST%20PAGE.png",
          "/TSEKAPP%20ASSETS/TSEKAPP%20EXPANDED%20DETAILS%20OF%20RESULT.png",
        ]}
        screenLabels={["Step 1", "Step 2", "Results", "Details"]}
        texts={[
          {
            heading: "Describe it naturally.",
            body: "The guided checklist begins — intuitive symptom input with bilingual support. Users describe what they're feeling in plain language, no medical jargon required.",
            tags: ["Bilingual Flow", "Plain Language", "Guided"],
          },
          {
            heading: "Smart follow-ups.",
            body: "The system narrows down possibilities with intelligent follow-up questions, building a clearer picture of the user's condition with each tap.",
            tags: ["Adaptive Logic", "Contextual", "Progressive"],
          },
          {
            heading: "Ranked by confidence.",
            body: "Structured results with confidence scores — potential conditions ranked by likelihood, each with a clear recommended next action.",
            tags: ["Confidence Scores", "Ranked Results", "Clear Actions"],
          },
          {
            heading: "Dive deeper, act faster.",
            body: "Deep-dive into any condition — detailed explanations, care recommendations, and one-tap buttons to find medicine nearby or book a specialist instantly.",
            tags: ["Detail View", "OTC Links", "Book Doctor"],
          },
        ]}
      />

      {/* ============================== */}
      {/* BLOCK 04: Specialist Finder      */}
      {/* ============================== */}
      <BlockScrollSlideshow
        number="04"
        label="Pillar 04"
        title="Specialist Finder"
        screens={[
          "/TSEKAPP%20ASSETS/TSEKAPP%20SPECIALIST%20FINDER.png",
          "/TSEKAPP%20ASSETS/TSEKAPP%20DOCTOR%20DETAILS.png",
          "/TSEKAPP%20ASSETS/TSEKAPP%20SCHEDULE%20SELECTION.png",
          "/TSEKAPP%20ASSETS/TSEKAPP%20APPOINTMENT%20CONFIRMED.png",
        ]}
        screenLabels={["Finder", "Doctor", "Schedule", "Confirmed"]}
        texts={[
          {
            heading: "Find the right specialist.",
            body: "A localized directory built for Naga City's healthcare network. Filter by specialty, hospital, and same-day availability — all in real time.",
            tags: ["Specialty Filters", "Same-Day", "Localized"],
          },
          {
            heading: "Credentials at a glance.",
            body: "Full doctor profiles — qualifications, specialties, hospital affiliation, and patient ratings. Everything needed to make an informed choice.",
            tags: ["Full Profiles", "Ratings", "Transparent"],
          },
          {
            heading: "Pick a time that works.",
            body: "Available slots displayed in real time. Select a date and time that fits the user's schedule — no phone calls, no hold music, no waiting.",
            tags: ["Real-Time Slots", "Instant Pick", "No Calls"],
          },
          {
            heading: "Locked in. Confirmed.",
            body: "Instant appointment confirmation with all details — date, time, location, and doctor name. The journey from symptom to specialist care is complete.",
            tags: ["Instant Confirm", "Full Details", "Zero Friction"],
          },
        ]}
      />

      {/* ============================== */}
      {/* BLOCK 05: Pharmacy Locator       */}
      {/* ============================== */}
      <BlockScrollSlideshow
        number="05"
        label="Pillar 05"
        title="Pharmacy Locator"
        screens={[
          "/TSEKAPP%20ASSETS/TSEKAPP%20PHARMACY%20LOCATOR.png",
          "/TSEKAPP%20ASSETS/TSEKAPP%20PHARMACY%20MAP.png",
        ]}
        screenLabels={["Locator", "Map"]}
        staticOnDesktop
        texts={[
          {
            heading: "One tap to the nearest pharmacy.",
            body: "When the AI analyzer recommends a medicine, the locator instantly surfaces nearby pharmacies. No scavenger hunt, no dead-end trips.",
            tags: ["Proximity Search", "One-Tap Nav", "Instant Results"],
          },
          {
            heading: "Stock visibility in real time.",
            body: "A live map shows exactly which pharmacies have the medicine in stock — green pins mean 'go now,' red pins mean 'skip it.' Citizens waste zero time.",
            tags: ["Live Inventory", "Green/Red Pins", "Zero Waste"],
          },
        ]}
      />

      {/* ============================== */}
      {/* 5. CTA / Figma Prototype         */}
      {/* ============================== */}
      <section className="relative w-full py-24 md:py-32 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none z-0"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col items-center py-16 px-6 sm:px-8 md:p-16 lg:p-24 w-full max-w-5xl"
        >
          <div className="absolute top-0 left-0 w-4 h-4 md:w-6 md:h-6 border-t border-l border-white/20"></div>
          <div className="absolute top-0 right-0 w-4 h-4 md:w-6 md:h-6 border-t border-r border-white/20"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 md:w-6 md:h-6 border-b border-l border-white/20"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 md:w-6 md:h-6 border-b border-r border-white/20"></div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter uppercase leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 px-2 md:px-0">
            EXPERIENCE THE ARCHITECTURE
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg md:text-xl font-light max-w-lg mt-5 md:mt-6 text-pretty px-4 md:px-0">
            Explore the raw Figma file, auto-layout architecture, and interactive flows.
          </p>

          <a
            href="https://www.figma.com/proto/WFY6wzoC12N7VedegEva8X/TSEKAPP-for-NAGA-APP?node-id=0-1&t=dPCTzlZvhBwcU5kh-1"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => { e.preventDefault(); window.open("https://www.figma.com/proto/WFY6wzoC12N7VedegEva8X/TSEKAPP-for-NAGA-APP?node-id=0-1&t=dPCTzlZvhBwcU5kh-1", "_blank", "noopener,noreferrer"); }}
            className="group mt-10 md:mt-12 px-6 sm:px-8 py-3.5 sm:py-4 w-full max-w-[280px] sm:max-w-max rounded-full bg-black/50 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_0_30px_-5px_rgba(255,255,255,0.05)] flex items-center justify-center gap-3 transition-all duration-500 ease-out hover:ring-white/40 hover:bg-white/10 hover:shadow-[0_0_40px_0px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 28.5C19 33.7467 14.7467 38 9.5 38C4.25329 38 0 33.7467 0 28.5C0 23.2533 4.25329 19 9.5 19H19V28.5Z" fill="#0ACF83"/>
              <path d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 14.7467 0 9.5Z" fill="#F24E1E"/>
              <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#FF7262"/>
              <path d="M38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5C19 23.2533 23.2533 19 28.5 19H38V28.5Z" fill="#1ABCFE"/>
              <path d="M19 47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5C0 42.2533 4.25329 38 9.5 38C14.7467 38 19 42.2533 19 47.5Z" fill="#A259FF"/>
            </svg>
            <span className="text-white text-sm font-medium tracking-wide uppercase transition-colors duration-500">Interact with Prototype</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 w-full flex flex-col items-center mt-20 md:mt-28"
        >
          <div className="w-full max-w-sm h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <span className="mt-6 text-[10px] md:text-xs font-mono tracking-[0.3em] text-neutral-600 uppercase">
            END OF CASE STUDY
          </span>
        </motion.div>

        <div className="relative z-10 w-full flex flex-row items-center justify-between gap-5 mt-16 md:mt-24">
          <NextProjectButton path="/projects/shorething" direction="previous" projectName="ShoreThing" />
          <NextProjectButton path="/projects/bahanihan" direction="next" projectName="Bahanihan" />
        </div>
      </section>
    </motion.div>
  );
}

/* ============================================ */
/* Reusable Auto-Scroll Marquee Block Component  */
/* ============================================ */
function BlockScrollSlideshow({
  number,
  label,
  title,
  screens,
  screenLabels,
  texts,
  staticOnDesktop = false,
}: {
  number: string;
  label: string;
  title: string;
  screens: string[];
  screenLabels: string[];
  texts: {
    heading: string;
    body: string;
    tags: string[];
  }[];
  staticOnDesktop?: boolean;
}) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const firstText = texts[0];
  const marqueeItems = [...screens, ...screens];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    if (selectedImage !== null) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [selectedImage]);

  function renderPhoneFrame(src: string, realIndex: number, key: number | string) {
    return (
      <div
        key={key}
        className="relative mx-2 sm:mx-3 lg:mx-5 flex-shrink-0 cursor-pointer group"
        onClick={() => setSelectedImage(realIndex)}
      >
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-500/5 blur-[60px] rounded-full pointer-events-none -z-10" />

        {/* Phone Frame */}
        <div className="relative w-[160px] sm:w-[190px] md:w-[215px] lg:w-[240px] h-[340px] sm:h-[400px] md:h-[460px] lg:h-[520px] rounded-[2rem] overflow-hidden border border-white/10 bg-neutral-900 shadow-[0_0_60px_-15px_rgba(45,212,191,0.08)] transition-all duration-300 hover:shadow-[0_0_80px_-10px_rgba(45,212,191,0.15)] hover:scale-[1.02]">
          <img
            src={src}
            alt={`${title} — ${screenLabels[realIndex]}`}
            className="w-full h-full object-cover object-top"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0'; }}
          />
          {/* Clickable indicator */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 pointer-events-none">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80">
                <polyline points="15 3 21 3 21 9"></polyline>
                <polyline points="9 21 3 21 3 15"></polyline>
                <line x1="21" y1="3" x2="14" y2="10"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
            </div>
          </div>
        </div>

        {/* Screen Label */}
        <div className="mt-3 text-center">
          <span className="text-[10px] sm:text-xs font-mono tracking-widest text-neutral-600 uppercase">
            {screenLabels[realIndex]}
          </span>
        </div>
      </div>
    );
  }

  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#030305] overflow-hidden py-14 md:py-24 lg:py-32">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"
          style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Block Header */}
        <div className="relative mb-8 md:mb-12">
          <span className="absolute -top-8 md:-top-12 left-0 text-[8rem] md:text-[12rem] font-montserrat font-black text-white/[0.02] leading-none select-none pointer-events-none">
            {number}
          </span>
          <span className="text-neutral-600 text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">{label}</span>
          <h2 className="font-montserrat font-black text-3xl md:text-5xl text-white tracking-tighter">
            {title}
          </h2>
          <div className="mt-6 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
        </div>

        {/* Text Content — first item only */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16 max-w-2xl"
        >
          <span className="text-teal-400/80 text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">
            Feature Deep Dive
          </span>
          <h3 className="font-montserrat font-black text-3xl md:text-4xl lg:text-5xl text-white tracking-tighter drop-shadow-lg leading-[1.1] mb-4">
            {firstText.heading}
          </h3>
          <p className="text-neutral-400 leading-relaxed text-sm md:text-base font-light mb-5">
            {firstText.body}
          </p>
          <div className="flex flex-wrap gap-2">
            {firstText.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-[10px] font-bold tracking-widest uppercase text-teal-400/80"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Mockup Display */}
        {staticOnDesktop ? (
          <>
            {/* Mobile/Tablet: Auto-scroll marquee */}
            <div className="lg:hidden marquee-pause-on-hover relative w-full overflow-hidden py-4">
              <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 bg-gradient-to-r from-[#030305] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 bg-gradient-to-l from-[#030305] to-transparent z-10 pointer-events-none" />
              <div className="flex w-max animate-marquee-ltr">
                {marqueeItems.map((src, i) => renderPhoneFrame(src, i % screens.length, i))}
              </div>
            </div>

            {/* Desktop: Static row */}
            <div className="hidden lg:flex justify-center gap-5 py-4">
              {screens.map((src, i) => renderPhoneFrame(src, i, i))}
            </div>
          </>
        ) : (
          /* Always auto-scroll marquee */
          <div className="marquee-pause-on-hover relative w-full overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-r from-[#030305] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-l from-[#030305] to-transparent z-10 pointer-events-none" />
            <div className="flex w-max animate-marquee-ltr">
              {marqueeItems.map((src, i) => renderPhoneFrame(src, i % screens.length, i))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedImage(null)}
          >
            {/* Frosted glass backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative flex flex-col md:flex-row max-w-5xl w-full max-h-[90vh] sm:max-h-[88vh] rounded-2xl sm:rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-[0_0_80px_rgba(255,255,255,0.04)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gradient border glow */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.03] pointer-events-none" />

              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border-t border-l border-white/15 pointer-events-none" />
              <div className="absolute top-2 right-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border-t border-r border-white/15 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border-b border-l border-white/15 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border-b border-r border-white/15 pointer-events-none" />

              {/* Close button */}
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring", damping: 20 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md hover:bg-white/10 hover:rotate-90 transition-all duration-300 z-20"
                aria-label="Close preview"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70 sm:w-4 sm:h-4">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </motion.button>

              {/* Image Panel — scrollable for tall images */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 flex items-start justify-center p-3 sm:p-4 md:p-10 min-h-[30vh] sm:min-h-[35vh] md:min-h-0 bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 overflow-y-auto hide-scrollbar"
              >
                <img
                  src={screens[selectedImage]}
                  alt={`${title} — ${screenLabels[selectedImage]}`}
                  className="w-auto object-contain rounded-xl sm:rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.06)] ring-1 ring-white/5"
                />
              </motion.div>

              {/* Info Panel */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full md:w-[380px] border-t md:border-t-0 md:border-l border-white/10 p-5 sm:p-6 md:p-10 flex flex-col justify-center bg-[#0a0a0c]/90 backdrop-blur-md"
              >
                {/* Category pill */}
                <span className="inline-block self-start text-[9px] sm:text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase px-2.5 sm:px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-4 sm:mb-5">
                  {screenLabels[selectedImage]}
                </span>

                {/* Title */}
                <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight mb-2 sm:mb-3">
                  {texts[selectedImage].heading}
                </h4>

                {/* Animated gradient divider */}
                <div className="w-full h-px bg-gradient-to-r from-white/30 via-white/10 to-transparent mb-4 sm:mb-5" />

                {/* Description */}
                <p className="text-neutral-400 text-xs sm:text-sm md:text-base font-light leading-relaxed">
                  {texts[selectedImage].body}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ============================================ */
/* Ecosystem Timeline Component                 */
/* ============================================ */
function EcosystemTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      step: "Step 1",
      title: "Describe how you feel",
      description: "A guided checklist captures symptoms in plain language — bilingual, no medical jargon. Users tap through intuitive options to explain what they're experiencing.",
      icon: Stethoscope,
      color: "teal",
      image: "/TSEKAPP%20ASSETS/TSEKAPP%20Symptoms%20Check%20-%20Step%201.png",
      imageLabel: "Symptom Check",
      side: "left" as const,
    },
    {
      step: "Step 2",
      title: "Instant assessment",
      description: "AI triage engine analyzes inputs and returns confidence-scored conditions with clear care recommendations — turning ambiguity into actionable next steps.",
      icon: Brain,
      color: "teal",
      image: "/TSEKAPP%20ASSETS/TSEKAPP%20RESULTS%20LIST%20PAGE.png",
      imageLabel: "Results List",
      side: "right" as const,
    },
    {
      step: "Result",
      title: "Your analysis is ready",
      description: "Ranked conditions with confidence scores and clear recommended actions — turning vague symptoms into a concrete care plan in seconds.",
      icon: ClipboardList,
      color: "teal",
      image: "/TSEKAPP%20ASSETS/TSEKAPP%20EXPANDED%20DETAILS%20OF%20RESULT.png",
      imageLabel: "Analysis Result",
      side: "left" as const,
    },
    {
      step: "Path A",
      title: "Locate nearby stock",
      description: "When the analyzer recommends a medicine, a live pharmacy map surfaces nearby stock — green pins mean go, red pins mean skip. Zero wasted trips.",
      icon: Pill,
      color: "green",
      image: "/TSEKAPP%20ASSETS/TSEKAPP%20PHARMACY%20LOCATOR.png",
      imageLabel: "Pharmacy Locator",
      side: "left" as const,
    },
    {
      step: "Path B",
      title: "Same-day specialist",
      description: "A localized directory surfaces available doctors by specialty and schedule. One tap to book — no phone calls, no hold music, no waiting.",
      icon: UserRound,
      color: "blue",
      image: "/TSEKAPP%20ASSETS/TSEKAPP%20SPECIALIST%20FINDER.png",
      imageLabel: "Specialist Finder",
      side: "right" as const,
    },
  ];

  const mainSteps = steps.slice(0, 3);
  const branchSteps = steps.slice(3);

  return (
    <div ref={containerRef} className="relative max-w-6xl mx-auto">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[60%] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line — Background */}
        <div className="absolute left-5 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-white/10" />

        {/* Vertical Line — Animated Fill */}
        <motion.div
          className="absolute left-5 md:left-1/2 md:-translate-x-px top-0 w-px bg-gradient-to-b from-teal-400/60 via-teal-400/40 to-teal-400/10 origin-top"
          style={{ height: lineHeight }}
        />

        {/* Steps */}
        <div className="flex flex-col gap-12 md:gap-24">
          {mainSteps.map((step, i) => {
            const Icon = step.icon;
            const colorMap = {
              teal: { bg: "bg-teal-500/10", border: "border-teal-500/20", text: "text-teal-400/80", dot: "bg-teal-400", shadow: "shadow-[0_0_30px_-5px_rgba(45,212,191,0.2)]" },
              green: { bg: "bg-green-500/10", border: "border-green-500/20", text: "text-green-400/80", dot: "bg-green-400", shadow: "shadow-[0_0_30px_-5px_rgba(74,222,128,0.2)]" },
              blue: { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400/80", dot: "bg-blue-400", shadow: "shadow-[0_0_30px_-5px_rgba(96,165,250,0.2)]" },
            };
            const colors = colorMap[step.color];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-10 ${
                  step.side === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neutral-950 border-2 border-white/20 z-10 mt-8 md:mt-10">
                  <div className={`absolute inset-0 rounded-full ${colors.dot} opacity-40 animate-ping`} />
                </div>

                {/* Text Card */}
                <div className={`flex-1 pl-12 md:pl-0 ${step.side === "right" ? "md:text-right" : ""}`}>
                  <motion.div
                    initial={{ opacity: 0, x: step.side === "left" ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-colors duration-500`}
                  >
                    <div className={`flex items-center gap-3 mb-4 ${step.side === "right" ? "md:justify-end" : ""}`}>
                      <div className={`w-10 h-10 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${colors.text}`}>
                        {step.step}
                      </span>
                    </div>
                    <h4 className="font-montserrat font-bold text-xl md:text-2xl text-white tracking-tight mb-3">
                      {step.title}
                    </h4>
                    <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Phone Mockup */}
                <motion.div
                  initial={{ opacity: 0, x: step.side === "left" ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className={`flex-1 flex ${step.side === "right" ? "md:justify-start" : "md:justify-end"} pl-12 md:pl-0`}
                >
                  <div className="relative w-[180px] sm:w-[190px] md:w-[215px] lg:w-[240px] h-[340px] sm:h-[400px] md:h-[460px] lg:h-[520px] rounded-[2rem] overflow-hidden border border-white/10 bg-neutral-900 shadow-[0_0_60px_-15px_rgba(45,212,191,0.08)]">
                    <img
                      src={step.image}
                      alt={step.imageLabel}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0'; }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Choose Your Path Label */}
        <div className="flex justify-center my-8 md:my-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-5 py-2 rounded-full border border-teal-500/20 bg-teal-500/5 backdrop-blur-md"
          >
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-teal-400/80">
              Choose Your Path
            </span>
          </motion.div>
        </div>

        {/* Branching Paths — Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {branchSteps.map((step, i) => {
            const Icon = step.icon;
            const colorMap = {
              green: { bg: "bg-green-500/10", border: "border-green-500/20", text: "text-green-400/80" },
              blue: { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400/80" },
            };
            const colors = colorMap[step.color];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col items-center text-center p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-colors duration-500"
              >
                {/* Icon + Label */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${colors.text}`}>
                    {step.step}
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-montserrat font-bold text-xl md:text-2xl text-white tracking-tight mb-3">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Phone Mockup */}
                <div className="relative w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] rounded-[1.5rem] overflow-hidden border border-white/10 bg-neutral-900 shadow-[0_0_40px_-10px_rgba(45,212,191,0.06)]">
                  <img
                    src={step.image}
                    alt={step.imageLabel}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0'; }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Closing Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-2xl mx-auto text-center mt-16 md:mt-24"
      >
        <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed text-pretty">
          This is the dual-brand civic intelligence model: TsekApp's Medical Mint Green handles
          the health journey, while the host Naga App's Red-Orange frame powers navigation and
          emergency actions — proving that a new module can integrate into an existing super app
          without breaking its identity.
        </p>
      </motion.div>
    </div>
  );
}
