/**
 * Guru Gobind Singh Indraprastha University (GGSIPU / IPU) — Authoritative Structured Data & Configuration
 * Official Reference: https://www.ipu.ac.in/
 * Motto: "ज्योतिर्वृणीत तमसो विजानन्" (In pursuit of knowledge and truth)
 * Established: 1998 by Govt. of NCT of Delhi (GGSIPU Act, 1998)
 * Status: State University | NAAC Grade "A++" (3.56 CGPA) | NIRF Top 75 | ISO 9001:2015
 * Campuses: 
 *   - Main Campus: Sector 16-C, Dwarka, New Delhi 110078 (60+ Acres)
 *   - East Delhi Campus: Surajmal Vihar, Delhi 110092 (18.75 Acres Net-Zero)
 */

export interface SchoolItem {
  id: string;
  name: string;
  shortCode: string;
  campus: 'Dwarka Main Campus' | 'East Delhi Campus (Surajmal Vihar)';
  established: number;
  dean: string;
  description: string;
  departments: string[];
  keyStats: {
    programsCount: number;
    facultyCount: number;
    studentsCount: number;
    highestPackageLPA: number;
  };
  highlightFeatures: string[];
}

export interface ProgramItem {
  id: string;
  schoolCode: string;
  title: string;
  degreeLevel: 'Undergraduate' | 'Postgraduate' | 'Doctoral' | 'Online / Distance';
  duration: string;
  campus: 'Dwarka' | 'East Delhi' | 'Affiliated Colleges';
  eligibility: string;
  admissionMode: 'IPU CET' | 'JEE Main' | 'CLAT' | 'NEET UG' | 'CAT / CMAT' | 'NATA' | 'GATE' | 'CUET / Merit';
  cetCode?: string;
  annualFeeINR: string;
  careerRoles: string[];
  curriculumHighlights: string[];
}

export interface AffiliatedCollegeItem {
  id: string;
  name: string;
  shortName: string;
  location: string;
  established: number;
  type: 'Government / State Institution' | 'Self-Financing Premier Institute';
  popularPrograms: string[];
  intakeCapacity: number;
  website: string;
  accreditation: string;
}

export interface NoticeItem {
  id: string;
  title: string;
  date: string;
  category: 'Admissions' | 'Examinations' | 'Students' | 'Alerts' | 'General';
  isNew?: boolean;
  isUrgent?: boolean;
  linkText: string;
  pdfReference?: string;
}

