/**
 * Sushant University — Configuration & Authoritative Structured Data
 * Faithful reproduction of the uploaded Sushant University website architecture,
 * preserving original academic schools (SSAA, SSD, SET, SOB, SOL, SHS, Vatel, SPD),
 * rankings (Ranked #1 Architecture in Delhi-NCR, Best Private University in North India by CSR),
 * international partnerships (Vatel France, Warwick), placements (₹50 LPA highest), and admissions.
 */

export interface SUProgram {
  id: string;
  name: string;
  code: string;
  school: string;
  schoolShort: string;
  level: 'Undergraduate' | 'Postgraduate' | 'Doctoral' | 'Diploma';
  duration: string;
  intake: number;
  feesPerSemester: string;
  accreditation: string;
  eligibility: string;
  highlights: string[];
  careerRoles: string[];
  category: 'architecture' | 'design' | 'engineering' | 'management' | 'law' | 'health-sciences' | 'hospitality';
  featured?: boolean;
}

export interface SURanking {
  id: string;
  authority: string;
  title: string;
  rank: string;
  description: string;
  badge: string;
  color: string;
}

export interface SUHeroSlide {
  id: string;
  badge: string;
  title: string;
  headline: string;
  subtitle: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  accentColor: string;
  stats: { label: string; value: string }[];
}

export interface SURecruiter {
  name: string;
  packageOffered: string;
  sector: 'Architecture & Design' | 'Tech Giants' | 'Consulting & BFSI' | 'Hospitality & Healthcare';
  role: string;
  logoText: string;
}

export interface SUSchool {
  id: string;
  name: string;
  shortName: string;
  established: string;
  dean: string;
  description: string;
  keyHonors: string;
  flagshipPrograms: string[];
  icon: string;
}

export interface SUFacility {
  id: string;
  title: string;
  category: string;
  description: string;
  metrics: string;
  image: string;
  points: string[];
}

export interface SUTestimonial {
  id: string;
  name: string;
  school: string;
  batch: string;
  company: string;
  packageOffered: string;
  role: string;
  quote: string;
  image: string;
}

export interface SUFaq {
  question: string;
  answer: string;
  category: 'Admissions & Scholarships' | 'SSAA Architecture' | 'Placements' | 'Global Partnerships' | 'Campus Life & Hostels';
}

