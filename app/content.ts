// ---------------------------------------------------------------------
// ABOUT
// ---------------------------------------------------------------------

export const ABOUT_HEADLINE = "Where Data, Systems, and Business Decisions Meet.";

export const ABOUT_DESCRIPTION =
  "I’m an Information Systems graduate from ITS, focused on **data analysis**. I **turn raw data into actionable business insights** using **SQL**, **Python**, **Excel**, **Power BI**, and **DAX**, with hands-on experience building **KPI dashboards**, developing **data pipelines**, and analyzing operational and sales performance across internship, academic, and personal projects. I combine analytical thinking, data visualization, and business process understanding to support data-driven decisions.";

export const ABOUT_INFO: {
  label: string;
  title: string;
  titleMeta?: string;
  detail?: string;
  detailMeta?: string;
  note?: string;
  tags?: string[];
}[] = [
  {
    label: "Education",
    title: "Institut Teknologi Sepuluh Nopember (ITS)",
    titleMeta: "2022 — 2026",
    detail: "Bachelor of Computer Science in Information Systems",
    detailMeta: "GPA 3.59 / 4.00 (Cum Laude)",
  },
  {
    label: "Thesis",
    title:
      "Traffic Load Forecasting on Weighing Bridges Using a Hybrid Temporal Convolutional Network and Bidirectional Long Short-Term Memory Model",
    detail:
      "The hybrid model reached **35.9% MAPE**, outperforming the best baseline at 44.3%, and was deployed in a **Streamlit forecasting app**.",
    tags: ["Time-Series Forecasting", "TCN", "BiLSTM", "Streamlit"],
  },
  {
    label: "Location",
    title: "Surabaya, East Java, Indonesia",
  },
  {
    label: "Language",
    title: "Indonesian (Native), English (Professional Working Proficiency)",
  },
];

// ---------------------------------------------------------------------
// EXPERIENCE
// ---------------------------------------------------------------------

export const EXPERIENCE_HEADLINE =
  "Learning through real work and practical experience.";

export const EXPERIENCE_INTRO =
  "From professional experience to academic roles, I’ve learned to approach new challenges with curiosity and a practical mindset.";

export const EXPERIENCES: {
  organization: string;
  role: string;
  date: string;
  highlights: string[];
  tags: string[];
}[] = [
  {
    organization: "PT Pelindo Energi Logistik",
    role: "IT Intern (Data Analytics & Automation)",
    date: "Aug — Dec 2025",
    highlights: [
      "Developed a **2-page Power BI dashboard (14 visuals)** to monitor **300 customer invoices from 13 partner companies** across payment status, receivables aging, top customers, and revenue by business segment, with date, status, and company filters and a detail page for invoice-level tracing.",
      "Wrote **4 DAX measures** using a selector table and SWITCH logic, letting users toggle KPI cards and charts between invoice count and total value, with automatic unit formatting and an unpaid-invoice percentage metric.",
      "Built a **Python and Node.js help-desk chatbot prototype** integrated with internal ticketing APIs, supporting **5 ticketing and account-management actions** while improving request handling through session locking, message queuing, and standardized error handling.",
    ],
    tags: ["Power BI", "DAX", "Python", "Node.js", "REST API"],
  },
  {
    organization: "Information Systems Department, ITS",
    role: "Power BI & KPI Dashboard Teaching Assistant",
    date: "Nov — Dec 2025",
    highlights: [
      "Guided **22 students across 2 groups** in designing IT performance KPIs across the four IT Balanced Scorecard perspectives and building interactive Power BI dashboards, as part of a 3-assistant team supporting **60+ students across 6 groups**.",
      "Advised students in defining **KPI formulas** and **targets** and structuring data models in **Power BI**, translating operational data into KPI cards, trend charts, and perspective-level views.",
      "Evaluated dashboards across **3 progress checkpoints** and the final presentation on KPI relevance, calculation accuracy, and readability, helping both groups deliver complete 4-perspective dashboards.",
    ],
    tags: ["Power BI", "KPI Design", "Data Modeling", "Data Visualization"],
  },
];

// ---------------------------------------------------------------------
// PROJECTS
// ---------------------------------------------------------------------

