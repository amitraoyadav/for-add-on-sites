import React, { useState } from 'react';
import { TemplateManifestItem } from '../../types/template.types';
import { exportManifestJSON, generateMigrationReport } from '../../utilities/export-manifest';
import {
  ShieldCheck,
  Download,
  Copy,
  Check,
  Code2,
  FileText,
  AlertTriangle,
  GitBranch,
  Lock,
  Boxes
} from 'lucide-react';

interface IntegrationBridgeProps {
  templates: TemplateManifestItem[];
}

export const IntegrationBridge: React.FC<IntegrationBridgeProps> = ({ templates }) => {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(templates[0]?.id || 'sazy-cafe');
  const [copiedJSON, setCopiedJSON] = useState(false);
  const [copiedReport, setCopiedReport] = useState(false);

  const selectedTemplate = templates.find((t) => t.id === selectedTemplateId) || templates[0];
  const manifestJSON = exportManifestJSON(templates);
  const migrationReport = selectedTemplate ? generateMigrationReport(selectedTemplate) : '';

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(manifestJSON);
    setCopiedJSON(true);
    setTimeout(() => setCopiedJSON(false), 2000);
  };

  const handleCopyReport = () => {
    navigator.clipboard.writeText(migrationReport);
    setCopiedReport(true);
    setTimeout(() => setCopiedReport(false), 2000);
  };

  const handleDownloadJSON = () => {
    const blob = new Blob([manifestJSON], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `raoz-demo-factory-manifest-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      {/* Strict Separation Guarantees (Master Prompt Section 2) */}
      <div className="bg-[#12141a] border border-[#232733] rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Strict Project Separation Architecture</h2>
            <p className="text-xs text-[#94a3b8]">Enforcing Master Prompt Section 2 & Section 9</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-[#161a22] border border-[#222938] rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% Isolated Codebase
            </div>
            <p className="text-[#94a3b8] leading-relaxed">
              Zero dependency on Raoz Website Maker live files. Does not touch or overwrite your existing 82+ templates until explicit future batch migration.
            </p>
          </div>

          <div className="p-4 bg-[#161a22] border border-[#222938] rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold">
              <GitBranch className="w-4 h-4 text-blue-400" />
              Dedicated Integration Bridge
            </div>
            <p className="text-[#94a3b8] leading-relaxed">
              Every template is built with stable IDs, self-contained sub-routers, and isolated asset folders for atomic copy-paste into destination branches.
            </p>
          </div>

          <div className="p-4 bg-[#161a22] border border-[#222938] rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold">
              <Boxes className="w-4 h-4 text-amber-400" />
              No Auto-Deployment
            </div>
            <p className="text-[#94a3b8] leading-relaxed">
              Deployment targets remain completely separated. All code merges require audit review, git branch testing, and manual authorization.
            </p>
          </div>
        </div>
      </div>

      {/* Manifest JSON Export Engine */}
      <div className="bg-[#12141a] border border-[#232733] rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Code2 className="w-4 h-4 text-blue-400" />
              Central Template Manifest (Machine-Readable JSON)
            </h3>
            <p className="text-xs text-[#94a3b8]">
              Export the full 30-template specification registry to consume programmatically or sync with Raoz Website Maker.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyJSON}
              className="px-3.5 py-1.5 bg-[#1e2330] hover:bg-[#283144] text-white text-xs font-medium rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copiedJSON ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedJSON ? 'Copied' : 'Copy JSON'}</span>
            </button>
            <button
              onClick={handleDownloadJSON}
              className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download JSON</span>
            </button>
          </div>
        </div>

        <pre className="p-4 bg-[#0a0c10] border border-[#1e2533] rounded-xl text-[11px] text-[#93c5fd] font-mono overflow-x-auto whitespace-pre max-h-[250px] leading-relaxed">
          {manifestJSON.slice(0, 1500)}...
        </pre>
      </div>

      {/* Individual Template Migration Spec Generator */}
      <div className="bg-[#12141a] border border-[#232733] rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-400" />
              Per-Template Migration & Integration Spec
            </h3>
            <p className="text-xs text-[#94a3b8]">
              Step-by-step checklist and transfer instructions for your destination repo.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <select
              value={selectedTemplateId}
              onChange={(e) => setSelectedTemplateId(e.target.value)}
              className="bg-[#181d28] border border-[#262c3a] text-white text-xs rounded-lg px-3 py-1.5 outline-none"
            >
              {templates.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.id.toUpperCase()} - {t.name}
                </option>
              ))}
            </select>

            <button
              onClick={handleCopyReport}
              className="px-3.5 py-1.5 bg-[#1e2330] hover:bg-[#283144] text-white text-xs font-medium rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
            >
              {copiedReport ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedReport ? 'Copied' : 'Copy Markdown'}</span>
            </button>
          </div>
        </div>

        <pre className="p-4 bg-[#0a0c10] border border-[#1e2533] rounded-xl text-[11px] text-[#cbd5e1] font-mono overflow-x-auto whitespace-pre-wrap max-h-[300px] leading-relaxed">
          {migrationReport}
        </pre>
      </div>
    </div>
  );
};
