/**
 * PHOTO PHACTORY Configuration & Comprehensive Dataset
 * Raoz Demo Factory — Template #6
 * Category: Photography, Studio & Cinematography
 * Reference: https://photophactory.in/
 */

export interface MilestoneItem {
  number: number;
  suffix: string;
  label: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'wedding' | 'pre-wedding' | 'newborn' | 'portrait' | 'fashion';
  categoryLabel: string;
  subtitle: string;
  image: string;
  location: string;
  aspectRatio?: string;
}

export interface RealWeddingStory {
  id: string;
  couple: string;
  title: string;
  location: string;
  season: string;
  coverImage: string;
  galleryImages: string[];
  storyText: string;
  highlightQuotes: string;
}

export interface VideoItem {
  id: string;
  title: string;
  couple: string;
  duration: string;
  thumbnail: string;
  videoType: 'Teaser' | 'Cinematic Film' | 'Pre-Wedding Film';
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  gender: 'woman' | 'man';
  text: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  content: string[];
  image: string;
}

export const photoPhactoryConfig = {
  id: 'photo-phactory',
  numericId: 6,
  name: 'PHOTO PHACTORY',
  fullName: 'Photo Phactory — Crafting Treasures for Life',
  categoryCode: 'cat-photography',
  categoryName: 'Photography',
  subcategory: 'Photography Portfolio & Real Weddings',
  businessType: 'Boutique Wedding Photography, Cinematic Films & Portrait Studio',
  tagline: 'Crafting Treasures for Life — Real Weddings, Pre-Wedding Romance & Fine Art Cinematography',
  status: 'completed' as const,
  entryPoint: 'src/templates/photo-phactory/PhotoPhactory.tsx',
  assetDirectory: 'public/assets/photo-phactory/',
  dependencies: ['lucide-react', 'react', 'motion'],
  originalUrl: 'https://photophactory.in/',

  placeholders: {
    brandName: 'Photo Phactory',
    tagline: 'Crafting Treasures for Life',
    leadPhotographers: 'Vishal & Bunty',
    phone: '+91 9819599054',
    email: 'connectphotophactory@gmail.com',
    studioLocation: 'Mumbai & Available Worldwide',
    facebookUrl: 'https://www.facebook.com/photophactory.co/',
    instagramUrl: 'https://www.instagram.com/photophactory_by_vishal/',
    yearsExperience: '10+',
    clientsServed: '250+',
    projectsCompleted: '350+',
    awardsWon: '5+'
  },

  theme: {
    darkBg: '#000000',
    lightBg: '#FFFFFF',
    textMain: '#000000',
    textMuted: '#666666',
    accentGreen: '#6DA716',
    accentGreenHover: '#275304',
    borderLight: '#EEEEEE',
    borderDark: '#222222',
    fontHeading: "'Georgia', serif",
    fontBody: "'Open Sans', sans-serif"
  },

  slides: [
    {
      id: 1,
      title: 'Crafting Treasures for Life',
      subtitle: 'Capturing Unscripted Chemistry & Royal Elegance',
      image: '/assets/photo-phactory/slide-1.svg',
      tag: 'Fine Art Wedding Photography'
    },
    {
      id: 2,
      title: 'The Art of Everyday Love',
      subtitle: 'Fleeting Beauty in Those In-Between Moments',
      image: '/assets/photo-phactory/slide-2.svg',
      tag: 'Romantic Pre-Wedding Stories'
    },
    {
      id: 3,
      title: 'Varmala, Phere & Timeless Vows',
      subtitle: 'A Sacred Tapestry of Sacred Rituals & Joy',
      image: '/assets/photo-phactory/slide-3.svg',
      tag: 'Cinematic Royal Wedding Films'
    }
  ],

  milestones: [
    { number: 10, suffix: '+', label: 'YEARS' },
    { number: 250, suffix: '+', label: 'CLIENTS' },
    { number: 350, suffix: '+', label: 'PROJECTS' },
    { number: 5, suffix: '+', label: 'AWARDS' }
  ] as MilestoneItem[],

  quoteSection: {
    eyebrow: 'THIN. LIGHT. EPIC.',
    heading: 'Start Something New',
    description: 'I appreciate the raw reality of everyday life, the fleeting beauty of those in-between moments, and I do my very best to take every picture with that in mind. I want my viewers to relate to my photographs through recognition of and familiarity with the situations.',
    ctaButton: 'SHOW MY WORKS',
    bgImage: '/assets/photo-phactory/home-bg1.svg'
  },

  testimonials: [
    {
      id: 'test-1',
      name: 'Rakhi Sehgal',
      avatar: '/assets/photo-phactory/slide-2.svg',
      gender: 'woman',
      text: 'Our daughter was so apprehensive of having her photo taken but our photographer Bunty was brilliant. He was very patient and encouraged her to help him to take her pictures.'
    },
    {
      id: 'test-2',
      name: 'Dhruv Mehta',
      avatar: '/assets/photo-phactory/slide-1.svg',
      gender: 'man',
      text: 'We are grateful to have these photos clicked from Photo Phactory. You’ll have captured our new born Joy in such an authentic, pure way. They are magical testimony to our hopes and new life as a family.'
    },
    {
      id: 'test-3',
      name: 'Ray Fernandes',
      avatar: '/assets/photo-phactory/slide-3.svg',
      gender: 'man',
      text: 'Your wedding day is a very unique day. It goes by ridiculously quickly and it is filled with so many once in a million moments that it is impossible to remember all of them, that is unless you have Bunty & Vishal as your photographer!'
    }
  ] as Testimonial[],

  aboutUs: {
    heroHeading: 'WE TURN EMOTIONS INTO TREASURES',
    leadParagraph: 'Photo Phactory was founded on the philosophy that genuine human connection cannot be manufactured. Lead by visual storytellers Vishal & Bunty, our studio operates quietly, observing the candid gestures, happy tears, and fleeting warmth that make your celebrations truly your own.',
    philosophyPoints: [
      {
        title: 'Candid & Natural Perspective',
        text: 'We do not command or disrupt your rituals. We blend seamlessly into the celebrations so you and your loved ones can remain fully immersed.'
      },
      {
        title: 'Timeless Fine-Art Color Science',
        text: 'We eschew fleeting social media presets in favor of rich, true-to-life tones, natural skin textures, and balanced shadows.'
      },
      {
        title: 'Worldwide Storytelling Footprint',
        text: 'From coastal beach weddings in Alibaug and Goa to palace galas in Rajasthan, we travel globally with lightweight, top-tier cinema equipment.'
      }
    ]
  },

  portfolio: [
    {
      id: 'port-1',
      title: 'Meera & Siddharth',
      subtitle: 'A Royal Heritage Wedding at Samode Palace',
      category: 'wedding',
      categoryLabel: 'Wedding',
      image: '/assets/photo-phactory/slide-1.svg',
      location: 'Jaipur, Rajasthan'
    },
    {
      id: 'port-2',
      title: 'Ananya & Kabir',
      subtitle: 'Sunset Shores Romance on the Beaches of South Goa',
      category: 'pre-wedding',
      categoryLabel: 'Pre-Wedding',
      image: '/assets/photo-phactory/slide-2.svg',
      location: 'Goa'
    },
    {
      id: 'port-3',
      title: 'Devika & Tushar',
      subtitle: 'Sacred Vows by the Ghats of Rishikesh',
      category: 'wedding',
      categoryLabel: 'Wedding',
      image: '/assets/photo-phactory/slide-3.svg',
      location: 'Rishikesh, Uttarakhand'
    },
    {
      id: 'port-4',
      title: 'Little Aarya — Pure Joy',
      subtitle: 'Authentic Newborn Portraiture',
      category: 'newborn',
      categoryLabel: 'Maternity & Newborn',
      image: '/assets/photo-phactory/slide-1.svg',
      location: 'Mumbai'
    },
    {
      id: 'port-5',
      title: 'Rhea & Shaurya',
      subtitle: 'Vibrant Sangeet & Lantern Night',
      category: 'wedding',
      categoryLabel: 'Wedding',
      image: '/assets/photo-phactory/slide-3.svg',
      location: 'Udaipur'
    },
    {
      id: 'port-6',
      title: 'Natasha — Modern Elegance',
      subtitle: 'Bridal Couture & Editorial Portraits',
      category: 'portrait',
      categoryLabel: 'Portraits & Fashion',
      image: '/assets/photo-phactory/slide-2.svg',
      location: 'South Mumbai'
    }
  ] as PortfolioItem[],

  realWeddings: [
    {
      id: 'rw-1',
      couple: 'Meera & Siddharth',
      title: 'A Royal Heritage Celebration in Samode',
      location: 'Samode Palace, Jaipur',
      season: 'Winter 2025',
      coverImage: '/assets/photo-phactory/slide-1.svg',
      galleryImages: [
        '/assets/photo-phactory/slide-1.svg',
        '/assets/photo-phactory/slide-3.svg',
        '/assets/photo-phactory/slide-2.svg'
      ],
      storyText: 'Meera and Siddharth wanted their wedding to feel like an intimate family reunion despite the grand 16th-century palace surroundings. Vishal & Bunty spent three days with them, documenting everything from the midnight antakshari on the haveli terrace to the tearful vidaai as the morning mist rolled over the Aravalli hills.',
      highlightQuotes: 'Vishal & Bunty did not feel like vendors; they felt like brothers capturing our closest moments.'
    },
    {
      id: 'rw-2',
      couple: 'Rhea & Shaurya',
      title: 'Sunset Beach Vows and Starlit Sangeet',
      location: 'Benaulim Beach, South Goa',
      season: 'Spring 2026',
      coverImage: '/assets/photo-phactory/slide-2.svg',
      galleryImages: [
        '/assets/photo-phactory/slide-2.svg',
        '/assets/photo-phactory/slide-1.svg',
        '/assets/photo-phactory/slide-3.svg'
      ],
      storyText: 'Barefoot on the white sands of Goa with 80 of their closest friends. A ceremony orchestrated around the natural golden hour tide, followed by an electrifying cocktail party under hundreds of fairy-lit palm trees.',
      highlightQuotes: 'The photos look like paintings hung in an art gallery. Totally unscripted.'
    },
    {
      id: 'rw-3',
      couple: 'Devika & Tushar',
      title: 'Ganga Kinare — Spiritual Union in the Foothills',
      location: 'Rishikesh, Uttarakhand',
      season: 'Autumn 2025',
      coverImage: '/assets/photo-phactory/slide-3.svg',
      galleryImages: [
        '/assets/photo-phactory/slide-3.svg',
        '/assets/photo-phactory/slide-2.svg',
        '/assets/photo-phactory/slide-1.svg'
      ],
      storyText: 'With the holy Ganges flowing beside their mandap, Devika and Tushar tied the knot with traditional Vedic chants echoing through the valley. Our team focused on the serene quietude of the ceremony and acoustic campfire jams at night.',
      highlightQuotes: 'They preserved the sacred sanctity of our phere without blinding lights or intrusive cameras.'
    }
  ] as RealWeddingStory[],

  videos: [
    {
      id: 'vid-1',
      title: 'Meera & Siddharth — When Forever Began',
      couple: 'Meera & Siddharth',
      duration: '4:15',
      thumbnail: '/assets/photo-phactory/slide-1.svg',
      videoType: 'Cinematic Film',
      description: 'A 4K cinematic wedding trailer filmed across the historic courtyard of Samode Palace with recorded acoustic vows and drone fly-throughs.'
    },
    {
      id: 'vid-2',
      title: 'Rhea & Shaurya — Saltwater & Stars',
      couple: 'Rhea & Shaurya',
      duration: '3:45',
      thumbnail: '/assets/photo-phactory/slide-2.svg',
      videoType: 'Teaser',
      description: 'A breezy, sun-drenched teaser capturing the tropical joy of a coastal destination wedding in South Goa.'
    },
    {
      id: 'vid-3',
      title: 'Devika & Tushar — Sacred Whispers in Rishikesh',
      couple: 'Devika & Tushar',
      duration: '5:20',
      thumbnail: '/assets/photo-phactory/slide-3.svg',
      videoType: 'Pre-Wedding Film',
      description: 'An ethereal pre-wedding journey along the riverbanks, suspension bridges, and forested foothills of the Himalayas.'
    }
  ] as VideoItem[],

  blogPosts: [
    {
      id: 'post-1',
      title: 'Why Real Moments Trump Posed Photos at Modern Indian Weddings',
      slug: 'why-real-moments-trump-posed-photos',
      date: 'October 2025',
      author: 'Vishal (Photo Phactory)',
      category: 'Photography Insights',
      excerpt: 'Stiff group photos are fading into the background. Here is how modern couples are embracing spontaneous laughter and emotional intimacy.',
      content: [
        'When you look back at your wedding album 20 years from now, you will not remember who stood on your left on stage. You will remember your grandmother laughing uncontrollably during the sangeet, or the quiet tear your partner wiped away during the pheras.',
        'At Photo Phactory, we believe our duty is not to manufacture perfection, but to witness reality with artistry.',
        'Here are our top tips for brides and grooms on how to relax, forget the lens, and let authentic moments shine through.'
      ],
      image: '/assets/photo-phactory/slide-1.svg'
    },
    {
      id: 'post-2',
      title: 'Planning a Pre-Wedding Shoot: Best Timing, Outfits, & Locations',
      slug: 'planning-a-pre-wedding-shoot',
      date: 'September 2025',
      author: 'Bunty (Photo Phactory)',
      category: 'Guides for Couples',
      excerpt: 'Everything you need to know before packing your bags for a pre-wedding shoot—from choosing comfortable wardrobe textures to scheduling around golden hour.',
      content: [
        'A pre-wedding shoot is not just a photo session; it is a date where you get to spend uninterrupted hours together while becoming completely comfortable with your photographer.',
        'Select outfits that let you move freely. Flowing silks, linen shirts, and comfortable footwear always beat rigid three-piece suits on a windy beach.',
        'Always trust your photographer to schedule the key portraits during the first 45 minutes of sunrise or the final hour of sunset.'
      ],
      image: '/assets/photo-phactory/slide-2.svg'
    }
  ] as BlogPost[],

  contactInfo: {
    address: 'Mumbai, Maharashtra, India — Available for Destination Shoots Worldwide',
    phone: '+91 9819599054',
    email: 'connectphotophactory@gmail.com',
    timing: 'Monday to Sunday, 10:00 AM – 8:00 PM',
    whatsappUrl: 'https://api.whatsapp.com/send?phone=919819599054'
  }
};
