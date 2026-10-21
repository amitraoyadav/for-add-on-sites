/**
 * Manipal Academy of Higher Education (MAHE) — Authoritative Structured Data & Configuration
 * Official Reference: https://www.manipal.edu/
 * Motto: "Inspired by Life" | Founded in 1953 by Dr. T.M.A. Pai
 * Recognition: Institution of Eminence (IoE) Deemed to be University | NAAC Grade "A++"
 * NIRF Top 4 Universities in India | 600+ Acre Flagship Campus in Manipal & 5 Global Campuses
 */

export interface SchoolItem {
  id: string;
  name: string;
  shortCode: string;
  established: number;
  departments: string[];
  description: string;
  nirfRank?: string;
  keyStats: {
    programsCount: number;
    facultyCount: number;
    studentsEnrolled: number;
    highestPlacementLPA: number;
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

export interface CampusItem {
  id: string;
  name: string;
  location: string;
  areaAcres: string;
  established: string;
  description: string;
  keyInstitutions: string[];
  amenities: string[];
  contactEmail: string;
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

export interface AlumniVoice {
  name: string;
  degree: string;
  batch: string;
  role: string;
  company: string;
  quote: string;
  achievement: string;
}

export const MANIPAL_CONFIG = {
  institution: {
    name: 'Manipal Academy of Higher Education',
    shortName: 'MAHE Manipal',
    popularName: 'Manipal University',
    motto: 'Inspired by Life',
    founder: 'Dr. T. M. A. Pai (1898–1979)',
    proChancellor: 'Dr. H. S. Ballal',
    viceChancellor: 'Lt. Gen. (Dr.) M. D. Venkatesh',
    establishedYear: 1953,
    deemedUniversityYear: 1993,
    ioeAwardYear: 2020,
    campusSize: '600+ Acres in Manipal (Flagship Campus)',
    statutoryApprovals: [
      'Institution of Eminence (IoE) Conferred by Ministry of Education, Govt. of India',
      'Deemed to be University under Section 3 of UGC Act, 1956',
      'NAAC Grade "A++" Accredited (Highest Grade)',
      'Approved by AICTE, NMC, DCI, PCI, COA, BCI, INC'
    ],
    officialHelpline: '+91 92437 77700',
    admissionsEmail: 'admissions@manipal.edu',
    headquarters: 'Tiger Circle, Madhav Nagar, Manipal, Udupi, Karnataka - 576104, India',
    globalCampusesCount: 6,
    totalStudents: '35,000+',
    facultyCount: '3,200+',
    alumniNetwork: '150,000+ Worldwide across 60+ Countries',
    highestDomesticPackage: '₹54.75 LPA',
    averageEngineeringPackage: '₹12.60 LPA',
    patentsFiled: '1,450+',
    sponsoredResearchFunding: '₹420+ Crores',
    programsOfferedCount: '300+'
  },

  rankings: [
    {
      body: 'NIRF Universities 2024',
      rank: 'Rank #4',
      detail: 'Ranked 4th Best University across all Indian Institutions',
      category: 'Universities'
    },
    {
      body: 'NIRF Overall 2024',
      rank: 'Rank #6',
      detail: 'Overall Rank 6 among all higher educational institutions in India',
      category: 'Overall'
    },
    {
      body: 'NIRF Dental 2024',
      rank: 'Rank #1 in India',
      detail: 'Manipal College of Dental Sciences (MCODS) Ranked #1 in India',
      category: 'Dental'
    },
    {
      body: 'NIRF Pharmacy 2024',
      rank: 'Rank #2 in India',
      detail: 'Manipal College of Pharmaceutical Sciences (MCOPS) Ranked #2',
      category: 'Pharmacy'
    },
    {
      body: 'NIRF Medical 2024',
      rank: 'Rank #3 in India',
      detail: 'Kasturba Medical College (KMC) Ranked #3 among Medical Colleges',
      category: 'Medical'
    },
    {
      body: 'NIRF Architecture 2024',
      rank: 'Rank #6 in India',
      detail: 'Manipal School of Architecture & Planning (MSAP) Top 6 Nationally',
      category: 'Architecture'
    },
    {
      body: 'QS World University Rankings 2025',
      rank: 'Top 175 in Asia',
      detail: 'Consistently featured among top 750 global research universities',
      category: 'International'
    },
    {
      body: 'NAAC 4th Cycle',
      rank: 'Grade "A++"',
      detail: '3.65+ CGPA Highest Accredited Category-I Deemed University',
      category: 'Accreditation'
    }
  ],

  campuses: [
    {
      id: 'campus-manipal',
      name: 'Manipal Flagship Campus',
      location: 'Manipal, Udupi, Karnataka, India',
      areaAcres: '600+ Acres',
      established: '1953',
      description: 'The sprawling flagship hilltop university town campus overlooking the Arabian Sea, housing MIT, KMC, TAPMI, MCODS, MCOPS, WGSHA, and the Marena 6-level sports complex.',
      keyInstitutions: ['Manipal Institute of Technology (MIT)', 'Kasturba Medical College (KMC)', 'TAPMI Business School', 'MCODS Dental', 'MCOPS Pharmacy', 'WGSHA Hospitality'],
      amenities: ['Marena 6-Level Sports Arena', '1.5 Lakh sq ft Central AC Library', 'Wi-Fi Smart Campus', '25+ Cafeterias & Multi-Cuisine Food Courts', 'KMC Teaching Hospitals', 'Eco-Reserve Lakes'],
      contactEmail: 'director.manipal@manipal.edu'
    },
    {
      id: 'campus-mangaluru',
      name: 'Mangaluru Coastal Campus',
      location: 'Light House Hill Road, Mangaluru, Karnataka',
      areaAcres: '50+ Acres',
      established: '1955',
      description: 'Prestigious healthcare and biomedical campus located in the coastal port city of Mangaluru, comprising KMC Mangaluru, MCODS Mangaluru, and tertiary multi-specialty care hospital facilities.',
      keyInstitutions: ['Kasturba Medical College (Mangaluru)', 'Manipal College of Dental Sciences (Mangaluru)', 'Attavar Hospital', 'KMC Jyothi Super-Speciality'],
      amenities: ['Advanced Medical Simulation Centre', 'Super-Speciality ICUs', 'Biomedical Informatics Hub', 'Anatomy Pathology Museum'],
      contactEmail: 'office.kmcmng@manipal.edu'
    },
    {
      id: 'campus-bengaluru',
      name: 'Bengaluru Tech & Design Campus',
      location: 'Govindapura, Yelahanka, Bengaluru, Karnataka',
      areaAcres: '80+ Acres',
      established: '2021',
      description: 'High-tech Silicon Valley of India campus specializing in Next-Gen Engineering (MIT Bengaluru), Management, Srishti Manipal Institute of Art, Design and Technology, and Manipal Law School.',
      keyInstitutions: ['MIT Bengaluru', 'TAPMI Bengaluru', 'Srishti Manipal Institute of Art & Design', 'Manipal Law School (MLS)'],
      amenities: ['AI & Robotics Testbed Labs', 'FinTech Sandbox', 'Moot Court Hall', 'Design Fab Labs', 'Metro Shuttle Connectivity'],
      contactEmail: 'admissions.blr@manipal.edu'
    },
    {
      id: 'campus-jamshedpur',
      name: 'Jamshedpur Campus (MTMC)',
      location: 'Baridih, Jamshedpur, Jharkhand',
      areaAcres: '25 Acres',
      established: '2020',
      description: 'Manipal Tata Medical College (MTMC), a historic public-private partnership between Tata Steel and MAHE offering world-class medical education and community health services in Eastern India.',
      keyInstitutions: ['Manipal Tata Medical College (MTMC)', 'Tata Main Hospital Academic Wing'],
      amenities: ['1,000+ Bed Clinical Teaching Hospital', 'Modern Virtual Anatomy Labs', 'Hostel Residences', 'Telemedicine Suite'],
      contactEmail: 'dean.mtmc@manipal.edu'
    },
    {
      id: 'campus-dubai',
      name: 'Dubai International Campus',
      location: 'Dubai International Academic City (DIAC), Dubai, UAE',
      areaAcres: 'State-of-the-art Multi-Facility Facility',
      established: '2000',
      description: 'First Indian higher education institution established in the Middle East, approved by the Knowledge and Human Development Authority (KHDA) Dubai, offering engineering, business, media, and design.',
      keyInstitutions: ['School of Engineering & IT', 'School of Business & Management', 'School of Media & Communications', 'School of Design & Architecture'],
      amenities: ['Silicon Oasis Innovation Hub', 'Broadcast Film Studios', 'Makerspaces', 'Global Internship Exchange', 'Student Lounges'],
      contactEmail: 'admissions@manipaldubai.com'
    },
    {
      id: 'campus-malaysia',
      name: 'Malaysia Campus (MUCM)',
      location: 'Jalan Batu Berendam, Melaka, Malaysia',
      areaAcres: '20 Acres',
      established: '1997',
      description: 'Manipal University College Malaysia (formerly Melaka-Manipal Medical College), premier Southeast Asian medical and dental academy that has trained over 12,000 Malaysian doctors and healthcare leaders.',
      keyInstitutions: ['Faculty of Medicine', 'Faculty of Dentistry', 'Faculty of Occupational Therapy'],
      amenities: ['Clinical Simulation Wards', 'Hospital Melaka Clinical Attachment', 'Dental Operatories', 'Sports Courts'],
      contactEmail: 'info@manipal.edu.my'
    }
  ],

  schools: [
    {
      id: 'school-mit',
      name: 'Manipal Institute of Technology (MIT)',
      shortCode: 'MIT',
      established: 1957,
      nirfRank: 'Ranked Top 20 Engineering in India',
      departments: [
        'Computer Science & Engineering',
        'Artificial Intelligence & Machine Learning',
        'Data Science & Analytics',
        'Electronics & Communication Engineering',
        'Information Technology',
        'Mechanical & Industrial Engineering',
        'Aeronautical & Automobile Engineering',
        'Mechatronics & Robotics Engineering',
        'Chemical & Biotechnology Engineering'
      ],
      description: 'Flagship engineering powerhouse established in 1957. Renowned globally for producing world leaders like Microsoft CEO Satya Nadella and former Nokia CEO Rajeev Suri.',
      keyStats: {
        programsCount: 18,
        facultyCount: 650,
        studentsEnrolled: 9800,
        highestPlacementLPA: 54.75
      },
      highlightFeatures: [
        'Formula Manipal & SolarMobil student racing teams with international podiums',
        'Project MANAS (Driverless Autonomous Vehicle Team recognized by Mahindra)',
        'Apple Authorized Mac Lab & Intel Center of Excellence',
        'Semester-abroad dual degrees with University of Queensland & Deakin Australia'
      ]
    },
    {
      id: 'school-kmc',
      name: 'Kasturba Medical College (KMC)',
      shortCode: 'KMC',
      established: 1953,
      nirfRank: 'Ranked #3 in Medical in India',
      departments: [
        'Anatomy, Physiology & Biochemistry',
        'Pathology, Pharmacology & Microbiology',
        'General Medicine & Paediatrics',
        'Cardiology & Neurology',
        'Orthopaedics & General Surgery',
        'Radiology & Anaesthesiology'
      ],
      description: 'India’s pioneer private medical institution established in 1953 by Dr. T.M.A. Pai, recognized by WHO and the General Medical Council UK, with 2,500+ beds in associated teaching hospitals.',
      keyStats: {
        programsCount: 32,
        facultyCount: 520,
        studentsEnrolled: 3200,
        highestPlacementLPA: 36.00
      },
      highlightFeatures: [
        '2,500+ beds across Kasturba Multi-speciality Teaching Hospitals',
        'Asia’s largest Anatomy & Pathology Museum with 3,000+ specimens',
        'Extensive USMLE and PLAB training with high international match rates',
        'Collaborations with Harvard Medical School and Mayo Clinic'
      ]
    },
    {
      id: 'school-mcop',
      name: 'Manipal College of Pharmaceutical Sciences (MCOPS)',
      shortCode: 'MCOPS',
      established: 1963,
      nirfRank: 'Ranked #2 in Pharmacy in India',
      departments: [
        'Pharmaceutics',
        'Pharmaceutical Chemistry',
        'Pharmacology',
        'Pharmacognosy',
        'Pharmacy Practice & Clinical Pharmacy'
      ],
      description: 'Ranked #2 in India by NIRF. A premier pharmacy institute running industry-partnered research with Pfizer, Novartis, Sun Pharma, and AstraZeneca.',
      keyStats: {
        programsCount: 12,
        facultyCount: 95,
        studentsEnrolled: 1100,
        highestPlacementLPA: 18.50
      },
      highlightFeatures: [
        'GLP-compliant Drug Testing & Development Laboratories',
        'Hospital Pharmacy Training in Kasturba Hospital',
        '100% placement track record in global pharma MNCs'
      ]
    },
    {
      id: 'school-tapmi',
      name: 'T. A. Pai Management Institute (TAPMI)',
      shortCode: 'TAPMI',
      established: 1980,
      nirfRank: 'Ranked Top 20 B-School in India',
      departments: [
        'Banking & Financial Services (BKFS)',
        'Human Resource Management (HRM)',
        'Marketing & Brand Strategy',
        'Operations & Supply Chain Analytics',
        'International Business'
      ],
      description: 'AACSB and AMBA accredited elite business school, recognized among the top 5% of business schools globally, with 100% placement for 38 consecutive years.',
      keyStats: {
        programsCount: 8,
        facultyCount: 85,
        studentsEnrolled: 1400,
        highestPlacementLPA: 32.20
      },
      highlightFeatures: [
        'Bloomberg Trading Lab with 16 live terminals',
        'Leadership Development Assessment Centre (LDAC)',
        'AACSB and AMBA Dual Global Accreditation',
        '100% placement track record for 38 years'
      ]
    },
    {
      id: 'school-wgsha',
      name: 'Welcomgroup Graduate School of Hotel Administration (WGSHA)',
      shortCode: 'WGSHA',
      established: 1986,
      nirfRank: 'Ranked #1 in Hospitality Education in India',
      departments: [
        'Culinary Arts & Food Production',
        'Food & Beverage Service',
        'Rooms Division & Hospitality Operations',
        'Wine Studies & Sommelier Academy'
      ],
      description: 'Established in joint partnership with ITC Hotels. Regarded as India’s top hospitality institution. Alma mater of Michelin Star Celebrity Chef Vikas Khanna.',
      keyStats: {
        programsCount: 6,
        facultyCount: 50,
        studentsEnrolled: 950,
        highestPlacementLPA: 16.00
      },
      highlightFeatures: [
        'Fortune Inn Valley View on-campus 4-star commercial hotel training',
        'Michelin-starred alumni network including Chef Vikas Khanna',
        'Global placements across Marriott, Hyatt, ITC, Taj, and Emirates Airlines'
      ]
    },
    {
      id: 'school-msap',
      name: 'Manipal School of Architecture & Planning (MSAP)',
      shortCode: 'MSAP',
      established: 1978,
      nirfRank: 'Ranked #6 in Architecture in India',
      departments: [
        'Architecture Design & Theory',
        'Urban Planning & Smart Cities',
        'Interior Design & Environmental Studies',
        'Fashion Design & Digital Apparel'
      ],
      description: 'Council of Architecture (COA) approved architectural school ranked #6 in India. Renowned for sustainable tropical architecture and heritage conservation.',
      keyStats: {
        programsCount: 7,
        facultyCount: 60,
        studentsEnrolled: 820,
        highestPlacementLPA: 14.50
      },
      highlightFeatures: [
        'Material testing and laser architectural fabrication labs',
        'Live studio workshops with urban development authorities',
        'Annual architectural tour of UNESCO heritage sites'
      ]
    }
  ],

  programs: [

    {
      id: 'prog-btech-cse',
      schoolId: 'school-mit',
      title: 'B.Tech in Computer Science & Engineering',
      degreeLevel: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      department: 'Computer Science & Engineering',
      eligibility: '10+2 with Physics, Mathematics & English with min 50% marks in aggregate + MET 2026 score',
      admissionRoutes: ['Manipal Entrance Test (MET 2026)', 'DASA (Direct Admission for Students Abroad)'],
      annualFeeINR: '₹4,36,000 / Year',
      careerRoles: ['Software Development Engineer (SDE)', 'Cloud Architect', 'Systems Engineer', 'AI Specialist'],
      curriculumHighlights: [
        'Data Structures & Advanced Algorithms',
        'Distributed Cloud Computing & Microservices',
        'Applied Machine Learning & Deep Neural Networks',
        'Full-Stack Web Architectures & DevOps CI/CD',
        'Industry Capstone Internship (8th Semester at top tech firm)'
      ],
      specializations: ['Artificial Intelligence & Deep Learning', 'Cyber Security & Forensics', 'Cloud & IoT Systems']
    },
    {
      id: 'prog-btech-aiml',
      schoolId: 'school-mit',
      title: 'B.Tech in Artificial Intelligence & Machine Learning',
      degreeLevel: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      department: 'Computer Science & Engineering',
      eligibility: '10+2 with Physics, Mathematics & English with min 50% marks + MET 2026 merit',
      admissionRoutes: ['MET 2026', 'DASA'],
      annualFeeINR: '₹4,36,000 / Year',
      careerRoles: ['Machine Learning Engineer', 'NLP Researcher', 'Computer Vision Architect', 'Data Scientist'],
      curriculumHighlights: [
        'Probabilistic Graphical Models & Inference',
        'Natural Language Processing & Generative AI',
        'Computer Vision, GANs & Diffusion Models',
        'Reinforcement Learning & Autonomous Agents',
        'NVIDIA DGX GPU Supercomputing Lab Sessions'
      ],
      specializations: ['Natural Language Processing', 'Autonomous Systems', 'Generative AI & LLMs']
    },
    {
      id: 'prog-btech-ece',
      schoolId: 'school-mit',
      title: 'B.Tech in Electronics & Communication Engineering',
      degreeLevel: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      department: 'Electronics & Communication Engineering',
      eligibility: '10+2 with Physics, Math & Chemistry/Comp Sci with min 50% marks + MET 2026',
      admissionRoutes: ['MET 2026', 'DASA'],
      annualFeeINR: '₹3,95,000 / Year',
      careerRoles: ['VLSI Chip Design Engineer', 'Embedded Systems Architect', '5G Telecom Engineer', 'RF Engineer'],
      curriculumHighlights: [
        'CMOS VLSI Design & Verification using Cadence Tools',
        '5G and Next-Gen Wireless Communications',
        'Embedded Systems, ARM Cortex & Edge AI IoT',
        'Digital Signal Processing & Microwave Engineering'
      ],
      specializations: ['VLSI & Microelectronics', 'Embedded Systems & IoT', 'Wireless & Satellite Comms']
    },
    {
      id: 'prog-mbbs',
      schoolId: 'school-kmc',
      title: 'Bachelor of Medicine & Bachelor of Surgery (MBBS)',
      degreeLevel: 'Undergraduate',
      duration: '4.5 Years + 1 Year Compulsory Rotatory Internship',
      department: 'Medical Education (KMC Manipal / KMC Mangaluru)',
      eligibility: '10+2 with Physics, Chemistry, Biology & English with 50% aggregate + NEET UG Qualified',
      admissionRoutes: ['NEET UG (DGHS / MCC Central Counselling)', 'NRI Quota via MCC'],
      annualFeeINR: '₹17,80,000 / Year (General Category)',
      careerRoles: ['Physician / Medical Officer', 'Clinical Researcher', 'Post-Graduate Resident', 'Hospital Administrator'],
      curriculumHighlights: [
        'Pre-Clinical: Human Anatomy, Medical Biochemistry & Physiology',
        'Para-Clinical: Pathology, Microbiology, Pharmacology & Forensic Medicine',
        'Clinical: General Medicine, General Surgery, OBG, Paediatrics, Orthopaedics',
        'Rotational Clinical Clerkship across 2,500+ beds in Kasturba Hospital',
        'Full USMLE Step 1 and PLAB guidance curriculum integration'
      ]
    },
    {
      id: 'prog-bba',
      schoolId: 'school-tapmi',
      title: 'Bachelor of Business Administration (BBA Honours)',
      degreeLevel: 'Undergraduate',
      duration: '3 or 4 Years (Honours with Research)',
      department: 'Department of Commerce / TAPMI',
      eligibility: '10+2 or equivalent in any stream with minimum 50% marks in aggregate',
      admissionRoutes: ['MET 2026 / Manipal Departmental Test', 'Direct Merit on 10+2 Marks'],
      annualFeeINR: '₹2,65,000 / Year',
      careerRoles: ['Financial Analyst', 'Marketing Strategist', 'Management Consultant', 'Product Associate'],
      curriculumHighlights: [
        'Financial Modeling & Corporate Valuation with Bloomberg Terminals',
        'Digital Consumer Marketing & Social Analytics',
        'Supply Chain & Global Logistics Architecture',
        'Summer Internship with Fortune 500 Corporate Partner'
      ],
      specializations: ['Banking & Financial Services', 'Marketing & E-Commerce', 'Human Resource Management', 'Business Analytics']
    },
    {
      id: 'prog-barch',
      schoolId: 'school-msap',
      title: 'Bachelor of Architecture (B.Arch)',
      degreeLevel: 'Undergraduate',
      duration: '5 Years (10 Semesters)',
      department: 'Manipal School of Architecture & Planning',
      eligibility: '10+2 with Physics, Chemistry & Math (50% aggregate) + Valid NATA Score',
      admissionRoutes: ['NATA (National Aptitude Test in Architecture)', 'JEE Main Paper 2'],
      annualFeeINR: '₹3,40,000 / Year',
      careerRoles: ['Registered Architect', 'Urban Planner', 'Sustainable Design Consultant', 'Interior Architect'],
      curriculumHighlights: [
        'Architectural Design Studios from Residential to Regional Planning',
        'Climatology, Sustainable Energy Systems & LEED Green Building',
        'Parametric BIM Modeling, Revit, AutoCAD & Rhino 3D',
        'One Full Semester of Practical Professional Architectural Training'
      ]
    },
    {
      id: 'prog-bpharm',
      schoolId: 'school-mcop',
      title: 'Bachelor of Pharmacy (B.Pharm)',
      degreeLevel: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      department: 'Manipal College of Pharmaceutical Sciences',
      eligibility: '10+2 with English, Physics, Chemistry and Biology/Math (50% aggregate) + MET 2026',
      admissionRoutes: ['MET 2026', 'DASA'],
      annualFeeINR: '₹3,25,000 / Year',
      careerRoles: ['Formulation Scientist', 'Regulatory Affairs Specialist', 'Clinical Trial Associate', 'Quality Control Analyst'],
      curriculumHighlights: [
        'Novel Drug Delivery Systems & Nanomedicines',
        'Medicinal Chemistry & Pharmacokinetics',
        'Good Manufacturing Practices (GMP) & Regulatory Audits',
        'Clinical Hospital Pharmacy rotations at Kasturba Hospital'
      ]
    },
    {
      id: 'prog-bhm',
      schoolId: 'school-wgsha',
      title: 'Bachelor of Hotel Management (BHM)',
      degreeLevel: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      department: 'Welcomgroup Graduate School of Hotel Administration',
      eligibility: '10+2 in any stream with minimum 45% marks in aggregate + Departmental Selection',
      admissionRoutes: ['Manipal Departmental Selection Test', 'Personal Interview'],
      annualFeeINR: '₹3,55,000 / Year',
      careerRoles: ['Executive Chef', 'General Manager (Luxury Hotel)', 'Beverage Director & Sommelier', 'Revenue Manager'],
      curriculumHighlights: [
        'Hands-on culinary training in commercial 4-star hotel kitchens',
        'Hospitality Financial Management & Dynamic Room Pricing',
        'Wine Studies, Mixology & Gastronomy',
        'One Year paid internship at leading global luxury chains (Marriott, ITC, Taj, Hyatt)'
      ]
    }  ] as ProgramItem[],

  alumniVoices: [
    {
      name: 'Satya Nadella',
      degree: 'B.E. in Electrical & Electronics Engineering',
      batch: 'Class of 1988 (MIT Manipal)',
      role: 'Chairman & Chief Executive Officer',
      company: 'Microsoft Corporation',
      quote: 'Manipal gave me the passion to learn, to discover, and to build technology that empowers every person and every organization on the planet to achieve more.',
      achievement: 'Global tech titan leading Microsoft cloud & AI transformation'
    },
    {
      name: 'Rajeev Suri',
      degree: 'B.E. in Electronics & Communication Engineering',
      batch: 'Class of 1989 (MIT Manipal)',
      role: 'Former CEO',
      company: 'Nokia Corporation & Inmarsat',
      quote: 'The collaborative, multicultural atmosphere in Manipal was the crucible that prepared me for managing diverse international teams across the globe.',
      achievement: 'Led turnaround of Nokia and global satellite communications at Inmarsat'
    },
    {
      name: 'Chef Vikas Khanna',
      degree: 'Bachelor of Hotel Management',
      batch: 'Class of 1991 (WGSHA Manipal)',
      role: 'Michelin Star Chef, Author & Filmmaker',
      company: 'Junoon NYC / Kinara Dubai',
      quote: 'WGSHA Manipal taught me that cooking is not just a technique; it is a sacred bridge connecting cultures, stories, and people.',
      achievement: 'Multiple Michelin Star awardee & Judge on MasterChef India'
    },
    {
      name: 'Mirza Faizan',
      degree: 'B.E. in Computer Science & Engineering',
      batch: 'Class of 2005 (MIT Manipal)',
      role: 'Aerospace Scientist & Inventor',
      company: 'AveOptions LLC (USA)',
      quote: 'The incubation culture at MIT encouraged me to patent aviation runway safety inventions that are now deployed at airports internationally.',
      achievement: 'Named Top 100 Global Aviation Leaders by Aviation Week'
    }
  ],

  metAdmissions: {
    testName: 'Manipal Entrance Test (MET 2026)',
    phases: [
      {
        phase: 'Phase 1',
        dates: 'April 18 – April 20, 2026',
        slotBooking: 'April 05 – April 10, 2026',
        admitCardRelease: 'April 12, 2026',
        resultsDate: 'May 02, 2026'
      },
      {
        phase: 'Phase 2',
        dates: 'May 16 – May 18, 2026',
        slotBooking: 'May 04 – May 08, 2026',
        admitCardRelease: 'May 10, 2026',
        resultsDate: 'May 28, 2026'
      }
    ],
    examFormat: {
      durationMinutes: 120,
      totalQuestions: 60,
      sections: [
        { subject: 'Mathematics', questions: 20, marks: 80 },
        { subject: 'Physics', questions: 15, marks: 60 },
        { subject: 'Chemistry', questions: 15, marks: 60 },
        { subject: 'English & General Aptitude', questions: 10, marks: 40 }
      ],
      markingScheme: '+4 for correct response, -1 for incorrect response (MCQ), 0 for unattempted'
    },
    scholarshipTiers: [
      {
        rankRange: 'MET Rank 1 – 100',
        name: 'Dr. T.M.A. Pai Freeship Scholarship',
        waiverPercent: 100,
        criteria: '100% Tuition Fee Concession for all 4 years upon maintaining 8.0 CGPA'
      },
      {
        rankRange: 'MET Rank 101 – 500',
        name: 'MAHE Scholar Scholarship',
        waiverPercent: 50,
        criteria: '50% Tuition Fee Concession for the duration of the program'
      },
      {
        rankRange: 'MET Rank 501 – 1500',
        name: 'Merit-cum-Means Category',
        waiverPercent: 25,
        criteria: '25% Tuition Fee Waiver for candidates with family income < ₹12 LPA'
      },
      {
        rankRange: 'Girl Child Scholarship',
        name: 'Manipal Shakti Empowerment Scholarship',
        waiverPercent: 15,
        criteria: '15% Tuition Waiver for female engineering & technology aspirants'
      }
    ],
    testHubs: [
      'Ahmedabad', 'Bengaluru', 'Bhopal', 'Bhubaneswar', 'Chandigarh', 'Chennai', 'Coimbatore', 'Dehradun',
      'Delhi-NCR', 'Dubai (UAE)', 'Guwahati', 'Hyderabad', 'Indore', 'Jaipur', 'Kochi', 'Kolkata', 'Lucknow',
      'Madurai', 'Mangaluru', 'Manipal', 'Mumbai', 'Nagpur', 'Patna', 'Pune', 'Ranchi', 'Thiruvananthapuram',
      'Varanasi', 'Visakhapatnam'
    ]
  },

  faqs: [
    {
      q: 'What is the Institution of Eminence (IoE) status granted to MAHE Manipal?',
      a: 'The Government of India conferred the prestigious Institution of Eminence (IoE) status upon MAHE in recognition of its stellar academic excellence, world-class research infrastructure, and high international rankings. This allows MAHE greater autonomy in academic curricula, world faculty recruitment, and international collaborations.'
    },
    {
      q: 'How do I apply for B.Tech programs at Manipal for the 2026 academic session?',
      a: 'Candidates must register online on the official Manipal portal, fill in their educational qualifications, pay the application fee of ₹600 (General) + ₹1,400 (Entrance Test Fee), book their preferred MET slot, and appear for the online computer-based Manipal Entrance Test (MET 2026).'
    },
    {
      q: 'Can I apply for multiple campuses with a single MET 2026 score?',
      a: 'Yes! A single MET 2026 score is valid for admission across all engineering campuses of MAHE: Manipal (Karnataka), Bengaluru (Yelahanka), and Manipal University Jaipur (via centralized counselling).'
    },
    {
      q: 'What are the scholarship opportunities available for meritorious students at Manipal?',
      a: 'MAHE awards over ₹100 Crores in scholarships annually. Top 100 rankers in MET receive 100% Freeship Scholarships. Candidates ranking between 101-500 receive 50% tuition waivers. In addition, merit-cum-means, girl-child empowerment, and sports scholarships are available.'
    },
    {
      q: 'What facilities are available at the Marena Sports Complex in Manipal?',
      a: 'Marena is a 6-level, state-of-the-art air-conditioned sports arena spanning 140,000 sq ft. It includes synthetic badminton courts, squash courts, indoor basketball arenas, a 200m synthetic jogging track, indoor futsal turf, Olympic gymnasium, and wellness recovery saunas.'
    },
    {
      q: 'How are medical (MBBS) admissions conducted at KMC Manipal and KMC Mangaluru?',
      a: 'All MBBS and BDS admissions at KMC Manipal, KMC Mangaluru, and MCODS are conducted strictly through centralized online counselling conducted by the Directorate General of Health Services (DGHS) / Medical Counselling Committee (MCC), Government of India, based on the candidate’s NEET UG rank.'
    }
  ]
};
