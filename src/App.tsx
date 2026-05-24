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
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}
