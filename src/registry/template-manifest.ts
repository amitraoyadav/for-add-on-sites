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
    batch: 1,
    status: 'completed',
    entryPoint: 'src/templates/la-colombe/LaColombe.tsx',
    assetPath: 'public/assets/la-colombe/',
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
    batch: 1,
    status: 'completed',
    entryPoint: 'src/templates/wedding-photo-planet/WeddingPhotoPlanet.tsx',
    assetPath: 'public/assets/wedding-photo-planet/',
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
    batch: 1,
    status: 'completed',
    entryPoint: 'src/templates/photo-phactory/PhotoPhactory.tsx',
    assetPath: 'public/assets/photo-phactory/',
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
    batch: 1,
    status: 'completed',
    entryPoint: 'src/templates/tell-a-tale/TellATale.tsx',
    assetPath: 'public/assets/tell-a-tale/',
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
    batch: 1,
    status: 'completed',
    entryPoint: 'src/templates/gajare-photography/GajarePhotography.tsx',
    assetPath: 'public/assets/gajare-photography/',
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
    batch: 1,
    status: 'completed',
    entryPoint: 'src/templates/knotsbyamp/KnotsbyAMP.tsx',
    assetPath: 'public/assets/knotsbyamp/',
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
    batch: 1,
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
  }
];



