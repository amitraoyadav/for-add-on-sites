import React, { useState } from 'react';
import { BUSINESS_CATEGORIES } from '../../categories/categories.data';
import { TemplateManifestItem } from '../../types/template.types';
import {
  Users,
  Target,
  Sparkles,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  FolderTree
} from 'lucide-react';

interface CategoryExplorerProps {
  templates: TemplateManifestItem[];
  onSelectCategory: (code: string) => void;
  onPreviewTemplate: (template: TemplateManifestItem) => void;
  onInspectTemplate: (template: TemplateManifestItem) => void;
}

export const CategoryExplorer: React.FC<CategoryExplorerProps> = ({
  templates,
  onSelectCategory,
  onPreviewTemplate,
  onInspectTemplate
}) => {
  const [selectedCatCode, setSelectedCatCode] = useState<string>('cat-food-hospitality');

  const selectedCategory =
    BUSINESS_CATEGORIES.find((c) => c.code === selectedCatCode) || BUSINESS_CATEGORIES[0];
  const categoryTemplates = templates.filter((t) => t.categoryCode === selectedCatCode);

  return (
    <div className="space-y-6">
      {/* Category selector pill tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {BUSINESS_CATEGORIES.map((cat) => {
          const count = templates.filter((t) => t.categoryCode === cat.code).length;
          const isSelected = selectedCatCode === cat.code;

          return (
            <button
              key={cat.code}
              onClick={() => setSelectedCatCode(cat.code)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-amber-950/60 border-[#d4af37] shadow-md shadow-[#d4af37]/10'
                  : 'bg-[#12141a] border-[#232733] hover:border-[#384157]'
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-1.5">
                <span className="font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-[#1e2330] text-[#d4af37]">
                  #{cat.letter || '•'}
                </span>
                <span className="text-[11px] text-[#94a3b8]">
                  {count} {count === 1 ? 'Demo' : 'Demos'}
                </span>
              </div>
              <div className="text-xs font-semibold text-white truncate">{cat.shortTitle}</div>
            </button>
          );
        })}
      </div>

      {/* Selected Category Deep Dive Panel */}
      <div className="bg-[#12141a] border border-[#232733] rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1f2533] pb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#1e2330] text-[#d4af37] border border-[#2d364a]">
                CATEGORY {selectedCategory.letter}
              </span>
              <span className="text-xs text-[#94a3b8]">
                {selectedCategory.subcategories.length} Specified Subcategories
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white font-serif">{selectedCategory.title}</h2>
          </div>

          <button
            onClick={() => onSelectCategory(selectedCategory.code)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium rounded-lg flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
          >
            <span>Filter Catalog by Category {selectedCategory.letter}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3-Column Intel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          {/* Subcategories */}
          <div className="p-4 bg-[#161a22] border border-[#222938] rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-[#d4af37] font-semibold uppercase tracking-wider text-[11px]">
              <FolderTree className="w-4 h-4" />
              Specified Subcategories
            </div>
            <ul className="space-y-1.5 text-[#cbd5e1]">
              {selectedCategory.subcategories.map((sub, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0"></span>
                  <span className="font-medium text-white">{sub}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Target Client Profiles */}
          <div className="p-4 bg-[#161a22] border border-[#222938] rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-blue-400 font-semibold uppercase tracking-wider text-[11px]">
              <Users className="w-4 h-4" />
              Target Client Profiles
            </div>
            <ul className="space-y-1.5 text-[#cbd5e1]">
              {selectedCategory.clientProfiles.map((client, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1"></span>
                  <span>{client}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Conversion Focus & Rules */}
          <div className="p-4 bg-[#161a22] border border-[#222938] rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold uppercase tracking-wider text-[11px]">
              <Target className="w-4 h-4" />
              Conversion Triggers
            </div>
            <ul className="space-y-1.5 text-[#cbd5e1] mb-3">
              {selectedCategory.conversionFocus.map((trig, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{trig}</span>
                </li>
              ))}
            </ul>

            <div className="p-3 bg-[#101217] border border-[#1f2533] rounded-lg text-[11px] text-[#94a3b8] flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">{selectedCategory.industryGuidelines}</p>
            </div>
          </div>
        </div>

        {/* Templates in this Category */}
        <div className="pt-4 border-t border-[#1f2533]">
          <h3 className="text-xs uppercase tracking-wider text-[#64748b] font-semibold mb-3">
            Registered Templates in Category {selectedCategory.letter} ({categoryTemplates.length})
          </h3>
          {categoryTemplates.length === 0 ? (
            <div className="p-4 bg-[#141822] border border-[#1f2533] rounded-xl text-xs text-[#94a3b8]">
              No templates in this category yet. This category remains valid and ready for reference assignment.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {categoryTemplates.map((tpl) => (
                <div
                  key={tpl.id}
                  className="p-4 bg-[#161a22] border border-[#222938] hover:border-[#384157] rounded-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-[#1e2330] text-[#d4af37]">
                        {tpl.id}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
                        Live Demo
                      </span>
                    </div>
                    <h4 className="text-xs font-semibold text-white mb-0.5">{tpl.name}</h4>
                    <span className="text-[11px] text-[#d4af37] font-medium block mb-1">
                      {tpl.subcategory}
                    </span>
                    <p className="text-[11px] text-[#94a3b8] line-clamp-2">{tpl.tagline}</p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#1f2533] flex items-center justify-between">
                    <button
                      onClick={() => onInspectTemplate(tpl)}
                      className="text-[11px] text-blue-400 hover:underline cursor-pointer"
                    >
                      View Specs
                    </button>
                    <button
                      onClick={() => onPreviewTemplate(tpl)}
                      className="px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-medium rounded cursor-pointer"
                    >
                      Preview Demo
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
