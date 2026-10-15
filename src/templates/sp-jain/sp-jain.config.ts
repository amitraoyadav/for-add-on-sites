/**
 * SP Jain School of Global Management — Configuration & Structured Data
 * Authentic Australian business school with campuses in Dubai, Mumbai, Singapore, and Sydney.
 */

export interface SpJainProgram {
  id: string;
  name: string;
  code: string;
  level: 'Undergraduate' | 'Postgraduate' | 'Executive' | 'Doctoral';
  duration: string;
  campuses: string[];
  intake: string;
  tagline: string;
  description: string;
  accreditation: string;
  highlights: string[];
  careerRoles: string[];
  eligibility: string;
  category: 'business' | 'data-science' | 'executive';
}

export interface SpJainCampus {
  id: string;
  city: string;
  country: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  image: string;
  badge: string;
  features: string[];
  description: string;
}

export interface SpJainRanking {
  publication: string;
  rank: string;
  category: string;
  year: string;
  description: string;
}

export interface SpJainPillar {
  title: string;
  subtitle: string;
  icon: string;
  description: string;
}

export interface SpJainNews {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  summary: string;
  fullStory: string;
}

export interface SpJainTestimonial {
  name: string;
  program: string;
  batch: string;
  company: string;
  role: string;
  location: string;
  quote: string;
  avatar: string;
}

export interface SpJainFaq {
  question: string;
  answer: string;
  category: 'Admissions' | 'Multi-Campus' | 'Accreditation' | 'Careers';
}

