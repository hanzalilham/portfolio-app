export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  problem: string;
  highlights: string[];
  architecture: string;
  tech: string[];
  image?: string;
  github?: string;
  website?: string;
  video?: string;
  confidential?: boolean;
  articleSlug?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  points: string[];
}

export interface TechDomain {
  domain: string;
  description: string;
}

export const projects: Project[] = [
  {
    slug: "doozyjo",
    title: "doozyJo",
    subtitle: "Scheduling & Booking Platform",
    category: "Mobile App",
    problem:
      "Cross-platform scheduling app with calendar sync, recording, and multi-language support.",
    highlights: [
      "Runs on iOS, Android, and macOS from a single codebase",
      "Google Calendar API integration for real-time booking sync",
      "In-app audio recording with playback",
      "Full multi-language support (i18n)",
      "BLoC state management with clean architecture",
    ],
    architecture:
      "Flutter app running on iOS, Android, and macOS. Firebase backend with BLoC state management, Google Calendar API integration for booking sync, in-app recording features, and full multi-language support. Clean architecture with strict layer separation throughout.",
    tech: [
      "Flutter",
      "Firebase",
      "BLoC",
      "Google Calendar API",
      "iOS",
      "Android",
      "macOS",
    ],
    image: "/projects/doozyjo-cover.jpg",
    website: "https://doozyjo.fr",
    video: "https://doozyjo.fr",
    articleSlug: "mobile-platforms",
  },
  {
    slug: "driver-app",
    title: "Ride-Hailing Platform",
    subtitle: "driver_app",
    category: "Mobile App",
    problem:
      "Production ride-hailing app with real-time driver discovery, ratings, and Stripe payments.",
    highlights: [
      "Real-time driver discovery with rating-based sorting",
      "Supabase RPC with PostgreSQL SECURITY DEFINER functions",
      "Stripe payment integration",
      "Multi-field search and filtering",
      "Service-role client for privileged backend operations",
    ],
    architecture:
      "Flutter app backed by Supabase with PostgreSQL RPC functions running as SECURITY DEFINER. Service-role client for privileged operations, driver discovery with rating-based sorting and multi-field search. Stripe integration for payments. Clean architecture with strict layer separation.",
    tech: [
      "Flutter",
      "Supabase RPC",
      "PostgreSQL",
      "Stripe",
      "BLoC",
    ],
    articleSlug: "mobile-platforms",
  },
  {
    slug: "hearu",
    title: "HearU",
    subtitle: "Real-Time Audio Transcription",
    category: "Mobile App + API",
    problem:
      "Transcribe audio to text in real-time from a mobile device, with user accounts and persistent notes.",
    highlights: [
      "Custom AWS Transcribe Streaming over HTTP/2 (no SDK)",
      "SigV4 request signing implemented from scratch in Dart",
      "Bidirectional streaming via composable stream transforms",
      "Spring Boot 3.4 REST API with JWT authentication",
      "PostgreSQL persistence, Dockerized on Render",
    ],
    architecture:
      "Flutter app connects directly to AWS Transcribe Streaming over HTTP/2 using a custom implementation — SigV4 request signing, EventStream binary protocol encoding, bidirectional streaming through a composable Dart stream transform pipeline (chunker → encoder → signer → framer). Backend is a Spring Boot 3.4 REST API with stateless JWT authentication, BCrypt password hashing, JPA over PostgreSQL, Dockerized on Render.",
    tech: [
      "Flutter",
      "AWS Transcribe",
      "AWS SigV4",
      "HTTP/2",
      "Spring Boot",
      "JWT",
      "PostgreSQL",
      "Docker",
    ],
    github: "https://github.com/AbdelhakRazi/HearU",
    articleSlug: "hearu",
  },
  {
    slug: "url-shortener",
    title: "URL Shortener",
    subtitle: "Go Microservice",
    category: "API / Microservice",
    problem:
      "Production-ready URL shortener with clean API design, custom hashing, and containerized deployment.",
    highlights: [
      "Go REST API with Handler → Service → Repository layers",
      "Custom base-62 hashing (golden ratio + XOR secret key)",
      "PostgreSQL with pgx connection pooling",
      "Swagger/OpenAPI documentation",
      "Docker Compose + Kubernetes configs + GitHub Actions CI/CD",
    ],
    architecture:
      "Go REST API with Gorilla Mux, layered as Handler → Service → Repository with interfaces for DI and testability. Custom base-62 hashing using golden ratio multiplication XOR'd with a secret key. PostgreSQL via pgx connection pooling. Swagger/OpenAPI docs. Dockerized with Docker Compose, Kubernetes service configs, and GitHub Actions CI/CD.",
    tech: [
      "Go",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Swagger",
    ],
  },
  {
    slug: "multi-client-rag",
    title: "Multi-Tenant RAG API",
    subtitle: "AI-Powered Document Q&A",
    category: "API / AI",
    problem:
      "Let multiple users upload documents and query them with AI-powered Q&A, with full data isolation.",
    highlights: [
      "FastAPI backend with Pinecone vector database",
      "PDF → chunking → OpenAI embeddings → vector storage pipeline",
      "GPT-4 generation with conversation history",
      "Multi-tenant isolation via Supabase JWT + per-user namespaces",
      "Rate limiting, Next.js frontend, Pydantic v2 schemas",
    ],
    architecture:
      "FastAPI backend with Pinecone vector database. PDF upload → page-by-page chunking → OpenAI embeddings → Pinecone storage. Query endpoint retrieves relevant context and generates answers via GPT-4 with conversation history. Multi-tenant isolation through Supabase JWT auth and per-user vector namespaces. Rate limiting with slowapi. Next.js frontend.",
    tech: [
      "FastAPI",
      "Python",
      "Pinecone",
      "OpenAI",
      "Supabase",
      "Next.js",
    ],
  },
  {
    slug: "ai-skill",
    title: "Clean Architecture Enforcer",
    subtitle: "AI Agent Skill",
    category: "Open Source / AI",
    problem:
      "AI coding assistants generate Flutter code that ignores architecture rules. Fix that at the instruction level.",
    highlights: [
      "Open-source Skill for Claude and GitHub Copilot",
      "Enforces BLoC + Clean Architecture via decision trees",
      "10 GitHub stars, endorsed by BLoC creator Felix Angelov",
      "Feature-first structure and design system enforcement",
      "Working examples for data flow patterns",
    ],
    architecture:
      "Built an open-source Skill for Claude and Copilot that enforces BLoC + Clean Architecture patterns through structured decision trees. 10 GitHub stars, endorsed by BLoC creator Felix Angelov. Includes working examples for feature-first structure, design system enforcement, and data flow patterns.",
    tech: [
      "AI Agents",
      "Claude Skills",
      "Flutter",
      "BLoC",
      "Open Source",
    ],
    github:
      "https://github.com/AbdelhakRazi/flutter-bloc-clean-architecture-skill",
    articleSlug: "ai-agent-skill",
  },
  {
    slug: "bms",
    title: "CI/CD & Infrastructure Modernization",
    subtitle: "Amadeus — Professional",
    category: "DevOps / Infrastructure",
    problem:
      "Modernize a legacy C++ build system running on bare-metal infrastructure with manual CI pipelines.",
    highlights: [
      "C++ toolchain maintained for org-wide C++ builds",
      "Java extension accelerating Java project builds",
      "Jenkins → Docker-based images on Azure migration",
      "On-premise → containerized infrastructure (Azure + RHEL)",
      "RabbitMQ messaging for async build orchestration",
      "GitHub Actions for Copilot analytics automation",
    ],
    architecture:
      "Maintain a C++ toolchain used across the organization for building C++ projects, and a Java extension that accelerates Java builds. Integrated asynchronous messaging for build orchestration. Migrated Jenkins pipelines to Docker-based images running on Azure. Moved the full environment from on-premise to containerized infrastructure across Azure and RHEL machines. Built GitHub Actions workflows to automate engineering analytics data extraction, collection, and transformation.",
    tech: [
      "C++",
      "Docker",
      "Azure",
      "RHEL",
      "Jenkins",
      "RabbitMQ",
      "GitHub Actions",
    ],
    confidential: true,
  },
  {
    slug: "fedsa-ai",
    title: "Distributed ML Pipeline",
    subtitle: "FedSA-AI",
    category: "Distributed Systems / ML",
    problem:
      "Detect anomalies in real-time across distributed nodes without centralizing sensitive data.",
    highlights: [
      "Kafka streams metrics from remote nodes to training clients",
      "LSTM autoencoder trained locally per node",
      "gRPC model weight exchange (FedAvg, semi-async)",
      "Real-time inference with MSE-based anomaly scoring",
      "Docker orchestration with NTP time sync",
    ],
    architecture:
      "Multi-node distributed training system. Kafka streams metrics from remote nodes to training clients. Each client trains an LSTM autoencoder locally, then exchanges model weights with a central aggregation server over gRPC (FedAvg, FedAvgM, semi-async strategies). The global model performs real-time inference with MSE-based anomaly scoring. Orchestrated with Docker, time-synced via NTP.",
    tech: [
      "Python",
      "TensorFlow/Keras",
      "Kafka",
      "gRPC/Protobuf",
      "Docker",
      "NumPy",
    ],
    github: "https://github.com/AbdelhakRazi/FedSA-AI",
    articleSlug: "fedsa-ai",
  },
  {
    slug: "http-server-10k",
    title: "C10K HTTP Server",
    subtitle: "http-server-10k",
    category: "Systems Programming",
    problem:
      "HTTP server from scratch that handles 10,000 concurrent connections.",
    highlights: [
      "Multi-threaded event-driven architecture in C++17",
      "kqueue (macOS) and epoll (Linux) behind polymorphic interface",
      "Zero lock contention — each worker owns its event queue",
      "Hand-written HTTP/1.1 parser",
      "Express-style route registration API",
    ],
    architecture:
      "Multi-threaded event-driven server in C++17. Abstracts kqueue (macOS) and epoll (Linux) behind a polymorphic polling interface with a factory. Each worker thread owns its own event queue — zero lock contention. Round-robin client distribution, edge-triggered events, hand-written HTTP/1.1 parser, Express-style route registration API.",
    tech: [
      "C++17",
      "POSIX Sockets",
      "kqueue/epoll",
      "std::thread",
      "Non-blocking I/O",
    ],
    github: "https://github.com/AbdelhakRazi/http-server-10k",
    articleSlug: "c10k-server",
  },
];

