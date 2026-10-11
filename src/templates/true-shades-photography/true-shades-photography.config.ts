export interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

export interface FeaturedPublication {
  name: string;
  image: string;
  width: number;
  height: number;
}

export interface ReviewCardItem {
  id: number;
  title: string;
  image: string;
  alt: string;
}

export interface FooterBlogItem {
  title: string;
  image: string;
  href: string;
}

export const TRUE_SHADES_PHOTOGRAPHY_CONFIG = {
  brand: {
    name: 'True Shades Photography',
    legalName: 'True Shades Photography Studio',
    tagline: 'One Of The Best Wedding Photographers In Mumbai',
    description: 'A wedding photography studio showcasing candid wedding photography, wedding films, pre-wedding shoots, and cinematic memories.',
    specialization: 'Wedding Photography, Candid Photography, Wedding Films, Pre-Wedding Photography and Pre-Wedding Films',
    originalUrl: 'https://trueshadesphotography.com/',
    contact: {
      address: '1105, Crescent Royale, Opp VIP Plaza, Off New Link Road, Andheri west, Mumbai 400053. India',
      phone: '+919920144211',
      displayPhone: '+91 9920144211',
      email: 'info@trueshadesphotography.com',
      whatsapp: 'https://api.whatsapp.com/send/?phone=919920144211&text=Hello%20True%20Shades%20Photography,%20I%20would%20like%20to%20inquire%20about%20wedding%20photography%20services&type=phone_number&app_absent=0'
    },
    socialLinks: {
      facebook: 'https://www.facebook.com/TrueShadesPhotography/',
      instagram: 'https://www.instagram.com/true.shades.photography/',
      vimeo: 'https://vimeo.com/trueshadesphotography',
      pinterest: 'https://in.pinterest.com/trueshadesphoto',
      whatsapp: 'https://api.whatsapp.com/send/?phone=919920144211&text&type=phone_number&app_absent=0'
    },
    copyright: '© 2026 True Shades Photography. All Rights Reserved.'
  },

  assets: {
    logo: '/assets/true-shades-photography/logo.png',
    heroWedding: '/assets/true-shades-photography/hero-wedding.jpg',
    redBgPaint: '/assets/true-shades-photography/red-bg-paint.png',
    lights: '/assets/true-shades-photography/lights.png',
    cameraIcon: '/assets/true-shades-photography/camera-icon.png',
    videoCameraLeft: '/assets/true-shades-photography/video-camera-icon.png',
    videoCameraRight: '/assets/true-shades-photography/video-camera-icon-2.png',
    favicon: '/assets/true-shades-photography/logo.png'
  },

  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'About us', href: '#about-us' },
    {
      label: 'Our Work',
      href: '#our-work',
      dropdown: [
        { label: 'Wedding Photography', href: '#wedding-photography' },
        { label: 'Wedding Films', href: '#wedding-films' },
        { label: 'Pre Wedding Photography', href: '#pre-wedding-photography' },
        { label: 'Pre Wedding Films', href: '#pre-wedding-films' }
      ]
    },
    { label: 'Wedding Photography', href: '#wedding-photography' },
    { label: 'Wedding Films', href: '#wedding-films' },
    { label: 'Pre Wedding Photography', href: '#pre-wedding-photography' },
    { label: 'Pre Wedding Films', href: '#pre-wedding-films' },
    { label: 'Reviews', href: '#client-reviews' },
    { label: 'Blogs', href: '#blogs' },
    { label: 'Contact us', href: '#contact' }
  ],

  heroSlides: [
    {
      id: 1,
      image: '/assets/true-shades-photography/hero-wedding.jpg',
      alt: 'True Shades Photography - Wedding Couple in Mumbai'
    },
    {
      id: 2,
      image: '/assets/true-shades-photography/hero-wedding.jpg',
      alt: 'True Shades Photography - Candid Moments'
    },
    {
      id: 3,
      image: '/assets/true-shades-photography/hero-wedding.jpg',
      alt: 'True Shades Photography - Wedding Films'
    },
    {
      id: 4,
      image: '/assets/true-shades-photography/hero-wedding.jpg',
      alt: 'True Shades Photography - Pre-Wedding Shoots'
    },
    {
      id: 5,
      image: '/assets/true-shades-photography/hero-wedding.jpg',
      alt: 'True Shades Photography - Destination Weddings'
    }
  ],

  intro: {
    heading: 'One Of The Best Wedding Photographers In Mumbai',
    description:
      'With an array of photographic and related services, True Shades Photography has grown into one of the best wedding photographers in Mumbai. The fusion of human emotions with their own different hues captured in pixels makes up True Shades Photography.',
    ctaPrimary: 'Photography',
    ctaSecondary: 'Films'
  },

  featuredPublications: [
    {
      name: 'Times of India',
      image: '/assets/true-shades-photography/featured-times-of-india.png',
      width: 230,
      height: 70
    },
    {
      name: 'WeddingSutra',
      image: '/assets/true-shades-photography/featured-weddingsutra.png',
      width: 245,
      height: 70
    },
    {
      name: 'Hindustan Times',
      image: '/assets/true-shades-photography/featured-hindustan-times.png',
      width: 235,
      height: 70
    },
    {
      name: 'Mid-Day',
      image: '/assets/true-shades-photography/featured-mid-day.png',
      width: 235,
      height: 70
    },
    {
      name: 'The Big Fat Indian Wedding',
      image: '/assets/true-shades-photography/featured-big-fat-indian-wedding.png',
      width: 215,
      height: 70
    }
  ],

  aboutIntro: {
    heading: 'We are One Of the Best Wedding Photographers in Mumbai',
    paragraphs: [
      'We are one of the Best Wedding Photographers in Mumbai! Events such as weddings are about traditions and rituals, about momentous moments, about journeys of discovery and about new relationships. To cement all of that together you need something strong, something beautiful and something everlasting. That’s what True Shades Photography creates for you-beautiful memories that outlive time and space with our specialized Candid Photography',
      'In Mumbai, things are always happening and competition is cut-throat, but amidst it all we are there for you, providing artistically and stylistically, the joyous moments of a lifetime. Love may be in the air, but we capture that too by not missing out on those hidden glances, the subtle displays of affection, the latent nuances that emerge stealthily—oblivious to all eyes but that of our camera!'
    ]
  },

  candidSection: {
    heading: 'Candid Photographer speak Volumes!',
    paragraphs: [
      'A peep into our work on Candid Photography by our Candid Photographers will show you how stimulating we can be and why we chose True Shades Photography as our signature. We understand the meaning of business success and know what it takes to get there.',
      "For all practical purposes we may be photographers, but we believe that it's an art that goes beyond the mere technicalities. It's a passion for us and each photograph is a commitment towards excellence.",
      'Reviews from our clients further proves our claim of being One Of The Best Wedding Photographers in Mumbai',
      "Dynamism, diligence and perfection, you may say, are our middle names—so if you do need to pep up your special day, do reach out to us. If you're in Mumbai, we'll make your special day extraordinary for you—through the color and romance of our candid photography services.",
      'Post processing also plays a virtual part in making us One Of The Best Wedding Photographers In Mumbai',
      'Your satisfaction is our yardstick and our wedding photography will way exceed your expectations. We lay claim as One Of The Best Wedding Photographers in Mumbai has had in decades and every event we shoot takes us a few notches higher.'
    ]
  },

  reviews: [
    {
      id: 2,
      title: 'Client Review 1',
      image: '/assets/true-shades-photography/review-2.jpg',
      alt: 'Client Review for True Shades Photography'
    },
    {
      id: 3,
      title: 'Client Review 2',
      image: '/assets/true-shades-photography/review-3.jpg',
      alt: 'Client Review for True Shades Photography'
    },
    {
      id: 4,
      title: 'Client Review 3',
      image: '/assets/true-shades-photography/review-4.jpg',
      alt: 'Client Review for True Shades Photography'
    },
    {
      id: 5,
      title: 'Client Review 4',
      image: '/assets/true-shades-photography/review-5.jpg',
      alt: 'Client Review for True Shades Photography'
    },
    {
      id: 6,
      title: 'Client Review 5',
      image: '/assets/true-shades-photography/review-6.jpg',
      alt: 'Client Review for True Shades Photography'
    },
    {
      id: 7,
      title: 'Client Review 6',
      image: '/assets/true-shades-photography/review-7.jpg',
      alt: 'Client Review for True Shades Photography'
    }
  ],

  footerBlogs: [
    {
      title: 'Photoshoot locations in Mumbai',
      image: '/assets/true-shades-photography/footer-blog-1.webp',
      href: '#blog-photoshoot-locations-in-mumbai'
    },
    {
      title: 'Photoshoot studio in Mumbai',
      image: '/assets/true-shades-photography/footer-blog-2.webp',
      href: '#blog-photoshoot-studio-in-mumbai'
    },
    {
      title: 'Shooting studio in Mumbai',
      image: '/assets/true-shades-photography/footer-blog-3.webp',
      href: '#blog-shooting-studio-in-mumbai'
    },
    {
      title: 'Pre wedding sets in Mumbai',
      image: '/assets/true-shades-photography/footer-blog-4.jpg',
      href: '#blog-pre-wedding-sets-in-mumbai'
    }
  ]
};
