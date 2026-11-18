import React from 'react';
import { ArrowDown, ArrowUpRight, Terminal, FileText, MapPin, Phone, Mail, Sparkles } from 'lucide-react';
import { ThreeScene } from './ThreeScene';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  const scrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
      history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#F8FAFC] pt-20 sm:pt-24 pb-12 sm:pb-16 scroll-mt-20">
      {/* Subtle background technical grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-70 pointer-events-none" />

      {/* Gentle gradient wash */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] lg:w-[800px] h-[300px] sm:h-[500px] bg-gradient-to-b from-blue-50/50 via-slate-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <ScrollReveal direction="down" delay={50}>
              {/* Engineering Status Pill */}
              <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-subtle max-w-full">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-graphite-700 tracking-tight truncate">
                  Software Development Engineer I (SDE-1) @ <span className="font-semibold text-graphite-950">GetOdin</span>
                </span>
              </div>
            </ScrollReveal>

            {/* Main Headline & Role */}
            <div className="space-y-3 sm:space-y-4">
              <ScrollReveal direction="up" delay={100}>
                <div className="text-[10px] sm:text-xs font-mono text-graphite-500 uppercase tracking-technical">
                  ROHIT SINGH · FULL STACK, AI & AUTOMATION
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={180}>
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-[#171A21] font-heading leading-[1.1] sm:leading-[1.05] break-words">
                  I build intelligent systems, scalable backends, and thoughtful digital experiences.
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={260}>
                <p className="text-sm sm:text-base lg:text-lg text-graphite-600 font-sans max-w-xl leading-relaxed pt-1 sm:pt-2">
                  Software Development Engineer with 3+ years of experience building backend services, full-stack applications, AI-enabled product features, and workflow automations across Python, FastAPI, React, TypeScript, and LLM integrations.
                </p>
              </ScrollReveal>
            </div>

            {/* Small Technical Metadata Chips */}
            <ScrollReveal direction="up" delay={340}>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md bg-white border border-slate-200 text-[11px] sm:text-xs font-mono text-graphite-600 shadow-subtle">
                  <MapPin className="w-3.5 h-3.5 text-accent-blue" />
                  <span>Nagpur, Maharashtra</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md bg-white border border-slate-200 text-[11px] sm:text-xs font-mono text-graphite-600 shadow-subtle">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>3+ Years Experience</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md bg-white border border-slate-200 text-[11px] sm:text-xs font-mono text-graphite-600 shadow-subtle">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                  <span>MCA 9.2 CGPA</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md bg-white border border-slate-200 text-[11px] sm:text-xs font-mono text-graphite-600 shadow-subtle">
                  <span>FastAPI · React · LLMs · n8n</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Call to Actions */}
            <ScrollReveal direction="up" delay={420}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
                <button
                  onClick={() => scrollTo('projects')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-graphite-950 hover:bg-graphite-900 active:scale-[0.99] text-white text-sm font-semibold transition-all shadow-subtle hover:shadow-card group cursor-pointer"
                >
                  <span>View Selected Projects</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => scrollTo('ai-lab')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 active:scale-[0.99] text-graphite-950 border border-slate-200 hover:border-slate-300 text-sm font-semibold transition-all shadow-subtle cursor-pointer"
                >
                  <Terminal className="w-4 h-4 text-accent-blue" />
                  <span>Explore AI Lab</span>
                </button>

                <a
                  href="./assets/Rohit_Singh_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl bg-transparent hover:bg-slate-100 text-graphite-700 hover:text-graphite-950 text-sm font-medium transition-all"
                >
                  <FileText className="w-4 h-4 text-accent-blue" />
                  <span>CV</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 3D Architectural Sculpture Canvas (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-2 lg:mt-0">
            <ScrollReveal direction="none" delay={200} className="w-full flex justify-center">
              <div className="w-full max-w-[420px] sm:max-w-[480px] h-[280px] sm:h-[400px] lg:h-[520px] relative overflow-hidden">
                <ThreeScene />

                {/* Minimal caption badge below sculpture */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-subtle text-[10px] sm:text-[11px] font-mono text-graphite-500 whitespace-nowrap pointer-events-none flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                  <span>Kinetic Systems Core · Drag to Orbit</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Scroll Down Prompt */}
        <div className="pt-10 sm:pt-16 pb-2 flex justify-center">
          <button
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-1 text-[11px] sm:text-xs font-mono text-graphite-400 hover:text-graphite-800 transition-colors p-2 cursor-pointer"
            aria-label="Scroll down to About section"
          >
            <span>DISCOVER</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
