import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { NavBar } from "../components/NavBar";
import { NextProjectButton } from "../components/NextProjectButton";

export function FloodguardCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollLeft, clientWidth } = e.currentTarget;
    const index = Math.round(scrollLeft / clientWidth);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      ref={containerRef}
      className="bg-[#050505] min-h-screen text-[#FBFBFB] font-sans selection:bg-[#FBFBFB] selection:text-[#050505]"
    >
      <NavBar />
      {/* 1. Case Study Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden">
        {/* Cinematic UI Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/FLOODGUARD%20ASSETS/MAIN%20DASHBOARD%20(LANDING%20PAGE).png" 
            alt="Floodguard Dashboard Background" 
            className="w-full h-full object-cover blur-3xl opacity-20 brightness-50 scale-105"
          />
          {/* Gradient overlay to fade to solid black at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
        </div>

        {/* Hero Typography */}
        <div className="flex flex-col items-center justify-center w-full z-10 mt-12 md:mt-0 space-y-12 md:space-y-16">
          <div className="flex flex-col items-center justify-center">
            <motion.div className="overflow-hidden py-4 pb-2 flex flex-col items-center">
              <motion.img
                src="/FLOODGUARD%20ASSETS/FLOODGUARD%20LOGO.png"
                alt="Floodguard logo"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="h-65 w-auto mb-4 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                onError={(e) => (e.currentTarget as HTMLImageElement).style.opacity = '0'}
              />
              <motion.h1 
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[11vw] sm:text-6xl md:text-8xl lg:text-9xl font-montserrat tracking-tighter uppercase leading-none text-center text-white drop-shadow-sm w-full"
              > 
                <span className="font-[800]">FLOOD</span>
                <span className="font-[200]">GUARD</span>
              </motion.h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] font-montserrat text-neutral-400 uppercase mt-2 md:mt-4 text-center px-4"
            >
              PREPARE & PROTECT
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
              { label: "TECH FOCUS", value: "AI/ML Data Visualization" },
              { label: "CONTEXT", value: "UPLB Warframes Competition Entry" },
              { label: "AWARDS", value: "1st Place Winner" },
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

      {/* 2. The Brief (Finding the Chaos) */}
      <section className="relative py-16 sm:py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] md:w-[70%] h-[100%] md:h-[80%] bg-white/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7 }}
              className="md:col-span-5 border-l border-white/10 pl-5 md:pl-8"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-6 tracking-wide text-[#E0E0E0]">THE PROBLEM</h2>
              <p className="text-[#A8A8A8] text-base sm:text-lg md:text-xl font-light leading-relaxed text-pretty">
                Typhoons do not wait for preparedness. In the Philippines, natural disasters routinely strip communities of their infrastructure. The fatal flaw is rarely a lack of data, but a collapse in its distribution: communities struggle relentlessly with fragmented alerts, delayed responses, and a void of real-time intelligence.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="md:col-span-7 border-l border-white/10 pl-5 md:pl-8 mt-4 md:mt-0"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-6 tracking-wide text-[#E0E0E0]">THE CHALLENGE</h2>
              <p className="text-[#A8A8A8] text-base sm:text-lg md:text-xl font-light leading-relaxed text-pretty">
                Transforming raw predictive data into survival currency. The imperative was to conceptualize a web application prototype that didn't just display AI/ML flood risk forecasts, but digested them into immediate, actionable directives. We had to design an interface where complex meteorological algorithms met human urgency—equipping communities to prepare, navigate, and survive high-stakes environmental crises.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. High-Fidelity Execution (The Gallery) */}
      <section className="relative py-32 md:py-48 bg-[#030305] overflow-hidden">
        {/* Subtle Technical Grid Background with Mask */}
        <motion.div 
          style={{ y: gridY }}
          className="absolute inset-0 pointer-events-none z-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div 
            className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]" 
            style={{ 
              maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
            }} 
          />
        </motion.div>

        {/* Subtle global back-glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none z-0" />

        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex flex-col gap-16 sm:gap-20 md:gap-32">
          
          {/* 1. The Hero Shot */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-10%" }} 
            transition={{ duration: 0.8 }} 
            className="flex flex-col items-center w-full"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6 sm:mb-8 md:mb-12 uppercase text-center px-2">The Command Center</h2>
            <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.03)] border border-white/5 mb-6 sm:mb-8 bg-[#0a0a0c] min-h-[200px] sm:min-h-[300px] md:min-h-[400px] flex items-center justify-center">
              <img src="/FLOODGUARD%20ASSETS/MAIN%20DASHBOARD%20(LANDING%20PAGE).png" alt="Main Dashboard" className="w-full h-auto object-cover relative z-10" onError={(e) => e.currentTarget.style.opacity = '0'} />
              <span className="absolute text-[#333] font-mono text-xs sm:text-sm text-center px-4">Image required: /FLOODGUARD ASSETS/MAIN DASHBOARD (LANDING PAGE).png</span>
            </div>
            <p className="text-[#A8A8A8] text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-3xl text-center px-2 sm:px-0">
              The central hub for real-time precipitation and sector risk statuses, visualized through a stunning 3D isometric map of Batangas province. A masterclass in dark-mode data legibility designed to prevent cognitive overload.
            </p>
          </motion.div>

          {/* 1.5 Interactive Granularity & State Logic */}
          <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 relative z-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }} 
              className="text-center w-full max-w-[1000px] mx-auto px-4 sm:px-0"
            >
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 sm:mb-6">Interactive Granularity & State Logic</h3>
              <p className="text-[#A8A8A8] text-sm sm:text-base md:text-lg font-light leading-relaxed text-pretty max-w-3xl mx-auto">
                The map is a dynamic navigational component, not a static graphic. Selecting a municipality isolates its geometry and fetches localized API data into a unified panel. This strict, color-coded structure reduces cognitive friction during high-stress disaster scenarios.
              </p>
            </motion.div>

            {/* 3-Column Cascading State Showcase (The Ladder Layout) */}
            <div className="relative w-full max-w-7xl mx-auto">
              <div 
                className="w-full h-full flex flex-row overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-[7.5vw] sm:px-[17.5vw] md:px-[25vw] lg:grid lg:grid-cols-3 lg:gap-16 lg:overflow-visible lg:px-0 relative [&::-webkit-scrollbar]:hidden"
                style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                onScroll={handleScroll}
              >
                
                {/* Column 1: San Juan (Anchored Top) */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, margin: "-10%" }} 
                  transition={{ duration: 0.8, delay: 0.0, ease: "easeOut" }} 
                  className="flex flex-col group min-w-[85vw] sm:min-w-[65vw] md:min-w-[50vw] snap-center lg:min-w-0 lg:w-full"
                >
                  <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-white/5 bg-[#0a0a0c]/80 backdrop-blur-md flex items-center justify-center transition-colors duration-500 mb-4 sm:mb-6 shrink-0">
                    <img src="/FLOODGUARD%20ASSETS/SAN%20JUAN.png" alt="San Juan Critical State" className="w-full h-full object-cover relative z-10 rounded-xl sm:rounded-2xl" onError={(e) => e.currentTarget.style.opacity = '0'} />
                    <span className="absolute text-[#333] font-mono text-[10px] sm:text-xs z-0">Image required: /public/SAN JUAN.png</span>
                  </div>
                  <div className="pl-4 sm:pl-5 border-l-2 border-red-500/80 h-fit flex flex-col">
                    <h4 className="text-white font-bold tracking-wide uppercase text-sm md:text-base mb-1 sm:mb-2">Critical</h4>
                    <p className="text-[#888] text-xs sm:text-sm md:text-base font-light leading-relaxed">Stark red UI accents and elevated 9mm/hr rainfall data clearly broadcast immediate, escalating danger.</p>
                  </div>
                </motion.div>

                {/* Column 2: Batangas City (Moderate Drop) */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, margin: "-10%" }} 
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
                  className="flex flex-col group min-w-[85vw] sm:min-w-[65vw] md:min-w-[50vw] snap-center lg:min-w-0 lg:w-full mt-0 lg:mt-16"
                >
                  <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-white/5 bg-[#0a0a0c]/80 backdrop-blur-md flex items-center justify-center transition-colors duration-500 mb-4 sm:mb-6 shrink-0">
                    <img src="/FLOODGUARD%20ASSETS/BATANGAS%20CITY.png" alt="Batangas City Rising State" className="w-full h-full object-cover relative z-10 rounded-xl sm:rounded-2xl" onError={(e) => e.currentTarget.style.opacity = '0'} />
                    <span className="absolute text-[#333] font-mono text-[10px] sm:text-xs z-0">Image required: /public/BATANGAS CITY.png</span>
                  </div>
                  <div className="pl-4 sm:pl-5 border-l-2 border-yellow-500/80 h-fit flex flex-col">
                    <h4 className="text-white font-bold tracking-wide uppercase text-sm md:text-base mb-1 sm:mb-2">Rising</h4>
                    <p className="text-[#888] text-xs sm:text-sm md:text-base font-light leading-relaxed">Yellow accents indicate escalating risk, maintaining acute situational awareness without inciting panic.</p>
                  </div>
                </motion.div>

                {/* Column 3: Rosario (Significant Drop) */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, margin: "-10%" }} 
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} 
                  className="flex flex-col group min-w-[85vw] sm:min-w-[65vw] md:min-w-[50vw] snap-center lg:min-w-0 lg:w-full mt-0 lg:mt-32 max-w-sm sm:max-w-none mx-auto sm:mx-0 w-full"
                >
                  <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-white/5 bg-[#0a0a0c]/80 backdrop-blur-md flex items-center justify-center transition-colors duration-500 mb-4 sm:mb-6 shrink-0">
                    <img src="/FLOODGUARD%20ASSETS/ROSARIO.png" alt="Rosario Stable State" className="w-full h-full object-cover relative z-10 rounded-xl sm:rounded-2xl" onError={(e) => e.currentTarget.style.opacity = '0'} />
                    <span className="absolute text-[#333] font-mono text-[10px] sm:text-xs z-0">Image required: /public/ROSARIO.png</span>
                  </div>
                  <div className="pl-4 sm:pl-5 border-l-2 border-green-500/80 h-fit flex flex-col">
                    <h4 className="text-white font-bold tracking-wide uppercase text-sm md:text-base mb-1 sm:mb-2">Stable</h4>
                    <p className="text-[#888] text-xs sm:text-sm md:text-base font-light leading-relaxed">Clean green UI elements provide psychological relief and clear data reading for safe sectors.</p>
                  </div>
                </motion.div>
              </div>
              {/* Cinematic Edge Fade (Mobile/Tablet Only) - Left & Right Masks for Depth */}
              <div className="absolute left-0 top-0 bottom-8 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-[#030305] to-transparent pointer-events-none z-10 lg:hidden"></div>
              <div className="absolute right-0 top-0 bottom-8 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-[#030305] to-transparent pointer-events-none z-10 lg:hidden"></div>
              
              {/* Telemetry Dash Pagination (Mobile/Tablet Only) */}
              <div className="flex justify-center gap-3 mt-4 lg:hidden">
                {[0, 1, 2].map((index) => (
                  <div 
                    key={index}
                    className={`h-[2px] transition-all duration-300 ease-out rounded-full ${
                      index === activeIndex 
                        ? 'w-10 bg-white opacity-100 shadow-[0_0_8px_rgba(255,255,255,0.5)]' 
                        : 'w-8 bg-neutral-800 opacity-40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 2. Threat Visualization Split */}
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }} 
              className="text-center px-4 sm:px-0"
            >
              <h3 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight text-white mb-3 md:mb-6">Predictive Threat Modeling</h3>
              <p className="text-[#A8A8A8] text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto">
                Users toggle between satellite cloud density and real-time water levels risk parameters seamlessly within the exact same isometric environment.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8 }} 
                className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.02)] border border-white/5 bg-[#0a0a0c] min-h-[200px] sm:min-h-[250px] md:min-h-[300px] flex items-center justify-center mr-6 sm:mr-12 md:mr-0"
              >
                <img src="/FLOODGUARD%20ASSETS/WEATHER.png" alt="Satellite Weather" className="w-full h-auto object-cover relative z-10" onError={(e) => e.currentTarget.style.opacity = '0'} />
                <span className="absolute text-[#333] font-mono text-[10px] sm:text-xs text-center">Image required: /public/WEATHER.png</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8, delay: 0.2 }} 
                className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.02)] border border-white/5 bg-[#0a0a0c] min-h-[200px] sm:min-h-[250px] md:min-h-[300px] flex items-center justify-center ml-6 sm:ml-12 md:ml-0"
              >
                <img src="/FLOODGUARD%20ASSETS/FLOOD%20MAPS.png" alt="Flood Maps" className="w-full h-auto object-cover relative z-10" onError={(e) => e.currentTarget.style.opacity = '0'} />
                <span className="absolute text-[#333] font-mono text-[10px] sm:text-xs text-center">Image required: /public/FLOOD MAPS.png</span>
              </motion.div>
            </div>
          </div>

          {/* 3. AI Logic Parallax */}
          <motion.div className="flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }} 
              className="w-full mb-8 sm:mb-10 md:mb-12"
            >
              <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.04)] border border-white/5 bg-[#0a0a0c] min-h-[200px] sm:min-h-[300px] md:min-h-[400px] flex items-center justify-center">
                <img src="/FLOODGUARD%20ASSETS/EVACUATION%20CENTER.png" alt="AI Evacuation Logic" className="w-full h-auto object-cover relative z-10" onError={(e) => e.currentTarget.style.opacity = '0'} />
                <span className="absolute text-[#333] font-mono text-[10px] sm:text-xs md:text-sm text-center">Image required: /public/EVACUATION CENTER.png</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.2 }} 
              className="text-center max-w-4xl px-4 sm:px-6 md:px-0"
            >
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4 md:mb-6">AI-Driven Evacuation Logic</h3>
              <p className="text-[#A8A8A8] text-sm sm:text-base md:text-xl font-light leading-relaxed text-pretty">
                The core of the system. The 'AI Evacuation Recommendation' dynamically calculates shelter capacity, imminent flood pathways, and real-time transit duration to instantly route users safely to the Batangas City Sports Complex and other viable safe zones.
              </p>
            </motion.div>
          </motion.div>

          {/* 4. Deep Data Offset */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center"
          >
            <div className="lg:col-span-8 relative rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.03)] border border-white/5 bg-[#0a0a0c] min-h-[200px] sm:min-h-[300px] md:min-h-[400px] flex items-center justify-center">
              <img src="/FLOODGUARD%20ASSETS/ANALYTICS.png" alt="Demographic Impact Analysis" className="w-full h-auto object-cover relative z-10" onError={(e) => e.currentTarget.style.opacity = '0'} />
              <span className="absolute text-[#333] font-mono text-[10px] sm:text-xs md:text-sm text-center">Image required: /public/ANALYTICS.png</span>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-center px-4 sm:px-6 lg:px-0">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-1 md:mb-6">Demographic Impact Analysis</h3>
              <p className="text-[#A8A8A8] text-sm sm:text-base md:text-lg font-light leading-relaxed">
                Complex charts, circular graphs, and demographic impact datasets are unified under a highly disciplined dark-mode aesthetic. This precise data hierarchy allows macroscopic emergency information to remain highly legible and profoundly urgent without ever causing cognitive overload.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. Award & Recognition */}
      <section className="relative py-16 sm:py-24 md:py-32 px-6 md:px-12 lg:px-24 w-full mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center relative">
            
            {/* The Huge "1ST" Watermark Background */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 font-black text-[12rem] md:text-[20rem] lg:text-[24rem] leading-none pointer-events-none select-none z-0 translate-x-[-15%] lg:translate-x-[-10%] opacity-10 bg-clip-text text-transparent bg-gradient-to-b from-white/40 to-transparent">
              1ST
            </div>

            {/* Left Column: Typography */}
            <div className="relative z-10 flex flex-col pt-12 md:pt-0">
              <div className="text-[#888888] font-mono text-xs md:text-sm tracking-widest uppercase mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#555]"></span>
                [ AWARD: 1ST PLACE — UPLB WARFRAMES ]
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-white">VALIDATED BY RESULTS</h2>
              <p className="text-[#A8A8A8] text-lg md:text-xl font-light leading-relaxed max-w-xl">
                The FLOODGUARD architecture was built to withstand rigorous technical scrutiny. Awarded 1st Place at the UPLB Warframes Competition during the 42nd Computer Science Week, this project validates the methodology of bridging complex AI data with intuitive, life-saving UI design.
              </p>
            </div>
            
            {/* Right Column: Floating Certificate */}
            <div className="relative z-10 flex justify-center lg:justify-end w-full">
              {/* Soft environmental glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/5 rounded-full blur-[80px] pointer-events-none z-0"></div>
              
              <img 
                src="/FLOODGUARD%20ASSETS/WARFRAMES_CERT.png" 
                alt="UPLB Warframes 1st Place Certificate" 
                className="w-full max-w-lg lg:max-w-xl h-auto object-cover rounded-xl border border-white/10 shadow-2xl shadow-white/5 relative z-10 grayscale-0 opacity-100 lg:grayscale lg:opacity-70 hover:grayscale-0 hover:opacity-100 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-700 ease-out cursor-pointer"
                onError={(e) => e.currentTarget.style.opacity = '0'}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. Final CTA / Prototype Link */}
      <section className="relative w-full py-24 md:py-32 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden">
        
        {/* Atmospheric Radial Glow Behind Content */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none z-0"></div>
        
        {/* Subtle ambient light separator */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col items-center py-16 px-6 sm:px-8 md:p-16 lg:p-24 w-full max-w-5xl"
        >
          {/* Minimalist Corner Brackets / Crosshairs */}
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
            href="https://www.figma.com/proto/B1UjOsVvHbwFxXg1secx5W/FloodGuard?node-id=0-1&t=ZlYfqzFFxf5WG11I-1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group mt-10 md:mt-12 px-6 sm:px-8 py-3.5 sm:py-4 w-full max-w-[280px] sm:max-w-max rounded-full bg-black/50 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_0_30px_-5px_rgba(255,255,255,0.05)] flex items-center justify-center gap-3 transition-all duration-500 ease-out hover:ring-white/40 hover:bg-white/10 hover:shadow-[0_0_40px_0px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95"
          >
            <svg 
              className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" 
              viewBox="0 0 38 57" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 28.5C19 33.7467 14.7467 38 9.5 38C4.25329 38 0 33.7467 0 28.5C0 23.2533 4.25329 19 9.5 19H19V28.5Z" fill="#0ACF83"/>
              <path d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 14.7467 0 9.5Z" fill="#F24E1E"/>
              <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#FF7262"/>
              <path d="M38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5C19 23.2533 23.2533 19 28.5 19H38V28.5Z" fill="#1ABCFE"/>
              <path d="M19 47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5C0 42.2533 4.25329 38 9.5 38C14.7467 38 19 42.2533 19 47.5Z" fill="#A259FF"/>
            </svg>
            <span className="text-white text-sm font-medium tracking-wide uppercase transition-colors duration-500">Interact with Prototype</span>
          </a>
        </motion.div>

        {/* The Page Anchor Base */}
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

        <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-center gap-4 mt-16 md:mt-24">
          <NextProjectButton title="ShoreThing" path="/projects/shorething" direction="next" />
        </div>
      </section>
    </motion.div>
  );
}
