// Papers (from arXiv) and teaching. Abstracts are copied from arXiv.
export const authors =
  "Rohit Sharma, Pavani Ayinampudi, Aditya B. M. V., Jinal Gupta, Prakash Hegade, Sakshi Sharma, Meenakshi V, SRS Iyengar";

export const papers = [
  {
    id: "2609.38907",
    title:
      "Characterizing Questioning Patterns and Student Engagement Through Contextual Analysis of Real-Time Classroom Interactions",
    date: "Sep 2026",
    categories: ["cs.HC", "cs.AI", "cs.CY"],
    color: "#1E5A7A",
    keyFinding: "The answer to 89% of polls is locatable in the lecture; a poll's response follows its function, not its wording.",
    abstract:
      "Real-time classroom polling is now routine, yet the data it produces is usually read narrowly, as a correctness score or a headcount. Such readings say little about what a poll is doing within a lecture or how it shapes engagement. This is particularly relevant for short-response formats such as True/False, where the same question format can be used to test recall, check comprehension, or direct students' attention to a deliberately misleading statement. This study asks whether a poll's answer and instructional function can be determined by reading it against its lecture transcript, what cognitive levels of Bloom's taxonomy and instructional-function clusters the corpus contains, and how student engagement relates to answering correctly. We analyse a naturalistic corpus of 47 live sessions over 39 days, comprising 604 poll questions and 340,668 responses from 2,807 learners, most items True/False, read against time-aligned lecture transcripts and attendance. Reading each poll in context proves essential: the answer to 89% of polls is locatable in the lecture, and a recurring attention-checking device is visible only through context. Questioning is overwhelmingly lower-order and falls into seven instructional functions, and a poll's response follows its function rather than its wording. Engagement is broad but concentrated, and the class majority answers correctly 88.5% of the time, though a small set of high-consensus yet incorrect answers cannot be detected by agreement alone. An independent survey of 579 students agrees on what the polls are and on their participation, but reveals a gap between perception and reality: students cannot judge their own correctness, and the polls they find hardest are not those they answer worst.",
  },
  {
    id: "2609.38959",
    title: "An Audit of Measurement Quality and Answer Bias in a Large Classroom-Poll Corpus",
    date: "Sep 2026",
    categories: ["cs.HC", "cs.CY"],
    color: "#2A9D8F",
    keyFinding: "77% of students lean True, so False-keyed items run about thirteen points harder.",
    abstract:
      "Real-time classroom polls are widely used and increasingly generated with automated assistance, yet the questions themselves are rarely evaluated as measurements. We audit a large corpus of authentic classroom polls, 604 items across 47 sessions answered 340,668 times by 2,807 learners, as a measurement instrument. For the 539 items whose correct answer could be established and verified from the lecture transcript, we place every item and every student on a common scale using item response theory and analyse the answer structure of the True/False items. Two findings emerge. First, the polls form a coherent but easy scale of moderate precision (marginal reliability about 0.60), on which roughly a quarter of items barely separate stronger from weaker students. Second, students show a robust tendency to answer True, present at the individual level (77% of students lean True), which meets a milder tendency for items to be keyed False; as a result answer direction predicts difficulty, False-keyed items being about thirteen points harder, and the effect survives controls for item content and for selective answering. Both findings rest on signals a polling system already records, so the same checks can be run as items are generated, before they reach students.",
  },
  {
    id: "2609.38969",
    title: "Insights on Student Learning from Live Classroom Polls: More Than Right or Wrong",
    date: "Sep 2026",
    categories: ["cs.HC", "cs.CY"],
    color: "#E76F51",
    keyFinding: "A learner's response order is a stable signature (split-half reliability 0.92), unrelated to correctness.",
    abstract:
      "A live classroom poll is usually read through its answer key, as a count of participation and correctness. Yet the same record holds more before any key is fixed, namely who answers early and how the class divides across the options. Whether these key-free signals are stable, and what they reveal, has not been examined at the scale of a real course. We study them in a live deployment of 340,668 submissions across 603 polls in 47 sessions from roughly 2,400 learners, reading each poll for a learner's response order and for how much the class divides. A single further step brings in the author-designated key, on items with a settled answer, to interpret the divided ones. A learner's response order is a stable individual signature. It reproduces at a corrected split-half reliability of 0.92, holds at 0.87 within single sessions, and is unrelated to whether the learner is correct. Read without a key, about one poll in five does not reach a clear majority, and division marks the questions that split the class. On the settled-answer items the majority is itself wrong on 49 of 358. The key-free measure flags most of these, though division alone does not separate a collectively wrong answer from a merely hard one. The two readings are largely independent, meeting at one point where early responders anticipate the eventual majority only on questions the class has nearly settled. Together they map the learners and questions of a session without a key.",
  },
];

export const researchThemes = [
  {
    title: "Reading polls in context",
    text: "Interpreting each live poll against the lecture it came from, to see what it actually does in the class.",
    icon: "mic",
  },
  {
    title: "Polls as measurements",
    text: "Treating classroom questions as a measurement instrument: how reliable they are, and where answer bias creeps in.",
    icon: "chart",
  },
  {
    title: "Signals beyond right or wrong",
    text: "Using response timing and how a class divides to understand learners, even before an answer key exists.",
    icon: "pulse",
  },
];

export const teaching = [
  {
    org: "NPTEL",
    title: "Deep Learning",
    role: "Teaching Assistant",
    color: "#E76F51",
    runs: [
      { period: "Jul 2026 – Present", label: "Second offering", current: true },
      { period: "Jan 2026 – Apr 2026", label: "First offering" },
    ],
    work: ["Weekly assignments", "Question banks", "Learner forum support"],
  },
  {
    org: "IIT Ropar",
    title: "Database Management Systems",
    role: "Teaching Assistant",
    color: "#1E5A7A",
    runs: [
      { period: "Jul 2026 – Present", label: "Third offering", current: true },
      { period: "Jul 2025 – Dec 2025", label: "Second offering" },
      { period: "Jul 2024 – Dec 2024", label: "First offering" },
    ],
    work: ["Lab assignments", "Tutorials", "Lab quizzes"],
  },
  {
    org: "IIT Ropar",
    title: "Computer Networks",
    role: "Teaching Assistant",
    color: "#4b3c70",
    runs: [{ period: "Jan 2026 – May 2026", label: "Spring semester" }],
    work: ["Course support"],
  },
  {
    org: "IIT Ropar",
    title: "Software Engineering Practices",
    role: "Teaching Assistant",
    color: "#2A9D8F",
    runs: [{ period: "Jan 2025 – May 2025", label: "Spring semester" }],
    work: ["Course support"],
  },
];
