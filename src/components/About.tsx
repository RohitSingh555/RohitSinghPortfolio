import React from 'react';
import { UserCheck, Shield, Zap, Terminal, Compass, Globe, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { languagesData } from '../data/experienceData';
import { ScrollReveal } from './ScrollReveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white text-[#171A21] relative overflow-hidden border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-slate-200 gap-4">
            <div>
              <div className="flex items-center gap-2 text-accent-blue text-xs font-mono tracking-technical uppercase mb-2">
                <UserCheck className="w-4 h-4" />
                <span>Profile & Engineering Mindset</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#171A21] font-heading">
                About Rohit Singh
              </h2>
            </div>
            <p className="text-graphite-500 text-xs sm:text-sm max-w-md font-sans leading-relaxed">
              Software Development Engineer with 3+ years of experience delivering core product functionality, debugging production issues, and improving integration reliability.
            </p>
          </div>
        </ScrollReveal>

        {/* Narrative & Portrait Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal direction="up" delay={100} className="w-full flex justify-center">
              <div className="relative group max-w-[280px] sm:max-w-sm w-full">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-slate-200 to-slate-100 -z-10 group-hover:scale-[1.02] transition-transform duration-300" />

                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
                  <img
                    src="./assets/img/rohit.jpg"
                    alt="Rohit Singh - Software Development Engineer"
                    className="w-full h-auto object-cover object-top aspect-[4/5] grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="p-3.5 sm:p-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs font-mono text-graphite-600">
                    <span className="font-semibold text-graphite-900">Rohit Singh</span>
                    <span className="text-accent-blue font-mono">Nagpur, Maharashtra</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Narrative Story */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <ScrollReveal direction="up" delay={150}>
              <div className="space-y-3 sm:space-y-4 text-graphite-700 font-sans leading-relaxed text-sm sm:text-base">
                <p>
                  I am a <span className="font-semibold text-graphite-950">Software Development Engineer with 3+ years of experience</span> building backend services, full-stack applications, AI-enabled product features, and workflow automations. My core technical work spans <span className="font-semibold text-graphite-950">Python, FastAPI, React, TypeScript, REST APIs, databases, and LLM integrations</span>.
                </p>
                <p>
                  At <span className="font-semibold text-graphite-950">GetOdin (SDE-1)</span>, I contribute across AI-powered chat, document workflows, Smart Table, and the Python sandbox tooling, while resolving critical production issues—including improving Confluence ingestion reliability by validating parent-child relationships and debugging multi-page PDF loading.
                </p>
                <p>
                  Previously at <span className="font-semibold text-graphite-950">Agilemorph Solutions</span> and <span className="font-semibold text-graphite-950">Webtech Developers</span>, I engineered AI interviewers (Ollama & OpenAI), Twitter bots, real-time manufacturing systems, DeskShare payment structures, and new applications built from the ground up with Django REST Framework and React.
                </p>
              </div>
            </ScrollReveal>

            {/* Contact & Location Matrix */}
            <ScrollReveal direction="up" delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2">
                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-graphite-400 block font-bold">LOCATION</span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-graphite-900 font-sans truncate">Nagpur, Maharashtra</span>
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-graphite-400 block font-bold">CONTACT DIRECT</span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <Phone className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                    <a href="tel:+918668428101" className="text-xs sm:text-sm font-bold text-graphite-900 font-sans hover:text-accent-blue transition-colors">
                      +91 8668428101
                    </a>
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-graphite-400 block font-bold">EMAIL</span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <Mail className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                    <a href="mailto:forrohitsingh99@gmail.com" className="text-xs sm:text-sm font-bold text-accent-blue font-mono truncate hover:underline">
                      forrohitsingh99
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Languages */}
            <ScrollReveal direction="up" delay={250}>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs font-mono font-bold text-graphite-800 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-accent-blue shrink-0" />
                  Spoken Languages
                </span>
                <div className="flex flex-wrap gap-2">
                  {languagesData.map((l) => (
                    <span
                      key={l.language}
                      className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono text-graphite-800 font-medium"
                    >
                      {l.language}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Core Principles */}
        <div className="pt-8 border-t border-slate-200">
          <ScrollReveal direction="up" delay={100}>
            <h3 className="text-xs font-mono uppercase tracking-wider text-graphite-400 font-bold mb-6">
              Engineering Disciplines & Standards
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <ScrollReveal direction="up" delay={150}>
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2 h-full">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-accent-blue flex items-center justify-center font-bold text-xs sm:text-sm mb-3">
                  01
                </div>
                <h4 className="text-sm font-bold text-graphite-950 font-heading">
                  Backend & Systems Reliability
                </h4>
                <p className="text-xs text-graphite-600 font-sans leading-relaxed">
                  Building dependable REST APIs with FastAPI, Django, and Node.js. Experienced in parent-child validation, retry strategies, and error handling.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={220}>
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2 h-full">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-accent-blue flex items-center justify-center font-bold text-xs sm:text-sm mb-3">
                  02
                </div>
                <h4 className="text-sm font-bold text-graphite-950 font-heading">
                  AI & LLM Workflows
                </h4>
                <p className="text-xs text-graphite-600 font-sans leading-relaxed">
                  Integrating OpenAI, local Ollama models, and ChromaDB vector search into real product features, document pipelines, and interactive agents.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={290}>
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2 h-full">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-accent-blue flex items-center justify-center font-bold text-xs sm:text-sm mb-3">
                  03
                </div>
                <h4 className="text-sm font-bold text-graphite-950 font-heading">
                  Full Stack React & TypeScript
                </h4>
                <p className="text-xs text-graphite-600 font-sans leading-relaxed">
                  Crafting responsive web applications with React, Next.js, and Tailwind CSS. Implementing Smart Tables, live updates, and undo functionality.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={360}>
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2 h-full">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-accent-blue flex items-center justify-center font-bold text-xs sm:text-sm mb-3">
                  04
                </div>
                <h4 className="text-sm font-bold text-graphite-950 font-heading">
                  Automation & Cloud Tooling
                </h4>
                <p className="text-xs text-graphite-600 font-sans leading-relaxed">
                  Automating multi-service business pipelines using n8n, Make.com, Celery, Docker, and AWS. Eliminating manual operational bottlenecks.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