export const IPU_SCHOOLS: SchoolItem[] = [
  {
    id: 'usict',
    name: 'University School of Information, Communication & Technology',
    shortCode: 'USICT',
    campus: 'Dwarka Main Campus',
    established: 1999,
    dean: 'Prof. Pravin Chandra',
    description: 'Premier computing and electronics school offering B.Tech, M.Tech, and MCA with specialized AI, Cybersecurity, and VLSI laboratories.',
    departments: ['Computer Science & Engineering', 'Information Technology', 'Electronics & Communication Engineering'],
    keyStats: { programsCount: 6, facultyCount: 48, studentsCount: 1650, highestPackageLPA: 45 },
    highlightFeatures: ['CISCO & NVIDIA Networking Lab', 'Embedded Systems Testbed', 'IEEE & ACM Student Chapters', 'Top Placement Track Record']
  },
  {
    id: 'usar',
    name: 'University School of Automation & Robotics',
    shortCode: 'USAR',
    campus: 'East Delhi Campus (Surajmal Vihar)',
    established: 2021,
    dean: 'Prof. Jacob Cherian',
    description: 'Futuristic engineering school established at the Net-Zero East Delhi Campus dedicated to Artificial Intelligence, Robotics, and IoT.',
    departments: ['AI & Data Science', 'AI & Machine Learning', 'Industrial Internet of Things (IIoT)', 'Automation & Robotics'],
    keyStats: { programsCount: 4, facultyCount: 32, studentsCount: 960, highestPackageLPA: 38 },
    highlightFeatures: ['Advanced Robotics Kinematics Lab', 'Autonomous Systems Chamber', 'Sensors & Drone Prototyping Workshop', 'Smart Industry 4.0 Hub']
  },
  {
    id: 'usdi',
    name: 'University School of Design & Innovation',
    shortCode: 'USDI',
    campus: 'East Delhi Campus (Surajmal Vihar)',
    established: 2021,
    dean: 'Prof. Neeru Snehi',
    description: 'Creative innovation school offering premier B.Des and M.Des programs equipped with rapid prototyping studios, AR/VR suites, and ergonomic labs.',
    departments: ['Industrial & Product Design', 'Interaction & UI/UX Design', 'Interior & Spatial Design'],
    keyStats: { programsCount: 3, facultyCount: 22, studentsCount: 380, highestPackageLPA: 26 },
    highlightFeatures: ['Digital Fabrication & 3D Printing Lab', 'Ergonomics & Human Factors Studio', 'VR User Experience Testing Bay', 'Industry Design Incubator']
  },
  {
    id: 'usms',
    name: 'University School of Management Studies',
    shortCode: 'USMS',
    campus: 'Dwarka Main Campus',
    established: 1999,
    dean: 'Prof. A.K. Saini',
    description: 'Leading business school ranked top in Delhi-NCR offering MBA General, Financial Analysis, Analytics, and Ph.D. with Bloomberg terminal access.',
    departments: ['Finance & Accounting', 'Marketing & E-Commerce', 'Operations & Supply Chain', 'Human Resource Management'],
    keyStats: { programsCount: 4, facultyCount: 36, studentsCount: 720, highestPackageLPA: 24 },
    highlightFeatures: ['Bloomberg Financial Markets Suite', 'Management Development Programmes (MDP)', 'Corporate Mentorship Network', 'Case-Method Pedagogies']
  },
  {
    id: 'uslls',
    name: 'University School of Law & Legal Studies',
    shortCode: 'USLLS',
    campus: 'Dwarka Main Campus',
    established: 2001,
    dean: 'Prof. Queeny Pradhan',
    description: 'Eminent law faculty offering 5-year integrated BA LL.B (Hons), BBA LL.B (Hons), LL.M, and legal aid clinic approved by Bar Council of India.',
    departments: ['Constitutional & Administrative Law', 'Corporate & Commercial Law', 'Criminal Justice & Cyber Laws', 'Human Rights & ADR'],
    keyStats: { programsCount: 4, facultyCount: 28, studentsCount: 650, highestPackageLPA: 22 },
    highlightFeatures: ['State-of-the-Art Moot Court Hall', 'Free Legal Aid & Community Clinic', 'Indraprastha Law Review Journal', 'Judicial Service Coaching Cell']
  },
  {
    id: 'usbt',
    name: 'University School of Biotechnology',
    shortCode: 'USBT',
    campus: 'Dwarka Main Campus',
    established: 1999,
    dean: 'Prof. Meenu Kapoor',
    description: 'Premier life sciences institution offering dual degree B.Tech/M.Tech and Ph.D. with DBT & DST research grants and bio-incubator facilities.',
    departments: ['Molecular Biology & Genomics', 'Biochemical Engineering', 'Plant Biotechnology', 'Structural Bioinformatics'],
    keyStats: { programsCount: 3, facultyCount: 24, studentsCount: 320, highestPackageLPA: 18 },
    highlightFeatures: ['High-Performance Computing Cluster for NGS', 'Animal Cell Culture Cleanrooms', 'Bioinformatics Workstations', 'Patent-Generating Research']
  },
  {
    id: 'usct',
    name: 'University School of Chemical Technology',
    shortCode: 'USCT',
    campus: 'Dwarka Main Campus',
    established: 1999,
    dean: 'Prof. U.K. Mandal',
    description: 'AICTE-accredited chemical engineering school with specialized pilot plants, polymer testing laboratories, and green reaction engineering suites.',
    departments: ['Chemical Engineering', 'Biochemical Engineering', 'Polymer & Material Science'],
    keyStats: { programsCount: 3, facultyCount: 20, studentsCount: 360, highestPackageLPA: 20 },
    highlightFeatures: ['Pilot Scale Fractional Distillation Unit', 'Polymer Characterization Suite', 'Green Synthesis Testbeds', 'Industrial Safety Auditing Cell']
  },
  {
    id: 'use',
    name: 'University School of Education',
    shortCode: 'USE',
    campus: 'Dwarka Main Campus',
    established: 2008,
    dean: 'Prof. Dhananjay Joshi',
    description: 'NCTE-recognized pedagogy school offering B.Ed, M.Ed, and Ph.D. with focus on NEP-2020 curriculum reforms, digital classroom pedagogies, and inclusive schooling.',
    departments: ['Curriculum & Pedagogical Studies', 'Educational Technology & Psychology', 'Special Education & Inclusion'],
    keyStats: { programsCount: 3, facultyCount: 16, studentsCount: 240, highestPackageLPA: 12 },
    highlightFeatures: ['Micro-Teaching Digital Studio', 'Educational Psychology Testing Lab', 'School Immersion Internship Tie-ups', 'Community Literacy Drives']
  },
  {
    id: 'ushss',
    name: 'University School of Humanities & Social Sciences',
    shortCode: 'USHSS',
    campus: 'Dwarka Main Campus',
    established: 1999,
    dean: 'Prof. Manpreet Kaur Kang',
    description: 'Interdisciplinary humanities school offering MA English, MA Economics, and Ph.D. fostering critical cultural studies and policy research.',
    departments: ['English & Comparative Literature', 'Economics & Public Policy', 'Sociology & Cultural Studies'],
    keyStats: { programsCount: 3, facultyCount: 18, studentsCount: 280, highestPackageLPA: 14 },
    highlightFeatures: ['Digital Humanities & Language Lab', 'Econometrics Data Analysis Lab', 'Annual Literary Colloquium', 'Civil Service Reading Group']
  },
  {
    id: 'usm-ahs',
    name: 'University School of Medicine & Allied Health Sciences',
    shortCode: 'USM&AHS',
    campus: 'Dwarka Main Campus',
    established: 2008,
    dean: 'Prof. Yatish Agarwal',
    description: 'NMC-recognized medical faculty overseeing university MBBS, MD/MS, Paramedical (BPT, BPO, BASLP, BMLS), and hospital affiliations.',
    departments: ['Allied Health & Rehabilitation Sciences', 'Clinical Research & Epidemiology', 'Medical Education Unit'],
    keyStats: { programsCount: 6, facultyCount: 38, studentsCount: 850, highestPackageLPA: 25 },
    highlightFeatures: ['VMMC & Safdarjung Hospital Affiliation', 'Dr. RML Hospital Collaboration', 'Advanced Paramedical Labs', 'Spot Counselling Medical Desk']
  },
  {
    id: 'usap',
    name: 'University School of Architecture & Planning',
    shortCode: 'USAP',
    campus: 'Dwarka Main Campus',
    established: 2009,
    dean: 'Prof. Neeraja Lugani',
    description: 'Council of Architecture (COA) approved architecture school offering B.Arch and M.Arch Urban Design with laser-cutting and GIS mapping labs.',
    departments: ['Architectural Design', 'Urban & Regional Planning', 'Landscape Architecture & Heritage'],
    keyStats: { programsCount: 2, facultyCount: 24, studentsCount: 350, highestPackageLPA: 16 },
    highlightFeatures: ['Laser Cutting & Architectural Modeling Shop', 'GIS & Satellite Urban Mapping Lab', 'Climate-Responsive Studio', 'Annual Design Exhibition']
  },
  {
    id: 'usmc',
    name: 'University School of Mass Communication',
    shortCode: 'USMC',
    campus: 'Dwarka Main Campus',
    established: 2002,
    dean: 'Prof. Durgesh Tripathi',
    description: 'Media education school offering MA Journalism & Mass Communication and Ph.D. with broadcast television studio, radio lab, and print editing desk.',
    departments: ['Broadcast Journalism', 'Digital Media & Filmmaking', 'Advertising & Public Relations'],
    keyStats: { programsCount: 2, facultyCount: 14, studentsCount: 190, highestPackageLPA: 15 },
    highlightFeatures: ['Multi-Camera TV Broadcast Studio', 'Community Radio Station (IPU Ki Awaaz)', 'Digital Podcasting Suite', 'Media Convergence Newsroom']
  },
  {
    id: 'cdoe',
    name: 'Centre for Distance and Online Education',
    shortCode: 'CDOE',
    campus: 'Dwarka Main Campus',
    established: 2022,
    dean: 'Prof. Queeny Pradhan',
    description: 'UGC-DEB entitled distance and online learning wing providing accessible, flexible higher education in BBA, B.Com (Hons), and certificate courses.',
    departments: ['Online Commerce & Management', 'Continuous Professional Development'],
    keyStats: { programsCount: 4, facultyCount: 15, studentsCount: 4200, highestPackageLPA: 10 },
    highlightFeatures: ['Self-Paced LMS with Recorded Video Lectures', 'Interactive Weekend Live Webinars', 'Proctored Digital Examinations', 'Pan-India Student Reach']
  }
];

