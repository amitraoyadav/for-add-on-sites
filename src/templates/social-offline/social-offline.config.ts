/**
 * SOCIAL OFFLINE Configuration & Template Specifications
 * Raoz Demo Factory — Template #2
 * Category: Restaurant, Cafe & Food Business -> Cocktail Bars & Lounges / Cafes and Coffee Shops
 * Reference: https://socialoffline.in/
 */

export interface OutletInfo {
  id: string;
  name: string;
  city: string;
  address: string;
  hours: string;
  phone: string;
  logo: string;
  image: string;
  hasCoworking: boolean;
  hasOutdoor: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'munchies' | 'baos' | 'mains' | 'drinks' | 'desserts';
  categoryLabel: string;
  price: string;
  description: string;
  isVeg: boolean;
  isChefSpecial?: boolean;
  isLegendary?: boolean;
  tag?: string;
}

export const socialOfflineConfig = {
  id: 'social-offline',
  numericId: 2,
  name: 'SOCIAL OFFLINE',
  categoryCode: 'cat-food-hospitality',
  categoryName: 'Restaurant, Cafe & Food Business',
  subcategory: 'Cocktail Bars & Lounges',
  businessType: 'Neighbourhood Cafe, High-Energy Bar & Collaborative Workspace',
  tagline: "India's Favourite Place to Chill — Where Work Meets Play",
  status: 'completed' as const,
  entryPoint: 'src/templates/social-offline/SocialOffline.tsx',
  assetDirectory: 'public/assets/social-offline/',
  dependencies: ['lucide-react', 'react', 'motion'],
  routes: ['/', '#outlets', '#menu', '#social-works', '#social-club', '#events', '#app', '#about', '#contact'],

  placeholders: {
    brandName: 'SOCIAL OFFLINE',
    tagline: 'The Neighbourhood Café and Bar — All Day Work, All Night Play',
    corporateOffice: 'Impresario Entertainment & Hospitality Pvt. Ltd., American Express Bakery House, Byculla West, Mumbai 400008',
    customerCarePhone: '+91 86579 93155',
    customerCareEmail: 'feedback@impresario.in',
    socialWorksEmail: 'socialworks@socialoffline.in',
    corporateEventsEmail: 'events@impresario.in',
    instagramUrl: 'https://www.instagram.com/socialoffline/',
    clubUrl: 'https://club.socialoffline.in',
    orderUrl: 'https://order.socialoffline.in/'
  },

  theme: {
    darkBg: '#0a0b0e',
    cardBg: '#13151b',
    accentOrange: '#f95721',
    accentRed: '#e52e2e',
    accentYellow: '#f5a623',
    textLight: '#f8fafc',
    textMuted: '#94a3b8',
    borderColor: '#262933'
  },

  metrics: {
    outletsCount: '55+',
    citiesCount: '20+',
    communityMembers: '250,000+',
    foundedYear: '2014'
  },

  heroSlides: [
    {
      title: "India's Favourite Place to Chill",
      subtitle: 'THE NEIGHBOURHOOD CAFÉ AND BAR',
      description: 'Where mundane blends with the extraordinary and conversations flow freely from 9 AM breakfast meetings to midnight DJ drops.',
      image: '/assets/social-offline/slide_0_1680x1120.webp',
      badge: 'All Work. All Play.'
    },
    {
      title: 'Legendary Drinks & Iconic Food',
      subtitle: 'THE ICONIC LLIIT & KHAANA MENU',
      description: 'Home of the 1000ml Longest Long Island Iced Tea, Butter Chicken Biryani, and epic street-inspired comfort food.',
      image: '/assets/social-offline/slide_1_1680x1120.webp',
      badge: 'Crafted Cocktails'
    },
    {
      title: 'SOCIAL WRKS — Co-Working Reimagined',
      subtitle: 'FREE WI-FI · PRINTERS · PLUG POINTS · F&B CREDITS',
      description: 'Your second home for high-output daylight productivity with 100% redeemable food and beverage day passes.',
      image: '/assets/social-offline/Sarjapur-3.jpg',
      badge: 'Collaborative Space'
    },
    {
      title: 'antiSOCIAL — The Cultural Underground',
      subtitle: 'LIVE GIGS · INDIE MUSIC · ART EXHIBITIONS',
      description: 'Dedicated performance space hosting ground-breaking musicians, thought leaders, poets, and subculture pioneers.',
      image: '/assets/social-offline/slide_Women-bartenders-7.webp',
      badge: 'Nightlife & Culture'
    }
  ],

  outlets: [
    {
      id: 'hauz-khas-social',
      name: 'Hauz Khas SOCIAL',
      city: 'Delhi',
      address: '9A & 12, Hauz Khas Village, New Delhi 110016',
      hours: '11:00 AM – 1:00 AM',
      phone: '+91 78386 52814',
      logo: '/assets/social-offline/anti-social-logo-2.png',
      image: '/assets/social-offline/hauz-khas-social-1.webp',
      hasCoworking: true,
      hasOutdoor: true
    },
    {
      id: 'cp-social',
      name: 'Connaught Place SOCIAL',
      city: 'Delhi',
      address: '23, Odeon Building, Radial 5, D Block, Connaught Place, New Delhi 110001',
      hours: '11:00 AM – 1:00 AM',
      phone: '+91 97116 14122',
      logo: '/assets/social-offline/CP_Social_Logo-1-removebg-preview-1.png',
      image: '/assets/social-offline/VK-3.jpg',
      hasCoworking: true,
      hasOutdoor: false
    },
    {
      id: 'rajouri-garden-social',
      name: 'Rajouri Garden SOCIAL',
      city: 'Delhi',
      address: 'Vishal Cinema Complex, Shivaji Marg, Rajouri Garden, New Delhi 110027',
      hours: '11:00 AM – 1:00 AM',
      phone: '+91 95995 90151',
      logo: '/assets/social-offline/RAJOURI-GARDEN.png',
      image: '/assets/social-offline/slide_Winter-menu-social-8.webp',
      hasCoworking: true,
      hasOutdoor: false
    },
    {
      id: 'church-street-social',
      name: 'Church Street SOCIAL',
      city: 'Bengaluru',
      address: '46/1, Cobalt Building, Church Street, Shanthala Nagar, Ashok Nagar, Bengaluru 560001',
      hours: '9:00 AM – 1:00 AM',
      phone: '+91 80 4162 2755',
      logo: '/assets/social-offline/Bengaluru_bellandur.png',
      image: '/assets/social-offline/cafes-in-bangalore.webp',
      hasCoworking: true,
      hasOutdoor: true
    },
    {
      id: 'jp-nagar-social',
      name: 'JP Nagar SOCIAL',
      city: 'Bengaluru',
      address: '3rd Floor, Central Mall, 45th Cross, 2nd Phase, JP Nagar, Bengaluru 560078',
      hours: '10:00 AM – 1:00 AM',
      phone: '+91 80 4371 9088',
      logo: '/assets/social-offline/Bengaluru_JP-Nagara.png',
      image: '/assets/social-offline/Sarjapur-3.jpg',
      hasCoworking: true,
      hasOutdoor: true
    },
    {
      id: 'ecity-social',
      name: 'Electronic City SOCIAL',
      city: 'Bengaluru',
      address: 'NeoTown Road, Electronics City Phase 1, Bengaluru 560100',
      hours: '11:00 AM – 12:00 AM',
      phone: '+91 80 6848 8344',
      logo: '/assets/social-offline/Ecity-Social-Logo.png',
      image: '/assets/social-offline/slide_0_1680x1120.webp',
      hasCoworking: true,
      hasOutdoor: false
    },
    {
      id: 'colaba-social',
      name: 'Colaba SOCIAL',
      city: 'Mumbai',
      address: 'Glen Rose Building, B.K. Boman Behram Marg, Apollo Bandar, Colaba, Mumbai 400001',
      hours: '9:00 AM – 1:00 AM',
      phone: '+91 22 2282 8600',
      logo: '/assets/social-offline/social-logo.png',
      image: '/assets/social-offline/slide_1_1680x1120.webp',
      hasCoworking: true,
      hasOutdoor: false
    },
    {
      id: 'kopa-social',
      name: 'KOPA Mall SOCIAL',
      city: 'Pune',
      address: 'KOPA Mall, Koregaon Park Annexe, Mundhwa, Pune 411036',
      hours: '11:00 AM – 1:00 AM',
      phone: '+91 73045 42521',
      logo: '/assets/social-offline/Pune_KOPA.png',
      image: '/assets/social-offline/VK-3.jpg',
      hasCoworking: true,
      hasOutdoor: true
    },
    {
      id: 'fc-road-social',
      name: 'FC Road SOCIAL',
      city: 'Pune',
      address: 'Fergusson College Road, Shivajinagar, Pune 411005',
      hours: '10:00 AM – 1:00 AM',
      phone: '+91 73045 42522',
      logo: '/assets/social-offline/Pune_F-C-Road.png',
      image: '/assets/social-offline/slide_OG-menu-105.webp',
      hasCoworking: true,
      hasOutdoor: false
    },
    {
      id: 'viman-nagar-social',
      name: 'Viman Nagar SOCIAL',
      city: 'Pune',
      address: 'Phoenix Marketcity, Viman Nagar, Pune 411014',
      hours: '11:00 AM – 1:00 AM',
      phone: '+91 73045 42523',
      logo: '/assets/social-offline/viman-nagar-logo.png',
      image: '/assets/social-offline/slide_OG-menu-97.webp',
      hasCoworking: true,
      hasOutdoor: true
    },
    {
      id: 'elante-social',
      name: 'Elante Mall SOCIAL',
      city: 'Chandigarh',
      address: 'Nexus Elante Mall, Industrial Area Phase I, Chandigarh 160002',
      hours: '11:00 AM – 12:00 AM',
      phone: '+91 172 404 0000',
      logo: '/assets/social-offline/Chandigarh_elante-1.png',
      image: '/assets/social-offline/slide_Winter-menu-social-8.webp',
      hasCoworking: true,
      hasOutdoor: false
    },
    {
      id: 'park-street-social',
      name: 'Park Street SOCIAL',
      city: 'Kolkata',
      address: 'Russell Street, Park Street Area, Kolkata 700071',
      hours: '10:00 AM – 1:00 AM',
      phone: '+91 33 4001 0200',
      logo: '/assets/social-offline/Kolkata_Park-Street.png',
      image: '/assets/social-offline/slide_0_1680x1120.webp',
      hasCoworking: true,
      hasOutdoor: true
    },
    {
      id: 'mindspace-social',
      name: 'Mindspace SOCIAL',
      city: 'Hyderabad',
      address: 'Mindspace IT Park, Hitech City, Madhapur, Hyderabad 500081',
      hours: '10:00 AM – 12:00 AM',
      phone: '+91 40 4010 3000',
      logo: '/assets/social-offline/Hyderabad_Mind-Space.png',
      image: '/assets/social-offline/Sarjapur-3.jpg',
      hasCoworking: true,
      hasOutdoor: false
    },
    {
      id: 'hazratganj-social',
      name: 'Hazratganj SOCIAL',
      city: 'Lucknow',
      address: 'Rohtas Presidential Arcade, Vibhuti Khand / Hazratganj, Lucknow 226001',
      hours: '11:00 AM – 12:00 AM',
      phone: '+91 522 400 9000',
      logo: '/assets/social-offline/Hazratganj-Social-Logo.png',
      image: '/assets/social-offline/VK-3.jpg',
      hasCoworking: true,
      hasOutdoor: false
    }
  ] as OutletInfo[],

  menuItems: [
    {
      id: 'm1',
      name: 'Naga Chilli Cheese Toast',
      category: 'munchies',
      categoryLabel: 'Small Plates & Munchies',
      price: '₹340',
      description: 'Crispy artisanal toast gratinated with spicy raja mircha chillies and melted cheddar mozzarella blend.',
      isVeg: true,
      isChefSpecial: true,
      tag: 'Spicy Favourite'
    },
    {
      id: 'm2',
      name: 'Fully Loaded Nachos',
      category: 'munchies',
      categoryLabel: 'Small Plates & Munchies',
      price: '₹410',
      description: 'House tortilla crisps smothered in jalapeno queso, refried beans, guacamole, and fresh pico de gallo.',
      isVeg: true,
      tag: 'Shareable'
    },
    {
      id: 'm3',
      name: 'Awesomesamosa',
      category: 'munchies',
      categoryLabel: 'Small Plates & Munchies',
      price: '₹320',
      description: 'Handcrafted puff sheet samosas stuffed with spiced potatoes or smoked butter chicken gravy dip.',
      isVeg: false,
      isChefSpecial: true,
      tag: 'Iconic Social Snack'
    },
    {
      id: 'm4',
      name: 'Chilli Chicken Crispers',
      category: 'munchies',
      categoryLabel: 'Small Plates & Munchies',
      price: '₹440',
      description: 'Desi wok-tossed spicy chicken tenders with bell peppers, green scallions, and burnt garlic chili glaze.',
      isVeg: false,
      tag: 'Bar Classic'
    },
    {
      id: 'b1',
      name: 'Crispy Paneer Bao',
      category: 'baos',
      categoryLabel: 'Baos & Dimsums',
      price: '₹380',
      description: 'Fluffy steamed lotus buns filled with panko-crusted spiced paneer slab, sriracha mayo, and pickled cucumbers.',
      isVeg: true,
      tag: 'Street Legend'
    },
    {
      id: 'b2',
      name: 'Butter Chicken Bao',
      category: 'baos',
      categoryLabel: 'Baos & Dimsums',
      price: '₹440',
      description: 'Tender pulled tandoori chicken cooked in creamy makhani reduction stuffed in soft steamed baos.',
      isVeg: false,
      isChefSpecial: true,
      tag: 'Must Try'
    },
    {
      id: 'b3',
      name: 'Momos from Hell',
      category: 'baos',
      categoryLabel: 'Baos & Dimsums',
      price: '₹360',
      description: 'Pan-seared juicy dumplings tossed in an incendiary ghost pepper chili sauce. Bravehearts only.',
      isVeg: true,
      tag: 'Extra Hot'
    },
    {
      id: 'k1',
      name: 'The Legendary Butter Chicken Biryani',
      category: 'mains',
      categoryLabel: 'Mains & Biryanis',
      price: '₹520',
      description: 'Slow-dum aromatic long-grain basmati rice layered with rich tandoori chicken makhani, served with burani raita and sirka pyaz.',
      isVeg: false,
      isLegendary: true,
      isChefSpecial: true,
      tag: 'Bestseller'
    },
    {
      id: 'k2',
      name: 'Dal Makhani with Chur Chur Naan',
      category: 'mains',
      categoryLabel: 'Mains & Biryanis',
      price: '₹460',
      description: 'Overnight simmered black lentils slow-cooked with fresh white butter and cream, accompanied by crushed stuffed Amritsari naan.',
      isVeg: true,
      tag: 'Comfort Food'
    },
    {
      id: 'k3',
      name: 'SOCIAL Mezze Platter',
      category: 'mains',
      categoryLabel: 'Mains & Biryanis',
      price: '₹490',
      description: 'Hummus, smoked baba ganoush, tzatziki, crisp falafel nuggets, warm pita bread, and zaatar spiced lavash.',
      isVeg: true,
      tag: 'Healthy & Filling'
    },
    {
      id: 'k4',
      name: 'China Box Meal',
      category: 'mains',
      categoryLabel: 'Mains & Biryanis',
      price: '₹470',
      description: 'Street-style hakka noodles paired with chilli paneer or Kung Pao chicken served in classic takeout paper pail.',
      isVeg: false,
      tag: 'Desk Friendly'
    },
    {
      id: 'd1',
      name: 'The Iconic 1000ml LLIIT',
      category: 'drinks',
      categoryLabel: 'Cocktails & Signature Beverages',
      price: '₹890',
      description: 'The Longest Long Island Iced Tea served in the trademark Social test-tube tower. Vodka, gin, white rum, tequila, triple sec & cola.',
      isVeg: true,
      isLegendary: true,
      tag: 'Signature 1000ml'
    },
    {
      id: 'd2',
      name: 'Banarasi Patiala',
      category: 'drinks',
      categoryLabel: 'Cocktails & Signature Beverages',
      price: '₹480',
      description: 'Smoky bourbon whiskey infused with betel leaf, rose petal preserve (gulkand), and freshly squeezed lime.',
      isVeg: true,
      isChefSpecial: true,
      tag: 'Desi Twist'
    },
    {
      id: 'd3',
      name: 'Cold Brew Citrus Tonic',
      category: 'drinks',
      categoryLabel: 'Cocktails & Signature Beverages',
      price: '₹260',
      description: '18-hour cold steeped single-origin arabica coffee poured over artisanal tonic water and torched orange wheel.',
      isVeg: true,
      tag: 'Daytime Fuel'
    },
    {
      id: 'd4',
      name: 'Trip on the Drip',
      category: 'drinks',
      categoryLabel: 'Cocktails & Signature Beverages',
      price: '₹510',
      description: 'Dark spiced rum served in an intravenous infusion drip pouch with dark cherry and cranberry cordial.',
      isVeg: true,
      tag: 'Social Experience'
    },
    {
      id: 'sw1',
      name: 'Death by Chocolate Cake',
      category: 'desserts',
      categoryLabel: 'Desserts & Sweet Finishes',
      price: '₹370',
      description: 'Molten dark chocolate fudge sponge drenched in hot chocolate ganache, brownie crumbles, and vanilla bean gelato.',
      isVeg: true,
      isChefSpecial: true,
      tag: 'Decadent'
    },
    {
      id: 'sw2',
      name: 'Chocolate Blood Bath',
      category: 'desserts',
      categoryLabel: 'Desserts & Sweet Finishes',
      price: '₹430',
      description: 'Assorted brownies, chocolate truffles, and choco crunch drenched in raspberry coulis and hot white chocolate sauce.',
      isVeg: true,
      tag: 'Showstopper'
    }
  ] as MenuItem[],

  coworkingPasses: [
    {
      id: 'day-pass',
      name: 'SOCIAL WRKS DAY PASS',
      price: '₹500',
      billing: 'per person / day',
      benefitTag: '100% Food & Drink Redeemable',
      description: 'Walk into any participating Social outlet, grab a seat, plug in, and use your full pass value towards the menu.',
      features: [
        'Dedicated ergonomic seating with power socket',
        'Gigabit high-speed Wi-Fi network',
        'Full ₹500 redeemable on Khaana & Peena menu',
        'Free black coffee & fresh lime water all day',
        'Access from 9:00 AM to 6:00 PM'
      ]
    },
    {
      id: 'week-pass',
      name: 'SOCIAL WRKS 7-DAY BUNDLE',
      price: '₹3,000',
      billing: '7 visits / valid 30 days',
      benefitTag: 'Most Flexible',
      description: 'Perfect for hybrid workers and freelance creatives needing occasional high-focus cafe environment.',
      features: [
        'Multi-outlet access across all cities',
        '100% redeemable on food & drinks',
        'High-speed priority business Wi-Fi',
        'Priority seating during peak morning hours',
        '10% bonus coins on The Social Club'
      ]
    },
    {
      id: 'resident-pass',
      name: 'MONTHLY RESIDENT PASS',
      price: '₹9,500',
      billing: 'per month',
      benefitTag: 'Full VIP Access',
      description: 'Your permanent hot desk in town with meeting room allocations and antiSOCIAL gig entry passes.',
      features: [
        'Fixed or hot-desk workspace allocation',
        '8 hours complimentary meeting room credits',
        'Full ₹9,500 F&B redemption wallet',
        'Mailing address & courier reception services',
        'Complimentary entry to antiSOCIAL cultural gigs'
      ]
    }
  ],

  loyaltyTiers: [
    {
      tier: 'REGULAR',
      visits: '0-5 Visits',
      perk: '5% Coins back on all food & beverage orders'
    },
    {
      tier: 'INSIDER',
      visits: '6-15 Visits',
      perk: '10% Coins back + Free munchie on every 4th visit'
    },
    {
      tier: 'RESIDENT',
      visits: '16-30 Visits',
      perk: '15% Coins back + Complimentary 1000ml LLIIT on birthday week'
    },
    {
      tier: 'LEGEND',
      visits: '30+ Visits',
      perk: '20% Coins back + Priority table reservation & VIP guestlist at antiSOCIAL'
    }
  ]
};
