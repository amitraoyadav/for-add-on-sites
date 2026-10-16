/**
 * CR Ramans University — Configuration & Authoritative Structured Data
 * Faithful reproduction of the uploaded Chandigarh University (www.cuchd.in) website architecture,
 * rebranding the institutional identity to CR RAMANS UNIVERSITY while preserving
 * all original academic faculties, accreditations, rankings, placement records, and layouts.
 */

export interface CRUProgram {
  id: string;
  name: string;
  code: string;
  faculty: string;
  level: 'Undergraduate' | 'Postgraduate' | 'Doctoral';
  duration: string;
  intake: number;
  feesPerSemester: string;
  accreditation: string;
  eligibility: string;
  highlights: string[];
  careerRoles: string[];
  category: 'engineering' | 'management' | 'computing' | 'biotech' | 'law' | 'pharmacy' | 'media-design';
  featured?: boolean;
}

export interface CRURanking {
  id: string;
  authority: string;
  title: string;
  rank: string;
  year: string;
  description: string;
  badge: string;
  color: string;
}

export interface CRUHeroSlide {
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

export interface CRURecruiter {
  name: string;
  packageOffered: string;
  sector: 'Tech Giants' | 'Consulting & BFSI' | 'Core Engineering' | 'Product & Media';
  role: string;
  logoText: string;
}

export interface CRUCoE {
  id: string;
  title: string;
  partner: string;
  domain: string;
  description: string;
  equipment: string;
  outcomes: string;
}

export interface CRUFacility {
  id: string;
  title: string;
  category: string;
  description: string;
  metrics: string;
  image: string;
  points: string[];
}

export interface CRUTestimonial {
  id: string;
  name: string;
  program: string;
  batch: string;
  company: string;
  packageOffered: string;
  role: string;
  quote: string;
  image: string;
}

export interface CRUFaq {
  question: string;
  answer: string;
  category: 'Admissions' | 'Scholarships & CRUCET' | 'Placements' | 'Campus & Hostels' | 'Accreditation';
}

export const CR_RAMANS_UNIVERSITY_CONFIG = {
  brand: {
    name: 'CR RAMANS UNIVERSITY',
    shortName: 'CR Ramans Univ',
    legalName: 'CR Ramans University, Mohali (Punjab)',
    tagline: 'Discover. Learn. Empower. — NAAC A+ Accredited · Ranked Among Top Universities by QS World & NIRF',
    motto: 'Knowledge · Innovation · Global Leadership',
    established: '2012',
    campusSize: '200+ Acres Smart Eco-Campus',
    location: 'NH-05, Chandigarh-Ludhiana Highway, Mohali, Punjab 140413, India',
    admissionsHelpline: '1800 1212 88800',
    directPhone: '+91 160 3051000',
    email: 'admissions@crramans.edu.in',
    studentPopulation: '32,000+ Students',
    internationalStudents: '1,500+ from 50+ Countries',
    patentsFiled: '12,000+ Patents',
    highestInternationalPackage: '₹1.7 Crore P.A.',
    highestDomesticPackage: '₹54.75 LPA',
    placementOffers: '9,124+ Offers',
    recruiterCount: '904+ Companies',
    scholarshipPool: '₹170 Crore'
  },

  accreditations: [
    {
      code: 'NAAC A+',
      title: 'NAAC Grade A+ Accredited',
      authority: 'National Assessment and Accreditation Council, UGC',
      badge: '/assets/cr-ramans-university/badge-naac-a-plus.svg',
      detail: 'Accredited with prestigious Grade A+ in the very first cycle, placing CR Ramans University in the top tier of Indian higher education institutions.'
    },
    {
      code: 'QS WORLD',
      title: 'QS World University Rankings',
      authority: 'Quacquarelli Symonds (QS)',
      badge: '/assets/cr-ramans-university/badge-qs-world.svg',
      detail: 'Ranked as the #1 Private University in India and among the top global tier in QS World University Rankings & QS Asia Rankings.'
    },
    {
      code: 'NIRF',
      title: 'NIRF Ranked University',
      authority: 'Ministry of Education, Govt. of India',
      badge: '/assets/cr-ramans-university/badge-nirf.svg',
      detail: 'Consistently recognized among the top universities in India across Engineering, Management, Pharmacy, and Overall categories in NIRF rankings.'
    },
    {
      code: 'ABET USA',
      title: 'ABET Accredited Engineering',
      authority: 'Accreditation Board for Engineering and Technology (USA)',
      badge: '/assets/cr-ramans-university/badge-abet.svg',
      detail: 'Key engineering programs accredited by the Engineering Accreditation Commission of ABET, ensuring global equivalence of degrees.'
    },
    {
      code: 'RECORD PLACEMENTS',
      title: '₹1.7 Crore Highest Package',
      authority: 'Corporate Resource Centre (CRC)',
      badge: '/assets/cr-ramans-university/badge-placement-17cr.svg',
      detail: 'Record-shattering 9,124+ placement offers with ₹1.7 Crore highest international offer and ₹54.75 LPA highest domestic package from 904+ MNCs.'
    }
  ],

  heroSlides: [
    {
      id: 'slide-placements',
      badge: 'PLACEMENT POWERHOUSE 2026',
      title: 'Highest International Package: ₹1.7 Crore · Domestic: ₹54.75 LPA',
      headline: 'Where Global Ambitions Meet Fortune 500 Careers',
      subtitle: '9,124+ placement offers generated by 904+ leading multinational recruiters including Google, Microsoft, Amazon, IBM, Deloitte, and Cisco.',
      image: '/assets/cr-ramans-university/hero-placement-17cr.svg',
      ctaText: 'Explore Placement Records',
      ctaLink: '#placements',
      accentColor: '#F59E0B',
      stats: [
        { label: 'Highest Package', value: '₹1.7 Crore' },
        { label: 'Placement Offers', value: '9,124+' },
        { label: 'Visiting Recruiters', value: '904+ MNCs' }
      ]
    },
    {
      id: 'slide-accreditations',
      badge: 'NAAC GRADE A+ & QS RANKINGS',
      title: 'Recognized Worldwide for Academic Excellence & Research',
      headline: 'Ranked Among Top 1% Universities Globally',
      subtitle: 'Accredited with NAAC Grade A+ and ranked as the #1 Private University in India by QS World University Rankings. ABET USA accredited engineering degrees.',
      image: '/assets/cr-ramans-university/hero-naac-qs.svg',
      ctaText: 'View Accreditations',
      ctaLink: '#rankings',
      accentColor: '#3B82F6',
      stats: [
        { label: 'NAAC Grade', value: 'A+ (Highest)' },
        { label: 'QS World Rank', value: '#1 Private in India' },
        { label: 'Engineering Status', value: 'ABET USA' }
      ]
    },
    {
      id: 'slide-crucet',
      badge: 'CRUCET 2026 ADMISSIONS OPEN',
      title: 'National Entrance Test & ₹170 Crore Merit Scholarships',
      headline: 'Empowering Talent with Up to 100% Tuition Fee Waiver',
      subtitle: 'Take the CRUCET 2026 online national entrance test to unlock merit scholarships across 150+ undergraduate and postgraduate programs.',
      image: '/assets/cr-ramans-university/hero-crucet-170cr.svg',
      ctaText: 'Apply for CRUCET 2026',
      ctaLink: '#scholarships',
      accentColor: '#EC4899',
      stats: [
        { label: 'Scholarship Fund', value: '₹170 Crore' },
        { label: 'Merit Waiver', value: 'Up to 100%' },
        { label: 'Eligible Streams', value: '150+ Degrees' }
      ]
    },
    {
      id: 'slide-innovation',
      badge: 'PATENTS & RESEARCH HUB',
      title: '12,000+ Patents Filed · 30+ Industry Centers of Excellence',
      headline: 'Pioneering Research That Solves Real-World Challenges',
      subtitle: 'Hands-on training in state-of-the-art sponsored labs by IBM, Microsoft, Hyundai, Intel, and Cisco with dedicated student startup incubation.',
      image: '/assets/cr-ramans-university/hero-patents-innovation.svg',
      ctaText: 'Explore Research Labs',
      ctaLink: '#innovation',
      accentColor: '#10B981',
      stats: [
        { label: 'Patents Filed', value: '12,000+' },
        { label: 'Industry CoE Labs', value: '30+ Active' },
        { label: 'Incubated Startups', value: '180+' }
      ]
    },
    {
      id: 'slide-campus',
      badge: 'SMART 200+ ACRE CAMPUS',
      title: 'World-Class Infrastructure & Vibrant Campus Experience',
      headline: 'A Thriving Academic Sanctuary for 32,000+ Scholars',
      subtitle: '2,000+ seater AC auditorium, Olympic-standard sports arenas, high-tech digital libraries, multi-cuisine food courts, and modern residential hostels.',
      image: '/assets/cr-ramans-university/hero-campus-infra.svg',
      ctaText: 'Launch 360° Tour',
      ctaLink: '#campus-life',
      accentColor: '#8B5CF6',
      stats: [
        { label: 'Campus Area', value: '200+ Acres' },
        { label: 'Library Titles', value: '150,000+' },
        { label: 'Hostel Capacity', value: '12,000+ Beds' }
      ]
    }
  ],

  programs: ([
    {
      id: 'prog-btech-cse',
      name: 'B.E. Computer Science & Engineering (CSE)',
      code: 'UIE-CSE-01',
      faculty: 'University Institute of Engineering (UIE)',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      intake: 1200,
      feesPerSemester: '₹1,15,000',
      accreditation: 'ABET USA & NAAC Grade A+',
      eligibility: '10+2 with Physics and Mathematics along with one of Chemistry/Biotechnology/Computer Science with minimum 60% marks + CRUCET score.',
      highlights: [
        'Specializations in AI & Machine Learning, Data Science, Cloud Computing, Cyber Security, and Full-Stack Web Development',
        'IBM Big Data & Cloud Computing integrated curriculum with industry certification',
        'Guaranteed placement training module starting from 5th semester with coding bootcamps',
        'Access to Microsoft Innovation Center, Red Hat Academy, and AWS Cloud Computing labs'
      ],
      careerRoles: ['Software Development Engineer', 'AI/ML Engineer', 'Cloud Architect', 'Cybersecurity Specialist', 'Full-Stack Developer'],
      category: 'engineering',
      featured: true
    },
    {
      id: 'prog-btech-ai-ml',
      name: 'B.E. CSE (Artificial Intelligence & Machine Learning)',
      code: 'UIE-AIML-02',
      faculty: 'University Institute of Engineering (UIE)',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      intake: 360,
      feesPerSemester: '₹1,25,000',
      accreditation: 'ABET USA & NAAC Grade A+',
      eligibility: '10+2 with Physics and Mathematics with minimum 60% aggregate marks + qualifying rank in CRUCET.',
      highlights: [
        'Curriculum co-designed with leading AI research organizations and NVIDIA Deep Learning Institute',
        'Deep learning neural networks, computer vision, natural language processing, and generative AI atelier',
        'High-performance GPU computing clusters with NVIDIA A100 systems for real-time model training',
        'Hands-on capstone industry internships with multinational tech corporate partners'
      ],
      careerRoles: ['Machine Learning Engineer', 'Data Scientist', 'AI Research Associate', 'NLP Engineer', 'Computer Vision Developer'],
      category: 'engineering',
      featured: true
    },
    {
      id: 'prog-btech-ece',
      name: 'B.E. Electronics & Communication Engineering (ECE)',
      code: 'UIE-ECE-03',
      faculty: 'University Institute of Engineering (UIE)',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      intake: 240,
      feesPerSemester: '₹95,000',
      accreditation: 'ABET USA & NAAC Grade A+',
      eligibility: '10+2 with Physics and Mathematics with 55% aggregate marks.',
      highlights: [
        'Focus on 5G/6G Wireless Telecommunications, Embedded Systems, VLSI Design, and IoT Automation',
        'Intel IoT Innovation Lab and Texas Instruments Embedded System Design Facility on campus',
        'Semiconductor microchip layout simulation and PCB fabrication suites'
      ],
      careerRoles: ['Embedded Systems Engineer', 'VLSI Design Engineer', 'Telecom Network Architect', 'IoT Hardware Specialist'],
      category: 'engineering'
    },
    {
      id: 'prog-btech-me',
      name: 'B.E. Mechanical Engineering (Automobile & Robotics)',
      code: 'UIE-ME-04',
      faculty: 'University Institute of Engineering (UIE)',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      intake: 180,
      feesPerSemester: '₹90,000',
      accreditation: 'ABET USA & NAAC Grade A+',
      eligibility: '10+2 with Physics and Mathematics with 55% aggregate marks.',
      highlights: [
        'Hyundai Motor India Sponsored Automobile Powertrain Lab and Electric Vehicle (EV) Testing Bay',
        'Dassault Systèmes 3DEXPERIENCE platform for automotive CAD/CAM modeling and crash test simulations',
        'Industrial robotics, Mechatronics, and CNC precision manufacturing shop floors'
      ],
      careerRoles: ['Automotive Design Engineer', 'EV Powertrain Specialist', 'Robotics Automation Engineer', 'Manufacturing Operations Manager'],
      category: 'engineering'
    },
    {
      id: 'prog-mba-core',
      name: 'Master of Business Administration (MBA)',
      code: 'USB-MBA-01',
      faculty: 'University School of Business (USB)',
      level: 'Postgraduate',
      duration: '2 Years (4 Semesters)',
      intake: 600,
      feesPerSemester: '₹1,30,000',
      accreditation: 'AICTE Approved & NAAC Grade A+',
      eligibility: 'Graduation in any discipline with minimum 50% marks from a recognized university + CRUCET / CAT / MAT / CMAT score.',
      highlights: [
        'Dual Specializations: Marketing, Finance, Human Resource, International Business, FinTech, and Business Analytics',
        'Harvard Business Publishing case studies and live simulations integrated into class pedagogy',
        'Recruitment by Big 4 auditing firms (Deloitte, EY, PwC, KPMG) and leading investment banks (Morgan Stanley, BoA)',
        '100% compulsory paid corporate summer internship program in Fortune 500 corporate offices'
      ],
      careerRoles: ['Management Consultant', 'Investment Banker', 'Brand Manager', 'Financial Analyst', 'HR Business Partner'],
      category: 'management',
      featured: true
    },
    {
      id: 'prog-bba-fintech',
      name: 'Bachelor of Business Administration (BBA - FinTech & Analytics)',
      code: 'USB-BBA-02',
      faculty: 'University School of Business (USB)',
      level: 'Undergraduate',
      duration: '3 Years (6 Semesters)',
      intake: 300,
      feesPerSemester: '₹75,000',
      accreditation: 'UGC Recognized & NAAC Grade A+',
      eligibility: '10+2 in any stream with minimum 50% aggregate marks.',
      highlights: [
        'Comprehensive training in Blockchain, Algorithmic Trading, Digital Banking, and Data Visualization with PowerBI/Tableau',
        'Virtual Bloomberg trading lab simulation replicating Dalal Street and Wall Street trading floors',
        'Industry mentorship from senior executives of top FinTech startups and private equity firms'
      ],
      careerRoles: ['FinTech Associate', 'Business Analyst', 'Digital Banking Officer', 'Equity Research Assistant'],
      category: 'management'
    },
    {
      id: 'prog-bca',
      name: 'Bachelor of Computer Applications (BCA)',
      code: 'UIC-BCA-01',
      faculty: 'University Institute of Computing (UIC)',
      level: 'Undergraduate',
      duration: '3 Years (6 Semesters)',
      intake: 480,
      feesPerSemester: '₹65,000',
      accreditation: 'UGC Recognized & NAAC Grade A+',
      eligibility: '10+2 with minimum 50% marks in any stream with Mathematics or Computer Science as a subject.',
      highlights: [
        'Intensive coursework in Java, Python, C++, React, Node.js, and Cloud Infrastructure Services',
        'Full-stack live software product development in student incubation hackathons',
        'Industry certifications in Google Cloud and Microsoft Azure fundamentals'
      ],
      careerRoles: ['Software Developer', 'Web Application Engineer', 'System Administrator', 'Database Executive'],
      category: 'computing'
    },
    {
      id: 'prog-mca',
      name: 'Master of Computer Applications (MCA)',
      code: 'UIC-MCA-02',
      faculty: 'University Institute of Computing (UIC)',
      level: 'Postgraduate',
      duration: '2 Years (4 Semesters)',
      intake: 240,
      feesPerSemester: '₹85,000',
      accreditation: 'AICTE Approved & NAAC Grade A+',
      eligibility: 'BCA / B.Sc. (Computer Science/IT) / B.E. with minimum 50% aggregate marks.',
      highlights: [
        'Advanced software architecture, Microservices, DevOps pipelines, Enterprise Cloud Deployments, and Data Engineering',
        'Direct placement pipeline into tier-1 product companies offering ₹12 LPA to ₹30 LPA compensation packages',
        '6-month industry live project internship semester embedded into the second year'
      ],
      careerRoles: ['Principal Software Engineer', 'DevOps Specialist', 'Data Engineer', 'Cloud Solutions Architect'],
      category: 'computing'
    },
    {
      id: 'prog-ba-llb',
      name: 'B.A. LL.B. (Hons.) 5-Year Integrated',
      code: 'UILS-BALLB-01',
      faculty: 'University Institute of Legal Studies (UILS)',
      level: 'Undergraduate',
      duration: '5 Years (10 Semesters)',
      intake: 180,
      feesPerSemester: '₹95,000',
      accreditation: 'Bar Council of India (BCI) Approved',
      eligibility: '10+2 in any stream with minimum 50% aggregate marks (45% for SC/ST) + CRUCET / CLAT score.',
      highlights: [
        'Fully air-conditioned judicial courtroom simulation and moot court training center on campus',
        'Annual National Moot Court Competition with sitting High Court and Supreme Court judges presiding',
        'Mandatory internships with Senior Supreme Court Advocates, corporate legal firms (Shardul Amarchand Mangaldas, Trilegal), and Human Rights Commissions'
      ],
      careerRoles: ['Corporate Legal Counsel', 'Litigation Advocate', 'Judicial Services Magistrate', 'Legal Analyst'],
      category: 'law',
      featured: true
    },
    {
      id: 'prog-bpharm',
      name: 'Bachelor of Pharmacy (B.Pharm)',
      code: 'UIPS-BPHARM-01',
      faculty: 'University Institute of Pharma Sciences (UIPS)',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      intake: 100,
      feesPerSemester: '₹1,05,000',
      accreditation: 'Pharmacy Council of India (PCI) Approved',
      eligibility: '10+2 with Physics, Chemistry along with Biology or Mathematics with 55% marks.',
      highlights: [
        'State-of-the-art cGMP pharmaceutical testing and formulation laboratories',
        'Drug discovery research projects funded by Department of Science & Technology (DST) and ICMR',
        'Campus recruitment by Pfizer, Sun Pharma, Dr. Reddy’s Laboratories, Cipla, and Abbott Healthcare'
      ],
      careerRoles: ['Clinical Pharmacist', 'Drug Formulation Scientist', 'Quality Assurance Officer', 'Regulatory Affairs Executive'],
      category: 'pharmacy'
    },
    {
      id: 'prog-bsc-biotech',
      name: 'B.Sc. (Hons.) Biotechnology & Genetics',
      code: 'UIB-BIOTECH-01',
      faculty: 'University Institute of Biotechnology (UIB)',
      level: 'Undergraduate',
      duration: '3 Years (6 Semesters)',
      intake: 120,
      feesPerSemester: '₹60,000',
      accreditation: 'UGC Recognized & NAAC Grade A+',
      eligibility: '10+2 with Physics, Chemistry, Biology/Biotechnology with minimum 50% marks.',
      highlights: [
        'Next-generation genomic sequencing, recombinant DNA technology, and mammalian cell culture facilities',
        'Research publications in Scopus and Web of Science indexed international scientific journals',
        'Collaborative research opportunities with national institutes like IISER, IMTECH, and CSIR labs'
      ],
      careerRoles: ['Biotech Research Assistant', 'Clinical Trial Associate', 'Genetic Testing Specialist', 'Quality Control Analyst'],
      category: 'biotech'
    },
    {
      id: 'prog-bdes-anim',
      name: 'B.Des (Animation, VFX & Gaming Design)',
      code: 'UIMD-BDES-01',
      faculty: 'University Institute of Media & Design (UIMD)',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      intake: 90,
      feesPerSemester: '₹85,000',
      accreditation: 'UGC Recognized & NAAC Grade A+',
      eligibility: '10+2 in any stream with minimum 50% aggregate marks.',
      highlights: [
        'Dedicated Chroma green screen sound stages, motion capture suites, and Maya/Unreal Engine 5 workstations',
        'Mentorship by Hollywood and Bollywood visual effects artists and character animators',
        'Portfolio reviews and campus placement with Ubisoft, Prime Focus, Technicolor, and Rockstar Games'
      ],
      careerRoles: ['3D Animator', 'VFX Compositor', 'Game Concept Artist', 'Unreal Engine Technical Artist'],
      category: 'media-design'
    }
  ] as CRUProgram[]),

  recruiters: [
    { name: 'Google', packageOffered: '₹42.5 LPA', sector: 'Tech Giants', role: 'Software Engineer', logoText: 'Google' },
    { name: 'Microsoft', packageOffered: '₹54.75 LPA', sector: 'Tech Giants', role: 'Cloud Software Engineer', logoText: 'Microsoft' },
    { name: 'Amazon Web Services', packageOffered: '₹44.14 LPA', sector: 'Tech Giants', role: 'Solutions Architect', logoText: 'Amazon' },
    { name: 'IBM', packageOffered: '₹14.0 LPA', sector: 'Tech Giants', role: 'Cognitive Computing Specialist', logoText: 'IBM' },
    { name: 'Cisco Systems', packageOffered: '₹22.0 LPA', sector: 'Tech Giants', role: 'Network Security Engineer', logoText: 'Cisco' },
    { name: 'Deloitte', packageOffered: '₹12.5 LPA', sector: 'Consulting & BFSI', role: 'Technology Consultant', logoText: 'Deloitte' },
    { name: 'PwC', packageOffered: '₹11.8 LPA', sector: 'Consulting & BFSI', role: 'Risk & Strategy Analyst', logoText: 'PwC' },
    { name: 'Morgan Stanley', packageOffered: '₹28.0 LPA', sector: 'Consulting & BFSI', role: 'Quantitative Analyst', logoText: 'Morgan Stanley' },
    { name: 'Bank of America', packageOffered: '₹20.0 LPA', sector: 'Consulting & BFSI', role: 'FinTech Platform Engineer', logoText: 'Bank of America' },
    { name: 'Hyundai Motor', packageOffered: '₹10.5 LPA', sector: 'Core Engineering', role: 'Automotive Powertrain Engineer', logoText: 'Hyundai' },
    { name: 'Tata Motors', packageOffered: '₹9.8 LPA', sector: 'Core Engineering', role: 'Electric Vehicle Design Specialist', logoText: 'Tata Motors' },
    { name: 'Larsen & Toubro', packageOffered: '₹8.5 LPA', sector: 'Core Engineering', role: 'Structural Engineering Trainee', logoText: 'L&T' },
    { name: 'Adobe', packageOffered: '₹39.0 LPA', sector: 'Product & Media', role: 'Product Design Engineer', logoText: 'Adobe' },
    { name: 'Flipkart', packageOffered: '₹26.5 LPA', sector: 'Product & Media', role: 'Supply Chain Analytics Associate', logoText: 'Flipkart' },
    { name: 'Disney Star', packageOffered: '₹15.0 LPA', sector: 'Product & Media', role: 'Streaming Media Infrastructure Engineer', logoText: 'Disney Star' },
    { name: 'International Offer (USA)', packageOffered: '₹1.7 Crore', sector: 'Tech Giants', role: 'Principal Security Researcher', logoText: 'Global Fortune 50' }
  ],

  centersOfExcellence: [
    {
      id: 'coe-ibm',
      title: 'IBM Software Lab for Emerging Technologies',
      partner: 'IBM India',
      domain: 'Cloud, Big Data Analytics & Artificial Intelligence',
      description: 'Dedicated enterprise computing facility equipped with IBM Watson APIs, enterprise cloud testbeds, and certified coursework.',
      equipment: 'IBM Cloud Sandbox, Watson Studio, Red Hat OpenShift clusters, 120 high-performance workstations.',
      outcomes: 'Over 2,400 students certified annually with direct campus hiring into IBM Global Business Services.'
    },
    {
      id: 'coe-microsoft',
      title: 'Microsoft Innovation Center (MIC)',
      partner: 'Microsoft Corporation',
      domain: 'Azure Cloud, DevOps & AI Applications',
      description: 'Joint technology center facilitating hands-on learning in cloud infrastructure, container orchestration, and machine learning models.',
      equipment: 'Azure Cloud credits, HoloLens Augmented Reality kits, Surface Studio labs.',
      outcomes: 'National finalists in Microsoft Imagine Cup and multiple student patent filings in healthcare IoT.'
    },
    {
      id: 'coe-hyundai',
      title: 'Hyundai Automotive & EV R&D Bay',
      partner: 'Hyundai Motor India',
      domain: 'Electric Powertrain, Telematics & Automotive Safety',
      description: 'Cutting-edge automotive training setup featuring full vehicle cutaways, battery management testing rigs, and transmission analyzers.',
      equipment: 'Cut-section Kona EV powertrain, electronic fuel injection testing dynamometers, CAN bus telematics analyzers.',
      outcomes: 'Over 450 mechanical and electrical engineers placed in premier automotive OEM design centers.'
    },
    {
      id: 'coe-intel',
      title: 'Intel IoT & Embedded Intelligence Lab',
      partner: 'Intel Corporation',
      domain: 'Internet of Things, FPGA & Smart Sensors',
      description: 'Research setup for edge computing, smart city sensor network deployments, and real-time automated embedded systems.',
      equipment: 'Intel Galileo & Edison boards, Cyclone FPGA kits, RealSense depth cameras, industrial sensor networks.',
      outcomes: 'Development of smart agriculture and automated campus surveillance systems patented by student researchers.'
    },
    {
      id: 'coe-cisco',
      title: 'Cisco Networking Academy',
      partner: 'Cisco Systems',
      domain: 'Enterprise Routing, Switching & Network Cybersecurity',
      description: 'Accredited international networking academy preparing students for CCNA, CCNP, and CCIE professional credentials.',
      equipment: 'Cisco Catalyst enterprise switches, modular routers, firewalls, network packet analyzers.',
      outcomes: '100% placement rate for certified students in cybersecurity and network operations centers.'
    },
    {
      id: 'coe-dassault',
      title: 'Dassault Systèmes 3DEXPERIENCE Center',
      partner: 'Dassault Systèmes',
      domain: 'Industrial CAD/CAM, Digital Twin & Product Lifecycle',
      description: 'Advanced engineering design and finite element analysis facility utilizing CATIA, SIMULIA, and DELMIA platforms.',
      equipment: '3DEXPERIENCE enterprise servers, CAD design suites, digital twin manufacturing simulator.',
      outcomes: 'Aerospace and mechanical student teams designing Formula Student race cars and UAV drones.'
    }
  ],

  campusFacilities: [
    {
      id: 'fac-library',
      title: 'Central Digital Knowledge Center',
      category: 'Academic Infrastructure',
      description: 'A 5-storey automated library with 150,000+ print volumes, access to 1 million+ international e-journals via IEEE, Scopus, and Springer, and 24/7 silent study lounges.',
      metrics: '150,000+ Books · 1M+ E-Resources · 1,500 Reading Capacity',
      image: '/assets/cr-ramans-university/campus-library.jpg',
      points: [
        'Automated RFID book return and issue kiosks for instant borrowing',
        'Subscribed access to IEEE Xplore, ScienceDirect, LexisNexis, and EBSCO databases',
        'Dedicated doctoral scholar research cubicles with high-speed fiber internet'
      ]
    },
    {
      id: 'fac-auditorium',
      title: 'Grand Convention Auditorium',
      category: 'Events & Conclaves',
      description: 'A state-of-the-art 2,000-seater fully air-conditioned auditorium hosting international academic conferences, national cultural fests, convocation ceremonies, and visiting dignitaries.',
      metrics: '2,000 Seater Capacity · Acoustic Engineered · 4K Digital Cinema',
      image: '/assets/cr-ramans-university/campus-auditorium.jpg',
      points: [
        'Acoustically treated auditorium with JBL line-array audio systems and 40ft LED projection screen',
        'Venue for annual Tashan and CU-Fest celebrity concerts and TEDx conferences',
        'Dual green rooms and press briefing suites for visiting heads of state'
      ]
    },
    {
      id: 'fac-sports',
      title: 'Olympic-Standard Sports Complex',
      category: 'Athletics & Recreation',
      description: 'Comprehensive athletic infrastructure featuring an all-weather Olympic swimming pool, indoor badminton & squash arenas, synthetic basketball courts, and a full-size cricket ground.',
      metrics: 'Olympic Swimming Pool · 4 Synthetic Courts · Full Cricket Stadium',
      image: '/assets/cr-ramans-university/campus-sports.jpg',
      points: [
        'Regular training ground for national inter-university championship athletes',
        'Floodlit football and cricket grounds with professional coaching staff',
        'Modern gymnasiums equipped with Technogym resistance and cardio equipment'
      ]
    },
    {
      id: 'fac-hostels',
      title: 'Residential Hostels & Dining Courts',
      category: 'Campus Living',
      description: 'Comfortable residential blocks providing separate air-conditioned and air-cooled accommodations for boys and girls, with 24/7 biometric security, medical dispensaries, and multi-cuisine mess halls.',
      metrics: '12,000+ Beds · High-Speed Wi-Fi · 24/7 Security & Health Clinic',
      image: '/assets/cr-ramans-university/campus-hostel.jpg',
      points: [
        'Choices of 1-seater, 2-seater, and 3-seater rooms with attached modern bathrooms',
        'Hygienic multi-cuisine dining options including North Indian, South Indian, and Continental menus',
        'On-campus supermarket, laundry services, ATM facilities, and pharmacy'
      ]
    }
  ],

  testimonials: [
    {
      id: 'test-1',
      name: 'Aditya Singhania',
      program: 'B.E. Computer Science & Engineering',
      batch: 'Class of 2024',
      company: 'Microsoft',
      packageOffered: '₹54.75 LPA',
      role: 'Software Development Engineer',
      quote: 'The rigorous coding environment and IBM/Microsoft labs at CR Ramans University prepared me for the toughest technical interview rounds. Securing the ₹54.75 LPA package was a dream come true for my entire family.',
      image: '/assets/cr-ramans-university/testimonial-1.jpg'
    },
    {
      id: 'test-2',
      name: 'Pooja Chawla',
      program: 'Master of Business Administration (MBA)',
      batch: 'Class of 2024',
      company: 'Deloitte',
      packageOffered: '₹12.5 LPA',
      role: 'Management Consultant',
      quote: 'The Harvard Business Publishing case studies, live business simulations, and leadership conclaves transformed my executive mindset. CR Ramans University gave me the exact corporate polish that Deloitte looked for.',
      image: '/assets/cr-ramans-university/testimonial-2.jpg'
    },
    {
      id: 'test-3',
      name: 'Rohan Mehra',
      program: 'B.E. CSE (Artificial Intelligence & ML)',
      batch: 'Class of 2024',
      company: 'Amazon Web Services',
      packageOffered: '₹44.14 LPA',
      role: 'Cloud Architect Associate',
      quote: 'Having access to high-performance GPU clusters and working on generative AI models right from my third year gave me an incredible edge. The faculty mentorship here is truly world-class.',
      image: '/assets/cr-ramans-university/testimonial-3.jpg'
    },
    {
      id: 'test-4',
      name: 'Simranjeet Kaur',
      program: 'B.A. LL.B. (Hons.) Integrated',
      batch: 'Class of 2023',
      company: 'Trilegal Corporate Advocates',
      packageOffered: '₹16.0 LPA',
      role: 'Associate Legal Counsel',
      quote: 'The moot court competitions and mandatory internships with Supreme Court advocates provided practical litigation and corporate arbitration experience that no standard textbook could ever match.',
      image: '/assets/cr-ramans-university/testimonial-4.jpg'
    },
    {
      id: 'test-5',
      name: 'Karan Sharma',
      program: 'B.E. Mechanical Engineering',
      batch: 'Class of 2024',
      company: 'Hyundai Motor India',
      packageOffered: '₹10.5 LPA',
      role: 'EV Powertrain Engineer',
      quote: 'Training inside the Hyundai-sponsored Powertrain Lab allowed me to work directly on electric vehicle testing rigs and telemetry diagnostics. It bridged academic theory and shop-floor reality seamlessly.',
      image: '/assets/cr-ramans-university/testimonial-5.jpg'
    },
    {
      id: 'test-6',
      name: 'Ananya Deshmukh',
      program: 'Bachelor of Pharmacy (B.Pharm)',
      batch: 'Class of 2024',
      company: 'Pfizer Global R&D',
      packageOffered: '₹9.2 LPA',
      role: 'Formulation Scientist',
      quote: 'The cGMP testing labs and funded research projects at UIPS allowed me to co-author two international patent filings before graduation. I am proud to begin my scientific career at Pfizer.',
      image: '/assets/cr-ramans-university/testimonial-6.jpg'
    }
  ],

  scholarshipTiers: [
    {
      tier: 'Tier 1: 100% Scholarship',
      range: '90.01% – 100% Score in CRUCET / 12th Board',
      waiver: '100% Tuition Fee Waiver',
      description: 'Full tuition fee waiver for all academic years subject to maintaining 8.0+ CGPA in university examinations.',
      badge: 'Full Ride',
      highlightColor: '#10B981'
    },
    {
      tier: 'Tier 2: 50% Scholarship',
      range: '80.00% – 90.00% Score in CRUCET',
      waiver: '50% Tuition Fee Waiver',
      description: 'Half tuition fee waiver granted to top merit performers across technical, business, and legal disciplines.',
      badge: '50% Waiver',
      highlightColor: '#3B82F6'
    },
    {
      tier: 'Tier 3: 40% Scholarship',
      range: '70.00% – 79.99% Score in CRUCET',
      waiver: '40% Tuition Fee Waiver',
      description: 'Substantial fee concession enabling meritorious students from all economic backgrounds to access top-tier education.',
      badge: '40% Waiver',
      highlightColor: '#F59E0B'
    },
    {
      tier: 'Tier 4: 30% Scholarship',
      range: '60.00% – 69.99% Score in CRUCET',
      waiver: '30% Tuition Fee Waiver',
      description: 'Foundational encouragement scholarship honoring consistent academic dedication and entrance excellence.',
      badge: '30% Waiver',
      highlightColor: '#8B5CF6'
    }
  ],

  faqs: [
    {
      question: 'What is CRUCET 2026 and how can I apply for it?',
      answer: 'CRUCET (CR Ramans University Common Entrance Test) is the national-level entrance and scholarship examination conducted for admissions into all undergraduate and postgraduate programs. It is an online test that can be taken remotely from home or at designated test centers. Candidates can register online through this portal with an application fee of ₹1,000.',
      category: 'Scholarships & CRUCET'
    },
    {
      question: 'Is CR Ramans University recognized by UGC and accredited by NAAC?',
      answer: 'Yes. CR Ramans University is fully recognized by the University Grants Commission (UGC) under Section 2(f) with powers to award degrees. It has been accredited with Grade A+ by NAAC in the first cycle, approved by AICTE, Bar Council of India (BCI), Pharmacy Council of India (PCI), and Council of Architecture (COA). In addition, key engineering programs hold ABET USA accreditation.',
      category: 'Accreditation'
    },
    {
      question: 'What was the highest and average placement package in the 2024-2025 season?',
      answer: 'In the latest recruitment cycle, CR Ramans University achieved a record-shattering ₹1.7 Crore highest international package and ₹54.75 LPA highest domestic package. Over 9,124 placement offers were extended by 904+ multinational recruiters, with an average package of ₹8.4 LPA across technical streams.',
      category: 'Placements'
    },
    {
      question: 'How do the CRUCET merit scholarships work across multi-year degree programs?',
      answer: 'Scholarships awarded through CRUCET (ranging from 30% to 100% of the tuition fee) continue for the entire duration of the program, provided the student maintains a minimum cumulative grade point average (CGPA) of 7.5 (8.0 for 100% waiver), maintains 75% class attendance, and has no disciplinary record.',
      category: 'Scholarships & CRUCET'
    },
    {
      question: 'Are on-campus hostel accommodations available for outstation and international students?',
      answer: 'Yes. The university provides separate, secure, and modern residential hostels for boys and girls with a combined capacity of 12,000+ beds. Hostels offer choices of single, twin, and triple-sharing air-conditioned and air-cooled rooms with attached washrooms, high-speed Wi-Fi, 24/7 security, medical care, and multi-cuisine mess facilities.',
      category: 'Campus & Hostels'
    },
    {
      question: 'What are the minimum eligibility criteria for B.E. Computer Science Engineering?',
      answer: 'Candidates must have passed 10+2 examination with Physics and Mathematics as compulsory subjects along with Chemistry, Biotechnology, Computer Science, or Information Technology with minimum 60% aggregate marks. Admission is finalized based on merit rank in CRUCET or valid JEE Main scores.',
      category: 'Admissions'
    }
  ]
};