export const IPU_PROGRAMS: ProgramItem[] = [
  {
    id: 'prog-btech-cse',
    schoolCode: 'USICT',
    title: 'B.Tech in Computer Science & Engineering',
    degreeLevel: 'Undergraduate',
    duration: '4 Years (8 Semesters)',
    campus: 'Dwarka',
    eligibility: '10+2 with minimum 55% in PCM and English from recognized board',
    admissionMode: 'JEE Main',
    annualFeeINR: '₹1,45,000 / year',
    careerRoles: ['Software Development Engineer', 'Cloud Architect', 'Cybersecurity Specialist', 'Systems Engineer'],
    curriculumHighlights: ['Data Structures & Algorithms', 'Operating Systems', 'Machine Learning', 'Cloud Computing', 'Database Management', 'Capstone Project']
  },
  {
    id: 'prog-btech-ai-ds',
    schoolCode: 'USAR',
    title: 'B.Tech in Artificial Intelligence & Data Science',
    degreeLevel: 'Undergraduate',
    duration: '4 Years (8 Semesters)',
    campus: 'East Delhi',
    eligibility: '10+2 with minimum 55% in PCM and English; JEE Main Rank',
    admissionMode: 'JEE Main',
    annualFeeINR: '₹1,50,000 / year',
    careerRoles: ['AI Research Engineer', 'Data Scientist', 'NLP Engineer', 'MLOps Engineer'],
    curriculumHighlights: ['Deep Learning & Neural Networks', 'Big Data Engineering', 'Computer Vision', 'Reinforcement Learning', 'IoT Edge AI']
  },
  {
    id: 'prog-btech-robotics',
    schoolCode: 'USAR',
    title: 'B.Tech in Automation & Robotics',
    degreeLevel: 'Undergraduate',
    duration: '4 Years (8 Semesters)',
    campus: 'East Delhi',
    eligibility: '10+2 with minimum 55% aggregate in Physics, Chemistry, Mathematics',
    admissionMode: 'JEE Main',
    annualFeeINR: '₹1,50,000 / year',
    careerRoles: ['Robotics Engineer', 'Industrial Automation Lead', 'Mechatronics Specialist', 'Drones & UAV Engineer'],
    curriculumHighlights: ['Robotic Kinematics & Dynamics', 'Microcontrollers & PLC', 'ROS & Autonomous Navigation', 'Sensor Fusion']
  },
  {
    id: 'prog-bdes-uiux',
    schoolCode: 'USDI',
    title: 'Bachelor of Design (B.Des) in Interaction & UI/UX Design',
    degreeLevel: 'Undergraduate',
    duration: '4 Years (8 Semesters)',
    campus: 'East Delhi',
    eligibility: '10+2 pass in any stream with minimum 50% marks; UCEED or NLT Score',
    admissionMode: 'IPU CET',
    cetCode: 'CET-131',
    annualFeeINR: '₹1,60,000 / year',
    careerRoles: ['Product Designer', 'UI/UX Specialist', 'Design Strategist', 'Interaction Architect'],
    curriculumHighlights: ['Design Thinking & User Research', 'Wireframing & Prototyping', 'Design Systems & Figma', 'Usability Testing', 'AR/VR Interfaces']
  },
  {
    id: 'prog-ballb',
    schoolCode: 'USLLS',
    title: 'BA LL.B (Hons) / BBA LL.B (Hons) Integrated',
    degreeLevel: 'Undergraduate',
    duration: '5 Years (10 Semesters)',
    campus: 'Dwarka',
    eligibility: '10+2 pass with 50% marks; Qualified in CLAT UG of current academic year',
    admissionMode: 'CLAT',
    annualFeeINR: '₹1,20,000 / year',
    careerRoles: ['Corporate Legal Counsel', 'Litigation Advocate', 'Judicial Magistrate Aspirant', 'Policy Advisor'],
    curriculumHighlights: ['Constitutional Law of India', 'Corporate & IPR Laws', 'Criminal Jurisprudence', 'Arbitration & ADR', 'Mandatory Moot Courts']
  },
  {
    id: 'prog-mba-general',
    schoolCode: 'USMS',
    title: 'Master of Business Administration (MBA)',
    degreeLevel: 'Postgraduate',
    duration: '2 Years (4 Semesters)',
    campus: 'Dwarka',
    eligibility: 'Graduation in any discipline with minimum 50% marks; CAT / CMAT or IPU CET score',
    admissionMode: 'CAT / CMAT',
    annualFeeINR: '₹1,40,000 / year',
    careerRoles: ['Investment Banker', 'Brand Manager', 'Management Consultant', 'Supply Chain Analyst'],
    curriculumHighlights: ['Strategic Financial Management', 'Digital Marketing & Growth', 'Business Analytics', 'Organisational Behaviour', 'Live Capstone']
  },
  {
    id: 'prog-mca',
    schoolCode: 'USICT',
    title: 'Master of Computer Applications (MCA)',
    degreeLevel: 'Postgraduate',
    duration: '2 Years (4 Semesters)',
    campus: 'Dwarka',
    eligibility: 'BCA or B.Sc (Computer Science) / B.Sc with Mathematics with 50% marks; NIMCET or IPU CET',
    admissionMode: 'IPU CET',
    cetCode: 'CET-105',
    annualFeeINR: '₹1,25,000 / year',
    careerRoles: ['Full-Stack Developer', 'DevOps Specialist', 'Software Architect', 'Data Base Administrator'],
    curriculumHighlights: ['Advanced Algorithm Design', 'Enterprise Java & Spring Boot', 'Cloud Microservices', 'Cybersecurity Principles', 'Industry Internship']
  },
  {
    id: 'prog-btech-mtech-biotech',
    schoolCode: 'USBT',
    title: 'B.Tech + M.Tech Dual Degree in Biotechnology',
    degreeLevel: 'Undergraduate',
    duration: '5 Years (10 Semesters)',
    campus: 'Dwarka',
    eligibility: '10+2 with Physics, Chemistry, Biology/Mathematics with minimum 55% marks',
    admissionMode: 'IPU CET',
    cetCode: 'CET-130',
    annualFeeINR: '₹1,30,000 / year',
    careerRoles: ['Biotech Research Scientist', 'Bioinformatics Specialist', 'Clinical Trials Associate', 'Quality Control Lead'],
    curriculumHighlights: ['Recombinant DNA Technology', 'Immunology & Vaccine Tech', 'Bioprocess Engineering', 'Genomics & Proteomics']
  },
  {
    id: 'prog-cdoe-bba',
    schoolCode: 'CDOE',
    title: 'Bachelor of Business Administration (Online & Distance Mode)',
    degreeLevel: 'Online / Distance',
    duration: '3 Years (6 Semesters)',
    campus: 'Dwarka',
    eligibility: '10+2 passed from recognized board in any stream',
    admissionMode: 'CUET / Merit',
    annualFeeINR: '₹35,000 / year',
    careerRoles: ['Operations Executive', 'Digital Marketing Associate', 'Sales Specialist', 'Entrepreneur'],
    curriculumHighlights: ['Fundamentals of Management', 'Financial Accounting', 'Business Law', 'E-Business Strategies', 'Flexible Online Mentoring']
  },
  {
    id: 'prog-paramedical-bpt',
    schoolCode: 'USM&AHS',
    title: 'Bachelor of Physiotherapy (B.PT) & Paramedical Suite',
    degreeLevel: 'Undergraduate',
    duration: '4.5 Years including 6 Months Internship',
    campus: 'Dwarka',
    eligibility: '10+2 pass with Physics, Chemistry, Biology with 50% aggregate marks',
    admissionMode: 'IPU CET',
    cetCode: 'CET-124',
    annualFeeINR: '₹95,000 / year',
    careerRoles: ['Clinical Physiotherapist', 'Sports Rehab Specialist', 'Orthopaedic Consultant', 'Hospital Therapist'],
    curriculumHighlights: ['Human Anatomy & Physiology', 'Biomechanics & Kinesiology', 'Electrotherapy', 'Neuro-Physiotherapy', 'Hospital Rotations']
  }
];

