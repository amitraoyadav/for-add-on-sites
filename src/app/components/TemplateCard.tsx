import React from 'react';
import { TemplateManifestItem } from '../../types/template.types';
import {
  ExternalLink,
  Code2,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Layers
} from 'lucide-react';

interface TemplateCardProps {
  template: TemplateManifestItem;
  onPreview: (template: TemplateManifestItem) => void;
  onInspect: (template: TemplateManifestItem) => void;
  onIntake: (template: TemplateManifestItem) => void;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  template,
  onPreview,
  onInspect,
  onIntake
}) => {
  const isCompleted = template.status === 'completed' || template.status === 'verified';

  return (
    <div className="bg-[#12141a] border border-[#232733] hover:border-[#384157] rounded-xl p-5 flex flex-col justify-between transition-all duration-200 group hover:shadow-xl hover:shadow-black/40">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-[#1e2330] text-[#93c5fd] border border-[#2d364a]">
              {template.id.toUpperCase()}
            </span>
            <span className="text-xs text-[#94a3b8] font-medium truncate max-w-[190px]">
              {template.categoryName.split('&')[0].trim()} · {template.subcategory}
            </span>
          </div>

          <span
            className={`text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full flex items-center gap-1.5 ${
              isCompleted
                ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/60'
                : 'bg-amber-950/60 text-amber-300 border border-amber-800/50'
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                Live Demo
              </>
            ) : (
              <>
                <Clock className="w-3 h-3 text-amber-400" />
                Planned (Batch {template.batch})
              </>
            )}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-1 mb-1">
          {template.name}
        </h3>
        <p className="text-xs text-[#94a3b8] line-clamp-2 leading-relaxed mb-4">
          {template.tagline}
        </p>

        {/* Business Type & Target Client */}
        <div className="space-y-1.5 text-xs text-[#cbd5e1] mb-4 bg-[#171b24] p-3 rounded-lg border border-[#1f2533]">
          <div className="flex items-center justify-between">
            <span className="text-[#64748b]">Specialty:</span>
            <span className="font-medium text-white truncate max-w-[170px]">{template.businessType}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#64748b]">Batch:</span>
            <span className="text-blue-400 font-mono">Batch {template.batch}</span>
          </div>
        </div>

        {/* Key Features Preview */}
        <div className="mb-4">
          <div className="text-[11px] text-[#64748b] uppercase tracking-wider mb-2 font-medium">
            Core Conversion Triggers
          </div>
          <div className="flex flex-wrap gap-1.5">
            {template.conversionTriggers.slice(0, 3).map((trigger, i) => (
              <span
                key={i}
                className="text-[11px] px-2 py-0.5 rounded bg-[#1c2230] text-[#94a3b8] border border-[#2b3345]"
              >
                {trigger}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="pt-4 border-t border-[#1f2430] flex items-center justify-between gap-2">
        <button
          onClick={() => onInspect(template)}
          className="px-3 py-1.5 text-xs font-medium text-[#94a3b8] hover:text-white bg-[#181d28] hover:bg-[#202736] border border-[#283144] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <Code2 className="w-3.5 h-3.5 text-blue-400" />
          Specs & Audit
        </button>

        {isCompleted ? (
          <button
            onClick={() => onPreview(template)}
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm shadow-blue-500/30 cursor-pointer"
          >
            <span>Launch Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            onClick={() => onIntake(template)}
            className="px-3 py-1.5 text-xs font-medium text-amber-300 hover:text-amber-200 bg-amber-950/40 hover:bg-amber-900/40 border border-amber-800/40 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Assign Reference</span>
          </button>
        )}
      </div>
    </div>
  );
};
