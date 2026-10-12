export interface HeroSlide {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  dimensions?: string;
  description?: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  couple?: string;
  location?: string;
  hashtags: string[];
}

export interface PhotographyGenre {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  subgenres?: Array<{
    title: string;
    description: string;
    images?: string[];
  }>;
  featuredImages: string[];
  ctaLabel?: string;
}

export interface PortfolioWorkItem {
  id: string;
  title: string;
  category: 'all' | 'architecture' | 'wedding' | 'kids' | 'products' | 'food' | 'jewelry' | 'heritage' | 'hotels';
  categoryLabel: string;
  image: string;
  location?: string;
  description: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export const NIKHIL_KAPUR_CONFIG = {
  brand: {
    name: 'Nikhil Kapur Photography',
    shortName: 'Nikhil Kapur',
    logo: '/assets/nikhil-kapur-photography/logo.png',
    favicon: '/assets/nikhil-kapur-photography/favicon.ico',
    introHeadline: 'About Me',
    tagline: 'Candid Photographer. Filmmaker. Storyteller. Lover of dark chocolate with a side of good stories.',
    location: 'Currently residing in Mumbai, India.',
    experienceYears: '10+',
    phone: '+919820026166',
    phoneFormatted: '+91 98200 26166',
    email: 'nikhilkapur@gmail.com',
    originalUrl: 'https://www.nikhilkapur.com/',
    social: {
      facebook: 'https://www.facebook.com/nikhilkapurphotography',
      instagram: 'http://instagram.com/nikhilkapur'
    }
  },

  navigation: [
    {
      label: 'Photography',
      path: '/photography',
      isFolder: true,
      children: [
        { label: 'Architecture', path: '/architecture', id: 'architecture' },
        { label: 'Wedding', path: '/wedding', id: 'wedding' },
        { label: 'Kids', path: '/kids', id: 'kids' },
        { label: 'Products', path: '/products', id: 'products' },
        { label: 'Candid', path: '/candidphotography', id: 'candidphotography' },
        { label: 'Pre-Wedding', path: '/preweddingphotography', id: 'preweddingphotography' }
      ]
    },
    {
      label: 'Films',
      path: '/films',
      isFolder: true,
      children: [
        { label: 'Wedding Films', path: '/wedding-films', id: 'wedding-films' },
        { label: 'PhotoFlow', path: '/photoflow', id: 'photoflow' },
        { label: 'Sulafest', path: '/sulafest', id: 'sulafest' }
      ]
    },
    { label: 'Books', path: '/books', isFolder: false, id: 'books' },
    { label: 'Photo Albums', path: '/albums', isFolder: false, id: 'albums' },
    { label: 'Mini Klone™', path: '/mini-klone', isFolder: false, id: 'mini-klone' },
    { label: 'Aerial', path: '/aerial', isFolder: false, id: 'aerial' },
    { label: 'Blog', path: '/blog', isFolder: false, id: 'blog' },
    { label: 'Editorial', path: '/editorial', isFolder: false, id: 'editorial' },
    { label: 'About', path: '/about', isFolder: false, id: 'about' },
    { label: 'Contact', path: '/contact', isFolder: false, id: 'contact' }
  ],

  heroSlides: [
    {
      id: 'slide-1',
      title: 'Udaipur Palace & Water Reflections',
      category: 'Heritage & Architecture',
      image: '/assets/nikhil-kapur-photography/hero-udaipur-palace.jpg',
      alt: 'Udaipur palace historic architecture reflected in shimmering waters',
      dimensions: '1732x1155',
      description: 'Timeless architectural grandeur framed through serene aquatic symmetry in Rajasthan.'
    },
    {
      id: 'slide-2',
      title: 'Luxury Hotel Sanctuary',
      category: 'Hotel Photography',
      image: '/assets/nikhil-kapur-photography/hero-luxury-hotel-3.jpg',
      alt: 'Luxury boutique hotel ambient interior design in India',
      dimensions: '1225x817',
      description: 'Curating spaces where warm natural textures and architectural volumes whisper quiet indulgence.'
    },
    {
      id: 'slide-3',
      title: 'Monumental Heritage Columnar Hall',
      category: 'Heritage Architecture',
      image: '/assets/nikhil-kapur-photography/hero-heritage-arch-1.jpg',
      alt: 'Monumental Indian heritage sandstone architecture corridor',
      dimensions: '1224x817',
      description: 'Stories etched in carved stone that speak of antiquity and timeless craftsmanship.'
    },
    {
      id: 'slide-4',
      title: 'Monolithic Stone Archways',
      category: 'Heritage Photography',
      image: '/assets/nikhil-kapur-photography/hero-heritage-arch-2.jpg',
      alt: 'Heritage architecture dramatic arches and shadow play',
      dimensions: '1333x750',
      description: 'Dramatic chiaroscuro through rhythmic arches of historic Indian monuments.'
    },
    {
      id: 'slide-5',
      title: 'Contemporary Luxury Residence',
      category: 'Homes & Architecture',
      image: '/assets/nikhil-kapur-photography/hero-home-arch-1.jpg',
      alt: 'Modern residential interior and exterior architectural perspective',
      dimensions: '1333x750',
      description: 'Translating living spaces into an emotional visual narrative of belonging and light.'
    },
    {
      id: 'slide-6',
      title: 'Pashmeena & Amol — Intimate Radiance',
      category: 'Wedding Photography',
      image: '/assets/nikhil-kapur-photography/hero-wedding-couple-1.jpg',
      alt: 'Pashmeena & Amol intimate couple portrait at destination wedding',
      dimensions: '1000x667',
      description: 'Candid intimacy captured behind the curtain, preserving genuine warmth.'
    },
    {
      id: 'slide-7',
      title: 'Regal Bridal Silhouette',
      category: 'Candid Wedding',
      image: '/assets/nikhil-kapur-photography/hero-wedding-portrait-vertical.jpg',
      alt: 'Exquisite bridal portraiture in traditional attire',
      dimensions: '2500x3750',
      description: 'Delicate, graceful affairs preserved in their most honest, soulful expressions.'
    },
    {
      id: 'slide-8',
      title: 'Day 4 — Pure Celebration Euphoria',
      category: 'Wedding Celebrations',
      image: '/assets/nikhil-kapur-photography/hero-wedding-celebration.jpg',
      alt: 'Joyful celebration moment surrounded by family and friends',
      dimensions: '1200x800',
      description: 'Unrehearsed emotional manifestations of joy, togetherness, and dance.'
    },
    {
      id: 'slide-9',
      title: 'Heritage Courtyard Twilight',
      category: 'Hotels & Heritage',
      image: '/assets/nikhil-kapur-photography/hero-luxury-hotel-2.jpg',
      alt: 'Luxury heritage hotel illuminated courtyard under evening skies',
      dimensions: '1225x816',
      description: 'Atmosphere that does all the talking under the subtle hues of twilight.'
    }
  ] as HeroSlide[],

  instagramStories: [
    {
      id: 'insta-1',
      image: '/assets/nikhil-kapur-photography/insta-purva-shrenik-1.jpg',
      couple: 'Purva & Shrenik',
      location: 'Aamby Valley, India',
      caption: 'Purva & Shrenik | Aamby Valley, India | Emotional vows and heartfelt beginnings.',
      hashtags: ['#shaadiography', '#weddingfables', '#bridelove', '#weddingrituals', '#weddingsofindia']
    },
    {
      id: 'insta-2',
      image: '/assets/nikhil-kapur-photography/insta-purva-shrenik-2.jpg',
      couple: 'Purva & Shrenik',
      location: 'Aamby Valley, India',
      caption: 'The golden hour portraits of Purva & Shrenik against misty hillside peaks.',
      hashtags: ['#weddinginspiration', '#allaboutweddings', '#weddingwireindia', '#shaadisaga', '#portraits']
    },
    {
      id: 'insta-3',
      image: '/assets/nikhil-kapur-photography/insta-purva-shrenik-3.jpg',
      couple: 'Purva & Shrenik',
      location: 'Aamby Valley, India',
      caption: 'Sacred blessings and unconditional smiles under the floral canopy.',
      hashtags: ['#indianbride', '#candidphotography', '#weddingmoments', '#realweddings']
    },
    {
      id: 'insta-4',
      image: '/assets/nikhil-kapur-photography/insta-anahita-shisher-1.jpg',
      couple: 'Anahita & Shisher',
      location: 'Hunter Valley, Australia',
      caption: 'Anahita & Shisher | Hunter Valley, Australia | Dream destination vineyard wedding ceremony.',
      hashtags: ['#dreamweddings', '#weddingphotography', '#australia', '#destinationweddings', '#huntervalley']
    },
    {
      id: 'insta-5',
      image: '/assets/nikhil-kapur-photography/insta-anahita-shisher-2.jpg',
      couple: 'Anahita & Shisher',
      location: 'Hunter Valley, Australia',
      caption: 'Laughter echoing across sprawling Australian vineyards as sunset kisses the horizon.',
      hashtags: ['#loveauthentic', '#weddingceremony', '#bridebook', '#destinationcouple']
    },
    {
      id: 'insta-6',
      image: '/assets/nikhil-kapur-photography/insta-anahita-shisher-3.jpg',
      couple: 'Anahita & Shisher',
      location: 'Hunter Valley, Australia',
      caption: 'Unscripted candid glances that will carry memories for decades to come.',
      hashtags: ['#candidphotographer', '#mumbaiphotographer', '#huntervalleywedding']
    },
    {
      id: 'insta-7',
      image: '/assets/nikhil-kapur-photography/insta-sarath-vrinda-1.jpg',
      couple: 'Sarath & Vrinda',
      location: 'Chennai & Punjab Inter-cultural',
      caption: 'Only love can unite people from different walks of life. In capture, my Tamilian boy Sarath and Punjabi girl Vrinda.',
      hashtags: ['#bridesofkapur', '#groomsofkapur', '#southasianbride', '#tamiliangroom', '#punjabibride']
    },
    {
      id: 'insta-8',
      image: '/assets/nikhil-kapur-photography/insta-vrinda-bridal.jpg',
      couple: 'Vrinda (Bridal)',
      location: 'Chennai, India',
      caption: 'My bride Vrinda escorted by her dearest friends and family members with pure grace.',
      hashtags: ['#bridalportrait', '#indianwedding', '#portraitphotography', '#tamilianbride', '#luxuryweddings']
    },
    {
      id: 'insta-9',
      image: '/assets/nikhil-kapur-photography/insta-sarath-groom-swag.jpg',
      couple: 'Sarath (Groom Entry)',
      location: 'Chennai, India',
      caption: 'My Tamilian boy Sarath making an entry with unmistakable swag and infectious energy.',
      hashtags: ['#groomswag', '#groomsofkapur', '#groomsmen', '#indianweddingseason', '#groomstyle']
    }
  ] as InstagramPost[],

  editorialSections: [
    {
      id: 'artist-philosophy',
      title: 'Best Photographer in Mumbai to Connect With',
      description: `A photographer will chant the story you might fail to put in words. It is the urge to capture, create, and deliver that evolves the thriving artist inside every photographer. The beauty in photography is unapologeticaly unconventional and therefore, every photograph is a round-trip ticket to the moment otherwise gone!

To trust someone to capture that one moment in a lifetime is a dire and daring situation. Your future joy and jar of memories that you will relive through that one photograph solely depends on that trusted someone: your photographer. Nikhil Kapur photography, over the course of the past 10 years has built a heart to heart connection with everything the lens has ever captured. With the beauty of this connectivity comes the trust, a sense of responsibility, a vision as well as spiritual happiness. Nikhil Kapur is considerably one the Best photographer in Mumbai and holds a keen interest in various photography genres such as Product photography, Lifestyle photography, pre-wedding photography, etc. Here’s an elaborate scoop on our prowess:`
    },
    {
      id: 'product-photography',
      title: 'Consumer Pleasure: Product Photography',
      description: `The photographer’s purpose is to present a product in the best viable photographic representation. In the digital world, Product photography is the first and foremost stage of consumer engagement. Our ultimate intention is to lay a ground for the viewer to connect with the product. With the varying techniques, every genre of photography has a definitive goal for a photographer to recognize and achieve.`,
      subgenres: [
        {
          title: 'Food Photography',
          description: `Food is a universal experience and photography is the essence of altering life by holding it still. Food and photography put together is a challenging yet artistic portrayal. We at Nikhil Kapur Photography idealize capturing every minute detail on the plate to teleport the texture, smell, even the taste through our photographs. We are hellbent on seducing your taste buds as well as your eyes - Oh! What a wholesome treat!`,
          images: [
            '/assets/nikhil-kapur-photography/food-1.jpg',
            '/assets/nikhil-kapur-photography/food-2.jpg',
            '/assets/nikhil-kapur-photography/food-3.jpg',
            '/assets/nikhil-kapur-photography/food-4.jpg'
          ]
        },
        {
          title: 'Jewelry Photography',
          description: `Jewelry photography is an exceptionally difficult process because of the jewelry’s highly-reflective properties, the stones and pieces are commonly small in size and do not appear as vibrant in the camera as they are in reality. Nikhil Kapur’s experience and expertise allows us to conquer all the stumbling blocks and delivers a paragon shot with a prime visual presentation for the viewers!`,
          images: [
            '/assets/nikhil-kapur-photography/jewelry-1.jpg',
            '/assets/nikhil-kapur-photography/jewelry-necklace-emerald.jpg',
            '/assets/nikhil-kapur-photography/jewelry-2.jpg',
            '/assets/nikhil-kapur-photography/jewelry-3.jpg'
          ]
        }
      ],
      featuredImages: [
        '/assets/nikhil-kapur-photography/product-cosmetic-1.jpg',
        '/assets/nikhil-kapur-photography/jewelry-necklace-emerald.jpg',
        '/assets/nikhil-kapur-photography/food-1.jpg'
      ]
    },
    {
      id: 'wedding-photography',
      title: 'The Big Day: Wedding Photography',
      description: `When you grow old with ‘The one’ and that one string from the many strings of love you weaved over the years is your wedding string, The Big Day. This string is a series of beautiful feelings, inner happiness, tears, realizations, and an overwhelming beginning of a journey, trapped in a photograph. You can only travel back in time through them.

Nikhil Kapur takes pride in capturing such delicate and graceful affairs and his Wedding photography strategy is inclined towards bringing out all the emotional manifestation in the atmosphere through the camera lens. Being a candid photographer in Mumbai, India, he works from behind the curtain to capture the most intimate and personal moments of the wedding, also giving total space and privacy to the family to cherish the natural essence of The Big Day.`,
      featuredImages: [
        '/assets/nikhil-kapur-photography/hero-wedding-couple-1.jpg',
        '/assets/nikhil-kapur-photography/hero-wedding-portrait-vertical.jpg',
        '/assets/nikhil-kapur-photography/hero-wedding-celebration.jpg'
      ]
    },
    {
      id: 'kids-photography',
      title: 'Godsent Mischiefs: Kids photography',
      description: `A photograph seeks purity - an honest emotion. It is a child’s heart and his/her glistening eyes that touch the deepest corners of a man’s consciousness. It’s their purity that makes your heart float and your day better and their presence that lights up your world.

Kids photography is Nikhil Kapur’s favourite photography challenge, he enjoys blending in according to the kid’s tantrums and creates a story through his lens. One-shot for this god sent mischief’s every mood! Photographing kids is an experience, a heartfelt time period that results in super beautiful memories for the kids, and him as a photographer to treasure forever.`,
      featuredImages: [
        '/assets/nikhil-kapur-photography/kids-ayra-1.jpg',
        '/assets/nikhil-kapur-photography/kids-ayra-2.jpg',
        '/assets/nikhil-kapur-photography/kids-ayra-3.jpg'
      ]
    },
    {
      id: 'architecture-photography',
      title: 'Frozen Art: Architecture Photography',
      description: `Architecture is a concept that does not have to express or speak too much to hold its ground, it’s constructed to stand tall while it’s the ‘art’ that does all the talking. A photographer is an artist who, through his art, tells a silent story louder than thunder. You can only make buildings talk when you shoot with a mindset to create and put life into barren buildings. Nikhil Kapur works with an agenda to produce a constructive series of pictorial architecture to amaze the audience with a solid narrative about the structure which otherwise is a lifeless building, be it a hotel, heritage, or a home.`,
      subgenres: [
        {
          title: 'Heritage photography',
          description: `Heritage, evidently has earnest power to help build a nation. Heritage speaks of its time and age and the soil it’s built on but yearns for timelessness. Nikhil Kapur personally has a very special place for heritage photography in his heart. He believes in taking his audience on a historic and venerable experience through his photography.`,
          images: [
            '/assets/nikhil-kapur-photography/hero-heritage-arch-1.jpg',
            '/assets/nikhil-kapur-photography/hero-heritage-arch-2.jpg',
            '/assets/nikhil-kapur-photography/hero-udaipur-palace.jpg'
          ]
        },
        {
          title: 'Homes',
          description: `A house is built in days but it transforms into a home when it’s no more a four-walled property but rather a feeling, a binding emotion. Compiling that binding emotion with Nikhil Kapur’s art of capturing the little things with bigger emotions, a home that you built with your bare hands. It will result in a joint effort that will breed magic!`,
          images: [
            '/assets/nikhil-kapur-photography/hero-home-arch-1.jpg'
          ]
        },
        {
          title: 'Hotel Photography',
          description: `Every hotel tells a story of its own, the story involves everything that the property wants to make you feel, understand, and register. Nikhil Kapur’s simple strategy is to let the atmosphere do the talking and follow the lead to acquire the best shots in his hotel photography journey.`,
          images: [
            '/assets/nikhil-kapur-photography/hero-luxury-hotel-3.jpg',
            '/assets/nikhil-kapur-photography/hero-luxury-hotel-2.jpg'
          ]
        }
      ],
      featuredImages: [
        '/assets/nikhil-kapur-photography/hero-udaipur-palace.jpg',
        '/assets/nikhil-kapur-photography/hero-luxury-hotel-3.jpg',
        '/assets/nikhil-kapur-photography/hero-home-arch-1.jpg'
      ]
    }
  ],

  portfolioItems: [
    {
      id: 'port-arch-1',
      title: 'Udaipur Palace Reflections',
      category: 'architecture',
      categoryLabel: 'Architecture & Heritage',
      image: '/assets/nikhil-kapur-photography/hero-udaipur-palace.jpg',
      location: 'Udaipur, Rajasthan',
      description: 'Historical architecture captured against mirror-still water surfaces in Rajasthan.',
      aspectRatio: 'landscape'
    },
    {
      id: 'port-hotel-1',
      title: 'Luxury Boutique Suite & Lounge',
      category: 'hotels',
      categoryLabel: 'Hotel Photography',
      image: '/assets/nikhil-kapur-photography/hero-luxury-hotel-3.jpg',
      location: 'Rajasthan, India',
      description: 'Sophisticated hospitality architectural interiors framed with natural diffused daylight.',
      aspectRatio: 'landscape'
    },
    {
      id: 'port-heritage-1',
      title: 'Sandstone Heritage Corridors',
      category: 'heritage',
      categoryLabel: 'Heritage Architecture',
      image: '/assets/nikhil-kapur-photography/hero-heritage-arch-1.jpg',
      location: 'Northern India',
      description: 'Documenting centuries of historic Indian architecture and monumental arches.',
      aspectRatio: 'landscape'
    },
    {
      id: 'port-home-1',
      title: 'Contemporary Residence Light Study',
      category: 'architecture',
      categoryLabel: 'Homes & Design',
      image: '/assets/nikhil-kapur-photography/hero-home-arch-1.jpg',
      location: 'Mumbai, India',
      description: 'Translating modern residential volumes into feeling-driven architectural visuals.',
      aspectRatio: 'landscape'
    },
    {
      id: 'port-wedding-1',
      title: 'Pashmeena & Amol — Evening Nuptials',
      category: 'wedding',
      categoryLabel: 'Wedding Photography',
      image: '/assets/nikhil-kapur-photography/hero-wedding-couple-1.jpg',
      location: 'Destination Wedding, India',
      description: 'Intimate candid moments captured from behind the curtain to preserve real emotion.',
      aspectRatio: 'landscape'
    },
    {
      id: 'port-wedding-2',
      title: 'Regal Bridal Monograph',
      category: 'wedding',
      categoryLabel: 'Bridal Portraiture',
      image: '/assets/nikhil-kapur-photography/hero-wedding-portrait-vertical.jpg',
      location: 'Mumbai, India',
      description: 'Capturing the quiet, graceful anticipation before step onto the mandap.',
      aspectRatio: 'portrait'
    },
    {
      id: 'port-wedding-3',
      title: 'Day 4 — Family Sangeet & Festivities',
      category: 'wedding',
      categoryLabel: 'Wedding Celebrations',
      image: '/assets/nikhil-kapur-photography/hero-wedding-celebration.jpg',
      location: 'Goa, India',
      description: 'Unrehearsed laughter and uninhibited celebration shared with family.',
      aspectRatio: 'landscape'
    },
    {
      id: 'port-hotel-2',
      title: 'Twilight Heritage Pool Courtyard',
      category: 'hotels',
      categoryLabel: 'Hotels & Resorts',
      image: '/assets/nikhil-kapur-photography/hero-luxury-hotel-2.jpg',
      location: 'Jaipur, India',
      description: 'Atmospheric hotel photography letting the architecture and night sky do the talking.',
      aspectRatio: 'landscape'
    },
    {
      id: 'port-food-1',
      title: 'Gastronomy Plating Detail',
      category: 'food',
      categoryLabel: 'Food Photography',
      image: '/assets/nikhil-kapur-photography/food-1.jpg',
      location: 'Fine Dining, Mumbai',
      description: 'Teleporting texture, aroma, and flavor through crisp artistic lighting.',
      aspectRatio: 'landscape'
    },
    {
      id: 'port-food-2',
      title: 'Artisanal Culinary Composition',
      category: 'food',
      categoryLabel: 'Food Photography',
      image: '/assets/nikhil-kapur-photography/food-2.jpg',
      location: 'Culinary Studio, India',
      description: 'Seducing taste buds and aesthetic sensibilities simultaneously.',
      aspectRatio: 'landscape'
    },
    {
      id: 'port-jewelry-1',
      title: 'Emerald & Diamond Masterpiece',
      category: 'jewelry',
      categoryLabel: 'Jewelry Photography',
      image: '/assets/nikhil-kapur-photography/jewelry-necklace-emerald.jpg',
      location: 'Jewellery Studio, Mumbai',
      description: 'Overcoming optical reflective challenges to present paragon gemstone brilliance.',
      aspectRatio: 'landscape'
    },
    {
      id: 'port-jewelry-2',
      title: 'High-Jewellery Gold Heritage Set',
      category: 'jewelry',
      categoryLabel: 'Jewelry Photography',
      image: '/assets/nikhil-kapur-photography/jewelry-1.jpg',
      location: 'Mumbai, India',
      description: 'Prime visual representation celebrating artisanal jewellery craftsmanship.',
      aspectRatio: 'landscape'
    },
    {
      id: 'port-product-1',
      title: 'Minimalist Cosmetic Series',
      category: 'products',
      categoryLabel: 'Product Photography',
      image: '/assets/nikhil-kapur-photography/product-cosmetic-1.jpg',
      location: 'Commercial Studio, Mumbai',
      description: 'Laying the foundation for consumer digital connection and tactile appeal.',
      aspectRatio: 'square'
    },
    {
      id: 'port-kids-1',
      title: 'Ayra — Innocent Wonder',
      category: 'kids',
      categoryLabel: 'Kids Photography',
      image: '/assets/nikhil-kapur-photography/kids-ayra-1.jpg',
      location: 'Outdoor Portraiture, India',
      description: 'Capturing the purity and sparkling eyes that touch the deepest soul.',
      aspectRatio: 'landscape'
    },
    {
      id: 'port-kids-2',
      title: 'Playful Laughter in the Park',
      category: 'kids',
      categoryLabel: 'Kids Photography',
      image: '/assets/nikhil-kapur-photography/kids-ayra-2.jpg',
      location: 'Mumbai, India',
      description: 'Blending in with a child’s tantrums and spontaneous joy to treasure forever.',
      aspectRatio: 'landscape'
    },
    {
      id: 'port-heritage-2',
      title: 'Carved Historic Arches',
      category: 'heritage',
      categoryLabel: 'Heritage Architecture',
      image: '/assets/nikhil-kapur-photography/hero-heritage-arch-2.jpg',
      location: 'Udaipur, India',
      description: 'Heritage that speaks of soil, centuries, and an unyielding yearning for timelessness.',
      aspectRatio: 'landscape'
    }
  ] as PortfolioWorkItem[]
};