export const IPU_COLLEGES: AffiliatedCollegeItem[] = [
  {
    id: 'mait',
    name: 'Maharaja Agrasen Institute of Technology',
    shortName: 'MAIT Delhi',
    location: 'PSP Area, Rohini Sector 22, Delhi',
    established: 1999,
    type: 'Self-Financing Premier Institute',
    popularPrograms: ['B.Tech CSE', 'B.Tech IT', 'B.Tech AI&DS', 'MBA'],
    intakeCapacity: 1200,
    website: 'https://mait.ac.in',
    accreditation: 'NBA Accredited · ISO 9001:2015'
  },
  {
    id: 'bvcoe',
    name: 'Bharati Vidyapeeth’s College of Engineering',
    shortName: 'BVCOE New Delhi',
    location: 'A-4, Paschim Vihar, New Delhi',
    established: 1999,
    type: 'Self-Financing Premier Institute',
    popularPrograms: ['B.Tech CSE', 'B.Tech ECE', 'B.Tech IT'],
    intakeCapacity: 600,
    website: 'https://bvcoend.ac.in',
    accreditation: 'NBA Accredited'
  },
  {
    id: 'msit',
    name: 'Maharaja Surajmal Institute of Technology',
    shortName: 'MSIT Janakpuri',
    location: 'C-4, Janakpuri, New Delhi',
    established: 2001,
    type: 'Self-Financing Premier Institute',
    popularPrograms: ['B.Tech CSE', 'B.Tech IT', 'B.Tech ECE'],
    intakeCapacity: 660,
    website: 'https://msit.in',
    accreditation: 'NAAC "A" Grade · NBA Accredited'
  },
  {
    id: 'vips',
    name: 'Vivekananda Institute of Professional Studies',
    shortName: 'VIPS Pitampura',
    location: 'AU Block, Outer Ring Road, Pitampura, Delhi',
    established: 2000,
    type: 'Self-Financing Premier Institute',
    popularPrograms: ['BA LL.B', 'BBA LL.B', 'BCA', 'BBA', 'B.Com(H)', 'BJMC'],
    intakeCapacity: 1800,
    website: 'https://vips.edu',
    accreditation: 'NAAC "A++" Grade · Bar Council Approved'
  },
  {
    id: 'jims',
    name: 'Jagan Institute of Management Studies',
    shortName: 'JIMS Rohini / Kalkaji',
    location: 'Rohini Sector 5 / Kalkaji, New Delhi',
    established: 1997,
    type: 'Self-Financing Premier Institute',
    popularPrograms: ['BBA', 'BCA', 'MCA', 'PGDM / MBA'],
    intakeCapacity: 720,
    website: 'https://jimsindia.org',
    accreditation: 'NAAC "A" Grade'
  },
  {
    id: 'bpit',
    name: 'Bhagwan Parshuram Institute of Technology',
    shortName: 'BPIT Rohini',
    location: 'PSP-4, Sector 17, Rohini, Delhi',
    established: 2005,
    type: 'Self-Financing Premier Institute',
    popularPrograms: ['B.Tech CSE', 'B.Tech IT', 'BBA', 'MBA'],
    intakeCapacity: 600,
    website: 'https://bpitindia.com',
    accreditation: 'NBA Accredited'
  },
  {
    id: 'gtbit',
    name: 'Guru Tegh Bahadur Institute of Technology',
    shortName: 'GTBIT Rajouri Garden',
    location: 'G-8 Area, Rajouri Garden, New Delhi',
    established: 1999,
    type: 'Self-Financing Premier Institute',
    popularPrograms: ['B.Tech CSE', 'B.Tech AI', 'B.Tech IT', 'B.Tech ECE'],
    intakeCapacity: 540,
    website: 'https://gtbit.ac.in',
    accreditation: 'AICTE Approved'
  },
  {
    id: 'uslls-college',
    name: 'Indira Gandhi Institute of Technology / Affiliated Medical Colleges',
    shortName: 'VMMC & Safdarjung Hospital',
    location: 'Ring Road, Ansari Nagar, New Delhi',
    established: 2001,
    type: 'Government / State Institution',
    popularPrograms: ['MBBS', 'MD / MS', 'Paramedical Diplomas'],
    intakeCapacity: 250,
    website: 'https://vmmc-sjh.nic.in',
    accreditation: 'NMC Recognized'
  }
];

