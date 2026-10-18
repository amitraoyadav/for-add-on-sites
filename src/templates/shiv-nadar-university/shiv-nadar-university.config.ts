/**
 * Shiv Nadar University — Authoritative Structured Data & Configuration
 * Recreated faithfully for Shiv Nadar University (https://snu.edu.in/home/)
 * Motto: "Education for Life" | Founded 2011 by Shiv Nadar Foundation
 * Recognition: Institution of Eminence (IoE) Deemed to be University
 * NIRF Top 60 Universities | 286-Acre Residential Research Campus in Delhi-NCR
 */

export interface SchoolItem {
  id: string;
  name: string;
  shortCode: string;
  dean: string;
  departments: string[];
  description: string;
  keyStats: {
    programsCount: number;
    facultyCount: number;
    phdScholars: number;
    researchGrantsCrores: number;
  };
  highlightFeatures: string[];
}

export interface ProgramItem {
  id: string;
  schoolId: string;
  title: string;
  degreeLevel: 'Undergraduate' | 'Postgraduate' | 'Doctoral';
  duration: string;
  department: string;
  eligibility: string;
  admissionRoutes: string[];
  annualFeeINR: string;
  careerRoles: string[];
  curriculumHighlights: string[];
  specializations?: string[];
}

export interface ResearchCenterItem {
  id: string;
  name: string;
  leadFaculty: string;
  focusArea: string;
  fundingBody: string;
  description: string;
  achievements: string[];
}

export interface ClubItem {
  id: string;
  name: string;
  category: 'Technical' | 'Cultural' | 'Sports' | 'Social & Leadership';
  description: string;
  leadActivity: string;
}

