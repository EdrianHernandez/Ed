import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

const BahanihanCaseStudy = () => {
  interface ScreenshotData {
    src: string;
    alt: string;
    title: string;
    description: string;
  }
  const [hoveredImage, setHoveredImage] = useState<ScreenshotData | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [galleryComplete, setGalleryComplete] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const galleryIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    galleryIndexRef.current = galleryIndex;
  }, [galleryIndex]);

  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (isAnimatingRef.current) {
        e.preventDefault();
        return;
      }

      if (e.deltaY > 0 && galleryIndexRef.current < 3) {
        e.preventDefault();
        isAnimatingRef.current = true;
        setGalleryIndex(prev => prev + 1);
        setTimeout(() => { isAnimatingRef.current = false; }, 600);
      } else if (e.deltaY < 0 && galleryIndexRef.current > 0) {
        e.preventDefault();
        setGalleryComplete(false);
        isAnimatingRef.current = true;
        setGalleryIndex(prev => prev - 1);
        setTimeout(() => { isAnimatingRef.current = false; }, 600);
      }
      // At bounds: don't preventDefault → page scrolls normally
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [galleryComplete]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setHoveredImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const mobileScreenshots: ScreenshotData[] = [
    {
      src: "/BAHANIHAN ASSETS/BAHANIHAN (MOBILE LANDING PAGE).png",
      alt: "Mobile Landing Page",
      title: "Landing Page",
      description: "The volunteer's entry point\u2014clear mission status and immediate action prompts."
    },
    {
      src: "/BAHANIHAN ASSETS/BAHANIHAN (MISSION OVERVIEW).png",
      alt: "Mission Overview",
      title: "Mission Overview",
      description: "Active mission parameters and supply routing at a glance."
    },
    {
      src: "/BAHANIHAN ASSETS/BAHANIHAN (MAP SECTION).png",
      alt: "Map Section",
      title: "Live Map",
      description: "Algorithmic disaster mapping for navigating active zones."
    },
    {
      src: "/BAHANIHAN ASSETS/BAHANIHAN (SUPPLY LOGS).png",
      alt: "Supply Logs",
      title: "Supply Logs",
      description: "Real-time supply logging to eliminate logistical bottlenecks."
    },
    {
      src: "/BAHANIHAN ASSETS/BAHANIHAN (PROFILE SECTION).png",
      alt: "Profile Section",
      title: "Volunteer Profile",
      description: "Personal dashboard for tracking contributions and status."
    }
  ];

  const desktopScreenshots: ScreenshotData[] = [
    {
      src: "/BAHANIHAN ASSETS/BAHANIHAN (HOMEPAGE).png",
      alt: "Admin Homepage",
      title: "Admin Homepage",
      description: "Central command hub for real-time status overview across all evacuation centers and volunteer deployments."
    },
    {
      src: "/BAHANIHAN ASSETS/BAHANIHAN (ADMINS MAP SECTION).png",
      alt: "Map Dispatch",
      title: "Map Dispatch",
      description: "Geographic visualization of evacuation zones, active volunteer locations, and resource distribution across Batangas province."
    },
    {
      src: "/BAHANIHAN ASSETS/BAHANIHAN (SUPPLY INVENTORY PAGE).png",
      alt: "Supply Inventory",
      title: "Supply Inventory",
      description: "Live tracking of relief goods across all LGU warehouses with real-time stock levels and inter-LGU transfer status."
    },
    {
      src: "/BAHANIHAN ASSETS/BAHANIHAN (VOLUNTEERS PAGE).png",
      alt: "Volunteer Registry",
      title: "Volunteer Registry",
      description: "Complete volunteer roster with deployment history, skill mapping, and real-time availability status."
    }
  ];

  return (
    <div className="relative min-h-screen bg-neutral-950 overflow-hidden text-white font-sans selection:bg-white/30">
      {/* Background Visuals: Dual-platform framing */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Desktop UI Placeholder: Left edge, angled */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[800px] h-[500px] rotate-[-4deg] opacity-10 blur-2xl lg:opacity-10 lg:blur-2xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <img 
            src="/BAHANIHAN ASSETS/bahanihan-desktop.jpg" 
            alt="LGU Admin Desktop UI"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Mobile UI Placeholder: Right edge, angled */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] rotate-[4deg] opacity-[0.15] blur-xl lg:left-auto lg:right-0 lg:translate-x-0 lg:opacity-[0.15] lg:blur-xl bg-white/5 border border-white/10 rounded-[40px] overflow-hidden">
          <img 
            src="/BAHANIHAN ASSETS/bahanihan-mobile.jpg" 
            alt="Volunteer Mobile App UI"
            className="w-full h-full object-cover"
          />
        </div>
        
      </div>

      {/* Gradient Overlay: Blends background images into canvas */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-neutral-950/60 via-transparent to-neutral-950/60 pointer-events-none" />

      {/* Icon-Only Back Button */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 md:top-12 md:left-12 z-50 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md hover:bg-white/10 hover:-translate-x-1 transition-all duration-300 group"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-white/60 group-hover:text-white transition-colors duration-300"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </Link>

      {/* Content Wrapper */}
      <div className="relative z-20 flex flex-col min-h-screen px-6 md:px-12 lg:px-24">
        
        {/* Centered Hero Content */}
        <div className="flex flex-col items-center justify-center min-h-screen">
          
          <div className="flex flex-col items-center text-center max-w-4xl">
            
            {/* Project Logo */}
            <img 
              src="/BAHANIHAN ASSETS/BAHANIHAN LOGO (2).png" 
              alt="Bahanihan Logo"
              className="h-35 w-auto mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            />

            {/* Unified Montserrat Title */}
            <h1 
              className="text-5xl md:text-7xl lg:text-[10rem] font-black tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] text-white leading-none"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              BAHANIHAN
            </h1>

            {/* Cinematic Tagline */}
            <p className="text-neutral-400 uppercase text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] mt-8 mb-16 md:mb-20">
              BAYANIHAN SA AKSYON, AGARAN SA PAGTULONG
            </p>

            {/* Metadata: Stacked mobile, row on tablet+ */}
            <div className="flex flex-col gap-6 md:flex-row md:gap-12 ">
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">Role</span>
                <span className="text-sm md:text-base text-white/90 font-medium tracking-wide">UI/UX DESIGNER</span>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">Platform</span>
                <span className="text-sm md:text-base text-white/90 font-medium tracking-wide">DESKTOP & MOBILE OS</span>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">Focus</span>
                <span className="text-sm md:text-base text-white/90 font-medium tracking-wide">DISASTER RESPONSE COORDINATION</span>
              </div>
            </div>
            
          </div>
        </div>

        {/* The Brief Section */}
        <section className="max-w-7xl mx-auto w-full py-32 md:py-40">
          <span className="text-neutral-600 tracking-widest text-[10px] font-semibold uppercase mb-8 block">[ THE BRIEF ]</span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-[1.1]">
                Bridging the gap between command and ground zero.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:border-l lg:border-white/10 lg:pl-12 flex flex-col gap-16">
              <div>
                <h3 className="font-montserrat font-bold text-xs tracking-[0.2em] text-neutral-300 uppercase mb-4 flex items-center gap-4">
                  <span>The Problem</span>
                  <span className="w-5 h-px bg-white/20" />
                </h3>
                <p className="text-neutral-400 leading-relaxed text-base md:text-lg font-light max-w-xl">
                  During critical disaster response scenarios in Batangas province, communication becomes heavily fragmented. Local Government Unit (LGU) administrators lack real-time visibility into supply chains, while on-the-ground volunteers are forced to rely on chaotic group chats—leading to severe logistical bottlenecks and delayed relief efforts.
                </p>
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-xs tracking-[0.2em] text-neutral-300 uppercase mb-4 flex items-center gap-4">
                  <span>The Objective</span>
                  <span className="w-5 h-px bg-white/20" />
                </h3>
                <p className="text-neutral-400 leading-relaxed text-base md:text-lg font-light max-w-xl">
                  Architect a centralized, dual-platform ecosystem. We needed to translate high-density logistical and geographic data into a comprehensive macro-view for dispatchers, while simultaneously delivering a hyper-focused, friction-free mobile experience for volunteers executing critical supply drops in active zones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Showcase Section */}
        <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen py-5 md:py-4 bg-[#030305] overflow-hidden">
          {/* Technical Grid Background */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div 
              className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]" 
              style={{ 
                maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
              }} 
            />
          </div>

          {/* Global back-glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none z-0" />

          <section className="max-w-7xl mx-auto w-full pb-32 relative z-10">
          {/* Section Intro */}
          <div className="text-center py-32 md:py-32">
            <span className="text-neutral-500 tracking-widest text-xs font-semibold">[ SYSTEM ARCHITECTURE ]</span>
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white mt-2">
              TWO INTERFACES. ONE RESPONSE.
            </h2>
          </div>

          {/* Core Interfaces Visual Lockup */}
          <div className="flex justify-center mt-1 md:mt-0 mb-24 md:mb-32 px-2 sm:px-0">
            <div className="relative w-[90%] max-w-5xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] bg-white/10 blur-[120px] rounded-full pointer-events-none -z-10" />

              <div className="rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)] overflow-hidden">
                <img src="/BAHANIHAN ASSETS/BAHANIHAN (HOMEPAGE).png" alt="LGU Admin Dashboard" className="w-full h-full object-cover" />
              </div>

              <div className="absolute -bottom-8 right-0 sm:-bottom-12 sm:-right-4 md:-bottom-20 md:-right-12 w-[140px] sm:w-[180px] md:w-[280px] lg:w-[320px] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] border-[4px] sm:border-[6px] border-neutral-900 shadow-2xl z-10 overflow-hidden">
                <img src="/BAHANIHAN ASSETS/BAHANIHAN (MOBILE LANDING PAGE).png" alt="Volunteer Mobile App" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Block A: Mobile Showcase */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="text-center mx-auto mb-10 max-w-3xl"
          >
            <div className="w-12 h-px bg-white/30 mx-auto mb-6" />
            <h3 className="font-montserrat font-bold text-3xl md:text-4xl text-white tracking-tight mb-4">
              Volunteer Mobile Application
            </h3>
            <p className="text-neutral-400 leading-relaxed md:text-lg">
              Engineered for high-stress environments. The mobile application acts as the tip of the spear for on-the-ground execution. By stripping away administrative noise, it focuses purely on active mission parameters, real-time supply logging, and algorithmic disaster mapping—drastically reducing cognitive friction for volunteers navigating active zones.
            </p>
          </motion.div>

          {/* Volunteer Mobile Screenshots — Auto-Scroll Marquee */}
          <div className="marquee-pause-on-hover relative w-full overflow-hidden py-8 px-4 sm:px-6 lg:px-8">
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-r from-[#030305] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-l from-[#030305] to-transparent z-10 pointer-events-none" />
            <div className="flex w-max animate-marquee-ltr">
              {[...mobileScreenshots, ...mobileScreenshots].map((item, i) => (
                <div
                  key={i}
                  className="relative h-[340px] sm:h-[400px] md:h-[460px] lg:h-[520px] mx-2 sm:mx-3 lg:mx-5 flex-shrink-0 rounded-[2rem] overflow-hidden border border-white/10 shadow-lg transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.12)] hover:scale-[1.03] cursor-pointer group"
                  onClick={() => setHoveredImage(item)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-auto relative z-10"
                    onError={(e) => { e.currentTarget.style.opacity = '0'; }}
                  />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-colors duration-500 z-20 pointer-events-none" />
                  <span className="absolute inset-0 flex items-center justify-center text-[#333] font-mono text-[10px] sm:text-xs z-0 pointer-events-none">
                    Image required: {item.src}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Block B: Desktop Showcase */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="text-center mx-auto mb-10 max-w-3xl mt-40"
          >
            <div className="w-12 h-px bg-white/30 mx-auto mb-6" />
            <h3 className="font-montserrat font-bold text-3xl md:text-4xl text-white tracking-tight mb-4">
              LGU Admin Dashboard
            </h3>
            <p className="text-neutral-400 leading-relaxed md:text-lg">
              The macro-level command center. In direct contrast to the mobile app, the desktop environment is engineered for extreme data density. Dispatchers require a god's-eye view of evacuation centers and volunteer deployments across Batangas province. This interface facilitates complex logistics, from broadcasting immediate alerts to executing critical inter-LGU supply requests.
            </p>
          </motion.div>

          {/* Desktop Card Stack Gallery (md+) */}
          <div 
            ref={galleryRef}
            className="relative h-screen overflow-hidden hidden md:flex items-center justify-center"
          >
            {desktopScreenshots.map((item, i) => {
              const isActive = i === galleryIndex;
              const isLeftPeek = i === galleryIndex - 1;
              const isRightPeek = i === galleryIndex + 1;
              const isPeek = isLeftPeek || isRightPeek;

              return (
                <motion.div
                  key={i}
                  className="absolute w-full max-w-4xl px-6"
                  initial={false}
                  animate={{
                    x: isLeftPeek 
                      ? '-16%' 
                      : isRightPeek 
                        ? '16%' 
                        : isActive 
                          ? 0 
                          : i < galleryIndex 
                            ? '-130%' 
                            : '130%',
                    rotate: isLeftPeek 
                      ? -5 
                      : isRightPeek 
                        ? 5 
                        : isActive 
                          ? 0 
                          : i < galleryIndex 
                            ? -20 
                            : 20,
                    scale: isPeek ? 0.92 : 1,
                    opacity: isActive ? 1 : isPeek ? 0.5 : 0,
                    zIndex: isActive ? 10 : isPeek ? 9 : 0,
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div 
                    className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(255,255,255,0.06)] bg-[#0a0a0c] cursor-pointer"
                    onClick={() => setHoveredImage(item)}
                  >
                    <div className="relative aspect-[16/10]">
                      <img 
                        src={item.src} 
                        alt={item.alt} 
                        className={`w-full h-full object-cover transition-all duration-500 ${isPeek ? 'blur-sm' : ''}`}
                      />
                    </div>
                  </div>
                  <motion.div 
                    className="text-center mt-6"
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                    transition={{ duration: 0.4, delay: isActive ? 0.3 : 0 }}
                  >
                    <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">
                      {item.title}
                    </h4>
                    <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Horizontal Swipe Carousel (< md) */}
          <div className="md:hidden relative w-full overflow-hidden py-8">
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-[#030305] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-[#030305] to-transparent z-10 pointer-events-none" />
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 hide-scrollbar">
              {desktopScreenshots.map((item, i) => (
                <div
                  key={i}
                  className="w-[85vw] sm:w-[75vw] flex-shrink-0 snap-center cursor-pointer group"
                  onClick={() => setHoveredImage(item)}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.12)] hover:scale-[1.02] mb-4">
                    <img src={item.src} alt={item.alt} className="w-full h-auto object-cover" />
                  </div>
                  <div className="text-center px-2">
                    <h4 className="text-white font-bold tracking-wide text-sm mb-1">{item.title}</h4>
                    <p className="text-[#888] text-xs font-light leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </section>
        </section>

        {/* Click-Activated Floating Modal */}
        <AnimatePresence>
          {hoveredImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
              onClick={() => setHoveredImage(null)}
            >
              <div
                className="relative flex flex-col md:flex-row max-w-5xl w-full max-h-[88vh] bg-[#0a0a0c]/95 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_120px_rgba(0,0,0,0.9)]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setHoveredImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md hover:bg-white/10 transition-all duration-300 z-20"
                  aria-label="Close preview"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>

                <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-10 min-h-[35vh] md:min-h-0 bg-neutral-900/50">
                  <img
                    src={hoveredImage.src}
                    alt={hoveredImage.alt}
                    className="max-h-[70vh] w-auto object-contain rounded-2xl shadow-2xl"
                  />
                </div>

                <div className="w-full md:w-[380px] border-t md:border-t-0 md:border-l border-white/10 p-6 sm:p-8 md:p-10 flex flex-col justify-center bg-[#0a0a0c]">
                  <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
                    {hoveredImage.title}
                  </h4>
                  <div className="w-12 h-1 bg-white/20 mb-6 rounded-full" />
                  <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed">
                    {hoveredImage.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default BahanihanCaseStudy;
