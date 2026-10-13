export interface GallerySlide {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  category: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  image: string;
  category: string;
  link: string;
}

export interface HomeTile {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  badge?: string;
}

export interface AcademicDepartment {
  id: string;
  name: string;
  code: string;
  description: string;
  chair?: string;
  researchAreas: string[];
  facultyCount: number;
}

export interface AcademicProgram {
  id: string;
  title: string;
  duration: string;
  admissionMode: string;
  description: string;
  eligibility: string;
}

export const IISER_PUNE_CONFIG = {
  institution: {
    name: 'IISER Pune',
    fullName: 'Indian Institute of Science Education and Research Pune',
    hindiName: 'भारतीय विज्ञान शिक्षा एवं अनुसंधान संस्थान पुणे',
    established: '2006',
    ministry: 'Ministry of Education, Government of India',
    status: 'Institute of National Importance',
    motto: 'Where Teaching and Research Converge',
    director: 'Prof. Sunil S. Bhagwat',
    campusSize: '98 Acres (Pashan, Pune)',
    nirfRankResearch: '#35',
    nirfRankOverall: '#55',
    officialUrl: 'https://www.iiserpune.ac.in/',
    address: 'Dr. Homi Bhabha Road, Pashan, Pune 411008, Maharashtra, India',
    phone: '+91 20 25908000',
    emergencyPhone: '+91 20 25908100',
    email: 'info@iiserpune.ac.in',
    admissionsEmail: 'admissions@iiserpune.ac.in',
    mediaEmail: 'media@iiserpune.ac.in'
  },

  logos: {
    color: '/assets/iiser-pune/logo-color.svg',
    white: '/assets/iiser-pune/logo-white.svg',
    indiaGov: '/assets/iiser-pune/india-gov.jpg',
    footerBg: '/assets/iiser-pune/bg-footer.jpg'
  },

  slides: [
    {
      id: 'slide-1119',
      tag: 'AWARDS AND HONOURS',
      title: 'Elected as Fellows of the National Academy of Sciences India',
      description: 'Profs. R. Boomi Shankar, Siddhesh Kamat, and M.S. Santhanam have been elected as Fellows of the National Academy of Sciences, India (NASI) in recognition of their pioneering scientific discoveries.',
      image: '/assets/iiser-pune/slide-1119.jpg',
      buttonText: 'Read full citation',
      category: 'Faculty Accolades'
    },
    {
      id: 'slide-1118',
      tag: 'AWARDS AND HONOURS',
      title: "CNR Rao Education Foundation's National Prize 2026",
      description: 'Awarded to Profs. Nirmalya Ballav and Sujit Ghosh for their exceptional scientific excellence and dedicated mentorship in chemical and material sciences.',
      image: '/assets/iiser-pune/slide-1118.jpg',
      buttonText: 'View Award Details',
      category: 'National Recognition'
    },
    {
      id: 'slide-1116',
      tag: 'AWARDS AND HONOURS',
      title: 'IBRO Rising Star Award to Dr. Chandrashekhar Borkar',
      description: 'Recognizing groundbreaking investigations into neural circuit mechanisms governing emotional memory, stress, and motivation at the cellular level.',
      image: '/assets/iiser-pune/slide-1116.jpg',
      buttonText: 'Explore Research',
      category: 'Neuroscience'
    },
    {
      id: 'slide-1115',
      tag: 'AWARDS AND HONOURS',
      title: 'CRS Lifetime Achievement Award to Prof. S. Sivaram',
      description: 'Conferred by the Chirantan Rasayan Sanstha celebrating decades of leadership, academic mentorship, and translational innovations in polymer science.',
      image: '/assets/iiser-pune/slide-1115.jpg',
      buttonText: 'Read Announcement',
      category: 'Honorary Lifetime'
    },
    {
      id: 'slide-1114',
      tag: 'EVENTS',
      title: "Bridging Science and Enterprise: Kiran Mazumdar-Shaw's visit to IISER Pune",
      description: 'Executive Chairperson of Biocon Limited delivers an inspirational address on translating fundamental scientific discoveries into high-impact biotechnology enterprises.',
      image: '/assets/iiser-pune/slide-1114.jpg',
      buttonText: 'View Event Glimpses',
      category: 'Distinguished Lectures'
    }
  ] as GallerySlide[],

  news: [
    {
      id: 'news-1686',
      date: 'Posted on May 14, 2026',
      title: 'Delegation of students from across Maharashtra participate in Phase VI of Yuva Sangam',
      summary: 'As part of the Ek Bharat Shreshtha Bharat initiative, a vibrant contingent of student delegates from higher education institutes across Maharashtra convened for experiential cultural and academic exchange.',
      image: '/assets/iiser-pune/news-1686.jpg',
      category: 'Campus Life',
      link: '/news/post/delegation-of-students-from-across-maharashtra-participate-in-phase-vi-of-yuva-sangam/1686'
    },
    {
      id: 'news-1685',
      date: 'Posted on Apr 28, 2026',
      title: "Research work from Dr. Ismaiel's Group on dating the age of oceanic crust in the Bay of Bengal",
      summary: 'A landmark geophysical study published by Dr. M. Ismaiel and his team provides precise chronostratigraphic dating of the oceanic crust beneath thick sediment cover in the northern Indian Ocean.',
      image: '/assets/iiser-pune/news-1685.jpg',
      category: 'Research News',
      link: '/news/post/research-work-from-dr-ismaiels-group-on-dating-the-age-of-oceanic-crust-in-the-bay-of-bengal/1685'
    },
    {
      id: 'news-1673',
      date: 'Posted on Feb 18, 2026',
      title: 'How plants heal: New insights into the mechanism of regeneration in plants',
      summary: 'Biologists at IISER Pune uncover cellular reprogramming pathways and epigenetic switches that allow botanical tissues to rapidly repair mechanical wounds and regenerate damaged organs.',
      image: '/assets/iiser-pune/news-1673.jpeg',
      category: 'Research News',
      link: '/news/post/how-plants-heal-new-insights-into-the-mechanism-of-regeneration-in-plants/1673'
    },
    {
      id: 'news-1674',
      date: 'Posted on Jan 17, 2026',
      title: 'Inauguration of Mental Well-Being Centre',
      summary: 'A state-of-the-art facility dedicated to counseling, holistic wellness, and psycho-social support for students, researchers, and campus residents is officially opened by Institute leadership.',
      image: '/assets/iiser-pune/news-1674.jpg',
      category: 'Campus Life',
      link: '/news/post/inauguration-of-mental-well-being-centre/1674'
    },
    {
      id: 'news-1672',
      date: 'Posted on Jan 09, 2026',
      title: 'Prof. Siddhesh Kamat elected as Fellow of Royal Society of Biology',
      summary: 'Recognized internationally for distinguished contributions to chemical biology, lipid signaling pathways, and neuroimmunology.',
      image: '/assets/iiser-pune/news-1672.jpg',
      category: 'Accolades',
      link: '/news/post/prof-siddhesh-kamat-elected-as-fellow-of-royal-society-of-biology/1672'
    },
    {
      id: 'news-1671',
      date: 'Posted on Jan 06, 2026',
      title: 'Two faculty members elected as Fellows of the Indian Academy of Sciences (IASc), Bengaluru',
      summary: 'Profs. Angshuman Nag and Shabana Khan have been honored with fellowships of the prestigious Indian Academy of Sciences for seminal advances in materials and organometallic chemistry.',
      image: '/assets/iiser-pune/news-1671.jpg',
      category: 'Accolades',
      link: '/news/post/two-faculty-members-elected-as-fellows-of-the-indian-academy-of-sciences-iasc-bengaluru/1671'
    },
    {
      id: 'news-1669',
      date: 'Posted on Dec 31, 2025',
      title: 'Article on 100 years of quantum physics',
      summary: 'A commemorative retrospective tracing a century of quantum mechanics, its philosophical foundations, and contemporary breakthroughs in quantum optics and computing at IISER Pune.',
      image: '/assets/iiser-pune/news-1669.jpg',
      category: 'Spotlight',
      link: '/news/post/article-on-100-years-of-quantum-physics/1669'
    },
    {
      id: 'news-1666',
      date: 'Posted on Dec 30, 2025',
      title: 'Prof. Richa Rikhy received Anne McLaren Award for Outstanding Women in Developmental Biology',
      summary: "Celebrating Dr. Rikhy's trailblazing research on mitochondrial dynamics, cellular polarity, and embryogenesis in Drosophila models.",
      image: '/assets/iiser-pune/news-1666.jpg',
      category: 'Accolades',
      link: '/news/post/prof-richa-rikhy-received-anne-mclaren-award-for-outstanding-women-in-developmental-biology/1666'
    }
  ] as NewsItem[],

  tiles: [
    {
      id: 'tile-accolades',
      title: 'Accolades',
      description: 'Awards and honours received by our faculty members in recognition of their work',
      image: '/assets/iiser-pune/tile-accolades.jpg',
      link: '/institute/about/accolades',
      badge: 'Excellence'
    },
    {
      id: 'tile-media',
      title: 'In the Media',
      description: "Coverage in the media about IISER Pune's programmes and research",
      image: '/assets/iiser-pune/tile-media.jpg',
      link: '/news?category=in-the-media',
      badge: 'Press & Media'
    },
    {
      id: 'tile-alumni',
      title: 'Alumni Affairs',
      description: 'Reaching out to our growing numbers of alumni across top global universities and industry',
      image: '/assets/iiser-pune/tile-alumni.jpg',
      link: '/engage/alumni-affairs',
      badge: 'Community'
    },
    {
      id: 'tile-campus',
      title: 'Campus',
      description: 'Offers a vibrant and inspiring 98-acre environs for cutting-edge research and academics',
      image: '/assets/iiser-pune/tile-campus.jpg',
      link: '/institute/campus',
      badge: 'Infrastructure'
    },
    {
      id: 'tile-opportunities',
      title: 'Opportunities at IISER Pune',
      description: 'Join the IISER Pune community and contribute to the premier research ecosystem in India',
      image: '/assets/iiser-pune/tile-opportunities.jpg',
      link: '/opportunities',
      badge: 'Careers'
    },
    {
      id: 'tile-library',
      title: 'Library',
      description: 'Srinivasa Ramanujan Library — A vital partner in the teaching, learning and research activities',
      image: '/assets/iiser-pune/tile-library.jpg',
      link: '/library',
      badge: 'Resources'
    }
  ] as HomeTile[],

  departments: [
    {
      id: 'biology',
      name: 'Department of Biology',
      code: 'BIO',
      description: 'Interdisciplinary research spanning molecular biology, genetics, neurobiology, ecology, and evolutionary dynamics.',
      researchAreas: ['Cell Biology', 'Neurobiology', 'Ecology & Evolution', 'Computational Biology', 'Structural Biology'],
      facultyCount: 38
    },
    {
      id: 'chemistry',
      name: 'Department of Chemistry',
      code: 'CHM',
      description: 'Comprehensive research covering chemical biology, inorganic synthesis, materials chemistry, spectroscopy, and theoretical chemistry.',
      researchAreas: ['Organic Synthesis', 'Materials & Nanotechnology', 'Chemical Biology', 'Physical Chemistry', 'Theoretical Chemistry'],
      facultyCount: 42
    },
    {
      id: 'data-science',
      name: 'Department of Data Science',
      code: 'DS',
      description: 'Bridging mathematics, computation, and statistical inference to address data-intensive scientific inquiries.',
      researchAreas: ['Machine Learning', 'Statistical Inference', 'Scientific Computing', 'Bioinformatics', 'High-Performance Computing'],
      facultyCount: 12
    },
    {
      id: 'earth-climate',
      name: 'Department of Earth and Climate Science',
      code: 'ECS',
      description: 'Investigating planetary processes, paleoclimate evolution, seismology, geochemistry, and environmental transitions.',
      researchAreas: ['Geophysics & Seismology', 'Climate Modeling', 'Geochemistry', 'Monsoon Dynamics', 'Biogeochemistry'],
      facultyCount: 15
    },
    {
      id: 'humanities',
      name: 'Humanities and Social Sciences',
      code: 'HSS',
      description: 'Fostering critical inquiries in philosophy of science, science communication, literature, sociology, and economics.',
      researchAreas: ['Philosophy of Science', 'Science & Technology Studies', 'History of Science', 'Economics', 'Cultural Studies'],
      facultyCount: 10
    },
    {
      id: 'mathematics',
      name: 'Department of Mathematics',
      code: 'MTH',
      description: 'Fundamental investigations across pure and applied mathematics, algebraic geometry, number theory, and dynamical systems.',
      researchAreas: ['Algebra & Number Theory', 'Topology & Geometry', 'Partial Differential Equations', 'Probability Theory', 'Mathematical Physics'],
      facultyCount: 22
    },
    {
      id: 'physics',
      name: 'Department of Physics',
      code: 'PHY',
      description: 'Frontier research in quantum technologies, condensed matter physics, astrophysics, optics, and statistical physics.',
      researchAreas: ['Quantum Information & Computing', 'Condensed Matter Physics', 'Astrophysics & Cosmology', 'Optics & Spectroscopy', 'High Energy Physics'],
      facultyCount: 36
    },
    {
      id: 'science-education',
      name: 'Science Media and Education',
      code: 'SME',
      description: 'Innovating pedagogy, science communication, teacher training, and interactive hands-on science learning tools.',
      researchAreas: ['STEM Pedagogy', 'Interactive Learning Labs', 'Teacher Development', 'Public Engagement', 'Multimedia Science Content'],
      facultyCount: 8
    }
  ] as AcademicDepartment[],

  programs: [
    {
      id: 'bs-ms',
      title: 'BS-MS Dual Degree Programme',
      duration: '5 Years (10 Semesters)',
      admissionMode: 'IISER Aptitude Test (IAT)',
      description: 'Flagship integrated undergraduate and postgraduate program blending rigorous foundational sciences with intensive thesis research.',
      eligibility: '10+2 with Science stream; admission via centralized IAT counselling channel'
    },
    {
      id: 'msc',
      title: 'Master of Science (M.Sc.) Programme',
      duration: '2 Years (4 Semesters)',
      admissionMode: 'IIT JAM / Departmental Interview',
      description: 'Postgraduate degree offering advanced specialized coursework and hands-on laboratory dissertations in Chemistry, Mathematics, and Earth Sciences.',
      eligibility: "Bachelor's degree in relevant science discipline with competitive IIT JAM score"
    },
    {
      id: 'int-phd',
      title: 'Integrated Ph.D. Programme',
      duration: '5 - 6 Years',
      admissionMode: 'JEST / JAM / National Tests + Interview',
      description: 'Designed for ambitious BSc graduates transitioning seamlessly into advanced doctoral research and coursework.',
      eligibility: 'B.Sc. in Physics, Mathematics, Biology, or Chemistry with valid national score'
    },
    {
      id: 'phd',
      title: 'Doctoral (Ph.D.) Programme',
      duration: '5 Years',
      admissionMode: 'CSIR-JRF / UGC-JRF / GATE / INSPIRE + Interview',
      description: 'Cutting-edge independent doctoral research under global mentorship across all eight academic departments.',
      eligibility: "Master's degree in science/engineering with fellowship qualification (CSIR/UGC/DBT/DST-INSPIRE)"
    }
  ] as AcademicProgram[],

  statistics: [
    { label: 'NIRF 2025 Research Rank', value: '#35', detail: 'Among all research institutes in India' },
    { label: 'NIRF 2025 Overall Rank', value: '#55', detail: 'Top multi-disciplinary university' },
    { label: 'BS-MS Graduates to Ph.D.', value: '60%+', detail: 'Pursue doctoral degrees at top global universities' },
    { label: 'Interdisciplinary Departments', value: '8', detail: 'Covering core basic and applied sciences' },
    { label: 'Annual BS-MS Intake', value: '288', detail: 'Selected through nationwide IISER Aptitude Test' },
    { label: 'Core Faculty & Scientists', value: '180+', detail: 'Accomplished national and international researchers' }
  ],

  megaMenu: [
    {
      title: 'About',
      columns: [
        {
          heading: 'About us',
          url: '#about-intro',
          items: [
            { label: 'Introduction & History', url: '#about-intro' },
            { label: 'Vision and Mission', url: '#about-vision' },
            { label: 'Leadership & Director', url: '#about-leadership' },
            { label: 'Accolades & Honors', url: '#accolades' },
            { label: 'Facts and Figures', url: '#stats' },
            { label: 'Annual Reports & Brochures', url: '#reports' }
          ]
        },
        {
          heading: 'People',
          url: '#people',
          items: [
            { label: 'Faculty Directory', url: '#faculty' },
            { label: 'Fellows and Project Scientists', url: '#fellows' },
            { label: 'Post-Doctoral Fellows', url: '#postdocs' },
            { label: 'Staff and Administration', url: '#staff' },
            { label: 'Undergraduate & Graduate Students', url: '#students' },
            { label: 'Alumni Network', url: '#alumni' }
          ]
        },
        {
          heading: 'Campus & Facilities',
          url: '#campus',
          items: [
            { label: 'About Pashan Campus', url: '#campus' },
            { label: 'Student Life & Housing', url: '#campus-life' },
            { label: 'Hostel Accommodation', url: '#hostel' },
            { label: 'Sports & Recreational Arena', url: '#sports' },
            { label: 'Medical Centre & Wellness', url: '#medical' },
            { label: 'Convention Centre & Guest House', url: '#guesthouse' }
          ]
        },
        {
          heading: 'Library',
          url: '#library',
          items: [
            { label: 'Srinivasa Ramanujan Library', url: '#library' },
            { label: 'Digital Scientific Journals', url: '#journals' },
            { label: 'Institutional Repository', url: '#repository' }
          ]
        }
      ]
    },
    {
      title: 'Research',
      columns: [
        {
          heading: 'Departments',
          url: '#departments',
          items: [
            { label: 'Biology', url: '#dept-biology' },
            { label: 'Chemistry', url: '#dept-chemistry' },
            { label: 'Data Science', url: '#dept-data-science' },
            { label: 'Earth and Climate Science', url: '#dept-earth-climate' },
            { label: 'Humanities and Social Sciences', url: '#dept-humanities' },
            { label: 'Mathematics', url: '#dept-mathematics' },
            { label: 'Physics', url: '#dept-physics' },
            { label: 'Science Education', url: '#dept-science-education' }
          ]
        },
        {
          heading: 'Research Centres & Initiatives',
          url: '#centres',
          items: [
            { label: 'Centre for Energy Science', url: '#energy' },
            { label: 'National Facility for Gene Function', url: '#gene' },
            { label: 'Quantum Technologies Centre', url: '#quantum' },
            { label: 'Centre for Water Research', url: '#water' }
          ]
        },
        {
          heading: 'Central Research Facilities',
          url: '#facilities',
          items: [
            { label: 'NMR & Cryo-EM Facility', url: '#nmr' },
            { label: 'High Performance Computing Cluster', url: '#hpc' },
            { label: 'Clean Room & Fabrication Lab', url: '#cleanroom' }
          ]
        },
        {
          heading: 'Publications & Impact',
          url: '#publications',
          items: [
            { label: 'Recent Journal Articles', url: '#recent-papers' },
            { label: 'Patents & Technology Transfer', url: '#patents' }
          ]
        }
      ]
    },
    {
      title: 'Education',
      columns: [
        {
          heading: 'Academic Programmes',
          url: '#programmes',
          items: [
            { label: 'BS-MS Dual Degree Programme', url: '#bs-ms' },
            { label: 'Master of Science (M.Sc.)', url: '#msc' },
            { label: 'Integrated Ph.D. Programme', url: '#int-phd' },
            { label: 'Doctoral (Ph.D.) Programme', url: '#phd' }
          ]
        },
        {
          heading: 'Admissions',
          url: '#admissions',
          items: [
            { label: 'IISER Aptitude Test (IAT)', url: '#iat' },
            { label: 'BS-MS Admission Channels', url: '#iat' },
            { label: 'M.Sc. via IIT JAM', url: '#msc-adm' },
            { label: 'Ph.D. Application Portals', url: '#phd-adm' },
            { label: 'International Student Admissions', url: '#international' }
          ]
        },
        {
          heading: 'Fees & Financial Support',
          url: '#fees',
          items: [
            { label: 'Fee Structures & Schedules', url: '#fee-schedule' },
            { label: 'INSPIRE & KVPY Scholarships', url: '#scholarships' },
            { label: 'Fee Concessions & Policies', url: '#concessions' }
          ]
        },
        {
          heading: 'Career Development Cell',
          url: '#cdc',
          items: [
            { label: 'Placement & Internship Cell', url: '#cdc' },
            { label: 'Higher Studies & Fellowships', url: '#fellowships' },
            { label: 'Industry Collaborations', url: '#industry' }
          ]
        }
      ]
    },
    {
      title: 'News & Events',
      columns: [
        {
          heading: 'News & Media',
          url: '#news',
          items: [
            { label: 'Research News Highlights', url: '#news' },
            { label: 'New in Campus Announcements', url: '#news' },
            { label: 'Media & Press Coverage', url: '#media' },
            { label: 'Spotlight Stories', url: '#news' }
          ]
        },
        {
          heading: 'Events & Seminars',
          url: '#events',
          items: [
            { label: 'Institute Colloquia', url: '#colloquia' },
            { label: 'Conferences & Symposia', url: '#conferences' },
            { label: 'Public Science Lectures', url: '#lectures' },
            { label: 'Departmental Seminars', url: '#seminars' }
          ]
        },
        {
          heading: 'Official Announcements',
          url: '#announcements',
          items: [
            { label: 'Academic Notifications', url: '#notifications' },
            { label: 'Tenders & Quotations', url: '#tenders' },
            { label: 'Recruitment & Job Openings', url: '#opportunities' }
          ]
        }
      ]
    },
    {
      title: 'Engage with IISER Pune',
      columns: [
        {
          heading: 'Outreach & Training',
          url: '#outreach',
          items: [
            { label: 'Science Activity Centre (SAC)', url: '#sac' },
            { label: 'Summer Student Internship', url: '#internship' },
            { label: 'School Teacher Workshops', url: '#teachers' },
            { label: 'National Science Day Celebrations', url: '#nsd' }
          ]
        },
        {
          heading: 'Partnerships & Industry',
          url: '#partnerships',
          items: [
            { label: 'Corporate Social Responsibility (CSR)', url: '#csr' },
            { label: 'International MoUs & Exchanges', url: '#mous' },
            { label: 'Incubation & I-Hub Quantum', url: '#incubator' }
          ]
        },
        {
          heading: 'Alumni Affairs',
          url: '#alumni',
          items: [
            { label: 'Alumni Directory & Sign Up', url: '#alumni-signup' },
            { label: 'Distinguished Alumni Awards', url: '#alumni-awards' },
            { label: 'Mentorship Opportunities', url: '#mentorship' }
          ]
        },
        {
          heading: 'Giving to IISER Pune',
          url: '#donate',
          items: [
            { label: 'Support Student Scholarships', url: '#donate' },
            { label: 'Endow Chairs & Laboratories', url: '#donate' },
            { label: 'Donate Online (Tax Exempt)', url: '#donate' }
          ]
        }
      ]
    }
  ],

  footerLinks: [
    { label: 'Tender Notices & EoI', url: '#tenders' },
    { label: 'Opportunities & Careers', url: '#opportunities' },
    { label: 'Reports & Brochures', url: '#reports' },
    { label: 'Publications', url: '#publications' },
    { label: 'NIRF Ranking Disclosures', url: '#nirf' },
    { label: 'Visit IISER Pune', url: '#visit' },
    { label: 'Useful Links', url: '#links' },
    { label: 'Academic Calendar', url: '#calendar' },
    { label: 'Internal Committee (PoSH)', url: '#posh' },
    { label: 'Policies & Guidelines', url: '#policies' },
    { label: 'Women in Science (WiSC)', url: '#wisc' },
    { label: 'Alumni Registration', url: '#alumni' },
    { label: 'Website Policies', url: '#web-policies' },
    { label: 'Sitemap', url: '#sitemap' },
    { label: 'Contact Directory', url: '#contact' }
  ],

  statutoryLinks: [
    { label: 'Right to Information (RTI)', url: '#rti' },
    { label: 'Feedback', url: '#feedback' },
    { label: 'Copyright Policy', url: '#copyright' },
    { label: 'Terms of Use', url: '#terms' },
    { label: 'Help', url: '#help' },
    { label: 'Privacy Policy', url: '#privacy' },
    { label: 'Disclaimer', url: '#disclaimer' }
  ],

  socialLinks: [
    { name: 'LinkedIn', icon: '/assets/iiser-pune/icons/linkedin.svg', url: 'https://www.linkedin.com/school/iiserp' },
    { name: 'Twitter / X', icon: '/assets/iiser-pune/icons/twitter.svg', url: 'https://twitter.com/IISERPune' },
    { name: 'Facebook', icon: '/assets/iiser-pune/icons/facebook.svg', url: 'https://www.facebook.com/IISERP' },
    { name: 'Instagram', icon: '/assets/iiser-pune/icons/instagram.svg', url: 'https://www.instagram.com/iiser.pune/' },
    { name: 'YouTube', icon: '/assets/iiser-pune/icons/youtube.svg', url: 'https://www.youtube.com/c/IISERPuneOfficial' }
  ]
};
