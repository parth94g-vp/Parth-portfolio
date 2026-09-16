// ─── Centralized Portfolio Data — Single Source of Truth ─────────────────────
// All UI components and AI retrieval consume this data.
// Sourced from Parth Garge's resume. Update this file as new projects,
// experience, certifications, and achievements are added.

export interface Profile {
  name: string;
  headline: string;
  summary: string;
  education: {
    degree: string;
    institution: string;
    affiliation: string;
    cgpa: string;
    graduation: string;
  };
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  affiliation: string;
  cgpa: string;
  duration: string;
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  duration?: string;
  mode: string;
  points: string[];
  project?: string;
  projectStatus?: string;
  team?: string;
  logo: string;
  certificate?: string;
}

export interface Project {
  id: string;
  name: string;
  status: string;
  category: string;
  purpose: string;
  github?: string;
  demo?: string;
  stack: string[];
  facts: string[];
  limitations?: string;
  screenshots: { label: string; src: string }[];
}

export interface Skill {
  category: string;
  icon: string;
  items: string[];
}

export interface Achievement {
  title: string;
  organization?: string;
  track?: string;
  location?: string;
  team?: string;
  scale?: string;
  type?: string;
  image?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  image?: string;
}

export interface CommunityEvent {
  name: string;
  location: string;
  themes: string[];
  team?: string;
  image?: string;
}

// ─── PROFILE ────────────────────────────────────────────────────────────────

export const profile: Profile = {
  name: "Parth Garge",
  headline:
    "Data Scientist | Generative AI Engineer | LLMs | RAG | NLP | Deep Learning | Prompt Engineering",
  summary:
    "Aspiring Data Scientist with strong foundations in statistics, machine learning, and data visualization. Passionate Generative AI Engineer with expertise in large language models (LLMs), prompt engineering, and deep learning frameworks. Strong background in NLP, model fine-tuning, and AI-driven product development.",
  education: {
    degree: "M.Sc. Data Science and Big Data Analytics",
    institution: "MIT World Peace University",
    affiliation: "Pune, India",
    cgpa: "8.71 / 10.00",
    graduation: "Aug 2027 (Expected)",
  },
  email: "parth94@gmail.com",
  linkedin: "https://www.linkedin.com/in/parth-garge-7472753b3/",
  github: "https://github.com/parth94g-vp",
  location: "Pune, India",
};

// ─── EDUCATION (full history) ────────────────────────────────────────────────

export const educationHistory: EducationEntry[] = [
  {
    institution: "MIT World Peace University",
    degree: "M.Sc. Data Science and Big Data Analytics",
    affiliation: "Pune, India",
    cgpa: "8.71",
    duration: "Aug 2025 – Aug 2027",
  },
  {
    institution: "Symbiosis Skills and Professional University",
    degree: "Bachelor of Science in Data Science",
    affiliation: "Pune, India",
    cgpa: "8.70",
    duration: "Aug 2022 – Aug 2025",
  },
  {
    institution: "Nowrosjee Wadia College",
    degree: "Class XII",
    affiliation: "Pune, India",
    cgpa: "61.1%",
    duration: "Mar 2022",
  },
  {
    institution: "Prerna Secondary & Higher Secondary School",
    degree: "Class X",
    affiliation: "Pune, India",
    cgpa: "90.8%",
    duration: "Mar 2020",
  },
];

// ─── EXPERIENCE ─────────────────────────────────────────────────────────────

export const experience: Experience[] = [
  {
    role: "Gen AI Engineer Intern",
    organization: "Marva.AI & Innovation for Good",
    period: "Jan 2025 – Jun 2025",
    mode: "Hybrid — Pune, India",
    points: [
      "Led data-driven initiatives in Generative AI, including fine-tuning large language models (LLMs)",
      "Implemented Retrieval-Augmented Generation (RAG) pipelines and developed custom transformer architectures",
      "Collaborated with cross-functional teams to build tailored AI solutions, improving decision-making across complex domains",
    ],
    logo: "/assets/experience/logos/marva-ai.jpg",
    certificate: "/assets/experience/certificates/marva-ai.jpg",
  },
  {
    role: "Project Trainee",
    organization: "Nihilent",
    period: "Jun 2024 – Aug 2024",
    duration: "Internship",
    mode: "On-site — Pune, India",
    points: [
      "Collaborated as part of a team to enhance a chatbot's performance through advanced data analysis techniques",
      "Worked on anomaly detection using the Isolation Forest algorithm to find unusual patterns and outliers in data",
      "Contributed to root cause analysis and what-if analysis to uncover insights and potential impacts on key performance metrics",
    ],
    logo: "/assets/experience/logos/nihilent.jpg",
    certificate: "/assets/experience/certificates/nihilent.jpg",
  },
  {
    role: "Data Analysis Intern",
    organization: "Vknow",
    period: "Jun 2023 – Aug 2023",
    duration: "Internship",
    mode: "Hybrid — Pune, India",
    points: [
      "Analyzed sales data to surface trends and support business decisions",
      "Helped the company handle sales data systematically and organize sales and client details",
    ],
    logo: "/assets/experience/logos/vknow.jpg",
    certificate: "/assets/experience/certificates/vknow.jpg",
  },
];

