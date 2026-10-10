/**
 * TELL-A-TALE STUDIOS Configuration & Authoritative Dataset
 * Raoz Demo Factory — Template #7
 * Category: Photography, Studio & Cinematography (cat-photography)
 * Reference: https://tell-a-tale.in/
 */

export interface ServiceArea {
  id: string;
  title: string;
  slug: string;
  category: 'corporate' | 'celebrations' | 'food-product' | 'films';
  shortDescription: string;
  leadParagraph: string;
  coverImage: string;
  deliverables: string[];
  idealFor: string;
  sampleImages: Array<{
    title: string;
    caption: string;
    image: string;
  }>;
}

export interface PortfolioGalleryItem {
  id: string;
  title: string;
  category: 'corporate-events' | 'corporate-portraits' | 'celebrations' | 'food' | 'product' | 'weddings' | 'films';
  categoryLabel: string;
  clientOrEvent: string;
  location: string;
  image: string;
  aspectRatio?: string;
  description: string;
}

export interface FilmItem {
  id: string;
  title: string;
  type: 'Corporate Event Film' | 'Leadership Summit' | 'Brand Story' | 'Celebration Highlight';
  client: string;
  duration: string;
  thumbnail: string;
  description: string;
  videoUrl?: string;
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string[];
  image: string;
}

