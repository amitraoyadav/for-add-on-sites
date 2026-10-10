/**
 * PHO CAFE Configuration & Dataset
 * Raoz Demo Factory — Template #3
 * Category: Restaurant, Cafe & Food Business -> Vietnamese Street Food & Noodle Bars
 * Reference: https://www.phocafe.co.uk/
 */

export interface PhoLocation {
  id: string;
  name: string;
  region: 'London' | 'South & East' | 'Midlands & North' | 'Scotland & Wales';
  address: string;
  postcode: string;
  phone: string;
  hours: string;
  hasClickAndCollect: boolean;
  hasOutdoorSeating: boolean;
}

export interface PhoDish {
  id: string;
  name: string;
  vietnameseName?: string;
  category: 'starters' | 'pho-soups' | 'bun-noodles' | 'curries' | 'rice-bowls' | 'drinks' | 'desserts';
  categoryLabel: string;
  price: string;
  calories: string;
  description: string;
  isGlutenFree: boolean;
  isVegan: boolean;
  isPopular?: boolean;
  spiceLevel?: number; // 0 to 3
}

export const phoCafeConfig = {
  id: 'pho-cafe',
  numericId: 3,
  name: 'PHO CAFE',
  categoryCode: 'cat-food-hospitality',
  categoryName: 'Restaurant, Cafe & Food Business',
  subcategory: 'Boutique Hospitality & Dining',
  businessType: 'Authentic Vietnamese Street Food Restaurant & Noodle Bar Chain',
  tagline: 'Fresh & Healthy Vietnamese Street Food — 98% Gluten Free, 12-Hour Bone Broths',
  status: 'completed' as const,
  entryPoint: 'src/templates/pho-cafe/PhoCafe.tsx',
  assetDirectory: 'public/assets/pho-cafe/',
  dependencies: ['lucide-react', 'react', 'motion'],
  routes: ['/', '#menu', '#locations', '#nutrition', '#pho-to-go', '#students', '#story', '#contact'],

  placeholders: {
    brandName: 'PHO CAFE',
    tagline: 'Vietnamese Street Food — Made Fresh Every Day',
    headOffice: 'Pho HQ, 1st Floor, 48-49 Russell Square, Bloomsbury, London WC1B 4JP',
    customerCarePhone: '+44 (0)20 7436 4488',
    customerCareEmail: 'info@phocafe.co.uk',
    pressEmail: 'press@phocafe.co.uk',
    careersEmail: 'careers@phocafe.co.uk',
    instagramUrl: 'https://www.instagram.com/phorestaurant/',
    facebookUrl: 'https://www.facebook.com/PhoRestaurant/',
    orderUrl: 'https://www.phocafe.co.uk/pho-to-go/'
  },

  theme: {
    phoRed: '#E21837',
    phoBlack: '#000000',
    phoCream: '#FBF9F5',
    phoOffWhite: '#EEE4DA',
    phoGold: '#FFCE00',
    phoCharcoal: '#1A1A1A',
    borderColor: '#262626'
  },

  metrics: {
    locationsCount: '45+',
    glutenFreePercentage: '98%',
    brothSimmerHours: '12h+',
    foundedYear: '2005'
  },

  hero: {
    title: 'VIETNAMESE STREET FOOD',
    subtitle: 'FRESH, HEALTHY & COOKED FROM SCRATCH DAILY',
    description: 'We slow-simmer our nutritious bone broths for over 12 hours so you get the deepest, richest bowl of pho outside of Saigon. 98% gluten free and accredited by Coeliac UK.',
    bgImage: '/assets/pho-cafe/hero-bg.webp'
  },

  promoCards: [
    {
      title: 'Our Menu',
      tagline: 'Everything is made fresh in each restaurant, every day.',
      buttonText: 'View Menu',
      href: '#menu',
      bgColor: 'bg-[#E21837]',
      textColor: 'text-white'
    },
    {
      title: 'Pho To Go',
      tagline: 'Order for delivery or Click & Collect right to your door.',
      buttonText: 'Order Now',
      href: '#pho-to-go',
      bgColor: 'bg-[#E21837]',
      textColor: 'text-white'
    }
  ],

  foodSliderDishes: [
    {
      id: 'slider-1',
      title: 'Phở Đặc Biệt (House Special Pho)',
      description: 'Slow-cooked brisket, flash-fried steak, and beef meatballs in our signature 12-hour aromatic bone broth with fresh Thai basil, lime and sawtooth herb.',
      image: '/assets/pho-cafe/dish-1.webp',
      badge: 'Signature Pho',
      coeliacApproved: true
    },
    {
      id: 'slider-2',
      title: 'Phở Chay (Spicy Tofu & Mushroom)',
      description: 'Crispy tofu and tender button mushrooms in our fragrant vegetarian 12-hour broth topped with fresh coriander and bird’s eye chili.',
      image: '/assets/pho-cafe/dish-2.webp',
      badge: 'Vegan Favourite',
      coeliacApproved: true
    },
    {
      id: 'slider-3',
      title: 'Gỏi Cuốn (Fresh Summer Rolls)',
      description: 'Translucent rice paper wraps packed with fragrant herbs, vermicelli noodles, and tender tiger prawns or tofu, served with our rich house peanut dip.',
      image: '/assets/pho-cafe/dish-3.webp',
      badge: 'Healthy Starter',
      coeliacApproved: true
    },
    {
      id: 'slider-4',
      title: 'Bún Chả Giò (Crispy Vermicelli Bowl)',
      description: 'Rice vermicelli noodle salad bowl with crispy vegetable spring rolls, wok-seared toppings, pickled mooli and carrots, fresh mint and roasted peanuts.',
      image: '/assets/pho-cafe/dish-4.webp',
      badge: 'Street Food Legend',
      coeliacApproved: true
    }
  ],

  nutritionPillars: [
    {
      title: '98% Gluten Free',
      description: 'Accredited by Coeliac UK. Almost our entire menu is naturally gluten free, including our rice noodles, spring rolls, and sauces.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Nutritious Bone Broths',
      description: 'Simmered in giant cauldrons for a minimum of 12 hours with roasted marrow bones, star anise, cinnamon, and burnt ginger. High in collagen.',
      icon: 'Flame'
    },
    {
      title: 'Loads Of Vegan Options',
      description: 'Certified vegan broths, plant-based spring rolls, THIS™ Isn’t Chicken, and fermented soy sauces ensure vegans never compromise on flavour.',
      icon: 'Leaf'
    },
    {
      title: 'Freshly Cooked Food',
      description: 'Nothing is frozen or pre-packaged. Herbs are prepped every single morning and each bowl is assembled fresh to order.',
      icon: 'Sparkles'
    }
  ],

  menuItems: [
    // Starters
    {
      id: 'p1',
      name: 'Fresh Summer Rolls (Gỏi Cuốn)',
      vietnameseName: 'Gỏi Cuốn Tôm',
      category: 'starters',
      categoryLabel: 'Street Food & Starters',
      price: '£7.50',
      calories: '185 kcal',
      description: 'Translucent rice paper rolls filled with herbs, vermicelli and king prawns or tofu with rich peanut dipping sauce.',
      isGlutenFree: true,
      isVegan: false,
      isPopular: true
    },
    {
      id: 'p2',
      name: 'Crispy Spring Rolls (Chả Giò)',
      vietnameseName: 'Chả Giò Heo',
      category: 'starters',
      categoryLabel: 'Street Food & Starters',
      price: '£7.95',
      calories: '320 kcal',
      description: 'Pork or veggie crispy fried spring rolls with lettuce cups, fresh mint and traditional nước chấm dipping sauce.',
      isGlutenFree: true,
      isVegan: false,
      isPopular: true
    },
    {
      id: 'p3',
      name: 'Salt & Pepper Baby Squid (Mực Chiên Muối)',
      vietnameseName: 'Mực Chiên Muối',
      category: 'starters',
      categoryLabel: 'Street Food & Starters',
      price: '£8.95',
      calories: '280 kcal',
      description: 'Crispy flash-fried baby squid seasoned with coarse sea salt, cracked black pepper, fresh chilies, and lime dip.',
      isGlutenFree: true,
      isVegan: false,
      isPopular: true,
      spiceLevel: 1
    },
    {
      id: 'p4',
      name: 'Chicken Wings with Sriracha (Cánh Gà)',
      vietnameseName: 'Cánh Gà Chiên',
      category: 'starters',
      categoryLabel: 'Street Food & Starters',
      price: '£8.50',
      calories: '390 kcal',
      description: 'Marinated crispy chicken wings tossed in our sweet and spicy sriracha glaze and sesame seeds.',
      isGlutenFree: true,
      isVegan: false,
      spiceLevel: 2
    },

    // Pho Noodle Soups
    {
      id: 'ph1',
      name: 'Flash Fried Steak Pho (Phở Tái Lăn)',
      vietnameseName: 'Phở Tái Lăn',
      category: 'pho-soups',
      categoryLabel: 'Classic Pho Noodle Soups',
      price: '£13.50',
      calories: '495 kcal',
      description: 'Prime beef steak flash-fried with garlic, served in our rich 12-hour bone broth with flat rice noodles and fresh herb garnish.',
      isGlutenFree: true,
      isVegan: false,
      isPopular: true
    },
    {
      id: 'ph2',
      name: 'Brisket & Meatball Pho (Phở Chín & Bò Viên)',
      vietnameseName: 'Phở Chín Bò Viên',
      category: 'pho-soups',
      categoryLabel: 'Classic Pho Noodle Soups',
      price: '£13.25',
      calories: '520 kcal',
      description: 'Slow-simmered tender brisket and handmade Vietnamese beef meatballs in aromatic 12-hour beef broth.',
      isGlutenFree: true,
      isVegan: false
    },
    {
      id: 'ph3',
      name: 'Poached Chicken Pho (Phở Gà)',
      vietnameseName: 'Phở Gà Ta',
      category: 'pho-soups',
      categoryLabel: 'Classic Pho Noodle Soups',
      price: '£12.95',
      calories: '420 kcal',
      description: 'Tender chicken breast poached in fragrant spiced chicken broth with rice noodles and spring onions.',
      isGlutenFree: true,
      isVegan: false,
      isPopular: true
    },
    {
      id: 'ph4',
      name: 'Mushroom & Tofu Pho (Phở Nấm Rơm Chay)',
      vietnameseName: 'Phở Nấm Chay',
      category: 'pho-soups',
      categoryLabel: 'Classic Pho Noodle Soups',
      price: '£12.50',
      calories: '360 kcal',
      description: 'Button mushrooms, straw mushrooms, and crispy bean curd in our dedicated vegan 12-hour spiced vegetable broth.',
      isGlutenFree: true,
      isVegan: true,
      isPopular: true
    },
    {
      id: 'ph5',
      name: 'Spicy Imperial Beef Noodle (Bún Bò Huế)',
      vietnameseName: 'Bún Bò Huế',
      category: 'pho-soups',
      categoryLabel: 'Classic Pho Noodle Soups',
      price: '£13.95',
      calories: '560 kcal',
      description: 'Spicy lemongrass broth with flash-fried steak, brisket, and round rice vermicelli noodles. Central Vietnam street staple.',
      isGlutenFree: true,
      isVegan: false,
      spiceLevel: 3,
      isPopular: true
    },

    // Bun Vermicelli Bowls
    {
      id: 'b1',
      name: 'Chargrilled Lemongrass Pork Bún',
      vietnameseName: 'Bún Thịt Nướng',
      category: 'bun-noodles',
      categoryLabel: 'Bún Vermicelli Salad Bowls',
      price: '£13.25',
      calories: '480 kcal',
      description: 'Warm rice vermicelli noodles topped with chargrilled lemongrass pork, fresh mint, peanuts, crispy shallots and a crispy spring roll.',
      isGlutenFree: true,
      isVegan: false,
      isPopular: true
    },
    {
      id: 'b2',
      name: 'Crispy Tofu & Spring Roll Bún',
      vietnameseName: 'Bún Chả Giò Chay',
      category: 'bun-noodles',
      categoryLabel: 'Bún Vermicelli Salad Bowls',
      price: '£12.50',
      calories: '440 kcal',
      description: 'Warm vermicelli with golden fried tofu cubes, crispy vegetarian spring rolls, fresh herbs, pickled veg and sweet ginger soy dressing.',
      isGlutenFree: true,
      isVegan: true,
      isPopular: true
    },

    // Curries & Rice Bowls
    {
      id: 'c1',
      name: 'Vietnamese Coconut Curry with Chicken',
      vietnameseName: 'Cà-ri Gà',
      category: 'curries',
      categoryLabel: 'Aromatic Vietnamese Curries',
      price: '£13.75',
      calories: '580 kcal',
      description: 'Rich, fragrant curry infused with lemongrass, kaffir lime, and coconut milk, with chicken breast, sweet potato and steamed jasmine rice.',
      isGlutenFree: true,
      isVegan: false,
      isPopular: true,
      spiceLevel: 1
    },
    {
      id: 'c2',
      name: 'Tofu & Veg Coconut Curry (Cà-ri Chay)',
      vietnameseName: 'Cà-ri Chay',
      category: 'curries',
      categoryLabel: 'Aromatic Vietnamese Curries',
      price: '£12.95',
      calories: '510 kcal',
      description: 'Tofu, mushrooms, green beans and sweet potato simmered in aromatic Vietnamese coconut curry broth with broken rice.',
      isGlutenFree: true,
      isVegan: true,
      spiceLevel: 1
    },

    // Drinks & Desserts
    {
      id: 'd1',
      name: 'Vietnamese Iced Coffee (Cà Phê Sữa Đá)',
      vietnameseName: 'Cà Phê Sữa Đá',
      category: 'drinks',
      categoryLabel: 'Beverages & Vietnamese Coffee',
      price: '£4.25',
      calories: '140 kcal',
      description: 'Slow-dripped dark roast Vietnamese robusta coffee poured over sweet condensed milk and crushed ice.',
      isGlutenFree: true,
      isVegan: false,
      isPopular: true
    },
    {
      id: 'd2',
      name: 'Fresh Apple, Mint & Lime Juice',
      category: 'drinks',
      categoryLabel: 'Beverages & Vietnamese Coffee',
      price: '£4.95',
      calories: '95 kcal',
      description: 'Cold-pressed green apples, freshly muddled garden mint, and freshly squeezed lime.',
      isGlutenFree: true,
      isVegan: true
    },
    {
      id: 's1',
      name: 'Warm Banana Fritters (Bánh Chuối)',
      vietnameseName: 'Chuối Chiên',
      category: 'desserts',
      categoryLabel: 'Vietnamese Desserts',
      price: '£6.50',
      calories: '310 kcal',
      description: 'Crispy fried banana fritters in light gluten-free batter served with creamy coconut ice cream and roasted sesame.',
      isGlutenFree: true,
      isVegan: true,
      isPopular: true
    }
  ] as PhoDish[],

  locations: [
    {
      id: 'borough',
      name: 'Pho Borough Market',
      region: 'London',
      address: '2-4 Tooley Street, London Bridge',
      postcode: 'SE1 2SY',
      phone: '020 7403 9873',
      hours: 'Mon-Sun: 11:30 - 22:30',
      hasClickAndCollect: true,
      hasOutdoorSeating: true
    },
    {
      id: 'oxford-circus',
      name: 'Pho Oxford Circus',
      region: 'London',
      address: '3 Great Titchfield Street, Fitzrovia',
      postcode: 'W1W 8AX',
      phone: '020 7436 0111',
      hours: 'Mon-Sat: 11:30 - 23:00, Sun: 12:00 - 22:00',
      hasClickAndCollect: true,
      hasOutdoorSeating: false
    },
    {
      id: 'covent-garden',
      name: 'Pho Covent Garden',
      region: 'London',
      address: '65A Long Acre, Covent Garden',
      postcode: 'WC2E 9JH',
      phone: '020 7240 0812',
      hours: 'Mon-Sun: 11:30 - 23:00',
      hasClickAndCollect: true,
      hasOutdoorSeating: false
    },
    {
      id: 'battersea',
      name: 'Pho Battersea Rise',
      region: 'London',
      address: '50-52 Battersea Rise, Clapham',
      postcode: 'SW11 1HN',
      phone: '020 7228 8933',
      hours: 'Mon-Sun: 12:00 - 22:30',
      hasClickAndCollect: true,
      hasOutdoorSeating: true
    },
    {
      id: 'soho',
      name: 'Pho Soho (Wardour St)',
      region: 'London',
      address: '163-164 Wardour Street, Soho',
      postcode: 'W1F 8ZW',
      phone: '020 7434 3938',
      hours: 'Mon-Sat: 11:30 - 23:30, Sun: 12:00 - 22:30',
      hasClickAndCollect: true,
      hasOutdoorSeating: false
    },
    {
      id: 'brighton',
      name: 'Pho Brighton',
      region: 'South & East',
      address: '12 Black Lion Street, The Lanes, Brighton',
      postcode: 'BN1 1ND',
      phone: '01273 202 403',
      hours: 'Mon-Sun: 11:30 - 22:30',
      hasClickAndCollect: true,
      hasOutdoorSeating: true
    },
    {
      id: 'cambridge',
      name: 'Pho Cambridge',
      region: 'South & East',
      address: '1 Wheeler Street, Cambridge',
      postcode: 'CB2 3QB',
      phone: '01223 354 803',
      hours: 'Mon-Sun: 11:30 - 22:00',
      hasClickAndCollect: true,
      hasOutdoorSeating: false
    },
    {
      id: 'birmingham',
      name: 'Pho Birmingham Grand Central',
      region: 'Midlands & North',
      address: 'Grand Central, Stephenson Place, Birmingham',
      postcode: 'B2 4XJ',
      phone: '0121 448 3603',
      hours: 'Mon-Sat: 11:30 - 22:00, Sun: 11:30 - 21:00',
      hasClickAndCollect: true,
      hasOutdoorSeating: false
    },
    {
      id: 'manchester',
      name: 'Pho Manchester Corn Exchange',
      region: 'Midlands & North',
      address: 'The Corn Exchange, 37 Hanging Ditch, Manchester',
      postcode: 'M4 3TR',
      phone: '0161 464 9779',
      hours: 'Mon-Sun: 12:00 - 22:30',
      hasClickAndCollect: true,
      hasOutdoorSeating: true
    },
    {
      id: 'leeds',
      name: 'Pho Leeds Trinity',
      region: 'Midlands & North',
      address: 'Trinity Leeds, Albion Street, Leeds',
      postcode: 'LS1 5AY',
      phone: '0113 246 8466',
      hours: 'Mon-Sun: 11:30 - 22:00',
      hasClickAndCollect: true,
      hasOutdoorSeating: false
    },
    {
      id: 'bristol',
      name: 'Pho Bristol Clare Street',
      region: 'South & East',
      address: '28 Clare Street, Bristol',
      postcode: 'BS1 1YA',
      phone: '0117 911 9742',
      hours: 'Mon-Sun: 11:30 - 22:30',
      hasClickAndCollect: true,
      hasOutdoorSeating: true
    },
    {
      id: 'edinburgh',
      name: 'Pho Edinburgh St James Quarter',
      region: 'Scotland & Wales',
      address: 'Level 4, St James Quarter, Edinburgh',
      postcode: 'EH1 3AE',
      phone: '0131 385 7888',
      hours: 'Mon-Sun: 11:30 - 22:00',
      hasClickAndCollect: true,
      hasOutdoorSeating: false
    },
    {
      id: 'cardiff',
      name: 'Pho Cardiff Mill Lane',
      region: 'Scotland & Wales',
      address: '5-10 Mill Lane, Cardiff',
      postcode: 'CF10 1FL',
      phone: '029 2034 1622',
      hours: 'Mon-Sun: 11:30 - 22:30',
      hasClickAndCollect: true,
      hasOutdoorSeating: true
    }
  ] as PhoLocation[],

  teamQuotes: [
    {
      name: 'Fran',
      role: 'Operations Manager',
      quote: 'We taste our broths every morning before service starts. If it hasn’t hit that 12-hour sweet spot of star anise and roasted ginger, it doesn’t leave the kitchen.',
      image: '/assets/pho-cafe/team-fran.webp'
    },
    {
      name: 'Max',
      role: 'Openings Manager',
      quote: 'Vietnamese food isn’t just delicious, it’s vibrant, energetic and naturally good for you. Watching guests discover pho for the first time never gets old.',
      image: '/assets/pho-cafe/team-max.webp'
    },
    {
      name: 'Muthu',
      role: 'Head Chef, HQ',
      quote: 'Our commitment to 98% gluten free accreditation with Coeliac UK is sacred. People with coeliac disease can eat here without hesitation or fear.',
      image: '/assets/pho-cafe/team-muthu.webp'
    }
  ]
};