export const IPU_NOTICES: NoticeItem[] = [
  {
    id: 'nt-01',
    title: 'SCHEDULE OF SPOT ROUND PARAMEDICAL (B.PT/B.PO/BASLP/BMLS) OFFLINE COUNSELLING FOR THE ACADEMIC SESSION 2026-27 through CET/ CUET 2026',
    date: '19-Oct-2026',
    category: 'Admissions',
    isNew: true,
    isUrgent: true,
    linkText: 'View Counselling Schedule & Vacant Seats PDF',
    pdfReference: 'Pubinfo2026/nt191020261110.pdf'
  },
  {
    id: 'nt-02',
    title: 'Final Result of BHMS (Prof 01, 02, 03 - Supplementary) for Examination held in August 2026',
    date: '19-Oct-2026',
    category: 'Examinations',
    isNew: true,
    linkText: 'Download BHMS Supplementary Result Sheet',
    pdfReference: 'Pubinfo2026/nt191020261100.pdf'
  },
  {
    id: 'nt-03',
    title: 'Result of Prog. of MBBS (PROF 02, Regular/Supplementary) for examination held in September 2026',
    date: '19-Oct-2026',
    category: 'Examinations',
    isNew: true,
    linkText: 'View MBBS Examination Gazetted Notification',
    pdfReference: 'Pubinfo2026/nt191026800p.pdf'
  },
  {
    id: 'nt-04',
    title: 'Notice Regarding Group Photograph for respective Schools/Branches on 21st Oct. 2026',
    date: '19-Oct-2026',
    category: 'Students',
    isNew: false,
    linkText: 'View Photo Schedule & Protocol',
    pdfReference: 'Pubinfo2026/nt191020261108.pdf'
  },
  {
    id: 'nt-05',
    title: 'Refund of application fee in view of cancellation of recruitment process in University School of Medicine & Allied Health Sciences (USM&AHS)',
    date: '19-Oct-2026',
    category: 'Alerts',
    isNew: true,
    linkText: 'Read Refund Order & Bank Submission Format',
    pdfReference: 'Pubinfo2026/nt191020260109.pdf'
  },
  {
    id: 'nt-06',
    title: 'Admission in BBA, B.Com, Distance & Online Programmes under CDOE (Centre for Distance and Online Education)',
    date: '18-Oct-2026',
    category: 'Admissions',
    isNew: true,
    linkText: 'Apply for CDOE 2026 Online Programs',
    pdfReference: 'adm2026/adm2026distance.php'
  },
  {
    id: 'nt-07',
    title: 'Refund of application fee in view of cancellation of recruitment in University School of Education (USE) & USHSS',
    date: '19-Oct-2026',
    category: 'Alerts',
    linkText: 'Download Proforma for Refund Claim',
    pdfReference: 'Pubinfo2026/nt191020261150.pdf'
  },
  {
    id: 'nt-08',
    title: 'Public Advisory: Beware of Touts & Unauthorized Persons Promising Direct Admissions in GGSIPU or Affiliated Colleges',
    date: '11-Sep-2026',
    category: 'Alerts',
    isUrgent: true,
    linkText: 'View Official Warning & Vigilance Cell Contacts',
    pdfReference: 'pubinfo2024/nt1109241201p.pdf'
  },
  {
    id: 'nt-09',
    title: 'Online Payment of Academic and Examination Fees through Samarth / BillDesk Gateway Portal',
    date: '15-Oct-2026',
    category: 'Students',
    linkText: 'Open Online Fee Portal Services',
    pdfReference: 'onlinefees.php'
  },
  {
    id: 'nt-10',
    title: 'NAAC Institutional Accreditation: Conferred Grade "A++" with CGPA of 3.56 for a 7-Year Term',
    date: '14-Feb-2023',
    category: 'General',
    linkText: 'View NAAC Certificate & Quality Audit Report',
    pdfReference: 'accrediationmain.php'
  }
];

