import React, { useState, useEffect, useRef } from 'react';
import {
  NIKHIL_KAPUR_CONFIG,
  HeroSlide,
  InstagramPost,
  PortfolioWorkItem
} from './nikhil-kapur-photography.config';
import {
  Search,
  Instagram,
  Facebook,
  ShoppingBag,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Camera,
  Film,
  Book,
  Heart,
  Maximize2,
  ExternalLink,
  Send,
  Calendar,
  Sparkles,
  Info,
  Check,
  Award
} from 'lucide-react';

export default function NikhilKapurPhotography() {
  // Navigation & Dropdown states
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedFolder, setMobileExpandedFolder] = useState<string | null>(null);

  // Search state
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Cart modal state
  const [cartOpen, setCartOpen] = useState(false);

  // Hero carousel state
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isHeroAutoPlaying, setIsHeroAutoPlaying] = useState(true);
  const heroSlides = NIKHIL_KAPUR_CONFIG.heroSlides;

  // Portfolio filter & lightbox
  const [selectedPortfolioFilter, setSelectedPortfolioFilter] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [lightboxItems, setLightboxItems] = useState<Array<{ title: string; image: string; category?: string; description?: string }>>([]);

  // Active Story modal (from Instagram grid)
  const [selectedStory, setSelectedStory] = useState<InstagramPost | null>(null);

  // Active Destination modal (e.g. Architecture, Wedding, Films, Books, About, Contact)
  const [activeModalSection, setActiveModalSection] = useState<string | null>(null);

  // Contact form state
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Wedding Photography',
    date: '',
    location: '',
    message: ''
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Auto-play hero slider
  useEffect(() => {
    if (!isHeroAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isHeroAutoPlaying, heroSlides.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex !== null) {
        if (e.key === 'Escape') setActiveLightboxIndex(null);
        if (e.key === 'ArrowRight') {
          setActiveLightboxIndex((prev) => (prev !== null && prev < lightboxItems.length - 1 ? prev + 1 : 0));
        }
        if (e.key === 'ArrowLeft') {
          setActiveLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : lightboxItems.length - 1));
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, lightboxItems.length]);

  const nextHeroSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevHeroSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const openLightbox = (items: Array<{ title: string; image: string; category?: string; description?: string }>, index: number) => {
    setLightboxItems(items);
    setActiveLightboxIndex(index);
  };

  // Filtered portfolio items
  const filteredPortfolio = NIKHIL_KAPUR_CONFIG.portfolioItems.filter((item) => {
    if (selectedPortfolioFilter === 'all') return true;
    return item.category === selectedPortfolioFilter;
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setActiveModalSection(null);
      setInquiryData({
        name: '',
        email: '',
        phone: '',
        service: 'Wedding Photography',
        date: '',
        location: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#E11D48] selection:text-white">
      {/* ----------------- TOP HEADER BAR ----------------- */}
      <header className="border-b border-white/10 bg-[#080808]/90 backdrop-blur-md sticky top-0 z-40 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-11 text-xs text-white/70">
            {/* Search Trigger */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors py-1 cursor-pointer"
                title="Search photographer portfolios"
              >
                <Search className="w-3.5 h-3.5" />
                <span className="hidden sm:inline tracking-wider uppercase text-[11px]">Search</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href={NIKHIL_KAPUR_CONFIG.brand.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Nikhil Kapur on Facebook"
                title="Facebook: nikhilkapurphotography"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href={NIKHIL_KAPUR_CONFIG.brand.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Nikhil Kapur on Instagram"
                title="Instagram: @nikhilkapur"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={`tel:${NIKHIL_KAPUR_CONFIG.brand.phone}`}
                className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors text-[11px]"
              >
                <Phone className="w-3 h-3 text-white/60" />
                <span>{NIKHIL_KAPUR_CONFIG.brand.phoneFormatted}</span>
              </a>
            </div>

            {/* Cart / Store Link */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCartOpen(true)}
                className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                title="Print Store & Cart"
              >
                <span className="text-[11px] uppercase tracking-wider">Cart</span>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span className="font-mono text-[10px] bg-white/10 px-1.5 py-0.2 rounded-full">0</span>
              </button>
            </div>
          </div>
        </div>

        {/* ----------------- PRIMARY NAVIGATION & BRAND LOGO ----------------- */}
        <div className="border-t border-white/5 py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Brand Logo & Tagline */}
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#gallery" className="flex items-center gap-3 group">
                <img
                  src={NIKHIL_KAPUR_CONFIG.brand.logo}
                  alt={NIKHIL_KAPUR_CONFIG.brand.name}
                  className="h-9 w-auto object-contain brightness-105 group-hover:opacity-90 transition-opacity"
                  onError={(e) => {
                    // Fallback to text monogram if asset fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="flex flex-col">
                  <span className="font-serif text-lg tracking-wider text-white font-light group-hover:text-white/90 transition-colors">
                    NIKHIL KAPUR
                  </span>
                  <span className="text-[9px] tracking-[0.2em] text-white/50 uppercase font-sans">
                    PHOTOGRAPHY · MUMBAI
                  </span>
                </div>
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2 text-white/80 hover:text-white focus:outline-hidden cursor-pointer"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center flex-wrap gap-x-6 gap-y-2 text-xs font-medium tracking-wider uppercase text-white/70">
              {NIKHIL_KAPUR_CONFIG.navigation.map((item) => {
                if (item.isFolder) {
                  return (
                    <div
                      key={item.label}
                      className="relative group"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className="flex items-center gap-1 hover:text-white transition-colors py-2 cursor-pointer focus:outline-hidden"
                        onClick={() => {
                          if (item.label === 'Photography') setActiveModalSection('photography');
                          if (item.label === 'Films') setActiveModalSection('wedding-films');
                        }}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="w-3 h-3 text-white/50 group-hover:text-white transition-transform group-hover:rotate-180" />
                      </button>

                      {/* Dropdown Menu */}
                      {activeDropdown === item.label && (
                        <div className="absolute left-0 top-full pt-1 z-50 w-48 animate-in fade-in slide-in-from-top-1 duration-150">
                          <div className="bg-[#121214] border border-white/10 rounded-lg shadow-2xl py-2 px-1 backdrop-blur-md">
                            {item.children?.map((child) => (
                              <button
                                key={child.label}
                                onClick={() => {
                                  setActiveDropdown(null);
                                  setActiveModalSection(child.id);
                                }}
                                className="w-full text-left px-3 py-2 text-[11px] text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-colors block uppercase tracking-wider cursor-pointer"
                              >
                                {child.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={item.label}
                    onClick={() => setActiveModalSection(item.id || item.label.toLowerCase())}
                    className="hover:text-white transition-colors py-2 uppercase tracking-wider cursor-pointer focus:outline-hidden"
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* ----------------- MOBILE NAVIGATION OVERLAY ----------------- */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <img
                src={NIKHIL_KAPUR_CONFIG.brand.logo}
                alt={NIKHIL_KAPUR_CONFIG.brand.name}
                className="h-8 w-auto object-contain"
              />
              <span className="font-serif text-base tracking-widest text-white">NIKHIL KAPUR</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white/80 hover:text-white cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="py-6 space-y-4">
            {NIKHIL_KAPUR_CONFIG.navigation.map((item) => {
              if (item.isFolder) {
                const isExpanded = mobileExpandedFolder === item.label;
                return (
                  <div key={item.label} className="border-b border-white/5 pb-2">
                    <button
                      onClick={() => setMobileExpandedFolder(isExpanded ? null : item.label)}
                      className="w-full flex items-center justify-between text-left text-sm uppercase tracking-widest font-medium py-2 text-white"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-white/60 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="pl-4 pt-1 pb-2 space-y-2">
                        {item.children?.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setActiveModalSection(child.id);
                            }}
                            className="block text-left text-xs uppercase tracking-wider text-white/70 hover:text-white py-1"
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.label}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setActiveModalSection(item.id || item.label.toLowerCase());
                  }}
                  className="block w-full text-left text-sm uppercase tracking-widest font-medium text-white/80 hover:text-white py-2 border-b border-white/5"
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" />
              <a href={`tel:${NIKHIL_KAPUR_CONFIG.brand.phone}`} className="hover:text-white">
                {NIKHIL_KAPUR_CONFIG.brand.phoneFormatted}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              <a href={`mailto:${NIKHIL_KAPUR_CONFIG.brand.email}`} className="hover:text-white">
                {NIKHIL_KAPUR_CONFIG.brand.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>{NIKHIL_KAPUR_CONFIG.brand.location}</span>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- HERO GALLERY SECTION (Index-gallery) ----------------- */}
      <section
        id="gallery"
        className="relative w-full h-[65vh] sm:h-[75vh] lg:h-[88vh] bg-black overflow-hidden group/hero"
        onMouseEnter={() => setIsHeroAutoPlaying(false)}
        onMouseLeave={() => setIsHeroAutoPlaying(true)}
      >
        {/* Slides */}
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
                className="w-full h-full object-cover object-center transform transition-transform duration-10000 ease-out scale-100 group-hover/hero:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

              {/* Slide Caption Overlay */}
              <div className="absolute bottom-8 sm:bottom-12 left-4 sm:left-8 lg:left-12 right-4 sm:right-12 z-20">
                <div className="max-w-3xl space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-mono text-white/80 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded border border-white/10">
                      {slide.category}
                    </span>
                    <span className="text-[10px] sm:text-xs text-white/60 font-mono">
                      {index + 1} / {heroSlides.length}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-3xl lg:text-4xl font-serif tracking-tight text-white font-light text-balance drop-shadow-md">
                    {slide.title}
                  </h2>
                  {slide.description && (
                    <p className="hidden sm:block text-xs sm:text-sm text-white/80 font-light max-w-xl text-balance drop-shadow-xs">
                      {slide.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Carousel Navigation Arrows */}
        <button
          onClick={prevHeroSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/75 text-white/80 hover:text-white border border-white/10 backdrop-blur-xs transition-all cursor-pointer opacity-70 group-hover/hero:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextHeroSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/75 text-white/80 hover:text-white border border-white/10 backdrop-blur-xs transition-all cursor-pointer opacity-70 group-hover/hero:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Slide Indicators / Dots */}
        <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-12 z-30 flex items-center gap-1.5 sm:gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlideIndex(i)}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                i === currentSlideIndex ? 'w-6 sm:w-8 bg-white' : 'w-1.5 sm:w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Fullscreen view trigger */}
        <button
          onClick={() => openLightbox(heroSlides, currentSlideIndex)}
          className="absolute top-4 sm:top-6 right-4 sm:right-6 z-30 p-2 rounded bg-black/40 hover:bg-black/80 text-white/70 hover:text-white border border-white/10 backdrop-blur-xs transition-all cursor-pointer"
          title="View Fullscreen"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      </section>

      {/* ----------------- HOMEPAGE INTRODUCTION (home-2 / About Me) ----------------- */}
      <section id="about" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#09090b]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/50 font-mono block mb-2">
              BIOGRAPHY & ARTISTIC STATEMENT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-white">
              {NIKHIL_KAPUR_CONFIG.brand.introHeadline}
            </h2>
          </div>

          <div className="h-px w-16 bg-white/20 mx-auto my-4" />

          <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-white/90 leading-relaxed max-w-3xl mx-auto text-balance font-light">
            “{NIKHIL_KAPUR_CONFIG.brand.tagline}”
          </p>

          <p className="text-sm font-sans tracking-wider text-white/60 uppercase">
            {NIKHIL_KAPUR_CONFIG.brand.location}
          </p>

          <div className="pt-4 flex items-center justify-center gap-4">
            <button
              onClick={() => setActiveModalSection('about')}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-widest bg-white text-black hover:bg-white/90 rounded-none transition-all shadow-lg cursor-pointer"
            >
              Learn More
            </button>
            <a
              href="#portfolio"
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-white border border-white/20 hover:border-white/60 rounded-none transition-all cursor-pointer"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* ----------------- INSTAGRAM REAL WEDDINGS GALLERY GRID ----------------- */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/10 gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/50 block mb-1">
              CURATED CHRONICLES
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white font-light">
              Real Weddings & Candid Stories
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/60 font-mono">
            <Instagram className="w-3.5 h-3.5 text-white/70" />
            <a
              href={NIKHIL_KAPUR_CONFIG.brand.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              @nikhilkapur on Instagram
            </a>
          </div>
        </div>

        {/* 9-Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NIKHIL_KAPUR_CONFIG.instagramStories.map((post, idx) => (
            <div
              key={post.id}
              onClick={() => setSelectedStory(post)}
              className="group relative bg-[#121214] border border-white/10 rounded-lg overflow-hidden cursor-pointer hover:border-white/30 transition-all duration-300 flex flex-col"
            >
              <div className="aspect-4/3 w-full overflow-hidden bg-black/60 relative">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                  <span className="text-xs uppercase tracking-widest font-mono bg-black/70 px-3 py-1.5 rounded-full border border-white/20">
                    Read Story
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-white/50 font-mono mb-1">
                    <span>{post.couple}</span>
                    <span>{post.location}</span>
                  </div>
                  <p className="text-xs text-white/80 line-clamp-2 font-serif italic">
                    {post.caption}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1 pt-2 border-t border-white/5">
                  {post.hashtags.slice(0, 3).map((h, i) => (
                    <span key={i} className="text-[10px] text-white/40 font-mono">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------- MAIN EDITORIAL PHOTOGRAPHY GENRES (homepage content) ----------------- */}
      <section className="py-20 lg:py-24 bg-[#0a0a0c] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Genre 1: Best Photographer in Mumbai to Connect With */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-white/50 block">
                PHILOSOPHY & TENURE
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-white leading-tight">
                Best Photographer in Mumbai to Connect With
              </h3>
              <div className="h-px w-12 bg-white/20" />
              <div className="text-sm text-white/70 leading-relaxed space-y-4 font-light">
                <p>
                  A photographer will chant the story you might fail to put in words. It is the urge to capture,
                  create, and deliver that evolves the thriving artist inside every photographer. The beauty in
                  photography is unapologeticaly unconventional and therefore, every photograph is a round-trip
                  ticket to the moment otherwise gone!
                </p>
                <p>
                  To trust someone to capture that one moment in a lifetime is a dire and daring situation. Your future
                  joy and jar of memories that you will relive through that one photograph solely depends on that
                  trusted someone: your photographer. Nikhil Kapur photography, over the course of the past 10 years has
                  built a heart to heart connection with everything the lens has ever captured.
                </p>
              </div>
              <button
                onClick={() => setActiveModalSection('about')}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white hover:text-white/80 border-b border-white pb-1 transition-colors cursor-pointer"
              >
                <span>Read Full Story</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div
                    onClick={() => openLightbox(heroSlides, 0)}
                    className="overflow-hidden rounded-lg border border-white/10 cursor-pointer group"
                  >
                    <img
                      src="/assets/nikhil-kapur-photography/hero-udaipur-palace.jpg"
                      alt="Udaipur palace"
                      className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div
                    onClick={() => openLightbox(heroSlides, 7)}
                    className="overflow-hidden rounded-lg border border-white/10 cursor-pointer group"
                  >
                    <img
                      src="/assets/nikhil-kapur-photography/hero-wedding-celebration.jpg"
                      alt="Wedding joy"
                      className="w-full h-44 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div
                    onClick={() => openLightbox(heroSlides, 6)}
                    className="overflow-hidden rounded-lg border border-white/10 cursor-pointer group"
                  >
                    <img
                      src="/assets/nikhil-kapur-photography/hero-wedding-portrait-vertical.jpg"
                      alt="Bridal portrait"
                      className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-xs space-y-1">
                    <span className="font-mono text-white/50 block text-[10px]">RECOGNITION</span>
                    <span className="font-serif text-white font-medium text-sm block">10+ Years of Narrative Lens</span>
                    <span className="text-white/60 text-[11px] block">Preserving memories across India & International destinations.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Genre 2: Consumer Pleasure: Product Photography (Food & Jewelry) */}
          <div className="border-t border-white/10 pt-20">
            <div className="max-w-3xl mb-12">
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-white/50 block mb-1">
                COMMERCIAL & CREATIVE STORYTELLING
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-white mb-4">
                Consumer Pleasure: Product Photography
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-light">
                The photographer’s purpose is to present a product in the best viable photographic representation. In the
                digital world, Product photography is the first and foremost stage of consumer engagement. Our ultimate
                intention is to lay a ground for the viewer to connect with the product. With the varying techniques,
                every genre of photography has a definitive goal for a photographer to recognize and achieve.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Food Photography Subgenre */}
              <div className="bg-[#121215] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-mono tracking-wider text-amber-300">CULINARY ARTS</span>
                    <button
                      onClick={() => setActiveModalSection('food')}
                      className="text-xs text-white/60 hover:text-white underline cursor-pointer"
                    >
                      View Food Gallery
                    </button>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-serif text-white">Food Photography</h4>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                    Food is a universal experience and photography is the essence of altering life by holding it still.
                    Food and photography put together is a challenging yet artistic portrayal. We at Nikhil Kapur
                    Photography idealize capturing every minute detail on the plate to teleport the texture, smell, even
                    the taste through our photographs. We are hellbent on seducing your taste buds as well as your eyes -
                    Oh! What a wholesome treat!
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div
                    onClick={() =>
                      openLightbox(
                        [
                          { title: 'Fine Food Plating', image: '/assets/nikhil-kapur-photography/food-1.jpg' },
                          { title: 'Culinary Composition', image: '/assets/nikhil-kapur-photography/food-2.jpg' }
                        ],
                        0
                      )
                    }
                    className="overflow-hidden rounded-lg aspect-4/3 cursor-pointer group"
                  >
                    <img
                      src="/assets/nikhil-kapur-photography/food-1.jpg"
                      alt="Food photography by Nikhil Kapur"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div
                    onClick={() =>
                      openLightbox(
                        [
                          { title: 'Fine Food Plating', image: '/assets/nikhil-kapur-photography/food-1.jpg' },
                          { title: 'Culinary Composition', image: '/assets/nikhil-kapur-photography/food-2.jpg' }
                        ],
                        1
                      )
                    }
                    className="overflow-hidden rounded-lg aspect-4/3 cursor-pointer group"
                  >
                    <img
                      src="/assets/nikhil-kapur-photography/food-2.jpg"
                      alt="Food composition"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
              </div>

              {/* Jewelry Photography Subgenre */}
              <div className="bg-[#121215] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-mono tracking-wider text-emerald-300">PRECIOUS STONES</span>
                    <button
                      onClick={() => setActiveModalSection('jewelry')}
                      className="text-xs text-white/60 hover:text-white underline cursor-pointer"
                    >
                      View Jewelry Gallery
                    </button>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-serif text-white">Jewelry Photography</h4>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                    Jewelry photography is an exceptionally difficult process because of the jewelry’s highly-reflective
                    properties, the stones and pieces are commonly small in size and do not appear as vibrant in the
                    camera as they are in reality. Nikhil Kapur’s experience and expertise allows us to conquer all the
                    stumbling blocks and delivers a paragon shot with a prime visual presentation for the viewers!
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div
                    onClick={() =>
                      openLightbox(
                        [
                          { title: 'Emerald & Diamond Necklace', image: '/assets/nikhil-kapur-photography/jewelry-necklace-emerald.jpg' },
                          { title: 'Gold Heritage Jewelry', image: '/assets/nikhil-kapur-photography/jewelry-1.jpg' }
                        ],
                        0
                      )
                    }
                    className="overflow-hidden rounded-lg aspect-4/3 cursor-pointer group"
                  >
                    <img
                      src="/assets/nikhil-kapur-photography/jewelry-necklace-emerald.jpg"
                      alt="Emerald diamond jewelry"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div
                    onClick={() =>
                      openLightbox(
                        [
                          { title: 'Emerald & Diamond Necklace', image: '/assets/nikhil-kapur-photography/jewelry-necklace-emerald.jpg' },
                          { title: 'Gold Heritage Jewelry', image: '/assets/nikhil-kapur-photography/jewelry-1.jpg' }
                        ],
                        1
                      )
                    }
                    className="overflow-hidden rounded-lg aspect-4/3 cursor-pointer group"
                  >
                    <img
                      src="/assets/nikhil-kapur-photography/jewelry-1.jpg"
                      alt="Gold heritage jewelry"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Genre 3: The Big Day: Wedding Photography */}
          <div className="border-t border-white/10 pt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div
                onClick={() =>
                  openLightbox(
                    [
                      { title: 'Pashmeena & Amol Wedding', image: '/assets/nikhil-kapur-photography/hero-wedding-couple-1.jpg' },
                      { title: 'Candid Wedding Celebration', image: '/assets/nikhil-kapur-photography/hero-wedding-celebration.jpg' }
                    ],
                    0
                  )
                }
                className="overflow-hidden rounded-xl border border-white/10 aspect-16/10 cursor-pointer group"
              >
                <img
                  src="/assets/nikhil-kapur-photography/hero-wedding-couple-1.jpg"
                  alt="Wedding photography couple"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-white/50 block">
                DELICATE & GRACEFUL AFFAIRS
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-white leading-tight">
                The Big Day: Wedding Photography
              </h3>
              <div className="h-px w-12 bg-white/20" />
              <div className="text-sm text-white/70 leading-relaxed space-y-4 font-light">
                <p>
                  When you grow old with ‘The one’ and that one string from the many strings of love you weaved over the
                  years is your wedding string, The Big Day. This string is a series of beautiful feelings, inner
                  happiness, tears, realizations, and an overwhelming beginning of a journey, trapped in a photograph.
                  You can only travel back in time through them.
                </p>
                <p>
                  Nikhil Kapur takes pride in capturing such delicate and graceful affairs and his Wedding photography
                  strategy is inclined towards bringing out all the emotional manifestation in the atmosphere through
                  the camera lens. Being a candid photographer in Mumbai, India, he works from behind the curtain to
                  capture the most intimate and personal moments of the wedding, also giving total space and privacy to
                  the family to cherish the natural essence of The Big Day.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => setActiveModalSection('wedding')}
                  className="px-5 py-2 text-xs uppercase tracking-widest font-semibold bg-white text-black hover:bg-white/90 transition-all cursor-pointer"
                >
                  Explore Weddings
                </button>
                <button
                  onClick={() => setActiveModalSection('candidphotography')}
                  className="px-5 py-2 text-xs uppercase tracking-widest font-semibold text-white/80 hover:text-white border border-white/20 transition-all cursor-pointer"
                >
                  Candid Shoots
                </button>
              </div>
            </div>
          </div>

          {/* Genre 4: Godsent Mischiefs: Kids photography */}
          <div className="border-t border-white/10 pt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-white/50 block">
                HONEST PURITY & EMOTION
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-white leading-tight">
                Godsent Mischiefs: Kids photography
              </h3>
              <div className="h-px w-12 bg-white/20" />
              <div className="text-sm text-white/70 leading-relaxed space-y-4 font-light">
                <p>
                  A photograph seeks purity - an honest emotion. It is a child’s heart and his/her glistening eyes that
                  touch the deepest corners of a man’s consciousness. It’s their purity that makes your heart float and
                  your day better and their presence that lights up your world.
                </p>
                <p>
                  Kids photography is Nikhil Kapur’s favourite photography challenge, he enjoys blending in according
                  to the kid’s tantrums and creates a story through his lens. One-shot for this god sent mischief’s every
                  mood! Photographing kids is an experience, a heartfelt time period that results in super beautiful
                  memories for the kids, and him as a photographer to treasure forever.
                </p>
              </div>
              <button
                onClick={() => setActiveModalSection('kids')}
                className="px-5 py-2 text-xs uppercase tracking-widest font-semibold bg-white text-black hover:bg-white/90 transition-all cursor-pointer"
              >
                View Kids Portfolio
              </button>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div
                  onClick={() =>
                    openLightbox(
                      [
                        { title: 'Ayra — Innocent Wonder', image: '/assets/nikhil-kapur-photography/kids-ayra-1.jpg' },
                        { title: 'Spontaneous Play', image: '/assets/nikhil-kapur-photography/kids-ayra-2.jpg' },
                        { title: 'Joyful Moments', image: '/assets/nikhil-kapur-photography/kids-ayra-3.jpg' }
                      ],
                      0
                    )
                  }
                  className="overflow-hidden rounded-xl border border-white/10 aspect-3/4 cursor-pointer group"
                >
                  <img
                    src="/assets/nikhil-kapur-photography/kids-ayra-1.jpg"
                    alt="Kids photography Ayra 1"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4">
                  <div
                    onClick={() =>
                      openLightbox(
                        [
                          { title: 'Ayra — Innocent Wonder', image: '/assets/nikhil-kapur-photography/kids-ayra-1.jpg' },
                          { title: 'Spontaneous Play', image: '/assets/nikhil-kapur-photography/kids-ayra-2.jpg' }
                        ],
                        1
                      )
                    }
                    className="overflow-hidden rounded-xl border border-white/10 aspect-4/3 cursor-pointer group"
                  >
                    <img
                      src="/assets/nikhil-kapur-photography/kids-ayra-2.jpg"
                      alt="Kids photography Ayra 2"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div
                    onClick={() =>
                      openLightbox(
                        [
                          { title: 'Kids Portraits', image: '/assets/nikhil-kapur-photography/kids-ayra-3.jpg' }
                        ],
                        0
                      )
                    }
                    className="overflow-hidden rounded-xl border border-white/10 aspect-4/3 cursor-pointer group"
                  >
                    <img
                      src="/assets/nikhil-kapur-photography/kids-ayra-3.jpg"
                      alt="Kids photography Ayra 3"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Genre 5: Frozen Art: Architecture Photography (Heritage, Homes, Hotels) */}
          <div className="border-t border-white/10 pt-20">
            <div className="max-w-3xl mb-12">
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-white/50 block mb-1">
                STRUCTURES & SOIL
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-white mb-4">
                Frozen Art: Architecture Photography
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-light">
                Architecture is a concept that does not have to express or speak too much to hold its ground, it’s
                constructed to stand tall while it’s the ‘art’ that does all the talking. A photographer is an artist
                who, through his art, tells a silent story louder than thunder. You can only make buildings talk when you
                shoot with a mindset to create and put life into barren buildings. Nikhil Kapur works with an agenda to
                produce a constructive series of pictorial architecture to amaze the audience with a solid narrative
                about the structure which otherwise is a lifeless building, be it a hotel, heritage, or a home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Heritage Photography */}
              <div className="bg-[#121215] border border-white/10 rounded-xl p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-rose-300">HISTORIC MONUMENTS</span>
                  <h4 className="text-xl font-serif text-white">Heritage Photography</h4>
                  <p className="text-xs text-white/70 leading-relaxed font-light">
                    Heritage, evidently has earnest power to help build a nation. Heritage speaks of its time and age and
                    the soil it’s built on but yearns for timelessness. Nikhil Kapur personally has a very special place
                    for heritage photography in his heart. He believes in taking his audience on a historic and
                    venerable experience through his photography.
                  </p>
                </div>
                <div
                  onClick={() =>
                    openLightbox(
                      [
                        { title: 'Monumental Heritage Arches', image: '/assets/nikhil-kapur-photography/hero-heritage-arch-1.jpg' }
                      ],
                      0
                    )
                  }
                  className="overflow-hidden rounded-lg aspect-16/10 cursor-pointer group mt-4"
                >
                  <img
                    src="/assets/nikhil-kapur-photography/hero-heritage-arch-1.jpg"
                    alt="Heritage architecture"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>

              {/* Homes Photography */}
              <div className="bg-[#121215] border border-white/10 rounded-xl p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-sky-300">LIVING SPACES</span>
                  <h4 className="text-xl font-serif text-white">Homes</h4>
                  <p className="text-xs text-white/70 leading-relaxed font-light">
                    A house is built in days but it transforms into a home when it’s no more a four-walled property but
                    rather a feeling, a binding emotion. Compiling that binding emotion with Nikhil Kapur’s art of
                    capturing the little things with bigger emotions, a home that you built with your bare hands. It will
                    result in a joint effort that will breed magic!
                  </p>
                </div>
                <div
                  onClick={() =>
                    openLightbox(
                      [
                        { title: 'Contemporary Residence Design', image: '/assets/nikhil-kapur-photography/hero-home-arch-1.jpg' }
                      ],
                      0
                    )
                  }
                  className="overflow-hidden rounded-lg aspect-16/10 cursor-pointer group mt-4"
                >
                  <img
                    src="/assets/nikhil-kapur-photography/hero-home-arch-1.jpg"
                    alt="Home architecture"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>

              {/* Hotel Photography */}
              <div className="bg-[#121215] border border-white/10 rounded-xl p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300">HOSPITALITY SPACES</span>
                  <h4 className="text-xl font-serif text-white">Hotel Photography</h4>
                  <p className="text-xs text-white/70 leading-relaxed font-light">
                    Every hotel tells a story of its own, the story involves everything that the property wants to make
                    you feel, understand, and register. Nikhil Kapur’s simple strategy is to let the atmosphere do the
                    talking and follow the lead to acquire the best shots in his hotel photography journey.
                  </p>
                </div>
                <div
                  onClick={() =>
                    openLightbox(
                      [
                        { title: 'Luxury Hotel Suite', image: '/assets/nikhil-kapur-photography/hero-luxury-hotel-3.jpg' }
                      ],
                      0
                    )
                  }
                  className="overflow-hidden rounded-lg aspect-16/10 cursor-pointer group mt-4"
                >
                  <img
                    src="/assets/nikhil-kapur-photography/hero-luxury-hotel-3.jpg"
                    alt="Hotel suite photography"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>

            {/* "More Information" button matching the Squarespace original */}
            <div className="pt-12 text-center">
              <button
                onClick={() => setActiveModalSection('contact')}
                className="px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] bg-white text-black hover:bg-white/90 rounded-none transition-all shadow-xl cursor-pointer"
              >
                More Information
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- COMPREHENSIVE PORTFOLIO / GALLERY SECTION ----------------- */}
      <section id="portfolio" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/10 gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/50 block mb-1">
              WORKS ARCHIVE
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif text-white font-light">
              Visual Portfolio & Collections
            </h3>
          </div>
          <span className="text-xs text-white/50 font-mono">
            Showing {filteredPortfolio.length} Selected Works
          </span>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 overflow-x-auto">
          {[
            { id: 'all', label: 'All Works' },
            { id: 'architecture', label: 'Architecture' },
            { id: 'wedding', label: 'Wedding' },
            { id: 'kids', label: 'Kids' },
            { id: 'products', label: 'Products' },
            { id: 'food', label: 'Food' },
            { id: 'jewelry', label: 'Jewelry' },
            { id: 'heritage', label: 'Heritage' },
            { id: 'hotels', label: 'Hotels' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedPortfolioFilter(cat.id)}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all rounded-md cursor-pointer ${
                selectedPortfolioFilter === cat.id
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPortfolio.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(filteredPortfolio, index)}
              className="group bg-[#121214] border border-white/10 rounded-lg overflow-hidden cursor-pointer hover:border-white/30 transition-all duration-300 flex flex-col"
            >
              <div
                className={`w-full overflow-hidden bg-black/60 relative ${
                  item.aspectRatio === 'portrait'
                    ? 'aspect-3/4'
                    : item.aspectRatio === 'square'
                    ? 'aspect-square'
                    : 'aspect-16/10'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/70 block">
                      {item.categoryLabel}
                    </span>
                    <h4 className="text-sm font-serif text-white font-medium">{item.title}</h4>
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-1">
                <div className="flex items-center justify-between text-[11px] text-white/50 font-mono">
                  <span>{item.categoryLabel}</span>
                  {item.location && <span>{item.location}</span>}
                </div>
                <h4 className="text-sm font-serif text-white group-hover:text-white/90 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-white/60 line-clamp-2 font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------- CALL TO ACTION / BOOKING STRIP ----------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0e0e12] to-black border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-white/50 block">
            INQUIRIES & COMMISSIONS
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif text-white font-light">
            Ready to Translate Moments Into Timeless Memories?
          </h3>
          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto font-light leading-relaxed">
            From intimate candid wedding celebrations across India to luxury hotel architecture and commercial product
            campaigns.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setActiveModalSection('contact')}
              className="px-7 py-3 text-xs font-semibold uppercase tracking-widest bg-white text-black hover:bg-white/90 transition-all shadow-xl cursor-pointer"
            >
              Commission a Project
            </button>
            <a
              href={`tel:${NIKHIL_KAPUR_CONFIG.brand.phone}`}
              className="px-7 py-3 text-xs font-semibold uppercase tracking-widest text-white border border-white/20 hover:border-white/60 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call +91 98200 26166</span>
            </a>
          </div>
        </div>
      </section>

      {/* ----------------- FOOTER (Authentic Squarespace Structure) ----------------- */}
      <footer className="border-t border-white/10 bg-[#060608] pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-xs text-white/60">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Business Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
            {/* Col 1: Identity */}
            <div className="space-y-3">
              <h5 className="font-serif text-base tracking-wider text-white">Nikhil Kapur Photography</h5>
              <p className="text-white/60 leading-relaxed text-xs">
                Candid Photographer, Filmmaker, and Visual Storyteller. Based in Mumbai, India; shooting across India &
                worldwide.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={NIKHIL_KAPUR_CONFIG.brand.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href={NIKHIL_KAPUR_CONFIG.brand.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Col 2: Business Info */}
            <div className="space-y-2">
              <h5 className="font-mono text-[11px] uppercase tracking-wider text-white">Studio Contact</h5>
              <div className="space-y-1.5 pt-1">
                <div>Country: <span className="text-white">India</span></div>
                <div>
                  Phone:{' '}
                  <a href={`tel:${NIKHIL_KAPUR_CONFIG.brand.phone}`} className="text-white hover:underline">
                    {NIKHIL_KAPUR_CONFIG.brand.phoneFormatted}
                  </a>
                </div>
                <div>
                  Email:{' '}
                  <a href={`mailto:${NIKHIL_KAPUR_CONFIG.brand.email}`} className="text-white hover:underline">
                    {NIKHIL_KAPUR_CONFIG.brand.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Col 3: Photography Disciplines */}
            <div className="space-y-2">
              <h5 className="font-mono text-[11px] uppercase tracking-wider text-white">Disciplines</h5>
              <ul className="space-y-1 pt-1">
                <li>
                  <button onClick={() => setActiveModalSection('wedding')} className="hover:text-white transition-colors cursor-pointer">
                    Candid Wedding Photography
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveModalSection('architecture')} className="hover:text-white transition-colors cursor-pointer">
                    Architecture & Heritage
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveModalSection('products')} className="hover:text-white transition-colors cursor-pointer">
                    Product & Commercial
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveModalSection('kids')} className="hover:text-white transition-colors cursor-pointer">
                    Kids & Children Portraits
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveModalSection('wedding-films')} className="hover:text-white transition-colors cursor-pointer">
                    Cinematic Wedding Films
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: Key Locations */}
            <div className="space-y-2">
              <h5 className="font-mono text-[11px] uppercase tracking-wider text-white">Locations</h5>
              <p className="text-white/60 leading-relaxed text-xs">
                Available for assignments in Mumbai, Delhi NCR, Rajasthan, Goa, Chennai, Bangalore, and international
                destinations including Australia, Europe, and the UAE.
              </p>
            </div>
          </div>

          {/* Footer Nav & Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 uppercase tracking-wider text-[11px]">
              <a href="#gallery" className="hover:text-white transition-colors">Home</a>
              <button onClick={() => setActiveModalSection('about')} className="hover:text-white transition-colors cursor-pointer">About</button>
              <button onClick={() => setActiveModalSection('blog')} className="hover:text-white transition-colors cursor-pointer">Blog</button>
              <button onClick={() => setActiveModalSection('contact')} className="hover:text-white transition-colors cursor-pointer">Contact</button>
              <button onClick={() => setActiveModalSection('mumbai')} className="hover:text-white transition-colors cursor-pointer">Mumbai</button>
              <button onClick={() => setActiveModalSection('delhi')} className="hover:text-white transition-colors cursor-pointer">Delhi</button>
            </div>
            <div className="text-[11px] text-white/40">
              © {new Date().getFullYear()} Nikhil Kapur Photography. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          MODALS & OVERLAYS
          ========================================================================= */}

      {/* ----------------- LIGHTBOX VIEWER ----------------- */}
      {activeLightboxIndex !== null && lightboxItems[activeLightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200">
          {/* Lightbox Topbar */}
          <div className="flex items-center justify-between z-20 text-xs text-white/70">
            <div className="flex items-center gap-3">
              <span className="font-mono">
                {activeLightboxIndex + 1} / {lightboxItems.length}
              </span>
              {lightboxItems[activeLightboxIndex].category && (
                <span className="px-2 py-0.5 rounded bg-white/10 uppercase tracking-widest text-[10px] font-mono">
                  {lightboxItems[activeLightboxIndex].category}
                </span>
              )}
            </div>
            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Image Container */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <img
              src={lightboxItems[activeLightboxIndex].image}
              alt={lightboxItems[activeLightboxIndex].title}
              className="max-h-[75vh] max-w-[90vw] object-contain rounded shadow-2xl transition-all"
            />

            {/* Left / Right Buttons */}
            <button
              onClick={() =>
                setActiveLightboxIndex((prev) =>
                  prev !== null && prev > 0 ? prev - 1 : lightboxItems.length - 1
                )
              }
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() =>
                setActiveLightboxIndex((prev) =>
                  prev !== null && prev < lightboxItems.length - 1 ? prev + 1 : 0
                )
              }
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Caption */}
          <div className="text-center max-w-xl mx-auto space-y-1 z-20 pb-2">
            <h4 className="text-sm sm:text-base font-serif text-white font-medium">
              {lightboxItems[activeLightboxIndex].title}
            </h4>
            {lightboxItems[activeLightboxIndex].description && (
              <p className="text-xs text-white/60 font-light">
                {lightboxItems[activeLightboxIndex].description}
              </p>
            )}
          </div>
        </div>
      )}

      {/* ----------------- INSTAGRAM STORY MODAL ----------------- */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#121215] border border-white/15 rounded-xl max-w-xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-400" />
                <span className="text-xs font-mono tracking-wider text-white">
                  {selectedStory.couple || 'Nikhil Kapur Chronicles'}
                </span>
              </div>
              <button
                onClick={() => setSelectedStory(null)}
                className="p-1 rounded-full text-white/60 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-16/10 w-full overflow-hidden bg-black">
              <img
                src={selectedStory.image}
                alt={selectedStory.caption}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono text-white/50 block">{selectedStory.location}</span>
                <p className="text-sm font-serif text-white/90 italic leading-relaxed">
                  {selectedStory.caption}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                {selectedStory.hashtags.map((h, i) => (
                  <span key={i} className="text-[11px] text-blue-400 font-mono">
                    {h}
                  </span>
                ))}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedStory(null)}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white rounded transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- SEARCH OVERLAY MODAL ----------------- */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="max-w-3xl w-full mx-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3 w-full">
                <Search className="w-5 h-5 text-white/60" />
                <input
                  type="text"
                  placeholder="Search architecture, weddings, kids, food, jewelry..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent text-lg text-white placeholder-white/40 focus:outline-hidden"
                />
              </div>
              <button
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery('');
                }}
                className="p-2 text-white/60 hover:text-white cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Quick Suggestions */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest block">
                Popular Categories
              </span>
              <div className="flex flex-wrap gap-2">
                {['Wedding', 'Architecture', 'Heritage', 'Hotels', 'Food', 'Jewelry', 'Kids', 'Homes'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="px-3 py-1.5 bg-white/5 hover:bg-white/15 text-xs text-white/80 rounded-full border border-white/10 transition-colors cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Results Preview */}
            <div className="space-y-3 pt-4">
              {searchQuery.trim().length > 0 && (
                <>
                  <span className="text-xs font-mono text-white/50 uppercase tracking-widest block">
                    Matching Portfolios
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[50vh] overflow-y-auto pr-2">
                    {NIKHIL_KAPUR_CONFIG.portfolioItems
                      .filter(
                        (item) =>
                          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase())
                      )
                      .map((item, idx) => (
                        <div
                          key={item.id}
                          onClick={() => {
                            setSearchOpen(false);
                            openLightbox(NIKHIL_KAPUR_CONFIG.portfolioItems, idx);
                          }}
                          className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 cursor-pointer transition-colors"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-16 h-12 object-cover rounded"
                          />
                          <div>
                            <span className="text-[10px] font-mono text-white/50 uppercase block">
                              {item.categoryLabel}
                            </span>
                            <h5 className="text-xs font-serif text-white font-medium line-clamp-1">
                              {item.title}
                            </h5>
                          </div>
                        </div>
                      ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ----------------- CART / PRINT SHOP DRAWER ----------------- */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex justify-end">
          <div className="bg-[#101012] border-l border-white/10 w-full max-w-md h-full p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-white" />
                  <h4 className="font-serif text-lg text-white">Your Cart (0)</h4>
                </div>
                <button onClick={() => setCartOpen(false)} className="p-1 text-white/60 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto text-white/40 border border-white/10">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h5 className="font-serif text-base text-white">Your cart is currently empty</h5>
                <p className="text-xs text-white/60 max-w-xs mx-auto leading-relaxed">
                  Fine-art architectural monographs, limited edition prints, and bespoke wedding photo books are available upon consultation.
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setCartOpen(false);
                  setActiveModalSection('books');
                }}
                className="w-full py-3 bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-white/90 transition-colors"
              >
                Explore Books & Albums
              </button>
              <button
                onClick={() => setCartOpen(false)}
                className="w-full py-2.5 bg-transparent border border-white/20 text-white/70 hover:text-white text-xs uppercase tracking-wider transition-colors"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- DESTINATION MODALS (Architecture, Wedding, Films, Books, About, Contact, etc.) ----------------- */}
      {activeModalSection && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[#101014] border border-white/15 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#101014]/95 backdrop-blur-md z-20 flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono tracking-[0.25em] text-white/50 uppercase block">
                  NIKHIL KAPUR PHOTOGRAPHY
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-white font-light capitalize">
                  {activeModalSection.replace(/-/g, ' ')}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalSection(null)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Routing */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Architecture Modal */}
              {(activeModalSection === 'architecture' || activeModalSection === 'heritage' || activeModalSection === 'homes' || activeModalSection === 'hotels') && (
                <div className="space-y-6">
                  <p className="text-sm sm:text-base text-white/80 font-serif leading-relaxed">
                    “Architecture is a concept that does not have to express or speak too much to hold its ground, it’s
                    constructed to stand tall while it’s the ‘art’ that does all the talking. A photographer is an
                    artist who, through his art, tells a silent story louder than thunder.”
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <img
                        src="/assets/nikhil-kapur-photography/hero-udaipur-palace.jpg"
                        alt="Udaipur heritage"
                        className="rounded-lg object-cover w-full h-48 border border-white/10"
                      />
                      <h5 className="font-serif text-sm text-white">Heritage & Historic Palaces</h5>
                      <p className="text-xs text-white/60">Documenting the venerable soil and royal heritage structures across Rajasthan and North India.</p>
                    </div>
                    <div className="space-y-2">
                      <img
                        src="/assets/nikhil-kapur-photography/hero-luxury-hotel-3.jpg"
                        alt="Luxury hotel interior"
                        className="rounded-lg object-cover w-full h-48 border border-white/10"
                      />
                      <h5 className="font-serif text-sm text-white">Luxury Hotels & Hospitality</h5>
                      <p className="text-xs text-white/60">Allowing space, light, and architectural symmetry to tell the hospitality brand narrative.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Wedding & Candid Modal */}
              {(activeModalSection === 'wedding' || activeModalSection === 'candidphotography' || activeModalSection === 'preweddingphotography') && (
                <div className="space-y-6">
                  <p className="text-sm sm:text-base text-white/80 font-serif leading-relaxed">
                    “Being a candid photographer in Mumbai, India, he works from behind the curtain to capture the most
                    intimate and personal moments of the wedding, also giving total space and privacy to the family to
                    cherish the natural essence of The Big Day.”
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <img
                      src="/assets/nikhil-kapur-photography/hero-wedding-couple-1.jpg"
                      alt="Wedding couple"
                      className="rounded-lg object-cover w-full h-48 border border-white/10"
                    />
                    <img
                      src="/assets/nikhil-kapur-photography/hero-wedding-portrait-vertical.jpg"
                      alt="Bridal portrait"
                      className="rounded-lg object-cover w-full h-48 border border-white/10"
                    />
                    <img
                      src="/assets/nikhil-kapur-photography/hero-wedding-celebration.jpg"
                      alt="Wedding celebration"
                      className="rounded-lg object-cover w-full h-48 border border-white/10"
                    />
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-xs space-y-2 text-white/70">
                    <span className="font-mono text-white text-[11px] uppercase block">Wedding Deliverables</span>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Unobtrusive candid photography capturing tears, laughter, and spontaneous emotions.</li>
                      <li>Fine-art bridal and groom monographs with bespoke editorial color grading.</li>
                      <li>High-resolution archival galleries and custom handcrafted coffee table books.</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Kids Modal */}
              {activeModalSection === 'kids' && (
                <div className="space-y-6">
                  <p className="text-sm sm:text-base text-white/80 font-serif leading-relaxed">
                    “It is a child’s heart and his/her glistening eyes that touch the deepest corners of a man’s
                    consciousness. It’s their purity that makes your heart float and your day better and their presence
                    that lights up your world.”
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <img
                      src="/assets/nikhil-kapur-photography/kids-ayra-1.jpg"
                      alt="Ayra portrait 1"
                      className="rounded-lg object-cover w-full h-48 border border-white/10"
                    />
                    <img
                      src="/assets/nikhil-kapur-photography/kids-ayra-2.jpg"
                      alt="Ayra portrait 2"
                      className="rounded-lg object-cover w-full h-48 border border-white/10"
                    />
                    <img
                      src="/assets/nikhil-kapur-photography/kids-ayra-3.jpg"
                      alt="Ayra portrait 3"
                      className="rounded-lg object-cover w-full h-48 border border-white/10"
                    />
                  </div>
                </div>
              )}

              {/* Products, Food & Jewelry Modal */}
              {(activeModalSection === 'products' || activeModalSection === 'food' || activeModalSection === 'jewelry') && (
                <div className="space-y-6">
                  <p className="text-sm sm:text-base text-white/80 font-serif leading-relaxed">
                    “In the digital world, Product photography is the first and foremost stage of consumer engagement.
                    Our ultimate intention is to lay a ground for the viewer to connect with the product through
                    masterful lighting and textural presence.”
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <img
                        src="/assets/nikhil-kapur-photography/food-1.jpg"
                        alt="Food photography"
                        className="rounded-lg object-cover w-full h-40 border border-white/10"
                      />
                      <span className="font-serif text-xs text-white block">Gastronomy & Plating</span>
                    </div>
                    <div className="space-y-2">
                      <img
                        src="/assets/nikhil-kapur-photography/jewelry-necklace-emerald.jpg"
                        alt="Jewelry emerald"
                        className="rounded-lg object-cover w-full h-40 border border-white/10"
                      />
                      <span className="font-serif text-xs text-white block">Emerald & Diamond Fine Jewellery</span>
                    </div>
                    <div className="space-y-2">
                      <img
                        src="/assets/nikhil-kapur-photography/product-cosmetic-1.jpg"
                        alt="Cosmetic product"
                        className="rounded-lg object-cover w-full h-40 border border-white/10"
                      />
                      <span className="font-serif text-xs text-white block">Commercial Product Catalogs</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Films / Wedding Films / Sulafest Modal */}
              {(activeModalSection === 'wedding-films' || activeModalSection === 'films' || activeModalSection === 'photoflow' || activeModalSection === 'sulafest' || activeModalSection === 'aerial') && (
                <div className="space-y-6">
                  <div className="p-6 bg-[#0a0a0d] border border-white/10 rounded-xl space-y-4">
                    <Film className="w-8 h-8 text-rose-400" />
                    <h4 className="font-serif text-lg text-white">Cinematic Wedding Films & Aerial Visuals</h4>
                    <p className="text-sm text-white/70 font-light leading-relaxed">
                      Nikhil Kapur’s motion storytelling pairs nuanced cinema cameras with drone aerial perspectives.
                      From the energetic soundscapes of SulaFest to the emotional, tear-filled speeches of intimate
                      wedding rituals.
                    </p>
                    <div className="pt-2 flex items-center gap-3">
                      <span className="text-xs font-mono px-2.5 py-1 bg-white/10 text-white rounded">4K 10-Bit Cinematic Capture</span>
                      <span className="text-xs font-mono px-2.5 py-1 bg-white/10 text-white rounded">Licensed Drone Aerial DOP</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Books & Albums Modal */}
              {(activeModalSection === 'books' || activeModalSection === 'albums' || activeModalSection === 'mini-klone' || activeModalSection === 'editorial') && (
                <div className="space-y-6">
                  <div className="p-6 bg-[#0a0a0d] border border-white/10 rounded-xl space-y-4">
                    <Book className="w-8 h-8 text-amber-300" />
                    <h4 className="font-serif text-lg text-white">Personalised Coffee Table Books & Architectural Monograph Series</h4>
                    <p className="text-sm text-white/70 font-light leading-relaxed">
                      Each photo book is individually typeset and printed on museum-grade fine art cotton paper with
                      handcrafted leather or Japanese silk bindings. Designed to outlast generations.
                    </p>
                  </div>
                </div>
              )}

              {/* About & Blog Modal */}
              {(activeModalSection === 'about' || activeModalSection === 'blog' || activeModalSection === 'mumbai' || activeModalSection === 'delhi') && (
                <div className="space-y-6">
                  <div className="space-y-4 text-sm text-white/70 font-light leading-relaxed">
                    <p className="text-base text-white font-serif italic">
                      “Candid Photographer. Filmmaker. Storyteller. Lover of dark chocolate with a side of good stories. Currently residing in Mumbai, India.”
                    </p>
                    <p>
                      Over the course of 10+ years, Nikhil Kapur has established himself as one of the pre-eminent candid
                      photographers in Mumbai and India, capturing luxury weddings, world-heritage monuments, private
                      estates, and commercial food & jewellery brands.
                    </p>
                    <p>
                      His approach prioritizes emotional honesty over stiff poses, working unobtrusively from behind the
                      curtain so couples and clients can fully immerse themselves in their moments.
                    </p>
                  </div>
                </div>
              )}

              {/* Contact / Commission Consultation Form */}
              <div className="border-t border-white/10 pt-6 space-y-4">
                <h4 className="font-serif text-base text-white">Schedule a Direct Consultation</h4>
                {inquirySubmitted ? (
                  <div className="p-4 bg-emerald-950/60 border border-emerald-800/80 rounded-lg text-emerald-300 text-xs flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Thank you for your message! Nikhil Kapur Photography studio will connect with you within 24 hours.</span>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-mono uppercase text-white/60 block mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={inquiryData.name}
                          onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-hidden focus:border-white/40"
                          placeholder="e.g. Ananya Sen"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-mono uppercase text-white/60 block mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={inquiryData.email}
                          onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-hidden focus:border-white/40"
                          placeholder="ananya@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="text-[11px] font-mono uppercase text-white/60 block mb-1">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          value={inquiryData.phone}
                          onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-hidden focus:border-white/40"
                          placeholder="+91 98200 00000"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-mono uppercase text-white/60 block mb-1">Service Discipline</label>
                        <select
                          value={inquiryData.service}
                          onChange={(e) => setInquiryData({ ...inquiryData, service: e.target.value })}
                          className="w-full bg-[#18181c] border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-hidden focus:border-white/40"
                        >
                          <option value="Wedding Photography">Wedding Photography</option>
                          <option value="Candid Wedding Shoot">Candid Wedding Shoot</option>
                          <option value="Architecture & Hotels">Architecture & Hotels</option>
                          <option value="Kids Photography">Kids Photography</option>
                          <option value="Product & Food">Product & Food</option>
                          <option value="Jewelry Photography">Jewelry Photography</option>
                          <option value="Cinematic Films">Cinematic Films</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[11px] font-mono uppercase text-white/60 block mb-1">Expected Date / City</label>
                        <input
                          type="text"
                          value={inquiryData.date}
                          onChange={(e) => setInquiryData({ ...inquiryData, date: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-hidden focus:border-white/40"
                          placeholder="e.g. Dec 2026 / Mumbai"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase text-white/60 block mb-1">Project Details</label>
                      <textarea
                        rows={3}
                        value={inquiryData.message}
                        onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-hidden focus:border-white/40 resize-none"
                        placeholder="Tell us about the occasion, venue, schedule, or visual vision..."
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="text-[11px] text-white/50">
                        Direct: <a href="tel:+919820026166" className="text-white hover:underline">+91 98200 26166</a>
                      </div>
                      <button
                        type="submit"
                        className="px-6 py-2.5 text-xs font-semibold uppercase tracking-widest bg-white text-black hover:bg-white/90 rounded transition-colors cursor-pointer"
                      >
                        Send Inquiry
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
