/**
 * EDU TECH UNIVERSITY — Authoritative Structured Data & Configuration
 * Recreated from Monash University archive (https://www.monash.edu/)
 * Rebranded faithfully to EDU TECH UNIVERSITY while preserving the authentic
 * Group of Eight Australian university architecture, faculties, global campuses,
 * world rankings (QS #37), degree courses, research strengths, and admissions portal.
 */

export interface ETUProgram {
  id: string;
  name: string;
  code: string;
  faculty: string;
  level: 'Undergraduate' | 'Postgraduate' | 'Double Degree' | 'Research';
  duration: string;
  campus: string;
  atarEntry: string;
  annualFeeDomestic: string;
  annualFeeInternational: string;
  intake: string[];
  cricosCode: string;
  accreditation: string;
  overview: string;
  careerOutcomes: string[];
  keyUnits: string[];
  featured?: boolean;
}

export interface ETUFaculty {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  dean: string;
  globalRank: string;
  iconName: string;
  color: string;
  description: string;
  topDegrees: string[];
}

export interface ETUHeroSlide {
  id: string;
  badge: string;
  headline: string;
  subheadline: string;
  ctaPrimaryText: string;
  ctaPrimaryLink: string;
  ctaSecondaryText: string;
  ctaSecondaryLink: string;
  graphicSvg: string;
  accentColor: string;
  stats: { label: string; value: string }[];
}

export interface ETUCampus {
  id: string;
  name: string;
  country: string;
  city: string;
  address: string;
  studentsCount: string;
  highlights: string[];
  description: string;
  photoUrl: string;
}

export interface ETUResearchInstitute {
  id: string;
  name: string;
  focusArea: string;
  director: string;
  fundingAnnual: string;
  breakthrough: string;
  description: string;
}

export interface ETUTestimonial {
  id: string;
  name: string;
  degree: string;
  gradYear: string;
  currentRole: string;
  company: string;
  quote: string;
  avatarUrl: string;
  location: string;
}

export interface ETUFaq {
  question: string;
  answer: string;
  category: 'Admissions' | 'International' | 'Scholarships' | 'Campus Life' | 'Research';
}

