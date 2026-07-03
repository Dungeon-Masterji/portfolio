/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Aditya's Portfolio",
  description:
    "Third-year CS student who gets pulled toward the messy, operational side of data where raw enterprise information has to become something people can actually act on. Lately that's meant working deeply with Palantir Foundry, ontology design, and PySpark pipelines.",
  og: {
    title: "Aditya Raj Portfolio",
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
    "Third-year CS student who gets pulled toward the messy, operational side of data where raw enterprise information has to become something people can actually act on. Lately that's meant working deeply with Palantir Foundry, ontology design, and PySpark pipelines.",
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
      title: "Palantir Foundry Engineering",
      fileName: "DataScienceImg",
      skills: [
        "• Building the ontology and operational layer that lets AI agents act reliably on enterprise data",
        "• Designing not just dashboards, but systems that make decisions and take actions using Palantir Foundry and AIP Builder.",
        "• Building governed data pipelines, operational applications, and AI workflows.",
        "• Developing PySpark transforms, SQL logic, Functions, and business applications.",
      ],
      softwareSkills: [
        {
          skillName: "Foundry",
          imageSrc: "image.png",
        },
        {
          skillName: "Ontology",
          imageSrc: "Ontology.svg",
        },
        {
          skillName: "AIP",
          imageSrc: "AIP.png",
        },
        {
          skillName: "Data Pipelines",
          imageSrc: "data-pipeline.png",
        },
        {
          skillName: "Code Repositories",
          imageSrc: "folder.png",
        },
      ],
    },
    {
      title: "Data Engineering",
      fileName: "ProjectsImg",
      //fileName: "FullStackImg",
      skills: [
        "• Designing scalable ETL/ELT pipelines for structured enterprise data.",
        "• Applying data quality, validation, transformation, and schema modeling techniques.",
        "• Building production-ready data workflows using Python and SQL.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "material-symbols:sql",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Spark",
          fontAwesomeClassname: "logos:apache-spark",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "ETL",
          fontAwesomeClassname: "gcp:datastream",
          style: {
            color: "#262fe3",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Digital Ocean",
          fontAwesomeClassname: "devicon:digitalocean",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Software Engineering & Cloud",
      fileName: "FullStackImg",
      //fileName: "CloudInfraImg",
      skills: [
        "• Developing software solutions using Python, JavaScript, and modern development tools.",
        "• Building REST APIs and implementing backend application logic.",
        "• Experience contributing to open-source cloud-native projects.",
      ],
      softwareSkills: [
        {
          skillName: "HTML",
          fontAwesomeClassname: "material-icon-theme:html",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "• Designing highly attractive user interfaces for mobile and web applications",
        "• Cleared all three rounds of the Summer of Bitcoin Designer Track, designing Bitcoin wallet UX.",
        "• Creating user flows, wireframes, and interactive prototypes to optimize user experience.",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
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
        "• I contribute to various open source projects, helping build and improve tools that advance machine learning and artificial intelligence.",
        "• Pursuing AI/ML Engineering with a strong focus on data engineering, distributed systems, and production AI applications.",
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
    "My experience combines data engineering, Palantir Foundry, open-source software, and product thinking building systems that transform structured data into reliable operational applications.",
  //header_image_path: "manOnTable.svg",

  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Open to Opportunities",
          company: "Available for Internship & New Graduate Roles",
          company_url: "https://dungeonmasterji.me",
          logo_path: "animated_aditya.png",
          duration: "2026 – Present",
          location: "Bengaluru, India (Open to Relocation)",
          description:
            "Third-year Computer Science student specializing in AI/ML with experience in Palantir Foundry and data engineering. Actively seeking internship and new graduate opportunities where I can build production-ready data platforms and operational AI systems.",
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
            "Managed end-to-end content curation and optimization for 500+ travel listings across Maldives, Bali, and Dubai, leveraging Excel, CRM, SEO, and cross-functional collaboration to ensure high-quality, structured, and discoverable platform content.",
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
    "I build data pipelines and operational systems that turn raw enterprise data into production-ready applications primarily using Palantir Foundry, PySpark, and SQL. These projects range from ontology-driven data platforms to backend services and open-source contributions.",
  avatar_image_path: "projects_image.svg\\",
};

const publicationsHeader = {
  title: "Project Walkthroughs",
  description:
    "Detailed walkthroughs of Palantir Foundry and data engineering projects from design to implementation.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "foundry-step-8",
      name: "Palantir Foundry Deep Dive",
      createdAt: "2026-06-26T00:00:00Z",
      description: "System design and exploration in Palantir Foundry.",
      url: "https://youtu.be/d-LHmnQAXgU",
    },
    {
      id: "foundry-end-to-end-demo",
      name: "Palantir Foundry End-to-End Application Demo",
      createdAt: "2026-06-26T00:00:00Z",
      description: "From data pipelines to Workshop in Palantir Foundry.",
      url: "https://youtu.be/5m8b2riBlr0",
    },
    {
      id: "coming-soon",
      name: "Coming Soon",
      createdAt: "2026-08-16T00:00:00Z",
      description: "Next technical walkthrough releasing on 16 August.",
      url: "#",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    description:
      "I am available on almost every social media. You can message me, and I'll reply within 24 hours. Whether you're learning Palantir Foundry, exploring data engineering, or just curious about operational AI, I'd love to connect, discuss, and learn together.",
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
