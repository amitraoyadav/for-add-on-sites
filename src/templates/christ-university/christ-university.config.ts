/**
 * CHRIST (Deemed to be University) — Authoritative Structured Data & Configuration
 * Recreated faithfully for CHRIST (Deemed to be University) (https://www.christuniversity.in/)
 * Motto: "Excellence and Service" | Founded 1969 by Carmelites of Mary Immaculate (CMI)
 * NAAC Grade 'A+' Accredited | NIRF Top 60 Ranked | Multi-Campus Ecosystem
 */

export interface SchoolItem {
  id: string;
  name: string;
  shortCode: string;
  dean: string;
  campuses: string[];
  description: string;
  keyStats: {
    programsCount: number;
    facultyCount: number;
    studentsEnrolled: number;
  };
  highlightFeatures: string[];
}

export interface ProgramItem {
  id: string;
  schoolId: string;
  title: string;
  degreeLevel: 'Undergraduate' | 'Postgraduate' | 'Doctoral';
  duration: string;
  campuses: string[];
  eligibility: string;
  selectionMode: 'CUET + MP + PI + SA' | 'National Entrance (CAT/XAT/MAT)' | 'Direct Merit / Audition';
  annualFeeINR: string;
  careerRoles: string[];
  curriculumOverview: string[];
}

export interface CampusItem {
  id: string;
  name: string;
  city: string;
  tagline: string;
  establishedYear: number;
  areaAcres: string;
  address: string;
  schoolsHoused: string[];
  facilities: string[];
  image: string;
}