export const SNU_CONFIG = {
  institution: {
    name: 'Shiv Nadar University',
    shortName: 'SNU Delhi-NCR',
    legalStatus: 'Institution of Eminence Deemed to be University',
    motto: 'Education for Life',
    founded: 2011,
    foundingTrust: 'Shiv Nadar Foundation (Philanthropic Initiative of Shiv Nadar, Founder of HCL Technologies)',
    chancellor: 'Mr. Shikhar Malhotra',
    viceChancellor: 'Prof. Ananya Mukherjee',
    headquarters: 'NH91, Tehsil Dadri, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh 201314, India',
    campusArea: '286-Acre Fully Residential Campus',
    contactEmail: 'admissions@snu.edu.in',
    tollFreePhone: '1800-102-1768',
    portalUrl: 'https://snu.edu.in/home/',
    applicationPortal: 'https://snuadmissions.com/',
  },

  quickBadges: [
    { label: 'Institution of Eminence', detail: 'Awarded by Govt. of India', icon: 'Award', color: 'from-amber-500 to-rose-600' },
    { label: 'NIRF #57 in India', detail: 'Top Universities (8 Consecutive Years)', icon: 'TrendingUp', color: 'from-blue-600 to-indigo-700' },
    { label: 'QS Asia #336', detail: '#82 in Southern Asia 2026', icon: 'Globe', color: 'from-emerald-600 to-teal-700' },
    { label: 'NITI Aayog AIC-SNU', detail: '30+ Hardware & Tech Startups', icon: 'Rocket', color: 'from-purple-600 to-pink-600' },
    { label: '₹58.09 LPA Peak CTC', detail: '93% Placements (Google, DE Shaw)', icon: 'Briefcase', color: 'from-amber-600 to-orange-700' },
  ],

  stats: [
    { number: '286', label: 'Acres', sub: 'Eco-sustainable residential campus in NCR' },
    { number: '10:1', label: 'Student-Faculty Ratio', sub: 'Individual mentoring & research advising' },
    { number: '100%', label: 'PhD Faculty', sub: 'From top global & national institutions' },
    { number: '₹58.09', label: 'LPA Highest CTC', sub: 'Recent top tech offer (₹11.35 LPA Avg)' },
    { number: '3,200+', label: 'Scopus Publications', sub: 'High impact index & 150+ patents' },
    { number: 'OUR', label: 'Undergrad Research', sub: 'Direct funded grants for bachelor students' },
  ],

  schools: [
    {
      id: 'school-of-engineering',
      name: 'School of Engineering (SoE)',
      shortCode: 'SoE',
      dean: 'Prof. Sanjeev Agrawal',
      departments: [
        'Computer Science & Engineering',
        'Electrical & Computer Engineering',
        'Mechanical Engineering',
        'Chemical Engineering',
        'Civil Engineering',
      ],
      description:
        'The School of Engineering is focused on high-rigor, future-ready computing, robotics, clean energy, and advanced materials. With cutting-edge labs, dual-degree articulation with Arizona State University, and strong industry linkages.',
      keyStats: {
        programsCount: 14,
        facultyCount: 88,
        phdScholars: 240,
        researchGrantsCrores: 120,
      },
      highlightFeatures: [
        'Dual Degree BS Computer Science with Arizona State University (ASU)',
        'Specializations in AI & Machine Learning, Data Science, and Cyber Security',
        'State-of-the-art Cloud Computing, Mechatronics, Process Control, and Robotics Labs',
        'Hands-on capstone engineering design and OUR funded research projects',
      ],
    },
    {
      id: 'school-of-natural-sciences',
      name: 'School of Natural Sciences (SNS)',
      shortCode: 'SNS',
      dean: 'Prof. Parthapratim Munshi',
      departments: ['Chemistry', 'Physics', 'Mathematics', 'Life Sciences & Bioinformatics'],
      description:
        'A premier center for basic and translational sciences. SNS fosters fundamental discovery, pharmaceutical bio-design, quantum materials, mathematical modeling, and structural chemistry.',
      keyStats: {
        programsCount: 12,
        facultyCount: 56,
        phdScholars: 180,
        researchGrantsCrores: 95,
      },
      highlightFeatures: [
        'High-resolution NMR, Single Crystal X-Ray Diffractometer, and Cryo-TEM facility',
        'Cancer biology, neurobiology, and antimicrobial resistance research labs',
        'Four-year B.Sc. (Research) curricula aligned with NEP 2020',
        'Collaborations with Carnegie Mellon, Penn State, and Max Planck Institutes',
      ],
    },
    {
      id: 'school-of-humanities-social-sciences',
      name: 'School of Humanities and Social Sciences (SHSS)',
      shortCode: 'SHSS',
      dean: 'Prof. Rajeswari Sunder Rajan',
      departments: ['Economics', 'English', 'History', 'Sociology', 'Art & Media', 'International Relations'],
      description:
        'Developing critical thinkers, policy architects, and cultural creators. SHSS combines interdisciplinary social science inquiries with computational social methods and creative media.',
      keyStats: {
        programsCount: 10,
        facultyCount: 45,
        phdScholars: 95,
        researchGrantsCrores: 35,
      },
      highlightFeatures: [
        'Centre for Public Affairs and Critical Theory (C-PACT)',
        'Comprehensive B.A. (Research) in Economics, International Relations, and English',
        'Digital humanities laboratory and professional film/sound studio',
        'High placement records in policy think tanks, consulting firms, and academia',
      ],
    },
    {
      id: 'school-of-management-entrepreneurship',
      name: 'School of Management and Entrepreneurship (SME)',
      shortCode: 'SME',
      dean: 'Prof. Bibek Banerjee',
      departments: ['Business Management', 'Economics & Finance', 'Operations & Analytics', 'Entrepreneurship'],
      description:
        'SME prepares visionary entrepreneurs and corporate leaders through experiential learning, digital business modeling, global case method, and close integration with the Atal Incubation Centre.',
      keyStats: {
        programsCount: 8,
        facultyCount: 38,
        phdScholars: 65,
        researchGrantsCrores: 40,
      },
      highlightFeatures: [
        'Flagship Global MBA and Executive MBA for working professionals',
        'BMS (Bachelor of Management Studies) and B.Sc. in Economics & Finance',
        'Direct incubation pathway through AIC-SNU with seed funding up to ₹25 Lakhs',
        'Bloomberg Terminal lab and real-time financial markets simulation',
      ],
    },
    {
      id: 'academy-of-continuing-education',
      name: 'Academy of Continuing Education (ACE)',
      shortCode: 'ACE',
      dean: 'Prof. Rajiv Sharma',
      departments: ['Executive Tech', 'Data Science & AI', 'Business Leadership', 'Healthcare Management'],
      description:
        'Tailored upskilling programs for executives and working professionals in AI, Cloud, Leadership, FinTech, and Data Analytics in hybrid flexible formats.',
      keyStats: {
        programsCount: 6,
        facultyCount: 22,
        phdScholars: 15,
        researchGrantsCrores: 18,
      },
      highlightFeatures: [
        'Postgraduate Diploma in Data Science & Artificial Intelligence',
        'Executive certificate courses co-designed with top IT & consulting enterprises',
        'Weekend immersion modules on the Greater Noida campus',
      ],
    },
  ] as SchoolItem[],

  programs: [
    {
      id: 'prog-btech-cse',
      schoolId: 'school-of-engineering',
      title: 'B.Tech in Computer Science and Engineering',
      degreeLevel: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      department: 'Computer Science & Engineering',
      eligibility: '10+2 with Physics, Mathematics, Chemistry/CS with min 65% aggregate',
      admissionRoutes: ['SNUSAT + APT', 'JEE Main (Percentile > 88)', 'College Board SAT (1300+)', 'CUET-UG'],
      annualFeeINR: '₹4,25,000',
      careerRoles: ['AI/ML Engineer', 'Full-Stack Architect', 'Quantitative Developer', 'Cloud Systems Specialist'],
      curriculumHighlights: [
        'Data Structures & Advanced Algorithms',
        'Artificial Intelligence & Machine Learning',
        'Distributed Systems & Cloud Computing',
        'Cybersecurity, Cryptography & Network Protocols',
        'Senior Capstone Project & OUR Research Grant',
      ],
      specializations: ['Artificial Intelligence & Machine Learning', 'Data Science & Big Data', 'Cyber Security & Privacy'],
    },
    {
      id: 'prog-btech-ece',
      schoolId: 'school-of-engineering',
      title: 'B.Tech in Electrical and Computer Engineering',
      degreeLevel: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      department: 'Electrical & Computer Engineering',
      eligibility: '10+2 with Physics, Mathematics, Chemistry with min 60% aggregate',
      admissionRoutes: ['SNUSAT + APT', 'JEE Main', 'SAT', 'CUET'],
      annualFeeINR: '₹3,95,000',
      careerRoles: ['VLSI Design Engineer', 'Embedded Systems Architect', 'IoT Specialist', 'Robotics Systems Developer'],
      curriculumHighlights: [
        'Modern Energy Systems & Smart Grids',
        'Embedded Systems & Computer Architecture',
        'Analog/RF Systems & Signal Processing',
        'Sensors, MEMS & Nanoelectronics',
      ],
      specializations: ['Embedded Systems & IoT', 'Modern Energy Systems', 'VLSI & Nanoelectronics'],
    },
    {
      id: 'prog-btech-mech',
      schoolId: 'school-of-engineering',
      title: 'B.Tech in Mechanical Engineering',
      degreeLevel: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      department: 'Mechanical Engineering',
      eligibility: '10+2 with Physics, Mathematics, Chemistry with min 60% aggregate',
      admissionRoutes: ['SNUSAT + APT', 'JEE Main', 'SAT', 'CUET'],
      annualFeeINR: '₹3,75,000',
      careerRoles: ['Robotics Engineer', 'Thermal Systems Designer', 'Automotive R&D', 'Automation Consultant'],
      curriculumHighlights: [
        'Computational Techniques & CFD',
        'Robotics, Mechatronics & Autonomous Navigation',
        'Advanced Energy Technology & EV Powertrains',
        'Precision Manufacturing & Rapid Prototyping',
      ],
      specializations: ['Robotics & Automation', 'Computational Mechanics', 'Energy Technology'],
    },
    {
      id: 'prog-btech-chem',
      schoolId: 'school-of-engineering',
      title: 'B.Tech in Chemical Engineering',
      degreeLevel: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      department: 'Chemical Engineering',
      eligibility: '10+2 with Physics, Mathematics, Chemistry with min 60% aggregate',
      admissionRoutes: ['SNUSAT + APT', 'JEE Main', 'SAT', 'CUET'],
      annualFeeINR: '₹3,60,000',
      careerRoles: ['Process Control Engineer', 'Bioprocess Specialist', 'Green Hydrogen Consultant', 'Petrochemical Analyst'],
      curriculumHighlights: [
        'Chemical Reaction Engineering & Kinetics',
        'Transport Phenomena & Thermodynamics',
        'Polymer Science & Biomaterials',
        'Process Modeling, Simulation & Aspen HYSYS',
      ],
    },
    {
      id: 'prog-btech-civil',
      schoolId: 'school-of-engineering',
      title: 'B.Tech in Civil Engineering',
      degreeLevel: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      department: 'Civil Engineering',
      eligibility: '10+2 with Physics, Mathematics, Chemistry with min 60% aggregate',
      admissionRoutes: ['SNUSAT + APT', 'JEE Main', 'SAT', 'CUET'],
      annualFeeINR: '₹3,50,000',
      careerRoles: ['Structural Engineer', 'Smart Infrastructure Designer', 'Geotechnical Consultant', 'Transportation Planner'],
      curriculumHighlights: [
        'Earthquake-Resistant Structural Dynamics',
        'Smart Cities & Urban Transportation Infrastructure',
        'Environmental Engineering & Water Resources',
        'BIM & Computational Geotechnics',
      ],
    },
    {
      id: 'prog-bsc-chem',
      schoolId: 'school-of-natural-sciences',
      title: 'B.Sc. (Research) in Chemistry',
      degreeLevel: 'Undergraduate',
      duration: '4 Years (NEP 2020 Aligned)',
      department: 'Chemistry',
      eligibility: '10+2 with Chemistry & Mathematics/Physics with min 60% aggregate',
      admissionRoutes: ['SNUSAT + APT (Chemistry)', 'CUET-UG', 'SAT'],
      annualFeeINR: '₹2,90,000',
      careerRoles: ['Medicinal Chemist', 'Materials Scientist', 'Spectroscopy Analyst', 'PhD Research Fellow'],
      curriculumHighlights: [
        'Synthetic Organic & Inorganic Chemistry',
        'Crystal Engineering & Supramolecular Chemistry',
        'Spectroscopic Characterization (NMR, XRD, Mass Spec)',
        'Computational Quantum Chemistry',
      ],
    },
    {
      id: 'prog-bsc-life',
      schoolId: 'school-of-natural-sciences',
      title: 'B.Sc. (Research) in Biotechnology',
      degreeLevel: 'Undergraduate',
      duration: '4 Years (NEP 2020 Aligned)',
      department: 'Life Sciences & Bioinformatics',
      eligibility: '10+2 with Biology/Biotechnology & Chemistry with min 60%',
      admissionRoutes: ['SNUSAT + APT (Biology)', 'NEET', 'CUET-UG'],
      annualFeeINR: '₹3,10,000',
      careerRoles: ['Biotech R&D Scientist', 'Bioinformatics Analyst', 'Genomics Specialist', 'Clinical Researcher'],
      curriculumHighlights: [
        'Molecular Cell Biology & Genetic Engineering',
        'Bioinformatics & Computational Genomics',
        'Immunology & Cancer Biology',
        'Structural Biology & Drug Discovery',
      ],
    },
    {
      id: 'prog-bsc-math',
      schoolId: 'school-of-natural-sciences',
      title: 'B.Sc. (Research) in Mathematics',
      degreeLevel: 'Undergraduate',
      duration: '4 Years (NEP 2020 Aligned)',
      department: 'Mathematics',
      eligibility: '10+2 with strong Mathematics background with min 65%',
      admissionRoutes: ['SNUSAT + APT (Mathematics)', 'JEE Main', 'SAT'],
      annualFeeINR: '₹2,80,000',
      careerRoles: ['Quantitative Analyst', 'Cryptographer', 'Data Scientist', 'Operations Research Analyst'],
      curriculumHighlights: [
        'Real & Complex Analysis, Abstract Algebra',
        'Probability, Stochastic Processes & Statistics',
        'Mathematical Finance & Actuarial Methods',
        'Computational Topology & Machine Learning Mathematics',
      ],
    },
    {
      id: 'prog-ba-econ',
      schoolId: 'school-of-humanities-social-sciences',
      title: 'B.A. (Research) in Economics',
      degreeLevel: 'Undergraduate',
      duration: '4 Years (NEP 2020 Aligned)',
      department: 'Economics',
      eligibility: '10+2 with Mathematics studied at 10+2 level with min 65%',
      admissionRoutes: ['SNUSAT + APT', 'CUET-UG', 'SAT'],
      annualFeeINR: '₹3,40,000',
      careerRoles: ['Economist', 'Policy Analyst', 'Investment Banking Analyst', 'Management Consultant'],
      curriculumHighlights: [
        'Microeconomics & Macroeconomics Foundations',
        'Econometrics & Causal Inference with R and Python',
        'Development Economics & Public Finance',
        'Game Theory & Experimental Economics',
      ],
    },
    {
      id: 'prog-ba-ir',
      schoolId: 'school-of-humanities-social-sciences',
      title: 'B.A. (Research) in International Relations',
      degreeLevel: 'Undergraduate',
      duration: '4 Years (NEP 2020 Aligned)',
      department: 'International Relations',
      eligibility: '10+2 from any recognized board with min 60%',
      admissionRoutes: ['SNUSAT Essay & Aptitude', 'CUET-UG', 'SAT'],
      annualFeeINR: '₹3,20,000',
      careerRoles: ['Foreign Policy Analyst', 'Diplomatic Corps Aspirant', 'Geopolitical Risk Consultant', 'NGO Director'],
      curriculumHighlights: [
        'Global Geopolitics & Security Studies',
        'International Law & Human Rights',
        'India’s Foreign Policy & Indo-Pacific Strategy',
        'Conflict Resolution & Peacebuilding',
      ],
    },
    {
      id: 'prog-bms',
      schoolId: 'school-of-management-entrepreneurship',
      title: 'Bachelor of Management Studies (BMS)',
      degreeLevel: 'Undergraduate',
      duration: '4 Years',
      department: 'Business Management',
      eligibility: '10+2 in any stream with min 60% aggregate',
      admissionRoutes: ['SNUSAT + APT', 'CUET-UG', 'SAT', 'Personal Interview'],
      annualFeeINR: '₹3,90,000',
      careerRoles: ['Product Manager', 'Marketing Strategist', 'Venture Associate', 'Business Consultant'],
      curriculumHighlights: [
        'Strategic Management & Business Analytics',
        'Digital Marketing & Customer Experience',
        'Corporate Finance, Valuation & Capital Markets',
        'Incubation Lab Venture Launch via AIC-SNU',
      ],
    },
    {
      id: 'prog-mba-global',
      schoolId: 'school-of-management-entrepreneurship',
      title: 'Master of Business Administration (Global MBA)',
      degreeLevel: 'Postgraduate',
      duration: '2 Years (Residential)',
      department: 'Business Management',
      eligibility: 'Bachelor’s degree with min 50% + CAT/XAT/NMAT/GMAT/SMAT score',
      admissionRoutes: ['CAT / XAT / NMAT / GMAT', 'SMAT (SNU Management Aptitude Test) + PI'],
      annualFeeINR: '₹5,50,000',
      careerRoles: ['Senior Consultant', 'Brand Director', 'Supply Chain Strategist', 'FinTech Leader'],
      curriculumHighlights: [
        'Design Thinking & Digital Transformation',
        'Data-Driven Decision Making & Business AI',
        'International Immersion Module',
        'Live Consulting Projects & Corporate Internships',
      ],
    },
  ] as ProgramItem[],

  campusLife: {
    overview:
      'Spread across 286 serene acres in Greater Noida, Shiv Nadar University provides a 100% residential, self-contained educational sanctuary. Equipped with an Olympic-standard 400,000 sq ft Indoor Sports Complex, eco-lakes, Wi-Fi 6 coverage, modern student residences, and multi-cuisine dining hubs.',
    facilities: [
      {
        title: 'Indoor Sports Complex (ISC)',
        desc: 'Over 400,000 sq ft of multi-sport arena featuring 8 badminton courts, 4 squash courts, indoor basketball, gymnasium, running track, and table tennis.',
        highlight: '400k Sq. Ft.',
      },
      {
        title: 'Central Library & Learning Commons',
        desc: 'A 5-level architectural marvel hosting 100,000+ print volumes, 40,000+ e-journals, 24/7 quiet study pods, and digital research terminals.',
        highlight: '100k+ Volumes',
      },
      {
        title: 'Student Residences (Hostels)',
        desc: 'Air-conditioned single and twin-sharing rooms with high-speed fiber internet, biometric access, common lounges, laundromats, and 24/7 medical infirmary.',
        highlight: '100% Residential',
      },
      {
        title: 'Dining & Food Court Hubs',
        desc: 'Four large hygienic dining mess halls serving regional, continental, and vegan delicacies alongside cafes like Subway, Nescafe, and food trucks.',
        highlight: '4 Messes + Cafes',
      },
      {
        title: 'Horse Riding & Equestrian Facility',
        desc: 'One of the few Indian universities with a dedicated equestrian club, trained stables, riding instructors, and competitive show-jumping grounds.',
        highlight: 'Equestrian Club',
      },
      {
        title: 'Green Campus & Biodiversity Lakes',
        desc: 'Natural wetland reserve hosting migratory birds, solar energy farms, rainwater harvesting, zero-discharge water recycling, and tree-lined boulevards.',
        highlight: '286 Green Acres',
      },
    ],
    festivals: [
      {
        name: 'Breeze (Annual Techno-Cultural & Sports Fest)',
        timeline: 'February Every Year',
        details: 'The premier student-run festival of Delhi-NCR with 15,000+ footfall, 50+ inter-college competitions, hackathons, and star pro-nights.',
      },
      {
        name: 'Surge (Inter-University Sports Fest)',
        timeline: 'October Every Year',
        details: 'Over 40 universities compete in cricket, football, basketball, badminton, squash, and athletics under floodlights.',
      },
      {
        name: 'AURA Arts & Literary Symposium',
        timeline: 'November Every Year',
        details: 'Celebration of poetry, debate, theater, classical concerts with SPIC MACAY, and film screenings.',
      },
    ],
  },

  placements: {
    headline: '₹58.09 LPA Highest CTC | ₹11.35 LPA Overall Average',
    topPackage: '₹58.09 LPA',
    recentTopPackage: '₹54.82 LPA',
    averagePackage: '₹11.35 LPA',
    engineeringAverage: '₹10.82 LPA',
    top20PercentAverage: '₹18.70 LPA',
    placementPercentage: '93%',
    participatingCompanies: 174,
    recruitersByCategory: [
      {
        category: 'Tech Giants & Product Titans',
        companies: ['Google', 'Microsoft', 'Amazon', 'Adobe', 'DE Shaw', 'Salesforce', 'Dell Technologies', 'Qualcomm'],
      },
      {
        category: 'Consulting & Strategy',
        companies: ['McKinsey & Company', 'Bain & Company', 'Deloitte', 'PwC', 'EY', 'KPMG', 'Boston Consulting Group'],
      },
      {
        category: 'Finance, Banking & Fintech',
        companies: ['Goldman Sachs', 'Morgan Stanley', 'Barclays', 'Citigroup', 'American Express', 'Axis Bank', 'HDFC'],
      },
      {
        category: 'Engineering, Hardware & Auto',
        companies: ['Larsen & Toubro', 'HCL Technologies', 'Schneider Electric', 'Tata Motors', 'Hyundai', 'Ashok Leyland'],
      },
    ],
    cdcServices: [
      'Personalized Career Profiling & Resume Reviews',
      'Mock Coding Sprints on LeetCode & HackerRank platforms',
      'Global Alumni Mentorship Network across Silicon Valley & Europe',
      'Exclusive On-Campus Dream & Super Dream Day 1 Drives',
    ],
  },

  researchOUR: {
    title: 'OUR: Opportunities for Undergraduate Research',
    tagline: 'Empowering Undergraduates to Conduct World-Class, Patent-Worthy Science',
    overview:
      'Shiv Nadar University is the only Indian university to institutionalize undergraduate research funding through its flagship OUR program. Students work with faculty advisors, receive research stipends, and author Scopus-indexed papers before graduating.',
    metrics: [
      { label: 'OUR Grants Awarded', value: '1,200+' },
      { label: 'Student Co-Authored Papers', value: '450+' },
      { label: 'Student Patent Filings', value: '38+' },
      { label: 'Extramural Research Funding', value: '₹350+ Cr' },
    ],
    centersOfExcellence: [
      {
        name: 'Atal Incubation Centre (AIC-SNU)',
        supportedBy: 'NITI Aayog & Shiv Nadar Foundation',
        focus: 'Hardware innovation, IoT, biotech devices, and deep-tech startups.',
      },
      {
        name: 'Centre for Informatics',
        supportedBy: 'Department of Science and Technology (DST)',
        focus: 'Molecular dynamics, quantum calculations, drug discovery, and genomic algorithms.',
      },
      {
        name: 'Centre for Environmental Sciences & Sustainable Development (CESSD)',
        supportedBy: 'MoEFCC & Global Consortia',
        focus: 'Renewable energy storage, green hydrogen catalysts, water remediation, and climate policy.',
      },
      {
        name: 'Centre for Archaeology, Heritage & Museum Studies (CAHMS)',
        supportedBy: 'ASI & International UNESCO bodies',
        focus: 'Excavation science, carbon dating, historical material analysis, and digital archiving.',
      },
    ],
  },

  admissions: {
    year: '2026-27',
    tagline: 'Join an Institution of Eminence — Applications Open',
    steps: [
      {
        step: 1,
        title: 'Choose Your Degree & Pathway',
        desc: 'Review programs across Engineering, Natural Sciences, Humanities, or Management. Select admission via SNUSAT, JEE Main, CUET, or SAT/ACT.',
      },
      {
        step: 2,
        title: 'Online Registration & Form Submission',
        desc: 'Visit snuadmissions.com, create candidate profile, upload 10th/12th grade marksheets, identity proof, and select test preference.',
      },
      {
        step: 3,
        title: 'Appear for SNUSAT & Academic Proficiency Test (APT)',
        desc: 'Take the 2-hour computerized SNUSAT (Verbal, Quant, Logic, Essay) and 1-hour subject APT from Pearson VUE centers nationwide or at home.',
      },
      {
        step: 4,
        title: 'Personal Interview & Portfolio Assessment',
        desc: 'Shortlisted candidates in Management, Humanities, or Design appear for online faculty interview or portfolio evaluation.',
      },
      {
        step: 5,
        title: 'Provisional Offer & Scholarship Award',
        desc: 'Receive merit-based admission letter with tuition waiver details (up to 100%). Pay token fee to secure hostel and seat.',
      },
    ],
    scholarships: [
      {
        type: 'Merit Scholarship (Category A)',
        benefit: 'Up to 100% Tuition Fee Waiver',
        eligibility: 'Top scorers in SNUSAT or JEE Main Percentile > 95 or CBSE/ICSE Board > 95%.',
      },
      {
        type: 'Sports Excellence Scholarship',
        benefit: '50% to 100% Tuition and Hostel Waiver',
        eligibility: 'National or State level medalists in badminton, basketball, athletics, cricket, or equestrian.',
      },
      {
        type: 'VidyaGyan Rural Scholar Support',
        benefit: '100% Free Education, Lodging & Stipend',
        eligibility: 'Meritorious students from rural underprivileged backgrounds selected via Shiv Nadar Foundation.',
      },
      {
        type: 'Direct Sibling & Wards Concession',
        benefit: '25% Tuition Fee Discount',
        eligibility: 'Siblings of enrolled students or children of HCL/SNU staff members.',
      },
    ],
    importantDates: [
      { event: 'Phase 1 Applications Open', date: 'December 1, 2025' },
      { event: 'Phase 1 SNUSAT Examination Window', date: 'January 10 – March 15, 2026' },
      { event: 'Phase 1 Offer Letter Release', date: 'March 25, 2026' },
      { event: 'Phase 2 Applications Window', date: 'April 1 – May 30, 2026' },
      { event: 'Academic Session Commencement', date: 'August 3, 2026' },
    ],
  },

  faqs: [
    {
      q: 'What makes Shiv Nadar University an "Institution of Eminence" (IoE)?',
      a: 'Shiv Nadar University was designated as an Institution of Eminence by the Ministry of Education, Government of India. This status grants complete academic, administrative, and financial autonomy to create world-class curricula, recruit international faculty, foster high-impact multidisciplinary research, and maintain global benchmarks.',
    },
    {
      q: 'How does the SNUSAT & APT entrance test work?',
      a: 'SNUSAT is a 2-hour computerized test assessing Verbal Reasoning, Quantitative Ability, Abstract Reasoning, and an Essay. For B.Tech and Science degrees, candidates additionally take the 1-hour Academic Proficiency Test (APT) evaluating Physics, Chemistry, and Mathematics/Biology.',
    },
    {
      q: 'Can I apply with JEE Main or College Board SAT scores?',
      a: 'Yes! Candidates with strong JEE Main percentiles (typically >85-90 for B.Tech) or SAT scores (1300+) can be considered directly for admission and merit scholarships without taking SNUSAT.',
    },
    {
      q: 'Is on-campus hostel accommodation mandatory?',
      a: 'Yes. Shiv Nadar University is a 100% fully residential campus. Living on campus fosters peer learning, late-night lab access, round-the-clock library research, sports participation, and comprehensive student community life.',
    },
    {
      q: 'What is the Opportunities for Undergraduate Research (OUR) program?',
      a: 'OUR gives undergraduate students funded research grants (up to ₹50,000 per project) to work directly with senior faculty on original research problems. Students often author papers in Scopus-indexed journals and file patents prior to graduation.',
    },
    {
      q: 'Where is the campus located and how do students travel?',
      a: 'The campus is located on NH91 in Greater Noida (Delhi-NCR). It is well connected via Eastern Peripheral Expressway and Noida-Greater Noida Metro. The university runs dedicated air-conditioned shuttle buses to and from Delhi, Noida, and Gurugram metro stations on weekends and weekdays.',
    },
  ],
};
