import React from 'react';
import { 
  Server, 
  Layout, 
  Bot, 
  Workflow, 
  Database, 
  Cloud, 
  Cpu, 
  CheckCircle2 
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  tagline: string;
  skills: string[];
  highlights: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Backend Engineering',
    icon: <Server className="w-5 h-5 text-accent-blue" />,
    tagline: 'High-reliability services, REST APIs & data ingestion',
    skills: ['Python', 'FastAPI', 'Django', 'Django REST Framework', 'Flask', 'Node.js', 'NestJS', 'REST APIs'],
    highlights: [
      'Built and maintained backend services for enterprise platforms',
      'Engineered parent-child content validation and retry mechanisms for Confluence ingestion',
      'Designed payment gateway integrations and secure authentication systems'
    ]
  },
  {
    title: 'Frontend Engineering',
    icon: <Layout className="w-5 h-5 text-accent-blue" />,
    tagline: 'Modern, responsive interfaces & interactive tools',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
    highlights: [
      'Developed Smart Table components and Excel export functionality',
      'Engineered workflow tooling with variables, templates, navigation, and undo support',
      'Crafted type-safe component architectures and interactive application dashboards'
    ]
  },
  {
    title: 'AI & LLMs',
    icon: <Bot className="w-5 h-5 text-accent-blue" />,
    tagline: 'Model integrations, RAG & autonomous workflows',
    skills: ['OpenAI API', 'Ollama', 'ChromaDB', 'LLM Integrations', 'AI-Enabled Workflows', 'Vapi Voice Agents'],
    highlights: [
      'Developed AI Interviewer combining FastAPI, React, Ollama, and OpenAI',
      'Built vector-based book recommendation experience using ChromaDB and OpenAI',
      'Integrated voice AI agents (Vapi) and context-aware bots into production applications'
    ]
  },
  {
    title: 'Automation & Orchestration',
    icon: <Workflow className="w-5 h-5 text-accent-blue" />,
    tagline: 'Event-driven pipelines & automated workflows',
    skills: ['n8n', 'Make.com', 'Celery', 'API Integrations', 'Workflow Automation', 'Webhooks'],
    highlights: [
      'Delivered client platforms and business automations connecting services through APIs',
      'Built asynchronous background task workers using Celery and Redis',
      'Automated multi-step operations to reduce manual steps and streamline client operations'
    ]
  },
  {
    title: 'Databases & Data Stores',
    icon: <Database className="w-5 h-5 text-accent-blue" />,
    tagline: 'Relational, document & vector query optimization',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Query Optimization', 'Vector Databases'],
    highlights: [
      'Designed relational database schemas with high transactional integrity',
      'Optimized complex SQL queries for multi-page data loading and analytics',
      'Implemented vector storage collections for high-dimensional semantic search'
    ]
  },
  {
    title: 'Cloud, DevOps & Tools',
    icon: <Cloud className="w-5 h-5 text-accent-blue" />,
    tagline: 'Containerized runtimes, CI/CD & developer tooling',
    skills: ['AWS', 'Docker', 'CI/CD', 'Git', 'GitHub', 'Linux', 'Vercel', 'Postman', 'Swagger', 'Jira'],
    highlights: [
      'Managed Docker-based isolated container environments and Python sandbox tooling',
      'Configured automated CI/CD deployment pipelines using Git and GitHub Actions',
      'Documented and tested RESTful endpoints using Postman and Swagger/OpenAPI'
    ]
  }
];

export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-16 sm:py-24 bg-white text-[#171A21] relative overflow-hidden border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-slate-200 gap-4">
            <div>
              <div className="flex items-center gap-2 text-accent-blue text-xs font-mono tracking-technical uppercase mb-2">
                <Cpu className="w-4 h-4" />
                <span>Technical Skills & Tooling</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#171A21] font-heading">
                Technical Capabilities
              </h2>
            </div>
            <p className="text-graphite-500 text-xs sm:text-sm max-w-md font-sans leading-relaxed">
              Comprehensive technical skills spanning backend services, full-stack web applications, AI integrations, and automation workflows verified across 3+ years of production experience.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((group, idx) => (
            <ScrollReveal key={group.title} direction="up" delay={100 + idx * 80}>
              <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#F8FAFC] border border-slate-200 hover:border-slate-300 transition-all shadow-subtle hover:shadow-card flex flex-col justify-between h-full">
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-subtle shrink-0">
                      {group.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-graphite-950 font-heading">
                        {group.title}
                      </h3>
                      <p className="text-[11px] text-accent-blue font-mono font-medium">
                        {group.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-1">
                    {group.highlights.map((h, i) => (
                      <div key={i} className="text-xs text-graphite-700 flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-mono text-graphite-800 shadow-subtle font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
