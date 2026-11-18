export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'AI & Agents' | 'Full Stack' | 'Backend & Enterprise' | 'Automation';
  technologies: string[];
  summary: string;
  bulletPoints: string[];
  links: {
    live?: string;
    github?: string;
  };
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: 'shogo',
    title: 'Shogo — Slack-Based AI Agent Collaboration',
    tagline: 'Slack · AI agents · Pull request review workflows',
    category: 'AI & Agents',
    technologies: ['Slack', 'AI Agents', 'Python', 'FastAPI', 'Pull Request Workflows', 'Redis'],
    summary: 'Contributed to Shogo, a Slack-based communication experience where users can collaborate with AI agents directly from team conversations. The product supports agent-assisted engineering workflows, including pull request reviews and related development tasks.',
    bulletPoints: [
      'Engineered Slack-based communication workflows enabling seamless collaboration with AI agents in team channels.',
      'Supported agent-assisted engineering workflows, including automated pull request reviews and developer task orchestration.',
      'Implemented resilient webhook handling and asynchronous thread updates to handle multi-step agent reasoning.'
    ],
    links: {
      github: 'https://github.com/RohitSingh555',
    },
    featured: true,
  },
  {
    id: 'getodin',
    title: 'GetOdin — AI-Powered Product Platform',
    tagline: 'AI chat · Python tooling · Document workflows · Confluence ingestion',
    category: 'AI & Agents',
    technologies: ['FastAPI', 'Python', 'React', 'TypeScript', 'Smart Table', 'Python Sandbox', 'Confluence Ingestion', 'Vapi'],
    summary: 'Contributed to core platform features spanning AI chat and file workflows, Smart Table and Excel export, Python sandbox tooling, and project/workflow functionality. Also worked on production reliability across document handling, integrations, and Confluence content ingestion.',
    bulletPoints: [
      'Contributed to core platform development across AI-powered chat, file uploads, document handling, and product workflows.',
      'Improved Smart Table and Excel export functionality, and contributed to the Python sandbox and frontend tooling.',
      'Built workflow and project capabilities including variables, templates, navigation, and undo support.',
      'Improved Confluence ingestion reliability by validating parent-child relationships in nested content, retrying inconsistent responses, and preventing incorrect folder hierarchies from entering the knowledge base.',
      'Debugged production issues involving multi-page PDF loading, chat stability, and integrations such as Vapi voice agents.'
    ],
    links: {
      live: 'https://getodin.ai',
    },
    featured: true,
  },
  {
    id: 'ai-interviewer',
    title: 'AI Interviewer',
    tagline: 'FastAPI · React · Ollama · OpenAI',
    category: 'AI & Agents',
    technologies: ['FastAPI', 'React', 'Ollama', 'OpenAI', 'TypeScript', 'WebSockets'],
    summary: 'Built an AI-assisted interview workflow combining a web interface, backend services, and LLM integrations to support interview-style interactions with local (Ollama) and cloud model support.',
    bulletPoints: [
      'Engineered an interactive web interface paired with robust FastAPI backend services to conduct automated technical interviews.',
      'Integrated dual-inference architecture supporting cloud OpenAI API and local Ollama models for flexible and private execution.',
      'Implemented real-time question generation, code snippet evaluation, and structured candidate assessment summaries.'
    ],
    links: {
      github: 'https://github.com/RohitSingh555',
    },
    featured: true,
  },
  {
    id: 'ai-book-recommender',
    title: 'AI Book Recommender',
    tagline: 'ChromaDB · OpenAI · Vector Retrieval',
    category: 'AI & Agents',
    technologies: ['ChromaDB', 'OpenAI', 'Python', 'Vector Search', 'Embeddings', 'React'],
    summary: 'Built a book recommendation experience using ChromaDB and OpenAI, applying vector-based retrieval to connect users with relevant books based on semantic theme, tone, and prose characteristics.',
    bulletPoints: [
      'Applied vector embeddings using OpenAI to capture semantic essence, mood, and plot themes across literary corpora.',
      'Configured ChromaDB vector store for sub-second similarity searches against natural language reader queries.',
      'Created an intuitive frontend interface allowing users to explore conceptual book recommendations beyond rigid genre keywords.'
    ],
    links: {
      github: 'https://github.com/RohitSingh555',
    },
    featured: false,
  },
  {
    id: 'enterprise-hr-system',
    title: 'Enterprise HR & Product System',
    tagline: 'NestJS · React · Business Workflows',
    category: 'Backend & Enterprise',
    technologies: ['NestJS', 'React', 'TypeScript', 'PostgreSQL', 'REST APIs', 'Docker'],
    summary: 'Developed HR and product workflow functionality using NestJS and React, supporting business operations through a full-stack application with modular microservices and role-based permissions.',
    bulletPoints: [
      'Built modular backend services in NestJS with dependency injection and repository architecture.',
      'Implemented role-based permissions, transactional data isolation, and employee workflow tracking.',
      'Designed responsive React interfaces for internal operational dashboards and HR management.'
    ],
    links: {
      github: 'https://github.com/RohitSingh555',
    },
    featured: false,
  },
  {
    id: 'emr-quizsecure',
    title: 'EMR & QuizSecure',
    tagline: 'FastAPI · Web application development · Healthcare & Assessment',
    category: 'Full Stack',
    technologies: ['FastAPI', 'Django', 'React', 'MySQL', 'Anti-Tamper Monitoring', 'REST APIs'],
    summary: 'Contributed to a doctor-focused electronic medical record (EMR) system with billing and AI-related features, as well as a secure proctored quiz platform (QuizSecure) with live analytics.',
    bulletPoints: [
      'Contributed to a doctor-focused EMR platform with patient billing, appointment workflows, and clinical assistance features.',
      'Built QuizSecure: an online examination platform with Django REST Framework, React, student session tracking, and secure proctoring.',
      'Engineered secure, performant database interactions in MySQL and hardened REST API endpoints.'
    ],
    links: {
      live: 'https://quizsecure.com/',
    },
    featured: false,
  },
  {
    id: 'client-platforms-automation',
    title: 'Client Platforms & Workflow Automation',
    tagline: 'Full-stack development · n8n · Make.com · API integrations',
    category: 'Automation',
    technologies: ['n8n', 'Make.com', 'Python', 'FastAPI', 'Celery', 'API Integrations', 'React'],
    summary: 'Built client-facing platforms and connected business applications through APIs, custom application logic, and workflow automation to reduce manual steps and streamline operations.',
    bulletPoints: [
      'Engineered automated multi-app pipelines connecting customer databases, CRMs, and messaging services using n8n and Make.com.',
      'Developed custom Python/FastAPI integration middleware with webhook listeners and Celery background workers.',
      'Eliminated manual data entry and recurring operational bottlenecks for client platforms.'
    ],
    links: {
      github: 'https://github.com/RohitSingh555',
    },
    featured: false,
  }
];
