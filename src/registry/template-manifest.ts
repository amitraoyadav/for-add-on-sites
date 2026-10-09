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
  }
];