export const tellATaleConfig = {
  id: 'tell-a-tale',
  numericId: 7,
  name: 'TELL-A-TALE STUDIOS',
  fullName: 'Tell-a-Tale Studios — Corporate & Event Photographer in Mumbai',
  categoryCode: 'cat-photography',
  categoryName: 'Photography',
  subcategory: 'Corporate and Event Photography',
  businessType: 'Corporate Events, Leadership Portraits, Celebrations, Commercial & Films Studio',
  tagline: 'Corporate & Event Photographer in Mumbai for Conferences, Consulates & PR-Ready Coverage',
  status: 'completed' as const,
  entryPoint: 'src/templates/tell-a-tale/TellATale.tsx',
  assetDirectory: 'public/assets/tell-a-tale/',
  dependencies: ['lucide-react', 'react', 'motion'],
  originalUrl: 'https://tell-a-tale.in/',

  placeholders: {
    brandName: 'Tell-a-Tale Studios',
    tagline: 'Professional enough for business. Human enough to feel real.',
    founders: 'Nikhil B. & Mamta Kalambe',
    phone: '+91 9619891066',
    phoneDisplay: '+91 9619 891 066',
    email: 'shoots@tell-a-tale.in',
    studioLocation: 'Marol, Andheri (East), Mumbai, Maharashtra 400059, India',
    openingHours: 'Mon – Sun: 09:00 – 17:00 IST',
    foundingYear: '2014',
    yearsActive: '10+ Years',
    whatsappUrl: 'https://wa.me/919619891066?text=Hi%20Tell-a-Tale%20Studios,%20I%E2%80%99d%20like%20to%20enquire%20about%20a%20shoot.',
    socials: {
      facebook: 'https://www.facebook.com/tellatalestudios/',
      instagram: 'https://www.instagram.com/tellatalestudios/',
      linkedin: 'https://www.linkedin.com/company/tell-a-tale-studios/',
      twitter: 'https://twitter.com/tellatalestudio',
      youtube: 'https://www.youtube.com/@TellATaleStudios',
      pinterest: 'https://www.pinterest.com/tellatalestudios/'
    }
  },

  theme: {
    bgLight: '#FFFFFF',
    bgWarm: '#FAF9F5',
    bgDark: '#121316',
    cardBorder: '#E5E7EB',
    textMain: '#141518',
    textMuted: '#5C6068',
    accentGold: '#C59B27',
    accentDark: '#1E2024'
  },

  trustedClients: [
    { name: 'Australian Consulate', role: 'Diplomatic & Institutional Rooms' },
    { name: 'Asia Society', role: 'Global Summits & Panels' },
    { name: 'JP Morgan', role: 'Leadership & Financial Conferences' },
    { name: 'TEDx', role: 'Keynote & Speaker Stages' },
    { name: 'ICEF', role: 'Global Education Conventions' },
    { name: 'Preqin', role: 'Private Equity & Industry Seminars' },
    { name: 'Hitachi', role: 'Enterprise Summits & PR Releases' },
    { name: 'People Matters', role: 'HR & Leadership Forums' }
  ],

  corePillars: [
    {
      number: '01',
      title: 'We understand high-trust rooms',
      description: 'Leadership events, panels, consulates and stakeholder rooms need calm movement, sharp observation and professional discretion.'
    },
    {
      number: '02',
      title: 'We shoot for actual usage',
      description: 'PR selects, LinkedIn posts, website banners, speaker profiles, internal decks and event recaps all need different framing and quick turnaround.'
    },
    {
      number: '03',
      title: 'We keep people comfortable',
      description: 'Whether it is a founder portrait or a birthday moment, we guide when needed and disappear when the moment needs natural space.'
    },
    {
      number: '04',
      title: 'We deliver usable images',
      description: 'The point is not only a beautiful gallery. It is a set of clean, color-accurate images your team, brand or family can immediately put to work.'
    }
  ],

  processSteps: [
    {
      step: '01',
      title: 'Share the brief',
      description: 'Tell us about the event flow, key VIPs, deliverables, venue and preferred turnaround times.'
    },
    {
      step: '02',
      title: 'We suggest the setup',
      description: 'We recommend team size, lighting approach, coverage schedule and express delivery options.'
    },
    {
      step: '03',
      title: 'We cover the shoot',
      description: 'Discreet, calm, professional presence ensuring zero disruption to speakers or attendees.'
    },
    {
      step: '04',
      title: 'You receive edited images',
      description: 'High-resolution, color-graded and web-optimized images organized into convenient digital albums.'
    }
  ],

  services: [
    {
      id: 'srv-corp-events',
      title: 'Corporate Events & Conferences',
      slug: 'corporate-events',
      category: 'corporate',
      shortDescription: 'Conferences, leadership summits, global conventions and consulate events covered with professional discretion and PR turnaround.',
      leadParagraph: 'Corporate events require photographers who understand stage etiquette, lighting dynamics in auditorium ballrooms, and the need for same-day PR selects.',
      coverImage: '/assets/tell-a-tale/corporate-event-hero.jpg',
      deliverables: ['Stage Keynotes & Panels', 'Audience & Networking Glimpses', 'Branding & Sponsor Signage', 'Same-Day PR Selects', 'High-Res Digital Album'],
      idealFor: 'Enterprise brands, consulates, annual leadership summits, multi-track conferences and industry forums.',
      sampleImages: [
        { title: 'Executive Keynote Stage', caption: 'Sharp stage lighting & composed framing', image: '/assets/tell-a-tale/corporate-event-hero.jpg' },
        { title: 'Interactive Panel Discussion', caption: 'Capturing dynamic interactions between thought leaders', image: '/assets/tell-a-tale/corporate-event-panel.webp' }
      ]
    },
    {
      id: 'srv-corp-portraits',
      title: 'Corporate Portraits & Headshots',
      slug: 'corporate-portraits',
      category: 'corporate',
      shortDescription: 'Executive headshots, founder portraits and leadership team profiles crafted for LinkedIn, press releases and company websites.',
      leadParagraph: 'Portraits that reflect competence, confidence and approachable humanity without looking like generic stock photos.',
      coverImage: '/assets/tell-a-tale/corporate-headshot.webp',
      deliverables: ['On-Location Studio Setup', 'Founder & Board Profiles', 'Team & Department Groups', 'Full-Body & Editorial Crops', 'Retouched Web & Print Files'],
      idealFor: 'Founders, C-suite executives, legal/consulting partners, and corporate marketing teams.',
      sampleImages: [
        { title: 'Executive Headshot', caption: 'Clean, approachable lighting with natural expression', image: '/assets/tell-a-tale/corporate-headshot.webp' }
      ]
    },
    {
      id: 'srv-celebrations',
      title: 'Private Celebrations & Milestones',
      slug: 'celebrations',
      category: 'celebrations',
      shortDescription: 'Birthdays, anniversaries, cocktail soirees, baby showers and private family gatherings captured with candid warmth.',
      leadParagraph: 'We focus on genuine joy, family hugs, spontaneous toasts, and the celebratory atmosphere without forced posing.',
      coverImage: '/assets/tell-a-tale/celebration-birthday.webp',
      deliverables: ['Candid Guest Moments', 'Decor & Ambience Coverage', 'Cake-Cutting & Toasts', 'Family & Group Portraits', 'Online Shareable Gallery'],
      idealFor: 'Milestone birthdays (40th, 50th, 60th), anniversaries, baby announcements and private dinners.',
      sampleImages: [
        { title: 'Milestone Birthday Party', caption: 'Pure spontaneous laughter and genuine celebratory warmth', image: '/assets/tell-a-tale/celebration-birthday.webp' },
        { title: 'Baby & Maternity Memories', caption: 'Gentle, timeless memories of growing families', image: '/assets/tell-a-tale/baby-maternity.jpg' }
      ]
    },
    {
      id: 'srv-food-product',
      title: 'Food & Product Photography',
      slug: 'food-product',
      category: 'food-product',
      shortDescription: 'Appetizing food styling, restaurant menu imagery, packaging shoots and clean e-commerce product catalogs.',
      leadParagraph: 'A photographer-stylist duo combining culinary aesthetics, lighting, and texture to make every dish and product look irresistible.',
      coverImage: '/assets/tell-a-tale/food-biryani.webp',
      deliverables: ['Hero Flatlays & Table Spreads', 'Macro Texture & Steam Details', 'Packaging & Bottle Shots', 'Menu & Aggregator Ready Crops', 'Social Media Asset Suite'],
      idealFor: 'Restaurateurs, cloud kitchens, FMCG food brands, beverage brands, and boutique product makers.',
      sampleImages: [
        { title: 'Artisanal Biryani Pot', caption: 'Rich spices, aromatic textures and natural styling', image: '/assets/tell-a-tale/food-biryani.webp' },
        { title: 'Traditional Butter Chicken', caption: 'Heritage rustic tableware and vibrant colors', image: '/assets/tell-a-tale/food-butter-chicken.jpg' },
        { title: 'Clean Cosmetics Product Shot', caption: 'Crisp reflections, pure backgrounds and packaging focus', image: '/assets/tell-a-tale/product-cosmetics.jpg' }
      ]
    },
    {
      id: 'srv-films',
      title: 'Films & Event Videography',
      slug: 'films',
      category: 'films',
      shortDescription: 'Cinematic recap videos, executive soundbites, brand launch reels and highlight reels for corporate and private events.',
      leadParagraph: 'Films that capture the energy, keynote messages, and pulse of the room, edited with crisp audio and licensed music.',
      coverImage: '/assets/tell-a-tale/corporate-event-panel.webp',
      deliverables: ['1-Minute Social Media Reel', '3-5 Minute Event Highlights', 'Keynote Speaker Audio Clips', '4K High-Bitrate Delivery', 'Licensed Music Scoring'],
      idealFor: 'Corporate communications teams, event agencies, conference chairs, and brand managers.',
      sampleImages: [
        { title: 'Leadership Summit Highlight', caption: 'Multi-camera coverage with crystal clear audio', image: '/assets/tell-a-tale/corporate-event-panel.webp' }
      ]
    }
  ],

  portfolioGallery: [
    {
      id: 'pg-1',
      title: 'Asia Society Policy Summit',
      category: 'corporate-events',
      categoryLabel: 'Corporate Events',
      clientOrEvent: 'Asia Society India Centre',
      location: 'The Taj Mahal Palace, Mumbai',
      image: '/assets/tell-a-tale/corporate-event-hero.jpg',
      aspectRatio: '16/10',
      description: 'Keynote session highlighting bilateral trade policies with diplomatic delegates and business heads in attendance.'
    },
    {
      id: 'pg-2',
      title: 'Global Tech Leaders Panel',
      category: 'corporate-events',
      categoryLabel: 'Corporate Events',
      clientOrEvent: 'Enterprise Tech Conclave',
      location: 'Jio World Convention Centre, BKC',
      image: '/assets/tell-a-tale/corporate-event-panel.webp',
      aspectRatio: '16/10',
      description: 'Cross-functional panel discussion featuring founders, venture capitalists, and industry innovators.'
    },
    {
      id: 'pg-3',
      title: 'Executive Managing Director Portrait',
      category: 'corporate-portraits',
      categoryLabel: 'Corporate Portraits',
      clientOrEvent: 'Global Investment Firm',
      location: 'Bandra Kurla Complex, Mumbai',
      image: '/assets/tell-a-tale/corporate-headshot.webp',
      aspectRatio: '3/4',
      description: 'Natural light executive portrait tailored for annual report disclosures, LinkedIn profile, and press publications.'
    },
    {
      id: 'pg-4',
      title: 'Golden Jubilee Birthday Gala',
      category: 'celebrations',
      categoryLabel: 'Celebrations',
      clientOrEvent: 'Private Birthday Soiree',
      location: 'St. Regis Hotel, Lower Parel',
      image: '/assets/tell-a-tale/celebration-birthday.webp',
      aspectRatio: '16/10',
      description: 'Warm, candid documentary coverage of a 50th birthday toast surrounded by lifelong friends and family.'
    },
    {
      id: 'pg-5',
      title: 'Signature Dum Biryani Presentation',
      category: 'food',
      categoryLabel: 'Food & Styling',
      clientOrEvent: 'Boutique Awadhi Kitchen',
      location: 'Studio Setup, Andheri East',
      image: '/assets/tell-a-tale/food-biryani.webp',
      aspectRatio: '16/10',
      description: 'Editorial food flatlay styled with brass handis, saffron strands, fresh mint, and earthen elements.'
    },
    {
      id: 'pg-6',
      title: 'Heritage Butter Chicken Feast',
      category: 'food',
      categoryLabel: 'Food & Styling',
      clientOrEvent: 'Fine-Dining Mughlai Concept',
      location: 'Mumbai Restaurant Location',
      image: '/assets/tell-a-tale/food-butter-chicken.jpg',
      aspectRatio: '16/10',
      description: 'Velvety gravy texture, charred tandoori chicken pieces, and rustic accompaniments shot for menu refresh.'
    },
    {
      id: 'pg-7',
      title: 'Rustic Handi Mutton Curry',
      category: 'food',
      categoryLabel: 'Food & Styling',
      clientOrEvent: 'Traditional Indian Culinary Brand',
      location: 'Studio Kitchen, Mumbai',
      image: '/assets/tell-a-tale/food-mutton-curry.jpg',
      aspectRatio: '16/10',
      description: 'Slow-cooked spiced mutton with whole black cardamom and caramelized onions captured in earthy earthenware.'
    },
    {
      id: 'pg-8',
      title: 'Organic Tea & Herb Flatlay',
      category: 'food',
      categoryLabel: 'Food & Styling',
      clientOrEvent: 'Wellness Beverage Brand',
      location: 'Natural Light Daylight Studio',
      image: '/assets/tell-a-tale/food-moringa-tea.webp',
      aspectRatio: '16/10',
      description: 'Moringa herbal tea flatlay with whole dried leaves, glass teaware, and delicate morning sun highlights.'
    },
    {
      id: 'pg-9',
      title: 'Handcrafted Coconut Butter Spread',
      category: 'food',
      categoryLabel: 'Food & Styling',
      clientOrEvent: 'Artisanal Bakery & Pantry',
      location: 'Baking Studio, Mumbai',
      image: '/assets/tell-a-tale/food-coconut-butter.webp',
      aspectRatio: '16/10',
      description: 'Clean culinary styling emphasizing organic ingredients, crusty bread textures, and whipped butter consistency.'
    },
    {
      id: 'pg-10',
      title: 'Minimalist Skincare Packaging',
      category: 'product',
      categoryLabel: 'Product Photography',
      clientOrEvent: 'D2C Botanical Beauty Brand',
      location: 'Studio Tabletop Setup',
      image: '/assets/tell-a-tale/product-cosmetics.jpg',
      aspectRatio: '16/10',
      description: 'E-commerce and marketing still life showcasing cosmetic pump bottles, ingredient botanicals, and clean reflections.'
    },
    {
      id: 'pg-11',
      title: 'Pranav & Aishwarya Wedding Rituals',
      category: 'weddings',
      categoryLabel: 'Wedding Stories',
      clientOrEvent: 'Wedding Celebration',
      location: 'Alibaug Seaside Estate',
      image: '/assets/tell-a-tale/wedding-praais.jpg',
      aspectRatio: '16/10',
      description: 'Soulful, relaxed wedding story highlighting sacred moments and authentic joy without artificial intervention.'
    },
    {
      id: 'pg-12',
      title: 'High-Energy Sangeet Performance',
      category: 'weddings',
      categoryLabel: 'Wedding Stories',
      clientOrEvent: 'Destination Wedding Celebration',
      location: 'Udaipur Heritage Resort',
      image: '/assets/tell-a-tale/wedding-sangeet.jpg',
      aspectRatio: '16/10',
      description: 'Capturing dynamic choreography, colorful attire, and uninhibited celebration on the sangeet stage.'
    },
    {
      id: 'pg-13',
      title: 'Intimate Sunset Couple Portrait',
      category: 'weddings',
      categoryLabel: 'Wedding Stories',
      clientOrEvent: 'Golden Hour Pre-Wedding',
      location: 'South Mumbai Heritage District',
      image: '/assets/tell-a-tale/wedding-couple-portrait.jpg',
      aspectRatio: '16/10',
      description: 'Quiet, cinematic sunset portrait balancing historic architectural textures and natural couple chemistry.'
    },
    {
      id: 'pg-14',
      title: 'Tender Newborn & Maternity Milestones',
      category: 'celebrations',
      categoryLabel: 'Celebrations',
      clientOrEvent: 'Private Maternity Shoot',
      location: 'Home Studio Session, Mumbai',
      image: '/assets/tell-a-tale/baby-maternity.jpg',
      aspectRatio: '1/1',
      description: 'Gentle, heartwarming maternity memory celebrating anticipation and the earliest days of parenthood.'
    }
  ] as PortfolioGalleryItem[],

  films: [
    {
      id: 'film-1',
      title: 'Annual APAC Leadership Summit 2025',
      type: 'Leadership Summit',
      client: 'Global Financial Institution',
      duration: '3:45',
      thumbnail: '/assets/tell-a-tale/corporate-event-hero.jpg',
      description: 'Comprehensive video recap capturing executive addresses, delegate interactions, and evening dinner galas in Mumbai.'
    },
    {
      id: 'film-2',
      title: 'Tech Forward Conclave Highlights',
      type: 'Corporate Event Film',
      client: 'Venture & Innovation Forum',
      duration: '2:30',
      thumbnail: '/assets/tell-a-tale/corporate-event-panel.webp',
      description: 'Fast-paced, dynamic conference recap tailored for social media, highlighting keynote speakers and exhibitor booths.'
    },
    {
      id: 'film-3',
      title: 'From Spice to Plate — Culinary Craft',
      type: 'Brand Story',
      client: 'Heritage Awadhi Restaurant',
      duration: '1:50',
      thumbnail: '/assets/tell-a-tale/food-biryani.webp',
      description: 'Sensory short documentary film exploring master chef techniques, slow flame cooking, and plating artistry.'
    }
  ] as FilmItem[],

  foundersStory: {
    heading: 'Meet Nikhil & Mamta',
    tagline: 'A documentary photographer and an intuitive visual stylist.',
    leadBio: 'Tell-a-Tale Studios is a Mumbai-based photography and film studio founded by Nikhil B. and Mamta Kalambe, creating clean, natural and story-led visuals for corporate events, conferences, celebrations, food, products and brand shoots.',
    portraitImage: '/assets/tell-a-tale/founders-nikhil-mamta.jpg',
    manifesto: [
      'Some stories are loud — a packed conference room, a speaker on stage, a birthday toast, a restaurant table full of food.',
      'Some are quieter — a founder pausing before a portrait, a mother watching from the side, a team laughing between serious moments.',
      'We are interested in both.'
    ],
    roles: [
      {
        name: 'Nikhil B.',
        title: 'Founder & Lead Event Photographer',
        focus: 'Nikhil brings a documentary eye to events, people and business rooms. His work focuses on moments that feel real, composed and useful for communication.'
      },
      {
        name: 'Mamta Kalambe',
        title: 'Co-Founder & Creative Visual Stylist',
        focus: 'Mamta brings warmth, detail and a strong sense of people to the studio’s work across photography, styling, food, celebrations and brand-led visual stories.'
      }
    ]
  },

  blogPosts: [
    {
      id: 'blog-1',
      slug: 'corporate-event-photography-mumbai-guide',
      title: 'Planning Corporate Event Photography in Mumbai: What Event Teams Need to Know',
      date: 'January 2026',
      readTime: '4 min read',
      category: 'Corporate Events',
      excerpt: 'From stage lighting logistics to prompt PR delivery windows, here is how leading conference managers brief photographers for maximum ROI.',
      image: '/assets/tell-a-tale/corporate-event-hero.jpg',
      content: [
        'Corporate events are high-stakes environments where communication happens in real time. A great keynote speech or panel discussion only reaches a fraction of its potential audience unless it is preserved with sharp, compelling visuals.',
        'When briefing event photographers, the most critical factor is specifying your image destinations. Are you posting real-time updates to LinkedIn? Does your PR agency need an embargoed select by 4 PM? Clarifying these requirements ahead of shoot day makes all the difference.',
        'At Tell-a-Tale Studios, we ensure dedicated coverage for stage moments, audience reactions, and sponsor branding, with a dedicated fast-track editor on standby for immediate press requirements.'
      ]
    },
    {
      id: 'blog-2',
      slug: 'executive-portraits-that-feel-authentic',
      title: 'Executive Headshots That Don’t Look Like Generic Stock Photos',
      date: 'December 2025',
      readTime: '3 min read',
      category: 'Corporate Portraits',
      excerpt: 'How we create approachable, confident leadership portraits that reflect your genuine personality rather than stiff corporate poses.',
      image: '/assets/tell-a-tale/corporate-headshot.webp',
      content: [
        'The era of the stiff, arms-crossed corporate headshot against a generic backdrop is behind us. Today’s business leaders require images that convey warmth, intellectual authority, and authentic approachability.',
        'We prefer utilizing your actual office architecture, natural daylight, and candid posture. Our goal is to capture you in a moment of calm contemplation or engaging conversation.',
        'A single well-executed executive portrait series serves your LinkedIn profile, investor presentations, keynote bios, and national media features for years to come.'
      ]
    },
    {
      id: 'blog-3',
      slug: 'food-photography-and-styling-menus',
      title: 'The Art of Food Styling: Why Natural Lighting & Texture Elevate Restaurant Menus',
      date: 'November 2025',
      readTime: '4 min read',
      category: 'Food & Styling',
      excerpt: 'How our photographer-stylist duo approaches culinary shoots to drive customer cravings and delivery app orders.',
      image: '/assets/tell-a-tale/food-biryani.webp',
      content: [
        'Food photography requires a delicate balance of speed, styling precision, and light control. Dishes like biryanis, gravies, and hot teas lose their freshness within minutes of plating.',
        'Having a dedicated stylist on set ensures garnishes remain crisp, sauces glisten, and table elements tell a cohesive cultural story.',
        'Whether preparing visuals for a dine-in menu, Swiggy/Zomato hero banners, or Instagram campaigns, thoughtful lighting makes ingredients pop off the screen.'
      ]
    }
  ] as BlogPostItem[]
};
