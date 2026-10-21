/**
 * Raoz Demo Factory — Central Template Manifest
 * Fresh Template Collection — Reset and Established
 * Template #1: SAZY CAFE (Restaurant, Cafe & Food Business -> Cafes and Coffee Shops)
 */

import { TemplateManifestItem } from '../types/template.types';

export const TEMPLATE_MANIFEST: TemplateManifestItem[] = [
  // --- TEMPLATE #1: SAZY CAFE (First template in the fresh collection) ---
  {
    id: 'sazy-cafe',
    numericId: 1,
    name: 'SAZY CAFE',
    tagline: 'Elevated Japanese-Inspired Gastronomy & Artisanal Coffee Lounge',
    categoryCode: 'cat-food-hospitality',
    categoryLetter: '1',
    categoryName: 'Restaurant, Cafe & Food Business',
    subcategory: 'Cafes and Coffee Shops',
    businessType: 'Complete restaurant/cafe website',
    targetClients: 'Cafe owners, specialty coffee roasters, Japanese dining lounges, bistro operators',
    batch: 1,
    status: 'completed',
    entryPoint: 'src/templates/sazy-cafe/SazyCafe.tsx',
    assetPath: 'public/assets/sazy-cafe/',
    thumbnail: '/assets/sazy-cafe/hero-banner.svg',
    dependencies: ['lucide-react', 'react'],
    features: [
      'Elevated Japanese-inspired dining menu & Toyosu-flown raw sushi bar',
      'Artisanal Kyoto slow-drip coffee & ceremonial matcha beverage lounge',
      'Interactive Table Reservation Modal with room selector',
      'Private dining and historic Victorian mansion event buyout inquiries',
      'Curated Happy Hour social tradition specials (3:00 PM – 5:00 PM)',
      'Curbside takeout & signature omakase bento box ordering interface',
      'Editable business placeholders for real contact info transfer'
    ],
    conversionTriggers: [
      'Reserve Table',
      'Order Takeout',
      'Explore Menus',
      'Private Dining Inquiry',
      'Call Concierge'
    ],
    colorTheme: {
      primary: '#d4af37',
      secondary: '#181a1f',
      bgStyle: 'bg-[#0b0c0e]'
    },
    referenceSource: {
      type: 'zip',
      title: 'Uploaded Adachi Restaurant ZIP and HTML reference',
      notes: 'Faithfully rebuilt with authentic Victorian dining sanctuary aesthetic and SAZY CAFE branding.',
      receivedAt: '2026-10-09'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Sub-router built with section anchors.'
    },
    routes: ['/', '#about', '#menu', '#happy-hour', '#private-dining', '#gallery', '#location'],
    completedAt: '2026-10-09'
  },

  // --- TEMPLATE #2: SOCIAL OFFLINE (Second template in the fresh collection) ---
  {
    id: 'social-offline',
    numericId: 2,
    name: 'SOCIAL OFFLINE',
    tagline: "India's Favourite Place to Chill — Where Work Meets Play",
    categoryCode: 'cat-food-hospitality',
    categoryLetter: '1',
    categoryName: 'Restaurant, Cafe & Food Business',
    subcategory: 'Cocktail Bars & Lounges',
    businessType: 'Neighbourhood Cafe, High-Energy Bar & Collaborative Workspace',
    targetClients: 'Restaurateurs, cafe-bar owners, co-working operators, gastropub managers, nightlife hospitality groups',
    batch: 1,
    status: 'completed',
    entryPoint: 'src/templates/social-offline/SocialOffline.tsx',
    assetPath: 'public/assets/social-offline/',
    thumbnail: '/assets/social-offline/Website-banner-desktop.png',
    dependencies: ['lucide-react', 'react', 'motion'],
    features: [
      'Original SOCIAL OFFLINE branding, typography, and raw industrial aesthetic',
      'Hero carousel featuring all-day cafe, nightlife, coworking, and antiSOCIAL gigs',
      'Outlets directory covering 14 top locations across 8 metro cities with direct booking',
      'Khaana & Peena menu with Veg/Non-Veg filter and 1000ml LLIIT cocktail towers',
      'SOCIAL WRKS co-working space pass calculator with 100% F&B credit redemption',
      'The Social Club tiered loyalty program with cashback coins & VIP perks',
      'Direct online ordering simulator with WhatsApp tracking & third-party partner routes',
      'Editable business placeholders inspector for seamless Raoz Website Maker export'
    ],
    conversionTriggers: [
      'Reserve Table',
      'Order Food Online',
      'Purchase Workpass',
      'Join The Social Club',
      'Check antiSOCIAL Calendar',
      'Direct Phone Call'
    ],
    colorTheme: {
      primary: '#f95721',
      secondary: '#12141c',
      bgStyle: 'bg-[#0a0b0e]'
    },
    referenceSource: {
      type: 'zip',
      title: 'Uploaded saveweb2zip-com-socialoffline-in.zip (socialoffline.in)',
      notes: 'Faithfully reconstructed full experience of Social Offline with authentic assets, menu items, outlets, and coworking passes.',
      receivedAt: '2026-10-09'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Sub-router built with section anchors.'
    },
    routes: ['/', '#outlets', '#menu', '#social-works', '#social-club', '#culture', '#about'],
    completedAt: '2026-10-09'
  },

  // --- TEMPLATE #3: PHO CAFE (Third template in the fresh collection) ---
  {
    id: 'pho-cafe',
    numericId: 3,
    name: 'PHO CAFE',
    tagline: 'Fresh & Healthy Vietnamese Street Food — 98% Gluten Free, 12-Hour Bone Broths',
    categoryCode: 'cat-food-hospitality',
    categoryLetter: '1',
    categoryName: 'Restaurant, Cafe & Food Business',
    subcategory: 'Boutique Hospitality & Dining',
    businessType: 'Authentic Vietnamese Street Food Restaurant & Noodle Bar Chain',
    targetClients: 'Restaurateurs, noodle bar owners, Vietnamese street food operators, fast-casual hospitality groups',
    batch: 1,
    status: 'completed',
    entryPoint: 'src/templates/pho-cafe/PhoCafe.tsx',
    assetPath: 'public/assets/pho-cafe/',
    thumbnail: '/assets/pho-cafe/hero-bg.webp',
    dependencies: ['lucide-react', 'react', 'motion'],
    features: [
      'Original Pho Cafe branding, trademark red block & cream logo, and floating black pill nav',
      'Large Vietnamese street food hero banner with steaming pho atmosphere photo',
      'Red promotional cards for "Our Menu" and "Pho To Go" Click & Collect',
      'Something Pho Everyone interactive dish slider with Coeliac UK accreditation badge',
      '4 Nutrition pillars: 98% Gluten Free, 12-Hour Bone Broths, Vegan Options, Freshly Cooked',
      'Find A Pho search tool and restaurant directory across 45+ locations in the UK',
      'Just Pho Students 15% discount promotional banner and claim voucher flow',
      'Interactive Table Reservation Modal with guest counter, time picker, and dietary notes',
      'Behind the Broth kitchen voices and responsive 7-photo atmospheric mosaic gallery',
      'Editable business placeholders inspector for seamless Raoz Website Maker export'
    ],
    conversionTriggers: [
      'Book a Table',
      'Order Pho To Go',
      'Explore Complete Menu',
      'Find A Pho Location',
      'Claim Student Discount',
      'View Coeliac Nutrition Info'
    ],
    colorTheme: {
      primary: '#E21837',
      secondary: '#000000',
      bgStyle: 'bg-[#FBF9F5]'
    },
    referenceSource: {
      type: 'zip',
      title: 'Uploaded saveweb2zip-com-www-phocafe-co-uk.zip (https://www.phocafe.co.uk/)',
      notes: 'Faithfully reconstructed complete experience of Pho Cafe with authentic assets, dish sliders, 45+ UK locations, and Coeliac UK nutrition guide.',
      receivedAt: '2026-10-10'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Sub-router built with section anchors.'
    },
    routes: ['/', '#menu', '#locations', '#nutrition', '#pho-to-go', '#students'],
    completedAt: '2026-10-10'
  },

  // --- TEMPLATE #4: LA COLOMBE (Fourth template under Cafes & Coffee Shops) ---
  {
    id: 'la-colombe',
    numericId: 4,
    name: 'LA COLOMBE',
    tagline: "America's Premier Specialty Craft Coffee Roaster & Pioneer of the Draft Latte",
    categoryCode: 'cat-food-hospitality',
    categoryLetter: '1',
    categoryName: 'Restaurant, Cafe & Food Business',
    subcategory: 'Cafes and Coffee Shops',
    businessType: 'Specialty Coffee Roaster, Cafe Chain & E-Commerce Flagship',
    targetClients: 'Specialty coffee roasters, third-wave cafes, beverage brand founders, wholesale coffee distributors',
    batch: 2,
    status: 'completed',
    entryPoint: 'src/templates/la-colombe/LaColombe.tsx',
    assetPath: 'public/assets/la-colombe/',
    thumbnail: '/assets/la-colombe/hero-bg.svg',
    dependencies: ['lucide-react', 'react', 'motion'],
    features: [
      'Official La Colombe visual language, dove emblem, and classic serif wordmark',
      'Original Corsica, Nizza, Monaco, Fall Blend, Bleu Organic & Mexico roast catalog',
      'RTD Canned Draft Latte & Cold Brew innovation showcase with microfoam tech',
      'Coffee Club subscription flow with 15% discount and flexible delivery cadences',
      'Interactive roast-matching 3-step recommendation quiz',
      'Sliding Shopify-style cart drawer with $40 free shipping progress meter',
      'Quick View & Full Product Detail Modal with grind and bag size selectors',
      'Verified customer review showcase modeled after Okendo reviews widget',
      'Brewing guides for Drip, French Press, Home Espresso & Draft Latte can pour',
      'Directory of 32+ neighborhood cafe locations across Philadelphia, NY, Chicago, DC & Austin'
    ],
    conversionTriggers: [
      'Shop Signature Roasts',
      'Join The Coffee Club (Save 15%)',
      'Order Draft Latte Cans',
      'Find Neighborhood Cafe',
      'Take Roast Matcher Quiz'
    ],
    colorTheme: {
      primary: '#0C1B2A',
      secondary: '#D4AF37',
      bgStyle: 'bg-[#FBF9F5]'
    },
    referenceSource: {
      type: 'zip',
      title: 'Uploaded La Colombe ZIP and Shopify theme source (https://www.lacolombe.com/)',
      sourceUrl: 'https://www.lacolombe.com/',
      notes: 'Faithfully reconstructed full ecommerce and cafe flagship experience for La Colombe with authentic product catalog, draft latte cans, coffee club, and cafe directory.',
      receivedAt: '2026-10-10'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Sub-router built with internal tab states.'
    },
    routes: ['/', '#shop-coffee', '#draft-latte', '#subscription-club', '#cafes', '#our-story', '#brewing-guide', '#reviews'],
    completedAt: '2026-10-10'
  },

  // --- TEMPLATE #5: WEDDING PHOTO PLANET (Photography / Wedding & Event Services) ---
  {
    id: 'wedding-photo-planet',
    numericId: 5,
    name: 'WEDDING PHOTO PLANET',
    tagline: 'Best Wedding Photographer in Delhi NCR — Candid Moments, Pre-Wedding Shoots & Cinematic Films',
    categoryCode: 'cat-photography',
    categoryLetter: '21',
    categoryName: 'Photography',
    subcategory: 'Wedding Photography',
    businessType: 'Complete Wedding Photography, Pre-Wedding & Cinematic Video Film Studio',
    targetClients: 'Couples, wedding planners, event organizers, families seeking candid & cinematography coverage across India',
    batch: 2,
    status: 'completed',
    entryPoint: 'src/templates/wedding-photo-planet/WeddingPhotoPlanet.tsx',
    assetPath: 'public/assets/wedding-photo-planet/',
    thumbnail: '/assets/wedding-photo-planet/banner-celebrity-1.svg',
    dependencies: ['lucide-react', 'react', 'motion'],
    features: [
      'Original Wedding Photo Planet logo, branding, aperture icon, and red/gold design system',
      'Full 8-slide dynamic banner carousel with indicators and controls',
      'Word-for-word preserved About Us and Founder Vision (Mr. Rajat Verma)',
      'Complete services suite: Wedding Photography, Pre-Wedding Photography, and Cinematography',
      '52-composition gallery with category filter tabs and high-res lightbox modal',
      '15 verified client reviews from real couples (Surbhi & Sagar, Himani & Sunandan, etc.)',
      'Why Choose Us 9-pillar breakdown and event glimpses storytelling',
      'Interactive Booking Enquiry Form and simulated confirmation receipt',
      'Direct floating WhatsApp and phone tap quick-actions',
      'Full multi-page experience: Home, Images, Wedding, Pre-Wedding, Cinematography, Blog, Contact'
    ],
    conversionTriggers: [
      'Book Shoot / Enquiry Form',
      'WhatsApp Quick Chat',
      'Direct Phone Call',
      'Explore Complete Gallery',
      'View Cinematic Video Film'
    ],
    colorTheme: {
      primary: '#991B1B',
      secondary: '#E11D48',
      bgStyle: 'bg-[#FFFFFF]'
    },
    referenceSource: {
      type: 'zip',
      title: 'Wedding Photo Planet (https://www.weddingphotoplanet.com/)',
      sourceUrl: 'https://www.weddingphotoplanet.com/',
      notes: 'Faithfully reconstructed full multi-page experience with all 52 gallery items, 15 reviews, services, and enquiry workflows.',
      receivedAt: '2026-10-10'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Sub-router built with internal page states.'
    },
    routes: ['/', 'images', 'wedding', 'pre-wedding', 'cinematography', 'blog', 'contact'],
    completedAt: '2026-10-10'
  },

  // --- TEMPLATE #6: PHOTO PHACTORY (Fine Art Wedding Photography & Cinematography) ---
  {
    id: 'photo-phactory',
    numericId: 6,
    name: 'PHOTO PHACTORY',
    tagline: 'Crafting Treasures for Life — Real Weddings, Pre-Wedding Romance & Fine Art Cinematography',
    categoryCode: 'cat-photography',
    categoryLetter: '21',
    categoryName: 'Photography',
    subcategory: 'Photography Portfolio & Real Weddings',
    businessType: 'Boutique Wedding Photography, Cinematic Films & Fine Art Portrait Studio',
    targetClients: 'Couples, destination wedding planners, families seeking fine-art candid photography and cinematic films across Mumbai, Goa, Rajasthan & worldwide',
    batch: 2,
    status: 'completed',
    entryPoint: 'src/templates/photo-phactory/PhotoPhactory.tsx',
    assetPath: 'public/assets/photo-phactory/',
    thumbnail: '/assets/photo-phactory/home-bg1.svg',
    dependencies: ['lucide-react', 'react', 'motion'],
    features: [
      'Original Photo Phactory logo, branding, and minimalist dark/light design language (#6DA716 olive green accent)',
      'Revolution Slider 6 hero showcase with auto-advancing slides and progress indicators',
      'Milestones counter section (10+ Years, 250+ Clients, 350+ Projects, 5+ Awards)',
      'Thin. Light. Epic quote section ("Start Something New") with high-impact visual backdrop',
      'Portfolio showcase with filter tabs (All, Wedding, Pre-Wedding, Newborn, Portrait) and full-screen lightbox modal',
      'Real Wedding deep-dive stories with photo essays, venue highlights, and couple testimonials',
      'Cinematic Wedding Film & Teaser video showcase with interactive video player modal',
      'Client testimonials carousel with authentic couple feedback (Rakhi Sehgal, Dhruv Mehta, Ray Fernandes)',
      'Fine-art photography journal & blog with detailed articles on wedding planning and candid photography',
      'Interactive Consultation Booking & Enquiry modal with date selector and direct WhatsApp float'
    ],
    conversionTriggers: [
      'Book Free Consultation',
      'WhatsApp Quick Chat (+91 9819599054)',
      'Inquire Custom Package',
      'Explore Complete Portfolio',
      'Watch Cinematic Wedding Film'
    ],
    colorTheme: {
      primary: '#000000',
      secondary: '#6DA716',
      bgStyle: 'bg-[#FFFFFF]'
    },
    referenceSource: {
      type: 'zip',
      title: 'Photo Phactory (https://photophactory.in/)',
      sourceUrl: 'https://photophactory.in/',
      notes: 'Faithfully reconstructed full experience with Revolution Slider 6, 24-item portfolio, real wedding stories, cinematic video showcase, testimonials, blog, and inquiry flow.',
      receivedAt: '2026-10-10'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Sub-router built with internal active page states.'
    },
    routes: ['/', 'about', 'portfolio', 'real-wedding', 'video', 'blog', 'contact'],
    completedAt: '2026-10-10'
  },

  // --- TEMPLATE #7: TELL-A-TALE STUDIOS (Corporate & Event Photography, Portfolio & Films) ---
  {
    id: 'tell-a-tale',
    numericId: 7,
    name: 'TELL-A-TALE STUDIOS',
    tagline: 'Corporate & Event Photographer in Mumbai for Conferences, Consulates & PR-Ready Coverage',
    categoryCode: 'cat-photography',
    categoryLetter: '21',
    categoryName: 'Photography',
    subcategory: 'Corporate and Event Photography',
    businessType: 'Corporate Events, Leadership Portraits, Celebrations, Food, Product & Films Studio',
    targetClients: 'Corporations, consulates, conference organizers, leadership teams, founders, private celebration hosts across Mumbai & India',
    batch: 3,
    status: 'completed',
    entryPoint: 'src/templates/tell-a-tale/TellATale.tsx',
    assetPath: 'public/assets/tell-a-tale/',
    thumbnail: '/assets/tell-a-tale/wedding-couple-portrait.jpg',
    dependencies: ['lucide-react', 'react', 'motion'],
    features: [
      'Original Tell-a-Tale Studios branding, logo emblem, and clean editorial monochrome design system',
      'Hero section with authentic H1: "Corporate & Event Photographer in Mumbai for Conferences, Consulates & PR-Ready Coverage"',
      'Trusted by institutions roster: Australian Consulate, Asia Society, JP Morgan, TEDx, ICEF, Preqin, Hitachi & People Matters',
      'Four core operating pillars: High-trust rooms, Actual usage, People comfort, Usable images',
      'Clean 4-step shoot process: Share the brief → Suggest setup → Cover shoot → Edited images',
      '14-composition portfolio gallery with category filters and high-resolution Lightbox modal',
      'Service breakdowns: Corporate Events & Conferences, Corporate Headshots, Celebrations, Food & Product, and Films',
      'Authentic Founders story featuring Nikhil B. (documentary & corporate eye) and Mamta Kalambe (styling & celebrations warmth)',
      'Films & Event Videography showcase with interactive video player modal',
      'Photography journal & blog on Mumbai event planning, executive headshots, and restaurant food styling',
      'Interactive Consultation & Date Availability booking form with simulated receipt',
      'Direct floating WhatsApp chat (+91 9619891066) and phone click-to-call actions'
    ],
    conversionTriggers: [
      'Check Date Availability',
      'WhatsApp Directly (+91 9619891066)',
      'Request Conference Coverage Quote',
      'Book Executive Headshots Session',
      'Inquire Food / Product Shoot'
    ],
    colorTheme: {
      primary: '#141518',
      secondary: '#C59B27',
      bgStyle: 'bg-[#FAF9F5]'
    },
    referenceSource: {
      type: 'zip',
      title: 'Tell-a-Tale Studios (https://tell-a-tale.in/)',
      sourceUrl: 'https://tell-a-tale.in/',
      notes: 'Faithfully reconstructed full website experience for Tell-a-Tale Studios with authentic photographs, corporate & celebration portfolios, food styling, founders story, and inquiry flow.',
      receivedAt: '2026-10-10'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Sub-router built with internal active tab states.'
    },
    routes: ['/', 'corporate', 'celebrations', 'food-product', 'films', 'about', 'blog', 'contact'],
    completedAt: '2026-10-10'
  },

  // --- TEMPLATE #8: GAJARE PHOTOGRAPHY (Best Photographer in Mumbai - Weddings, Films & Instant Photo Booth) ---
  {
    id: 'gajare-photography',
    numericId: 8,
    name: 'GAJARE PHOTOGRAPHY',
    tagline: 'Stories Worth Remembering. Moments Worth Reliving.',
    categoryCode: 'cat-photography',
    categoryLetter: '21',
    categoryName: 'Photography',
    subcategory: 'Wedding Photography, Cinematography & Instant Photo Booth',
    businessType: 'Fine Art Wedding Studio, Cinematic Films, Pre-Wedding Romance & Live Photo Booths',
    targetClients: 'Couples, destination wedding planners, families celebrating milestones, luxury receptions and corporate events in Mumbai, across India and worldwide',
    batch: 3,
    status: 'completed',
    entryPoint: 'src/templates/gajare-photography/GajarePhotography.tsx',
    assetPath: 'public/assets/gajare-photography/',
    thumbnail: '/assets/gajare-photography/portfolio-banner.webp',
    dependencies: ['lucide-react', 'react', 'motion'],
    features: [
      'Original Gajare Photography branding, emblem, and editorial dark aesthetic (#0B0C10 / #D4AF37 regal gold)',
      'Crossfade hero showcase with authentic headlines: "MUMBAI · INDIA — Stories Worth Remembering. Moments Worth Reliving."',
      'Google Review badge: 4.9★ with 500+ verified couple and family reviews and featured client testimonials',
      'Six deep-dive Real Wedding stories: Moheet ❤️ Prerna, Anuj ❤️ Sayali, Sayali ❤️ Raghvendra, Apoorv & Bhakti, Jinal & Divya Shah, Gaurav & Sneha',
      'Filterable multi-category portfolio (Weddings, Pre-Wedding, Maternity & Baby, Corporate & Events, Food & Product) with Lightbox viewer',
      'Cinematic wedding films showcase with 4K teaser video playback modal',
      'Dedicated Instant Photo Booth service section with 8-second dye-sub printing, QR mobile downloads, and custom frame branding',
      'The authentic "From a Smartphone to Gajare Photography" origin story (₹20,000 loan, 8+ years, 650+ celebrations)',
      'Transparent pricing guidance: Essential Moments, Complete Celebration (Popular), and Instant Photo Booth tiers',
      'Candid vs Traditional photography educational guide for couples',
      'Interactive Date Availability & Enquiry modal with date picker, budget estimator, and direct WhatsApp float (+91 7208659598)'
    ],
    conversionTriggers: [
      'Check The Date',
      'WhatsApp Directly (+91 7208659598)',
      'Book Instant Photo Booth',
      'Inquire Wedding Cinematography',
      'Explore Complete Portfolio'
    ],
    colorTheme: {
      primary: '#0B0C10',
      secondary: '#D4AF37',
      bgStyle: 'bg-[#0B0C10]'
    },
    referenceSource: {
      type: 'zip',
      title: 'Gajare Photography (https://gajarephotography.com/)',
      sourceUrl: 'https://gajarephotography.com/',
      notes: 'Faithfully recreated full website demo for Gajare Photography with authentic photographs, real wedding stories, instant photo booth service, films, pricing guidance, and inquiry flow.',
      receivedAt: '2026-10-10'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Sub-router built with internal active tab states.'
    },
    routes: ['/', 'stories', 'portfolio', 'services', 'booth', 'about', 'pricing', 'contact'],
    completedAt: '2026-10-10'
  },

  // --- TEMPLATE #9: KNOTSBYAMP (Best Wedding Photographers in Mumbai - Wedding Stories & Cinematic Films) ---
  {
    id: 'knotsbyamp',
    numericId: 9,
    name: 'KnotsbyAMP',
    tagline: 'Beautiful Weddings, Breathtaking Films — Celebrating Love with Every Frame',
    categoryCode: 'cat-photography',
    categoryLetter: '21',
    categoryName: 'Photography',
    subcategory: 'Wedding Photography & Filmmaking',
    businessType: 'Luxury Wedding Photography, Cinematic Feature Films & Destination Couple Shoots',
    targetClients: 'Couples planning luxury city & destination weddings across Mumbai, Goa, Rajasthan, and worldwide locations seeking authentic documentary photography and handcrafted cinema',
    batch: 3,
    status: 'completed',
    entryPoint: 'src/templates/knotsbyamp/KnotsbyAMP.tsx',
    assetPath: 'public/assets/knotsbyamp/',
    thumbnail: '/assets/knotsbyamp/hero-og.jpg',
    dependencies: ['lucide-react', 'react'],
    features: [
      'Original KnotsbyAMP branding, typography, and dark luxury aesthetic (#0E0E11 onyx / #C99D66 champagne gold)',
      'Prestige awards showcase featuring WeddingSutra 2024 Winners, GIWA, Fearless Photographers, and WedMeGood 5.0★ rating',
      'Real Wedding Stories across multiple cultures (Gujarati, Marwari, South Indian, Christian, Muslim Nikah, Two States) and destinations (Dubai, Udaipur, Goa, Karjat, South Mumbai)',
      'Cinematic wedding films with movie-style poster artwork and embedded YouTube video playback modals',
      'Couple Shoot & Pre-Wedding portfolio showcasing romance in Amsterdam, Goa shores, Lake Pichola, and South Bombay heritage',
      'Detailed "Through The Lens Since 2014" studio story, 6 core pillars, and creative team showcase (Aman, Rahul Nair, Sohail Hussain, Siddhesh Gamre, Soumi Goswami, Prasad Patil)',
      'Heartfelt verbatim client reviews from real couples with 5.0-star trust badge',
      'Interactive FAQ accordion categorized by Style, Pricing, Deliverables, and Travel',
      'Interactive Date Availability and wedding inquiry form with guest count estimator, service checkboxes, WhatsApp direct chat, and phone connectivity',
      'Full-screen Lightbox photo gallery viewer with keyboard controls and gallery index'
    ],
    conversionTriggers: [
      'Check Date / Book Consultation',
      'WhatsApp Directly (+91 9987071831)',
      'Call Studio (+91-9987071831)',
      'Explore Wedding Stories',
      'Watch Wedding Films'
    ],
    colorTheme: {
      primary: '#0E0E11',
      secondary: '#C99D66',
      bgStyle: 'bg-[#0E0E11]'
    },
    referenceSource: {
      type: 'zip',
      title: 'KnotsbyAMP (https://www.knotsbyamp.com/)',
      sourceUrl: 'https://www.knotsbyamp.com/',
      notes: 'Faithfully recreated full website demo for KnotsbyAMP with authentic photographs, real wedding stories, cinema posters, YouTube video embeds, team profiles, and inquiry flow.',
      receivedAt: '2026-10-10'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Sub-router built with internal active tab states.'
    },
    routes: ['/', 'wedding-stories', 'wedding-films', 'couple-shoot', 'about', 'testimonials', 'faqs', 'contact'],
    completedAt: '2026-10-10'
  },

  // --- TEMPLATE #10: THE PORTRAIT COMPANY (Professional Photography Studio in Mumbai) ---
  {
    id: 'the-portrait-company',
    numericId: 10,
    name: 'The Portrait Company',
    tagline: 'A professional photography studio showcasing family portraits, celebrity portraits, corporate headshots, couple photography, maternity portraits, and more.',
    categoryCode: 'cat-photography',
    categoryLetter: '21',
    categoryName: 'Photography',
    subcategory: 'Portrait Photography Studio',
    businessType: 'Professional photography studio website',
    targetClients: 'Individuals, couples, multi-generational families, executives, models, and expectant parents across Mumbai seeking fine-art portrait photography',
    batch: 4,
    status: 'completed',
    entryPoint: 'src/templates/the-portrait-company/ThePortraitCompany.tsx',
    assetPath: 'public/assets/the-portrait-company/',
    thumbnail: '/assets/the-portrait-company/hero-celebrity.webp',
    dependencies: ['lucide-react', 'react'],
    features: [
      'Original The Portrait Company branding, logo emblem, and luxury dark editorial aesthetic (#080808 / #D4AF37)',
      'Fullwidth hero slider featuring 9 signature studio portraits with Kareena Kapoor Khan celebrity banner',
      'Top in-hero concierge bar: "We’d love to hear from you!" with direct phone, email, and inquiry actions',
      'Nine core photography categories in exact original sequence: Family, Celebrity, Corporate, Couple, Kids, Fashion, Maternity, Boudoir, Matrimonial',
      'Verbatim source headings and narrative descriptions for each photography discipline',
      'Dedicated "View Portfolio" modals for all nine categories with session specs and booking triggers',
      '"Cherish Your Precious Moments" legacy showcase highlighting photographed celebrities (Carol Gracias, Gauhar Khan, Rashmi Desai, Tushar Kapoor)',
      'Verified "Our Partners" showcase featuring Chitraksh, Home Photography, and Fashion Folio',
      'Transparent studio packages breakdown: Studio Essential, Signature Editorial, and Luxury Heirloom',
      'Authentic client reviews with 5.0★ rating breakdown and verified testimonials',
      'Interactive Consultation & Shoot Booking Inquiry modal with category and time slot selectors',
      'Direct floating WhatsApp chat link (+91 9820987979) and click-to-call phone connectivity'
    ],
    conversionTriggers: [
      'Book Shoot / Inquiry Form',
      'WhatsApp Concierge (+91-9820987979)',
      'Direct Phone Call (+91-9820987979)',
      'View Category Portfolios',
      'Explore Studio Packages'
    ],
    colorTheme: {
      primary: '#000000',
      secondary: '#D4AF37',
      bgStyle: 'bg-[#080808]'
    },
    referenceSource: {
      type: 'zip',
      title: 'The Portrait Company (https://theportraitcompany.in/)',
      sourceUrl: 'https://theportraitcompany.in/',
      notes: 'Faithfully reconstructed full website demo for The Portrait Company using supplied HTML capture and asset archive, featuring all 9 photography categories, Kareena Kapoor Khan celebrity banner, partners, and inquiry flows.',
      receivedAt: '2026-10-10'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Sub-router built with internal active tab states.'
    },
    routes: ['/', 'packages', 'testimonials', 'about', 'teams', 'gift', 'blog', 'contact'],
    completedAt: '2026-10-10'
  },
  {
    id: 'pk-photography',
    numericId: 11,
    name: 'PK Photography',
    tagline: 'Weddings, events & brands. Mumbai, Goa & beyond. Photography feels different when you feel understood.',
    categoryCode: 'cat-photography',
    categoryLetter: '21',
    categoryName: 'Photography',
    subcategory: 'Wedding & Commercial Photography',
    businessType: 'Wedding & Commercial Photography Studio',
    targetClients: 'Couples, corporate brands, celebrities, and executives seeking thoughtful cinematic wedding films and editorial portraiture across Mumbai and Goa',
    batch: 4,
    status: 'completed',
    entryPoint: 'src/templates/pk-photography/PKPhotography.tsx',
    assetPath: 'public/assets/pk-photography/',
    thumbnail: '/assets/pk-photography/curated/wedding-0n3a7372.webp',
    dependencies: ['lucide-react', 'react'],
    features: [
      'Original PK Photography branding, Prabhakar Kumar direction, and dark luxury aesthetic',
      'Hero section with cinematic video reel playback modal and 4-step workflow (Gather, Feel, Remember, Keep)',
      'Curated services directory: Wedding photography, Goa destination weddings, Pre-wedding, Corporate events, Portfolios, Headshots',
      'All 32 authentic client brand logos (Tata Motors, Siemens Energy, Godrej, Myntra, Airbnb, AMD, W Goa, Asianet, Lakme, BenQ, etc.) with category filters',
      'Visual folio highlights with high-res lightbox modals and camera optics specifications',
      'Transparent studio packages: Studio Headshot (₹6,000), Intimate Celebration (₹80,000), Full Wedding Day Master (₹1,20,000), Destination Wedding (₹2,00,000)',
      'Verified 5.0★ Google reviews and authentic client testimonials across Mumbai & Goa',
      'Frequently asked questions accordion with verbatim pricing & delivery guidance',
      'Interactive Booking Consultation modal with shoot date, venue, and package selectors',
      'Direct floating WhatsApp concierge (+91 8888766739) and studio telephone connectivity'
    ],
    conversionTriggers: [
      'Check Availability / Reserve Date',
      'Watch Cinematic Reel',
      'WhatsApp Concierge (+91 8888766739)',
      'Direct Phone Call (+91 8888766739 / +91 81888 81165)',
      'Explore Studio Packages'
    ],
    colorTheme: {
      primary: '#090A0C',
      secondary: '#C5A880',
      bgStyle: 'bg-[#090A0C]'
    },
    referenceSource: {
      type: 'zip',
      title: 'PK Photography (https://pkphotography.in/)',
      sourceUrl: 'https://pkphotography.in/',
      notes: 'Faithfully reconstructed full website demo for PK Photography using supplied website capture and asset archive, featuring Mumbai & Goa studios, cinematic reels, 32 client logos, transparent packages, and booking consultation.',
      receivedAt: '2026-10-10'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Sub-router built with internal active tab states.'
    },
    routes: ['/', 'services', 'portfolio', 'pricing', 'reviews', 'about', 'contact'],
    completedAt: '2026-10-10'
  },

  // --- TEMPLATE #12: TRUE SHADES PHOTOGRAPHY (Best Wedding Photographer in Mumbai) ---
  {
    id: 'true-shades-photography',
    numericId: 12,
    name: 'True Shades Photography',
    tagline: 'A wedding photography studio showcasing candid wedding photography, wedding films, pre-wedding shoots, and cinematic memories.',
    categoryCode: 'cat-photography',
    categoryLetter: '21',
    categoryName: 'Photography',
    subcategory: 'Wedding Photography, Candid Photography & Films',
    businessType: 'Wedding Photography, Candid Photography, Wedding Films, Pre-Wedding Photography and Pre-Wedding Films',
    targetClients: 'Couples, families, wedding planners, and couples seeking candid wedding photography and cinematic films across Mumbai, Goa, and worldwide',
    batch: 4,
    status: 'completed',
    entryPoint: 'src/templates/true-shades-photography/TrueShadesPhotography.tsx',
    assetPath: 'public/assets/true-shades-photography/',
    thumbnail: '/assets/true-shades-photography/hero-wedding.jpg',
    dependencies: ['lucide-react', 'react'],
    features: [
      'Original True Shades Photography branding, logo, and signature cream editorial aesthetic (#fdfcf7 / #666666)',
      'Top header with Crescent Royale Andheri West address, direct phone link (+919920144211), and social links',
      'Hero photography slider with fullwidth authentic wedding portraits and navigation controls',
      'Intro section with red paint graphic backdrop, decorative fairy lights, and "Photography" & "Films" action triggers',
      'Featured In section with cranberry banner (#bb687a) and smooth marquee with 5 verified publications (Times of India, WeddingSutra, Hindustan Times, Mid-Day, Big Fat Indian Wedding)',
      'About Intro section with watermark camera icon and verbatim narrative on traditions, rituals, and candid photography',
      'Candid Photography section with left and right video camera illustration watermarks and verbatim commitment to excellence',
      'Client Reviews section featuring 6 authentic review screenshot cards with carousel navigation and full-screen lightbox zoom',
      'Footer with Mumbai address, blog guides, useful links, and copyright statement',
      'Interactive Consultation & Date Availability booking modal with service selection and direct WhatsApp float'
    ],
    conversionTriggers: [
      'Book Shoot / Inquiry Form',
      'WhatsApp Directly (+91 9920144211)',
      'Call Studio (+919920144211)',
      'Explore Photography Portfolio',
      'Watch Wedding Films'
    ],
    colorTheme: {
      primary: '#666666',
      secondary: '#bfd5c8',
      bgStyle: 'bg-[#fdfcf7]'
    },
    referenceSource: {
      type: 'zip',
      title: 'True Shades Photography (https://trueshadesphotography.com/)',
      sourceUrl: 'https://trueshadesphotography.com/',
      notes: 'Faithfully reconstructed full website demo for True Shades Photography using supplied HTML capture and asset archive, featuring hero slider, red paint intro, featured marquee, candid photography philosophy, and 6 client review cards.',
      receivedAt: '2026-10-11'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Sub-router built with internal active tab states.'
    },
    routes: ['/', '#about-us', '#our-work', '#wedding-photography', '#wedding-films', '#client-reviews', '#blogs', '#contact'],
    completedAt: '2026-10-11'
  },

  // --- TEMPLATE #13: SNAPSTORIES PHOTOGRAPHY (Wedding & Engagement Photography, Films) ---
  {
    id: 'snapstories',
    numericId: 13,
    name: 'SnapStories Photography',
    tagline: 'Wedding photography and films that preserve emotions, relationships, and memories, with engagement photography and cinematic video storytelling.',
    categoryCode: 'cat-photography',
    categoryLetter: '21',
    categoryName: 'Photography',
    subcategory: 'Wedding Photography, Engagement & Cinematic Films',
    businessType: 'Wedding Photography, Engagement Photography, Wedding Films and Cinematic Videos',
    targetClients: 'Couples, families, and wedding planners seeking authentic candid photography and emotional cinematic storytelling that lasts forever',
    batch: 5,
    status: 'completed',
    entryPoint: 'src/templates/snapstories/SnapStories.tsx',
    assetPath: 'public/assets/snapstories/',
    thumbnail: '/assets/snapstories/portfolio-janhavi-kishen.jpg',
    dependencies: ['lucide-react', 'react'],
    features: [
      'Original SnapStories branding, logo, and clean editorial photography layout',
      'Hero photography banner with signature serif headline "SNAPSTORIES PHOTOGRAPHY" and uppercase "WEDDING - ENGAGEMENT" subtitle',
      'Full portfolio showcase with all 6 authentic couples in source order: Janhavi & Kishen, Ankitha & Pranav, Srija & Saiesh, Ruth & Geoffrey, Sanika & Jasdeep, Sneha & Nikhil',
      'Interactive Story Showcase modals with emotional story overviews, session highlights, and full-screen Lightbox viewer',
      'Verbatim "About SnapStories" storytelling narrative on 15+ years of experience and preserving memories forever',
      'Contact section with Aniket Pawar direct contact, working phone link (+91 9137698195), Instagram, and Cinematic Videos links',
      'Interactive Date Availability and consultation booking modal with couple and venue selectors',
      'Footer with "SnapStories — Wedding Photography & Films", copyright "©2026 SnapStories | Disclaimer", and Back to Top action',
      'Direct floating WhatsApp concierge for immediate inquiry with Aniket Pawar'
    ],
    conversionTriggers: [
      'Book Wedding Date',
      'WhatsApp Directly (+91 9137698195)',
      'Call Studio (9137698195)',
      'Explore Recent Work',
      'Watch Cinematic Videos'
    ],
    colorTheme: {
      primary: '#111111',
      secondary: '#666666',
      bgStyle: 'bg-[#ffffff]'
    },
    referenceSource: {
      type: 'zip',
      title: 'SnapStories Photography (https://www.snapstories.in/)',
      sourceUrl: 'https://www.snapstories.in/',
      notes: 'Faithfully reconstructed full website demo for SnapStories using supplied Wix HTML capture and asset archive, featuring 6 couple stories, hero slider, verbatim About narrative, and contact details.',
      receivedAt: '2026-10-11'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Sub-router built with internal active tab states.'
    },
    routes: ['/', '#about', '#wedding', '#engagement', '#cinematic-videos', '#portfolio', '#contact'],
    completedAt: '2026-10-11'
  },

  // --- TEMPLATE #14: SHOOT EXPRESS PHOTOGRAPHY (Best Photographer in Mumbai) ---
  {
    id: 'shoot-express',
    numericId: 14,
    name: 'Shoot Express Photography',
    tagline: 'Best Photographer In Mumbai — Weddings, maternity, candid, family, food, product, interior, fashion & events.',
    categoryCode: 'cat-photography',
    categoryLetter: '21',
    categoryName: 'Photography',
    subcategory: 'Professional Photography & Videography',
    businessType: 'Professional Photography & Videography Studio',
    targetClients: 'Couples, expectant parents, families, corporate brands, restaurants, architects, and event hosts seeking full-spectrum photography in Mumbai',
    batch: 5,
    status: 'completed',
    entryPoint: 'src/templates/shoot-express/ShootExpress.tsx',
    assetPath: 'public/assets/shoot-express/',
    thumbnail: '/assets/shoot-express/wedding-couple-photoshoot.jpg',
    dependencies: ['lucide-react', 'react'],
    features: [
      'Original Shoot Express Photography branding, aperture emblem, and deep slate/crimson design system',
      'Hero section with authentic H1: "Best Photographer In Mumbai" and brand headline "Shoot Express Photography Mumbai"',
      'Verified performance metrics: 7,120 Functions, 5,000+ Customers, 7+ Years Experience, 70 Team Size',
      'Occasions Covered By Us: All 9 core categories (Wedding, Maternity, Candid, Family, Food, Product, Interior, Fashion, Event)',
      'Why Choose Us: 6 pillars including one-stop solution, experienced crew, competitive pricing, 24*7 support, and Powai indoor studio',
      'Photography Portfolio with 9 labeled showcases and high-resolution Lightbox photo viewer',
      'What People Say About Our Photography Service with verified 4.9★ reviews (870+ reviews)',
      'As Seen On section highlighting WeddingSutra, Justdial 4.9★, Hindustan Times, Instavendor, and Mumbai Mirror',
      'Frequently Asked Questions accordion with verbatim guidance on pricing, booking advances, deliverables, and turnaround',
      'Locations We Serve covering 16 key Mumbai suburban areas from Churchgate to Virar',
      'Contact section with working phone (7738111094), email (ashwin@shootexpress.com), Powai studio address, and WhatsApp concierge'
    ],
    conversionTriggers: [
      'Book Shoot / Inquiry Form',
      'WhatsApp Directly (+91 7738111094)',
      'Call Studio (7738111094)',
      'Explore Portfolio',
      'Check Date Availability'
    ],
    colorTheme: {
      primary: '#0F172A',
      secondary: '#E11D48',
      bgStyle: 'bg-[#0F172A]'
    },
    referenceSource: {
      type: 'zip',
      title: 'Shoot Express Photography (https://shootexpress.com/)',
      sourceUrl: 'https://shootexpress.com/',
      notes: 'Faithfully reconstructed full website demo for Shoot Express Photography using indexed metadata, search intelligence, and domain profile details, featuring all 9 occasions, 6 Why Choose Us pillars, 16 Mumbai locations, reviews, FAQs, and booking consultation.',
      receivedAt: '2026-10-11'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Sub-router built with internal active tab and section states.'
    },
    routes: ['/', '#about', '#occasions', '#why-us', '#portfolio', '#reviews', '#faqs', '#locations', '#contact'],
    completedAt: '2026-10-11'
  },

  // --- TEMPLATE #15: OLLAR STUDIOS (Premium Photography & Studio Rentals in Mumbai) ---
  {
    id: 'ollar-studios',
    numericId: 15,
    name: 'Ollar Studios',
    tagline: 'Premium Photography & Studio Rentals in Mumbai — 1,800 sq. ft. photo bays, podcast suites & creative productions.',
    categoryCode: 'cat-photography',
    categoryLetter: '21',
    categoryName: 'Photography',
    subcategory: 'Photography Studio Rentals & Creative Production',
    businessType: 'Photography Studio Rentals, Podcast Studios & Commercial Photography',
    targetClients: 'Photographers, creators, podcasters, couples, brands, and agency producers seeking 1,800 sq. ft. studio rentals and creative production in Mumbai',
    batch: 5,
    status: 'completed',
    entryPoint: 'src/templates/ollar-studios/OllarStudios.tsx',
    assetPath: 'public/assets/ollar-studios/',
    thumbnail: '/assets/ollar-studios/photography-studio.jpg',
    dependencies: ['lucide-react', 'react'],
    features: [
      'Original Ollar Studios branding, dark studio aesthetic, and Poppins typography system',
      'Hero section: "Premium Photography & Studio Rentals in Mumbai" and "Your One-Stop Creative Destination in Mumbai"',
      'Studio Rentals: 1,800 sq. ft. Photography Studio (strobe lights, motorized seamless paper, vanity room, chroma) and Acoustically Soundproofed Podcast Studio (broadcast mics, 4K video, RGB themes)',
      'Professional Photography Services: Wedding Photography (Ollar Weds), Pre wedding Photography, Product Photography, Fashion Photography',
      'Why Chooes Us section covering Creative Concepts & Styling, Pro Equipment, Flexible Packages, and Central Mulund Location',
      'Work Portfolio with category filters (Wedding, Pre-Wedding, Fashion, Product, Photography, Podcast Studio, Photography Studio) and high-res Lightbox',
      'Client Testimonials featuring Priyanka Kanani, Bhavik Devdhar, Tania Shripad, and Pranav Pujari',
      'Latest Blogs with outreach and studio booking guides',
      'Milestones: 1,500+ Shoots Completed, 1,200+ Happy Clients, 4.9/5 Rating, 1,800 Sq. Ft. Studio Space',
      'Contact section with working phone (+91 9004344101), email, Mulund West studio address, and interactive booking modal'
    ],
    conversionTriggers: [
      'Book Studio Rental',
      'Book Shoot / Inquiry Form',
      'WhatsApp Directly (+91 9004344101)',
      'Call Studio (+91 9004344101)',
      'Explore Portfolio'
    ],
    colorTheme: {
      primary: '#0F172A',
      secondary: '#2563EB',
      bgStyle: 'bg-[#0F172A]'
    },
    referenceSource: {
      type: 'zip',
      title: 'Ollar Studios (https://ollarstudios.com/)',
      sourceUrl: 'https://ollarstudios.com/',
      notes: 'Faithfully reconstructed full website demo for Ollar Studios using supplied homepage capture and asset archive, featuring 1,800 sq. ft. photography studio, podcast recording suite, wedding photography, fashion campaigns, product catalogs, testimonials, and booking consultation.',
      receivedAt: '2026-10-11'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Sub-router built with internal active tab and section states.'
    },
    routes: ['/', '#about', '#studio-rentals', '#podcast-studio', '#photography-studio', '#services', '#why-choose-us', '#portfolio', '#testimonials', '#blogs', '#contact'],
    completedAt: '2026-10-11'
  },

  // --- TEMPLATE #16: NIKHIL KAPUR PHOTOGRAPHY (Candid, Wedding, Architecture, Products) ---
  {
    id: 'nikhil-kapur-photography',
    numericId: 16,
    name: 'Nikhil Kapur Photography',
    tagline: 'Candid Photographer. Filmmaker. Storyteller. Lover of dark chocolate with a side of good stories.',
    categoryCode: 'cat-photography',
    categoryLetter: '21',
    categoryName: 'Photography',
    subcategory: 'Wedding, Architecture & Product Photography',
    businessType: 'Professional Photography Portfolio & Storytelling Studio',
    targetClients: 'Couples, luxury hotels, heritage properties, architects, interior designers, commercial brands, and families seeking high-end visual storytelling',
    batch: 6,
    status: 'completed',
    entryPoint: 'src/templates/nikhil-kapur-photography/NikhilKapurPhotography.tsx',
    assetPath: 'public/assets/nikhil-kapur-photography/',
    thumbnail: '/assets/nikhil-kapur-photography/hero-udaipur-palace.jpg',
    dependencies: ['lucide-react', 'react'],
    features: [
      'Original Squarespace Brine design system with top bar utilities, brand monogram logo, and multi-tier dropdown navigation',
      'Full-bleed 9-slide hero gallery carousel with authentic Udaipur palace, luxury hotel, heritage, and candid wedding photography',
      'Verbatim artist statement: "Candid Photographer. Filmmaker. Storyteller. Lover of dark chocolate with a side of good stories."',
      '9-item Curated Chronicles real wedding showcase (Purva & Shrenik, Anahita & Shisher, Sarath & Vrinda) with story modal reader',
      'Editorial photography genres with verbatim copy: Product Photography (Food & Jewelry), Wedding Photography, Kids Photography, and Architecture Photography (Heritage, Homes, Hotels)',
      'Works Archive portfolio with 9 category filter tabs (Architecture, Wedding, Kids, Products, Food, Jewelry, Heritage, Hotels) and responsive Lightbox viewer',
      'Working modal experiences for all navigation destinations: Architecture, Wedding & Candid, Kids, Products & Food, Cinematic Films, Books & Albums, About, and Contact',
      'Studio contact section with verified phone (+91 98200 26166), email, Mumbai location, and consultation inquiry form'
    ],
    conversionTriggers: [
      'Commission a Project',
      'Schedule Consultation',
      'Call Studio (+91 98200 26166)',
      'Explore Portfolio',
      'Read Wedding Chronicles'
    ],
    colorTheme: {
      primary: '#050505',
      secondary: '#FFFFFF',
      bgStyle: 'bg-[#050505]'
    },
    referenceSource: {
      type: 'zip',
      title: 'Nikhil Kapur Photography (saveweb2zip-com-www-nikhilkapur-com.zip / https://www.nikhilkapur.com/)',
      sourceUrl: 'https://www.nikhilkapur.com/',
      notes: 'Faithfully reconstructed full website experience of Nikhil Kapur Photography using original Squarespace assets, authentic hero slides, real wedding chronicles, verbatim genre descriptions, and working portfolio modals.',
      receivedAt: '2026-10-11'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Sub-router built with internal active modal and section states.'
    },
    routes: [
      '/',
      '#gallery',
      '#about',
      '#portfolio',
      '#photography',
      '#architecture',
      '#wedding',
      '#kids',
      '#products',
      '#films',
      '#books',
      '#contact'
    ],
    completedAt: '2026-10-11'
  },

  // --- TEMPLATE #17: IISER PUNE (Indian Institute of Science Education and Research Pune) ---
  {
    id: 'iiser-pune',
    slug: 'iiser-pune-homepage-demo',
    numericId: 17,
    name: 'IISER Pune — Research Institute Website',
    tagline: 'Where Teaching and Research Converge — Premier Institute of National Importance',
    categoryCode: 'cat-education-coaching',
    categoryLetter: '2',
    categoryName: 'Coaching Institute & Education',
    subcategory: 'Universities & Research Institutes',
    businessType: 'Autonomous Public Research University & National Science Institute',
    targetClients: 'Universities, research institutes, higher education colleges, science academies, national labs, academic councils',
    batch: 6,
    status: 'completed',
    entryPoint: 'src/templates/iiser-pune/IiserPune.tsx',
    assetPath: 'public/assets/iiser-pune/',
    thumbnail: '/assets/iiser-pune/slide-1119.jpg',
    dependencies: ['lucide-react', 'react'],
    features: [
      'Authentic bilingual institutional header with English and Hindi inscriptions and official brand logos',
      'Site-wide search modal with live query filtering across news, departments, degree programs, and tiles',
      'Dual language toggle (English/Hindi) and high-contrast accessibility mode with text size scaling (A-, A, A+)',
      'Full-bleed 5-slide hero gallery carousel with NASI Fellows, CNR Rao Prize, IBRO Award, CRS Award, and distinguished visitor lectures',
      'Key institutional metrics ribbon highlighting NIRF #35 Research, #55 Overall, 60%+ Ph.D. progression, and 8 departments',
      'Horizontal scrolling News carousel featuring 8 authentic research highlights, accolades, and campus events with story modal reader',
      'Six institutional focus tiles (Accolades, In the Media, Alumni Affairs, Campus, Opportunities, Library) with interactive detail modals',
      'Interactive 8-department research explorer (Biology, Chemistry, Data Science, Earth & Climate, Humanities, Mathematics, Physics, Science Media)',
      'Comprehensive degree programs and admissions guide (BS-MS via IAT, M.Sc. via IIT JAM, Integrated Ph.D., and Ph.D.)',
      'Interactive mega navigation drawer with structured sub-links across institutional governance and faculties',
      'Complete authentic footer featuring India.gov.in portal banner, official Pashan campus address, verified social links, and RTI statutory disclosures'
    ],
    conversionTriggers: [
      'Admissions Desk (IAT 2026-27)',
      'Explore Academic Departments',
      'Plan Campus Visit',
      'Donate to IISER Pune',
      'View Research News'
    ],
    colorTheme: {
      primary: '#b62126',
      secondary: '#0077bf',
      bgStyle: 'bg-[#171412]'
    },
    referenceSource: {
      type: 'zip',
      title: 'IISER Pune — Indian Institute of Science Education and Research Pune (https://www.iiserpune.ac.in/)',
      sourceUrl: 'https://www.iiserpune.ac.in/',
      notes: 'Faithfully reconstructed full website demo for IISER Pune using supplied official assets, verbatim slides, 8 authentic news items, 6 institutional tiles, 8 interdisciplinary departments, and full institutional mega navigation and footer.',
      receivedAt: '2026-10-13'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Scoped styling under .iiser-pune-demo.'
    },
    routes: [
      '/',
      '#home',
      '#about',
      '#research',
      '#departments',
      '#education',
      '#admissions',
      '#news',
      '#campus',
      '#library',
      '#alumni',
      '#contact'
    ],
    completedAt: '2026-10-13'
  },

  // --- TEMPLATE #18: RAO COLLEGE (Rebranded College Website Demo) ---
  {
    id: 'rao-college',
    slug: 'rao-college',
    numericId: 18,
    name: 'RAO COLLEGE',
    tagline: 'Learn Today. Lead Tomorrow.',
    categoryCode: 'cat-education-coaching',
    categoryLetter: '2',
    categoryName: 'Coaching Institute & Education',
    subcategory: 'Jr College',
    businessType: 'Higher Education College & Academic Institution Website',
    targetClients: 'Colleges, universities, educational trusts, business schools, technical institutes, academic institutions',
    batch: 6,
    status: 'completed',
    entryPoint: 'src/templates/rao-college/RaoCollege.tsx',
    assetPath: 'public/assets/rao-college/',
    thumbnail: '/assets/rao-college/campus-hero-1.jpg',
    dependencies: ['lucide-react', 'react'],
    features: [
      'Complete institutional rebranding with original navy blue & academic gold heraldic crest and wordmark',
      'Comprehensive 3-slide hero gallery carousel with high-res campus aerial and quad architecture',
      'Institutional statistics ribbon highlighting 20+ years legacy, 500+ recruiters, and 15,000+ alumni',
      'Six degree programme tracks (BCA, BBA, B.Com Hons, BA JMC, B.Sc. Data Science, MBA) with filter tabs and details modal',
      'Direct admissions application desk with working client-side validation, error handling, and demo reference generation',
      'Campus life and infrastructure showcase (Central Library, Advanced Labs, Grand Auditorium, Sports, Hostels, Innovation Hub)',
      'Corporate Resource Cell (CRC) placements section with recruiter sector directory and recruiter inquiry modal',
      'Six authentic student and alumni voices highlighting professional career outcomes and faculty mentorship',
      'News, events, and student hackathon achievement showcases with interactive detail modals',
      'Expandable FAQ accordion addressing admissions, merit scholarships, hostel living, and campus recruitment',
      'Complete contact directory with Knowledge Campus Sector 62 address, toll-free helpline, and inquiry form'
    ],
    conversionTriggers: [
      'Apply Online (2026-27)',
      'Explore Programmes',
      'Download Prospectus',
      'Campus Visit Tour',
      'Recruiter Enquiry'
    ],
    colorTheme: {
      primary: '#0A192F',
      secondary: '#D4AF37',
      bgStyle: 'bg-[#0A192F]'
    },
    referenceSource: {
      type: 'zip',
      title: 'RAO COLLEGE (Rebranded from https://www.amity.edu/ archive)',
      sourceUrl: 'https://www.amity.edu/',
      notes: 'Complete institutional rebranding into RAO COLLEGE with original heraldic crest, 3-slide hero carousel, 6 core academic programs (BCA, BBA, B.Com, BA, B.Sc., MBA), live admissions application form with validation, campus life facilities, placement cell, events, testimonials, and contact directory.',
      receivedAt: '2026-10-13'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Scoped styling under .rao-college-demo.'
    },
    routes: [
      '/',
      '#home',
      '#about',
      '#programs',
      '#admissions',
      '#facilities',
      '#placements',
      '#events',
      '#contact'
    ],
    completedAt: '2026-10-13'
  },

  // --- TEMPLATE #19: S P JAIN SCHOOL OF GLOBAL MANAGEMENT ---
  {
    id: 'sp-jain',
    slug: 'sp-jain',
    numericId: 19,
    name: 'S P JAIN SCHOOL OF GLOBAL MANAGEMENT',
    tagline: 'Crafting World Ready Leaders — Campuses in Dubai, Mumbai, Singapore & Sydney',
    categoryCode: 'cat-education-coaching',
    categoryLetter: '2',
    categoryName: 'Jr College',
    subcategory: 'Jr College',
    businessType: 'Premier Australian Global Business School Website',
    targetClients: 'Business schools, international universities, management colleges, executive education institutes, global academies',
    batch: 7,
    status: 'completed',
    entryPoint: 'src/templates/sp-jain/SpJain.tsx',
    assetPath: 'public/assets/sp-jain/',
    thumbnail: '/assets/sp-jain/hero-bloomberg.svg',
    dependencies: ['lucide-react', 'react'],
    features: [
      'Authentic S P Jain heraldic crest logo and global campus branding in maroon and Australian gold',
      'Bloomberg Businessweek #7 Asia-Pacific and Forbes Top 15 World ranking accolade banners',
      '3-Slide hero gallery carousel featuring Bloomberg ranking, Tri-City global learning model, and ELO AI-Tutor',
      'Six institutional pillars with custom vector icons (Top Rank, Real-time Industry Projects, Leadership, Alumni, Faculty, Training)',
      'Four global campuses interactive showcase for Dubai, Singapore, Sydney, and Mumbai with facility highlights',
      'Degree programmes explorer (BBA, BDS, Global MBA, MGB, MAIB, Executive MBA) with curriculum details modal',
      'Engaged Learning Online (ELO) studio spotlight with 20+ HD cameras and proprietary AI-Tutor mentoring demonstration',
      'Admissions 2026–27 application desk with interactive multi-field validation and generated reference tracking number',
      'News & accolades section highlighting UN PRME student leader appointment, Bloomberg rankings, and global orientation',
      'Verified student & alumni career voices at Apple, Amazon Web Services, McKinsey & Company, and Commonwealth Bank',
      'Expandable FAQ accordion addressing tri-city visas, Australian TEQSA accreditation, scholarships, and post-study work rights',
      'Comprehensive institutional footer with official Dubai, Singapore, Sydney, and Mumbai addresses and CRICOS disclosure'
    ],
    conversionTriggers: [
      'Apply Now 2026',
      'Download Global Brochure',
      'Explore Degree Curricula',
      'Intake Dates Schedule',
      'Request Counselor Callback'
    ],
    colorTheme: {
      primary: '#8B1D24',
      secondary: '#D4AF37',
      bgStyle: 'bg-[#140608]'
    },
    referenceSource: {
      type: 'zip',
      title: 'S P Jain School of Global Management (saveweb2zip-com-www-spjain-org.zip / https://www.spjain.org/)',
      sourceUrl: 'https://www.spjain.org/',
      notes: 'Faithfully recreated S P Jain Global website demo using supplied archive assets, authentic Bloomberg rankings, tri-city multi-campus structure, degree programmes, ELO AI-Tutor technology, and verified admissions portal.',
      receivedAt: '2026-10-15'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Scoped styling under .sp-jain-demo.'
    },
    routes: [
      '/',
      '#home',
      '#rankings',
      '#programs',
      '#campuses',
      '#why-spjain',
      '#elo-tech',
      '#news',
      '#placements',
      '#admissions',
      '#faqs'
    ],
    completedAt: '2026-10-15'
  },

  // --- TEMPLATE #20: ARSHAD UNIVERSITY (Rebranded from LPU) ---
  {
    id: 'arshad-university',
    slug: 'arshad-university',
    numericId: 20,
    name: 'ARSHAD UNIVERSITY',
    tagline: 'Transforming Education · Transforming India — NAAC A++ (3.68/4) & NIRF #27',
    categoryCode: 'cat-education-coaching',
    categoryLetter: '2',
    categoryName: 'Coaching Institute & Education',
    subcategory: 'Universities & Research Institutes',
    businessType: 'Major Comprehensive Multi-Disciplinary University Website',
    targetClients: 'Universities, major educational campuses, research institutions, degree colleges, technical academies, higher education trusts',
    batch: 7,
    status: 'completed',
    entryPoint: 'src/templates/arshad-university/ArshadUniversity.tsx',
    assetPath: 'public/assets/arshad-university/',
    thumbnail: '/assets/arshad-university/hero-modi.svg',
    dependencies: ['lucide-react', 'react'],
    features: [
      'Authentic institutional rebranding into ARSHAD UNIVERSITY with saffron and dark charcoal crest and heraldic emblem',
      'High-contrast government accreditation ribbon highlighting NAAC Grade A++ (3.68 score on 4-point scale)',
      'NIRF Ranking 2024 (#27 among all Indian Universities) and discipline breakdowns (Architecture #16, Pharmacy #17, Law #19, Management #38)',
      'THE World University Rankings (Top 100 in Global Impact) and WURI #1 in India for Innovation',
      'Maulana Abul Kalam Azad (MAKA) National Sports Trophy 1st Runner-Up & Alma Mater of Olympic Gold Medalist Neeraj Chopra',
      '5-Slide full-bleed hero carousel (PM Narendra Modi Science Congress, NAAC A++, NIRF #27, ₹3 Crore Placements, MAKA Trophy)',
      '150+ degree programs catalog (B.Tech CSE, AI & Data Science, MBA, BCA, B.A. LL.B Hons, B.Pharm, B.Sc. Hons Agriculture, B.Des) with live search and curriculum modal',
      'Record-breaking placements showcase: ₹3 Crore international highest package, ₹64 Lakh domestic highest, and 1,000+ top Fortune 500 recruiters',
      'Interactive 360° virtual tour simulator covering 600-acre residential campus, Olympic sports arena, 9-storey library, and Uni-Mall',
      'World leaders and Nobel laureates archive (PM Narendra Modi, Dalai Lama, Liz Truss, Tony Abbott, Hamid Karzai, Thomas Südhof, Avram Hershko, Neeraj Chopra)',
      'AUNEST 2026 interactive scholarship calculator with merit tier assessment and fee waiver estimation',
      'Online admissions application desk with real-time field validation, error handling, and generated AU-2026-XXXXXX reference tracking number',
      'Student and alumni career voices at Google, Amazon Web Services, Pfizer, and corporate law firms',
      'Expandable FAQ accordion addressing AUNEST, admissions eligibility, scholarships, residential hostels, and international student visas',
      'Comprehensive institutional footer with UGC compliance disclosures, 1800-102-4431 helpline, and download prospectus flow'
    ],
    conversionTriggers: [
      'Apply Online (AUNEST 2026)',
      'Calculate Scholarship',
      'Explore Degree Programs',
      'Launch 360° Campus Tour',
      'Download Prospectus',
      'Toll-Free Helpline'
    ],
    colorTheme: {
      primary: '#F37021',
      secondary: '#18181B',
      bgStyle: 'bg-[#090A0F]'
    },
    referenceSource: {
      type: 'zip',
      title: 'Arshad University (Rebranded from saveweb2zip-com-www-lpu-in.zip / https://www.lpu.in/)',
      sourceUrl: 'https://www.lpu.in/',
      notes: 'Faithfully reconstructed full university website demo rebranded as Arshad University from the uploaded LPU archive, preserving original NAAC A++ (3.68/4), NIRF #27, THE World Top 100, WURI #1 in India, MAKA Trophy, PM Modi visit, ₹3 Crore placements, 150+ degree programs, 360 virtual tour, AUNEST scholarship calculator, and admissions portal.',
      receivedAt: '2026-10-15'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Scoped styling under .arshad-university-demo.'
    },
    routes: [
      '/',
      '#home',
      '#rankings',
      '#programs',
      '#placements',
      '#campus-life',
      '#dignitaries',
      '#scholarships',
      '#admissions',
      '#contact'
    ],
    completedAt: '2026-10-15'
  },

  // --- TEMPLATE #21: GILGIT (Rebranded from GLBITM) ---
  {
    id: 'gilgit',
    slug: 'gilgit',
    numericId: 21,
    name: 'Gilgit',
    tagline: 'Excellence in Technology, Innovation & Management — NBA & NAAC Accredited · Highest Package ₹58 LPA',
    categoryCode: 'cat-education-coaching',
    categoryLetter: '2',
    categoryName: 'Coaching Institute & Education',
    subcategory: 'Universities',
    businessType: 'Major Technical Institute & University Campus Website',
    targetClients: 'Universities, engineering colleges, technology institutes, management schools, academic trusts',
    batch: 7,
    status: 'completed',
    entryPoint: 'src/templates/gilgit/Gilgit.tsx',
    assetPath: 'public/assets/gilgit/',
    thumbnail: '/assets/gilgit/hero-placement-58lpa.svg',
    dependencies: ['lucide-react', 'react'],
    features: [
      'Official institutional rebranding into Gilgit with royal navy blue and gold heraldic crest emblem',
      'Statutory accreditation highlights: Approved by AICTE, Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU Code: 192)',
      'NBA Accredited B.Tech Programs (CSE, IT, ECE, ME) and NAAC Grade \'A\' Accredited Institution',
      'Top Engineering Band ranking by NIRF (Ministry of Education, Govt. of India)',
      '4-Slide full-bleed hero carousel (₹58 LPA Placements, NBA/NAAC Accreditations, Centers of Excellence, 15+ Acre Campus)',
      'Academic programs catalog (B.Tech CSE, AI & ML, Data Science, IT, ECE, ME, MBA, MCA) with live search and curriculum modal',
      'Record-breaking placements showcase: ₹58 LPA highest package, ₹7.12 LPA average, 3,000+ offers from 300+ Fortune 500 recruiters',
      'Centers of Excellence (Apple Authorized iOS Lab, Dassault Systèmes 3DEXPERIENCE, MSME Approved Incubator, Intel IoT)',
      '15+ acre modern Knowledge Park II campus infrastructure with 1,000+ seater central AC auditorium and 3-storey digital library',
      'Online admissions application desk with real-time field validation, error handling, and generated GILGIT-2026-XXXXXX tracking number',
      'Verified alumni career outcomes at Palo Alto Networks, Amazon AWS, Cisco Systems, and Morgan Stanley',
      'Expandable FAQ accordion addressing AKTU counseling, NBA branches, highest packages, and on-campus residential hostels',
      'Comprehensive institutional footer with AICTE compliance disclosures, 0120-2323818 helpline, and download prospectus flow'
    ],
    conversionTriggers: [
      'Apply Online 2026',
      'Explore Degree Programs',
      'Download Information Brochure',
      'View Placement Records',
      'Contact Admissions Desk'
    ],
    colorTheme: {
      primary: '#002147',
      secondary: '#F59E0B',
      bgStyle: 'bg-[#001733]'
    },
    referenceSource: {
      type: 'zip',
      title: 'Gilgit (Rebranded from saveweb2zip-com-www-glbitm-org.zip / https://www.glbitm.org/)',
      sourceUrl: 'https://www.glbitm.org/',
      notes: 'Faithfully reconstructed full technical institute and university website demo rebranded as Gilgit from the uploaded GLBITM archive, preserving original NBA & NAAC accreditations, AICTE approval, AKTU affiliation (Code 192), ₹58 LPA highest package, 300+ recruiters, Apple iOS CoE, and online admissions portal.',
      receivedAt: '2026-10-16'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Scoped styling under .gilgit-demo.'
    },
    routes: [
      '/',
      '#home',
      '#rankings',
      '#programs',
      '#placements',
      '#innovation',
      '#facilities',
      '#admissions',
      '#contact'
    ],
    completedAt: '2026-10-16'
  },

  // --- TEMPLATE #22: ISTITUTO MARANGONI (Fashion, Art & Design Higher Education Academy) ---
  {
    id: 'istituto-marangoni',
    slug: 'istituto-marangoni',
    numericId: 22,
    name: 'Istituto Marangoni',
    tagline: 'The School of Fashion, Art & Design — Milano 1935 · Italian Higher Education in Fashion, Design, Fragrances & Art',
    categoryCode: 'cat-education-coaching',
    categoryLetter: '2',
    categoryName: 'Coaching Institute & Education',
    subcategory: 'Universities',
    businessType: 'International Fashion, Art & Design Higher Education Academy',
    targetClients: 'Fashion design students, luxury brand aspirants, interior architects, creative directors, fragrance brand managers',
    batch: 7,
    status: 'completed',
    entryPoint: 'src/templates/istituto-marangoni/IstitutoMarangoni.tsx',
    assetPath: 'public/assets/istituto-marangoni/',
    thumbnail: '/assets/istituto-marangoni/hero-90years.svg',
    dependencies: ['lucide-react', 'react'],
    features: [
      'Official luxury black, white & gold brand identity for Istituto Marangoni (Milano 1935)',
      'Statutory accreditations: Italian Ministry of University and Research (MUR - AFAM, 180 ECTS First Level Academic Diplomas)',
      'Manchester Metropolitan University (MMU, UK) degree validation & French RNCP Level 7 master accreditations',
      'QS World University Rankings Top 100 for Art & Design worldwide',
      '5-Slide full-bleed hero carousel (90 Years of Italian Creative Heritage, Open Days 2026, L\'Oréal Partnership, Metaverso AI Atelier, Maze 35)',
      'Four Creative Pillars (Macro-Areas): Fashion, Design, Art, Fragrances & Cosmetics with dedicated curriculum roadmaps',
      'Interactive degree courses catalog (BA Hons, Master\'s, Intensive, Summer) with live search and course detail modals',
      'Super Mentors & Alumni spotlight: Olivier Rousteing (Balmain), Giambattista Valli, Alessandro Sartori (Zegna), Domenico Dolce, Moschino',
      'Global Campuses interactive explorer across Milan (Fashion & Design), Florence, Paris, London, Dubai, Miami, and Mumbai',
      'Interactive Merit Scholarship Calculator estimating up to 50% tuition reduction based on creative portfolio excellence',
      'Admissions application desk with real-time field validation, portfolio URL submission, and generated IM-2026-XXXXXX tracking reference',
      '89% career placement rate with directory of 400+ international luxury recruiter houses (Gucci, Prada, Dior, Balmain, Cartier, LVMH)',
      'Maze 35 editorial magazine stories with reader modal and expandable AFAM & campus mobility FAQ accordion'
    ],
    conversionTriggers: [
      'Apply Online 2026',
      'Find a Degree Course',
      'Book Open Day Orientation',
      'Download 2026 Prospectus',
      'Calculate Merit Scholarship'
    ],
    colorTheme: {
      primary: '#D4AF37',
      secondary: '#070709',
      bgStyle: 'bg-[#070709]'
    },
    referenceSource: {
      type: 'zip',
      title: 'Istituto Marangoni (saveweb2zip-com-www-istitutomarangoni-com.zip / https://www.istitutomarangoni.com/en)',
      sourceUrl: 'https://www.istitutomarangoni.com/en',
      notes: 'Faithfully recreated complete international fashion, art and design higher education institute demo from the uploaded website archive, preserving original logos, 90-year heritage, MUR/AFAM accreditations, Super Mentors, global campuses, 89% placement rate, and online admissions portal.',
      receivedAt: '2026-10-16'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Sub-router built with section anchors.'
    },
    routes: [
      '/',
      '#home',
      '#macro-areas',
      '#courses',
      '#mentors',
      '#campuses',
      '#alumni',
      '#scholarships',
      '#admissions',
      '#news',
      '#faq'
    ],
    completedAt: '2026-10-16'
  },

  // --- TEMPLATE #23: CR RAMANS UNIVERSITY (Rebranded from Chandigarh University / cuchd.in) ---
  {
    id: 'cr-ramans-university',
    slug: 'cr-ramans-university',
    numericId: 23,
    name: 'CR RAMANS UNIVERSITY',
    tagline: 'Discover. Learn. Empower. — NAAC A+ Accredited · Ranked Among Top Universities by QS World & NIRF',
    categoryCode: 'cat-education-coaching',
    categoryLetter: '2',
    categoryName: 'Coaching Institute & Education',
    subcategory: 'Universities',
    businessType: 'Major Comprehensive University & Higher Education Campus',
    targetClients: 'Universities, engineering colleges, management institutes, law colleges, research campuses, academic trusts',
    batch: 7,
    status: 'completed',
    entryPoint: 'src/templates/cr-ramans-university/CrRamansUniversity.tsx',
    assetPath: 'public/assets/cr-ramans-university/',
    thumbnail: '/assets/cr-ramans-university/hero-placement-17cr.svg',
    dependencies: ['lucide-react', 'react'],
    features: [
      'Official institutional identity for CR RAMANS UNIVERSITY with heraldic crest, flaming torch, and laurel wreath',
      'Statutory accreditations highlights: NAAC Grade A+ Accredited (Highest cycle institutional benchmark)',
      'QS World University Rankings: #1 Private University in India & among Top 1% Universities Worldwide',
      'ABET USA Accredited engineering programs ensuring global professional equivalency of degrees',
      'NIRF Ranked University (Ministry of Education, Govt. of India) across Engineering, Management & Overall',
      '5-Slide full-bleed hero carousel (₹1.7 Crore Placements, NAAC A+ & QS World #1, CRUCET Scholarships, 12,000+ Patents, 200+ Acre Campus)',
      '150+ degree programs catalog (B.E. CSE, AI & ML, ECE, ME, MBA, BBA FinTech, BCA, MCA, B.A. LL.B Hons, B.Pharm, B.Sc Biotech, B.Des Animation) with live search and curriculum modal',
      'Record-shattering placements showcase: ₹1.7 Crore highest international package, ₹54.75 LPA domestic highest, 9,124+ offers from 904+ MNCs',
      'Research & Innovation hub: 12,000+ patents filed, 30+ industry-sponsored Centers of Excellence (IBM, Microsoft, Hyundai, Intel, Cisco, Dassault)',
      '360° virtual campus tour simulator covering Central Digital Library (150,000+ books), 2,000-seater AC auditorium, Olympic sports complex, and residential hostels',
      'CRUCET 2026 interactive scholarship calculator with merit tier assessment and up to 100% tuition fee waiver estimation',
      'Online admissions application desk with real-time field validation, error handling, and generated CRU-2026-XXXXXX tracking reference',
      'Application tracking desk with instant reference lookup simulation',
      'Verified student placement voices at Microsoft (₹54.75 LPA), AWS (₹44.14 LPA), Deloitte (₹12.5 LPA), and Trilegal Law',
      'Expandable FAQ accordion addressing CRUCET 2026, NAAC accreditation, placements, hostels, and program eligibility',
      'Comprehensive institutional footer with UGC compliance disclosures, AICTE/BCI/PCI/COA approvals, 1800 1212 88800 helpline, and download prospectus flow'
    ],
    conversionTriggers: [
      'Apply Online 2026',
      'Calculate CRUCET Scholarship',
      'Explore Degree Programs',
      'Download 2026 Prospectus',
      'View Placement Records',
      'Toll-Free Helpline'
    ],
    colorTheme: {
      primary: '#070D18',
      secondary: '#F59E0B',
      bgStyle: 'bg-[#070D18]'
    },
    referenceSource: {
      type: 'zip',
      title: 'CR RAMANS UNIVERSITY (Rebranded from saveweb2zip-com-www-cuchd-in.zip / https://www.cuchd.in/)',
      sourceUrl: 'https://www.cuchd.in/',
      notes: 'Faithfully reconstructed full university website demo rebranded as CR RAMANS UNIVERSITY from the uploaded Chandigarh University archive, preserving original NAAC A+ accreditation, QS World #1 Private in India ranking, ABET USA accreditation, ₹1.7 Crore highest package, 9,124+ offers, 30+ industry CoE labs, CRUCET scholarship portal, and online admissions desk.',
      receivedAt: '2026-10-16'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Scoped styling under .cr-ramans-demo.'
    },
    routes: [
      '/',
      '#home',
      '#rankings',
      '#programs',
      '#placements',
      '#innovation',
      '#campus-life',
      '#scholarships',
      '#admissions',
      '#faqs'
    ],
    completedAt: '2026-10-16'
  },

  // --- TEMPLATE #24: EDU TECH UNIVERSITY (Recreated from Monash University / monash.edu) ---
  {
    id: 'edu-tech-university',
    slug: 'edu-tech-university',
    numericId: 24,
    name: 'EDU TECH UNIVERSITY',
    tagline: "If You Don't Like The Way The World Is, Change It — Top 40 Global University & Group of Eight Australia",
    categoryCode: 'cat-education-coaching',
    categoryLetter: '2',
    categoryName: 'Coaching Institute & Education',
    subcategory: 'Universities',
    businessType: 'Major Comprehensive Global Research University',
    targetClients: 'Universities, research institutes, higher education campuses, international academic partnerships, medical & engineering faculties',
    batch: 7,
    status: 'completed',
    entryPoint: 'src/templates/edu-tech-university/EduTechUniversity.tsx',
    assetPath: 'public/assets/edu-tech-university/',
    thumbnail: '/assets/edu-tech-university/hero-change-it.svg',
    dependencies: ['lucide-react', 'react'],
    features: [
      'Official institutional identity for EDU TECH UNIVERSITY with heraldic crest, open book of wisdom, sword of truth, and southern cross stars',
      'Statutory accreditations highlights: Group of Eight (Go8) Australia, CRICOS Provider Code: 00008C, TEQSA Provider ID: PRV12040',
      'QS World University Rankings: #37 in the World & US News #37 Worldwide',
      'Subject World Rankings: #2 in the World for Pharmacy & Pharmacology, #1 in Australia for Engineering & Technology',
      'Triple Crown Accredited Business School (AACSB, EQUIS, AMBA)',
      '5-Slide full-bleed hero carousel (Change It Campaign, Global Campuses across 4 Continents, Research Impact, Campus Experience, Admissions 2026)',
      'Ten Academic Faculties directory (Engineering, IT, Business, Medicine, Pharmacy, Law, Science, Art & Design, Arts, Education)',
      'Interactive Course Finder catalog (B.Eng Software, B.CompSci AI, B.Med/MD, B.Pharm/M.Pharm, B.Com Finance, LL.B Hons, M.AI, MBA) with live search and curriculum modal',
      'Global Campuses Explorer across 8 locations: Clayton, Caulfield, Parkville, Peninsula, Malaysia (Sunway City), Indonesia (Jakarta), Prato (Italy), and IITB-ETU Academy (Mumbai)',
      'Frontier Research Impact Showcase: $480M+ research income, mRNA manufacturing, green hydrogen hub, World Mosquito dengue elimination in 14 countries',
      'Interactive Scholarship Assessment Calculator estimating domestic CSP and international fee waivers up to $10,000/yr or 100% full ride',
      'Direct Online Admissions Application Desk with real-time field validation, error handling, and generated ETU-2026-XXXXXX tracking reference',
      'Application status tracking lookup tool with instant status retrieval simulation',
      'Verified alumni career stories at Atlassian, Google DeepMind, The Alfred Hospital, CSL Behring, King & Wood Mallesons, and Dyson',
      '360° Virtual Campus Tour simulator covering Clayton Learning Precinct, MADA 3D Maker Space, and Parkville Chemistry Labs',
      'Expandable FAQ accordion filterable by Admissions, International, Scholarships, Campus Life, and Research',
      'Comprehensive institutional footer with Acknowledgement of Country, faculties directory, campus directories, and ABN/CRICOS compliance disclosures'
    ],
    conversionTriggers: [
      'Apply Online 2026',
      'Find a Course',
      'Scholarship Assessment Calculator',
      '360° Virtual Tour',
      'International Student Concierge',
      'Download 2026 Prospectus'
    ],
    colorTheme: {
      primary: '#002B49',
      secondary: '#006DAE',
      bgStyle: 'bg-[#002B49]'
    },
    referenceSource: {
      type: 'zip',
      title: 'EDU TECH UNIVERSITY (Recreated from saveweb2zip-com-www-monash-edu.zip / https://www.monash.edu/)',
      sourceUrl: 'https://www.monash.edu/',
      notes: 'Faithfully reconstructed full university website demo rebranded as EDU TECH UNIVERSITY from the uploaded Monash University archive, preserving original Go8 Australian university architecture, QS #37 world ranking, 10 faculties, global campuses across 4 continents, research strengths, and online admissions portal.',
      receivedAt: '2026-10-17'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Scoped styling under .edu-tech-university-root.'
    },
    routes: [
      '/',
      '#home',
      '#courses',
      '#faculties',
      '#campuses',
      '#research',
      '#scholarships',
      '#admissions',
      '#experience',
      '#testimonials',
      '#faqs'
    ],
    completedAt: '2026-10-17'
  },

  // --- TEMPLATE #25: SUSHANT UNIVERSITY (Recreated from saveweb2zip-com-sushantuniversity-edu-in(1).zip / https://sushantuniversity.edu.in/) ---
  {
    id: 'sushant-university',
    slug: 'sushant-university',
    numericId: 25,
    name: 'Sushant University',
    tagline: 'Excellence in Architecture, Design, Law, Engineering & Management — 15-Acre Gurugram Campus & SSAA Legacy',
    categoryCode: 'cat-education-coaching',
    categoryLetter: '2',
    categoryName: 'Coaching Institute & Education',
    subcategory: 'Universities',
    businessType: 'Premier Multidisciplinary University & Architecture Legacy Campus',
    targetClients: 'Universities, architecture institutes, design academies, law colleges, business schools, engineering campuses',
    batch: 8,
    status: 'completed',
    entryPoint: 'src/templates/sushant-university/SushantUniversity.tsx',
    assetPath: 'public/assets/sushant-university/',
    thumbnail: '/assets/sushant-university/hero-architecture-legacy.svg',
    dependencies: ['lucide-react', 'react'],
    features: [
      'Official institutional identity for Sushant University with emerald & gold heraldic crest, knowledge torch, and academic pillars',
      'Statutory accreditations highlights: Established under Haryana Private Universities Act 2012, UGC recognized, COA, BCI, and PCI approved',
      'Sushant School of Art & Architecture (SSAA): 35+ years of legacy ranked the #1 Architecture School in Delhi-NCR',
      'Vatel Hotel & Tourism Business School: International hospitality partnership with Vatel France and global culinary training',
      'Corporate Placements showcase: ₹50 LPA highest international package, ₹7.2 LPA average, 850+ recruiters across design, tech, and corporate sectors',
      '5-Slide full-bleed hero carousel (SSAA Legacy, ₹50 LPA Placements, Global Collaborations with Warwick & Vatel, 15-Acre Golf Course Road Campus, Admissions 2026)',
      'Eight Specialized Schools directory (SSAA Architecture, SSD Design, SET Engineering, SOB Business, SOL Law, SHS Health Sciences, Vatel Hospitality, SPD Planning)',
      'Comprehensive degree courses finder (B.Arch, B.Des, B.Tech CSE AI/ML, MBA, BBA FinTech, B.A. LL.B Hons, B.Pharm, B.Sc CVT) with live search and curriculum modal',
      '15-Acre smart campus infrastructure tour: Central AC digital library, 800-seater auditorium, moot courts, design ateliers, and on-campus residential hostels',
      'Merit & Haryana Domicile Scholarship Calculator evaluating academic scores and state residence benefits (up to 100% tuition waiver)',
      'Online admissions application desk with real-time field validation, error handling, and generated SU-2026-XXXXXX tracking reference',
      'Application status tracking lookup tool with instant status retrieval simulation',
      'Verified alumni career stories at Gensler, HOK, Microsoft, Google, Deloitte, and Taj Hotels',
      '360° Virtual Campus Tour simulator covering SSAA Design Studios, Robotics Labs, Moot Courtroom, and Vatel Commercial Kitchens',
      'Expandable FAQ accordion addressing COA approval, NATA requirements, scholarships, hostel amenities, and placement cells',
      'Comprehensive institutional footer with UGC compliance disclosures, statutory approvals, 1800 270 5520 admissions helpline, and brochure downloads'
    ],
    conversionTriggers: [
      'Apply Online 2026',
      'Calculate Merit Scholarship',
      'Explore Degree Programs',
      'Download 2026 Prospectus',
      'Schedule Campus Visit',
      'Toll-Free Helpline'
    ],
    colorTheme: {
      primary: '#0B2545',
      secondary: '#E65100',
      bgStyle: 'bg-[#0B2545]'
    },
    referenceSource: {
      type: 'zip',
      title: 'Sushant University (saveweb2zip-com-sushantuniversity-edu-in(1).zip / https://sushantuniversity.edu.in/)',
      sourceUrl: 'https://sushantuniversity.edu.in/',
      notes: 'Faithfully reconstructed full university website demo from the uploaded Sushant University archive, preserving original SSAA architecture heritage, 8 specialized schools, rankings (#1 Architecture in Delhi-NCR), ₹50 LPA placement records, 15-acre Gurugram campus, and online admissions portal.',
      receivedAt: '2026-10-17'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Scoped styling under .sushant-university-root.'
    },
    routes: [
      '/',
      '#home',
      '#rankings',
      '#schools',
      '#programs',
      '#placements',
      '#campus-life',
      '#scholarships',
      '#admissions',
      '#testimonials',
      '#faqs'
    ],
    completedAt: '2026-10-17'
  },

  // --- TEMPLATE #26: NIRMA UNIVERSITY (Recreated from https://nirmauni.ac.in/ / saveweb2zip-com-nirmauni-ac-in.zip) ---
  {
    id: 'nirma-university',
    slug: 'nirma-university',
    numericId: 26,
    name: 'Nirma University',
    tagline: 'तमसो मा ज्योतिर्गमय — NAAC Grade A+ (3.65 CGPA) · Centre of Excellence (Govt. of Gujarat) · 115-Acre Ahmedabad Campus',
    categoryCode: 'cat-education-coaching',
    categoryLetter: '2',
    categoryName: 'Coaching Institute & Education',
    subcategory: 'Universities',
    businessType: 'Premier Multidisciplinary University & Centre of Excellence',
    targetClients: 'Universities, engineering institutes, business schools, law faculties, pharmacy colleges, architecture schools, research trusts',
    batch: 8,
    status: 'completed',
    entryPoint: 'src/templates/nirma-university/NirmaUniversity.tsx',
    assetPath: 'public/assets/nirma-university/',
    thumbnail: '/assets/nirma-university/hero-centre-of-excellence.svg',
    dependencies: ['lucide-react', 'react'],
    features: [
      'Official institutional identity for Nirma University with heraldic flame of wisdom and Sanskrit motto "तमसो मा ज्योतिर्गमय"',
      'Statutory accreditations highlights: Established in 2003 under NERF, recognized by UGC under Section 2(f), NAAC Grade A+ (3.65 CGPA)',
      'Conferred prestigious "Centre of Excellence" (CoE) status by the Government of Gujarat',
      'NIRF Rankings: 29th in Architecture, 32nd in Pharmacy, 33rd in Law, 53rd in Management, Band 101-150 in Engineering',
      'Record-breaking placements showcase: ₹72.04 LPA highest international offer (B.Tech ECE), ₹70 LPA (MBA), 100% Cyber Security placement',
      '5-Slide full-bleed hero carousel (Centre of Excellence, ₹72.04 LPA Placements, Frontier AI & Tech Labs, 115-Acre Smart Campus, Admissions 2026)',
      'Eight Specialized Institutes directory (Technology, Management, Pharmacy, Law, Architecture & Planning, Science, Commerce, Design)',
      'Comprehensive degree courses finder (B.Tech CSE/ECE/AIML, MBA, Integrated BBA-MBA, BA LL.B Hons, B.Arch, B.Pharm, M.Sc Biotech) with live search and curriculum modal',
      '115-Acre smart green campus tour simulator covering Central Digital Library (1,50,000+ volumes), AICTE IDEA Lab, auditoriums, and hostels',
      'Interactive Merit Scholarship Calculator evaluating 10+2 scores or JEE Main/CAT/CLAT percentiles with up to 100% tuition fee waiver',
      'Online admissions application desk with real-time field validation, error handling, and generated NU-2026-XXXXXX tracking reference',
      'Application tracking desk with instant reference lookup simulation',
      'Verified student placement voices at Microsoft (₹42 LPA), Morgan Stanley (₹28.5 LPA), Trilegal (₹16 LPA), and Zydus Lifesciences',
      'Expandable FAQ accordion addressing ACPC seats, JEE Main, CAT/IPMAT, hostel amenities, and scholarships',
      'Comprehensive institutional footer with UGC compliance disclosures, statutory approvals (AICTE/BCI/PCI/COA), 1800 233 6143 helpline, and campus directions'
    ],
    conversionTriggers: [
      'Apply Online 2026',
      'Calculate Merit Scholarship',
      'Explore 8 Institutes',
      'Degree Program Finder',
      'View Placement Records',
      'Admissions Helpline'
    ],
    colorTheme: {
      primary: '#0A2548',
      secondary: '#F59E0B',
      bgStyle: 'bg-[#081426]'
    },
    referenceSource: {
      type: 'zip',
      title: 'Nirma University (saveweb2zip-com-nirmauni-ac-in.zip / https://nirmauni.ac.in/)',
      sourceUrl: 'https://nirmauni.ac.in/',
      notes: 'Faithfully reconstructed full university website demo from the uploaded Nirma University archive, preserving original NAAC Grade A+ (3.65 CGPA) accreditation, Centre of Excellence status (Govt. of Gujarat), 8 specialized institutes, ₹72.04 LPA highest placement, 115-acre campus, and online admissions portal.',
      receivedAt: '2026-10-17'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Sub-router built with section anchors.'
    },
    routes: [
      '/',
      '#home',
      '#rankings',
      '#institutes',
      '#programs',
      '#placements',
      '#campus-life',
      '#scholarships',
      '#admissions',
      '#faqs'
    ],
    completedAt: '2026-10-17'
  },

  // --- TEMPLATE #27: CHRIST UNIVERSITY (Recreated from https://www.christuniversity.in/ / saveweb2zip-com-www-christuniversity-in.zip) ---
  {
    id: 'christ-university',
    slug: 'christ-university',
    numericId: 27,
    name: 'CHRIST University',
    tagline: 'Excellence and Service — NAAC Grade A+ · Top 60 NIRF · Multi-Campus Ecosystem in Bengaluru, Delhi NCR & Pune Lavasa',
    categoryCode: 'cat-education-coaching',
    categoryLetter: '2',
    categoryName: 'Coaching Institute & Education',
    subcategory: 'Universities',
    businessType: 'Deemed to be University & Higher Education Ecosystem',
    targetClients: 'Deemed universities, collegiate networks, law schools, business management faculties, humanities and engineering institutions',
    batch: 8,
    status: 'completed',
    entryPoint: 'src/templates/christ-university/CHRISTUniversity.tsx',
    assetPath: 'public/assets/christ-university/',
    thumbnail: '/assets/christ-university/hero-excellence-service.svg',
    dependencies: ['lucide-react', 'react'],
    features: [
      'Official institutional identity for CHRIST (Deemed to be University) with heraldic shield and motto "Excellence and Service"',
      'Founded in 1969 by Carmelites of Mary Immaculate (CMI) Fathers, declared Deemed to be University under Section 3 of UGC Act in 2008',
      'Accredited with Grade "A+" by NAAC (4th Cycle) and ranked in Top 60 Universities in India under NIRF by Ministry of Education',
      'Comprehensive six-campus network: Bangalore Central Campus (Hosur Rd), Kengeri Campus, Bannerghatta Road Campus, Yeshwanthpur Campus, Delhi NCR Campus (Ghaziabad), and Pune Lavasa Campus (Hub of Analytics)',
      'Nine Academic Schools: Business and Management, School of Law (SLCU), Engineering & Technology, Commerce, Finance & Accountancy, Sciences, Arts & Humanities, Social Sciences, Architecture, and Education',
      '250+ Degree Programs with detailed search, degree level filter (UG/PG/PhD), campus availability, and syllabus curriculum modal',
      'Christ University Entrance Test (CUET) 2026 Admissions Portal with step-by-step guidance on Written Exam, Micro Presentation (MP), Skill Assessment (SA), and Personal Interview (PI)',
      'Interactive CUET Application Simulator generating unique CU-2026-XXXXX tracking credentials with instant validation',
      'Live Application Status Tracker with exam date, slot, and simulated admit card PDF download',
      'Placement & Corporate Network: Highest CTC ₹21.46 LPA, Average CTC ₹10.50 LPA, 450+ annual recruiting organizations (Deloitte, Goldman Sachs, Amazon, EY, BCG, Cisco, Bain & Co)',
      'Collegiate Culture & Traditions: National Cultural Fest In-Bloom, Bhasha Utsav & Ethnic Day, Natyarpana Classical Dance Ensemble, and the renowned Christ University Choir & Symphony Orchestra',
      'Research & Heritage Wing covering Centre for Research, Christ Publications (12 indexed journals), and Innovation & Incubation Centre',
      'Direct campus directory, admissions helpline (+91 80 4012 9100 / 9600), and comprehensive institutional footer'
    ],
    conversionTriggers: [
      'Apply Now (CUET 2026)',
      'Track Application Status',
      'Download Admit Card',
      'Explore 9 Academic Schools',
      'Tour 6 Campuses',
      'Placement Report & CTC'
    ],
    colorTheme: {
      primary: '#082142',
      secondary: '#D4AF37',
      bgStyle: 'bg-[#05172C]'
    },
    referenceSource: {
      type: 'zip',
      title: 'CHRIST University (saveweb2zip-com-www-christuniversity-in.zip / https://www.christuniversity.in/)',
      sourceUrl: 'https://www.christuniversity.in/',
      notes: 'Faithfully reconstructed full university website demo from the uploaded CHRIST University archive, preserving official CMI heritage since 1969, NAAC Grade A+ accreditation, NIRF Top 60 ranking, 6 campuses across India, 9 schools, CUET entrance test simulator, and vibrant cultural traditions.',
      receivedAt: '2026-10-17'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Sub-router built with internal view tabs.'
    },
    routes: [
      '/',
      '#home',
      '#academics',
      '#schools',
      '#admissions',
      '#cuet',
      '#campuses',
      '#placements',
      '#campus-life',
      '#in-bloom',
      '#research',
      '#contact'
    ],
    completedAt: '2026-10-17'
  },

  // --- TEMPLATE #28: SHIV NADAR UNIVERSITY (Recreated from https://snu.edu.in/home/ / saveweb2zip-com-snu-edu-in.zip) ---
  {
    id: 'shiv-nadar-university',
    slug: 'shiv-nadar-university',
    numericId: 28,
    name: 'Shiv Nadar University',
    tagline: 'Education for Life — Institution of Eminence (IoE) Deemed to be University (SNU Delhi-NCR) · NIRF Top 60 · 286-Acre Greater Noida NCR Campus',
    categoryCode: 'cat-education-coaching',
    categoryLetter: '2',
    categoryName: 'Coaching Institute & Education',
    subcategory: 'Universities',
    businessType: 'Institution of Eminence & Higher Education Research University',
    targetClients: 'Prospective students, parents, research scholars, Ph.D. candidates, corporate placement partners',
    batch: 8,
    status: 'completed',
    entryPoint: 'src/templates/shiv-nadar-university/ShivNadarUniversity.tsx',
    assetPath: 'public/assets/shiv-nadar-university/',
    thumbnail: '/assets/shiv-nadar-university/hero-ioe-campus.svg',
    dependencies: ['lucide-react', 'react'],
    features: [
      'Institution of Eminence (IoE) Deemed to be University status by Ministry of Education, Govt. of India',
      'Top 60 NIRF University for 8 consecutive years with QS Asia Top 350 recognition',
      'Founded in 2011 by Shiv Nadar Foundation (Founder of HCL Technologies)',
      '286-Acre fully residential, eco-sustainable campus in Greater Noida, Delhi-NCR',
      'Flagship OUR (Opportunities for Undergraduate Research) funded grant program for bachelor students',
      'Atal Incubation Centre (AIC-SNU) backed by NITI Aayog with 30+ deep-tech startups',
      'Olympic-standard 400,000 sq ft Indoor Sports Complex and equestrian club',
      'Comprehensive 5 Academic Schools: Engineering (Dual Degree with ASU), Natural Sciences, Humanities, Management & Continuing Education',
      'Career Development Centre with ₹58.09 LPA highest package and 93% placement rate (Google, DE Shaw, Microsoft)',
      'Full interactive admissions portal 2026-27 with SNUSAT & APT guidelines, JEE Main route, and merit scholarship calculator up to 100%',
      'Breeze annual techno-cultural and sports festival with 15k+ footfall and pro-nights'
    ],
    conversionTriggers: [
      'Apply Online (SNUSAT 2026)',
      'Check Scholarship Waiver',
      'Explore 5 Academic Schools',
      'Interactive Program Finder',
      'Undergraduate Research (OUR)',
      'Placement Report & CTC'
    ],
    colorTheme: {
      primary: '#002D62',
      secondary: '#BE123C',
      bgStyle: 'bg-[#071322]'
    },
    referenceSource: {
      type: 'zip',
      title: 'Shiv Nadar University (saveweb2zip-com-snu-edu-in.zip / https://snu.edu.in/home/)',
      sourceUrl: 'https://snu.edu.in/home/',
      notes: 'Faithfully reconstructed full university website demo from the uploaded Shiv Nadar University archive, preserving official IoE recognition by Govt. of India, 286-acre Greater Noida residential campus, 5 schools, OUR undergraduate research, AIC-SNU incubation, ₹58 LPA placements, and SNUSAT 2026 admissions portal.',
      receivedAt: '2026-10-17'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Sub-router built with internal view tabs.'
    },
    routes: [
      '/',
      '#home',
      '#about',
      '#academics',
      '#schools',
      '#admissions',
      '#snusat',
      '#research',
      '#our',
      '#campus',
      '#breeze',
      '#placements',
      '#contact'
    ],
    completedAt: '2026-10-17'
  },
  // --- TEMPLATE #29: MANIPAL (Universities under Category 2: Universities, Colleges & Education) ---
  {
    id: 'manipal-university',
    slug: 'manipal-university',
    numericId: 29,
    name: 'Manipal',
    tagline: 'Inspired by Life — Institution of Eminence (IoE) Deemed to be University · NAAC Grade A++ · NIRF Top 4 Universities in India · 600+ Acre Flagship Campus & 5 Global Campuses',
    categoryCode: 'cat-education-coaching',
    categoryLetter: '2',
    categoryName: 'Coaching Institute & Education',
    subcategory: 'Universities',
    businessType: 'Institution of Eminence & Global Multidisciplinary University',
    targetClients: 'Prospective undergraduate and postgraduate candidates, research scholars, medical aspirants, corporate hiring partners',
    batch: 8,
    status: 'completed',
    entryPoint: 'src/templates/manipal-university/ManipalUniversity.tsx',
    assetPath: 'public/assets/manipal-university/',
    thumbnail: '/assets/manipal-university/hero-campuses-600acres.svg',
    dependencies: ['lucide-react', 'react'],
    features: [
      'Institution of Eminence (IoE) Deemed to be University recognized by Ministry of Education, Govt. of India',
      'NIRF 2024 Rank #4 in Universities in India (Dental #1, Pharmacy #2, Medical #3, Architecture #6)',
      'NAAC Grade A++ accredited Category-I Deemed University with 3.65+ CGPA',
      'Founded in 1953 by Dr. T.M.A. Pai with 70+ years of pioneering private higher education heritage',
      '6 Global Campuses network across Manipal (600+ Acres flagship), Mangaluru, Bengaluru, Jamshedpur (MTMC), Dubai (UAE), and Melaka (Malaysia)',
      'Manipal Institute of Technology (MIT) alma mater of Microsoft CEO Satya Nadella and former Nokia CEO Rajeev Suri',
      'Kasturba Medical College (KMC) with 2,500+ teaching hospital beds and Asia’s largest Anatomy & Pathology Museum',
      'Welcomgroup Graduate School of Hotel Administration (WGSHA) in partnership with ITC Hotels, alma mater of Chef Vikas Khanna',
      'T. A. Pai Management Institute (TAPMI) with AACSB & AMBA dual international business school accreditations',
      'Corporate Placements powerhouse with ₹54.75 LPA highest domestic package and 350+ Fortune 500 recruiters',
      'Manipal Entrance Test (MET 2026) online admissions portal across 80+ test hubs nationwide with fast-track registration',
      'Over ₹100 Crores in annual merit scholarships including Dr. T.M.A. Pai 100% Freeship & Shakti Girl Child empowerment waivers',
      'Marena world-class 6-level air-conditioned indoor sports arena (140,000 sq ft) and 1.5 Lakh sq ft Central Library',
      'Active student innovation teams: Formula Manipal, SolarMobil, Project MANAS autonomous vehicle, and AeroManipal'
    ],
    conversionTriggers: [
      'Apply for MET 2026',
      'Check 100% Merit Scholarships',
      'Explore 6 Global Campuses',
      'Browse 300+ Programs',
      'Placement Report & CTC',
      'Download Prospectus'
    ],
    colorTheme: {
      primary: '#D3401B',
      secondary: '#0F172A',
      bgStyle: 'bg-slate-900 text-slate-100'
    },
    referenceSource: {
      type: 'zip',
      title: 'Manipal Academy of Higher Education (MAHE)',
      sourceUrl: 'https://www.manipal.edu/',
      receivedAt: '2026-10-20',
      notes: 'Premier Institution of Eminence (IoE) Deemed to be University and Top 4 NIRF Ranked Institution founded in 1953 by Dr. T.M.A. Pai. Features 6 modern campuses across Manipal, Mangaluru, Bengaluru, Jamshedpur, Dubai, and Malaysia, 300+ programs, MET entrance exam simulator, ₹54.75 LPA highest placement, and world-class Marena sports arena. Added as Template #29 under Universities category.'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Sub-router built with internal view tabs.'
    },
    routes: [
      '/',
      '#overview',
      '#about',
      '#campuses',
      '#programs',
      '#admissions',
      '#scholarships',
      '#research',
      '#campus-life',
      '#placements',
      '#faqs'
    ],
    completedAt: '2026-10-20'
  },
  // --- TEMPLATE #30: JAWAHARLAL NEHRU UNIVERSITY (JNU) (Universities under Category 2: Universities, Colleges & Education) ---
  {
    id: 'jawaharlal-nehru-university',
    slug: 'jawaharlal-nehru-university',
    numericId: 30,
    name: 'Jawaharlal Nehru University (JNU)',
    tagline: 'Leading Research & Critical Inquiry — Central University Established by Act of Parliament (1966) · NAAC Grade "A++" (3.77 CGPA) · NIRF Rank #2 in India · 1,020-Acre Aravalli Campus',
    categoryCode: 'cat-education-coaching',
    categoryLetter: '2',
    categoryName: 'Coaching Institute & Education',
    subcategory: 'Universities',
    businessType: 'Premier Central Research University & Institution of National Eminence',
    targetClients: 'Prospective undergraduate and postgraduate candidates, research scholars, Ph.D. fellows, diplomatic and civil service aspirants',
    batch: 8,
    status: 'completed',
    entryPoint: 'src/templates/jawaharlal-nehru-university/JawaharlalNehruUniversity.tsx',
    assetPath: 'public/assets/jawaharlal-nehru-university/',
    thumbnail: '/assets/jawaharlal-nehru-university/hero-aravali-campus.svg',
    dependencies: ['lucide-react', 'react'],
    features: [
      'Central University established by Act of Parliament (1966) with NAAC Grade "A++" (3.77 CGPA - highest national tier)',
      'NIRF 2024 Rank #2 across all Universities in India and QS World Top 20 in Development Studies',
      '1,020-acre lush residential sanctuary in the Aravalli hills ridge, South Delhi',
      '13 Specialized Academic Schools (SIS, SSS, SLL&CS, SLS, SPS, SCIS, SOE, ABVSME) & 8 Special Centres',
      'Alma mater of Nobel Laureate Abhijit Banerjee, Finance Minister Nirmala Sitharaman, and EAM Dr. S. Jaishankar',
      'Comprehensive CUET 2026 UG, PG, and Ph.D. entrance examination admissions desk',
      'Acclaimed Deprivation Points System (up to 12 points for backward district quartiles & female/transgender candidates)',
      '18 residential hostels named after Indian rivers (Ganga, Yamuna, Jhelum, Sutlej, Sabarmati, Brahmaputra)',
      'Dr. B.R. Ambedkar 9-storey Central Library tower housing 500,000+ volumes and Helen Keller Unit',
      'Advanced Instrumentation Research Facility (AIRF) housing Cryo-EM, HR-TEM, and 500 MHz NMR suites',
      'Recent faculty publications archive with peer-reviewed monographs and book reader modals'
    ],
    conversionTriggers: [
      'Apply via CUET 2026',
      'Check Deprivation Points',
      'Explore 13 Academic Schools',
      'Browse Degree Programs',
      '18 River Hostels Directory',
      'Research at AIRF'
    ],
    colorTheme: {
      primary: '#0F2847',
      secondary: '#DC2626',
      bgStyle: 'bg-slate-900 text-slate-100'
    },
    referenceSource: {
      type: 'zip',
      title: 'Jawaharlal Nehru University (JNU)',
      sourceUrl: 'https://www.jnu.ac.in/',
      receivedAt: '2026-10-20',
      notes: 'Premier Central Research University established by Act of Parliament in 1969. Accredited NAAC Grade "A++" (3.77 CGPA) and ranked #2 in India by NIRF. Features 1,020-acre Aravalli ridge campus, 13 schools, 8 special centres, CUET 2026 admissions desk, deprivation points calculator, 18 river hostels, and AIRF research facilities. Added as Template #30 under Universities category.'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Sub-router built with internal view tabs.'
    },
    routes: [
      '/',
      '#overview',
      '#about',
      '#schools',
      '#programs',
      '#admissions',
      '#deprivation',
      '#research',
      '#hostels',
      '#books',
      '#faqs'
    ],
    completedAt: '2026-10-20'
  },
  // --- TEMPLATE #31: GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY (IPU) (Universities under Category 2: Universities, Colleges & Education) ---
  {
    id: 'guru-gobind-singh-indraprastha-university',
    slug: 'guru-gobind-singh-indraprastha-university',
    numericId: 31,
    name: 'Guru Gobind Singh Indraprastha University (IPU)',
    tagline: 'Leading State University of Delhi — NAAC Grade "A++" (3.56 CGPA) · NIRF Top 75 · 60-Acre Dwarka & 18.75-Acre Smart Net-Zero East Delhi Campuses · 15 University Schools & 120+ Affiliated Premier Colleges',
    categoryCode: 'cat-education-coaching',
    categoryLetter: '2',
    categoryName: 'Coaching Institute & Education',
    subcategory: 'Universities',
    businessType: 'Premier State Technological & Professional University (Govt. of NCT of Delhi)',
    targetClients: 'Prospective undergraduate and postgraduate students, research scholars, competitive exam applicants, professional aspirants across Delhi-NCR and India',
    batch: 8,
    status: 'completed',
    entryPoint: 'src/templates/guru-gobind-singh-indraprastha-university/GuruGobindSinghIndraprasthaUniversity.tsx',
    assetPath: 'public/assets/guru-gobind-singh-indraprastha-university/',
    thumbnail: '/assets/guru-gobind-singh-indraprastha-university/hero-dwarka-campus.svg',
    dependencies: ['lucide-react', 'react'],
    features: [
      'State University established by Govt. of NCT of Delhi (GGSIPU Act 1998) recognized under UGC Section 12B',
      'Accredited with highest NAAC Grade "A++" (3.56 CGPA out of 4.00) valid for 7 years until 2030',
      'Ranked among the Top 75 Universities in India by NIRF and ISO 9001:2015 Certified',
      'Dual Campuses: 60+ Acre Dwarka Main Campus (Sector 16-C) and 18.75-Acre Smart Net-Zero East Delhi Campus (Surajmal Vihar)',
      '15 Specialized University Schools of Studies (USICT, USAR, USDI, USMS, USLLS, USBT, USCT, USE, USHSS, USM&AHS, USAP, USMC, CDOE)',
      'Network of 120+ Premier Affiliated Colleges (MAIT, MSIT, BVCOE, VIPS, JIMS, BPIT, GTBIT, VMMC)',
      'Iconic 4-Column Notice Panel System: Admissions 2026-27, Important Links, Students Corner, Alerts & Circulars',
      '8-Slide Full-Bleed Hero Photography Carousel using authentic campus slides from saveweb2zip archive',
      'Centralized Admissions Desk with interactive IPU CET 2026 application registration and tracking ID generator (IPU-2026-XXXXX)',
      'Interactive Examination Result Checker for gazetted MBBS, BHMS, and engineering marksheets',
      'Online Fee Services Portal for academic, examination, and hostel dues with instant receipt generation',
      'University Information Resource Centre (UIRC) Central Library housing 100,000+ volumes and IEEE digital subscriptions'
    ],
    conversionTriggers: [
      'Apply Online 2026',
      'Check Spot Round Paramedical Notices',
      'Explore 15 University Schools',
      'Browse 120+ Affiliated Colleges',
      'Online Fee Payment',
      'Check Exam Results'
    ],
    colorTheme: {
      primary: '#041D54',
      secondary: '#FFCB04',
      bgStyle: 'bg-slate-900 text-slate-100'
    },
    referenceSource: {
      type: 'zip',
      title: 'Guru Gobind Singh Indraprastha University (IPU)',
      sourceUrl: 'https://www.ipu.ac.in/',
      receivedAt: '2026-10-20',
      notes: 'Premier State University established by Govt. of NCT of Delhi in 1998. Conferred NAAC Grade "A++" (3.56 CGPA) and NIRF Top 75. Features 60-acre Dwarka campus, 18.75-acre Net-Zero East Delhi campus, 15 University Schools, 120+ affiliated colleges, 4-panel notice system, 8 hero photography slides, and online admissions & examination portals. Added as Template #31 under Universities category.'
    },
    integrationReadiness: {
      isIsolated: true,
      noSharedStatePollution: true,
      hasManifestEntry: true,
      hasResponsiveAudit: true,
      hasDocumentation: true,
      conflictCheckPassed: true,
      exportNotes: 'Completely isolated component with zero external store dependencies. Sub-router built with internal view tabs.'
    },
    routes: [
      "/",
      "#about",
      "#schools",
      "#programs",
      "#colleges",
      "#admissions",
      "#notices",
      "#campus",
      "#contact"
    ],
    completedAt: '2026-10-20'
  }
];