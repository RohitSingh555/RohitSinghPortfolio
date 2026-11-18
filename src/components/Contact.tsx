import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  MapPin, 
  Phone, 
  Github, 
  Linkedin, 
  Twitter, 
  FileText, 
  ArrowUpRight 
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const email = 'forrohitsingh99@gmail.com';
  const phone = '+91 8668428101';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#171A21] text-[#F8FAFC] relative overflow-hidden scroll-mt-20">
      {/* Background accents */}
      <div className="absolute inset-0 bg-grid-dark opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Direct Invitation (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <ScrollReveal direction="up" delay={50}>
              <div className="inline-flex items-center gap-2 text-accent-blue text-xs font-mono tracking-technical uppercase">
                <Mail className="w-4 h-4 shrink-0" />
                <span>Initiate Transmission</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading leading-tight break-words">
                Let's engineer something intelligent together.
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <p className="text-xs sm:text-sm lg:text-base text-graphite-300 font-sans max-w-xl leading-relaxed">
                Whether you are building backend services, scaling AI-enabled features, discussing full-stack engineering, or exploring high-impact roles—my inbox and phone are open.
              </p>
            </ScrollReveal>

            {/* Email & Phone Contact Cards */}
            <ScrollReveal direction="up" delay={200}>
              <div className="space-y-3 max-w-xl">
                {/* Email Copy Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="space-y-0.5 min-w-0">
                    <span className="text-[10px] font-mono text-graphite-400 uppercase tracking-wider block">
                      PRIMARY EMAIL
                    </span>
                    <span className="text-sm sm:text-base lg:text-lg font-mono font-semibold text-white break-all">
                      {email}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                    <button
                      onClick={handleCopyEmail}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 active:scale-[0.98] text-white text-xs font-mono transition-all cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-graphite-300" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${email}`}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-accent-blue hover:bg-accent-blue-hover active:scale-[0.98] text-white text-xs font-mono font-semibold transition-all shadow-subtle cursor-pointer"
                    >
                      <span>Send Mail</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Direct Phone Call Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="space-y-0.5 min-w-0">
                    <span className="text-[10px] font-mono text-graphite-400 uppercase tracking-wider block">
                      DIRECT PHONE
                    </span>
                    <span className="text-sm sm:text-base lg:text-lg font-mono font-semibold text-white">
                      {phone}
                    </span>
                  </div>

                  <a
                    href="tel:+918668428101"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 active:scale-[0.98] text-white text-xs font-mono font-semibold transition-all shrink-0 cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 text-accent-blue" />
                    <span>Call Direct</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Location & Status Metadata */}
            <ScrollReveal direction="up" delay={250}>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-mono text-graphite-400 pt-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Nagpur, Maharashtra</span>
                </div>
                <span className="hidden sm:inline">·</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-graphite-300">Software Development Engineer</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Verified Professional Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <ScrollReveal direction="up" delay={150}>
              <h3 className="text-xs font-mono uppercase tracking-wider text-graphite-400 font-bold mb-3 sm:mb-4">
                Verified Profiles & Channels
              </h3>
            </ScrollReveal>

            {/* GitHub */}
            <ScrollReveal direction="up" delay={200}>
              <a
                href="https://github.com/RohitSingh555"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-accent-blue transition-colors shrink-0">
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-white font-mono truncate">GitHub</h4>
                    <p className="text-[11px] sm:text-xs text-graphite-400 font-sans truncate">@RohitSingh555 · Repositories</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-graphite-500 group-hover:text-white transition-colors shrink-0 ml-2" />
              </a>
            </ScrollReveal>

            {/* LinkedIn */}
            <ScrollReveal direction="up" delay={250}>
              <a
                href="https://www.linkedin.com/in/rsingh555"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-accent-blue transition-colors shrink-0">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-white font-mono truncate">LinkedIn</h4>
                    <p className="text-[11px] sm:text-xs text-graphite-400 font-sans truncate">in/rsingh555 · Professional Network</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-graphite-500 group-hover:text-white transition-colors shrink-0 ml-2" />
              </a>
            </ScrollReveal>

            {/* X / Twitter */}
            <ScrollReveal direction="up" delay={300}>
              <a
                href="https://x.com/Writesforheart?t=3xF7eySESoe5aMNL79F7Dg&s=08"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-accent-blue transition-colors shrink-0">
                    <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-white font-mono truncate">X / Twitter</h4>
                    <p className="text-[11px] sm:text-xs text-graphite-400 font-sans truncate">@Writesforheart · Perspectives & Writing</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-graphite-500 group-hover:text-white transition-colors shrink-0 ml-2" />
              </a>
            </ScrollReveal>

            {/* Resume Download */}
            <ScrollReveal direction="up" delay={350}>
              <a
                href="./assets/img/My resume 2023.pdf"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-accent-blue transition-colors shrink-0">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-white font-mono truncate">Curriculum Vitae (PDF)</h4>
                    <p className="text-[11px] sm:text-xs text-graphite-400 font-sans truncate">Direct verified CV download</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-graphite-500 group-hover:text-white transition-colors shrink-0 ml-2" />
              </a>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
