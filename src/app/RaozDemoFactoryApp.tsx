import React, { useState } from 'react';
import { TEMPLATE_MANIFEST } from '../registry/template-manifest';
import { BUSINESS_CATEGORIES } from '../categories/categories.data';
import { TemplateManifestItem, ReferenceType } from '../types/template.types';
import { TemplateLoader } from '../registry/template-loader';
import { TemplateCard } from './components/TemplateCard';
import { TemplateDetailModal } from './components/TemplateDetailModal';
import { ReferenceIntakeModal } from './components/ReferenceIntakeModal';
import { CategoryExplorer } from './components/CategoryExplorer';
import { IntegrationBridge } from './components/IntegrationBridge';
import {
  Layers,
  Sparkles,
  ShieldCheck,
  Smartphone,
  Tablet,
  Monitor,
  Maximize2,
  Minimize2,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  ExternalLink,
  PlusCircle,
  FolderSync,
  BookOpen,
  ArrowRight,
  Database,
  Terminal,
  Grid3X3,
  List
} from 'lucide-react';

export default function RaozDemoFactoryApp() {
  const [templates, setTemplates] = useState<TemplateManifestItem[]>(TEMPLATE_MANIFEST);
  const [activeTab, setActiveTab] = useState<'catalog' | 'preview' | 'categories' | 'intake' | 'integration' | 'rules'>('catalog');
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateManifestItem>(templates[0]);
  const [detailModalTemplate, setDetailModalTemplate] = useState<TemplateManifestItem | null>(null);
  const [intakeModalTemplate, setIntakeModalTemplate] = useState<TemplateManifestItem | null>(null);
  const [isIntakeModalOpen, setIsIntakeModalOpen] = useState(false);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('all');
  const [selectedBatchFilter, setSelectedBatchFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Previewer device viewport
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isFullScreenPreview, setIsFullScreenPreview] = useState(false);

  // Reference Queue state
  const [referenceQueue, setReferenceQueue] = useState<Array<{
    id: string;
    templateId: string;
    refType: ReferenceType;
    urlOrTitle: string;
    notes: string;
    clientNeeds: string;
    submittedAt: string;
  }>>([
    {
      id: 'ref-sazy-01',
      templateId: 'sazy-cafe',
      refType: 'zip',
      urlOrTitle: 'Adachi Restaurant (saveweb2zip-com-adachirestaurant-com.zip)',
      notes: 'Elevated Japanese-inspired cuisine & coffee culture in historic Victorian setting. Recreated as SAZY CAFE.',
      clientNeeds: 'Table reservation modal, curbside takeout bento, private dining buyout, happy hour, editable business placeholders.',
      submittedAt: '2026-10-09'
    }
  ]);

  const completedCount = templates.filter((t) => t.status === 'completed' || t.status === 'verified').length;

  // Filtered Templates
  const filteredTemplates = templates.filter((t) => {
    const matchesSearch =
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.businessType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.targetClients.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategoryFilter === 'all' || t.categoryCode === selectedCategoryFilter;
    const matchesStatus =
      selectedStatusFilter === 'all' ||
      (selectedStatusFilter === 'completed' && (t.status === 'completed' || t.status === 'verified')) ||
      (selectedStatusFilter === 'planned' && t.status === 'planned');
    const matchesBatch = selectedBatchFilter === 'all' || t.batch.toString() === selectedBatchFilter;

    return matchesSearch && matchesCategory && matchesStatus && matchesBatch;
  });

  const handleLaunchPreview = (tpl: TemplateManifestItem) => {
    setSelectedTemplate(tpl);
    setActiveTab('preview');
  };

  const handleInspect = (tpl: TemplateManifestItem) => {
    setDetailModalTemplate(tpl);
  };

  const handleOpenIntake = (tpl: TemplateManifestItem) => {
    setIntakeModalTemplate(tpl);
    setIsIntakeModalOpen(true);
  };

  const handleReferenceSubmit = (data: {
    templateId: string;
    refType: ReferenceType;
    urlOrTitle: string;
    notes: string;
    clientNeeds: string;
  }) => {
    setReferenceQueue((prev) => [
      {
        id: `ref-${Date.now()}`,
        ...data,
        submittedAt: new Date().toISOString().split('T')[0]
      },
      ...prev
    ]);

    // Update template manifest item reference in memory
    setTemplates((prev) =>
      prev.map((item) => {
        if (item.id === data.templateId) {
          return {
            ...item,
            status: item.status === 'completed' ? 'completed' : 'in-progress',
            referenceSource: {
              type: data.refType,
              title: data.urlOrTitle,
              notes: data.notes,
              receivedAt: new Date().toISOString().split('T')[0]
            }
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-[#f1f3f7] flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Protocol Banner */}
      <div className="bg-[#10131c] border-b border-[#1f2536] px-4 sm:px-6 py-2.5 text-xs text-[#94a3b8] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 font-semibold text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Independent Architecture
          </span>
          <span className="text-[#333f56]">|</span>
          <span className="hidden sm:inline text-[#cbd5e1]">
            Raoz Website Maker Target Bridge (82+ Existing Templates Unaltered)
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 rounded bg-amber-950/80 border border-amber-800 text-amber-300 font-mono text-[11px]">
            Fresh Collection Active · SAZY CAFE (Template #1)
          </span>
          <span className="px-2 py-0.5 rounded bg-[#1e2330] border border-[#2d374d] text-[#cbd5e1] text-[11px]">
            Auto-Deploy Disabled
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="border-b border-[#1f2536] bg-[#0c0e15]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('catalog')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold tracking-tight text-white">RAOZ DEMO FACTORY</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/60 uppercase">
                  v1.0
                </span>
              </div>
              <p className="text-xs text-[#8a98b0]">
                Website Template Factory for Popular Business Categories
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#141824] p-1 rounded-xl border border-[#222a3d] text-xs font-medium">
            <button
              onClick={() => setActiveTab('catalog')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'catalog' ? 'bg-blue-600 text-white shadow-sm' : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              Demo Collection ({templates.length})
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'preview' ? 'bg-blue-600 text-white shadow-sm' : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              Live Demo Frame
            </button>
            <button
              onClick={() => setActiveTab('categories')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'categories' ? 'bg-blue-600 text-white shadow-sm' : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              20 Business Categories
            </button>
            <button
              onClick={() => setActiveTab('intake')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'intake' ? 'bg-blue-600 text-white shadow-sm' : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              Reference Intake ({referenceQueue.length})
            </button>
            <button
              onClick={() => setActiveTab('integration')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'integration' ? 'bg-blue-600 text-white shadow-sm' : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              Integration Bridge
            </button>
            <button
              onClick={() => setActiveTab('rules')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'rules' ? 'bg-blue-600 text-white shadow-sm' : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              Architecture Rules
            </button>
          </nav>

          {/* Quick Action */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const nextPlanned = templates.find((t) => t.status === 'planned');
                if (nextPlanned) {
                  handleOpenIntake(nextPlanned);
                } else {
                  handleOpenIntake(templates[0]);
                }
              }}
              className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all shadow-md shadow-blue-600/30 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Queue Next Reference</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="lg:hidden px-4 py-2 border-t border-[#1f2536] flex items-center overflow-x-auto gap-2 text-xs">
          {[
            { id: 'catalog', label: 'Manifest (30)' },
            { id: 'preview', label: 'Demo Preview' },
            { id: 'categories', label: 'Categories A-L' },
            { id: 'intake', label: `Intake (${referenceQueue.length})` },
            { id: 'integration', label: 'Integration' },
            { id: 'rules', label: 'Rules' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1 rounded-lg shrink-0 ${
                activeTab === tab.id ? 'bg-blue-600 text-white' : 'text-[#94a3b8] bg-[#141824]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">
        {/* TAB 1: TEMPLATE MANIFEST & CATALOG */}
        {activeTab === 'catalog' && (
          <div className="space-y-6">
            {/* Top Factory Metrics Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-[#12141a] border border-[#232733] rounded-xl">
                <div className="text-[11px] text-[#64748b] uppercase tracking-wider mb-1 font-medium">
                  Fresh Collection
                </div>
                <div className="text-2xl font-bold text-white flex items-baseline gap-2">
                  <span>{templates.length} Website</span>
                  <span className="text-xs text-[#d4af37] font-normal font-mono">Template #1 Active</span>
                </div>
              </div>

              <div className="p-4 bg-[#12141a] border border-[#232733] rounded-xl">
                <div className="text-[11px] text-[#64748b] uppercase tracking-wider mb-1 font-medium">
                  Category Spectrum
                </div>
                <div className="text-2xl font-bold text-blue-400 flex items-baseline gap-2">
                  <span>20 Categories</span>
                  <span className="text-xs text-[#94a3b8] font-normal">With Subcategories</span>
                </div>
              </div>

              <div className="p-4 bg-[#12141a] border border-[#232733] rounded-xl">
                <div className="text-[11px] text-[#64748b] uppercase tracking-wider mb-1 font-medium">
                  Verified Template #1
                </div>
                <div className="text-2xl font-bold text-emerald-400 flex items-baseline gap-2">
                  <span>SAZY CAFE</span>
                  <span className="text-xs text-emerald-500 font-normal">Live Preview</span>
                </div>
              </div>

              <div className="p-4 bg-[#12141a] border border-[#232733] rounded-xl">
                <div className="text-[11px] text-[#64748b] uppercase tracking-wider mb-1 font-medium">
                  Subcategory Focus
                </div>
                <div className="text-2xl font-bold text-amber-400 flex items-baseline gap-2">
                  <span>Cafes & Coffee</span>
                  <span className="text-xs text-[#94a3b8] font-normal">Category 1</span>
                </div>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="bg-[#12141a] border border-[#232733] rounded-2xl p-4 sm:p-5 space-y-4">
              <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-[#64748b] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search by template name, business type, client profile or ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#171b24] border border-[#222938] focus:border-blue-500 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-[#64748b] outline-none transition-colors"
                  />
                </div>

                {/* View Switcher */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-[#171b24] border border-[#222938] rounded-xl p-1 text-xs">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-1.5 rounded-lg cursor-pointer ${
                        viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-[#64748b] hover:text-white'
                      }`}
                      title="Grid View"
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-1.5 rounded-lg cursor-pointer ${
                        viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-[#64748b] hover:text-white'
                      }`}
                      title="List View"
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Pill Filters */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#1c2230] text-xs">
                {/* Category Dropdown Filter */}
                <select
                  value={selectedCategoryFilter}
                  onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                  className="bg-[#171b24] border border-[#222938] text-white text-xs rounded-xl px-3 py-1.5 outline-none"
                >
                  <option value="all">All Categories (A–L)</option>
                  {BUSINESS_CATEGORIES.map((cat) => (
                    <option key={cat.code} value={cat.code}>
                      Category {cat.letter}: {cat.title}
                    </option>
                  ))}
                </select>

                {/* Status Filter */}
                <select
                  value={selectedStatusFilter}
                  onChange={(e) => setSelectedStatusFilter(e.target.value)}
                  className="bg-[#171b24] border border-[#222938] text-white text-xs rounded-xl px-3 py-1.5 outline-none"
                >
                  <option value="all">All Statuses</option>
                  <option value="completed">Completed & Live Demo</option>
                  <option value="planned">Planned (Awaiting Reference)</option>
                </select>

                {/* Batch Filter */}
                <select
                  value={selectedBatchFilter}
                  onChange={(e) => setSelectedBatchFilter(e.target.value)}
                  className="bg-[#171b24] border border-[#222938] text-white text-xs rounded-xl px-3 py-1.5 outline-none"
                >
                  <option value="all">All Batches (1–8)</option>
                  <option value="1">Batch 1 (Templates 1-3)</option>
                  <option value="2">Batch 2 (Templates 4-6)</option>
                  <option value="3">Batch 3 (Templates 7-9)</option>
                  <option value="4">Batch 4 (Templates 10-12)</option>
                  <option value="5">Batch 5 (Templates 13-15)</option>
                  <option value="6">Batch 6 (Templates 16-18)</option>
                  <option value="7">Batch 7 (Templates 19-24)</option>
                  <option value="8">Batch 8 (Templates 25-30)</option>
                </select>

                {(searchQuery || selectedCategoryFilter !== 'all' || selectedStatusFilter !== 'all' || selectedBatchFilter !== 'all') && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategoryFilter('all');
                      setSelectedStatusFilter('all');
                      setSelectedBatchFilter('all');
                    }}
                    className="text-xs text-blue-400 hover:underline px-2 py-1 cursor-pointer"
                  >
                    Reset Filters
                  </button>
                )}

                <span className="ml-auto text-[11px] text-[#64748b]">
                  Showing {filteredTemplates.length} of {templates.length} templates
                </span>
              </div>
            </div>

            {/* Template Grid or List View */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTemplates.map((tpl) => (
                  <TemplateCard
                    key={tpl.id}
                    template={tpl}
                    onPreview={handleLaunchPreview}
                    onInspect={handleInspect}
                    onIntake={handleOpenIntake}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-[#12141a] border border-[#232733] rounded-2xl overflow-hidden divide-y divide-[#1f2533]">
                {filteredTemplates.map((tpl) => (
                  <div
                    key={tpl.id}
                    className="p-4 hover:bg-[#161a22] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#1e2330] text-blue-400">
                          {tpl.id.toUpperCase()}
                        </span>
                        <span className="font-semibold text-white text-sm">{tpl.name}</span>
                        <span className="text-[#64748b]">·</span>
                        <span className="text-[#94a3b8]">
                          Cat {tpl.categoryLetter} ({tpl.categoryName.split('&')[0].trim()})
                        </span>
                      </div>
                      <p className="text-[#94a3b8] text-xs max-w-2xl">{tpl.tagline}</p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                          tpl.status === 'completed'
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : 'bg-amber-950 text-amber-300 border border-amber-800'
                        }`}
                      >
                        {tpl.status === 'completed' ? 'Live Demo' : `Planned (B${tpl.batch})`}
                      </span>

                      <button
                        onClick={() => handleInspect(tpl)}
                        className="px-3 py-1.5 bg-[#181d28] hover:bg-[#202736] text-[#cbd5e1] rounded-lg transition-colors cursor-pointer"
                      >
                        Specs
                      </button>

                      {tpl.status === 'completed' ? (
                        <button
                          onClick={() => handleLaunchPreview(tpl)}
                          className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors cursor-pointer"
                        >
                          Launch
                        </button>
                      ) : (
                        <button
                          onClick={() => handleOpenIntake(tpl)}
                          className="px-3 py-1.5 bg-amber-950/40 hover:bg-amber-900/40 text-amber-300 border border-amber-800/40 rounded-lg transition-colors cursor-pointer"
                        >
                          Queue Reference
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: LIVE INTERACTIVE PREVIEW FRAME */}
        {activeTab === 'preview' && (
          <div className="space-y-4">
            {/* Preview Toolbar */}
            <div className="bg-[#12141a] border border-[#232733] rounded-xl p-3 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <select
                  value={selectedTemplate.id}
                  onChange={(e) => {
                    const found = templates.find((t) => t.id === e.target.value);
                    if (found) setSelectedTemplate(found);
                  }}
                  className="bg-[#181d28] border border-[#262c3a] text-white text-xs rounded-lg px-3 py-1.5 outline-none font-medium"
                >
                  {templates.map((tpl) => (
                    <option key={tpl.id} value={tpl.id}>
                      {tpl.id.toUpperCase()} — {tpl.name} ({tpl.status === 'completed' ? 'Live' : 'Planned'})
                    </option>
                  ))}
                </select>

                <span className="text-xs text-[#94a3b8] hidden sm:inline">
                  Cat {selectedTemplate.categoryLetter}: {selectedTemplate.categoryName}
                </span>
              </div>

              {/* Viewport Width Controls */}
              <div className="flex items-center gap-1 bg-[#181d28] border border-[#262c3a] rounded-lg p-1 text-xs">
                <button
                  onClick={() => setPreviewDevice('desktop')}
                  className={`p-1.5 rounded flex items-center gap-1 transition-colors cursor-pointer ${
                    previewDevice === 'desktop' ? 'bg-blue-600 text-white' : 'text-[#94a3b8] hover:text-white'
                  }`}
                  title="Desktop (100% width)"
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Desktop</span>
                </button>
                <button
                  onClick={() => setPreviewDevice('tablet')}
                  className={`p-1.5 rounded flex items-center gap-1 transition-colors cursor-pointer ${
                    previewDevice === 'tablet' ? 'bg-blue-600 text-white' : 'text-[#94a3b8] hover:text-white'
                  }`}
                  title="Tablet (768px)"
                >
                  <Tablet className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Tablet</span>
                </button>
                <button
                  onClick={() => setPreviewDevice('mobile')}
                  className={`p-1.5 rounded flex items-center gap-1 transition-colors cursor-pointer ${
                    previewDevice === 'mobile' ? 'bg-blue-600 text-white' : 'text-[#94a3b8] hover:text-white'
                  }`}
                  title="Mobile (375px)"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Mobile</span>
                </button>
              </div>

              {/* Full-screen & Inspect */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleInspect(selectedTemplate)}
                  className="px-3 py-1.5 bg-[#181d28] hover:bg-[#202736] text-[#cbd5e1] text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Specs
                </button>
                <button
                  onClick={() => setIsFullScreenPreview(!isFullScreenPreview)}
                  className="p-1.5 bg-[#181d28] hover:bg-[#202736] text-[#cbd5e1] rounded-lg transition-colors cursor-pointer"
                  title={isFullScreenPreview ? 'Exit Full Screen' : 'Full Screen'}
                >
                  {isFullScreenPreview ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Simulated Device Frame Container */}
            <div
              className={`flex justify-center transition-all duration-300 ${
                isFullScreenPreview ? 'fixed inset-0 z-50 bg-black p-4' : 'w-full'
              }`}
            >
              <div
                className={`transition-all duration-300 overflow-hidden rounded-xl border border-[#2d374d] shadow-2xl bg-black ${
                  previewDevice === 'desktop'
                    ? 'w-full'
                    : previewDevice === 'tablet'
                    ? 'w-[768px] max-w-full'
                    : 'w-[375px] max-w-full'
                }`}
                style={{ maxHeight: isFullScreenPreview ? '100vh' : '82vh', overflowY: 'auto' }}
              >
                {/* Device browser bar simulation */}
                <div className="bg-[#181a20] border-b border-[#2a2e38] px-4 py-2 flex items-center justify-between text-xs text-[#8a98b0]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  </div>
                  <div className="bg-[#101217] px-4 py-0.5 rounded text-[11px] font-mono text-[#cbd5e1] max-w-xs truncate">
                    raoz-factory.local/{selectedTemplate.id}
                  </div>
                  <div className="text-[10px] uppercase font-mono text-[#64748b]">
                    {previewDevice.toUpperCase()}
                  </div>
                </div>

                {/* Actual lazy loaded template */}
                <TemplateLoader
                  template={selectedTemplate}
                  onOpenIntakeModal={() => handleOpenIntake(selectedTemplate)}
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CATEGORIES A–L */}
        {activeTab === 'categories' && (
          <CategoryExplorer
            templates={templates}
            onSelectCategory={(code) => {
              setSelectedCategoryFilter(code);
              setActiveTab('catalog');
            }}
            onPreviewTemplate={handleLaunchPreview}
            onInspectTemplate={handleInspect}
          />
        )}

        {/* TAB 4: REFERENCE INTAKE & QUEUE */}
        {activeTab === 'intake' && (
          <div className="space-y-6">
            <div className="bg-[#12141a] border border-[#232733] rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                    Reference Ingestion Intake & Queue
                  </h2>
                  <p className="text-xs text-[#94a3b8]">
                    Supply reference website URLs, PDFs, ZIP files, or screenshots. The factory will build high-quality responsive templates in batches of 3–5.
                  </p>
                </div>

                <button
                  onClick={() => {
                    const nextPlanned = templates.find((t) => t.status === 'planned') || templates[0];
                    handleOpenIntake(nextPlanned);
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg flex items-center gap-2 cursor-pointer shadow-md shadow-blue-600/30"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Submit New Reference</span>
                </button>
              </div>

              {/* Reference Workflow Protocol steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs mb-8">
                <div className="p-3 bg-[#161a22] border border-[#222938] rounded-xl">
                  <div className="font-semibold text-blue-400 mb-1">1. Inspect Reference</div>
                  <p className="text-[11px] text-[#94a3b8]">
                    Analyze page structure, visual hierarchy, typography, color palette, navigation & conversion hooks.
                  </p>
                </div>

                <div className="p-3 bg-[#161a22] border border-[#222938] rounded-xl">
                  <div className="font-semibold text-amber-400 mb-1">2. Build Isolated Template</div>
                  <p className="text-[11px] text-[#94a3b8]">
                    Develop dedicated component in <code>src/templates/template-XXX/</code> with local assets and sub-routes.
                  </p>
                </div>

                <div className="p-3 bg-[#161a22] border border-[#222938] rounded-xl">
                  <div className="font-semibold text-purple-400 mb-1">3. Responsive & Spec Audit</div>
                  <p className="text-[11px] text-[#94a3b8]">
                    Verify 1440px desktop, 768px tablet, 375px mobile, TypeScript compilation, and accessibility.
                  </p>
                </div>

                <div className="p-3 bg-[#161a22] border border-[#222938] rounded-xl">
                  <div className="font-semibold text-emerald-400 mb-1">4. Ready for Raoz Maker</div>
                  <p className="text-[11px] text-[#94a3b8]">
                    Register in central manifest with migration spec. Prepared for branch-based integration.
                  </p>
                </div>
              </div>

              {/* Live Intake Queue Table */}
              <div className="border border-[#232733] rounded-xl overflow-hidden">
                <div className="bg-[#171b24] px-4 py-2.5 text-[11px] uppercase tracking-wider text-[#64748b] font-semibold flex items-center justify-between">
                  <span>Logged Reference Jobs ({referenceQueue.length})</span>
                  <span>Batch Intake Status</span>
                </div>
                <div className="divide-y divide-[#1f2533]">
                  {referenceQueue.map((job) => {
                    const targetTemplate = templates.find((t) => t.id === job.templateId);
                    return (
                      <div key={job.id} className="p-4 hover:bg-[#161a22] transition-colors space-y-2 text-xs">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800">
                              {job.templateId.toUpperCase()}
                            </span>
                            <span className="font-semibold text-white">
                              {targetTemplate ? targetTemplate.name : 'Reserved Slot'}
                            </span>
                            <span className="text-[#64748b]">·</span>
                            <span className="text-[#94a3b8] uppercase font-mono text-[10px]">
                              Format: {job.refType}
                            </span>
                          </div>
                          <span className="text-[11px] text-[#64748b]">Logged: {job.submittedAt}</span>
                        </div>

                        <div className="text-white font-medium pl-1">
                          Source: {job.urlOrTitle}
                        </div>

                        {job.clientNeeds && (
                          <div className="text-[11px] text-[#cbd5e1] pl-1">
                            <span className="text-[#64748b]">Priorities: </span>
                            {job.clientNeeds}
                          </div>
                        )}

                        {job.notes && (
                          <div className="text-[11px] text-[#94a3b8] italic pl-1">
                            "{job.notes}"
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: INTEGRATION BRIDGE */}
        {activeTab === 'integration' && (
          <IntegrationBridge templates={templates} />
        )}

        {/* TAB 6: ARCHITECTURE RULES & PROTOCOL */}
        {activeTab === 'rules' && (
          <div className="space-y-6">
            <div className="bg-[#12141a] border border-[#232733] rounded-2xl p-6 sm:p-8 space-y-6 text-xs text-[#cbd5e1]">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-blue-400 font-semibold">
                  Governing Directives
                </span>
                <h2 className="text-2xl font-bold text-white font-serif mt-1">
                  Raoz Demo Factory — 10 Master Architecture Rules
                </h2>
                <p className="text-xs text-[#94a3b8] mt-1">
                  Enforcing strict separation, batch cadence, and seamless integration with Raoz Website Maker (82+ existing templates).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    num: '1',
                    title: 'Completely Independent Project',
                    desc: 'Zero import, edit, overwrite or dependency on the existing Raoz Website Maker live codebase. All files stay isolated in this repository.'
                  },
                  {
                    num: '2',
                    title: 'No Auto-Deploy',
                    desc: 'Never deploy automatically to live hosting. All integration work is staged on separate development branches upon manual authorization.'
                  },
                  {
                    num: '3',
                    title: '12 Popular Business Categories',
                    desc: 'Balanced 30-template distribution across Food (3), Real Estate (3), Health (3), Education (3), Legal/Professional (3), Retail (3), Auto (2), Weddings (2), Home Services (2), Beauty (2), Travel (2), Industrial (2).'
                  },
                  {
                    num: '4',
                    title: 'Batch Development Workflow',
                    desc: 'Build and verify templates in structured batches of 3–5. Complete TypeScript, build, responsive, and routing audits before starting the next batch.'
                  },
                  {
                    num: '5',
                    title: 'Isolated File System Architecture',
                    desc: 'Each template maintains its own folder in src/templates/template-XXX/, local assets, isolated sub-routing, and zero global CSS overrides.'
                  },
                  {
                    num: '6',
                    title: 'Lazy-Loaded Central Manifest',
                    desc: 'Templates are loaded asynchronously via React.lazy so bundle sizes stay featherlight and templates never pollute host bundle startup.'
                  },
                  {
                    num: '7',
                    title: 'Domain-Native Anti-AI Slop Aesthetic',
                    desc: 'No generic purple pills or fake testimonials. High-taste typography, realistic commercial copy, and domain-authentic conversion flows.'
                  },
                  {
                    num: '8',
                    title: 'High-Converting Action Hooks',
                    desc: 'Prioritize click-to-call, WhatsApp inquiries, RFQ forms, appointment bookings, and table reservations tailored to real paying clients.'
                  },
                  {
                    num: '9',
                    title: 'Accurate Professional & Legal Claims',
                    desc: 'Zero fabricated medical qualifications, clinical guarantees, legal outcomes, or false payment gateway claims.'
                  },
                  {
                    num: '10',
                    title: 'Migration Bridge Ready',
                    desc: 'Self-generating markdown integration specifications and JSON manifest exports make future transfer into Raoz Website Maker effortless.'
                  }
                ].map((rule) => (
                  <div key={rule.num} className="p-4 bg-[#161a22] border border-[#222938] rounded-xl space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-blue-950 border border-blue-700 text-blue-400 font-mono text-[10px] font-bold flex items-center justify-center">
                        {rule.num}
                      </span>
                      <h3 className="font-semibold text-white">{rule.title}</h3>
                    </div>
                    <p className="text-[11px] text-[#94a3b8] leading-relaxed pl-7">{rule.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1f2536] bg-[#0c0e15] py-8 text-xs text-[#64748b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">Raoz Demo Factory</span>
            <span>·</span>
            <span>Independent Template Studio for Raoz Website Maker</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>30 Planned Slots</span>
            <span>12 Business Categories</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Isolated Environment
            </span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <TemplateDetailModal
        template={detailModalTemplate}
        onClose={() => setDetailModalTemplate(null)}
        onPreview={handleLaunchPreview}
      />

      <ReferenceIntakeModal
        template={intakeModalTemplate}
        isOpen={isIntakeModalOpen}
        onClose={() => {
          setIsIntakeModalOpen(false);
          setIntakeModalTemplate(null);
        }}
        onSubmitReference={handleReferenceSubmit}
      />
    </div>
  );
}
