import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Globe 
} from 'lucide-react';
import { experienceData, educationData, languagesData } from '../data/experienceData';
import { ScrollReveal } from './ScrollReveal';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-white text-[#171A21] relative overflow-hidden border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-slate-200 gap-4">
            <div>
              <div className="flex items-center gap-2 text-accent-blue text-xs font-mono tracking-technical uppercase mb-2">
                <Briefcase className="w-4 h-4" />
                <span>Career Trajectory & Education</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#171A21] font-heading">
                Experience & Education
              </h2>
            </div>
            <p className="text-graphite-500 text-xs sm:text-sm max-w-md font-sans leading-relaxed">
              3+ years of software development experience building backend services, full-stack applications, AI features, and workflow automations.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          {/* Professional Experience Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <ScrollReveal direction="up" delay={100}>
              <h3 className="text-xs font-mono uppercase tracking-wider text-graphite-400 font-bold flex items-center gap-2 mb-4 sm:mb-6">
                <span className="w-2 h-2 rounded-full bg-accent-blue shrink-0" />
                Professional Experience
              </h3>
            </ScrollReveal>

            <div className="relative pl-5 sm:pl-8 border-l-2 border-slate-200 space-y-8 sm:space-y-10">
              {experienceData.map((exp, idx) => (
                <ScrollReveal key={exp.id} direction="up" delay={120 + idx * 80}>
                  <div className="relative group">
                    {/* Timeline Node Dot */}
                    <div className={`absolute -left-[29px] sm:-left-[41px] top-4 w-4 h-4 rounded-full border-2 border-white transition-colors shrink-0 ${
                      exp.current ? 'bg-accent-blue ring-4 ring-blue-100' : 'bg-slate-400 group-hover:bg-graphite-800'
                    }`} />

                    <div className="p-5 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-slate-300 transition-all shadow-subtle hover:shadow-card space-y-3 sm:space-y-4">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="text-base sm:text-lg font-bold text-graphite-950 font-heading">
                              {exp.company}
                            </h4>
                            {exp.current && (
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 font-semibold border border-emerald-500/20">
                                Present Role
                              </span>
                            )}
                          </div>
                          <p className="text-xs sm:text-sm font-semibold text-accent-blue font-sans mt-0.5">
                            {exp.role}
                          </p>
                        </div>

                        <div className="text-[11px] sm:text-xs font-mono text-graphite-500 space-y-0.5 sm:text-right">
                          <div className="flex items-center sm:justify-end gap-1">
                            <Calendar className="w-3 h-3 text-slate-400 shrink-0" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center sm:justify-end gap-1 text-[10px] sm:text-[11px] text-graphite-400">
                            <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Bullet points from CV */}
                      <div className="space-y-2 pt-1">
                        <ul className="space-y-2">
                          {exp.bulletPoints.map((point, i) => (
                            <li key={i} className="text-xs sm:text-sm text-graphite-700 font-sans flex items-start gap-2.5 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills pills */}
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {exp.skills.map(s => (
                          <span key={s} className="px-2 py-0.5 rounded bg-white text-graphite-700 text-[10px] sm:text-[11px] font-mono border border-slate-200">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Education & Languages Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <ScrollReveal direction="up" delay={120}>
              <h3 className="text-xs font-mono uppercase tracking-wider text-graphite-400 font-bold flex items-center gap-2 mb-4 sm:mb-6">
                <GraduationCap className="w-4 h-4 text-accent-blue shrink-0" />
                Education
              </h3>
            </ScrollReveal>

            <div className="space-y-4 sm:space-y-6">
              {educationData.map((edu, idx) => (
                <ScrollReveal key={idx} direction="up" delay={160 + idx * 80}>
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-subtle space-y-3 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-slate-200">
                      <div>
                        <span className="text-[10px] sm:text-xs font-mono text-graphite-400">
                          {edu.period}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-graphite-950 font-heading mt-0.5">
                          {edu.degree}
                        </h4>
                        <p className="text-xs font-medium text-graphite-600 font-sans">
                          {edu.institution}
                        </p>
                      </div>

                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-accent-blue/10 text-accent-blue border border-accent-blue/20 shrink-0 w-fit">
                        {edu.grade}
                      </span>
                    </div>

                    <ul className="space-y-1.5 text-xs text-graphite-700 font-sans">
                      {edu.details.map((d, i) => (
                        <li key={i} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-accent-blue font-bold shrink-0">•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}

              {/* Spoken Languages Box */}
              <ScrollReveal direction="up" delay={300}>
                <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-subtle space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-graphite-800 uppercase tracking-wider pb-2 border-b border-slate-200">
                    <Globe className="w-4 h-4 text-accent-blue shrink-0" />
                    Languages
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {languagesData.map(l => (
                      <div key={l.language} className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-mono">
                        <span className="font-bold text-graphite-900">{l.language}</span>
                        <span className="text-graphite-400 text-[10px] ml-1.5 block sm:inline">({l.proficiency})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
