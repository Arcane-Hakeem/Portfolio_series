/**
 * Central portfolio data for Hakeem Shaik.
 * Update the details in this file to update the portfolio throughout the site.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Hakeem Shaik',
  displayName: 'Hakeem Shaik',
  firstName: 'HAKEEM',
  seriesTag: 'THE SERIES',
  originalLabel: 'A HAKEEM ORIGINAL',
  role: 'AI/ML Enthusiast & Web Developer',
  tagline: ['AI / ML', 'Web Development', 'Software Engineering'],
  intro:
    'A B.Tech Computer Science student specializing in AI & ML, building web applications and machine-learning projects while exploring practical AI solutions.',
  location: 'India',
  email: 'YOUR_EMAIL_HERE',
  links: {
    linkedin: 'YOUR_LINKEDIN_URL_HERE',
    github: 'https://github.com/Arcane-Hakeem',
  },
  resumePdf: '/assets/Hakeem_Shaik_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Hakeem Shaik',
  },
  interests: ['Artificial Intelligence', 'Machine Learning', 'Web Development', 'Cloud Computing', 'Data Structures & Algorithms'],
};

export const education = [
  {
    school: 'YOUR COLLEGE NAME',
    place: 'India',
    degree: 'B.Tech — Computer Science and Engineering (AI & ML)',
    period: '2023 – 2028',
    score: 'CGPA: 8.83',
  },
];

export const experience = [
  {
    company: 'Amdox Technologies',
    role: 'Web Developer Intern',
    place: 'India',
    period: 'June – September',
    points: [
      'Contributed to web development work as an intern.',
      'Worked with frontend technologies and collaborative development workflows.',
    ],
  },
  {
    company: 'Cognifyz IT Solutions',
    role: 'Machine Learning Intern',
    place: 'Remote / India',
    period: 'June – July',
    points: [
      'Worked on machine-learning tasks using a restaurant dataset.',
      'Built rating-prediction, cuisine-classification and location-analysis workflows.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'customer-churn-prediction',
    title: 'Customer Churn Prediction',
    year: '2026',
    genre: 'Machine Learning • Classification',
    logline: 'A machine-learning project to identify customers who may be likely to leave a telecom service.',
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    build: [
      'Prepared and cleaned the Telco customer churn dataset and developed a classification workflow.',
      'Evaluated model performance using accuracy, precision, recall, F1 score and ROC-AUC.',
    ],
    features: [
      'Data cleaning and preprocessing',
      'Categorical feature encoding',
      'Classification model evaluation',
      'Confusion matrix and performance metrics',
    ],
    metrics: [
      { value: '7,043', label: 'dataset rows' },
      { value: '0.84', label: 'ROC-AUC in a recorded experiment' },
      { value: '0.62', label: 'F1 score in a recorded experiment' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'shield',
  },
  {
    id: 'amx-erp-frontend',
    title: 'AMX ERP Frontend',
    year: '2026',
    genre: 'Web Development • React',
    logline: 'A modular enterprise resource planning frontend with role-oriented application sections.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Axios', 'Recharts'],
    build: [
      'Worked on a React and TypeScript frontend structure for an ERP-style application.',
      'Organized application areas for dashboards, HR, finance, projects, supply chain and settings.',
    ],
    features: [
      'Reusable layout and navigation',
      'Dashboard and business modules',
      'React Router-based page navigation',
      'Charts and API integration support',
    ],
    metrics: [
      { value: '6+', label: 'application areas planned' },
      { value: 'React', label: 'frontend framework' },
      { value: 'TypeScript', label: 'typed UI development' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'nutricube',
    title: 'NutriCube',
    year: '2026',
    genre: 'Innovation • Sustainability • Nutrition',
    logline: 'A concept for a solar-powered system that creates affordable nutrition cubes from locally sourced ingredients.',
    stack: ['Product Design', 'Sustainability', 'Solar Energy', '3D Printing'],
    build: [
      'Developed an innovation concept focused on accessible nutrition using local grains, pulses and greens.',
      'Explored a solar-powered vending system, a 3D-printing approach and a companion recipe app.',
    ],
    features: [
      'Locally sourced ingredients',
      'Solar-powered concept',
      'Low-waste nutrition delivery',
      'Companion recipe app concept',
    ],
    metrics: [
      { value: 'Solar', label: 'powered concept' },
      { value: 'Local', label: 'ingredient focus' },
      { value: 'Low-waste', label: 'design goal' },
    ],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'sih-2025',
    title: 'Finalist',
    org: 'Smart India Hackathon 2025',
    detail: 'Reached the finalist stage of the national-level innovation hackathon.',
    laurel: 'Finalist',
  },
  {
    id: 'yukthi-2025',
    title: 'Top 100 Teams',
    org: 'AICTE Yukthi Innovation Challenge 2025',
    detail: 'Selected among the Top 100 teams in the innovation challenge.',
    laurel: 'Top 100',
  },
  {
    id: 'iisf-2025',
    title: 'Poster Presentation',
    org: 'Indian International Science Festival 2025',
    detail: 'Presented a poster at the science festival.',
    laurel: 'Presenter',
  },
  {
    id: 'girlscript-2026',
    title: 'Selected Contributor',
    org: 'GirlScript Summer of Code 2026',
    detail: 'Selected to participate in the open-source program.',
    laurel: 'Selected',
  },
  {
    id: 'flipkart-grid-8',
    title: 'Round 1 Shortlisted',
    org: 'Flipkart GRiD 8.0',
    detail: 'Shortlisted in Round 1 and preparing for the next round.',
    laurel: 'Shortlisted',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'AWS', name: 'AWS Solutions Architecture certification', link: 'YOUR_AWS_CERTIFICATE_URL_HERE' },
  { issuer: 'Oracle', name: 'OCI AI Foundations Associate (2025)', link: 'YOUR_ORACLE_CERTIFICATE_URL_HERE' },
  { issuer: 'Google Cloud', name: 'Google Cloud course', link: 'YOUR_GOOGLE_CLOUD_CERTIFICATE_URL_HERE' },
  { issuer: 'Walmart Global Tech', name: 'Advanced Software Job Simulation', link: 'YOUR_WALMART_CERTIFICATE_URL_HERE' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Languages used for development and problem solving',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'C++', mono: 'C+' },
      { name: 'Java', mono: 'Jv' },
      { name: 'C', mono: 'C' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Building responsive user interfaces',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'TypeScript', mono: 'Ts' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    subtitle: 'Data preparation, modelling and evaluation',
    skills: [
      { name: 'Pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'Scikit-learn', mono: 'Sk' },
      { name: 'Matplotlib', mono: 'Mp' },
      { name: 'Machine Learning', mono: 'ML' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    subtitle: 'Development, collaboration and cloud',
    skills: [
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Vite', mono: 'Vi' },
      { name: 'Axios', mono: 'Ax' },
      { name: 'Recharts', mono: 'Rc' },
      { name: 'AWS', mono: 'Aw' },
      { name: 'Google Cloud', mono: 'Gc' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['Customer Churn Prediction', 'Cognifyz Machine Learning Internship'],
  React: ['AMX ERP Frontend'],
  TypeScript: ['AMX ERP Frontend'],
  'Git / GitHub': ['Project development and version control'],
  'Machine Learning': ['Customer Churn Prediction', 'Cognifyz Machine Learning Internship'],
  AWS: ['AWS Solutions Architecture certification'],
  'Google Cloud': ['Google Cloud course'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2023 – 2024',
    synopsis: 'Building the foundations in Computer Science and Artificial Intelligence & Machine Learning.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Engineer',
        description: 'Beginning a B.Tech journey in Computer Science and Engineering with a specialization in AI & ML.',
        tags: ['B.Tech', 'CSE', 'AI & ML'],
        runtime: '2023 – 2028',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Learning to Build',
    period: '2024 – 2025',
    synopsis: 'Developing programming, web development and machine-learning skills through hands-on projects.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Developer',
        description: 'Exploring frontend development with HTML, CSS, JavaScript, React and TypeScript.',
        tags: ['React', 'JavaScript', 'TypeScript'],
        runtime: 'Ongoing',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The ML Practitioner',
        description: 'Working with datasets, preprocessing, classification and model evaluation.',
        tags: ['Python', 'Pandas', 'Scikit-learn'],
        runtime: 'Ongoing',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Internship Experience',
    period: '2026',
    synopsis: 'Applying development and machine-learning skills in internship work.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Web Developer Intern',
        description: 'Web development internship at Amdox Technologies.',
        tags: ['Web Development', 'Frontend'],
        runtime: 'June – September',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The ML Intern',
        description: 'Machine-learning internship tasks with Cognifyz IT Solutions, including rating prediction, cuisine classification and location analysis.',
        tags: ['Machine Learning', 'Python', 'Data Analysis'],
        runtime: 'June – July',
        palette: crimson,
      },
    ],
  },
  {
    number: 4,
    title: 'Building and Competing',
    period: '2025 – 2026',
    synopsis: 'Creating projects and participating in innovation challenges and hackathons.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Churn Predictor',
        description: 'A classification project using telecom customer data to study customer churn.',
        tags: ['Python', 'Machine Learning', 'Classification'],
        runtime: '2026',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'The Innovator',
        description: 'NutriCube concept: solar-powered, low-waste nutrition cubes using locally sourced ingredients.',
        tags: ['Innovation', 'Sustainability', 'Nutrition'],
        runtime: '2026',
        palette: jade,
      },
      {
        code: 'S04 E03',
        title: 'The Competitor',
        description: 'Smart India Hackathon finalist and Top 100 team in the AICTE Yukthi Innovation Challenge.',
        tags: ['SIH', 'AICTE Yukthi'],
        runtime: '2025',
        palette: amber,
      },
    ],
  },
  {
    number: 5,
    title: 'What’s Next',
    period: 'Now streaming',
    synopsis: 'Continuing to grow toward a career in software engineering and applied AI.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Deepening skills in DSA, full-stack development, machine learning and cloud technologies.',
        tags: ['DSA', 'Full-Stack', 'AI / ML', 'Cloud'],
        runtime: 'In progress',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Core focus', title: 'AI / ML', detail: 'Applied machine learning and AI projects', palette: crimson },
  { label: 'Featured project', title: 'Customer Churn Prediction', detail: 'Classification and model evaluation', palette: ocean },
  { label: 'Innovation', title: 'NutriCube', detail: 'Solar-powered, low-waste nutrition concept', palette: jade },
  { label: 'Hackathon milestone', title: 'SIH 2025', detail: 'Finalist', palette: amber },
  { label: 'Innovation milestone', title: 'AICTE Yukthi 2025', detail: 'Top 100 teams', palette: violet },
  { label: 'Current experience', title: 'Web Developer Intern', detail: 'Amdox Technologies', palette: ocean },
  { label: 'ML experience', title: 'Machine Learning Intern', detail: 'Cognifyz IT Solutions', palette: crimson },
  { label: 'Cloud learning', title: 'AWS', detail: 'Solutions Architecture certification', palette: amber },
  { label: 'Open source', title: 'GirlScript Summer of Code', detail: 'Selected in 2026', palette: jade },
  { label: 'Current mission', title: 'Software Engineering', detail: 'DSA, web development and AI/ML', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE (AI & ML)',
    lines: ['Computer Science and Engineering', 'Expected graduation: 2028'],
    chips: ['CGPA 8.83'],
  },
  {
    kicker: 'Skills',
    title: 'Build. Learn. Ship.',
    lines: ['Python, C++, Java, JavaScript', 'React, TypeScript, Tailwind CSS · Pandas, NumPy, Scikit-learn'],
    chips: ['AI / ML', 'React', 'Python', 'GitHub'],
  },
  {
    kicker: 'Experience',
    title: 'Learning in the Real World',
    lines: ['Web Developer Intern · Amdox Technologies', 'Machine Learning Intern · Cognifyz IT Solutions'],
  },
  {
    kicker: 'Projects',
    title: 'Projects in Progress',
    lines: ['Customer Churn Prediction — machine-learning classification', 'AMX ERP Frontend — React and TypeScript', 'NutriCube — sustainable nutrition innovation concept'],
  },
  {
    kicker: 'Achievements',
    title: 'Milestones',
    lines: ['Finalist — Smart India Hackathon 2025', 'Top 100 — AICTE Yukthi Innovation Challenge 2025', 'Poster presenter — IISF 2025'],
  },
  {
    kicker: 'Certified',
    title: 'Learning Across Platforms',
    lines: ['AWS Solutions Architecture', 'Oracle OCI AI Foundations · Google Cloud · Walmart Global Tech simulation'],
  },
  {
    kicker: 'Current mission',
    title: 'The Next Chapter',
    lines: ['DSA · Full-Stack Development · Machine Learning · Cloud'],
  },
];

export type ProfileId = 'hakeem' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'hakeem',
    name: 'Hakeem',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Experience, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Projects`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Highlights from my journey', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Achievements', meta: `${achievements.length} Highlights • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
