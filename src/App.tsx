/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { BentoGrid } from "./components/BentoGrid";
import { Experience } from "./components/Experience";
import { Process } from "./components/Process";
import { Philosophy } from "./components/Philosophy";
import { Footer } from "./components/Footer";
import { Projects } from "./pages/Projects";
import { FloodguardCaseStudy } from "./pages/FloodguardCaseStudy";
// 1. Import the new case study
import BahanihanCaseStudy from "./pages/BahanihanCaseStudy"; 

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <BentoGrid />
      <Experience />
      <Process />
      <Philosophy />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <main className="bg-background text-foreground min-h-screen font-sans pt-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/floodguard" element={<FloodguardCaseStudy />} />
          {/* 2. Add the route for Bahanihan */}
          <Route path="/projects/bahanihan" element={<BahanihanCaseStudy />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}