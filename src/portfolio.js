/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Aditya Raj | Healthcare AI/ML Engineer",
  description:
    "Healthcare AI/ML engineer building clinical decision-support models and population-health early-warning systems: sensitivity-first risk scoring, explainable alerts with SHAP + LLMs, and privacy-by-design health data pipelines.",
  og: {
    title: "Aditya Raj | Healthcare AI/ML Engineer",
    type: "website",
    url: "http://dungeonmasterji.me/",
  },
};

//Home Page
const greeting = {
  title: "Aditya Raj",
  logo_name: "Aditya Raj",
  nickname: "dungeonmasterji",
  subTitle:
    "Healthcare AI/ML engineer building clinical decision-support and population-health ML systems that are explainable, honestly evaluated and privacy-safe.",
  resumeLink:
    "https://drive.google.com/file/d/1AUfkKhqOp9Oy1PLijooTxD7MsFehhuBo/view?usp=sharing",
  portfolio_repository: "https://github.com/Dungeon-Masterji/portfolio",
  githubProfile: "https://github.com/Dungeon-Masterji",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Dungeon-Masterji",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dungeonmasterji/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@DungeonMasterji",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:adityaraj20112005@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/dungeonmasterji",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/dungeonmasterji/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/dungeonmasterji",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Clinical Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "• Building clinical decision-support models for risk flagging, tuned sensitivity-first so high-risk patients are not missed (HeartGuard AI: sensitivity 0.902, ROC AUC 0.908).",
        "• Leakage-safe preprocessing, nested stratified cross-validation, ensemble methods, and threshold selection that encodes clinical priorities.",
        "• Time-series forecasting and anomaly detection for population-health surveillance with Prophet, PyOD ensembles and Bayesian signal fusion.",
        "• Writing model cards, data dictionaries and ADRs that make limitations as clear as headline metrics.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { backgroundColor: "transparent", color: "#3776AB" },
        },
        {
          skillName: "scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: { color: "#F7931E" },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos:pytorch-icon",
          style: {},
        },
        {
          skillName: "LightGBM",
          fontAwesomeClassname: "mdi:tree-outline",
          style: { color: "#02569B" },
        },
        {
          skillName: "pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: { color: "#150458" },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: { color: "#013243" },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "logos:jupyter",
          style: {},
        },
      ],
    },
    {
      title: "Explainable & Responsible Health AI",
      fileName: "ProjectsImg",
      skills: [
        "• Explaining every prediction and alert with TreeSHAP drivers and grounded LLM narratives (English and Arabic), validated for numbers, schema and urgency.",
        "• Evaluating honestly: calibration and Brier scores, backtesting with zero lookahead, and comparing results against chance baselines instead of quoting headline numbers.",
        "• Privacy-by-design health data: aggregate-only signals, small-cell suppression (< 5 records), synthetic Synthea populations, and no personal data in LLM prompts.",
      ],
      softwareSkills: [
        {
          skillName: "SHAP",
          fontAwesomeClassname: "mdi:chart-waterfall",
          style: { color: "#8B5CF6" },
        },
        {
          skillName: "Synthea (synthetic patients)",
          fontAwesomeClassname: "mdi:account-heart-outline",
          style: { color: "#E11D48" },
        },
        {
          skillName: "Model Cards",
          fontAwesomeClassname: "mdi:card-text-outline",
          style: { color: "#0F766E" },
        },
        {
          skillName: "Calibration & Backtesting",
          fontAwesomeClassname: "mdi:chart-bell-curve-cumulative",
          style: { color: "#0E7490" },
        },
        {
          skillName: "Privacy by Design",
          fontAwesomeClassname: "mdi:shield-lock-outline",
          style: { color: "#16A34A" },
        },
      ],
    },
    {
      title: "GenAI & LLM Agents",
      fileName: "FullStackImg",
      skills: [
        "• Building LLM-powered workflows that turn model output into structured, actionable guidance with schema validation and template fallbacks.",
        "• Multi-agent systems with LangGraph and LangChain, including review loops that send drafts back for revision.",
        "• Evaluation-driven agent development: raised a governed analytics agent from 40% to 90% strict accuracy on a 30-question gold set.",
      ],
      softwareSkills: [
        {
          skillName: "LangChain",
          fontAwesomeClassname: "simple-icons:langchain",
          style: { color: "#1C3C3C" },
        },
        {
          skillName: "LangGraph",
          fontAwesomeClassname: "mdi:graph-outline",
          style: { color: "#1C3C3C" },
        },
        {
          skillName: "Groq / Llama",
          fontAwesomeClassname: "simple-icons:meta",
          style: { color: "#0467DF" },
        },
        {
          skillName: "Snowflake Cortex",
          fontAwesomeClassname: "simple-icons:snowflake",
          style: { color: "#29B5E8" },
        },
        {
          skillName: "Hugging Face / Stable Diffusion",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: { color: "#FFD21E" },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: { color: "#FF4B4B" },
        },
      ],
    },
    {
      title: "Model Serving & MLOps",
      fileName: "CloudInfraImg",
      skills: [
        "• Serving models through FastAPI + Pydantic APIs with clinician-facing React / Next.js frontends.",
        "• Scheduled ML pipelines on GitHub Actions, Dockerized runtimes, and deployments on Azure and Vercel.",
        "• Alert routing and escalation with n8n, audit trails, and 125+ automated tests covering fusion, explainability and backtests.",
      ],
      softwareSkills: [
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: { color: "#009688" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: { color: "#0078D4" },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: { color: "#2088FF" },
        },
        {
          skillName: "n8n",
          fontAwesomeClassname: "simple-icons:n8n",
          style: { color: "#EA4B71" },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "material-symbols:sql",
          style: { color: "#000000" },
        },
        {
          skillName: "Airflow",
          fontAwesomeClassname: "simple-icons:apacheairflow",
          style: { color: "#017CEE" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/DungeonMasterji/",
    },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/DungeonMasterji",
    // },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ms240410700003",
    },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "https://codeforces.com/profile/dungeonmasterji",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@dungeonmasterji/",
    // },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/dungeonmasterji",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: " Medahvi Skills University",
      subtitle:
        "B.Tech in Computer Science and Engineering specialization in Artificial Intelligence and Machine Learning (AI&ML)",
      logo_path: "msu_logo.svg",
      alt_name: "MSU Sikkim",
      duration: "2024 - 2028",
      descriptions: [
        "• Degree-awarding university for my AI/ML Engineering program in collaboration with Polaris School of Technology.",
        "• Completed coursework covering Data Structures, Algorithms, Database Management Systems, Operating Systems, Computer Networks, Artificial Intelligence, and Machine Learning.",
        "• Academic curriculum complemented by project-based learning focused on software engineering, AI systems, and modern data technologies.",
      ],
      website_link: "https://www.msu.edu.in/",
    },
    {
      title: "Polaris School Of Technology",
      subtitle:
        "Computer Science AI/Ml Engineering affliated with Medahvi Skills University",
      logo_path: "pst_logo.png",
      alt_name: "PST Bengaluru",
      duration: "2024 - 2028",
      descriptions: [
        "• Pursuing AI/ML Engineering with a focus on healthcare AI: clinical decision support, explainability, and safe deployment of models on health data.",
        "• Built HeartGuard AI and Sentinel Grid as end-to-end health-tech projects, from data validation and modelling through APIs, dashboards and model cards.",
        "• Contributed 15+ merged pull requests to CNCF open-source projects (Meshery / Layer5).",
        "• During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://polariscampus.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      isStack: true,
      title: "Palantir Foundry",
      logo_path: "PLTR.D.svg",
      alt_name: "Palantir Learn",
      color_code: "#000000",
      certificates: [
        {
          title: "My First AIP Workflow",
          certificate_link: "https://verify.skilljar.com/c/zugiu8wyr2q5",
        },
        {
          title: "Creating Ontology",
          certificate_link: "https://verify.skilljar.com/c/hro85menhq9k",
        },
        {
          title: "Foundry & AIP Builder Foundations",
          certificate_link: "https://verify.skilljar.com/c/zuqpiiao4qvd",
        },
        {
          title: "Building My First Application",
          certificate_link: "https://verify.skilljar.com/c/qguwa9dbaznd",
        },
        {
          title: "Building My First Pipeline",
          certificate_link: "https://verify.skilljar.com/c/mbpujssmp688",
        },
        {
          title: "Transforming Data with Code Repository",
          certificate_link: "https://verify.skilljar.com/c/swf4bz4ghaap",
        },
        {
          title: "Data Analysis in Quiver",
          certificate_link: "https://verify.skilljar.com/c/wjq6w6q3whep",
        },
        {
          title: "First Ontology Functions",
          certificate_link: "https://verify.skilljar.com/c/5jfvgvikjaby",
        },
      ],
    },
    {
      title: "Summer Of Bitcoin",
      subtitle: "Designer Track Challenges",
      logo_path: "sobd.svg",
      certificate_link:
        "https://drive.google.com/file/d/1NSiUy9X2AjIYdf5LRWJd-2NZBZ9pj9Ao/view?usp=sharing",
      alt_name: "Summer of Bitcoin",
      color_code: "#ffffff",
    },
    {
      title: "Blockchain Developer Training",
      subtitle: "Blockchain",
      logo_path: "blockchain.svg",
      certificate_link:
        "https://drive.google.com/file/d/1lounKZYBwR-xu74ScLmuZ-BIKamOnIaA/view?usp=sharing",
      alt_name: "Blockchain Developer Training",
      color_code: "#ffffff",
    },
    // Add future non-Palantir certs (e.g. blockchain, GCP, NPTEL) here as
    // normal single-card entries, same shape as Summer Of Bitcoin above.
    // If you ever want a second rack — e.g. all your blockchain certs —
    // just copy the Palantir block above, set a new title/logo/color, and
    // list its certificates array.
  ],
};

