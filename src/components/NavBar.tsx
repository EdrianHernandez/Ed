import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Work", path: "/#work", num: "01" },
  { name: "Experience", path: "/#experience", num: "02" },
  { name: "Process", path: "/#process", num: "03" },
  { name: "Connect", path: "/#connect", num: "04" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#0a0a0c]/85 backdrop-blur-md border-b border-white/5 py-4" 
          : "bg-transparent py-8 md:py-12"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24">
        {/* Left Side: Scaled Technical Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to="/" className="text-3xl lg:text-3xl font-montserrat font-extrabold tracking-[-0.04em] select-none hover:scale-105 transition-transform duration-300">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#e2e2e2] to-[#737373]">
              ED
            </span>
          </Link>
        </motion.div>

        {/* Right Side: Navigation Links & Mobile Toggle */}
        <div className="flex items-center">
          <nav className="hidden md:flex space-x-10 lg:space-x-14">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <a
                  href={link.path}
                  className="group flex items-center space-x-2 font-mono text-[0.7rem] lg:text-xs text-[#a3a3a3] uppercase tracking-[0.25em] transition-all duration-500 hover:text-white"
                >
                  <span className="text-[#525252] font-semibold group-hover:text-white/60 transition-colors duration-500">
                    {link.num} <span className="opacity-50">//</span>
                  </span>
                  <span className="relative font-medium overflow-hidden">
                    {link.name}
                    {/* Subtle underline hover effect */}
                    <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                  </span>
                </a>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#a3a3a3] hover:text-white transition-colors duration-300 z-50 p-2 -mr-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0a0a0c] flex flex-col justify-center items-center px-6"
          >
            {/* Background elements for mobile menu */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
            </div>

            <nav className="flex flex-col space-y-10 w-full max-w-sm">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col items-center relative"
                >
                  <span className="font-mono text-xs text-[#525252] mb-2 font-semibold uppercase tracking-[0.25em]">
                    {link.num} //
                  </span>
                  <span className="text-3xl font-display font-medium text-[#e2e2e2] group-hover:text-white transition-colors duration-300 overflow-hidden relative">
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-full h-px bg-white -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                  </span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
