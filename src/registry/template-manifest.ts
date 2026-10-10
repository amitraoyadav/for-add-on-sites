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
  }
];