export const SP_JAIN_CONFIG = {
  brand: {
    name: 'S P JAIN',
    fullName: 'S P Jain School of Global Management',
    shortName: 'SP Jain Global',
    motto: 'Crafting World Ready Leaders',
    tagline: 'Australian Business School with Campuses in Dubai, Mumbai, Singapore and Sydney',
    established: '2004',
    accreditationBody: 'TEQSA (Tertiary Education Quality and Standards Agency, Australia)',
    cricosProviderCode: '03335G',
    globalCampuses: ['Dubai', 'Mumbai', 'Singapore', 'Sydney'],
    tollFreeIndia: '1800 200 0827',
    intlPhone: '+971 4 5616 700',
    email: 'admissions@spjain.org',
    alumniCount: '12,000+',
    countriesRepresented: '60+',
    globalFacultyRatio: '100% International Faculty',
    rankingHighlight: '#7 in Asia-Pacific (Bloomberg Businessweek 2023-24)'
  },

  logos: {
    color: '/assets/sp-jain/logo.svg',
    white: '/assets/sp-jain/logo-white.svg'
  },

  rankings: [
    {
      publication: 'Bloomberg Businessweek',
      rank: '#7',
      category: 'Best B-Schools in Asia-Pacific',
      year: '2023–2024',
      description: 'Ranked #7 in the Asia-Pacific region, evaluating learning, networking, entrepreneurship, and compensation.'
    },
    {
      publication: 'Forbes',
      rank: 'Top 15',
      category: 'Best International 1-Year MBAs in the World',
      year: '2019–2021',
      description: 'Ranked among the world top 15 one-year MBA programs based on return on investment and career salary progression.'
    },
    {
      publication: 'Times Higher Education - WSJ',
      rank: 'Top 4',
      category: '1-Year MBA Programs Worldwide',
      year: '2018–2019',
      description: 'Recognized for teaching quality, research citations, and global student integration across international campuses.'
    },
    {
      publication: 'Financial Times (FT)',
      rank: 'Top 100',
      category: 'Global MBA Ranking',
      year: '2015–2016',
      description: 'Ranked in the prestigious Top 100 Global MBA programs worldwide for international course experience.'
    }
  ] as SpJainRanking[],

  heroSlides: [
    {
      id: 'bloomberg-ranking',
      badge: 'GLOBAL RANKINGS 2023–24',
      title: 'BLOOMBERG BUSINESSWEEK',
      headline: '#7 IN ASIA-PACIFIC',
      subtitle: 'Ranked among the premier business schools worldwide. Experience world-class multi-city education that equips you to lead global enterprises.',
      ctaPrimary: 'Explore Rankings & Accreditations',
      ctaSecondary: 'Apply Online 2026',
      bgType: 'gradient',
      image: '/assets/sp-jain/hero-bloomberg.svg',
      tagColor: '#D4AF37'
    },
    {
      id: 'tri-city-model',
      badge: 'THE TRI-CITY ADVANTAGE',
      title: 'ONE AUSTRALIAN DEGREE',
      headline: 'THREE GLOBAL METROPOLISES',
      subtitle: 'Live, learn, and intern across Dubai, Singapore, and Sydney. Build unprecedented cultural intelligence and a worldwide professional network.',
      ctaPrimary: 'Discover Multi-Campus Model',
      ctaSecondary: 'Download Global Brochure',
      bgType: 'image',
      image: '/assets/sp-jain/hero-tri-city.svg',
      tagColor: '#F59E0B'
    },
    {
      id: 'elo-ai-tutor',
      badge: 'FUTURE OF HIGHER EDUCATION',
      title: 'PROPRIETARY ELO LABS',
      headline: 'ENGAGED LEARNING & AI-TUTOR',
      subtitle: 'Virtual learning reimagined. Real-time emotion analytics, 20+ HD cameras, and 24/7 AI-Tutor individualized executive mentoring.',
      ctaPrimary: 'Experience ELO Technology',
      ctaSecondary: 'Schedule Counselor Call',
      bgType: 'gradient',
      image: '/assets/sp-jain/hero-elo.svg',
      tagColor: '#06B6D4'
    }
  ],

  pillars: [
    {
      title: 'Top Ranked Globally',
      subtitle: '#7 in Asia-Pacific',
      icon: '/assets/sp-jain/icon-top-rank.svg',
      description: 'Ranked #7 by Bloomberg Businessweek (2023-24) and Top 15 in the World by Forbes, rivaling premier institutions.'
    },
    {
      title: 'Real-Time Industry Projects',
      subtitle: '85%+ Global Placements',
      icon: '/assets/sp-jain/icon-industry.svg',
      description: 'Engage in hands-on industry consulting capstones and internships with multinational brands in Singapore, Sydney, and Dubai.'
    },
    {
      title: 'Boost Leadership Skills',
      subtitle: 'Tri-City Cultural Mastery',
      icon: '/assets/sp-jain/icon-leadership.svg',
      description: 'Living in three business capitals builds genuine cross-border resilience, executive decision-making, and cultural fluency.'
    },
    {
      title: 'Global Alumni Network',
      subtitle: '12,000+ Alumni in 60+ Countries',
      icon: '/assets/sp-jain/icon-alumni.svg',
      description: 'Join a powerful worldwide fraternity of CEOs, venture founders, and senior directors in New York, London, Singapore, and Sydney.'
    },
    {
      title: 'World-Class Global Faculty',
      subtitle: 'PhD Scholars & Industry Leaders',
      icon: '/assets/sp-jain/icon-faculty.svg',
      description: 'Learn from seasoned academics and C-suite practitioners with doctoral credentials from Harvard, Cambridge, Duke, and NUS.'
    },
    {
      title: 'Cutting-Edge Curriculum',
      subtitle: 'AI, FinTech & Analytics',
      icon: '/assets/sp-jain/icon-training.svg',
      description: 'Business education infused with generative AI, machine learning simulations, blockchain, and real-time financial modeling.'
    }
  ] as SpJainPillar[],

  campuses: [
    {
      id: 'dubai',
      city: 'Dubai',
      country: 'United Arab Emirates',
      name: 'Dubai Campus — International Academic City',
      address: 'Block 5, Dubai International Academic City, P.O. Box 502345, Dubai, UAE',
      phone: '+971 4 5616 700',
      email: 'dubai@spjain.org',
      image: '/assets/sp-jain/campus-dubai.jpg',
      badge: 'Middle East Hub',
      features: ['Modern Academic Block', 'Finance Trading Terminal Lab', 'Cafeteria & Lounge', 'Residential Student Hostels', 'Direct Access to Global MNCs'],
      description: 'Located in Dubai International Academic City, this campus provides a gateway to the thriving Middle Eastern business capital, financial center, and startup ecosystem.'
    },
    {
      id: 'singapore',
      city: 'Singapore',
      country: 'Singapore',
      name: 'Singapore Campus — Alexandra Heritage Estate',
      address: '10 Hyderabad Road, off Alexandra Road, Singapore 119579',
      phone: '+65 6279 8988',
      email: 'singapore@spjain.org',
      image: '/assets/sp-jain/campus-singapore.jpg',
      badge: 'Asian Business Capital',
      features: ['7-Acre Historic Green Campus', 'High-Tech ELO Studios', 'Seminar Theatres', 'On-Campus Student Residences', 'Lush Forest Walk Trails'],
      description: 'Set amidst 7 acres of heritage architecture and gardens, the Singapore campus connects students with Southeast Asia’s epicenter of commerce, logistics, and FinTech.'
    },
    {
      id: 'sydney',
      city: 'Sydney',
      country: 'Australia',
      name: 'Sydney Campus — Sydney Olympic Park',
      address: '5 Figtree Drive, Sydney Olympic Park, NSW 2127, Australia',
      phone: '+61 2 8970 6800',
      email: 'sydney@spjain.org',
      image: '/assets/sp-jain/campus-sydney.jpg',
      badge: 'Australian Headquarters',
      features: ['Olympic Park Business District', 'State-of-the-Art Bloomberg Labs', 'Student Collaborative Pods', 'Proximity to Olympic Sports Facilities', 'Post-Study Work Eligibility'],
      description: 'Situated in the iconic Sydney Olympic Park, this Australian campus places students directly in the financial and commercial heart of Australia with post-study work visa rights.'
    },
    {
      id: 'mumbai',
      city: 'Mumbai',
      country: 'India',
      name: 'Mumbai Campus — Kurla West (Near BKC)',
      address: '1st Floor, Kohinoor City Mall, Premier Road, Kurla West, Mumbai 400070, India',
      phone: '+91 22 6188 7600',
      email: 'mumbai@spjain.org',
      image: '/assets/sp-jain/campus-mumbai.jpg',
      badge: 'Financial Capital of India',
      features: ['Proximity to BKC Financial District', 'Simulation Classrooms', 'Incubation Lab', 'Executive Education Suites', 'Corporate Mentorship Hub'],
      description: 'Adjacent to Bandra Kurla Complex (BKC), Mumbai’s foremost commercial district, this campus offers immersive access to Indian corporate headquarters, banks, and conglomerates.'
    }
  ] as SpJainCampus[],

  programs: [
    {
      id: 'bba',
      name: 'Bachelor of Business Administration (BBA)',
      code: 'BBA',
      level: 'Undergraduate',
      duration: '4 Years (Full-Time)',
      campuses: ['Singapore/Mumbai (Year 1)', 'Dubai (Year 2)', 'Sydney (Year 3 & 4)'],
      intake: 'September 2026 / January 2027',
      tagline: 'World-Renowned Tri-City Undergraduate Management Degree',
      description: 'A revolutionary 4-year undergraduate business program where students study in three international capitals, developing global perspective, practical management tools, and leadership character.',
      accreditation: 'Accredited by TEQSA, Australia. Eligible for Australian Post-Study Work Visas upon graduation.',
      highlights: [
        'Tri-City study in Singapore/Mumbai, Dubai, and Sydney',
        'Specializations: Marketing, Finance, and Entrepreneurship',
        'Global Immersion Projects (GIP) with regional enterprises',
        'Comprehensive 10-week summer international corporate internship',
        'TEQSA accredited Australian Bachelor degree'
      ],
      careerRoles: ['Investment Banking Analyst', 'Brand Manager', 'Management Consultant', 'Supply Chain Analyst', 'Tech Founder'],
      eligibility: 'Completion of 10+2 / High School Diploma (CBSE/ISC/IB/A-Levels or equivalent) with minimum 70% or equivalent GPA; English proficiency test (IELTS 6.0 / TOEFL / SPJAT).',
      category: 'business'
    },
    {
      id: 'bds',
      name: 'Bachelor of Data Science (BDS)',
      code: 'BDS',
      level: 'Undergraduate',
      duration: '3 Years (Full-Time)',
      campuses: ['Mumbai/Singapore (Year 1)', 'Sydney (Year 2 & 3)'],
      intake: 'September 2026',
      tagline: 'Empowering the Next Generation of AI & Data Scientists',
      description: 'A quantitative, rigorous 3-year program combining mathematics, statistical modeling, machine learning, computer science, and practical business decision-making in Sydney.',
      accreditation: 'Accredited by TEQSA, Australia. Pathway to STEM careers in Australia.',
      highlights: [
        'Deep mastery of Python, R, SQL, TensorFlow, Tableau, and AWS',
        'Real-world Capstone projects with Australian technology partners',
        'Study in Sydney with eligibility for Australian Post-Study Work Stream',
        'Machine Learning, Big Data Engineering, and Predictive Analytics tracks'
      ],
      careerRoles: ['Data Scientist', 'Machine Learning Engineer', 'Quantitative Business Analyst', 'AI Solutions Architect', 'Risk Modeler'],
      eligibility: 'High School graduation with strong mathematics background (Calculus/Statistics recommended) and minimum 70% aggregate; SPJAT or SAT score.',
      category: 'data-science'
    },
    {
      id: 'gmba',
      name: 'Global Master of Business Administration (GMBA)',
      code: 'GMBA',
      level: 'Postgraduate',
      duration: '12 Months (Full-Time)',
      campuses: ['Dubai (Term 1)', 'Singapore (Term 2)', 'Sydney (Term 3)'],
      intake: 'May 2026 / September 2026 / January 2027',
      tagline: 'Forbes Top 15 1-Year Global MBA Experience',
      description: 'An accelerated 1-year flagship MBA designed for experienced professionals. Students rotate through Dubai, Singapore, and Sydney, working on cross-border business consulting assignments.',
      accreditation: 'Accredited by TEQSA, Australia. Ranked #7 in Asia-Pacific by Bloomberg Businessweek.',
      highlights: [
        'Forbes Top 15 ranked 1-year MBA in the world',
        'Study in 3 global economic powerhouses in 12 intense months',
        'Specializations in Global Finance, Contemporary Marketing, and Global Logistics & Supply Chain',
        'Applied Business Project (ABP) solving live problems for multinational companies'
      ],
      careerRoles: ['Strategy Director', 'Senior Engagement Manager', 'Investment Banker', 'Global Product Lead', 'Chief of Staff'],
      eligibility: "Recognized Bachelor's degree; minimum 3 years of full-time professional work experience; competitive GMAT / GRE / SPJAT score and executive interview.",
      category: 'business'
    },
    {
      id: 'mgb',
      name: 'Master of Global Business (MGB)',
      code: 'MGB',
      level: 'Postgraduate',
      duration: '16 Months (12 Mths Academic + 4 Mths Internship)',
      campuses: ['Dubai', 'Singapore', 'Sydney'],
      intake: 'May 2026 / September 2026',
      tagline: 'Global Career Launchpad for Early-Career Achievers',
      description: 'Designed for recent graduates and early-career talent (0-3 years experience), this 16-month program provides multi-city classroom immersion followed by a mandatory 4-month international internship.',
      accreditation: 'Accredited by TEQSA, Australia.',
      highlights: [
        'Multi-city tri-continental living across Dubai, Singapore, and Sydney',
        'Mandatory 4-month international corporate internship',
        'Industry Readiness Program (IRP) with one-on-one executive coaching',
        'Concentrations in E-Business, Consulting Management, Marketing, and Finance'
      ],
      careerRoles: ['Associate Consultant', 'Business Development Manager', 'Financial Analyst', 'Marketing Specialist', 'Operations Manager'],
      eligibility: "Bachelor's degree with minimum 55% or equivalent; 0 to 3 years of work experience; GMAT / GRE / CAT / SPJAT score.",
      category: 'business'
    },
    {
      id: 'emba',
      name: 'Executive MBA (EMBA)',
      code: 'EMBA',
      level: 'Executive',
      duration: '18 Months (Part-Time / Hybrid)',
      campuses: ['Dubai', 'Singapore', 'Mumbai', 'Sydney', 'Online via ELO'],
      intake: 'Quarterly Intakes',
      tagline: 'Transformative Leadership for Senior Executives & Managers',
      description: 'A flexible, high-impact 18-month program for working managers. Available on-campus during weekends or virtually through our award-winning Engaged Learning Online (ELO) studio.',
      accreditation: 'Accredited by TEQSA, Australia.',
      highlights: [
        'Flexible hybrid format: Weekend on-campus or interactive ELO virtual classes',
        'Dynamic peer cohort of seasoned managers with average 8+ years experience',
        'Applied Strategic Project directly addressing organizational transformation',
        'Global immersion study weeks in Dubai and Sydney'
      ],
      careerRoles: ['Vice President', 'General Manager', 'Managing Director', 'Chief Operating Officer', 'Enterprise Strategist'],
      eligibility: "Undergraduate degree with at least 5 years of full-time professional experience; executive panel assessment.",
      category: 'executive'
    },
    {
      id: 'maib',
      name: 'Master of Artificial Intelligence in Business (MAIB)',
      code: 'MAIB',
      level: 'Postgraduate',
      duration: '2 Years (Full-Time)',
      campuses: ['Sydney & Singapore'],
      intake: 'September 2026',
      tagline: 'Bridging Advanced Machine Learning with Executive Strategy',
      description: 'A specialized graduate degree designed to bridge the gap between technical AI algorithms and high-stakes corporate strategy. Prepares managers to deploy enterprise AI responsibly and profitably.',
      accreditation: 'Accredited by TEQSA, Australia.',
      highlights: [
        'Curriculum co-designed with leading Silicon Valley and Australian AI researchers',
        'Hands-on lab modules: NLP, Computer Vision, Generative AI, and Prompt Engineering',
        'AI Ethics, Governance, and Risk Management frameworks',
        'Sydney campus delivery with Australian post-study work stream pathway'
      ],
      careerRoles: ['Head of AI Strategy', 'Chief AI Officer', 'Enterprise AI Product Manager', 'Data Strategy Consultant', 'Algorithm Risk Auditor'],
      eligibility: "Bachelor's degree in STEM, Business, or Economics with demonstrated quantitative aptitude; technical coding foundation.",
      category: 'data-science'
    }
  ] as SpJainProgram[],

  news: [
    {
      id: 'prme-gauri',
      title: 'SP Jain Global Student Gauri Menaria Selected as PRME Regional Leader for the Middle East',
      date: 'March 24, 2026',
      category: 'Student Achievements',
      image: '/assets/sp-jain/student-gauri.jpg',
      summary: 'Gauri Menaria, a Bachelor of Business Administration scholar at SP Jain Dubai, has been appointed by the United Nations PRME initiative to spearhead responsible management education across the region.',
      fullStory: 'The Principles for Responsible Management Education (PRME), a United Nations Global Compact initiative, has selected SP Jain Global BBA student Gauri Menaria to represent the Middle East chapter as its Student Regional Leader. Gauri will coordinate sustainability summits, youth climate hackathons, and corporate ethics conclaves across universities in the UAE, Saudi Arabia, Qatar, and Egypt.'
    },
    {
      id: 'bloomberg-recap',
      title: 'Bloomberg Businessweek Ranks SP Jain #7 in Asia-Pacific Best B-Schools 2023-24',
      date: 'February 12, 2026',
      category: 'Rankings & Accolades',
      image: '/assets/sp-jain/why-spjain.jpg',
      summary: 'Bloomberg Businessweek has affirmed SP Jain Global among the top 10 business schools across the Asia-Pacific region, praising its unique tri-city pedagogy and alumni earning power.',
      fullStory: 'In the annual Bloomberg Businessweek Best B-Schools report, S P Jain School of Global Management captured the #7 spot in Asia-Pacific. The index assessed learning effectiveness, networking quality, entrepreneurship incubation, and compensation trajectory, where SP Jain alumni recorded top-decile salary increases within 12 months of graduation.'
    },
    {
      id: 'ai-tutor-rollout',
      title: 'SP Jain Deploys 24/7 Generative AI-Tutor Across Global Campuses in Dubai, Singapore & Sydney',
      date: 'January 18, 2026',
      category: 'EdTech Innovation',
      image: '/assets/sp-jain/elo-studio.jpg',
      summary: 'Pioneering the future of executive learning, SP Jain has launched a proprietary AI-Tutor platform trained on over 5,000 proprietary Harvard and Stanford business case studies.',
      fullStory: 'The AI-Tutor serves as an interactive personalized teaching assistant for every enrolled student. Integrated within SP Jain’s Engaged Learning Online (ELO) framework, the system engages students in Socratic questioning, offers tailored feedback on financial valuation models, and prepares students for complex boardroom debates prior to live classroom sessions.'
    },
    {
      id: 'ug-orientation-2026',
      title: 'SP Jain Welcomes Undergraduate Cohort Representing 35+ Nationalities to Global Campuses',
      date: 'October 8, 2025',
      category: 'Campus Life',
      image: '/assets/sp-jain/ug-orientation.jpg',
      summary: 'The 2025-26 BBA and BDS cohorts commenced their 4-year tri-city journey with orientation weeks featuring diplomatic keynotes, desert safaris, and cross-cultural workshops in Dubai and Singapore.',
      fullStory: 'Over 450 scholars from 35 countries arrived at SP Jain campuses in Dubai and Singapore for the multi-city orientation week. Students participated in leadership simulations, met with senior corporate recruiters from Google, Emirates, and Standard Chartered, and began their global journey.'
    }
  ] as SpJainNews[],

  testimonials: [
    {
      name: 'Aditya Sharma',
      program: 'Global MBA',
      batch: 'Class of 2023',
      company: 'Amazon Web Services',
      role: 'Senior Solutions Strategist',
      location: 'Sydney, Australia',
      quote: 'Studying in Dubai, Singapore, and Sydney gave me the exact cultural agility multinational firms look for. The tri-city model transformed how I approach complex enterprise deals across the Asia-Pacific.',
      avatar: '/assets/rao-college/testimonial-1.jpg'
    },
    {
      name: 'Elena Rostova',
      program: 'Master of Global Business (MGB)',
      batch: 'Class of 2022',
      company: 'McKinsey & Company',
      role: 'Associate Consultant',
      location: 'Dubai, UAE',
      quote: 'The faculty are not just textbook lecturers; they are seasoned industry practitioners who have directed multi-billion dollar funds and led sovereign advisory teams. The network I made is lifelong.',
      avatar: '/assets/rao-college/testimonial-2.jpg'
    },
    {
      name: 'Kevin Tan',
      program: 'Bachelor of Business Administration (BBA)',
      batch: 'Class of 2024',
      company: 'Apple',
      role: 'Global Supply Operations Analyst',
      location: 'Singapore',
      quote: 'Living in three global business capitals before turning 22 is an unfair advantage. When I interviewed with Apple, my real-world case studies in Dubai and Sydney immediately stood out.',
      avatar: '/assets/rao-college/testimonial-3.jpg'
    },
    {
      name: 'Priyanka Nair',
      program: 'Bachelor of Data Science (BDS)',
      batch: 'Class of 2023',
      company: 'Commonwealth Bank of Australia',
      role: 'Machine Learning Engineer',
      location: 'Sydney, Australia',
      quote: 'The quantitative training combined with business communication made transitioning to Sydney’s financial tech market effortless. SP Jain’s Australian accreditation gave me direct post-study work authorization.',
      avatar: '/assets/rao-college/testimonial-4.jpg'
    }
  ] as SpJainTestimonial[],

  faqs: [
    {
      question: 'How does the SP Jain Tri-City multi-campus study model work?',
      answer: 'Depending on the chosen program (such as BBA or GMBA), students spend consecutive academic terms in Dubai, Singapore, and Sydney. This provides direct exposure to the business cultures of the Middle East, Southeast Asia, and Australasia. Students hold visas for each respective country, arranged through SP Jain’s dedicated International Student Offices.',
      category: 'Multi-Campus'
    },
    {
      question: 'Is the degree awarded by SP Jain globally accredited?',
      answer: 'Yes. SP Jain School of Global Management is registered as an Institute of Higher Education by the Australian Government’s Tertiary Education Quality and Standards Agency (TEQSA). Upon graduation, students receive a degree conferred under the Australian Higher Education Standards Framework, recognized worldwide by governments, academic bodies, and global employers.',
      category: 'Accreditation'
    },
    {
      question: 'Are graduates eligible for Australian Post-Study Work Visas?',
      answer: 'Yes. Students enrolled in CRICOS-registered degree courses who complete a minimum of two academic years of full-time study in Australia (such as our 4-year BBA or 3-year BDS where students spend Years 3 and 4 in Sydney) are eligible to apply for Australian Post-Study Work rights (Subclass 485 visa), subject to Australian Department of Home Affairs regulations.',
      category: 'Careers'
    },
    {
      question: 'What is the Engaged Learning Online (ELO) classroom technology?',
      answer: 'Engaged Learning Online (ELO) is SP Jain’s proprietary virtual classroom system. Unlike conventional web video calls, ELO utilizes custom-built interactive studios equipped with 20+ HD cameras, robotic camera tracking, real-time emotion and engagement heatmaps, and breakout collaboration pods to replicate an authentic executive boardroom seminar online.',
      category: 'Admissions'
    },
    {
      question: 'What scholarships and merit financial assistance are available?',
      answer: 'SP Jain offers comprehensive merit-based scholarships covering up to 100% of academic tuition fees for scholars demonstrating outstanding academic performance, leadership distinction, sports or artistic excellence, and competitive entrance test scores (SPJAT, GMAT, GRE, or SAT).',
      category: 'Admissions'
    },
    {
      question: 'What career support and international placement assistance is provided?',
      answer: 'Our dedicated Career Services Offices in Dubai, Singapore, Sydney, and Mumbai provide customized one-on-one career counseling, international interview preparation, resume optimization, and direct campus recruitment drives with multinational corporations such as Google, Amazon, McKinsey, Unilever, Deloitte, and Standard Chartered.',
      category: 'Careers'
    }
  ] as SpJainFaq[]
};
