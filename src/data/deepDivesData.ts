export interface DeepDive {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  readTime: string;
  tags: string[];
  problem: string;
  whyDifficult: string;
  approach: string;
  architectureBreakdown: {
    title: string;
    description: string;
  }[];
  tradeOffs: string[];
  lessonsLearned: string[];
}

export const deepDivesData: DeepDive[] = [
  {
    id: 'deep-dive-rag',
    number: '01',
    title: 'Building Resilient Document Chunking for Multi-Modal RAG',
    subtitle: 'Preserving Table Topology, Header Ancestry, and Semantic Continuity Across Enterprise PDFs',
    readTime: '6 min read',
    tags: ['RAG', 'Vector Search', 'Chunking Strategies', 'FastAPI', 'Python'],
    problem: 'Standard fixed-token chunking (e.g. 500 tokens with 50-token overlap) arbitrarily fractures structured tables, decapitates column headers from their data rows, and severs contextual continuity between subsections. When querying financial reports or clinical documents, this causes catastrophic hallucination because numerical values become separated from their measuring units.',
    whyDifficult: 'Enterprise documents rarely follow clean Markdown syntax. They arrive as scanned PDFs with nested tables, multi-column layouts, footnotes, and erratic visual hierarchies. Naive text extraction destroys positional geometry, converting a 2D table into a scrambled 1D string of numbers without semantic labels.',
    approach: 'I engineered an AST-based (Abstract Syntax Tree) layout-aware parser that detects table borders, reconstructs tabular records as valid Markdown matrices, and prepends hierarchical ancestry headers (e.g., "[Document > Section 3 > Operational Expenses > Q3]") to every generated chunk before embedding.',
    architectureBreakdown: [
      {
        title: 'Document Normalization Layer',
        description: 'Files are converted into intermediate AST nodes representing Paragraphs, Tables, Section Headers, and Code Blocks, preserving bounding-box coordinates for spatial validation.'
      },
      {
        title: 'Table Reconstruction Pipeline',
        description: 'Multi-row table cells are analyzed for spanning geometry. Rather than chopping tables by token count, tables are serialized into self-contained Markdown blocks with full header rows preserved in every sub-slice.'
      },
      {
        title: 'Breadcrumb Context Enrichment',
        description: 'Every chunk inherits a lightweight metadata payload indicating parent H1/H2 titles, page number, and surrounding paragraph references, ensuring dense embedding models recognize the thematic scope.'
      },
      {
        title: 'Hybrid Rank Fusion (RRF)',
        description: 'Dense vector embeddings (OpenAI text-embedding-3-small) are retrieved alongside BM25 keyword rankings, merging semantic intent with exact numerical/alphanumeric code matching.'
      }
    ],
    tradeOffs: [
      'Ingestion Throughput vs Retrieval Precision: Processing documents through AST reconstruction increases initial ingestion time by ~120ms per page, but reduces downstream hallucination in synthesis from 18% to under 2%.',
      'Context Token Budget vs Chunk Granularity: Smaller chunks (250 tokens) offer surgical retrieval, but require higher top-k limits and careful prompt budget management during final synthesis.'
    ],
    lessonsLearned: [
      'Metadata injection at chunk time yields vastly higher similarity scores than trying to repair disconnected chunks post-retrieval.',
      'Always implement a fallback lexical search (BM25 or Trigram matching) for documents containing serial codes, currency symbols, and alphanumeric SKU identifiers.'
    ]
  },
  {
    id: 'deep-dive-agents',
    number: '02',
    title: 'Deterministic State Machines for Autonomous Agent Loops',
    subtitle: 'Constraining LLM Improvisation with Formal Finite State Automata and Pydantic Schemas',
    readTime: '7 min read',
    tags: ['AI Agents', 'State Machines', 'Tool Calling', 'Reliability', 'System Design'],
    problem: 'Autonomous agent loops built on loose prompt chaining frequently suffer from non-deterministic failures: circular infinite loops, hallucinated tool parameter signatures, speculative action cascading, and unpredictable token consumption that runs up massive API bills.',
    whyDifficult: 'LLMs are inherently probabilistic. If an agent receives an unexpected tool error message (e.g., database connection timeout), its instinctive continuation is often to guess alternative parameters or retry the identical invalid command repeatedly rather than stepping back to diagnose the root cause.',
    approach: 'I designed a deterministic Finite State Automaton (FSA) where the agent can only transition between explicitly codified states: IDLE -> PARSE_INTENT -> PLAN_DAG -> EXECUTE_TOOL -> REFLECT_EVALUATE -> SYNTHESIZE. Tool inputs and outputs are validated strictly by Pydantic models at runtime, blocking invalid calls before they hit infrastructure.',
    architectureBreakdown: [
      {
        title: 'State Transition Engine',
        description: 'Transitions are governed by deterministic guard conditions rather than LLM free choice. If state invariants fail, the machine transitions to a designated FALLBACK or HUMAN_ESCALATION state.'
      },
      {
        title: 'Strict Tool Contract Enforcement',
        description: 'All agent tools publish JSON Schemas derived directly from Pydantic types. Any deviation in argument types triggers an immediate client-side validation error without executing backend code.'
      },
      {
        title: 'Iterative Budget Ceiling',
        description: 'Each execution session is bounded by an immutable cycle counter and token spend ceiling. If the reflection state registers 3 failed attempts, it initiates a transparent rollback and summarizes the blocking obstacle.'
      },
      {
        title: 'Audit & Replay Logging',
        description: 'Every state change, tool payload, and raw model thought is appended to an append-only JSON event stream, allowing engineers to replay any failed agent session deterministically.'
      }
    ],
    tradeOffs: [
      'Autonomy vs Predictability: The agent cannot invent novel tool combinations outside its registered schema, but this trade-off is essential for enterprise security and stability.',
      'Execution Latency: Validating schemas and logging state transitions adds ~15ms of overhead per cycle, negligible compared to 1500ms LLM inference times.'
    ],
    lessonsLearned: [
      'Never allow an LLM to generate unstructured shell or raw SQL commands without strict AST validation and parameter binding.',
      'Providing the agent with concise, structured error messages ("Field \'start_date\' must be ISO 8601 YYYY-MM-DD") allows it to self-correct in the first reflection loop 91% of the time.'
    ]
  },
  {
    id: 'deep-dive-sandbox',
    number: '03',
    title: 'Hardening Ephemeral Python Sandboxes for Ad-Hoc Analysis',
    subtitle: 'Executing Untrusted User Code at Sub-Second Latency with Micro-Containers and Cgroups',
    readTime: '5 min read',
    tags: ['Security', 'Docker', 'Linux Sandboxing', 'Python', 'FastAPI'],
    problem: 'Enterprise AI platforms like GetOdin require allowing users and agents to execute ad-hoc Python code to analyze CSV data, compute statistics, and render visualizations. Running arbitrary Python code on server infrastructure introduces grave security hazards: host escape, resource exhaustion, fork bombs, and unauthorized network exfiltration.',
    whyDifficult: 'Traditional container spins take 1-3 seconds, which ruins the snappy, real-time feel of conversational AI. Furthermore, simply restricting Python imports via AST filtering is notoriously insecure, as malicious actors can exploit Python introspection (`__subclasses__`, `os.system`) to bypass superficial regex or syntax checks.',
    approach: 'I implemented an OS-level defense-in-depth isolation runtime. Untrusted code executes inside ephemeral micro-containers pre-warmed in a standby pool, stripped of all Linux capabilities (`--cap-drop=ALL`), mapped to an unprivileged non-root user, locked to a read-only root filesystem, isolated with zero network egress, and bounded by strict cgroup CPU and memory ceilings.',
    architectureBreakdown: [
      {
        title: 'Pre-Warmed Worker Pool',
        description: 'Maintains a dynamic pool of 3-5 standby containers ready to accept execution payloads via Unix domain sockets, slashing execution startup latency down to under 80ms.'
      },
      {
        title: 'Kernel-Level Boundary Restrictions',
        description: 'Enforces seccomp profiles blocking dangerous system calls, completely drops networking (`--net=none`), and mounts temporary in-memory tmpfs filesystems that are wiped immediately on container teardown.'
      },
      {
        title: 'Strict Cgroup Quotas',
        description: 'Caps memory allocation at 256MB and CPU time at 1.0 core with a hard timeout of 5 seconds, instantly neutralizing infinite loops and memory leak attacks.'
      },
      {
        title: 'Artifact Sanitization',
        description: 'Generated plots and data tables are serialized inside the container into PNG base64 strings and JSON objects before extraction, preventing file-system contamination.'
      }
    ],
    tradeOffs: [
      'Package Ecosystem Scope vs Security: Users cannot dynamically run `pip install` inside the sandbox due to disabled outbound networking; all permitted scientific packages (Pandas, NumPy, Matplotlib, SciPy) must be pre-baked into the image.',
      'Idle Memory Consumption: Maintaining warm container pools consumes baseline server memory, managed with an adaptive pool autoscaler.'
    ],
    lessonsLearned: [
      'Never rely on Python-level guards (`restrictedpython`, AST sanitizers) for security boundaries. Kernel-level namespace and seccomp isolation is the only reliable defense.',
      'Pre-warming worker instances is the single most effective optimization for user satisfaction in interactive data platforms.'
    ]
  }
];