export const IPU_CONFIG = {
  university: {
    name: 'Guru Gobind Singh Indraprastha University',
    shortName: 'GGSIPU / IPU',
    hindiName: 'गुरु गोबिन्द सिंह इन्द्रप्रस्थ विश्वविद्यालय',
    motto: 'ज्योतिर्वृणीत तमसो विजानन्',
    mottoEnglish: 'Let knowledge spread from ignorance into enlightenment',
    act: 'Guru Gobind Singh Indraprastha University Act, 1998 (Delhi Act No. 09 of 1998)',
    ugcSection: 'Recognized under Section 12B of the UGC Act, 1956',
    establishedYear: 1998,
    type: 'State University (Government of NCT of Delhi)',
    naacGrade: 'A++',
    naacCgpa: '3.56 / 4.00',
    naacValidity: '7 Years w.e.f. February 14, 2023 to February 13, 2030',
    nirfRank: 'Top 75 Universities in India (NIRF Ranking)',
    isoCertification: 'ISO 9001:2015 Certified Institution',
    officialUrl: 'https://www.ipu.ac.in/',
    admissionPortalUrl: 'https://ipu.admissions.nic.in/',
    dwarkaCampusAddress: 'Sector 16-C, Dwarka, New Delhi - 110078, India',
    eastDelhiAddress: 'Surajmal Vihar, East Delhi, Delhi - 110092, India',
    helplinePhone: '011-25302167, 011-25302169, 011-25302170',
    helplineEmail: 'admissiongrievances@ipu.ac.in, pro@ipu.ac.in',
    stats: {
      schoolsCount: 15,
      affiliatedColleges: 120,
      totalStudents: '100,000+',
      annualGraduates: '28,000+',
      highestPackage: '₹45 LPA',
      averagePackage: '₹8.5 LPA',
      patentsGranted: '140+',
      acresCovered: '78.75 Acres (60A Dwarka + 18.75A East Delhi)'
    }
  },

  leadership: [
    {
      role: 'Visitor / Chancellor',
      name: 'Shri Vinai Kumar Saxena',
      designation: 'Hon’ble Lieutenant Governor of National Capital Territory of Delhi',
      office: 'Raj Niwas, Delhi',
      message: 'Nurturing holistic technological innovation, professional excellence, and ethical leadership across the National Capital Territory.'
    },
    {
      role: 'Vice Chancellor',
      name: 'Prof. (Dr.) Mahesh Verma',
      designation: 'Vice Chancellor, GGSIPU · Padma Shri Awardee · Dr. B.C. Roy National Awardee',
      office: 'Office of the Vice Chancellor, Administrative Block, Dwarka Campus',
      message: 'GGSIPU stands tall with NAAC A++ accreditation (3.56 CGPA), pioneering research in AI, Robotics, and Biotechnology, state-of-the-art infrastructure across Dwarka and our green East Delhi Campus, and over 120 premier colleges shaping India’s future workforce.'
    },
    {
      role: 'Registrar',
      name: 'Dr. Kamal Pathak',
      designation: 'Registrar, GGSIPU',
      office: 'Registrar Secretariat, Dwarka Campus',
      message: 'Committed to seamless academic governance, student-centric digital services, Samarth ERP automation, and transparent examinations.'
    }
  ],

  heroSlides: [
    {
      id: 'slide-1',
      img: '/assets/guru-gobind-singh-indraprastha-university/7BvRwNmAo35z.jpg',
      badge: 'NAAC GRADE A++ · 3.56 CGPA',
      title: 'Academic Excellence & Convocation Arena',
      subtitle: 'Conferring degrees to over 28,000 scholars annually with highest state accreditation grade.'
    },
    {
      id: 'slide-2',
      img: '/assets/guru-gobind-singh-indraprastha-university/X19YSLXVHTL1.jpg',
      badge: '60-ACRE DWARKA SANCTUARY',
      title: 'State-of-the-Art Dwarka Main Campus',
      subtitle: 'Modern architectural blocks, specialized labs, Central Library (UIRC), and vibrant amphitheatre.'
    },
    {
      id: 'slide-3',
      img: '/assets/guru-gobind-singh-indraprastha-university/phR2KoRsnEf1.jpg',
      badge: 'EAST DELHI CAMPUS (EDC)',
      title: 'Smart Net-Zero Campus at Surajmal Vihar',
      subtitle: 'Home to USAR (Automation & Robotics) and USDI (Design & Innovation) with cutting-edge labs.'
    },
    {
      id: 'slide-4',
      img: '/assets/guru-gobind-singh-indraprastha-university/QPyg4MvR1lIy.jpg',
      badge: 'RESEARCH & INNOVATION',
      title: 'University Information Resource Centre (UIRC)',
      subtitle: 'Multi-storey digital library housing 100,000+ volumes, IEEE, Scopus, Delnet, and e-learning hubs.'
    },
    {
      id: 'slide-5',
      img: '/assets/guru-gobind-singh-indraprastha-university/ZHysyd8CNKOR.jpg',
      badge: 'GOVT. NCT OF DELHI',
      title: '15 University Schools & 120+ Premier Colleges',
      subtitle: 'Comprehensive multi-disciplinary education spanning Engineering, Law, Medicine, Management, and Design.'
    },
    {
      id: 'slide-6',
      img: '/assets/guru-gobind-singh-indraprastha-university/QUoMwWckTkov.jpg',
      badge: 'IPU CET 2026 ADMISSIONS',
      title: 'National & University Common Entrance Gateway',
      subtitle: 'Transparent merit-based admissions through JEE Main, CLAT, NEET, CAT, and IPU CET.'
    },
    {
      id: 'slide-7',
      img: '/assets/guru-gobind-singh-indraprastha-university/hBBWAPxMvIG2.jpg',
      badge: 'STUDENT LIFE & ANUGOONJ',
      title: 'Dynamic Campus Culture & Holistic Welfare',
      subtitle: 'Annual cultural extravaganza "Anugoonj", Inter-College sports olympiads, NSS, and student clubs.'
    },
    {
      id: 'slide-8',
      img: '/assets/guru-gobind-singh-indraprastha-university/cvIEqJjnB9by.jpg',
      badge: 'GREEN RECOGNITION',
      title: 'Lush Landscaping, Fountains & Eco Sustainability',
      subtitle: 'Rainwater harvesting, solar power arrays, and expansive sports complexes.'
    }
  ],

  schools: IPU_SCHOOLS,
  programs: IPU_PROGRAMS,
  affiliatedColleges: IPU_COLLEGES,
  notices: IPU_NOTICES,

  noticeBoxes: {
    admissions: {
      title: 'Admissions 2026-27...',
      color: 'bg-[#041d54]',
      accentColor: 'text-[#ffcb04]',
      marqueeItems: [
        'BBA, B.Com(H), Distance & Online Programmes (CDOE)',
        'Admission 2026-27 Main Registration Portal Live',
        'Spot Round Counselling & Seat Matrix Status',
        'Apply Online Portal (ipu.admissions.nic.in)',
        'Management Quota Online Verification Window',
        'Common Entrance Test (CET 2026) Schedule & Syllabus'
      ],
      actionBtn: { text: 'Apply Online Portal', link: 'https://ipu.admissions.nic.in/' }
    },
    importantLinks: {
      title: 'Important Links...',
      color: 'bg-[#041d54]',
      accentColor: 'text-[#ffcb04]',
      marqueeItems: [
        'IPU Samarth ERP Portal Login',
        'Viksit Bharat @2047 Youth Innovation Cell',
        'Internal Complaint Committee (ICC) & Grievance',
        'Central Instrumentation Facility (CEPS)',
        'IPU - Intellectual Property Rights (IPR) Cell',
        'IIQAC & NAAC Self-Study Reports',
        'Centralized Career Guidance and Placement Cell (CCGPC)',
        'Indraprastha Law Review (ILR) Volume 12'
      ],
      actionBtn: { text: 'University Schools', link: '#schools' }
    },
    students: {
      title: 'Students Corner...',
      color: 'bg-[#041d54]',
      accentColor: 'text-[#ffcb04]',
      marqueeItems: [
        'Sports Activities & Annual Athletic Meet',
        'National Service Scheme (NSS) & NCC Enrolment',
        'Student Hostels (Aravali, Shivalik, Kaveri, Saraswati)',
        'Centralized Placement Drives & Internships',
        'Student Grievance Redressal Monitoring System',
        'Central Library (UIRC) Digital Catalogue Search',
        'Anugoonj Annual Cultural Festival Updates',
        'UIAC - Utthaan Equal Opportunity Resource Desk'
      ],
      actionBtn: { text: 'Online Fee Services', link: '#fee-portal' }
    },
    alerts: {
      title: 'Alerts & Circulars...',
      color: 'bg-[#041d54]',
      accentColor: 'text-[#ffcb04]',
      marqueeItems: [
        'Spot Round Paramedical Offline Counselling on 22-Oct-2026',
        'Final Results of BHMS (Prof 01, 02, 03 Supplementary)',
        'MBBS Prof 02 Examination Notification Published',
        'Group Photograph for University Schools on 21st Oct. 2026',
        'Refund of Application Fee for Cancelled Positions',
        'Public Warning: Beware of Unauthorized Admission Agents',
        'Download LinkIPU Official Android Application (v3.2)'
      ],
      actionBtn: { text: 'Notices / Circulars', link: '#notices' }
    }
  },

  campuses: [
    {
      id: 'dwarka',
      name: 'Dwarka Main Campus',
      tagline: 'Administrative & Academic Headquarters',
      acres: '60+ Acres',
      location: 'Sector 16-C, Dwarka, New Delhi 110078',
      features: [
        'Administrative Secretariat & Vice Chancellor’s Complex',
        '13 University Schools of Studies (USICT, USMS, USLLS, USBT, USCT, etc.)',
        'University Information Resource Centre (UIRC) Central Library',
        '1,200-Seater Air-Conditioned Main Auditorium',
        '4 On-Campus Hostels (Shivalik, Aravali, Kaveri, Nilgiri)',
        'Olympic-Sized Sports Ground, Tennis & Basketball Courts',
        'Medical Health Centre & Day-Care Facility',
        'SBI Bank Branch, ATMs, Food Courts & Amphi-Theatre'
      ]
    },
    {
      id: 'east-delhi',
      name: 'East Delhi Campus (EDC)',
      tagline: 'Smart Net-Zero Campus of Automation & Design',
      acres: '18.75 Acres',
      location: 'Surajmal Vihar, East Delhi 110092',
      features: [
        'Ultra-modern Net-Zero energy architecture with geothermal cooling',
        'University School of Automation & Robotics (USAR)',
        'University School of Design & Innovation (USDI)',
        'State-of-the-Art AI, Robotics, Machine Learning & IoT Testbeds',
        'Digital Fabrication, Rapid Prototyping & VR Testing Studios',
        'Dedicated 600-Capacity Student Residences with High-Speed Wi-Fi',
        'Central Solar Microgrid generating 2.5 MW clean power',
        'Direct connectivity to Karkardooma & Anand Vihar Metro Stations'
      ]
    }
  ],

  faqs: [
    {
      q: 'How does admission to B.Tech programs in GGSIPU happen?',
      a: 'Admissions to B.Tech programs across University Schools (USICT, USAR, USCT) and affiliated colleges are primarily conducted through JEE Main Paper-1 ranks followed by centralized online counselling by GGSIPU. Some specialized biotechnology programs accept IPU CET (CET Code 130).'
    },
    {
      q: 'What is the accreditation status of Guru Gobind Singh Indraprastha University?',
      a: 'GGSIPU is accredited by NAAC with the prestigious "A++" Grade (3.56 CGPA out of 4.00) valid for 7 years until February 2030. It is ranked among the Top 75 Universities in India by NIRF and is approved by UGC under Section 12B.'
    },
    {
      q: 'What programs are housed at the East Delhi Campus in Surajmal Vihar?',
      a: 'The East Delhi Campus houses two flagship schools: USAR (University School of Automation & Robotics) offering B.Tech in AI & Data Science, AI & Machine Learning, IIoT, and Automation & Robotics; and USDI (University School of Design & Innovation) offering B.Des and M.Des in Industrial Design, Interaction UI/UX Design, and Interior Design.'
    },
    {
      q: 'How do I participate in Spot Round Counselling?',
      a: 'Spot Round Counselling notifications are published on ipu.admissions.nic.in and the university notice board. Eligible CET/CUET/National Test qualified candidates can participate in physical offline or online spot rounds by registering and paying the requisite participation fee.'
    },
    {
      q: 'Does GGSIPU offer distance and online degree programs?',
      a: 'Yes, through the Centre for Distance and Online Education (CDOE), GGSIPU offers UGC-DEB approved online and distance programs including BBA, B.Com (Hons), and professional skill certificates.'
    }
  ]
};
