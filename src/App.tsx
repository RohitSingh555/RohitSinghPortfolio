import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Capabilities } from './components/Capabilities';
import { Projects } from './components/Projects';
import { ArchitectureExplorer } from './components/ArchitectureExplorer';
import { DeepDives } from './components/DeepDives';
import { AiLab } from './components/AiLab';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#171A21] flex flex-col font-sans selection:bg-accent-blue selection:text-white">
      {/* Top Fixed Minimalist Navigation */}
      <Navbar />

      {/* Main Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About & Philosophy */}
        <About />

        {/* 3. Engineering Capabilities */}
        <Capabilities />

        {/* 4. Selected Projects */}
        <Projects />

        {/* 5. Architecture & System Topologies */}
        <ArchitectureExplorer />

        {/* 6. Technical Deep Dives */}
        <DeepDives />

        {/* 7. Interactive AI Systems Lab */}
        <AiLab />

        {/* 8. Professional Experience & Academic Credentials */}
        <Experience />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
};

export default App;
