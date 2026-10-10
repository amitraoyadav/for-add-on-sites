import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  Camera,
  Calendar,
  Clock,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  MessageCircle,
  Menu,
  CheckCircle2,
  Share2,
  Heart,
  Instagram,
  Facebook,
  Award,
  Layers,
  Users,
  Eye,
  ShieldCheck,
  Star,
  MapPin,
  Gift,
  BookOpen
} from 'lucide-react';
import {
  THE_PORTRAIT_COMPANY_CONFIG,
  PhotographyCategory,
  PartnerBrand,
  StudioPackage,
  ClientReview
} from './the-portrait-company.config';

export const ThePortraitCompany: React.FC = () => {
  // Navigation & Sub-routing
  const [activeTab, setActiveTab] = useState<'home' | 'packages' | 'testimonials' | 'about' | 'teams' | 'blog' | 'gift' | 'contact'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portraitDropdownOpen, setPortraitDropdownOpen] = useState(false);

  // Hero Slider State
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Modals State
  const [selectedCategoryModal, setSelectedCategoryModal] = useState<PhotographyCategory | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; alt: string; title: string } | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedPackageForInquiry, setSelectedPackageForInquiry] = useState<StudioPackage | null>(null);

  // Booking / Inquiry Form State
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Family Portrait Photography',
    preferredDate: '',
    timeSlot: 'Morning (10:00 AM - 1:00 PM)',
    estimatedGuests: '1 - 2 People',
    notes: ''
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const { brand, assets, heroSlides, categories, partners, cherishContent, packages, testimonials } = THE_PORTRAIT_COMPANY_CONFIG;

  // Auto-advance hero slides every 5.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveTab('home');
    setMobileMenuOpen(false);
    setPortraitDropdownOpen(false);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  const handleOpenCategory = (cat: PhotographyCategory) => {
    setSelectedCategoryModal(cat);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setTimeout(() => {
        setInquirySubmitted(false);
        setInquiryModalOpen(false);
      }, 3500);
    }, 400);
  };

  const currentHero = heroSlides[currentSlideIndex];

  return (
    <div className="min-h-screen bg-[#080808] text-[#E0E0E0] font-sans selection:bg-[#D4AF37]/30 selection:text-white">
      {/* =========================================================================
          TOP ANNOUNCEMENT BAR (Queries or Enquiries)
      ========================================================================== */}
      <div className="bg-[#000000] border-b border-[#1A1A1A] text-xs text-[#A0A0A0] py-2 px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="font-serif italic text-white/90">Mumbai Studio Appointments Open</span>
            <span className="hidden md:inline text-[#555] font-light">|</span>
            <span className="hidden md:inline text-[#888]">Queries or Enquiries, drop us a line</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 font-medium">
            <a
              href={`tel:${brand.contact.phone}`}
              className="flex items-center gap-1.5 text-white/90 hover:text-[#D4AF37] transition-colors"
              title="Call The Portrait Company"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span className="font-mono tracking-tight">{brand.contact.displayPhone}</span>
            </a>
            <span className="text-[#333]">/</span>
            <a
              href={`mailto:${brand.contact.email}`}
              className="flex items-center gap-1.5 text-white/90 hover:text-[#D4AF37] transition-colors"
              title="Email The Portrait Company"
            >
              <Mail className="w-3 h-3 text-[#D4AF37]" />
              <span>{brand.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN HEADER & NAVIGATION
      ========================================================================== */}
      <header className="sticky top-0 z-40 bg-[#000000]/95 backdrop-blur-md border-b border-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 cursor-pointer text-left focus:outline-hidden"
          >
            <div className="relative h-12 w-auto flex items-center">
              <img
                src={assets.logo}
                alt="The Portrait Company Logo"
                className="h-10 sm:h-12 w-auto object-contain brightness-110"
                onError={(e) => {
                  // Fallback logo if image fails
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl tracking-widest uppercase text-white font-semibold">
                The Portrait Company
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-[#A0A0A0] -mt-0.5">
                Photography Studio · Mumbai
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 text-[11px] font-semibold tracking-[0.16em] uppercase">
            <button
              onClick={() => {
                setActiveTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-3 py-2 transition-colors cursor-pointer ${
                activeTab === 'home' ? 'text-[#D4AF37]' : 'text-[#CCC] hover:text-white'
              }`}
            >
              Home
            </button>

            {/* Portrait Photography Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPortraitDropdownOpen(true)}
              onMouseLeave={() => setPortraitDropdownOpen(false)}
            >
              <button
                onClick={() => setPortraitDropdownOpen(!portraitDropdownOpen)}
                className={`px-3 py-2 flex items-center gap-1 transition-colors cursor-pointer ${
                  portraitDropdownOpen ? 'text-[#D4AF37]' : 'text-[#CCC] hover:text-white'
                }`}
              >
                <span>Portrait Photography</span>
                <span className="text-[8px] transform rotate-90">›</span>
              </button>

              {/* Dropdown Menu */}
              {portraitDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-[#0E0E0E] border border-[#222] shadow-2xl py-2 rounded-b-md z-50 animate-fadeIn">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => scrollToSection(`section-${cat.id}`)}
                      className="w-full text-left px-4 py-2.5 text-xs text-[#BBB] hover:text-white hover:bg-[#1A1A1A] transition-colors flex items-center justify-between group cursor-pointer"
                    >
                      <span className="font-serif tracking-normal normal-case text-sm group-hover:text-[#D4AF37] transition-colors">
                        {cat.title}
                      </span>
                      <span className="text-[10px] text-[#555] group-hover:text-[#AAA]">→</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setActiveTab('packages')}
              className={`px-3 py-2 transition-colors cursor-pointer ${
                activeTab === 'packages' ? 'text-[#D4AF37]' : 'text-[#CCC] hover:text-white'
              }`}
            >
              Packages
            </button>

            <button
              onClick={() => setActiveTab('testimonials')}
              className={`px-3 py-2 transition-colors cursor-pointer ${
                activeTab === 'testimonials' ? 'text-[#D4AF37]' : 'text-[#CCC] hover:text-white'
              }`}
            >
              Testimonials
            </button>

            <button
              onClick={() => setActiveTab('gift')}
              className={`px-3 py-2 transition-colors cursor-pointer ${
                activeTab === 'gift' ? 'text-[#D4AF37]' : 'text-[#CCC] hover:text-white'
              }`}
            >
              Gift
            </button>

            <button
              onClick={() => setActiveTab('blog')}
              className={`px-3 py-2 transition-colors cursor-pointer ${
                activeTab === 'blog' ? 'text-[#D4AF37]' : 'text-[#CCC] hover:text-white'
              }`}
            >
              Blog
            </button>

            <button
              onClick={() => setActiveTab('about')}
              className={`px-3 py-2 transition-colors cursor-pointer ${
                activeTab === 'about' ? 'text-[#D4AF37]' : 'text-[#CCC] hover:text-white'
              }`}
            >
              About
            </button>

            <button
              onClick={() => setActiveTab('teams')}
              className={`px-3 py-2 transition-colors cursor-pointer ${
                activeTab === 'teams' ? 'text-[#D4AF37]' : 'text-[#CCC] hover:text-white'
              }`}
            >
              Teams
            </button>

            <button
              onClick={() => setActiveTab('contact')}
              className={`px-3 py-2 transition-colors cursor-pointer ${
                activeTab === 'contact' ? 'text-[#D4AF37]' : 'text-[#CCC] hover:text-white'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setInquiryModalOpen(true)}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#000] bg-[#D4AF37] hover:bg-[#E5C158] rounded-xs transition-all shadow-md shadow-[#D4AF37]/10 cursor-pointer"
            >
              Book Shoot
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white focus:outline-hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0A0A] border-b border-[#222] px-6 py-4 space-y-3">
            <button
              onClick={() => {
                setActiveTab('home');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="block w-full text-left py-1.5 text-xs font-semibold uppercase tracking-widest text-white hover:text-[#D4AF37]"
            >
              Home
            </button>

            <div className="py-1">
              <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-widest block mb-1">
                Portrait Photography:
              </span>
              <div className="pl-3 space-y-1.5 border-l border-[#222]">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => scrollToSection(`section-${cat.id}`)}
                    className="block w-full text-left text-xs text-[#BBB] hover:text-white"
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#1A1A1A]">
              <button
                onClick={() => {
                  setActiveTab('packages');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1 text-xs text-[#BBB] hover:text-[#D4AF37] uppercase tracking-wider"
              >
                Packages
              </button>
              <button
                onClick={() => {
                  setActiveTab('testimonials');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1 text-xs text-[#BBB] hover:text-[#D4AF37] uppercase tracking-wider"
              >
                Testimonials
              </button>
              <button
                onClick={() => {
                  setActiveTab('gift');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1 text-xs text-[#BBB] hover:text-[#D4AF37] uppercase tracking-wider"
              >
                Gift
              </button>
              <button
                onClick={() => {
                  setActiveTab('blog');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1 text-xs text-[#BBB] hover:text-[#D4AF37] uppercase tracking-wider"
              >
                Blog
              </button>
              <button
                onClick={() => {
                  setActiveTab('about');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1 text-xs text-[#BBB] hover:text-[#D4AF37] uppercase tracking-wider"
              >
                About
              </button>
              <button
                onClick={() => {
                  setActiveTab('teams');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1 text-xs text-[#BBB] hover:text-[#D4AF37] uppercase tracking-wider"
              >
                Teams
              </button>
              <button
                onClick={() => {
                  setActiveTab('contact');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1 text-xs text-[#BBB] hover:text-[#D4AF37] uppercase tracking-wider"
              >
                Contact
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setInquiryModalOpen(true);
              }}
              className="w-full mt-3 py-2 text-center text-xs font-semibold uppercase tracking-widest text-[#000] bg-[#D4AF37] rounded-xs"
            >
              Book Studio Shoot
            </button>
          </div>
        )}
      </header>

      {/* =========================================================================
          VIEW SWITCHER / MAIN CONTENT
      ========================================================================== */}
      {activeTab === 'home' && (
        <main>
          {/* ---------------------------------------------------------------------
              ROW 1: FULLWIDTH HERO BANNER SLIDER & CONTACT OVERLAY
          ---------------------------------------------------------------------- */}
          <section className="relative w-full h-[600px] sm:h-[720px] lg:h-[840px] overflow-hidden bg-black select-none">
            {/* Slide Imagery with crossfade */}
            {heroSlides.map((slide, index) => {
              const isActive = index === currentSlideIndex;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover object-center sm:object-top transform scale-100 transition-transform duration-10000 ease-out"
                    style={{ transform: isActive ? 'scale(1.05)' : 'scale(1.0)' }}
                  />
                  {/* Subtle dark gradient overlay for typography readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/50"></div>
                  <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/60"></div>
                </div>
              );
            })}

            {/* Slider Controls */}
            <button
              onClick={handlePrevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white/70 hover:text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white/70 hover:text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Indicators Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`h-1.5 transition-all rounded-full cursor-pointer ${
                    idx === currentSlideIndex
                      ? 'w-8 bg-[#D4AF37]'
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Floating Top In-Hero Banner: "We’d love to hear from you!" */}
            <div className="absolute top-8 left-4 right-4 sm:left-8 sm:right-8 lg:left-12 lg:right-12 z-20 pointer-events-auto">
              <div className="max-w-4xl mx-auto bg-black/85 backdrop-blur-md border border-white/15 p-5 sm:p-7 rounded-sm shadow-2xl text-center text-white">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#D4AF37] block mb-1">
                  The Portrait Company · Studio Concierge
                </span>
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-normal text-white mb-2 tracking-wide">
                  We’d love to hear from you!
                </h3>
                <h4 className="text-xs sm:text-sm text-[#CCCCCC] font-light max-w-2xl mx-auto mb-4 leading-relaxed">
                  Queries or Enquiries, drop us a line on{' '}
                  <a
                    href={`tel:${brand.contact.phone}`}
                    className="text-white font-medium hover:text-[#D4AF37] underline underline-offset-2 transition-colors inline-block"
                  >
                    {brand.contact.displayPhone}
                  </a>{' '}
                  Or{' '}
                  <a
                    href={`mailto:${brand.contact.email}`}
                    className="text-white font-medium hover:text-[#D4AF37] underline underline-offset-2 transition-colors inline-block"
                  >
                    {brand.contact.email}
                  </a>
                </h4>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => setInquiryModalOpen(true)}
                    className="px-6 py-2.5 text-xs font-semibold tracking-widest uppercase bg-[#D4AF37] hover:bg-[#E5C158] text-black rounded-xs transition-colors shadow-lg shadow-[#D4AF37]/20 cursor-pointer"
                  >
                    Click Here to Email
                  </button>
                  <a
                    href={`https://wa.me/${brand.contact.whatsapp}?text=Hi%20The%20Portrait%20Company%2C%20I%20would%20like%20to%20inquire%20about%20a%20portrait%20photography%20session.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-xs font-semibold tracking-widest uppercase bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-xs transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>
            </div>

            {/* In-Hero Slide Title & Subject Caption at bottom */}
            <div className="absolute bottom-16 left-6 sm:left-12 lg:left-16 z-20 max-w-xl text-left pointer-events-none">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37] px-2 py-0.5 bg-black/60 border border-white/10 rounded-xs mb-2 inline-block">
                {currentHero.subtitle}
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-white font-light tracking-wide drop-shadow-md">
                {currentHero.title}
              </h2>
              <p className="text-xs text-[#A0A0A0] mt-1 font-light italic">
                {currentHero.subject}
              </p>
            </div>
          </section>

          {/* ---------------------------------------------------------------------
              ROWS 2 THROUGH 10: 9 MAJOR PHOTOGRAPHY CATEGORIES
              Alternating layout, matching exact headings, text & original assets
          ---------------------------------------------------------------------- */}
          <div className="space-y-0">
            {categories.map((cat, index) => {
              const isEven = index % 2 === 1; // Alternating layout
              return (
                <section
                  key={cat.id}
                  id={`section-${cat.id}`}
                  className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-12 border-b border-[#1A1A1A] transition-colors ${
                    isEven ? 'bg-[#0A0A0A]' : 'bg-[#050505]'
                  }`}
                >
                  <div className="max-w-7xl mx-auto">
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                        cat.alignment === 'right' ? 'lg:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Text Column */}
                      <div
                        className={`lg:col-span-6 ${
                          cat.alignment === 'right' ? 'lg:order-2' : 'lg:order-1'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-[10px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase">
                            0{index + 1} · Specialty
                          </span>
                          <span className="h-px w-10 bg-[#D4AF37]/40"></span>
                        </div>

                        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white mb-5 tracking-wide leading-tight">
                          {cat.title}
                        </h2>

                        <p className="text-sm sm:text-base text-[#B0B0B0] font-light leading-relaxed mb-6 font-sans">
                          {cat.description}
                        </p>

                        {/* Session highlights */}
                        <div className="space-y-2 mb-8 bg-[#121212] p-4 rounded-xs border border-[#222]">
                          <span className="text-[10px] uppercase font-mono tracking-widest text-[#888] block mb-2">
                            Session Features & Craft:
                          </span>
                          {cat.sessionSpecs.map((spec, sIdx) => (
                            <div key={sIdx} className="flex items-start gap-2 text-xs text-[#CCC]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0"></span>
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-3">
                          <button
                            onClick={() => handleOpenCategory(cat)}
                            className="px-6 py-2.5 text-xs font-semibold tracking-widest uppercase text-white bg-transparent hover:bg-white hover:text-black border border-white/60 rounded-xs transition-all flex items-center gap-2 cursor-pointer group"
                          >
                            <span>View Portfolio</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </button>

                          <button
                            onClick={() => {
                              setInquiryForm((prev) => ({
                                ...prev,
                                category: cat.title
                              }));
                              setInquiryModalOpen(true);
                            }}
                            className="px-5 py-2.5 text-xs font-semibold tracking-widest uppercase text-[#D4AF37] hover:text-white bg-[#1A1A1A] hover:bg-[#252525] border border-[#333] rounded-xs transition-colors cursor-pointer"
                          >
                            Book Session
                          </button>
                        </div>
                      </div>

                      {/* Image Column */}
                      <div
                        className={`lg:col-span-6 ${
                          cat.alignment === 'right' ? 'lg:order-1' : 'lg:order-2'
                        }`}
                      >
                        <div
                          onClick={() =>
                            setLightboxImage({
                              url: cat.image,
                              alt: cat.alt,
                              title: cat.title
                            })
                          }
                          className="relative rounded-xs overflow-hidden group cursor-pointer bg-[#151515] border border-[#222] shadow-2xl"
                        >
                          <img
                            src={cat.image}
                            alt={cat.alt}
                            className="w-full h-[400px] sm:h-[480px] lg:h-[540px] object-cover object-center transition-transform duration-700 group-hover:scale-103"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                            <div className="flex items-center justify-between w-full">
                              <span className="text-xs uppercase tracking-widest font-mono text-white">
                                Click to View High-Res Lightbox
                              </span>
                              <Eye className="w-4 h-4 text-[#D4AF37]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          {/* ---------------------------------------------------------------------
              ROW 11: CHERISH YOUR PRECIOUS MOMENTS & OUR PARTNERS
          ---------------------------------------------------------------------- */}
          <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#000000] border-b border-[#1A1A1A]">
            <div className="max-w-5xl mx-auto text-center">
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D4AF37] block mb-2">
                Legacy & Fine Art Portraiture
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-6 tracking-wide">
                {cherishContent.heading}
              </h2>

              <p className="text-base sm:text-lg text-[#C0C0C0] font-light leading-relaxed mb-8 max-w-4xl mx-auto font-sans">
                {cherishContent.body}
              </p>

              {/* Celebrities Badge Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
                <span className="text-xs text-[#888] uppercase tracking-wider mr-2 font-mono">
                  Photographed Celebrities:
                </span>
                {cherishContent.celebrities.map((celeb, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-xs text-[#E5E5E5] font-serif"
                  >
                    ★ {celeb}
                  </span>
                ))}
              </div>

              {/* Contact Us Action Button */}
              <div className="mb-20">
                <button
                  onClick={() => setInquiryModalOpen(true)}
                  className="px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase bg-[#D4AF37] hover:bg-[#E5C158] text-black rounded-xs transition-all shadow-xl shadow-[#D4AF37]/20 cursor-pointer inline-flex items-center gap-2"
                >
                  <span>CONTACT US</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* PARTNERS SUB-SECTION */}
              <div className="pt-12 border-t border-[#1A1A1A]">
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-8 tracking-wider">
                  Our Partners
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center justify-items-center max-w-3xl mx-auto">
                  {partners.map((partner, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-6 bg-[#0B0B0B] border border-[#1F1F1F] hover:border-[#D4AF37]/40 rounded-xs transition-all flex flex-col items-center text-center w-full group"
                    >
                      <div className="h-16 flex items-center justify-center mb-3">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-h-12 w-auto object-contain brightness-90 group-hover:brightness-110 transition-all"
                        />
                      </div>
                      <span className="text-xs uppercase font-serif tracking-wider text-white font-semibold mb-1">
                        {partner.name}
                      </span>
                      <p className="text-[11px] text-[#888] font-light leading-tight">
                        {partner.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* =========================================================================
          PACKAGES VIEW
      ========================================================================== */}
      {activeTab === 'packages' && (
        <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#050505]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D4AF37] block mb-2">
                Transparent Studio Rates
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal mb-4">
                Studio Portrait Packages
              </h2>
              <p className="text-sm text-[#A0A0A0] leading-relaxed">
                Handcrafted session tiers tailored for individuals, couples, families, and luxury generational portraits in our Mumbai studio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`bg-[#0D0D0D] border p-8 rounded-xs flex flex-col justify-between transition-all relative ${
                    pkg.popular
                      ? 'border-[#D4AF37] shadow-xl shadow-[#D4AF37]/10'
                      : 'border-[#222] hover:border-[#333]'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-black text-[10px] uppercase font-mono font-bold tracking-widest px-3 py-0.5 rounded-full">
                      Most Popular Session
                    </div>
                  )}

                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] block mb-1">
                      {pkg.tag}
                    </span>
                    <h3 className="font-serif text-2xl text-white mb-2">{pkg.name}</h3>
                    <div className="text-2xl sm:text-3xl font-serif text-white mb-4">
                      {pkg.priceEstimate}
                    </div>

                    <div className="space-y-1.5 text-xs text-[#AAA] mb-6 pb-6 border-b border-[#222]">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Camera className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{pkg.outfits}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{pkg.editedPhotos}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-8">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#666] block mb-2">
                        Included In Package:
                      </span>
                      {pkg.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-[#C0C0C0]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedPackageForInquiry(pkg);
                      setInquiryForm((prev) => ({
                        ...prev,
                        notes: `Inquiring about ${pkg.name} (${pkg.priceEstimate})`
                      }));
                      setInquiryModalOpen(true);
                    }}
                    className={`w-full py-3 text-xs font-semibold tracking-widest uppercase rounded-xs transition-all cursor-pointer ${
                      pkg.popular
                        ? 'bg-[#D4AF37] hover:bg-[#E5C158] text-black'
                        : 'bg-transparent hover:bg-white text-white hover:text-black border border-white/40'
                    }`}
                  >
                    Select Package
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center text-xs text-[#888]">
              * Custom commercial campaigns, on-location destination shoots, and corporate office mobile studio setups are available upon request.
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          TESTIMONIALS VIEW
      ========================================================================== */}
      {activeTab === 'testimonials' && (
        <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#050505]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D4AF37] block mb-2">
                Client Experiences
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal mb-4">
                What Our Clients Say
              </h2>
              <p className="text-sm text-[#A0A0A0] leading-relaxed">
                Reflections and memories shared by families, executives, couples, and models who have stepped into our Mumbai studio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((test, tIdx) => (
                <div
                  key={tIdx}
                  className="bg-[#0C0C0C] border border-[#222] p-8 rounded-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 text-[#D4AF37] mb-4">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="font-serif text-base sm:text-lg text-[#E0E0E0] italic leading-relaxed mb-6 font-light">
                      “{test.quote}”
                    </blockquote>
                  </div>

                  <div className="pt-4 border-t border-[#1C1C1C] flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-white">{test.name}</div>
                      <div className="text-xs text-[#888] font-mono">{test.role}</div>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 bg-[#181818] border border-[#282828] text-[#D4AF37] rounded-xs">
                      {test.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          ABOUT & TEAMS VIEW
      ========================================================================== */}
      {(activeTab === 'about' || activeTab === 'teams') && (
        <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#050505]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D4AF37] block mb-2">
                Studio Heritage & Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal mb-4">
                {activeTab === 'about' ? 'About The Portrait Company' : 'Our Creative Team'}
              </h2>
              <p className="text-sm text-[#A0A0A0] leading-relaxed max-w-2xl mx-auto">
                Dedicated to reviving the old, classic, and forgotten forms of portrait photography with modern fine-art finesse.
              </p>
            </div>

            <div className="bg-[#0E0E0E] border border-[#222] p-8 sm:p-12 rounded-xs space-y-6 text-[#CCC] font-light leading-relaxed text-sm sm:text-base">
              <p>
                Founded in Mumbai, <strong className="text-white font-medium">The Portrait Company</strong> was built on a foundational reverence for classic portraiture. In an age dominated by fleeting phone snaps and hyper-compressed social uploads, we offer a dedicated sanctuary where individuals, couples, and multi-generational families slow down to create tangible, archival artwork.
              </p>
              <p>
                Our photo studio in Mumbai combines vintage chiaroscuro lighting techniques with cutting-edge digital medium-format sensors and fine-art pigment prints. We believe every human being possesses an innate visual dignity that surfaces when given thoughtful direction, respectful space, and masterful lighting.
              </p>
              <p>
                Over the years, our lenses have had the privilege of capturing leading Indian celebrities including Kareena Kapoor Khan, Gauhar Khan, Carol Gracias, Rashmi Desai, and Tushar Kapoor, as well as hundreds of private families and corporate visionaries who value timeless elegance.
              </p>

              <div className="pt-6 border-t border-[#222] grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                <div>
                  <span className="text-2xl sm:text-3xl font-serif text-[#D4AF37] block">2016</span>
                  <span className="text-[11px] text-[#777] uppercase font-mono tracking-wider">Studio Founded</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-serif text-[#D4AF37] block">9</span>
                  <span className="text-[11px] text-[#777] uppercase font-mono tracking-wider">Portrait Specialties</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-serif text-[#D4AF37] block">1000+</span>
                  <span className="text-[11px] text-[#777] uppercase font-mono tracking-wider">Portfolios Crafted</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-serif text-[#D4AF37] block">Mumbai</span>
                  <span className="text-[11px] text-[#777] uppercase font-mono tracking-wider">Flagship Studio</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          GIFT / VOUCHER VIEW
      ========================================================================== */}
      {activeTab === 'gift' && (
        <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#050505]">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-[#181818] border border-[#D4AF37]/40 flex items-center justify-center mx-auto mb-6 text-[#D4AF37]">
              <Gift className="w-8 h-8" />
            </div>
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D4AF37] block mb-2">
              Timeless Gifting
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-4">
              Gift A Portrait Session
            </h2>
            <p className="text-sm text-[#A0A0A0] leading-relaxed mb-8">
              A bespoke portrait session voucher is one of the most thoughtful gifts for milestone birthdays, anniversaries, expectant mothers, and loved ones. Delivered as an elegant physical presentation envelope or immediate digital voucher.
            </p>

            <div className="bg-[#0E0E0E] border border-[#222] p-8 rounded-xs text-left space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs text-[#CCC]">Valid for 12 months across all studio portrait categories</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs text-[#CCC]">Personalized calligraphed gift certificate envelope included</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs text-[#CCC]">Flexible date selection anytime by the recipient</span>
              </div>
            </div>

            <button
              onClick={() => {
                setInquiryForm((prev) => ({
                  ...prev,
                  notes: 'Inquiring about Gifting a Portrait Session voucher.'
                }));
                setInquiryModalOpen(true);
              }}
              className="px-8 py-3 text-xs font-semibold tracking-widest uppercase bg-[#D4AF37] text-black rounded-xs hover:bg-[#E5C158] cursor-pointer"
            >
              Inquire Gift Voucher
            </button>
          </div>
        </section>
      )}

      {/* =========================================================================
          BLOG / JOURNAL VIEW
      ========================================================================== */}
      {activeTab === 'blog' && (
        <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#050505]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D4AF37] block mb-2">
                Studio Journal & Insights
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-4">
                Photography Stories & Advice
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#0C0C0C] border border-[#222] p-6 rounded-xs flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#D4AF37] block mb-2">GUIDE · FAMILY</span>
                  <h3 className="font-serif text-lg text-white mb-2">What to Wear for a Multi-Generational Family Portrait</h3>
                  <p className="text-xs text-[#888] leading-relaxed mb-4">
                    Harmonizing textures, neutral earth tones, and timeless attire across grandparents, parents, and children without matching identical outfits.
                  </p>
                </div>
                <button
                  onClick={() => scrollToSection('section-family')}
                  className="text-xs text-[#D4AF37] hover:underline text-left cursor-pointer"
                >
                  Explore Family Sessions →
                </button>
              </div>

              <div className="bg-[#0C0C0C] border border-[#222] p-6 rounded-xs flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#D4AF37] block mb-2">INSIGHT · CORPORATE</span>
                  <h3 className="font-serif text-lg text-white mb-2">Why Modern Executives are Moving Away from Stiff Headshots</h3>
                  <p className="text-xs text-[#888] leading-relaxed mb-4">
                    The psychology of warmth, approachability, and authentic leadership presence in venture capital, legal, and tech boardrooms.
                  </p>
                </div>
                <button
                  onClick={() => scrollToSection('section-corporate')}
                  className="text-xs text-[#D4AF37] hover:underline text-left cursor-pointer"
                >
                  Explore Corporate Sessions →
                </button>
              </div>

              <div className="bg-[#0C0C0C] border border-[#222] p-6 rounded-xs flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#D4AF37] block mb-2">EDITORIAL · MATERNITY</span>
                  <h3 className="font-serif text-lg text-white mb-2">The Golden Window for Fine-Art Maternity Portraits</h3>
                  <p className="text-xs text-[#888] leading-relaxed mb-4">
                    Why weeks 28 to 34 offer the ideal balance of energy, maternal glow, and sculptural bump silhouette in studio light.
                  </p>
                </div>
                <button
                  onClick={() => scrollToSection('section-maternity')}
                  className="text-xs text-[#D4AF37] hover:underline text-left cursor-pointer"
                >
                  Explore Maternity Sessions →
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          CONTACT VIEW
      ========================================================================== */}
      {activeTab === 'contact' && (
        <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#050505]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D4AF37] block mb-2">
                Get In Touch
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal mb-4">
                Connect With The Studio
              </h2>
              <p className="text-sm text-[#A0A0A0]">
                We would love to welcome you to our Mumbai portrait sanctuary.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#0D0D0D] border border-[#222] p-6 rounded-xs space-y-4">
                <h3 className="font-serif text-lg text-white">Direct Communication</h3>
                <div className="space-y-3 text-xs text-[#CCC]">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <a href={`tel:${brand.contact.phone}`} className="hover:text-white">
                      {brand.contact.displayPhone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#D4AF37]" />
                    <a href={`mailto:${brand.contact.email}`} className="hover:text-white">
                      {brand.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                    <span>{brand.contact.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                    <span>{brand.studioHours}</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0D0D0D] border border-[#222] p-6 rounded-xs flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg text-white mb-2">Schedule A Visit</h3>
                  <p className="text-xs text-[#888] leading-relaxed mb-4">
                    Inquire availability, discuss customized packages, or schedule a coffee consultation at our studio before your shoot.
                  </p>
                </div>
                <button
                  onClick={() => setInquiryModalOpen(true)}
                  className="w-full py-2.5 text-xs font-semibold tracking-widest uppercase bg-[#D4AF37] text-black hover:bg-[#E5C158] rounded-xs cursor-pointer"
                >
                  Open Booking Form
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          ROW 12 & 13: FOOTER & CONNECT WITH US
      ========================================================================== */}
      <footer className="bg-[#030303] border-t border-[#181818] text-[#888888] py-14 px-4 sm:px-6 lg:px-12 text-xs">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1A1A1A]">
            {/* Col 1: Brand & Contact Info */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={assets.logo}
                  alt="The Portrait Company Logo"
                  className="h-10 w-auto object-contain brightness-100"
                />
                <span className="font-serif text-lg uppercase tracking-widest text-white">
                  The Portrait Company
                </span>
              </div>
              <p className="text-xs text-[#888] leading-relaxed max-w-sm font-light">
                Professional portrait photography studio in Mumbai dedicated to old and forgotten classics of portraiture across family, celebrity, corporate, couple, and fashion genres.
              </p>
              <div className="space-y-1 text-xs pt-1">
                <div>
                  <span className="text-[#666]">Email:</span>{' '}
                  <a
                    href={`mailto:${brand.contact.email}`}
                    className="text-white/90 hover:text-[#D4AF37] transition-colors"
                  >
                    {brand.contact.email}
                  </a>
                </div>
                <div>
                  <span className="text-[#666]">Phone:</span>{' '}
                  <a
                    href={`tel:${brand.contact.phone}`}
                    className="text-white/90 hover:text-[#D4AF37] transition-colors font-mono"
                  >
                    {brand.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Col 2: Studio Navigation Links */}
            <div className="md:col-span-3 space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] block">
                Navigation
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    onClick={() => {
                      setActiveTab('home');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('about')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    About The Studio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('packages')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Packages & Pricing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('testimonials')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Client Testimonials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('blog')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Journal & Articles
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('contact')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Social & Connect With Us */}
            <div className="md:col-span-4 space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] block">
                Connect With Us
              </span>
              <p className="text-xs text-[#888]">
                Follow our daily studio portraits, lighting experiments, and behind-the-scenes in Mumbai.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={brand.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#111] hover:bg-[#1E1E1E] border border-[#222] hover:border-[#D4AF37] flex items-center justify-center text-[#CCC] hover:text-[#D4AF37] transition-all cursor-pointer"
                  title="Visit Facebook Profile"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={brand.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#111] hover:bg-[#1E1E1E] border border-[#222] hover:border-[#D4AF37] flex items-center justify-center text-[#CCC] hover:text-[#D4AF37] transition-all cursor-pointer"
                  title="Visit Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={brand.socialLinks.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#111] hover:bg-[#1E1E1E] border border-[#222] hover:border-[#D4AF37] flex items-center justify-center text-[#CCC] hover:text-[#D4AF37] transition-all cursor-pointer"
                  title="Visit Pinterest Boards"
                >
                  <span className="font-bold text-xs">P</span>
                </a>
                <a
                  href={brand.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-[#111] hover:bg-[#1E1E1E] border border-[#222] hover:border-[#D4AF37] flex items-center gap-1.5 text-[11px] text-[#CCC] hover:text-[#D4AF37] transition-all cursor-pointer"
                  title="Visit Original Live Website"
                >
                  <span>theportraitcompany.in</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright & Disclaimer Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#666]">
            <div>
              © The Portrait Company, 2026. All Rights Reserved.
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[#444]">Raoz Demo Factory · Template #10</span>
              <span className="text-[#333]">|</span>
              <a
                href={brand.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <span>Original Website</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          FLOATING WHATSAPP BUTTON (Authentic Quick Chat)
      ========================================================================== */}
      <a
        href={`https://wa.me/${brand.contact.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20a%20portrait%20photography%20session%20at%20The%20Portrait%20Company.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2 group transition-all hover:scale-105 cursor-pointer border border-emerald-400/30"
        title="Quick Chat via WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline-block pr-1">
          WhatsApp Studio
        </span>
      </a>

      {/* =========================================================================
          CATEGORY PORTFOLIO MODAL (When clicking "View Portfolio")
      ========================================================================== */}
      {selectedCategoryModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0E0E0E] border border-[#222] max-w-4xl w-full rounded-xs shadow-2xl overflow-hidden my-8">
            <div className="p-6 border-b border-[#1E1E1E] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37] block">
                  The Portrait Company · Portfolio Showcase
                </span>
                <h3 className="font-serif text-2xl text-white font-normal mt-0.5">
                  {selectedCategoryModal.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCategoryModal(null)}
                className="p-2 text-[#888] hover:text-white rounded-full bg-[#1A1A1A] hover:bg-[#252525] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Category Lead Image */}
              <div className="rounded-xs overflow-hidden bg-black border border-[#222]">
                <img
                  src={selectedCategoryModal.image}
                  alt={selectedCategoryModal.alt}
                  className="w-full max-h-[500px] object-cover object-center"
                />
              </div>

              {/* Description */}
              <div>
                <h4 className="font-serif text-lg text-white mb-2">Category Overview</h4>
                <p className="text-sm text-[#BBB] font-light leading-relaxed">
                  {selectedCategoryModal.description}
                </p>
              </div>

              {/* Session craft details */}
              <div className="bg-[#141414] border border-[#222] p-5 rounded-xs space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] block font-semibold">
                  Studio Standards for this Specialty:
                </span>
                {selectedCategoryModal.sessionSpecs.map((spec, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#CCC]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#1E1E1E] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-xs text-[#888]">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Call: {brand.contact.displayPhone}</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      const catName = selectedCategoryModal.title;
                      setSelectedCategoryModal(null);
                      setInquiryForm((prev) => ({
                        ...prev,
                        category: catName
                      }));
                      setInquiryModalOpen(true);
                    }}
                    className="px-6 py-2.5 text-xs font-semibold tracking-widest uppercase bg-[#D4AF37] text-black hover:bg-[#E5C158] rounded-xs transition-colors cursor-pointer"
                  >
                    Book This Category
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          LIGHTBOX MODAL
      ========================================================================== */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl max-h-[90vh] flex flex-col items-center cursor-default"
          >
            <div className="w-full flex items-center justify-between text-xs text-white/80 pb-3">
              <span className="font-serif tracking-wider text-sm">{lightboxImage.title}</span>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img
              src={lightboxImage.url}
              alt={lightboxImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-xs border border-white/20 shadow-2xl"
            />
            <p className="text-xs text-[#888] pt-2 text-center italic max-w-2xl">
              {lightboxImage.alt}
            </p>
          </div>
        </div>
      )}

      {/* =========================================================================
          CONSULTATION & INQUIRY MODAL
      ========================================================================== */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0E0E0E] border border-[#222] max-w-2xl w-full rounded-xs shadow-2xl overflow-hidden my-8">
            <div className="p-6 border-b border-[#1E1E1E] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37] block">
                  The Portrait Company · Shoot Inquiry
                </span>
                <h3 className="font-serif text-2xl text-white font-normal mt-0.5">
                  Book Studio Session
                </h3>
              </div>
              <button
                onClick={() => setInquiryModalOpen(false)}
                className="p-2 text-[#888] hover:text-white rounded-full bg-[#1A1A1A] hover:bg-[#252525] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              {inquirySubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 bg-emerald-950/80 border border-emerald-500/50 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl text-white">Inquiry Received</h4>
                  <p className="text-xs text-[#AAA] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{inquiryForm.name}</strong>! Your session request for <strong className="text-[#D4AF37]">{inquiryForm.category}</strong> has been logged in this demo. For actual studio reservations, please contact <a href={`tel:${brand.contact.phone}`} className="text-white underline">{brand.contact.displayPhone}</a> or WhatsApp us directly.
                  </p>
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/${brand.contact.whatsapp}?text=Hi%2C%20I%20just%20submitted%20an%20inquiry%20for%20${encodeURIComponent(inquiryForm.category)}%20under%20the%20name%20${encodeURIComponent(inquiryForm.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 text-xs font-semibold tracking-widest uppercase bg-emerald-600 hover:bg-emerald-500 text-white rounded-xs inline-flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Confirm via WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#999] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                        placeholder="e.g. Ananya Deshmukh"
                        className="w-full bg-[#161616] border border-[#2A2A2A] rounded-xs px-3.5 py-2 text-xs text-white placeholder-[#555] focus:outline-hidden focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#999] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                        placeholder="+91 98200 00000"
                        className="w-full bg-[#161616] border border-[#2A2A2A] rounded-xs px-3.5 py-2 text-xs text-white placeholder-[#555] focus:outline-hidden focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#999] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full bg-[#161616] border border-[#2A2A2A] rounded-xs px-3.5 py-2 text-xs text-white placeholder-[#555] focus:outline-hidden focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#999] mb-1">
                        Portrait Category *
                      </label>
                      <select
                        value={inquiryForm.category}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, category: e.target.value })}
                        className="w-full bg-[#161616] border border-[#2A2A2A] rounded-xs px-3.5 py-2 text-xs text-white focus:outline-hidden focus:border-[#D4AF37]"
                      >
                        {categories.map((c) => (
                          <option key={c.id} value={c.title}>
                            {c.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#999] mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={inquiryForm.preferredDate}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, preferredDate: e.target.value })}
                        className="w-full bg-[#161616] border border-[#2A2A2A] rounded-xs px-3.5 py-2 text-xs text-white focus:outline-hidden focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#999] mb-1">
                        Preferred Time Window
                      </label>
                      <select
                        value={inquiryForm.timeSlot}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, timeSlot: e.target.value })}
                        className="w-full bg-[#161616] border border-[#2A2A2A] rounded-xs px-3.5 py-2 text-xs text-white focus:outline-hidden focus:border-[#D4AF37]"
                      >
                        <option>Morning (10:00 AM - 1:00 PM)</option>
                        <option>Afternoon (2:00 PM - 5:00 PM)</option>
                        <option>Evening (5:00 PM - 8:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#999] mb-1">
                      Session Notes & Special Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={inquiryForm.notes}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, notes: e.target.value })}
                      placeholder="Tell us about the number of people, preferred wardrobe styles, or special milestone celebrations..."
                      className="w-full bg-[#161616] border border-[#2A2A2A] rounded-xs px-3.5 py-2 text-xs text-white placeholder-[#555] focus:outline-hidden focus:border-[#D4AF37]"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[10px] text-[#666]">
                      Studio contact: <a href={`tel:${brand.contact.phone}`} className="underline text-[#888]">{brand.contact.displayPhone}</a>
                    </span>
                    <button
                      type="submit"
                      className="px-6 py-2.5 text-xs font-semibold tracking-widest uppercase bg-[#D4AF37] hover:bg-[#E5C158] text-black rounded-xs transition-colors cursor-pointer"
                    >
                      Submit Studio Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThePortraitCompany;
