import { Link } from 'react-router-dom';

const BahanihanCaseStudy = () => {
  return (
    <div className="relative min-h-screen bg-neutral-950 overflow-hidden text-white font-sans selection:bg-white/30">
      {/* Background Visuals: Absolute positioning for the dual-image background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        
        {/* Desktop UI Placeholder: slightly angled, pushed back, blurred */}
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[500px] rotate-[-2deg] scale-95 opacity-20 blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <img 
            src="/placeholders/bahanihan-desktop.jpg" 
            alt="LGU Admin Desktop UI"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Mobile UI Placeholder: overlapping slightly, pushed forward */}
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 translate-x-1/4 w-[300px] h-[600px] rotate-[2deg] scale-105 opacity-30 blur-lg bg-white/5 border border-white/10 rounded-[40px] overflow-hidden">
          <img 
            src="/placeholders/bahanihan-mobile.jpg" 
            alt="Volunteer Mobile App UI"
            className="w-full h-full object-cover"
          />
        </div>
        
      </div>

      {/* Gradient Overlays: Blends background elements into the black canvas */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-neutral-950 via-transparent to-neutral-950 pointer-events-none opacity-60" />

      {/* Content Wrapper */}
      <div className="relative z-20 flex flex-col min-h-screen px-6 py-12 md:px-12 lg:px-24">
        
        {/* Navigation: Link back to Works */}
        <nav className="mb-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white/80 hover:text-white transition-all backdrop-blur-md"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Works
          </Link>
        </nav>

        {/* Hero Content Area */}
        <div className="mt-32 max-w-5xl self-start pb-20">
          
          {/* Title Lockup: Montserrat font setup with 2 weights */}
          <h1 
            className="text-6xl md:text-8xl lg:text-[10rem] tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] mb-12 text-white"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span className="font-light">BAHA</span><span className="font-black">NIHAN</span>
          </h1>

          {/* Metadata Grid: 3 columns, muted grey labels and crisp white values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-white/10 pt-8">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">Role</span>
              <span className="text-sm md:text-base text-white/90 font-medium tracking-wide">UI/UX DESIGNER</span>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">Platform</span>
              <span className="text-sm md:text-base text-white/90 font-medium tracking-wide">DESKTOP & MOBILE OS</span>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">Focus</span>
              <span className="text-sm md:text-base text-white/90 font-medium tracking-wide">DISASTER RESPONSE COORDINATION</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BahanihanCaseStudy;
