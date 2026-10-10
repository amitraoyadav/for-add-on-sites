import React, { useState, useEffect } from 'react';
import {
  photoPhactoryConfig,
  PortfolioItem,
  RealWeddingStory,
  VideoItem,
  BlogPost
} from './photo-phactory.config';
import {
  Camera,
  Film,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Play,
  Share2,
  Check,
  Search,
  Menu,
  SlidersHorizontal,
  ExternalLink,
  MessageCircle,
  ArrowUp,
  Award,
  Heart,
  Users,
  Briefcase
} from 'lucide-react';

export default function PhotoPhactory() {
  // Navigation & Page State
  const [activePage, setActivePage] = useState<'home' | 'about' | 'portfolio' | 'real-wedding' | 'video' | 'blog' | 'contact'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Revolution Slider 6 state
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photoPhactoryConfig.slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Testimonials fullslider state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Portfolio Filter State
  const [portfolioFilter, setPortfolioFilter] = useState<'all' | 'wedding' | 'pre-wedding' | 'newborn' | 'portrait'>('all');
  const [lightboxImage, setLightboxImage] = useState<PortfolioItem | null>(null);

  // Active Story & Video Modal
  const [activeStoryModal, setActiveStoryModal] = useState<RealWeddingStory | null>(null);
  const [activeVideoModal, setActiveVideoModal] = useState<VideoItem | null>(null);
  const [activeBlogModal, setActiveBlogModal] = useState<BlogPost | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isPlaceholdersOpen, setIsPlaceholdersOpen] = useState(false);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Wedding Photography',
    date: '',
    message: ''
  });
  const [contactSuccess, setContactSuccess] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSuccess(true);
    setTimeout(() => {
      setContactSuccess(false);
      setContactForm({
        name: '',
        email: '',
        phone: '',
        service: 'Wedding Photography',
        date: '',
        message: ''
      });
    }, 3000);
  };

  const filteredPortfolio = photoPhactoryConfig.portfolio.filter((item) => {
    if (portfolioFilter === 'all') return true;
    return item.category === portfolioFilter;
  });

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#000000] font-sans antialiased selection:bg-[#6DA716] selection:text-white">
      {/* 1. TOTAL THEME STICKY TOP-BAR */}
      <div id="top-bar-wrap" className="bg-[#000000] text-white text-xs py-2.5 px-4 sm:px-8 border-b border-[#222222]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[13px]">
          {/* Left Contact Details */}
          <div className="flex flex-wrap items-center gap-6 text-gray-300">
            <span className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#6DA716]" />
              <a href={`tel:${photoPhactoryConfig.placeholders.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition-colors">
                {photoPhactoryConfig.placeholders.phone}
              </a>
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#6DA716]" />
              <a href={`mailto:${photoPhactoryConfig.placeholders.email}`} className="hover:text-white transition-colors">
                {photoPhactoryConfig.placeholders.email}
              </a>
            </span>
          </div>

          {/* Right Social & Actions */}
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-3">
              <a
                href={photoPhactoryConfig.placeholders.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                title="Facebook"
              >
                <Share2 className="w-3.5 h-3.5" />
              </a>
              <a
                href={photoPhactoryConfig.placeholders.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                title="Instagram"
              >
                <Camera className="w-3.5 h-3.5" />
              </a>
            </div>

            <span className="text-gray-600">|</span>

            <button
              onClick={() => setIsPlaceholdersOpen(true)}
              className="px-2 py-0.5 rounded bg-[#1A1A1A] text-[#6DA716] hover:bg-[#2A2A2A] text-[11px] font-mono transition-all flex items-center gap-1 cursor-pointer"
            >
              <SlidersHorizontal className="w-3 h-3" />
              <span>Placeholders</span>
            </button>

            <a
              href={photoPhactoryConfig.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-0.5 rounded bg-[#6DA716] hover:bg-[#275304] text-white text-[11px] font-semibold flex items-center gap-1 transition-colors"
            >
              <span>Original Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER & GEORGIA NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#EEEEEE] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between gap-4">
          {/* Site Logo */}
          <div
            onClick={() => setActivePage('home')}
            className="cursor-pointer select-none py-2"
          >
            <div className="h-16 w-auto max-w-[280px]">
              <img
                src="/assets/photo-phactory/logo.svg"
                alt="Photo Phactory"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Georgia Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-serif font-bold text-[17px] tracking-wide text-[#000000]">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Us' },
              { id: 'portfolio', label: 'Portfolio' },
              { id: 'real-wedding', label: 'Real Wedding' },
              { id: 'video', label: 'Video' },
              { id: 'blog', label: 'Blog' },
              { id: 'contact', label: 'Contact Us' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => setActivePage(link.id as any)}
                className={`py-1.5 border-b-2 transition-colors cursor-pointer ${
                  activePage === link.id
                    ? 'border-[#6DA716] text-[#000000]'
                    : 'border-transparent text-[#222222] hover:text-[#6DA716] hover:border-[#6DA716]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Search Trigger & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-[#000000] hover:text-[#6DA716] rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Search site"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-black hover:bg-gray-100 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white px-6 py-4 space-y-3 font-serif">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Us' },
              { id: 'portfolio', label: 'Portfolio' },
              { id: 'real-wedding', label: 'Real Wedding' },
              { id: 'video', label: 'Video' },
              { id: 'blog', label: 'Blog' },
              { id: 'contact', label: 'Contact Us' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActivePage(link.id as any);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 text-base font-bold tracking-wide border-b border-gray-100 ${
                  activePage === link.id ? 'text-[#6DA716]' : 'text-gray-900'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* 3. MULTI-PAGE VIEW ROUTER */}
      <main id="content">
        {/* ============================================================== */}
        {/* VIEW 1: HOME PAGE (ORIGINAL SLIDER, COUNTERS, QUOTE, REVIEWS)  */}
        {/* ============================================================== */}
        {activePage === 'home' && (
          <div>
            {/* REVOLUTION SLIDER 6 RECREATION */}
            <section className="relative bg-[#000000] text-white overflow-hidden min-h-[480px] sm:min-h-[640px] flex items-center">
              {photoPhactoryConfig.slides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${
                    idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/35" />
                  <div className="relative z-20 text-center max-w-4xl px-4 space-y-4">
                    <span className="inline-block px-3.5 py-1 bg-[#6DA716] text-white text-xs font-bold uppercase tracking-widest rounded-full">
                      {slide.tag}
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-wide leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-base sm:text-xl text-gray-200 font-serif italic max-w-2xl mx-auto">
                      {slide.subtitle}
                    </p>
                    <div className="pt-4 flex flex-wrap justify-center gap-4">
                      <button
                        onClick={() => setActivePage('real-wedding')}
                        className="px-8 py-3.5 bg-[#000000] hover:bg-[#6DA716] text-white text-xs font-bold uppercase tracking-[0.2em] rounded transition-all shadow-xl cursor-pointer"
                      >
                        Explore Real Weddings
                      </button>
                      <button
                        onClick={() => setActivePage('contact')}
                        className="px-8 py-3.5 bg-transparent hover:bg-white hover:text-black text-white border border-white text-xs font-bold uppercase tracking-[0.2em] rounded transition-all cursor-pointer"
                      >
                        Get In Touch
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Slider Arrows */}
              <button
                onClick={() =>
                  setCurrentSlide((prev) =>
                    prev === 0 ? photoPhactoryConfig.slides.length - 1 : prev - 1
                  )
                }
                className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/50 hover:bg-[#6DA716] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() =>
                  setCurrentSlide((prev) => (prev + 1) % photoPhactoryConfig.slides.length)
                }
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/50 hover:bg-[#6DA716] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {photoPhactoryConfig.slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === currentSlide ? 'w-8 bg-[#6DA716]' : 'w-2 bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </section>

            {/* SECTION: VCEX MILESTONE COUNTERS */}
            <section className="py-16 bg-[#FFFFFF] border-b border-gray-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {photoPhactoryConfig.milestones.map((ms, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-5xl sm:text-7xl font-bold font-serif text-[#000000] tracking-tight">
                      <span>{ms.number}</span>
                      <span className="text-[#6DA716]">{ms.suffix}</span>
                    </div>
                    <div className="text-sm font-serif font-normal text-gray-500 uppercase tracking-widest pt-1">
                      {ms.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION: THIN. LIGHT. EPIC. / START SOMETHING NEW (PARALLAX QUOTE) */}
            <section
              className="relative py-28 px-4 text-white text-center bg-cover bg-center bg-fixed"
              style={{ backgroundImage: `url(${photoPhactoryConfig.quoteSection.bgImage})` }}
            >
              <div className="absolute inset-0 bg-black/75" />
              <div className="relative z-10 max-w-4xl mx-auto space-y-6">
                <span className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-gray-300">
                  {photoPhactoryConfig.quoteSection.eyebrow}
                </span>

                <h2 className="text-4xl sm:text-6xl font-serif font-normal text-white">
                  {photoPhactoryConfig.quoteSection.heading}
                </h2>

                <p className="text-base sm:text-lg font-serif italic text-gray-200 leading-relaxed max-w-2xl mx-auto">
                  "{photoPhactoryConfig.quoteSection.description}"
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => setActivePage('real-wedding')}
                    className="px-8 py-3.5 bg-[#000000] hover:bg-[#6DA716] text-white text-xs font-bold font-serif uppercase tracking-[0.2em] rounded transition-all shadow-xl cursor-pointer"
                  >
                    {photoPhactoryConfig.quoteSection.ctaButton}
                  </button>
                </div>
              </div>
            </section>

            {/* SECTION: VCEX TESTIMONIALS FULLSLIDER */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-8">
              <div className="w-20 h-20 rounded-full mx-auto overflow-hidden border-2 border-gray-200 shadow-md">
                <img
                  src={photoPhactoryConfig.testimonials[currentTestimonial].avatar}
                  alt={photoPhactoryConfig.testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <blockquote className="text-lg sm:text-xl font-serif italic text-gray-800 leading-relaxed max-w-3xl mx-auto">
                "{photoPhactoryConfig.testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="space-y-1">
                <h4 className="text-xl font-serif font-semibold text-[#000000]">
                  {photoPhactoryConfig.testimonials[currentTestimonial].name}
                </h4>
                <span className="text-xs text-[#6DA716] font-serif uppercase tracking-widest">
                  Verified Client
                </span>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() =>
                    setCurrentTestimonial((prev) =>
                      prev === 0 ? photoPhactoryConfig.testimonials.length - 1 : prev - 1
                    )
                  }
                  className="p-2 rounded-full border border-gray-300 hover:border-[#6DA716] hover:text-[#6DA716] text-gray-700 transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-1.5">
                  {photoPhactoryConfig.testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentTestimonial(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        i === currentTestimonial ? 'bg-[#6DA716]' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() =>
                    setCurrentTestimonial((prev) => (prev + 1) % photoPhactoryConfig.testimonials.length)
                  }
                  className="p-2 rounded-full border border-gray-300 hover:border-[#6DA716] hover:text-[#6DA716] text-gray-700 transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </section>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 2: ABOUT US PAGE                                          */}
        {/* ============================================================== */}
        {activePage === 'about' && (
          <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#6DA716] uppercase">About Our Studio</span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#000000]">
                {photoPhactoryConfig.aboutUs.heroHeading}
              </h1>
              <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed pt-2">
                {photoPhactoryConfig.aboutUs.leadParagraph}
              </p>
            </div>

            {/* Philosophy Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {photoPhactoryConfig.aboutUs.philosophyPoints.map((pt, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-3">
                  <span className="font-serif font-bold text-xs text-[#6DA716] block">0{i + 1}.</span>
                  <h3 className="font-serif font-bold text-lg text-black">{pt.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{pt.text}</p>
                </div>
              ))}
            </div>

            {/* Meet Vishal & Bunty */}
            <div className="bg-black text-white p-8 sm:p-12 rounded-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 aspect-square rounded-xl overflow-hidden bg-gray-900 border border-gray-800">
                <img src="/assets/photo-phactory/slide-1.svg" alt="Vishal & Bunty" className="w-full h-full object-cover" />
              </div>
              <div className="md:col-span-8 space-y-4">
                <span className="text-xs font-mono text-[#6DA716] uppercase tracking-widest">Master Artists Behind the Lens</span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">Vishal &amp; Bunty</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  With over a decade of continuous storytelling and 350+ weddings across India and overseas, Vishal &amp; Bunty balance spontaneous documentary intuition with painterly lighting to craft wedding memories that feel alive generations later.
                </p>
                <div className="pt-2 flex gap-4">
                  <button
                    onClick={() => setActivePage('contact')}
                    className="px-6 py-2.5 bg-[#6DA716] hover:bg-[#275304] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
                  >
                    Check Availability
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 3: PORTFOLIO PAGE                                         */}
        {/* ============================================================== */}
        {activePage === 'portfolio' && (
          <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#6DA716] uppercase">Visual Archives</span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#000000]">
                PHOTOGRAPHY PORTFOLIO
              </h1>
              <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                Carefully selected works across wedding rituals, pre-wedding romance, maternal portraits, and editorial commissions.
              </p>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
                {[
                  { id: 'all', label: 'All Works' },
                  { id: 'wedding', label: 'Weddings' },
                  { id: 'pre-wedding', label: 'Pre-Wedding' },
                  { id: 'newborn', label: 'Maternity & Newborn' },
                  { id: 'portrait', label: 'Portraits' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setPortfolioFilter(tab.id as any)}
                    className={`px-5 py-2 rounded text-xs font-serif font-bold transition-all cursor-pointer ${
                      portfolioFilter === tab.id
                        ? 'bg-[#000000] text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPortfolio.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxImage(item)}
                  className="group cursor-pointer space-y-3"
                >
                  <div className="relative rounded-lg overflow-hidden bg-gray-100 aspect-[4/3] border border-gray-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="p-3 rounded-full bg-white text-black shadow-lg">
                        <Maximize2 className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6DA716] block">{item.location}</span>
                    <h3 className="font-serif font-bold text-lg text-black group-hover:text-[#6DA716] transition-colors">{item.title}</h3>
                    <p className="text-xs text-gray-500 italic">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 4: REAL WEDDING STORIES PAGE                              */}
        {/* ============================================================== */}
        {activePage === 'real-wedding' && (
          <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#6DA716] uppercase">Unscripted Celebrations</span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#000000]">
                REAL WEDDING STORIES
              </h1>
              <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                Step inside the intimate journeys of real couples who trusted Photo Phactory to document their lifetime memories.
              </p>
            </div>

            <div className="space-y-12">
              {photoPhactoryConfig.realWeddings.map((rw) => (
                <div
                  key={rw.id}
                  className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10"
                >
                  <div className="lg:col-span-6 rounded-xl overflow-hidden aspect-[4/3] bg-gray-200">
                    <img src={rw.coverImage} alt={rw.couple} className="w-full h-full object-cover" />
                  </div>

                  <div className="lg:col-span-6 space-y-4">
                    <span className="text-xs font-mono text-[#6DA716] tracking-widest uppercase">
                      {rw.location} • {rw.season}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black">{rw.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{rw.storyText}</p>
                    <blockquote className="p-4 bg-white rounded-lg border-l-4 border-[#6DA716] text-xs italic text-gray-800">
                      "{rw.highlightQuotes}"
                    </blockquote>
                    <button
                      onClick={() => setActiveStoryModal(rw)}
                      className="px-6 py-2.5 bg-black hover:bg-[#6DA716] text-white text-xs font-bold font-serif uppercase tracking-wider rounded transition-colors cursor-pointer"
                    >
                      View Photo Gallery
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 5: VIDEO / CINEMATOGRAPHY PAGE                            */}
        {/* ============================================================== */}
        {activePage === 'video' && (
          <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#6DA716] uppercase">Motion Film Archives</span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#000000]">
                CINEMATIC WEDDING FILMS
              </h1>
              <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                Directed with atmospheric film cameras, natural acoustic sound design, and honest emotional pacing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {photoPhactoryConfig.videos.map((vid) => (
                <div
                  key={vid.id}
                  onClick={() => setActiveVideoModal(vid)}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all cursor-pointer group space-y-3 pb-4"
                >
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#6DA716] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-white ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-3 right-3 bg-black/80 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                      {vid.duration}
                    </span>
                  </div>

                  <div className="px-5 space-y-1">
                    <span className="text-[10px] font-mono text-[#6DA716] uppercase font-bold">{vid.videoType}</span>
                    <h3 className="font-serif font-bold text-base text-black group-hover:text-[#6DA716] transition-colors">{vid.title}</h3>
                    <p className="text-xs text-gray-500 line-clamp-2">{vid.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 6: BLOG PAGE                                              */}
        {/* ============================================================== */}
        {activePage === 'blog' && (
          <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#6DA716] uppercase">Thoughts &amp; Advice</span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#000000]">
                PHOTO PHACTORY BLOG
              </h1>
              <p className="text-sm text-gray-500 max-w-xl mx-auto">
                Expert tips for couples on candid photography, wedding timelines, and pre-wedding preparations.
              </p>
            </div>

            <div className="space-y-8">
              {photoPhactoryConfig.blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                >
                  <div className="md:col-span-5 aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-gray-400 font-mono">
                      <span className="text-[#6DA716] font-bold">{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-black">{post.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{post.excerpt}</p>
                    <button
                      onClick={() => setActiveBlogModal(post)}
                      className="text-xs font-bold text-[#6DA716] hover:text-[#275304] flex items-center gap-1 font-serif cursor-pointer pt-1"
                    >
                      <span>Read Story</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 7: CONTACT US PAGE                                        */}
        {/* ============================================================== */}
        {activePage === 'contact' && (
          <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#6DA716] uppercase">Inquiries &amp; Bookings</span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#000000]">
                CONNECT WITH US
              </h1>
              <p className="text-sm text-gray-500 max-w-xl mx-auto">
                We take on a limited number of weddings each season to dedicate our full creative energy to each story. Reach out early for dates.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Contact Card */}
              <div className="lg:col-span-5 bg-[#000000] text-white p-8 sm:p-10 rounded-2xl space-y-8">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white">Studio Contact</h3>
                  <p className="text-xs text-gray-400 mt-1">Direct inquiries handled by Vishal &amp; Bunty</p>
                </div>

                <div className="space-y-5 text-xs text-gray-300">
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-[#6DA716] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white mb-0.5">Phone:</strong>
                      <a href={`tel:${photoPhactoryConfig.contactInfo.phone}`} className="hover:text-white">
                        {photoPhactoryConfig.contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-[#6DA716] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white mb-0.5">Email:</strong>
                      <a href={`mailto:${photoPhactoryConfig.contactInfo.email}`} className="hover:text-white">
                        {photoPhactoryConfig.contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[#6DA716] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white mb-0.5">Studio Base:</strong>
                      <span>{photoPhactoryConfig.contactInfo.address}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-800 flex gap-3">
                  <a
                    href={photoPhactoryConfig.contactInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-[#6DA716] hover:bg-[#275304] text-white text-xs font-bold uppercase tracking-wider rounded text-center flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${photoPhactoryConfig.contactInfo.phone}`}
                    className="flex-1 py-3 bg-[#222222] hover:bg-[#333333] text-white text-xs font-bold uppercase tracking-wider rounded text-center flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Us</span>
                  </a>
                </div>
              </div>

              {/* Right Booking Form */}
              <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-black">Check Date Availability</h3>
                  <p className="text-xs text-gray-500 mt-1">Please provide your tentative event dates and locations.</p>
                </div>

                {contactSuccess ? (
                  <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-center space-y-2">
                    <Check className="w-8 h-8 text-[#6DA716] mx-auto" />
                    <h4 className="font-serif font-bold text-base text-gray-900">Thank You! Your Request Has Been Sent</h4>
                    <p className="text-xs text-gray-600">Vishal &amp; Bunty will review your wedding dates and reply within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-serif font-bold text-gray-700 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Meera Kapoor"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded text-xs text-black focus:outline-none focus:border-[#6DA716]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-serif font-bold text-gray-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91-9876543210"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded text-xs text-black focus:outline-none focus:border-[#6DA716]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-serif font-bold text-gray-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="meera@example.com"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded text-xs text-black focus:outline-none focus:border-[#6DA716]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-serif font-bold text-gray-700 mb-1">Service Required *</label>
                        <select
                          value={contactForm.service}
                          onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded text-xs text-black focus:outline-none focus:border-[#6DA716]"
                        >
                          <option value="Wedding Photography">Complete Wedding Photography &amp; Film</option>
                          <option value="Pre-Wedding Shoot">Pre-Wedding Destination Shoot</option>
                          <option value="Cinematography Only">Cinematography Film Only</option>
                          <option value="Maternity & Newborn">Maternity &amp; Newborn Shoot</option>
                          <option value="Editorial & Fashion">Editorial &amp; Fashion Portraits</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-serif font-bold text-gray-700 mb-1">Tentative Event Date &amp; City</label>
                      <input
                        type="text"
                        placeholder="e.g. December 2026 in Goa / Mumbai"
                        value={contactForm.date}
                        onChange={(e) => setContactForm({ ...contactForm, date: e.target.value })}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded text-xs text-black focus:outline-none focus:border-[#6DA716]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-serif font-bold text-gray-700 mb-1">Tell Us About Your Vision</label>
                      <textarea
                        rows={3}
                        placeholder="Share details about the venue, ceremonies, and vibe..."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded text-xs text-black focus:outline-none focus:border-[#6DA716]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#000000] hover:bg-[#6DA716] text-white text-xs font-bold font-serif uppercase tracking-[0.2em] rounded transition-all cursor-pointer shadow-md"
                    >
                      Send Availability Request
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 4. MODALS & POPUPS */}
      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-[#6DA716] text-white transition-colors cursor-pointer z-50"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-4xl w-full text-center space-y-3">
            <div className="max-h-[75vh] flex items-center justify-center overflow-hidden rounded-lg bg-black">
              <img src={lightboxImage.image} alt={lightboxImage.title} className="max-h-[75vh] w-auto max-w-full object-contain" />
            </div>
            <div className="text-white">
              <span className="text-xs font-mono text-[#6DA716] uppercase tracking-widest">{lightboxImage.categoryLabel}</span>
              <h3 className="text-xl font-serif font-bold text-white mt-1">{lightboxImage.title}</h3>
              <p className="text-xs text-gray-400 italic">{lightboxImage.subtitle}</p>
            </div>
          </div>
        </div>
      )}

      {/* Real Wedding Gallery Modal */}
      {activeStoryModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full p-6 sm:p-8 relative my-8 space-y-6">
            <button
              onClick={() => setActiveStoryModal(null)}
              className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-black rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono text-[#6DA716] uppercase font-bold">{activeStoryModal.location} • {activeStoryModal.season}</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-black">{activeStoryModal.title}</h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{activeStoryModal.storyText}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {activeStoryModal.galleryImages.map((img, i) => (
                <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveStoryModal(null)}
              className="w-full py-3 bg-black text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-gray-800 transition-colors"
            >
              Close Gallery
            </button>
          </div>
        </div>
      )}

      {/* Video Modal Player */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-black border border-gray-800 rounded-2xl max-w-3xl w-full p-6 relative space-y-4 text-center">
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-video rounded-xl overflow-hidden bg-gray-900 flex items-center justify-center relative">
              <img src={activeVideoModal.thumbnail} alt="" className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#6DA716] text-white flex items-center justify-center animate-pulse">
                  <Play className="w-8 h-8 fill-white ml-1" />
                </div>
                <span className="text-xs font-mono text-gray-300">Playing 4K Master Video Film...</span>
              </div>
            </div>

            <h3 className="text-xl font-serif font-bold text-white">{activeVideoModal.title}</h3>
            <p className="text-xs text-gray-400">{activeVideoModal.description}</p>
          </div>
        </div>
      )}

      {/* Blog Article Modal */}
      {activeBlogModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative my-8 space-y-4">
            <button
              onClick={() => setActiveBlogModal(null)}
              className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-black rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono text-[#6DA716] uppercase font-bold">{activeBlogModal.category} • {activeBlogModal.date}</span>
            <h2 className="text-2xl font-serif font-bold text-black">{activeBlogModal.title}</h2>
            <div className="space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed pt-2">
              {activeBlogModal.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <button
              onClick={() => setActiveBlogModal(null)}
              className="w-full py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded"
            >
              Close Story
            </button>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center p-4 pt-24">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <span className="text-xs font-serif font-bold uppercase tracking-wider text-black">Search Photo Phactory</span>
              <button onClick={() => setIsSearchOpen(false)} className="text-gray-400 hover:text-black">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                autoFocus
                placeholder="Search weddings, pre-wedding, videos, blog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded text-xs text-black focus:outline-none focus:border-[#6DA716]"
              />
            </div>
            {searchQuery && (
              <div className="text-xs text-gray-500 py-3 text-center">
                Found works for "{searchQuery}". <button onClick={() => { setActivePage('portfolio'); setIsSearchOpen(false); }} className="text-[#6DA716] font-bold underline ml-1">Browse Portfolio</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Placeholders Inspector Modal */}
      {isPlaceholdersOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#111111] text-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 border border-gray-800 shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-[#6DA716]" />
                <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                  Raoz Website Maker Export Inspector
                </h3>
              </div>
              <button onClick={() => setIsPlaceholdersOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Every contact record, photographer credit, milestone counter, and wedding portfolio asset in this Photo Phactory template is managed through `src/templates/photo-phactory/photo-phactory.config.ts`.
            </p>

            <div className="max-h-72 overflow-y-auto space-y-2 font-mono text-xs">
              {Object.entries(photoPhactoryConfig.placeholders).map(([key, val]) => (
                <div key={key} className="bg-gray-900 p-2.5 rounded border border-gray-800 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-[#6DA716] font-semibold">{key}:</span>
                  <span className="text-gray-300 truncate">{String(val)}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsPlaceholdersOpen(false)}
              className="w-full py-2.5 bg-[#6DA716] hover:bg-[#275304] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer"
            >
              Done Inspecting
            </button>
          </div>
        </div>
      )}

      {/* 5. FLOATING QUICK ACTION BUTTONS */}
      <a
        href={photoPhactoryConfig.contactInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      <a
        href={`tel:${photoPhactoryConfig.contactInfo.phone.replace(/[^0-9]/g, '')}`}
        className="fixed bottom-20 right-6 z-40 w-12 h-12 rounded-full bg-[#000000] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer border border-gray-700"
        aria-label="Call studio"
      >
        <Phone className="w-5 h-5 text-[#6DA716]" />
      </a>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 left-6 z-40 w-10 h-10 rounded-full bg-black/80 hover:bg-[#6DA716] text-white flex items-center justify-center shadow-lg transition-colors cursor-pointer"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* 6. TOTAL THEME FOOTER */}
      <footer className="bg-[#000000] text-white py-12 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-serif font-bold tracking-widest uppercase text-gray-300">
            <button onClick={() => setActivePage('home')} className="hover:text-[#6DA716] transition-colors">Home</button>
            <button onClick={() => setActivePage('about')} className="hover:text-[#6DA716] transition-colors">About Us</button>
            <button onClick={() => setActivePage('portfolio')} className="hover:text-[#6DA716] transition-colors">Portfolio</button>
            <button onClick={() => setActivePage('real-wedding')} className="hover:text-[#6DA716] transition-colors">Real Wedding</button>
            <button onClick={() => setActivePage('video')} className="hover:text-[#6DA716] transition-colors">Video</button>
            <button onClick={() => setActivePage('blog')} className="hover:text-[#6DA716] transition-colors">Blog</button>
            <button onClick={() => setActivePage('contact')} className="hover:text-[#6DA716] transition-colors">Contact Us</button>
          </div>

          <div id="copyright" className="text-xs text-gray-500 font-sans">
            Copyright 2026. www.photophactory.in. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
