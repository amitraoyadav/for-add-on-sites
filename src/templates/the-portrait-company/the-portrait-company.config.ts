export interface PhotographyCategory {
  id: string;
  title: string;
  navTitle: string;
  slug: string;
  description: string;
  image: string;
  alt: string;
  alignment: 'left' | 'right';
  sessionSpecs: string[];
  bannerImage: string;
}

export interface PartnerBrand {
  name: string;
  logo: string;
  description: string;
}

export interface StudioPackage {
  id: string;
  name: string;
  tag: string;
  priceEstimate: string;
  duration: string;
  outfits: string;
  editedPhotos: string;
  deliverables: string[];
  popular?: boolean;
}

export interface ClientReview {
  name: string;
  role: string;
  quote: string;
  category: string;
  rating: number;
}

export const THE_PORTRAIT_COMPANY_CONFIG = {
  brand: {
    name: 'The Portrait Company',
    legalName: 'The Portrait Company Studios',
    shortName: 'TPC',
    tagline: 'Cherish Your Precious Moments',
    subTagline: 'Professional Photography Studio in Mumbai, India',
    location: 'Mumbai, Maharashtra, India',
    founded: '2016',
    studioHours: 'Mon - Sun: 10:00 AM - 8:00 PM IST',
    contact: {
      phone: '+91-9820987979',
      displayPhone: '+91-98209 87979',
      phoneSecondary: '+91-9820987878',
      email: 'shot@theportrait.company',
      whatsapp: '919820987979',
      address: 'The Portrait Company Studio, Mumbai, Maharashtra, India'
    },
    socialLinks: {
      facebook: 'https://www.facebook.com/theportraitcompany.in',
      instagram: 'https://www.instagram.com/theportraitcompany.in/',
      pinterest: 'https://in.pinterest.com/theportraitcompany/'
    },
    originalUrl: 'https://theportraitcompany.in/'
  },

  assets: {
    logo: '/assets/the-portrait-company/logo.png',
    heroCelebrity: '/assets/the-portrait-company/hero-celebrity.webp',
    heroFamily: '/assets/the-portrait-company/hero-family.jpg',
    heroCorporate: '/assets/the-portrait-company/hero-corporate.jpg',
    heroCouple: '/assets/the-portrait-company/hero-couple.jpg',
    heroKids: '/assets/the-portrait-company/hero-kids.jpg',
    heroMaternity: '/assets/the-portrait-company/hero-maternity.webp',
    heroBoudoir: '/assets/the-portrait-company/hero-boudoir.jpg',
    heroMatrimonial: '/assets/the-portrait-company/hero-matrimonial.webp',
    heroFashion: '/assets/the-portrait-company/hero-fashion.jpg',
    sectionFamily: '/assets/the-portrait-company/section-family.jpg',
    sectionCelebrity: '/assets/the-portrait-company/section-celebrity.webp',
    sectionCorporate: '/assets/the-portrait-company/section-corporate.jpg',
    sectionCouple: '/assets/the-portrait-company/section-couple.jpg',
    sectionKids: '/assets/the-portrait-company/section-kids.jpg',
    sectionFashion: '/assets/the-portrait-company/section-fashion.jpg',
    sectionMaternity: '/assets/the-portrait-company/section-maternity.jpg',
    sectionBoudoir: '/assets/the-portrait-company/section-boudoir.jpg',
    sectionMatrimonial: '/assets/the-portrait-company/section-matrimonial.png',
    partnerChitraksh: '/assets/the-portrait-company/partner-chitraksh.svg',
    partnerHomePhotography: '/assets/the-portrait-company/partner-home-photography.svg',
    partnerFashionFolio: '/assets/the-portrait-company/partner-fashion-folio.svg'
  },

  heroSlides: [
    {
      id: 'slide-celebrity',
      title: 'Celebrity Portrait Photography',
      subtitle: 'Capturing Iconic Presence & Personality',
      subject: 'Kareena Kapoor Khan at The Portrait Company Studio',
      image: '/assets/the-portrait-company/hero-celebrity.webp',
      alt: 'Celebrity portrait of Kareena Kapoor Khan photographed at The Portrait Company studio.',
      categorySlug: 'celebrity'
    },
    {
      id: 'slide-family',
      title: 'Family Portrait Photography',
      subtitle: 'Rare Celebrations of Belonging & Love',
      subject: 'Generational Studio Portraits in Mumbai',
      image: '/assets/the-portrait-company/hero-family.jpg',
      alt: 'Family portrait photography featuring parents and children posing together in a cozy indoor studio setting, captured by a professional photographer in Mumbai.',
      categorySlug: 'family'
    },
    {
      id: 'slide-corporate',
      title: 'Corporate Portrait Photography',
      subtitle: 'The New Visiting Card for Executives & Founders',
      subject: 'Tailored Leadership & Professional Headshots',
      image: '/assets/the-portrait-company/hero-corporate.jpg',
      alt: 'Professional corporate portrait of an individual dressed in formal attire, posing confidently in a studio setting of The Portrait Company in Mumbai.',
      categorySlug: 'corporate'
    },
    {
      id: 'slide-couple',
      title: 'Couple Portrait Photography',
      subtitle: 'Milestones, Memories & Renewed Connections',
      subject: 'Timeless Relationship Portraits',
      image: '/assets/the-portrait-company/hero-couple.jpg',
      alt: 'Romantic couple portrait photography in Mumbai featuring a loving pair posing closely together in an intimate indoor The Portrait Company studio setting.',
      categorySlug: 'couple'
    },
    {
      id: 'slide-kids',
      title: 'Kids Portrait Photography',
      subtitle: 'Preserving Fleeting Stages & Innocent Energies',
      subject: 'Joyful Childhood Chapters Worth Remembering',
      image: '/assets/the-portrait-company/hero-kids.jpg',
      alt: 'Adorable kids photography featuring a child smiling and posing peacefully in a bright photo studio in Mumbai.',
      categorySlug: 'kids'
    },
    {
      id: 'slide-maternity',
      title: 'Maternity Portrait Photography',
      subtitle: 'Celebrating Motherhood with Artistry & Grace',
      subject: 'Timeless Pregnancy & Parenthood Portfolios',
      image: '/assets/the-portrait-company/hero-maternity.webp',
      alt: 'Beautiful maternity photography of parents cradling her baby bump, captured love and elegance in a maternity photography studio.',
      categorySlug: 'maternity'
    },
    {
      id: 'slide-boudoir',
      title: 'Boudoir Portrait Photography',
      subtitle: 'An Intimate Memory Cherishing Body & Femininity',
      subject: 'Private, Tasteful Fine-Art Portraiture',
      image: '/assets/the-portrait-company/hero-boudoir.jpg',
      alt: 'Elegant boudoir photography showcasing a woman posing gracefully, highlighting confidence and femininity through portrait photography in Mumbai.',
      categorySlug: 'boudoir'
    },
    {
      id: 'slide-matrimonial',
      title: 'Matrimonial Portrait Photography',
      subtitle: 'Your Authentic Best Profile & Style',
      subject: 'Modern & Traditional Matchmaking Portfolios',
      image: '/assets/the-portrait-company/hero-matrimonial.webp',
      alt: 'Elegant matrimonial portrait photography features a professional photoshoot of an individual in traditional attire posing gracefully with The Portrait Company in Mumbai.',
      categorySlug: 'matrimonial'
    },
    {
      id: 'slide-fashion',
      title: 'Fashion Portrait Photography',
      subtitle: 'How You Live, Think and See the World',
      subject: 'Editorial Looks & Bold Style Statements',
      image: '/assets/the-portrait-company/hero-fashion.jpg',
      alt: 'Fashion portrait of a young woman in bold styling, photographed by The Portrait Company.',
      categorySlug: 'fashion'
    }
  ],

  categories: [
    {
      id: 'family',
      title: 'Family Portrait Photography',
      navTitle: 'Family',
      slug: 'family-portrait-photography',
      description: 'In today’s busy lives, a family portrait photography becomes a rare day of celebration. A moment when everyone comes together, at one place, at one time. As photographers in Mumbai, we believe family photoshoot is not just about pictures but about togetherness captured through portrait photography.',
      image: '/assets/the-portrait-company/section-family.jpg',
      alt: 'family portrait photography featuring parents and children posing together in a cozy indoor studio setting, captured by a professional photographer in Mumbai.',
      alignment: 'left',
      sessionSpecs: [
        'Multi-generational family groupings & individual pairings',
        'Warm, inviting, relaxed indoor studio environment',
        'Archival heirloom print and album guidance',
        'Special styling coordination support for wardrobe harmony'
      ],
      bannerImage: '/assets/the-portrait-company/hero-family.jpg'
    },
    {
      id: 'celebrity',
      title: 'Celebrity Portrait Photography',
      navTitle: 'Celebrity',
      slug: 'celebrity-portrait-photography',
      description: 'At the portrait studio, we bring years of experience in celebrity portrait photography, working closely with highly talented individuals. As a trusted photo studio in Mumbai, we focus on understanding personality, mood and intent, creating images that go beyond appearance to elevate personal presence and brand establishment.',
      image: '/assets/the-portrait-company/section-celebrity.webp',
      alt: 'Celebrity portrait of Kareena Kapoor Khan photographed at The Portrait Company studio.',
      alignment: 'right',
      sessionSpecs: [
        'Editorial magazine-cover studio lighting setups',
        'Intimate understanding of mood, intent, and brand image',
        'Photographed stars like Kareena Kapoor Khan, Gauhar Khan, Carol Gracias, Rashmi Desai, Tushar Kapoor',
        'Strict confidentiality and VIP hospitality green rooms'
      ],
      bannerImage: '/assets/the-portrait-company/hero-celebrity.webp'
    },
    {
      id: 'corporate',
      title: 'Corporate Portrait Photography',
      navTitle: 'Corporate',
      slug: 'corporate-portrait-photography',
      description: 'In today’s world, corporate portraits are the new visiting cards. Corporate portrait photography speaks of your profession, personality and persistence. At our photo studio in ‘Mumbai, we create tailored headshots portraits for every role, from serious authoritative looks for lawyer to warm, welcoming expressions for HR professionals.',
      image: '/assets/the-portrait-company/section-corporate.jpg',
      alt: 'Professional corporate portrait of an individual dressed in formal attire, posing confidently in a studio setting of The Portrait Company in Mumbai.',
      alignment: 'left',
      sessionSpecs: [
        'Executive LinkedIn, board bio, and annual report portraits',
        'Specialized expression coaching tailored to industry role',
        'Multi-crop deliverables for print, digital, and PR press releases',
        'Corporate on-site mobile studio setups available for teams'
      ],
      bannerImage: '/assets/the-portrait-company/hero-corporate.jpg'
    },
    {
      id: 'couple',
      title: 'Couple Portrait Photography',
      navTitle: 'Couple',
      slug: 'couple-portrait-photography',
      description: 'Not every love story needs a pre wedding shoot. Couple portrait photography is for those who choose to celebrate their journey later with milestones, memories and renewed connections. At our photo studio in Mumbai, we understand age, timelines and evolving relationships, creating portraits that feel honest, meaningful and deeply personal.',
      image: '/assets/the-portrait-company/section-couple.jpg',
      alt: 'Romantic couple portrait photography in Mumbai featuring a loving pair posing closely together in an intimate indoor The Portrait Company studio setting.',
      alignment: 'right',
      sessionSpecs: [
        'Celebrating milestones, anniversaries, and enduring bonds',
        'Gentle, organic posing that reflects real emotional connection',
        'Timeless dark studio backdrops and classic black & white conversions',
        'Fine-art gallery canvas prints ready for home framing'
      ],
      bannerImage: '/assets/the-portrait-company/hero-couple.jpg'
    },
    {
      id: 'kids',
      title: 'Kids Portrait Photography',
      navTitle: 'Kids',
      slug: 'kids-portrait-photography',
      description: 'Children grow faster than we realise, and their energy changes with every stage. Kids portrait photography helps preserve those fleeting behaviours and expressions. As a trusted photo studio in Mumbai, we capture these moments and store them in the book as the chapters worth remembering.',
      image: '/assets/the-portrait-company/section-kids.jpg',
      alt: 'Adorable kids photography featuring a child smiling and posing peacefully in a bright photo studio in Mumbai.',
      alignment: 'left',
      sessionSpecs: [
        'Child-friendly pacing with toy-friendly break intervals',
        'Natural unforced smiles, curious wonder, and candid joy',
        'Age milestones: 100 days, 1st birthday, toddlers, and young teens',
        'High-speed strobe lighting to capture spontaneous laughter'
      ],
      bannerImage: '/assets/the-portrait-company/hero-kids.jpg'
    },
    {
      id: 'fashion',
      title: 'Fashion Portrait Photography',
      navTitle: 'Fashion',
      slug: 'fashion-portrait-photography',
      description: 'Fashion is more than clothing, it’s how you live, think and see the world. Fashion portrait photography captures your boldest version through evolving styles and experimental looks. As a portrait company in Mumbai, led by an experienced portrait photographer in Mumbai, we create images that break stereotypes and make a strong personal style statement.',
      image: '/assets/the-portrait-company/section-fashion.jpg',
      alt: 'Fashion portrait of a young woman in bold styling, photographed by The Portrait Company.',
      alignment: 'right',
      sessionSpecs: [
        'Model test shoots, agency portfolios, and personal branding',
        'Avant-garde lighting, color gels, and dramatic chiaroscuro',
        'Wardrobe consultation with multi-look outfit changes',
        'Commercial and social media high-resolution licensing'
      ],
      bannerImage: '/assets/the-portrait-company/hero-fashion.jpg'
    },
    {
      id: 'maternity',
      title: 'Maternity Portrait Photography',
      navTitle: 'Maternity',
      slug: 'maternity-portrait-photography',
      description: 'A maternity photoshoot is an opportunity for documenting the special phase of your life. You can create an incredible portfolio from your pregnancy shoot with a bit of imagination and thoughtful planning. It is one of the best way to celebrate your motherhood and telling your story to your loved ones.',
      image: '/assets/the-portrait-company/section-maternity.jpg',
      alt: 'Beautiful maternity photography of parents cradling her baby bump, captured love and elegance in a maternity photography studio.',
      alignment: 'left',
      sessionSpecs: [
        'Best scheduled between 28 to 34 weeks of pregnancy',
        'Comfort-first studio environment with rest intervals',
        'Elegant maternity draping, backlighting, and partner portraits',
        'Artistic black & white silhouette portraits celebrating form'
      ],
      bannerImage: '/assets/the-portrait-company/hero-maternity.webp'
    },
    {
      id: 'boudoir',
      title: 'Boudoir Portrait Photography',
      navTitle: 'Boudoir',
      slug: 'boudoir-portrait-photography',
      description: 'The French term ‘Boudoir’ as the meaning suggests is an intimate photoshoot that represents the sensual side of a person and is a private memory for them to cherish their bodies forever through photography.',
      image: '/assets/the-portrait-company/section-boudoir.jpg',
      alt: 'Elegant boudoir photography showcasing a woman posing gracefully, highlighting confidence and femininity through portrait photography in Mumbai.',
      alignment: 'right',
      sessionSpecs: [
        '100% private closed-studio session with female-friendly team option',
        'Empowering, respectful direction designed to build confidence',
        'Tasteful vintage lingerie, silk robes, or fine-art shadow work',
        'Password-protected private gallery delivery and confidentiality'
      ],
      bannerImage: '/assets/the-portrait-company/hero-boudoir.jpg'
    },
    {
      id: 'matrimonial',
      title: 'Matrimonial Portrait Photography',
      navTitle: 'Matrimonial',
      slug: 'matrimonial-portrait-photography',
      description: 'Imagine scrolling through countless online profiles, each with picture that promises a glimpse into someone’s soul. Photos for matrimony are not just a snapshot but are the first impression you make in the world of online. The matrimonial photography includes your unique style, your infectious personality, and your best profile.',
      image: '/assets/the-portrait-company/section-matrimonial.png',
      alt: 'Elegant matrimonial portrait photography features a professional photoshoot of an individual in traditional attire posing gracefully with The Portrait Company in Mumbai.',
      alignment: 'left',
      sessionSpecs: [
        'Modern, dignified, warm, and authentic aesthetic (no stiff passport poses)',
        'Traditional ethnic, fusion, and smart-casual outfit changes',
        'High-resolution portraits formatted for biodatas, family albums & online portals',
        'Guidance on authentic postures that reflect genuine character'
      ],
      bannerImage: '/assets/the-portrait-company/hero-matrimonial.webp'
    }
  ] as PhotographyCategory[],

  partners: [
    {
      name: 'Chitraksh',
      logo: '/assets/the-portrait-company/partner-chitraksh.svg',
      description: 'Premier fine-art framing & bespoke archival printing partner.'
    },
    {
      name: 'Home Photography',
      logo: '/assets/the-portrait-company/partner-home-photography.svg',
      description: 'Residential lifestyle & home sanctuary photography partner.'
    },
    {
      name: 'Fashion Folio',
      logo: '/assets/the-portrait-company/partner-fashion-folio.svg',
      description: 'Editorial casting, agency styling & fashion talent network.'
    }
  ] as PartnerBrand[],

  cherishContent: {
    heading: 'Cherish Your Precious Moments',
    body: 'The Portrait Company offers you a wide range of portrait photography services that include: family portraits, corporate portraits, digital portraits, lifestyle portraits, boudoir portraits, abstract portrait & environmental portraits. Our photo studio in Mumbai offers old & forgotten yet classics form of portrait photography. We have photographed various celebrities like Carol Gracias, Gauhar Khan, Rashmi Desai, Tushar Kapoor and many more.',
    celebrities: ['Carol Gracias', 'Gauhar Khan', 'Rashmi Desai', 'Tushar Kapoor', 'Kareena Kapoor Khan']
  },

  packages: [
    {
      id: 'pkg-studio-essential',
      name: 'Studio Essential',
      tag: 'Individual & Headshot',
      priceEstimate: '₹14,999',
      duration: '60 - 90 Minutes',
      outfits: '2 Outfit Changes',
      editedPhotos: '8 Master Edited High-Res Portraits',
      deliverables: [
        'One-on-one personalized studio session',
        'Lighting setup tailored to face shape & role',
        'Private proofing gallery within 48 hours',
        '8 skin-retouched master high-res deliverables',
        'High-res print & web-ready export formats'
      ]
    },
    {
      id: 'pkg-signature-editorial',
      name: 'Signature Editorial',
      tag: 'Most Popular · Family & Couples',
      priceEstimate: '₹24,999',
      duration: '2 - 2.5 Hours',
      outfits: '3 Outfit Changes',
      editedPhotos: '18 Master Edited High-Res Portraits',
      popular: true,
      deliverables: [
        'Full studio access for couples, families, or maternity',
        'Creative direction & moodboard consultation',
        'Hair & makeup touchup assistance guidance',
        '18 magazine-grade skin-retouched portraits',
        'Complementary 12×18 inch fine-art archival canvas print',
        'Private cloud album with 1-year archive storage'
      ]
    },
    {
      id: 'pkg-luxury-heirloom',
      name: 'Luxury Heirloom',
      tag: 'Generational & Celebrity Grade',
      priceEstimate: '₹44,999',
      duration: 'Half-Day (Up to 4 Hours)',
      outfits: '5 Outfit Changes',
      editedPhotos: '35 Master Edited High-Res Portraits',
      deliverables: [
        'VIP closed-studio reservation with refreshments',
        'Comprehensive multi-generational grouping coverage',
        '35 premium master edited fine-art digital portraits',
        'Bespoke handcrafted 12×12 inch leatherette photo album (30 pages)',
        'Two 16×24 inch framed archival prints with UV museum glass',
        'Full high-resolution commercial & personal copyright release'
      ]
    }
  ] as StudioPackage[],

  testimonials: [
    {
      name: 'Dr. Radhika & Vikram Merchant',
      role: 'Family Portrait Session · Bandra West',
      quote: 'We booked The Portrait Company for our parents’ 40th wedding anniversary. Getting 9 family members across 3 generations to relax seems impossible, but the team created a warm, joyous celebration. The framed portrait now takes pride of place in our living room.',
      category: 'Family Portrait',
      rating: 5
    },
    {
      name: 'Ananya Deshmukh',
      role: 'Corporate Leadership Headshots · Lower Parel',
      quote: 'As an executive moving into a fintech board role, I needed portraits that conveyed authority without feeling cold. The lighting, expression coaching, and attention to detail were world-class. It is easily the best investment in my professional personal brand.',
      category: 'Corporate Portrait',
      rating: 5
    },
    {
      name: 'Pooja & Sameer Kulkarni',
      role: 'Maternity Portrait Session · South Mumbai',
      quote: 'At 32 weeks, comfort was my priority. The team gave us so much space and gentle guidance. The silhouette portraits they created are breathtaking fine art that we will treasure forever as our daughter grows.',
      category: 'Maternity Portrait',
      rating: 5
    },
    {
      name: 'Rohan Talwar',
      role: 'Matrimonial Profile Session · Juhu',
      quote: 'I was hesitant about getting professional matrimonial photos, but The Portrait Company completely changed my perspective. The photos were honest, modern, and represented my real personality instead of an awkward passport pose. Highly recommended!',
      category: 'Matrimonial Portrait',
      rating: 5
    }
  ] as ClientReview[]
};
