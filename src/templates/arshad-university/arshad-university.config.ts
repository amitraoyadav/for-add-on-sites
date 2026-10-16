/**
 * Arshad University — Configuration & Authoritative Structured Data
 * Faithful reproduction of the uploaded university website architecture,
 * rebranding the institutional identity to Arshad University while preserving
 * all original academic faculties, accreditations, rankings, and layouts.
 */

export interface ArshadProgram {
  id: string;
  name: string;
  code: string;
  faculty: string;
  level: 'Undergraduate' | 'Postgraduate' | 'Diploma' | 'Doctoral';
  duration: string;
  feesPerSemester: string;
  scholarshipUpTo: string;
  eligibility: string;
  curriculumHighlights: string[];
  careerRoles: string[];
  category: 'engineering' | 'management' | 'computer-apps' | 'law' | 'pharmacy' | 'applied-sciences' | 'design';
  featured?: boolean;
}

export interface ArshadRanking {
  id: string;
  body: string;
  title: string;
  rank: string;
  year: string;
  description: string;
  badge: string;
  color: string;
}

export interface ArshadHeroSlide {
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

export interface ArshadDignitary {
  id: string;
  name: string;
  title: string;
  occasion: string;
  quote: string;
  image?: string;
  type: 'head-of-state' | 'nobel-laureate' | 'industry-leader' | 'sports-icon';
}

export interface ArshadCampusFeature {
  id: string;
  title: string;
  category: string;
  description: string;
  metrics: string;
  image: string;
  points: string[];
}

export interface ArshadTestimonial {
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

export interface ArshadFaq {
  question: string;
  answer: string;
  category: 'Admissions' | 'Scholarships' | 'Placements' | 'Campus & Hostels' | 'AUNEST';
}

export const ARSHAD_UNIVERSITY_CONFIG = {
  brand: {
    name: 'ARSHAD UNIVERSITY',
    shortName: 'Arshad Univ',
    legalName: 'Arshad University, Punjab (India)',
    tagline: 'Transforming Education · Transforming India',
    motto: 'Think Big. Lead Globally.',
    established: '2005',
    campusSize: '600+ Acres Hi-Tech Residential Campus',
    location: 'Jalandhar - Delhi G.T. Road, Phagwara, Punjab 144411, India',
    admissionHelpline: '1800 102 4431',
    intlHelpline: '+91 1824 517000',
    email: 'admissions@arshaduniversity.edu.in',
    studentPopulation: '35,000+ Students',
    countriesRepresented: '50+ Nationalities',
    statesRepresented: 'All 28 States & 8 UTs of India',
    naacGrade: 'NAAC A++ Grade with 3.68 CGPA',
    nirfRank: '#27 in All India Universities (NIRF 2024)',
    highestPackage: '₹3 Crore Per Annum (International)',
    domesticHighestPackage: '₹64 Lakh Per Annum',
    totalRecruiters: '1,000+ Multinational Recruiters',
    patentsFiled: '1,500+ Patents Filed by Students & Faculty',
    sportsDistinction: 'MAKA Trophy National Sports Champions & 12+ Olympians'
  },

  logos: {
    color: '/assets/arshad-university/logo.svg',
    white: '/assets/arshad-university/logo-white.svg'
  },

  rankings: [
    {
      id: 'naac',
      body: 'NAAC (UGC)',
      title: 'Grade A++ (Score 3.68 / 4)',
      rank: 'A++',
      year: 'Cycle 1 Accreditation',
      description: 'Awarded the supreme Grade A++ with an extraordinary 3.68 score on 4-point scale by National Assessment & Accreditation Council.',
      badge: '/assets/arshad-university/badge-naac.svg',
      color: '#F59E0B'
    },
    {
      id: 'nirf',
      body: 'Ministry of Education (Govt. of India)',
      title: 'NIRF Ranking 2024',
      rank: '#27',
      year: '2024',
      description: 'Ranked 27th across all universities in India. Recognized in Top 50 Overall, #16 Architecture, #17 Pharmacy, #19 Law, and #38 Management.',
      badge: '/assets/arshad-university/badge-nirf.svg',
      color: '#0284C7'
    },
    {
      id: 'the-impact',
      body: 'Times Higher Education',
      title: 'THE World University Rankings',
      rank: 'Top 100',
      year: '2024',
      description: 'Ranked in the Top 100 in the world for global impact and sustainable development goals, and amongst the leading Indian institutions.',
      badge: '/assets/arshad-university/badge-the.svg',
      color: '#EF4444'
    },
    {
      id: 'wuri',
      body: 'WURI Rankings',
      title: 'World University Rankings for Innovation',
      rank: '#1 in India',
      year: '2024',
      description: 'Ranked 1st in India for Innovation and Student Mobility, ahead of traditional national technological institutes.',
      badge: '/assets/arshad-university/badge-wuri.svg',
      color: '#8B5CF6'
    },
    {
      id: 'maka',
      body: 'President of India',
      title: 'MAKA National Sports Trophy',
      rank: '1st Runner-Up',
      year: '2023–24',
      description: 'Maulana Abul Kalam Azad Trophy presented by the Hon’ble President of India for the country’s most outstanding athletic prowess.',
      badge: '/assets/arshad-university/badge-maka.svg',
      color: '#EC4899'
    }
  ] as ArshadRanking[],

  heroSlides: [
    {
      id: 'slide-modi',
      badge: 'HISTORIC VISIT BY HON\'BLE PRIME MINISTER',
      title: 'PRIME MINISTER NARENDRA MODI',
      headline: 'Inaugurated 106th Indian Science Congress',
      subtitle: 'Addressed 30,000+ scientists, Nobel laureates, and researchers at Arshad University campus: "Future belongs to universities that pioneer AI, scientific research and youth entrepreneurship."',
      image: '/assets/arshad-university/hero-modi.svg',
      ctaText: 'Explore Research & Innovation',
      ctaLink: '#research',
      accentColor: '#F97316',
      stats: [
        { label: 'Nobel Laureates Present', value: '6+' },
        { label: 'Global Delegates', value: '30,000+' },
        { label: 'Countries Represented', value: '60+' }
      ]
    },
    {
      id: 'slide-naac',
      badge: 'SUPREME GOVERNMENT ACCREDITATION',
      title: 'NAAC GRADE A++',
      headline: 'Highest Score of 3.68 / 4.0 in India',
      subtitle: 'Arshad University achieved the coveted A++ Grade with a 3.68 score on 4-point scale, certifying world-class pedagogy, doctoral faculty, state-of-the-art laboratories, and unmatched placements.',
      image: '/assets/arshad-university/hero-naac.svg',
      ctaText: 'View Accreditations',
      ctaLink: '#rankings',
      accentColor: '#F59E0B',
      stats: [
        { label: 'CGPA Score', value: '3.68 / 4' },
        { label: 'Accreditation', value: 'Grade A++' },
        { label: 'Recognition', value: 'UGC & MHRD' }
      ]
    },
    {
      id: 'slide-nirf',
      badge: 'NATIONAL INSTITUTIONAL RANKING FRAMEWORK',
      title: 'NIRF RANKINGS 2024',
      headline: 'Ranked 27th Amongst All Indian Universities',
      subtitle: 'Rated among India’s top comprehensive universities by Ministry of Education. Dominant ranks across Architecture (#16), Pharmacy (#17), Law (#19), and Management (#38).',
      image: '/assets/arshad-university/hero-nirf.svg',
      ctaText: 'Check NIRF Rankings',
      ctaLink: '#rankings',
      accentColor: '#0284C7',
      stats: [
        { label: 'All-India Rank', value: '#27' },
        { label: 'Architecture Faculty', value: '#16' },
        { label: 'Pharmacy Faculty', value: '#17' }
      ]
    },
    {
      id: 'slide-placement',
      badge: 'RECORD BREAKING PLACEMENTS',
      title: 'GLOBAL RECRUITMENT BENCHMARK',
      headline: '₹3 Crore Highest Package Offered',
      subtitle: 'Arshad University scholars recruited by Google, Microsoft, Amazon, Cisco, and 1,000+ global brands. Over 2,000+ recruiters recruit directly on campus each academic year.',
      image: '/assets/arshad-university/hero-placement.svg',
      ctaText: 'Explore Placement Records',
      ctaLink: '#placements',
      accentColor: '#10B981',
      stats: [
        { label: 'Highest Package', value: '₹3 Crore' },
        { label: 'Domestic Highest', value: '₹64 Lakh' },
        { label: 'Top Recruiters', value: '1,000+' }
      ]
    },
    {
      id: 'slide-maka',
      badge: 'OLYMPIC & NATIONAL ATHLETIC PRIDE',
      title: 'MAKA TROPHY EXCELLENCE',
      headline: 'Alma Mater of Olympic Gold Medalist Neeraj Chopra',
      subtitle: 'Conferred Maulana Abul Kalam Azad (MAKA) Trophy 1st Runner-Up by the President of India. 12+ student-athletes represented India in Tokyo and Paris Olympic Games.',
      image: '/assets/arshad-university/hero-maka.svg',
      ctaText: 'Discover Sports Arena',
      ctaLink: '#campus-life',
      accentColor: '#EC4899',
      stats: [
        { label: 'National Trophy', value: 'MAKA Trophy' },
        { label: 'Olympians', value: '12+ Athletes' },
        { label: 'Gold Medalist', value: 'Neeraj Chopra' }
      ]
    }
  ] as ArshadHeroSlide[],

  programs: [
    {
      id: 'btech-cse',
      name: 'B.Tech in Computer Science & Engineering',
      code: 'BTECH-CSE',
      faculty: 'School of Computer Science & Engineering',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      feesPerSemester: '₹1,40,000',
      scholarshipUpTo: 'Upto ₹70,000 per sem via AUNEST',
      eligibility: 'Pass with 60% aggregate marks in 10+2 (with Physics, Mathematics and English) + AUNEST entrance score.',
      curriculumHighlights: [
        'Specializations in Artificial Intelligence & Machine Learning, Data Science, Cyber Security, Cloud Computing',
        'Co-developed with Google Cloud, Microsoft, Amazon AWS, and Intel Developer Zone',
        'Full semester capstone industry internship with top product engineering companies',
        '100+ state-of-the-art supercomputing and AI GPU laboratories on campus'
      ],
      careerRoles: ['Software Development Engineer', 'Cloud Solutions Architect', 'AI/ML Engineer', 'Cyber Security Specialist', 'Full Stack Developer'],
      category: 'engineering',
      featured: true
    },
    {
      id: 'mba-flagship',
      name: 'Master of Business Administration (MBA)',
      code: 'MBA',
      faculty: 'Mittal School of Business (NIRF #38)',
      level: 'Postgraduate',
      duration: '2 Years (4 Semesters)',
      feesPerSemester: '₹2,00,000',
      scholarshipUpTo: 'Upto ₹1,00,000 per sem via AUNEST/CAT/MAT',
      eligibility: "Pass with 55% aggregate marks in Bachelor's degree + AUNEST or CAT/XAT/MAT/CMAT + Interview.",
      curriculumHighlights: [
        'Accredited by ACBSP (USA) and ranked among Top 40 B-Schools in India by NIRF',
        'Dual Specializations: FinTech, Digital Marketing, Business Analytics, International Business, Supply Chain',
        'Live consulting projects with KPMG, Deloitte, PwC, Amazon, and HDFC Bank',
        'International exchange semesters with partner universities in USA, France, Canada & UK'
      ],
      careerRoles: ['Management Consultant', 'Investment Banking Associate', 'Brand Strategy Manager', 'Product Marketing Manager', 'Supply Chain Director'],
      category: 'management',
      featured: true
    },
    {
      id: 'bca',
      name: 'Bachelor of Computer Applications (BCA)',
      code: 'BCA',
      faculty: 'School of Computer Applications',
      level: 'Undergraduate',
      duration: '3 Years (6 Semesters)',
      feesPerSemester: '₹80,000',
      scholarshipUpTo: 'Upto ₹40,000 per sem via AUNEST',
      eligibility: 'Pass with 50% aggregate marks in 10+2 (with English) or equivalent qualification.',
      curriculumHighlights: [
        'Foundational and advanced tracks in Python, Java, React, Node.js, and Mobile App Development',
        'Database Management, AWS Cloud deployment, and enterprise UI/UX design',
        'Live hackathons and software incubators at Student Innovation Labs'
      ],
      careerRoles: ['Web Application Developer', 'Frontend Engineer', 'Database Administrator', 'QA Automation Engineer', 'IT Consultant'],
      category: 'computer-apps',
      featured: false
    },
    {
      id: 'ba-llb-hons',
      name: 'B.A. LL.B. (Honours) Integrated Law Degree',
      code: 'BALLB-HONS',
      faculty: 'School of Law (NIRF #19 in India)',
      level: 'Undergraduate',
      duration: '5 Years (10 Semesters)',
      feesPerSemester: '₹1,20,000',
      scholarshipUpTo: 'Upto ₹60,000 per sem via CLAT / AUNEST',
      eligibility: 'Pass with 60% aggregate marks in 10+2 + CLAT or AUNEST Law entrance score.',
      curriculumHighlights: [
        'Approved by Bar Council of India (BCI) and ranked 19th in India by NIRF',
        'In-house high-tech Moot Courtrooms modeled after the Supreme Court of India',
        'Legal Aid Clinics providing free constitutional counsel to regional communities',
        'Corporate internships with Senior Advocates, High Courts, and corporate legal wings'
      ],
      careerRoles: ['Corporate Legal Counsel', 'Litigation Advocate', 'Judicial Services Officer', 'Arbitration Consultant', 'Policy Analyst'],
      category: 'law',
      featured: true
    },
    {
      id: 'b-pharm',
      name: 'Bachelor of Pharmacy (B.Pharm)',
      code: 'BPHARM',
      faculty: 'School of Pharmaceutical Sciences (NIRF #17)',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      feesPerSemester: '₹1,20,000',
      scholarshipUpTo: 'Upto ₹60,000 per sem via AUNEST',
      eligibility: 'Pass with 60% aggregate marks in 10+2 with Physics, Chemistry and Biology/Maths + AUNEST/NEET.',
      curriculumHighlights: [
        'Approved by Pharmacy Council of India (PCI) and ranked #17 in India by NIRF',
        'GMP compliant Pilot Plant, Animal House Facility, and Pharmacology research wings',
        'Formulation design, Clinical Trials, Pharmacovigilance and Drug Regulatory Affairs',
        'Direct recruitment by Sun Pharma, Cipla, Dr. Reddy’s, Pfizer, and Abbott'
      ],
      careerRoles: ['Drug Research Scientist', 'Clinical Research Associate', 'Quality Assurance Manager', 'Regulatory Affairs Executive', 'Formulation Chemist'],
      category: 'pharmacy',
      featured: true
    },
    {
      id: 'bsc-agriculture',
      name: 'B.Sc. (Hons.) Agriculture',
      code: 'BSC-AGRI',
      faculty: 'School of Agriculture (ICAR Accredited)',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      feesPerSemester: '₹1,20,000',
      scholarshipUpTo: 'Upto ₹60,000 per sem via AUNEST',
      eligibility: 'Pass with 60% aggregate marks in 10+2 with PCB / PCM / Agriculture + AUNEST score.',
      curriculumHighlights: [
        'Accredited by Indian Council of Agricultural Research (ICAR)',
        '1000+ acres of dedicated agricultural research farms, greenhouses, and polyhouses',
        'Rural Agricultural Work Experience (RAWE) & Agro-Industrial Attachment programs',
        'Soil testing labs, organic farming certifications, and hydroponics demonstration units'
      ],
      careerRoles: ['Agricultural Officer', 'Agronomist', 'Food Quality Inspector', 'Agri-Business Manager', 'Seed Technology Consultant'],
      category: 'applied-sciences',
      featured: false
    },
    {
      id: 'bdes-fashion',
      name: 'Bachelor of Design (B.Des) — Fashion Design',
      code: 'BDES-FASHION',
      faculty: 'School of Design & Fashion Technology',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      feesPerSemester: '₹1,20,000',
      scholarshipUpTo: 'Upto ₹60,000 per sem via AUNEST / Portfolio',
      eligibility: 'Pass with 50% aggregate marks in 10+2 + Design Aptitude Test & Portfolio Evaluation.',
      curriculumHighlights: [
        'Showcase at national fashion weeks (Lakme Fashion Week & London Graduate Fashion Week)',
        'Garment construction labs, CAD textile pattern-making, and digital drapery suites',
        'Mentored by celebrity fashion designers and luxury brand creative directors'
      ],
      careerRoles: ['Fashion Designer', 'Textile Stylist', 'Costume Coordinator', 'Visual Merchandiser', 'Luxury Brand Manager'],
      category: 'design',
      featured: false
    },
    {
      id: 'btech-ai-ds',
      name: 'B.Tech in Artificial Intelligence & Data Science',
      code: 'BTECH-AIDS',
      faculty: 'School of Computer Science & Engineering',
      level: 'Undergraduate',
      duration: '4 Years (8 Semesters)',
      feesPerSemester: '₹1,50,000',
      scholarshipUpTo: 'Upto ₹75,000 per sem via AUNEST',
      eligibility: 'Pass with 60% aggregate marks in 10+2 (Physics, Mathematics, English) + AUNEST score.',
      curriculumHighlights: [
        'Cutting-edge generative AI, large language models (LLMs), computer vision, and neural networks',
        'NVIDIA Deep Learning Institute certified modules and high-compute GPU access',
        'Hands-on industry projects addressing autonomous driving, healthcare diagnosis, and robotics'
      ],
      careerRoles: ['Machine Learning Scientist', 'AI Product Engineer', 'Deep Learning Researcher', 'Data Architect', 'NLP Engineer'],
      category: 'engineering',
      featured: true
    }
  ] as ArshadProgram[],

  recruiters: [
    { name: 'Google', package: '₹64 LPA', sector: 'Software & Technology', logo: 'recruiter-google.svg' },
    { name: 'Microsoft', package: '₹50 LPA', sector: 'Cloud & AI', logo: 'recruiter-microsoft.svg' },
    { name: 'Amazon', package: '₹46 LPA', sector: 'E-Commerce & AWS', logo: 'recruiter-amazon.svg' },
    { name: 'Cisco', package: '₹32 LPA', sector: 'Networking & Systems', logo: 'recruiter-cisco.svg' },
    { name: 'Dell Technologies', package: '₹28 LPA', sector: 'Enterprise IT', logo: 'recruiter-dell.svg' },
    { name: 'Intel', package: '₹34 LPA', sector: 'Semiconductor & Hardware', logo: 'recruiter-intel.svg' },
    { name: 'Bosch', package: '₹22 LPA', sector: 'Automotive & IoT', logo: 'recruiter-bosch.svg' },
    { name: 'VMware', package: '₹30 LPA', sector: 'Virtualization & Cloud', logo: 'recruiter-vmware.svg' },
    { name: 'Tata Consultancy Services', package: '₹15 LPA', sector: 'Global IT Consulting', logo: 'recruiter-tcs.svg' },
    { name: 'Cognizant', package: '₹14 LPA', sector: 'Digital Business Solutions', logo: 'recruiter-cognizant.svg' },
    { name: 'Infosys', package: '₹12 LPA', sector: 'Consulting & Engineering', logo: 'recruiter-infosys.svg' },
    { name: 'Pega Systems', package: '₹24 LPA', sector: 'Enterprise Automation', logo: 'recruiter-pega.svg' }
  ],

  dignitaries: [
    {
      id: 'narendra-modi',
      name: 'Narendra Modi',
      title: 'Hon\'ble Prime Minister of India',
      occasion: 'Inauguration of 106th Indian Science Congress',
      quote: '"I am delighted to be at this vibrant university. The creative talent, scientific innovations and high energy of young scholars here embody the spirit of New India."',
      type: 'head-of-state'
    },
    {
      id: 'dalai-lama',
      name: 'His Holiness the 14th Dalai Lama',
      title: 'Nobel Peace Laureate & Spiritual Leader',
      occasion: 'Presided over Special University Convocation',
      quote: '"True education must combine modern scientific intellect with ancient compassions and moral ethics. This campus is educating the heart as well as the mind."',
      type: 'nobel-laureate'
    },
    {
      id: 'liz-truss',
      name: 'Mary Elizabeth Truss',
      title: 'Former Prime Minister of the United Kingdom',
      occasion: 'Addressed Global Education & Geopolitics Summit',
      quote: '"The international diversity and academic scale of this university demonstrates India\'s role as an undeniable global innovation powerhouse."',
      type: 'head-of-state'
    },
    {
      id: 'tony-abbott',
      name: 'Tony Abbott',
      title: 'Former Prime Minister of Australia',
      occasion: 'Inauguration of Indo-Australian Bilateral Education Center',
      quote: '"What Arshad University has built in Punjab is breathtaking. It rivals the world\'s great residential campuses in both infrastructure and vision."',
      type: 'head-of-state'
    },
    {
      id: 'hamid-karzai',
      name: 'Hamid Karzai',
      title: 'Former President of Afghanistan',
      occasion: 'Annual International Students Convocation',
      quote: '"Watching thousands of international students from 50 nations study peacefully together here fills me with immense hope for our global fraternity."',
      type: 'head-of-state'
    },
    {
      id: 'thomas-sudhof',
      name: 'Prof. Thomas C. Südhof',
      title: 'Nobel Laureate in Physiology & Medicine (Stanford University)',
      occasion: 'Keynote Speaker at World Molecular Biology Congress',
      quote: '"The curiosity of the students here and their questions on cellular neuroscience was as sharp as anywhere at Stanford or Harvard."',
      type: 'nobel-laureate'
    },
    {
      id: 'avram-hershko',
      name: 'Prof. Avram Hershko',
      title: 'Nobel Laureate in Chemistry (Technion)',
      occasion: 'Distinguished Scientist Address to Biochemistry Scholars',
      quote: '"Scientific breakthrough demands relentless curiosity. I was deeply impressed by the research questions posed by your undergraduate scholars."',
      type: 'nobel-laureate'
    },
    {
      id: 'neeraj-chopra',
      name: 'Neeraj Chopra',
      title: 'Olympic Gold Medalist & World Athletics Champion (Alumnus)',
      occasion: 'Alumni Felicitation & National Sports Day Ceremony',
      quote: '"The coaches, world-standard indoor javelin setups, and unconditional encouragement I received at my university made my Olympic journey possible."',
      type: 'sports-icon'
    },
    {
      id: 'vineeta-singh',
      name: 'Vineeta Singh',
      title: 'Co-founder & CEO, SUGAR Cosmetics | Shark Tank India',
      occasion: 'Youth Entrepreneurship Conclave Keynote',
      quote: '"The sheer entrepreneurial hustle on this campus is electric. The students aren\'t just preparing for jobs; hundreds are launching scalable startups right here."',
      type: 'industry-leader'
    },
    {
      id: 'aman-gupta',
      name: 'Aman Gupta',
      title: 'Co-founder & CMO, boAt | Shark Tank India',
      occasion: 'Student Startup Pitch Fest Chief Guest',
      quote: '"India\'s next unicorns are brewing inside university campuses like this. The energy, design thinking and fearless ambition here is inspiring."',
      type: 'industry-leader'
    }
  ] as ArshadDignitary[],

  campusLife: [
    {
      id: 'one-world',
      title: 'One World International Fest',
      category: 'Global Cultural Festival',
      description: 'Over 50+ international student contingents showcase their countries\' traditional folklore, national cuisines, attire, and dance on campus.',
      metrics: '50+ Countries · 30,000+ Attendees',
      image: '/assets/arshad-university/event-cultural.jpg',
      points: [
        'Grand international street carnival stretching across the central university boulevard',
        'Cultural pavilions set up by diplomats and international student embassies',
        'Celebration of worldwide peace, mutual understanding, and multicultural empathy'
      ]
    },
    {
      id: 'spectra',
      title: 'Spectra Annual Extravaganza',
      category: 'Inter-School Performing Arts',
      description: 'The biggest university cultural festival in North India with 30+ competitive categories in dance, music, theatrical arts, and literary debates.',
      metrics: '70+ Academic Schools Competing',
      image: '/assets/arshad-university/event-seminar.jpg',
      points: [
        'Judged by eminent Bollywood directors, musicians, and classical luminaries',
        'High-energy musical concerts and celebrity performances',
        'Comprehensive artistic platform discovering top national collegiate talent'
      ]
    },
    {
      id: 'innovation-hub',
      title: 'Bharat Innovation & Startup Incubator',
      category: 'Research & Entrepreneurship',
      description: 'Dedicated 50,000 sq.ft. startup incubator providing seed capital, IP patent lawyers, cloud credits, and mentor access to student founders.',
      metrics: '₹10 Cr+ Seed Grants · 100+ Startups Incubated',
      image: '/assets/arshad-university/event-workshop.jpg',
      points: [
        'Over 1,500+ patents filed by students and faculty within the last 5 years',
        'Makerspaces with 3D printers, CNC laser cutters, and IoT testing benches',
        'Direct demo days with Indian and global angel investors and venture funds'
      ]
    },
    {
      id: 'sports-complex',
      title: 'Olympic-Standard Sports Arena',
      category: 'Athletics & Physical Training',
      description: 'Home of the national MAKA Trophy champions. Features an indoor stadium, 50-meter Olympic swimming pool, synthetic athletic tracks, and shooting ranges.',
      metrics: 'Olympic Gold Alma Mater · 100+ National Medals',
      image: '/assets/arshad-university/campus-sports.jpg',
      points: [
        'Full-time NIS certified coaches across athletics, badminton, boxing, judo, and wrestling',
        'State-of-the-art sports biomechanics and physiotherapy recovery center',
        '100% sports scholarship and sponsorship for national and international champions'
      ]
    }
  ] as ArshadCampusFeature[],

  testimonials: [
    {
      id: 'test-1',
      name: 'Yasir Khan',
      program: 'B.Tech Computer Science & Engineering',
      batch: 'Class of 2024',
      company: 'Google (Zurich, Switzerland)',
      packageOffered: '₹64 Lakh Domestic (Converted to International)',
      role: 'Software Engineer III',
      quote: 'The coding culture and hackathons at Arshad University prepared me for the most rigorous algorithmic rounds at Google. The 24/7 labs and faculty support made all the difference.',
      image: '/assets/arshad-university/testimonial-1.jpg'
    },
    {
      id: 'test-2',
      name: 'Ananya Deshmukh',
      program: 'Master of Business Administration (MBA)',
      batch: 'Class of 2023',
      company: 'Amazon Web Services',
      packageOffered: '₹28 Lakh Domestic',
      role: 'Senior Product Marketing Manager',
      quote: 'At Mittal School of Business, our case studies and live consultancy assignments put us directly in corporate boardrooms. I landed my dream role through campus placement.',
      image: '/assets/arshad-university/testimonial-2.jpg'
    },
    {
      id: 'test-3',
      name: 'Rohit Verma',
      program: 'B.A. LL.B. (Honours)',
      batch: 'Class of 2022',
      company: 'Shardul Amarchand Mangaldas & Co.',
      packageOffered: 'Corporate Law Associate',
      role: 'Associate Legal Counsel',
      quote: 'The moot court competitions and high-court internships organized by the School of Law gave me courtroom confidence long before graduation. Proud to be an Arshad alumnus.',
      image: '/assets/arshad-university/testimonial-3.jpg'
    },
    {
      id: 'test-4',
      name: 'Fatima Al-Zahra',
      program: 'Bachelor of Pharmacy (B.Pharm)',
      batch: 'Class of 2024',
      company: 'Pfizer Global Health',
      packageOffered: 'Drug Safety Specialist',
      role: 'Pharmacovigilance Executive',
      quote: 'Coming from abroad, the multicultural warmth and world-standard pharmacy instrumentation made my 4 years unforgettable. The placement cell guided me through every interview step.',
      image: '/assets/arshad-university/testimonial-4.jpg'
    }
  ] as ArshadTestimonial[],

  faqs: [
    {
      question: 'What is AUNEST and is it mandatory for admissions?',
      answer: 'AUNEST (Arshad University National Entrance and Scholarship Test) is the official online entrance test that serves a dual purpose: determining eligibility for specialized degree programs (such as B.Tech, MBA, Pharmacy, and Law) and awarding merit-based scholarships of up to 50% on academic tuition fees. Candidates with qualifying national scores (like JEE Main, CAT, CLAT, or NEET) may also claim direct scholarship exemptions.',
      category: 'AUNEST'
    },
    {
      question: 'What is the NAAC A++ accreditation score of Arshad University?',
      answer: 'Arshad University has been accredited with the highest Grade A++ by NAAC with an exceptional score of 3.68 on a 4.0-point scale. This official government assessment evaluates curriculum relevance, faculty doctoral qualifications, research citations, campus infrastructure, and student placement outcomes.',
      category: 'Admissions'
    },
    {
      question: 'What are the highest and average placement packages offered on campus?',
      answer: 'For the recent academic cycle, Arshad University scholars achieved a record international placement package of ₹3 Crore per annum with an overseas enterprise, along with a domestic highest package of ₹64 Lakh per annum. Over 1,000+ multinational companies recruit on campus, with over 12,000+ job offers extended.',
      category: 'Placements'
    },
    {
      question: 'What residential hostel and security facilities are available on the 600-acre campus?',
      answer: 'The campus houses over 25,000+ resident students in secure apartment-style hostel blocks with choices of Standard, Deluxe, and AC rooms. Facilities include high-speed Wi-Fi, biometric security, 24/7 CCTV surveillance, departmental stores, indoor gyms, self-service laundries, and multi-cuisine hygienic dining halls serving North Indian, South Indian, Continental, and International fare.',
      category: 'Campus & Hostels'
    },
    {
      question: 'How can international students apply for admissions?',
      answer: 'The Division of International Affairs assists students from over 50 countries with fast-track online eligibility evaluation, provisional admission letters for student visa processing, airport reception, on-campus FRRO registration, and dedicated international student mentor counselors.',
      category: 'Admissions'
    },
    {
      question: 'Are scholarships available for sports champions and defense wards?',
      answer: 'Yes. In addition to AUNEST academic merit scholarships, Arshad University offers generous financial aid covering up to 100% of tuition and residential fees for athletes who have represented states or the nation, wards of defense and paramilitary martyrs, single girl children, and differently-abled scholars.',
      category: 'Scholarships'
    }
  ] as ArshadFaq[]
};
