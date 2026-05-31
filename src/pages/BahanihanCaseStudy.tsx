import { Link } from 'react-router-dom';

const BahanihanCaseStudy = () => {
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
        <section className="max-w-7xl mx-auto w-full py-24 md:py-32">
          <span className="text-neutral-500 tracking-widest text-xs font-semibold uppercase mb-12 block">[ THE BRIEF ]</span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                Bridging the gap between command and ground zero.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-12">
              <div>
                <h3 className="font-montserrat font-bold text-xl text-white mb-4">The Problem</h3>
                <p className="text-neutral-400 leading-relaxed md:text-lg">
                  During critical disaster response scenarios in Batangas province, communication becomes heavily fragmented. Local Government Unit (LGU) administrators lack real-time visibility into supply chains, while on-the-ground volunteers are forced to rely on chaotic group chats—leading to severe logistical bottlenecks and delayed relief efforts.
                </p>
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-xl text-white mb-4">The Objective</h3>
                <p className="text-neutral-400 leading-relaxed md:text-lg">
                  Architect a centralized, dual-platform ecosystem. We needed to translate high-density logistical and geographic data into a comprehensive macro-view for dispatchers, while simultaneously delivering a hyper-focused, friction-free mobile experience for volunteers executing critical supply drops in active zones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Showcase Section */}
        <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen py-32 md:py-48 bg-[#030305] overflow-hidden">
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
          <div className="text-center py-24 md:py-32">
            <span className="text-neutral-500 tracking-widest text-xs font-semibold">[ SYSTEM ARCHITECTURE ]</span>
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white mt-4">
              TWO INTERFACES. ONE RESPONSE.
            </h2>
          </div>

          {/* Core Interfaces Visual Lockup */}
          <div className="flex justify-center mt-0 md:mt-0 mb-24 md:mb-32 px-4 sm:px-0">
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
          <div className="border-l-[3px] border-white/20 pl-6 mb-12 max-w-3xl">
            <h3 className="font-montserrat font-bold text-3xl md:text-4xl text-white tracking-tight mb-4">
              Volunteer Mobile Application
            </h3>
            <p className="text-neutral-400 leading-relaxed md:text-lg">
              Engineered for high-stress environments. The mobile application acts as the tip of the spear for on-the-ground execution. By stripping away administrative noise, it focuses purely on active mission parameters, real-time supply logging, and algorithmic disaster mapping—drastically reducing cognitive friction for volunteers navigating active zones.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {/* Item 1: Hero (col-span-2 row-span-2) */}
            <div className="col-span-2 row-span-2">
              <div className="rounded-[2rem] border-[6px] border-neutral-900 shadow-2xl overflow-hidden aspect-[9/16]">
                <img src="/BAHANIHAN ASSETS/BAHANIHAN (MOBILE LANDING PAGE).png" alt="Mobile Landing Page" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Item 2 */}
            <div className="col-span-1 md:translate-y-8">
              <div className="rounded-[2rem] border-[6px] border-neutral-900 shadow-2xl overflow-hidden aspect-[9/16]">
                <img src="/BAHANIHAN ASSETS/BAHANIHAN (MISSION OVERVIEW).png" alt="Mission Overview" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Item 3 */}
            <div className="col-span-1">
              <div className="rounded-[2rem] border-[6px] border-neutral-900 shadow-2xl overflow-hidden aspect-[9/16]">
                <img src="/BAHANIHAN ASSETS/BAHANIHAN (MAP SECTION).png" alt="Map Section" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Item 4 */}
            <div className="col-span-1 md:translate-y-8">
              <div className="rounded-[2rem] border-[6px] border-neutral-900 shadow-2xl overflow-hidden aspect-[9/16]">
                <img src="/BAHANIHAN ASSETS/BAHANIHAN (SUPPLY LOGS).png" alt="Supply Logs" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Item 5 */}
            <div className="col-span-1">
              <div className="rounded-[2rem] border-[6px] border-neutral-900 shadow-2xl overflow-hidden aspect-[9/16]">
                <img src="/BAHANIHAN ASSETS/BAHANIHAN (PROFILE SECTION).png" alt="Profile Section" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Block B: Desktop Showcase */}
          <div className="border-l-[3px] border-white/20 pl-6 mb-12 max-w-3xl mt-40">
            <h3 className="font-montserrat font-bold text-3xl md:text-4xl text-white tracking-tight mb-4">
              LGU Admin Dashboard
            </h3>
            <p className="text-neutral-400 leading-relaxed md:text-lg">
              The macro-level command center. In direct contrast to the mobile app, the desktop environment is engineered for extreme data density. Dispatchers require a god's-eye view of evacuation centers and volunteer deployments across Batangas province. This interface facilitates complex logistics, from broadcasting immediate alerts to executing critical inter-LGU supply requests.
            </p>
          </div>

          <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 hide-scrollbar" style={{ paddingLeft: 'max(calc((100vw - 80rem) / 2), 2rem)', paddingRight: 'max(calc((100vw - 80rem) / 2), 2rem)' }}>
              <div className="w-[85vw] md:w-[70vw] flex-shrink-0 snap-center rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] bg-white/5 overflow-hidden aspect-video">
                <img src="/BAHANIHAN ASSETS/BAHANIHAN (HOMEPAGE).png" alt="Admin Homepage" className="w-full h-full object-cover" />
              </div>
              <div className="w-[85vw] md:w-[70vw] flex-shrink-0 snap-center rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] bg-white/5 overflow-hidden aspect-video">
                <img src="/BAHANIHAN ASSETS/BAHANIHAN (ADMINS MAP SECTION).png" alt="Admin Map Section" className="w-full h-full object-cover" />
              </div>
              <div className="w-[85vw] md:w-[70vw] flex-shrink-0 snap-center rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] bg-white/5 overflow-hidden aspect-video">
                <img src="/BAHANIHAN ASSETS/BAHANIHAN (SUPPLY INVENTORY PAGE).png" alt="Supply Inventory" className="w-full h-full object-cover" />
              </div>
              <div className="w-[85vw] md:w-[70vw] flex-shrink-0 snap-center rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] bg-white/5 overflow-hidden aspect-video">
                <img src="/BAHANIHAN ASSETS/BAHANIHAN (VOLUNTEERS PAGE).png" alt="Volunteers Page" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          </section>
        </section>

      </div>
    </div>
  );
};

export default BahanihanCaseStudy;
