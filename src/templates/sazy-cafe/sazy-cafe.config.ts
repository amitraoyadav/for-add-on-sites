/**
 * SAZY CAFE Configuration & Template Specifications
 * Raoz Demo Factory — Template #1
 * Category: Restaurant, Cafe & Food Business -> Cafes and Coffee Shops
 * Based on Adachi Restaurant architectural reference
 */

export const sazyCafeConfig = {
  id: 'sazy-cafe',
  name: 'SAZY CAFE',
  categoryCode: 'cat-food-hospitality',
  categoryName: 'Restaurant, Cafe & Food Business',
  subcategory: 'Cafes and Coffee Shops',
  businessType: 'Japanese-Inspired Gastronomy & Artisanal Coffee Lounge',
  tagline: 'A Vibe-Driven Culinary & Coffee Journey',
  status: 'completed' as const,
  entryPoint: 'src/templates/sazy-cafe/SazyCafe.tsx',
  assetDirectory: 'public/assets/sazy-cafe/',
  dependencies: ['lucide-react', 'react'],
  routes: ['/', '#about', '#menu', '#private-dining', '#gallery', '#hours', '#reservations'],

  // Configurable Business Placeholders (Phase 3 Requirement)
  placeholders: {
    brandName: 'SAZY CAFE',
    tagline: 'Artisanal Coffee & Elevated Japanese-Inspired Cuisine',
    address: '[SAZY CAFE ADDRESS]',
    phone: '[SAZY CAFE PHONE]',
    businessHours: '[SAZY CAFE BUSINESS HOURS]',
    reservationLink: '[SAZY CAFE RESERVATION LINK]',
    orderingLink: '[SAZY CAFE ORDERING LINK]',
    instagramLink: '[SAZY CAFE INSTAGRAM LINK]'
  },

  // Color Palette
  colorTheme: {
    primary: '#d4af37', // Burnished champagne gold
    secondary: '#181a1f', // Dark obsidian slate
    bgStyle: 'bg-[#0b0c0e]', // Deep charcoal black
    accent: '#c59b4c'
  },

  features: [
    'Elevated Japanese-inspired menu with dining, raw sushi bar, desserts & drinks',
    'Interactive Table Reservation Modal with room selector (Sushi Bar, Dining Room, Garden Patio)',
    'Live service hours and location dialer with click-to-call',
    'Private dining & event buyout inquiry modal with guest capacity calculators',
    'Curated multi-course tasting menu with dietary filters (GF, Vegan, Raw)',
    'Takeaway & delivery ordering interface with item counter',
    'Mobile slide-over navigation with authentic editorial typography'
  ],

  integrationSpecs: {
    exportBundleName: 'RaozWebsiteMaker_TPL001_SazyCafe',
    cssIsolation: 'Tailwind utility classes with zero global style pollution',
    routingStrategy: 'Self-contained section navigation & tab routing (zero host router collision)',
    readyForIntegrationAudit: true
  }
};
