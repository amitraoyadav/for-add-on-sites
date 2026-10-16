/**
 * Istituto Marangoni — Authoritative Configuration & Structured Academic Content
 * The School of Fashion, Art & Design · Milano 1935
 * Global campuses: Milano, Firenze, Paris, London, Dubai, Miami, Mumbai, Shanghai, Shenzhen
 */

export interface MarangoniCourse {
  id: string;
  title: string;
  macroArea: 'fashion' | 'design' | 'art' | 'fragrances';
  level: 'undergraduate' | 'postgraduate' | 'intensive' | 'short';
  duration: string;
  language: string;
  campuses: string[];
  intake: string;
  qualification: string;
  description: string;
  curriculumHighlights: string[];
  careerOpportunities: string[];
  tuitionFeeEuro: string;
  badge?: string;
}

export interface MarangoniCampus {
  id: string;
  city: string;
  title: string;
  address: string;
  specialization: string;
  image: string;
  description: string;
  facilities: string[];
  phone: string;
  email: string;
}

export interface MarangoniMentor {
  name: string;
  role: string;
  house: string;
  quote: string;
  type: 'supermentor' | 'alumni';
  image: string;
  bio: string;
}

export interface MarangoniNewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  summary: string;
  readTime: string;
  featured?: boolean;
}

export interface MarangoniFaq {
  question: string;
  answer: string;
  category: string;
}

export interface MarangoniConfig {
  brand: {
    name: string;
    tagline: string;
    subtagline: string;
    description: string;
    founded: number;
    placementRate: string;
    alumniNetwork: string;
    recruiterHouses: string;
    globalCampusesCount: number;
    headquarters: string;
    admissionsPhone: string;
    admissionsEmail: string;
  };
  logos: {
    black: string;
    white: string;
    maze35: string;
    afamBadge: string;
    qsBadge: string;
  };
  heroSlides: Array<{
    id: string;
    tag: string;
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    secondaryCta: string;
    secondaryLink: string;
    image: string;
    accentColor: string;
  }>;
  macroAreas: Array<{
    id: 'fashion' | 'design' | 'art' | 'fragrances';
    title: string;
    tagline: string;
    image: string;
    accent: string;
    description: string;
    keyDisciplines: string[];
    coursesCount: number;
  }>;
  courses: MarangoniCourse[];
  campuses: MarangoniCampus[];
  superMentors: MarangoniMentor[];
  recruiters: Array<{ name: string; category: string; city: string }>;
  news: MarangoniNewsItem[];
  faqs: MarangoniFaq[];
}

