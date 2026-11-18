export interface ArchitectureNode {
  id: string;
  label: string;
  role: string;
  stage: 'input' | 'processing' | 'storage' | 'output' | 'evaluation';
  latency: string;
  technologies: string[];
  description: string;
  payloadExample?: string;
  failureMode: string;
}

export interface ArchitectureDiagram {
  id: string;
  title: string;
  category: string;
  summary: string;
  tradeOff: string;
  nodes: ArchitectureNode[];
}

export const architectureData: ArchitectureDiagram[] = [
  {
    id: 'rag-pipeline',
    title: 'Enterprise Document Ingestion & Hybrid RAG Pipeline',
    category: 'Information Retrieval & AI Architecture',
    summary: 'A resilient, layout-aware pipeline designed for enterprise knowledge extraction. Bridges raw multi-format files into semantic vector spaces with reciprocal rank fusion and context-bounded synthesis.',
    tradeOff: 'Higher initial ingestion and chunking latency (AST parsing + semantic boundary detection) traded for drastically higher retrieval precision and elimination of hallucinated facts in downstream synthesis.',
    nodes: [
      {
        id: 'node-1',
        label: 'Multi-Format Ingestion',
        role: 'Document Ingress & Normalization',
        stage: 'input',
        latency: '~15-40ms',
        technologies: ['FastAPI', 'PyMuPDF', 'python-docx', 'openpyxl'],
        description: 'Receives PDFs, DOCX, and XLSX sheets via multi-part upload. Strips binary cruft, handles OCR for scanned pages, and normalizes into unified document stream.',
        payloadExample: '{\n  "doc_id": "doc_948f2a",\n  "file_type": "application/pdf",\n  "byte_size": 4194304,\n  "has_tables": true\n}',
        failureMode: 'Malformatted PDFs or password-protected archives triggered quarantine queue with sanitized user error notification.'
      },
      {
        id: 'node-2',
        label: 'Layout-Aware Chunking',
        role: 'Semantic Partitioning',
        stage: 'processing',
        latency: '~60-120ms',
        technologies: ['AST Parsing', 'Markdown Serializer', 'Token Boundary Rules'],
        description: 'Splits documents along natural structural boundaries (Markdown tables, H1-H3 sections) rather than arbitrary byte boundaries. Appends hierarchical breadcrumb metadata to every chunk.',
        payloadExample: '{\n  "chunk_id": "chk_01_p3",\n  "section": "Financial Disclosures > Q3 Assets",\n  "token_count": 384,\n  "parent_id": "doc_948f2a"\n}',
        failureMode: 'Overly dense tables fallback to row-by-row transposition with explicit column headers duplicated into each chunk.'
      },
      {
        id: 'node-3',
        label: 'Vector Embedding Generation',
        role: 'High-Dimensional Projection',
        stage: 'processing',
        latency: '~80-160ms',
        technologies: ['OpenAI text-embedding-3-small', 'Batch Embedding Worker'],
        description: 'Generates 1536-dimensional normalized vectors in batches of 64 chunks, minimizing API roundtrips and keeping per-document embedding times bounded.',
        payloadExample: '{\n  "vector_dim": 1536,\n  "norm_l2": 1.0,\n  "sample": [0.0142, -0.0381, 0.0829, "..."]\n}',
        failureMode: 'Provider rate-limiting handled with exponential backoff and jittered retry slots across a secondary embedding fallback model.'
      },
      {
        id: 'node-4',
        label: 'Hybrid Index & Storage',
        role: 'Dual Dense + Sparse Storage',
        stage: 'storage',
        latency: '~10-25ms',
        technologies: ['ChromaDB', 'PostgreSQL pgvector', 'BM25 Inverted Index'],
        description: 'Dual-indexes chunk payloads: dense HNSW vectors in vector memory, combined with sparse lexical BM25 token postings in PostgreSQL for precise acronym and serial number search.',
        payloadExample: '{\n  "index_type": "HNSW + GIN_BM25",\n  "m_param": 16,\n  "ef_construction": 64,\n  "chunks_indexed": 482\n}',
        failureMode: 'Index partition locks averted using read-replica routing for heavy concurrent semantic lookups.'
      },
      {
        id: 'node-5',
        label: 'Reciprocal Rank Fusion (RRF)',
        role: 'Hybrid Retrieval Arbiter',
        stage: 'evaluation',
        latency: '~12-28ms',
        technologies: ['Rank Aggregation', 'Cosine Similarity', 'BM25 Normalization'],
        description: 'Fuses dense vector semantic scores and sparse keyword ranks using RRF (k=60), guaranteeing that exact terminology hits bubble up alongside conceptually adjacent passages.',
        payloadExample: '{\n  "query": "Q3 EBITDA adjustment details",\n  "rrf_top_k": 5,\n  "confidence_score": 0.941\n}',
        failureMode: 'Low cosine confidence (< 0.68) triggers automatic query reformulation and query-expansion passes.'
      },
      {
        id: 'node-6',
        label: 'Context Assembly & Streaming',
        role: 'Token Streaming Synthesis',
        stage: 'output',
        latency: '~180ms TTFT',
        technologies: ['Server-Sent Events (SSE)', 'Prompt Budget Allocator', 'Claude / GPT-4o'],
        description: 'Packs top-ranked chunks with strict prompt token budget allocation, enforcing verbatim citations and streaming answer tokens back to user workspace in real time.',
        payloadExample: 'data: {"token": "Based", "source": "chk_01_p3", "page": 3}\ndata: {"token": " on", "source": "chk_01_p3"}',
        failureMode: 'Context overflow dynamically prunes lower-ranked chunks while retaining root document metadata references.'
      }
    ]
  },
  {
    id: 'agent-state-machine',
    title: 'Deterministic Autonomous Agent State Machine (Shogo Engine)',
    category: 'Agent Orchestration & Tool Execution',
    summary: 'A resilient state machine controlling autonomous agent loops. Replaces free-wheeling LLM generation with strict state transitions, validated tool invocation contracts, and self-correcting loops.',
    tradeOff: 'Strict schema bounds limit unprompted agent improvisation in exchange for zero runaway infinite loops, deterministic cost budgets, and verifiable enterprise safety.',
    nodes: [
      {
        id: 'agent-1',
        label: 'Event Intercept & Ack',
        role: 'Slack Ingress Gateway',
        stage: 'input',
        latency: '~18ms',
        technologies: ['Slack Bolt API', 'FastAPI', 'Redis Queue'],
        description: 'Intercepts incoming Slack @mentions or command messages. Verifies request signatures, queues the payload into Redis, and immediately returns HTTP 200 within Slack 3s SLA.',
        payloadExample: '{\n  "event_id": "Ev08A91KL",\n  "user": "U984812",\n  "text": "@shogo check why pod-4 is crashing",\n  "channel": "C0321"\n}',
        failureMode: 'Redis queue failover instantly writes to durable PostgreSQL backup queue if broker heartbeat degrades.'
      },
      {
        id: 'agent-2',
        label: 'Intent Classification & Plan',
        role: 'State Machine Initializer',
        stage: 'processing',
        latency: '~220ms',
        technologies: ['Pydantic', 'Structured Outputs', 'Tool Catalog Registry'],
        description: 'Deconstructs request into an actionable Directed Acyclic Graph (DAG) of tool operations. Restricts available tool scope to the user permissions and current channel.',
        payloadExample: '{\n  "plan": [\n    {"step": 1, "tool": "fetch_pod_logs", "args": {"pod": "pod-4"}},\n    {"step": 2, "tool": "parse_stacktrace"}\n  ],\n  "max_steps": 4\n}',
        failureMode: 'Ambiguous requests trigger an interactive Slack block confirmation rather than speculative tool execution.'
      },
      {
        id: 'agent-3',
        label: 'Sandboxed Tool Execution',
        role: 'Isolated Runtime Worker',
        stage: 'storage',
        latency: '~140-600ms',
        technologies: ['Docker Container', 'Non-Root Runner', 'cgroups limit', 'Read-only FS'],
        description: 'Executes planned tool calls (API queries, repository git diffs, script evaluation) inside isolated ephemeral environments with strict memory and CPU throttling.',
        payloadExample: '{\n  "tool": "fetch_pod_logs",\n  "status": "success",\n  "exit_code": 0,\n  "output_tokens": 128,\n  "raw_bytes": 10240\n}',
        failureMode: 'Timeouts (hard cap at 8s) immediately terminate container and feed execution timeout exception back to reflection agent.'
      },
      {
        id: 'agent-4',
        label: 'Reflection & Verification Loop',
        role: 'Critique & Error Correction',
        stage: 'evaluation',
        latency: '~180ms',
        technologies: ['Verification Prompt', 'Schema Validator', 'Step Counter'],
        description: 'Inspects tool execution outputs against the expected goal. If an error is returned, triggers an automatic plan self-correction up to a hard ceiling of 3 iterative cycles.',
        payloadExample: '{\n  "verdict": "continue",\n  "error_observed": null,\n  "cycle": 1,\n  "budget_remaining": 2\n}',
        failureMode: 'Exhausted iteration budget halts agent safely and generates a transparent retrospective explaining why the goal could not be completed.'
      },
      {
        id: 'agent-5',
        label: 'Slack Block Thread Synthesis',
        role: 'Formatted Output Streaming',
        stage: 'output',
        latency: '~45ms',
        technologies: ['Slack Block Kit', 'Markdown Formatter', 'Thread API'],
        description: 'Publishes final synthesized solution into the active Slack thread using formatted interactive blocks, syntax-highlighted code diffs, and execution metric footers.',
        payloadExample: '{\n  "blocks": [\n    {"type": "header", "text": "Incident Diagnostic: pod-4"},\n    {"type": "section", "text": "Root cause: OOMKilled at memory 512MB"}\n  ]\n}',
        failureMode: 'Rate limit on Slack Web API queues thread updates with exponential backoff.'
      }
    ]
  }
];
