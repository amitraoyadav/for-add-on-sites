/**
 * Raoz Demo Factory — Template Types
 * Governs the template manifest, integration checklist, and lifecycle status.
 */

import { CategoryCode } from './category.types';

export type TemplateStatus = 'planned' | 'in-progress' | 'completed' | 'verified';

export type ReferenceType = 'url' | 'pdf' | 'zip' | 'screenshot' | 'brief' | 'none';

export interface ReferenceSource {
  type: ReferenceType;
  title?: string;
  sourceUrl?: string;
  notes?: string;
  receivedAt?: string;
}

export interface IntegrationReadiness {
  isIsolated: boolean; // Own component folder, no cross-template imports
  noSharedStatePollution: boolean; // Does not mutate external global state
  hasManifestEntry: boolean; // Registered in central template-manifest.ts
  hasResponsiveAudit: boolean; // Tested for desktop, tablet, mobile
  hasDocumentation: boolean; // Has README or integration spec
  conflictCheckPassed: boolean; // Unique export names, css-safe classes
  exportNotes: string; // Specific instructions for Raoz Website Maker transfer
}

export interface TemplateManifestItem {
  id: string; // Stable ID: e.g. "sazy-cafe"
  numericId: number; // e.g. 1
  name: string; // e.g. "SAZY CAFE"
  tagline: string;
  categoryCode: CategoryCode;
  categoryLetter?: string;
  categoryName: string;
  subcategory: string; // e.g. "Cafes and Coffee Shops"
  businessType: string; // e.g. "Complete restaurant/cafe website"
  targetClients: string;
  batch: number;
  status: TemplateStatus;
  entryPoint: string; // "src/templates/sazy-cafe/SazyCafe.tsx"
  assetPath: string; // "public/assets/sazy-cafe/"
  dependencies: string[];
  features: string[];
  conversionTriggers: string[];
  colorTheme: {
    primary: string;
    secondary: string;
    bgStyle: string;
  };
  referenceSource: ReferenceSource;
  integrationReadiness: IntegrationReadiness;
  routes: string[];
  completedAt?: string;
}