export const PROJECTS_HEADLINE =
  "Building with data, solving problems, and learning along the way.";

export const PROJECTS_INTRO =
  "A selection of projects across data analytics, data engineering, and optimization — built through personal initiative, coursework, and hands-on problem solving.";

export const PROJECTS: {
  category: string;
  type: "Personal Project" | "Academic Project";
  year: string;
  title: string;
  description: string;
  explored: string;
  keyWork: string;
  tags: string[];
  images: { src: string; alt: string }[];
  link?: { label: string; href: string };
}[] = [
  {
    category: "Business Intelligence",
    type: "Personal Project",
    year: "2026",
    title: "Sales Analytics Dashboard",
    description:
      "An interactive sales analytics dashboard built to explore revenue, product performance, and customer purchasing behavior across sales channels, store locations, and product categories from 2021–2025.",
    explored:
      "Designed a **10-table PostgreSQL database** containing **13,000+ customers** and **100,000+ synthetic orders**, with data validation and customer segmentation.",
    keyWork:
      "Built interactive Power BI dashboards to analyze revenue, product performance, and customer behavior, using **DAX measures** and **custom SVG/HTML visuals** with dynamic CSS tooltips.",
    tags: ["PostgreSQL", "Power BI", "DAX", "Customer Segmentation", "SVG / HTML"],
    images: [
      { src: "/projects/sales-dashboard.png", alt: "Sales Analytics Dashboard" },
    ],
    link: {
      label: "View Dashboard",
      href: "https://app.powerbi.com/view?r=eyJrIjoiYjUxNzJkZDAtOGJkNi00MDQxLWI3ZGMtZjY4ZDBiYmJlNjZlIiwidCI6IjFkNTE2OWFjLWM3Y2ItNDI3NS05NzY0LWJmOGM5YzM2NGE0YyIsImMiOjEwfQ%3D%3D",
    },
  },
  {
    category: "Dashboard",
    type: "Academic Project",
    year: "2025",
    title: "IT Performance & KPI Dashboard",
    description:
      "An interactive Power BI dashboard designed to visualize IT performance through defined KPIs, targets, and the four perspectives of the IT Balanced Scorecard.",
    explored:
      "Defined KPI formulas and targets across **4 IT Balanced Scorecard perspectives** as part of a team dashboard project.",
    keyWork:
      "Co-developed the Power BI dashboard and owned **2 KPIs**, including Endpoint Stability Rate, from defining formulas and targets to visualization.",
    tags: ["Power BI", "KPI Design", "IT Balanced Scorecard", "Data Visualization"],
    images: [
      { src: "/projects/kpi-dashboard.png", alt: "IT Performance and KPI Dashboard" },
    ],
  },
  {
    category: "Optimization",
    type: "Academic Project",
    year: "2025",
    title: "Multi-Location Route Optimization for Health Inspection",
    description:
      "A route optimization project for planning health inspection visits across multiple hospitals in Jakarta while accounting for time-window constraints.",
    explored:
      "Clustered **60 Jakarta hospitals** into **6 balanced groups** using constrained K-Means in Python for a vehicle routing problem with time windows (VRPTW).",
    keyWork:
      "Applied Particle Swarm Optimization (PSO), achieving the lowest total route distance of **215 km** among **4 algorithms** compared.",
    tags: ["Python", "Constrained K-Means", "PSO", "VRPTW"],
    images: [
      {
        src: "/projects/route-optimization.png",
        alt: "Route optimization for health inspectors in Jakarta",
      },
    ],
  },
  {
    category: "Data Engineering",
    type: "Academic Project",
    year: "2024",
    title: "Data Integration & Warehousing for Student Admission Selection",
    description:
      "A data integration and warehousing project focused on transforming multiple MySQL source tables into a structured analytical data warehouse.",
    explored:
      "Built **6 Pentaho ETL transformations** to integrate data from **16 MySQL source tables** into a star schema with **3 fact and 5 dimension tables**.",
    keyWork:
      "Implemented surrogate keys, upsert logic, lookups, and JavaScript parsing for a **40+ attribute applicant dimension**, and validated outputs against an instructor-provided reference database.",
    tags: ["Pentaho Data Integration", "MySQL", "ETL", "Star Schema", "Data Warehousing"],
    images: [
      { src: "/projects/pdi-workflow-1.png", alt: "Pentaho ETL workflow, part 1" },
      { src: "/projects/pdi-workflow-2.png", alt: "Pentaho ETL workflow, part 2" },
    ],
  },
];

