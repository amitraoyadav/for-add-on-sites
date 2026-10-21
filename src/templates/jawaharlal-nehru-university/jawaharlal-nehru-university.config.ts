/**
 * Jawaharlal Nehru University (JNU) — Authoritative Structured Data & Configuration
 * Official Reference: https://www.jnu.ac.in/
 * Motto: "ज्ञानं विज्ञानं सहितं यज्ज्ञात्वा मोक्ष्यसेऽशुभात्" (Knowledge with scientific understanding leads to liberation)
 * Established: 1969 by an Act of Parliament (JNU Act 1966)
 * Status: Central University | NAAC Grade "A++" (3.77 CGPA) | NIRF Rank #2 in India
 * Campus: 1,020 Acres in Aravalli Ridge, New Delhi, India
 */

export interface SchoolItem {
  id: string;
  name: string;
  shortCode: string;
  established: number;
  dean: string;
  centres: string[];
  description: string;
  nirfRank?: string;
  keyStats: {
    programsCount: number;
    facultyCount: number;
    studentsEnrolled: number;
    phdScholars: number;
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

export interface HostelItem {
  id: string;
  name: string;
  riverOrigin: string;
  type: 'Boys' | 'Girls' | 'Co-Ed / Married Research Scholars';
  capacity: number;
  features: string[];
}

export interface FacultyBookItem {
  id: string;
  title: string;
  author: string;
  designation: string;
  school: string;
  coverImg: string;
  description: string;
  publisher: string;
}

export interface AlumniVoice {
  name: string;
  degree: string;
  batch: string;
  role: string;
  organization: string;
  quote: string;
  achievement: string;
}

export const JNU_CONFIG = {
  institution: {
    name: 'Jawaharlal Nehru University',
    shortName: 'JNU New Delhi',
    hindiName: 'जवाहरलाल नेहरू विश्वविद्यालय',
    motto: 'ज्ञानं विज्ञानं सहितं यज्ज्ञात्वा मोक्ष्यसेऽशुभात्',
    mottoTranslation: 'Knowledge combined with scientific understanding leads to freedom from evil',
    establishedYear: 1969,
    actOfParliament: 'Jawaharlal Nehru University Act 1966 (53 of 1966)',
    visitor: 'The President of India (Smt. Droupadi Murmu)',
    chancellor: 'Shri Kanwal Sibal (Former Foreign Secretary of India)',
    viceChancellor: 'Prof. Santishree Dhulipudi Pandit (First Woman VC of JNU)',
    campusSize: '1,020 Acres in the Aravalli Hills Ridge, South Delhi',
    headquarters: 'New Mehrauli Road, JNU Ring Road, New Delhi - 110067, India',
    officialHelpline: '+91 11 2674 2575 / 2670 4090',
    admissionsEmail: 'admissions@mail.jnu.ac.in',
    totalStudents: '9,500+ (Over 65% in Postgraduate & Research Programs)',
    phdScholarsCount: '5,000+',
    facultyCount: '600+ Distinguished Professors & Scholars',
    alumniNetwork: '100,000+ Worldwide across Diplomatic, Judicial & Academic Leadership',
    statutoryApprovals: [
      'Central University by Act of Parliament (Govt. of India)',
      'University Grants Commission (UGC Category-I)',
      'NAAC Grade "A++" (3.77 CGPA - 4th Cycle)',
      'Association of Indian Universities (AIU) & Commonwealth Universities'
    ]
  },

  rankings: [
    {
      body: 'NIRF Universities 2024',
      rank: 'Rank #2 in India',
      detail: 'Ranked 2nd Best University in India consecutively by Ministry of Education, Govt. of India',
      category: 'Universities'
    },
    {
      body: 'NIRF Overall 2024',
      rank: 'Top 10 in India',
      detail: 'Ranked #10 among all higher educational institutions nationwide',
      category: 'Overall'
    },
    {
      body: 'NAAC 4th Cycle',
      rank: 'Grade "A++" (3.77 CGPA)',
      detail: 'One of the highest scores awarded by NAAC to any Central University in India',
      category: 'Accreditation'
    },
    {
      body: 'QS World Subject Rankings 2024',
      rank: 'Rank #1 in India (Development Studies)',
      detail: 'Ranked Top 20 Worldwide in Development Studies and Top 100 in Sociology & Politics',
      category: 'International'
    }
  ],

  schools: [
    {
      id: 'school-sis',
      name: 'School of International Studies',
      shortCode: 'SIS',
      established: 1955,
      dean: 'Prof. Amitabh Mattoo',
      centres: [
        'Centre for International Politics, Organization and Disarmament (CIPOD)',
        'Centre for East Asian Studies (CEAS)',
        'Centre for European Studies (CES)',
        'Centre for American Studies',
        'Centre for West Asian Studies (CWAS)',
        'Centre for South Asian Studies',
        'Centre for Russian and Central Asian Studies (CRCAS)'
      ],
      description: 'The oldest school of JNU, established in 1955 as the Indian School of International Studies and merged with JNU in 1969. India’s paramount training ground for ambassadors, diplomats, and foreign policy strategists.',
      keyStats: {
        programsCount: 16,
        facultyCount: 110,
        studentsEnrolled: 1450,
        phdScholars: 820
      },
      highlightFeatures: [
        'Alma mater of External Affairs Minister Dr. S. Jaishankar',
        'Direct consultation hub for Ministry of External Affairs and UN agencies',
        'Comprehensive regional area studies libraries and diplomatic archives'
      ]
    },
    {
      id: 'school-sss',
      name: 'School of Social Sciences',
      shortCode: 'SSS',
      established: 1970,
      dean: 'Prof. Kaushal Kumar Sharma',
      centres: [
        'Centre for Economic Studies and Planning (CESP)',
        'Centre for Historical Studies (CHS)',
        'Centre for the Study of Social Systems (CSSS - Sociology)',
        'Centre for Political Studies (CPS)',
        'Centre for the Study of Regional Development (CSRD)',
        'Centre of Social Medicine and Community Health (CSMCH)',
        'Centre for Philosophy'
      ],
      description: 'Globally celebrated for pioneering critical social inquiry, heterodox economic thought, and subaltern history. Alma mater of Nobel Laureate Abhijit Banerjee and Finance Minister Nirmala Sitharaman.',
      keyStats: {
        programsCount: 22,
        facultyCount: 145,
        studentsEnrolled: 2100,
        phdScholars: 1250
      },
      highlightFeatures: [
        'Ranked #1 in India for Development Studies (QS World Subject Top 20)',
        'Centre for Economic Studies and Planning (CESP) ranked among top policy centers',
        'Centre for Historical Studies founded by Prof. Romila Thapar and Prof. Bipan Chandra'
      ]
    },
    {
      id: 'school-sllcs',
      name: 'School of Language, Literature & Culture Studies',
      shortCode: 'SLL&CS',
      established: 1969,
      dean: 'Prof. Shailendra Kumar Sharma',
      centres: [
        'Centre of Korean Studies (CKS)',
        'Centre for Japanese Studies (CJS)',
        'Centre of Chinese and South East Asian Studies (CCSEAS)',
        'Centre of French and Francophone Studies (CFFS)',
        'Centre of German Studies (CGS)',
        'Centre of Russian Studies (CRS)',
        'Centre of Spanish, Portuguese, Italian and Latin American Studies (CSPILAS)',
        'Centre of Arabic and African Studies (CAAS)',
        'Centre of Persian and Central Asian Studies (CPCAS)',
        'Centre of Indian Languages (Hindi, Urdu, Tamil, Bengali, Kannada, Odia)'
      ],
      description: 'India’s premier institute for foreign and classical Indian language scholarship, offering 3-year B.A. Honours programs and doctoral research in world literatures.',
      keyStats: {
        programsCount: 38,
        facultyCount: 160,
        studentsEnrolled: 2600,
        phdScholars: 980
      },
      highlightFeatures: [
        'Exclusive Central University teaching 15+ major international languages from scratch',
        'Government language translation partner for diplomatic and bilateral treaties',
        'Active cultural centers supported by embassies of Japan, Korea, France, and Spain'
      ]
    },
    {
      id: 'school-sls',
      name: 'School of Life Sciences',
      shortCode: 'SLS',
      established: 1970,
      dean: 'Prof. Rana Pratap Singh',
      centres: [
        'Molecular Biology and Genetics',
        'Cancer Biology and Neurobiology',
        'Plant Genomics and Stress Physiology',
        'Immunology and Infectious Diseases',
        'Radiation and Structural Biology'
      ],
      description: 'Pioneered interdisciplinary biological teaching and research in India. Recognized as a UGC Centre for Advanced Study and supported by DBT, ICMR, and DST.',
      keyStats: {
        programsCount: 6,
        facultyCount: 42,
        studentsEnrolled: 480,
        phdScholars: 320
      },
      highlightFeatures: [
        'Centralized state-of-the-art flow cytometry, confocal microscopy & proteomics',
        'DBT-BUILDER funded advanced bio-imaging and animal house facility',
        'High publication footprint in Nature, Cell, and PNAS'
      ]
    },
    {
      id: 'school-sps',
      name: 'School of Physical Sciences',
      shortCode: 'SPS',
      established: 1986,
      dean: 'Prof. Sangeeta K. Garg',
      centres: [
        'Theoretical Physics and High Energy Physics',
        'Condensed Matter and Statistical Physics',
        'Chemical Sciences and Supramolecular Chemistry',
        'Pure and Applied Mathematics'
      ],
      description: 'Renowned for rigorous research in condensed matter physics, quantum thermodynamics, organic synthesis, and algebraic geometry.',
      keyStats: {
        programsCount: 8,
        facultyCount: 38,
        studentsEnrolled: 350,
        phdScholars: 240
      },
      highlightFeatures: [
        'Advanced NMR, XRD, and single-crystal diffraction analytical suites',
        'Collaborations with CERN Geneva, Fermilab, and RIKEN Japan'
      ]
    },
    {
      id: 'school-scis',
      name: 'School of Computational & Integrative Sciences',
      shortCode: 'SCIS',
      established: 2010,
      dean: 'Prof. Lovekesh Vig',
      centres: [
        'Computational Biology and Bioinformatics',
        'Complex Systems and Data Science',
        'AI in Healthcare and High-Performance Computing'
      ],
      description: 'Pioneering bioinformatics and complex systems data science, uniting machine learning with computational genomics and drug design.',
      keyStats: {
        programsCount: 5,
        facultyCount: 22,
        studentsEnrolled: 220,
        phdScholars: 140
      },
      highlightFeatures: [
        'High Performance Supercomputing Cluster (Param JNU)',
        'DBT-Bioinformatics National Infrastructure Facility'
      ]
    },
    {
      id: 'school-soe',
      name: 'School of Engineering',
      shortCode: 'SOE',
      established: 2018,
      dean: 'Prof. U.C. Banerjee',
      centres: [
        'Computer Science & Engineering',
        'Electronics & Communication Engineering',
        'Materials Science and Nano-engineering'
      ],
      description: 'New-generation technical school offering 5-year Integrated Dual-Degree (B.Tech + M.Tech) programs admitted through JEE Main (JoSAA/CSAB).',
      keyStats: {
        programsCount: 4,
        facultyCount: 35,
        studentsEnrolled: 620,
        phdScholars: 80
      },
      highlightFeatures: [
        'Admissions exclusively through Central Seat Allocation Board (CSAB / JoSAA)',
        'Interdisciplinary blend of engineering with social sciences and technology policy'
      ]
    },
    {
      id: 'school-abvsme',
      name: 'Atal Bihari Vajpayee School of Management and Entrepreneurship',
      shortCode: 'ABVSME',
      established: 2018,
      dean: 'Prof. Hemant R.',
      centres: [
        'Finance & Capital Markets',
        'Technology Management & Analytics',
        'Social Entrepreneurship & Public Policy'
      ],
      description: 'Named after former Prime Minister Atal Bihari Vajpayee, offering premier 2-year MBA programs admitted through IIM CAT with emphasis on public policy and entrepreneurship.',
      keyStats: {
        programsCount: 3,
        facultyCount: 20,
        studentsEnrolled: 180,
        phdScholars: 35
      },
      highlightFeatures: [
        'CAT-based national admissions with affordable fee structure and merit waivers',
        'Focus on grassroots innovation, micro-finance, and public enterprise management'
      ]
    }
  ],

  programs: [
    {
      id: 'jnu-prog-ba-korean',
      schoolId: 'school-sllcs',
      title: 'B.A. (Hons.) in Korean Language & Culture',
      degreeLevel: 'Undergraduate',
      duration: '3 Years (6 Semesters)',
      department: 'Centre of Korean Studies (CKS)',
      eligibility: 'Senior School Certificate (10+2) with minimum 45% marks in aggregate + CUET (UG) in English & General Test',
      admissionRoutes: ['CUET (UG) conducted by NTA', 'JNU Deprivation Points Applicable'],
      annualFeeINR: '₹283 / Year (Highly Subsidized Central University Fee)',
      careerRoles: ['Diplomatic Interpreter', 'Government Intelligence Analyst', 'Bilingual Tech Specialist', 'Cultural Attaché'],
      curriculumHighlights: [
        'Korean Phonetics, Hangul Script & Conversational Fluency',
        'Classical and Contemporary Korean Literature & Media',
        'Socio-Economic Development and History of the Korean Peninsula',
        'Business Korean and Simultaneous Translation Practicum'
      ],
      specializations: ['Korean Linguistics & Translation', 'Korean Foreign Policy Studies']
    },
    {
      id: 'jnu-prog-ba-japanese',
      schoolId: 'school-sllcs',
      title: 'B.A. (Hons.) in Japanese Language',
      degreeLevel: 'Undergraduate',
      duration: '3 Years (6 Semesters)',
      department: 'Centre for Japanese Studies (CJS)',
      eligibility: '10+2 with minimum 45% aggregate + CUET (UG) English and General Test',
      admissionRoutes: ['CUET (UG) NTA', 'JNU Deprivation Points'],
      annualFeeINR: '₹283 / Year',
      careerRoles: ['Japanese Translator', 'MNC Business Consultant', 'Diplomat', 'Language Researcher'],
      curriculumHighlights: [
        'Kanji Mastery (1,500+ Characters), Grammar and Syntax',
        'Japanese Society, Shinto & Buddhist Traditions',
        'Technical & Business Interpretation for Indo-Japan Projects'
      ]
    },
    {
      id: 'jnu-prog-btech-cse',
      schoolId: 'school-soe',
      title: 'B.Tech + M.Tech Dual Degree in Computer Science & Engineering',
      degreeLevel: 'Undergraduate',
      duration: '5 Years (10 Semesters Dual Degree)',
      department: 'School of Engineering',
      eligibility: '10+2 with Physics, Mathematics and Chemistry/Comp Sci + JEE Main Valid Score',
      admissionRoutes: ['JEE Main (JoSAA / CSAB Central Counselling)'],
      annualFeeINR: '₹1,25,000 / Year',
      careerRoles: ['Algorithm Engineer', 'Data Systems Architect', 'Security Researcher', 'Civil Services'],
      curriculumHighlights: [
        'Data Structures, Distributed Systems & Cloud Platforms',
        'Interdisciplinary courses in Technology Governance & Science Policy',
        'Master’s Research Thesis in High-Performance Computing'
      ]
    },
    {
      id: 'jnu-prog-ma-economics',
      schoolId: 'school-sss',
      title: 'M.A. in Economics (Specialization in World Economy)',
      degreeLevel: 'Postgraduate',
      duration: '2 Years (4 Semesters)',
      department: 'Centre for Economic Studies and Planning (CESP)',
      eligibility: 'Bachelor’s degree in any discipline with minimum 50% marks + CUET (PG) Economics Paper',
      admissionRoutes: ['CUET (PG) conducted by NTA', 'JNU Deprivation Points System'],
      annualFeeINR: '₹340 / Year',
      careerRoles: ['Policy Economist (RBI, World Bank, IMF)', 'Economic Advisor', 'NITI Aayog Researcher', 'Academician'],
      curriculumHighlights: [
        'Advanced Microeconomics & Macroeconomic Theory',
        'Econometrics, Time-Series & Cross-Sectional Analysis',
        'Development Economics, Agrarian Relations & Public Finance',
        'International Trade, Capital Flows & Global Financial Architecture'
      ]
    },
    {
      id: 'jnu-prog-ma-ir',
      schoolId: 'school-sis',
      title: 'M.A. in International Relations & Political Economy',
      degreeLevel: 'Postgraduate',
      duration: '2 Years (4 Semesters)',
      department: 'School of International Studies (SIS)',
      eligibility: 'Bachelor’s degree with 50% aggregate + CUET (PG) in Politics and International Studies',
      admissionRoutes: ['CUET (PG) NTA', 'JNU Deprivation Points'],
      annualFeeINR: '₹340 / Year',
      careerRoles: ['Diplomat (IFS)', 'Strategic Foreign Policy Analyst', 'UN Political Affairs Officer', 'Journalist'],
      curriculumHighlights: [
        'Theories of International Relations & Geopolitics',
        'India’s Foreign Policy: Bilateral and Multilateral Strategy',
        'Global Security, Non-Proliferation & Disarmament Studies',
        'International Law and Diplomatic Protocols'
      ]
    },
    {
      id: 'jnu-prog-mba',
      schoolId: 'school-abvsme',
      title: 'Master of Business Administration (MBA)',
      degreeLevel: 'Postgraduate',
      duration: '2 Years (4 Semesters)',
      department: 'Atal Bihari Vajpayee School of Management',
      eligibility: 'Bachelor’s degree with 50% aggregate + Valid IIM CAT Percentile',
      admissionRoutes: ['IIM Common Admission Test (CAT)', 'Group Discussion & Personal Interview'],
      annualFeeINR: '₹6,00,000 (Total 2-Year Program Fee)',
      careerRoles: ['Strategic Consultant', 'Investment Banker', 'Supply Chain Lead', 'Public Policy Manager'],
      curriculumHighlights: [
        'Corporate Strategy, Financial Accounting & Analytics',
        'Sustainable Business Models & Circular Economy',
        'Technology Commercialization & Incubator Practicum'
      ]
    },
    {
      id: 'jnu-prog-msc-biotech',
      schoolId: 'school-sls',
      title: 'M.Sc. in Biotechnology & Molecular Biology',
      degreeLevel: 'Postgraduate',
      duration: '2 Years (4 Semesters)',
      department: 'School of Biotechnology',
      eligibility: 'Bachelor’s degree in Biological / Physical Sciences with 55% marks + GAT-B Examination',
      admissionRoutes: ['GAT-B (Graduate Aptitude Test - Biotechnology, RCB/DBT)'],
      annualFeeINR: '₹400 / Year + DBT Monthly Stipend',
      careerRoles: ['Biomedical Researcher', 'Geneticist', 'Bioprocess Scientist', 'Drug Discovery Specialist'],
      curriculumHighlights: [
        'Recombinant DNA Technology & CRISPR Genome Editing',
        'Structural Biology, Crystallography & Drug Docking',
        'Vaccinology & Immunology of Infectious Pathogens'
      ]
    },
    {
      id: 'jnu-prog-phd',
      schoolId: 'school-sss',
      title: 'Ph.D. in Social Sciences / International Studies / Sciences',
      degreeLevel: 'Doctoral',
      duration: '3 to 5 Years (Doctor of Philosophy)',
      department: 'All 13 Schools & 8 Special Centres',
      eligibility: 'Master’s degree with minimum 55% marks + JNU Entrance Examination or UGC-NET/CSIR-JRF JRF qualified',
      admissionRoutes: ['JNU Ph.D. Entrance Examination (NTA)', 'UGC-NET / CSIR-JRF Direct Interview'],
      annualFeeINR: '₹480 / Year + Full UGC/CSIR Fellowship',
      careerRoles: ['University Professor', 'Principal Investigator', 'Global Think-Tank Director', 'Senior Policy Advisor'],
      curriculumHighlights: [
        'Rigorous 1-Year Pre-Ph.D. Coursework in Advanced Research Methodology',
        'Independent original field research, archives & laboratory experimentation',
        'International peer-reviewed dissertation submission and viva voce defense'
      ]
    }
  ] as ProgramItem[],

  facultyBooks: [
    {
      id: 'book-1',
      title: 'Contours of Indigenous Philosophy',
      author: 'Prof. Bhagat Oinam',
      designation: 'Professor, Centre for Philosophy',
      school: 'School of Social Sciences',
      coverImg: '/assets/jawaharlal-nehru-university/Contours_of_Indigenous_Philosoply_BOinam_0_itok=6VxDhgz4.png',
      description: 'An epistemological inquiry into indigenous philosophical traditions, oral ethics, and metaphysical frameworks of Northeast India.',
      publisher: 'Oxford University Press / Routledge'
    },
    {
      id: 'book-2',
      title: 'The Border Province Reimagined',
      author: 'Prof. Radhika Agarwal',
      designation: 'Professor, Centre for Historical Studies',
      school: 'School of Social Sciences',
      coverImg: '/assets/jawaharlal-nehru-university/TheBorderProvinceReimagined_RAgarwal_0_itok=kDPwDqIH.jpg',
      description: 'Historical perspectives on frontier formation, trade routes, and colonial governance along the Trans-Himalayan borderlands.',
      publisher: 'Cambridge University Press'
    },
    {
      id: 'book-3',
      title: 'Policy and Politics of Development in India',
      author: 'Dr. S. K. Suthar',
      designation: 'Chairperson, Centre for Political Studies',
      school: 'School of Social Sciences',
      coverImg: '/assets/jawaharlal-nehru-university/PolicyAndPoliticsOfDevelopmentInIndia_SKSuthar_0_itok=wTiQAmMD.jpg',
      description: 'Critical analysis of agrarian transformation, welfare policies, and democratic contestations in post-liberalization India.',
      publisher: 'Orient BlackSwan'
    }
  ],

  hostels: [
    {
      id: 'hostel-ganga',
      name: 'Ganga Hostel',
      riverOrigin: 'Sacred River Ganga',
      type: 'Girls',
      capacity: 350,
      features: ['24/7 Reading Room', 'Lush inner courtyards', 'Co-op mess', 'Solar water heaters']
    },
    {
      id: 'hostel-yamuna',
      name: 'Yamuna Hostel',
      riverOrigin: 'River Yamuna',
      type: 'Girls',
      capacity: 320,
      features: ['Wi-Fi enabled study bays', 'Recreation lounge', 'Badminton court']
    },
    {
      id: 'hostel-jhelum',
      name: 'Jhelum Hostel',
      riverOrigin: 'River Jhelum (Kashmir Valley)',
      type: 'Boys',
      capacity: 420,
      features: ['Table tennis hall', 'Cultural discussion alcoves', 'Library annex']
    },
    {
      id: 'hostel-sutlej',
      name: 'Sutlej Hostel',
      riverOrigin: 'River Sutlej (Punjab)',
      type: 'Boys',
      capacity: 380,
      features: ['Open-air amphitheatre', 'Gymnasium', 'Student-run cooperative kitchen']
    },
    {
      id: 'hostel-kaveri',
      name: 'Kaveri Hostel',
      riverOrigin: 'River Kaveri (Karnataka)',
      type: 'Boys',
      capacity: 360,
      features: ['Proximity to Central Library', 'Green roof garden', 'Reading rooms']
    },
    {
      id: 'hostel-periyar',
      name: 'Periyar Hostel',
      riverOrigin: 'River Periyar (Kerala)',
      type: 'Boys',
      capacity: 380,
      features: ['Spacious common rooms', 'Heritage red-brick architecture', 'Sports yard']
    },
    {
      id: 'hostel-sabarmati',
      name: 'Sabarmati Hostel',
      riverOrigin: 'River Sabarmati (Gujarat)',
      type: 'Co-Ed / Married Research Scholars',
      capacity: 450,
      features: ['Family accommodations', 'High-speed broadband', 'Daycare center']
    },
    {
      id: 'hostel-brahmaputra',
      name: 'Brahmaputra Hostel',
      riverOrigin: 'River Brahmaputra (Assam)',
      type: 'Boys',
      capacity: 400,
      features: ['Modern multi-storey design', 'Elevators', 'Scenic views of Aravalli ridge']
    }
  ],

  alumniVoices: [
    {
      name: 'Abhijit Banerjee',
      degree: 'M.A. in Economics',
      batch: 'Class of 1983 (CESP)',
      role: 'Nobel Laureate in Economic Sciences (2019)',
      organization: 'MIT (Massachusetts Institute of Technology, USA)',
      quote: 'JNU taught me how to think fearlessly, to question established models, and to look at real poverty from the ground up rather than purely through abstract equations.',
      achievement: 'Awarded Nobel Prize for experimental approach to alleviating global poverty'
    },
    {
      name: 'Nirmala Sitharaman',
      degree: 'M.A. & M.Phil in Economics',
      batch: 'Class of 1984 (CESP)',
      role: 'Union Minister of Finance and Corporate Affairs',
      organization: 'Government of India',
      quote: 'The rigorous debate, the egalitarian campus culture, and the open exchange of ideas at JNU laid the bedrock of my public policy perspective.',
      achievement: 'First full-time female Finance Minister of India; Forbes World’s 100 Most Powerful Women'
    },
    {
      name: 'Dr. S. Jaishankar',
      degree: 'M.A., M.Phil & Ph.D. in International Relations',
      batch: 'Class of 1977 (SIS)',
      role: 'Union Minister of External Affairs',
      organization: 'Government of India',
      quote: 'The School of International Studies at JNU provides an unmatched conceptual grasp of geopolitical dynamics that has served me throughout my diplomatic career.',
      achievement: 'Architect of India’s contemporary foreign policy and multi-alignment diplomacy'
    },
    {
      name: 'Dr. Baburam Bhattarai',
      degree: 'Ph.D. in Regional Development',
      batch: 'Class of 1986 (CSRD)',
      role: 'Former Prime Minister of Nepal',
      organization: 'Federal Democratic Republic of Nepal',
      quote: 'My doctoral research at JNU on the political economy of underdeveloped societies formed the ideological blueprint for democratic political reform.',
      achievement: 'Elected 35th Prime Minister of Nepal and constitutional architect'
    }
  ],

  deprivationPoints: {
    systemOverview: 'JNU pioneered an affirmative action model that awards up to 12 Deprivation Points during admission to compensate for historical, regional, and gender disadvantages, ensuring students from remote and backward regions across all Indian states gain access.',
    quartiles: [
      {
        category: 'Quartile 1 Districts',
        points: '5 Points (UG) / 3 Points (PG)',
        description: 'Candidate passed 10th & 12th / UG from most economically and educationally backward districts identified by Government of India.'
      },
      {
        category: 'Quartile 2 Districts',
        points: '3 Points (UG) / 2 Points (PG)',
        description: 'Candidate hailing from secondary educational deprivation districts.'
      },
      {
        category: 'Female / Transgender Candidates',
        points: 'Up to 7 Additional Points',
        description: 'Gender affirmative action points awarded to all female and transgender applicants regardless of region.'
      },
      {
        category: 'Kashmiri Migrants / Wards of Defense',
        points: 'Concessional Criteria',
        description: 'Special reservation and relaxation of cut-off marks as per Ministry of Education guidelines.'
      }
    ]
  },

  faqs: [
    {
      q: 'How are admissions conducted at JNU for Undergraduate and Postgraduate programs?',
      a: 'Admissions to B.A. (Hons.) Foreign Languages programs are conducted through the Common University Entrance Test (CUET-UG) conducted by NTA. Admissions to Master’s degrees (M.A., M.Sc., MCA, MPH) are conducted via CUET-PG. Engineering dual-degree B.Tech admissions are handled via JEE Main JoSAA counselling, while MBA admissions are based on IIM CAT scores.'
    },
    {
      q: 'What is the unique JNU Deprivation Points system?',
      a: 'The Deprivation Points system is JNU’s acclaimed affirmative action policy that adds between 1 and 12 points to the entrance exam score of candidates based on geographic deprivation (backward district quartiles) and gender (female/transgender applicants). This ensures diverse representation from rural and marginalized backgrounds across India.'
    },
    {
      q: 'How subsidized is education at Jawaharlal Nehru University?',
      a: 'JNU is renowned for its highly subsidized, accessible education model. Annual academic tuition fees for M.A., M.Sc., and B.A. programs are under ₹350 per year, and hostel room rents are minimal, ensuring that students from every socio-economic strata can pursue world-class education.'
    },
    {
      q: 'What facilities are available at the Dr. B.R. Ambedkar Central Library?',
      a: 'The 9-storey Central Library tower spans over 100,000 sq ft, holding more than 500,000 print volumes, 50,000+ online research journals, 24/7 air-conditioned reading halls, and a dedicated Helen Keller Unit equipped with JAWS screen-reading software and Braille embossers for visually impaired scholars.'
    },
    {
      q: 'What is the research infrastructure like at the Advanced Instrumentation Research Facility (AIRF)?',
      a: 'AIRF is JNU’s central multi-crore instrumentation facility serving 13 academic schools and external scholars. It houses high-end equipment including Transmission Electron Microscopes (TEM), Scanning Electron Microscopes (SEM), High-Resolution NMR (500 MHz), Confocal Laser Microscopes, LC-MS/MS, and Circular Dichroism spectrometers.'
    },
    {
      q: 'Can international students apply for degree programs at JNU?',
      a: 'Yes! International candidates can apply through the In Absentia admissions window under the 15% supernumerary quota for foreign nationals, or through ICCR (Indian Council for Cultural Relations) government scholarships.'
    }
  ]
};
