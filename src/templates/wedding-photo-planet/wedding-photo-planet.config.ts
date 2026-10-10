/**
 * WEDDING PHOTO PLANET Configuration & Comprehensive Dataset
 * Raoz Demo Factory — Template #5
 * Category: Photography, Studio & Cinematography / Wedding & Event Services
 * Reference: https://www.weddingphotoplanet.com/
 */

export interface GalleryItem {
  id: string;
  title: string;
  category: 'wedding' | 'pre-wedding' | 'candid' | 'destination' | 'bridal';
  categoryLabel: string;
  image: string;
  location?: string;
}

export interface TestimonialItem {
  id: string;
  names: string;
  role: string;
  quote: string;
  image: string;
  rating: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  route: string;
  image: string;
  headline: string;
  features: Array<{ label: string; text: string }>;
  description: string;
}

export interface BlogItem {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  content: string[];
  image: string;
  category: string;
}

export const weddingPhotoPlanetConfig = {
  id: 'wedding-photo-planet',
  numericId: 5,
  name: 'WEDDING PHOTO PLANET',
  fullName: 'Wedding Photo Planet — Candid Wedding Photographers & Cinematographers',
  categoryCode: 'cat-photography',
  categoryName: 'Photography',
  subcategory: 'Wedding Photography',
  businessType: 'Complete Wedding Photography, Pre-Wedding & Cinematic Video Film Studio',
  tagline: 'Best Wedding Photographer in Delhi NCR — Candid Moments, Pre-Wedding Shoots & Cinematic Films',
  status: 'completed' as const,
  entryPoint: 'src/templates/wedding-photo-planet/WeddingPhotoPlanet.tsx',
  assetDirectory: 'public/assets/wedding-photo-planet/',
  dependencies: ['lucide-react', 'react', 'motion'],
  originalUrl: 'https://www.weddingphotoplanet.com/',

  placeholders: {
    brandName: 'Wedding Photo Planet',
    ownerName: 'Mr. Rajat Verma',
    headOffice: 'Sector 9A, 761P, Sector 9A, Gurugram, Haryana 122001',
    delhiStudio: 'Dwarka / Janakpuri / Rohini / Delhi NCR',
    phone1: '+91-9990951995',
    phone2: '+91-9990905195',
    email1: 'weddingphotoplanet@gmail.com',
    email2: 'info@weddingphotoplanet.com',
    whatsapp: 'https://api.whatsapp.com/send?phone=919990905195',
    facebook: 'https://www.facebook.com/weddingphotoplanet',
    instagram: 'https://www.instagram.com/weddingphotoplanet/',
    youtube: 'https://www.youtube.com/c/WeddingPhotoPlanet/',
    twitter: 'https://twitter.com/weddingphoto',
    linkedin: 'https://www.linkedin.com/company/wedding-photo-planet-company',
    tumblr: 'https://teamweddingphotoplanet.tumblr.com/',
    servingRegions: 'Delhi NCR, Gurugram, Noida, Jaipur, Udaipur, Goa, Rishikesh, Agra & All India'
  },

  theme: {
    primaryCrimson: '#991B1B',
    accentRose: '#E11D48',
    accentGold: '#D97706',
    goldLight: '#FDE68A',
    charcoalBg: '#111827',
    cleanWhite: '#FFFFFF',
    warmBeige: '#FDFBF7'
  },

  bannerSlides: [
    {
      id: 1,
      alt: 'Wedding photography banner slide 1',
      title: 'BEST WEDDING PHOTOGRAPHER IN DELHI NCR',
      subtitle: 'Capturing Your Auspicious Moments with Artistry & Creativity',
      image: '/assets/wedding-photo-planet/service-wedding.svg'
    },
    {
      id: 2,
      alt: 'Candid photographer slide 2',
      title: 'UNSCRIPTED & EMOTIONAL CANDID PHOTOGRAPHY',
      subtitle: 'Real Moments, Genuine Laughter, Happy Tears & Lifetime Memories',
      image: '/assets/wedding-photo-planet/service-prewedding.svg'
    },
    {
      id: 3,
      alt: 'Best wedding photographers in delhi ncr slide 3',
      title: 'CINEMATIC WEDDING FILMS & TEASERS',
      subtitle: 'Directed Like a Feature Film with 4K Drone Footage & Soundtracks',
      image: '/assets/wedding-photo-planet/service-cinematography.svg'
    },
    {
      id: 4,
      alt: 'Best wedding photographers slide 4',
      title: 'ROMANTIC PRE-WEDDING DESTINATION SHOOTS',
      subtitle: 'Goa Beaches, Rishikesh Riverbanks & Royal Rajasthan Palaces',
      image: '/assets/wedding-photo-planet/banner-celebrity-1.svg'
    },
    {
      id: 5,
      alt: 'Wedding photographers near me slide 5',
      title: 'ROYAL BRIDAL & GROOM PORTFOLIOS',
      subtitle: 'Regal Heritage Compositions in Red, Gold & Royal Silk',
      image: '/assets/wedding-photo-planet/banner-celebrity-2.svg'
    },
    {
      id: 6,
      alt: 'Photographer for wedding slide 6',
      title: 'GRAND VIBRANT INDIAN RITUALS',
      subtitle: 'Haldi, Mehendi, Sangeet, Varmala & Grand Reception Coverage',
      image: '/assets/wedding-photo-planet/banner-celebrity-3.svg'
    },
    {
      id: 7,
      alt: 'Wedding photographers in delhi slide 7',
      title: 'HIGH-TECH EQUIPMENT & DRONE CAPABILITIES',
      subtitle: 'Full Frame Sony & Canon Rigs, Prime G-Master Optics & Gimbal Stabilizers',
      image: '/assets/wedding-photo-planet/service-cinematography.svg'
    },
    {
      id: 8,
      alt: 'Best wedding photographers in delhi slide 8',
      title: 'OVER 15+ YEARS OF TRUST & EXCELLENCE',
      subtitle: 'Preserving Sacred Memories for Hundreds of Happy Couples',
      image: '/assets/wedding-photo-planet/service-wedding.svg'
    }
  ],

  services: [
    {
      id: 'wedding-photography',
      title: 'Wedding Photography',
      route: 'wedding',
      image: '/assets/wedding-photo-planet/service-wedding.svg',
      headline: 'Capturing the Magic of Your Special Day',
      description: 'We are the ideal partner for photographing your special day and we provide the highest quality services that turn each sacred ritual into timeless art.',
      features: [
        {
          label: 'Wedding Photo Planet:',
          text: 'We are the ideal partner for photographing your special day and we provide the highest quality services. Extraordinary.'
        },
        {
          label: 'Best Wedding Videographer in Delhi:',
          text: 'We offer amazing photos, videos and complete photo booths for capturing each moment of your happy occasion in the best possible light.'
        },
        {
          label: 'Best Wedding Photography:',
          text: 'Our professional team, consisting of talented and creative individuals will immortalise the happy occasion of your wedding, in a special and stylish manner. The most romantic moments of the happiest occasion in your life are in capable hands.'
        }
      ]
    },
    {
      id: 'pre-wedding-photography',
      title: 'Pre Wedding Photography',
      route: 'pre-wedding',
      image: '/assets/wedding-photo-planet/service-prewedding.svg',
      headline: 'A Voyage of Romance, Emotions & Celebrations',
      description: 'We offer an exhilarating ride in anticipation of your big day, capturing spontaneous chemistry and cinematic backdrops before you tie the knot.',
      features: [
        {
          label: 'Pre Wedding Photographers Delhi:',
          text: 'We offer an exhilarating ride in anticipation of your big day, taking you on a voyage of romance, emotions, and celebrations leading up to your wedding.'
        },
        {
          label: 'Best Pre Wedding Photographer Delhi:',
          text: 'We infuse life into your love story with mesmerising pre-wedding shoots and take away treasures which are cherished forever.'
        },
        {
          label: 'Pre Wedding Shoot:',
          text: 'We have been the pre-wedding photographer who makes your dream come to life for couples in and around the city. It’s the celebration of romance in our pre-wedding shoot which would be nothing less than pure bliss.'
        },
        {
          label: 'Destination Shoot:',
          text: 'Let the destination of your choice be the background for a romantic prelude to your nuptials. We create pre-wedding photos that would enchant you eternally.'
        }
      ]
    },
    {
      id: 'cinematography',
      title: 'Cinematography',
      route: 'cinematography',
      image: '/assets/wedding-photo-planet/service-cinematography.svg',
      headline: 'Your Wedding Directed Like a Motion Picture',
      description: 'Capturing the best moments and scenes of your wedding by adding emotions, it works just like a movie, creating the best story on screen of your big day.',
      features: [
        {
          label: 'Best Wedding Cinematographer:',
          text: 'Make your love story a compelling story that will be remember by everyone with the help of our expert wedding cinematographers, that capture your wedding in a cinematic way.'
        },
        {
          label: 'Cinematography:',
          text: 'Capturing the best moments and scenes of your wedding by adding emotions, it works just like a movie, creating the best story on screen of your big day.'
        },
        {
          label: 'Cinematic Wedding Video Film:',
          text: 'Reminisce all the wonderful moments of your wedding by watching our artistic cinematic wedding video films that depict the story of your forever.'
        }
      ]
    }
  ],

  // 52 Gallery Items reconstructed from source HTML
  galleryItems: [
    { id: 'gal-1', title: 'Top wedding photographers in delhi ncr', category: 'wedding', categoryLabel: 'Wedding', image: '/assets/wedding-photo-planet/service-wedding.svg' },
    { id: 'gal-2', title: 'Candid Photography', category: 'candid', categoryLabel: 'Candid', image: '/assets/wedding-photo-planet/service-prewedding.svg' },
    { id: 'gal-3', title: 'Best wedding photographer', category: 'wedding', categoryLabel: 'Wedding', image: '/assets/wedding-photo-planet/banner-celebrity-1.svg' },
    { id: 'gal-4', title: 'Wedding photographers delhi', category: 'wedding', categoryLabel: 'Wedding', image: '/assets/wedding-photo-planet/banner-celebrity-2.svg' },
    { id: 'gal-5', title: 'Photographer wedding near me', category: 'wedding', categoryLabel: 'Wedding', image: '/assets/wedding-photo-planet/service-wedding.svg' },
    { id: 'gal-6', title: 'Cinematic videographer', category: 'candid', categoryLabel: 'Cinematography', image: '/assets/wedding-photo-planet/service-cinematography.svg' },
    { id: 'gal-7', title: 'Cinematic pre wedding photography', category: 'pre-wedding', categoryLabel: 'Pre-Wedding', image: '/assets/wedding-photo-planet/service-prewedding.svg' },
    { id: 'gal-8', title: 'Candid pre wedding shoot ideas', category: 'pre-wedding', categoryLabel: 'Pre-Wedding', image: '/assets/wedding-photo-planet/banner-celebrity-3.svg' },
    { id: 'gal-9', title: 'Creative pre wedding photo poses', category: 'pre-wedding', categoryLabel: 'Pre-Wedding', image: '/assets/wedding-photo-planet/service-prewedding.svg' },
    { id: 'gal-10', title: 'Traditional Indian pre wedding themes', category: 'pre-wedding', categoryLabel: 'Pre-Wedding', image: '/assets/wedding-photo-planet/banner-celebrity-2.svg' },
    { id: 'gal-11', title: 'Indoor pre wedding photography setup', category: 'pre-wedding', categoryLabel: 'Pre-Wedding', image: '/assets/wedding-photo-planet/banner-celebrity-1.svg' },
    { id: 'gal-12', title: 'Destination pre wedding shoot India', category: 'destination', categoryLabel: 'Destination', image: '/assets/wedding-photo-planet/service-prewedding.svg' },
    { id: 'gal-13', title: 'Natural light pre wedding shoot', category: 'pre-wedding', categoryLabel: 'Pre-Wedding', image: '/assets/wedding-photo-planet/banner-celebrity-3.svg' },
    { id: 'gal-14', title: 'Storytelling pre wedding photoshoot', category: 'pre-wedding', categoryLabel: 'Pre-Wedding', image: '/assets/wedding-photo-planet/service-prewedding.svg' },
    { id: 'gal-15', title: 'Affordable pre wedding photography Delhi', category: 'pre-wedding', categoryLabel: 'Pre-Wedding', image: '/assets/wedding-photo-planet/service-wedding.svg' },
    { id: 'gal-16', title: 'Luxury pre wedding shoot packages Jaipur', category: 'destination', categoryLabel: 'Destination', image: '/assets/wedding-photo-planet/banner-celebrity-2.svg' },
    { id: 'gal-17', title: 'Professional pre wedding photographer Delhi NCR', category: 'pre-wedding', categoryLabel: 'Pre-Wedding', image: '/assets/wedding-photo-planet/banner-celebrity-1.svg' },
    { id: 'gal-18', title: 'Bride and groom grand entry', category: 'wedding', categoryLabel: 'Wedding', image: '/assets/wedding-photo-planet/banner-celebrity-1.svg' },
    { id: 'gal-19', title: 'Candid photographers in delhi ncr', category: 'candid', categoryLabel: 'Candid', image: '/assets/wedding-photo-planet/service-wedding.svg' },
    { id: 'gal-20', title: 'Groom holding bride’s hand during entry', category: 'wedding', categoryLabel: 'Wedding', image: '/assets/wedding-photo-planet/banner-celebrity-3.svg' },
    { id: 'gal-21', title: 'Romantic couple entry moment', category: 'wedding', categoryLabel: 'Wedding', image: '/assets/wedding-photo-planet/service-prewedding.svg' },
    { id: 'gal-22', title: 'Artistic bridal composition in red and gold', category: 'bridal', categoryLabel: 'Bridal', image: '/assets/wedding-photo-planet/service-wedding.svg' },
    { id: 'gal-23', title: 'Pre wedding shoot locations in india', category: 'destination', categoryLabel: 'Destination', image: '/assets/wedding-photo-planet/banner-celebrity-2.svg' },
    { id: 'gal-24', title: 'Best photographer in delhi', category: 'wedding', categoryLabel: 'Wedding', image: '/assets/wedding-photo-planet/banner-celebrity-1.svg' },
    { id: 'gal-25', title: 'Modern pre wedding shoot ideas', category: 'pre-wedding', categoryLabel: 'Pre-Wedding', image: '/assets/wedding-photo-planet/service-prewedding.svg' },
    { id: 'gal-26', title: 'Elegant bridal portrait in red saree', category: 'bridal', categoryLabel: 'Bridal', image: '/assets/wedding-photo-planet/service-wedding.svg' },
    { id: 'gal-27', title: 'Couple walking in sync', category: 'candid', categoryLabel: 'Candid', image: '/assets/wedding-photo-planet/banner-celebrity-3.svg' },
    { id: 'gal-28', title: 'Sunset pre wedding couple shot', category: 'destination', categoryLabel: 'Destination', image: '/assets/wedding-photo-planet/service-prewedding.svg' },
    { id: 'gal-29', title: 'Best pre wedding photographers in delhi', category: 'pre-wedding', categoryLabel: 'Pre-Wedding', image: '/assets/wedding-photo-planet/banner-celebrity-2.svg' },
    { id: 'gal-30', title: 'Candid sindoor moment', category: 'candid', categoryLabel: 'Candid', image: '/assets/wedding-photo-planet/service-wedding.svg' },
    { id: 'gal-31', title: 'Outdoor pre wedding shoot', category: 'pre-wedding', categoryLabel: 'Pre-Wedding', image: '/assets/wedding-photo-planet/service-prewedding.svg' },
    { id: 'gal-32', title: 'Picture-perfect bridal posture', category: 'bridal', categoryLabel: 'Bridal', image: '/assets/wedding-photo-planet/service-wedding.svg' },
    { id: 'gal-33', title: 'Professional pre wedding photographer Agra', category: 'destination', categoryLabel: 'Destination', image: '/assets/wedding-photo-planet/banner-celebrity-2.svg' },
    { id: 'gal-34', title: 'Couple shoot near Taj Mahal', category: 'destination', categoryLabel: 'Destination', image: '/assets/wedding-photo-planet/banner-celebrity-1.svg' },
    { id: 'gal-35', title: 'Ethnic pre wedding attire', category: 'pre-wedding', categoryLabel: 'Pre-Wedding', image: '/assets/wedding-photo-planet/service-prewedding.svg' },
    { id: 'gal-36', title: 'Traditional Indian couple shoot', category: 'wedding', categoryLabel: 'Wedding', image: '/assets/wedding-photo-planet/banner-celebrity-3.svg' },
    { id: 'gal-37', title: 'Pre wedding shoot in traditional outfits', category: 'pre-wedding', categoryLabel: 'Pre-Wedding', image: '/assets/wedding-photo-planet/service-prewedding.svg' },
    { id: 'gal-38', title: 'Cultural pre wedding look', category: 'pre-wedding', categoryLabel: 'Pre-Wedding', image: '/assets/wedding-photo-planet/banner-celebrity-2.svg' },
    { id: 'gal-39', title: 'Couple in desi style', category: 'pre-wedding', categoryLabel: 'Pre-Wedding', image: '/assets/wedding-photo-planet/banner-celebrity-1.svg' },
    { id: 'gal-40', title: 'Royal ethnic couple photoshoot', category: 'wedding', categoryLabel: 'Wedding', image: '/assets/wedding-photo-planet/service-wedding.svg' },
    { id: 'gal-41', title: 'Capturing love before rituals', category: 'candid', categoryLabel: 'Candid', image: '/assets/wedding-photo-planet/banner-celebrity-3.svg' },
    { id: 'gal-42', title: 'Spiritual pre wedding backdrop', category: 'destination', categoryLabel: 'Destination', image: '/assets/wedding-photo-planet/service-prewedding.svg' },
    { id: 'gal-43', title: 'Campfire pre wedding shoot', category: 'pre-wedding', categoryLabel: 'Pre-Wedding', image: '/assets/wedding-photo-planet/banner-celebrity-2.svg' },
    { id: 'gal-44', title: 'Pre wedding at fort or palace', category: 'destination', categoryLabel: 'Destination', image: '/assets/wedding-photo-planet/banner-celebrity-1.svg' },
    { id: 'gal-45', title: 'Traditional Indian architecture shoot', category: 'destination', categoryLabel: 'Destination', image: '/assets/wedding-photo-planet/service-wedding.svg' },
    { id: 'gal-46', title: 'Campfire theme pre wedding shoot', category: 'pre-wedding', categoryLabel: 'Pre-Wedding', image: '/assets/wedding-photo-planet/banner-celebrity-3.svg' },
    { id: 'gal-47', title: 'Groom on horse entry', category: 'wedding', categoryLabel: 'Wedding', image: '/assets/wedding-photo-planet/service-wedding.svg' },
    { id: 'gal-48', title: 'Couple looking into each other’s eyes', category: 'candid', categoryLabel: 'Candid', image: '/assets/wedding-photo-planet/service-prewedding.svg' },
    { id: 'gal-49', title: 'Couple dancing pose', category: 'wedding', categoryLabel: 'Wedding', image: '/assets/wedding-photo-planet/banner-celebrity-1.svg' },
    { id: 'gal-50', title: 'Pre wedding shoot Rishikesh', category: 'destination', categoryLabel: 'Destination', image: '/assets/wedding-photo-planet/banner-celebrity-2.svg' },
    { id: 'gal-51', title: 'Pre wedding Shoot couple holding hands', category: 'pre-wedding', categoryLabel: 'Pre-Wedding', image: '/assets/wedding-photo-planet/banner-celebrity-3.svg' },
    { id: 'gal-52', title: 'photographer for wedding', category: 'wedding', categoryLabel: 'Wedding', image: '/assets/wedding-photo-planet/service-wedding.svg' }
  ] as GalleryItem[],

  // All 15 authentic client reviews from source
  testimonials: [
    {
      id: 'test-1',
      names: 'Surbhi & Sagar',
      role: 'Client',
      quote: 'We are glad that we chose you guys for our wedding photography. Its one of the best decisions we took. Their dedication and work is mind blowing. We are really impressed by team’s hardwork! Had an awesome time working with these guys! Keep up the good work.',
      image: '/assets/wedding-photo-planet/service-wedding.svg',
      rating: 5
    },
    {
      id: 'test-2',
      names: 'Himani & Sunandan',
      role: 'Client',
      quote: "I'm so happy that I chose Wedding Photo planet for my wedding. They not only capture moments, but also emotions. They made our wedding look like a cinematic movie. They always listen to the special requests and are very cooperative, talented power team.",
      image: '/assets/wedding-photo-planet/service-prewedding.svg',
      rating: 5
    },
    {
      id: 'test-3',
      names: 'Shivali & Gaourav',
      role: 'Client',
      quote: 'I had the most amazing experience with Wedding Photo Planet and their team. Firstly They make you feel so comfortable in the entire process. They show some of the shots and guide what can be done to make it better. It was worth it to choose them. I would recommend it without any doubt.',
      image: '/assets/wedding-photo-planet/banner-celebrity-1.svg',
      rating: 5
    },
    {
      id: 'test-4',
      names: 'Richa & Amit',
      role: 'Client',
      quote: 'I am so glad that we stumbled across them. I can’t say enough about how professional and the quality of work that they provides. I was so pleased with our session and final photographs, that I will continue to use them in the future too. We (Bride & Groom) have booked them for all our functions.',
      image: '/assets/wedding-photo-planet/banner-celebrity-2.svg',
      rating: 5
    },
    {
      id: 'test-5',
      names: 'Jasmeet & Balvinder',
      role: 'Client',
      quote: 'Had an amazing experience, the team was amazing and they worked according to our needs and requests. Thank you for the lovely photos and a delightful experience ☺️',
      image: '/assets/wedding-photo-planet/service-wedding.svg',
      rating: 5
    },
    {
      id: 'test-6',
      names: 'Anuradha & Kunal',
      role: 'Client',
      quote: 'The team is just amazing.. we loved the pictures, videos, reels, every content they provided us. The team is really humble and give you the best output one can ever have. One can trust them blindly :) Thank you team for making our big day really special.. memories for lifetime.',
      image: '/assets/wedding-photo-planet/service-prewedding.svg',
      rating: 5
    },
    {
      id: 'test-7',
      names: 'Swati & Rajat',
      role: 'Client',
      quote: 'A team of photographers with excellent caliber. I had booked them for all our wedding programs (bride’s and groom’s side) including the pre wedding. They’ve done commendable work in all the functions especially our pre wedding. They’re very professional and don’t nag you for anything.',
      image: '/assets/wedding-photo-planet/banner-celebrity-3.svg',
      rating: 5
    },
    {
      id: 'test-8',
      names: 'Anchal & Ankit',
      role: 'Client',
      quote: 'The team of most amazing and professional photographers who deliver the best of quality. I got my pre-wedding and wedding shot and the team made us feel so comfortable. Thank you for giving us an experience of lifetime.',
      image: '/assets/wedding-photo-planet/service-wedding.svg',
      rating: 5
    },
    {
      id: 'test-9',
      names: 'Bhavya & Rohit',
      role: 'Client',
      quote: 'Wedding photo planet have captured our special moments so beautifully for lifelong. The whole team was so nice and responsive and passionate about their work. Their quality of work is up to the mark and they listen to customer needs so well. 5 stars for the whole team and especially Rajat!',
      image: '/assets/wedding-photo-planet/service-prewedding.svg',
      rating: 5
    },
    {
      id: 'test-10',
      names: 'Aarzoo & Saurabh',
      role: 'Client',
      quote: 'We chose wedding photo planet for our wedding and pre wedding shoot and it was the best decision we took.. the entire team felt like family and had done an amazing job.. Thank you Rajat and team for the amazing support and work.',
      image: '/assets/wedding-photo-planet/banner-celebrity-1.svg',
      rating: 5
    },
    {
      id: 'test-11',
      names: 'Prabhav & Divya',
      role: 'Client',
      quote: 'From the initial consultation to the delivery of our final gallery, everything was seamless and professional. The final photos are absolutely stunning. Every emotion, detail, and special moment was documented beautifully. The editing style is timeless and perfectly reflects our day.',
      image: '/assets/wedding-photo-planet/banner-celebrity-2.svg',
      rating: 5
    },
    {
      id: 'test-12',
      names: 'Kavya & Chayan',
      role: 'Client',
      quote: 'What amazing team!!! Highly highly recommend. They have the most amazing, most friendly and the most talented team... Over your function they become a part of your family and treat you the same way. Adept with best in industry technology and gadgets!',
      image: '/assets/wedding-photo-planet/service-wedding.svg',
      rating: 5
    },
    {
      id: 'test-13',
      names: 'Anshul & Mani',
      role: 'Client',
      quote: 'I and my fiancé booked wedding photo planet for all the events of our wedding. Undoubtedly it was the best decision to choose their team. From the time of booking till post wedding editing and delivering of our products it has been hassle free and very convenient.',
      image: '/assets/wedding-photo-planet/banner-celebrity-3.svg',
      rating: 5
    },
    {
      id: 'test-14',
      names: 'Nitin & Geetika',
      role: 'Client',
      quote: 'We stumbled upon wedding photo planet team through a common relative and took a leap of faith for our engagement. When the final pictures arrived, we and all our relatives were mesmerized!! The beauty with which they captured every moment is commendable. So courteous and disciplined.',
      image: '/assets/wedding-photo-planet/banner-celebrity-1.svg',
      rating: 5
    },
    {
      id: 'test-15',
      names: 'Preksha',
      role: 'Client',
      quote: 'I had the best experience with Wedding Photo Planet\'s team. They are the best in what they do, the pre-wedding, photos, videos, albums, everything was just PERFECT. Thanks a lot to Rajat, Himanshu and everyone who worked to capture and document all our moments so beautifully!',
      image: '/assets/wedding-photo-planet/service-prewedding.svg',
      rating: 5
    }
  ] as TestimonialItem[],

  whyChooseUs: [
    {
      title: 'Experienced Professionals',
      description: 'Our team of experienced photographers and videographers are passionate about their craft and are dedicated to capturing your most adorable moments with precision and skill.'
    },
    {
      title: 'State-of-the-Art Equipment',
      description: 'We invest in the latest and most advanced photography and videography equipment, ensuring that every frame and shot is of the highest quality.'
    },
    {
      title: 'Attention to Detail',
      description: 'We believe that every detail matters, and we pay close attention to capturing even the smallest moments, emotions, and nuances that make your celebrations unique.'
    },
    {
      title: 'Creative Vision',
      description: 'Our photographers and videographers possess a keen eye for creativity, transforming ordinary moments into extraordinary masterpieces through their artistic vision.'
    },
    {
      title: 'Unmatched Expertise',
      description: 'With years of experience in the industry, we have honed our craft and mastered the art of storytelling through photography and videography.'
    },
    {
      title: 'Impeccable Editing',
      description: 'Our editing process is meticulous, ensuring that the final results are flawless, enhancing the beauty and essence of your special moments.'
    },
    {
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our ultimate goal, and we go the extra mile to ensure that you are delighted with the final product.'
    },
    {
      title: 'Memories to Last a Lifetime',
      description: 'We understand the significance of your precious moments, and our commitment to quality ensures that your memories are preserved in all their splendor for generations to come.'
    },
    {
      title: 'Guaranteed Client Privacy',
      description: 'Your privacy is a matter of our concern too. We make sure everything is secure and privacy is strictly maintained.'
    }
  ],

  glimpses: [
    {
      title: 'Living the Moment to the fullest',
      text: 'Our friendly and talented photographers notice and highlight those spontaneous, once-in-a-life-time moments that define your celebrations. Our discreet and unobtrusive style ensures that you are at ease with our presence. Our ability to capture authentic, real moments sets candid photography apart and sets us apart from the crowd.'
    },
    {
      title: 'Unscripted Brilliance',
      text: 'Candid photography truly reveals the authentic spirit of any occasion. With our focus on real emotions, laughter and happy tears, your special occasions are encapsulated in photographs that reflect the natural spirit of your events.'
    },
    {
      title: 'Each Frame, a Story Waiting to be Unfolded',
      text: 'Within every candid photo taken, lies an untold story waiting to be unveiled. It is the little details, the genuine smiles, and the hearty laughter which weave a vivid tapestry of your cherished moments.'
    },
    {
      title: 'Relive Your Special Moments with Candid Photography',
      text: 'The purpose of candid photography, is not merely freezing the moments but transforming them into cherished memories that will last a lifetime. Our images allow you to revisit the happy emotions of your days all over again.'
    }
  ],

  blogArticles: [
    {
      id: 'blog-1',
      title: 'Top 10 Pre-Wedding Shoot Locations in Delhi NCR: A Complete Guide',
      slug: 'top-10-pre-wedding-locations-delhi-ncr',
      date: 'March 2026',
      author: 'Rajat Verma',
      category: 'Pre-Wedding',
      image: '/assets/wedding-photo-planet/service-prewedding.svg',
      excerpt: 'From the historic arches of Humayun Tomb to the vibrant rustic studios of Gurugram, discover the most enchanting pre-wedding shoot spots in and around the capital.',
      content: [
        'Finding the ideal backdrop for your pre-wedding photography shoot is the first step toward creating timeless memories.',
        'Delhi NCR offers an extraordinary blend of Mughal architecture, sprawling green gardens, and curated studio spaces with over 50+ backdrops including European streets, Rajasthani havelis, and Mediterranean terraces.',
        'Our top recommendations include The Perfect Location in Faridabad, Picture Destination on Kundli border, Lodhi Art District for contemporary aesthetics, and the scenic Aravali hills for ethereal sunset portraits.'
      ]
    },
    {
      id: 'blog-2',
      title: 'How to Pose Naturally on Your Wedding Day: Tips from Candid Photographers',
      slug: 'how-to-pose-naturally-wedding-day',
      date: 'February 2026',
      author: 'Wedding Photo Planet Team',
      category: 'Photography Tips',
      image: '/assets/wedding-photo-planet/service-wedding.svg',
      excerpt: 'Ditch the awkward stiffness! Learn how to look relaxed, elegant, and completely authentic in front of the lens during your wedding ceremonies.',
      content: [
        'The secret to breathtaking wedding photography is not rehearsed smiles—it is being entirely absorbed in the presence of each other.',
        'We advise couples to treat the camera as an invisible friend. Focus on the gentle touch, the whisper during the varmala, and the shared glances during the phere.',
        'Our team guides you with subtle prompts rather than rigid commands, ensuring your body language remains natural and fluid throughout.'
      ]
    },
    {
      id: 'blog-3',
      title: 'Royal Destination Wedding Photography in Jaipur & Udaipur',
      slug: 'destination-wedding-jaipur-udaipur',
      date: 'January 2026',
      author: 'Rajat Verma',
      category: 'Destination Weddings',
      image: '/assets/wedding-photo-planet/banner-celebrity-2.svg',
      excerpt: 'Planning a royal palace wedding in Rajasthan? Here is everything you need to know about lighting, drone permissions, and sunset palace portraits.',
      content: [
        'Rajasthan palaces like City Palace Udaipur, Samode Palace, and Fairmont Jaipur offer regal grandeur that commands cinematic coverage.',
        'From managing harsh daytime sunlight in marble courtyards to illuminating nighttime fireworks across palace lakes, our specialized destination crew brings cinema-grade lighting rigs and multi-angle camera setups.',
        'Learn how to plan your wedding timeline to make the most of the golden hour across ancient jharokhas and royal pavilions.'
      ]
    }
  ] as BlogItem[],

  packages: [
    {
      id: 'pkg-silver',
      name: 'Essential Wedding Coverage',
      price: '₹75,000 / Day',
      badge: 'Popular for Intimate Events',
      features: [
        '1 Senior Candid Photographer + 1 Traditional Photographer',
        '1 Full HD Traditional Videographer',
        'Unlimited Raw High-Resolution Photos Delivered',
        '250 Professionally Edited & Color Graded Pictures',
        'Traditional Wedding Video Documentary (60-90 Mins)',
        '1 Premium Photobook Album (30 Sheets / 60 Pages)'
      ]
    },
    {
      id: 'pkg-gold',
      name: 'Royal Candid & Cinematic Film',
      price: '₹1,50,000 / Day',
      badge: 'Most Booked',
      popular: true,
      features: [
        '2 Master Candid Photographers (Directed by Rajat Verma team)',
        '2 Cinematic Cinematographers with Gimbal Stabilizers',
        '1 4K Aerial Drone Pilot for Grand Entries & Venue Scale',
        '3-5 Minute Cinematic Wedding Teaser Trailer',
        'Full 25-40 Minute Cinematic Wedding Film with Audio Vows',
        '500+ Edited High-Res Photos with Signature Color Tones',
        '2 Royal Velvet Leatherette Wedding Albums (80 Pages each)',
        'Complimentary 1-Minute Instagram Reels Delivered in 48 Hours'
      ]
    },
    {
      id: 'pkg-platinum',
      name: 'Grand Celebrity Destination Package',
      price: '₹2,50,000 / Event',
      badge: 'Complete Luxury Experience',
      features: [
        'Complete Multi-Day Wedding & Pre-Wedding Shoot Included',
        'Full 6-Member Crew (Candid, Cinematic, Drone & Studio Lights)',
        'Pre-Wedding Shoot at Destination of Choice (Goa/Jaipur/Rishikesh)',
        'Same-Day Edit / Next-Day Wedding Teaser for Social Media',
        'Long-Format Documentary & Master 4K Cinematic Feature Film',
        '3 Luxury Handcrafted Layflat Albums in Wooden Keepsake Boxes',
        'Dedicated Project Manager & Lifetime Cloud Storage Vault'
      ]
    }
  ]
};
