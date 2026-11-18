import React, { useState } from 'react';
import { BookOpen, CheckCircle2, FileCode2, Scale, Lightbulb } from 'lucide-react';
import { deepDivesData } from '../data/deepDivesData';
import { ScrollReveal } from './ScrollReveal';

export const DeepDives: React.FC = () => {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState<number>(0);
  const activeCase = deepDivesData[selectedCaseIdx];

  return (
    <section id="deep-dives" className="py-16 sm:py-24 bg-white text-[#171A21] relative overflow-hidden border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 pb-6 border-b border-slate-200 gap-4">
            <div>
              <div className="flex items-center gap-2 text-accent-blue text-xs font-mono tracking-technical uppercase mb-2">
                <BookOpen className="w-4 h-4" />
                <span>Technical Case Studies</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#171A21] font-heading">
                Engineering Deep Dives
              </h2>
            </div>
            <p className="text-graphite-500 text-xs sm:text-sm max-w-md font-sans leading-relaxed">
              Rigorous breakdowns of real engineering challenges, architectural trade-offs, and lessons learned from deploying AI systems in production.
            </p>
          </div>
        </ScrollReveal>

        {/* Case Study Selection Nav */}
        <ScrollReveal direction="up" delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
            {deepDivesData.map((cs, idx) => {
              const isSelected = selectedCaseIdx === idx;
              return (
                <button
                  key={cs.id}
                  onClick={() => setSelectedCaseIdx(idx)}
                  className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-50 border-graphite-950 shadow-card ring-1 ring-graphite-950'
                      : 'bg-white hover:bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-accent-blue">
                      CASE STUDY {cs.number}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-graphite-400">
                      {cs.readTime}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-graphite-950 line-clamp-2 font-heading">
                    {cs.title}
                  </h3>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active Case Study Detail */}
        <ScrollReveal direction="up" delay={150}>
          <div className="p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-[#F8FAFC] border border-slate-200 shadow-card">
            {/* Header */}
            <div className="pb-6 sm:pb-8 border-b border-slate-200 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded-md bg-accent-blue/10 text-accent-blue font-semibold border border-accent-blue/20">
                  CASE STUDY {activeCase.number}
                </span>
                <span className="text-xs font-mono text-graphite-400">
                  {activeCase.readTime}
                </span>
                <div className="flex flex-wrap gap-1.5 ml-auto">
                  {activeCase.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-white text-graphite-600 border border-slate-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-graphite-950 tracking-tight font-heading leading-tight">
                {activeCase.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-graphite-600 font-sans leading-relaxed">
                {activeCase.subtitle}
              </p>
            </div>

            {/* Core Body Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 py-6 sm:py-8 border-b border-slate-200">
              {/* The Problem */}
              <div className="lg:col-span-6 space-y-2 sm:space-y-3">
                <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-graphite-500 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  The Production Challenge
                </h4>
                <p className="text-xs sm:text-sm text-graphite-700 leading-relaxed font-sans">
                  {activeCase.problem}
                </p>
              </div>

              {/* Why it was difficult */}
              <div className="lg:col-span-6 space-y-2 sm:space-y-3">
                <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-graphite-500 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                  Why Naive Approaches Failed
                </h4>
                <p className="text-xs sm:text-sm text-graphite-700 leading-relaxed font-sans">
                  {activeCase.whyDifficult}
                </p>
              </div>
            </div>

            {/* The Engineering Approach */}
            <div className="py-6 sm:py-8 border-b border-slate-200 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-accent-blue font-bold flex items-center gap-2">
                <FileCode2 className="w-4 h-4 shrink-0" />
                The Architectural Approach
              </h4>
              <p className="text-xs sm:text-sm lg:text-base text-graphite-900 leading-relaxed font-sans font-medium">
                {activeCase.approach}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
                {activeCase.architectureBreakdown.map((item, idx) => (
                  <div key={idx} className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                    <h5 className="text-xs font-bold text-graphite-950 font-heading flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-slate-100 text-graphite-700 font-mono text-[10px] flex items-center justify-center font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span>{item.title}</span>
                    </h5>
                    <p className="text-xs text-graphite-600 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trade-offs & Lessons Learned */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-6 sm:pt-8">
              {/* Trade-offs */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-graphite-950 font-bold flex items-center gap-2">
                  <Scale className="w-4 h-4 text-graphite-600 shrink-0" />
                  Critical Trade-Offs Evaluated
                </h4>
                <ul className="space-y-2">
                  {activeCase.tradeOffs.map((t, idx) => (
                    <li key={idx} className="text-xs text-graphite-700 font-sans flex items-start gap-2 leading-relaxed">
                      <span className="text-accent-blue font-mono font-bold mt-0.5">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lessons Learned */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-graphite-950 font-bold flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
                  Production Lessons Learned
                </h4>
                <ul className="space-y-2">
                  {activeCase.lessonsLearned.map((l, idx) => (
                    <li key={idx} className="text-xs text-graphite-700 font-sans flex items-start gap-2 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