export const experiences: Experience[] = [
  {
    company: "Amadeus",
    role: "Software Engineer — Build & DevOps",
    period: "2024 — Present",
    current: true,
    points: [
      "Maintain C++ toolchain for building C++ projects across the org",
      "Develop Java extension for accelerating Java builds",
      "Migrated Jenkins pipelines to Docker images on Azure",
      "On-premise to containerized infrastructure (Azure + RHEL)",
      "RabbitMQ messaging integration for build orchestration",
      "GitHub Actions workflows for Copilot data automation",
      "GenAI advocacy — driving AI agent and Skills adoption",
    ],
  },
  {
    company: "Ericsson",
    role: "Software Engineer — C++ Systems",
    period: "2022 — 2024",
    points: [
      "High-performance C++ systems on large-scale telecom platforms",
      "gRPC and Protobuf inter-service communication",
      "Unix sockets, IPC, and modular monolith architecture",
      "End-to-end ownership from design to production deployment",
      "Java security automation tooling",
    ],
  },
];

export const techDomains: TechDomain[] = [
  {
    domain: "APIs & Microservices",
    description:
      "Go (Gorilla Mux), FastAPI, Spring Boot, REST API design, Swagger/OpenAPI, JWT auth, PostgreSQL, clean architecture",
  },
  {
    domain: "Event-Driven & Messaging",
    description:
      "RabbitMQ, Kafka, gRPC/Protobuf, async communication patterns, topic exchanges, work queues, distributed coordination",
  },
  {
    domain: "Cloud & DevOps",
    description:
      "Azure, AWS (Transcribe, S3), Docker, Kubernetes, Jenkins pipeline migration, GitHub Actions, RHEL containerization",
  },
  {
    domain: "Systems Programming",
    description:
      "C++17, multi-threaded servers, kqueue/epoll, unix sockets, POSIX, non-blocking I/O, modular monolith design",
  },
  {
    domain: "Mobile Platforms",
    description:
      "Flutter/Dart, BLoC architecture, Firebase, Supabase, multi-platform (iOS/Android/macOS)",
  },
  {
    domain: "AI & GenAI",
    description:
      "FastAPI + Pinecone RAG pipelines, TensorFlow/Keras, OpenAI, LLM agent Skills, Copilot workflow automation",
  },
];
