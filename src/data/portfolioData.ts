import { Project, ExperienceItem, EducationItem, CertificationItem, SkillCategory } from './types';

export const personalInfo = {
  name: "Nur Rahmat Hidayat",
  nick: "neurrochmat",
  title: "Fullstack & Mobile Developer · Applied AI & IoT",
  roleHeadline: "Engineering decoupled web platforms, cross-platform mobile apps, and edge intelligence systems.",
  bio: "Informatics Engineering graduate from Politeknik Negeri Semarang with GPA 3.85 / 4.00. Experienced in architecting decoupled backend services with Laravel 11/13, high-performance interfaces with Next.js 16, cross-platform mobile applications with Flutter, and on-device machine learning pipelines with TensorFlow Lite. Experienced deploying production applications on Microsoft Azure VM and Google Cloud Run.",
  location: "Semarang, Central Java, Indonesia",
  timezone: "WIB (UTC+7)",
  email: "neurrochmat6@gmail.com",
  phone: "+62 821-3564-3630",
  profilePhoto: "/profile.jpg",
  resumePdf: "/CV_Nur_Rahmat_Hidayat.pdf",
  whatsappUrl: "https://wa.me/6282135643630?text=Halo%20Nur%20Rahmat,%20saya%20tertarik%20dengan%20profil%20portfolio%20Anda",
  github: "https://github.com/neurrochmat",
  linkedin: "https://linkedin.com/in/neurrochmat",
  status: "Available for Full-time, Contract, & Freelance",
  softSkills: [
    "Leadership",
    "Analytical Thinking",
    "Critical Thinking",
    "Adaptability",
    "Communication",
    "Problem Solving",
    "Teamwork & Collaboration"
  ],
  stats: [
    { label: "Academic GPA", value: "3.85", sub: "Politeknik Negeri Semarang" },
    { label: "Production Apps", value: "8+", sub: "Web, Mobile, AI/IoT" },
    { label: "Enterprise Experience", value: "Citiasia", sub: "Fullstack Developer Intern" },
    { label: "Verified Credentials", value: "8", sub: "Oracle, MikroTik & Dicoding" },
  ]
};

