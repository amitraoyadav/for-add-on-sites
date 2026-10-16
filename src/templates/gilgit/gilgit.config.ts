/**
 * Gilgit Institute of Technology & Management — Configuration & Authoritative Structured Data
 * Faithful reproduction of the uploaded GLBITM website architecture,
 * rebranding the institutional identity to Gilgit while preserving
 * all original academic faculties, accreditations, rankings, placement records, and layouts.
 */

export interface GilgitProgram {
  id: string;
  name: string;
  code: string;
  department: string;
  level: 'Undergraduate' | 'Postgraduate';
  duration: string;
  intake: number;
  accreditation: string;
  eligibility: string;
  highlights: string[];
  careerRoles: string[];
  category: 'cse-it' | 'ai-ds' | 'ece-me' | 'postgraduate';
  featured?: boolean;
}

export interface GilgitRanking {
  id: string;
  authority: string;
  title: string;
  rank: string;
  year: string;
  description: string;
  badge: string;
  color: string;
}

export interface GilgitHeroSlide {
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

export interface GilgitRecruiter {
  name: string;
  packageOffered: string;
  sector: string;
  role: string;
}

export interface GilgitCoE {
  id: string;
  title: string;
  partner: string;
  description: string;
  equipment: string;
  impact: string;
}

export interface GilgitFacility {
  id: string;
  title: string;
  category: string;
  description: string;
  metrics: string;
  image: string;
  highlights: string[];
}

export interface GilgitTestimonial {
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

export interface GilgitFaq {
  question: string;
  answer: string;
  category: 'Admissions' | 'Placements' | 'Accreditation' | 'Hostels & Campus';
}

export const GILGIT_CONFIG = {
  brand: {
    name: 'GILGIT',
    fullName: 'Gilgit Institute of Technology & Management',
    shortName: 'Gilgit (GLBITM)',
    tagline: 'Approved by AICTE, Ministry of Education, Govt. of India · Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
    motto: 'Excellence in Technology, Innovation & Management',
    established: '2005',
    campusArea: '15+ Acres Modern Campus in Knowledge Park',
    location: 'Plot No. 2, Knowledge Park III, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh 201306, India',
    tollFreePhone: '0120-2323818',
    helpline: '+91 8010 000 234',
    altPhone: '0120-2323901',
    email: 'admissions@gilgit.ac.in',
    directorEmail: 'director@gilgit.ac.in',
    highestPackage: '₹58 Lakh Per Annum (Palo Alto Networks)',
    averagePackage: '₹7.12 Lakh Per Annum',
    placementOffers: '3,000+ Offers (Batch 2024–2026)',
    totalRecruiters: '300+ Top Fortune 500 Recruiters',
    alumniCount: '25,000+ Alumni Across Tech & Corporate World',
    nbaAccreditation: 'NBA Accredited Programs (CSE, IT, ECE, ME)',
    naacGrade: 'NAAC Grade A Accredited',
    aktuAffiliation: 'Affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow (College Code: 192)'
  },

  logos: {
    color: '/assets/gilgit/logo.svg',
    white: '/assets/gilgit/logo-white.svg'
  },

  rankings: [
    {
      id: 'nba',
      authority: 'National Board of Accreditation (NBA)',
      title: 'Tier-1 Engineering Accreditation',
      rank: 'NBA ACCREDITED',
      year: 'Valid Through 2026',
      description: 'Core engineering programs (CSE, IT, ECE, ME) accredited for outcome-based education, modern pedagogy, and tier-1 infrastructure.',
      badge: '/assets/gilgit/badge-nba.svg',
      color: '#0284C7'
    },
    {
      id: 'naac',
      authority: 'NAAC (UGC)',
      title: 'Institutional Accreditation',
      rank: 'GRADE A',
      year: 'Cycle 1 Valid',
      description: 'Accredited with Grade A for research productivity, student mentoring, corporate placements, and digital governance.',
      badge: '/assets/gilgit/badge-naac-a.svg',
      color: '#F59E0B'
    },
    {
      id: 'nirf',
      authority: 'NIRF (Ministry of Education, Govt. of India)',
      title: 'Top Engineering Band in India',
      rank: 'NIRF RANKED',
      year: '2024 Ranking',
      description: 'Consistently rated among the premier private technical institutions in Greater Noida, UP, and North India by NIRF.',
      badge: '/assets/gilgit/badge-nirf.svg',
      color: '#DA251C'
    },
    {
      id: 'placement-badge',
      authority: 'Corporate Resource Center (CRC)',
      title: 'Industry Placement Benchmark',
      rank: '₹58 LPA',
      year: 'Batch 2024-26',
      description: 'Record-setting international package of ₹58 Lakh per annum with over 3,000+ job offers extended by 300+ Fortune 500 recruiters.',
      badge: '/assets/gilgit/badge-placement.svg',
      color: '#10B981'
    },
    {
      id: 'aktu-affiliation',
      authority: 'Dr. A.P.J. Abdul Kalam Technical University',
      title: 'Premier Engineering College in AKTU',
      rank: 'CODE: 192',
      year: 'Top Ranking in UP',
      description: 'Recognized as one of the most sought-after counseling choices in AKTU state entrance examinations for Computer Science and IT.',
      badge: '/assets/gilgit/badge-aktu.svg',
      color: '#A855F7'
    }
  ] as GilgitRanking[],

  heroSlides: [
    {
      id: 'hero-placement',
      badge: 'RECORD BREAKING PLACEMENTS',
      title: 'ANNUAL RECRUITMENT BENCHMARK',
      headline: '₹58 LPA Highest Package Offered',
      subtitle: 'Over 3,000+ placement offers from 300+ Fortune 500 multinationals including Palo Alto Networks, Amazon, Cisco, Intuit, Autodesk, and Morgan Stanley.',
      image: '/assets/gilgit/hero-placement-58lpa.svg',
      ctaText: 'Explore Placement Records',
      ctaLink: '#placements',
      accentColor: '#F59E0B',
      stats: [
        { label: 'Highest Package', value: '₹58 LPA' },
        { label: 'Total Offers', value: '3,000+' },
        { label: 'Top Recruiters', value: '300+' }
      ]
    },
    {
      id: 'hero-nba',
      badge: 'PREMIER ACCREDITATION STATUS',
      title: 'NBA & NAAC ACCREDITED INSTITUTION',
      headline: 'Quality Technical Education & AKTU Rank',
      subtitle: 'Approved by AICTE and affiliated to Dr. A.P.J. Abdul Kalam Technical University (Code: 192). B.Tech programs accredited by National Board of Accreditation.',
      image: '/assets/gilgit/hero-nirf-nba.svg',
      ctaText: 'View Accreditations',
      ctaLink: '#rankings',
      accentColor: '#38BDF8',
      stats: [
        { label: 'Engineering Status', value: 'NBA Accredited' },
        { label: 'Institutional Grade', value: 'NAAC A' },
        { label: 'Affiliation', value: 'AKTU Code 192' }
      ]
    },
    {
      id: 'hero-coe',
      badge: 'INDUSTRY 4.0 CENTERS OF EXCELLENCE',
      title: 'INNOVATION & HACKATHON CHAMPIONS',
      headline: 'Apple iOS Lab & MSME Incubation',
      subtitle: 'Smart India Hackathon consecutive winners with dedicated innovation centers co-established by Dassault Systèmes, Autodesk, Intel, and Texas Instruments.',
      image: '/assets/gilgit/hero-innovation-coe.svg',
      ctaText: 'Explore R&D Labs',
      ctaLink: '#innovation',
      accentColor: '#C084FC',
      stats: [
        { label: 'Hackathon Rank', value: 'SIH Winners' },
        { label: 'Incubator', value: 'MSME Approved' },
        { label: 'Industry CoEs', value: 'Apple, Dassault' }
      ]
    },
    {
      id: 'hero-infra',
      badge: 'MODERN KNOWLEDGE PARK CAMPUS',
      title: 'INFRASTRUCTURE & CAMPUS LIFE',
      headline: '15+ Acre Hi-Tech Smart Campus',
      subtitle: 'Centrally air-conditioned 1,000+ seater auditorium, automated central library, multi-cuisine cafeterias, and high-speed Wi-Fi residential hostels.',
      image: '/assets/gilgit/hero-campus-infra.svg',
      ctaText: 'Discover Facilities',
      ctaLink: '#facilities',
      accentColor: '#2DD4BF',
      stats: [
        { label: 'Campus Area', value: '15+ Acres' },
        { label: 'Auditorium Seater', value: '1,000+' },
        { label: 'Student Body', value: '10,000+' }
      ]
    }
  ] as GilgitHeroSlide[],

  programs: [
    {
      id: 'btech-cse',
      name: 'B.Tech in Computer Science & Engineering',
      code: 'B.TECH CSE',
      department: 'Department of Computer Science & Engineering',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      intake: 240,
      accreditation: 'NBA Accredited · AICTE Approved',
      eligibility: 'Pass 10+2 with Physics, Mathematics & Chemistry/CS with min 45% (40% for SC/ST) + JEE Main / UPCET rank.',
      highlights: [
        'Accredited by NBA for outcome-based technical curriculum',
        'Industry modules in Cloud Computing, Full Stack Web & Distributed Systems',
        'Direct placement pipelines with Amazon, Palo Alto, Cisco, and Microsoft',
        'Mandatory 6-month capstone software development project'
      ],
      careerRoles: ['Software Development Engineer', 'Full Stack Developer', 'Cloud Architect', 'Systems Engineer', 'DevOps Specialist'],
      category: 'cse-it',
      featured: true
    },
    {
      id: 'btech-cse-aiml',
      name: 'B.Tech in CSE (Artificial Intelligence & Machine Learning)',
      code: 'B.TECH CSE (AI & ML)',
      department: 'Department of CSE (Specializations)',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      intake: 180,
      accreditation: 'AICTE Approved · Affiliated to AKTU',
      eligibility: 'Pass 10+2 with Physics, Mathematics & Chemistry/CS with min 45% + JEE Main.',
      highlights: [
        'NVIDIA Deep Learning & Intel AI high-performance computing labs',
        'Core curriculum in Neural Networks, Deep Learning, Computer Vision & NLP',
        'Student teams regularly win national AI hackathons and publish IEEE papers',
        'AI incubator providing compute credits on AWS and Google Cloud'
      ],
      careerRoles: ['AI/ML Engineer', 'Computer Vision Specialist', 'NLP Researcher', 'Data Scientist', 'Automation Engineer'],
      category: 'ai-ds',
      featured: true
    },
    {
      id: 'btech-cse-ds',
      name: 'B.Tech in CSE (Data Science)',
      code: 'B.TECH CSE (DS)',
      department: 'Department of CSE (Specializations)',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      intake: 120,
      accreditation: 'AICTE Approved · Affiliated to AKTU',
      eligibility: 'Pass 10+2 with Physics, Mathematics with min 45% + JEE Main.',
      highlights: [
        'Big Data processing with Hadoop, Spark, Python, and Tableau dashboards',
        'Predictive analytics, financial quantitative modeling & business intelligence',
        'Capstone corporate data projects in partnership with Ernst & Young and Deloitte'
      ],
      careerRoles: ['Data Scientist', 'Big Data Engineer', 'Business Intelligence Analyst', 'Quantitative Modeler'],
      category: 'ai-ds',
      featured: true
    },
    {
      id: 'btech-it',
      name: 'B.Tech in Information Technology',
      code: 'B.TECH IT',
      department: 'Department of Information Technology',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      intake: 120,
      accreditation: 'NBA Accredited · AICTE Approved',
      eligibility: 'Pass 10+2 with Physics, Mathematics with min 45% + JEE Main.',
      highlights: [
        'Accredited by NBA for excellence in enterprise computing',
        'Information security, database administration, and mobile app architecture',
        'High recruitment conversion with top consulting and IT product firms'
      ],
      careerRoles: ['Information Security Analyst', 'Database Administrator', 'Network Solutions Engineer', 'IT Consultant'],
      category: 'cse-it',
      featured: false
    },
    {
      id: 'btech-ece',
      name: 'B.Tech in Electronics & Communication Engineering',
      code: 'B.TECH ECE',
      department: 'Department of Electronics & Communication',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      intake: 120,
      accreditation: 'NBA Accredited · AICTE Approved',
      eligibility: 'Pass 10+2 with PCM with min 45% + JEE Main.',
      highlights: [
        'Texas Instruments Embedded Systems and VLSI Design Center',
        'Robotics, 5G Wireless Communications, and IoT embedded hardware',
        'Recruitment by Intel, Qualcomm, Bosch, Samsung, and STMicroelectronics'
      ],
      careerRoles: ['VLSI Design Engineer', 'Embedded Systems Developer', 'Telecom Engineer', 'Hardware Verification Engineer'],
      category: 'ece-me',
      featured: false
    },
    {
      id: 'btech-me',
      name: 'B.Tech in Mechanical Engineering',
      code: 'B.TECH ME',
      department: 'Department of Mechanical Engineering',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      intake: 60,
      accreditation: 'NBA Accredited · AICTE Approved',
      eligibility: 'Pass 10+2 with PCM with min 45% + JEE Main.',
      highlights: [
        'Dassault Systèmes 3DEXPERIENCE Center and CATIA Design Labs',
        'Automotive Engineering, Mechatronics, and CNC Manufacturing setup',
        'Participation in national Formula Student & BAJA SAE racing events'
      ],
      careerRoles: ['Design Engineer (CAD/CAM)', 'Automotive Systems Engineer', 'Robotics Specialist', 'Production Manager'],
      category: 'ece-me',
      featured: false
    },
    {
      id: 'mba',
      name: 'Master of Business Administration (MBA)',
      code: 'MBA',
      department: 'Department of Management Studies',
      level: 'Postgraduate',
      duration: '2 Years (4 Semesters)',
      intake: 120,
      accreditation: 'AICTE Approved · Affiliated to AKTU',
      eligibility: "Recognized Bachelor's degree with min 50% + UPSEE/CAT/MAT/CMAT score & GD/PI.",
      highlights: [
        'Dual Specializations: Marketing, Finance, HR, Operations, and Information Technology',
        'Live business analytics simulations, NSE trading room modules, and corporate internships',
        '100% placement track record with top banks, FMCG majors, and consultancies'
      ],
      careerRoles: ['Marketing Manager', 'Financial Analyst', 'HR Business Partner', 'Operations Consultant', 'Business Development Lead'],
      category: 'postgraduate',
      featured: true
    },
    {
      id: 'mca',
      name: 'Master of Computer Applications (MCA)',
      code: 'MCA',
      department: 'Department of Computer Applications',
      level: 'Postgraduate',
      duration: '2 Years (4 Semesters)',
      intake: 120,
      accreditation: 'AICTE Approved · Affiliated to AKTU',
      eligibility: 'Passed BCA / B.Sc. (CS/IT) / B.Tech or Graduation with Mathematics at 10+2 with min 50%.',
      highlights: [
        'Intensive 2-year advanced software engineering curriculum',
        'Specialized modules in Cloud Computing, Cyber Security, and React/Node.js',
        'Direct campus recruitment by product startups and global tech services'
      ],
      careerRoles: ['Senior Software Engineer', 'Full Stack Developer', 'Cloud Architect', 'Technical Lead'],
      category: 'postgraduate',
      featured: false
    }
  ] as GilgitProgram[],

  recruiters: [
    { name: 'Palo Alto Networks', packageOffered: '₹58 LPA', sector: 'Cyber Security', role: 'Security Software Engineer' },
    { name: 'Amazon', packageOffered: '₹44 LPA', sector: 'E-Commerce & Cloud', role: 'Software Development Engineer' },
    { name: 'Autodesk', packageOffered: '₹36 LPA', sector: 'CAD & 3D Software', role: 'Design Tech Specialist' },
    { name: 'Cisco', packageOffered: '₹32 LPA', sector: 'Networking & Systems', role: 'Network Solutions Architect' },
    { name: 'Intuit', packageOffered: '₹28 LPA', sector: 'FinTech Software', role: 'Product Engineer' },
    { name: 'Morgan Stanley', packageOffered: '₹26 LPA', sector: 'Investment Banking', role: 'Technology Analyst' },
    { name: 'Adobe', packageOffered: '₹40 LPA', sector: 'Creative Software & Cloud', role: 'Member of Technical Staff' },
    { name: 'Bosch', packageOffered: '₹14 LPA', sector: 'Automotive & IoT', role: 'Embedded Systems Engineer' },
    { name: 'Capgemini', packageOffered: '₹12 LPA', sector: 'Global Consulting', role: 'Senior Analyst' },
    { name: 'Tata Consultancy Services', packageOffered: '₹9 LPA', sector: 'IT Services', role: 'Digital Systems Engineer' },
    { name: 'Infosys', packageOffered: '₹8.5 LPA', sector: 'Enterprise IT', role: 'Systems Specialist' },
    { name: 'Wipro Technologies', packageOffered: '₹7.5 LPA', sector: 'Cloud Engineering', role: 'Project Engineer' }
  ] as GilgitRecruiter[],

  centersOfExcellence: [
    {
      id: 'apple-ios',
      title: 'Apple Authorized iOS Development Lab',
      partner: 'Apple India',
      description: 'Equipped with 50+ Apple iMac workstations enabling student developers to build native iOS, iPadOS, and watchOS apps using Swift and Xcode.',
      equipment: 'iMac 24" M-Series, iOS Testing Devices, Apple Developer Enterprise Program Access',
      impact: '20+ Student Apps published to the global Apple App Store.'
    },
    {
      id: 'dassault',
      title: 'Dassault Systèmes 3DEXPERIENCE Center',
      partner: 'Dassault Systèmes',
      description: 'Industry-standard mechanical design, digital manufacturing, and finite element modeling (FEM) using CATIA, DELMIA, and SIMULIA suites.',
      equipment: 'Workstations with CATIA V6, 3DEXPERIENCE Platform, VR Headsets',
      impact: 'Certified 500+ mechanical and civil engineering students in automotive and aerospace design.'
    },
    {
      id: 'msme-incubator',
      title: 'MSME Approved Business Incubator',
      partner: 'Ministry of MSME, Govt. of India',
      description: 'Government-recognized startup incubator providing seed funding grants up to ₹15 Lakhs per innovative student prototype, patent filing assistance, and legal aid.',
      equipment: 'Maker Space with 3D Printing, PCB Fabrication, Laser Cutters, Prototype Assembly',
      impact: '15+ student startups funded with ₹2 Crore+ in commercial revenues.'
    },
    {
      id: 'intel-iot',
      title: 'Intel Intelligent Systems & IoT Lab',
      partner: 'Intel Technology',
      description: 'Hands-on edge computing, FPGA design, and computer vision acceleration using Intel OpenVINO toolkit and real-time sensory kits.',
      equipment: 'Intel Core i9 Industrial Workstations, OpenVINO Accelerators, IoT Development Kits',
      impact: 'Smart city and industrial surveillance prototypes winning National Science Congress awards.'
    }
  ] as GilgitCoE[],

  facilities: [
    {
      id: 'auditorium',
      title: 'Central Air-Conditioned Auditorium',
      category: 'Convention & Events',
      description: 'State-of-the-art 1,000+ capacity auditorium with high-definition acoustic audio arrays, automated stage lighting, and professional recording studios.',
      metrics: '1,000+ Capacity · Dolby Surround Sound',
      image: '/assets/gilgit/campus-auditorium.jpg',
      highlights: [
        'Hosts national tech conferences, cultural fests, hackathons, and corporate leadership talks',
        'Green rooms, live satellite streaming, and motorized projection screens',
        'Acoustically treated sound-dampening architectural interiors'
      ]
    },
    {
      id: 'library',
      title: 'Automated Central Digital Library',
      category: 'Academic Knowledge Hub',
      description: 'Modern 3-storey library housing over 50,000+ volumes, IEEE digital explore memberships, Delnet consortia, and 24/7 air-conditioned reading halls.',
      metrics: '50,000+ Books · 1,500+ E-Journals',
      image: '/assets/gilgit/campus-library.jpg',
      highlights: [
        'Fully computerized barcode and RFID circulation management systems',
        'Access to international databases like IEEE, Springer, ASME, and ScienceDirect',
        'Dedicated silent study pods and multimedia research cubicles'
      ]
    },
    {
      id: 'sports',
      title: 'Sports Arena & Athletic Facilities',
      category: 'Physical Fitness & Sports',
      description: 'Expansive sports complex featuring synthetic basketball courts, volleyball courts, floodlit cricket pitch, and dedicated indoor table tennis and gym facilities.',
      metrics: 'Full-Sized Sports Fields · Floodlit Courts',
      image: '/assets/gilgit/campus-sports.jpg',
      highlights: [
        'Full-time physical fitness instructors and certified sports coaches',
        'Annual inter-college sports festival and AKTU zonal tournament hosts',
        'State-of-the-art cardiovascular and strength conditioning gymnasiums'
      ]
    },
    {
      id: 'hostels',
      title: 'Residential Hostels & Multi-Cuisine Mess',
      category: 'On-Campus Living',
      description: 'Safe, comfortable on-campus residential hostels for boys and girls with AC and non-AC rooms, Wi-Fi, biometric security, and nutritious multi-cuisine dining.',
      metrics: '2,500+ Residents · 24/7 Security & Health Care',
      image: '/assets/gilgit/campus-hostel.jpg',
      highlights: [
        'Separate hostel complexes for boys and girls with strict 24/7 warden supervision',
        'Hygienic mechanized kitchens serving wholesome vegetarian and non-vegetarian meals',
        'Indoor recreation lounges, television rooms, and round-the-clock ambulance service'
      ]
    }
  ] as GilgitFacility[],

  testimonials: [
    {
      id: 'test-1',
      name: 'Abhinav Tyagi',
      program: 'B.Tech in Computer Science & Engineering',
      batch: 'Class of 2024',
      company: 'Palo Alto Networks',
      packageOffered: '₹58 LPA',
      role: 'Cloud Security Software Engineer',
      quote: 'The rigorous coding rounds, mock interview series, and faculty mentorship at Gilgit were transformative. Securing the ₹58 LPA offer was a dream come true for my entire family.',
      image: '/assets/gilgit/testimonial-1.jpg'
    },
    {
      id: 'test-2',
      name: 'Riya Sengupta',
      program: 'B.Tech in CSE (AI & Machine Learning)',
      batch: 'Class of 2023',
      company: 'Amazon Web Services',
      packageOffered: '₹44 LPA',
      role: 'SDE II',
      quote: 'Working in the Apple iOS and Intel AI Centers of Excellence gave me real hands-on systems expertise. The placement training team made sure every student was thoroughly prepared.',
      image: '/assets/gilgit/testimonial-2.jpg'
    },
    {
      id: 'test-3',
      name: 'Karan Mehra',
      program: 'Master of Business Administration (MBA)',
      batch: 'Class of 2023',
      company: 'Morgan Stanley',
      packageOffered: '₹26 LPA',
      role: 'Investment Banking Analyst',
      quote: 'The dual specialization curriculum and live capital market simulations gave me boardroom confidence. Gilgit bridges the gap between academic theory and corporate execution seamlessly.',
      image: '/assets/gilgit/testimonial-3.jpg'
    },
    {
      id: 'test-4',
      name: 'Shweta Dixit',
      program: 'B.Tech in Electronics & Communication',
      batch: 'Class of 2024',
      company: 'Cisco Systems',
      packageOffered: '₹32 LPA',
      role: 'Core Network Engineer',
      quote: 'The hardware labs and Texas Instruments embedded systems setup were second to none. The campus placement cell brings top tier product companies directly to our doorstep.',
      image: '/assets/gilgit/testimonial-4.jpg'
    }
  ] as GilgitTestimonial[],

  faqs: [
    {
      question: 'What is the highest placement package at Gilgit?',
      answer: 'For recent batches, the highest package offered was an outstanding ₹58 LPA by Palo Alto Networks. Our average placement package stands at ₹7.12 LPA, with over 3,000+ job offers extended by 300+ recruiters including Amazon, Cisco, Intuit, Autodesk, Adobe, and Morgan Stanley.',
      category: 'Placements'
    },
    {
      question: 'What accreditations and affiliations does Gilgit possess?',
      answer: 'Gilgit Institute of Technology & Management is approved by AICTE (Ministry of Education, Govt. of India) and affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU, College Code: 192). The institute is accredited by NAAC with Grade A and its core engineering branches (CSE, IT, ECE, ME) are accredited by the National Board of Accreditation (NBA).',
      category: 'Accreditation'
    },
    {
      question: 'How can I apply for B.Tech and MBA admissions 2026?',
      answer: 'Candidates can apply online through our official portal or via AKTU/UPCET state counseling. For B.Tech programs, JEE Main rank is preferred. For MBA, qualifying scores in CAT, MAT, XAT, CMAT, or UPSEE are accepted, followed by personal interview evaluation.',
      category: 'Admissions'
    },
    {
      question: 'What are the Centers of Excellence (CoE) available on campus?',
      answer: 'Gilgit houses dedicated, industry-sponsored Centers of Excellence including the Apple Authorized iOS Development Lab, Dassault Systèmes 3DEXPERIENCE Center, Intel IoT & Intelligent Systems Lab, Autodesk CAD/CAM Studio, and an MSME-approved Business Incubator supporting student startups with seed grants.',
      category: 'Campus & Hostels'
    },
    {
      question: 'Are on-campus hostel and transport facilities provided?',
      answer: 'Yes. The institute provides secure on-campus residential hostels for boys and girls with 24/7 security, biometric attendance, Wi-Fi, and hygienic dining. Additionally, a fleet of luxury air-conditioned buses connects the Knowledge Park campus with all major sectors of Noida, Greater Noida, Ghaziabad, and Delhi.',
      category: 'Hostels & Campus'
    },
    {
      question: 'Are scholarships available for meritorious students?',
      answer: 'Yes, Gilgit offers generous merit-based scholarships based on 10+2 marks, JEE Main percentiles, and university semester exam ranks, along with special fee concessions for girl students, defense personnel wards, and sports achievers.',
      category: 'Admissions'
    }
  ] as GilgitFaq[]
};
