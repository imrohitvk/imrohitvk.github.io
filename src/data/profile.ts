// Everything about Rohit that the site shows. Edit this file (and the others in src/data/) to update content.

export const site = {
  name: "Rohit Sharma",
  handle: "imrohitvk",
  url: "https://imrohitvk.github.io",
  role: "Ph.D. Scholar, Computer Science & Engineering",
  org: "IIT Ropar",
  location: "Rupnagar, Punjab, India",
  email: "imrohitvk@gmail.com",
  tagline: "I study what live classrooms reveal about learning, and build the tools that capture it.",
  description:
    "Rohit Sharma is a Ph.D. scholar in Computer Science & Engineering at IIT Ropar, working on computing education research, live classroom polling and learning analytics.",
  socials: [
    { label: "GitHub", href: "https://github.com/imrohitvk", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/imrohitvk", icon: "linkedin" },
    { label: "X", href: "https://x.com/imrohitvk", icon: "x" },
    { label: "Email", href: "mailto:imrohitvk@gmail.com", icon: "mail" },
  ],
};

export const intro = [
  "I am a Ph.D. scholar in Computer Science & Engineering at IIT Ropar. My research looks at what real-time classroom interactions, such as live polls, can tell us about how students engage and learn, and how teachers can act on that in time.",
  "Alongside research I build the systems behind it: Spandan, a live classroom polling platform used across large online sessions, and Vi-SlideS, a question-driven teaching tool. Before my Ph.D. I worked as an Associate Software Engineer at Accenture.",
  "I also teach as a Teaching Assistant at IIT Ropar and for the NPTEL Deep Learning course.",
];

export const interests = [
  "Computing education",
  "Learning analytics",
  "Live classroom polling",
  "Educational measurement",
  "Machine learning",
  "Full-stack systems",
];

// Headline numbers come from the research papers (see papers.ts).
export const stats = [
  { value: "340K+", label: "poll responses analysed" },
  { value: "2,800+", label: "learners in the study corpus" },
  { value: "47", label: "live sessions studied" },
  { value: "3", label: "papers on arXiv" },
];

export type Job = {
  role: string;
  org: string;
  type: string;
  period: string;
  place: string;
  points: string[];
  current?: boolean;
};

export const experience: Job[] = [
  {
    role: "Teaching Assistant, Deep Learning",
    org: "NPTEL",
    type: "Online course",
    period: "Jan 2026 – Present",
    place: "Remote",
    current: true,
    points: [
      "Two offerings of the NPTEL Deep Learning course: Jan – Apr 2026 and Jul 2026 – present.",
      "Prepare weekly assignments and question banks, and support learners on the course forum.",
    ],
  },
  {
    role: "Teaching Assistant",
    org: "Indian Institute of Technology, Ropar",
    type: "Full-time",
    period: "Jul 2024 – Present",
    place: "Ropar, Punjab · On-site",
    current: true,
    points: [
      "Database Management Systems: Jul – Dec 2024, Jul – Dec 2025, and Jul 2026 – present.",
      "Software Engineering Practices: Jan – May 2025. Computer Networks: Jan – May 2026.",
      "For DBMS: prepare lab assignments, tutorials and lab quizzes.",
    ],
  },
  {
    role: "Associate Software Engineer",
    org: "Accenture",
    type: "Full-time",
    period: "Oct 2023 – Jul 2024",
    place: "Mumbai, Maharashtra · On-site",
    points: ["Worked on SAP ABAP and SAP S/4HANA."],
  },
  {
    role: "Intern",
    org: "LTIMindtree",
    type: "Internship",
    period: "Feb 2023 – May 2023",
    place: "Remote",
    points: ["Worked with Java, Apache Spark, MySQL, Hadoop and AWS."],
  },
  {
    role: "Machine Learning Intern",
    org: "TCIL-IT Chandigarh",
    type: "Internship",
    period: "May 2022 – Jul 2022",
    place: "Chandigarh · Hybrid",
    points: ["Implemented and compared machine learning algorithms in Python."],
  },
];

export const education = [
  {
    degree: "Doctor of Philosophy (Ph.D.), Computer Science & Engineering",
    school: "Indian Institute of Technology, Ropar",
    period: "Jul 2024 – Jun 2027",
    place: "Ropar, Punjab",
    score: "CGPA 8.8",
  },
  {
    degree: "Bachelor of Technology (B.Tech), Computer Science & Engineering",
    school: "Jaypee University of Information Technology",
    period: "Jul 2019 – Jun 2023",
    place: "Solan, Himachal Pradesh",
    score: "CGPA 9.15",
    note: "Machine Learning, AI, Data Structures & Algorithms",
  },
  {
    degree: "Class XII (CBSE), Science with Mathematics",
    school: "Kendriya Vidyalaya Naleti",
    period: "2017 – 2018",
    place: "Dehra, Himachal Pradesh",
    score: "83.8%",
  },
  {
    degree: "Class X (CBSE)",
    school: "Kendriya Vidyalaya Nadaun",
    period: "2015 – 2016",
    place: "Nadaun, Himachal Pradesh",
    score: "CGPA 10",
  },
];

export const skills = [
  { group: "Programming", items: ["Python", "C / C++", "Java", "JavaScript", "TypeScript"] },
  { group: "Web", items: ["React", "Node.js", "Express", "MongoDB", "HTML & CSS", "Astro", "Jekyll"] },
  { group: "Data & ML", items: ["Machine Learning", "Deep Learning", "Data Science", "Tableau"] },
  { group: "Big Data", items: ["Hadoop", "Apache Spark"] },
  { group: "Databases", items: ["MySQL", "MongoDB", "SQL", "DBMS"] },
  { group: "Enterprise", items: ["SAP ABAP", "SAP S/4HANA"] },
  { group: "Research", items: ["Learning analytics", "Item response theory", "LaTeX"] },
];

export const certifications = [
  { name: "HTML, CSS and JavaScript for Web Developers", by: "Coursera", date: "Sep 2024" },
  { name: "Blockchain Basics", by: "Coursera", date: "Mar 2023" },
  { name: "Problem Solving (Basic)", by: "HackerRank", date: "Jul 2022" },
  { name: "SQL (Basic)", by: "HackerRank", date: "Jul 2022" },
  { name: "Python Programmer", by: "Infosys Springboard", date: "Apr 2022" },
  { name: "C Language", by: "Spoken Tutorial", date: "Nov 2019" },
];

export const languages = [
  { name: "English", level: "Full professional proficiency" },
  { name: "Hindi", level: "Native / bilingual" },
];

export const hobbies = ["Current affairs", "Reading"];
