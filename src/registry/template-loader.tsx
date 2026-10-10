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
