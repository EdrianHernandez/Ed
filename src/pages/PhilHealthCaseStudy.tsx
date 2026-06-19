import { motion } from "motion/react";
import { useEffect } from "react";
import { NavBar } from "../components/NavBar";
import { NextProjectButton } from "../components/NextProjectButton";

export function PhilHealthCaseStudy() {
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
      <NavBar variant="case-study" prevLink={{ path: "/projects/bahanihan", name: "Bahanihan" }} />

      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/PHILHEALTH ASSETS/PHILHEALTH HERO.jpg"
            alt=""
            className="w-full h-full object-cover blur-xl opacity-20 scale-105"
            style={{ maskImage: "radial-gradient(ellipse at center, black, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 75%)" }}
          />
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center w-full z-10 space-y-6">
          {/* PhilHealth Logo */}
          <motion.img
            src="/PHILHEALTH ASSETS/PHILHEALTH LOGO.png"
            alt="PhilHealth logo"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-70 w-auto mb-4 object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.15)]"
            onError={(e) => (e.currentTarget as HTMLImageElement).style.opacity = '0'}
          />

          {/* Title */}
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-montserrat font-black text-5xl md:text-7xl lg:text-[9rem] text-white tracking-tighter leading-none drop-shadow-2xl text-center"
          >
            PHILHEALTH
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-neutral-400 text-lg md:text-xl tracking-widest uppercase font-light text-center max-w-2xl mx-auto"
          >
            Your Partner in Health.
          </motion.p>
        </div>
      </section>

      {/* 2. Metadata Grid */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { label: "ROLE", value: "Lead UI/UX Designer" },
              { label: "TIMELINE", value: "2025" },
              { label: "CONTEXT", value: "Technofusion Challenge" },
              { label: "RECOGNITION", value: "2nd Place Winner" },
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

      {/* 3. Project Overview */}
      <section className="relative py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] md:w-[70%] h-[100%] md:h-[80%] bg-white/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
            {/* Left Column — The Hook */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7 }}
              className="md:col-span-5 border-l border-white/10 pl-5 md:pl-8"
            >
              <h2 className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-[1.1]">
                Rebuilding civic trust through design.
              </h2>
            </motion.div>

            {/* Right Column — The Objective */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="md:col-span-7 flex items-center"
            >
              <p className="text-neutral-400 text-base md:text-lg lg:text-xl font-light leading-relaxed text-pretty">
                Government portals are notoriously complex and visually disjointed.
                The objective for the Technofusion 2025 challenge was to completely
                overhaul the PhilHealth digital experience. The redesign strips away
                cognitive load, prioritizes accessibility, and introduces a clean,
                modern architecture that makes managing healthcare benefits
                frictionless for every Filipino.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Block 01: The Legacy vs. The Future */}
      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#030305] overflow-hidden py-14 md:py-24 lg:py-32">
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

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Overall Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-neutral-600 text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">
            Before & After
          </span>
          <h2 className="font-montserrat font-black text-3xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-[1.1]">
            Redesign Breakdown
          </h2>
          <div className="mt-6 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </motion.div>

        {/* Block 01 Header */}
        <div className="relative mb-16 md:mb-24">
          <span className="absolute -top-8 md:-top-12 left-0 text-[8rem] md:text-[12rem] font-montserrat font-black text-white/[0.02] leading-none select-none pointer-events-none">
            01
          </span>
          <span className="text-neutral-600 text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">Block 01</span>
          <h2 className="font-montserrat font-black text-3xl md:text-5xl text-white tracking-tighter">
            The Legacy vs. The Future
          </h2>
          <div className="mt-6 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_1px_7fr] gap-12 lg:gap-16 items-center">
          {/* Left Column — The Problem / Legacy Site */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <span className="text-neutral-600 text-[10px] tracking-[0.3em] uppercase font-bold">The Problem</span>
            <h3 className="font-montserrat font-bold text-3xl text-neutral-400 tracking-tight">Cognitive Overload.</h3>
            <p className="text-neutral-500 leading-relaxed text-sm md:text-base font-light">
              The legacy portal was dense, unapproachable, and structurally disjointed.
              Finding critical health contribution data required navigating through walls
              of text and outdated navigation patterns, creating massive friction for the
              average citizen.
            </p>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-[10px] font-bold tracking-widest uppercase text-red-400/80 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              Cluttered
            </span>
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/5 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 mt-2 bg-neutral-900">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-neutral-900 border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <div className="flex-1 mx-4 h-5 rounded-md bg-neutral-800/50 flex items-center px-3">
                  <span className="text-[10px] text-neutral-600 font-mono">philhealth.gov.ph</span>
                </div>
              </div>
              {/* Image viewport */}
              <div className="relative h-[400px] md:h-[600px] overflow-hidden">
                <div className="absolute top-0 left-0 w-full" style={{ animation: 'scrollUp 35s linear infinite' }}>
                  <img src="/PHILHEALTH ASSETS/PHILHEALTH OLD LANDING PAGE.png" alt="Legacy PhilHealth Portal" className="w-full block" />
                  <img src="/PHILHEALTH ASSETS/PHILHEALTH OLD LANDING PAGE.png" alt="" className="w-full block" aria-hidden="true" />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-900 to-transparent pointer-events-none z-10" />
              </div>
            </div>
          </motion.div>

          {/* Vertical Divider with VS Badge */}
          <div className="hidden lg:flex relative flex-col items-center justify-center">
            <div className="w-px h-full bg-white/10" />
            <span className="absolute bg-neutral-950 border border-white/10 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-neutral-500">
              VS
            </span>
          </div>

          {/* Right Column — The Solution / Redesign */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6 relative"
          >
            {/* Spotlight Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
            <span className="text-emerald-400/80 text-[10px] tracking-[0.3em] uppercase font-bold">The Solution</span>
            <h3 className="font-montserrat font-black text-4xl md:text-5xl text-white tracking-tighter drop-shadow-lg">A Frictionless Access.</h3>
            <p className="text-neutral-300 leading-relaxed text-base md:text-lg font-light">
              Redesigned from the ground up to prioritize accessibility and intuitive way finding.
              Complex legacy data is now distilled into clean, approachable UI modules, ensuring users can
              manage their benefits without feeling overwhelmed.
            </p>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-[10px] font-bold tracking-widest uppercase text-emerald-400/80 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              CITIZEN-FIRST UX
            </span>
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(16,185,129,0.05)] mt-2 bg-neutral-900">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-neutral-900 border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <div className="flex-1 mx-4 h-5 rounded-md bg-neutral-800/50 flex items-center px-3">
                  <span className="text-[10px] text-neutral-600 font-mono">philhealth.gov.ph</span>
                </div>
              </div>
              {/* Image viewport */}
              <div className="relative h-[400px] md:h-[600px] overflow-hidden">
                <div className="absolute top-0 left-0 w-full" style={{ animation: 'scrollUp 35s linear infinite' }}>
                  <img src="/PHILHEALTH ASSETS/PHILHEALTH LANDING PAGE.png" alt="Redesigned PhilHealth Landing Page" className="w-full block" />
                  <img src="/PHILHEALTH ASSETS/PHILHEALTH LANDING PAGE.png" alt="" className="w-full block" aria-hidden="true" />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-900 to-transparent pointer-events-none z-10" />
              </div>
            </div>
          </motion.div>
        </div>
        </div>
      </section>

      {/* Block 02: Membership Dashboard */}
      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#030305] overflow-hidden py-14 md:py-24 lg:py-32">
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

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="relative mb-16 md:mb-24">
          <span className="absolute -top-8 md:-top-12 left-0 text-[8rem] md:text-[12rem] font-montserrat font-black text-white/[0.02] leading-none select-none pointer-events-none">
            02
          </span>
          <span className="text-neutral-600 text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">Block 02</span>
          <h2 className="font-montserrat font-black text-3xl md:text-5xl text-white tracking-tighter">
            Membership Dashboard
          </h2>
          <div className="mt-6 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_1px_7fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <span className="text-neutral-600 text-[10px] tracking-[0.3em] uppercase font-bold">The Problem</span>
            <h3 className="font-montserrat font-bold text-3xl text-neutral-400 tracking-tight">Buried Data.</h3>
            <p className="text-neutral-500 leading-relaxed text-sm md:text-base font-light">
              The legacy membership portal buried member data behind dense text walls
              and inconsistent navigation, forcing citizens to dig through layers of
              bureaucracy just to check their contribution status.
            </p>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-[10px] font-bold tracking-widest uppercase text-red-400/80 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              Cluttered
            </span>
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/5 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 mt-2 bg-neutral-900">
              <div className="flex items-center gap-2 px-4 py-3 bg-neutral-900 border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <div className="flex-1 mx-4 h-5 rounded-md bg-neutral-800/50 flex items-center px-3">
                  <span className="text-[10px] text-neutral-600 font-mono">philhealth.gov.ph/members</span>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[600px] overflow-hidden">
                <div className="absolute top-0 left-0 w-full" style={{ animation: 'scrollUp 35s linear infinite' }}>
                  <img src="/PHILHEALTH ASSETS/PHILHEALTH OLD MEMBERS PAGE.png" alt="Legacy Members Page" className="w-full block" />
                  <img src="/PHILHEALTH ASSETS/PHILHEALTH OLD MEMBERS PAGE.png" alt="" className="w-full block" aria-hidden="true" />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-900 to-transparent pointer-events-none z-10" />
              </div>
            </div>
          </motion.div>

          <div className="hidden lg:flex relative flex-col items-center justify-center">
            <div className="w-px h-full bg-white/10" />
            <span className="absolute bg-neutral-950 border border-white/10 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-neutral-500">
              VS
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6 relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
            <span className="text-emerald-400/80 text-[10px] tracking-[0.3em] uppercase font-bold">The Solution</span>
            <h3 className="font-montserrat font-black text-4xl md:text-5xl text-white tracking-tighter drop-shadow-lg">Empowered Management.</h3>
            <p className="text-neutral-300 leading-relaxed text-base md:text-lg font-light">
              A streamlined member dashboard that brings contribution history, eligibility status, and benefit details to the forefront. By utilizing a clean card system, it eliminates the guesswork from healthcare management.
            </p>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-[10px] font-bold tracking-widest uppercase text-emerald-400/80 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              DATA TRANSPARENCY
            </span>
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(16,185,129,0.05)] mt-2 bg-neutral-900">
              <div className="flex items-center gap-2 px-4 py-3 bg-neutral-900 border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <div className="flex-1 mx-4 h-5 rounded-md bg-neutral-800/50 flex items-center px-3">
                  <span className="text-[10px] text-neutral-600 font-mono">philhealth.gov.ph/members</span>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[600px] overflow-hidden">
                <div className="absolute top-0 left-0 w-full" style={{ animation: 'scrollUp 35s linear infinite' }}>
                  <img src="/PHILHEALTH ASSETS/PHILHEALTH MEMBERS PAGE.png" alt="Redesigned Members Page" className="w-full block" />
                  <img src="/PHILHEALTH ASSETS/PHILHEALTH MEMBERS PAGE.png" alt="" className="w-full block" aria-hidden="true" />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-900 to-transparent pointer-events-none z-10" />
              </div>
            </div>
          </motion.div>
        </div>
        </div>
      </section>

      {/* Block 03: Partner Network */}
      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#030305] overflow-hidden py-14 md:py-24 lg:py-32">
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

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="relative mb-16 md:mb-24">
          <span className="absolute -top-8 md:-top-12 left-0 text-[8rem] md:text-[12rem] font-montserrat font-black text-white/[0.02] leading-none select-none pointer-events-none">
            03
          </span>
          <span className="text-neutral-600 text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">Block 03</span>
          <h2 className="font-montserrat font-black text-3xl md:text-5xl text-white tracking-tighter">
            Partner Network
          </h2>
          <div className="mt-6 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_1px_7fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <span className="text-neutral-600 text-[10px] tracking-[0.3em] uppercase font-bold">The Problem</span>
            <h3 className="font-montserrat font-bold text-3xl text-neutral-400 tracking-tight">Disjointed.</h3>
            <p className="text-neutral-500 leading-relaxed text-sm md:text-base font-light">
              The partner directory pages were disjointed and lacked searchability,
              making it difficult for citizens to find accredited healthcare
              institutions and employers across the Philippines.
            </p>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-[10px] font-bold tracking-widest uppercase text-red-400/80 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              Disjointed
            </span>
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/5 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 mt-2 bg-neutral-900">
              <div className="flex items-center gap-2 px-4 py-3 bg-neutral-900 border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <div className="flex-1 mx-4 h-5 rounded-md bg-neutral-800/50 flex items-center px-3">
                  <span className="text-[10px] text-neutral-600 font-mono">philhealth.gov.ph/partners</span>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[600px] overflow-hidden">
                <div className="absolute top-0 left-0 w-full" style={{ animation: 'scrollUp 35s linear infinite' }}>
                  <img src="/PHILHEALTH ASSETS/PHILHEALTH OLD PARTNERS PAGE.png" alt="Legacy Partners Page" className="w-full block" />
                  <img src="/PHILHEALTH ASSETS/PHILHEALTH OLD PARTNERS PAGE.png" alt="" className="w-full block" aria-hidden="true" />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-900 to-transparent pointer-events-none z-10" />
              </div>
            </div>
          </motion.div>

          <div className="hidden lg:flex relative flex-col items-center justify-center">
            <div className="w-px h-full bg-white/10" />
            <span className="absolute bg-neutral-950 border border-white/10 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-neutral-500">
              VS
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6 relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
            <span className="text-emerald-400/80 text-[10px] tracking-[0.3em] uppercase font-bold">The Solution</span>
            <h3 className="font-montserrat font-black text-4xl md:text-5xl text-white tracking-tighter drop-shadow-lg">Categorical Precision.</h3>
            <p className="text-neutral-300 leading-relaxed text-base md:text-lg font-light">
              We restructured the entire service catalog into a highly scannable, icon-driven interface. By grouping related benefits into distinct visual containers, users can now locate and understand their healthcare options instantly.
            </p>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-[10px] font-bold tracking-widest uppercase text-emerald-400/80 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              INTUITIVE WAYFINDING
            </span>
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(16,185,129,0.05)] mt-2 bg-neutral-900">
              <div className="flex items-center gap-2 px-4 py-3 bg-neutral-900 border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <div className="flex-1 mx-4 h-5 rounded-md bg-neutral-800/50 flex items-center px-3">
                  <span className="text-[10px] text-neutral-600 font-mono">philhealth.gov.ph/partners</span>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[600px] overflow-hidden">
                <div className="absolute top-0 left-0 w-full" style={{ animation: 'scrollUp 35s linear infinite' }}>
                  <img src="/PHILHEALTH ASSETS/PHILHEALTH PARTNERS PAGE.png" alt="Redesigned Partners Page" className="w-full block" />
                  <img src="/PHILHEALTH ASSETS/PHILHEALTH PARTNERS PAGE.png" alt="" className="w-full block" aria-hidden="true" />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-900 to-transparent pointer-events-none z-10" />
              </div>
            </div>
          </motion.div>
        </div>
        </div>
      </section>

      {/* Block 04: Service Catalog */}
      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#030305] overflow-hidden py-14 md:py-24 lg:py-32">
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

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="relative mb-16 md:mb-24">
          <span className="absolute -top-8 md:-top-12 left-0 text-[8rem] md:text-[12rem] font-montserrat font-black text-white/[0.02] leading-none select-none pointer-events-none">
            04
          </span>
          <span className="text-neutral-600 text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">Block 04</span>
          <h2 className="font-montserrat font-black text-3xl md:text-5xl text-white tracking-tighter">
            Service Catalog
          </h2>
          <div className="mt-6 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_1px_7fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <span className="text-neutral-600 text-[10px] tracking-[0.3em] uppercase font-bold">The Problem</span>
            <h3 className="font-montserrat font-bold text-3xl text-neutral-400 tracking-tight">Structural Chaos.</h3>
            <p className="text-neutral-500 leading-relaxed text-sm md:text-base font-light">
              Services were presented as unstructured text blocks with no visual
              hierarchy or logical grouping, overwhelming users with a wall of
              information when trying to access basic PhilHealth offerings.
            </p>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-[10px] font-bold tracking-widest uppercase text-red-400/80 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              Unstructured
            </span>
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/5 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 mt-2 bg-neutral-900">
              <div className="flex items-center gap-2 px-4 py-3 bg-neutral-900 border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <div className="flex-1 mx-4 h-5 rounded-md bg-neutral-800/50 flex items-center px-3">
                  <span className="text-[10px] text-neutral-600 font-mono">philhealth.gov.ph/services</span>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[600px] overflow-hidden">
                <div className="absolute top-0 left-0 w-full" style={{ animation: 'scrollUp 35s linear infinite' }}>
                  <img src="/PHILHEALTH ASSETS/PHILHEALTH OLD SERVICES PAGE.png" alt="Legacy Services Page" className="w-full block" />
                  <img src="/PHILHEALTH ASSETS/PHILHEALTH OLD SERVICES PAGE.png" alt="" className="w-full block" aria-hidden="true" />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-900 to-transparent pointer-events-none z-10" />
              </div>
            </div>
          </motion.div>

          <div className="hidden lg:flex relative flex-col items-center justify-center">
            <div className="w-px h-full bg-white/10" />
            <span className="absolute bg-neutral-950 border border-white/10 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-neutral-500">
              VS
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6 relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
            <span className="text-emerald-400/80 text-[10px] tracking-[0.3em] uppercase font-bold">The Solution</span>
            <h3 className="font-montserrat font-black text-4xl md:text-5xl text-white tracking-tighter drop-shadow-lg">Categorized at a Tap.</h3>
            <p className="text-neutral-300 leading-relaxed text-base md:text-lg font-light">
              A bento-grid service catalog that categorizes offerings by type, with
              clear CTAs and progressive disclosure — turning a wall of text into
              an intuitive, scannable interface.
            </p>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-[10px] font-bold tracking-widest uppercase text-emerald-400/80 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Bento Grid
            </span>
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(16,185,129,0.05)] mt-2 bg-neutral-900">
              <div className="flex items-center gap-2 px-4 py-3 bg-neutral-900 border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <div className="flex-1 mx-4 h-5 rounded-md bg-neutral-800/50 flex items-center px-3">
                  <span className="text-[10px] text-neutral-600 font-mono">philhealth.gov.ph/services</span>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[600px] overflow-hidden">
                <div className="absolute top-0 left-0 w-full" style={{ animation: 'scrollUp 35s linear infinite' }}>
                  <img src="/PHILHEALTH ASSETS/PHILHEALTH SERVICES PAGE.png" alt="Redesigned Services Page" className="w-full block" />
                  <img src="/PHILHEALTH ASSETS/PHILHEALTH SERVICES PAGE.png" alt="" className="w-full block" aria-hidden="true" />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-900 to-transparent pointer-events-none z-10" />
              </div>
            </div>
          </motion.div>
        </div>
        </div>
      </section>

      {/* 5. Award & Recognition */}
      <section className="relative py-16 sm:py-24 md:py-32 px-6 md:px-12 lg:px-24 w-full mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center relative">
            
            {/* The Huge "2ND" Watermark Background */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 font-black text-[8rem] md:text-[12rem] lg:text-[20rem] leading-none pointer-events-none select-none z-0 translate-x-[-15%] lg:translate-x-[-10%] opacity-10 bg-clip-text text-transparent bg-gradient-to-b from-emerald-400/40 to-transparent">
              2ND
            </div>

            {/* Left Column: Typography */}
            <div className="relative z-10 flex flex-col pt-12 md:pt-0">
              <div className="text-[#888888] font-mono text-xs md:text-sm tracking-widest uppercase mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#555]"></span>
                [ AWARD: 2ND PLACE — TECHNOFUSION CHALLENGE ]
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-white">VALIDATED BY RESULTS</h2>
              <p className="text-[#A8A8A8] text-lg md:text-xl font-light leading-relaxed max-w-xl">
                The PhilHealth redesign was executed in a rigorous 3-hour design sprint and awarded 2nd Place at the Technofusion Challenge. This recognition validates the methodology of stripping cognitive overload from government portals and replacing it with accessible, conversion-driven UI architecture.
              </p>
            </div>
            
            {/* Right Column: Floating Certificate */}
            <div className="relative z-10 flex justify-center lg:justify-end w-full">
              {/* Soft environmental glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none z-0"></div>
              
              <img 
                src="/PHILHEALTH%20ASSETS/TECHNOFUSION_CERT.jpg" 
                alt="Technofusion Challenge 2nd Place Certificate" 
                className="w-full max-w-lg lg:max-w-xl h-auto object-cover rounded-xl border border-white/10 shadow-2xl shadow-white/5 relative z-10 grayscale-0 opacity-100 lg:grayscale lg:opacity-70 hover:grayscale-0 hover:opacity-100 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-700 ease-out cursor-pointer"
                onError={(e) => e.currentTarget.style.opacity = '0'}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Final CTA / Prototype Link */}
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
            href="https://www.figma.com/proto/iURNTJGbCmGnqxzO9yxNVA/Practice?node-id=1-2&t=vteGH0fdjSyO868w-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&fbclid=IwY2xjawSUg6ZleHRuA2FlbQIxMABicmlkETJtZ1NrNnpiYmdVNzJVakxLc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHtHaCkyKFxDghTmSnDIDSCrQeNplsrqS0zCX1X6ByHyqZ06vSJD1qJdi2IOJ_aem_EXWAaMzv_Xj_MZ8FmCv08Q" 
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
          <NextProjectButton path="/projects/bahanihan" direction="previous" projectName="Bahanihan" />
        </div>
      </section>
    </motion.div>
  );
}
