export const navLinks = [
    { id: "about", label: "01. About" },
    { id: "experience", label: "02. Experience" },
    { id: "projects", label: "03. Projects" },
    { id: "contact", label: "04. Contact" },
  ];
  
  export const skills = [
    "Python (Pandas, NumPy)",
    "SQL (CTEs, Window Functions)",
    "PySpark / ETL Pipelines",
    "AWS S3 / Snowflake",
    "Scikit-learn / LightGBM",
    "TensorFlow / VGG-19",
    "LLMs / RAG (LangGraph, FAISS)",
    "Predictive Modeling",
    "Power BI / Tableau",
    "KPI Dashboards & Forecasting",
    "Data Governance / QA",
    "Docker • Kubernetes • CI/CD",
  ];
  
  export const skillOrbits = [
    { label: "LLMs / RAG", color: "text-emerald-400" },
    { label: "Data Engineering", color: "text-sky-400" },
    { label: "ML / Modeling", color: "text-orange-400" },
    { label: "Dashboards & BI", color: "text-fuchsia-400" },
    { label: "Cloud & MLOps", color: "text-lime-400" },
  ];
  
  export const experience = [
    {
      role: "Graduate Research Assistant — Clinical Data Analytics",
      company: "Stony Brook University",
      period: "Jan 2024 – Present",
      bullets: [
        "Standardized and processed 1B+ electronic health records using Python, PySpark, and SQL ETL pipelines on AWS S3.",
        "Built Random Forest / Logistic Regression models for clinical risk prediction and dementia risk stratification (AUC ~0.87).",
        "Designed Tableau / Power BI dashboards with KPI, ROC, and risk-trend visuals to support clinical decision-making.",
        "Mentored research interns on data wrangling, model evaluation, and governance best practices.",
      ],
    },
    {
      role: "Data Analyst",
      company: "Accenture",
      period: "Oct 2021 – Dec 2023",
      bullets: [
        "Automated KPI dashboards in Power BI and Excel, reducing reporting time by ~35%.",
        "Built Python + SQL + Power Query automations, cutting report latency by ~40% and improving data accuracy by ~30%.",
        "Delivered real-time performance dashboards across multiple client divisions for predictive trend analysis.",
        "Collaborated with DevOps teams (Docker, Jenkins, Kubernetes, Redis) to productionize analytics workloads.",
      ],
    },
  ];
  
  export const projects = [
    {
      title: "TravelWise – Adaptive RAG Travel Assistant",
      tag: "Featured Project",
      description:
        "Adaptive NYC travel assistant using LangGraph + FAISS + Flask that delivers real-time, context-aware recommendations and ~30% better query relevance through retrieval-aware routing.",
      stack: ["LangGraph", "FAISS", "Flask", "LLM / RAG"],
      link: "https://github.com/gtejaswi2212/TravelWise-Project-Using-RAG", // update if different
    },
    {
      title: "Credit Risk Modeling & Default Scoring",
      tag: "Featured Project",
      description:
        "LightGBM credit risk model (AUC 0.93) on 5M+ financial records, reducing false positives by 28% with explainable Tableau dashboards.",
      stack: ["Python", "LightGBM", "SQL / AWS S3", "Tableau"],
      link: "https://github.com/gtejaswi2212", // plug correct repo
    },
    {
      title: "Retail Sales Performance Dashboard",
      tag: "Featured Project",
      description:
        "Multi-page Tableau dashboard unifying sales, marketing, and inventory data, improving decision speed by ~30%.",
      stack: ["Tableau", "SQL", "Excel", "Forecasting"],
      link: "https://github.com/gtejaswi2212/retail-sales-performance-dashboard",
    },
    {
      title: "Customer Churn Prediction",
      tag: "Featured Project",
      description:
        "Ensemble churn models (Random Forest, XGBoost) achieving ~89% accuracy and cutting analysis time by ~40%.",
      stack: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      link: "https://github.com/gtejaswi2212/bank-customer-churn-prediction",
    },
    {
      title: "Customer Sentiment Analysis",
      tag: "Featured Project",
      description:
        "NLP pipeline on 50K+ reviews with spaCy / TextBlob, visualized via Tableau dashboards for product prioritization.",
      stack: ["Python", "NLP", "Tableau", "TextBlob"],
      link: "https://github.com/gtejaswi2212",
    },
    {
      title: "Supply Chain Delay Prediction",
      tag: "Featured Project",
      description:
        "Logistic regression and random forest models to predict shipment delays with 18% higher accuracy and alerting dashboards.",
      stack: ["Python", "Scikit-learn", "SQL", "ETL"],
      link: "https://github.com/gtejaswi2212",
    },
  ];
  