export const EDU_TECH_UNIVERSITY_CONFIG = {
  institution: {
    name: 'EDU TECH UNIVERSITY',
    legalName: 'Edu Tech University Melbourne Australia',
    displayAbbreviation: 'ETU',
    motto: 'Ancora Imparo (I am still learning)',
    establishedYear: 1958,
    type: 'Public Research Intensive University',
    groupOfEightMember: true,
    cricosProviderCode: '00008C',
    teqsaProviderId: 'PRV12040',
    australianBusinessNumber: '12 377 614 012',
    chancellor: 'Simon McKeon AO',
    viceChancellor: 'Professor Sharon Pickering',
    headquarters: 'Clayton Campus, Wellington Road, Clayton VIC 3800, Australia',
    phoneMain: '+61 3 9905 4000',
    phoneAdmissionsDomestic: '1800 638 274',
    phoneAdmissionsInternational: '+61 3 9903 4788',
    emailContact: 'future@edutech.edu.au',
    totalStudents: '86,750+',
    internationalStudents: '31,000+',
    alumniNetwork: '440,000+',
    nationalitiesRepresented: '160+',
    annualResearchBudget: '$480M+ AUD',
    rankings: [
      { authority: 'QS World University Rankings 2026', rank: '#37 in the World', badgeText: 'Top 40 Worldwide' },
      { authority: 'US News Best Global Universities', rank: '#37 in the World', badgeText: 'Top 1% Global' },
      { authority: 'Times Higher Education (THE)', rank: '#54 Globally', badgeText: 'World Top 60' },
      { authority: 'QS Subject Rankings: Pharmacy', rank: '#2 in the World', badgeText: '#2 Worldwide' },
      { authority: 'QS Subject Rankings: Engineering', rank: '#1 in Australia', badgeText: '#1 in Australia' },
      { authority: 'THE World University Rankings', rank: '#1 in Australia for Clinical & Health', badgeText: '#1 National Health' }
    ]
  },

  heroSlides: [
    {
      id: 'slide-change-it',
      badge: 'TOP 40 WORLD UNIVERSITY',
      headline: "IF YOU DON'T LIKE THE WAY THE WORLD IS, CHANGE IT.",
      subheadline: "Australia's largest university and member of the prestigious Group of Eight. Pioneering breakthroughs in clean energy, mRNA medicine, and ethical AI.",
      ctaPrimaryText: 'Find a Course',
      ctaPrimaryLink: '#courses',
      ctaSecondaryText: 'Apply for 2026',
      ctaSecondaryLink: '#admissions',
      graphicSvg: '/assets/edu-tech-university/hero-change-it.svg',
      accentColor: '#38BDF8',
      stats: [
        { label: 'QS World Rank', value: '#37' },
        { label: 'Group of Eight', value: 'Go8 Member' },
        { label: 'Global Students', value: '86,000+' },
        { label: 'Alumni Network', value: '440,000+' }
      ]
    },
    {
      id: 'slide-global-campuses',
      badge: 'FOUR CONTINENTS',
      headline: 'A TRULY GLOBAL EDUCATION ACROSS 4 CONTINENTS',
      subheadline: 'Study seamlessly across modern smart campuses in Melbourne (Clayton & Caulfield), Kuala Lumpur (Malaysia), Jakarta (Indonesia), Prato (Italy), and Mumbai (India).',
      ctaPrimaryText: 'Explore Campuses',
      ctaPrimaryLink: '#campuses',
      ctaSecondaryText: 'Study Abroad Program',
      ctaSecondaryLink: '#global',
      graphicSvg: '/assets/edu-tech-university/hero-global-campuses.svg',
      accentColor: '#F59E0B',
      stats: [
        { label: 'Global Campuses', value: '8 Locations' },
        { label: 'Exchange Partners', value: '165+ Universities' },
        { label: 'International Faculty', value: '4,200+' },
        { label: 'Study Abroad Grant', value: 'Up to $5,000' }
      ]
    },
    {
      id: 'slide-research-impact',
      badge: 'RESEARCH POWERHOUSE',
      headline: 'TACKLING THE CLIMATE, HEALTH & PEACE CHALLENGES OF OUR AGE',
      subheadline: 'From pioneering inhaled oxytocin and world mosquito dengue eradication to Australia’s first mRNA manufacturing facility and Woodside clean hydrogen hub.',
      ctaPrimaryText: 'Explore Research Impact',
      ctaPrimaryLink: '#research',
      ctaSecondaryText: 'Graduate Research (PhD)',
      ctaSecondaryLink: '#admissions',
      graphicSvg: '/assets/edu-tech-university/hero-research-impact.svg',
      accentColor: '#10B981',
      stats: [
        { label: 'Annual Research', value: '$480M+ AUD' },
        { label: 'Pharmacy Global', value: '#2 in World' },
        { label: 'Active Patents', value: '620+' },
        { label: 'Spin-out Ventures', value: '48 Co.' }
      ]
    },
    {
      id: 'slide-student-experience',
      badge: 'STUDENT LIFE',
      headline: 'VIBRANT CAMPUS LIFE: CLUBS, MAKER SPACES & COMMUNITY',
      subheadline: 'Immerse yourself in world-class design studios, 100+ student clubs, residential collegiate living, and an Olympic-grade multisport complex.',
      ctaPrimaryText: 'Discover Student Life',
      ctaPrimaryLink: '#experience',
      ctaSecondaryText: 'Virtual Tour 360°',
      ctaSecondaryLink: '#campus-tour',
      graphicSvg: '/assets/edu-tech-university/hero-student-experience.svg',
      accentColor: '#A78BFA',
      stats: [
        { label: 'Student Clubs', value: '100+' },
        { label: 'Nationalities', value: '160+' },
        { label: 'Residential Halls', value: '3,200 Beds' },
        { label: 'Grad Employment', value: '92% Placed' }
      ]
    },
    {
      id: 'slide-admissions-2026',
      badge: 'APPLICATIONS OPEN 2026',
      headline: 'SECURE YOUR PLACE FOR FEBRUARY & JULY 2026 INTAKES',
      subheadline: 'Direct online applications are open for undergraduate and postgraduate degrees. Comprehensive merit scholarships up to $10,000/year for international students.',
      ctaPrimaryText: 'Start Application',
      ctaPrimaryLink: '#admissions',
      ctaSecondaryText: 'Scholarship Calculator',
      ctaSecondaryLink: '#scholarships',
      graphicSvg: '/assets/edu-tech-university/hero-admissions-2026.svg',
      accentColor: '#FBBF24',
      stats: [
        { label: 'Semester 1 Intake', value: 'Feb 2026' },
        { label: 'Semester 2 Intake', value: 'July 2026' },
        { label: 'Merit Scholarships', value: 'Up to $10K/yr' },
        { label: 'Application Fee', value: '$0 Online' }
      ]
    }
  ] as ETUHeroSlide[],

  faculties: [
    {
      id: 'engineering',
      name: 'Faculty of Engineering',
      shortName: 'Engineering',
      tagline: '#1 Ranked Engineering Faculty in Australia',
      dean: 'Professor Yiannis Ventikos',
      globalRank: '#1 in Australia (THE Subject Rankings)',
      iconName: 'Cpu',
      color: '#006DAE',
      description: 'Home to the New Generation Learning Precinct and world-class labs in civil, mechanical, chemical, electrical, software, and aerospace engineering.',
      topDegrees: ['Bachelor of Engineering (Honours)', 'Master of Professional Engineering', 'Master of Robotics & Autonomous Systems']
    },
    {
      id: 'it',
      name: 'Faculty of Information Technology',
      shortName: 'Information Technology',
      tagline: 'Leading AI, Cybersecurity & Data Science in Asia-Pacific',
      dean: 'Professor Ann Nicholson',
      globalRank: 'Top 50 Globally for Computer Science',
      iconName: 'Laptop',
      color: '#0284C7',
      description: 'Pioneering generative AI, ethical data governance, cloud architecture, and cybersecurity in partnership with CSIRO, AWS, and Microsoft.',
      topDegrees: ['Bachelor of Computer Science (Advanced CS)', 'Master of Artificial Intelligence', 'Master of Cybersecurity']
    },
    {
      id: 'business',
      name: 'Monash Business School (Business & Economics)',
      shortName: 'Business School',
      tagline: 'Triple-Crown Accredited Global Business Education',
      dean: 'Professor Simon Wilkie',
      globalRank: 'AACSB, EQUIS & AMBA Accredited (Top 1% Worldwide)',
      iconName: 'TrendingUp',
      color: '#0D9488',
      description: 'Ranked among the premier business schools globally, offering elite programs in finance, economics, business analytics, and marketing.',
      topDegrees: ['Bachelor of Commerce (Honours)', 'Master of Business Administration (MBA)', 'Master of Banking & Finance']
    },
    {
      id: 'medicine-health',
      name: 'Faculty of Medicine, Nursing and Health Sciences',
      shortName: 'Medicine & Health',
      tagline: 'Translational Clinical Medicine & Healthcare Innovation',
      dean: 'Professor Christina Mitchell AO',
      globalRank: '#1 in Australia for Clinical & Pre-Clinical Medicine',
      iconName: 'HeartPulse',
      color: '#E11D48',
      description: 'Partnered with Alfred Health, Monash Health, and Melbourne biomedical precinct to deliver world-leading medical doctor, nursing, and biomedical research degrees.',
      topDegrees: ['Bachelor of Medical Science and Doctor of Medicine (MD)', 'Bachelor of Nursing', 'Bachelor of Biomedical Science']
    },
    {
      id: 'pharmacy',
      name: 'Faculty of Pharmacy and Pharmaceutical Sciences',
      shortName: 'Pharmacy',
      tagline: '#2 in the World for Pharmacy & Pharmacology (QS World)',
      dean: 'Professor Arthur Christopoulos FAA',
      globalRank: '#2 in the World (QS World Subject Rankings)',
      iconName: 'Pill',
      color: '#7C3AED',
      description: 'Located in the Parkville biomedical precinct, leading global breakthroughs in drug discovery, inhaled delivery systems, and mRNA therapeutics.',
      topDegrees: ['Bachelor of Pharmacy (Honours) / Master of Pharmacy', 'Bachelor of Pharmaceutical Science', 'Master of Clinical Pharmacy']
    },
    {
      id: 'law',
      name: 'Faculty of Law',
      shortName: 'Law',
      tagline: 'Top 40 Global Law School & Monash Law Clinics',
      dean: 'Professor Bryan Horrigan',
      globalRank: 'Top 35 in the World (QS Law Rankings)',
      iconName: 'Scale',
      color: '#475569',
      description: 'Offering guaranteed clinical legal experience with in-house community law centers and international human rights and commercial litigation clinics.',
      topDegrees: ['Bachelor of Laws (Honours)', 'Juris Doctor (JD)', 'Master of Laws (LLM)']
    },
    {
      id: 'science',
      name: 'Faculty of Science',
      shortName: 'Science',
      tagline: 'Frontier Scientific Discovery from Quantum to Climate',
      dean: 'Professor Jordan Nash',
      globalRank: 'Top 50 Worldwide for Natural Sciences',
      iconName: 'Microscope',
      color: '#16A34A',
      description: 'Direct access to the Australian Synchrotron, Green Chemical Futures laboratories, and astronomical observatories.',
      topDegrees: ['Bachelor of Science (Advanced Honours)', 'Master of Environment & Sustainability', 'Master of Data Science']
    },
    {
      id: 'art-design-arch',
      name: 'Faculty of Art, Design and Architecture (MADA)',
      shortName: 'MADA (Art & Design)',
      tagline: 'Creative Practice Transforming Physical & Digital Environments',
      dean: 'Professor Mel Dodd',
      globalRank: 'Top 50 Globally for Art & Design',
      iconName: 'Palette',
      color: '#D97706',
      description: 'A vibrant cross-disciplinary creative atelier offering state-of-the-art 3D fabrication labs, motion capture suites, and architectural design studios.',
      topDegrees: ['Bachelor of Design (Communication/Industrial)', 'Master of Architecture', 'Bachelor of Fine Art']
    },
    {
      id: 'arts',
      name: 'Faculty of Arts (Humanities & Social Sciences)',
      shortName: 'Arts & Humanities',
      tagline: 'Critical Inquiry, Languages & International Relations',
      dean: 'Professor Katie Holmes',
      globalRank: 'Top 45 in the World (QS Arts & Humanities)',
      iconName: 'BookOpen',
      color: '#9333EA',
      description: 'Inspiring future leaders, diplomats, journalists, and global policy analysts with programs in politics, international relations, linguistics, and journalism.',
      topDegrees: ['Bachelor of Arts (Politics & Global Studies)', 'Master of International Relations', 'Master of Communications & Media']
    },
    {
      id: 'education',
      name: 'Faculty of Education',
      shortName: 'Education',
      tagline: '#1 in Australia for Teacher Education & Educational Research',
      dean: 'Professor Viv Ellis',
      globalRank: 'Top 20 Worldwide for Education (QS World)',
      iconName: 'GraduationCap',
      color: '#EA580C',
      description: 'Empowering innovative educators, child psychologists, STEM pedagogy specialists, and institutional leaders.',
      topDegrees: ['Bachelor of Education (Honours)', 'Master of Teaching (Primary & Secondary)', 'Master of Educational Leadership']
    }
  ] as ETUFaculty[],

  programs: [
    {
      id: 'be-hons-soft-eng',
      name: 'Bachelor of Engineering (Honours) — Software Engineering',
      code: 'E3001',
      faculty: 'Faculty of Engineering',
      level: 'Undergraduate',
      duration: '4 Years Full-time',
      campus: 'Clayton Campus, Melbourne',
      atarEntry: '86.50 ATAR (Guaranteed 88.00)',
      annualFeeDomestic: '$9,900 AUD (CSP)',
      annualFeeInternational: '$53,200 AUD',
      intake: ['Semester 1 (February)', 'Semester 2 (July)'],
      cricosCode: '001722B',
      accreditation: 'Engineers Australia & Australian Computer Society (ACS)',
      overview: 'Develop large-scale resilient software systems, cloud infrastructure, AI integration, and safety-critical cyber-physical systems with an embedded 12-week industry placement.',
      careerOutcomes: ['Senior Software Architect', 'Cloud DevOps Lead', 'AI Systems Engineer', 'Cybersecurity Engineer'],
      keyUnits: ['Algorithms & Data Structures', 'Software Quality & Testing', 'Concurrent Systems', 'Continuous Delivery & DevOps', 'Engineering Capstone Project'],
      featured: true
    },
    {
      id: 'bcomp-sci-adv',
      name: 'Bachelor of Computer Science (Advanced Computer Science)',
      code: 'C2001',
      faculty: 'Faculty of Information Technology',
      level: 'Undergraduate',
      duration: '3 Years Full-time',
      campus: 'Clayton Campus, Melbourne',
      atarEntry: '84.00 ATAR (Guaranteed 86.00)',
      annualFeeDomestic: '$9,900 AUD (CSP)',
      annualFeeInternational: '$51,800 AUD',
      intake: ['Semester 1 (February)', 'Semester 2 (July)'],
      cricosCode: '079336A',
      accreditation: 'Australian Computer Society (ACS Professional Level)',
      overview: 'An intensive theoretical and applied curriculum covering deep learning, quantum computing foundations, distributed ledger protocols, and high-performance parallel computing.',
      careerOutcomes: ['Data Scientist', 'Machine Learning Engineer', 'Systems Programmer', 'Quantum Computing Researcher'],
      keyUnits: ['Theory of Computation', 'Deep Learning & Neural Networks', 'Database Systems', 'Distributed Systems', 'Industry-Based Learning (IBL)'],
      featured: true
    },
    {
      id: 'bmed-md',
      name: 'Bachelor of Medical Science and Doctor of Medicine (MD)',
      code: 'M6011',
      faculty: 'Faculty of Medicine, Nursing and Health Sciences',
      level: 'Undergraduate',
      duration: '5 Years Full-time',
      campus: 'Clayton & Clinical Teaching Hospitals',
      atarEntry: '99.00+ ATAR (Plus UCAT ANZ & MMI Interview)',
      annualFeeDomestic: '$12,400 AUD (CSP)',
      annualFeeInternational: '$92,500 AUD',
      intake: ['Semester 1 (February)'],
      cricosCode: '097960J',
      accreditation: 'Australian Medical Council (AMC) & Medical Board of Australia',
      overview: 'An internationally benchmarked dual-degree medical program preparing compassionate, scientifically rigorous doctors with integrated clinical rotations at The Alfred, Monash Medical Centre, and rural health networks.',
      careerOutcomes: ['Registered Medical Practitioner', 'Specialist Physician / Surgeon', 'Clinical Researcher', 'Public Health Consultant'],
      keyUnits: ['Foundations of Biomedical Science', 'Pathology & Pharmacology', 'Clinical Skills & Patient Care', 'Cardiorespiratory & Neurological Medicine', 'Advanced Clinical Practice Internship'],
      featured: true
    },
    {
      id: 'b-pharm-master',
      name: 'Bachelor of Pharmacy (Honours) / Master of Pharmacy',
      code: 'P6001',
      faculty: 'Faculty of Pharmacy and Pharmaceutical Sciences',
      level: 'Undergraduate',
      duration: '5 Years Integrated Bachelor/Master',
      campus: 'Parkville Campus, Melbourne',
      atarEntry: '84.00 ATAR',
      annualFeeDomestic: '$9,900 AUD (CSP)',
      annualFeeInternational: '$49,500 AUD',
      intake: ['Semester 1 (February)'],
      cricosCode: '089709F',
      accreditation: 'Australian Pharmacy Council (APC) & Pharmacy Board of Australia',
      overview: 'Taught at Australia’s premier pharmacy school (#2 in the world). Features integrated 48-week paid internship leading to immediate registration upon graduation.',
      careerOutcomes: ['Registered Hospital Pharmacist', 'Clinical Pharmacotherapist', 'Formulation Scientist', 'Regulatory Affairs Manager'],
      keyUnits: ['Medicinal Chemistry', 'Biopharmaceutics & Pharmacokinetics', 'Pharmacotherapy of Chronic Disease', 'Integrated Pharmacy Practice', 'Pharmacy Intern Training Unit'],
      featured: true
    },
    {
      id: 'bcom-finance',
      name: 'Bachelor of Commerce — Finance & Business Analytics',
      code: 'B2001',
      faculty: 'Monash Business School (Business & Economics)',
      level: 'Undergraduate',
      duration: '3 Years Full-time',
      campus: 'Clayton & Caulfield Campuses',
      atarEntry: '90.00 ATAR (Guaranteed 91.50)',
      annualFeeDomestic: '$16,000 AUD (CSP Band 4)',
      annualFeeInternational: '$52,200 AUD',
      intake: ['Semester 1 (February)', 'Semester 2 (July)'],
      cricosCode: '013387G',
      accreditation: 'AACSB, EQUIS, AMBA & CFA Institute Partner',
      overview: 'Study algorithmic finance, financial econometric modeling, asset pricing, risk management, and big data business analytics with real-time trading room simulations.',
      careerOutcomes: ['Investment Banker', 'Quantitative Risk Analyst', 'Portfolio Manager', 'Financial Econometrician'],
      keyUnits: ['Corporate Finance', 'Investments & Portfolio Management', 'Financial Econometrics', 'Derivatives & Risk Hedging', 'Algorithmic Trading Simulation'],
      featured: true
    },
    {
      id: 'llb-hons',
      name: 'Bachelor of Laws (Honours)',
      code: 'L3001',
      faculty: 'Faculty of Law',
      level: 'Undergraduate',
      duration: '4 Years Full-time',
      campus: 'Clayton Campus, Melbourne',
      atarEntry: '95.00 ATAR (Guaranteed 96.00)',
      annualFeeDomestic: '$16,000 AUD (CSP Band 4)',
      annualFeeInternational: '$48,000 AUD',
      intake: ['Semester 1 (February)', 'Semester 2 (July)'],
      cricosCode: '080585M',
      accreditation: 'Victorian Legal Admissions Board (VLAB) & Law Council of Australia',
      overview: 'A prestigious legal degree satisfying the academic requirements for admission to legal practice in Australia. Features guaranteed clinical experience at Monash Law Clinics.',
      careerOutcomes: ['Barrister & Solicitor', 'Corporate Legal Counsel', 'International Human Rights Advocate', 'Government Policy Advisor'],
      keyUnits: ['Constitutional Law', 'Contract Law', 'Criminal Law & Procedure', 'Torts', 'Corporate Law', 'Clinical Legal Placement'],
      featured: true
    },
    {
      id: 'm-ai',
      name: 'Master of Artificial Intelligence',
      code: 'C6007',
      faculty: 'Faculty of Information Technology',
      level: 'Postgraduate',
      duration: '1.5 to 2 Years Full-time',
      campus: 'Clayton Campus, Melbourne',
      atarEntry: 'Undergraduate Degree (WAM 65%+)',
      annualFeeDomestic: '$35,800 AUD',
      annualFeeInternational: '$52,400 AUD',
      intake: ['Semester 1 (February)', 'Semester 2 (July)'],
      cricosCode: '102735A',
      accreditation: 'Australian Computer Society (ACS)',
      overview: 'Comprehensive graduate training in deep neural networks, computer vision, natural language processing, robotic intelligence, and ethical AI frameworks.',
      careerOutcomes: ['Lead AI Scientist', 'Computer Vision Specialist', 'NLP Engineer', 'Autonomous Robotics Lead'],
      keyUnits: ['Deep Learning', 'Natural Language Understanding', 'Perception & Computer Vision', 'Reinforcement Learning', 'AI Research Thesis']
    },
    {
      id: 'mba-global',
      name: 'The Edu Tech University MBA (Executive & Global)',
      code: 'B6016',
      faculty: 'Monash Business School (Business & Economics)',
      level: 'Postgraduate',
      duration: '2 Years Full-time / Part-time Hybrid',
      campus: 'Caulfield Campus & Global Immersion Modules',
      atarEntry: 'Bachelor Degree + Minimum 3 Years Professional Experience',
      annualFeeDomestic: '$46,000 AUD / Year',
      annualFeeInternational: '$56,000 AUD / Year',
      intake: ['Term 1 (January)', 'Term 3 (July)'],
      cricosCode: '097258G',
      accreditation: 'Triple Crown (AACSB, EQUIS, AMBA)',
      overview: 'Designed for ambitious enterprise leaders and innovators. Includes live consulting projects with Fortune 500 corporations and global study modules in Silicon Valley and Europe.',
      careerOutcomes: ['Chief Executive Officer (CEO)', 'Management Consultant (MBB)', 'Strategy Director', 'Venture Capital Partner'],
      keyUnits: ['Strategic Leadership', 'Financial Acumen & Valuation', 'Digital Transformation', 'Global Business Strategy', 'Consulting Practicum']
    },
    {
      id: 'm-data-science',
      name: 'Master of Data Science',
      code: 'C6004',
      faculty: 'Faculty of Information Technology',
      level: 'Postgraduate',
      duration: '1.5 to 2 Years Full-time',
      campus: 'Clayton Campus, Melbourne',
      atarEntry: 'Bachelor Degree (Any Discipline, WAM 60%+)',
      annualFeeDomestic: '$35,200 AUD',
      annualFeeInternational: '$51,000 AUD',
      intake: ['Semester 1 (February)', 'Semester 2 (July)'],
      cricosCode: '085349A',
      accreditation: 'Australian Computer Society (ACS)',
      overview: 'Master statistical machine learning, big data pipeline engineering with Apache Spark, predictive analytics, and data visualization for enterprise decision making.',
      careerOutcomes: ['Lead Data Scientist', 'Business Intelligence Architect', 'Machine Learning Ops Engineer', 'Analytics Consultant'],
      keyUnits: ['Data Wrangling', 'Statistical Machine Learning', 'Big Data Engineering', 'Cloud Data Architecture', 'Industry Capstone Project']
    },
    {
      id: 'm-prof-eng',
      name: 'Master of Professional Engineering (Civil & Environmental)',
      code: 'E6011',
      faculty: 'Faculty of Engineering',
      level: 'Postgraduate',
      duration: '2 to 3 Years Full-time',
      campus: 'Clayton Campus, Melbourne',
      atarEntry: 'Bachelor Degree in Engineering or Science',
      annualFeeDomestic: '$36,500 AUD',
      annualFeeInternational: '$54,000 AUD',
      intake: ['Semester 1 (February)', 'Semester 2 (July)'],
      cricosCode: '0101708',
      accreditation: 'Engineers Australia (Stage 1 Competency)',
      overview: 'Accredited professional graduate engineering pathway focusing on mega-infrastructure, sustainable urban transport, water resource resilience, and carbon-neutral construction.',
      careerOutcomes: ['Chartered Professional Engineer (CPEng)', 'Infrastructure Project Director', 'Structural Design Lead', 'Environmental Engineering Specialist'],
      keyUnits: ['Advanced Structural Analysis', 'Geotechnical Engineering', 'Water Resources Systems', 'Sustainable Infrastructure Design', 'Professional Engineering Practice']
    },
    {
      id: 'b-biomed-sci',
      name: 'Bachelor of Biomedical Science',
      code: 'M2003',
      faculty: 'Faculty of Medicine, Nursing and Health Sciences',
      level: 'Undergraduate',
      duration: '3 Years Full-time',
      campus: 'Clayton Campus, Melbourne',
      atarEntry: '88.00 ATAR',
      annualFeeDomestic: '$9,900 AUD (CSP)',
      annualFeeInternational: '$49,800 AUD',
      intake: ['Semester 1 (February)'],
      cricosCode: '031363B',
      accreditation: 'Australian Institute of Medical & Clinical Scientists (AIMS Pathway)',
      overview: 'The premier scientific foundation degree for postgraduate medicine, immunology, oncology research, and global biotech entrepreneurship.',
      careerOutcomes: ['Medical Researcher', 'Biomedical Scientist', 'Genetic Counselor', 'Pharmaceutical Scientist'],
      keyUnits: ['Molecular Biology of the Cell', 'Human Anatomy & Physiology', 'Medical Microbiology', 'Immunology & Immunopathology', 'Biomedical Discovery Project']
    },
    {
      id: 'double-eng-com',
      name: 'Bachelor of Engineering (Honours) and Bachelor of Commerce',
      code: 'E3005',
      faculty: 'Faculty of Engineering / Monash Business School',
      level: 'Double Degree',
      duration: '5 Years Full-time',
      campus: 'Clayton Campus, Melbourne',
      atarEntry: '92.50 ATAR',
      annualFeeDomestic: '$12,800 AUD (Blended CSP)',
      annualFeeInternational: '$52,900 AUD',
      intake: ['Semester 1 (February)', 'Semester 2 (July)'],
      cricosCode: '083431D',
      accreditation: 'Engineers Australia & AACSB/EQUIS/AMBA',
      overview: 'Combine advanced engineering specialization (Mechanical, Civil, Software, Mechatronics) with commercial acumen in finance, economics, or marketing.',
      careerOutcomes: ['Engineering Commercial Director', 'Tech Venture Founder', 'Infrastructure Fund Analyst', 'Product Development Manager'],
      keyUnits: ['Engineering Design', 'Corporate Finance', 'Macroeconomics', 'Mechatronic Systems', 'Commercial Engineering Capstone'],
      featured: true
    }
  ] as ETUProgram[],

  featureBoxes: [
    {
      id: 'box-international-applications',
      title: 'International Student Applications',
      subtitle: 'Join a vibrant community of over 31,000 international students from 160+ countries.',
      description: 'Streamlined online admissions, fast-track visa processing advice, dedicated arrival airport pickup, and merit-based international scholarships up to $10,000 per year.',
      linkText: 'Apply as an International Student',
      linkUrl: '#admissions',
      badge: 'INTERNATIONAL ENTRY 2026',
      tag: 'Global Welcome'
    },
    {
      id: 'box-etu-experience',
      title: 'The Edu Tech University Experience 2026',
      subtitle: 'Where world-class academics meet an unforgettable university lifestyle.',
      description: 'From 100+ student clubs and collegiate residential villages to live music festivals, hackathons, and varsity sports championships at the Olympic-grade sports pavilion.',
      linkText: 'Explore Campus Life',
      linkUrl: '#experience',
      badge: 'STUDENT CULTURE',
      tag: 'Clayton & Caulfield'
    },
    {
      id: 'box-design-innovation',
      title: 'Design Studio & Innovation Precinct',
      subtitle: 'Hands-on experiential learning inside industry-standard maker spaces.',
      description: 'Work alongside leading architectural firms, industrial product teams, and tech startups in our dedicated 3D fabrication ateliers, VR testing bays, and rapid prototyping labs.',
      linkText: 'Explore Maker Spaces',
      linkUrl: '#innovation',
      badge: 'MAKER LABS',
      tag: 'Creative Practice'
    },
    {
      id: 'box-industry-collaboration',
      title: 'Industry & Work-Integrated Learning (WIL)',
      subtitle: 'Every undergraduate degree embeds real-world professional work experience.',
      description: 'Partnered with over 450 global employers including CSIRO, Google, Woodside Energy, Alfred Health, Deloitte, and BHP to ensure immediate job readiness upon graduation.',
      linkText: 'Discover Career Pathways',
      linkUrl: '#careers',
      badge: 'CAREER READINESS',
      tag: '450+ Partner Employers'
    }
  ],

  campuses: [
    {
      id: 'clayton',
      name: 'Clayton Campus (Main Campus)',
      country: 'Australia',
      city: 'Melbourne, Victoria',
      address: 'Wellington Road, Clayton VIC 3800',
      studentsCount: '38,000+ Students',
      highlights: [
        '100+ hectares of smart university parkland',
        'Home to the Australian Synchrotron and CSIRO Innovation Hub',
        'New Generation Learning Precinct with 60+ smart amphitheaters',
        'Central Alexander Theatre & Robert Blackwood Concert Hall'
      ],
      description: 'The largest university campus in Australia, Clayton is a bustling self-contained community featuring student residences, retail avenues, libraries, banks, medical centers, and sports fields.',
      photoUrl: '/assets/edu-tech-university/campus-main.jpg'
    },
    {
      id: 'caulfield',
      name: 'Caulfield Campus',
      country: 'Australia',
      city: 'Melbourne, Victoria',
      address: '900 Dandenong Road, Caulfield East VIC 3145',
      studentsCount: '19,000+ Students',
      highlights: [
        'Heart of Monash Business School & MADA Design Studios',
        'Direct connection to Caulfield Railway Station (9 mins to Melbourne CBD)',
        'Ian Potter Sculpture Court and MUMA Museum of Art',
        'State-of-the-art live trading room simulation facility'
      ],
      description: 'The creative and commercial urban campus situated right next to transit, surrounded by cafes, modern collegiate facilities, and design labs.',
      photoUrl: '/assets/edu-tech-university/campus-hero-1.jpg'
    },
    {
      id: 'parkville',
      name: 'Parkville Campus (Pharmacy Precinct)',
      country: 'Australia',
      city: 'Melbourne, Victoria',
      address: '381 Royal Parade, Parkville VIC 3052',
      studentsCount: '2,800+ Students',
      highlights: [
        'Dedicated to Pharmacy and Pharmaceutical Sciences (#2 in the World)',
        'Embedded inside Melbourne’s premier biomedical research strip',
        'Advanced Shimadzu analytical chemistry and NMR spectroscopy labs',
        'Collaborations with Walter & Eliza Hall Institute and CSL'
      ],
      description: 'Located in Melbourne’s internationally renowned biomedical hub, dedicated exclusively to advancing pharmaceutical chemistry and clinical pharmacy.',
      photoUrl: '/assets/edu-tech-university/campus-labs.jpg'
    },
    {
      id: 'peninsula',
      name: 'Peninsula Campus',
      country: 'Australia',
      city: 'Frankston, Victoria',
      address: 'McMahons Road, Frankston VIC 3199',
      studentsCount: '4,500+ Students',
      highlights: [
        'Centers of excellence in Nursing, Paramedicine & Physiotherapy',
        'Simulated hospital emergency ward and ambulance triage bays',
        'Coastal bayside setting with modern student accommodation',
        'Close partnership with Peninsula Health and local hospitals'
      ],
      description: 'A close-knit, specialized health and education campus situated near Port Phillip Bay with simulated patient wards.',
      photoUrl: '/assets/edu-tech-university/campus-auditorium.jpg'
    },
    {
      id: 'malaysia',
      name: 'Edu Tech University Malaysia',
      country: 'Malaysia',
      city: 'Sunway City, Selangor',
      address: 'Jalan Lagoon Selatan, 47500 Bandar Sunway, Selangor',
      studentsCount: '9,500+ Students',
      highlights: [
        'First foreign university branch campus established in Malaysia (1998)',
        'Fully accredited by Malaysian Qualifications Agency (MQA)',
        'Genomics facility and brain research institute (BRIMS)',
        'Identical Australian degrees with Southeast Asian regional cost advantages'
      ],
      description: 'A premier Southeast Asian higher education destination offering identical curriculum and degree certifications as the Melbourne campuses.',
      photoUrl: '/assets/edu-tech-university/campus-hero-2.jpg'
    },
    {
      id: 'indonesia',
      name: 'Edu Tech University Indonesia',
      country: 'Indonesia',
      city: 'BSD City, Greater Jakarta',
      address: 'Green Office Park 9, BSD City, Tangerang, Banten',
      studentsCount: '1,200+ Postgraduates',
      highlights: [
        'First foreign university campus officially established in Indonesia',
        'Specialized postgraduate and doctoral research school',
        'Hub for Urban Design, Public Policy, Data Science, and Business Innovation',
        'Direct collaboration with Indonesian government and ASEAN agencies'
      ],
      description: 'Pioneering international postgraduate education in Indonesia, driving digital economy leadership and sustainable urban development.',
      photoUrl: '/assets/edu-tech-university/campus-library.jpg'
    }
  ] as ETUCampus[],

  researchInstitutes: [
    {
      id: 'biomed-discovery',
      name: 'Monash Biomedicine Discovery Institute',
      focusArea: 'Cancer, Infectious Diseases & Neuroscience',
      director: 'Professor John Carroll',
      fundingAnnual: '$85M AUD',
      breakthrough: 'Inhaled oxytocin delivery for postpartum hemorrhage prevention; cryo-electron microscopy virus mapping.',
      description: 'Bringing together over 120 research groups across 700 scientists to solve the most pressing biomedical challenges.'
    },
    {
      id: 'energy-institute',
      name: 'Woodside Monash Energy Institute',
      focusArea: 'Green Hydrogen, Solar PV & Grid Decarbonisation',
      director: 'Professor Paul Webley',
      fundingAnnual: '$45M AUD',
      breakthrough: 'Electrolyzer catalysts reducing green hydrogen production energy requirements by 28%.',
      description: 'A $40M industry partnership accelerating clean energy technologies, battery storage, and carbon-negative materials.'
    },
    {
      id: 'data-futures',
      name: 'Monash Data Futures Institute',
      focusArea: 'AI for Social Good, Data Ethics & Climate Modeling',
      director: 'Professor Joanna Batstone',
      fundingAnnual: '$38M AUD',
      breakthrough: 'Machine learning algorithms detecting climate risk and wildfires in real-time using satellite telemetry.',
      description: 'Mobilizing data science and AI research across all faculties to address social, medical, and environmental issues.'
    },
    {
      id: 'world-mosquito',
      name: 'World Mosquito Program',
      focusArea: 'Vector-Borne Disease Eradication (Dengue, Zika)',
      director: 'Professor Scott O’Neill',
      fundingAnnual: '$50M AUD Global Grant',
      breakthrough: 'Deploying Wolbachia bacteria to eliminate dengue transmission in 14 countries, protecting 11M+ people.',
      description: 'A global research initiative born at the university that has demonstrated up to 77% reduction in dengue fever incidence.'
    }
  ] as ETUResearchInstitute[],

  scholarships: [
    {
      id: 'intl-leadership',
      name: 'Edu Tech International Leadership Scholarship',
      value: '100% Tuition Fee Waiver',
      eligibility: 'Outstanding international undergraduate or postgraduate coursework applicants based on high academic achievement and leadership potential.',
      applications: 'Open for 2026 Entry',
      coverage: 'Full tuition fees for normal degree duration'
    },
    {
      id: 'intl-excellence',
      name: 'International Study Excellence Scholarship',
      value: '$10,000 AUD per year ($40,000 total)',
      eligibility: 'All commencing international undergraduate and master’s students who demonstrate high academic merit in previous studies.',
      applications: 'Automatically assessed upon application',
      coverage: 'Annual tuition reduction'
    },
    {
      id: 'sir-john-merit',
      name: 'Sir John Monash Scholarship for Excellence',
      value: '$10,000 AUD per year + Study Abroad Grant',
      eligibility: 'Australian domestic students achieving an ATAR of 98.00 or higher.',
      applications: 'Direct VTAC & Institutional pathway',
      coverage: 'Cash stipend + priority residential college place'
    },
    {
      id: 'women-stem',
      name: 'Women in Engineering & IT Scholarship',
      value: '$10,000 AUD per year + Industry Mentorship',
      eligibility: 'High-achieving female applicants pursuing undergraduate degrees in Engineering or Computer Science.',
      applications: 'Open for Semester 1, 2026',
      coverage: 'Annual payment + paid industry internship matching'
    },
    {
      id: 'achieving-potential',
      name: 'Achieving Potential Access & Equity Grant',
      value: 'Up to $6,000 AUD per year',
      eligibility: 'Students from regional/remote areas, low-SES backgrounds, or experiencing educational disadvantage.',
      applications: 'Assessed via VTAC SEAS or direct application',
      coverage: 'Living allowance and accommodation bursary'
    }
  ],

  testimonials: [
    {
      id: 't-1',
      name: 'Dr. Sarah Lin',
      degree: 'Bachelor of Medical Science & MD',
      gradYear: 'Class of 2023',
      currentRole: 'Junior Medical Officer / Neurosurgical Resident',
      company: 'The Alfred Hospital, Melbourne',
      quote: 'The clinical exposure at Edu Tech University began from day one. Working in world-renowned hospital wards alongside leading surgeons prepared me for the highest pressure moments in my residency.',
      avatarUrl: '/assets/edu-tech-university/testimonial-1.jpg',
      location: 'Melbourne, Australia'
    },
    {
      id: 't-2',
      name: 'Marcus Vance',
      degree: 'Bachelor of Engineering (Honours) in Software',
      gradYear: 'Class of 2022',
      currentRole: 'Senior Cloud Systems Architect',
      company: 'Atlassian',
      quote: 'The Industry-Based Learning (IBL) scholarship placed me into an enterprise software team while studying. I had three full-time job offers six months before my graduation ceremony.',
      avatarUrl: '/assets/edu-tech-university/testimonial-2.jpg',
      location: 'Sydney, Australia'
    },
    {
      id: 't-3',
      name: 'Aisha Al-Mansoor',
      degree: 'Bachelor of Pharmacy (Honours) / Master of Pharmacy',
      gradYear: 'Class of 2024',
      currentRole: 'Clinical Trial Specialist',
      company: 'CSL Behring',
      quote: 'Studying at the Parkville campus, ranked #2 in the world for Pharmacy, meant learning from the scientists who developed life-saving inhaled medicines. The facilities are unmatched.',
      avatarUrl: '/assets/edu-tech-university/testimonial-3.jpg',
      location: 'Melbourne / Dubai'
    },
    {
      id: 't-4',
      name: 'David Chen',
      degree: 'Bachelor of Commerce & Bachelor of Laws (Double Degree)',
      gradYear: 'Class of 2021',
      currentRole: 'Corporate M&A Solicitor',
      company: 'King & Wood Mallesons',
      quote: 'The Monash Law Clinics gave me real courtroom and client advocacy experience before I even passed the bar. That practical edge made all the difference in joining a top-tier law firm.',
      avatarUrl: '/assets/edu-tech-university/testimonial-4.jpg',
      location: 'Melbourne, Australia'
    },
    {
      id: 't-5',
      name: 'Elena Rostova',
      degree: 'Master of Artificial Intelligence',
      gradYear: 'Class of 2024',
      currentRole: 'Research Scientist — Multimodal Learning',
      company: 'Google DeepMind',
      quote: 'The faculty’s researchers are globally recognized contributors to NeurIPS and ICML. The compute clusters and mentorship directly supported my published thesis on neural vision architectures.',
      avatarUrl: '/assets/edu-tech-university/testimonial-5.jpg',
      location: 'London, UK'
    },
    {
      id: 't-6',
      name: 'Kavita Patel',
      degree: 'Bachelor of Design (Industrial Design)',
      gradYear: 'Class of 2023',
      currentRole: 'Lead Product Designer',
      company: 'Dyson Research Labs',
      quote: 'The Maker Space at MADA provided 24/7 access to 5-axis CNC mills and laser sintering. Our graduate design exhibition was visited by creative directors from across the globe.',
      avatarUrl: '/assets/edu-tech-university/testimonial-6.jpg',
      location: 'Singapore'
    }
  ] as ETUTestimonial[],

  faqs: [
    {
      category: 'Admissions',
      question: 'How do domestic and international students apply for 2026 entry?',
      answer: 'Victorian Year 12 and domestic undergraduate students apply through VTAC (Victorian Tertiary Admissions Centre). International students and postgraduate coursework applicants can apply directly online through our admissions portal with zero application fees. Direct applications are processed within 10-15 business days.'
    },
    {
      category: 'Admissions',
      question: 'What are the main intake dates for the 2026 academic year?',
      answer: 'Edu Tech University operates on a two-semester calendar. Semester 1 commences in late February 2026 (Orientation Week mid-February). Semester 2 commences in late July 2026. Certain postgraduate degrees also offer Summer and Winter term entry.'
    },
    {
      category: 'International',
      question: 'What are the English language proficiency requirements for international entry?',
      answer: 'Most undergraduate and postgraduate programs require an overall IELTS (Academic) band score of 6.5 with no band less than 6.0 (or equivalent TOEFL iBT 79, PTE Academic 58). Specialized degrees like Medicine, Law, and Pharmacy require IELTS 7.0 to 7.5.'
    },
    {
      category: 'International',
      question: 'Does the university provide visa assistance and student accommodation?',
      answer: 'Yes. Upon accepting your unconditional offer and paying the initial deposit, an electronic Confirmation of Enrolment (eCoE) is issued immediately for your Student Visa (Subclass 500) application. On-campus residential colleges house over 3,200 students with dedicated support, meals, and academic tutorials.'
    },
    {
      category: 'Scholarships',
      question: 'Are scholarships automatically awarded or do I need to submit a separate application?',
      answer: 'The International Study Excellence Scholarship ($10,000 AUD/year) is automatically assessed upon application based on your secondary or undergraduate transcripts. Premium awards such as the International Leadership Scholarship (100% tuition waiver) require a separate 500-word personal statement and leadership portfolio.'
    },
    {
      category: 'Campus Life',
      question: 'Can I study part of my degree at overseas campuses or partner universities?',
      answer: 'Yes! The Edu Tech Global Intercampus Exchange program allows Melbourne students to spend one or two semesters at our Malaysia or Indonesia campuses while paying regular domestic fees. We also partner with over 165 premier institutions worldwide for semester abroad exchanges.'
    },
    {
      category: 'Research',
      question: 'What support is available for PhD and Masters by Research candidates?',
      answer: 'Graduate research candidates receive full-tuition research training scholarships, living stipends of up to $35,000 AUD per year tax-free, conference travel travel funds, and dedicated research supervision from leading Go8 faculty.'
    }
  ] as ETUFaq[]
};
