export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  type: string;
  overview: string;
  bulletPoints: string[];
  skills: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: 'getodin',
    company: 'GetOdin',
    role: 'Software Development Engineer I (SDE-1)',
    location: 'Remote / India',
    period: 'Nov 2025 — Present',
    current: true,
    type: 'Full-time',
    overview: 'Contributing to core platform development across AI-powered chat, file uploads, document handling, and product workflows for enterprise knowledge systems.',
    bulletPoints: [
      'Contribute to core platform development across AI-powered chat, file uploads, document handling, and product workflows.',
      'Improve Smart Table and Excel export functionality, and contribute to the Python sandbox and frontend tooling.',
      'Build workflow and project capabilities including variables, templates, navigation, and undo support.',
      'Improve Confluence ingestion reliability by validating parent-child relationships in nested content, retrying inconsistent responses, and preventing incorrect folder hierarchies from entering the knowledge base.',
      'Debug production issues involving multi-page PDF loading, chat stability, and integrations such as Vapi voice agents.'
    ],
    skills: ['Python', 'FastAPI', 'React', 'TypeScript', 'Smart Table', 'Python Sandbox', 'Confluence Ingestion', 'Vapi Voice Agents', 'Excel Export']
  },
  {
    id: 'agilemorph',
    company: 'Agilemorph Solutions Pvt. Ltd.',
    role: 'Full Stack Developer',
    location: 'Pune / Nagpur, India',
    period: 'Jan 2024 — Oct 2025',
    current: false,
    type: 'Full-time',
    overview: 'Built and maintained full-stack applications and backend services using Python, FastAPI, React, and related technologies.',
    bulletPoints: [
      'Built and maintained full-stack applications and backend services using Python, FastAPI, React, and related technologies.',
      'Developed an AI interviewer with FastAPI, React, Ollama, and OpenAI to support interview workflows.',
      'Built a context-aware Twitter bot using FastAPI and OpenAI.',
      'Led development of manufacturing management software designed for real-time data processing.',
      'Contributed to application performance and security, Docker-based environments, AWS workflows, and CI/CD using Git and GitHub.',
      'Delivered client platforms and business automations by connecting services through APIs, n8n, and Make.com.'
    ],
    skills: ['Python', 'FastAPI', 'React', 'Ollama', 'OpenAI API', 'Twitter Bot', 'Docker', 'AWS', 'n8n', 'Make.com', 'CI/CD']
  },
  {
    id: 'webtech',
    company: 'Webtech Developers Pvt. Ltd.',
    role: 'Associate Software Developer',
    location: 'Pune, India',
    period: 'Feb 2023 — Dec 2023',
    current: false,
    type: 'Full-time',
    overview: 'Developed and enhanced web applications using Django and React, focusing on payment gateways and high-reliability full-stack systems.',
    bulletPoints: [
      'Developed and enhanced web applications using Django and React.',
      'Integrated payment gateways for dev.deskshare.com to support online transactions.',
      'Built a new application from the ground up using Django REST Framework and React.',
      'Contributed to application speed, security, reliability, and maintainable implementation.'
    ],
    skills: ['Django', 'Django REST Framework', 'React', 'JavaScript', 'Payment Gateways', 'MySQL', 'dev.deskshare.com']
  }
];

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  details: string[];
}

export const educationData: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    field: 'Computer Science & Engineering Applications',
    institution: 'Shri Ramdeobaba College of Engineering and Management',
    location: 'Nagpur, Maharashtra',
    period: 'Nov 2021 — Nov 2023',
    grade: 'CGPA: 9.2 / 10',
    details: [
      'Graduated with 9.2/10 CGPA. Rigorous coursework covering advanced algorithms, distributed databases, web architectures, and system engineering.',
      'Served as Student Representative Council Vice President, led campus technical initiatives and magazine editorial board.'
    ]
  },
  {
    degree: 'Bachelor of Commerce in Computer Applications (BCCA)',
    field: 'Computer Applications & Information Systems',
    institution: 'G. H. Raisoni College of Commerce and Management',
    location: 'Nagpur, Maharashtra',
    period: 'Jul 2018 — Aug 2021',
    grade: 'CGPA: 8.2 / 10',
    details: [
      'Graduated with 8.2/10 CGPA. Core foundations in software development (C++, Java, Web technologies, relational databases) combined with commercial and business systems intuition.'
    ]
  }
];

export const languagesData = [
  { language: 'English', proficiency: 'Professional Working Proficiency' },
  { language: 'Hindi', proficiency: 'Native / Full Professional' },
  { language: 'Marathi', proficiency: 'Native / Full Professional' }
];
