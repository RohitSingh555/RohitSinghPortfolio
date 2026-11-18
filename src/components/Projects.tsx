import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { projectsData, Project } from '../data/projectsData';
import { ScrollReveal } from './ScrollReveal';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>('shogo');

  const categories = ['All', 'AI & Agents', 'Full Stack', 'Backend & Enterprise', 'Automation'];

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedProjectId(prev => prev === id ? null : id);
  };

  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#F8FAFC] text-[#171A21] relative overflow-hidden border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 pb-6 border-b border-slate-200 gap-4">
            <div>
              <div className="flex items-center gap-2 text-accent-blue text-xs font-mono tracking-technical uppercase mb-2">
                <FolderGit2 className="w-4 h-4" />
                <span>Selected Works & Platform Features</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#171A21] font-heading">
                Selected Projects
              </h2>
            </div>
            <p className="text-graphite-500 text-xs sm:text-sm max-w-md font-sans leading-relaxed">
              Core platform contributions and applications spanning Slack AI agent workflows, multi-modal workspaces, local/cloud interviewers, vector recommendation engines, and automation pipelines.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Category Tabs (Horizontal scroll on mobile) */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex items-center gap-2 mb-8 overflow-x-auto no-scrollbar pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-graphite-950 text-white shadow-sm'
                    : 'bg-white text-graphite-600 hover:text-graphite-950 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects List */}
        <div className="space-y-4 sm:space-y-6">
          {filteredProjects.map((project, idx) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <ScrollReveal key={project.id} direction="up" delay={120 + idx * 60}>
                <div
                  className={`rounded-2xl sm:rounded-3xl border transition-all duration-200 bg-white shadow-subtle ${
                    isExpanded ? 'border-graphite-950 shadow-card' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {/* Project Header Bar */}
                  <div 
                    onClick={() => toggleExpand(project.id)}
                    className="p-5 sm:p-7 lg:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6"
                  >
                    <div className="space-y-2 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] sm:text-xs font-mono px-2.5 py-0.5 rounded-md bg-accent-blue/10 text-accent-blue font-semibold border border-accent-blue/20">
                          {project.category}
                        </span>
                        <span className="text-[11px] sm:text-xs font-mono text-graphite-500">
                          {project.tagline}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-graphite-950 font-heading">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-graphite-600 font-sans max-w-3xl leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    {/* Tech stack pill preview + Expand indicator */}
                    <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                      <div className="hidden lg:flex flex-wrap gap-1.5 max-w-xs justify-end">
                        {project.technologies.slice(0, 3).map(tech => (
                          <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 text-graphite-700 text-[11px] font-mono border border-slate-200">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-0.5 rounded bg-slate-100 text-graphite-500 text-[11px] font-mono">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-graphite-700 transition-colors"
                            title="Open Live Website"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-graphite-700 transition-colors"
                            title="View Repository"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        <button
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-graphite-700 text-xs font-mono transition-colors"
                          aria-label={isExpanded ? 'Collapse project details' : 'Expand project details'}
                        >
                          <span className="hidden sm:inline">{isExpanded ? 'Hide' : 'Details'}</span>
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Project Details Drawer */}
                  {isExpanded && (
                    <div className="px-5 pb-6 sm:px-8 sm:pb-8 border-t border-slate-100 pt-5 sm:pt-6 space-y-5">
                      {/* Key Highlights */}
                      <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-graphite-500 font-bold flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
                          Key Contributions & Technical Implementation
                        </span>
                        <ul className="space-y-2">
                          {project.bulletPoints.map((point, i) => (
                            <li key={i} className="text-xs sm:text-sm text-graphite-700 font-sans flex items-start gap-2.5 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies Deployed */}
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-graphite-400 block mb-2 font-bold">
                          Technologies & Frameworks
                        </span>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {project.technologies.map(tech => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[11px] sm:text-xs font-mono text-graphite-800 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
