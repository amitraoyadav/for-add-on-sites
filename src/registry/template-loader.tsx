/**
 * Raoz Demo Factory — Lazy Template Loader
 * Ensures modular lazy-loading of template components to keep bundle size minimal.
 */

import React, { lazy, Suspense } from 'react';
import { TemplateManifestItem } from '../types/template.types';
import { Clock, Sparkles } from 'lucide-react';

// Lazy map for implemented templates
const SazyCafeLazy = lazy(() => import('../templates/sazy-cafe/SazyCafe'));
const SocialOfflineLazy = lazy(() => import('../templates/social-offline/SocialOffline'));
const PhoCafeLazy = lazy(() => import('../templates/pho-cafe/PhoCafe'));
const LaColombeLazy = lazy(() => import('../templates/la-colombe/LaColombe'));
const WeddingPhotoPlanetLazy = lazy(() => import('../templates/wedding-photo-planet/WeddingPhotoPlanet'));
const PhotoPhactoryLazy = lazy(() => import('../templates/photo-phactory/PhotoPhactory'));
const TellATaleLazy = lazy(() => import('../templates/tell-a-tale/TellATale'));
const GajarePhotographyLazy = lazy(() => import('../templates/gajare-photography/GajarePhotography'));
const KnotsbyAMPLazy = lazy(() => import('../templates/knotsbyamp/KnotsbyAMP'));
const ThePortraitCompanyLazy = lazy(() => import('../templates/the-portrait-company/ThePortraitCompany'));
const PKPhotographyLazy = lazy(() => import('../templates/pk-photography/PKPhotography'));
const TrueShadesPhotographyLazy = lazy(() => import('../templates/true-shades-photography/TrueShadesPhotography'));
const SnapStoriesLazy = lazy(() => import('../templates/snapstories/SnapStories'));
const ShootExpressLazy = lazy(() => import('../templates/shoot-express/ShootExpress'));
const OllarStudiosLazy = lazy(() => import('../templates/ollar-studios/OllarStudios'));
const NikhilKapurPhotographyLazy = lazy(() => import('../templates/nikhil-kapur-photography/NikhilKapurPhotography'));
const IiserPuneLazy = lazy(() => import('../templates/iiser-pune/IiserPune'));
const RaoCollegeLazy = lazy(() => import('../templates/rao-college/RaoCollege'));
const SpJainLazy = lazy(() => import('../templates/sp-jain/SpJain'));

interface TemplateLoaderProps {
  template: TemplateManifestItem;
  onOpenIntakeModal?: () => void;
}

