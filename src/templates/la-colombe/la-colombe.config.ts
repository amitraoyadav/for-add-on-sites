/**
 * LA COLOMBE Configuration & Comprehensive Dataset
 * Raoz Demo Factory — Template #4
 * Category: Restaurant, Cafe & Food Business -> Cafes and Coffee Shops
 * Reference: La Colombe Coffee Roasters (www.lacolombe.com)
 */

export interface LaColombeProduct {
  id: string;
  name: string;
  subtitle: string;
  roastLevel: 'Dark Roast' | 'Medium-Dark Roast' | 'Medium Roast' | 'Light Roast';
  roastMeter: number; // 1 to 5 (1 = Light, 5 = Dark)
  category: 'coffee-beans' | 'draft-latte' | 'gift-boxes' | 'merch';
  type: 'blend' | 'single-origin' | 'rtd-can' | 'gift-pack';
  price: number;
  originalPrice?: number;
  subscribePrice: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  notes: string[];
  description: string;
  detailedDescription: string;
  origin: string;
  process: string;
  certifications: string[];
  image: string;
  bandColor: string;
  textColor: string;
  sizes: Array<{ label: string; price: number; subscribePrice: number; oz: string }>;
  grindOptions: string[];
  nutrition?: {
    calories: string;
    caffeine: string;
    sugar: string;
    servingSize: string;
  };
}

export interface CafeLocation {
  id: string;
  name: string;
  city: 'Philadelphia' | 'New York' | 'Chicago' | 'Washington D.C.' | 'Boston' | 'Austin' | 'Los Angeles';
  address: string;
  neighborhood: string;
  hours: string;
  phone: string;
  features: string[];
  isFlagship?: boolean;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  productName: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
  recommended: boolean;
}

