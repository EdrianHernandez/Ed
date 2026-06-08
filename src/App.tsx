/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Works } from "./components/Works";
import { Experience } from "./components/Experience";
import { Process } from "./components/Process";
import { Philosophy } from "./components/Philosophy";
import { ToolsMarquee } from "./components/ToolsMarquee";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Projects } from "./pages/Projects";
import { FloodguardCaseStudy } from "./pages/FloodguardCaseStudy";
import BahanihanCaseStudy from "./pages/BahanihanCaseStudy"; 
import ShoreThingCaseStudy from "./pages/ShoreThingCaseStudy";
import { PhilHealthCaseStudy } from "./pages/PhilHealthCaseStudy";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <ToolsMarquee />
      <About />
      <Works />
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
          <Route path="/projects/bahanihan" element={<BahanihanCaseStudy />} />
          <Route path="/projects/shorething" element={<ShoreThingCaseStudy />} />
          <Route path="/projects/philhealth" element={<PhilHealthCaseStudy />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}