import { motion, AnimatePresence } from "motion/react";
import { MoveRight, X, Linkedin, Facebook, Instagram, Github, CheckCircle2, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/edrian-hernandez-bab421404/", icon: Linkedin },
  { name: "Facebook", href: "https://www.facebook.com/ed.hrnndzzz/", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/ed_hrnndz/", icon: Instagram },
  { name: "GitHub", href: "https://github.com/EdrianHernandez", icon: Github },
];

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener("open-connect-modal", handleOpenModal);
    return () => window.removeEventListener("open-connect-modal", handleOpenModal);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const formPayload = Object.fromEntries(formData);
      
      // Add Web3Forms access key
      // Get your own access key from https://web3forms.com/ and replace this placeholder
      // For now, using a test key or your email format won't work without registering.
      formPayload['access_key'] = "8a2eb872-9bbb-436f-b251-1effceab91f3"; // Replace with your actual Web3Forms access key
      formPayload['subject'] = "New Message from Portfolio Website";

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formPayload)
      });
      setIsSuccess(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setTimeout(() => setIsSuccess(false), 300); // reset after modal closes
      }, 2000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
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
            className="lg:col-span-5 flex flex-col justify-center lg:pl-12 lg:border-l border-white/10 lg:h-full lg:-mt-4"
          >
            <p className="text-lg md:text-xl text-[#a3a3a3] font-light mb-8 leading-relaxed text-pretty max-w-md">
              Open for collaborations, freelance opportunities, or simply connecting over exceptional digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
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
          </motion.div>
        </div>

        {/* Footer Bottom Metadata */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between mt-auto text-[#525252] text-xs font-mono pt-8 border-t border-white/5 uppercase tracking-[0.1em]">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Edrian Hernandez.</p>
          <div className="flex items-center space-x-6">
            {socials.map((platform, i) => {
              const Icon = platform.icon;
              return (
                <motion.a 
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center text-[#a3a3a3] hover:text-white transition-colors duration-300"
                  title={platform.name}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </motion.a>
              );
            })}
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

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.1, damping: 15 }}
                    className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4"
                  >
                    <CheckCircle2 size={32} className="text-white" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-[#a3a3a3]">Thanks for reaching out. I'll be in touch soon.</p>
                </motion.div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <input name="name" type="text" placeholder="Your Name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors" />
                  </div>
                  <div>
                    <input name="email" type="email" placeholder="Your Email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors" />
                  </div>
                  <div>
                    <textarea name="message" placeholder="Message" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors resize-none"></textarea>
                  </div>
                  {/* Honeypot to prevent spam */}
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  {/* Disable captcha if you want or leave default behavior */}
                  <input type="hidden" name="_captcha" value="false" />
                  
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black font-medium py-3 rounded-xl hover:bg-white/90 transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </motion.button>
                </form>
              )}

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-[#525252] uppercase tracking-[0.15em] font-mono text-center mb-6">Or connect directly</p>
                <div className="flex justify-center space-x-8">
                  {socials.map((platform) => {
                    const Icon = platform.icon;
                    return (
                      <motion.a
                        key={platform.name}
                        href={platform.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-[#a3a3a3] hover:text-white transition-all duration-300"
                        title={platform.name}
                      >
                        <Icon size={22} strokeWidth={1.5} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
