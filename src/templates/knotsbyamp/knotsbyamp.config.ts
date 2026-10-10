export interface WeddingStory {
  id: string;
  title: string;
  couple: string;
  location: string;
  venue: string;
  culture: 'Gujarati' | 'Marwari' | 'South Indian' | 'Christian' | 'Muslim' | 'Two States' | 'Cross-Border' | 'North Indian';
  destinationType: 'Mumbai' | 'Goa' | 'Udaipur' | 'Karjat' | 'International' | 'Destination';
  coverImage: string;
  excerpt: string;
  fullStory: string;
  gallery: string[];
  filmYoutubeId?: string;
  tags: string[];
  featured?: boolean;
}

export interface WeddingFilm {
  id: string;
  title: string;
  couple: string;
  location: string;
  posterImage: string;
  youtubeId: string;
  duration: string;
  tagline: string;
  description: string;
  featured?: boolean;
}

export interface CoupleShootItem {
  id: string;
  title: string;
  couple: string;
  location: string;
  theme: string;
  image: string;
  story: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  badge?: string;
}

export interface TestimonialItem {
  couple: string;
  location: string;
  weddingDate: string;
  rating: number;
  highlight: string;
  reviewText: string;
  photoUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Booking & Pricing' | 'Style & Films' | 'Deliverables';
}

