/**
 * Raoz Demo Factory — Category Types
 * Governs the business categories and subcategories.
 */

export type CategoryCode =
  | 'cat-food-hospitality'
  | 'cat-education-coaching'
  | 'cat-healthcare-wellness'
  | 'cat-real-estate'
  | 'cat-fashion-clothing'
  | 'cat-beauty-spa'
  | 'cat-wedding-events'
  | 'cat-interior-design'
  | 'cat-construction'
  | 'cat-retail-showrooms'
  | 'cat-fitness-sports'
  | 'cat-travel-tourism'
  | 'cat-professional-services'
  | 'cat-automotive-garage'
  | 'cat-manufacturing-b2b'
  | 'cat-digital-it-saas'
  | 'cat-recruitment-jobs'
  | 'cat-home-services'
  | 'cat-jewellery-d2c'
  | 'cat-ngo-community'
  | string;

export interface CategoryDefinition {
  code: CategoryCode;
  letter?: string;
  title: string; // e.g. "Restaurant, Cafe & Food Business"
  shortTitle: string; // e.g. "Restaurant & Cafe"
  subcategories: string[]; // e.g. ["Cafes and Coffee Shops", "Fine Dining", "Cloud Kitchens"]
  clientProfiles: string[];
  conversionFocus: string[];
  industryGuidelines: string;
  badgeColor: string;
  accentColor: string;
}