// ─── PROJECTS ───────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "itinerary-planner",
    name: "Itinerary Planner: An Intelligent Multi-Agent System",
    status: "Completed",
    category: "Multi-Agent AI",
    purpose:
      "AI-powered multi-agent travel planning system that automatically collects real-time data (flights, hotels, weather, attractions) and generates a personalized, day-by-day itinerary based on user preferences. Designed to reduce manual effort by integrating intelligent agents, APIs, and LLMs to deliver a complete, shareable travel plan in a single, user-friendly format.",
    stack: ["LangGraph", "API Integration", "LLM", "Multi-Agent System"],
    facts: [
      "Team project",
      "Oct 2025 – Dec 2025",
      "Real-time data collection across flights, hotels, weather, and attractions",
      "Multi-agent orchestration for day-by-day itinerary generation",
    ],
    screenshots: [],
  },
  {
    id: "email-generator-ai-agent",
    name: "Email Generator AI Agent",
    status: "Completed",
    category: "Generative AI",
    purpose:
      "An Email Generator and Responder utilizing Large Language Models, Retrieval-Augmented Generation, and web search to draft and reply to emails automatically.",
    stack: ["Agno (Agent Framework)", "LLM", "RAG"],
    facts: [
      "Lead Developer",
      "Jan 2025 – Feb 2025",
      "RAG-grounded email generation and response",
      "Web-search-augmented context retrieval",
    ],
    screenshots: [],
  },
  {
    id: "chatbot-optimization-nihilent",
    name: "Chatbot Optimization Project — Nihilent",
    status: "Completed",
    category: "NLP / Data Analysis",
    purpose:
      "Optimized chatbot performance through advanced data analysis techniques, improving decision-making capabilities as part of an internship project at Nihilent.",
    stack: ["Root Cause Analysis", "Anomaly Detection", "Chatbot Optimization", "LLM"],
    facts: [
      "Internship project",
      "Jun 2024 – Aug 2024",
      "Isolation Forest-based anomaly detection",
      "Root cause and what-if analysis on performance metrics",
    ],
    screenshots: [],
  },
  {
    id: "vardant-ai",
    name: "Vardant AI",
    status: "Completed",
    category: "AI / IoT / AgriTech",
    purpose:
      "AI-powered smart agriculture system integrating IoT sensors with ML/DL models to provide real-time crop, fertilizer, disease detection, irrigation, and weather-based recommendations through a unified web platform. Designed to enable data-driven farming by automating decision-making, improving yield, optimizing resources, and offering an interactive multilingual dashboard with AI chatbot support.",
    stack: [
      "IoT",
      "Arduino UNO",
      "DHT11 Sensor",
      "Soil Moisture Sensor",
      "Machine Learning",
      "Deep Learning",
      "LLM",
      "API",
    ],
    facts: [
      "Team project",
      "Real-time crop, fertilizer and disease-detection recommendations",
      "Multilingual dashboard with AI chatbot support",
      "IoT sensor integration for irrigation and weather-based decisions",
    ],
    screenshots: [],
  },
];

// ─── SKILLS ─────────────────────────────────────────────────────────────────

export const skills: Skill[] = [
  {
    category: "Programming",
    icon: "code",
    items: ["Python"],
  },
  {
    category: "Generative AI / LLM",
    icon: "sparkles",
    items: [
      "Generative AI",
      "LLMs",
      "RAG",
      "Agentic AI",
      "Prompt Engineering",
      "LLM Fine-Tuning",
    ],
  },
  {
    category: "ML / Data",
    icon: "brain",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Anomaly Detection",
      "Root Cause Analysis",
      "Data Visualization",
    ],
  },
  {
    category: "Databases",
    icon: "search",
    items: ["MySQL", "MongoDB", "SQLite", "Vector Databases"],
  },
  {
    category: "Tools & Platforms",
    icon: "wrench",
    items: ["Git", "Tableau"],
  },
  {
    category: "Languages",
    icon: "wrench",
    items: ["English", "Marathi", "Hindi", "German"],
  },
  {
    category: "Soft Skills",
    icon: "sparkles",
    items: ["Teamwork", "Creativity"],
  },
];