export default certifications;

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "My experience spans healthcare AI projects, open-source engineering and data-heavy product work: building models and pipelines that turn messy, sensitive data into decisions people can trust.",
  //header_image_path: "manOnTable.svg",

  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Open to Healthcare AI/ML Roles",
          company: "Available for Internships & Entry-Level Roles",
          company_url: "https://dungeonmasterji.me",
          logo_path: "animated_aditya.png",
          duration: "2026 – Present",
          location: "Bengaluru, India (Open to Relocation)",
          description:
            "B.Tech CSE (AI & ML) student building machine-learning systems for healthcare. Looking for internships and entry-level roles in clinical decision support, health analytics, medical NLP, or population health, where models are evaluated honestly and deployed safely.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Content Management Intern",
          company: "Passprt Trips",
          company_url: "https://www.passprt.com/",
          logo_path: "passprt.jpeg",
          duration: "Aug 2025 - Nov 2025",
          location: "Gurugram, India",
          description:
            "Maintained 500+ inventory records and standardised catalog data across product, backend and sales teams for listings in the Maldives, Bali and Dubai. Seeing three suppliers describe the same item three different ways led me to build TravelStack, an automated validation and ETL pipeline: the same data-quality problem messy health records have.",
          color: "#000000",
        },
        // {
        //   title: "Data Science Research Intern",
        //   company: "Delhivery Pvt. Ltd.",
        //   company_url: "https://www.delhivery.com/",
        //   logo_path: "delhivery_logo.png",
        //   duration: "May 2019 - Sept 2019",
        //   location: "Gurgaon, Haryana",
        //   description:
        //     "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        //   color: "#ee3c26",
        // },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Open Source Contributor",
          company: "Meshery / Layer5 (CNCF)",
          company_url: "https://meshery.io/",
          logo_path: "layer5-dark-bg.svg",
          duration: "Feb 2025 - Apr 2025",
          location: "Remote",
          description:
            "Merged 15+ pull requests to Meshery, a cloud-native management tool used by 10,000+ developers: bug fixes, UI documentation and CI/CD improvements.",
          color: "#00B39F",
        },
        {
          title: "OpenAI AI Engineers Day",
          company: "OpenAI",
          company_url: "https://openai.com/",
          logo_path: "openai_logo.svg",
          duration: "6 March 2025",
          location: "Bengaluru, India",
          description:
            "Attended OpenAI's flagship AI engineering conference featuring production AI talks, hands-on sessions with OpenAI engineers, and technical discussions on multimodal systems, coding agents, and agent orchestration.",
          color: "#4285F4",
        },
        {
          title: "Replit Vibeathon",
          company: "Replit",
          company_url: "https://replit.com/",
          logo_path: "devicon--replit.svg",
          duration: "21 January 2026",
          location: "Bengaluru, India",
          description:
            "Participated in Asia's largest offline vibe coding hackathon, collaborating with builders to develop AI-powered applications during a 36-hour product sprint focused on modern software engineering.",
          color: "#D83B01",
        },
        {
          title: "VibeCon",
          company: "Polaris School of Technology",
          company_url: "https://polariscampus.com/",
          logo_path: "polaris.jpeg",
          duration: "April 2026",
          location: "Bengaluru, India",
          description:
            "Competed in an invite-only builder competition bringing together top AI developers to solve real-world problems through intensive product building and collaborative engineering.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I build healthcare AI systems end to end, from clinical risk models and population-health early warning to explainable alerts and the APIs and dashboards that put them in front of clinicians. Health-tech work comes first below, followed by GenAI, LLM-agent and data projects that use the same engineering and evaluation habits.",
  avatar_image_path: "projects_image.svg\\",
};