export const projectsData: Project[] = [
  {
    id: "handycraft-marketplace",
    title: "Handycraft Marketplace",
    subtitle: "Sentra IKM Karya Maju Bersatu",
    category: "web",
    categoryLabel: "Web Fullstack",
    period: "Mar 2026 – Aug 2026",
    image: "/projects/handycraft-marketplace.jpg",
    summary: "Built premium multi-vendor e-commerce platform connecting handicraft artisans (IKM) with buyers using decoupled architecture (Laravel 13 API + Next.js 16 frontend).",
    keyHighlights: [
      "Architected decoupled system with Laravel 13 REST API and Next.js 16 frontend with TypeScript, Tailwind CSS, and Shadcn UI.",
      "Implemented hybrid token authentication with Laravel Sanctum, Spatie Permission (roles: buyer, seller, admin), and Google OAuth via Socialite.",
      "Integrated Xendit (Invoice, Webhook, Disbursement API) and RajaOngkir with Redis caching; built escrow wallet with auto-release after buyer confirmation.",
      "Set up real-time WebSocket with Laravel Reverb, admin panel with Filament v3 + 2FA, and monitoring via Horizon, Pulse, and Telescope."
    ],
    architecture: [
      "Client Layer: Next.js 16 App Router + TypeScript + Tailwind CSS + Shadcn UI",
      "API Layer: Laravel 13 REST API + Laravel Sanctum + Spatie Permission",
      "Transaction Engine: Xendit Payment Invoices + Webhook Vault + Automated Escrow Payouts",
      "Realtime Infrastructure: Laravel Reverb WebSockets for instant order updates",
      "Monitoring & Ops: Filament v3 + 2FA, Horizon, Pulse, Telescope, Docker, Azure VM"
    ],
    metrics: [
      { label: "System Pattern", value: "Decoupled REST API" },
      { label: "Payment Vault", value: "Xendit Escrow" },
      { label: "Realtime Engine", value: "Laravel Reverb" }
    ],
    stack: ["Laravel 13", "Next.js 16", "TypeScript", "MySQL", "Redis", "Tailwind CSS", "Shadcn UI", "Xendit", "Docker", "Azure VM"],
    featured: true,
    liveUrl: "https://www.sentrakriya.app/",
    githubUrl: "https://github.com/neurrochmat",
  },
  {
    id: "smart-village-ecosystem",
    title: "Smart Village Ecosystem",
    subtitle: "PT Citiasia International",
    category: "web",
    categoryLabel: "Web & GIS Governance",
    period: "Aug 2025 – Sep 2025",
    image: "/projects/smart-village.jpg",
    summary: "Developed village digitalization platform with village profile website, local government dashboard, and community mobile app.",
    keyHighlights: [
      "Developed village digitalization platform featuring public portal, government administrative dashboard, and citizen app.",
      "Engineered geospatial jurisdiction boundaries and public facility mapping using Leaflet JS.",
      "Streamlined citizen service requests, administrative document dispatch, and role-based access control."
    ],
    architecture: [
      "Public & Admin Portal: Laravel Web Platform + Leaflet GIS Layer",
      "Mobile Service Client: Flutter Cross-Platform Application",
      "Data Store: Centralized MySQL Database with Role-Based Access Control"
    ],
    metrics: [
      { label: "Geospatial Engine", value: "Leaflet GIS" },
      { label: "Architecture", value: "Multi-Role Web Portal" },
      { label: "Domain", value: "Smart Governance" }
    ],
    stack: ["Laravel", "Flutter", "PHP", "JavaScript", "Leaflet JS", "Dart", "MySQL"],
    featured: true,
    liveUrl: "https://smart-village-web.citiasiainc.id/",
    githubUrl: "https://github.com/neurrochmat",
  },
  {
    id: "sirkular-app",
    title: "Sirkular App — Waste Platform",
    subtitle: "PT Citiasia International",
    category: "web",
    categoryLabel: "Web & Mobile Ecosystem",
    period: "Sep 2025 – Dec 2025",
    image: "/projects/sirkular-waste.jpg",
    summary: "Built waste management platform connecting collectors and citizens via admin web panel and mobile app.",
    keyHighlights: [
      "Built Laravel-based REST APIs and admin CRUD modules (users, collectors, customers, areas, articles) with authentication and RBAC.",
      "Integrated Midtrans Snap payment gateway handling invoice and webhook logic, stabilizing billing flow and backend modules.",
      "Deployed applications to production server environments using Microsoft Azure VM."
    ],
    architecture: [
      "Client Applications: Citizen & Driver Mobile Apps (Flutter / Dart)",
      "Backend Services: Laravel REST API + Leaflet Geographic Mapping",
      "Billing: Midtrans Snap API + Server Webhook Verification",
      "Infrastructure: Microsoft Azure Linux VM with MySQL"
    ],
    metrics: [
      { label: "Payment Gateway", value: "Midtrans Snap" },
      { label: "Infrastructure", value: "Microsoft Azure VM" },
      { label: "Domain", value: "Waste Tech / Circular Economy" }
    ],
    stack: ["Laravel", "Flutter", "PHP", "Dart", "Midtrans", "RESTful API", "Leaflet JS", "MySQL", "Azure VM"],
    featured: true,
    githubUrl: "https://github.com/neurrochmat",
  },
  {
    id: "diara-timeschool",
    title: "Diara TimeSchool",
    subtitle: "Smart Attendance & Academic Tracking",
    category: "web",
    categoryLabel: "Web Fullstack",
    period: "Mar 2025 – Jul 2025",
    image: "/projects/diara-timeschool.jpg",
    summary: "Contributed to a web application for student attendance management, achievement points, and student violation tracking, built on a collaborative PBL template at Politeknik Negeri Semarang.",
    keyHighlights: [
      "Contributed to student attendance logging, achievement points, and student violation tracking modules.",
      "Containerized the application using Docker for consistent development and production environments.",
      "Structured relational schemas with MySQL for high data integrity across school records."
    ],
    architecture: [
      "Backend Framework: Laravel 11 MVC",
      "Database: MySQL Relational Database",
      "Containerization: Docker Environment"
    ],
    metrics: [
      { label: "Framework", value: "Laravel 11" },
      { label: "Deployment", value: "Docker Parity" },
      { label: "Domain", value: "EdTech Systems" }
    ],
    stack: ["Laravel 11", "PHP", "JavaScript", "MySQL", "Docker"],
    featured: true,
    githubUrl: "https://github.com/neurrochmat",
  },
  {
    id: "waste-detector-app",
    title: "Waste Detector App",
    subtitle: "On-Device Mobile ML Inference · TensorFlow Lite",
    category: "ai-iot",
    categoryLabel: "Edge AI & Mobile",
    period: "May 2025 – Jun 2025",
    image: "/projects/waste-detector.jpg",
    summary: "Built Android app for real-time waste classification (organic/inorganic) using on-device TensorFlow Lite model with offline functionality.",
    keyHighlights: [
      "Trained and exported ML model using TensorFlow/Keras with quantized TFLite for mobile inference.",
      "Built reactive Flutter camera UI displaying classification bounding boxes and confidence scores.",
      "Runs completely on-device with zero server latency and 100% offline capability."
    ],
    architecture: [
      "Model Pipeline: Python / TensorFlow / Keras Training -> Quantization -> TFLite FlatBuffer",
      "Inference Engine: Flutter On-Device Native Camera Stream Binding (100% Offline)"
    ],
    metrics: [
      { label: "Inference Engine", value: "TensorFlow Lite" },
      { label: "Latency", value: "Sub-50ms On-Device" },
      { label: "Connectivity", value: "100% Offline" }
    ],
    stack: ["Flutter", "Dart", "Python", "TensorFlow", "TensorFlow Lite", "Keras"],
    featured: true,
    githubUrl: "https://github.com/neurrochmat",
  },
  {
    id: "smart-irrigation-system",
    title: "Smart Irrigation System",
    subtitle: "ESP32 Microcontroller + Mobile Control",
    category: "ai-iot",
    categoryLabel: "IoT & Embedded Systems",
    period: "Jun 2025 – Jul 2025",
    image: "/projects/smart-irrigation.jpg",
    summary: "Developed mobile app integrated with ESP32 for real-time soil moisture monitoring and automatic/manual pump control via Firebase Realtime Database.",
    keyHighlights: [
      "Programmed ESP32 firmware in C++ / PlatformIO to read analog soil moisture and environmental sensors.",
      "Synced real-time sensor telemetry and remote pump triggers via Firebase Realtime Database.",
      "Designed Flutter companion app with moisture history telemetry and manual override triggers."
    ],
    architecture: [
      "Hardware: ESP32 Microcontroller + Soil Capacitive Sensors (C++ / PlatformIO)",
      "Sync Pipeline: Firebase Realtime Database WebSocket Sync",
      "Client Controller: Flutter Mobile Dashboard"
    ],
    metrics: [
      { label: "Microcontroller", value: "ESP32" },
      { label: "Firmware", value: "C++ / PlatformIO" },
      { label: "Sync Engine", value: "Firebase Realtime DB" }
    ],
    stack: ["Flutter", "Dart", "C++", "PlatformIO", "Firebase", "IoT", "ESP32"],
    featured: false,
    githubUrl: "https://github.com/neurrochmat",
  },
  {
    id: "arenaconnect-app",
    title: "ArenaConnect App",
    subtitle: "Sports Venue Reservation Platform",
    category: "mobile",
    categoryLabel: "Mobile & Backend API",
    period: "Sep 2024 – Dec 2024",
    image: "/projects/arenaconnect.jpg",
    summary: "Built mobile application for booking futsal and badminton courts, connected to a dedicated REST API backend (ArenaConnect-API).",
    keyHighlights: [
      "Built Flutter mobile client for browsing venues, inspecting court availability grids, and placing bookings.",
      "Connected client with dedicated Laravel REST API backend with schedule clash locks."
    ],
    architecture: [
      "Mobile Client: Flutter Cross-Platform UI",
      "Backend: Laravel REST API with slot schedule conflict locks",
      "Database: MySQL Database"
    ],
    metrics: [
      { label: "Client Engine", value: "Flutter / Dart" },
      { label: "API Layer", value: "Laravel REST" },
      { label: "Domain", value: "Sports Booking" }
    ],
    stack: ["Flutter", "Dart", "REST API", "Laravel", "MySQL"],
    featured: true,
    githubUrl: "https://github.com/neurrochmat",
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "citiasia-intern",
    role: "Fullstack Developer Intern",
    company: "PT Citiasia International",
    location: "East Jakarta, Indonesia",
    period: "Aug 2025 – Dec 2025",
    type: "work",
    points: [
      "Contributed to Smart Village Ecosystem and Sirkular App, supporting village digitalization and waste management services.",
      "Developed Laravel-based REST APIs and admin CRUD modules (users, collectors, customers, areas, articles) with authentication and role-based access control.",
      "Integrated Midtrans Snap payment gateway handled invoice and webhook logic, and improved billing flow and backend modules.",
      "Deployed applications to production server using Microsoft Azure VM."
    ],
    stack: ["Laravel", "Flutter", "PHP", "Dart", "Midtrans", "MySQL", "RESTful API", "Azure VM"]
  },
  {
    id: "violet-bot-dev",
    role: "Automation Bot Developer (Freelancer)",
    company: "PT Violet Global Indonesia",
    location: "Semarang City, Indonesia",
    period: "Feb 2025 – Mar 2025",
    type: "work",
    points: [
      "Built automation bots integrated with internal business tools to streamline repetitive workflows.",
      "Reduced manual task overhead significantly, improving overall workflow efficiency."
    ],
    stack: ["Python", "JavaScript", "Automation APIs", "Process Optimization"]
  },
  {
    id: "ksr-pmi",
    role: "Human Resource Development Division",
    company: "Korps Sukarela PMI (Indonesian Red Cross)",
    location: "Semarang, Indonesia",
    period: "Dec 2023 – May 2026",
    type: "organization",
    points: [
      "Assisted in planning and executing humanitarian aid missions.",
      "Coordinated volunteer deployment with PMI and external partners.",
      "Provided disaster response training for new volunteers.",
      "Participated in blood donation, health awareness, and emergency response initiatives."
    ]
  }
];