// ─── ACHIEVEMENTS ───────────────────────────────────────────────────────────
// None listed on resume yet — add entries here as you collect hackathon wins,
// finalist placements, etc. (drop matching images into
// public/assets/achievements/ and Certifications/achievements folders).

export const achievements: Achievement[] = [];

// ─── CERTIFICATIONS ─────────────────────────────────────────────────────────

export const certifications: Certification[] = [
  {
    title: "German Certification - Level 1",
    issuer: "Pune University",
    issued: "",
    image: "/assets/certifications/german-certification-level-1.jpg",
  },
];

// ─── COMMUNITY EVENTS ───────────────────────────────────────────────────────
// None listed yet — add entries here as you attend meetups, hackathons, or
// conferences (drop matching images into public/assets/events/).

export const events: CommunityEvent[] = [];

// ─── ALL GALLERY IMAGES ─────────────────────────────────────────────────────
// Populate as achievement/event photos are added.

export const galleryImages: { src: string; label: string }[] = [];

// ─── AI GROUNDING ───────────────────────────────────────────────────────────

export const aiGrounding = {
  allowedScope: "Questions about Parth and his verified portfolio.",
  unknownResponse: "I don't have verified information about that.",
  unrelatedResponse:
    "I'm Ask Parth, so I only answer questions about Parth and his work.",
  futureRule:
    "Never state an unverified future event as a fact. Distinguish goals/plans from guaranteed outcomes.",
  privateRule:
    "Do not expose private repository URLs or private project details as public resources.",
};

// ─── SEARCH INDEX ───────────────────────────────────────────────────────────

export interface SearchItem {
  title: string;
  category: string;
  appId: string;
  subRoute?: string;
  keywords: string[];
}

export const searchIndex: SearchItem[] = [
  ...projects.map((p) => ({
    title: p.name,
    category: "Project",
    appId: "projects",
    subRoute: p.id,
    keywords: [p.name, p.category, ...p.stack, ...p.facts].map((k) =>
      k.toLowerCase()
    ),
  })),
  ...experience.map((e) => ({
    title: `${e.role} — ${e.organization}`,
    category: "Experience",
    appId: "experience",
    keywords: [e.role, e.organization, ...e.points].map((k) =>
      k.toLowerCase()
    ),
  })),
  ...skills.flatMap((s) =>
    s.items.map((item) => ({
      title: item,
      category: `Skill — ${s.category}`,
      appId: "skills",
      keywords: [item.toLowerCase(), s.category.toLowerCase()],
    }))
  ),
  ...achievements.map((a) => ({
    title: a.title,
    category: "Achievement",
    appId: "achievements",
    keywords: [
      a.title,
      a.organization || "",
      a.track || "",
      a.team || "",
    ].map((k) => k.toLowerCase()),
  })),
  ...certifications.map((c) => ({
    title: c.title,
    category: "Certification",
    appId: "certifications",
    keywords: [c.title, c.issuer, c.issued].map((k) => k.toLowerCase()),
  })),
  ...events.map((e) => ({
    title: e.name,
    category: "Event",
    appId: "community",
    keywords: [e.name, e.location, ...e.themes].map((k) => k.toLowerCase()),
  })),
  {
    title: "Parth Garge",
    category: "Profile",
    appId: "about",
    keywords: ["parth", "garge", "about", "profile", "education", "data science", "ai"],
  },
  {
    title: "Resume",
    category: "Document",
    appId: "resume",
    keywords: ["resume", "cv", "pdf", "download"],
  },
  {
    title: "Contact",
    category: "Contact",
    appId: "contact",
    keywords: ["contact", "email", "linkedin", "github"],
  },
];

// ─── COMPATIBILITY EXPORT ───────────────────────────────────────────────────
// Components import { portfolioData } and destructure properties from it.
// This maps our individual exports into the shape they expect.

export const portfolioData = {
  profile: {
    name: profile.name,
    headline: profile.headline,
    summary: profile.summary,
    bio: profile.summary,
    email: profile.email,
    linkedin: profile.linkedin,
    github: profile.github,
    location: profile.location,
  },
  education: educationHistory,
  links: {
    linkedin: profile.linkedin,
    github: profile.github,
    email: profile.email,
  },
  experience: experience.map((e) => ({
    ...e,
    company: e.organization,
    title: e.role,
  })),
  projects: projects.map((p) => ({
    ...p,
    title: p.name,
  })),
  skills,
  achievements,
  certifications,
  community: events,
  events,
  galleryImages,
};
