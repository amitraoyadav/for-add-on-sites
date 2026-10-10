export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  destination: string;
  features: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
  serviceCategory: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ClientLogo {
  name: string;
  filename: string;
  category: 'Corporate' | 'Hospitality' | 'Fashion' | 'Technology' | 'Real estate' | 'Consumer';
}

export const PK_PHOTOGRAPHY_CONFIG = {
  brand: {
    name: 'PK Photography',
    founder: 'Prabhakar Kumar',
    headline: 'Wedding Photography & Films in Mumbai & Goa',
    tagline: 'A studio built around your story.',
    statement: 'Weddings, events & brands. Mumbai, Goa & beyond.',
    subheadline: 'The day begins with a feeling.',
    description: 'Photography feels different when you feel understood. Led by Prabhakar Kumar, PK Photography creates wedding stories, actor and model portfolios, professional headshots, events and brand imagery across Mumbai, Goa and destination locations. We bring calm direction, thoughtful production and an attentive eye to every frame—so the experience feels considered and the finished work still feels like you.',
    rating: '4.9',
    reviewCount: '197',
    contact: {
      email: 'prabhakar@pkphotography.in',
      displayEmail: 'prabhakar [at] pkphotography.in',
      mumbaiPhone: '+91 8888766739',
      goaPhone: '+91 81888 81165',
      whatsapp: '918888766739',
      mumbaiAddress: 'C1302, Evershine Cosmic, Opp. Infiniti Mall, Veera Desai Industrial Estate, Andheri West, Mumbai, Maharashtra 400053',
      goaAddress: 'House No. 1053 A, Madhlavaddo, Morjim, Goa 403512'
    },
    socialLinks: {
      instagram: 'https://www.instagram.com/itspkphotography.in/',
      facebook: 'https://www.facebook.com/pkfashionphotography',
      linkedin: 'https://www.linkedin.com/company/pkphotography/',
      x: 'https://x.com/pkphotographym',
      youtube: 'https://www.youtube.com/@itspkphotography'
    },
    originalUrl: 'https://pkphotography.in/'
  },

  assets: {
    logo: '/assets/pk-photography/pk-photography-logo.png',
    studioEditorial: '/assets/pk-photography/pk-studio-editorial.webp',
    videoReel: '/assets/pk-photography/wedding-reel-mobile.mp4',
    videoPoster: '/assets/pk-photography/wedding-reel/000.webp',
    curatedWedding: '/assets/pk-photography/curated/wedding-0n3a7372.webp',
    curatedPortfolio: '/assets/pk-photography/curated/portfolio-pkp-3115.webp',
    curatedHeadshot: '/assets/pk-photography/curated/headshot-pkp-9441.webp',
    homeEditorial: '/assets/pk-photography/home-editorial-pkp-3576.jpg',
    weddingDetails: '/assets/pk-photography/wedding-8.jpg',
    personalPortrait: '/assets/pk-photography/personal-portrait-pkp-9971.jpg',
    homeDuo: '/assets/pk-photography/home-duo-pkp-3327.jpg'
  },

  heroSteps: [
    {
      step: '01',
      title: 'Gather',
      description: 'Pre-wedding and haldi in Mumbai & Goa.'
    },
    {
      step: '02',
      title: 'Feel',
      description: 'Candid coverage of every ritual.'
    },
    {
      step: '03',
      title: 'Remember',
      description: 'Cinematic wedding film and reels.'
    },
    {
      step: '04',
      title: 'Keep',
      description: 'Printed albums and a private gallery.'
    }
  ],

  services: [
    {
      id: 'weddings',
      title: 'Wedding photography & films',
      slug: '/services/weddings',
      tagline: 'Candid moments, family portraits and a film of the celebrations',
      description: 'Candid moments, family portraits and a film of the celebrations, planned as one coverage brief.',
      destination: 'Mumbai & Goa',
      features: ['Candid Ceremony Coverage', 'Cinematic Wedding Film & 4K Reels', 'Signature Archival Album', 'Private Face-Scan Guest Gallery']
    },
    {
      id: 'destination-goa',
      title: 'Destination weddings in Goa',
      slug: '/wedding-photography-goa',
      tagline: 'Beach ceremonies, resort celebrations and multi-day schedules',
      description: 'Beach ceremonies, resort celebrations and multi-day schedules with space for the people who matter.',
      destination: 'North & South Goa',
      features: ['Resort & Beach Permits Handling', 'Sunset & Golden Hour Lighting Plans', 'Multi-Day Sangeet & Reception', 'Drone Aerial Perspectives']
    },
    {
      id: 'pre-wedding-goa',
      title: 'Goa pre-wedding photography',
      slug: '/pre-wedding-photography-goa',
      tagline: 'Choose the light, location and mood for a couple shoot',
      description: 'Choose the light, location and mood for a couple shoot that feels personal.',
      destination: 'Heritage Forts & Coastline',
      features: ['Natural Unposed Emotional Connection', 'Location Scouting & Transfer Guidance', 'Golden-Hour & Dramatic Coast Light', 'High-Res Digital Proofing']
    },
    {
      id: 'corporate-events',
      title: 'Corporate event photography',
      slug: '/corporate-event-photography',
      tagline: 'Conferences, launches and networking',
      description: 'Conferences, launches and networking: the speakers, audience and brand details that tell the full story.',
      destination: 'Mumbai & Tier 1 Venues',
      features: ['Keynote Speakers & VIP Stage Coverage', 'Audience & Networking Candids', 'Same-Day Press Release Digital Delivery', 'Brand Sponsor Visibility Documentation']
    },
    {
      id: 'corporate-videography',
      title: 'Corporate videography',
      slug: '/corporate-videography-mumbai-goa',
      tagline: 'Event films, interviews and business stories',
      description: 'Event films, interviews and business stories shaped around where your audience will watch.',
      destination: 'Mumbai & Goa Studios',
      features: ['Executive Interviews & Soundbites', 'Highlight Reels for LinkedIn & Investor Relations', 'Broadcast-Quality Audio & 4K Master Exports', 'Multi-Format Reels & Shorts']
    },
    {
      id: 'goa-outings',
      title: 'Goa outings & offsites',
      slug: '/corporate-outing-photography-goa',
      tagline: 'Team activities, retreats and shared experiences',
      description: 'Team activities, retreats and shared experiences documented without interrupting the day.',
      destination: 'Goa Retreat Venues',
      features: ['Leadership Offsites & Team Dynamics', 'Adventure & Water Sports Documentation', 'Unintrusive Documentary Pacing', 'Company Culture Digital Assets']
    }
  ] as ServiceItem[],

  approachPillars: [
    {
      id: 'team',
      title: 'A team around your brief',
      description: 'Our in-house photography and videography team brings planning, shooting, coordination and editing together. Crew size and coverage are tailored to the schedule rather than a one-size-fits-all checklist.'
    },
    {
      id: 'process',
      title: 'From first enquiry to delivery',
      description: 'Enquiry → Consultation → Planning → Shoot → Editing → Delivery. We discuss references and practical details, agree the shot list, then confirm the final photographs, films and handover timing in your quote.'
    },
    {
      id: 'local',
      title: 'A considered local approach',
      description: 'Mumbai assignments need room for travel, venue access and changing light. In Goa, we plan around outdoor conditions, transfers and permissions. Share your venue and date early so the coverage fits the day.'
    }
  ],

  experienceSteps: [
    {
      step: '01',
      title: 'A conversation, first.',
      description: 'Tell us what this shoot means to you. We’ll talk through references, location and the feeling you want to create.'
    },
    {
      step: '02',
      title: 'Space to be yourself.',
      description: 'A considered setting and clear direction, with room for the unplanned moments that make the photographs yours.'
    },
    {
      step: '03',
      title: 'The finishing touches.',
      description: 'We agree the selection, editing and delivery with you, so you know what to expect from the finished work.'
    }
  ],

  packages: [
    {
      id: 'pkg-headshots',
      category: 'Headshots & Portraits',
      title: 'Professional Headshot Session',
      price: '₹6,000',
      duration: '45 - 60 Minutes',
      deliverables: '5 Master Retouched High-Res Portraits + Web & LinkedIn Exports',
      description: 'Designed for executives, founders, lawyers, and creative professionals who need an authoritative, warm personal presence.'
    },
    {
      id: 'pkg-events',
      category: 'Events & Corporate',
      title: 'Half-Day Event Coverage',
      price: '₹10,000',
      duration: 'Up to 4 Hours',
      deliverables: 'Full Color-Corrected High-Res Gallery + Quick PR Turnaround',
      description: 'Conferences, launches, gallery previews, and corporate networking captured with editorial documentary finesse.'
    },
    {
      id: 'pkg-single-day-wedding',
      category: 'Weddings',
      title: 'Single-Day Celebration',
      price: '₹80,000',
      duration: 'Single Day (Up to 8 Hours)',
      deliverables: 'Candid Photography + Cinematic Highlights Film + Signature Album',
      description: 'Complete coverage for intimate city weddings, haldi, pheras, and reception with coordinated in-house team.'
    },
    {
      id: 'pkg-full-wedding-day',
      category: 'Weddings',
      title: 'Full Wedding Day Master',
      price: '₹1,20,000',
      duration: 'Full Day Comprehensive',
      deliverables: 'Lead Candid Photographer + Cinematographer + 4K Wedding Film + Heirloom Album + QR Guest Search',
      popular: true,
      description: 'Our signature Mumbai & Goa coverage package bringing photo and video together under one seamless plan.'
    },
    {
      id: 'pkg-destination-wedding',
      category: 'Weddings & Destination',
      title: 'Multi-Day & Destination Wedding',
      price: '₹2,00,000',
      duration: '2 to 3 Days Coverage',
      deliverables: 'Full Photography & Film Crew + Drone Aerials + Feature Film + Teaser Reels + 2 Luxury Albums',
      description: 'Tailored for destination weddings in Goa, Rajasthan, and luxury resorts across India with custom travel coordination.'
    }
  ],

  testimonials: [
    {
      id: 'rev-1',
      author: 'Nirmesh Raghav',
      role: 'Corporate Event Client',
      location: 'Mumbai',
      rating: 5,
      serviceCategory: 'Corporate event photography & videography',
      quote: 'The entire team was incredibly skilled, professional and attentive throughout the event. They captured every moment beautifully and delivered all the photos and videos right on time.'
    },
    {
      id: 'rev-2',
      author: 'Maria Alexandra',
      role: 'Bride',
      location: 'Goa',
      rating: 5,
      serviceCategory: 'Wedding & couple photography',
      quote: 'He made the whole experience feel relaxed and enjoyable for both me and my husband. The photos turned out absolutely stunning, and they mean so much to us. We’ll treasure them forever.'
    },
    {
      id: 'rev-3',
      author: 'Jeremy McKey',
      role: 'Executive',
      location: 'Mumbai',
      rating: 5,
      serviceCategory: 'Professional headshot photography',
      quote: 'I had a great experience getting professional headshots done with Prabhakar. The process couldn’t have been smoother—setting a time, a session in his studio, discussing edits after. The communication was frictionless.'
    },
    {
      id: 'rev-4',
      author: 'Jessica Mahood',
      role: 'Fashion Model',
      location: 'Mumbai & Goa',
      rating: 5,
      serviceCategory: 'Model portfolio photography',
      quote: 'The best experience! Super easy booking process, really enjoyable vibe in the studio, finished products are perfect. I would highly recommend it to anyone looking to build their portfolio.'
    },
    {
      id: 'rev-5',
      author: 'Bhoomika Ahire',
      role: 'Brand Producer',
      location: 'Mumbai',
      rating: 5,
      serviceCategory: 'Commercial & brand production',
      quote: 'They were professional, efficient, and delivered everything exactly as we needed. The entire process was smooth, fun, and creatively fulfilling. Looking forward to working together again!'
    }
  ] as ReviewItem[],

  clientLogos: [
    { name: 'Tata Motors', filename: 'tata-motors.webp', category: 'Corporate' },
    { name: 'Siemens Energy', filename: 'siemens-energy.webp', category: 'Corporate' },
    { name: 'Godrej', filename: 'godrej.webp', category: 'Corporate' },
    { name: 'Myntra', filename: 'myntra.webp', category: 'Fashion' },
    { name: 'Airbnb', filename: 'airbnb.webp', category: 'Hospitality' },
    { name: 'AMD', filename: 'amd.webp', category: 'Technology' },
    { name: 'W Goa', filename: 'w-goa.webp', category: 'Hospitality' },
    { name: 'Asianet', filename: 'asianet.webp', category: 'Corporate' },
    { name: 'Shapoorji Pallonji Real Estate', filename: 'shapoorji-pallonji.webp', category: 'Real estate' },
    { name: 'Lakme', filename: 'lakme.webp', category: 'Fashion' },
    { name: 'BenQ', filename: 'benq.webp', category: 'Technology' },
    { name: 'Birla Estates', filename: 'birla-estates.webp', category: 'Real estate' },
    { name: 'NDDB Dairy Services', filename: 'nddb-dairy-services.webp', category: 'Consumer' },
    { name: 'KFC', filename: 'kfc.webp', category: 'Consumer' },
    { name: 'SensoPart', filename: 'sensopart.webp', category: 'Technology' },
    { name: 'Zell Education', filename: 'zell-education.webp', category: 'Corporate' },
    { name: 'Bonito Designs', filename: 'bonito-designs.webp', category: 'Real estate' },
    { name: 'DeltaX', filename: 'deltax.webp', category: 'Technology' },
    { name: 'Insurtech Insights', filename: 'insurtech-insights.webp', category: 'Corporate' },
    { name: 'ExpressEarth', filename: 'express-earth.webp', category: 'Corporate' },
    { name: 'Label Brasil', filename: 'label-brasil.webp', category: 'Fashion' },
    { name: 'Lokhandwala Infrastructure', filename: 'lokhandwala-infrastructure.webp', category: 'Real estate' },
    { name: 'Mahananda', filename: 'mahananda.webp', category: 'Consumer' },
    { name: 'RCCL', filename: 'rccl.webp', category: 'Hospitality' },
    { name: 'Globicon Terminals', filename: 'globicon-terminals.webp', category: 'Corporate' },
    { name: 'Fernandes Group', filename: 'fernandes-group.webp', category: 'Corporate' },
    { name: 'Cherry & Chocolate', filename: 'cherry-chocolate.webp', category: 'Consumer' },
    { name: 'Keemti Jewellery', filename: 'keemti-jewellery.webp', category: 'Fashion' },
    { name: 'Octopus', filename: 'octopus.webp', category: 'Corporate' },
    { name: 'Airbex', filename: 'airbex.webp', category: 'Corporate' },
    { name: 'Amrete', filename: 'amrete.webp', category: 'Consumer' },
    { name: 'Sikku', filename: 'sikku.webp', category: 'Fashion' }
  ] as ClientLogo[],

  faqs: [
    {
      question: 'What photography and videography services does PK Photography offer in Mumbai and Goa?',
      answer: 'Wedding and pre-wedding photography and films, event and corporate coverage, professional headshots, model and actor portfolios, fashion, product, food, real estate and brand content, plus live streaming, drone coverage, podcast production and album design.'
    },
    {
      question: 'How much does a wedding photographer cost in Mumbai?',
      answer: 'Wedding packages start at ₹80,000 for a single-day celebration, ₹1,20,000 for a full wedding day and ₹2,00,000 for multi-day and destination weddings, each with photography, film and a printed album. Professional headshots start at ₹6,000 and event coverage at ₹10,000. Every package is listed on the pricing and service pages.'
    },
    {
      question: 'Do you cover destination weddings and pre-wedding shoots in Goa?',
      answer: 'Yes. We photograph and film destination weddings and pre-wedding shoots across North and South Goa, alongside weddings, events and corporate work in Mumbai. Travel for Goa and other destinations is planned with you and confirmed before you book.'
    },
    {
      question: 'How do I book, and how much advance is needed?',
      answer: 'Add a package to your cart and check out, or send a booking request with your date and location. Reserve your date with a 20% advance and pay the balance before the shoot, or pay in full online and save 10%.'
    },
    {
      question: 'Can I book photography and videography together?',
      answer: 'Yes. Our in-house team plans photography and films together, so crew, timings and deliverables work as one plan. Drone coverage and live streaming can be added for weddings and events.'
    },
    {
      question: 'How are photographs and films delivered?',
      answer: 'Final photographs, films and albums are delivered through a private Pikconnect gallery where you can view, download and share them. Wedding packages include QR gallery sharing with face-scan search, so guests can find their own photographs.'
    },
    {
      question: 'What should I include in my booking request?',
      answer: 'Your preferred date, the location or venue, the type of shoot and a little about your idea. If you are still deciding, tell us what you have in mind and we will suggest the right coverage.'
    }
  ] as FaqItem[]
};
