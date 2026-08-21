export const profile = {
  name: 'Arefin Emon',
  role: 'Backend Developer',
  location: 'Dhaka, Bangladesh',
  email: 'arefinemon308@gmail.com',
  github: 'https://github.com/ArefinEmon860',
  linkedin: 'https://www.linkedin.com/in/arefin-emon-7285a4373/',
  resumeUrl: 'https://drive.google.com/file/d/1tzb9MfTHhLgATQW6Y-oz3boG-S2ofIPb/view?usp=sharing',
  availability: 'Open to backend roles',
  tagline: 'Building backend systems that scale.',
  summary:
    "I design and build backend systems — REST APIs, authentication flows, and database-driven services that hold up in production, not just in a demo.",
}

export const about = {
  philosophy:
    "Good backend work is invisible. It means an API that responds in milliseconds under load, an auth flow with no soft spots, and a schema that still makes sense a year later. I care more about that than about being clever.",
  specialties: [
    'REST API design & versioning',
    'Authentication & role-based access',
    'Database schema design (MongoDB & PostgreSQL)',
    'Caching & performance tuning with Redis',
  ],
  stats: [
    // { label: 'Database Schemas Designed', value: 25, suffix: '+' },
    { label: 'Projects Shipped', value: 12, suffix: '+' },
    { label: 'Years Writing Backend Code', value: 1, suffix: '+' },
    { label: 'Core Technologies', value: 10, suffix: '+' },
  ],
}

export const skillGroups = [
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js', level: 'Daily driver', note: 'Runtime for every API and service I ship.' },
      { name: 'Express.js', level: 'Daily driver', note: 'Primary framework for routing, middleware & controllers.' },
      { name: 'REST API', level: 'Advanced', note: 'Resource design, versioning, pagination, filtering.' },
      { name: 'JWT', level: 'Advanced', note: 'Access/refresh token flows, role-based guards.' },
      { name: 'Mongoose', level: 'Advanced', note: 'Schema design, validation, hooks, aggregation pipelines.' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    skills: [
      { name: 'MongoDB', level: 'Advanced', note: 'Document modeling for marketplace & content-heavy apps.' },
      // { name: 'PostgreSQL', level: 'Working knowledge', note: 'Relational schema design & query optimization.' },
      // { name: 'Redis', level: 'Working knowledge', note: 'Caching hot reads, rate limiting, session storage.' },
    ],
  },
  // {
  //   id: 'devops',
  //   label: 'DevOps',
  //   skills: [
  //     { name: 'Docker', level: 'Working knowledge', note: 'Containerizing services for consistent environments.' },
  //     { name: 'Linux', level: 'Advanced', note: 'Server administration & deployment workflows.' },
  //     { name: 'CI/CD', level: 'Working knowledge', note: 'Automated build & deploy pipelines.' },
  //     { name: 'Cloud Deployment', level: 'Working knowledge', note: 'Shipping Node services to production hosts.' },
  // },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React', level: 'Working knowledge', note: 'Building the UIs that consume my own APIs.' },
      { name: 'Next.js', level: 'Working knowledge', note: 'App Router, SSR, full-stack projects.' },
      { name: 'JavaScript', level: 'Advanced', note: 'The language underneath everything I build.' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: [
      { name: 'Git & GitHub', level: 'Daily driver', note: 'Branching, PR review, release workflows.' },
      { name: 'Postman', level: 'Daily driver', note: 'API design docs, collections, contract testing.' },
      { name: 'VS Code', level: 'Daily driver', note: 'Primary editor, tuned with a backend-focused setup.' },
    ],
  },
]

