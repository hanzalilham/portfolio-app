export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  website?: string;
  articleSlug?: string;
  stars?: number;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  description: string;
}

export interface TechDomain {
  domain: string;
  description: string;
}

export const projects: Project[] = [
  {
    slug: "ai-skill",
    title: "AI Agentic Skill",
    description:
      "Claude and Copilot write Flutter code that looks correct but silently breaks architecture. This Skill fixes that at the instruction level. BLoC and Clean Architecture rules encoded as decision trees the model runs through before generating a single line. Endorsed by Felix Angelov, the creator of BLoC.",
    tech: ["Clean Architecture", "BLoC", "State Management", "Flutter", "Claude Skills", "Open Source"],
    stars: 10,
    github: "https://github.com/AbdelhakRazi/flutter-bloc-clean-architecture-skill",
    articleSlug: "ai-agent-skill",
  },
  {
    slug: "doozyjo",
    title: "AI-Powered Voice Assistant for Wearables",
    description:
      "A Flutter app paired with a Bluetooth bracelet. You tap, speak, and the audio goes through OpenAI Whisper for transcription, then an LLM classifies it as a note, event or reminder and writes it straight to your native calendar. Firebase handles auth, storage and real-time data. Push notifications run through Firebase Cloud Messaging triggered by Supabase serverless functions. Ships on iOS, Android and macOS from one codebase.",
    tech: ["Flutter", "OpenAI Whisper", "Firebase", "Supabase", "Google Calendar API", "iOS", "Android"],
    website: "https://doozyjo.fr",
    articleSlug: "mobile-platforms",
  },
  {
    slug: "fedsa-ai",
    title: "Federated Learning over 5G Networks",
    description:
      "A distributed AI pipeline built to detect anomalies in live 5G network traffic without centralising sensitive data. Kafka streams metrics from each remote node to a local training client, which trains an LSTM autoencoder. Model weights are exchanged over gRPC with Protobuf serialisation, then aggregated centrally using FedAvg. The global model runs real-time inference with MSE-based anomaly scoring. Orchestrated across nodes with Docker.",
    tech: ["Python", "Kafka", "gRPC", "Protobuf", "TensorFlow", "Federated Learning", "Docker"],
    github: "https://github.com/AbdelhakRazi/FedSA-AI",
    articleSlug: "fedsa-ai",
  },
];

export const experiences: Experience[] = [
  {
    company: "Amadeus",
    role: "Software Engineer, Build & DevOps",
    period: "2025 — Present",
    current: true,
    description:
      "At Amadeus I work on the infrastructure every engineer in the org depends on. The core of the work is the in-house C++ compilation toolchain used by 2,000+ developers, alongside a Java build acceleration extension I built from the ground up for Maven and Gradle, with dependency injection, JWT auth, and a full test suite integrated into CI. Both are deployed and managed on Azure AKS using ArgoCD, with separate staging and production environments and autoscaling. On the delivery side, I migrated legacy Jenkins C++ pipelines from SLES bare metal to Docker for better reproducibility, and automated CI/CD workflows with GitHub Actions connected to Azure Blob Storage and AAD. Outside the core platform work, I've been pushing GenAI adoption internally, writing Copilot skills, running demos, and getting teams to actually use it.",
  },
  {
    company: "Ericsson",
    role: "Software Engineer, C++ & Java",
    period: "2023 — 2025",
    description:
      "At Ericsson I worked on C++ systems running on live 5G telecom infrastructure at Bouygues, Jio, Verizon and AT&T. Alongside the systems work, I contributed to an internal Java testing framework that improved CI reliability across the team, and wrote automated cybersecurity tests covering network protocols with Spring, JUnit and TestNG. Test coverage spanned unit, integration and performance using Google Test and Google Mock. On the side, I organized a team AI hackathon that ended with engineers who had never touched ML building and shipping models.",
  },
];

export const techDomains: TechDomain[] = [
  {
    domain: "Cloud & DevOps",
    description:
      "Azure (AKS, Blob Storage, Active Directory), Docker, Kubernetes, Jenkins, GitHub Actions, container orchestration, CI/CD pipelines",
  },
  {
    domain: "APIs & Microservices",
    description:
      "Go (Gorilla Mux), Spring Boot, REST API design, OpenAPI, JWT auth, PostgreSQL",
  },
  {
    domain: "Event-Driven & Messaging",
    description:
      "Kafka, RabbitMQ, gRPC/Protobuf, async communication patterns, distributed coordination, topic exchanges, work queues",
  },
  {
    domain: "Systems Programming",
    description:
      "C++17, modular monolith design, unix sockets, gRPC, Protobuf, service discovery, API gateway, multi-threaded servers, POSIX",
  },
  {
    domain: "Mobile Platforms",
    description:
      "Flutter/Dart, BLoC architecture, Firebase, Supabase, multi-platform (iOS/Android/macOS)",
  },
  {
    domain: "AI & GenAI",
    description:
      "RAG pipelines, Pinecone, TensorFlow/Keras, LLM agent Skills, federated learning, Copilot workflow automation",
  },
];
