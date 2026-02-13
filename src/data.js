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
      role: "Bussiness Intelligence & Data Analyst - Turning Educational Data into Strategic Foresight",
      company: "Chicago Education Advocacy Cooperative",
      period: "Jan 2025 – Present",
      paragraphs: [
        "Building scalable data pipelines & feature engineering workflows powering forecasting & anomaly detection on operational datasets.",
        "Implementing rigorous data validation and schema contracts to ensure reliability of ML inputs and downstream insights. ",
      
      ],
    },

    {
      role: "Data Analyst – Research & Product Analytics | Building Trust Through Data Quality",
      company: "Stony Brook University",
      period: "Jan 2024 – Present",
      paragraphs: [
        "At Stony Brook University, I faced a common challenge: 5 million records that nobody fully trusted. I started where it mattered most, building production grade data models with dimensional schemas that brought accuracy to 99.7%.\n",
        
        "But clean data is only half the battle. I established a governance framework across 50 attributes with automated validation, cutting data quality issues by 78%. This wasn't just technical work, it was about giving stakeholders confidence in their decisions.\n",
        "With reliable infrastructure in place, I developed 15+ predictive metrics from complex longitudinal data, transforming raw numbers into clear insights that actually influenced decisions. Working closely with cross-functional teams, I became the bridge between business questions and technical answers.\n"
      ],
    },
    {
      role: "Data Analyst - Scaling Retail Analytics at Enterprise Speed",
      company: "Accenture",
      period: "Oct 2021 – Dec 2023",
      paragraphs: [
        "At Accenture, I worked on systems where downtime wasn't an option. Retail platforms processing 5 million transactions daily. My challenge was making them faster and more reliable simultaneously.",
        "I redesigned data models and optimized queries, achieving 60% performance gains while supporting schema transformations for 2 million+ users. The key? Zero-downtime migrations backed by rigorous governance, no user ever felt the change happening beneath them.",
        "Reliability became my obsession. I built automated quality monitoring with version-controlled validation rules, cutting production incidents by 30%. But speed mattered too. By partnering closely with product managers and BI teams to define the right KPIs, I helped the organization make decisions 40% faster.",
        "I also embraced AI-assisted development early, using generative tools to optimize SQL queries and accelerate delivery by 20% proving that the right technology amplifies good analytical thinking.",
      ],
    },
  ];
  
  export const projects = [
    {
      title: "Product Performance Analytics Dashboard",
      tag: "Featured Project",
      description:
        "Built end-to-end Looker solution with LookML models tracking product design, sales, and inventory metrics across 50K+ SKUs, enabling 35% faster trend identification.",
      stack: ["LLookML, SQL, Looker, BigQuery"],
      // link: "https://github.com/gtejaswi2212/TravelWise-Project-Using-RAG", // update if different
    },
    {
      title: "Retail Demand Forecasting & Predictive Analytics",
      tag: "Featured Project",
      description:
        "Developed predictive models using 5M+ transactions to forecast seasonal patterns and customer behavior, improving inventory planning accuracy by 28%.",
      stack: ["Python, SQL, scikit-learn, Tableau", "Tableau"],
      // link: "https://github.com/gtejaswi2212", // plug correct repo
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
      title: "Product Design Data Pipeline & Quality Framework",
      tag: "Featured Project",
      description:
        "Engineered automated pipeline integrating product specs, timelines, and sourcing data for 25K+ records, reducing manual reconciliation by 70% through governance framework.",
      stack: ["Python, SQL, PostgreSQL, Git"],
      //link: "https://github.com/gtejaswi2212/bank-customer-churn-prediction",
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
  