// ---------------------------------------------------------------------
// JOURNEY
// ---------------------------------------------------------------------

export const JOURNEY_HEADLINE =
  "Beyond the classroom, every experience became part of the journey.";

export const JOURNEY_INTRO =
  "From student organizations to event teams, these experiences shaped how I collaborate, communicate, and take responsibility.";

export const JOURNEY: {
  organization: string;
  role: string;
  date: string;
  focus: string;
  description: string;
  badge?: string;
  image: { src: string; alt: string };
}[] = [
  {
    organization: "Himpunan Mahasiswa Sistem Informasi",
    role: "Secretary of Social Development",
    date: "Apr — Dec 2024",
    focus: "Administrative & Data Management",
    description:
      "Managed administrative records and fundraising activities supporting **6 students**, achieving **100% of KPI targets**, while tracking budgets and financial plans for the SINERGI program to support financial monitoring. Received Best Staff recognition for consistent KPI achievement.",
    badge: "Best Staff",
    image: {
      src: "/journey/hmsi.jpeg",
      alt: "Himpunan Mahasiswa Sistem Informasi",
    },
  },
  {
    organization: "Information Systems Expo (ISE!) 2024",
    role: "Head of Consumption",
    date: "May — Oct 2024",
    focus: "Procurement & Budget Management",
    description:
      "Coordinated **8 team members** and procurement for **300+ attendees and staff**, monitoring an **IDR 8.5 million+ budget** and tracking procurement expenses while maintaining purchasing schedules and vendor requirements to support operational planning.",
    image: {
      src: "/journey/ise.jpeg",
      alt: "Information Systems Expo 2024",
    },
  },
  {
    organization: "Ini Lho ITS! 2024",
    role: "Secretary & Treasurer of Consumption",
    date: "Sep 2023 — Feb 2024",
    focus: "Financial Reporting & Budget Tracking",
    description:
      "Managed an **IDR 50 million+ budget** for **1,000+ attendees and staff**, tracking expenditures in Google Sheets to maintain accurate financial records and preparing financial accountability reports to support transparent budget monitoring.",
    image: {
      src: "/journey/ilits.jpeg",
      alt: "Ini Lho ITS! 2024",
    },
  },
  {
    organization: "GERIGI ITS 2023",
    role: "Treasurer of Consumption",
    date: "Jul — Aug 2023",
    focus: "Budget Control & Expense Tracking",
    description:
      "Managed an **IDR 130 million+ budget** for a 3-day event serving **6,500+ participants**, tracking expenses, negotiating with vendors, and monitoring procurement costs and meal requirements throughout the event to support budget control.",
    image: {
      src: "/journey/gerigi.jpeg",
      alt: "GERIGI ITS 2023",
    },
  },
];

// ---------------------------------------------------------------------
// SKILLS (tidak ditampilkan)
// ---------------------------------------------------------------------

export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Data Analysis & Business Intelligence",
    items: [
      "Exploratory Data Analysis (EDA)",
      "Business Performance Analysis",
      "KPI Monitoring",
      "Trend Analysis",
      "Data-Driven Decision-Making",
    ],
  },
  {
    group: "Data Visualization & Reporting",
    items: [
      "Power BI",
      "Dashboard Development",
      "DAX",
      "KPI Design",
      "Data Storytelling",
      "Interactive Reporting",
    ],
  },
  {
    group: "Database & Querying",
    items: [
      "SQL",
      "PostgreSQL",
      "MySQL",
      "Relational Database Design",
      "Data Modeling",
      "Query Optimization",
    ],
  },
  {
    group: "Data Engineering & Integration",
    items: [
      "ETL/ELT",
      "Data Cleaning",
      "Data Transformation",
      "Data Warehousing",
      "Star Schema",
      "Pentaho Data Integration",
    ],
  },
  {
    group: "Programming & Statistical Analysis",
    items: [
      "Python",
      "Statistical Analysis",
      "Time-Series Forecasting",
      "Clustering",
    ],
  },
  {
    group: "Digital & Development Tools",
    items: [
      "Microsoft Excel",
      "Google Sheets",
      "Streamlit",
      "Node.js",
      "REST APIs",
      "Git",
    ],
  },
  {
    group: "Professional Skills",
    items: [
      "Analytical Thinking",
      "Attention to Detail",
      "Problem Solving",
      "Critical Thinking",
      "Communication",
      "Initiative",
      "Teamwork",
      "Time Management",
    ],
  },
];

