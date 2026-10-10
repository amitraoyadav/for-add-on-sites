import React, { useState } from 'react';
import { TemplateManifestItem } from '../../types/template.types';
import { generateMigrationReport } from '../../utilities/export-manifest';
import {
  X,
  CheckCircle2,
  AlertCircle,
  FileText,
  Copy,
  Check,
  Code2,
  FolderTree,
  ShieldCheck,
  Layers,
  ArrowUpRight
} from 'lucide-react';

interface TemplateDetailModalProps {
  template: TemplateManifestItem | null;
  onClose: () => void;
  onPreview: (template: TemplateManifestItem) => void;
}

export const TemplateDetailModal: React.FC<TemplateDetailModalProps> = ({
  template,
  onClose,
  onPreview
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'checklist' | 'migration'>('overview');
  const [copied, setCopied] = useState(false);

  if (!template) return null;

  const migrationMarkdown = generateMigrationReport(template);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(migrationMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#101217] border border-[#262c3a] max-w-3xl w-full rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-[#1f2533] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold px-2.5 py-1 rounded bg-[#1e2330] text-blue-400 border border-[#2d364a]">
              {template.id.toUpperCase()}
            </span>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                {template.name}
              </h2>
              <p className="text-xs text-[#94a3b8]">
                {template.categoryName} → <span className="text-[#d4af37] font-medium">{template.subcategory}</span> · Batch {template.batch}
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

        {/* Tab Navigation */}
        <div className="px-6 pt-3 border-b border-[#1f2533] flex gap-4 text-xs font-medium">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-[#94a3b8] hover:text-white'
            }`}
          >
            Specification & Architecture
          </button>
          <button
            onClick={() => setActiveTab('checklist')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'checklist'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-[#94a3b8] hover:text-white'
            }`}
          >
            Raoz Maker Integration Audit
          </button>
          <button
            onClick={() => setActiveTab('migration')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'migration'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-[#94a3b8] hover:text-white'
            }`}
          >
            Migration Markdown Spec
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-[#cbd5e1]">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-[11px] uppercase tracking-wider text-[#64748b] font-semibold mb-2">
                  Client & Market Focus
                </h4>
                <div className="p-4 bg-[#141822] border border-[#1e2533] rounded-xl space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#64748b]">Business Specialty:</span>
                    <span className="font-medium text-white">{template.businessType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748b]">Target Paying Client:</span>
                    <span className="font-medium text-white">{template.targetClients}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748b]">Tagline:</span>
                    <span className="text-[#94a3b8] italic">"{template.tagline}"</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-[11px] uppercase tracking-wider text-[#64748b] font-semibold mb-2">
                  Isolated File System Paths (Zero Conflicts)
                </h4>
                <div className="p-4 bg-[#0a0c10] border border-[#1e2533] rounded-xl font-mono space-y-1.5 text-[#93c5fd]">
                  <div>Entry Point: <span className="text-white">{template.entryPoint}</span></div>
                  <div>Asset Dir: <span className="text-white">{template.assetPath}</span></div>
                  <div>Dependencies: <span className="text-white">{template.dependencies.join(', ')}</span></div>
                  <div>Routes: <span className="text-white">{template.routes.join(', ')}</span></div>
                </div>
              </div>

              <div>
                <h4 className="text-[11px] uppercase tracking-wider text-[#64748b] font-semibold mb-2">
                  Key Planned Features & Conversion Triggers
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {template.features.map((feat, i) => (
                    <div
                      key={i}
                      className="p-3 bg-[#141822] border border-[#1e2533] rounded-lg flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-[#cbd5e1]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'checklist' && (
            <div className="space-y-4">
              <div className="p-4 bg-blue-950/30 border border-blue-800/40 rounded-xl text-blue-200">
                <div className="flex items-center gap-2 font-semibold mb-1">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  Integration Protocol Compliance (Section 9)
                </div>
                <p className="text-[11px] text-blue-300/90 leading-relaxed">
                  Before any template is moved into Raoz Website Maker, all 6 isolation checkpoints must pass.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: 'Isolated Folder & Unique Stable ID',
                    desc: `No conflicts with existing 82+ templates. ID "${template.id}" is globally unique.`,
                    passed: template.integrationReadiness.isIsolated
                  },
                  {
                    title: 'No Shared Global State Pollution',
                    desc: 'Template relies exclusively on local component state or localized context.',
                    passed: template.integrationReadiness.noSharedStatePollution
                  },
                  {
                    title: 'Central Manifest Registration',
                    desc: 'Logged in template-manifest.ts with full metadata and dependency lists.',
                    passed: template.integrationReadiness.hasManifestEntry
                  },
                  {
                    title: 'Multi-Device Responsive Breakpoint Audit',
                    desc: '1440px desktop baseline, 768px tablet, and 375px mobile verified without overflow.',
                    passed: template.integrationReadiness.hasResponsiveAudit
                  },
                  {
                    title: 'Integration Documentation & Spec Sheet',
                    desc: 'Self-documenting README and migration notes ready for destination branch merge.',
                    passed: template.integrationReadiness.hasDocumentation
                  },
                  {
                    title: 'Tailwind CSS Scope Safety',
                    desc: 'Uses pure utility classes; zero global body/element style pollution.',
                    passed: template.integrationReadiness.conflictCheckPassed
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-[#141822] border border-[#1e2533] rounded-xl flex items-start justify-between gap-3"
                  >
                    <div>
                      <div className="font-semibold text-white mb-0.5">{item.title}</div>
                      <div className="text-[11px] text-[#94a3b8]">{item.desc}</div>
                    </div>
                    {item.passed ? (
                      <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-[11px] font-semibold shrink-0">
                        VERIFIED
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 text-[11px] font-semibold shrink-0">
                        PENDING BUILD
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'migration' && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] uppercase tracking-wider text-[#64748b] font-semibold">
                  Destination Merge Documentation (Markdown)
                </span>
                <button
                  onClick={copyToClipboard}
                  className="px-3 py-1 bg-[#1e2330] hover:bg-[#283144] text-white rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Spec'}</span>
                </button>
              </div>
              <pre className="p-4 bg-[#0a0c10] border border-[#1e2533] rounded-xl text-[11px] text-[#94a3b8] font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-[350px]">
                {migrationMarkdown}
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#1f2533] bg-[#0c0e12] flex items-center justify-between">
          <div className="text-[11px] text-[#64748b]">
            Factory Manifest ID: <span className="font-mono text-white">{template.id}</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#181d28] hover:bg-[#202736] text-[#cbd5e1] rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
            {template.referenceSource?.sourceUrl && (
              <a
                href={template.referenceSource.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#181d28] hover:bg-[#202736] text-emerald-400 border border-emerald-800/40 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer text-xs font-medium"
              >
                <span>Visit Original Site</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {template.status === 'completed' && (
              <button
                onClick={() => {
                  onClose();
                  onPreview(template);
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer text-xs"
              >
                <span>Launch Interactive Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
