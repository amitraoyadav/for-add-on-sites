export interface OccasionItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  tag: string;
  image: string;
  alt: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  occasion: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const SHOOT_EXPRESS_CONFIG = {
  brand: {
    name: 'Shoot Express Photography',
    tagline: 'Best Photographer In Mumbai',
    brandHeading: 'Shoot Express Photography Mumbai',
    subHeading: 'Capturing candid moments and providing premier photography and videography for weddings, events, occasions, and commercial celebrations across Mumbai.',
    originalUrl: 'https://shootexpress.com/',
    foundedYear: '2018',
    rating: {
      score: '4.9',
      maxScore: '5.0',
      reviewCount: '870+',
      source: 'Verified Customer Reviews'
    },
    contact: {
      phone: '7738111094',
      displayPhone: '+91 77381 11094',
      telLink: 'tel:7738111094',
      email: 'ashwin@shootexpress.com',
      mailtoLink: 'mailto:ashwin@shootexpress.com',
      address: 'Office No. 3146, D-Wing, Oberoi Garden Estate, Chandivali Farm Road, Powai, Mumbai, Maharashtra 400072',
      googleMapsUrl: 'https://maps.google.com/?q=Oberoi+Garden+Estate+Chandivali+Farm+Road+Powai+Mumbai+400072',
      whatsappLink: 'https://wa.me/917738111094?text=Hello%20Shoot%20Express,%20I%20would%20like%20to%20inquire%20about%20a%20photoshoot%20in%20Mumbai'
    }
  },

  assets: {
    logo: '/assets/shoot-express/logo.svg',
    logoDark: '/assets/shoot-express/logo-dark.svg',
    heroBanner: '/assets/shoot-express/hero-banner.jpg',
    studioIndoor: '/assets/shoot-express/studio-indoor.jpg'
  },

  statistics: [
    { value: '7,120', number: 7120, label: 'Functions Covered', suffix: '' },
    { value: '5,000+', number: 5000, label: 'Delighted Customers', suffix: '+' },
    { value: '7+ Years', number: 7, label: 'Industry Experience', suffix: '+' },
    { value: '70', number: 70, label: 'Creative Team Size', suffix: '' }
  ],

  occasions: [
    {
      id: 'wedding',
      title: 'Wedding Photography',
      category: 'Celebration',
      description: 'Comprehensive wedding coverage combining candid emotional photojournalism with grand traditional rituals, bridal portraits, and cinematic highlights.',
      image: '/assets/shoot-express/wedding-couple-photoshoot.jpg',
      features: ['Full day & multi-day coverage', 'Pre-wedding & reception', 'High-res edited images', 'Cinematic teaser video']
    },
    {
      id: 'maternity',
      title: 'Maternity Photography',
      category: 'Portraits',
      description: 'Gentle, artistic outdoor and studio maternity sessions capturing the beauty, glow, and anticipation of motherhood in timeless portraits.',
      image: '/assets/shoot-express/outdoor-maternity-shoot.jpg',
      features: ['Outdoor sunrise/sunset shoots', 'Indoor studio backdrops', 'Family & partner inclusion', 'Gown & styling guidance']
    },
    {
      id: 'candid',
      title: 'Candid Photography',
      category: 'Unscripted',
      description: 'Unposed, spontaneous moments preserved as they unfold—capturing genuine tears, hearty laughter, and heartfelt connections without intrusion.',
      image: '/assets/shoot-express/traditional-fashion-photoshoot.jpg',
      features: ['Zero forced posing', 'Natural ambient lighting', 'Documentary storytelling', 'Subtle, unobtrusive presence']
    },
    {
      id: 'family',
      title: 'Family Photography',
      category: 'Milestones',
      description: 'Cherished multi-generational family portraits and reunion sessions that preserve the warmth, joy, and bonding between parents, children, and grandparents.',
      image: '/assets/shoot-express/happy-family-photo.jpg',
      features: ['Multi-generational groups', 'Indoor studio or home setup', 'Relaxed, friendly atmosphere', 'Heirloom family albums']
    },
    {
      id: 'food',
      title: 'Food Photography',
      category: 'Commercial',
      description: 'Vibrant, appetizing culinary imagery for restaurants, cafes, cloud kitchens, and menu catalogs with meticulous lighting and tabletop styling.',
      image: '/assets/shoot-express/milkshake-photography.webp',
      features: ['Menu & Zomato/Swiggy ready', 'Artisanal styling & props', 'Beverage & dessert highlights', 'Fast turnaround delivery']
    },
    {
      id: 'product',
      title: 'Product Photography',
      category: 'Commercial',
      description: 'Clean, high-definition catalog and e-commerce product photos on pure white backdrops or styled contextual lifestyle sets.',
      image: '/assets/shoot-express/wedding-jewellery-photoshoot.webp',
      features: ['E-commerce white background', 'Creative lifestyle compositions', 'Jewellery & cosmetics focus', 'Amazon & marketplace specs']
    },
    {
      id: 'interior',
      title: 'Interior Photoshoot',
      category: 'Architecture',
      description: 'Crisp architectural and interior photography showcasing space, texture, natural lighting, and architectural symmetry for designers, architects, and luxury properties.',
      image: '/assets/shoot-express/interior-architecture-photography.jpg',
      features: ['Perspective correction optics', 'HDR balanced interior lighting', 'Commercial & residential spaces', 'Hospitality & retail coverage']
    },
    {
      id: 'fashion',
      title: 'Fashion Photography',
      category: 'Editorial',
      description: 'Dynamic editorial fashion shoots, model portfolios, lookbooks, and designer apparel presentations crafted with high-impact studio and outdoor lighting.',
      image: '/assets/shoot-express/traditional-fashion-photoshoot.jpg',
      features: ['Lookbook & catalog shoots', 'Model portfolios & comp cards', 'Creative moodboard planning', 'High-end beauty retouching']
    },
    {
      id: 'event',
      title: 'Event Photography',
      category: 'Corporate & Social',
      description: 'Professional coverage for corporate conferences, exhibitions, product launches, birthdays, anniversaries, and cultural galas across Mumbai.',
      image: '/assets/shoot-express/corporate-meeting-event-photoshoot.webp',
      features: ['PR & media ready delivery', 'Multi-camera team setups', 'Keynote & candid moments', 'Same-day glimpse edits']
    }
  ] as OccasionItem[],

  portfolio: [
    {
      id: 'port-1',
      title: 'Wedding Couple Photoshoot',
      slug: 'wedding-couple-photoshoot',
      category: 'Wedding',
      tag: 'Weddings',
      image: '/assets/shoot-express/wedding-couple-photoshoot.jpg',
      alt: 'Wedding couple photoshoot in Mumbai by Shoot Express Photography',
      description: 'Romantic couple portraiture capturing intimate pheras, royal wedding attire, and timeless vows.'
    },
    {
      id: 'port-2',
      title: 'Outdoor Maternity Shoot',
      slug: 'outdoor-maternity-shoot',
      category: 'Maternity',
      tag: 'Maternity',
      image: '/assets/shoot-express/outdoor-maternity-shoot.jpg',
      alt: 'Outdoor maternity photoshoot in Mumbai by Shoot Express Photography',
      description: 'Golden hour outdoor maternity session highlighting the gentle elegance and celebration of mother-to-be.'
    },
    {
      id: 'port-3',
      title: 'Newborn Baby Photoshoot',
      slug: 'newborn-baby-photoshoot',
      category: 'Baby & Kids',
      tag: 'Baby',
      image: '/assets/shoot-express/newborn-baby-photoshoot.jpg',
      alt: 'Newborn baby photoshoot by Shoot Express Photography Mumbai',
      description: 'Safe, tender newborn and infant portraits with cozy props, gentle textures, and natural warmth.'
    },
    {
      id: 'port-4',
      title: 'Happy Family Photo',
      slug: 'happy-family-photo',
      category: 'Family',
      tag: 'Family',
      image: '/assets/shoot-express/happy-family-photo.jpg',
      alt: 'Happy family portrait session by Shoot Express Photography',
      description: 'Heartwarming family bonding capturing radiant smiles, candid hugs, and multi-generational togetherness.'
    },
    {
      id: 'port-5',
      title: 'Wedding Jewellery Photoshoot',
      slug: 'wedding-jewellery-photoshoot',
      category: 'Jewellery & Product',
      tag: 'Product',
      image: '/assets/shoot-express/wedding-jewellery-photoshoot.webp',
      alt: 'Wedding jewellery photoshoot by Shoot Express Photography',
      description: 'Macro precision lighting on bridal polki, gold ornaments, and diamond craftsmanship.'
    },
    {
      id: 'port-6',
      title: 'Milkshake & Food Photography',
      slug: 'milkshake-photography',
      category: 'Food & Culinary',
      tag: 'Food',
      image: '/assets/shoot-express/milkshake-photography.webp',
      alt: 'Milkshake and culinary beverage photoshoot by Shoot Express Photography',
      description: 'Mouthwatering commercial beverage and dessert framing crafted for menu and advertising promotion.'
    },
    {
      id: 'port-7',
      title: 'Corporate Meeting & Event Photoshoot',
      slug: 'corporate-meeting-event-photoshoot',
      category: 'Corporate & Events',
      tag: 'Corporate',
      image: '/assets/shoot-express/corporate-meeting-event-photoshoot.webp',
      alt: 'Corporate event and summit photoshoot in Mumbai by Shoot Express Photography',
      description: 'PR-ready conference, executive panel, and gala event photojournalism for leading businesses.'
    },
    {
      id: 'port-8',
      title: 'Traditional Fashion Photoshoot',
      slug: 'traditional-fashion-photoshoot',
      category: 'Fashion & Editorial',
      tag: 'Fashion',
      image: '/assets/shoot-express/traditional-fashion-photoshoot.jpg',
      alt: 'Traditional ethnic fashion photoshoot by Shoot Express Photography Mumbai',
      description: 'Exquisite silk and bridal wear presentation with fine-art studio lighting and pose choreography.'
    },
    {
      id: 'port-9',
      title: 'Interior & Architecture Photography',
      slug: 'interior-architecture-photography',
      category: 'Interior & Architecture',
      tag: 'Interior',
      image: '/assets/shoot-express/interior-architecture-photography.jpg',
      alt: 'Luxury interior and architecture photoshoot in Mumbai by Shoot Express',
      description: 'Wide-angle interior symmetry, balanced ambient lighting, and rich architectural textures.'
    }
  ] as PortfolioItem[],

  whyChooseUs: [
    {
      title: 'One-Stop Solution',
      subtitle: 'Complete Photography & Videography',
      description: 'All-inclusive photography and videography services for every requirement under one roof, with a dedicated indoor shoot facility in Powai, Mumbai.',
      icon: 'Camera'
    },
    {
      title: 'Expertise & Experience',
      subtitle: 'Over 7+ Years in Mumbai',
      description: 'An experienced team of 70+ professional photographers and cinematographers trained across wedding rituals, corporate protocol, and commercial styling.',
      icon: 'Award'
    },
    {
      title: 'Affordable Rates',
      subtitle: 'Transparent & Competitive Pricing',
      description: 'Premium quality visuals at competitive pricing packages tailored to your requirements, with clear scopes and no surprise hidden fees.',
      icon: 'Tag'
    },
    {
      title: '24*7 Customer Support',
      subtitle: 'Always Accessible',
      description: 'Dedicated customer support team available 24/7 to answer date availability queries, schedule consultations, and guide shoot logistics.',
      icon: 'Clock'
    },
    {
      title: 'After-Shoot Service',
      subtitle: 'Selection & Custom Albums',
      description: 'Personalized assistance with photo selection, digital proofs, custom heirloom albums, and responsive resolution of all editing queries.',
      icon: 'CheckCircle'
    },
    {
      title: 'High-End Equipment',
      subtitle: 'Cinema Cameras & Optics',
      description: 'State-of-the-art full-frame cameras, prime lenses, 3-axis gimbals, calibrated studio strobes, sound gear, and versatile backdrops.',
      icon: 'Zap'
    }
  ],

  faqs: [
    {
      question: 'What type of photography service do you offer?',
      answer: 'We offer comprehensive photography and videography services including Wedding Photography, Candid Photography, Pre-Wedding Shoots, Maternity & Baby Shoots, Family Portraits, Corporate Conferences & Headshots, Food & Culinary Shoots, Product & Jewellery Catalogs, Fashion Portfolios, and Interior/Architectural Photography.'
    },
    {
      question: 'What types of photographers do you have?',
      answer: 'Our team of 70+ professionals includes specialized candid photographers, traditional event documenters, commercial tabletop & food stylists, fashion portrait specialists, drone cinematographers, and dedicated post-production colorists.'
    },
    {
      question: 'How much does it cost for professional photography?',
      answer: 'Our pricing is structured according to the nature of the shoot, hours of coverage, number of team members, and deliverables required. We provide transparent packages starting from compact portrait/product sessions up to multi-day wedding and corporate packages at competitive rates.'
    },
    {
      question: 'What are the payment terms?',
      answer: 'Typically, a booking advance is required to secure your shoot date on our calendar. A milestone payment is scheduled on the day of the shoot, and the remaining balance is settled upon delivery of the final high-resolution edited images and albums.'
    },
    {
      question: 'Is the advance amount refundable on cancellation?',
      answer: 'Advance amounts are utilized to block dates and allocate crew equipment. In case of rescheduling with adequate advance notice, we allow transferring your booking to a mutually agreeable alternate date subject to team availability.'
    },
    {
      question: 'Are the prices negotiable?',
      answer: 'Our package pricing is calibrated to maintain high equipment standards, crew professionalism, and thorough editing. However, we are happy to customize deliverables, crew size, or duration to comfortably align with your specific budget.'
    },
    {
      question: 'How will the photoshoot content be delivered?',
      answer: 'We deliver your raw preview selection and final edited photographs via secure, private cloud download links in high-resolution JPG format. Physical items such as premium photo books, acrylic frames, and USB drives are hand-delivered or couriered to your address.'
    },
    {
      question: 'How many edited images do you provide?',
      answer: 'The number of edited images depends on the package selected. For instance, a portrait or product session typically includes 25 to 50 retouched images, while full-day events or weddings include hundreds of color-corrected and curated high-resolution master photographs.'
    }
  ] as FaqItem[],

  locationsServed: [
    'Churchgate',
    'Dadar',
    'Matunga',
    'Bandra',
    'Worli',
    'Andheri',
    'Goregaon',
    'Malad',
    'Kandivali',
    'Borivali',
    'Dahisar',
    'Mira Road',
    'Bhayandar',
    'Vasai',
    'Nalla Sopara',
    'Virar'
  ],

  reviews: [
    {
      id: 'rev-1',
      name: 'Rohan & Pooja Deshmukh',
      occasion: 'Wedding & Reception',
      location: 'Andheri West, Mumbai',
      rating: 5,
      date: 'March 2026',
      comment: 'Shoot Express captured our wedding so beautifully! The candid shots captured real emotions that we will treasure forever. Ashwin and the entire team were punctual, polite, and made everyone feel natural in front of the lens.'
    },
    {
      id: 'rev-2',
      name: 'Sneha Patil',
      occasion: 'Maternity Photoshoot',
      location: 'Powai, Mumbai',
      rating: 5,
      date: 'February 2026',
      comment: 'Had my outdoor sunrise maternity shoot in Powai. The comfort level provided by the team was outstanding. The photos turned out dreamy and golden. Truly one of the best photography teams in Mumbai!'
    },
    {
      id: 'rev-3',
      name: 'Vikram Sharma',
      occasion: 'Corporate Conference',
      location: 'Bandra Kurla Complex (BKC)',
      rating: 5,
      date: 'January 2026',
      comment: 'Engaged Shoot Express for our annual 2-day business summit. Extremely professional team with high-end cameras and fast turnaround. Received PR-ready images within 24 hours of the closing keynote.'
    },
    {
      id: 'rev-4',
      name: 'Neha & Karan Mehta',
      occasion: 'Pre-Wedding & Sangeet',
      location: 'Worli Sea Face, Mumbai',
      rating: 5,
      date: 'December 2025',
      comment: 'Everything from the pre-wedding shoot to our sangeet night was handled seamlessly. The after-shoot album design service was exceptional. Competitive rates without any compromise on quality.'
    }
  ] as ReviewItem[],

  publications: [
    { name: 'Justdial 4.9★', label: '870+ Verified Client Reviews', highlight: 'Top Rated in Mumbai' },
    { name: 'WeddingSutra', label: 'Featured Wedding Photographers', highlight: 'Mumbai Registry' },
    { name: 'Hindustan Times', label: 'Lifestyle & Occasion Feature', highlight: 'Media Coverage' },
    { name: 'Instavendor', label: 'Top Event Visual Services', highlight: 'Verified Vendor' },
    { name: 'Mumbai Mirror', label: 'City Occasion Photographers', highlight: 'Local Spotlight' }
  ]
};