// ---------------------------------------------------------------------
// CERTIFICATIONS & TRAINING
// ---------------------------------------------------------------------

export const CERTIFICATIONS_HEADLINE =
  "Sharpening my skills, one course at a time.";

export const CERTIFICATIONS_INTRO =
  "Structured courses that strengthened my skills in SQL, Excel, data analysis, and development fundamentals.";

export const LINKEDIN_URL = "https://www.linkedin.com/in/naifa-mumtazah-rendiga/";
export const CERTIFICATIONS_LINK_LABEL = "More credentials on LinkedIn";

export const CERTIFICATIONS: {
  title: string;
  issuer: string;
  date: string;
  description: string;
  competencies: string[];
}[] = [
  {
    title: "Microsoft Excel Intermediate",
    issuer: "MySkill",
    date: "Oct 2026",
    description:
      "Intermediate Excel training covering lookup and INDEX MATCH formulas, PivotTables with relationships, slicers, and timelines, logical and dynamic array functions, and interactive charts built around data visualization best practices.",
    competencies: [
      "PivotTable",
      "INDEX MATCH",
      "XLOOKUP",
      "Logical Functions",
      "Dynamic Array Formulas",
      "Excel Charts",
      "Data Formatting",
    ],
  },
  {
    title: "SQL for Data Analysis",
    issuer: "MySkill",
    date: "Oct 2026",
    description:
      "A MySQL-based course covering database design, data preparation, joins, subqueries, CTEs, window functions, and stored procedures, finishing with business data analysis such as revenue, profit, ARPU, and user-centric KPIs, plus practice cases built on realistic business data.",
    competencies: [
      "SQL",
      "MySQL",
      "Relational Databases",
      "Data Preparation",
      "Joins & Subqueries",
      "CTE",
      "Window Functions",
      "Stored Procedures",
      "Business Data Analysis",
      "Data Storytelling",
    ],
  },
  {
    title: "Data Analysis",
    issuer: "MySkill",
    date: "Sep 2026",
    description:
      "Covers the end-to-end analysis workflow: data cleaning and EDA, statistics, business, marketing, and product metrics, cohort and retention analysis, regression, K-Means clustering, and data visualization, with prediction and clustering model projects.",
    competencies: [
      "Data Cleaning",
      "Exploratory Data Analysis (EDA)",
      "Statistical Analysis",
      "Business Metrics & KPI",
      "Regression & Clustering",
      "Data Visualization",
    ],
  },
  {
    title: "DevNet Associate (Course Completion)",
    issuer: "Cisco Networking Academy",
    date: "Sep 2025",
    description:
      "A course aligned with the DevNet Associate (200-901) exam, covering Python and Linux basics, software design and version control with Git, REST APIs, network fundamentals, application deployment and security with Docker and CI/CD, and infrastructure automation.",
    competencies: [
      "REST APIs",
      "Python Programming",
      "JSON/XML/YAML Data Parsing",
      "Git Version Control",
      "Network Fundamentals",
      "Network Automation",
    ],
  },
];

// ---------------------------------------------------------------------
// CONTACT
// ---------------------------------------------------------------------

export const EMAIL = "nevamuren@gmail.com";

export const CONTACT_INTRO =
  "Currently open to early-career opportunities where I can contribute through data analytics, data engineering, and business intelligence, while continuing to learn and grow through meaningful work.";

export const CONTACT_LINKEDIN_LABEL = "Connect with me on LinkedIn";