export const experience = [
  {
    company: 'Scaleup IT Ltd',
    role: 'Backend Developer',
    duration: 'Aug 2025 — Present',
    description:
      'Own backend services end-to-end — from schema design to deployment — for a production application.',
    responsibilities: [
      'Developed scalable RESTful APIs using Node.js, Express.js, and MongoDB/Mongoose for user management and core business workflows.',
      'Implemented secure JWT-based authentication and authorization, along with request validation and centralized error handling.',
      'Integrated third-party APIs and external services to extend application functionality and improve backend capabilities.',
      'Tested, debugged, and optimized APIs using Postman, ensuring reliable and consistent API performance.',
      'Collaborated with frontend developers to deliver complete features and used Git/GitHub for version control and team-based development.',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Postman', 'Git/GitHub'],
    achievement: '[e.g. Reduced average API response time by rebuilding a key query path]',
  },
  {
    company: 'Startedge',
    role: 'Backend Developer',
    duration: 'Feb 2025 — June 2025',
    description: 'Built backend services and APIs supporting core product features.',
    responsibilities: [
      'Developed and maintained RESTful APIs using Node.js and Express.js',
      'Created and updated MongoDB schemas using Mongoose',
      'Implemented API validation and error handling',
      'Worked on authentication and authorization features',
      'Tested and documented APIs using Postman',
      'Debugged backend issues and resolved API-related bugs',
      'Collaborated with frontend developers to integrate backend APIs',
      'Used Git and GitHub for version control and team collaboration',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    achievement: '[e.g. Delivered the full backend for a new product module ahead of schedule]',
  },
]

export const projects = [
  {
  name: 'Kennygee — Restaurant Discovery & Marketplace API',
  description:
    'A location-based restaurant discovery platform backend — connecting diners with restaurants through geolocation search, menus, events, and an AI-powered assistant.',
  problem:
    'Restaurant owners needed a single platform to list their shop, manage menus and events, accept payouts, and track engagement — while diners needed geolocation-based discovery, reviews, and an AI assistant to help them decide where to eat.',
  features: [
    'Geolocation-based restaurant search with GeoJSON coordinates',
    'Menu, event, and review management per shop',
    'Wishlist, bookmarks, and click-through direction tracking',
    'Gemini-powered AI chat assistant for restaurant recommendations',
    'Stripe Connect onboarding for restaurant owner payouts',
    'Tiered subscription plans (Basic Promotion, Growth Plan, City Spotlight) for restaurant promotion',
    'Owner-facing analytics dashboard (views, reviews, wishlist trends)',
    'Cloudinary-backed image uploads for shops, menus, and events',
  ],
  tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Stripe', 'Cloudinary', 'Gemini AI', 'JWT'],
  github: 'https://github.com/ArefinEmon860/backendkennygee',
  architecture:
    'Client → Express routes → Middleware (auth, multer) → Controllers → Services (Stripe Connect, Gemini AI, Cloudinary) → Mongoose models → MongoDB, with a dedicated analytics aggregation layer for restaurant owners.',
},
  {
  name: 'KoraAI — Barbershop & Service Business Management SaaS',
  description:
    'A multi-role SaaS backend for barbershop and service businesses — combining appointment scheduling, employee management, a sales-partner CRM, and a Gemini-powered AI assistant.',
  problem:
    'Barbershop and service-business owners needed one platform to run daily operations (appointments, staff, payroll requests) while sales partners needed a CRM to track leads, close deals, and earn commission — all with an AI assistant that understands each user\'s role.',
  features: [
    'Role-based system for business owners, employees, sales partners, and admins',
    'Appointment scheduling with free-slot and calendar management',
    'Sales CRM: leads, deals, customers, and commission-based earnings tracking',
    'Employee management with attendance, leave requests, and approvals',
    'Gemini-powered "Kora" AI assistant with role-aware, live-data context',
    'Built-in mail/inbox system with Gmail & Outlook OAuth integration',
    'Subscription plans and platform-wide admin settings',
    'Real-time notifications and chat via Socket.IO',
  ],
  tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Socket.IO', 'Gemini AI', 'Stripe', 'JWT'],
  github: 'https://github.com/ArefinEmon860/backendKoraAi',
  architecture:
    'Client → Express routes → Middleware (auth, multer) → Controllers → Services (Gemini AI, Gmail/Outlook OAuth, Stripe) → Mongoose models → MongoDB, with a role-aware context layer feeding the AI assistant.',
},
 {
  name: 'Lumora — Mindfulness & Meditation App Backend',
  description:
    'The complete backend for a mindfulness and meditation app built for women — guided sessions, daily journaling, and a supportive community, built from scratch to match an existing design system.',
  problem:
    'The app needed a backend that could serve structured meditation content, track a user\'s daily mindfulness journey, and support a reflective community — all matching an already-designed Figma product.',
  features: [
    'Guided meditation library with duration, frequency, and step-by-step process',
    'Daily journal system — one document per user per day, powering Home/Journey screens',
    'Daily "Reflection" quotes and curated inspiration content',
    'Community subscriber and announcement system',
    'Learn section for educational mindfulness content',
    'Account deletion flow with proper data-retention handling',
    'Full REST API mapped 1:1 to Figma screens, with Postman collection',
  ],
  tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT'],
  github: 'https://github.com/ArefinEmon860/backend-saintgermain',
  architecture:
    'Client → Express routes → Controllers → Mongoose models → MongoDB, with a dateKey-based journal model designed for fast daily-journey lookups.',
},
]

export const services = [
  { title: 'REST API Development', description: 'Designing and building clean, versioned REST APIs.' },
  { title: 'Backend Development', description: 'End-to-end backend services with Node.js and Express.' },
  { title: 'Database Design', description: 'Schema design for MongoDB and PostgreSQL that scales.' },
  { title: 'Authentication & Authorization', description: 'JWT-based auth with role-based access control.' },
  { title: 'Third-Party API Integration', description: 'Payments, email, storage and other external services.' },
  { title: 'Performance Optimization', description: 'Query tuning, caching, and response-time improvements.' },
  { title: 'Backend Deployment', description: 'Getting your service reliably into production.' },
  { title: 'API Maintenance', description: 'Fixing bugs and extending existing backend codebases.' },
]

export const architectureLayers = [
  { name: 'Client', detail: 'Web / mobile app' },
  { name: 'API Gateway', detail: 'Routing & rate limiting' },
  { name: 'Express.js', detail: 'Route handlers' },
  { name: 'Middleware', detail: 'Auth · validation · logging' },
  { name: 'Controllers', detail: 'Request orchestration' },
  { name: 'Services', detail: 'Business logic' },
  { name: 'MongoDB', detail: 'Persistence layer' },
]

export const socials = {
  github: 'https://github.com/ArefinEmon860',
  linkedin: 'https://www.linkedin.com/in/arefin-emon-7285a4373/',
  email: 'arefinemon308@gmail.com',
}
