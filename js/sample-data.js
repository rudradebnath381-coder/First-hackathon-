/* ==========================================================================
   PRESET SAMPLE PROFILES DATA (js/sample-data.js)
   ========================================================================== */

const SAMPLE_PROFILES = {
  developer: {
    personal: {
      fullName: "Alex Rivera",
      jobTitle: "Senior Full-Stack Engineer",
      email: "alex.rivera@example.com",
      phone: "+1 (555) 234-5678",
      location: "San Francisco, CA",
      website: "https://alexrivera.dev",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      summary: "Passionate Full-Stack Developer with 6+ years of experience crafting high-scalability web applications using React, Node.js, and Cloud Infrastructure. Dedicated to clean architecture, developer experience, and modern responsive design."
    },
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      portfolio: "https://alexrivera.dev"
    },
    skills: [
      { name: "JavaScript / TypeScript", level: "Expert" },
      { name: "React / Next.js", level: "Expert" },
      { name: "Node.js / Express", level: "Advanced" },
      { name: "Python / FastApi", level: "Advanced" },
      { name: "PostgreSQL & Redis", level: "Advanced" },
      { name: "Docker & AWS", level: "Intermediate" },
      { name: "GraphQL & REST APIs", level: "Expert" },
      { name: "Tailwind CSS & SASS", level: "Expert" }
    ],
    projects: [
      {
        title: "CloudFlow - Workflow Automation Platform",
        description: "An open-source node-based visual workflow automation tool handling millions of webhooks daily with real-time analytics dashboards.",
        tags: "React, Node.js, WebSockets, Redis, Tailwind",
        demoLink: "https://example.com/cloudflow",
        repoLink: "https://github.com/example/cloudflow"
      },
      {
        title: "Aether AI - Code Intelligence Assistant",
        description: "AI-powered VS Code extension providing local contextual autocomplete and automated code reviews using LLM embeddings.",
        tags: "TypeScript, Python, FastApi, OpenAI API",
        demoLink: "https://example.com/aether",
        repoLink: "https://github.com/example/aether"
      },
      {
        title: "DevMetrics - Kubernetes Cluster Monitor",
        description: "Real-time resource visualization dashboard for microservices running in Docker and Kubernetes clusters.",
        tags: "Go, React, D3.js, Prometheus",
        demoLink: "https://example.com/devmetrics",
        repoLink: "https://github.com/example/devmetrics"
      }
    ],
    experience: [
      {
        company: "Vortex Cloud Systems",
        position: "Lead Full-Stack Engineer",
        startDate: "2023 - Present",
        endDate: "Present",
        description: "Architected micro-frontend architecture reducing bundle load times by 45%. Led a team of 8 engineers delivering enterprise data pipelines."
      },
      {
        company: "Nexus Labs",
        position: "Senior Software Engineer",
        startDate: "2020",
        endDate: "2023",
        description: "Engineered real-time collaborative editor serving 200k daily active users. Improved API latency by 60% with Redis caching strategy."
      },
      {
        company: "PixelCraft Tech",
        position: "Frontend Developer",
        startDate: "2018",
        endDate: "2020",
        description: "Built responsive UI components and accessible user flows for e-commerce client applications."
      }
    ],
    education: [
      {
        institution: "University of California, Berkeley",
        degree: "B.S. in Computer Science",
        field: "Computer Software Engineering",
        year: "2014 - 2018"
      }
    ]
  },

  designer: {
    personal: {
      fullName: "Maya Lin",
      jobTitle: "Principal Product & UI/UX Designer",
      email: "maya.design@example.com",
      phone: "+1 (555) 987-6543",
      location: "New York, NY",
      website: "https://mayadesign.co",
      avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
      summary: "Product designer with a passion for building human-centered digital experiences. Specialized in design systems, micro-interactions, accessibility, and high-fidelity prototyping."
    },
    socials: {
      github: "https://dribbble.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      portfolio: "https://mayadesign.co"
    },
    skills: [
      { name: "Figma & Design Systems", level: "Expert" },
      { name: "UI/UX Research & Wireframing", level: "Expert" },
      { name: "Prototyping & Motion Design", level: "Advanced" },
      { name: "Design Tokens & CSS", level: "Advanced" },
      { name: "Accessibility (WCAG 2.1)", level: "Advanced" },
      { name: "User Testing & Analytics", level: "Advanced" }
    ],
    projects: [
      {
        title: "Lumina - FinTech Mobile Banking App",
        description: "End-to-end design system and iOS app redesign focusing on biometric security and frictionless money transfer user flows.",
        tags: "Figma, iOS Native, Micro-animations, User Research",
        demoLink: "https://example.com/lumina",
        repoLink: "https://dribbble.com"
      },
      {
        title: "Pulse Design System",
        description: "Enterprise multi-brand design system with 80+ accessible components adopted across 12 SaaS products.",
        tags: "Design Systems, Storybook, Figma Components",
        demoLink: "https://example.com/pulse",
        repoLink: "https://figma.com"
      }
    ],
    experience: [
      {
        company: "Starlight Digital Agency",
        position: "Senior UI/UX Designer",
        startDate: "2022",
        endDate: "Present",
        description: "Spearheaded user research workshops and designed SaaS dashboards for Fortune 500 enterprise clients."
      },
      {
        company: "Creative Studio Co.",
        position: "Product Designer",
        startDate: "2019",
        endDate: "2022",
        description: "Designed cross-platform mobile apps for wellness and e-commerce tech startups."
      }
    ],
    education: [
      {
        institution: "Rhode Island School of Design (RISD)",
        degree: "B.F.A. in Graphic & Interaction Design",
        field: "Interaction Design",
        year: "2015 - 2019"
      }
    ]
  }
};