export function TemplateLoader({ template, onOpenIntakeModal }: TemplateLoaderProps) {
  // If template is SAZY CAFE
  if (template.id === 'sazy-cafe') {
    return (
      <Suspense
        fallback={
          <div className="min-h-[500px] flex items-center justify-center bg-[#0b0c0e] text-[#d4af37]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#d4af37] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs uppercase tracking-widest text-[#9ca3af]">
                Loading SAZY CAFE Demo...
              </span>
            </div>
          </div>
        }
      >
        <SazyCafeLazy />
      </Suspense>
    );
  }

  // If template is SOCIAL OFFLINE
  if (template.id === 'social-offline') {
    return (
      <Suspense
        fallback={
          <div className="min-h-[500px] flex items-center justify-center bg-[#0a0b0e] text-[#f95721]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#f95721] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs uppercase tracking-widest text-[#9ca3af]">
                Loading SOCIAL OFFLINE Demo...
              </span>
            </div>
          </div>
        }
      >
        <SocialOfflineLazy />
      </Suspense>
    );
  }

  // If template is PHO CAFE
  if (template.id === 'pho-cafe') {
    return (
      <Suspense
        fallback={
          <div className="min-h-[500px] flex items-center justify-center bg-[#FBF9F5] text-[#E21837]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#E21837] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs uppercase tracking-widest text-[#737373] font-mono">
                Loading PHO CAFE Demo...
              </span>
            </div>
          </div>
        }
      >
        <PhoCafeLazy />
      </Suspense>
    );
  }

  // If template is LA COLOMBE
  if (template.id === 'la-colombe') {
    return (
      <Suspense
        fallback={
          <div className="min-h-[500px] flex items-center justify-center bg-[#FBF9F5] text-[#0C1B2A]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#0C1B2A] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs uppercase tracking-widest text-[#5C6570] font-mono">
                Loading LA COLOMBE Flagship...
              </span>
            </div>
          </div>
        }
      >
        <LaColombeLazy />
      </Suspense>
    );
  }

  // If template is WEDDING PHOTO PLANET
  if (template.id === 'wedding-photo-planet') {
    return (
      <Suspense
        fallback={
          <div className="min-h-[500px] flex items-center justify-center bg-[#FFFFFF] text-[#E11D48]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#E11D48] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs uppercase tracking-widest text-[#6B7280] font-mono">
                Loading WEDDING PHOTO PLANET...
              </span>
            </div>
          </div>
        }
      >
        <WeddingPhotoPlanetLazy />
      </Suspense>
    );
  }

  // If template is PHOTO PHACTORY
  if (template.id === 'photo-phactory') {
    return (
      <Suspense
        fallback={
          <div className="min-h-[500px] flex items-center justify-center bg-[#000000] text-[#6DA716]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#6DA716] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs uppercase tracking-widest text-[#9CA3AF] font-mono">
                Loading PHOTO PHACTORY...
              </span>
            </div>
          </div>
        }
      >
        <PhotoPhactoryLazy />
      </Suspense>
    );
  }

  // If template is TELL-A-TALE STUDIOS
  if (template.id === 'tell-a-tale') {
    return (
      <Suspense
        fallback={
          <div className="min-h-[500px] flex items-center justify-center bg-[#FAF9F5] text-[#141518]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#141518] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs uppercase tracking-widest text-[#5C6068] font-mono">
                Loading TELL-A-TALE STUDIOS...
              </span>
            </div>
          </div>
        }
      >
        <TellATaleLazy />
      </Suspense>
    );
  }

  // If template is GAJARE PHOTOGRAPHY
  if (template.id === 'gajare-photography') {
    return (
      <Suspense
        fallback={
          <div className="min-h-[500px] flex items-center justify-center bg-[#0B0C10] text-[#D4AF37]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs uppercase tracking-widest text-[#9CA3AF] font-mono">
                Loading GAJARE PHOTOGRAPHY...
              </span>
            </div>
          </div>
        }
      >
        <GajarePhotographyLazy />
      </Suspense>
    );
  }

  // If template is KNOTSBYAMP
  if (template.id === 'knotsbyamp') {
    return (
      <Suspense
        fallback={
          <div className="min-h-[500px] flex items-center justify-center bg-[#0E0E11] text-[#C99D66]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#C99D66] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs uppercase tracking-widest text-[#9CA3AF] font-mono">
                Loading KNOTSBYAMP...
              </span>
            </div>
          </div>
        }
      >
        <KnotsbyAMPLazy />
      </Suspense>
    );
  }

  // If template is THE PORTRAIT COMPANY
  if (template.id === 'the-portrait-company') {
    return (
      <Suspense
        fallback={
          <div className="min-h-[500px] flex items-center justify-center bg-[#080808] text-[#D4AF37]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs uppercase tracking-widest text-[#9CA3AF] font-mono">
                Loading THE PORTRAIT COMPANY...
              </span>
            </div>
          </div>
        }
      >
        <ThePortraitCompanyLazy />
      </Suspense>
    );
  }

  // If template is PK PHOTOGRAPHY
  if (template.id === 'pk-photography') {
    return (
      <Suspense
        fallback={
          <div className="min-h-[500px] flex items-center justify-center bg-[#090A0C] text-[#C5A880]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#C5A880] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs uppercase tracking-widest text-[#9CA3AF] font-mono">
                Loading PK PHOTOGRAPHY (Mumbai & Goa)...
              </span>
            </div>
          </div>
        }
      >
        <PKPhotographyLazy />
      </Suspense>
    );
  }

  // If template is TRUE SHADES PHOTOGRAPHY
  if (template.id === 'true-shades-photography') {
    return (
      <Suspense
        fallback={
          <div className="min-h-[500px] flex items-center justify-center bg-[#fdfcf7] text-[#666666]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#bfd5c8] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs uppercase tracking-widest text-[#7a7a7a] font-mono">
                Loading TRUE SHADES PHOTOGRAPHY...
              </span>
            </div>
          </div>
        }
      >
        <TrueShadesPhotographyLazy />
      </Suspense>
    );
  }

  // If template is SNAPSTORIES PHOTOGRAPHY
  if (template.id === 'snapstories') {
    return (
      <Suspense
        fallback={
          <div className="min-h-[500px] flex items-center justify-center bg-white text-[#222222]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#222222] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs uppercase tracking-widest text-[#666666] font-mono">
                Loading SNAPSTORIES PHOTOGRAPHY...
              </span>
            </div>
          </div>
        }
      >
        <SnapStoriesLazy />
      </Suspense>
    );
  }

  // If template is SHOOT EXPRESS PHOTOGRAPHY
  if (template.id === 'shoot-express') {
    return (
      <Suspense
        fallback={
          <div className="min-h-[500px] flex items-center justify-center bg-[#0F172A] text-[#E11D48]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#E11D48] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs uppercase tracking-widest text-slate-400 font-mono">
                Loading SHOOT EXPRESS PHOTOGRAPHY...
              </span>
            </div>
          </div>
        }
      >
        <ShootExpressLazy />
      </Suspense>
    );
  }

  // If template is OLLAR STUDIOS
  if (template.id === 'ollar-studios') {
    return (
      <Suspense
        fallback={
          <div className="min-h-[500px] flex items-center justify-center bg-[#0F172A] text-[#2563EB]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#2563EB] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs uppercase tracking-widest text-slate-400 font-mono">
                Loading OLLAR STUDIOS...
              </span>
            </div>
          </div>
        }
      >
        <OllarStudiosLazy />
      </Suspense>
    );
  }

  // If template is NIKHIL KAPUR PHOTOGRAPHY
  if (template.id === 'nikhil-kapur-photography') {
    return (
      <Suspense
        fallback={
          <div className="min-h-[500px] flex items-center justify-center bg-[#050505] text-white">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-white/80 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs uppercase tracking-widest text-white/50 font-mono">
                Loading NIKHIL KAPUR PHOTOGRAPHY...
              </span>
            </div>
          </div>
        }
      >
        <NikhilKapurPhotographyLazy />
      </Suspense>
    );
  }

  // If template is IISER PUNE
  if (template.id === 'iiser-pune' || template.id === 'iiser-pune-homepage-demo') {
    return (
      <Suspense
        fallback={
          <div className="min-h-[500px] flex items-center justify-center bg-[#171412] text-white">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#b62126] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs uppercase tracking-widest text-white/80 font-mono">
                Loading IISER PUNE Demo...
              </span>
            </div>
          </div>
        }
      >
        <IiserPuneLazy />
      </Suspense>
    );
  }

  // If template is RAO COLLEGE
  if (template.id === 'rao-college' || template.id === 'rao-college-demo') {
    return (
      <Suspense
        fallback={
          <div className="min-h-[500px] flex items-center justify-center bg-[#0A192F] text-white">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs uppercase tracking-widest text-white/80 font-mono">
                Loading RAO COLLEGE Demo...
              </span>
            </div>
          </div>
        }
      >
        <RaoCollegeLazy />
      </Suspense>
    );
  }

  // If template is S P JAIN SCHOOL OF GLOBAL MANAGEMENT
  if (template.id === 'sp-jain' || template.id === 'sp-jain-school-of-global-management') {
    return (
      <Suspense
        fallback={
          <div className="min-h-[500px] flex items-center justify-center bg-[#140608] text-white">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs uppercase tracking-widest text-[#F5D061] font-mono">
                Loading S P JAIN Global Demo...
              </span>
            </div>
          </div>
        }
      >
        <SpJainLazy />
      </Suspense>
    );
  }



  // Fallback for future planned slots
  return (
    <div className="min-h-[600px] bg-[#0c0d10] text-[#f1f3f7] p-8 sm:p-12 flex items-center justify-center border border-[#1e222b]">
      <div className="max-w-xl text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#1e2433] border border-[#2d3748] flex items-center justify-center mx-auto mb-6 text-[#60a5fa]">
          <Clock className="w-8 h-8" />
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e293b] border border-[#334155] text-xs text-[#94a3b8] mb-4">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          Slot Reserved · {template.id.toUpperCase()} · Batch {template.batch}
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2 font-serif">
          {template.name}
        </h2>
        <p className="text-sm text-[#94a3b8] mb-6 leading-relaxed">
          {template.tagline}
        </p>

        <div className="p-4 bg-[#141822] border border-[#1e2638] rounded-xl text-left text-xs text-[#cbd5e1] mb-8 space-y-2">
          <div className="flex justify-between py-1 border-b border-[#1f293d]">
            <span className="text-[#64748b]">Category:</span>
            <span className="font-medium text-white">{template.categoryName}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-[#1f293d]">
            <span className="text-[#64748b]">Subcategory:</span>
            <span className="font-medium text-[#d4af37]">{template.subcategory}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-[#1f293d]">
            <span className="text-[#64748b]">Business Type:</span>
            <span className="font-medium text-white">{template.businessType}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-[#1f293d]">
            <span className="text-[#64748b]">Component Path:</span>
            <span className="font-mono text-[#93c5fd]">{template.entryPoint}</span>
          </div>
        </div>

        {onOpenIntakeModal && (
          <button
            onClick={onOpenIntakeModal}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-all shadow-lg shadow-blue-600/20 inline-flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            Provide Reference for this Slot
          </button>
        )}
      </div>
    </div>
  );
}
