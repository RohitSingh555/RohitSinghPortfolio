import React, { useState } from 'react';
import { 
  Cpu, 
  Terminal, 
  Sliders, 
  Layers, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight, 
  Sparkles,
  Database
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ChunkItem {
  id: string;
  source: string;
  title: string;
  content: string;
  baseSimilarity: number;
  tokens: number;
  tags: string[];
}

const sampleChunks: ChunkItem[] = [
  {
    id: 'chk-1',
    source: 'Financial_Q3_Report.pdf',
    title: 'Operating Expenses & GPU Compute Allocations',
    content: 'In Q3, enterprise inference infrastructure costs increased by 14.2% due to high-throughput continuous batching on H100 clusters. Cloud spend totaled $42,500.',
    baseSimilarity: 0.92,
    tokens: 48,
    tags: ['EBITDA', 'Compute', 'H100']
  },
  {
    id: 'chk-2',
    source: 'Architecture_Specs_v2.md',
    title: 'Vector Database & HNSW Indexing Parameters',
    content: 'ChromaDB collection configured with HNSW index m=16 and ef_construction=64. Cosine metric selected for normalized 1536-dimensional OpenAI embeddings.',
    baseSimilarity: 0.84,
    tokens: 42,
    tags: ['ChromaDB', 'HNSW', 'Embeddings']
  },
  {
    id: 'chk-3',
    source: 'Security_Compliance_2025.pdf',
    title: 'Python Sandbox Container Isolation Standards',
    content: 'All user script executions in GetOdin are partitioned into unprivileged Docker containers with cap-drop=ALL, cgroup limits (256MB RAM), and egress blackholing.',
    baseSimilarity: 0.63,
    tokens: 44,
    tags: ['Security', 'Docker', 'Sandboxing']
  },
  {
    id: 'chk-4',
    source: 'Agent_Runbook_Shogo.md',
    title: 'Slack Webhook SLA & Ingress Queuing',
    content: 'Slack requires HTTP 200 acknowledgment within 3000ms. Shogo handles this by dispatching commands to Redis pub/sub queue and updating threads asynchronously.',
    baseSimilarity: 0.76,
    tokens: 46,
    tags: ['Slack', 'Redis', 'FastAPI']
  },
  {
    id: 'chk-5',
    source: 'API_Gateway_Metrics.log',
    title: 'Server-Sent Events & First-Token Latency',
    content: 'Streaming LLM completion endpoints using FastAPI SSE achieve p95 Time-To-First-Token (TTFT) of 185ms across OpenAI and Anthropic provider pools.',
    baseSimilarity: 0.81,
    tokens: 38,
    tags: ['FastAPI', 'SSE', 'Latency']
  }
];

const agentScenarios = [
  {
    id: 'scenario-1',
    task: 'Investigate why Cloud Infrastructure GPU compute spiked in Q3 and verify container limits',
    steps: [
      {
        stepNumber: 1,
        phase: 'INGRESS' as const,
        title: 'Event Intercepted & User Intent Parsed',
        detail: 'Slack event received from @rohit: "Check why cloud infrastructure GPU compute spiked in Q3 and verify container limits". Validated payload signature.',
        meta: 'Status: 200 OK (18ms) · Redis Job #49102'
      },
      {
        stepNumber: 2,
        phase: 'PLANNING' as const,
        title: 'Constructing Execution DAG',
        detail: 'Agent state machine initializes plan: Step 1 = Query ChromaDB vector index for Q3 financial documents; Step 2 = Check sandbox cgroups configuration.',
        meta: 'Model: Claude 3.5 Sonnet · Plan Depth: 2 steps'
      },
      {
        stepNumber: 3,
        phase: 'TOOL_CALL' as const,
        title: 'Executing Tool: vector_search',
        detail: 'Invoking `vector_search(query="Q3 GPU compute cluster costs", top_k=2)` inside hardened runtime.',
        meta: 'Args validated against Pydantic schema · Schema strict=True'
      },
      {
        stepNumber: 4,
        phase: 'OBSERVATION' as const,
        title: 'Tool Observation Returned',
        detail: 'Retrieved chunk: "In Q3, inference infrastructure costs increased 14.2% due to high-throughput continuous batching on H100 clusters ($42,500)".',
        meta: 'Payload size: 382 bytes · Similarity Score: 0.92'
      },
      {
        stepNumber: 5,
        phase: 'REFLECTION' as const,
        title: 'Self-Correction & Invariant Validation',
        detail: 'Agent evaluates retrieved data against query goal. Verifies that root cause (H100 continuous batching) is supported by primary source citation.',
        meta: 'Confidence: 94.6% · Hallucination Check: Passed'
      },
      {
        stepNumber: 6,
        phase: 'SYNTHESIS' as const,
        title: 'Slack Block Thread Published',
        detail: 'Synthesized diagnostic: "Q3 GPU compute spend rose 14.2% ($42,500 total) due to H100 batching workloads. Sandbox cgroup memory limits held at 256MB with zero leakage."',
        meta: 'Total Latency: 1.42s · Tokens Used: 412 tokens'
      }
    ]
  },
  {
    id: 'scenario-2',
    task: 'Generate automated unit test suite for FastAPI RAG streaming endpoint',
    steps: [
      {
        stepNumber: 1,
        phase: 'INGRESS' as const,
        title: 'Developer Prompt Received',
        detail: 'Request: "Generate comprehensive pytest test cases for FastAPI SSE streaming endpoint with mock LLM generator."',
        meta: 'Priority: High · Target File: test_streaming.py'
      },
      {
        stepNumber: 2,
        phase: 'PLANNING' as const,
        title: 'Analyzing Module Dependencies',
        detail: 'Scanning endpoint signature: Async generator yielding `EventSourceResponse`. Needs tests for normal stream, client disconnect, and provider 500 error.',
        meta: 'Tool Plan: inspect_ast -> generate_pytest -> run_sandbox'
      },
      {
        stepNumber: 3,
        phase: 'TOOL_CALL' as const,
        title: 'Executing Tool: run_python_sandbox',
        detail: 'Running generated pytest suite against mock client in ephemeral Docker worker to verify assert statements pass.',
        meta: 'Worker: warm_pool_worker_2 · Timeout: 5000ms'
      },
      {
        stepNumber: 4,
        phase: 'OBSERVATION' as const,
        title: 'Execution Output Captured',
        detail: 'Pytest executed: 3 passed, 0 failed in 0.28s. All boundary conditions verified.',
        meta: 'Exit Code: 0 · Memory: 84MB'
      },
      {
        stepNumber: 5,
        phase: 'REFLECTION' as const,
        title: 'Code Quality Inspection',
        detail: 'Checking type annotations and fixtures. Clean PEP 8 compliance verified.',
        meta: 'Verification: Complete'
      },
      {
        stepNumber: 6,
        phase: 'SYNTHESIS' as const,
        title: 'Deliverable Delivered',
        detail: 'Pull request review and tests formatted into markdown diff ready for commit.',
        meta: 'Execution Complete · Total Latency: 1.88s'
      }
    ]
  }
];

export const AiLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rag' | 'agent' | 'tokens'>('rag');

  // RAG Explorer State
  const [userQuery, setUserQuery] = useState<string>('What caused the increase in Q3 GPU compute costs?');
  const [chunkSize, setChunkSize] = useState<number>(350);
  const [topK, setTopK] = useState<number>(3);
  const [threshold, setThreshold] = useState<number>(0.75);

  // Compute filtered chunks dynamically
  const sortedChunks = [...sampleChunks].sort((a, b) => b.baseSimilarity - a.baseSimilarity);
  const passingChunks = sortedChunks.filter(c => c.baseSimilarity >= threshold).slice(0, topK);

  // Agent Simulator State
  const [selectedScenarioIdx, setSelectedScenarioIdx] = useState<number>(0);
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const scenario = agentScenarios[selectedScenarioIdx];

  const handleStepForward = () => {
    if (currentStepIdx < scenario.steps.length - 1) {
      setCurrentStepIdx(prev => prev + 1);
    }
  };

  const handleRunAll = () => {
    setIsRunning(true);
    let step = 0;
    setCurrentStepIdx(0);
    const interval = setInterval(() => {
      step++;
      if (step < scenario.steps.length) {
        setCurrentStepIdx(step);
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 600);
  };

  const handleResetAgent = () => {
    setCurrentStepIdx(0);
    setIsRunning(false);
  };

  // Token Calculator State
  const [promptTokens, setPromptTokens] = useState<number>(1800);
  const [completionTokens, setCompletionTokens] = useState<number>(450);

  return (
    <section id="ai-lab" className="py-16 sm:py-24 bg-[#171A21] text-[#F8FAFC] relative overflow-hidden scroll-mt-20">
      {/* Subtle background tech matrix */}
      <div className="absolute inset-0 bg-grid-dark opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-accent-blue text-xs font-mono tracking-technical uppercase mb-2">
                <Cpu className="w-4 h-4" />
                <span>Interactive Engineering Sandbox</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-heading">
                AI Systems Lab
              </h2>
            </div>
            <p className="text-graphite-400 text-xs sm:text-sm max-w-md font-sans leading-relaxed">
              Real, verifiable architectural simulations. Test semantic vector retrieval, inspect deterministic agent state transitions, and calculate inference cost curves.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Navigation (Responsive scroll on mobile) */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex items-center gap-1.5 sm:gap-2 mb-6 sm:mb-8 p-1 sm:p-1.5 bg-white/5 rounded-xl border border-white/10 overflow-x-auto no-scrollbar w-full sm:w-fit pb-1 sm:pb-1.5">
            <button
              onClick={() => setActiveTab('rag')}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all shrink-0 cursor-pointer ${
                activeTab === 'rag'
                  ? 'bg-accent-blue text-white shadow-sm'
                  : 'text-graphite-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>RAG Retrieval Explorer</span>
            </button>

            <button
              onClick={() => setActiveTab('agent')}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all shrink-0 cursor-pointer ${
                activeTab === 'agent'
                  ? 'bg-accent-blue text-white shadow-sm'
                  : 'text-graphite-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>Agent Workflow Simulator</span>
            </button>

            <button
              onClick={() => setActiveTab('tokens')}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all shrink-0 cursor-pointer ${
                activeTab === 'tokens'
                  ? 'bg-accent-blue text-white shadow-sm'
                  : 'text-graphite-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>Token & Latency Estimator</span>
            </button>
          </div>
        </ScrollReveal>

        {/* TAB 1: RAG RETRIEVAL EXPLORER */}
        {activeTab === 'rag' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Left Controls & Parameters */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-4 sm:space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <h3 className="text-xs sm:text-sm font-semibold text-white tracking-wide uppercase font-mono">
                    Vector Query Configuration
                  </h3>
                  <span className="text-[11px] text-accent-blue font-mono">Cosine Metric</span>
                </div>

                {/* Query Input */}
                <div>
                  <label className="block text-[11px] font-mono text-graphite-400 mb-2">
                    NATURAL LANGUAGE QUERY
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={userQuery}
                      onChange={(e) => setUserQuery(e.target.value)}
                      className="w-full px-3.5 sm:px-4 py-2.5 bg-black/40 border border-white/15 rounded-xl text-xs sm:text-sm text-white placeholder-graphite-500 focus:outline-none focus:border-accent-blue transition-colors font-sans"
                      placeholder="Enter semantic query..."
                    />
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    <button
                      onClick={() => setUserQuery('What caused the increase in Q3 GPU compute costs?')}
                      className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 bg-white/5 hover:bg-white/10 rounded border border-white/10 text-graphite-300 transition-colors cursor-pointer"
                    >
                      #Q3 GPU Compute
                    </button>
                    <button
                      onClick={() => setUserQuery('How does GetOdin isolate untrusted Python containers?')}
                      className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 bg-white/5 hover:bg-white/10 rounded border border-white/10 text-graphite-300 transition-colors cursor-pointer"
                    >
                      #Python Sandbox
                    </button>
                    <button
                      onClick={() => setUserQuery('What is the Slack webhook timeout policy for Shogo?')}
                      className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 bg-white/5 hover:bg-white/10 rounded border border-white/10 text-graphite-300 transition-colors cursor-pointer"
                    >
                      #Slack Webhooks
                    </button>
                  </div>
                </div>

                {/* Sliders */}
                <div className="space-y-4 pt-1">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1.5">
                      <span className="text-graphite-400 text-[11px]">MIN COSINE THRESHOLD</span>
                      <span className="text-white font-semibold">{threshold.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="0.50"
                      max="0.95"
                      step="0.05"
                      value={threshold}
                      onChange={(e) => setThreshold(parseFloat(e.target.value))}
                      className="w-full accent-accent-blue bg-white/10 rounded-lg cursor-pointer h-2"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-graphite-500 mt-1">
                      <span>0.50 (Permissive)</span>
                      <span>0.95 (Exact Match)</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1.5">
                      <span className="text-graphite-400 text-[11px]">TOP-K RETRIEVAL LIMIT</span>
                      <span className="text-white font-semibold">{topK} chunks</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      step="1"
                      value={topK}
                      onChange={(e) => setTopK(parseInt(e.target.value))}
                      className="w-full accent-accent-blue bg-white/10 rounded-lg cursor-pointer h-2"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1.5">
                      <span className="text-graphite-400 text-[11px]">TARGET CHUNK BUDGET</span>
                      <span className="text-white font-semibold">{chunkSize} tokens</span>
                    </div>
                    <input
                      type="range"
                      min="150"
                      max="600"
                      step="50"
                      value={chunkSize}
                      onChange={(e) => setChunkSize(parseInt(e.target.value))}
                      className="w-full accent-accent-blue bg-white/10 rounded-lg cursor-pointer h-2"
                    />
                  </div>
                </div>

                {/* Pipeline Metrics */}
                <div className="pt-3 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded bg-black/30 border border-white/5">
                    <div className="text-[9px] sm:text-[10px] font-mono text-graphite-400">INDEX CHUNKS</div>
                    <div className="text-xs sm:text-sm font-mono font-bold text-white mt-0.5">{sampleChunks.length}</div>
                  </div>
                  <div className="p-2 rounded bg-black/30 border border-white/5">
                    <div className="text-[9px] sm:text-[10px] font-mono text-graphite-400">PASSING FILTER</div>
                    <div className="text-xs sm:text-sm font-mono font-bold text-accent-blue mt-0.5">{passingChunks.length}</div>
                  </div>
                  <div className="p-2 rounded bg-black/30 border border-white/5">
                    <div className="text-[9px] sm:text-[10px] font-mono text-graphite-400">EST. SEARCH</div>
                    <div className="text-xs sm:text-sm font-mono font-bold text-emerald-400 mt-0.5">8.2ms</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Retrieved Vector Chunks & Assembled Prompt */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 gap-2">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-accent-blue shrink-0" />
                    <h3 className="text-xs sm:text-sm font-semibold text-white tracking-wide font-mono uppercase">
                      Retrieved Vector Chunks ({passingChunks.length} Passed)
                    </h3>
                  </div>
                  <span className="text-[10px] sm:text-xs text-graphite-400 font-mono">Ranked by Cosine</span>
                </div>

                {passingChunks.length === 0 ? (
                  <div className="p-6 sm:p-8 text-center rounded-xl bg-black/30 border border-dashed border-white/15">
                    <AlertCircle className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                    <p className="text-xs sm:text-sm text-graphite-300 font-medium">No chunks met similarity threshold ({threshold.toFixed(2)})</p>
                    <p className="text-[11px] text-graphite-500 mt-1">Lower the similarity threshold slider to include broader semantic matches.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {passingChunks.map((chunk, idx) => (
                      <div
                        key={chunk.id}
                        className="p-3.5 sm:p-4 rounded-xl bg-black/30 border border-white/10 hover:border-white/20 transition-all"
                      >
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="w-5 h-5 rounded-full bg-accent-blue/20 text-accent-blue text-xs font-mono font-bold flex items-center justify-center shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-xs font-semibold text-white truncate max-w-[170px] sm:max-w-xs">
                              {chunk.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              {(chunk.baseSimilarity * 100).toFixed(1)}%
                            </span>
                            <span className="text-[10px] font-mono text-graphite-400 hidden sm:inline">
                              {chunk.tokens} toks
                            </span>
                          </div>
                        </div>

                        <p className="text-[11px] sm:text-xs text-graphite-300 font-mono leading-relaxed bg-black/40 p-2.5 rounded-lg border border-white/5 break-words">
                          "{chunk.content}"
                        </p>

                        <div className="flex flex-wrap items-center justify-between text-[10px] sm:text-[11px] text-graphite-500 mt-2 font-mono gap-1">
                          <span className="truncate max-w-[200px]">Source: {chunk.source}</span>
                          <div className="flex gap-1">
                            {chunk.tags.map(t => (
                              <span key={t} className="px-1.5 py-0.5 rounded bg-white/5 text-graphite-400 text-[10px]">
                                #{t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Assembled LLM Context Window Preview */}
                <div className="mt-4 sm:mt-6 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap items-center justify-between mb-2 gap-1">
                    <span className="text-[10px] sm:text-xs font-mono text-graphite-400 uppercase tracking-wider">
                      Assembled Context Preview (Prompt Injection)
                    </span>
                    <span className="text-[10px] sm:text-xs text-accent-blue font-mono font-medium">
                      Tokens: {passingChunks.reduce((acc, c) => acc + c.tokens, 0) + 35} / {chunkSize} Budget
                    </span>
                  </div>
                  <pre className="p-2.5 sm:p-3 rounded-xl bg-black/60 border border-white/10 text-[10px] sm:text-[11px] font-mono text-graphite-300 overflow-x-auto whitespace-pre-wrap break-words leading-relaxed max-h-48 sm:max-h-60">
{`SYSTEM: You are a factual assistant. Answer strictly using verified context:
${passingChunks.map((c, i) => `[Source ${i+1}: ${c.source}] ${c.content}`).join('\n')}

USER QUESTION: ${userQuery}
ASSISTANT: Based on verified context, `}
                    <span className="text-emerald-400 animate-pulse">
                      {passingChunks.length > 0 
                        ? (passingChunks[0].id === 'chk-1' 
                            ? 'Q3 compute costs increased 14.2% ($42,500 total) due to H100 continuous batching clusters.'
                            : 'the system executes with deterministic parameters according to the validated records.')
                        : '[No confident context retrieved to synthesize answer without hallucinating]'}
                    </span>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: AGENT WORKFLOW SIMULATOR */}
        {activeTab === 'agent' && (
          <div className="space-y-5 sm:space-y-6">
            {/* Top Toolbar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="w-full md:w-auto">
                <label className="text-[10px] sm:text-xs font-mono text-graphite-400 block mb-1">SELECT SCENARIO</label>
                <select
                  value={selectedScenarioIdx}
                  onChange={(e) => {
                    setSelectedScenarioIdx(parseInt(e.target.value));
                    setCurrentStepIdx(0);
                    setIsRunning(false);
                  }}
                  className="w-full md:w-auto bg-black/50 border border-white/15 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-accent-blue font-sans cursor-pointer"
                >
                  {agentScenarios.map((sc, i) => (
                    <option key={sc.id} value={i} className="bg-graphite-950">
                      Scenario {i + 1}: {sc.task.slice(0, 50)}...
                    </option>
                  ))}
                </select>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <button
                  onClick={handleRunAll}
                  disabled={isRunning || currentStepIdx === scenario.steps.length - 1}
                  className="flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-accent-blue hover:bg-accent-blue-hover text-white text-xs font-mono transition-all disabled:opacity-50 shrink-0 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isRunning ? 'Executing...' : 'Run Simulation'}</span>
                </button>

                <button
                  onClick={handleStepForward}
                  disabled={isRunning || currentStepIdx >= scenario.steps.length - 1}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 sm:py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-mono transition-all disabled:opacity-50 shrink-0 cursor-pointer"
                >
                  <span>Next Step</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleResetAgent}
                  className="p-2 sm:p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-graphite-400 hover:text-white transition-all shrink-0 cursor-pointer"
                  title="Reset state machine"
                  aria-label="Reset agent simulation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Stepper Progress Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {scenario.steps.map((st, idx) => {
                const isActive = idx === currentStepIdx;
                const isPassed = idx < currentStepIdx;
                return (
                  <div
                    key={st.stepNumber}
                    onClick={() => !isRunning && setCurrentStepIdx(idx)}
                    className={`p-2.5 sm:p-3 rounded-xl border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-accent-blue/15 border-accent-blue text-white shadow-sm'
                        : isPassed
                        ? 'bg-white/[0.03] border-emerald-500/30 text-graphite-300'
                        : 'bg-white/[0.01] border-white/5 text-graphite-500'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider">
                        STEP 0{st.stepNumber}
                      </span>
                      {isPassed && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                      {isActive && <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse shrink-0" />}
                    </div>
                    <div className="text-[11px] sm:text-xs font-semibold truncate font-mono">{st.phase}</div>
                  </div>
                );
              })}
            </div>

            {/* Active Step Detailed View */}
            {scenario.steps[currentStepIdx] && (
              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 sm:pb-4 border-b border-white/10">
                  <div>
                    <span className="text-[10px] sm:text-xs font-mono text-accent-blue uppercase tracking-wider">
                      PHASE {scenario.steps[currentStepIdx].stepNumber} OF {scenario.steps.length}: {scenario.steps[currentStepIdx].phase}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                      {scenario.steps[currentStepIdx].title}
                    </h3>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded-full bg-white/10 text-graphite-300 border border-white/10 w-fit shrink-0">
                    {scenario.steps[currentStepIdx].meta}
                  </span>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-graphite-200 leading-relaxed break-words">
                  {scenario.steps[currentStepIdx].detail}
                </div>

                {/* State Machine Transition Guarantees */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
                  <div className="p-3 rounded-lg bg-black/20 border border-white/5">
                    <span className="text-[9px] sm:text-[10px] font-mono text-graphite-400 block">SCHEMA VALIDATION</span>
                    <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> Pydantic v2 Strict Pass
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/20 border border-white/5">
                    <span className="text-[9px] sm:text-[10px] font-mono text-graphite-400 block">SECURITY BOUNDARY</span>
                    <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> CapDrop=ALL · No Network
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/20 border border-white/5">
                    <span className="text-[9px] sm:text-[10px] font-mono text-graphite-400 block">LOOP BOUND CEILING</span>
                    <span className="text-xs font-mono text-white font-semibold flex items-center gap-1.5 mt-0.5">
                      <Sparkles className="w-3.5 h-3.5 text-accent-blue shrink-0" /> Step {currentStepIdx + 1} / 6 Max
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: TOKEN & LATENCY ESTIMATOR */}
        {activeTab === 'tokens' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-4 sm:space-y-5">
                <h3 className="text-xs sm:text-sm font-semibold text-white tracking-wide uppercase font-mono pb-3 border-b border-white/10">
                  Payload Parameters
                </h3>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-graphite-400 text-[11px]">INPUT PROMPT TOKENS</span>
                    <span className="text-white font-semibold">{promptTokens.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="200"
                    max="16000"
                    step="200"
                    value={promptTokens}
                    onChange={(e) => setPromptTokens(parseInt(e.target.value))}
                    className="w-full accent-accent-blue bg-white/10 rounded-lg cursor-pointer h-2"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-graphite-500 mt-1">
                    <span>200 (Short)</span>
                    <span>16,000 (RAG)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-graphite-400 text-[11px]">OUTPUT COMPLETION TOKENS</span>
                    <span className="text-white font-semibold">{completionTokens.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="2000"
                    step="50"
                    value={completionTokens}
                    onChange={(e) => setCompletionTokens(parseInt(e.target.value))}
                    className="w-full accent-accent-blue bg-white/10 rounded-lg cursor-pointer h-2"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-graphite-500 mt-1">
                    <span>50 (Concise)</span>
                    <span>2,000 (Code)</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1.5 text-xs font-mono text-graphite-400">
                  <div className="flex justify-between">
                    <span>Total Session Tokens:</span>
                    <span className="text-white font-bold">{(promptTokens + completionTokens).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Context Utilized (128k):</span>
                    <span className="text-accent-blue font-bold">{(((promptTokens + completionTokens) / 128000) * 100).toFixed(2)}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3 sm:space-y-4">
                <h3 className="text-xs sm:text-sm font-semibold text-white tracking-wide uppercase font-mono pb-3 border-b border-white/10">
                  Model Cost & Latency Trade-Off Comparison
                </h3>

                <div className="space-y-3">
                  {/* Local Ollama */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-black/30 border border-emerald-500/20">
                    <div className="flex items-center justify-between mb-1.5 gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
                        <span className="text-xs sm:text-sm font-bold text-white font-mono">Local Ollama (Llama 3 8B)</span>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 font-semibold shrink-0">$0.00 (Self-Hosted)</span>
                    </div>
                    <p className="text-xs text-graphite-400 mb-2 leading-relaxed">Zero cloud API fees · Complete data privacy · Bound by host GPU VRAM</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-graphite-300">
                      <span>TTFT: ~95ms</span>
                      <span>Throughput: ~65 tok/s</span>
                      <span>Total Time: ~{((completionTokens / 65) + 0.1).toFixed(2)}s</span>
                    </div>
                  </div>

                  {/* Claude 3.5 Sonnet */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-black/30 border border-white/10">
                    <div className="flex items-center justify-between mb-1.5 gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-accent-blue shrink-0" />
                        <span className="text-xs sm:text-sm font-bold text-white font-mono">Claude 3.5 Sonnet</span>
                      </div>
                      <span className="text-xs font-mono text-white font-semibold shrink-0">
                        ${((promptTokens * 0.000003) + (completionTokens * 0.000015)).toFixed(4)}
                      </span>
                    </div>
                    <p className="text-xs text-graphite-400 mb-2 leading-relaxed">State-of-the-art coding and agent tool orchestration accuracy</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-graphite-300">
                      <span>TTFT: ~210ms</span>
                      <span>Throughput: ~75 tok/s</span>
                      <span>Total Time: ~{((completionTokens / 75) + 0.21).toFixed(2)}s</span>
                    </div>
                  </div>

                  {/* GPT-4o-mini */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-black/30 border border-white/10">
                    <div className="flex items-center justify-between mb-1.5 gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-400 shrink-0" />
                        <span className="text-xs sm:text-sm font-bold text-white font-mono">GPT-4o-mini</span>
                      </div>
                      <span className="text-xs font-mono text-white font-semibold shrink-0">
                        ${((promptTokens * 0.00000015) + (completionTokens * 0.0000006)).toFixed(4)}
                      </span>
                    </div>
                    <p className="text-xs text-graphite-400 mb-2 leading-relaxed">Cost-optimized routing for classification, routing, and fast summaries</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-graphite-300">
                      <span>TTFT: ~140ms</span>
                      <span>Throughput: ~110 tok/s</span>
                      <span>Total Time: ~{((completionTokens / 110) + 0.14).toFixed(2)}s</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
