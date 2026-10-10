export interface StoryItem {
  id: string;
  title: string;
  couple: string;
  category: 'Wedding' | 'Pre-Wedding' | 'Engagement' | 'Maternity' | 'Celebration';
  location: string;
  coverImage: string;
  excerpt: string;
  fullStory: string;
  gallery: string[];
  date: string;
  highlightBadge?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Pre-Wedding' | 'Maternity & Baby' | 'Corporate & Events' | 'Food & Product';
  image: string;
  subtitle: string;
  location: string;
  aspectRatio?: 'tall' | 'wide' | 'square';
}

export interface FilmItem {
  id: string;
  title: string;
  couple: string;
  duration: string;
  location: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  deliverables: string[];
  image: string;
  features: string[];
}

export interface PackageItem {
  id: string;
  name: string;
  subtitle: string;
  recommendedFor: string;
  priceNote: string;
  popular?: boolean;
  features: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Pricing' | 'Booking' | 'Deliverables' | 'Coverage';
}

export const GAJARE_CONFIG = {
  brand: {
    name: 'GAJARE PHOTOGRAPHY',
    legalName: 'Gajare Photography Studios',
    tagline: 'Stories Worth Remembering. Moments Worth Reliving.',
    subTagline: 'Best Wedding & Event Photographer in Mumbai for Celebrations across India & Worldwide',
    location: 'Mumbai, Maharashtra, India',
    foundedYear: 2018,
    yearsOfExperience: '8+',
    celebrationsCovered: '650+',
    clientReviews: '500+',
    rating: 4.9,
    contact: {
      phone: '+91 7208659598',
      phoneSecondary: '+91 7977564785',
      whatsapp: '917208659598',
      email: 'gajarephotography@gmail.com',
      workingHours: 'Mon - Sun: 9:00 AM - 9:00 PM IST',
      address: 'Mumbai & Thane Studios, Available for Destination Events Across India & Worldwide'
    },
    colors: {
      primary: '#0B0C10',
      secondary: '#D4AF37', // Regal Gold
      accent: '#C5A880',    // Warm Champagne
      darkSurface: '#14161D',
      cardSurface: '#1B1E28',
      textLight: '#F3F4F6',
      textMuted: '#9CA3AF'
    },
    assets: {
      logo: '/assets/gajare-photography/logo.webp',
      footerLogo: '/assets/gajare-photography/footer-logo.webp',
      favicon: '/assets/gajare-photography/favicon.webp',
      googleIcon: '/assets/gajare-photography/google-icon.webp',
      ourServices: '/assets/gajare-photography/our-services.webp',
      films1: '/assets/gajare-photography/films1.webp',
      films2: '/assets/gajare-photography/films2.webp',
      films3: '/assets/gajare-photography/films3.webp',
      journal1: '/assets/gajare-photography/journal-story1.webp',
      journal2: '/assets/gajare-photography/journal-stories2.webp',
      journal3: '/assets/gajare-photography/journal-stories3.webp',
      boothService: '/assets/gajare-photography/booth-service.webp',
      boothLive: '/assets/gajare-photography/booth-live.webp',
      boothPremium: '/assets/gajare-photography/booth-premium.webp',
      portfolioBanner: '/assets/gajare-photography/portfolio-banner.webp',
      portfolioHero2: '/assets/gajare-photography/portfolio-hero2.webp'
    }
  },

  heroSlides: [
    {
      id: 'slide-1',
      tag: 'MUMBAI · INDIA',
      title: 'Stories Worth Remembering.\nMoments Worth Reliving.',
      subtitle: 'Wedding photography and cinematic films for celebrations in Mumbai, across India and beyond.',
      cta: 'View Portfolio',
      image: '/assets/gajare-photography/portfolio-banner.webp'
    },
    {
      id: 'slide-2',
      tag: 'DESTINATION WEDDINGS',
      title: 'Real Emotions.\nHandcrafted Cinematic Art.',
      subtitle: 'From quiet rituals to electric sangeet dance floors, we preserve love in its most honest form.',
      cta: 'Explore Stories',
      image: '/assets/gajare-photography/wedding-gal1.webp'
    },
    {
      id: 'slide-3',
      tag: 'INSTANT PHOTO BOOTH',
      title: 'Click. Print.\nTake Home the Memory.',
      subtitle: 'Premium instant live photo printing and digital guest sharing for luxury weddings and events.',
      cta: 'Book Photo Booth',
      image: '/assets/gajare-photography/booth-live.webp'
    }
  ],

  stats: [
    { value: '4.9★', label: 'Google Rating', note: '500+ Verified Reviews' },
    { value: '8+', label: 'Years of Craft', note: 'Founded with Passion' },
    { value: '650+', label: 'Celebrations Preserved', note: 'Weddings & Private Milestones' },
    { value: '100%', label: 'Dedicated In-House Team', note: 'No Third-Party Freelancer Relay' }
  ],

  testimonials: [
    {
      id: 'test-1',
      author: 'Saurabh Bhandare',
      role: 'Groom',
      event: 'Wedding at St. Regis Mumbai',
      rating: 5,
      content: 'Absolutely loved our wedding photos! The team captured every moment beautifully. The candid shots were especially stunning and natural without awkward posing. They made us feel so comfortable.'
    },
    {
      id: 'test-2',
      author: 'Prerna & Moheet',
      role: 'Bride & Groom',
      event: 'Royal Destination Wedding',
      rating: 5,
      content: 'Gajare Photography gave us memories we will cherish for a lifetime. Looking through our album and watching the wedding film still brings happy tears to our eyes. Their attention to subtle family emotions is unmatched.'
    },
    {
      id: 'test-3',
      author: 'Sayali & Anuj',
      role: 'Couple',
      event: 'Traditional Maharashtrian & Reception',
      rating: 5,
      content: 'From our pre-wedding shoot in Lonavala to the 3-day wedding festivities in Pune, the crew was punctual, warm, and exceptionally creative. Every guest complimented the instant photo booth as well!'
    },
    {
      id: 'test-4',
      author: 'Jinal & Divya Shah',
      role: 'Family',
      event: 'Grand Celebration & Sangeet',
      rating: 5,
      content: 'The patience, composure, and artistic vision of Gajare Photography set them apart from any typical wedding studio. They understand Indian traditions intimately and anticipate emotional peaks flawlessly.'
    }
  ],

  featuredStories: [
    {
      id: 'story-moheet-prerna',
      title: 'A Dream Wedding in Royalty',
      couple: 'Moheet ❤️ Prerna',
      category: 'Wedding',
      location: 'Mumbai & Udaipur',
      date: 'December 2025',
      coverImage: '/assets/gajare-photography/wedding-gal1.webp',
      excerpt: 'A celebration woven with majestic heritage arches, tearful varmala rituals, and high-energy sangeet performances.',
      fullStory: 'Moheet and Prerna wanted their celebration to feel intimate despite the regal scale. From morning Haldi laughter bathed in golden marigold florals to the sacred pheras under the starlit sky, we documented every breath and glance.',
      gallery: [
        '/assets/gajare-photography/wedding-gal1.webp',
        '/assets/gajare-photography/wedding-gal2.webp',
        '/assets/gajare-photography/wedding-gal3.webp',
        '/assets/gajare-photography/wedding-gal7.webp'
      ],
      highlightBadge: 'Cover Story'
    },
    {
      id: 'story-anuj-sayali',
      title: 'Tradition, Joy & Everything Between',
      couple: 'Anuj ❤️ Sayali',
      category: 'Wedding',
      location: 'Mumbai',
      date: 'November 2025',
      coverImage: '/assets/gajare-photography/wedding-gal2.webp',
      excerpt: 'Vibrant Maharashtrian rituals blending traditional nauvari elegance with modern heartfelt romance.',
      fullStory: 'Anuj and Sayali’s wedding was a masterclass in honest emotions. The sacred Antarpat lowering revealed tears of genuine joy, followed by a warm sunset reception surrounded by childhood friends and elders.',
      gallery: [
        '/assets/gajare-photography/wedding-gal2.webp',
        '/assets/gajare-photography/wedding-gal4.webp',
        '/assets/gajare-photography/wedding-gal5.webp',
        '/assets/gajare-photography/wedding-gal8.webp'
      ],
      highlightBadge: 'Traditional Soul'
    },
    {
      id: 'story-sayali-raghvendra',
      title: 'Sunset Coastal Serenade',
      couple: 'Sayali ❤️ Raghvendra',
      category: 'Pre-Wedding',
      location: 'Alibaug Beachfront',
      date: 'January 2026',
      coverImage: '/assets/gajare-photography/wedding-gal3.webp',
      excerpt: 'Gentle golden hour tides, wind-blown silks, and unspoken quiet companionship along Maharashtra’s coast.',
      fullStory: 'Far from stiff poses, Sayali and Raghvendra walked bare-foot on the sandy shores while our telephoto lenses documented their quiet laughter and unforced embraces as the sun melted into the Arabian Sea.',
      gallery: [
        '/assets/gajare-photography/wedding-gal3.webp',
        '/assets/gajare-photography/wedding-gal6.webp',
        '/assets/gajare-photography/wedding-gal9.webp',
        '/assets/gajare-photography/portfolio-hero2.webp'
      ],
      highlightBadge: 'Romantic Coastal'
    },
    {
      id: 'story-apoorv-bhakti',
      title: 'Modern Elegance & High-Energy Sangeet',
      couple: 'Apoorv & Bhakti',
      category: 'Wedding',
      location: 'Grand Hyatt Mumbai',
      date: 'October 2025',
      coverImage: '/assets/gajare-photography/wedding-gal4.webp',
      excerpt: 'Cinematic lighting, bespoke couture ensembles, and a sangeet night that shook the ballroom.',
      fullStory: 'A celebration designed around electric celebration and editorial aesthetics. We paired prime lenses for luminous portraits with dynamic stabilization rigs to capture every choreography beat.',
      gallery: [
        '/assets/gajare-photography/wedding-gal4.webp',
        '/assets/gajare-photography/wedding-gal5.webp',
        '/assets/gajare-photography/wedding-gal7.webp',
        '/assets/gajare-photography/wedding-gal10.webp'
      ]
    },
    {
      id: 'story-jinal-divya',
      title: 'Generations of Grace & Sacred Pheras',
      couple: 'Jinal & Divya Shah',
      category: 'Celebration',
      location: 'South Mumbai Heritage Mandap',
      date: 'January 2026',
      coverImage: '/assets/gajare-photography/wedding-gal5.webp',
      excerpt: 'Four generations gathered under a canopy of jasmine and tuberoses for a day rich in spiritual blessings.',
      fullStory: 'Capturing elder blessings and generational presence requires deep cultural reverence. Our team moves quietly, ensuring sacred rituals proceed undisturbed while creating heirloom frames for posterity.',
      gallery: [
        '/assets/gajare-photography/wedding-gal5.webp',
        '/assets/gajare-photography/wedding-gal6.webp',
        '/assets/gajare-photography/wedding-gal8.webp',
        '/assets/gajare-photography/wedding-gal11.webp'
      ]
    },
    {
      id: 'story-gaurav-sneha',
      title: 'The Prelude to Forever',
      couple: 'Gaurav & Sneha',
      category: 'Engagement',
      location: 'Pune Hills',
      date: 'February 2026',
      coverImage: '/assets/gajare-photography/wedding-gal6.webp',
      excerpt: 'An intimate ring exchange surrounded by mist, panoramic hillside views, and candlelit courtyard dining.',
      fullStory: 'A timeless engagement story focusing on the quiet anticipation between two best friends deciding on forever. Natural styling, candid laughter, and warm ambient evening lighting.',
      gallery: [
        '/assets/gajare-photography/wedding-gal6.webp',
        '/assets/gajare-photography/wedding-gal1.webp',
        '/assets/gajare-photography/wedding-gal9.webp',
        '/assets/gajare-photography/wedding-gal10.webp'
      ]
    }
  ] as StoryItem[],

  portfolioItems: [
    {
      id: 'p-1',
      title: 'Varmala Radiance',
      category: 'Weddings',
      image: '/assets/gajare-photography/wedding-gal1.webp',
      subtitle: 'The sacred flower exchange',
      location: 'Mumbai Palace',
      aspectRatio: 'tall'
    },
    {
      id: 'p-2',
      title: 'Bridal Solitude & Gaze',
      category: 'Weddings',
      image: '/assets/gajare-photography/wedding-gal2.webp',
      subtitle: 'Reflections before the mandap',
      location: 'Taj Mahal Palace',
      aspectRatio: 'square'
    },
    {
      id: 'p-3',
      title: 'Beachside Whisper',
      category: 'Pre-Wedding',
      image: '/assets/gajare-photography/wedding-gal3.webp',
      subtitle: 'Alibaug sunset romance',
      location: 'Kashid Shoreline',
      aspectRatio: 'wide'
    },
    {
      id: 'p-4',
      title: 'Sangeet Choreography in Motion',
      category: 'Weddings',
      image: '/assets/gajare-photography/wedding-gal4.webp',
      subtitle: 'Dynamic ballroom energy',
      location: 'JW Marriott Sahar',
      aspectRatio: 'wide'
    },
    {
      id: 'p-5',
      title: 'Haldi Marigold Splash',
      category: 'Weddings',
      image: '/assets/gajare-photography/wedding-gal5.webp',
      subtitle: 'Candid joy & turmeric blessings',
      location: 'Lonavala Courtyard',
      aspectRatio: 'square'
    },
    {
      id: 'p-6',
      title: 'Quiet Golden Embrace',
      category: 'Pre-Wedding',
      image: '/assets/gajare-photography/wedding-gal6.webp',
      subtitle: 'Scenic ridge at twilight',
      location: 'Lavasa Escarpment',
      aspectRatio: 'tall'
    },
    {
      id: 'p-7',
      title: 'The Sacred Sindoor Moment',
      category: 'Weddings',
      image: '/assets/gajare-photography/wedding-gal7.webp',
      subtitle: 'A quiet pause of eternal promise',
      location: 'South Mumbai Mandap',
      aspectRatio: 'tall'
    },
    {
      id: 'p-8',
      title: 'Groom Baraat Celebrations',
      category: 'Weddings',
      image: '/assets/gajare-photography/wedding-gal8.webp',
      subtitle: 'Dhol rhythms & dapper procession',
      location: 'Bandra Bandstand',
      aspectRatio: 'wide'
    },
    {
      id: 'p-9',
      title: 'Gentle Maternity Glow',
      category: 'Maternity & Baby',
      image: '/assets/gajare-photography/wedding-gal9.webp',
      subtitle: 'Honouring life’s precious chapter',
      location: 'Studio Bloom Mumbai',
      aspectRatio: 'square'
    },
    {
      id: 'p-10',
      title: 'Instant Keepsake Photo Booth',
      category: 'Corporate & Events',
      image: '/assets/gajare-photography/booth-live.webp',
      subtitle: 'Guest portraits with live framing',
      location: 'Event Conclave Mumbai',
      aspectRatio: 'square'
    },
    {
      id: 'p-11',
      title: 'Gourmet Culinary Artistry',
      category: 'Food & Product',
      image: '/assets/gajare-photography/our-services.webp',
      subtitle: 'Fine restaurant & editorial styling',
      location: 'Bespoke Mumbai Kitchens',
      aspectRatio: 'wide'
    },
    {
      id: 'p-12',
      title: 'Reception Royal Walk-In',
      category: 'Weddings',
      image: '/assets/gajare-photography/wedding-gal10.webp',
      subtitle: 'Grand ballroom fireworks entry',
      location: 'Four Seasons Worli',
      aspectRatio: 'tall'
    },
    {
      id: 'p-13',
      title: 'Heirloom Jewelry & Details',
      category: 'Weddings',
      image: '/assets/gajare-photography/wedding-gal11.webp',
      subtitle: 'Kundan craftsmanship & florals',
      location: 'Private Suite',
      aspectRatio: 'square'
    },
    {
      id: 'p-14',
      title: 'Signature Couple Silhouette',
      category: 'Pre-Wedding',
      image: '/assets/gajare-photography/portfolio-hero2.webp',
      subtitle: 'Geometric shadows & warm backlight',
      location: 'Heritage Fort',
      aspectRatio: 'wide'
    }
  ] as PortfolioItem[],

  films: [
    {
      id: 'film-1',
      title: 'The Eternal Vow — Moheet & Prerna',
      couple: 'Moheet & Prerna',
      duration: '4:18 Teaser',
      location: 'Udaipur & Mumbai',
      thumbnail: '/assets/gajare-photography/films1.webp',
      videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
      description: 'A deeply moving cinematic film documenting 3 days of grand celebrations, tearful family vows, and an unforgettable lakefront reception.'
    },
    {
      id: 'film-2',
      title: 'Soul & Symphony — Anuj & Sayali',
      couple: 'Anuj & Sayali',
      duration: '5:42 Wedding Film',
      location: 'Mumbai Heritage',
      thumbnail: '/assets/gajare-photography/films2.webp',
      videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
      description: 'Traditional Maharashtrian rituals captured with rich color grading, crisp dialogue audio, and an original emotional soundtrack.'
    },
    {
      id: 'film-3',
      title: 'Coastline Whispers — Pre-Wedding Odyssey',
      couple: 'Sayali & Raghvendra',
      duration: '3:15 Love Story',
      location: 'Alibaug Coast',
      thumbnail: '/assets/gajare-photography/films3.webp',
      videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
      description: 'Cinematic drone panoramas, intimate handheld whispers, and the story of how two childhood classmates became lifelong partners.'
    }
  ] as FilmItem[],

  services: [
    {
      id: 'srv-wedding',
      title: 'Wedding Photography & Films',
      subtitle: 'Candid & Traditional Mastery',
      tagline: 'Capturing love in its purest, most vibrant cultural expressions.',
      description: 'From early morning bridal preparations to the sacred pheras and midnight dance floors, our dual-perspective teams document both unscripted emotional tears and comprehensive family portraits.',
      deliverables: [
        'High-resolution edited candid photos with color grading',
        'Traditional family stage and ritual coverage',
        '4K Cinematic Wedding Highlights & Teaser film',
        'Full ceremony documentation film with crisp audio',
        'Private cloud gallery for worldwide guest sharing',
        'Handcrafted leatherette heirloom wedding albums'
      ],
      features: ['Dual Candid & Traditional Specialists', 'Drone Aerial Footage', 'Color Matched Deliverables', 'Turnaround in 30 Days'],
      image: '/assets/gajare-photography/wedding-gal1.webp'
    },
    {
      id: 'srv-prewedding',
      title: 'Pre-Wedding & Couple Portraits',
      subtitle: 'Unscripted Romance in Stunning Landscapes',
      tagline: 'No stiff posing. Just you two, comfortable and alive.',
      description: 'We scout scenic locations across Mumbai, hill stations, and private beach resorts to craft an editorial yet deeply personal series celebrating your chemistry before the wedding buzz begins.',
      deliverables: [
        '100+ Masterfully retouched couple frames',
        'Cinematic pre-wedding teaser film with dialogue or music',
        'Outfit and aesthetic styling consultation',
        'Drone perspectives & golden hour sessions',
        'Web-ready files for wedding invitations & saves-the-date'
      ],
      features: ['Location Scouting Support', 'Styling Guidance', 'Cinematic Drone Shots', 'Comfort-First Atmosphere'],
      image: '/assets/gajare-photography/wedding-gal3.webp'
    },
    {
      id: 'srv-booth',
      title: 'Premium Instant Photo Booth',
      subtitle: 'Mumbai’s Leading Live Guest Keepsake Service',
      tagline: 'Click. Print. Take Home the Memory.',
      description: 'Elevate your wedding reception, birthday, or corporate gala with our state-of-the-art instant live photo booth. Guests pose with professional studio lighting and walk away with lab-quality water-resistant prints in seconds.',
      deliverables: [
        'Instant 4x6 / 2x6 glossy lab-grade prints in 8 seconds',
        'Custom template branding with couple or corporate logos',
        'Instant QR code scan for direct phone download and Instagram sharing',
        'Chic backdrop setup and tasteful party props',
        'Professional studio lighting with live operator support',
        'Complete digital album delivered immediately after the event'
      ],
      features: ['Sub-10 Second Printing', 'QR Code Instant Download', 'Custom Frame Branding', 'Uniformed Friendly Attendants'],
      image: '/assets/gajare-photography/booth-service.webp'
    },
    {
      id: 'srv-celebrations',
      title: 'Maternity, Baby Showers & Milestones',
      subtitle: 'Honouring Life’s Sacred New Chapters',
      tagline: 'Warmth, gentle lighting, and timeless nostalgia.',
      description: 'Preserve the gentle glow of motherhood, intimate baby showers, godh bharai traditions, and joyful milestone birthdays with our soft, natural light photographic approach.',
      deliverables: [
        'Curated gallery of 75+ tender milestone portraits',
        'In-studio or relaxed in-home lifestyle sessions',
        'Family and generational group portraits',
        'Keepsake coffee-table fine art photo books'
      ],
      features: ['Relaxed Baby-Safe Pacing', 'Gentle Natural Lighting', 'Props & Swaddle Styling', 'Private Family Archive'],
      image: '/assets/gajare-photography/wedding-gal9.webp'
    },
    {
      id: 'srv-commercial',
      title: 'Corporate Events, Food & Products',
      subtitle: 'Sharp Visuals for Prestigious Brands',
      tagline: 'High-trust imagery for conferences, hospitality, and e-commerce.',
      description: 'From multi-day corporate conferences and executive headshots to culinary menu styling and product catalog photography, we deliver polished visual assets ready for press releases and campaigns.',
      deliverables: [
        'PR-ready conference and keynote coverage within 24 hours',
        'Executive portraits with custom backdrop lighting',
        'Color-accurate food & product hero images for menus & e-commerce',
        'Commercial usage rights for advertising and print'
      ],
      features: ['24h Rush Delivery Available', 'Strict Brand Guidelines Compliance', 'Mobile Studio Lighting', 'Commercial Licensing'],
      image: '/assets/gajare-photography/our-services.webp'
    }
  ] as ServiceItem[],

  boothFeatures: [
    {
      title: 'Professional Photography Experience',
      desc: 'High-end DSLR cameras and diffused softbox lighting guarantee flattering, studio-grade portraits for every guest.'
    },
    {
      title: 'Lab-Quality Instant Prints',
      desc: 'Dye-sublimation printing delivers smudge-free, water-resistant prints in under 10 seconds that last for decades.'
    },
    {
      title: 'Custom Event Branding & Borders',
      desc: 'Personalized frame designs incorporating your wedding logo, couple names, date, or corporate event branding.'
    },
    {
      title: 'Instant QR Code Phone Sharing',
      desc: 'Guests can instantly scan a private QR code on screen to save high-res digital photos directly to their smartphones.'
    },
    {
      title: 'Complete Event Support',
      desc: 'Two dressed, attentive operators handle setup, assist guests with posing, and maintain smooth queue flow.'
    },
    {
      title: 'Mumbai & Thane Coverage',
      desc: 'Prompt on-time arrival across all premier banquet halls, luxury hotels, and private lawn venues.'
    }
  ],

  packages: [
    {
      id: 'pkg-essential',
      name: 'Essential Moments',
      subtitle: 'Intimate Ceremonies & Single Day Events',
      recommendedFor: 'Intimate weddings, engagements, baby showers, or single ritual days',
      priceNote: 'Custom Tailored Quote on Request',
      popular: false,
      features: [
        '1 Senior Candid Photographer + 1 Traditional Photographer',
        'Up to 6-8 hours of continuous event coverage',
        '250+ High-resolution retouched master photographs',
        'Private online cloud gallery for 1 year with instant download',
        'Color grading and basic skin tone retouching',
        'WhatsApp teaser preview delivered within 72 hours'
      ]
    },
    {
      id: 'pkg-celebration',
      name: 'Complete Celebration',
      subtitle: 'The Signature Wedding & Film Experience',
      recommendedFor: '2 to 3 day weddings requiring comprehensive photo and cinematic film coverage',
      priceNote: 'Most Popular Wedding Choice',
      popular: true,
      features: [
        'Team of 5: 2 Candid Photographers, 1 Traditional, 2 Cinematographers',
        'Full coverage of Sangeet, Mehendi/Haldi, Wedding & Reception',
        '500+ Curated and retouched high-resolution photographs',
        '3-5 Minute Cinematic Wedding Highlights Teaser film (4K)',
        'Full traditional ceremony documentary film (30-60 mins)',
        'Licensed music score and professional dialogue audio mastering',
        '1 Premium Handcrafted Leatherette Heirloom Album (40 sheets / 80 pages)',
        'Personalized wooden USB keepsake box'
      ]
    },
    {
      id: 'pkg-booth',
      name: 'Instant Photo Booth Add-on',
      subtitle: 'Unlimited Live Guest Prints & QR Sharing',
      recommendedFor: 'Sangeet nights, cocktail receptions, corporate dinners, milestone birthdays',
      priceNote: 'Available as Add-on or Standalone',
      popular: false,
      features: [
        'Unlimited live 4x6 / 2x6 glossy prints for the duration of the event',
        'Custom template border design with couple initials or event emblem',
        'Studio ring light / softbox kiosk with live touchscreen countdown',
        'Instant QR code on-screen scan for mobile phone saving',
        'Fun, elegant curated party props and backdrop selection',
        '2 Attentive technical coordinators managing setup and operations'
      ]
    }
  ] as PackageItem[],

  faqs: [
    {
      category: 'Coverage',
      question: 'What is the difference between Candid and Traditional Photography?',
      answer: 'Candid photography captures unposed, natural interactions, authentic emotions, quiet tears, and spontaneous laughter using prime lenses and artistic lighting. Traditional photography ensures all formal family stage groups, ritual procedures, and extended guests are cleanly and sharp documented so no loved one is left out.'
    },
    {
      category: 'Deliverables',
      question: 'How long does it take to deliver our photos and wedding film?',
      answer: 'We deliver a curated teaser gallery of 30-50 photos within 72 hours so you can share your joy on social media immediately. The complete high-resolution photo collection is delivered within 3 to 4 weeks. The 4K cinematic film and traditional documentary video are fully edited, color-graded, and delivered within 6 to 8 weeks.'
    },
    {
      category: 'Booking',
      question: 'Do you travel for destination weddings outside Mumbai?',
      answer: 'Yes! While our studios are in Mumbai and Thane, we regularly cover destination weddings in Udaipur, Jaipur, Goa, Lonavala, Alibaug, Mahabaleshwar, Kerala, and across India. Travel and accommodation are simply billed at actuals.'
    },
    {
      category: 'Pricing',
      question: 'How do you customize pricing for our wedding or event?',
      answer: 'No two celebrations are identical. We customize every quotation based on the number of days, event hours, venue logistics, required team size (photo + cinema), whether drone or instant photo booth services are desired, and your album preferences. This ensures you only pay for exactly what fits your celebration.'
    },
    {
      category: 'Deliverables',
      question: 'Can we choose the music for our cinematic wedding film?',
      answer: 'Absolutely! We consult with you before post-production to understand your musical tastes — whether you prefer classical instrumental ragas, indie romantic ballads, or upbeat cinematic tracks. We also ensure all tracks are properly licensed.'
    },
    {
      category: 'Coverage',
      question: 'How many team members will cover our event?',
      answer: 'For intimate ceremonies, a tight team of 2-3 specialists ensures thorough coverage without overwhelming the room. For grand 2-3 day weddings with hundreds of guests, we deploy a synchronized crew of 5-7 artists (candid leads, traditional documentarians, drone pilot, and cinematographers).'
    }
  ] as FaqItem[],

  journalArticles: [
    {
      id: 'journal-1',
      title: 'The Stories Behind the Frames: A Photographer’s Perspective',
      slug: 'the-stories-behind-the-frames',
      date: 'March 2026',
      author: 'Gajare Studio Lead',
      image: '/assets/gajare-photography/journal-story1.webp',
      excerpt: 'Why the quiet moments between rituals often carry more weight than grand stage appearances.',
      readTime: '4 min read',
      content: 'When we look back on a wedding day five or twenty years from now, what do we actually search for? It is rarely the staged group photograph where everyone smiles on cue. It is the slight squeeze of a father’s hand as he prepares to give his daughter away. It is the nervous laughter shared over cold chai in the green room. It is the unscripted burst of tears when grandmother kisses the couple’s foreheads.'
    },
    {
      id: 'journal-2',
      title: 'Essential Timeline Tips for Planning Your Mumbai Wedding',
      slug: 'timeline-tips-for-mumbai-weddings',
      date: 'February 2026',
      author: 'Gajare Planning Desk',
      image: '/assets/gajare-photography/journal-stories2.webp',
      excerpt: 'How to build realistic photography buffer times into your celebration schedule in Mumbai.',
      readTime: '6 min read',
      content: 'Mumbai is a city of unparalleled energy, but traffic and multi-venue logistics can eat into precious photography moments if not carefully factored in. We always advise couples to schedule bridal portraits at least 45 minutes before the first guest arrives, ensuring fresh makeup and serene, unhurried lighting.'
    },
    {
      id: 'journal-3',
      title: 'Why Instant Photo Booths Are the #1 Guest Favorite at Receptions',
      slug: 'why-instant-photo-booths-are-guest-favorite',
      date: 'January 2026',
      author: 'Booth Services Team',
      image: '/assets/gajare-photography/journal-stories3.webp',
      excerpt: 'Give your guests a tactile keepsake they will treasure on their refrigerators for years.',
      readTime: '3 min read',
      content: 'In our digital age where thousands of photos sit forgotten in phone camera rolls, physical prints possess renewed magic. Watching a physical, glossy photo print emerge just 8 seconds after posing creates genuine delight across every age group, from children to grandparents.'
    }
  ]
};