export const educationData: EducationItem = {
  institution: "Politeknik Negeri Semarang",
  degree: "Associate Degree in Informatics Engineering",
  major: "Teknik Informatika",
  gpa: "3.85 / 4.00",
  period: "Sep 2023 – Sep 2026",
  location: "Semarang City, Central Java",
  coursework: [
    { name: "Basic Programming", grade: "A" },
    { name: "UI/UX Design", grade: "A" },
    { name: "Computer Networking I & II", grade: "A" },
    { name: "Database Systems", grade: "A" },
    { name: "Mobile Programming", grade: "A" },
    { name: "Dynamic Web Programming", grade: "A" },
    { name: "OOP (Object Oriented)", grade: "AB" },
    { name: "Information Security", grade: "AB" },
    { name: "Algorithms & Programming", grade: "B" },
  ]
};

export const certificationsData: CertificationItem[] = [
  { id: "c1", title: "Database Programming with SQL", issuer: "Oracle Academy", year: "2024", badge: "Oracle" },
  { id: "c2", title: "Database Design", issuer: "Oracle Academy", year: "2024", badge: "Oracle" },
  { id: "c3", title: "MikroTik Certified Network Associate (MTCNA)", issuer: "Mikrotik SIA", year: "2024", badge: "MikroTik" },
  { id: "c4", title: "Belajar Dasar Pemrograman Web", issuer: "Dicoding Indonesia", year: "2024", badge: "Dicoding" },
  { id: "c5", title: "Belajar Back-End Pemula dengan JavaScript", issuer: "Dicoding Indonesia", year: "2024", badge: "Dicoding" },
  { id: "c6", title: "Belajar Dasar Pemrograman JavaScript", issuer: "Dicoding Indonesia", year: "2024", badge: "Dicoding" },
  { id: "c7", title: "Belajar Dasar Structured Query Language (SQL)", issuer: "Dicoding Indonesia", year: "2024", badge: "Dicoding" },
  { id: "c8", title: "Belajar Membuat Front-End Web untuk Pemula", issuer: "Dicoding Indonesia", year: "2024", badge: "Dicoding" },
];

