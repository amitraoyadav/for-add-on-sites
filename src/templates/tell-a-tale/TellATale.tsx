/**
 * TELL-A-TALE STUDIOS — Faithful Website Recreation
 * Raoz Demo Factory — Template #7
 * Category: Photography, Studio & Cinematography (cat-photography)
 * Reference: https://tell-a-tale.in/
 */

import React, { useState } from 'react';
import {
  tellATaleConfig,
  PortfolioGalleryItem,
  ServiceArea,
  FilmItem,
  BlogPostItem
} from './tell-a-tale.config';
import {
  Camera,
  Film,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Maximize2,
  X,
  Play,
  Check,
  Menu,
  MessageCircle,
  Clock,
  ArrowRight,
  ShieldCheck,
  Users,
  Award,
  Sparkles,
  ExternalLink,
  Calendar,
  Share2
} from 'lucide-react';

export default function TellATale() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<'home' | 'corporate' | 'celebrations' | 'food-product' | 'films' | 'about' | 'blog' | 'contact'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Portfolio Filter State
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'corporate-events' | 'corporate-portraits' | 'celebrations' | 'food' | 'product' | 'weddings'>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<PortfolioGalleryItem | null>(null);

  // Modals
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [activeFilmModal, setActiveFilmModal] = useState<FilmItem | null>(null);
  const [activeBlogModal, setActiveBlogModal] = useState<BlogPostItem | null>(null);
  const [inquirySuccess, setInquirySuccess] = useState(false);

  // Inquiry form fields
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    shootType: 'Corporate Event',
    date: '',
    venue: '',
    message: ''
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setIsInquiryModalOpen(false);
      setInquiryForm({
        name: '',
        company: '',
        email: '',
        phone: '',
        shootType: 'Corporate Event',
        date: '',
        venue: '',
        message: ''
      });
    }, 2800);
  };

  const filteredGallery = tellATaleConfig.portfolioGallery.filter((item) => {
    if (galleryFilter === 'all') return true;
    return item.category === galleryFilter;
  });

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#141518] font-sans selection:bg-[#C59B27] selection:text-white relative">
      {/* Top Banner Notice */}
      <div className="bg-[#121316] text-[#E5E7EB] text-xs py-2 px-4 border-b border-[#23262D]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium">
              Mumbai Corporate & Event Photography Studio · Marol, Andheri (East)
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-[#9CA3AF]">
            <a
              href={`tel:${tellATaleConfig.placeholders.phone}`}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#C59B27]" />
              <span>{tellATaleConfig.placeholders.phoneDisplay}</span>
            </a>
            <span className="hidden sm:inline text-neutral-600">|</span>
            <a
              href={`mailto:${tellATaleConfig.placeholders.email}`}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Mail className="w-3 h-3 text-[#C59B27]" />
              <span>{tellATaleConfig.placeholders.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 text-left cursor-pointer group"
          >
            <img
              src="/assets/tell-a-tale/logo.webp"
              alt="Tell-a-Tale Studios"
              className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4B5563]">
            <button
              onClick={() => setActiveTab('home')}
              className={`hover:text-[#141518] transition-colors cursor-pointer py-1 border-b-2 ${
                activeTab === 'home' ? 'border-[#141518] text-[#141518] font-semibold' : 'border-transparent'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('corporate')}
              className={`hover:text-[#141518] transition-colors cursor-pointer py-1 border-b-2 ${
                activeTab === 'corporate' ? 'border-[#141518] text-[#141518] font-semibold' : 'border-transparent'
              }`}
            >
              Corporate
            </button>
            <button
              onClick={() => setActiveTab('celebrations')}
              className={`hover:text-[#141518] transition-colors cursor-pointer py-1 border-b-2 ${
                activeTab === 'celebrations' ? 'border-[#141518] text-[#141518] font-semibold' : 'border-transparent'
              }`}
            >
              Celebrations
            </button>
            <button
              onClick={() => setActiveTab('food-product')}
              className={`hover:text-[#141518] transition-colors cursor-pointer py-1 border-b-2 ${
                activeTab === 'food-product' ? 'border-[#141518] text-[#141518] font-semibold' : 'border-transparent'
              }`}
            >
              Food & Product
            </button>
            <button
              onClick={() => setActiveTab('films')}
              className={`hover:text-[#141518] transition-colors cursor-pointer py-1 border-b-2 ${
                activeTab === 'films' ? 'border-[#141518] text-[#141518] font-semibold' : 'border-transparent'
              }`}
            >
              Films
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`hover:text-[#141518] transition-colors cursor-pointer py-1 border-b-2 ${
                activeTab === 'about' ? 'border-[#141518] text-[#141518] font-semibold' : 'border-transparent'
              }`}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab('blog')}
              className={`hover:text-[#141518] transition-colors cursor-pointer py-1 border-b-2 ${
                activeTab === 'blog' ? 'border-[#141518] text-[#141518] font-semibold' : 'border-transparent'
              }`}
            >
              Blog
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`hover:text-[#141518] transition-colors cursor-pointer py-1 border-b-2 ${
                activeTab === 'contact' ? 'border-[#141518] text-[#141518] font-semibold' : 'border-transparent'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={tellATaleConfig.placeholders.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
              title="Chat with Nikhil & Mamta on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              onClick={() => setIsInquiryModalOpen(true)}
              className="px-5 py-2.5 rounded-full bg-[#141518] hover:bg-[#2A2E35] text-white text-sm font-medium tracking-wide transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2"
            >
              <span>Let’s Talk</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-800 hover:text-black focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-neutral-200 px-6 py-5 space-y-3 shadow-lg">
            <div className="flex flex-col gap-2 font-medium text-neutral-700">
              <button
                onClick={() => {
                  setActiveTab('home');
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 px-3 rounded-lg ${activeTab === 'home' ? 'bg-neutral-100 font-semibold text-black' : ''}`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  setActiveTab('corporate');
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 px-3 rounded-lg ${activeTab === 'corporate' ? 'bg-neutral-100 font-semibold text-black' : ''}`}
              >
                Corporate (Events & Headshots)
              </button>
              <button
                onClick={() => {
                  setActiveTab('celebrations');
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 px-3 rounded-lg ${activeTab === 'celebrations' ? 'bg-neutral-100 font-semibold text-black' : ''}`}
              >
                Celebrations (Parties & Weddings)
              </button>
              <button
                onClick={() => {
                  setActiveTab('food-product');
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 px-3 rounded-lg ${activeTab === 'food-product' ? 'bg-neutral-100 font-semibold text-black' : ''}`}
              >
                Food & Product Photography
              </button>
              <button
                onClick={() => {
                  setActiveTab('films');
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 px-3 rounded-lg ${activeTab === 'films' ? 'bg-neutral-100 font-semibold text-black' : ''}`}
              >
                Films & Event Videography
              </button>
              <button
                onClick={() => {
                  setActiveTab('about');
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 px-3 rounded-lg ${activeTab === 'about' ? 'bg-neutral-100 font-semibold text-black' : ''}`}
              >
                About Tell-a-Tale Studios
              </button>
              <button
                onClick={() => {
                  setActiveTab('blog');
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 px-3 rounded-lg ${activeTab === 'blog' ? 'bg-neutral-100 font-semibold text-black' : ''}`}
              >
                Blog & Shoot Guides
              </button>
              <button
                onClick={() => {
                  setActiveTab('contact');
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 px-3 rounded-lg ${activeTab === 'contact' ? 'bg-neutral-100 font-semibold text-black' : ''}`}
              >
                Contact & Studio Directions
              </button>
            </div>
            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
              <a
                href={`tel:${tellATaleConfig.placeholders.phone}`}
                className="text-xs font-semibold text-neutral-800 flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Call {tellATaleConfig.placeholders.phoneDisplay}</span>
              </a>
              <button
                onClick={() => {
                  setIsInquiryModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2 bg-[#141518] text-white rounded-full text-xs font-medium"
              >
                Let’s Talk
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section (When on Home tab) */}
      {activeTab === 'home' && (
        <section className="relative bg-[#FAF9F5] border-b border-[#E5E7EB] pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-xs font-medium text-[#4B5563] shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#C59B27]"></span>
                  <span>Mumbai · Across India · Worldwide Travel Assignments</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141518] tracking-tight leading-[1.2] font-serif">
                  Corporate & Event Photographer in Mumbai for Conferences, Consulates & PR-Ready Coverage
                </h1>

                <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl font-normal">
                  Tell-a-Tale Studios creates clean, reliable and story-led photography and films for corporate events, leadership rooms, conferences, brand launches, portraits and private celebrations across Mumbai and India.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => setIsInquiryModalOpen(true)}
                    className="px-7 py-3.5 rounded-full bg-[#141518] hover:bg-[#2A2E35] text-white font-medium text-sm transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2.5"
                  >
                    <span>Check Date Availability</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={tellATaleConfig.placeholders.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-full bg-white hover:bg-neutral-50 text-emerald-700 border border-emerald-300 font-medium text-sm transition-colors flex items-center gap-2 shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Us Directly</span>
                  </a>
                </div>

                {/* Trusted Clients strip */}
                <div className="pt-6 border-t border-[#E5E7EB]/80">
                  <p className="text-xs uppercase tracking-wider text-[#6B7280] font-semibold mb-3">
                    Trusted by Teams & Institutions:
                  </p>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-[#374151]">
                    {tellATaleConfig.trustedClients.map((client, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5">
                        <span className="text-[#C59B27]">✦</span>
                        <span>{client.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual Showcase Card Column */}
              <div className="lg:col-span-5">
                <div className="relative group rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src="/assets/tell-a-tale/corporate-event-hero.jpg"
                    alt="Corporate Event Photography in Mumbai by Tell-a-Tale Studios"
                    className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-300 mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" /> High-Trust Room Coverage
                    </span>
                    <h3 className="text-lg font-bold font-serif leading-snug">
                      Asia Society India Leadership Conclave
                    </h3>
                    <p className="text-xs text-neutral-300 mt-1">
                      The Taj Mahal Palace, Mumbai · Discreet keynote and panel documentation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content Router */}

      {/* 1. HOME TAB */}
      {activeTab === 'home' && (
        <>
          {/* Quick Preview Grid */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#141518] mb-3">
                  A quick look at the rooms, people and stories we photograph.
                </h2>
                <p className="text-sm sm:text-base text-[#4B5563]">
                  A preview of our corporate events, conferences, portraits, private celebrations, food and product photography work across Mumbai.
                </p>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
                  {[
                    { id: 'all', label: 'All Portfolio' },
                    { id: 'corporate-events', label: 'Corporate Events' },
                    { id: 'corporate-portraits', label: 'Executive Portraits' },
                    { id: 'celebrations', label: 'Celebrations' },
                    { id: 'food', label: 'Food & Styling' },
                    { id: 'product', label: 'Products' },
                    { id: 'weddings', label: 'Wedding Stories' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setGalleryFilter(tab.id as any)}
                      className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        galleryFilter === tab.id
                          ? 'bg-[#141518] text-white shadow-sm'
                          : 'bg-[#F3F4F6] text-[#4B5563] hover:bg-[#E5E7EB]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredGallery.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveLightboxItem(item)}
                    className="group rounded-xl overflow-hidden border border-[#E5E7EB] bg-[#FAF9F5] hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div className="relative overflow-hidden aspect-[4/3] bg-neutral-200">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="p-3 bg-white/90 rounded-full text-neutral-900 shadow-lg">
                          <Maximize2 className="w-5 h-5" />
                        </span>
                      </div>
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 text-white text-[11px] font-medium backdrop-blur-xs">
                        {item.categoryLabel}
                      </span>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="text-xs text-[#6B7280] mb-1 font-mono flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#C59B27]" />
                          <span>{item.location}</span>
                        </div>
                        <h3 className="text-base font-bold text-[#141518] font-serif group-hover:text-[#C59B27] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#4B5563] mt-2 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs text-[#6B7280]">
                        <span className="font-medium text-[#141518]">{item.clientOrEvent}</span>
                        <span className="text-[#C59B27] flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                          <span>View Detail</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4 Core Pillars Section */}
          <section className="py-16 sm:py-20 bg-[#FAF9F5] border-y border-[#E5E7EB]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-12">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C59B27]">
                  Our Operating Philosophy
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#141518] mt-2 mb-4">
                  Professional enough for business. Human enough to feel real.
                </h2>
                <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                  Corporate photographs should not feel like stock images. Celebration photographs should not feel over-directed. Food and product photographs should make people look twice.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {tellATaleConfig.corePillars.map((pillar) => (
                  <div
                    key={pillar.number}
                    className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs hover:border-[#141518] transition-colors"
                  >
                    <span className="text-3xl font-serif font-bold text-[#C59B27] mb-4 block">
                      {pillar.number}
                    </span>
                    <h3 className="text-base font-bold text-[#141518] mb-2 font-serif">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Clean 4-Step Process */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="text-xs font-mono uppercase tracking-wider text-[#C59B27] font-semibold">
                  How We Work
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#141518] mt-1 mb-3">
                  A clean process before, during and after the shoot.
                </h2>
                <p className="text-sm text-[#4B5563]">
                  Zero guesswork, transparent communication, and rapid turnaround for both press selects and final high-res deliveries.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {tellATaleConfig.processSteps.map((step, idx) => (
                  <div key={step.step} className="relative space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#141518] text-white flex items-center justify-center font-mono font-bold text-sm shadow-md">
                      {step.step}
                    </div>
                    <h3 className="text-base font-bold font-serif text-[#141518]">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Founders Story Preview */}
          <section className="py-16 sm:py-20 bg-[#121316] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden border-2 border-neutral-700 shadow-2xl">
                    <img
                      src="/assets/tell-a-tale/founders-nikhil-mamta.jpg"
                      alt="Nikhil B. and Mamta Kalambe — Tell-a-Tale Studios Founders"
                      className="w-full h-[380px] object-cover"
                    />
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-5">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#C59B27] font-semibold">
                    The Team Behind the Lens
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif">
                    Hi there, We’re Nikhil & Mamta!
                  </h2>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    Tell-a-Tale Studios was founded in 2014 by Nikhil B. and Mamta Kalambe. We combine documentary event precision with intuitive styling and genuine human warmth.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                      <h4 className="font-bold text-sm text-white mb-1">Nikhil B.</h4>
                      <p className="text-xs text-neutral-400">
                        Documentary eye for conferences, executive rooms, and corporate PR. Composed and discreet.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                      <h4 className="font-bold text-sm text-white mb-1">Mamta Kalambe</h4>
                      <p className="text-xs text-neutral-400">
                        Visual stylist bringing warmth, culinary aesthetics, and soulful emotion to celebrations and food.
                      </p>
                    </div>
                  </div>

                  <div className="pt-3">
                    <button
                      onClick={() => setActiveTab('about')}
                      className="px-6 py-2.5 rounded-full bg-white text-[#121316] text-xs font-bold hover:bg-neutral-200 transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span>Read Our Full Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* 2. CORPORATE SERVICES TAB */}
      {activeTab === 'corporate' && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#C59B27] font-semibold">
                Corporate & Business Photography
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#141518] mt-2 mb-4">
                Corporate Events, Conferences & Executive Portraits in Mumbai
              </h2>
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                For organizations that value professional discretion, fast PR selects, and photography that elevates the brand without staging artificial corporate smiles.
              </p>
            </div>

            {/* Corporate Event Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-[#FAF9F5] p-8 sm:p-10 rounded-2xl border border-[#E5E7EB]">
              <div className="space-y-4">
                <span className="text-xs font-mono text-[#C59B27] uppercase tracking-wider">Service 01</span>
                <h3 className="text-2xl font-bold font-serif text-[#141518]">
                  Conferences, Summits & Leadership Forums
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  Keynotes, panel discussions, auditorium ballrooms, VIP networking rooms, and gala dinners. We understand how to navigate multi-track conventions calmly without obstructing attendees.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-semibold text-[#141518] uppercase tracking-wider">Key Deliverables:</div>
                  <ul className="text-xs text-[#4B5563] space-y-1.5">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Same-day embargoed PR selects for social media release</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Stage speakers, interactive audience reactions, sponsor branding</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Multi-camera crew with backup gear and high-speed editing</li>
                  </ul>
                </div>
                <button
                  onClick={() => {
                    setInquiryForm((prev) => ({ ...prev, shootType: 'Corporate Event' }));
                    setIsInquiryModalOpen(true);
                  }}
                  className="mt-4 px-5 py-2.5 rounded-full bg-[#141518] text-white text-xs font-medium hover:bg-[#2A2E35] transition-colors cursor-pointer"
                >
                  Request Conference Coverage Quote
                </button>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg border border-neutral-200">
                <img
                  src="/assets/tell-a-tale/corporate-event-panel.webp"
                  alt="Corporate Conference Panel Discussion"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            {/* Executive Headshots Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-[#FAF9F5] p-8 sm:p-10 rounded-2xl border border-[#E5E7EB]">
              <div className="rounded-xl overflow-hidden shadow-lg border border-neutral-200 order-2 lg:order-1">
                <img
                  src="/assets/tell-a-tale/corporate-headshot.webp"
                  alt="Executive Corporate Headshot in Mumbai"
                  className="w-full h-80 object-cover"
                />
              </div>

              <div className="space-y-4 order-1 lg:order-2">
                <span className="text-xs font-mono text-[#C59B27] uppercase tracking-wider">Service 02</span>
                <h3 className="text-2xl font-bold font-serif text-[#141518]">
                  Professional Corporate Portraits & Headshots
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  Portraits tailored for C-suite executives, board members, partners, founders, and speaking profiles. Shot in your office, on location, or in studio.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-semibold text-[#141518] uppercase tracking-wider">What We Provide:</div>
                  <ul className="text-xs text-[#4B5563] space-y-1.5">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Relaxed, natural expression coaching on shoot day</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> High-end natural skin retouching without plastic artificial smoothing</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> LinkedIn, annual report, and high-res print export sizes</li>
                  </ul>
                </div>
                <button
                  onClick={() => {
                    setInquiryForm((prev) => ({ ...prev, shootType: 'Corporate Headshots' }));
                    setIsInquiryModalOpen(true);
                  }}
                  className="mt-4 px-5 py-2.5 rounded-full bg-[#141518] text-white text-xs font-medium hover:bg-[#2A2E35] transition-colors cursor-pointer"
                >
                  Book Executive Headshots Session
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. CELEBRATIONS TAB */}
      {activeTab === 'celebrations' && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#C59B27] font-semibold">
                Private Celebrations & Milestone Stories
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#141518] mt-2 mb-4">
                Birthdays, Anniversaries, Babies & Wedding Stories
              </h2>
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                We believe that celebration photography shouldn’t feel like an endless photo line. We capture the laughter across the cocktail table, heartfelt speeches, and genuine joy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-[#E5E7EB] space-y-4">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-neutral-200">
                  <img
                    src="/assets/tell-a-tale/celebration-birthday.webp"
                    alt="Birthday Party Photography"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold font-serif text-[#141518]">
                  Parties & Milestone Birthdays
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  For 40th, 50th, and milestone birthdays, intimate dinner parties, and festive gatherings with friends and family.
                </p>
                <button
                  onClick={() => {
                    setInquiryForm((prev) => ({ ...prev, shootType: 'Birthday / Private Party' }));
                    setIsInquiryModalOpen(true);
                  }}
                  className="text-xs font-semibold text-[#141518] hover:text-[#C59B27] flex items-center gap-1 cursor-pointer"
                >
                  <span>Enquire Party Coverage</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-[#E5E7EB] space-y-4">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-neutral-200">
                  <img
                    src="/assets/tell-a-tale/baby-maternity.jpg"
                    alt="Baby and Maternity Photography"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold font-serif text-[#141518]">
                  Babies & Maternity Photography
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Bumps, babies and soulful memories. Capturing your first experience of being parents or toddlers growing up.
                </p>
                <button
                  onClick={() => {
                    setInquiryForm((prev) => ({ ...prev, shootType: 'Baby & Maternity' }));
                    setIsInquiryModalOpen(true);
                  }}
                  className="text-xs font-semibold text-[#141518] hover:text-[#C59B27] flex items-center gap-1 cursor-pointer"
                >
                  <span>Enquire Maternity Session</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-[#E5E7EB] space-y-4">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-neutral-200">
                  <img
                    src="/assets/tell-a-tale/wedding-praais.jpg"
                    alt="Handcrafted Wedding Stories"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold font-serif text-[#141518]">
                  Handcrafted Wedding Stories
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Relaxed, natural photography covering Mumbai, India and destination weddings when the creative brief aligns.
                </p>
                <button
                  onClick={() => {
                    setInquiryForm((prev) => ({ ...prev, shootType: 'Wedding Story' }));
                    setIsInquiryModalOpen(true);
                  }}
                  className="text-xs font-semibold text-[#141518] hover:text-[#C59B27] flex items-center gap-1 cursor-pointer"
                >
                  <span>Check Wedding Dates</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. FOOD & PRODUCT TAB */}
      {activeTab === 'food-product' && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#C59B27] font-semibold">
                Commercial & Culinary Photography
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#141518] mt-2 mb-4">
                Premium Food Photography, Styling & Product Imagery
              </h2>
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                Led by our photographer-stylist duo Nikhil & Mamta. We bring food aesthetic sensibility, steam styling, textured tableware, and clean product tabletop lighting.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-xl overflow-hidden border border-[#E5E7EB] bg-[#FAF9F5]">
                <img
                  src="/assets/tell-a-tale/food-biryani.webp"
                  alt="Awadhi Biryani Styling"
                  className="w-full h-64 object-cover"
                />
                <div className="p-5">
                  <h4 className="font-bold text-sm text-[#141518] font-serif">Awadhi Dum Biryani Table Spread</h4>
                  <p className="text-xs text-[#4B5563] mt-1">Styled with antique brassware, saffron garnishes and micro steam.</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-[#E5E7EB] bg-[#FAF9F5]">
                <img
                  src="/assets/tell-a-tale/food-butter-chicken.jpg"
                  alt="Traditional Butter Chicken"
                  className="w-full h-64 object-cover"
                />
                <div className="p-5">
                  <h4 className="font-bold text-sm text-[#141518] font-serif">Heritage Butter Chicken Dish</h4>
                  <p className="text-xs text-[#4B5563] mt-1">Rich velvet gravy reflections and rustic naan bread styling.</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-[#E5E7EB] bg-[#FAF9F5]">
                <img
                  src="/assets/tell-a-tale/product-cosmetics.jpg"
                  alt="Cosmetics Product Photography"
                  className="w-full h-64 object-cover"
                />
                <div className="p-5">
                  <h4 className="font-bold text-sm text-[#141518] font-serif">Clean Cosmetics & E-Commerce</h4>
                  <p className="text-xs text-[#4B5563] mt-1">Crisp product reflections and botanical ingredient still life.</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF9F5] border border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold font-serif text-[#141518]">Planning a Menu Refresh or Product Shoot?</h3>
                <p className="text-xs text-[#4B5563] mt-1">We can shoot on-location in your restaurant kitchen or in our Mumbai studio setup.</p>
              </div>
              <button
                onClick={() => {
                  setInquiryForm((prev) => ({ ...prev, shootType: 'Food & Product Photography' }));
                  setIsInquiryModalOpen(true);
                }}
                className="px-6 py-3 rounded-full bg-[#141518] text-white text-xs font-semibold hover:bg-[#2A2E35] transition-colors cursor-pointer shrink-0"
              >
                Inquire Food / Product Shoot
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 5. FILMS TAB */}
      {activeTab === 'films' && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#C59B27] font-semibold">
                Cinematography & Video Recaps
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#141518] mt-2 mb-4">
                Films and Event Videography in Mumbai
              </h2>
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                Short-form recap reels, executive soundbites, and multi-camera coverage for corporate conferences, brand events, and celebrations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tellATaleConfig.films.map((film) => (
                <div
                  key={film.id}
                  onClick={() => setActiveFilmModal(film)}
                  className="group rounded-2xl overflow-hidden border border-[#E5E7EB] bg-[#FAF9F5] hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-video bg-black overflow-hidden">
                    <img
                      src={film.thumbnail}
                      alt={film.title}
                      className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 text-neutral-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 ml-0.5 fill-neutral-900 text-neutral-900" />
                      </div>
                    </div>
                    <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/75 text-white font-mono text-[11px]">
                      {film.duration}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-mono text-[#C59B27] uppercase tracking-wider block mb-1">
                        {film.type}
                      </span>
                      <h3 className="text-base font-bold font-serif text-[#141518] group-hover:text-[#C59B27] transition-colors">
                        {film.title}
                      </h3>
                      <p className="text-xs text-[#4B5563] mt-2 line-clamp-2 leading-relaxed">
                        {film.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#E5E7EB] text-xs text-[#6B7280] font-medium flex items-center justify-between">
                      <span>{film.client}</span>
                      <span className="text-[#C59B27]">Watch Film →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. ABOUT US TAB */}
      {activeTab === 'about' && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border-4 border-[#FAF9F5] shadow-xl">
                  <img
                    src="/assets/tell-a-tale/founders-nikhil-mamta.jpg"
                    alt="Nikhil & Mamta — Tell-a-Tale Studios"
                    className="w-full h-[440px] object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#C59B27] font-semibold">
                  About Tell-a-Tale Studios
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#141518]">
                  {tellATaleConfig.foundersStory.heading}
                </h2>
                <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                  {tellATaleConfig.foundersStory.leadBio}
                </p>

                <div className="space-y-2.5 p-5 rounded-xl bg-[#FAF9F5] border border-[#E5E7EB] text-xs sm:text-sm text-[#374151] font-serif italic">
                  {tellATaleConfig.foundersStory.manifesto.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  {tellATaleConfig.foundersStory.roles.map((role) => (
                    <div key={role.name} className="p-4 rounded-xl border border-[#E5E7EB] bg-white">
                      <h4 className="font-bold text-sm text-[#141518]">{role.name}</h4>
                      <span className="text-[11px] text-[#C59B27] font-mono block mb-2">{role.title}</span>
                      <p className="text-xs text-[#4B5563] leading-relaxed">{role.focus}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7. BLOG TAB */}
      {activeTab === 'blog' && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#C59B27] font-semibold">
                Photography Journal & Guides
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#141518] mt-2 mb-4">
                Field Notes on Event Coverage, Lighting & Planning
              </h2>
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                Insights for corporate event planners, brand managers, and clients preparing for high-impact photography assignments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tellATaleConfig.blogPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setActiveBlogModal(post)}
                  className="rounded-2xl overflow-hidden border border-[#E5E7EB] bg-[#FAF9F5] hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div className="aspect-[16/10] bg-neutral-200 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#6B7280] mb-2">
                        <span>{post.category}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-base font-bold font-serif text-[#141518] group-hover:text-[#C59B27] transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-xs text-[#4B5563] mt-2 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs text-[#6B7280]">
                      <span>{post.date}</span>
                      <span className="text-[#C59B27] font-medium">Read Article →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. CONTACT TAB */}
      {activeTab === 'contact' && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#C59B27] font-semibold">
                  Get in Touch
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#141518]">
                  Tell us about your shoot, event or brand story.
                </h2>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  We respond promptly with shoot suggestions, availability, team allocation, and detailed deliverable estimates.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E7EB]">
                    <Phone className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-[#141518]">Direct Phone</div>
                      <a href={`tel:${tellATaleConfig.placeholders.phone}`} className="text-sm text-[#4B5563] hover:text-black">
                        {tellATaleConfig.placeholders.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E7EB]">
                    <Mail className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-[#141518]">Email Inquiries</div>
                      <a href={`mailto:${tellATaleConfig.placeholders.email}`} className="text-sm text-[#4B5563] hover:text-black">
                        {tellATaleConfig.placeholders.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E7EB]">
                    <MapPin className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-[#141518]">Studio Location</div>
                      <p className="text-xs text-[#4B5563]">
                        {tellATaleConfig.placeholders.studioLocation}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E7EB]">
                    <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-[#141518]">Instant WhatsApp Chat</div>
                      <a
                        href={tellATaleConfig.placeholders.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-emerald-700 font-medium hover:underline"
                      >
                        Click here to start a WhatsApp conversation with our studio →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="lg:col-span-7 bg-[#FAF9F5] p-8 sm:p-10 rounded-2xl border border-[#E5E7EB]">
                <h3 className="text-xl font-bold font-serif text-[#141518] mb-6">
                  Check Shoot Date Availability
                </h3>

                {inquirySuccess ? (
                  <div className="p-8 text-center bg-white rounded-xl border border-emerald-300 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold font-serif text-emerald-900">Inquiry Received</h4>
                    <p className="text-xs text-neutral-600 max-w-md mx-auto">
                      Thank you! Nikhil & Mamta have received your shoot inquiry. We will review our calendar and reply within 4 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-[#374151] mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={inquiryForm.name}
                          onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                          placeholder="e.g. Priya Sharma"
                          className="w-full px-3 py-2.5 bg-white border border-[#D1D5DB] rounded-lg focus:outline-none focus:border-[#141518]"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-[#374151] mb-1">Company / Organization</label>
                        <input
                          type="text"
                          value={inquiryForm.company}
                          onChange={(e) => setInquiryForm({ ...inquiryForm, company: e.target.value })}
                          placeholder="e.g. Global Tech Asia / Private"
                          className="w-full px-3 py-2.5 bg-white border border-[#D1D5DB] rounded-lg focus:outline-none focus:border-[#141518]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-[#374151] mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={inquiryForm.email}
                          onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-3 py-2.5 bg-white border border-[#D1D5DB] rounded-lg focus:outline-none focus:border-[#141518]"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-[#374151] mb-1">Phone / WhatsApp Number *</label>
                        <input
                          type="tel"
                          required
                          value={inquiryForm.phone}
                          onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3 py-2.5 bg-white border border-[#D1D5DB] rounded-lg focus:outline-none focus:border-[#141518]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-[#374151] mb-1">Shoot Category *</label>
                        <select
                          value={inquiryForm.shootType}
                          onChange={(e) => setInquiryForm({ ...inquiryForm, shootType: e.target.value })}
                          className="w-full px-3 py-2.5 bg-white border border-[#D1D5DB] rounded-lg focus:outline-none focus:border-[#141518]"
                        >
                          <option value="Corporate Event">Corporate Event / Conference</option>
                          <option value="Corporate Headshots">Corporate Portraits & Headshots</option>
                          <option value="Birthday / Private Party">Birthday / Milestone Celebration</option>
                          <option value="Baby & Maternity">Babies & Maternity</option>
                          <option value="Food & Product Photography">Food & Product Photography</option>
                          <option value="Wedding Story">Handcrafted Wedding Story</option>
                          <option value="Film / Event Videography">Films & Videography</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-semibold text-[#374151] mb-1">Tentative Event Date *</label>
                        <input
                          type="date"
                          required
                          value={inquiryForm.date}
                          onChange={(e) => setInquiryForm({ ...inquiryForm, date: e.target.value })}
                          className="w-full px-3 py-2.5 bg-white border border-[#D1D5DB] rounded-lg focus:outline-none focus:border-[#141518]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-[#374151] mb-1">Venue / City / Timing Details</label>
                      <input
                        type="text"
                        value={inquiryForm.venue}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, venue: e.target.value })}
                        placeholder="e.g. Jio World Convention Centre, BKC (9 AM – 6 PM)"
                        className="w-full px-3 py-2.5 bg-white border border-[#D1D5DB] rounded-lg focus:outline-none focus:border-[#141518]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-[#374151] mb-1">Tell Us More About Your Requirements</label>
                      <textarea
                        rows={3}
                        value={inquiryForm.message}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                        placeholder="Share details on guest count, key deliverables, PR turnaround, or any specific shots needed..."
                        className="w-full px-3 py-2.5 bg-white border border-[#D1D5DB] rounded-lg focus:outline-none focus:border-[#141518]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#141518] hover:bg-[#2A2E35] text-white font-medium text-xs tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      Send Shoot Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-[#121316] text-[#9CA3AF] text-xs pt-16 pb-12 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="space-y-4">
              <img
                src="/assets/tell-a-tale/logo.webp"
                alt="Tell-a-Tale Studios"
                className="h-10 w-auto brightness-200"
              />
              <p className="text-neutral-400 text-xs leading-relaxed">
                Clean, reliable and story-led photography and films for corporate events, leadership rooms, conferences, private celebrations, food and product shoots.
              </p>
              <div className="text-[11px] font-mono text-[#C59B27]">
                Founded in 2014 by Nikhil B. & Mamta Kalambe
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-mono">
                Services
              </h4>
              <ul className="space-y-2">
                <li><button onClick={() => setActiveTab('corporate')} className="hover:text-white transition-colors cursor-pointer">Corporate Events & Conferences</button></li>
                <li><button onClick={() => setActiveTab('corporate')} className="hover:text-white transition-colors cursor-pointer">Executive Portraits & Headshots</button></li>
                <li><button onClick={() => setActiveTab('celebrations')} className="hover:text-white transition-colors cursor-pointer">Milestone Birthdays & Celebrations</button></li>
                <li><button onClick={() => setActiveTab('celebrations')} className="hover:text-white transition-colors cursor-pointer">Babies & Maternity</button></li>
                <li><button onClick={() => setActiveTab('food-product')} className="hover:text-white transition-colors cursor-pointer">Premium Food Photography & Styling</button></li>
                <li><button onClick={() => setActiveTab('food-product')} className="hover:text-white transition-colors cursor-pointer">Product & E-Commerce Imagery</button></li>
                <li><button onClick={() => setActiveTab('films')} className="hover:text-white transition-colors cursor-pointer">Films & Event Videography</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-mono">
                Studio Details
              </h4>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C59B27] shrink-0 mt-0.5" />
                  <span>Marol, Andheri (East), Mumbai, Maharashtra 400059</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                  <a href={`tel:${tellATaleConfig.placeholders.phone}`} className="hover:text-white">
                    {tellATaleConfig.placeholders.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                  <a href={`mailto:${tellATaleConfig.placeholders.email}`} className="hover:text-white">
                    {tellATaleConfig.placeholders.email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                  <span>Mon – Sun: 09:00 – 17:00 IST</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-mono">
                Quick Actions
              </h4>
              <div className="space-y-3">
                <button
                  onClick={() => setIsInquiryModalOpen(true)}
                  className="w-full py-2.5 px-4 bg-white text-[#121316] font-semibold rounded-lg hover:bg-neutral-200 transition-colors text-xs cursor-pointer text-center block"
                >
                  Book Shoot Consultation
                </button>
                <a
                  href={tellATaleConfig.placeholders.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors text-xs flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp +91 9619891066</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
            <div>
              © 2014 – 2026 Tell-a-Tale Studios. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href={tellATaleConfig.originalUrl} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-300 flex items-center gap-1">
                <span>Original Website (tell-a-tale.in)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <a
          href={tellATaleConfig.placeholders.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl transition-all hover:scale-105 flex items-center gap-2 group cursor-pointer"
          title="Chat with Tell-a-Tale on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-xs font-semibold whitespace-nowrap pr-1">
            WhatsApp Us
          </span>
        </a>

        <a
          href={`tel:${tellATaleConfig.placeholders.phone}`}
          className="p-3.5 rounded-full bg-[#141518] hover:bg-[#2A2E35] text-white shadow-xl transition-all hover:scale-105 flex items-center gap-2 group cursor-pointer"
          title="Call Tell-a-Tale Studios"
        >
          <Phone className="w-5 h-5 text-[#C59B27]" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-xs font-semibold whitespace-nowrap pr-1">
            Call 9619 891 066
          </span>
        </a>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="p-4 bg-neutral-950 flex items-center justify-between text-white border-b border-neutral-800">
              <div>
                <span className="text-xs font-mono text-[#C59B27] uppercase tracking-wider">
                  {activeLightboxItem.categoryLabel}
                </span>
                <h3 className="text-base font-bold font-serif">{activeLightboxItem.title}</h3>
              </div>
              <button
                onClick={() => setActiveLightboxItem(null)}
                className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 bg-black overflow-hidden flex items-center justify-center max-h-[60vh]">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="p-5 bg-neutral-950 text-neutral-300 text-xs space-y-2 border-t border-neutral-800">
              <div className="flex items-center justify-between text-[11px] text-neutral-400">
                <span>Location: {activeLightboxItem.location}</span>
                <span>Client / Event: {activeLightboxItem.clientOrEvent}</span>
              </div>
              <p className="leading-relaxed">{activeLightboxItem.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {activeFilmModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800">
            <div className="p-4 bg-neutral-950 flex items-center justify-between text-white border-b border-neutral-800">
              <div>
                <span className="text-xs font-mono text-[#C59B27]">{activeFilmModal.type}</span>
                <h3 className="text-base font-bold font-serif">{activeFilmModal.title}</h3>
              </div>
              <button onClick={() => setActiveFilmModal(null)} className="p-2 text-neutral-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video bg-black flex flex-col items-center justify-center text-center p-8 relative">
              <img
                src={activeFilmModal.thumbnail}
                alt={activeFilmModal.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="relative z-10 space-y-3">
                <div className="w-16 h-16 rounded-full bg-white/90 text-neutral-900 flex items-center justify-center mx-auto shadow-2xl">
                  <Play className="w-7 h-7 ml-1 fill-neutral-900" />
                </div>
                <h4 className="text-white text-lg font-bold font-serif">{activeFilmModal.title}</h4>
                <p className="text-xs text-neutral-300 max-w-md mx-auto">{activeFilmModal.description}</p>
                <span className="inline-block px-3 py-1 bg-black/70 rounded-full text-xs text-amber-300 font-mono">
                  Duration: {activeFilmModal.duration} · High-Bitrate Cinema
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Article Reader Modal */}
      {activeBlogModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl">
            <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#C59B27] font-semibold uppercase">{activeBlogModal.category}</span>
                <h3 className="text-lg font-bold font-serif text-[#141518] mt-0.5">{activeBlogModal.title}</h3>
              </div>
              <button onClick={() => setActiveBlogModal(null)} className="p-2 text-neutral-500 hover:text-black">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-sm text-[#4B5563] leading-relaxed">
              <img
                src={activeBlogModal.image}
                alt={activeBlogModal.title}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 pb-3 border-b border-neutral-100">
                <span>{activeBlogModal.date}</span>
                <span>•</span>
                <span>{activeBlogModal.readTime}</span>
              </div>
              {activeBlogModal.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="p-4 border-t border-neutral-200 bg-[#FAF9F5] flex items-center justify-between">
              <span className="text-xs text-neutral-500">Tell-a-Tale Studios Journal</span>
              <button
                onClick={() => {
                  setActiveBlogModal(null);
                  setIsInquiryModalOpen(true);
                }}
                className="px-4 py-2 bg-[#141518] text-white rounded-full text-xs font-medium"
              >
                Plan a Shoot with Us
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Quick Inquiry Modal */}
      {isInquiryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-lg w-full bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-5">
              <div>
                <span className="text-xs font-mono text-[#C59B27] font-semibold uppercase">Let’s Talk</span>
                <h3 className="text-xl font-bold font-serif text-[#141518]">Tell us what you’re planning</h3>
              </div>
              <button
                onClick={() => setIsInquiryModalOpen(false)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-black hover:bg-neutral-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {inquirySuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold font-serif text-emerald-900">Inquiry Confirmed</h4>
                <p className="text-xs text-neutral-600">
                  Nikhil & Mamta have received your event brief. We will get back to you ASAP.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-[#374151] mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={inquiryForm.name}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                    placeholder="e.g. Vikram Singhania"
                    className="w-full px-3 py-2 bg-[#FAF9F5] border border-neutral-300 rounded-lg focus:outline-none focus:border-black"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-[#374151] mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                      placeholder="vikram@org.com"
                      className="w-full px-3 py-2 bg-[#FAF9F5] border border-neutral-300 rounded-lg focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-[#374151] mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={inquiryForm.phone}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                      placeholder="+91 96198 91066"
                      className="w-full px-3 py-2 bg-[#FAF9F5] border border-neutral-300 rounded-lg focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-[#374151] mb-1">Shoot Type</label>
                    <select
                      value={inquiryForm.shootType}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, shootType: e.target.value })}
                      className="w-full px-3 py-2 bg-[#FAF9F5] border border-neutral-300 rounded-lg focus:outline-none focus:border-black"
                    >
                      <option value="Corporate Event">Corporate Event / Conference</option>
                      <option value="Corporate Headshots">Executive Headshots</option>
                      <option value="Celebration">Birthday / Celebration</option>
                      <option value="Food & Product">Food & Product</option>
                      <option value="Wedding Story">Wedding Story</option>
                      <option value="Film">Event Video / Film</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold text-[#374151] mb-1">Event Date</label>
                    <input
                      type="date"
                      value={inquiryForm.date}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, date: e.target.value })}
                      className="w-full px-3 py-2 bg-[#FAF9F5] border border-neutral-300 rounded-lg focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-[#374151] mb-1">Brief Details & Location</label>
                  <textarea
                    rows={3}
                    value={inquiryForm.message}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                    placeholder="Tell us about the venue, timings, expected deliverables, or specific expectations..."
                    className="w-full px-3 py-2 bg-[#FAF9F5] border border-neutral-300 rounded-lg focus:outline-none focus:border-black"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#141518] hover:bg-[#2A2E35] text-white rounded-xl font-medium tracking-wide transition-colors cursor-pointer"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