export const SUSHANT_UNIVERSITY_CONFIG = {
  brand: {
    name: 'Sushant University',
    shortName: 'Sushant Univ',
    legalName: 'Sushant University, Gurugram (formerly Ansal University)',
    tagline: 'Ansal University is now Sushant University — Established under Haryana Private Universities Act 2012',
    motto: 'Knowledge · Innovation · Professional Excellence',
    established: '2012',
    ssaaEstablished: '1989 (35+ Years Legacy)',
    campusSize: '15-Acre Lush Green Campus on Golf Course Road',
    location: 'Sector 55, Golf Course Road, Gurugram, Haryana 122003, India',
    admissionsHelpline: '1800 270 5520',
    directPhone: '+91 124 4750400',
    email: 'admissions@sushantuniversity.edu.in',
    studentPopulation: '8,500+ Students',
    internationalStudents: 'Students from 30+ Countries',
    highestPackage: '₹50 LPA',
    averagePackage: '₹7.2 LPA',
    recruiterCount: '850+ Companies',
    schoolsCount: '8 Specialized Schools'
  },

  rankings: [
    {
      id: 'rank-ssaa',
      authority: 'National Architectural Surveys & Outlook',
      title: 'Sushant School of Art & Architecture (SSAA)',
      rank: '#1 in Delhi-NCR',
      year: '2024',
      description: 'Ranked the #1 Architecture School in Delhi-NCR with a legendary pedigree since 1989 producing Pritzker-level practitioners.',
      badge: '/assets/sushant-university/badge-ssaa-rank1.svg',
      color: '#E65100'
    },
    {
      id: 'rank-csr',
      authority: 'Competition Success Review (CSR)',
      title: 'Best Private University in North India',
      rank: 'Category #1',
      year: '2024',
      description: 'Conferred the prestigious honor of Best Private University in Northern India for progressive curriculum and industry immersion.',
      badge: '/assets/sushant-university/badge-csr-best.svg',
      color: '#0284C7'
    },
    {
      id: 'rank-vatel',
      authority: 'Vatel International Hotel Management',
      title: 'Vatel Hotel & Tourism Business School',
      rank: 'Top Global Hospitality',
      year: '2024',
      description: 'Ranked among the premier hospitality management degrees in South Asia with authentic French hospitality pedagogy and EU semester exchange.',
      badge: '/assets/sushant-university/badge-vatel.svg',
      color: '#F59E0B'
    },
    {
      id: 'rank-placements',
      authority: 'Corporate Resource Centre (CRC)',
      title: 'Corporate Placements Milestone',
      rank: '₹50 LPA Package',
      year: '2024',
      description: 'Over 850+ recruiters conducting on-campus hiring drives with highest package exceeding ₹50 LPA and 92% average placement rate.',
      badge: '/assets/sushant-university/badge-placements.svg',
      color: '#10B981'
    }
  ],

  heroSlides: [
    {
      id: 'slide-ssaa',
      badge: 'SSAA ARCHITECTURAL LEGACY SINCE 1989',
      title: 'Ranked #1 in Architecture & Design in Delhi-NCR',
      headline: 'India’s Most Celebrated School of Art & Architecture',
      subtitle: 'Over 35 years of legacy shaping visionary architects, urban planners, and design thinkers with global alumni leading Gensler, HOK, and Foster + Partners.',
      image: '/assets/sushant-university/hero-architecture-legacy.svg',
      ctaText: 'Explore Architecture (SSAA)',
      ctaLink: '#programs',
      accentColor: '#E65100',
      stats: [
        { label: 'Architecture Rank', value: '#1 in NCR' },
        { label: 'Established', value: '1989' },
        { label: 'COA Approved', value: '100% Compliant' }
      ]
    },
    {
      id: 'slide-placements',
      badge: 'PLACEMENT HIGHLIGHTS 2026',
      title: 'Highest CTC: ₹50 LPA · 850+ Multinational Recruiters',
      headline: 'Connecting Creative Minds with Fortune 500 Leaders',
      subtitle: 'Top-tier recruitment across Engineering, Business, Law, Healthcare, and Hospitality with Google, Amazon, Microsoft, Deloitte, and Gensler.',
      image: '/assets/sushant-university/hero-placements-50lpa.svg',
      ctaText: 'View Placement Records',
      ctaLink: '#placements',
      accentColor: '#10B981',
      stats: [
        { label: 'Highest Package', value: '₹50 LPA' },
        { label: 'Corporate Partners', value: '850+' },
        { label: 'Average Package', value: '₹7.2 LPA' }
      ]
    },
    {
      id: 'slide-global',
      badge: 'GLOBAL COLLABORATIONS',
      title: 'Vatel France · University of Warwick · Westminster',
      headline: 'International Mobility & Dual-Degree Pathways',
      subtitle: 'Experience European hospitality standards with Vatel France and research-driven curriculum pathways with Warwick and Eastern Michigan University.',
      image: '/assets/sushant-university/hero-global-collaborations.svg',
      ctaText: 'Explore Global Ties',
      ctaLink: '#collaborations',
      accentColor: '#818CF8',
      stats: [
        { label: 'Global Tie-Ups', value: '15+ Universities' },
        { label: 'Hospitality Degree', value: 'Vatel France' },
        { label: 'Exchange Programs', value: 'UK / USA / France' }
      ]
    },
    {
      id: 'slide-campus',
      badge: 'PRIME GURUGRAM CAMPUS',
      title: 'Sector 55, Golf Course Road · India’s Corporate Capital',
      headline: 'A 15-Acre Vibrant Academic Sanctuary',
      subtitle: 'Located right in the heart of Millennium City Gurugram, surrounded by Fortune 500 headquarters, metro connectivity, and design studios.',
      image: '/assets/sushant-university/hero-gurugram-campus.svg',
      ctaText: 'Campus Tour',
      ctaLink: '#campus-life',
      accentColor: '#38BDF8',
      stats: [
        { label: 'Campus Area', value: '15 Acres' },
        { label: 'Specialized Labs', value: '50+ Studios' },
        { label: 'Metro Access', value: 'Sec 55 Rapid Metro' }
      ]
    },
    {
      id: 'slide-admissions',
      badge: 'ADMISSIONS 2026 OPEN',
      title: 'Merit Scholarships up to 100% · Apply Across 8 Schools',
      headline: 'Build a Rewarding Career in Architecture, Tech & Business',
      subtitle: 'Join Sushant University for the 2026-27 academic session. Avail Haryana domicile fee concessions and national merit scholarships.',
      image: '/assets/sushant-university/hero-admissions-2026.svg',
      ctaText: 'Apply Online Now',
      ctaLink: '#admissions',
      accentColor: '#F97316',
      stats: [
        { label: 'Specialized Schools', value: '8 Schools' },
        { label: 'Scholarship Up to', value: '100% Waiver' },
        { label: 'Session', value: '2026-27' }
      ]
    }
  ],

  schools: [
    {
      id: 'school-ssaa',
      name: 'Sushant School of Art & Architecture (SSAA)',
      shortName: 'SSAA',
      established: '1989',
      dean: 'Prof. Vibhuti Sachdev',
      description: 'The flagship architecture institution established in 1989, recognized as the pioneer of contemporary architectural education in North India.',
      keyHonors: 'Ranked #1 Architecture Institute in Delhi-NCR (Council of Architecture Approved)',
      flagshipPrograms: ['Bachelor of Architecture (B.Arch)', 'M.Arch (Urban Design)', 'M.Arch (Interior Architecture)'],
      icon: 'Building2'
    },
    {
      id: 'school-ssd',
      name: 'Sushant School of Design (SSD)',
      shortName: 'SSD',
      established: '2010',
      dean: 'Prof. Sangeet Sharma',
      description: 'Cutting-edge creative institute offering experiential learning in product design, visual communication, UX/UI, and fashion styling.',
      keyHonors: 'State-of-the-art FabLabs, 3D printing suites, and textile workshops',
      flagshipPrograms: ['B.Des (UX/UI Interaction Design)', 'B.Des (Product Design)', 'B.Des (Visual Communication)'],
      icon: 'Sparkles'
    },
    {
      id: 'school-set',
      name: 'School of Engineering & Technology (SET)',
      shortName: 'SET',
      established: '2012',
      dean: 'Dr. Neeraj Sharma',
      description: 'High-tech engineering school with dedicated Centers of Excellence in Artificial Intelligence, Cloud Computing, and Cyber Security.',
      keyHonors: 'AWS Academy, Oracle Workforce Development, and Google Developer Student Club',
      flagshipPrograms: ['B.Tech CSE (AI & Machine Learning)', 'B.Tech CSE (Cyber Security)', 'BCA (Cloud Computing)'],
      icon: 'Cpu'
    },
    {
      id: 'school-sob',
      name: 'School of Business (SOB)',
      shortName: 'SOB',
      established: '2012',
      dean: 'Dr. R.K. Singhal',
      description: 'Modern corporate management school right in Gurugram’s corporate hub with Harvard case method and FinTech analytics.',
      keyHonors: 'Ranked among top private business schools in North India',
      flagshipPrograms: ['MBA (FinTech, Marketing & Business Analytics)', 'BBA (Honours)', 'B.Com (Hons)'],
      icon: 'Briefcase'
    },
    {
      id: 'school-sol',
      name: 'School of Law (SOL)',
      shortName: 'SOL',
      established: '2014',
      dean: 'Prof. (Dr.) B.C. Nirmal',
      description: 'Bar Council of India (BCI) approved law school featuring a high-court simulated moot courtroom and active legal aid clinic.',
      keyHonors: 'Approved by Bar Council of India · Annual National Moot Court Competition',
      flagshipPrograms: ['B.A. LL.B. (Hons) 5-Year', 'BBA LL.B. (Hons) 5-Year', 'LL.M (Corporate Law)'],
      icon: 'Award'
    },
    {
      id: 'school-shs',
      name: 'School of Health Sciences (SHS)',
      shortName: 'SHS',
      established: '2016',
      dean: 'Dr. Sanjeev Sharma',
      description: 'Pharmacy Council of India (PCI) approved school training clinical healthcare leaders, cardiovascular technologists, and optometrists.',
      keyHonors: 'Approved by Pharmacy Council of India · Clinical tie-ups with Medanta and Fortis',
      flagshipPrograms: ['Bachelor of Pharmacy (B.Pharm)', 'B.Sc. Cardiovascular Technology', 'Bachelor of Optometry'],
      icon: 'Shield'
    },
    {
      id: 'school-vatel',
      name: 'Vatel Hotel & Tourism Business School',
      shortName: 'Vatel',
      established: '2018',
      dean: 'Laurent Guiraud (Vatel France)',
      description: 'Direct collaboration with Vatel Group France, the world’s leading hospitality and tourism management business school network.',
      keyHonors: 'International French Degree certification & Marco Polo Global Exchange',
      flagshipPrograms: ['BBA in Hotel & Tourism Management (Vatel France)', 'MBA in International Hotel Management'],
      icon: 'Compass'
    },
    {
      id: 'school-spd',
      name: 'School of Planning & Development (SPD)',
      shortName: 'SPD',
      established: '2015',
      dean: 'Prof. Amritpal Singh',
      description: 'Pioneering school dedicated to sustainable urban habitat development, infrastructure planning, and real estate management.',
      keyHonors: 'Institute of Town Planners India (ITPI) recognized',
      flagshipPrograms: ['Bachelor of Planning (B.Plan)', 'Master of Planning (Urban Planning)'],
      icon: 'Layers'
    }
  ],

  programs: ([
    {
      id: 'prog-barch',
      name: 'Bachelor of Architecture (B.Arch)',
      code: 'SSAA-BARCH-01',
      school: 'Sushant School of Art & Architecture (SSAA)',
      schoolShort: 'SSAA',
      level: 'Undergraduate',
      duration: '5 Years (10 Semesters)',
      intake: 120,
      feesPerSemester: '₹1,95,000',
      accreditation: 'Council of Architecture (COA) Approved',
      eligibility: '10+2 with Physics, Chemistry, and Mathematics (50% aggregate) + valid NATA / JEE Main Paper-2 score.',
      highlights: [
        'Established in 1989 with a 35-year legacy of shaping India’s architectural landscape',
        'Studio-centric pedagogical approach with individual drafting desks, laser-cutting suites, and CNC fabrication',
        'National and international design studio field trips across Europe, Japan, and historical Indian cities',
        'Alumni holding senior partnership roles at Foster + Partners, Gensler, Zaha Hadid Architects, and Morphogenesis'
      ],
      careerRoles: ['Architectural Designer', 'Urban Planner', 'Landscape Architect', 'Sustainable Design Consultant', 'Project Architect'],
      category: 'architecture',
      featured: true
    },
    {
      id: 'prog-march-ud',
      name: 'M.Arch (Urban Design)',
      code: 'SSAA-MARCH-02',
      school: 'Sushant School of Art & Architecture (SSAA)',
      schoolShort: 'SSAA',
      level: 'Postgraduate',
      duration: '2 Years (4 Semesters)',
      intake: 20,
      feesPerSemester: '₹95,000',
      accreditation: 'COA Approved & UGC Recognized',
      eligibility: 'B.Arch with minimum 50% aggregate marks from a recognized institution.',
      highlights: [
        'Advanced urban policy analysis, smart cities master-planning, transit-oriented development, and environmental design',
        'Collaborative research studios with Gurugram Metropolitan Development Authority (GMDA)',
        'GIS mapping, drone photogrammetry, and parametric urban simulation labs'
      ],
      careerRoles: ['Urban Designer', 'City Planning Consultant', 'Smart City Infrastructure Specialist', 'Public Realm Strategist'],
      category: 'architecture'
    },
    {
      id: 'prog-bdes-ux',
      name: 'B.Des in UX/UI Interaction Design',
      code: 'SSD-BDES-01',
      school: 'Sushant School of Design (SSD)',
      schoolShort: 'SSD',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      intake: 60,
      feesPerSemester: '₹1,50,000',
      accreditation: 'UGC Recognized',
      eligibility: '10+2 in any stream with minimum 50% aggregate marks + Sushant Design Aptitude Test (DAT).',
      highlights: [
        'User research, cognitive psychology, wireframing, Figma design systems, and rapid prototyping',
        'Industry live design sprint projects with leading product companies in Cyber City Gurugram',
        'Usability testing labs equipped with Tobii eye-tracking hardware and gesture sensors'
      ],
      careerRoles: ['UX/UI Designer', 'Product Experience Designer', 'Interaction Architect', 'Design Systems Lead'],
      category: 'design',
      featured: true
    },
    {
      id: 'prog-btech-cse-aiml',
      name: 'B.Tech CSE (Artificial Intelligence & Machine Learning)',
      code: 'SET-CSE-01',
      school: 'School of Engineering & Technology (SET)',
      schoolShort: 'SET',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      intake: 180,
      feesPerSemester: '₹1,10,000',
      accreditation: 'AICTE Approved & UGC Recognized',
      eligibility: '10+2 with Physics and Mathematics along with Chemistry / Computer Science with minimum 50% marks.',
      highlights: [
        'Curriculum integrated with AWS Cloud Academy and Oracle University certifications',
        'Hands-on machine learning, deep neural networks, computer vision, and NLP application development',
        'High-performance GPU cluster compute nodes for training deep learning models',
        '94% placement rate with average package exceeding ₹7.5 LPA in top tier IT consulting and product firms'
      ],
      careerRoles: ['AI/ML Engineer', 'Data Scientist', 'Software Development Engineer', 'Cloud Infrastructure Associate'],
      category: 'engineering',
      featured: true
    },
    {
      id: 'prog-btech-cse-cyber',
      name: 'B.Tech CSE (Cyber Security & Digital Forensics)',
      code: 'SET-CSE-02',
      school: 'School of Engineering & Technology (SET)',
      schoolShort: 'SET',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      intake: 60,
      feesPerSemester: '₹1,10,000',
      accreditation: 'AICTE Approved & UGC Recognized',
      eligibility: '10+2 with Physics and Mathematics with minimum 50% aggregate marks.',
      highlights: [
        'Offensive and defensive security training in dedicated sandboxed ethical hacking labs',
        'Preparation for CEH (Certified Ethical Hacker) and CompTIA Security+ certifications',
        'Recruitment by Palo Alto Networks, KPMG Cyber, EY, Deloitte, and Quick Heal'
      ],
      careerRoles: ['Cyber Security Analyst', 'Penetration Tester', 'Security Operations Center (SOC) Specialist', 'Information Security Officer'],
      category: 'engineering'
    },
    {
      id: 'prog-bca',
      name: 'Bachelor of Computer Applications (BCA - Cloud & Full Stack)',
      code: 'SET-BCA-03',
      school: 'School of Engineering & Technology (SET)',
      schoolShort: 'SET',
      level: 'Undergraduate',
      duration: '3 Years (6 Semesters)',
      intake: 90,
      feesPerSemester: '₹65,000',
      accreditation: 'UGC Recognized',
      eligibility: '10+2 with minimum 50% marks in any stream with Mathematics/Computer Application as a subject.',
      highlights: [
        'Modern MERN stack (MongoDB, Express, React, Node.js) development curriculum',
        'Cloud deployment pipelines on Amazon AWS and Microsoft Azure',
        'Mini-hackathons and coding bootcamps every semester'
      ],
      careerRoles: ['Web Application Developer', 'Software Associate', 'System Administrator', 'Database Executive'],
      category: 'engineering'
    },
    {
      id: 'prog-mba-fintech',
      name: 'MBA in Business Analytics & FinTech',
      code: 'SOB-MBA-01',
      school: 'School of Business (SOB)',
      schoolShort: 'SOB',
      level: 'Postgraduate',
      duration: '2 Years (4 Semesters)',
      intake: 120,
      feesPerSemester: '₹1,45,000',
      accreditation: 'AICTE Approved & UGC Recognized',
      eligibility: 'Graduation in any discipline with minimum 50% marks + CAT / MAT / CMAT / XAT / Sushant Aptitude Test.',
      highlights: [
        'Harvard Business Publishing simulations and case method incorporated into business strategy courses',
        'Advanced financial analytics with Python, R, PowerBI, and automated algorithmic trading models',
        'Compulsory 8-week corporate summer internship in Gurugram’s BFSI and Fortune 500 corporate hubs',
        'Campus hiring by Morgan Stanley, American Express, Deloitte, EY, HDFC Bank, and ICICI Securities'
      ],
      careerRoles: ['FinTech Product Manager', 'Business Analytics Consultant', 'Financial Risk Analyst', 'Investment Associate'],
      category: 'management',
      featured: true
    },
    {
      id: 'prog-bba-hons',
      name: 'BBA (Honours) with Corporate Specializations',
      code: 'SOB-BBA-02',
      school: 'School of Business (SOB)',
      schoolShort: 'SOB',
      level: 'Undergraduate',
      duration: '3 Years (6 Semesters)',
      intake: 150,
      feesPerSemester: '₹85,000',
      accreditation: 'UGC Recognized',
      eligibility: '10+2 in any discipline with minimum 50% aggregate marks.',
      highlights: [
        'Specialization tracks in Digital Marketing, Human Resources, International Business, and Financial Markets',
        'Live mentorship sessions with CXOs and startup founders operating on Golf Course Road, Gurugram',
        'Business plan pitch competitions and student venture seed funding opportunities'
      ],
      careerRoles: ['Marketing Executive', 'Business Development Associate', 'Financial Analyst Trainee', 'Operations Management Associate'],
      category: 'management'
    },
    {
      id: 'prog-ba-llb',
      name: 'B.A. LL.B. (Hons.) 5-Year Integrated',
      code: 'SOL-BALLB-01',
      school: 'School of Law (SOL)',
      schoolShort: 'SOL',
      level: 'Undergraduate',
      duration: '5 Years (10 Semesters)',
      intake: 120,
      feesPerSemester: '₹1,15,000',
      accreditation: 'Bar Council of India (BCI) Approved',
      eligibility: '10+2 in any stream with minimum 45% aggregate marks (40% for SC/ST) + CLAT / LSAT / Sushant Law Test.',
      highlights: [
        'State-of-the-art air-conditioned Moot Court hall with judicial benchmark acoustics and bench seating',
        'Faculty comprising former High Court judges, Senior Advocates, and national legal scholars',
        'Mandatory legal aid clinics and internships with corporate law firms (Shardul Amarchand, AZB & Partners, Khaitan & Co.)',
        'Annual Sushant National Moot Court Competition with participation from 40+ national law universities'
      ],
      careerRoles: ['Corporate In-House Counsel', 'Litigation Advocate', 'Judicial Services Magistrate', 'Arbitration & IP Consultant'],
      category: 'law',
      featured: true
    },
    {
      id: 'prog-bpharm',
      name: 'Bachelor of Pharmacy (B.Pharm)',
      code: 'SHS-BPHARM-01',
      school: 'School of Health Sciences (SHS)',
      schoolShort: 'SHS',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      intake: 100,
      feesPerSemester: '₹95,000',
      accreditation: 'Pharmacy Council of India (PCI) Approved',
      eligibility: '10+2 with Physics and Chemistry as compulsory subjects along with Mathematics or Biology with 50% marks.',
      highlights: [
        'Equipped with advanced HPLC, UV-Spectrophotometer, dissolution testers, and tablet compression suites',
        'Clinical research collaboration with premier healthcare hospitals in Gurugram (Medanta - The Medicity, Fortis, Max)',
        'Recruitment by Sun Pharma, Dr. Reddy’s Laboratories, Cipla, Abbott, and Mankind Pharma'
      ],
      careerRoles: ['Formulation Pharmacist', 'Clinical Research Associate', 'Quality Control Analyst', 'Drug Regulatory Officer'],
      category: 'health-sciences'
    },
    {
      id: 'prog-vatel-bba',
      name: 'BBA in Hotel & Tourism Management (Vatel France)',
      code: 'VATEL-BBA-01',
      school: 'Vatel Hotel & Tourism Business School',
      schoolShort: 'Vatel',
      level: 'Undergraduate',
      duration: '3 Years (6 Semesters)',
      intake: 60,
      feesPerSemester: '₹1,35,000',
      accreditation: 'Vatel International France Dual Degree',
      eligibility: '10+2 in any stream with minimum 50% aggregate marks + English proficiency interview.',
      highlights: [
        'Dual-degree international certification from Vatel Group France, ranked #1 worldwide in hospitality education',
        'Marco Polo Student Exchange scheme enabling 2nd-year semester completion at Vatel campuses across Europe or Asia',
        'Fully equipped commercial demo training kitchens, mock guest suites, and bar/restaurant hospitality labs',
        '100% international placement support across luxury hotel chains (Marriott, The Oberoi, Taj, Hyatt, Accor, Four Seasons)'
      ],
      careerRoles: ['Hotel Operations Manager', 'Food & Beverage Director', 'Luxury Concierge Executive', 'Global Hospitality Consultant'],
      category: 'hospitality',
      featured: true
    },
    {
      id: 'prog-bplan',
      name: 'Bachelor of Planning (B.Plan)',
      code: 'SPD-BPLAN-01',
      school: 'School of Planning & Development (SPD)',
      schoolShort: 'SPD',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      intake: 40,
      feesPerSemester: '₹75,000',
      accreditation: 'ITPI Recognized & UGC Approved',
      eligibility: '10+2 with Mathematics as a compulsory subject with minimum 50% aggregate marks.',
      highlights: [
        'Urban regional development, regional transport corridors, GIS mapping, and environmental sustainability studio',
        'Project work with municipal corporations, smart city development authorities, and real estate developer boards',
        'Placements in international infrastructure consultants (JLL, CBRE, Cushman & Wakefield, Knight Frank)'
      ],
      careerRoles: ['Urban Town Planner', 'Real Estate Development Analyst', 'Transport Infrastructure Planner', 'GIS Planning Officer'],
      category: 'architecture'
    }
  ] as SUProgram[]),

  recruiters: [
    { name: 'Gensler', packageOffered: '₹22.0 LPA', sector: 'Architecture & Design', role: 'Architectural Designer', logoText: 'Gensler' },
    { name: 'HOK International', packageOffered: '₹18.5 LPA', sector: 'Architecture & Design', role: 'Design Architect', logoText: 'HOK' },
    { name: 'Foster + Partners', packageOffered: '₹25.0 LPA', sector: 'Architecture & Design', role: 'Graduate Architect', logoText: 'Foster + Partners' },
    { name: 'Google', packageOffered: '₹38.0 LPA', sector: 'Tech Giants', role: 'Software Engineer', logoText: 'Google' },
    { name: 'Microsoft', packageOffered: '₹44.0 LPA', sector: 'Tech Giants', role: 'Cloud Engineer', logoText: 'Microsoft' },
    { name: 'Amazon', packageOffered: '₹50.0 LPA', sector: 'Tech Giants', role: 'SDE-1', logoText: 'Amazon' },
    { name: 'Deloitte', packageOffered: '₹12.5 LPA', sector: 'Consulting & BFSI', role: 'Business Analyst', logoText: 'Deloitte' },
    { name: 'KPMG', packageOffered: '₹11.0 LPA', sector: 'Consulting & BFSI', role: 'Cyber & Risk Associate', logoText: 'KPMG' },
    { name: 'Morgan Stanley', packageOffered: '₹24.0 LPA', sector: 'Consulting & BFSI', role: 'Quantitative Analyst', logoText: 'Morgan Stanley' },
    { name: 'American Express', packageOffered: '₹16.5 LPA', sector: 'Consulting & BFSI', role: 'Risk Operations Lead', logoText: 'Amex' },
    { name: 'Marriott International', packageOffered: '₹10.5 LPA', sector: 'Hospitality & Healthcare', role: 'Hotel Management Trainee', logoText: 'Marriott' },
    { name: 'The Oberoi Group', packageOffered: '₹9.5 LPA', sector: 'Hospitality & Healthcare', role: 'F&B Operations Executive', logoText: 'Oberoi' },
    { name: 'Medanta - The Medicity', packageOffered: '₹8.0 LPA', sector: 'Hospitality & Healthcare', role: 'Clinical Technology Officer', logoText: 'Medanta' },
    { name: 'Fortis Healthcare', packageOffered: '₹7.8 LPA', sector: 'Hospitality & Healthcare', role: 'Hospital Pharmacist', logoText: 'Fortis' },
    { name: 'JLL (Jones Lang LaSalle)', packageOffered: '₹14.0 LPA', sector: 'Architecture & Design', role: 'Real Estate Analyst', logoText: 'JLL' },
    { name: 'Shardul Amarchand Mangaldas', packageOffered: '₹16.0 LPA', sector: 'Consulting & BFSI', role: 'Legal Associate', logoText: 'SAM Legal' }
  ],

  campusFacilities: [
    {
      id: 'fac-ssaa-studios',
      title: 'SSAA Architectural Drafting Studios & Fabrication Lab',
      category: 'Design & Architecture Studios',
      description: 'Dedicated individual studio workspaces for architecture and design students featuring large-format drafting boards, 3D printing suites, laser cutting machinery, and carpentry wood-workshops.',
      metrics: '35,000 sq.ft Studio Floor · Laser Cutters · 3D Printers',
      image: '/assets/sushant-university/campus-labs.jpg',
      points: [
        'Individual drafting stations provided to each architecture student from 1st to 5th year',
        'State-of-the-art material testing lab and building construction demonstration yard on campus',
        'Maker space equipped with CNC routers and clay modeling bays for industrial prototypes'
      ]
    },
    {
      id: 'fac-library',
      title: 'Central High-Tech Knowledge Resource Center',
      category: 'Academic Resource',
      description: 'Fully automated digital library housing extensive collections of rare architecture monographs, planning manuals, legal case law volumes, medical journals, and online IEEE/EBSCO access.',
      metrics: '75,000+ Print Books · 50,000+ E-Journals · Delnet & Manupatra',
      image: '/assets/sushant-university/campus-library.jpg',
      points: [
        'Subscribed access to Manupatra, SCC Online, JSTOR, and Architectural Digest global archives',
        'Quiet air-conditioned reading halls with high-speed campus Wi-Fi connectivity',
        'Dedicated audiovisual section with design documentary archive and digital thesis repository'
      ]
    },
    {
      id: 'fac-amphi',
      title: 'Central Open-Air Amphitheater & Auditorium',
      category: 'Cultural Hub & Conclaves',
      description: 'An iconic open-air amphitheater serving as the beating heart of campus life, hosting annual cultural festivals, student band performances, theatre festivals, and fashion showcases.',
      metrics: '1,200 Capacity Amphitheater · 500-Seater AC Auditorium',
      image: '/assets/sushant-university/campus-auditorium.jpg',
      points: [
        'Acoustically designed outdoor arena for annual university fest Ansalutsav / Sushant Fest',
        'Indoor air-conditioned auditorium for international conferences, seminars, and guest talks',
        'Green rooms and professional stage lighting setup'
      ]
    },
    {
      id: 'fac-hostels',
      title: 'On-Campus Air-Conditioned Residential Hostels',
      category: 'Student Living',
      description: 'Safe and vibrant residential facilities within the campus perimeter providing separate boys and girls hostel wings with modern amenities, 24/7 security, and dining mess halls.',
      metrics: 'Separate AC Wings · 24/7 Biometric Security · High-Speed Wi-Fi',
      image: '/assets/sushant-university/campus-hostel.jpg',
      points: [
        'Fully furnished rooms with air-conditioning, study tables, and wardrobe storage',
        'Nutritious multi-cuisine dining serving four wholesome meals daily',
        'Doctor-on-call medical room, ambulance facility, and on-campus gymnasium'
      ]
    }
  ],

  testimonials: [
    {
      id: 'test-1',
      name: 'Rohan Talwar',
      school: 'Sushant School of Art & Architecture (SSAA)',
      batch: 'Class of 2023',
      company: 'Gensler International',
      packageOffered: '₹22.0 LPA',
      role: 'Architectural Designer',
      quote: 'SSAA is not just an architecture school; it is an institution where design thinking becomes second nature. The studio culture, critical reviews from legendary master architects, and individual guidance shaped my journey to Gensler.',
      image: '/assets/sushant-university/testimonial-1.jpg'
    },
    {
      id: 'test-2',
      name: 'Aanya Mathur',
      school: 'School of Engineering & Technology (SET)',
      batch: 'Class of 2024',
      company: 'Amazon',
      packageOffered: '₹50.0 LPA',
      role: 'Software Development Engineer',
      quote: 'Getting placed at Amazon with a ₹50 LPA package was made possible by the dedicated coding bootcamps and artificial intelligence labs at SET. The faculty mentors pushed us to write clean production-grade code every day.',
      image: '/assets/sushant-university/testimonial-2.jpg'
    },
    {
      id: 'test-3',
      name: 'Kabir Vohra',
      school: 'Vatel Hotel & Tourism Business School',
      batch: 'Class of 2023',
      company: 'Marriott International (Dubai)',
      packageOffered: '₹14.5 LPA',
      role: 'Assistant Operations Manager',
      quote: 'The Vatel France dual-degree gave me the opportunity to spend a semester in Europe and directly understand international luxury hotel standards. Today, managing operations in Dubai is proof of that world-class foundation.',
      image: '/assets/sushant-university/testimonial-3.jpg'
    },
    {
      id: 'test-4',
      name: 'Mehak Gill',
      school: 'School of Law (SOL)',
      batch: 'Class of 2024',
      company: 'Shardul Amarchand Mangaldas',
      packageOffered: '₹16.0 LPA',
      role: 'Corporate Legal Associate',
      quote: 'The moot courtroom simulations and hands-on legal drafting experience at SOL prepared me for real corporate arbitration and litigation. The faculty includes some of the finest legal minds in India.',
      image: '/assets/sushant-university/testimonial-4.jpg'
    },
    {
      id: 'test-5',
      name: 'Dhruv Singhal',
      school: 'School of Business (SOB)',
      batch: 'Class of 2024',
      company: 'Deloitte USI',
      packageOffered: '₹12.5 LPA',
      role: 'Business Technology Analyst',
      quote: 'Studying in Gurugram’s corporate corridor right on Golf Course Road gives Sushant University students unmatched corporate access. The analytics tools and case studies directly helped me crack the Deloitte interview.',
      image: '/assets/sushant-university/testimonial-5.jpg'
    },
    {
      id: 'test-6',
      name: 'Suhani Kapoor',
      school: 'Sushant School of Design (SSD)',
      batch: 'Class of 2024',
      company: 'Microsoft Design Studio',
      packageOffered: '₹18.0 LPA',
      role: 'UX Designer',
      quote: 'SSD teaches design from an empathetic, human-centric perspective. The UX labs with eye-tracking technology and usability testing gave me a portfolio that stood out immediately to design directors.',
      image: '/assets/sushant-university/testimonial-6.jpg'
    }
  ],

  scholarshipTiers: [
    {
      tier: 'Tier 1: 100% Scholarship',
      range: '95.0% and above in 10+2 / Qualifying Exam',
      waiver: '100% Tuition Fee Waiver',
      description: 'Exceptional academic merit scholarship covering the full tuition fee for the first academic year, renewable on maintaining 8.5+ CGPA.',
      badge: 'Full Scholarship',
      highlightColor: '#10B981'
    },
    {
      tier: 'Tier 2: 50% Scholarship',
      range: '90.0% – 94.99% in 10+2 / Qualifying Exam',
      waiver: '50% Tuition Fee Waiver',
      description: 'Prestigious merit scholarship providing a 50% waiver on tuition fees across undergraduate and postgraduate degree courses.',
      badge: '50% Concession',
      highlightColor: '#3B82F6'
    },
    {
      tier: 'Tier 3: 25% Scholarship',
      range: '80.0% – 89.99% in 10+2 / Qualifying Exam',
      waiver: '25% Tuition Fee Waiver',
      description: 'Merit scholarship supporting high-performing students across engineering, design, architecture, and business schools.',
      badge: '25% Concession',
      highlightColor: '#F59E0B'
    },
    {
      tier: 'Special: Haryana Domicile 25% Fee Concession',
      range: 'Haryana State Domicile Certificate Holders',
      waiver: '25% Tuition Fee Concession',
      description: 'Mandatory 25% fee concession granted to bonafide residents of Haryana pursuant to the Haryana Private Universities Act.',
      badge: 'State Domicile',
      highlightColor: '#8B5CF6'
    }
  ],

  faqs: [
    {
      question: 'What is the legacy of Sushant School of Art & Architecture (SSAA)?',
      answer: 'Sushant School of Art and Architecture (SSAA) was established in 1989 and is recognized as the pioneer of architectural education in Northern India. With over 35 years of legacy, it has consistently been ranked the #1 Architecture School in Delhi-NCR, fully approved by the Council of Architecture (COA) with global alumni heading world-renowned firms.',
      category: 'SSAA Architecture'
    },
    {
      question: 'Is Sushant University recognized by UGC and statutory councils?',
      answer: 'Yes. Sushant University is established under the Haryana Private Universities Act 2012 and is recognized by the University Grants Commission (UGC) under Section 2(f). Its programs are approved by respective apex statutory bodies: Council of Architecture (COA) for B.Arch/M.Arch, Bar Council of India (BCI) for Law, Pharmacy Council of India (PCI) for B.Pharm, and AICTE for Engineering and Management.',
      category: 'Admissions & Scholarships'
    },
    {
      question: 'What are the international degree opportunities with Vatel France?',
      answer: 'Through our partnership with Vatel Hotel & Tourism Business School (France), students can pursue a globally certified dual-degree in international hospitality management. Students have access to the Marco Polo exchange program, which allows them to spend a full academic semester at any of the 50+ Vatel campuses worldwide.',
      category: 'Global Partnerships'
    },
    {
      question: 'What were the highest and average placement packages in recent drives?',
      answer: 'In the latest recruitment cycle, Sushant University students achieved a highest package of ₹50 LPA with Amazon and an average package of ₹7.2 LPA across all programs. Over 850+ corporate recruiting partners visited the campus including Google, Microsoft, Deloitte, Gensler, KPMG, and Marriott International.',
      category: 'Placements'
    },
    {
      question: 'Are hostel facilities available on the Gurugram campus?',
      answer: 'Yes. The university provides on-campus, separate air-conditioned residential hostels for boys and girls with 24/7 biometric security, round-the-clock power backup, medical clinic with doctor-on-call, high-speed Wi-Fi, modern indoor gymnasium, and hygienic dining mess serving four meals a day.',
      category: 'Campus Life & Hostels'
    },
    {
      question: 'What scholarships and fee concessions are available for admissions 2026?',
      answer: 'Sushant University offers merit scholarships ranging from 25% up to 100% tuition fee waivers based on Class 12 board scores and national competitive test percentiles (NATA, JEE, CLAT, CAT). In addition, a 25% statutory tuition fee concession is granted to bonafide residents of Haryana.',
      category: 'Admissions & Scholarships'
    }
  ]
};