export const KNOTSBYAMP_CONFIG = {
  brand: {
    name: 'KnotsbyAMP',
    legalName: 'KnotsbyAMP Photography & Films LLP',
    tagline: 'Beautiful Weddings, Breathtaking Films',
    subTagline: 'Celebrating Love with Every Frame · Tying the Knot, One Story at a Time',
    foundedYear: 2014,
    description: 'KnotsbyAMP is an International award-winning wedding photography and filmmaking company based in Mumbai, India. Founded in 2014, they are regarded as top wedding photographers in India, celebrated for authentic documentary storytelling, emotional cinematic films, and timeless couple portraiture.',
    logo: '/assets/knotsbyamp/logo.png',
    heroOg: '/assets/knotsbyamp/hero-og.jpg',
    awardsKnots: '/assets/knotsbyamp/awards-knots.png',
    awardsLaurel: '/assets/knotsbyamp/awards-laurel.png',
    weddingSutraBadge: '/assets/knotsbyamp/weddingsutra-2024.jpg',
    originalUrl: 'https://www.knotsbyamp.com/',
  },

  contact: {
    headOffice: 'KnotsbyAMP, Office no 802 & 803, B wing, Mahavir Icon, Plot no 90, Sector 15, CBD Belapur, Navi Mumbai: 400614',
    phone: '+91-9987071831',
    whatsapp: '+919987071831',
    email: 'sales@knotsbyamp.com',
    hours: '11:00 am to 7:00 pm IST (Mon – Sat)',
    hubs: ['Navi Mumbai (HQ)', 'Mumbai', 'Pune', 'Delhi', 'Goa', 'Hyderabad', 'Dubai', 'Worldwide'],
    instagram: 'https://instagram.com/knotsbyamp',
    youtube: 'https://youtube.com/knotsbyamp',
    facebook: 'https://facebook.com/knotsbyamp',
  },

  stats: [
    { label: 'Years of Storytelling', value: '11+' },
    { label: 'Weddings Documented', value: '850+' },
    { label: 'Awards Won', value: '35+' },
    { label: 'Client Rating', value: '5.0 ★' },
    { label: 'Countries Covered', value: '14+' },
  ],

  accolades: [
    { title: 'WeddingSutra Photography Awards', category: 'Winners 2024', badge: 'Gold Trophy' },
    { title: 'Great Indian Wedding Awards (GIWA)', category: 'Best Wedding Film & Candid Photography', badge: 'Winner' },
    { title: 'Fearless Photographers', category: 'International Association of the World’s Best Wedding Photographers', badge: 'Member' },
    { title: 'Wedisson Awards', category: 'Best International Wedding Photography', badge: 'Honoree' },
    { title: 'Better Photography', category: 'Wedding Photographer of the Year Nominee', badge: 'National Finalist' },
    { title: 'WedMeGood', category: '5.0-Star Hall of Fame Wedding Studio', badge: '5.0 ★ Rated' },
  ],

  stories: [
    {
      id: 'story-dubai-nikah',
      title: 'Saba & Usman’s Stunning Nikah in Dubai',
      couple: 'Saba & Usman',
      location: 'Dubai, United Arab Emirates',
      venue: 'Desert Palm PER AQUUM & Downtown Dubai',
      culture: 'Muslim',
      destinationType: 'International',
      coverImage: '/assets/knotsbyamp/story-dubai-nikah.jpg',
      excerpt: 'An opulent yet intimately emotional Nikah set against the glistening skyline and desert horizons of Dubai.',
      fullStory: 'From the regal golden glow of the Nikah ceremony to emotional vows spoken under starlit Arabian skies, Saba and Usman’s Dubai celebration blended timeless traditions with high-fashion sophistication. KnotsbyAMP flew out to chronicle every tearful hug, family blessing, and the bride’s hand-embroidered veil swaying in the warm desert breeze.',
      gallery: [
        '/assets/knotsbyamp/story-dubai-nikah.jpg',
        '/assets/knotsbyamp/gallery-1.jpg',
        '/assets/knotsbyamp/gallery-2.jpg',
        '/assets/knotsbyamp/gallery-6.jpg'
      ],
      filmYoutubeId: 'dZu8S4tdDus',
      tags: ['Dubai Nikah', 'Destination Wedding', 'Luxury Celebration', 'Cinematic Wedding Film'],
      featured: true
    },
    {
      id: 'story-trident-udaipur',
      title: 'Yash & Shrishti’s Trident Udaipur Royal Wedding',
      couple: 'Yash & Shrishti',
      location: 'Udaipur, Rajasthan',
      venue: 'Trident Udaipur & Lake Pichola',
      culture: 'Marwari',
      destinationType: 'Udaipur',
      coverImage: '/assets/knotsbyamp/story-trident-udaipur.jpg',
      excerpt: 'A royal spectacle on the banks of Lake Pichola where Rajasthani heritage met pure contemporary exuberance.',
      fullStory: 'Surrounded by the serene waters of Udaipur and Aravali hilltops, Yash and Shrishti tied the knot in true regal splendor. The festivities opened with a vibrant carnival-themed Mehendi, followed by an electrifying Sangeet night with choreographed palace performances, culminating in a twilight Pheras ceremony illuminated by hundreds of floating candles.',
      gallery: [
        '/assets/knotsbyamp/story-trident-udaipur.jpg',
        '/assets/knotsbyamp/gallery-3.jpg',
        '/assets/knotsbyamp/gallery-4.jpg',
        '/assets/knotsbyamp/gallery-8.jpg'
      ],
      filmYoutubeId: 'MMzbLc9c_2E',
      tags: ['Udaipur Royal Wedding', 'Trident Hotel', 'Lake Pichola', 'Grand Sangeet'],
      featured: true
    },
    {
      id: 'story-taj-cidade-goa',
      title: 'Maitri & Aneesh: Taj Horizon & Cidade De Goa Wedding',
      couple: 'Maitri & Aneesh',
      location: 'Goa, India',
      venue: 'Taj Cidade De Goa Horizon',
      culture: 'Gujarati',
      destinationType: 'Goa',
      coverImage: '/assets/knotsbyamp/story-taj-cidade-goa.jpg',
      excerpt: 'Sun, sand, ocean breezes and exuberant Gujarati celebrations overlooking the Arabian Sea.',
      fullStory: 'Maitri and Aneesh wanted their wedding to feel like an unforgettable coastal vacation for everyone they loved. Set against the dramatic cliffside panoramas of Taj Cidade de Goa, their three-day extravaganza featured sun-drenched pool parties, colorful Garba revelry under fairy-light canopies, and a sunset Mandap by the whispering waves.',
      gallery: [
        '/assets/knotsbyamp/story-taj-cidade-goa.jpg',
        '/assets/knotsbyamp/maitri-aneesh-poster.jpg',
        '/assets/knotsbyamp/gallery-5.jpg',
        '/assets/knotsbyamp/gallery-7.jpg'
      ],
      filmYoutubeId: 'wrfT1OgtwRE',
      tags: ['Goa Destination Wedding', 'Taj Cidade de Goa', 'Gujarati Wedding', 'Beach Sunset'],
      featured: true
    },
    {
      id: 'story-oleander-farms',
      title: 'A Fairytale Wedding at Oleander Farms, Karjat',
      couple: 'Pooja & Rohan',
      location: 'Karjat, Maharashtra',
      venue: 'Oleander Farms Karjat',
      culture: 'Two States',
      destinationType: 'Karjat',
      coverImage: '/assets/knotsbyamp/story-oleander-farms.jpg',
      excerpt: 'Lush greenery, earthy bohemian aesthetics, and heartwarming family laughter in the Sahyadri foothills.',
      fullStory: 'Nestled between sprawling coffee groves and mist-laden mountains, Oleander Farms provided the ultimate canvas for a modern rustic celebration. The couple opted for organic floral setups, candle-lit wooden banquet tables, and an open-air amphitheater reception that continued into dawn with acoustic jamming.',
      gallery: [
        '/assets/knotsbyamp/story-oleander-farms.jpg',
        '/assets/knotsbyamp/gallery-1.jpg',
        '/assets/knotsbyamp/gallery-4.jpg',
        '/assets/knotsbyamp/gallery-6.jpg'
      ],
      filmYoutubeId: 'ik4BqGvqYRA',
      tags: ['Oleander Farms Karjat', 'Rustic Boho Wedding', 'Two States', 'Nature Celebration'],
      featured: true
    },
    {
      id: 'story-mahalaxmi-racecourse',
      title: 'Wedding at Mahalaxmi Racecourse, Mumbai',
      couple: 'Natasha & Dev',
      location: 'South Mumbai',
      venue: 'Members Enclosure, Mahalaxmi Racecourse',
      culture: 'North Indian',
      destinationType: 'Mumbai',
      coverImage: '/assets/knotsbyamp/story-mahalaxmi-racecourse.jpg',
      excerpt: 'Classic South Bombay grandeur under historic colonial trees and glittering chandelier arches.',
      fullStory: 'With Mumbai’s skyline gleaming in the backdrop and gentle racecourse breezes flowing through centuries-old banyan canopies, this wedding encapsulated the refined charm of high-society Mumbai celebrations. Unscripted candid glances between grandparents, ecstatic baraat dancing, and heartfelt toasts made this night iconic.',
      gallery: [
        '/assets/knotsbyamp/story-mahalaxmi-racecourse.jpg',
        '/assets/knotsbyamp/gallery-2.jpg',
        '/assets/knotsbyamp/gallery-3.jpg',
        '/assets/knotsbyamp/gallery-8.jpg'
      ],
      filmYoutubeId: 'igDOWHcOcC4',
      tags: ['Mahalaxmi Racecourse', 'South Mumbai', 'Grand Reception', 'Baraat Energy'],
      featured: false
    },
    {
      id: 'story-bayview-mumbai',
      title: 'Sunset Romance at Bayview, Marine Drive, Mumbai',
      couple: 'Kavita & Aditya',
      location: 'Marine Drive, Mumbai',
      venue: 'Bayview Lawns, Waterfront',
      culture: 'Maharashtrian',
      destinationType: 'Mumbai',
      coverImage: '/assets/knotsbyamp/story-bayview-mumbai.jpg',
      excerpt: 'An unforgettable Queen’s Necklace waterfront ceremony drenched in sunset amber hues.',
      fullStory: 'Capturing the romance of Mumbai by the Arabian Sea is second nature to KnotsbyAMP. Kavita and Aditya exchanged garlands right as the sun touched the ocean horizon, creating a breathtaking silhouette sequence that became one of our most shared photo series of the year.',
      gallery: [
        '/assets/knotsbyamp/story-bayview-mumbai.jpg',
        '/assets/knotsbyamp/gallery-5.jpg',
        '/assets/knotsbyamp/gallery-7.jpg',
        '/assets/knotsbyamp/gallery-1.jpg'
      ],
      filmYoutubeId: 'yRL8MuCmlQw',
      tags: ['Bayview Lawns', 'Marine Drive', 'Waterfront Pheras', 'Sunset Silhouettes'],
      featured: false
    },
    {
      id: 'story-alila-diwa-goa',
      title: 'Meghana & Jivesh: Alila Diwa, Goa',
      couple: 'Meghana & Jivesh',
      location: 'South Goa',
      venue: 'Alila Diwa Goa Courtyard & Paddy Fields',
      culture: 'Christian',
      destinationType: 'Goa',
      coverImage: '/assets/knotsbyamp/story-alila-diwa-goa.jpg',
      excerpt: 'An ethereal union blending serene Goan church vows with an electric open-lawn reception party.',
      fullStory: 'Surrounded by lush green paddy fields and Portuguese banyan trees, Meghana and Jivesh celebrated their union with an exquisite white gown ceremony followed by an upbeat Goan brass band procession and emotional first dances under festoon lighting.',
      gallery: [
        '/assets/knotsbyamp/story-alila-diwa-goa.jpg',
        '/assets/knotsbyamp/gallery-2.jpg',
        '/assets/knotsbyamp/gallery-6.jpg',
        '/assets/knotsbyamp/gallery-8.jpg'
      ],
      filmYoutubeId: 'PWMp_kehGrw',
      tags: ['Alila Diwa Goa', 'White Gown Wedding', 'Goan Brass Band', 'Lawn Celebration'],
      featured: false
    },
    {
      id: 'story-itc-maratha',
      title: 'Anushka & Rex: ITC Maratha Hindu-Christian Union',
      couple: 'Anushka & Rex',
      location: 'Mumbai',
      venue: 'ITC Maratha Royal Ballroom & Gardens',
      culture: 'Two States',
      destinationType: 'Mumbai',
      coverImage: '/assets/knotsbyamp/story-itc-maratha.jpg',
      excerpt: 'The union of two rich traditions celebrated with breathtaking dual ceremonies and high-energy music.',
      fullStory: 'From traditional Vedic Vedic chants in the morning to romantic church vows and cake-cutting in the evening, Anushka and Rex honored both backgrounds with effortless joy. Our dual-crew team documented both bride and groom preparations seamlessly.',
      gallery: [
        '/assets/knotsbyamp/story-itc-maratha.jpg',
        '/assets/knotsbyamp/gallery-3.jpg',
        '/assets/knotsbyamp/gallery-4.jpg',
        '/assets/knotsbyamp/gallery-7.jpg'
      ],
      filmYoutubeId: 'Esp7BCiqoug',
      tags: ['ITC Maratha', 'Cross-Cultural Wedding', 'Dual Ceremonies', 'Ballroom Luxury'],
      featured: false
    }
  ] as WeddingStory[],

  films: [
    {
      id: 'film-maitri-aneesh',
      title: 'Forever By The Sea — Maitri & Aneesh',
      couple: 'Maitri & Aneesh',
      location: 'Taj Cidade De Goa',
      posterImage: '/assets/knotsbyamp/maitri-aneesh-poster.jpg',
      youtubeId: 'dZu8S4tdDus',
      duration: '4:18 min',
      tagline: 'When coastal dreams meet unbridled Gujarati soul',
      description: 'An emotional cinematic journey capturing the ocean breeze, laughter, and high-octane Garba of Maitri & Aneesh at Taj Cidade De Goa.',
      featured: true
    },
    {
      id: 'film-indu-sahil',
      title: 'The Royal Chapter — Indu & Sahil',
      couple: 'Indu & Sahil',
      location: 'Heritage Palace, Rajasthan',
      posterImage: '/assets/knotsbyamp/indu-sahil-poster.png',
      youtubeId: 'MMzbLc9c_2E',
      duration: '5:42 min',
      tagline: 'A royal saga carved in golden memories',
      description: 'Grand palace arches, fireworks over ancient forts, and tender glances between Indu & Sahil that redefine royal wedding cinematography.',
      featured: true
    },
    {
      id: 'film-dewaangi',
      title: 'Dewaangi — The Unstoppable Love',
      couple: 'Dewaangi & Neil',
      location: 'Udaipur & Mumbai',
      posterImage: '/assets/knotsbyamp/dewaangi-poster.jpg',
      youtubeId: 'wrfT1OgtwRE',
      duration: '3:55 min',
      tagline: 'Pure romance, unfiltered adrenaline, and endless dance',
      description: 'A whirlwind romance featuring pulse-pounding Sangeet choreography and emotional mother-daughter embraces.',
      featured: true
    },
    {
      id: 'film-viggotbagged',
      title: '#VigGotBagged — Vignesh & Aanya',
      couple: 'Vignesh & Aanya',
      location: 'Alibaug Waterfront Villa',
      posterImage: '/assets/knotsbyamp/viggotbagged-poster.jpg',
      youtubeId: 'ik4BqGvqYRA',
      duration: '4:30 min',
      tagline: 'Sun-kissed vows, catamaran entrances, and beach party energy',
      description: 'Vignesh and Aanya brought modern flair to coastal Alibaug, featuring a speed-boat baraat and candlelit lawn toasts.',
      featured: false
    },
    {
      id: 'film-theanglou',
      title: 'The AngLou Story — Angela & Louis',
      couple: 'Angela & Louis',
      location: 'South Goa Beachside',
      posterImage: '/assets/knotsbyamp/theanglou-poster.jpg',
      youtubeId: 'igDOWHcOcC4',
      duration: '6:12 min',
      tagline: 'Intimate vows, acoustic serenades, and tropical sunsets',
      description: 'An intimate gathering of 80 closest friends and family flying from London and Melbourne to celebrate love on Goan sands.',
      featured: false
    },
    {
      id: 'film-dhaka-saga',
      title: 'A Saga in Dhaka — Sadia & Abraar',
      couple: 'Sadia & Abraar',
      location: 'Dhaka, Bangladesh',
      posterImage: '/assets/knotsbyamp/saga-in-dhaka-poster.jpg',
      youtubeId: 'yRL8MuCmlQw',
      duration: '5:15 min',
      tagline: 'Opulence, heritage, and poetic celebrations',
      description: 'A monumental five-day royal celebration in Dhaka documented with cinematic precision, regal lighting, and rich classical scores.',
      featured: false
    },
    {
      id: 'film-karjat-magic',
      title: 'Whispering Hills — Karjat Fairytale',
      couple: 'Rhea & Siddharth',
      location: 'Oleander Farms Karjat',
      posterImage: '/assets/knotsbyamp/movie-posters-8.jpg',
      youtubeId: 'PWMp_kehGrw',
      duration: '4:45 min',
      tagline: 'Rustic romance beneath the Sahyadri peaks',
      description: 'Lush greenery and warm fairy-light canopies creating pure cinematic enchantment for Rhea & Siddharth.',
      featured: false
    },
    {
      id: 'film-two-states',
      title: 'Two States, One Soul — Mumbai Chapter',
      couple: 'Pooja & Kabir',
      location: 'St. Regis & Bayview, Mumbai',
      posterImage: '/assets/knotsbyamp/movie-posters-6.jpg',
      youtubeId: 'Esp7BCiqoug',
      duration: '5:02 min',
      tagline: 'When two cultures collide with boundless joy',
      description: 'A vibrant Mumbai fusion wedding balancing traditional rituals with high-energy modern celebrations.',
      featured: false
    }
  ] as WeddingFilm[],

  coupleShoots: [
    {
      id: 'cs-amsterdam',
      title: 'Autumn Romance along Amsterdam Canals',
      couple: 'Dev & Natasha',
      location: 'Amsterdam, Netherlands',
      theme: 'European Heritage & Cobblestone Streets',
      image: '/assets/knotsbyamp/gallery-1.jpg',
      story: 'Bicycle rides across historic canal bridges, warm coffee stops, and candid sunset portraits in the heart of autumn Amsterdam.'
    },
    {
      id: 'cs-goa',
      title: 'Golden Hour Reflections on Vagator Shores',
      couple: 'Aneesh & Maitri',
      location: 'Goa Coastline',
      theme: 'Secluded Cliffs & Ocean Spray',
      image: '/assets/knotsbyamp/gallery-3.jpg',
      story: 'Dramatic cliffside breezes and golden sea foam catching the warm glow of late evening Goan sun.'
    },
    {
      id: 'cs-udaipur',
      title: 'Vintage Elegance at Lake Pichola',
      couple: 'Yash & Shrishti',
      location: 'Udaipur, Rajasthan',
      theme: 'Royal Heritage & Floating Palaces',
      image: '/assets/knotsbyamp/gallery-5.jpg',
      story: 'Traditional Rajasthani architecture framed with regal silhouettes as dusk settled over the tranquil waters.'
    },
    {
      id: 'cs-mumbai',
      title: 'Colonial Architecture & South Bombay Charm',
      couple: 'Kavita & Aditya',
      location: 'Ballard Estate & Marine Drive',
      theme: 'Classic Monochrome & Urban Romance',
      image: '/assets/knotsbyamp/gallery-7.jpg',
      story: 'Timeless morning light passing through British-era stone arches followed by vintage strolls down Marine Drive.'
    }
  ] as CoupleShootItem[],

  pillars: [
    {
      title: 'Our Style of Photography',
      subtitle: 'Pure Documentary Candid Artistry',
      description: 'The word ‘candid’ means frank, sincere, and natural. We don’t ask you to freeze awkward smiles. We blend into the room so you and your loved ones can truly be yourselves, capturing spontaneous emotion that age like fine wine.'
    },
    {
      title: 'We Capture The Whole Story',
      subtitle: 'Not Just A Few Highlights',
      description: 'Our wedding photography is not about five award-winning portraits. It is about your entire photo-story. Anyone looking at our album can relive the nerves, laughter, morning chaos, and twilight tears from start to finish.'
    },
    {
      title: 'We Shoot Both Sides',
      subtitle: 'Bride & Groom Equal Coverage',
      description: 'Our dedicated crew covers both bride and groom preparations simultaneously. You get a single, cohesive artistic vision without having to juggle two separate photo teams.'
    },
    {
      title: 'Cinema With Soul',
      subtitle: 'Handcrafted Sound & Story',
      description: 'We don’t paste generic Bollywood tracks onto standard video cuts. Every wedding film is custom-scored, rhythm-edited, and narrative-driven to make you feel like the leads of an international cinematic motion picture.'
    },
    {
      title: 'Professionalism & Transparency',
      subtitle: 'Zero Hidden Costs or Surprises',
      description: 'From clear contract terms and backup equipment redundancy to disciplined delivery timelines, our client managers ensure a stress-free experience from contract signing to final album delivery.'
    },
    {
      title: 'Loved Across The World',
      subtitle: '5-Star Trust on Every Platform',
      description: 'With over 850 couples photographed across 14 countries and unbroken 5-star ratings on Google and WedMeGood, our couples consistently become lifelong friends.'
    }
  ],

  team: [
    {
      name: 'Aman',
      role: 'Founder & Creative Director',
      bio: 'Visionary behind KnotsbyAMP since 2014. Pioneer of documentary wedding photography with a passion for candid human connections and cinematic framing.',
      badge: 'Founder'
    },
    {
      name: 'Rahul Nair',
      role: 'Lead Cinematographer & Senior Editor',
      bio: 'Master of rhythm and emotional narrative. Rahul shapes KnotsbyAMP’s internationally acclaimed wedding films with bespoke sound design and color grading.',
      badge: 'Films Lead'
    },
    {
      name: 'Sohail Hussain',
      role: 'Lead Photographer & Production Manager',
      bio: 'Specialist in ambient light, high-energy baraat captures, and technical production coordination across multi-day destination setups.',
      badge: 'Photo Lead'
    },
    {
      name: 'Siddhesh Gamre',
      role: 'Client Service Manager & Photographer',
      bio: 'Ensuring seamless bride-and-groom communication from initial consultation to final delivery schedules with warm, attentive care.',
      badge: 'Client Care'
    },
    {
      name: 'Soumi Goswami',
      role: 'Cinematographer & Colorist',
      bio: 'Brings fine-art aesthetic sensibility, delicate movement, and nuanced color palette mastery to our feature films.',
      badge: 'Cinematography'
    },
    {
      name: 'Prasad Patil',
      role: 'Senior Photographer & Lighting Specialist',
      bio: 'Renowned for crafting breathtaking twilight portraits, mandap lighting harmony, and unmissable candid family moments.',
      badge: 'Lighting Master'
    }
  ] as TeamMember[],

  testimonials: [
    {
      couple: 'Zeba & Azeem',
      location: 'Mumbai & Lonavala Destination',
      weddingDate: 'December 2024',
      rating: 5,
      highlight: '“You guys have been absolutely amazing and super supportive through all the delays and last-minute chaos!”',
      reviewText: 'Aman, Prasad Patil and team, thanks a lot! 🙏🏻 You guys have been absolutely amazing and super supportive through all the delays and last-minute chaos. Really appreciate all the effort and patience from everyone. The photographs and teaser film captured the soul of our wedding exactly how we dreamed!',
      photoUrl: '/assets/knotsbyamp/gallery-2.jpg'
    },
    {
      couple: 'Susruta & Venkat',
      location: 'Hyderabad & Bangalore',
      weddingDate: 'November 2024',
      rating: 5,
      highlight: '“From day one, they were warm, accommodating, and felt more like family than vendors.”',
      reviewText: 'We had the absolute pleasure of having KnotsbyAMP as our wedding photographers, and we truly couldn’t have made a better choice. From day one, they were warm, accommodating, and felt more like family. They captured raw, spontaneous moments we didn’t even realize were happening, and the film had our entire family in happy tears.',
      photoUrl: '/assets/knotsbyamp/gallery-4.jpg'
    },
    {
      couple: 'Maitri & Anish',
      location: 'Taj Cidade De Goa',
      weddingDate: 'January 2025',
      rating: 5,
      highlight: '“The right mixes and timing of the Wedding Film made us feel like the leads of a cinematic film!”',
      reviewText: 'We had the absolute pleasure of having the incredible team of Knots for both my sister’s and my own wedding! The right mixes and timing of the Wedding Film is so unique that it made us feel like the leads of a cinematic film. If you are getting a chance to work with them, jump and take it without hesitation!',
      photoUrl: '/assets/knotsbyamp/maitri-aneesh-poster.jpg'
    },
    {
      couple: 'Simran & Kush',
      location: 'Udaipur Palace Wedding',
      weddingDate: 'October 2024',
      rating: 5,
      highlight: '“Every detail, emotion, and candid moment was beautifully preserved.”',
      reviewText: 'We couldn’t be happier with our experience with Knots by AMP, the best Wedding Photographers! From start to finish, they were professional, friendly, and incredibly talented. They made us feel completely relaxed. Every detail, emotion, and candid moment was preserved with breathtaking quality.',
      photoUrl: '/assets/knotsbyamp/gallery-6.jpg'
    },
    {
      couple: 'Radhika & Pranav',
      location: 'Oleander Farms Karjat',
      weddingDate: 'December 2024',
      rating: 5,
      highlight: '“What makes their work standout is their deep understanding of the people they shoot.”',
      reviewText: 'Trust me and just get them onboard to capture your special day; you will be assured of memories that will last you a lifetime! What makes their work stand out is their understanding of the people they are shooting. They never pushed us into cliché poses and let the magic unfold naturally.',
      photoUrl: '/assets/knotsbyamp/gallery-8.jpg'
    }
  ] as TestimonialItem[],

  faqs: [
    {
      question: 'Where are you based and do you travel for destination weddings?',
      answer: 'Our headquarters are located in Navi-Mumbai where our core studio sits, with active branches and associates in Pune, Delhi, Goa, and Hyderabad. We have documented destination weddings across Udaipur, Jaipur, Mussoorie, Kerala, Goa, and internationally in Dubai, Kenya, Bangladesh, Thailand, Singapore, and Europe. We travel wherever love takes us!',
      category: 'General'
    },
    {
      question: 'What is your style and how do you cover weddings?',
      answer: 'Our signature approach is Documentary & Candid Storytelling. Candid photography is the art of catching people unawares in their natural, joyful, and emotional states without forced posing. We blend into the celebrations, using unobtrusive lenses and masterfully controlled lighting to capture both the macro grandeur and intimate micro-moments.',
      category: 'Style & Films'
    },
    {
      question: 'How are your services priced?',
      answer: 'We customize our packages based on the scope of work, number of events, hours required, crew size, and deliverables (candid photography, cinematic films, traditional video, albums). Every wedding is distinct; please contact us through our date inquiry form with your dates and venues for a transparent, bespoke quote.',
      category: 'Booking & Pricing'
    },
    {
      question: 'Do you make wedding films? Do we also need traditional video?',
      answer: 'Yes! Our cinematic wedding films are internationally award-winning, handcrafted with custom music editing, speeches, and cinema-grade color grading. For couples who also want continuous full coverage of the entire Sangeet performances or uncut rituals, we also offer traditional video documentation so no detail is lost.',
      category: 'Style & Films'
    },
    {
      question: 'What equipment and backup systems do you use?',
      answer: 'We use the latest flagship Sony, Canon, and Nikon cinema-grade cameras, G-Master / Art prime lenses, professional gimbal stabilizers, wireless audio lavaliers, and 4K aerial drones. Every camera records to dual memory cards simultaneously for zero risk of data loss, and all footage is backed up onto redundant encrypted drives.',
      category: 'Deliverables'
    },
    {
      question: 'What are your delivery timelines?',
      answer: 'Making an artistic film and hand-editing hundreds of photographs is a creative craft. We deliver a sneak-peek set of edited photographs and a 60-second social reel within 7–14 days. Full edited high-resolution photo sets are delivered within 4–6 weeks, and full cinematic films and albums within 8–12 weeks.',
      category: 'Deliverables'
    },
    {
      question: 'Do we need to arrange for travel and accommodation?',
      answer: 'For outstation and destination weddings, client arrangements include economy flight tickets for the crew, local airport transfers, and standard hotel accommodation at or close to the wedding venue to ensure our team is present for all early-morning and late-night festivities.',
      category: 'Booking & Pricing'
    },
    {
      question: 'Do you provide physical printed wedding albums?',
      answer: 'Absolutely. We partner with Kodak Wedding Collections and Mazda Premium Albums to produce archival-grade, lay-flat hardcover photo books with premium textured papers, leatherette bindings, and custom foil embossing that remain pristine for generations.',
      category: 'Deliverables'
    }
  ] as FaqItem[],

  servicePackages: [
    {
      name: 'The Essential Story',
      badge: 'Intimate Weddings',
      description: 'Ideal for 1-2 day intimate city weddings, engagements, or focused celebrations.',
      deliverables: [
        'Dedicated Candid Photographer & Cinematographer',
        'Traditional Photographer for stage & family coverage',
        '300+ Color-graded High-Resolution Photographs',
        '3 to 5-Minute Cinematic Highlights Teaser Film',
        'Private Cloud Gallery for High-Res Downloads (1 Year)',
        'Social Media Sneak Peek Reel within 7 Days'
      ]
    },
    {
      name: 'The Grand Celebration',
      badge: 'Most Popular',
      popular: true,
      description: 'Our signature comprehensive package for 2-3 day destination & royal weddings.',
      deliverables: [
        'Dual-side coverage: 2 Lead Candid Photographers & 2 Lead Cinematographers',
        'Traditional Photo & Traditional 4K Video Crew',
        'Drone Aerial Cinematography (where permitted)',
        '700+ Masterfully Edited High-Resolution Photographs',
        '5 to 8-Minute Cinematic Wedding Film & 1-Minute Teaser',
        'Full Uncut Video for Sangeet & Rituals',
        'Two Premium 40-Page Lay-Flat Hardcover Photo Books',
        'Custom Wooden Keepsake USB Box with all raw & processed media'
      ]
    },
    {
      name: 'The Royal International',
      badge: 'Luxury Destination',
      description: 'Full-spectrum white-glove coverage for grand multi-day destination weddings worldwide.',
      deliverables: [
        'Founder Aman + Senior Directors & Full 6-8 Member Cinema Crew',
        'Pre-Wedding Concept Shoot (Local or Destination)',
        'Same-Day Edit / Next-Day Teaser Reel during the reception',
        '1000+ Curated Fine-Art Photographs in Print & Web Formats',
        'Extended 12 to 18-Minute Feature Docu-Film + Full Teasers',
        'Three Handcrafted Heirloom Leatherette Albums with Presentation Cases',
        'Lifetime Cloud Archive & Archival Hard Drive Backup'
      ]
    }
  ]
};