const publicationsHeader = {
  title: "Live Demos & Walkthroughs",
  description:
    "Try the deployed health-tech apps, or watch short walkthroughs of how they work.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "sentinel-grid-demo",
      name: "Sentinel Grid: 2-Minute Demo",
      createdAt: "2026-11-10T00:00:00Z",
      description:
        "Walkthrough of the population-health early-warning dashboard, explainable alerts in English and Arabic, and n8n routing.",
      url:
        "https://drive.google.com/file/d/1Cm27mD-EoQFAY6ZNv8T0rtUJf-_Imxkw/view?usp=sharing",
    },
    {
      id: "sentinel-grid-live",
      name: "Sentinel Grid: Live Dashboard & Backtest",
      createdAt: "2026-11-10T00:00:00Z",
      description:
        "Live signal pillars, fused alerts, and an honest backtest scorecard against 11 real UAE heat, dust and flood events.",
      url: "https://sentinel-grid-health.vercel.app",
    },
    {
      id: "heartguard-live",
      name: "HeartGuard AI: Live Demo",
      createdAt: "2026-09-08T00:00:00Z",
      description:
        "Clinician-facing heart-disease risk tool backed by a voting-ensemble model (sensitivity 0.902, ROC AUC 0.908).",
      url: "https://heart-disease-voting-ensemble.vercel.app/",
    },
    {
      id: "supplychainos-live",
      name: "SupplyChainOS: Live App",
      createdAt: "2026-09-25T00:00:00Z",
      description:
        "Governed conversational analytics agent on Snowflake Cortex, evaluated on a 30-question gold set.",
      url: "https://supplychainos-dungeonmasterji.streamlit.app/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    description:
      "I'm looking for internships and entry-level roles in healthcare AI/ML: clinical decision support, health analytics, medical NLP, or population health. Message me on any platform and I'll reply within 24 hours. I'm always happy to talk about explainable models, clinical evaluation, or building with health data.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://medium.com/@dungeonmasterji",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Brookfield, Bengaluru, Karnataka, India",
    locality: "Brookfield",
    country: "India",
    region: "Karnataka",
    postalCode: "560068",
    streetAddress: "Brookfield gate",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/fyoTw1F7xvBcPc3U9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
