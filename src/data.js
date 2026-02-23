export const navLinks = [
  { id: "about", label: "01. About" },
  { id: "experience", label: "02. Experience" },
  { id: "projects", label: "03. Projects" },
  { id: "education", label: "04. Education" },
  { id: "contact", label: "05. Contact" },
];

export const skills = [
  "Python • SQL • R • C++ • Java",
  "TensorFlow • PyTorch • LightGBM • XGBoost",
  "LangChain • LangGraph • FAISS • RAG Pipelines",
  "LLM Integration (GPT, Claude) • Prompt Engineering",
  "Agentic Workflows • Vector Databases",
  "AWS (S3, Lambda, SageMaker) • Azure • GCP (BigQuery, Vertex AI)",
  "PySpark • Databricks • Kafka • ETL/ELT",
  "Docker • Kubernetes • CI/CD • MLOps",
  "Predictive Modeling • Model Monitoring",
];

export const skillOrbits = [
  { label: "Generative AI / RAG", color: "text-emerald-400" },
  { label: "ML Engineering", color: "text-sky-400" },
  { label: "Cloud & MLOps", color: "text-orange-400" },
  { label: "Data Engineering", color: "text-fuchsia-400" },
  { label: "Production Systems", color: "text-lime-400" },
];

export const experience = [
  {
    role: "Data Scientist – Explainable AI & Agentic Workflows",
    company: "Chicago Education Advocacy Cooperative",
    location: "Remote",
    period: "Jan 2025 – Present",
    paragraphs: [
      "Building explainable AI systems and intelligent agentic workflows to support education advocacy and decision-making.",
      "Designing and deploying end-to-end AI solutions that translate complex models into actionable insights for non-technical stakeholders.",
    ],
  },
  {
    role: "Data Analyst – Research & Product Analytics",
    company: "Stony Brook University",
    period: "Jan 2024 – Present",
    paragraphs: [
      "Built production-grade data models with dimensional schemas, bringing accuracy to 99.7% across 5M+ records.",
      "Established a governance framework across 50 attributes with automated validation, cutting data quality issues by 78%.",
      "Developed 15+ predictive metrics from complex longitudinal data; bridged business questions and technical answers for cross-functional teams.",
    ],
  },
  {
    role: "Data Analyst – Scaling Retail Analytics at Enterprise Speed",
    company: "Accenture",
    period: "Oct 2021 – Dec 2023",
    paragraphs: [
      "Redesigned data models and optimized queries on retail platforms processing 5M+ transactions daily, achieving 60% performance gains.",
      "Supported schema transformations for 2M+ users with zero-downtime migrations and rigorous governance.",
      "Built automated quality monitoring with version-controlled validation rules, cutting production incidents by 30%.",
      "Partnered with product and BI teams to define KPIs, helping the organization make decisions 40% faster; used AI-assisted development to accelerate delivery by 20%.",
    ],
  },
];

export const projects = [
  {
    title: "E-Commerce RAG Pipeline",
    tag: "Featured Project",
    description:
      "Built an adaptive RAG system improving search relevance by 30% and reducing hallucination by 40%. End-to-end pipeline with retrieval, reranking, and LLM integration for production use.",
    stack: ["Python", "LangChain", "FAISS", "RAG", "LLM"],
    link: "https://github.com/gtejaswi2212",
  },
  {
    title: "Credit Risk Scoring ML Pipeline",
    tag: "Featured Project",
    description:
      "Developed full-stack ML pipeline on 5M+ records for credit risk scoring. Reduced false positives by 28% with interpretable models and production monitoring.",
    stack: ["Python", "LightGBM", "SQL", "ETL", "MLOps"],
    link: "https://github.com/gtejaswi2212",
  },
  {
    title: "Medical Imaging Classification",
    tag: "Featured Project",
    description:
      "Fine-tuned deep learning model achieving 97% accuracy on 25K+ HIPAA-regulated medical images. Deployed with robust validation and monitoring.",
    stack: ["Python", "TensorFlow", "PyTorch", "Deep Learning"],
    link: "https://github.com/gtejaswi2212",
  },
];

export const education = [
  {
    degree: "MS Data Science",
    school: "Stony Brook University",
    period: "2024 – 2025",
    coursework: [
      "Statistical Computing",
      "Predictive Modeling",
      "Big Data Analysis",
      "NLP",
      "Large Language Models",
      "MLOps",
    ],
  },
];
