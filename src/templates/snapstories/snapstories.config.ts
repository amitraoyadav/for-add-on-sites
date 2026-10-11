export interface PortfolioStory {
  id: string;
  title: string;
  slug: string;
  category: string;
  image: string;
  alt: string;
  storyDescription: string;
  highlights: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export const SNAPSTORIES_CONFIG = {
  brand: {
    name: 'SnapStories Photography',
    shortName: 'SnapStories',
    tagline: 'WEDDING - ENGAGEMENT',
    subTagline: 'SnapStories — Wedding Photography & Films',
    description:
      'Wedding photography and films that preserve emotions, relationships, and memories, with engagement photography and cinematic video storytelling.',
    originalUrl: 'https://www.snapstories.in/',
    contact: {
      name: 'Aniket Pawar',
      phone: '+91 9137698195',
      displayPhone: '9137698195',
      telLink: 'tel:+919137698195',
      instagram: 'https://www.instagram.com/snapstories.in/',
      cinematicVideos: 'https://www.snapstories.in/cinematic-videos',
      whatsapp:
        'https://api.whatsapp.com/send/?phone=919137698195&text=Hello%20Aniket%20Pawar,%20I%20would%20like%20to%20inquire%20about%20SnapStories%20wedding%20photography%20services&type=phone_number&app_absent=0'
    },
    footerLine: 'SnapStories — Wedding Photography & Films',
    copyright: '©2026 SnapStories | Disclaimer'
  },

  assets: {
    logo: '/assets/snapstories/logo.jpg',
    heroWedding: '/assets/snapstories/hero-wedding.jpg',
    heroWeddingPng: '/assets/snapstories/hero-wedding.png',
    instagramIcon: '/assets/snapstories/instagram-icon.png',
    youtubeIcon: '/assets/snapstories/youtube-icon.png'
  },

  navItems: [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'WEDDING', href: '#wedding' },
    { label: 'ENGAGEMENT', href: '#engagement' },
    { label: 'CINEMATIC VIDEOS', href: '#cinematic-videos' },
    { label: 'PORTFOLIO', href: '#portfolio' },
    { label: 'CONTACT', href: '#contact' }
  ],

  portfolioStories: [
    {
      id: 'janhavikishen',
      title: 'Janhavi & Kishen',
      slug: 'janhavikishen',
      category: 'Wedding & Reception',
      image: '/assets/snapstories/portfolio-janhavi-kishen.jpg',
      alt: 'Janhavi & Kishen Wedding Photography by SnapStories',
      storyDescription:
        'A vibrant and joyous celebration weaving traditional wedding customs with candid laughter, joyful baraat moments, and heartwarming family memories.',
      highlights: [
        'Candid wedding photojournalism',
        'Traditional rituals & heartfelt pheras',
        'Romantic golden-hour couple portraiture',
        'High-energy reception & family celebrations'
      ]
    },
    {
      id: 'ankithapranav',
      title: 'Ankitha & Pranav',
      slug: 'ankithapranav',
      category: 'Pre-Wedding & Engagement',
      image: '/assets/snapstories/portfolio-ankitha-pranav.jpg',
      alt: 'Ankitha & Pranav Wedding Photos by SnapStories',
      storyDescription:
        'A serene and intimate sunset couple session capturing the subtle, unspoken bond and spontaneous affection between Ankitha and Pranav.',
      highlights: [
        'Scenic outdoor pre-wedding session',
        'Fine-art natural lighting',
        'Unscripted, spontaneous laughter',
        'Bespoke cinematic engagement teaser'
      ]
    },
    {
      id: 'srijasaiesh',
      title: 'Srija & Saiesh',
      slug: 'srijasaiesh',
      category: 'Destination Wedding',
      image: '/assets/snapstories/portfolio-srija-saiesh.jpg',
      alt: 'Srija & Saiesh Wedding Story by SnapStories',
      storyDescription:
        'Grand destination wedding festivities uniting generations together in an atmosphere of warmth, sacred rituals, and deep emotional resonance.',
      highlights: [
        'Multi-day destination coverage',
        'Royal heritage venue backdrop',
        'Intimate quiet moments between the couple',
        'Cinematic feature wedding film'
      ]
    },
    {
      id: 'ruthgeoffrey',
      title: 'Ruth & Geoffrey',
      slug: 'ruthgeoffrey',
      category: 'Contemporary Wedding',
      image: '/assets/snapstories/portfolio-ruth-geoffrey.jpg',
      alt: 'Ruth & Geoffrey Wedding Day Frames by SnapStories',
      storyDescription:
        'Elegant, heartfelt celebrations surrounded by close friends and parents, immortalizing genuine laughter and unhurried emotional exchanges.',
      highlights: [
        'Contemporary bridal elegance',
        'Emotional vows & family blessings',
        'Natural candid documentary coverage',
        'Heirloom editorial album curation'
      ]
    },
    {
      id: 'sanikajasdeep',
      title: 'Sanika & Jasdeep',
      slug: 'sanikajasdeep',
      category: 'Multicultural Celebration',
      image: '/assets/snapstories/portfolio-sanika-jasdeep.jpg',
      alt: 'Sanika & Jasdeep Wedding Moments by SnapStories',
      storyDescription:
        'A high-spirited wedding filled with authentic culture, radiant smiles, soulful ceremonies, and unforgettable celebration energy.',
      highlights: [
        'Anand Karaj & vibrant festivities',
        'Dynamic family dance and sangeet coverage',
        'Thoughtful portraits with timeless depth',
        'Full 4K Ultra-HD cinematography'
      ]
    },
    {
      id: 'snehanikhil',
      title: 'Sneha & Nikhil',
      slug: 'snehanikhil',
      category: 'Candid Wedding Stories',
      image: '/assets/snapstories/portfolio-sneha-nikhil.jpg',
      alt: 'Sneha & Nikhil Wedding Portraits by SnapStories',
      storyDescription:
        'A celebration centered around togetherness, honoring the parents’ tears, the laughter between lifelong friends, and quiet moments that matter decades later.',
      highlights: [
        'Soulful emotional candid frames',
        'Artistic black & white and warm color tones',
        'Story-driven visual arrangement',
        'Preserving memories to last forever'
      ]
    }
  ],

  about: {
    heading: 'About SnapStories',
    paragraphs: [
      'For over 15 years, SnapStories has been creating wedding photographs and films that preserve more than just moments—they preserve emotions, relationships and memories.',
      'We believe every wedding has a story that deserves to be told beautifully. The tears of a parent, the laughter between friends, generations coming together, quiet moments between the couple, and all the unscripted moments that make the celebration truly personal.',
      'Our approach goes beyond simply “covering” a wedding. We take the time to understand the couple, their families and what makes their celebration unique. Our team combines candid photography, cinematic films, thoughtful portraits and carefully curated storytelling to create memories that feel authentic, timeless and personal.',
      'For us, wedding photography is not about having the most cameras or delivering the most photographs. It is about recognising the moments that will matter decades from now.'
    ],
    closingStatement: 'Your wedding happens once. Your memories should last forever.'
  },

  contact: {
    heading: 'Contact us',
    name: 'Aniket Pawar',
    phone: '9137698195',
    fullPhone: '+91 9137698195',
    telLink: 'tel:+919137698195',
    instagramUrl: 'https://www.instagram.com/snapstories.in/',
    cinematicVideosUrl: 'https://www.snapstories.in/cinematic-videos'
  }
};
