/**
 * Nirma University — Authoritative Structured Data & Configuration
 * Recreated faithfully for Nirma University (https://nirmauni.ac.in/),
 * preserving official institutional identity, NAAC A+ accreditation (3.65 CGPA),
 * Centre of Excellence status (Govt. of Gujarat), 8 specialized institutes,
 * NIRF rankings, ₹72.04 LPA highest placement, 115-acre campus, and admissions.
 */

export interface NUProgram {
  id: string;
  name: string;
  code: string;
  institute: string;
  instituteShort: string;
  level: 'Undergraduate' | 'Postgraduate' | 'Doctoral' | 'Integrated' | 'Diploma';
  duration: string;
  intake: number;
  feesPerYear: string;
  accreditation: string;
  entranceExam: string;
  eligibility: string;
  highlights: string[];
  careerRoles: string[];
  category: 'technology' | 'management' | 'pharmacy' | 'law' | 'architecture' | 'science' | 'commerce' | 'design';
  featured?: boolean;
}

export interface NURanking {
  id: string;
  authority: string;
  title: string;
  rank: string;
  description: string;
  badge: string;
  color: string;
}

export interface NUHeroSlide {
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

export interface NURecruiter {
  name: string;
  packageOffered: string;
  sector: 'Technology & AI' | 'Banking & BFSI' | 'Consulting & Analytics' | 'Core Engineering & FMCG' | 'Law & Advisory';
  role: string;
  logoText: string;
}

export interface NUInstitute {
  id: string;
  name: string;
  shortName: string;
  established: string;
  dean: string;
  description: string;
  keyHonors: string;
  flagshipPrograms: string[];
  icon: string;
  color: string;
}

export interface NUFacility {
  id: string;
  title: string;
  category: string;
  description: string;
  metrics: string;
  image: string;
  points: string[];
}

export interface NUTestimonial {
  id: string;
  name: string;
  institute: string;
  batch: string;
  company: string;
  packageOffered: string;
  role: string;
  quote: string;
  image: string;
}

export interface NUFaq {
  question: string;
  answer: string;
  category: 'Admissions 2026' | 'Engineering & Technology' | 'Management (MBA & BBA)' | 'Placements & Internships' | 'Hostels & Campus Life';
}

export const NIRMA_UNIVERSITY_CONFIG = {
  brand: {
    name: 'Nirma University',
    tagline: 'तमसो मा ज्योतिर्गमय — From Darkness, Lead Us To Light · Shaping A Better Tomorrow',
    establishedYear: 2003,
    founder: 'Dr. Karsanbhai K. Patel (Industrialist & Philanthropist)',
    founderRole: 'President, Nirma University & Chairman, Nirma Group',
    campusSize: '115-Acre Lush Green Wi-Fi Smart Campus',
    location: 'Sarkhej-Gandhinagar Highway, Chharodi, Ahmedabad, Gujarat 382481, India',
    accreditationHeadline: "NAAC Grade 'A+' (3.65 CGPA) · Centre of Excellence (Govt. of Gujarat)",
    colors: {
      navy: '#0A2548',
      royalNavy: '#0E386E',
      gold: '#F59E0B',
      goldLight: '#FBBF24',
      emerald: '#059669',
      slate: '#1E293B',
      bgDark: '#081426',
      cardDark: '#0C1E38',
      borderDark: '#1E355B'
    },
    helpline: '+91-79-71652000 / 1800 233 6143',
    admissionsEmail: 'admissions@nirmauni.ac.in',
    officialUrl: 'https://nirmauni.ac.in/'
  },

  quickStats: [
    { label: 'Campus Area', value: '115 Acres', subtitle: 'Lush Green Smart Campus in Ahmedabad' },
    { label: 'NAAC Benchmark', value: 'Grade A+', subtitle: 'Score of 3.65 on 4-Point CGPA Scale' },
    { label: 'Highest Package', value: '₹72.04 LPA', subtitle: 'B.Tech ECE / ₹70 LPA MBA Record' },
    { label: 'Specialized Institutes', value: '8 Institutes', subtitle: 'Tech, Mgmt, Pharm, Law, Arch, Sci, Com, Des' },
    { label: 'Industry Partners', value: '300+ Recruiters', subtitle: 'Morgan Stanley, Amazon, Microsoft, Amul' },
    { label: 'Centre of Excellence', value: 'Status Conferred', subtitle: 'Recognized by Government of Gujarat' }
  ],

  heroSlides: [
    {
      id: 'slide-coe-excellence',
      badge: 'GOVT. OF GUJARAT CENTRE OF EXCELLENCE',
      title: 'NIRMA UNIVERSITY · AHMEDABAD',
      headline: 'Shaping A Better Tomorrow Through Transformative Education',
      subtitle: 'Conferred the prestigious Centre of Excellence status by the Government of Gujarat and accredited with NAAC Grade A+ (3.65 CGPA). Over two decades of academic rigor and societal impact.',
      image: '/assets/nirma-university/hero-centre-of-excellence.svg',
      ctaText: 'Explore Admissions 2026',
      ctaLink: '#admissions',
      accentColor: '#F59E0B',
      stats: [
        { label: 'NAAC Grade', value: 'A+ (3.65)' },
        { label: 'Campus Area', value: '115 Acres' },
        { label: 'Govt. Status', value: 'Centre of Excellence' }
      ]
    },
    {
      id: 'slide-placements-72',
      badge: 'RECORD CAREER LAUNCHPAD',
      title: '₹72.04 LPA HIGHEST PLACEMENT OFFER',
      headline: 'Where Global Tech & Corporate Leaders Recruit Top Talent',
      subtitle: 'Over 300 marquee corporate recruiters including Morgan Stanley, Microsoft, Amazon, Samsung, Barclays, Blinkit, and Adani Wilmar recruit annually across technology, management, and law.',
      image: '/assets/nirma-university/hero-placements-72lpa.svg',
      ctaText: 'View Placement Records',
      ctaLink: '#placements',
      accentColor: '#34D399',
      stats: [
        { label: 'Highest Package', value: '₹72.04 LPA' },
        { label: 'Average MBA', value: '₹11.26 LPA' },
        { label: 'Corporate Partners', value: '300+ MNCs' }
      ]
    },
    {
      id: 'slide-technology-lab',
      badge: 'INSTITUTE OF TECHNOLOGY (IT-NU)',
      title: 'FRONTIER ENGINEERING & AI RESEARCH',
      headline: 'Pioneering AI & Machine Learning, Robotics & VLSI Systems',
      subtitle: 'Featuring the AICTE IDEA Lab, 40+ advanced research laboratories, high-performance supercomputing clusters, and cutting-edge interdisciplinary degrees.',
      image: '/assets/nirma-university/hero-technology-innovation.svg',
      ctaText: 'Discover Engineering Programs',
      ctaLink: '#institutes',
      accentColor: '#60A5FA',
      stats: [
        { label: 'Engineering Labs', value: '40+ Hi-Tech' },
        { label: 'Placement Rate', value: '100% in Cyber' },
        { label: 'NIRF Ranked', value: 'Band 101-150' }
      ]
    },
    {
      id: 'slide-lush-campus',
      badge: 'VIBRANT CAMPUS LIFE',
      title: '115-ACRE SERENE SMART CAMPUS',
      headline: 'An Oasis of Intellect, Sports, Culture & Innovation in Ahmedabad',
      subtitle: 'State-of-the-art amphitheater classrooms, central air-conditioned digital library, dedicated boys & girls residential halls, Olympic-grade sports amenities, and Wi-Fi across every corner.',
      image: '/assets/nirma-university/hero-lush-campus-115acres.svg',
      ctaText: '360° Virtual Campus Tour',
      ctaLink: '#campus-life',
      accentColor: '#10B981',
      stats: [
        { label: 'Library Titles', value: '1,50,000+' },
        { label: 'Hostel Capacity', value: '2,500+ Students' },
        { label: 'Sports Grounds', value: 'Lawn Tennis & Cricket' }
      ]
    },
    {
      id: 'slide-admissions-2026',
      badge: 'APPLICATION DESK OPEN',
      title: 'ADMISSIONS 2026 CALL FOR APPLICANTS',
      headline: 'Begin Your Academic Journey Across 8 Renowned Institutes',
      subtitle: 'Accepting applications for B.Tech (JEE/GUJCET), MBA (CAT), BBA-MBA Integrated (IPMAT), Law (CLAT), B.Arch (NATA), M.Tech (GATE), B.Pharm, and M.Sc programs.',
      image: '/assets/nirma-university/hero-admissions-2026.svg',
      ctaText: 'Apply Online 2026',
      ctaLink: '#admissions',
      accentColor: '#FBBF24',
      stats: [
        { label: 'Scholarships', value: 'Up to 100%' },
        { label: 'Accepting', value: 'JEE / CAT / CLAT' },
        { label: 'Assistance', value: 'Toll-Free 1800' }
      ]
    }
  ],

  rankings: [
    {
      id: 'naac',
      authority: 'National Assessment & Accreditation Council (NAAC)',
      title: 'Grade A+ (CGPA 3.65 / 4.0)',
      rank: 'A+',
      description: 'Re-accredited with supreme Grade A+ placing Nirma University in the top tier of multidisciplinary higher education institutions across India.',
      badge: '/assets/nirma-university/badge-naac-a-plus.svg',
      color: '#F59E0B'
    },
    {
      id: 'coe',
      authority: 'Government of Gujarat',
      title: 'Conferred "Centre of Excellence" (CoE)',
      rank: 'CoE',
      description: 'Recognized by the State Government for unparalleled standard of research, industry linkages, state-of-the-art labs, and holistic education.',
      badge: '/assets/nirma-university/badge-centre-of-excellence.svg',
      color: '#10B981'
    },
    {
      id: 'nirf-arch',
      authority: 'NIRF (Ministry of Education, Govt. of India)',
      title: 'Ranked 29th Nationwide in Architecture',
      rank: '#29',
      description: 'Institute of Architecture & Planning is consistently ranked among the Top 30 best architectural institutions in India.',
      badge: '/assets/nirma-university/badge-nirf.svg',
      color: '#3B82F6'
    },
    {
      id: 'nirf-pharm',
      authority: 'NIRF (Ministry of Education, Govt. of India)',
      title: 'Ranked 32nd Nationwide in Pharmacy',
      rank: '#32',
      description: 'Institute of Pharmacy acknowledged among the top research-intensive pharmaceutical schools with DST-FIST & AICTE backed laboratories.',
      badge: '/assets/nirma-university/badge-nirf.svg',
      color: '#8B5CF6'
    },
    {
      id: 'nirf-law',
      authority: 'NIRF (Ministry of Education, Govt. of India)',
      title: 'Ranked 33rd Nationwide in Law',
      rank: '#33',
      description: 'Institute of Law is ranked amongst the premier national law faculties with supreme judicial internships and international moot court trophies.',
      badge: '/assets/nirma-university/badge-nirf.svg',
      color: '#EC4899'
    },
    {
      id: 'nirf-mgmt',
      authority: 'NIRF (Ministry of Education, Govt. of India)',
      title: 'Ranked 53rd Nationwide in Management',
      rank: '#53',
      description: 'Institute of Management maintains high placement records with average ₹11.26 LPA and top-tier recruiters across financial services and consulting.',
      badge: '/assets/nirma-university/badge-nirf.svg',
      color: '#06B6D4'
    }
  ],

  institutes: [
    {
      id: 'it-nu',
      name: 'Institute of Technology',
      shortName: 'IT-NU',
      established: '1995',
      dean: 'Dr. Rajesh N. Patel',
      description: 'The pioneering engineering institute of Nirma University offering B.Tech, M.Tech, MCA, and PhD programs. Equipped with 40+ hi-tech laboratories, AICTE IDEA Lab, Supercomputing clusters, and strong corporate tie-ups.',
      keyHonors: 'NIRF Band 101-150 Engineering · 100% Placement in Cyber Security · ₹72.04 LPA Highest Package',
      flagshipPrograms: ['B.Tech Computer Science & Engineering', 'B.Tech Artificial Intelligence & ML', 'B.Tech Electronics & Communication', 'M.Tech Cyber Security', 'MCA'],
      icon: 'Cpu',
      color: '#3B82F6'
    },
    {
      id: 'im-nu',
      name: 'Institute of Management',
      shortName: 'IM-NU',
      established: '1996',
      dean: 'Dr. Subir Verma',
      description: 'Ranked among top business schools in India (NIRF #53). Known for academic rigor, case-method pedagogy, strong alumni presence in Fortune 500 leadership, and corporate internships.',
      keyHonors: 'NIRF #53 Management · Highest Domestic Package ₹70 LPA · Average ₹11.26 LPA · AACSB Member',
      flagshipPrograms: ['Master of Business Administration (MBA)', 'Integrated BBA-MBA (5 Years)', 'BBA (Honours)', 'MBA Family Business & Entrepreneurship'],
      icon: 'Briefcase',
      color: '#F59E0B'
    },
    {
      id: 'ip-nu',
      name: 'Institute of Pharmacy',
      shortName: 'IP-NU',
      established: '2003',
      dean: 'Dr. Gopal Jadhav',
      description: 'Ranked 32nd in India by NIRF. Recognized globally for drug discovery research, pharmaceutical analysis, pharmacovigilance, and extensive industry-sponsored clinical trials.',
      keyHonors: 'NIRF #32 Pharmacy · PCI Approved · DST-FIST Supported Research Facilities · Over 15 Patents Filed',
      flagshipPrograms: ['Bachelor of Pharmacy (B.Pharm)', 'Doctor of Pharmacy (Pharm.D)', 'M.Pharm Pharmacology', 'M.Pharm Pharmaceutics'],
      icon: 'ShieldAlert',
      color: '#10B981'
    },
    {
      id: 'il-nu',
      name: 'Institute of Law',
      shortName: 'IL-NU',
      established: '2007',
      dean: 'Prof. (Dr.) Madhuri Parikh',
      description: 'Ranked 33rd in India by NIRF. A premier law school with specialized clinical legal education, international moot court success, legal aid clinic, and Bar Council of India recognition.',
      keyHonors: 'NIRF #33 Law · CLAT Score Admission · Judicial Clerkships · Harvard Model UN delegations',
      flagshipPrograms: ['BA LL.B (Honours) 5-Year Integrated', 'B.Com LL.B (Honours) 5-Year Integrated', 'LL.M Constitutional & Administrative Law', 'PhD in Law'],
      icon: 'Scale',
      color: '#EC4899'
    },
    {
      id: 'iap-nu',
      name: 'Institute of Architecture & Planning',
      shortName: 'IAP-NU',
      established: '2014',
      dean: 'Prof. Utpal Sharma',
      description: 'Ranked 29th across India by NIRF. Dedicated to sustainable architecture, urban design, vernacular traditions, and spatial planning with hands-on drafting ateliers.',
      keyHonors: 'NIRF #29 Architecture · COA Recognized · International Exchange with European Universities',
      flagshipPrograms: ['Bachelor of Architecture (B.Arch - 5 Years)', 'Bachelor of Planning (B.Plan - 4 Years)', 'Master of Planning (M.Plan)'],
      icon: 'Compass',
      color: '#8B5CF6'
    },
    {
      id: 'is-nu',
      name: 'Institute of Science',
      shortName: 'IS-NU',
      established: '2004',
      dean: 'Dr. Sarat Dalai',
      description: 'A research-driven institute focusing on modern biological sciences including molecular genetics, virology, proteomics, microbial biotechnology, and cancer therapeutics.',
      keyHonors: 'DBT & DST Sponsored Grants · High Impact Factor SCI Publications · Specialized Cell Culture Labs',
      flagshipPrograms: ['M.Sc Biotechnology', 'M.Sc Microbiology', 'M.Sc Biochemistry', 'Doctor of Philosophy (PhD)'],
      icon: 'Dna',
      color: '#06B6D4'
    },
    {
      id: 'ic-nu',
      name: 'Institute of Commerce',
      shortName: 'IC-NU',
      established: '2016',
      dean: 'Dr. Udai Paliwal',
      description: 'Providing world-class commerce education with professional accounting, banking, financial services & insurance (BFSI), fintech, and corporate governance focus.',
      keyHonors: 'ICAI & ACCA Aligned Curriculum · Bloomberg Terminal Lab Exposure · High Placement in Big 4 Auditing',
      flagshipPrograms: ['Bachelor of Commerce (B.Com Honours)', 'B.Com (Hons) in Financial Analysis & BFSI', 'PhD in Commerce'],
      icon: 'BarChart3',
      color: '#6366F1'
    },
    {
      id: 'id-nu',
      name: 'Institute of Design',
      shortName: 'ID-NU',
      established: '2017',
      dean: 'Prof. Sangita Shroff',
      description: 'Nurturing innovative designers through creative thinking, human-centered design, UI/UX, product prototyping, and visual brand communication.',
      keyHonors: 'Design Thinking Workshops · Industry Live Studios · 100% Internship Placement with Design Agencies',
      flagshipPrograms: ['Bachelor of Design (B.Des Communication Design)', 'B.Des (Product & Industrial Design)'],
      icon: 'Palette',
      color: '#F43F5E'
    }
  ],

  programs: [
    {
      id: 'btech-cse',
      name: 'B.Tech in Computer Science & Engineering',
      code: 'IT-CSE',
      institute: 'Institute of Technology',
      instituteShort: 'IT-NU',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      intake: 300,
      feesPerYear: '₹2,25,000',
      accreditation: 'NBA Accredited / AICTE Approved',
      entranceExam: 'JEE Main / GUJCET / ACPC Counseling',
      eligibility: '10+2 with Physics, Mathematics and Chemistry/CS with min 50% aggregate marks.',
      highlights: ['Specializations in AI, Data Science, Cloud Computing & Cyber Security', 'Highest package ₹52.25 LPA in CSE', 'Dedicated IDEA Lab & Cloud Compute Cluster'],
      careerRoles: ['Full-Stack Software Engineer', 'AI/ML Specialist', 'Systems Architect', 'Cloud Infrastructure Engineer'],
      category: 'technology',
      featured: true
    },
    {
      id: 'btech-ece',
      name: 'B.Tech in Electronics & Communication Engineering',
      code: 'IT-ECE',
      institute: 'Institute of Technology',
      instituteShort: 'IT-NU',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      intake: 180,
      feesPerYear: '₹2,25,000',
      accreditation: 'NBA Accredited / AICTE Approved',
      entranceExam: 'JEE Main / GUJCET / ACPC',
      eligibility: '10+2 with PCM aggregate min 50%.',
      highlights: ['Record ₹72.04 LPA highest international package', 'Cadence & Synopsys VLSI Design Toolkits', 'Embedded Systems & 5G Communications lab'],
      careerRoles: ['VLSI Chip Design Engineer', 'Embedded Firmware Engineer', '5G Telecom Architect', 'Robotics Systems Developer'],
      category: 'technology',
      featured: true
    },
    {
      id: 'btech-aiml',
      name: 'B.Tech in Artificial Intelligence & Machine Learning',
      code: 'IT-AIML',
      institute: 'Institute of Technology',
      instituteShort: 'IT-NU',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      intake: 120,
      feesPerYear: '₹2,25,000',
      accreditation: 'AICTE Approved',
      entranceExam: 'JEE Main / GUJCET',
      eligibility: '10+2 with PCM aggregate min 50%.',
      highlights: ['NVIDIA GPU cluster for Deep Learning training', 'Curriculum designed with tech industry advisory council', 'Hackathon sponsorships and live research projects'],
      careerRoles: ['Machine Learning Engineer', 'Data Scientist', 'Computer Vision Engineer', 'NLP Researcher'],
      category: 'technology',
      featured: true
    },
    {
      id: 'mba-flagship',
      name: 'Master of Business Administration (MBA)',
      code: 'IM-MBA',
      institute: 'Institute of Management',
      instituteShort: 'IM-NU',
      level: 'Postgraduate',
      duration: '2 Years (6 Trimesters)',
      intake: 300,
      feesPerYear: '₹5,50,000',
      accreditation: 'NIRF #53 / AICTE / AACSB Member',
      entranceExam: 'CAT (Common Admission Test) + Personal Interview & Theme Presentation',
      eligibility: 'Bachelor degree in any discipline with min 50% marks + valid CAT score.',
      highlights: ['Average Package ₹11.26 LPA; Top 50 Avg ₹15.93 LPA', 'Highest domestic offer ₹70 LPA', 'Specializations in Marketing, Finance, HR, Operations, Business Analytics'],
      careerRoles: ['Management Consultant', 'Investment Banker', 'Product Manager', 'Brand Strategist'],
      category: 'management',
      featured: true
    },
    {
      id: 'integrated-bba-mba',
      name: 'Integrated BBA-MBA (Five-Year)',
      code: 'IM-INT',
      institute: 'Institute of Management',
      instituteShort: 'IM-NU',
      level: 'Integrated',
      duration: '5 Years (Full-Time)',
      intake: 240,
      feesPerYear: '₹3,75,000',
      accreditation: 'AICTE Approved',
      entranceExam: 'IPMAT (IIM Indore/Nirma Entrance) + PI',
      eligibility: '10+2 in any stream with minimum 60% aggregate marks.',
      highlights: ['Direct pathway to MBA without separate CAT exam', 'Corporate internships at the end of 3rd and 4th years', 'Global academic immersion option'],
      careerRoles: ['Corporate Strategist', 'Financial Analyst', 'Entrepreneur', 'Supply Chain Consultant'],
      category: 'management',
      featured: true
    },
    {
      id: 'ba-llb-hons',
      name: 'BA LL.B (Honours) Integrated',
      code: 'IL-BALLB',
      institute: 'Institute of Law',
      instituteShort: 'IL-NU',
      level: 'Undergraduate',
      duration: '5 Years (10 Semesters)',
      intake: 180,
      feesPerYear: '₹2,95,000',
      accreditation: 'NIRF #33 / Bar Council of India (BCI)',
      entranceExam: 'CLAT (Common Law Admission Test)',
      eligibility: '10+2 with min 45% aggregate (40% for SC/ST) + valid CLAT score.',
      highlights: ['State-of-the-Art Moot Courtrooms and Legal Aid Clinic', 'Placements with Trilegal, Cyril Amarchand Mangaldas, Khaitan & Co', 'Judicial clerkships with Supreme Court & High Courts'],
      careerRoles: ['Corporate Counsel', 'Litigation Advocate', 'Judicial Officer', 'Legal Policy Advisor'],
      category: 'law',
      featured: true
    },
    {
      id: 'b-arch',
      name: 'Bachelor of Architecture (B.Arch)',
      code: 'IAP-BARCH',
      institute: 'Institute of Architecture & Planning',
      instituteShort: 'IAP-NU',
      level: 'Undergraduate',
      duration: '5 Years (10 Semesters)',
      intake: 120,
      feesPerYear: '₹2,60,000',
      accreditation: 'NIRF #29 / Council of Architecture (COA)',
      entranceExam: 'NATA (National Aptitude Test in Architecture)',
      eligibility: '10+2 with Physics, Chemistry and Mathematics min 50% + qualified in NATA.',
      highlights: ['Ranked 29th in India for Architecture', 'Extensive design drafting studios and materials testing labs', 'Annual European and heritage site architectural documentation tours'],
      careerRoles: ['Architectural Designer', 'Urban Planner', 'Conservation Architect', 'Sustainable Building Consultant'],
      category: 'architecture',
      featured: true
    },
    {
      id: 'b-pharm',
      name: 'Bachelor of Pharmacy (B.Pharm)',
      code: 'IP-BPHARM',
      institute: 'Institute of Pharmacy',
      instituteShort: 'IP-NU',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      intake: 100,
      feesPerYear: '₹2,10,000',
      accreditation: 'NIRF #32 / Pharmacy Council of India (PCI)',
      entranceExam: 'GUJCET / ACPC / JEE Main / NEET',
      eligibility: '10+2 with Physics, Chemistry and Biology/Maths min 50%.',
      highlights: ['Ranked 32nd in India across all Pharmacy institutions', 'DSIR recognized in-house analytical & pharmacology labs', 'Placements with Sun Pharma, Zydus, Torrent, Cadila, Novartis'],
      careerRoles: ['Formulation Scientist', 'Regulatory Affairs Manager', 'Clinical Research Associate', 'Quality Assurance Officer'],
      category: 'pharmacy',
      featured: true
    },
    {
      id: 'msc-biotech',
      name: 'M.Sc in Biotechnology',
      code: 'IS-BIOTECH',
      institute: 'Institute of Science',
      instituteShort: 'IS-NU',
      level: 'Postgraduate',
      duration: '2 Years (4 Semesters)',
      intake: 45,
      feesPerYear: '₹1,90,000',
      accreditation: 'UGC Recognized',
      entranceExam: 'All India Merit & Written Entrance Test / Interview',
      eligibility: "Bachelor's degree in Biological Sciences/Biotechnology/Microbiology min 50%.",
      highlights: ['Sponsored projects from DBT, DST, ICMR, and GUJCOST', 'Hands-on training in mammalian cell culture, genomics, and HPLC', '100% research thesis requirement'],
      careerRoles: ['Research Scientist', 'Bioinformatics Specialist', 'Quality Control Analyst', 'Biopharma Project Lead'],
      category: 'science',
      featured: false
    },
    {
      id: 'bcom-hons',
      name: 'B.Com (Honours) Professional Accounting & BFSI',
      code: 'IC-BCOM',
      institute: 'Institute of Commerce',
      instituteShort: 'IC-NU',
      level: 'Undergraduate',
      duration: '3 Years / 4 Years (Honours)',
      intake: 120,
      feesPerYear: '₹1,60,000',
      accreditation: 'UGC Recognized',
      entranceExam: 'Merit in 10+2 (Commerce/Science)',
      eligibility: '10+2 with English and Accountancy/Maths min 60%.',
      highlights: ['Integrated preparation for CA, CS, CMA, and ACCA exams', 'Live trading simulations and financial modeling workshops', 'Campus recruitment by Deloitte, EY, KPMG, PwC, and HDFC Bank'],
      careerRoles: ['Chartered Accountant / Auditor', 'Financial Analyst', 'Tax Consultant', 'Investment Advisor'],
      category: 'commerce',
      featured: false
    },
    {
      id: 'bdes-comm',
      name: 'Bachelor of Design (B.Des)',
      code: 'ID-BDES',
      institute: 'Institute of Design',
      instituteShort: 'ID-NU',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      intake: 80,
      feesPerYear: '₹3,20,000',
      accreditation: 'UGC Recognized',
      entranceExam: 'UCEED / Nirma Design Aptitude Test (DAT) & Portfolio Interview',
      eligibility: '10+2 in any stream with min 50% aggregate marks.',
      highlights: ['Tracks in Communication Design and Product & Industrial Design', 'Makerspace equipped with 3D printers, laser cutters, and clay modeling', 'Creative agency showcases and graduation design exhibitions'],
      careerRoles: ['UI/UX Product Designer', 'Brand Identity Specialist', 'Industrial Designer', 'Creative Director'],
      category: 'design',
      featured: false
    }
  ] as NUProgram[],

  recruiters: [
    { name: 'Morgan Stanley', packageOffered: '₹28.5 LPA', sector: 'Banking & BFSI', role: 'Technology Analyst', logoText: 'MS' },
    { name: 'Microsoft', packageOffered: '₹42.0 LPA', sector: 'Technology & AI', role: 'Software Engineer', logoText: 'MSFT' },
    { name: 'Amazon', packageOffered: '₹44.14 LPA', sector: 'Technology & AI', role: 'SDE-1', logoText: 'AMZN' },
    { name: 'Blinkit', packageOffered: '₹30.0 LPA', sector: 'Technology & AI', role: 'Backend Engineer', logoText: 'BLINK' },
    { name: 'Samsung R&D', packageOffered: '₹22.0 LPA', sector: 'Technology & AI', role: 'Research Engineer', logoText: 'SMSG' },
    { name: 'Barclays', packageOffered: '₹18.5 LPA', sector: 'Banking & BFSI', role: 'Global Markets Analyst', logoText: 'BARC' },
    { name: 'Adani Wilmar', packageOffered: '₹14.0 LPA', sector: 'Core Engineering & FMCG', role: 'Management Trainee', logoText: 'ADANI' },
    { name: 'Amul (GCMMF)', packageOffered: '₹12.5 LPA', sector: 'Core Engineering & FMCG', role: 'Brand Operations Manager', logoText: 'AMUL' },
    { name: 'Deloitte', packageOffered: '₹13.2 LPA', sector: 'Consulting & Analytics', role: 'Advisory Consultant', logoText: 'DEL' },
    { name: 'ICICI Bank', packageOffered: '₹12.0 LPA', sector: 'Banking & BFSI', role: 'Wealth Management Lead', logoText: 'ICICI' },
    { name: 'Zydus Lifesciences', packageOffered: '₹9.5 LPA', sector: 'Core Engineering & FMCG', role: 'R&D Formulation Officer', logoText: 'ZYDUS' },
    { name: 'Trilegal', packageOffered: '₹16.0 LPA', sector: 'Law & Advisory', role: 'Associate Attorney', logoText: 'TRI' }
  ],

  campusFacilities: [
    {
      id: 'fac-central-library',
      title: 'Central Digital Library',
      category: 'Academic Core',
      description: 'A 4-storey air-conditioned knowledge hub housing 1,50,000+ volumes, 50,000+ online journals, IEEE/ACM digital libraries, Bloomberg terminals, private cubicles, and 24x7 reading halls.',
      metrics: '1,50,000+ Books & Volumes · 50,000+ E-Journals',
      image: '/assets/nirma-university/campus-library.jpg',
      points: ['Online Public Access Catalogue (OPAC)', 'Turnitin Plagiarism check suites', 'Dedicated doctoral dissertation wing', 'Discussion and audio-visual seminar rooms']
    },
    {
      id: 'fac-amphi-theatres',
      title: 'Smart Amphi-Theatre Classrooms',
      category: 'Pedagogy',
      description: 'Acoustically treated stepped tier amphi-theatres with multimedia projection systems, lecture capture facilities, high-speed Wi-Fi, and climate control.',
      metrics: '80+ Smart Lecture Halls · 4 Large Auditoriums',
      image: '/assets/nirma-university/campus-auditorium.jpg',
      points: ['Full hybrid lecture capture technology', 'Ergonomic seating for participatory case discussions', 'Dual projection screens and laser pointers', 'Centralised AV master console']
    },
    {
      id: 'fac-idea-lab',
      title: 'AICTE IDEA Lab & Research Hub',
      category: 'Innovation',
      description: 'Funded by AICTE and Nirma Education & Research Foundation, this facility empowers students to transform ideations into prototypes with laser cutters, 3D printers, and IoT stations.',
      metrics: '₹2.5 Crore Innovation Lab · 40+ Labs',
      image: '/assets/nirma-university/campus-labs.jpg',
      points: ['Rapid prototyping 3D printing farm', 'High Precision CNC Milling machines', 'IoT & Embedded sensor test benches', 'Open to all multidisciplinary student projects']
    },
    {
      id: 'fac-hostels',
      title: 'Residential Halls & Dining Courts',
      category: 'Student Accommodation',
      description: 'Secure, modern residential halls for boys and girls with furnished rooms, uninterrupted power backup, hygienic dining mess serving nutritious vegetarian food, and recreation lounges.',
      metrics: '2,500+ Residential Capacity · 24x7 Security',
      image: '/assets/nirma-university/campus-hostel.jpg',
      points: ['Biometric entry and 24-hour security guards', 'Nutritious multicuisine vegetarian dining', 'High-speed Wi-Fi across every hostel block', 'Dedicated indoor gym and table tennis facilities']
    },
    {
      id: 'fac-sports',
      title: 'Olympic-Standard Sports Complex',
      category: 'Recreation & Fitness',
      description: 'Dedicated floodlit cricket ground with turf wickets, lawn tennis courts, standard basketball courts, volleyball courts, 400m running track, and indoor badminton arenas.',
      metrics: '15+ Sports Disciplines · Professional Coaches',
      image: '/assets/nirma-university/campus-sports.jpg',
      points: ['Regular inter-university national tournaments', 'Fully equipped gymnasium with certified trainers', 'Dedicated indoor chess, carrom, and table tennis', 'Yoga and wellness sessions conducted daily']
    }
  ],

  testimonials: [
    {
      id: 'test-1',
      name: 'Rohan Shah',
      institute: 'Institute of Technology',
      batch: 'Class of 2024',
      company: 'Microsoft',
      packageOffered: '₹42.0 LPA',
      role: 'Software Development Engineer',
      quote: 'The rigorous curriculum at IT-NU combined with competitive coding environments and mentorship from our professors prepared me to clear complex technical rounds at Microsoft. Nirma transforms your perspective!',
      image: '/assets/nirma-university/testimonial-1.jpg'
    },
    {
      id: 'test-2',
      name: 'Pooja Trivedi',
      institute: 'Institute of Management',
      batch: 'Class of 2024',
      company: 'Morgan Stanley',
      packageOffered: '₹28.5 LPA',
      role: 'Investment Banking Analyst',
      quote: 'IM-NU provides unmatched corporate exposure. The live case studies, Bloomberg financial terminal simulations, and mock interviews gave me the exact edge needed to secure my dream role at Morgan Stanley.',
      image: '/assets/nirma-university/testimonial-2.jpg'
    },
    {
      id: 'test-3',
      name: 'Aditya Mehta',
      institute: 'Institute of Law',
      batch: 'Class of 2023',
      company: 'Trilegal',
      packageOffered: '₹16.0 LPA',
      role: 'Corporate Associate',
      quote: 'Representing Nirma University at national and international moot court competitions sharpened my litigation instincts. The faculty members are luminaries in constitutional and corporate law.',
      image: '/assets/nirma-university/testimonial-3.jpg'
    },
    {
      id: 'test-4',
      name: 'Ananya Dave',
      institute: 'Institute of Pharmacy',
      batch: 'Class of 2024',
      company: 'Zydus Lifesciences',
      packageOffered: '₹9.5 LPA',
      role: 'Formulation Research Scientist',
      quote: 'The research facilities at the Institute of Pharmacy are on par with international laboratories. Getting to work on active pharmaceutical formulation projects during my B.Pharm was unforgettable.',
      image: '/assets/nirma-university/testimonial-4.jpg'
    }
  ],

  faqs: [
    {
      question: 'What is the accreditation and official recognition status of Nirma University?',
      answer: 'Nirma University is recognized by the University Grants Commission (UGC) under Section 2(f) of the UGC Act and is accredited with Grade "A+" by the National Assessment and Accreditation Council (NAAC) with an exceptional CGPA of 3.65 on a 4-point scale. Additionally, the Government of Gujarat has conferred the prestigious "Centre of Excellence" status upon Nirma University. Individual programs are also approved by statutory councils including AICTE, Bar Council of India (BCI), Pharmacy Council of India (PCI), and Council of Architecture (COA).',
      category: 'Admissions 2026'
    },
    {
      question: 'How do I apply for B.Tech programs at the Institute of Technology?',
      answer: 'Admission to B.Tech programs is conducted through two primary routes: 50% seats are allocated through the Admission Committee for Professional Courses (ACPC) Government of Gujarat based on GUJCET/Board merit, and 50% seats are allocated through All-India Category based on JEE (Main) ranks. Candidates can apply online through the official Nirma University admissions portal.',
      category: 'Engineering & Technology'
    },
    {
      question: 'What entrance exams are accepted for MBA and Integrated BBA-MBA programs?',
      answer: 'For the 2-year MBA program at the Institute of Management, applicants must appear for the Common Admission Test (CAT) conducted by IIMs, followed by Theme Development & Presentation and Personal Interview conducted by Nirma University. For the 5-Year Integrated BBA-MBA program, admissions are conducted based on the IPMAT entrance test followed by personal interviews.',
      category: 'Management (MBA & BBA)'
    },
    {
      question: 'What are the placement statistics and highest salary packages offered at Nirma?',
      answer: 'Nirma University maintains an exceptional placement track record across all institutes. For B.Tech ECE, the highest international package reached ₹72.04 LPA, and ₹52.25 LPA for Computer Science. The highest package in MBA reached ₹70 LPA, with an overall average MBA package of ₹11.26 LPA (and Top 50 students averaging ₹15.93 LPA). Over 300 marquee corporate recruiters, including Fortune 500 tech firms and Big 4 consultancies, conduct on-campus drives annually.',
      category: 'Placements & Internships'
    },
    {
      question: 'Are on-campus hostel facilities available for outstation students?',
      answer: 'Yes, Nirma University provides dedicated, secure, and modern residential hostels for both boys and girls within the 115-acre campus. Hostels are equipped with Wi-Fi connectivity, air-conditioned and non-AC room options, 24x7 security surveillance, biometric attendance, medical first-aid centers, and hygienic dining mess serving healthy vegetarian cuisine.',
      category: 'Hostels & Campus Life'
    },
    {
      question: 'Does Nirma University offer scholarships and tuition fee waivers?',
      answer: 'Yes! Nirma University offers generous Merit Scholarships and Merit-cum-Means Scholarships: Top rankers in JEE Main/GUJCET/CAT/CLAT can receive up to 100% tuition fee waivers. Additionally, various government scholarship schemes (such as MYSY in Gujarat) and endowment awards are facilitated for deserving students.',
      category: 'Admissions 2026'
    }
  ]
};
