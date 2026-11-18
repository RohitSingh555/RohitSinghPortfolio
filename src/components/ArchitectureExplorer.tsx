import React, { useState } from 'react';
import { 
  Network, 
  ArrowRight, 
  Clock, 
  AlertTriangle 
} from 'lucide-react';
import { architectureData } from '../data/architectureData';
import { ScrollReveal } from './ScrollReveal';

export const ArchitectureExplorer: React.FC = () => {
  const [selectedDiagramIdx, setSelectedDiagramIdx] = useState<number>(0);
  const diagram = architectureData[selectedDiagramIdx];
  const [activeNodeId, setActiveNodeId] = useState<string>(diagram.nodes[1].id);

  const activeNode = diagram.nodes.find(n => n.id === activeNodeId) || diagram.nodes[0];

  const handleDiagramSelect = (idx: number) => {
    setSelectedDiagramIdx(idx);
    setActiveNodeId(architectureData[idx].nodes[1].id);
  };

  return (
    <section id="architecture" className="py-16 sm:py-24 bg-[#F8FAFC] text-[#171A21] relative overflow-hidden border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 pb-6 border-b border-slate-200 gap-4">
            <div>
              <div className="flex items-center gap-2 text-accent-blue text-xs font-mono tracking-technical uppercase mb-2">
                <Network className="w-4 h-4" />
                <span>Systems Engineering & Topologies</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#171A21] font-heading">
                Architecture & System Design
              </h2>
            </div>
            <p className="text-graphite-500 text-xs sm:text-sm max-w-md font-sans leading-relaxed">
              How I architect software: deterministic contracts, asynchronous queuing, and fault-tolerant boundaries. Click any component below to inspect schemas and failure modes.
            </p>
          </div>
        </ScrollReveal>

        {/* Diagram Switcher Tabs (Horizontal scroll on mobile) */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex items-center gap-2 mb-6 sm:mb-8 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            {architectureData.map((d, idx) => (
              <button
                key={d.id}
                onClick={() => handleDiagramSelect(idx)}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 cursor-pointer ${
                  selectedDiagramIdx === idx
                    ? 'bg-graphite-950 text-white shadow-sm'
                    : 'bg-white text-graphite-600 hover:text-graphite-950 border border-slate-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-blue" />
                  <span>{d.title}</span>
                </div>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Architectural Overview Card */}
        <ScrollReveal direction="up" delay={150}>
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle mb-6 sm:mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] sm:text-xs font-mono text-accent-blue font-semibold uppercase tracking-wider">
                {diagram.category}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-graphite-950 font-heading">
                {diagram.title}
              </h3>
              <p className="text-xs sm:text-sm text-graphite-600 font-sans max-w-3xl leading-relaxed">
                {diagram.summary}
              </p>
            </div>
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-graphite-700 w-full md:w-auto md:min-w-[260px] md:max-w-xs shrink-0">
              <span className="text-graphite-400 block text-[10px] uppercase font-bold mb-1">
                Key Engineering Trade-off
              </span>
              <span className="leading-relaxed block">{diagram.tradeOff}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Interactive Flow Diagram + Node Deep Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Node Flow Visualizer (7 cols) */}
          <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
            <div className="text-[11px] sm:text-xs font-mono text-graphite-400 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Pipeline Stage Progression</span>
              <span className="text-accent-blue text-[10px] sm:text-[11px]">Click node to inspect</span>
            </div>

            <div className="space-y-2 sm:space-y-2.5">
              {diagram.nodes.map((node, index) => {
                const isSelected = node.id === activeNodeId;
                return (
                  <div
                    key={node.id}
                    onClick={() => setActiveNodeId(node.id)}
                    className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 sm:gap-4 ${
                      isSelected
                        ? 'bg-white border-accent-blue shadow-card ring-1 ring-accent-blue/30'
                        : 'bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                      <div
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-[11px] sm:text-xs font-mono font-bold shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-accent-blue text-white'
                            : 'bg-slate-100 text-graphite-600'
                        }`}
                      >
                        0{index + 1}
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                          <h4 className="text-xs sm:text-sm font-bold text-graphite-950 truncate max-w-[160px] sm:max-w-xs">
                            {node.label}
                          </h4>
                          <span className="text-[9px] sm:text-[10px] font-mono px-1.5 sm:px-2 py-0.5 rounded bg-slate-100 text-graphite-600 uppercase">
                            {node.stage}
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-graphite-500 truncate font-mono">
                          {node.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                      <span className="text-[11px] sm:text-xs font-mono text-graphite-500 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>{node.latency}</span>
                      </span>
                      <ArrowRight
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform ${
                          isSelected ? 'text-accent-blue translate-x-0.5' : 'text-slate-300'
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Node Inspector Panel (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-card space-y-4 sm:space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 gap-2">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-accent-blue font-bold uppercase tracking-wider">
                    Node Telemetry & Contract
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-graphite-950 font-heading mt-0.5">
                    {activeNode.label}
                  </h3>
                </div>
                <span className="text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded bg-slate-100 text-graphite-700 font-semibold shrink-0">
                  {activeNode.latency}
                </span>
              </div>

              {/* Description */}
              <div>
                <label className="text-[10px] font-mono text-graphite-400 uppercase tracking-wider block mb-1">
                  Functional Purpose
                </label>
                <p className="text-xs text-graphite-700 font-sans leading-relaxed">
                  {activeNode.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <label className="text-[10px] font-mono text-graphite-400 uppercase tracking-wider block mb-1.5">
                  Component Technologies
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {activeNode.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-graphite-800 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Payload Example */}
              {activeNode.payloadExample && (
                <div>
                  <label className="text-[10px] font-mono text-graphite-400 uppercase tracking-wider block mb-1.5 flex items-center justify-between">
                    <span>Structured Schema Payload</span>
                    <span className="text-[10px] text-accent-blue">JSON / Strict</span>
                  </label>
                  <pre className="p-2.5 sm:p-3 rounded-xl bg-graphite-950 text-slate-100 font-mono text-[10px] sm:text-[11px] overflow-x-auto whitespace-pre-wrap break-words leading-relaxed border border-graphite-800 max-h-48 sm:max-h-60">
                    {activeNode.payloadExample}
                  </pre>
                </div>
              )}

              {/* Failure Mode & Resilience */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-1">
                <div className="flex items-center gap-1.5 text-amber-800 text-xs font-mono font-bold">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Resilience & Error Protocol</span>
                </div>
                <p className="text-[11px] text-amber-900 font-sans leading-relaxed">
                  {activeNode.failureMode}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
