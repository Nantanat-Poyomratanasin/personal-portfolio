import resumePdf from "./resume.pdf";
import PythonProgrammingMastery from "./image/PythonProgrammingMastery.png";
import PythonProgramming from "./image/PythonProgramming.png";
import EssentialPandas from "./image/EssentialPandas.png";
import DatabaseManagement from "./image/DatabaseManagement.jpg";
import IntroToDataAnalytic from "./image/IntrotodataAnalytic.jpg";
import AdvancedSQL from "./image/AdvanceSQL.png";

export const profileData = {
  name: "NANTANAT POYOMRATANASIN",
  title: "Junior Software Developer",
  email: "nantanat.poyomratanasin@gmail.com",
  phone: "061-517-8000",
  location: "Bangkok, Thailand",
  summary:
    "Junior Software Developer with a background in engineering and marketing, seeking to apply technical skills and problem-solving abilities in a Software Developer role.",
  linkedin: "https://www.linkedin.com/in/nantanat-poyomratanasin-b0bba52ab",
  github: "https://github.com/Nantanat-Poyomratanasin",
  resume: resumePdf,
};

export const skillsData = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST API"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools & Framework",
    skills: ["Git", "CI/CD", "Agile/Scrum", "Vite"],
  },
  {
    category: "Soft Skill",
    skills: ["Growth Mindset", "Detail Oriented", "Communication"],
  },
  {
    category: "Other Skills",
    skills: ["VBA Programming", "Excel Functions", "Python"],
  },
];

export const experiencesData = [
  {
    title: "Junior Software Developer",
    company: "Generation Thailand",
    duration: "Mar, 2026 - Now",
    points: [
      "Built web applications using React, HTML, and CSS for front-end development.",
      "Developed back-end services with Node.js and Express.js.",
      "Worked with PostgreSQL and MongoDB for database design and data storage.",
      "Collaborated with team members using Git workflow and CI/CD practices.",
    ],
    skills: [
      "React",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Git",
      "Express.js",
      "REST API",
      "Agile/Scrum",
    ],
  },
  {
    title: "Information & Technology Engineer",
    company: "Isuzu motors co. (Thailand) ltd.",
    duration: "May, 2024 - Feb, 2026",
    points: [
      "Prepared vehicle traceability data to comply with regulations and ensure reliability.",
      "Used VBA programming and Excel to analysis.",
      "Troubleshot issues and communicated feedback to design engineers.",
      "Created data maintenance manuals and reports to support affiliate factories.",
    ],
    skills: ["VBA Programming", "Excel", "Data Analysis", "Problem Solving"],
  },
  {
    title: "Product development Engineer",
    company: "Siam Kubota",
    duration: "Jul, 2023 - Dec, 2023",
    points: [
      "Researched market needs for IoT product development.",
      "Designed price structures and sales forecasts.",
      "Conducted customer satisfaction surveys and reports.",
    ],
    skills: ["Market Research", "Product Development", "Communication"],
  },
];

export const educationData = [
  {
    degree: "Bachelor in Engineering",
    field: "Machatronic Engineering",
    school: "Kasetsart University",
    duration: "2019 - 2023",
    honors: "Graduated with First class honors, GPA 3.62",
  },
];

export const certificationsData = [
  {
    title: "Advanced SQL for Data Analytics with BigQuery",
    issuer: "Skooldio",
    date: "Mar, 2026",
    image: AdvancedSQL,
  },
  {
    title: "Python Programming Mastery",
    issuer: "Skooldio",
    date: "Feb, 2026",
    image: PythonProgrammingMastery,
  },
  {
    title: "Essential Pandas for Data Science",
    issuer: "Skooldio",
    date: "Feb, 2026",
    image: EssentialPandas,
  },
  {
    title: "Database management with SQL",
    issuer: "CHULA MOOC",
    date: "Oct, 2025",
    image: DatabaseManagement,
  },
  {
    title: "Introduction to Data Analytics and Big Data",
    issuer: "CHULA MOOC",
    date: "Sep, 2025",
    image: IntroToDataAnalytic,
  },
  {
    title: "Python Programming",
    issuer: "9Expert Corporation",
    date: "Jul, 2025",
    image: PythonProgramming,
  },
  {
    title: "MS Excel Macro & VBA Zero to Pro",
    issuer: "cityhubs",
    date: "Sep, 2024",
  },
];

export const languageData = [
  {
    language: "English",
    level: "Upper-intermediate",
    certification: "TOEIC Score: 885",
  },
  {
    language: "Thai",
    level: "Native",
  },
];
