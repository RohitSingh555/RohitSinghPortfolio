import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-graphite-950 text-white border-t border-white/10 py-10 sm:py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pb-6 sm:pb-8 border-b border-white/10">
          {/* Logo & Identity */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-blue shrink-0" />
              <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-white">
                Rohit Singh
              </span>
              <span className="text-[11px] sm:text-xs font-mono text-graphite-400">· AI-focused Software Engineer</span>
            </div>
            <p className="text-[11px] sm:text-xs text-graphite-400 font-sans">
              Designed with precision · Built with React, TypeScript, Three.js & Tailwind CSS.
            </p>
          </div>

          {/* System Status Pill */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-graphite-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>All Systems Operational</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 sm:p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-graphite-400 hover:text-white transition-colors shrink-0"
              aria-label="Back to top"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Verified Info */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs font-mono text-graphite-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Rohit Singh. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-blue shrink-0" />
              Verified Credentials & Achievements
            </span>
            <span className="hidden sm:inline">·</span>
            <span>Pune, Maharashtra, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