export const skillsCategories: SkillCategory[] = [
  {
    title: "Backend, APIs & Realtime",
    description: "Architecting decoupled REST APIs, realtime WebSockets, database schemas, and caching.",
    skills: [
      { name: "Laravel (11/13)", highlight: true },
      { name: "PHP", highlight: true },
      { name: "RESTful API", highlight: true },
      { name: "WebSocket (Laravel Reverb)", highlight: true },
      { name: "MySQL", highlight: true },
      { name: "Redis", highlight: true },
      { name: "Filament v3", highlight: true },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Oracle SQL" },
      { name: "Supabase" },
    ]
  },
  {
    title: "Frontend & Mobile Engineering",
    description: "Building responsive web interfaces, cross-platform mobile apps, and spatial mapping.",
    skills: [
      { name: "Next.js 16", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "Flutter", highlight: true },
      { name: "Dart", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "Shadcn UI", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "Leaflet JS", highlight: true },
      { name: "Bootstrap" },
      { name: "jQuery" },
    ]
  },
  {
    title: "Cloud, DevOps & IoT",
    description: "Cloud server instances, containerization, edge microcontrollers, and on-device ML.",
    skills: [
      { name: "Microsoft Azure VM", highlight: true },
      { name: "Google Cloud Run", highlight: true },
      { name: "Docker", highlight: true },
      { name: "Linux", highlight: true },
      { name: "ESP32 (C++ / PlatformIO)", highlight: true },
      { name: "TensorFlow Lite", highlight: true },
      { name: "TensorFlow / Keras", highlight: true },
      { name: "Firebase", highlight: true },
    ]
  },
  {
    title: "Languages, Tools & Integrations",
    description: "Multi-language development, payment gateway vaults, and collaborative tooling.",
    skills: [
      { name: "Xendit Payment API", highlight: true },
      { name: "Midtrans Snap", highlight: true },
      { name: "RajaOngkir", highlight: true },
      { name: "Python", highlight: true },
      { name: "Java" },
      { name: "C / C++", highlight: true },
      { name: "C#" },
      { name: "Git & GitHub", highlight: true },
      { name: "Figma", highlight: true },
      { name: "Trello & Excalidraw" },
      { name: "VS Code" },
    ]
  }
];

export const platformList = [
  "Android",
  "Windows",
  "Linux",
  "Virtual Machines"
];
