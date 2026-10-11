export interface StudioRentalItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  dimensions: string;
  image: string;
  idealFor: string[];
}

export interface PhotographyServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  label: string;
  category: 'wedding' | 'pre-wedding' | 'fashion' | 'product' | 'photography' | 'podcast-studio' | 'photography-studio';
  categoryLabel: string;
  image: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  clientRole: string;
  serviceUsed: string;
  quote: string;
  rating: number;
}

export interface BlogItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  image: string;
  slug: string;
}

export const OLLAR_STUDIOS_CONFIG = {
  brand: {
    name: 'Ollar Studios',
    tagline: 'Premium Photography & Studio Rentals in Mumbai',
    description:
      'A creative studio in Mumbai offering photography studio rentals, podcast recording spaces, wedding and pre-wedding photography, fashion campaigns, and product photography.',
    originalUrl: 'https://ollarstudios.com/',
    founder: 'Siddharth Unkule',
    foundedYear: '2020',
    experienceSince: '2017',
    studioSize: '1,800 Sq. Ft.',
    contact: {
      phone: '+91 9004344101',
      displayPhone: '+91 90043 44101',
      telLink: 'tel:+919004344101',
      email: 'ollarstudios@gmail.com',
      mailtoLink: 'mailto:ollarstudios@gmail.com',
      address:
        'Office Number 26, Ashok Industrial Co-op Society, Near Marathon Galaxy, L.B.S. Marg, Mulund (W), Mumbai - 400080',
      googleMapsUrl:
        'https://maps.google.com/?q=Ashok+Industrial+Co-op+Society+LBS+Marg+Mulund+West+Mumbai+400080',
      whatsappLink:
        'https://wa.me/919004344101?text=Hello%20Ollar%20Studios,%20I%20would%20like%20to%20inquire%20about%20studio%20rentals%20and%20photography%20services'
    }
  },

  assets: {
    logo: '/assets/ollar-studios/logo.svg',
    logoDark: '/assets/ollar-studios/logo-dark.svg',
    heroBanner: '/assets/ollar-studios/hero-banner.jpg',
    founderStudio: '/assets/ollar-studios/founder-studio.jpg'
  },

  studioRentals: [
    {
      id: 'photography-studio',
      title: 'Photography Studio',
      tagline: '1,800 Sq. Ft. Controlled Creative Production Bay in Mulund (W)',
      description:
        'Equipped with heavy-duty professional strobe lighting, continuous video lights, motorized seamless paper backdrops, a dedicated chroma key green screen wall, vanity green room, and high-speed Wi-Fi.',
      dimensions: '1,800 Sq. Ft. Floor Area (High Ceiling)',
      image: '/assets/ollar-studios/photography-studio.jpg',
      features: [
        'Multi-color seamless paper & canvas backdrops',
        'Strobe & continuous bi-color LED video lighting',
        'Air-conditioned vanity green room with mirror',
        '3-phase industrial power supply & high-speed Wi-Fi',
        'Comfortable client lounge & private changing bay'
      ],
      idealFor: ['Pre-Wedding Shoots', 'Fashion Portfolios', 'Product E-Commerce', 'Chroma Video Shoots', 'Creative Workshops']
    },
    {
      id: 'podcast-studio',
      title: 'Podcast Studio',
      tagline: 'Acoustically Treated Audio & Vodcast Recording Studio',
      description:
        'A dedicated recording environment featuring acoustic wall paneling, broadcast-grade dynamic microphones, multi-channel sound mixers, multi-angle 4K video recording, custom RGB ambient lighting, and headphone monitoring.',
      dimensions: 'Dedicated Soundproof Production Room',
      image: '/assets/ollar-studios/podcast-studio.webp',
      features: [
        'Acoustically treated soundproof chamber',
        'Broadcast dynamic microphones with boom arms',
        'Multi-angle 4K cinema cameras for video podcasts',
        'Studio monitor headphones & sound mixer console',
        'Customizable RGB ambient backdrop themes'
      ],
      idealFor: ['Vodcasts & Podcasts', 'Executive Interviews', 'Voiceover Dubbing', 'Webinars & Virtual Summits']
    }
  ] as StudioRentalItem[],

  photographyServices: [
    {
      id: 'wedding-photography',
      title: 'Wedding Photography',
      category: 'Celebration Cinema',
      description:
        'From heartfelt rituals to grand receptions, Ollar Weds captures the magic of your special day with cinematic finesse, candid spontaneity, and artistic framing.',
      image: '/assets/ollar-studios/wedding-photography.jpg',
      highlights: ['Traditional & candid coverage', 'Drone aerial cinematography', 'Teaser & feature films', 'Heirloom printed photo albums']
    },
    {
      id: 'prewedding-photography',
      title: 'Pre wedding Photography',
      category: 'Romantic Storytelling',
      description:
        'Celebrate your romance with picturesque outdoor escapes or intimate indoor studio setups, guided by creative styling and moodboard curation.',
      image: '/assets/ollar-studios/prewedding-photography.jpg',
      highlights: ['Scenic Mumbai & destination locations', 'Indoor studio backdrops', 'Styling & moodboard consultation', 'Cinematic teaser video']
    },
    {
      id: 'product-photography',
      title: 'Product Photography',
      category: 'Commercial & E-Commerce',
      description:
        'Highlight your brand with sharp, magazine-grade product imagery tailored for e-commerce marketplaces (Amazon, Flipkart), D2C websites, and promotional campaigns.',
      image: '/assets/ollar-studios/product-photography.jpg',
      highlights: ['Pure white e-commerce cutouts', 'Contextual lifestyle styling', 'Macro detail on cosmetics & jewellery', 'High-volume batch turnaround']
    },
    {
      id: 'fashion-photography',
      title: 'Fashion Photography',
      category: 'Editorial & Lookbooks',
      description:
        'High-impact visual campaigns, model portfolios, and designer lookbooks crafted in our 1800 sq. ft. studio with editorial lighting and direction.',
      image: '/assets/ollar-studios/fashion-photography.jpg',
      highlights: ['Designer lookbook productions', 'Model agency comp cards', 'Creative studio lighting grids', 'Professional beauty retouching']
    }
  ] as PhotographyServiceItem[],

  whyChooseUs: [
    {
      title: 'Creative Concepts & Styling',
      subtitle: 'Storyboarding & Direction',
      description:
        'We help clients plan their visual story from scratch, assisting with moodboards, color schemes, styling guidance, and natural posing.'
    },
    {
      title: 'Pro Equipment, Pro Results',
      subtitle: 'Industry-Standard Tools',
      description:
        'Equipped with full-frame cinema cameras, studio strobes, continuous LED lights, soundproof acoustic paneling, and broadcasting microphones.'
    },
    {
      title: 'Flexible Packages & Transparent Pricing',
      subtitle: 'Hourly & Daily Bookings',
      description:
        'Whether you need a two-hour podcast recording or a full-day commercial campaign, our pricing is straightforward with zero hidden charges.'
    },
    {
      title: 'Centrally Located in Mumbai',
      subtitle: 'L.B.S. Marg, Mulund (W)',
      description:
        'Easily accessible from Central, Western, and Harbor suburbs as well as Thane, with ample ground-floor loading and parking space.'
    }
  ],

  statistics: [
    { number: 1500, displayValue: '1,500+', label: 'Shoots Completed' },
    { number: 1200, displayValue: '1,200+', label: 'Happy Clients' },
    { number: 5, displayValue: '4.9 / 5.0', label: 'Client Rating' },
    { number: 1800, displayValue: '1,800', label: 'Sq. Ft. Creative Studio' }
  ],

  portfolio: [
    {
      id: 'port-1',
      title: 'Product 1',
      label: 'Cosmetics & Skincare Campaign',
      category: 'product',
      categoryLabel: 'Product',
      image: '/assets/ollar-studios/portfolio-product-1.webp',
      description: 'Clean commercial tabletop setup with soft ambient lighting for organic skincare packaging.'
    },
    {
      id: 'port-2',
      title: 'Product 2',
      label: 'Fine Jewellery Macro Precision',
      category: 'product',
      categoryLabel: 'Product',
      image: '/assets/ollar-studios/portfolio-product-2.webp',
      description: 'Macro strobe lighting highlighting gold ornaments and intricate diamond facets.'
    },
    {
      id: 'port-3',
      title: 'Product 3',
      label: 'Artisanal Beverage & Food Styling',
      category: 'product',
      categoryLabel: 'Product',
      image: '/assets/ollar-studios/portfolio-product-3.webp',
      description: 'Mouthwatering commercial beverage framing for restaurant menu and advertising promotion.'
    },
    {
      id: 'port-4',
      title: 'Podcast 1',
      label: 'Executive Vodcast Multi-Mic Setup',
      category: 'podcast-studio',
      categoryLabel: 'Podcast Studio',
      image: '/assets/ollar-studios/portfolio-podcast-1.jpg',
      description: 'Two-seater soundproof podcast studio setup with broadcast dynamic mics and mood lights.'
    },
    {
      id: 'port-5',
      title: 'Podcast 2',
      label: 'Creator Interview Recording Suite',
      category: 'podcast-studio',
      categoryLabel: 'Podcast Studio',
      image: '/assets/ollar-studios/portfolio-podcast-2.webp',
      description: 'Multi-angle 4K video recording setup for interview podcasts with custom backdrops.'
    },
    {
      id: 'port-6',
      title: 'Podcast 3',
      label: 'Solo Creator Audio & Video Station',
      category: 'podcast-studio',
      categoryLabel: 'Podcast Studio',
      image: '/assets/ollar-studios/portfolio-podcast-3.jpg',
      description: 'Acoustically isolated vocal booth with real-time audio monitor console.'
    },
    {
      id: 'port-7',
      title: 'Wedding 1',
      label: 'Royal Traditional Pheras & Rituals',
      category: 'wedding',
      categoryLabel: 'Wedding',
      image: '/assets/ollar-studios/wedding-photography.jpg',
      description: 'Intimate wedding couple portraiture capturing emotional rituals and regal wedding attire.'
    },
    {
      id: 'port-8',
      title: 'Pre-Wedding 1',
      label: 'Coastal Golden-Hour Couple Story',
      category: 'pre-wedding',
      categoryLabel: 'Pre-Wedding',
      image: '/assets/ollar-studios/prewedding-photography.jpg',
      description: 'Romantic outdoor pre-wedding couple photography session in scenic natural light.'
    },
    {
      id: 'port-9',
      title: 'Fashion 1',
      label: 'Contemporary Studio Lookbook',
      category: 'fashion',
      categoryLabel: 'Fashion',
      image: '/assets/ollar-studios/portfolio-fashion.jpg',
      description: 'Editorial studio fashion portraiture with dramatic high-contrast studio strobes.'
    },
    {
      id: 'port-10',
      title: 'Studio 1',
      label: '1,800 Sq. Ft. Multi-Backdrop Bay',
      category: 'photography-studio',
      categoryLabel: 'Photography Studio',
      image: '/assets/ollar-studios/portfolio-studio-1.jpg',
      description: 'Spacious shooting floor with seamless motorized backdrops and high-ceiling grid.'
    },
    {
      id: 'port-11',
      title: 'Studio 2',
      label: 'Vanity Suite & Chroma Shoot Setup',
      category: 'photography-studio',
      categoryLabel: 'Photography Studio',
      image: '/assets/ollar-studios/portfolio-studio-2.webp',
      description: 'Air-conditioned vanity green room and versatile video shoot amenities.'
    }
  ] as PortfolioItem[],

  testimonials: [
    {
      id: 'test-1',
      name: 'Priyanka Kanani',
      clientRole: 'Bride (Marathi Wedding)',
      serviceUsed: 'Ollar Weds — Wedding Photography',
      quote:
        'The Ollar Weds team did an extraordinary job capturing our wedding. Every ritual, from our Marathi ceremonies to the family reception, was filmed with such emotional depth. Siddharth and the photographers were warm, professional, and made everyone feel comfortable.',
      rating: 5
    },
    {
      id: 'test-2',
      name: 'Bhavik Devdhar',
      clientRole: 'Groom (Bengali Wedding Celebration)',
      serviceUsed: 'Wedding Photography & Cinematography',
      quote:
        'Booking Ollar Studios was the best decision for our Bengali wedding festivities. The cinematic teaser looked like a feature film! Their team was punctual, creative, and delivered edited high-res photos and video deliverables right on schedule.',
      rating: 5
    },
    {
      id: 'test-3',
      name: 'Tania Shripad',
      clientRole: 'Fashion Campaign Producer',
      serviceUsed: 'Fashion Shoot & Studio Rental',
      quote:
        'We rented their 1800 sq. ft. photography studio in Mulund for a major apparel lookbook shoot. The space is vast, well-lit, fully air-conditioned, and equipped with top-tier backdrops. Their in-house team is extremely helpful and knowledgeable.',
      rating: 5
    },
    {
      id: 'test-4',
      name: 'Pranav Pujari',
      clientRole: 'Podcast Creator & Host',
      serviceUsed: 'Podcast Studio Rental',
      quote:
        'The podcast recording studio at Ollar Studios is top-notch. Perfectly soundproofed, multi-microphone setup with crisp audio recording and multi-camera angles. If you are producing a video podcast in Mumbai, this is the place to book.',
      rating: 5
    }
  ] as TestimonialItem[],

  blogs: [
    {
      id: 'blog-1',
      title: 'How to Invite Guests on Your Podcast: A Practical Outreach Guide for Indian Creators',
      category: 'Podcast Production',
      date: 'May 2026',
      readTime: '5 min read',
      summary:
        'Step-by-step strategies for pitching, scheduling, and conducting high-profile podcast interviews, from cold outreach templates to recording room etiquette.',
      image: '/assets/ollar-studios/blog-podcast-guests.jpg',
      slug: 'how-to-invite-guests-on-your-podcast'
    },
    {
      id: 'blog-2',
      title: '8 Things to Check Before Booking a Podcast Studio in Mumbai',
      category: 'Studio Rentals',
      date: 'April 2026',
      readTime: '6 min read',
      summary:
        'Essential checklist covering acoustic isolation, mic specs, 4K camera angles, lighting temperature, and technical operator support for recording creators.',
      image: '/assets/ollar-studios/blog-podcast-studio-mumbai.jpg',
      slug: '8-things-to-check-before-booking-podcast-studio-mumbai'
    },
    {
      id: 'blog-3',
      title: 'Benefits of Podcasting for Business: Why Indian Brands Are Going All-In',
      category: 'Content Marketing',
      date: 'March 2026',
      readTime: '4 min read',
      summary:
        'How Indian startups, consumer brands, and agency founders are using branded video podcasts and vodcasts to build organic trust and thought leadership.',
      image: '/assets/ollar-studios/blog-podcasting-business.webp',
      slug: 'benefits-of-podcasting-for-business'
    }
  ] as BlogItem[]
};