export const CHRIST_CONFIG = {
  institution: {
    name: 'CHRIST (Deemed to be University)',
    shortName: 'CHRIST',
    motto: 'Excellence and Service',
    founded: 1969,
    deemedStatusYear: 2008,
    founderHeritage: 'Carmelites of Mary Immaculate (CMI) Fathers',
    chancellor: 'Rev. Dr. Thomas C. Mathew (Emeritus) / Rev. Fr. Jose CC',
    viceChancellor: 'Dr. Fr. Joseph CC',
    headquartersCity: 'Bengaluru, Karnataka, India',
    officialUrl: 'https://www.christuniversity.in/',
    accreditations: [
      {
        body: 'NAAC',
        grade: "Grade 'A+'",
        description: 'Accredited with Grade A+ by the National Assessment and Accreditation Council',
        cycle: '4th Cycle'
      },
      {
        body: 'NIRF',
        grade: 'Top 60 University',
        description: 'Consistently ranked among the top 60 universities in India by Ministry of Education',
        cycle: '2024-2025'
      },
      {
        body: 'UGC',
        grade: 'Category I Deemed University',
        description: 'Recognized under Section 3 of UGC Act, 1956',
        cycle: 'Autonomy'
      },
      {
        body: 'BCI & COA',
        grade: 'Approved Legal & Architectural Curricula',
        description: 'Bar Council of India & Council of Architecture statutory recognitions',
        cycle: 'Full Statutory Approval'
      }
    ],
    stats: {
      totalStudents: '38,000+',
      nationalities: '70+',
      facultyCount: '1,400+',
      alumniGlobal: '120,000+',
      totalPrograms: '250+',
      recruitersAnnual: '450+',
      highestPlacementCTC: '₹21.46 LPA',
      averagePlacementCTC: '₹10.50 LPA',
      campusesCount: 6
    }
  },

  campuses: [
    {
      id: 'bangalore-central',
      name: 'Bangalore Central Campus',
      city: 'Bengaluru, Karnataka',
      tagline: 'The Historic Cradle of Academic Excellence & Cultural Vitality',
      establishedYear: 1969,
      areaAcres: '25+ Acres',
      address: 'Hosur Road, Bhavani Nagar, S.G. Palya, Bengaluru - 560029',
      schoolsHoused: [
        'School of Business and Management',
        'School of Commerce, Finance & Accountancy',
        'School of Law',
        'School of Arts & Humanities',
        'School of Social Sciences',
        'School of Sciences'
      ],
      facilities: [
        'Auditorium Block (Main, Christ Hall, KE Hall)',
        'Knowledge Centre Central Library with 300,000+ volumes',
        'Moot Court Hall & Legal Aid Clinic',
        'Bird Sanctuary & Lush Botanical Gardens',
        'Gourmet Cafeterias & Student Eateries',
        'Multi-court Indoor Sports Pavilion'
      ],
      image: '/assets/christ-university/campus-main.jpg'
    },
    {
      id: 'bangalore-kengeri',
      name: 'Bangalore Kengeri Campus',
      city: 'Bengaluru, Karnataka',
      tagline: 'Eco-Friendly Tech Hub for Engineering, Architecture & Management',
      establishedYear: 2004,
      areaAcres: '75+ Acres',
      address: 'Kanminike, Kumbalgodu, Mysore Road, Bengaluru - 560074',
      schoolsHoused: [
        'School of Engineering & Technology',
        'School of Architecture',
        'School of Business & Management (MBA Wings)',
        'School of Social Sciences (Psychology)'
      ],
      facilities: [
        'Advanced Robotics, IoT, and AI Computing Labs',
        'Design Studios and Model Making Workshops',
        'Olympic-sized Swimming Pool & Cricket Grounds',
        'Residential Hostels with serene lake view',
        'Innovation and Incubation Cell'
      ],
      image: '/assets/christ-university/campus-hero-1.jpg'
    },
    {
      id: 'bangalore-bannerghatta',
      name: 'Bangalore Bannerghatta Road Campus',
      city: 'Bengaluru, Karnataka',
      tagline: 'The Contemporary Interdisciplinary Liberal Arts & Business Sanctuary',
      establishedYear: 2016,
      areaAcres: 'Contemporary Urban Campus',
      address: 'Hulimavu, Bannerghatta Road, Bengaluru - 560076',
      schoolsHoused: [
        'School of Arts & Humanities',
        'School of Business and Management (BBA Honours)',
        'School of Social Sciences (Economics & English)'
      ],
      facilities: [
        'State-of-the-art Amphitheatres & Lecture Pods',
        'Language Laboratories & Media Editing Suites',
        'Bloomberg Terminals for Finance & Analytics',
        'Rooftop Green Terrains and Creative Lounges'
      ],
      image: '/assets/christ-university/campus-hero-2.jpg'
    },
    {
      id: 'bangalore-yeshwanthpur',
      name: 'Bangalore Yeshwanthpur Campus',
      city: 'Bengaluru, Karnataka',
      tagline: 'Cutting-Edge Multi-Faculty Urban Center for High-Tech Innovations',
      establishedYear: 2022,
      areaAcres: 'Modern Multi-Story Complex',
      address: 'Nagasandra, Near Metro Station, Tumkur Road, Bengaluru - 560073',
      schoolsHoused: [
        'School of Sciences (Data Science, AI, Computing)',
        'School of Commerce, Finance and Accountancy',
        'School of Business and Management',
        'School of Psychological Sciences'
      ],
      facilities: [
        'Direct Metro Connectivity with elevated walkway',
        'Cloud Computing & Cybersecurity Hubs',
        'Modern Experiential Learning Studios',
        'Multi-cuisine Food Court and Fitness Arenas'
      ],
      image: '/assets/christ-university/campus-labs.jpg'
    },
    {
      id: 'delhi-ncr',
      name: 'Delhi NCR Campus',
      city: 'Ghaziabad, Uttar Pradesh (Delhi NCR)',
      tagline: 'The Capital Gateway to Legal Eminence, Management & Humanities',
      establishedYear: 2019,
      areaAcres: 'Serene Residential Campus',
      address: 'Mariam Nagar, Meerut Road, Delhi NCR, Ghaziabad - 201003',
      schoolsHoused: [
        'School of Law',
        'School of Business and Management',
        'School of Commerce & Accountancy',
        'School of Arts & Social Sciences'
      ],
      facilities: [
        'High-Court Simulated Moot Court Arenas',
        'Corporate Executive Boardrooms & Case Discussion Rooms',
        'Central Digital Library and Legal Database Archives',
        'Comprehensive On-Campus Student Residences'
      ],
      image: '/assets/christ-university/campus-auditorium.jpg'
    },
    {
      id: 'pune-lavasa',
      name: 'Pune Lavasa Campus',
      city: 'Lavasa, Pune, Maharashtra',
      tagline: 'The Hub of Analytics Nestled in the Sahyadri Mountain Valley',
      establishedYear: 2014,
      areaAcres: 'Mountain Valley Lakeside Campus',
      address: 'Christ University Road, 30 Valor Court, Dasve, Lavasa, Pune - 412112',
      schoolsHoused: [
        'School of Sciences (Data Science & Machine Learning)',
        'School of Business and Management (Business Analytics)',
        'School of Commerce (Financial Analytics)',
        'School of Law'
      ],
      facilities: [
        'High-Performance Supercomputing Labs',
        'Quantitative Financial Modeling Suites',
        'Scenic Lakeside Learning Amphitheatres',
        'Trekking, Sports, and Outdoor Leadership Trails'
      ],
      image: '/assets/christ-university/campus-sports.jpg'
    }
  ] as CampusItem[],

  schools: [
    {
      id: 'school-of-business',
      name: 'School of Business and Management',
      shortCode: 'SBM',
      dean: 'Dr. Jain Mathew',
      campuses: ['Bangalore Central', 'Bangalore Kengeri', 'Bangalore BGR', 'Bangalore Yeshwanthpur', 'Delhi NCR', 'Pune Lavasa'],
      description: 'One of India’s top-ranked business education institutions, nurturing ethical leaders, entrepreneurs, and finance consultants through experiential case study pedagogy and corporate immersion.',
      keyStats: {
        programsCount: 16,
        facultyCount: 220,
        studentsEnrolled: 8400
      },
      highlightFeatures: [
        'Dual specialization options in Marketing, Finance, HR, Lean Operations, and Business Analytics',
        'AACSB member institution with strong international academic partnerships with 80+ universities',
        'Capstone corporate consulting internships and incubation support through Christ Incubation Centre',
        '100% placement track record with average package exceeding ₹10.50 LPA'
      ]
    },
    {
      id: 'school-of-law',
      name: 'School of Law (SLCU)',
      shortCode: 'SLCU',
      dean: 'Dr. Jayadevan S.',
      campuses: ['Bangalore Central', 'Delhi NCR', 'Pune Lavasa'],
      description: 'Approved by the Bar Council of India, SLCU is recognized among the premier law schools in India for clinical legal education, international moot court accolades, and policy research.',
      keyStats: {
        programsCount: 8,
        facultyCount: 110,
        studentsEnrolled: 3200
      },
      highlightFeatures: [
        'Consistently ranks in top 15 law schools nationally in NIRF Law Rankings',
        'Over 30 national and international moot court championship titles including Jessup and Stetson',
        'Fully air-conditioned judicial moot courts and Legal Aid Clinics serving local communities',
        'Specialized LLM programs in Corporate Law, Constitutional Law, and Intellectual Property Rights'
      ]
    },
    {
      id: 'school-of-engineering',
      name: 'School of Engineering & Technology',
      shortCode: 'SET',
      dean: 'Dr. Iven Jose',
      campuses: ['Bangalore Kengeri'],
      description: 'Empowering future-ready engineers through multidisciplinary research, AI and Robotics labs, sustainable green technology initiatives, and international co-op programs.',
      keyStats: {
        programsCount: 18,
        facultyCount: 160,
        studentsEnrolled: 4500
      },
      highlightFeatures: [
        'AICTE-approved undergraduate and postgraduate engineering curricula',
        'Specialized research centers in AI & Deep Learning, Advanced Materials, and Electric Mobility',
        'Collaboration with Bosch, Intel, Texas Instruments, and AWS Academy',
        'Patent portfolio exceeding 120+ published and granted university patents'
      ]
    },
    {
      id: 'school-of-commerce',
      name: 'School of Commerce, Finance & Accountancy',
      shortCode: 'SCFA',
      dean: 'Dr. Tomy K. Kallarakal',
      campuses: ['Bangalore Central', 'Bangalore BGR', 'Bangalore Yeshwanthpur', 'Delhi NCR', 'Pune Lavasa'],
      description: 'Renowned nationwide for producing world-class Chartered Accountants, Financial Analysts, Investment Bankers, and FinTech specialists accredited by ACCA, CIMA, and ICAI.',
      keyStats: {
        programsCount: 14,
        facultyCount: 180,
        studentsEnrolled: 7200
      },
      highlightFeatures: [
        'Integrated ACCA (UK) and CIMA exemptions embedded within BCom curricula',
        'State-of-the-art Bloomberg Financial Markets Laboratory',
        'Top recruiter destinations: Goldman Sachs, Morgan Stanley, J.P. Morgan, Deloitte, EY, KPMG',
        'Annual Commerce Fest "Prayas" attracting nationwide participation'
      ]
    },
    {
      id: 'school-of-sciences',
      name: 'School of Sciences',
      shortCode: 'SoS',
      dean: 'Dr. George Thomas',
      campuses: ['Bangalore Central', 'Bangalore Yeshwanthpur', 'Pune Lavasa'],
      description: 'Pioneering scientific discovery across Computational Data Science, Artificial Intelligence, Biotechnology, Chemistry, Mathematics, and Physics with high-impact funded research.',
      keyStats: {
        programsCount: 22,
        facultyCount: 145,
        studentsEnrolled: 4200
      },
      highlightFeatures: [
        'DST-FIST supported laboratories with state-of-the-art instrumentation',
        'Specialized Data Science, Big Data Analytics, and Bioinformatics research wings',
        'Summer research fellowships with IISc, TIFR, and international laboratories',
        'Center for Advanced Research in Molecular Biology and Green Chemistry'
      ]
    },
    {
      id: 'school-of-arts-humanities',
      name: 'School of Arts & Humanities',
      shortCode: 'SAH',
      dean: 'Dr. John Joseph Kennedy',
      campuses: ['Bangalore Central', 'Bangalore BGR', 'Bangalore Yeshwanthpur'],
      description: 'Nurturing creative minds in English Literature, Performing Arts, Media Studies, Theatre, Cultural Studies, and Foreign Languages with celebrated literary and artistic festivals.',
      keyStats: {
        programsCount: 15,
        facultyCount: 130,
        studentsEnrolled: 3600
      },
      highlightFeatures: [
        'Home to the celebrated Christ University Choir and Symphony Orchestra',
        'Annual In-Bloom Cultural Fest and Natyarpana National Dance Festival',
        'Professional sound recording studios and digital broadcasting suites',
        'Faculty published in leading Oxford and Cambridge University Press journals'
      ]
    },
    {
      id: 'school-of-social-sciences',
      name: 'School of Social Sciences',
      shortCode: 'SSS',
      dean: 'Dr. Tony Sam George',
      campuses: ['Bangalore Central', 'Bangalore BGR', 'Bangalore Kengeri', 'Delhi NCR'],
      description: 'A national benchmark in Psychology, Economics, International Relations, Political Science, and Social Work with clinical mental health centers and public policy initiatives.',
      keyStats: {
        programsCount: 17,
        facultyCount: 140,
        studentsEnrolled: 4100
      },
      highlightFeatures: [
        'Centre for Counselling and Health Services providing psycho-social support',
        'Centre for Social Action (CSA) driving grassroots development projects',
        'World Bank and United Nations aligned public policy simulation conferences',
        'Renowned MSc and PhD clinical and organizational psychology tracks'
      ]
    },
    {
      id: 'school-of-architecture',
      name: 'School of Architecture',
      shortCode: 'SoA',
      dean: 'Prof. Vidya Srikanth',
      campuses: ['Bangalore Kengeri'],
      description: 'Approved by the Council of Architecture, inspiring sustainable urbanism, climate-responsive architectural design, and digital parametric craftsmanship in a green campus sanctuary.',
      keyStats: {
        programsCount: 4,
        facultyCount: 45,
        studentsEnrolled: 680
      },
      highlightFeatures: [
        'Hands-on carpentry, metal fabrication, and digital 3D fabrication labs',
        'Annual architectural design expeditions and heritage documentation studios',
        'Focus on Vernacular and Climate-Responsive Architecture of Southern India',
        'Recognized with multiple NASA (National Association of Students of Architecture) awards'
      ]
    },
    {
      id: 'school-of-education',
      name: 'School of Education',
      shortCode: 'SoE',
      dean: 'Dr. Greta D’Souza',
      campuses: ['Bangalore Central'],
      description: 'Transforming pedagogical practice through innovative educational psychology, digital learning methodologies, and teacher leadership programs recognized by NCTE.',
      keyStats: {
        programsCount: 6,
        facultyCount: 30,
        studentsEnrolled: 520
      },
      highlightFeatures: [
        'NCTE accredited Bachelor of Education (B.Ed.) with 100% campus placement in top international schools',
        'Interactive Smart Classroom and Micro-teaching Laboratories',
        'Community school internships and inclusive education initiatives',
        'Action research projects in digital literacy and child psychology'
      ]
    }
  ] as SchoolItem[],

  programs: [
    {
      id: 'bba-honours',
      schoolId: 'school-of-business',
      title: 'Bachelor of Business Administration (BBA Honours)',
      degreeLevel: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      campuses: ['Bangalore Central', 'Bangalore BGR', 'Bangalore Yeshwanthpur', 'Delhi NCR', 'Pune Lavasa'],
      eligibility: '10+2 / Pre-University Examination in any stream with minimum 60% aggregate marks.',
      selectionMode: 'CUET + MP + PI + SA',
      annualFeeINR: '₹2,65,000',
      careerRoles: ['Management Trainee', 'Investment Analyst', 'Strategy Consultant', 'Product Associate'],
      curriculumOverview: ['Financial Accounting', 'Organizational Behavior', 'Marketing Management', 'Business Analytics with Python', 'Strategic Leadership', 'International Business']
    },
    {
      id: 'mba-flagship',
      schoolId: 'school-of-business',
      title: 'Master of Business Administration (MBA)',
      degreeLevel: 'Postgraduate',
      duration: '2 Years (Trimester / Semester System)',
      campuses: ['Bangalore Central', 'Bangalore Kengeri', 'Delhi NCR', 'Pune Lavasa'],
      eligibility: 'Bachelor degree in any discipline with minimum 50% aggregate marks + Valid CAT/XAT/MAT/CMAT/GMAT score.',
      selectionMode: 'National Entrance (CAT/XAT/MAT)',
      annualFeeINR: '₹4,85,000',
      careerRoles: ['Senior Consultant', 'Brand Manager', 'Risk Advisory Analyst', 'Supply Chain Strategist'],
      curriculumOverview: ['Corporate Governance', 'Financial Econometrics', 'Digital Marketing Dynamics', 'Operations Research', 'Global Supply Chain Management', 'Capstone Industry Project']
    },
    {
      id: 'ba-llb-honours',
      schoolId: 'school-of-law',
      title: 'BA LLB (Honours) — Integrated 5-Year Law',
      degreeLevel: 'Undergraduate',
      duration: '5 Years (10 Semesters)',
      campuses: ['Bangalore Central', 'Delhi NCR', 'Pune Lavasa'],
      eligibility: '10+2 examination from recognized board with minimum 45% aggregate (40% for SC/ST).',
      selectionMode: 'CUET + MP + PI + SA',
      annualFeeINR: '₹2,45,000',
      careerRoles: ['Litigation Counsel', 'Corporate Legal Advisor', 'Judicial Services', 'IPR Attorney'],
      curriculumOverview: ['Constitutional Law of India', 'Law of Contracts & Torts', 'Criminal Law & Procedure', 'Moot Court Exercises & Clinical Training', 'International Trade Law', 'Cyber Law']
    },
    {
      id: 'bcom-finance-accountancy',
      schoolId: 'school-of-commerce',
      title: 'BCom (Finance and Accountancy) — Integrated with ACCA / CIMA',
      degreeLevel: 'Undergraduate',
      duration: '3 / 4 Years (Honours)',
      campuses: ['Bangalore Central', 'Bangalore Yeshwanthpur'],
      eligibility: '10+2 examination in Commerce / Science stream with minimum 60% aggregate marks.',
      selectionMode: 'CUET + MP + PI + SA',
      annualFeeINR: '₹2,10,000',
      careerRoles: ['Auditor', 'Financial Analyst', 'Tax Advisory Consultant', 'Cost Accountant'],
      curriculumOverview: ['Advanced Corporate Accounting', 'Financial Reporting (IFRS)', 'Taxation Laws & Practice', 'Auditing & Assurance', 'Corporate Financial Management', 'FinTech Analytics']
    },
    {
      id: 'btech-computer-science',
      schoolId: 'school-of-engineering',
      title: 'BTech in Computer Science and Engineering (AI & ML)',
      degreeLevel: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      campuses: ['Bangalore Kengeri'],
      eligibility: 'Passed 10+2 with Physics and Mathematics with minimum 50% marks in aggregate.',
      selectionMode: 'CUET + MP + PI + SA',
      annualFeeINR: '₹2,35,000',
      careerRoles: ['AI/ML Engineer', 'Full-Stack Developer', 'Cloud Architect', 'Cybersecurity Specialist'],
      curriculumOverview: ['Data Structures & Algorithms', 'Machine Learning Foundations', 'Deep Learning & Neural Networks', 'Distributed Cloud Computing', 'Computer Vision & NLP', 'Capstone Engineering Thesis']
    },
    {
      id: 'bsc-data-science',
      schoolId: 'school-of-sciences',
      title: 'BSc (Data Science and Artificial Intelligence)',
      degreeLevel: 'Undergraduate',
      duration: '3 / 4 Years (Honours)',
      campuses: ['Bangalore Central', 'Bangalore Yeshwanthpur', 'Pune Lavasa'],
      eligibility: '10+2 with Mathematics / Statistics / Computer Science as a core subject with minimum 55% marks.',
      selectionMode: 'CUET + MP + PI + SA',
      annualFeeINR: '₹1,95,000',
      careerRoles: ['Data Scientist', 'Business Intelligence Developer', 'Quantitative Modeler', 'Research Analyst'],
      curriculumOverview: ['Probability & Mathematical Statistics', 'Python & R for Data Science', 'Big Data Technologies (Hadoop & Spark)', 'Predictive Modeling', 'Time Series Forecasting', 'AI Ethics']
    },
    {
      id: 'msc-psychology-clinical',
      schoolId: 'school-of-social-sciences',
      title: 'MSc in Clinical Psychology',
      degreeLevel: 'Postgraduate',
      duration: '2 Years (4 Semesters)',
      campuses: ['Bangalore Central', 'Bangalore Kengeri', 'Delhi NCR'],
      eligibility: 'Undergraduate degree with Psychology as core/major paper with minimum 50% marks.',
      selectionMode: 'CUET + MP + PI + SA',
      annualFeeINR: '₹1,85,000',
      careerRoles: ['Clinical Psychologist', 'Psychotherapist', 'Healthcare Counselor', 'Neuropsychology Researcher'],
      curriculumOverview: ['Psychopathology & Diagnosis (DSM-5)', 'Psychological Assessment & Testing', 'Psychotherapy & Counseling Interventions', 'Neurobiology of Behavior', 'Clinical Hospital Practicum', 'Dissertation']
    },
    {
      id: 'barch-architecture',
      schoolId: 'school-of-architecture',
      title: 'Bachelor of Architecture (BArch)',
      degreeLevel: 'Undergraduate',
      duration: '5 Years (10 Semesters)',
      campuses: ['Bangalore Kengeri'],
      eligibility: '10+2 with 50% marks in Physics, Chemistry & Math + Valid NATA Score or JEE Main Paper 2 score.',
      selectionMode: 'Direct Merit / Audition',
      annualFeeINR: '₹2,90,000',
      careerRoles: ['Architect', 'Urban Planner', 'Landscape Architect', 'Sustainable Design Consultant'],
      curriculumOverview: ['Architectural Design Studios I-X', 'Building Construction & Materials', 'History of World & Indian Architecture', 'Climatology & Sustainable Design', 'Structural Mechanics', 'Professional Practice & Internship']
    }
  ] as ProgramItem[],

  placements: {
    highestCTC: '₹21.46 LPA',
    averageCTC: '₹10.50 LPA',
    medianCTC: '₹8.75 LPA',
    totalOffers: '3,800+',
    totalRecruiters: '450+',
    dreamOffersAbove15LPA: '420+',
    topRecruitersBySector: [
      {
        sector: 'Consulting & Strategy',
        companies: ['Deloitte USI', 'Ernst & Young (EY)', 'KPMG', 'PwC', 'Boston Consulting Group', 'Bain Capability Network', 'McKinsey & Co (Knowledge Center)']
      },
      {
        sector: 'Banking & Financial Services (BFSI)',
        companies: ['Goldman Sachs', 'Morgan Stanley', 'J.P. Morgan Chase', 'HSBC Global', 'Bank of America', 'Citi Corp', 'Wells Fargo', 'Standard Chartered']
      },
      {
        sector: 'Technology & Product',
        companies: ['Amazon', 'Microsoft', 'Cisco Systems', 'SAP Labs', 'Oracle', 'Intel', 'Texas Instruments', 'Salesforce', 'Cognizant']
      },
      {
        sector: 'FMCG, Retail & Healthcare',
        companies: ['Unilever', 'Nestle India', 'Procter & Gamble', 'ITC Limited', 'Titan Company', 'Novartis', 'Biocon']
      }
    ]
  },

  culturalTraditions: [
    {
      name: 'In-Bloom',
      tagline: 'The Premier National Collegiate Cultural Extravaganza',
      season: 'Annual — February',
      description: 'The crowning glory of cultural excellence in South India. Over 15,000 participants from 250+ institutions compete in theatre, contemporary choreography, western and eastern acoustic music, fine arts, and literary events.',
      badge: 'National Cultural Fest'
    },
    {
      name: 'Bhasha Utsav & Ethnic Day',
      tagline: 'Celebration of Linguistic Pluralism and Indian Heritage',
      season: 'Annual — September',
      description: 'The campus erupts in an awe-inspiring kaleidoscope of traditional attire, dhols, Chenda Melam, Garba, Bhangra, and regional folk dances celebrating the linguistic tapestry of 38,000 students.',
      badge: 'Signature Tradition'
    },
    {
      name: 'Natyarpana',
      tagline: 'All India Classical Dance Ensemble',
      season: 'Annual — October',
      description: 'Dedicated to preserving classical Indian dance heritage. Prodigious exponents and university ensembles present Bharatanatyam, Kathak, Odissi, Kuchipudi, and Mohiniyattam in grand aesthetic devotion.',
      badge: 'Classical Arts Fest'
    },
    {
      name: 'University Choir & Symphony Orchestra',
      tagline: 'Magnificent Choral Harmony and Orchestral Grandeur',
      season: 'Year-round & Christmas Season',
      description: 'Recognized nationally as one of India’s finest collegiate musical ensembles, delivering majestic sacred and classical compositions with 100+ harmonized choristers and full orchestra.',
      badge: 'Musical Heritage'
    }
  ],

  cuetAdmissions: {
    headline: 'Christ University Entrance Test (CUET) 2026-2027',
    subheadline: 'Your pathway to excellence at CHRIST campuses across India',
    steps: [
      {
        step: 1,
        title: 'Online Application Submission',
        detail: 'Register at the official portal, select preferred campus and course, upload Class 10 & 12 marksheets, and submit application fee (₹1,500).'
      },
      {
        step: 2,
        title: 'Entrance Test (CUET)',
        detail: 'Take the online proctored or test-center based CUET covering English language proficiency, logical reasoning, numerical ability, and domain specific questions (90-120 mins).'
      },
      {
        step: 3,
        title: 'Micro Presentation (MP)',
        detail: 'Speak extempore for 90 seconds on a randomly allotted topic in front of the interview panel to demonstrate clarity, critical thinking, and communication poise.'
      },
      {
        step: 4,
        title: 'Personal Interview & Skill Assessment (PI & SA)',
        detail: 'Engage with senior university faculty and industry experts on academic foundations, current events, goals, and written skill assessment.'
      },
      {
        step: 5,
        title: 'Offer Letter & Enrollment',
        detail: 'Selected candidates receive admission offer letters on their registered portal with prompt online fee payment confirmation and document verification.'
      }
    ],
    importantDates: [
      { event: 'Session I Applications Open', date: 'December 2025' },
      { event: 'Session I Entrance Test & Interviews', date: 'March 2026' },
      { event: 'Session II Applications Deadline', date: 'April 2026' },
      { event: 'Session II Entrance Test & Interviews', date: 'May 2026' },
      { event: 'Academic Session Commences', date: 'July 2026' }
    ]
  },

  testimonials: [
    {
      name: 'Ananya Deshpande',
      program: 'BBA (Honours), Central Campus (Class of 2024)',
      role: 'Investment Banking Analyst at Goldman Sachs',
      quote: 'CHRIST instilled in me both the technical rigor to excel in high-stakes financial analysis and the ethical compass to lead with integrity. The campus life, festivals, and mentorship are unforgettable.',
      image: '/assets/christ-university/testimonial-1.jpg'
    },
    {
      name: 'Rohan V. Nair',
      program: 'BA LLB (Honours), SLCU (Class of 2023)',
      role: 'Associate at Shardul Amarchand Mangaldas & Co.',
      quote: 'Representing CHRIST at national moot courts across India shaped my courtroom advocacy. The legal aid clinic and eminent faculty cultivate genuine legal scholarship from day one.',
      image: '/assets/christ-university/testimonial-2.jpg'
    },
    {
      name: 'Sneha Roy Chowdhury',
      program: 'BSc (Data Science & AI), Lavasa Campus (Class of 2024)',
      role: 'Machine Learning Engineer at Amazon AWS',
      quote: 'The serene mountain environment of Lavasa paired with high-performance GPU supercomputing infrastructure created the perfect setting for deep research into neural networks and predictive modeling.',
      image: '/assets/christ-university/testimonial-3.jpg'
    },
    {
      name: 'Mohammed Tariq',
      program: 'BTech Computer Science, Kengeri Campus (Class of 2024)',
      role: 'Cloud Systems Engineer at Cisco Systems',
      quote: 'The multidisciplinary clubs, green 75-acre Kengeri campus, and hands-on laboratory ecosystem gave me an edge during campus recruitments. CHRIST prepares you for real-world engineering challenges.',
      image: '/assets/christ-university/testimonial-4.jpg'
    }
  ],

  faqs: [
    {
      question: 'What is the selection process for Undergraduate programs at CHRIST University?',
      answer: 'Selection for most undergraduate programs is based on the Christ University Entrance Test (CUET), followed by a Micro Presentation (MP), Personal Interview (PI), and Skill Assessment (SA). For programs like BArch, scores from NATA / JEE Main Paper 2 are required.'
    },
    {
      question: 'Can I apply for the same program across multiple CHRIST campuses?',
      answer: 'Yes! In your single online application, you can prioritize your campus choices (e.g. 1st Choice: Bangalore Central, 2nd Choice: Bangalore Bannerghatta, 3rd Choice: Delhi NCR). Selection is considered based on your merit rank and campus seat availability.'
    },
    {
      question: 'What national accreditations and rankings does CHRIST University possess?',
      answer: 'CHRIST (Deemed to be University) is accredited with Grade "A+" by NAAC (4th Cycle) and ranks in the Top 60 universities in India under the NIRF rankings by the Ministry of Education. Its Law and Management schools consistently rank among the Top 15 and Top 30 in their respective domains.'
    },
    {
      question: 'What are the hostel and residential accommodation facilities?',
      answer: 'Dedicated on-campus student residences are available at Kengeri, Delhi NCR, and Pune Lavasa campuses with modern amenities, study halls, high-speed Wi-Fi, and nutritious mess facilities. At Central and Bannerghatta campuses, university-approved hostels and residences are situated within walking distance.'
    },
    {
      question: 'Are there scholarship opportunities for meritorious students?',
      answer: 'Yes. CHRIST University offers Merit Scholarships, Financial Aid Concessions for underprivileged students, and Excellence in Sports and Cultural Arts Scholarships awarded during each academic year.'
    }
  ]
};