export const MARANGONI_CONFIG: MarangoniConfig = {
  brand: {
    name: 'Istituto Marangoni',
    tagline: 'The School of Fashion, Art & Design',
    subtagline: 'Milano 1935 — 90 Years of Italian Creative Excellence',
    description: 'Premier international higher education institution in Fashion, Design, Art, Fragrances & Cosmetics. Accredited by the Italian Ministry of University and Research (MUR - AFAM), Manchester Metropolitan University, and global regulatory bodies.',
    founded: 1935,
    placementRate: '89%',
    alumniNetwork: '50,000+',
    recruiterHouses: '400+',
    globalCampusesCount: 9,
    headquarters: 'Via Verri 4, 20121 Milano, Italy',
    admissionsPhone: '+39 02 7631 6680',
    admissionsEmail: 'admissions@istitutomarangoni.com',
  },

  logos: {
    black: '/assets/istituto-marangoni/logo.svg',
    white: '/assets/istituto-marangoni/logo-white.svg',
    maze35: '/assets/istituto-marangoni/maze35-logo.svg',
    afamBadge: '/assets/istituto-marangoni/badge-afam.svg',
    qsBadge: '/assets/istituto-marangoni/badge-qs.svg',
  },

  heroSlides: [
    {
      id: 'heritage-90',
      tag: 'CELEBRATING 90 YEARS',
      title: 'Where Talent Meets Italian Luxury',
      subtitle: 'From Milan to Paris, London, Dubai & Mumbai — Nurturing the visionaries shaping the global fashion & design landscape since 1935.',
      ctaText: 'Explore Degree Courses',
      ctaLink: '#courses',
      secondaryCta: 'Book an Orientation',
      secondaryLink: '#admissions',
      image: '/assets/istituto-marangoni/hero-90years.svg',
      accentColor: '#D4AF37'
    },
    {
      id: 'open-days-2026',
      tag: 'ACADEMIC INTAKES 2026',
      title: 'International Open Days & Portfolio Review',
      subtitle: 'Meet our Program Leaders, explore fashion ateliers, design labs, and discover scholarship opportunities across all global campuses.',
      ctaText: 'Register for Open Day',
      ctaLink: '#opendays',
      secondaryCta: 'Scholarship Calculator',
      secondaryLink: '#scholarships',
      image: '/assets/istituto-marangoni/hero-opendays.svg',
      accentColor: '#38BDF8'
    },
    {
      id: 'loreal-alliance',
      tag: 'EXCLUSIVE COLLABORATION',
      title: "L'Oréal Professionnel & Istituto Marangoni",
      subtitle: 'A pioneering partnership uniting haute couture styling with professional beauty innovation and backstage runway masterclasses.',
      ctaText: 'Discover the Partnership',
      ctaLink: '#industry',
      secondaryCta: 'Explore Beauty Masters',
      secondaryLink: '#courses',
      image: '/assets/istituto-marangoni/hero-loreal.svg',
      accentColor: '#F472B6'
    },
    {
      id: 'metaverso-lab',
      tag: 'DIGITAL INNOVATION',
      title: 'The Metaverso & AI Fashion Atelier',
      subtitle: 'Pioneering phygital couture, 3D digital avatars with CLO3D, virtual runway presentations, and generative AI research for luxury houses.',
      ctaText: 'Read the AI Manifesto',
      ctaLink: '#innovation',
      secondaryCta: 'Digital Fashion Master',
      secondaryLink: '#courses',
      image: '/assets/istituto-marangoni/hero-metaverse.svg',
      accentColor: '#818CF8'
    },
    {
      id: 'maze35-magazine',
      tag: 'EDITORIAL DISPATCH',
      title: 'Maze 35: What Powers the Global Creative Economy?',
      subtitle: 'Beyond Afrobeats, Luxury Fashion Houses & New Geographies: insightful essays, alumni interviews, and industry trend forecasting.',
      ctaText: 'Read Maze 35 Issue #08',
      ctaLink: '#magazine',
      secondaryCta: 'View Alumni Voices',
      secondaryLink: '#alumni',
      image: '/assets/istituto-marangoni/hero-maze35.svg',
      accentColor: '#F59E0B'
    }
  ],

  macroAreas: [
    {
      id: 'fashion',
      title: 'Fashion',
      tagline: 'Design · Styling · Business & Luxury Management',
      image: '/assets/istituto-marangoni/macro-fashion.svg',
      accent: '#D4AF37',
      description: 'The foundation of Istituto Marangoni since 1935. Combining haute couture craftsmanship, cutting-edge pattern making, luxury brand management, and forward-looking digital styling.',
      keyDisciplines: ['Fashion Design Womenswear/Menswear', 'Fashion Styling & Creative Direction', 'Fashion Business & Merchandising', 'Fashion Buying', 'Luxury Accessories Design'],
      coursesCount: 16
    },
    {
      id: 'design',
      title: 'Design',
      tagline: 'Interior · Product · Visual Art Direction',
      image: '/assets/istituto-marangoni/macro-design.svg',
      accent: '#38BDF8',
      description: 'Conceived in the heart of Milan’s design district. Emphasizing Italian industrial heritage, human-centered living spaces, sustainable luxury materials, and cutting-edge 3D visualization.',
      keyDisciplines: ['Contemporary Interior Design', 'Product & Furniture Design', 'Visual & Digital Design', 'Retail & Hospitality Architecture', 'Lighting & Exhibition Design'],
      coursesCount: 12
    },
    {
      id: 'art',
      title: 'Art',
      tagline: 'Curating · Contemporary Art Management · Heritage',
      image: '/assets/istituto-marangoni/macro-art.svg',
      accent: '#C084FC',
      description: 'Rooted in Florence and Milan’s unparalleled artistic ecosystems. Preparing curators, art advisors, and gallery directors to navigate the global contemporary art market and multimedia heritage.',
      keyDisciplines: ['Curatorial Studies', 'Contemporary Art Management', 'Art Directing & Media', 'Visual Arts & Cultural Heritage', 'Museum & Gallery Marketing'],
      coursesCount: 8
    },
    {
      id: 'fragrances',
      title: 'Fragrances & Cosmetics',
      tagline: 'Brand Management · Olfactory Creation · Beauty Marketing',
      image: '/assets/istituto-marangoni/macro-fragrances.svg',
      accent: '#F472B6',
      description: 'The world’s first higher education program dedicated to the business and sensory mastery of luxury perfume and cosmetics, developed in collaboration with top French and Italian fragrance labs.',
      keyDisciplines: ['Fragrance Brand Management', 'Cosmetic Product Development', 'Olfactory Marketing', 'Luxury Packaging Design', 'Sensory Brand Experience'],
      coursesCount: 6
    }
  ],

  courses: [
    // Undergraduate
    {
      id: 'ug-fashion-design',
      title: 'Fashion Design & Accessories',
      macroArea: 'fashion',
      level: 'undergraduate',
      duration: '3 Years (Full-Time)',
      language: 'English / Italian',
      campuses: ['Milano Fashion', 'Paris', 'London', 'Firenze', 'Dubai'],
      intake: 'October / February',
      qualification: "First Level Academic Diploma (AFAM 180 ECTS) / BA (Hons) Degree validated by MMU",
      description: 'Comprehensive undergraduate education covering collection design, garment construction, draping, fabric research, fashion illustration, digital CAD, and runway portfolio development.',
      curriculumHighlights: [
        'Haute Couture & Ready-to-Wear Draping',
        'Textile Science & Sustainable Materials',
        '3D CLO3D Virtual Garment Simulation',
        'Accessories & Leather Goods Prototyping',
        'Final Graduate Runway Collection presented to international luxury buyers'
      ],
      careerOpportunities: ['Fashion Designer', 'Creative Director', 'Accessories Designer', 'Trend Forecaster', 'Costume Designer'],
      tuitionFeeEuro: '€26,500 / year',
      badge: 'Flagship Degree'
    },
    {
      id: 'ug-fashion-styling',
      title: 'Fashion Styling & Creative Direction',
      macroArea: 'fashion',
      level: 'undergraduate',
      duration: '3 Years (Full-Time)',
      language: 'English / Italian',
      campuses: ['Milano Fashion', 'Paris', 'London', 'Firenze'],
      intake: 'October / February',
      qualification: 'First Level Academic Diploma (AFAM 180 ECTS) / BA (Hons)',
      description: 'Train to direct visual storytelling, editorial photoshoots, brand image consulting, celebrity styling, and digital fashion content across international media.',
      curriculumHighlights: [
        'Editorial Photography & Creative Direction',
        'Fashion Film & Video Production',
        'Digital Content Creation & Runway Art Direction',
        'Social Media Narrative & Influencer Strategy',
        'Trend Analysis & Semiographics of Luxury'
      ],
      careerOpportunities: ['Fashion Stylist', 'Creative Director', 'Fashion Editor', 'Visual Merchandiser', 'Celebrity Image Consultant'],
      tuitionFeeEuro: '€25,500 / year'
    },
    {
      id: 'ug-fashion-business',
      title: 'Fashion Business & Luxury Brand Management',
      macroArea: 'fashion',
      level: 'undergraduate',
      duration: '3 Years (Full-Time)',
      language: 'English / Italian',
      campuses: ['Milano Fashion', 'Paris', 'London', 'Dubai', 'Mumbai'],
      intake: 'October / February',
      qualification: 'First Level Academic Diploma (AFAM 180 ECTS) / BA (Hons)',
      description: 'Combines marketing, financial strategy, omnichannel luxury retailing, supply chain optimization, and consumer psychology for executive careers in the fashion industry.',
      curriculumHighlights: [
        'Omnichannel Retail & E-Commerce Operations',
        'Luxury Brand Positioning & Heritage Strategy',
        'Financial Management & Merchandising Math',
        'Global Fashion Supply Chain & Sustainability Auditing',
        'Live Industry Project with Versace / Gucci / Prada'
      ],
      careerOpportunities: ['Luxury Brand Manager', 'Fashion Buyer', 'Retail Operations Director', 'Marketing Strategist', 'Merchandising Planner'],
      tuitionFeeEuro: '€25,500 / year'
    },
    {
      id: 'ug-interior-design',
      title: 'Interior Design',
      macroArea: 'design',
      level: 'undergraduate',
      duration: '3 Years (Full-Time)',
      language: 'English / Italian',
      campuses: ['Milano Design', 'London', 'Dubai', 'Miami'],
      intake: 'October / February',
      qualification: 'First Level Academic Diploma (AFAM 180 ECTS) / BA (Hons)',
      description: 'Master spatial architecture, luxury hospitality interiors, bespoke furniture detailing, lighting design, and photorealistic 3D rendering in the design capital of Milan.',
      curriculumHighlights: [
        'Spatial Architecture & Ergonomic Planning',
        'Italian Bespoke Materials & Joinery Details',
        '3D Rhino, 3ds Max & V-Ray Visualization',
        'Hospitality & High-End Retail Spatial Design',
        'Salone del Mobile Milan Exhibition Project'
      ],
      careerOpportunities: ['Interior Architect', 'Hospitality Spatial Designer', 'Retail Concept Designer', 'Lighting Consultant', 'Set Designer'],
      tuitionFeeEuro: '€24,500 / year'
    },
    {
      id: 'ug-product-design',
      title: 'Product & Furniture Design',
      macroArea: 'design',
      level: 'undergraduate',
      duration: '3 Years (Full-Time)',
      language: 'English / Italian',
      campuses: ['Milano Design'],
      intake: 'October',
      qualification: 'First Level Academic Diploma (AFAM 180 ECTS)',
      description: 'Explore the dialogue between artisan craftsmanship, industrial manufacturing, material experimentation, and circular design principles.',
      curriculumHighlights: [
        'Physical Model Making & Prototyping Workshop',
        'Sustainable Polymers & Bio-Composite Research',
        'Parametric Modeling & CNC Fabrication',
        'Brand Identity for Furniture Collections',
        'Collaborative Studio Projects with Italian Manufacturers'
      ],
      careerOpportunities: ['Product Designer', 'Furniture Designer', 'Design Strategist', 'Packaging Specialist', 'R&D Material Consultant'],
      tuitionFeeEuro: '€24,500 / year'
    },
    {
      id: 'ug-art-curating',
      title: 'Curating & Contemporary Art Management',
      macroArea: 'art',
      level: 'undergraduate',
      duration: '3 Years (Full-Time)',
      language: 'English',
      campuses: ['Firenze', 'Milano'],
      intake: 'October',
      qualification: 'First Level Academic Diploma (AFAM 180 ECTS)',
      description: 'Explore art historical analysis, contemporary exhibition curating, museum management, auction house operations, and art market economics.',
      curriculumHighlights: [
        'History of Global Contemporary Art & Avant-Gardes',
        'Exhibition Design & Spatial Curating',
        'Art Law, Provenance, Intellectual Property & Valuation',
        'Public Programming & Art Fair Management (Venice Biennale & Art Basel)',
        'Digital Curating & Virtual Reality Pavilions'
      ],
      careerOpportunities: ['Museum Curator', 'Gallery Director', 'Art Advisor', 'Auction House Specialist', 'Cultural Project Manager'],
      tuitionFeeEuro: '€23,500 / year'
    },
    {
      id: 'ug-fragrance-cosmetics',
      title: 'Fragrances & Cosmetics Brand Management',
      macroArea: 'fragrances',
      level: 'undergraduate',
      duration: '3 Years (Full-Time)',
      language: 'English',
      campuses: ['Milano Fashion', 'Paris', 'Firenze'],
      intake: 'October',
      qualification: 'First Level Academic Diploma / Validated Degree',
      description: 'First specialized undergraduate program blending olfactory chemistry basics, luxury beauty packaging, fragrance branding, and global cosmetic regulations.',
      curriculumHighlights: [
        'Olfactory Pyramid & Raw Material Sourcing',
        'Skincare & Clean Beauty Formulations Insight',
        'Luxury Packaging Aesthetics & Flacon Engineering',
        'Sensory Marketing & In-Store Beauty Experience',
        'Product Launch Campaign with L’Oréal / Interparfums'
      ],
      careerOpportunities: ['Beauty Product Manager', 'Fragrance Brand Director', 'Cosmetic Marketing Strategist', 'Sensory Evaluator', 'Retail Beauty Buyer'],
      tuitionFeeEuro: '€25,500 / year',
      badge: 'Exclusive Program'
    },

    // Postgraduate / Masters
    {
      id: 'pg-fashion-design-womenswear',
      title: 'Master in Fashion Design Womenswear',
      macroArea: 'fashion',
      level: 'postgraduate',
      duration: '1 Year (Full-Time)',
      language: 'English / Italian',
      campuses: ['Milano Fashion', 'Paris', 'London'],
      intake: 'October / February',
      qualification: 'Master Universitario / RNCP Niveau 7 / AFAM Master Diploma',
      description: 'Advanced postgraduate program focused on defining a distinctive creative voice, experimental draping, haute couture finishes, and collection development for premier luxury houses.',
      curriculumHighlights: [
        'Experimental Draping & Textile Manipulation',
        'Personal Aesthetic Deconstruction & Capsule Collection',
        'Portfolio Mentorship by Balmain & Giambattista Valli Design Teams',
        'Live Industry Brief with Milan Fashion Week Partner',
        'Graduation Runway Show for VIP press and headhunters'
      ],
      careerOpportunities: ['Senior Fashion Designer', 'Head of Womenswear', 'Atelier Director', 'Fashion Entrepreneur', 'Design Consultant'],
      tuitionFeeEuro: '€33,000 / course',
      badge: 'Super Mentor Led'
    },
    {
      id: 'pg-digital-fashion-metaverse',
      title: 'Master in Digital Fashion Strategy & AI Atelier',
      macroArea: 'fashion',
      level: 'postgraduate',
      duration: '1 Year (Full-Time)',
      language: 'English',
      campuses: ['Milano Fashion', 'London', 'Dubai'],
      intake: 'October',
      qualification: 'Postgraduate Master Diploma (60 ECTS)',
      description: 'At the forefront of fashion technology: CLO3D couture, generative AI design pipelines, virtual showroom construction, digital avatars, and phygital luxury retail strategy.',
      curriculumHighlights: [
        'Generative AI for Conceptual Silhouette Development',
        'CLO3D, Blender & Unreal Engine 5 Real-Time Rendering',
        'Digital Twin Prototyping & Virtual Sampling',
        'Smart Wearables & Blockchain Authenticity Solutions',
        'Collaboration with Digital Fashion Week Milano'
      ],
      careerOpportunities: ['3D Digital Fashion Designer', 'Virtual Fashion Director', 'Fashion Tech Strategist', 'Metaverse Creative Lead', 'Innovation Consultant'],
      tuitionFeeEuro: '€32,500 / course',
      badge: 'Metaverso Frontier'
    },
    {
      id: 'pg-luxury-brand-management',
      title: 'Master in Fashion & Luxury Brand Management',
      macroArea: 'fashion',
      level: 'postgraduate',
      duration: '1 Year (Full-Time)',
      language: 'English',
      campuses: ['Milano Fashion', 'Paris', 'London', 'Dubai'],
      intake: 'October / February',
      qualification: 'Postgraduate Master Diploma (60 ECTS)',
      description: 'The definitive benchmark master for luxury executives. Focuses on brand equity, exclusivity preservation, international market penetration, experiential retail, and ESG compliance.',
      curriculumHighlights: [
        'Brand Equity & Heritage Storytelling',
        'Omnichannel Merchandising & Clienteling Excellence',
        'Global Luxury Mergers & Acquisitions Case Studies',
        'Sustainable Luxury Certification & Supply Chain Ethics',
        'Direct Masterclasses with CEOs of Kering and LVMH brands'
      ],
      careerOpportunities: ['Brand Director', 'Global Marketing Head', 'Client Relationship Director', 'Strategic Consultant', 'E-Commerce GM'],
      tuitionFeeEuro: '€33,000 / course'
    },
    {
      id: 'pg-contemporary-interior-design',
      title: 'Master in Contemporary Interior Design for Hospitality',
      macroArea: 'design',
      level: 'postgraduate',
      duration: '1 Year (Full-Time)',
      language: 'English / Italian',
      campuses: ['Milano Design'],
      intake: 'October',
      qualification: 'Postgraduate Master Diploma (60 ECTS)',
      description: 'Advanced hospitality and boutique resort architecture. Master luxury hotel suites, Michelin-star dining venues, sensory materiality, wellness spas, and lighting design.',
      curriculumHighlights: [
        '5-Star Hospitality Masterplanning & Guest Journey',
        'Bespoke Italian Material Selection & Furniture Specs',
        'Acoustics, Smart Lighting & Biophilic Architecture',
        'Project Management & Budgeting for Global Hotel Brands',
        'Live Project with Boffi, Poltrona Frau, or Armani/Casa'
      ],
      careerOpportunities: ['Senior Interior Architect', 'Hospitality Concept Lead', 'Luxury Residential Designer', 'Furniture Art Director', 'Contract Project Manager'],
      tuitionFeeEuro: '€31,500 / course'
    },
    {
      id: 'pg-fragrance-product-management',
      title: 'Master in Fragrance & Cosmetics Product Management',
      macroArea: 'fragrances',
      level: 'postgraduate',
      duration: '1 Year (Full-Time)',
      language: 'English',
      campuses: ['Milano Fashion', 'Paris'],
      intake: 'October',
      qualification: 'Postgraduate Master Diploma',
      description: 'Bridging the olfactory artistic universe and international cosmetic commerce. Co-developed with leading European fragrance labs and luxury beauty conglomerates.',
      curriculumHighlights: [
        'The Art of Nose Mentorship & Scent Formulation Protocols',
        'Niche Perfumery vs. Prestige Beauty Global Distribution',
        'Sustainable Packaging Engineering & Clean Cosmetic Science',
        'Sensory Marketing, In-Store Scent Architecture & E-Beauty',
        'Fragrance Briefing Project evaluated by Master Perfumers'
      ],
      careerOpportunities: ['Global Fragrance Product Manager', 'Beauty Category Lead', 'Niche Perfume Brand Founder', 'Packaging Innovation Lead', 'Fragrance Evaluator'],
      tuitionFeeEuro: '€32,000 / course'
    },

    // Short & Summer Courses
    {
      id: 'short-haute-couture-draping',
      title: 'Haute Couture Draping & Tailoring',
      macroArea: 'fashion',
      level: 'short',
      duration: '3 Weeks (Intensive Summer)',
      language: 'English',
      campuses: ['Paris', 'Milano Fashion'],
      intake: 'June / July',
      qualification: 'Certificate of Attendance by Istituto Marangoni',
      description: 'Hands-on atelier immersion into historical French and Italian draping techniques directly on the mannequin, bias-cut manipulation, and sculptural corset construction.',
      curriculumHighlights: [
        'Live Mannequin Moulage & Draping',
        'Bias-Cut Eveningwear & Architectural Volume Creation',
        'Haute Couture Hand Finishes, Embroidery & Beading',
        'Atelier Visit to Paris Haute Couture suppliers'
      ],
      careerOpportunities: ['Atelier Patternmaker', 'Couture Assistant', 'Freelance Pattern Cutter'],
      tuitionFeeEuro: '€4,500 / session'
    },
    {
      id: 'short-sustainable-fashion-circular',
      title: 'Circular Fashion & Sustainable Luxury Design',
      macroArea: 'fashion',
      level: 'short',
      duration: '2 Weeks (Online / Executive)',
      language: 'English',
      campuses: ['Milano Fashion', 'London'],
      intake: 'July / September',
      qualification: 'Executive Certificate',
      description: 'Gain executive mastery over European circular fashion regulations, bio-materials, zero-waste pattern drafting, digital product passports, and textile recycling.',
      curriculumHighlights: [
        'Regenerative Fibers & Next-Gen Plant Leather Alternatives',
        'EU Digital Product Passport & Supply Chain Transparency',
        'Upcycling Atelier & Waste Stream Revalorization Strategy',
        'Carbon Accounting for Fashion & Luxury Brands'
      ],
      careerOpportunities: ['Sustainability Director', 'Circular Material Scout', 'CSR Compliance Lead'],
      tuitionFeeEuro: '€3,800 / session'
    }
  ],

  campuses: [
    {
      id: 'milano-fashion',
      city: 'Milan',
      title: 'Milano Fashion School',
      address: 'Via Pietro Verri 4, 20121 Milano MI, Italy',
      specialization: 'Fashion Design, Styling, Luxury Business & Fragrances',
      image: '/assets/istituto-marangoni/campus-milan.svg',
      description: 'Located inside Milan’s famed Quadrilatero della Moda, steps away from Via Montenapoleone and the world’s leading fashion ateliers. Home to over 2,000 international students representing 100+ countries.',
      facilities: ['Cutting-edge Draping Ateliers', 'CLO3D Virtual Fitting Lab', 'Library with 25,000+ rare fashion archives', 'Photo Studio & Runway Stage', 'Materials & Fabric Trend Library'],
      phone: '+39 02 7631 6680',
      email: 'milano.fashion@istitutomarangoni.com'
    },
    {
      id: 'milano-design',
      city: 'Milan',
      title: 'Milano Design School',
      address: 'Via Cerva 24, 20122 Milano MI, Italy',
      specialization: 'Interior, Product, Visual & Lighting Design',
      image: '/assets/istituto-marangoni/campus-milan.svg',
      description: 'Situated in the vibrant San Babila design hub, surrounded by world-renowned architecture studios and furniture showrooms. Close partner of Salone del Mobile and Fuorisalone.',
      facilities: ['3D Rapid Prototyping Workshop with 3D Printers & Laser Cutters', 'Rhino & V-Ray Computer Suites', 'Materials Lab with 2,000+ architectural samples', 'Design Gallery Exhibition Space'],
      phone: '+39 02 7631 6680',
      email: 'milano.design@istitutomarangoni.com'
    },
    {
      id: 'firenze',
      city: 'Florence',
      title: 'Firenze Art & Fashion School',
      address: "Via de' Tornabuoni 17, 50123 Firenze FI, Italy",
      specialization: 'Art Curating, Museum Studies, Leather Craftsmanship & Fashion',
      image: '/assets/istituto-marangoni/campus-florence.svg',
      description: 'Housed in an exquisite Renaissance palazzo on Florence’s most prestigious fashion avenue, overlooking the Ponte Vecchio and historic artisan leather workshops.',
      facilities: ['Leather Goods Craftsmanship Lab', 'Art Curatorial Gallery', 'Multimedia Arts & VR Pavilion', 'Renaissance Art History Archive'],
      phone: '+39 055 034 0000',
      email: 'firenze@istitutomarangoni.com'
    },
    {
      id: 'paris',
      city: 'Paris',
      title: 'Paris Fashion School',
      address: '48 Avenue Montaigne, 75008 Paris, France',
      specialization: 'Haute Couture, Luxury Brand Strategy & Fashion Styling',
      image: '/assets/istituto-marangoni/campus-paris.svg',
      description: 'Anchored on Avenue Montaigne, opposite Christian Dior and Chanel. Immersed in the cradle of Haute Couture and Parisian luxury savoir-faire.',
      facilities: ['High Fashion Draping Studios', 'Professional Photography & Lighting Bays', 'Boutique French Fashion Library', 'Student VIP Lounge'],
      phone: '+33 1 40 07 75 75',
      email: 'paris@istitutomarangoni.com'
    },
    {
      id: 'london',
      city: 'London',
      title: 'London School of Fashion & Design',
      address: '30 Fashion Street, Shoreditch, London E1 6PX, United Kingdom',
      specialization: 'Contemporary Fashion, Fashion Tech, Subculture & Digital Innovation',
      image: '/assets/istituto-marangoni/campus-london.svg',
      description: 'Based in Shoreditch, London’s vibrant creative and tech quarter. Renowned for its boundary-pushing avant-garde collections and fashion technology incubators.',
      facilities: ['Garment Construction Labs', 'Digital Print Studio', 'CAD & Virtual Styling Suites', 'Exhibition Atrium', 'Career Advice & Enterprise Hub'],
      phone: '+44 20 7377 9347',
      email: 'london@istitutomarangoni.com'
    },
    {
      id: 'dubai',
      city: 'Dubai',
      title: 'Dubai School of Fashion & Design',
      address: 'DIFC Gate Building 8, Level 1, Dubai, United Arab Emirates',
      specialization: 'Middle East Luxury, High Jewelry, Fashion Business & Interior Design',
      image: '/assets/istituto-marangoni/campus-dubai.svg',
      description: 'Located in the Dubai International Financial Centre (DIFC), at the crossroads of global luxury commerce, modern architecture, and Middle Eastern haute couture.',
      facilities: ['Modern Spatial Design Studios', 'Fashion Business Incubator', 'Jewelry & Watch Design Suite', 'Smart Classroom Tech'],
      phone: '+971 4 445 1000',
      email: 'dubai@istitutomarangoni.com'
    },
    {
      id: 'miami',
      city: 'Miami',
      title: 'Miami School of Fashion & Design',
      address: '3704 NE 2nd Ave, Miami Design District, FL 33137, USA',
      specialization: 'Resort Wear, Sustainable Fashion, Interior Architecture & Art Direction',
      image: '/assets/istituto-marangoni/campus-miami.svg',
      description: 'A 7-story contemporary campus located in the vibrant Miami Design District, surrounded by art installations, luxury flagship boutiques, and Art Basel venues.',
      facilities: ['7-Floor Contemporary Atelier Building', 'Sewing & Draping Laboratories', 'Design Thinking Studio', 'Rooftop Event & Runway Space'],
      phone: '+1 305 424 9434',
      email: 'miami@istitutomarangoni.com'
    },
    {
      id: 'mumbai',
      city: 'Mumbai',
      title: 'Mumbai School of Fashion & Design',
      address: 'Ceejay House, F-61, Level 2, Dr. Annie Besant Road, Worli, Mumbai 400018, India',
      specialization: 'Indian Haute Couture, Luxury Heritage, Textile Craft & Fashion Business',
      image: '/assets/istituto-marangoni/campus-mumbai.svg',
      description: 'Located in the prestigious Ceejay House in Worli, Mumbai. Bridging centuries-old Indian artisan embroidery and textile heritage with Italian luxury design methods.',
      facilities: ['Zardozi & Artisan Embroidery Workshop', 'Fashion Design CAD Labs', 'Fashion Library', 'Auditorium & Runway Floor'],
      phone: '+91 22 6604 1000',
      email: 'mumbai@istitutomarangoni.com'
    }
  ],

  superMentors: [
    {
      name: 'Olivier Rousteing',
      role: 'Creative Director',
      house: 'Balmain Paris',
      quote: "Fashion is not just clothes; it is an attitude and a statement of who you are. At Istituto Marangoni, students learn to defend their vision with boldness.",
      type: 'supermentor',
      image: '/assets/istituto-marangoni/mentor-rousteing.svg',
      bio: 'Leading the historic house of Balmain since age 25, Olivier Rousteing mentors Istituto Marangoni master’s students on Parisian couture techniques, brand elevation, and digital cultural resonance.'
    },
    {
      name: 'Giambattista Valli',
      role: 'Haute Couture Designer & Founder',
      house: 'Giambattista Valli Paris',
      quote: "True luxury is timeless beauty and uncompromising craftsmanship. Working with Istituto Marangoni talent allows me to see the couture dreams of tomorrow unfold.",
      type: 'supermentor',
      image: '/assets/istituto-marangoni/mentor-valli.svg',
      bio: 'World-renowned Rome-born Haute Couture maestro who presents his breathtaking tulle and floral collections at Paris Fashion Week, hosting exclusive masterclasses for students.'
    },
    {
      name: 'Alessandro Sartori',
      role: 'Artistic Director',
      house: 'Ermenegildo Zegna',
      quote: "My years at Istituto Marangoni shaped my fundamental understanding of proportions, fabrics, and tailoring. It is the premier launchpad for any serious fashion creator.",
      type: 'alumni',
      image: '/assets/istituto-marangoni/mentor-sartori.svg',
      bio: 'Distinguished alumnus who revolutionized contemporary menswear at Zegna and Berluti. Pioneer of the Oasi Zegna sustainable cashmere and wool traceability initiative.'
    },
    {
      name: 'Domenico Dolce',
      role: 'Co-Founder & Designer',
      house: 'Dolce & Gabbana',
      quote: "Istituto Marangoni taught me how to take the soul of Sicilian tailoring and project it onto the international stage.",
      type: 'alumni',
      image: '/assets/istituto-marangoni/mentor-sartori.svg',
      bio: 'Alumnus (Class of 1979) who founded one of the most iconic global luxury lifestyle fashion houses in history alongside Stefano Gabbana.'
    },
    {
      name: 'Franco Moschino',
      role: 'Founder',
      house: 'Moschino',
      quote: "Fashion should be fun, irreverent, and tell a story that makes people think.",
      type: 'alumni',
      image: '/assets/istituto-marangoni/mentor-rousteing.svg',
      bio: 'Alumnus (Class of 1969) whose subversive wit, provocative pop culture motifs, and impeccable Italian tailoring founded the legendary house of Moschino.'
    }
  ],

  recruiters: [
    { name: 'Gucci', category: 'Luxury Fashion', city: 'Florence / Milan' },
    { name: 'Prada', category: 'Haute Couture & Leather', city: 'Milan' },
    { name: 'Balmain', category: 'Parisian Couture', city: 'Paris' },
    { name: 'Saint Laurent', category: 'Luxury Ready-to-Wear', city: 'Paris' },
    { name: 'Cartier', category: 'High Jewelry & Watches', city: 'Paris / Geneva' },
    { name: 'Versace', category: 'Glamour & Lifestyle', city: 'Milan' },
    { name: 'Christian Dior', category: 'Haute Couture & Beauty', city: 'Paris' },
    { name: 'Giorgio Armani', category: 'Tailoring & Luxury', city: 'Milan' },
    { name: 'Bottega Veneta', category: 'Intrecciato Leather', city: 'Venice / Milan' },
    { name: 'Fendi', category: 'Luxury Fur & Accessories', city: 'Rome' },
    { name: 'Moncler', category: 'Performance Luxury', city: 'Milan' },
    { name: 'Dolce & Gabbana', category: 'Italian Heritage', city: 'Milan' },
    { name: 'Ermenegildo Zegna', category: 'Sartorial Menswear', city: 'Milan / Trivero' },
    { name: "L'Oréal Group", category: 'Fragrances & Cosmetics', city: 'Paris' },
    { name: 'Interparfums', category: 'Prestige Fragrances', city: 'Paris / New York' },
    { name: 'Poltrona Frau', category: 'Italian Furniture Design', city: 'Tolentino / Milan' }
  ],

  news: [
    {
      id: 'news-new-building',
      date: 'OCTOBER 2026',
      category: 'CAMPUS INNOVATION',
      title: 'Istituto Marangoni Inaugurates Expanded Milan Design & Fashion Atelier Laboratories',
      summary: 'State-of-the-art expansion featuring specialized AR/VR spatial studios, computerized weaving machines, and collaborative luxury incubation hubs.',
      readTime: '4 min read',
      featured: true
    },
    {
      id: 'news-fragranze',
      date: 'SEPTEMBER 2026',
      category: 'FRAGRANCES & BEAUTY',
      title: 'The Future of Olfactory Luxury: Istituto Marangoni Launches High-Tech Scent Innovation Hub',
      summary: 'A new research partnership combining Italian botanical extraction heritage with AI-assisted fragrance profiling for prestigious perfume creators.',
      readTime: '3 min read'
    },
    {
      id: 'news-milan-fashion-week',
      date: 'SEPTEMBER 2026',
      category: 'RUNWAY SHOWS',
      title: 'Graduate Fashion Show Milano: Top 10 International Collections Unveiled to Vogue Italia',
      summary: 'International fashion buyers and media gather at Milan Fashion Week to scout the boldest graduates of Istituto Marangoni’s flagship master programs.',
      readTime: '5 min read'
    },
    {
      id: 'news-metaverso-manifesto',
      date: 'AUGUST 2026',
      category: 'AI & DIGITAL COUTURE',
      title: 'The Metaverso Manifesto: How Generative AI is Reshaping Fashion Education',
      summary: 'Istituto Marangoni publishes comprehensive research guidelines on ethical AI tools, digital twins in couture, and virtual fashion sustainability.',
      readTime: '6 min read'
    }
  ],

  faqs: [
    {
      question: 'Are Istituto Marangoni degrees officially accredited and recognized internationally?',
      answer: "Yes. In Italy, our Three-Year undergraduate programs are accredited by the Italian Ministry of University and Research (MUR) under the AFAM system (Alta Formazione Artistica, Musicale e Coreutica) awarding First Level Academic Diplomas (equivalent to a Bachelor's degree, 180 ECTS). Furthermore, our London and Paris campuses grant validated degrees in partnership with recognized UK institutions (such as Manchester Metropolitan University) and French state accreditations (RNCP Level 7 for Master's programs). Our Dubai campus is licensed by the KHDA.",
      category: 'accreditation'
    },
    {
      question: 'Can students transfer between global campuses (e.g. from Milan to Paris or London)?',
      answer: 'Yes! One of the signature advantages of Istituto Marangoni is our Cross-School Mobility and Semester Exchange option. Students enrolled in eligible multi-year undergraduate programs can study their first year in Milan, their second year in Paris or London, and complete their final collection in Florence or Milan.',
      category: 'campuses'
    },
    {
      question: 'What are the portfolio requirements for admission into Fashion and Design programs?',
      answer: "Undergraduate applicants submit 8 to 12 creative drawings, mood boards, photography, or digital artworks demonstrating their creative curiosity and artistic sensibility (no prior technical sewing or CAD skills required). Postgraduate Master's applicants must submit a professional portfolio of 15 to 20 sheets featuring completed fashion collections, technical flats, fabric swatches, or 3D spatial renders alongside their CV and statement of purpose.",
      category: 'admissions'
    },
    {
      question: 'What scholarship opportunities are available for 2026 intakes?',
      answer: 'Istituto Marangoni awards dedicated Merit Scholarships covering up to 50% of the tuition fee for outstanding creative talents. Scholarships are evaluated based on portfolio excellence, academic merit, and video motivation submissions. In addition, women in luxury management and tech scholarships are offered each semester.',
      category: 'scholarships'
    },
    {
      question: 'How does Istituto Marangoni’s Career Service assist graduates in finding jobs?',
      answer: 'Our dedicated Career Service connects students with over 400 prestigious luxury brands through on-campus recruitment days, exclusive fashion week backstage placements, portfolio reviews with HR directors from LVMH, Kering, and Prada, and tailored one-on-one interview coaching. Over 89% of graduates are placed in luxury houses within six months of graduation.',
      category: 'careers'
    }
  ]
};
