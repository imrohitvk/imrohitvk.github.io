// Projects shown on the home page (featured: true) and the Projects page.
export type Project = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  period: string;
  org: string;
  category: "research" | "web" | "ml";
  status: "Active" | "Completed" | "Contributor";
  color: string; // the project's own brand colour
  icon: string; // icon name from components/Icon.astro
  tech: string[];
  highlights: string[];
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "spandan",
    icon: "mic",
    name: "Spandan",
    summary: "Live lecture speech turned into real-time class polls, with engagement analytics.",
    description:
      "A live classroom interaction platform that turns passive lectures into active learning. Spandan captures the teacher's speech in real time, transcribes it, generates relevant questions, and presents them to students through a dedicated portal for instant interaction and assessment.",
    period: "Jun 2025 – Present",
    org: "IIT Ropar",
    category: "research",
    status: "Active",
    color: "#1f4ba5",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Whisper", "LLMs"],
    highlights: [
      "Real-time speech capture and transcription",
      "Automatic question generation from live lecture content",
      "Student answer portal with live engagement tracking",
      "Teacher dashboard with session analytics and participation monitoring",
    ],
    repo: "https://github.com/vicharanashala/spandan",
    featured: true,
  },
  {
    slug: "vi-slides",
    icon: "ask",
    name: "Vi-SlideS",
    summary: "Question-driven teaching: student questions steer the class, with teacher insights.",
    description:
      "An adaptive classroom platform that makes teaching question-driven. After a brief topic introduction, students submit questions that shape where the class goes. Analysis of the collective questions gives teachers real-time insight into class mood, motivation and conceptual understanding; simple questions are answered automatically and complex ones reach the teacher's prioritised dashboard.",
    period: "Dec 2025 – Present",
    org: "IIT Ropar",
    category: "research",
    status: "Active",
    color: "#F4D03F",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "WebSockets", "NLP"],
    highlights: [
      "Analysis of student questions for mood, motivation and cognitive complexity",
      "Smart triage: instant answers for simple questions, teacher escalation for complex ones",
      "Real-time question flow with anonymous or identified submission",
      "Class mood and knowledge-gap detection",
    ],
    repo: "https://github.com/vicharanashala/vi-slides",
    featured: true,
  },
  {
    slug: "pes",
    icon: "peer",
    name: "Peer Evaluation System",
    summary: "Anonymous peer grading with anomaly detection and TA-to-teacher escalation.",
    description:
      "A multi-level peer assessment system with built-in quality control. Each student gets a unique ID per quiz for anonymity; teachers can download QR-coded IDs for offline use or let students upload through the portal. Statistical outlier analysis flags suspicious evaluations to Teaching Assistants, who can escalate to teachers.",
    period: "Aug 2024 – Jul 2025",
    org: "IIT Ropar",
    category: "research",
    status: "Completed",
    color: "#4b3c70",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT / OAuth"],
    highlights: [
      "Anonymous evaluation via unique student IDs, with optional QR codes",
      "Statistical anomaly detection for suspicious peer evaluations",
      "Escalation: peer → automated check → TA review → teacher",
      "Rubric-based evaluation, analytics and complete audit trails",
    ],
    repo: "https://github.com/vicharanashala/pes",
    featured: true,
  },
  {
    slug: "vicharanashala",
    icon: "globe",
    name: "Vicharanashala Website",
    summary: "The VLED Lab's public site: products, research, events and team.",
    description:
      "The public website of Vicharanashala, the Lab for Education Design at IIT Ropar, at vicharanashala.ai. I contribute features, content structure and maintenance, including the repository layout and documentation.",
    period: "2026 – Present",
    org: "VLED Lab, IIT Ropar",
    category: "web",
    status: "Contributor",
    color: "#42a6ac",
    tech: ["Jekyll", "Liquid", "SCSS", "Leaflet.js"],
    highlights: [
      "Data-driven pages editable without code",
      "Events calendar, team and research pages",
      "Clean repository structure and contributor documentation",
    ],
    repo: "https://github.com/vicharanashala/vicharanashala-ai",
    featured: true,
  },
  {
    slug: "digit-recognition",
    icon: "grid",
    name: "Handwritten Digit Recognition",
    summary: "Recognises handwritten digits on paper so whole numbers can be read and processed.",
    description:
      "A system that automatically recognises handwritten numerical digits on paper, detecting complete numbers so they can be processed for further analysis or use.",
    period: "Feb 2023 – Apr 2023",
    org: "JUIT",
    category: "ml",
    status: "Completed",
    color: "#2A9D8F",
    tech: ["Python", "Deep Learning", "Neural Networks"],
    highlights: ["Digit detection on paper", "Whole-number recognition for downstream use"],
  },
  {
    slug: "water-quality",
    icon: "drop",
    name: "Water Quality Analysis",
    summary: "Compared machine learning models to find the best water-quality classifier.",
    description:
      "Implemented several machine learning models and compared their accuracy to determine the best-performing model for water-quality classification.",
    period: "Jun 2022 – Jul 2022",
    org: "JUIT",
    category: "ml",
    status: "Completed",
    color: "#2A9D8F",
    tech: ["Python", "Machine Learning"],
    highlights: ["Model comparison by accuracy", "Water-quality classification"],
  },
  {
    slug: "lung-xray",
    icon: "scan",
    name: "Lung X-ray Infection Segmentation",
    summary: "Segmentation masks of lung infection from chest X-rays to aid diagnosis.",
    description:
      "Generated segmentation masks of infections in the lungs from chest X-ray images using a deep learning model, aiding automated medical diagnosis.",
    period: "Jan 2022 – Jun 2022",
    org: "JUIT",
    category: "ml",
    status: "Completed",
    color: "#2A9D8F",
    tech: ["Python", "Deep Learning", "Image Segmentation"],
    highlights: ["Infection masks from chest X-rays", "Support for automated diagnosis"],
  },
];

export const categories = [
  { key: "all", label: "All" },
  { key: "research", label: "Research systems" },
  { key: "web", label: "Web" },
  { key: "ml", label: "Machine learning" },
] as const;