export const laColombeConfig = {
  id: 'la-colombe',
  numericId: 4,
  name: 'LA COLOMBE',
  fullName: 'La Colombe Coffee Roasters',
  categoryCode: 'cat-food-hospitality',
  categoryName: 'Restaurant, Cafe & Food Business',
  subcategory: 'Cafes and Coffee Shops',
  businessType: 'Specialty Coffee Roaster, Cafe Chain & E-Commerce Flagship',
  tagline: "America's Premier Craft Coffee Roaster & Pioneer of the Draft Latte",
  status: 'completed' as const,
  entryPoint: 'src/templates/la-colombe/LaColombe.tsx',
  assetDirectory: 'public/assets/la-colombe/',
  dependencies: ['lucide-react', 'react', 'motion'],
  routes: ['/', '#shop-coffee', '#draft-latte', '#subscription-club', '#cafes', '#our-story', '#brewing-guide', '#reviews'],

  placeholders: {
    brandName: 'LA COLOMBE COFFEE ROASTERS',
    tagline: 'Elevate Your Everyday Cup',
    flagshipLocation: '1335 Frankford Ave, Fishtown, Philadelphia, PA 19125',
    customerServicePhone: '1-800-563-0860',
    customerServiceEmail: 'help@lacolombe.com',
    wholesaleEmail: 'wholesale@lacolombe.com',
    pressEmail: 'press@lacolombe.com',
    instagramUrl: 'https://instagram.com/lacolombecoffee',
    foundedYear: '1994',
    founders: 'Todd Carmichael & JP Iberti',
    roasteries: 'Philadelphia, PA & Muskegon, MI',
    freeShippingThreshold: 40
  },

  theme: {
    primaryNavy: '#0C1B2A',
    secondaryGold: '#D4AF37',
    goldLight: '#FCE08B',
    creamBg: '#FBF9F5',
    cardSand: '#F5ECE0',
    borderBeige: '#E2D7C5',
    charcoal: '#1A1C20',
    textDark: '#12161A',
    textMuted: '#5C6570',
    accentRed: '#B91C1C',
    accentOrange: '#C25927'
  },

  announcements: [
    'FREE SHIPPING ON ALL ORDERS $40+',
    'TRY OUR LIMITED SEASONAL FALL BLEND — SPICED CIDER & CHESTNUT',
    'JOIN THE CLUB: SUBSCRIBE & SAVE 15% ON EVERY ORDER',
    'COLD-PRESSED & NITRO-INFUSED: EXPERIENCE THE DRAFT LATTE'
  ],

  stats: {
    roastingSince: '1994',
    cafesCount: '32+',
    reviewsCount: '28,400+',
    averageRating: '4.8',
    freeShippingMinimum: '$40'
  },

  products: [
    {
      id: 'corsica',
      name: 'Corsica',
      subtitle: 'Our Signature Classic Dark Roast',
      roastLevel: 'Dark Roast',
      roastMeter: 5,
      category: 'coffee-beans',
      type: 'blend',
      price: 16.00,
      originalPrice: 16.00,
      subscribePrice: 13.60,
      rating: 4.9,
      reviewCount: 6840,
      badge: '#1 BEST SELLER',
      notes: ["Baker's Chocolate", 'Red Wine', 'Smoky Molasses'],
      description: "It's a coffee you know and love, with deep, dark chocolatey notes and a robust, full-bodied finish. Named after the ancient Mediterranean island.",
      detailedDescription: "Corsica is our quintessential dark roast, boasting a bold, satisfying profile that has anchored our cafes since 1994. Carefully blended with specialty beans from Colombia, Brazil, Honduras, and Mexico, its deep, cocoa-forward complexity pairs gloriously with cream or holds its commanding depth black.",
      origin: 'Colombia, Brazil, Honduras, Mexico',
      process: 'Washed and Natural',
      certifications: ['Direct Trade', 'Certified Kosher', 'B-Corp Certified'],
      image: '/assets/la-colombe/corsica-box.svg',
      bandColor: '#152B52',
      textColor: '#FFFFFF',
      sizes: [
        { label: '12 oz Box', price: 16.00, subscribePrice: 13.60, oz: '12 oz' },
        { label: '2.5 lb Bag', price: 44.00, subscribePrice: 37.40, oz: '40 oz' },
        { label: '5 lb Bag', price: 78.00, subscribePrice: 66.30, oz: '80 oz' }
      ],
      grindOptions: ['Whole Bean', 'Drip / Standard Filter', 'French Press / Cold Brew', 'Espresso Grind']
    },
    {
      id: 'nizza',
      name: 'Nizza',
      subtitle: 'Sweet, Fruity Medium Roast Espresso & Drip',
      roastLevel: 'Medium Roast',
      roastMeter: 3,
      category: 'coffee-beans',
      type: 'blend',
      price: 16.00,
      subscribePrice: 13.60,
      rating: 4.8,
      reviewCount: 4120,
      badge: 'CAFE FAVORITE',
      notes: ['Milk Chocolate', 'Toasted Nuts', 'Sweet Honeycomb'],
      description: 'A medium roast blend that hits at the heart of sweet espresso. Round, approachable, and versatile for every brew method.',
      detailedDescription: 'Named after the city of Nice in southern France, Nizza is the soul of our cafe espresso bars. With its honeyed, milk-chocolate sweetness and clean nut-toned body, Nizza produces an irresistible golden crema as espresso, yet blossoms into a balanced, bright daily morning cup on any automatic drip machine.',
      origin: 'Brazil, Colombia, Ethiopia',
      process: 'Natural and Washed',
      certifications: ['Direct Trade', 'Certified Kosher'],
      image: '/assets/la-colombe/nizza-box.svg',
      bandColor: '#D99B26',
      textColor: '#FFFFFF',
      sizes: [
        { label: '12 oz Box', price: 16.00, subscribePrice: 13.60, oz: '12 oz' },
        { label: '2.5 lb Bag', price: 44.00, subscribePrice: 37.40, oz: '40 oz' },
        { label: '5 lb Bag', price: 78.00, subscribePrice: 66.30, oz: '80 oz' }
      ],
      grindOptions: ['Whole Bean', 'Drip / Standard Filter', 'French Press / Cold Brew', 'Espresso Grind']
    },
    {
      id: 'monaco',
      name: 'Monaco',
      subtitle: 'Rich Caramel & Stewed Plum Medium-Dark Roast',
      roastLevel: 'Medium-Dark Roast',
      roastMeter: 4,
      category: 'coffee-beans',
      type: 'blend',
      price: 16.00,
      subscribePrice: 13.60,
      rating: 4.8,
      reviewCount: 2950,
      badge: 'TOP RATED',
      notes: ['Caramelized Sugar', 'Stewed Plum', 'Candied Pecan'],
      description: 'An elegant French-inspired roast offering depth without char, bringing dark fruit sweetness alongside decadent caramel.',
      detailedDescription: 'Drawing from European heritage, Monaco evokes the royal Riviera with rich, dark fruit nuances layered over melted caramel and toasted pecan. A bridge between our medium Nizza and bold Corsica, Monaco holds structure and aromatic elegance for press pot and pour-over enthusiasts.',
      origin: 'Brazil, Colombia, Indonesia',
      process: 'Washed and Semi-Washed',
      certifications: ['Direct Trade', 'Certified Kosher'],
      image: '/assets/la-colombe/monaco-box.svg',
      bandColor: '#6B213F',
      textColor: '#FFFFFF',
      sizes: [
        { label: '12 oz Box', price: 16.00, subscribePrice: 13.60, oz: '12 oz' },
        { label: '2.5 lb Bag', price: 44.00, subscribePrice: 37.40, oz: '40 oz' },
        { label: '5 lb Bag', price: 78.00, subscribePrice: 66.30, oz: '80 oz' }
      ],
      grindOptions: ['Whole Bean', 'Drip / Standard Filter', 'French Press / Cold Brew', 'Espresso Grind']
    },
    {
      id: 'fall-blend',
      name: 'Fall Blend',
      subtitle: 'Limited Seasonal Autumn Roast',
      roastLevel: 'Medium-Dark Roast',
      roastMeter: 4,
      category: 'coffee-beans',
      type: 'blend',
      price: 17.00,
      subscribePrice: 14.45,
      rating: 4.9,
      reviewCount: 1480,
      badge: 'LIMITED SEASONAL',
      notes: ['Spiced Cider', 'Roasted Chestnut', 'Dark Chocolate'],
      description: 'Crafted exclusively for crisp autumn mornings. Rich layers of sweet baked apple, warming allspice, and comforting roasted chestnut.',
      detailedDescription: 'Every autumn, our master roasters craft Fall Blend to capture the sensory joy of the changing seasons. By marrying estate coffees from the highlands of Central America and East Africa, we achieve an aromatic cup with notes reminiscent of hot spiced apple cider and hearth-roasted chestnuts.',
      origin: 'Guatemala, Ethiopia, Peru',
      process: 'Washed',
      certifications: ['Direct Trade', 'Limited Edition'],
      image: '/assets/la-colombe/fallblend-box.svg',
      bandColor: '#A84318',
      textColor: '#FFFFFF',
      sizes: [
        { label: '12 oz Box', price: 17.00, subscribePrice: 14.45, oz: '12 oz' },
        { label: '2.5 lb Bag', price: 46.00, subscribePrice: 39.10, oz: '40 oz' }
      ],
      grindOptions: ['Whole Bean', 'Drip / Standard Filter', 'French Press / Cold Brew']
    },
    {
      id: 'bleue',
      name: 'Bleu',
      subtitle: 'USDA Certified Organic Dark Roast',
      roastLevel: 'Dark Roast',
      roastMeter: 5,
      category: 'coffee-beans',
      type: 'blend',
      price: 17.00,
      subscribePrice: 14.45,
      rating: 4.8,
      reviewCount: 1890,
      badge: 'USDA ORGANIC',
      notes: ['Smoky Dark Chocolate', 'Molasses', 'Toasted Marshmallow'],
      description: 'A 100% organic, full-bodied dark roast. Sweet campfire marshmallow meets rich dark chocolate with an intensely clean finish.',
      detailedDescription: 'Bleu represents our dedication to sustainable, organic coffee farming without sacrificing an ounce of bold flavor. Organically certified beans from biodynamic co-ops in Honduras and Peru are slow-roasted to a dark amber shine, unleashing smoky marshmallow and bittersweet cocoa.',
      origin: 'Honduras, Peru (Organically Grown)',
      process: 'Washed',
      certifications: ['USDA Organic', 'Fair Trade Certified', 'Non-GMO'],
      image: '/assets/la-colombe/bleue-box.svg',
      bandColor: '#134E4A',
      textColor: '#FFFFFF',
      sizes: [
        { label: '12 oz Box', price: 17.00, subscribePrice: 14.45, oz: '12 oz' },
        { label: '2.5 lb Bag', price: 46.00, subscribePrice: 39.10, oz: '40 oz' }
      ],
      grindOptions: ['Whole Bean', 'Drip / Standard Filter', 'French Press / Cold Brew']
    },
    {
      id: 'mexico-single-origin',
      name: 'Mexico',
      subtitle: 'San Roque Single Origin Specialty Crop',
      roastLevel: 'Medium Roast',
      roastMeter: 3,
      category: 'coffee-beans',
      type: 'single-origin',
      price: 18.00,
      subscribePrice: 15.30,
      rating: 4.9,
      reviewCount: 920,
      badge: 'SINGLE ORIGIN',
      notes: ['Honeycomb', 'Toasted Almond', 'Cacao Nibs'],
      description: 'Hand-picked from smallholder farms in Oaxaca and Chiapas. Silky mouthfeel with delicate floral honeycomb and milk chocolate.',
      detailedDescription: 'Grown at 1,400+ meters above sea level under shade canopies in the mountains of Mexico, this single origin showcases the extraordinary nuance of heirloom Typica and Bourbon varieties. Clean, sweet, and wonderfully refreshing.',
      origin: 'Oaxaca & Chiapas, Mexico',
      process: 'Fully Washed, Sun-Dried',
      certifications: ['Direct Trade', 'Single Origin Micro-Lot'],
      image: '/assets/la-colombe/mexico-box.svg',
      bandColor: '#C25927',
      textColor: '#FFFFFF',
      sizes: [
        { label: '12 oz Box', price: 18.00, subscribePrice: 15.30, oz: '12 oz' },
        { label: '2.5 lb Bag', price: 48.00, subscribePrice: 40.80, oz: '40 oz' }
      ],
      grindOptions: ['Whole Bean', 'Drip / Standard Filter', 'French Press / Cold Brew']
    },
    {
      id: 'gift-box-bestsellers',
      name: 'Best Sellers Gift Box',
      subtitle: 'Curated 3-Pack 12 oz Roaster Trio',
      roastLevel: 'Dark Roast',
      roastMeter: 4,
      category: 'gift-boxes',
      type: 'gift-pack',
      price: 45.00,
      originalPrice: 48.00,
      subscribePrice: 40.00,
      rating: 5.0,
      reviewCount: 3120,
      badge: 'PERFECT GIFT',
      notes: ['Includes Corsica, Nizza, and Monaco', 'Full Range of Profiles'],
      description: 'Our three most beloved roasts in a luxury foil-stamped gift case. Experience the full journey from sweet espresso to rich dark cocoa.',
      detailedDescription: 'The ultimate introduction to La Colombe. Whether purchasing for yourself or gifting to a fellow coffee lover, this gift pack provides three full-sized 12 oz boxes of Corsica (Dark), Nizza (Medium), and Monaco (Medium-Dark), packaged in our custom navy and gold embossed gift box.',
      origin: 'World Blend Selection',
      process: 'Craft Roastery Trio',
      certifications: ['Gift Box Packaging Included', 'Direct Trade'],
      image: '/assets/la-colombe/giftbox.svg',
      bandColor: '#0C1B2A',
      textColor: '#FCE08B',
      sizes: [
        { label: '3-Pack (3 × 12 oz)', price: 45.00, subscribePrice: 40.00, oz: '36 oz' }
      ],
      grindOptions: ['Whole Bean', 'Drip / Standard Filter']
    },
    // --- RTD READY-TO-DRINK DRAFT LATTES ---
    {
      id: 'triple-draft-latte',
      name: 'Triple Draft Latte',
      subtitle: '3 Shots Cold-Pressed Espresso + Silky Frothy Milk',
      roastLevel: 'Dark Roast',
      roastMeter: 4,
      category: 'draft-latte',
      type: 'rtd-can',
      price: 36.00, // 12-pack
      originalPrice: 38.00,
      subscribePrice: 30.60,
      rating: 4.9,
      reviewCount: 5410,
      badge: 'INVENTOR OF DRAFT LATTE',
      notes: ['Rich Espresso', 'Microfoam Milk', 'Subtle Natural Sweetness'],
      description: 'Silky microfoam texture poured straight from the can. Triple shot of cold-pressed espresso blended with cold farm milk. Nitrogen-infused.',
      detailedDescription: 'The Triple Draft Latte delivers an unmatched kick of cold-pressed craft coffee with the smooth texture of a cafe pour. Featuring 175mg of natural caffeine and microfoam produced by our patented InnoBev nitrogen valve.',
      origin: 'Cold-Pressed Espresso + Local Dairy',
      process: 'Nitrogen-Infused Cold Can',
      certifications: ['Gluten Free', 'Kosher Dairy', 'No Artificial Preservatives'],
      image: '/assets/la-colombe/triple-draft-latte.svg',
      bandColor: '#1A1C20',
      textColor: '#FCE08B',
      nutrition: {
        calories: '110 kcal',
        caffeine: '175 mg',
        sugar: '10g (natural lactose)',
        servingSize: '1 Can (9 fl oz / 266 mL)'
      },
      sizes: [
        { label: '12-Pack Cans (9 oz)', price: 36.00, subscribePrice: 30.60, oz: '108 fl oz' },
        { label: '24-Pack Fridge Crate', price: 68.00, subscribePrice: 57.80, oz: '216 fl oz' },
        { label: '4-Pack Sampler', price: 13.50, subscribePrice: 11.50, oz: '36 fl oz' }
      ],
      grindOptions: ['Ready To Drink Can']
    },
    {
      id: 'pumpkin-spice-draft-latte',
      name: 'Pumpkin Spice Draft Latte',
      subtitle: 'Real Pumpkin Puree & Autumn Warming Spices',
      roastLevel: 'Medium Roast',
      roastMeter: 3,
      category: 'draft-latte',
      type: 'rtd-can',
      price: 38.00,
      subscribePrice: 32.30,
      rating: 4.8,
      reviewCount: 2210,
      badge: 'SEASONAL FAVORITE',
      notes: ['Real Pumpkin Puree', 'Ceylon Cinnamon', 'Nutmeg & Clove'],
      description: 'Made with genuine pumpkin puree and real spices—never artificial syrups. Velvety, frothy, and autumnally transcendent.',
      detailedDescription: 'Our seasonal fan-favorite Draft Latte features real pumpkin puree, cold-pressed Nizza espresso, creamy milk, and warming spices. No synthetic pumpkin flavors or high fructose corn syrup.',
      origin: 'Single Crop Pumpkin + Espresso',
      process: 'Nitrogen Microfoam Injected',
      certifications: ['Real Ingredients', 'Gluten Free', 'Kosher'],
      image: '/assets/la-colombe/pumpkin-spice-latte.svg',
      bandColor: '#B44A14',
      textColor: '#FFFFFF',
      nutrition: {
        calories: '140 kcal',
        caffeine: '120 mg',
        sugar: '14g',
        servingSize: '1 Can (9 fl oz / 266 mL)'
      },
      sizes: [
        { label: '12-Pack Cans (9 oz)', price: 38.00, subscribePrice: 32.30, oz: '108 fl oz' },
        { label: '24-Pack Fridge Crate', price: 72.00, subscribePrice: 61.20, oz: '216 fl oz' }
      ],
      grindOptions: ['Ready To Drink Can']
    },
    {
      id: 'black-cold-brew',
      name: 'Single Origin Black Cold Brew',
      subtitle: 'Smooth, Zero Sugar, Double-Filtered Cold Coffee',
      roastLevel: 'Dark Roast',
      roastMeter: 4,
      category: 'draft-latte',
      type: 'rtd-can',
      price: 34.00,
      subscribePrice: 28.90,
      rating: 4.9,
      reviewCount: 3840,
      badge: 'ZERO SUGAR',
      notes: ['Smooth Cocoa', 'Clean Crisp Finish', 'Zero Sugar'],
      description: 'Slow-steeped specialty coffee double-filtered for exceptional smoothness. Zero sugar, zero calories, pure natural energy.',
      detailedDescription: 'Steeped cold for 16 hours and double-filtered to eliminate all bitterness and sediment, our Black Cold Brew reveals the natural, chocolatey sweetness of our specialty roast without a granule of added sugar.',
      origin: '100% Specialty Arabica',
      process: '16-Hour Cold Immersion',
      certifications: ['Zero Sugar', 'Non-GMO', 'Vegan', 'Keto Friendly'],
      image: '/assets/la-colombe/black-cold-brew.svg',
      bandColor: '#0F1115',
      textColor: '#FFFFFF',
      nutrition: {
        calories: '5 kcal',
        caffeine: '180 mg',
        sugar: '0g',
        servingSize: '1 Can (9 fl oz / 266 mL)'
      },
      sizes: [
        { label: '12-Pack Cans (9 oz)', price: 34.00, subscribePrice: 28.90, oz: '108 fl oz' },
        { label: '24-Pack Fridge Crate', price: 64.00, subscribePrice: 54.40, oz: '216 fl oz' }
      ],
      grindOptions: ['Ready To Drink Can']
    }
  ] as LaColombeProduct[],

  cafes: [
    {
      id: 'philly-fishtown',
      name: 'Fishtown Flagship & Roastery',
      city: 'Philadelphia',
      address: '1335 Frankford Ave, Philadelphia, PA 19125',
      neighborhood: 'Fishtown',
      hours: 'Mon-Sun: 7:00 AM – 7:00 PM',
      phone: '(267) 479-1600',
      features: ['Full Kitchen Menu', 'Draft Latte on Tap', 'Roastery Viewing', 'Outdoor Patio', 'Private Cupping Room'],
      isFlagship: true
    },
    {
      id: 'philly-rittenhouse',
      name: 'Rittenhouse Square',
      city: 'Philadelphia',
      address: '130 S 19th St, Philadelphia, PA 19103',
      neighborhood: 'Center City / Rittenhouse',
      hours: 'Mon-Fri: 6:30 AM – 6:00 PM | Sat-Sun: 7:00 AM – 6:00 PM',
      phone: '(215) 563-0860',
      features: ['Historic Cafe Vibe', 'Pastry Counter', 'Espresso Bar', 'Parkside Seating']
    },
    {
      id: 'ny-soho',
      name: 'SoHo Lafayette',
      city: 'New York',
      address: '270 Lafayette St, New York, NY 10012',
      neighborhood: 'SoHo',
      hours: 'Mon-Fri: 7:00 AM – 6:30 PM | Sat-Sun: 7:30 AM – 6:30 PM',
      phone: '(212) 625-1717',
      features: ['Espresso & Draft Bar', 'Grab & Go Cans', 'Iconic SoHo Energy']
    },
    {
      id: 'ny-tribeca',
      name: 'Tribeca',
      city: 'New York',
      address: '319 Church St, New York, NY 10013',
      neighborhood: 'Tribeca',
      hours: 'Mon-Sun: 7:00 AM – 6:00 PM',
      phone: '(212) 343-1515',
      features: ['Full Pour-Over Bar', 'Artisanal Bakery', 'Sunlit Loft Seating']
    },
    {
      id: 'chicago-west-loop',
      name: 'West Loop / Randolph',
      city: 'Chicago',
      address: '955 W Randolph St, Chicago, IL 60607',
      neighborhood: 'Fulton Market / West Loop',
      hours: 'Mon-Sun: 7:00 AM – 6:00 PM',
      phone: '(312) 733-0707',
      features: ['Industrial Timber Loft', 'Draft Latte Taps', 'Patio Seating']
    },
    {
      id: 'dc-blagden',
      name: 'Blagden Alley Historic',
      city: 'Washington D.C.',
      address: '924 Rear 5th St NW, Washington, DC 20001',
      neighborhood: 'Shaw / Blagden Alley',
      hours: 'Mon-Sun: 7:00 AM – 6:00 PM',
      phone: '(202) 289-4848',
      features: ['Exposed Brick Mews', 'Outdoor Courtyard', 'Nitro Brew Station']
    },
    {
      id: 'boston-seaport',
      name: 'Boston Seaport',
      city: 'Boston',
      address: '29 Northern Ave, Boston, MA 02210',
      neighborhood: 'Seaport District',
      hours: 'Mon-Sun: 7:00 AM – 6:00 PM',
      phone: '(617) 315-7171',
      features: ['Harbor Views', 'Breakfast Sandwiches', 'Draft Latte Crate Pickup']
    },
    {
      id: 'austin-south-congress',
      name: 'South Congress',
      city: 'Austin',
      address: '1600 S Congress Ave, Austin, TX 78704',
      neighborhood: 'SoCo',
      hours: 'Mon-Sun: 7:00 AM – 6:00 PM',
      phone: '(512) 441-2020',
      features: ['Texas Hill Country Roasts', 'Cold Brew Slushies', 'Breezy Veranda']
    }
  ] as CafeLocation[],

  customerReviews: [
    {
      id: 'rev-1',
      author: 'Marcus Vance',
      location: 'Philadelphia, PA',
      productName: 'Corsica Blend',
      rating: 5,
      title: 'The Dark Roast Gold Standard',
      comment: "I've been drinking Corsica for 12 years since I lived near the 19th street cafe. Nothing compares to the dark chocolate and red wine notes. Deep, velvety, and never bitter.",
      date: '2 days ago',
      verified: true,
      recommended: true
    },
    {
      id: 'rev-2',
      author: 'Jessica Chen',
      location: 'New York, NY',
      productName: 'Triple Draft Latte',
      rating: 5,
      title: 'Literally restaurant foam in a can',
      comment: 'I still do not understand how they get this microfoam into an aluminum can. When you crack it open it literally sounds like an espresso steam wand. Smooth, rich, not too sweet.',
      date: '1 week ago',
      verified: true,
      recommended: true
    },
    {
      id: 'rev-3',
      author: 'David Rosenthal',
      location: 'Chicago, IL',
      productName: 'Nizza Espresso Blend',
      rating: 5,
      title: 'Best espresso crema at home',
      comment: 'Pulling shots of Nizza on my home machine produces the sweetest, thickest crema. Honey and roasted hazelnut notes that shine through lattes and americanos alike.',
      date: '2 weeks ago',
      verified: true,
      recommended: true
    },
    {
      id: 'rev-4',
      author: 'Elena Rostova',
      location: 'Boston, MA',
      productName: 'Fall Blend',
      rating: 5,
      title: 'Obsessed with the spiced cider notes',
      comment: 'Fall in a mug. It has that crisp allspice and roasted chestnut character without being artificially flavored. Just pure, masterfully roasted coffee.',
      date: '3 weeks ago',
      verified: true,
      recommended: true
    }
  ] as CustomerReview[],

  brewingGuides: [
    {
      method: 'Drip Coffee Maker',
      ratio: '1:16 (60g coffee per 1 Liter water)',
      grind: 'Medium (Sea salt texture)',
      temp: '195°F – 205°F',
      time: '4 – 5 minutes',
      tip: 'Rinse your paper filter with hot water before brewing to eliminate paper taste.'
    },
    {
      method: 'French Press',
      ratio: '1:15 (55g coffee per 800ml water)',
      grind: 'Coarse (Kosher salt texture)',
      temp: '200°F',
      time: '4 minutes plunge',
      tip: 'Give it a gentle stir at 1 minute, and skim off floating foam before pressing down.'
    },
    {
      method: 'Home Espresso',
      ratio: '1:2 (18g in, 36g liquid out)',
      grind: 'Fine (Table salt / powdered sugar)',
      temp: '200°F (9 bar pressure)',
      time: '26 – 30 seconds',
      tip: 'Look for a warm honey stream. Nizza yields exceptional golden-tiger crema.'
    },
    {
      method: 'Draft Latte Can Pour',
      ratio: 'Serve ice cold (38°F)',
      grind: 'Ready-to-drink',
      temp: 'Straight from fridge',
      time: 'Crack & sip or invert into glass',
      tip: 'Do not shake before opening! Crack the tab, then pour hard into a glass for a dramatic draft head.'
    }
  ],

  faqs: [
    {
      question: 'What is the La Colombe Coffee Club subscription?',
      answer: 'Our Coffee Club lets you receive your favorite whole bean, ground coffee, or draft latte cans automatically on your schedule (every 1, 2, 3, or 4 weeks). Members save 15% on every shipment, receive free shipping on all orders over $40, and gain exclusive early access to seasonal and limited micro-lots.'
    },
    {
      question: 'How does the Draft Latte achieve real microfoam inside a can?',
      answer: 'Our patented can design features an internal nitrogen dosing valve. When you crack open the tab, liquid nitrogen vaporizes, creating millions of silky, micro-bubbles throughout the cold-pressed espresso and milk—giving you the exact creamy, frothy head of a cafe latte on tap.'
    },
    {
      question: 'What is the difference between Corsica, Nizza, and Monaco?',
      answer: 'Corsica is our boldest, most classic dark roast with deep dark chocolate and red wine notes. Nizza is a sweeter, honeyed medium roast that serves as our cafe espresso foundation. Monaco is a rich, medium-dark French style with caramel and stewed plum notes.'
    },
    {
      question: 'Are your coffees ethically sourced?',
      answer: 'Yes. La Colombe is proudly B-Corp Certified. We practice direct-trade ethical sourcing, visiting our partner farmers in Colombia, Brazil, Ethiopia, Honduras, and Mexico each harvest to pay premiums well above market rate and invest in community education and clean water.'
    }
  ]
};
