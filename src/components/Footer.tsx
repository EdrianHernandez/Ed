import { motion, AnimatePresence } from "motion/react";
import { MoveRight, X } from "lucide-react";
import { useState } from "react";

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/edrian-hernandez-bab421404/" },
  { name: "Facebook", href: "https://www.facebook.com/ed.hrnndzzz/" },
  { name: "Instagram", href: "https://www.instagram.com/ed_hrnndz/" },
  { name: "GitHub", href: "https://github.com/EdrianHernandez" },
];

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer id="connect" className="relative pt-32 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#0a0a0c]">
      {/* Top border with gradient glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Subtle Grid Pattern Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 100% 100% at 50% 0%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 0%, black 20%, transparent 100%)'
        }}
      />

      {/* Top Radial Glow for Depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#ffffff]/5 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto flex flex-col relative z-10 mt-16 md:mt-24">
        
        {/* Split Layout for Connect Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-32">
          
          {/* Left Column (Heading) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <span className="font-mono text-xs text-[#525252] font-semibold uppercase tracking-[0.25em] mb-6 block">
              04 // Connect
            </span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-bold leading-[1.05] tracking-tighter">
              Let's build the <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#e2e2e2] to-[#737373] drop-shadow-xl">extraordinary.</span>
            </h2>
          </motion.div>

          {/* Right Column (Body & CTA) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col lg:pl-10 lg:border-l border-white/10"
          >
            <p className="text-lg md:text-xl text-[#a3a3a3] font-light mb-12 leading-relaxed text-pretty">
              Open for collaborations, freelance opportunities, or simply connecting over exceptional digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center space-x-3 bg-white text-black px-10 py-5 rounded-full font-medium hover:bg-white/90 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                <span>Connect</span>
                <MoveRight size={20} className="stroke-[2.5]" />
              </motion.button>
            </div>

            {/* Social Links List */}
            <div className="flex flex-col space-y-4">
              <p className="font-mono text-[0.65rem] text-[#525252] uppercase tracking-[0.2em] font-medium mb-2">Connect Directly //</p>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {socials.map((platform, i) => (
                  <motion.a 
                    key={platform.name}
                    href={platform.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                    className="group flex items-center space-x-2 font-mono text-xs text-[#a3a3a3] uppercase tracking-[0.15em] hover:text-white transition-colors duration-300"
                  >
                    <span className="relative overflow-hidden py-1">
                      {platform.name}
                      <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom Metadata */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between mt-auto text-[#525252] text-xs font-mono pt-8 border-t border-white/5 uppercase tracking-[0.1em]">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Edrian Hernandez.</p>
          <div className="flex space-x-6">
            <p>Designed in <span className="text-[#a3a3a3]">Figma</span></p>
            <p>Built with <span className="text-[#a3a3a3]">React</span></p>
          </div>
        </div>
      </div>
    </footer>

      {/* Connect Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-[#0a0a0c] border border-white/10 rounded-[2rem] shadow-2xl p-8 overflow-hidden z-10"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              <h3 className="font-display text-3xl font-bold text-white mb-2">Get in Touch.</h3>
              <p className="text-[#a3a3a3] font-light mb-8 text-pretty">
                Fill out the form below or reach out via email. I'll get back to you as soon as possible.
              </p>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                <div>
                  <input type="text" placeholder="Your Name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors" />
                </div>
                <div>
                  <input type="email" placeholder="Your Email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors" />
                </div>
                <div>
                  <textarea placeholder="Message" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors resize-none"></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full bg-white text-black font-medium py-3 rounded-xl hover:bg-white/90 transition-colors mt-2"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
