import React, { useState } from 'react';
import { TemplateManifestItem, ReferenceType } from '../../types/template.types';
import { BUSINESS_CATEGORIES } from '../../categories/categories.data';
import {
  X,
  Sparkles,
  Link,
  FileText,
  Upload,
  CheckCircle2,
  FolderArchive,
  Image as ImageIcon,
  Send
} from 'lucide-react';

interface ReferenceIntakeModalProps {
  template: TemplateManifestItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmitReference: (data: {
    templateId: string;
    refType: ReferenceType;
    urlOrTitle: string;
    notes: string;
    clientNeeds: string;
  }) => void;
}

export const ReferenceIntakeModal: React.FC<ReferenceIntakeModalProps> = ({
  template,
  isOpen,
  onClose,
  onSubmitReference
}) => {
  const [refType, setRefType] = useState<ReferenceType>('url');
  const [urlOrTitle, setUrlOrTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [clientNeeds, setClientNeeds] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (template) {
      onSubmitReference({
        templateId: template.id,
        refType,
        urlOrTitle,
        notes,
        clientNeeds
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 1800);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#101217] border border-[#262c3a] max-w-xl w-full rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#1f2533] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-950/60 border border-blue-800/60 flex items-center justify-center text-blue-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Reference Ingestion Intake</h3>
              <p className="text-xs text-[#94a3b8]">
                Assigning reference material to {template ? template.id.toUpperCase() : 'selected slot'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#94a3b8] hover:text-white hover:bg-[#1a202c] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-950/80 border border-emerald-700 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white">Reference Queued Successfully!</h4>
            <p className="text-xs text-[#94a3b8] max-w-md mx-auto leading-relaxed">
              Assigned to <span className="text-white font-mono">{template?.id}</span>. When building this slot, the factory will implement the layout, styling, and conversion features from your supplied reference.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            {template && (
              <div className="p-3 bg-[#151922] border border-[#202736] rounded-xl flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">{template.name}</div>
                  <div className="text-[11px] text-[#94a3b8]">
                    Category {template.categoryLetter} ({template.categoryName}) · Batch {template.batch}
                  </div>
                </div>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800">
                  {template.id}
                </span>
              </div>
            )}

            {/* Reference Type Buttons */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#64748b] font-semibold mb-2">
                Reference Material Format
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { type: 'url' as ReferenceType, label: 'Website URL', icon: Link },
                  { type: 'pdf' as ReferenceType, label: 'PDF Brochure', icon: FileText },
                  { type: 'screenshot' as ReferenceType, label: 'Screenshot', icon: ImageIcon },
                  { type: 'zip' as ReferenceType, label: 'ZIP / Code', icon: FolderArchive }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      type="button"
                      key={item.type}
                      onClick={() => setRefType(item.type)}
                      className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                        refType === item.type
                          ? 'bg-blue-950/60 border-blue-500 text-white'
                          : 'bg-[#141822] border-[#222938] text-[#94a3b8] hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-[10px] font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* URL or Name Input */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#64748b] font-semibold mb-1">
                {refType === 'url' ? 'Reference Website URL' : 'Reference Document Name / Source'}
              </label>
              <input
                type="text"
                required
                placeholder={
                  refType === 'url'
                    ? 'https://example-restaurant-or-business.com'
                    : 'e.g. client_brochure_v2.pdf or brand_guidelines.zip'
                }
                value={urlOrTitle}
                onChange={(e) => setUrlOrTitle(e.target.value)}
                className="w-full bg-[#141822] border border-[#222938] focus:border-blue-500 rounded-lg px-3 py-2 text-white outline-none"
              />
            </div>

            {/* Specific Client Requirements */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#64748b] font-semibold mb-1">
                Specific Conversion & Client Priorities
              </label>
              <input
                type="text"
                placeholder="e.g. WhatsApp consultation button, table reservation form, dietary filter"
                value={clientNeeds}
                onChange={(e) => setClientNeeds(e.target.value)}
                className="w-full bg-[#141822] border border-[#222938] focus:border-blue-500 rounded-lg px-3 py-2 text-white outline-none"
              />
            </div>

            {/* Design Notes */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#64748b] font-semibold mb-1">
                Design & Style Directives (From Reference)
              </label>
              <textarea
                rows={3}
                placeholder="Describe key color palette, typography vibe (serif/editorial/minimalist), key sections to replicate faithfully..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#141822] border border-[#222938] focus:border-blue-500 rounded-lg px-3 py-2 text-white outline-none resize-none"
              />
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-[#181d28] hover:bg-[#202736] text-[#cbd5e1] rounded-lg transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-md shadow-blue-600/30"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Save to Queue</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
