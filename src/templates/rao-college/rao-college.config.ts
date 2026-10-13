export interface CollegeProgram {
  id: string;
  code: string;
  title: string;
  degree: string;
  duration: string;
  department: string;
  description: string;
  eligibility: string;
  annualFeeNote: string;
  highlights: string[];
  careerRoles: string[];
  featured?: boolean;
}

export interface CollegeFacility {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

export interface CollegeEvent {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  summary: string;
  venue: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  program: string;
  batch: string;
  quote: string;
  image: string;
  currentRole: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  specialization: string;
}

export const RAO_COLLEGE_CONFIG = {
  brand: {
    name: 'RAO COLLEGE',
    shortName: 'Rao College',
    tagline: 'Learn Today. Lead Tomorrow.',
    motto: 'Knowledge · Innovation · Character · Leadership',
    type: 'Premier Undergraduate & Postgraduate College',
    established: '2004',
    affiliationNote: 'Approved Higher Education Institution · Affiliation & Regulatory details under confirmation',
    campusAddress: 'RAO COLLEGE Knowledge Campus, Sector 62, Institutional Area, Greater Educational Hub, Pin 201309',
    helplinePhone: '+91 11 4050 8800',
    tollFree: '1800 102 8800',
    admissionsEmail: 'admissions@raocollege.edu.in',
    generalEmail: 'info@raocollege.edu.in',
    placementEmail: 'placements@raocollege.edu.in',
    workingHours: 'Monday – Saturday: 9:00 AM – 5:30 PM'
  },

  logos: {
    main: '/assets/rao-college/logo.svg',
    light: '/assets/rao-college/logo-light.svg'
  },

  heroSlides: [
    {
      id: 'slide-1',
      tag: 'ADMISSIONS OPEN 2026–27',
      headline: 'Shape Your Future at RAO COLLEGE',
      subheadline:
        'Discover an inspiring learning environment where knowledge, practical skills, innovation, and career development come together to build tomorrow’s leaders.',
      image: '/assets/rao-college/campus-hero-1.jpg',
      primaryCta: 'Explore Programmes',
      secondaryCta: 'Apply Online',
      badge: 'Applications Open for Session 2026–27'
    },
    {
      id: 'slide-2',
      tag: 'WORLD-CLASS LEARNING SPACES',
      headline: 'Modern Labs, Digital Libraries & Vibrant Campus Life',
      subheadline:
        'Equipped with advanced computing clusters, science experimentation suites, smart lecture theatres, and sprawling athletics infrastructure for holistic growth.',
      image: '/assets/rao-college/campus-hero-2.jpg',
      primaryCta: 'Campus Tour',
      secondaryCta: 'Download Prospectus',
      badge: '98% Student Satisfaction'
    },
    {
      id: 'slide-3',
      tag: 'INDUSTRY-FOCUSED CURRICULUM',
      headline: 'Career-Ready Pedagogy with 500+ Corporate Recruiters',
      subheadline:
        'Gain real-world experience through mandatory internships, industry capstone projects, professional certifications, and personalized mentorship.',
      image: '/assets/rao-college/campus-main.jpg',
      primaryCta: 'Placement Highlights',
      secondaryCta: 'Meet Our Faculty',
      badge: 'Dedicated Corporate Resource Cell'
    }
  ],

  statistics: [
    { value: '20+', label: 'Years of Academic Legacy', detail: 'Cultivating future-ready graduates' },
    { value: '500+', label: 'Recruiting Partners', detail: 'Across Tech, Consulting, & Finance' },
    { value: '96%', label: 'Placement Assistance', detail: 'Dedicated career guidance & training' },
    { value: '15,000+', label: 'Global Alumni Network', detail: 'Serving top organizations worldwide' },
    { value: '45+', label: 'Hi-Tech Laboratories', detail: 'Modern equipment & software tools' },
    { value: '1:18', label: 'Faculty to Student Ratio', detail: 'Personalized academic mentorship' }
  ],

  about: {
    title: 'About RAO COLLEGE',
    subtitle: 'Nurturing Intellect, Ethics, and Professional Excellence',
    description:
      'RAO COLLEGE is committed to providing a transformative educational journey that bridges classroom learning with real-world industry demands. Designed as an inclusive academic community, we emphasize analytical curiosity, technological literacy, ethical decision-making, and entrepreneurial leadership.',
    pillars: [
      {
        title: 'Academic Rigour',
        desc: 'Outcome-based education curriculum aligned with national educational frameworks and emerging industry requirements.'
      },
      {
        title: 'Experiential Learning',
        desc: 'Laboratory practicums, case studies, hackathons, seminars, and live projects that cultivate hands-on problem solving.'
      },
      {
        title: 'Holistic Personality Development',
        desc: 'Active student clubs, debating societies, fine arts forums, community service, and competitive athletic leagues.'
      },
      {
        title: 'Career Advancement',
        desc: 'Structured training in verbal communication, quantitative aptitude, mock interviews, and corporate internships.'
      }
    ]
  },

  programs: [
    {
      id: 'bca',
      code: 'BCA',
      title: 'Bachelor of Computer Applications',
      degree: 'Undergraduate (UG)',
      duration: '3 Years (6 Semesters)',
      department: 'School of Computer Science & IT',
      description:
        'A comprehensive technology curriculum emphasizing full-stack development, artificial intelligence fundamentals, database engineering, and cloud platforms.',
      eligibility: '10+2 or equivalent with Mathematics / Computer Applications preferred (Minimum 50% aggregate)',
      annualFeeNote: 'Fee details to be confirmed upon official counseling',
      highlights: [
        'Python, Java, & Modern Web Frameworks',
        'Cloud Computing & DevOps Electives',
        'Industry Capstone Software Project',
        'Coding Bootcamps & Hackathon Prep'
      ],
      careerRoles: ['Software Engineer', 'Full-Stack Developer', 'Data Analyst', 'Cloud Associate'],
      featured: true
    },
    {
      id: 'bba',
      code: 'BBA',
      title: 'Bachelor of Business Administration',
      degree: 'Undergraduate (UG)',
      duration: '3 Years (6 Semesters)',
      department: 'School of Management Studies',
      description:
        'Prepares aspiring corporate leaders with foundational competencies in organizational strategy, digital marketing, corporate finance, and business analytics.',
      eligibility: '10+2 from any recognized board with minimum 50% aggregate marks',
      annualFeeNote: 'Fee details to be confirmed upon official counseling',
      highlights: [
        'Marketing, Finance & HR Specializations',
        'Case Study Pedagogy & Business Simulations',
        'Summer Corporate Internship Project',
        'Entrepreneurship & E-Cell Incubation'
      ],
      careerRoles: ['Business Development Executive', 'Financial Analyst', 'Marketing Associate', 'Operations Lead'],
      featured: true
    },
    {
      id: 'bcom',
      code: 'B.Com (Hons)',
      title: 'Bachelor of Commerce (Honours)',
      degree: 'Undergraduate (UG)',
      duration: '3 Years (6 Semesters)',
      department: 'School of Commerce & Finance',
      description:
        'Advanced financial accounting, taxation principles, corporate auditing, capital markets, and fintech foundations designed for analytical careers.',
      eligibility: '10+2 with Commerce or Science stream (Minimum 50% aggregate)',
      annualFeeNote: 'Fee details to be confirmed upon official counseling',
      highlights: [
        'Corporate Taxation & GST Accounting',
        'FinTech & Data Analytics in Finance',
        'Preparation Modules for CA/CMA/CFA',
        'Capital Markets Lab & Equity Research'
      ],
      careerRoles: ['Investment Banking Analyst', 'Tax Consultant', 'Auditor', 'Financial Planner'],
      featured: true
    },
    {
      id: 'ba-jmc',
      code: 'BA (JMC)',
      title: 'Bachelor of Arts (Journalism & Mass Comm)',
      degree: 'Undergraduate (UG)',
      duration: '3 Years (6 Semesters)',
      department: 'School of Media & Humanities',
      description:
        'Covers investigative journalism, broadcast television, public relations, digital content creation, podcasting, and media ethics.',
      eligibility: '10+2 from any stream with strong verbal and written proficiency',
      annualFeeNote: 'Fee details to be confirmed upon official counseling',
      highlights: [
        'TV Studio & Multi-Camera Newsroom',
        'Digital Content & Social Strategy',
        'Public Relations & Brand Communications',
        'Media Law, Ethics & Fact Checking'
      ],
      careerRoles: ['Digital Media Producer', 'Content Strategist', 'PR Specialist', 'Broadcast Reporter'],
      featured: false
    },
    {
      id: 'bsc-ds',
      code: 'B.Sc. (Data Science)',
      title: 'Bachelor of Science (Data Science & AI)',
      degree: 'Undergraduate (UG)',
      duration: '3 Years (6 Semesters)',
      department: 'School of Applied Sciences',
      description:
        'Rigorous mathematics, statistical inference, machine learning architectures, and big data engineering for data-driven industries.',
      eligibility: '10+2 with Mathematics or Statistics (Minimum 55% aggregate)',
      annualFeeNote: 'Fee details to be confirmed upon official counseling',
      highlights: [
        'Machine Learning & Deep Neural Nets',
        'Data Visualization (Tableau/PowerBI)',
        'Big Data Systems & SQL Mastery',
        'Real-world Industry Analytics Datasets'
      ],
      careerRoles: ['Junior Data Scientist', 'BI Developer', 'Machine Learning Engineer', 'Analytics Consultant'],
      featured: false
    },
    {
      id: 'mba',
      code: 'MBA',
      title: 'Master of Business Administration',
      degree: 'Postgraduate (PG)',
      duration: '2 Years (4 Semesters)',
      department: 'Graduate School of Business',
      description:
        'Strategic management, executive leadership, quantitative decision analytics, and global market innovation for ambitious professionals.',
      eligibility: "Bachelor's degree in any discipline with minimum 50% aggregate; CAT/MAT/CMAT or College Entrance Score",
      annualFeeNote: 'Fee details to be confirmed upon official counseling',
      highlights: [
        'Dual Specialization in Marketing/Finance/HR/IT',
        'CXO Lecture Series & Industry Mentorship',
        'International Immersion Opportunities',
        'Intensive Summer Placement Programme'
      ],
      careerRoles: ['Management Consultant', 'Product Manager', 'Senior Brand Executive', 'Investment Specialist'],
      featured: true
    }
  ] as CollegeProgram[],

  facilities: [
    {
      id: 'fac-library',
      title: 'Central Knowledge Library',
      category: 'Academic Resource',
      description:
        'A multi-level air-conditioned knowledge hub housing 40,000+ volumes, international scientific journals, digital research terminals, and quiet study alcoves.',
      image: '/assets/rao-college/campus-library.jpg',
      features: ['Automated RFID Lending', 'IEEE & Springer E-Journals', 'Quiet Reading Enclaves', 'Digital Discussion Rooms']
    },
    {
      id: 'fac-labs',
      title: 'Advanced Computing & Science Laboratories',
      category: 'Research & Practical',
      description:
        'High-performance computing workstations equipped with industry-standard development toolchains, data science servers, and specialized electronics benches.',
      image: '/assets/rao-college/campus-labs.jpg',
      features: ['Gigabit Fiber Connectivity', 'Dedicated AI GPU Clusters', 'Electronics & IoT Workbench', 'Clean Prototyping Space']
    },
    {
      id: 'fac-auditorium',
      title: 'Grand Auditorium & Seminar Halls',
      category: 'Cultural & Academic',
      description:
        'Acoustically treated 1,000-seater main auditorium equipped with line-array sound systems, motorized projection, and smart conferencing facilities.',
      image: '/assets/rao-college/campus-auditorium.jpg',
      features: ['Surround Sound Reinforcement', 'Digital Stage Lighting', 'Dual Green Rooms', 'Live Webcast Capabilities']
    },
    {
      id: 'fac-sports',
      title: 'Sports Complex & Athletic Grounds',
      category: 'Athletics & Fitness',
      description:
        'Full-size cricket and football turf, international standard basketball courts, indoor badminton arena, table tennis suites, and modern gymnasium.',
      image: '/assets/rao-college/campus-sports.jpg',
      features: ['Floodlit Basketball Courts', 'Olympic Weightlifting Stations', 'Certified Athletic Trainers', 'Annual Inter-College Cup']
    },
    {
      id: 'fac-hostels',
      title: 'Secure Residential Hostels',
      category: 'Campus Living',
      description:
        'Separate residential wings for male and female scholars with round-the-clock security, hygienic multi-cuisine dining, Wi-Fi, and recreation rooms.',
      image: '/assets/rao-college/campus-hostel.jpg',
      features: ['24/7 CCTV & Security Guarding', 'Nutritious Mess Meals', 'Indoor Recreation Lounges', 'On-call Resident Doctor']
    },
    {
      id: 'fac-excellence',
      title: 'Center for Innovation & Career Readiness',
      category: 'Career Development',
      description:
        'Dedicated corporate interview cabins, group discussion chambers, resume enhancement laboratories, and entrepreneurial startup workspace.',
      image: '/assets/rao-college/academic-excellence.jpg',
      features: ['Corporate Interview Suites', 'Mock Assessment Computers', 'Startup Seed Mentorship', 'Soft Skills Studio']
    }
  ] as CollegeFacility[],

  events: [
    {
      id: 'event-1',
      title: 'Annual Convocation Ceremony & Graduation Walk 2026',
      category: 'Academic Milestone',
      date: 'November 18, 2026',
      image: '/assets/rao-college/event-convocation.jpg',
      summary:
        'Honoring the graduating cohort of undergraduate and master’s scholars with degree conferrals, gold medals for academic distinction, and inspirational addresses.',
      venue: 'Main University Auditorium'
    },
    {
      id: 'event-2',
      title: 'TARANG 2026: National Inter-College Cultural Festival',
      category: 'Campus Life',
      date: 'December 04–06, 2026',
      image: '/assets/rao-college/event-cultural.jpg',
      summary:
        'Three days of musical band battles, street plays, classical choreography, fashion runway presentations, and celebrity artist performances with 50+ college teams.',
      venue: 'Central Amphitheatre & Sports Arena'
    },
    {
      id: 'event-3',
      title: 'International Conclave on Artificial Intelligence & Ethics',
      category: 'Research Conclave',
      date: 'October 28, 2026',
      image: '/assets/rao-college/event-seminar.jpg',
      summary:
        'Distinguished researchers, tech executives, and legal scholars deliberate on responsible machine learning architectures, automated decision governance, and data privacy.',
      venue: 'Management Block Seminar Hall'
    },
    {
      id: 'event-4',
      title: 'National Student Innovation Hackathon & Project Expo',
      category: 'Tech Competition',
      date: 'September 14–15, 2026',
      image: '/assets/rao-college/event-workshop.jpg',
      summary:
        'Over 120 student teams build working prototypes for smart sustainability, fintech accessibility, and healthcare technology in a non-stop 36-hour sprint.',
      venue: 'Computer Science Lab Hub'
    }
  ] as CollegeEvent[],

  studentAchievements: [
    {
      title: 'First Prize at National Fintech Hackathon 2026',
      category: 'Student Innovation',
      image: '/assets/rao-college/student-achievement-1.jpg',
      description: 'Third-year BCA team developed a decentralized micro-lending verification platform evaluated by senior industry mentors.'
    },
    {
      title: 'Winners of All-India Inter-University Business Quiz',
      category: 'Academic Distinction',
      image: '/assets/rao-college/student-achievement-2.jpg',
      description: 'BBA scholars represented RAO COLLEGE among 64 participating institutions, demonstrating exceptional economic and market acumen.'
    }
  ],

  testimonials: [
    {
      id: 'test-1',
      name: 'Aarohi Agarwal',
      program: 'BCA (Batch 2024)',
      batch: 'Class of 2024',
      quote:
        'The hands-on coding labs and live projects gave me the technical confidence to clear competitive software engineering interviews right during final semester.',
      image: '/assets/rao-college/testimonial-1.jpg',
      currentRole: 'Software Engineer, Top Tech Firm'
    },
    {
      id: 'test-2',
      name: 'Gaurav Sharma',
      program: 'BBA (Batch 2023)',
      batch: 'Class of 2023',
      quote:
        'Case study debates, corporate guest masterclasses, and college fest leadership roles sculpted my communication skills and strategic outlook.',
      image: '/assets/rao-college/testimonial-2.jpg',
      currentRole: 'Business Consultant, Advisory Services'
    },
    {
      id: 'test-3',
      name: 'Abhishek Mathur',
      program: 'B.Com (Hons) (Batch 2024)',
      batch: 'Class of 2024',
      quote:
        'Faculty mentors treated us with genuine respect and guided us through financial modeling and taxation intricacies that directly apply in professional audits.',
      image: '/assets/rao-college/testimonial-3.jpg',
      currentRole: 'Tax Analyst, Big Four Accounting'
    },
    {
      id: 'test-4',
      name: 'Zeinia Fernandes',
      program: 'BA (JMC) (Batch 2023)',
      batch: 'Class of 2023',
      quote:
        'The broadcast news studio and podcasting equipment gave us professional production experience from day one. I stepped into media ready for the newsroom.',
      image: '/assets/rao-college/testimonial-4.jpg',
      currentRole: 'Multimedia Producer, National Digital Media'
    },
    {
      id: 'test-5',
      name: 'Suraj Mehta',
      program: 'B.Sc. Data Science (Batch 2024)',
      batch: 'Class of 2024',
      quote:
        'Having dedicated GPU workstations and structured machine learning electives helped our team build industry-ready portfolios that recruiters valued.',
      image: '/assets/rao-college/testimonial-5.jpg',
      currentRole: 'Analytics Associate, FinTech Enterprise'
    },
    {
      id: 'test-6',
      name: 'Smiriti Verma',
      program: 'MBA (Batch 2023)',
      batch: 'Class of 2023',
      quote:
        'The executive mentorship program and simulated boardrooms prepared me for high-stakes stakeholder management and operational leadership.',
      image: '/assets/rao-college/testimonial-6.jpg',
      currentRole: 'Assistant Brand Manager, Consumer FMCG'
    }
  ] as TestimonialItem[],

  facultyMembers: [
    {
      id: 'fac-1',
      name: 'Dr. Rajeshwar Rao',
      designation: 'Principal & Professor of Computer Science',
      department: 'School of Computer Science & IT',
      qualification: 'Ph.D. (IIT Delhi), M.Tech (Computer Science)',
      specialization: 'Distributed Systems & Machine Intelligence'
    },
    {
      id: 'fac-2',
      name: 'Dr. Meenakshi Sundaram',
      designation: 'Dean, Management Studies',
      department: 'School of Management Studies',
      qualification: 'Ph.D. (FMS Delhi), MBA (Marketing & Strategy)',
      specialization: 'Consumer Behaviour & Brand Management'
    },
    {
      id: 'fac-3',
      name: 'Prof. Arvind K. Saxena',
      designation: 'Head of Department, Commerce',
      department: 'School of Commerce & Finance',
      qualification: 'M.Com, FCA, Ph.D. in Financial Economics',
      specialization: 'Corporate Governance & Auditing'
    },
    {
      id: 'fac-4',
      name: 'Dr. Nandita Sen',
      designation: 'Associate Professor, Media & Communications',
      department: 'School of Media & Humanities',
      qualification: 'Ph.D. in Mass Communication, M.A.',
      specialization: 'Digital Journalism & Social Storytelling'
    }
  ] as FacultyMember[],

  placements: {
    overview:
      'The Corporate Resource Cell (CRC) at RAO COLLEGE provides structured career counseling, resume optimization, aptitude coaching, and direct recruitment drives across diverse corporate sectors.',
    highlights: [
      'Pre-Placement Talks & Industry Briefings',
      'Dedicated Summer Internship Assistance',
      'Technical Mock Interviews with Alumni',
      'Soft Skills & Executive Presentation Workshops',
      'On-Campus & Virtual Recruitment Drives',
      'Entrepreneurship Incubation for Startup Founders'
    ],
    recruitersCategories: [
      { sector: 'Technology & IT Services', partners: 'TCS, Infosys, Wipro, HCL, Cognizant, Tech Mahindra, Capgemini' },
      { sector: 'Consulting & Financial Advisory', partners: 'Deloitte, EY, KPMG, PwC, Genpact, Grant Thornton' },
      { sector: 'Banking & Financial Services', partners: 'HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra, Bajaj Finserv' },
      { sector: 'FMCG & Consumer Brands', partners: 'Hindustan Unilever, Nestlé, ITC, Marico, Dabur' },
      { sector: 'Media & Digital Platforms', partners: 'Times Internet, Network18, Ogilvy, Edelman, Zee Media' }
    ]
  },

  admissionSteps: [
    {
      step: '01',
      title: 'Submit Online Application',
      desc: 'Fill out the digital admission enquiry form with your academic details, course preference, and verified contact info.'
    },
    {
      step: '02',
      title: 'Counseling & Verification',
      desc: 'Receive personalized guidance from our admissions advisors regarding program curriculum, eligibility, and scholarship criteria.'
    },
    {
      step: '03',
      title: 'Academic Interaction / Entrance',
      desc: 'Participate in the college entrance evaluation or personal interview round (where applicable for the chosen degree).'
    },
    {
      step: '04',
      title: 'Offer Letter & Enrollment',
      desc: 'Secure your provisional admission letter, submit verified document copies, and confirm your seat for the academic session.'
    }
  ],

  faqs: [
    {
      q: 'What is the admission procedure for undergraduate programs (BCA, BBA, B.Com)?',
      a: 'Admissions are based on 10+2 academic merit followed by personal counseling. Candidates can submit their application online, and our admissions office coordinates document verification and enrollment.'
    },
    {
      q: 'Does RAO COLLEGE offer merit scholarships?',
      a: 'Yes, merit scholarships covering up to 50% tuition waiver are available for exemplary academic performers in board examinations as well as recognized state/national level athletes.'
    },
    {
      q: 'Are hostel and transportation facilities available for outstation students?',
      a: 'The college provides dedicated residential hostels for male and female scholars with round-the-clock security and Wi-Fi. Fleet transportation connects key transit hubs across the metropolitan region.'
    },
    {
      q: 'How does the placement cell assist students?',
      a: 'The Corporate Resource Cell begins training in the penultimate year with aptitude sessions, coding hackathons, communication grooming, and internship allocations leading into final campus placements.'
    }
  ]
};
