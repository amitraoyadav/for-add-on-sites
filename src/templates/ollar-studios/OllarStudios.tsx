import React, { useState, useEffect } from 'react';
import {
  OLLAR_STUDIOS_CONFIG,
  StudioRentalItem,
  PhotographyServiceItem,
  PortfolioItem,
  BlogItem
} from './ollar-studios.config';
import {
  Camera,
  Mic,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Star,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  X,
  Menu,
  MessageCircle,
  Eye,
  Maximize2,
  ArrowRight,
  ArrowDown,
  Building2,
  Sparkles,
  Award,
  Video,
  Layers,
  Send,
  BookOpen,
  ArrowUpRight,
  ShieldCheck,
  Radio,
  Sliders,
  Check
} from 'lucide-react';

export default function OllarStudios() {
  const {
    brand,
    assets,
    studioRentals,
    photographyServices,
    whyChooseUs,
    statistics,
    portfolio,
    testimonials,
    blogs
  } = OLLAR_STUDIOS_CONFIG;

  // Navigation & menu states
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Filter states
  const [portfolioFilter, setPortfolioFilter] = useState<string>('all');

  // Modal states
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [selectedStudioModal, setSelectedStudioModal] = useState<StudioRentalItem | null>(null);
  const [selectedServiceModal, setSelectedServiceModal] = useState<PhotographyServiceItem | null>(null);
  const [selectedBlogModal, setSelectedBlogModal] = useState<BlogItem | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Booking & Contact form state
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    bookingType: 'Studio Rental — Photography Studio',
    date: '',
    duration: 'Half Day (4 Hours)',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'studio-rentals',
        'services',
        'why-choose-us',
        'portfolio',
        'testimonials',
        'blogs',
        'contact'
      ];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % portfolio.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + portfolio.length) % portfolio.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, portfolio.length]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  // Filtered portfolio items
  const filteredPortfolio = portfolioFilter === 'all'
    ? portfolio
    : portfolio.filter((item) => {
        if (portfolioFilter === 'wedding') return item.category === 'wedding';
        if (portfolioFilter === 'pre-wedding') return item.category === 'pre-wedding';
        if (portfolioFilter === 'fashion') return item.category === 'fashion';
        if (portfolioFilter === 'product') return item.category === 'product';
        if (portfolioFilter === 'photography') return ['wedding', 'pre-wedding', 'fashion'].includes(item.category);
        if (portfolioFilter === 'podcast-studio') return item.category === 'podcast-studio';
        if (portfolioFilter === 'photography-studio') return item.category === 'photography-studio';
        return true;
      });

  return (
    <div
      className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* ==================== TOP NOTIFICATION BAR ==================== */}
      <div className="bg-slate-950 border-b border-slate-800 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="font-semibold text-white">Ollar Studios</span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">
              1,800 Sq. Ft. Photography &amp; Podcast Studio in Mulund (W), Mumbai
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={brand.contact.telLink}
              className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{brand.contact.displayPhone}</span>
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={brand.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>ollarstudios.com</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>
        </div>
      </div>

      {/* ==================== STICKY HEADER ==================== */}
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src={assets.logoDark}
              alt={brand.name}
              className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-5 text-xs font-semibold uppercase tracking-wider text-slate-300">
            <a
              href="#home"
              className={`transition-colors hover:text-blue-400 ${activeSection === 'home' ? 'text-blue-400 font-bold' : ''}`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`transition-colors hover:text-blue-400 ${activeSection === 'about' ? 'text-blue-400 font-bold' : ''}`}
            >
              About Us
            </a>
            <a
              href="#studio-rentals"
              className={`transition-colors hover:text-blue-400 ${activeSection === 'studio-rentals' ? 'text-blue-400 font-bold' : ''}`}
            >
              Studio Rental
            </a>
            <a
              href="#podcast-studio"
              className="transition-colors hover:text-blue-400"
            >
              Podcast Studio
            </a>
            <a
              href="#photography-studio"
              className="transition-colors hover:text-blue-400"
            >
              Photo Studio
            </a>
            <a
              href="#services"
              className={`transition-colors hover:text-blue-400 ${activeSection === 'services' ? 'text-blue-400 font-bold' : ''}`}
            >
              Photography Services
            </a>
            <a
              href="#portfolio"
              className={`transition-colors hover:text-blue-400 ${activeSection === 'portfolio' ? 'text-blue-400 font-bold' : ''}`}
            >
              Portfolio
            </a>
            <a
              href="#why-choose-us"
              className={`transition-colors hover:text-blue-400 ${activeSection === 'why-choose-us' ? 'text-blue-400 font-bold' : ''}`}
            >
              Why Choose Us
            </a>
            <a
              href="#testimonials"
              className={`transition-colors hover:text-blue-400 ${activeSection === 'testimonials' ? 'text-blue-400 font-bold' : ''}`}
            >
              Reviews
            </a>
            <a
              href="#blogs"
              className={`transition-colors hover:text-blue-400 ${activeSection === 'blogs' ? 'text-blue-400 font-bold' : ''}`}
            >
              Blogs
            </a>
            <a
              href="#contact"
              className={`transition-colors hover:text-blue-400 ${activeSection === 'contact' ? 'text-blue-400 font-bold' : ''}`}
            >
              Contact
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="px-4.5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-all shadow-md shadow-blue-600/30 flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Studio / Shoot</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 text-slate-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-slate-950 border-b border-slate-800 px-6 py-5 space-y-3">
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
              <a
                href="#home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-900 hover:text-blue-400"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-900 hover:text-blue-400"
              >
                About Us
              </a>
              <a
                href="#studio-rentals"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-900 hover:text-blue-400"
              >
                Studio Rental
              </a>
              <a
                href="#podcast-studio"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-900 hover:text-blue-400"
              >
                Podcast Studio
              </a>
              <a
                href="#photography-studio"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-900 hover:text-blue-400"
              >
                Photo Studio
              </a>
              <a
                href="#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-900 hover:text-blue-400"
              >
                Photography Services
              </a>
              <a
                href="#portfolio"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-900 hover:text-blue-400"
              >
                Portfolio
              </a>
              <a
                href="#why-choose-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-900 hover:text-blue-400"
              >
                Why Choose Us
              </a>
              <a
                href="#testimonials"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-900 hover:text-blue-400"
              >
                Reviews
              </a>
              <a
                href="#blogs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-900 hover:text-blue-400"
              >
                Blogs
              </a>
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsBookingModalOpen(true);
                }}
                className="w-full py-2.5 bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Studio / Shoot</span>
              </button>
              <a
                href={brand.contact.telLink}
                className="w-full py-2 text-center text-xs font-medium text-slate-300 hover:text-white"
              >
                Call: {brand.contact.displayPhone}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ==================== SECTION 6: HOMEPAGE HERO ==================== */}
      <section id="home" className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Gradient Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src={assets.heroBanner}
            alt="Ollar Studios — Premium Photography and Studio Rentals Mumbai"
            className="w-full h-full object-cover object-center filter brightness-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/65 to-slate-900/40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.85)_100%)]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
            Ollar Studios · Mulund (W), Mumbai
          </div>

          {/* Primary Headline from source */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Premium Photography &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-300">
              Studio Rentals in Mumbai
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
            Your one-stop creative destination in Mumbai. Offering 1,800 sq. ft. fully-equipped photography studio bays, acoustically treated podcast recording suites, and cinematic wedding, pre-wedding, fashion, and product photography.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button
              onClick={() => {
                setFormState((prev) => ({ ...prev, bookingType: 'Studio Rental — Photography Studio' }));
                setIsBookingModalOpen(true);
              }}
              className="px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-blue-600/30 flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <Building2 className="w-4 h-4" />
              <span>Book Studio Rental</span>
            </button>

            <a
              href="#services"
              className="px-7 py-3.5 bg-slate-800/90 hover:bg-slate-700 text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Camera className="w-4 h-4 text-blue-400" />
              <span>Explore Photography</span>
            </a>

            <a
              href={brand.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-emerald-700/80 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-emerald-600/50 transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="inline-grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-3xl mx-auto pt-8 border-t border-slate-800/80 text-left">
            <div>
              <div className="text-white text-sm font-bold">1,800 Sq. Ft.</div>
              <p className="text-xs text-slate-400">Mulund Creative Studio</p>
            </div>
            <div>
              <div className="text-white text-sm font-bold">Podcast Suites</div>
              <p className="text-xs text-slate-400">Acoustic Soundproofing</p>
            </div>
            <div>
              <div className="text-white text-sm font-bold">1,500+ Shoots</div>
              <p className="text-xs text-slate-400">Completed Since 2020</p>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400 text-sm font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>4.9 / 5.0</span>
              </div>
              <p className="text-xs text-slate-400">1,200+ Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 11: STATISTICS COUNTER STRIP ==================== */}
      <section className="bg-slate-950 border-y border-slate-800 py-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {statistics.map((stat, i) => (
              <div key={i} className={`pt-4 md:pt-0 ${i !== 0 ? 'md:pl-6' : ''}`}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-500 font-mono tracking-tight mb-1">
                  {stat.displayValue}
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Verified Ollar Studios Metric
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 7: WELCOME & ABOUT US ==================== */}
      <section id="about" className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                <img
                  src={assets.founderStudio}
                  alt="Siddharth Unkule — Founder of Ollar Studios"
                  className="w-full h-[430px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-700/60">
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Founder &amp; Creative Mind</span>
                  </div>
                  <p className="text-xs text-white font-bold mb-0.5">
                    Siddharth Unkule · Filmmaker &amp; Director
                  </p>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Passionate filmmaker with photography and cinematography roots since 2017, envisioning Ollar Studios as a sanctuary where creator stories come alive.
                  </p>
                </div>
              </div>

              {/* Float Established Badge */}
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-xl shadow-xl hidden sm:block">
                <div className="text-2xl font-black font-mono">EST. 2020</div>
                <div className="text-[10px] uppercase tracking-wider font-semibold">Mumbai Hub</div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-widest">
                <Building2 className="w-4 h-4" />
                <span>Welcome to Ollar Studios · Who we are!</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Your One-Stop Creative Destination in Mumbai
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Founded in 2020 by filmmaker Siddharth Unkule, Ollar Studios is built around a singular idea: providing visual and audio creators in Mumbai with world-class facilities and seasoned cinematography craftsmanship under one roof.
              </p>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Whether you need a fully controlled 1,800 sq. ft. studio bay for a fashion lookbook or e-commerce catalog, a soundproof podcast recording suite for high-profile guest vodcasts, or full-scale wedding coverage through Ollar Weds, our experienced team blends artistic vision with technical precision.
              </p>

              {/* Key Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-1.5">
                    <Video className="w-4 h-4" />
                    <span>Cinematic Expertise</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Experienced photographers and cinematographers trained in storytelling, ritual nuances, and commercial lighting aesthetics.
                  </p>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-1.5">
                    <Building2 className="w-4 h-4" />
                    <span>Premium Studio Rentals</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Flexible hourly and daily rental packages with strobe lights, motorized seamless paper, chroma wall, and vanity room.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#studio-rentals"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
                >
                  <span>Explore Studio Rentals</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#services"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors"
                >
                  View Photography Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 8: STUDIO RENTAL SERVICES ==================== */}
      <section id="studio-rentals" className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <Building2 className="w-4 h-4" />
              <span>Controlled Creative Environments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Premium Studio Rentals
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Flexible studio rental options in Mulund (W) for visual creators, photographers, and audio broadcasters. Rent by the hour or book full-day packages.
            </p>
          </div>

          {/* 2 Studio Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Photography Studio */}
            <div
              id="photography-studio"
              className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div>
                <div className="h-64 sm:h-72 overflow-hidden relative bg-slate-950">
                  <img
                    src={studioRentals[0].image}
                    alt={studioRentals[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded bg-slate-950/80 backdrop-blur-xs text-xs font-semibold uppercase tracking-wider text-blue-300 border border-slate-800">
                    1,800 Sq. Ft. Floor Area
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold mb-1">
                    Visual Production Floor
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {studioRentals[0].title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {studioRentals[0].description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Facility Amenities:
                    </span>
                    {studioRentals[0].features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Ideal For:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {studioRentals[0].idealFor.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded bg-slate-950 text-[11px] text-slate-300 border border-slate-800"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-800">
                  <button
                    onClick={() => setSelectedStudioModal(studioRentals[0])}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Learn More Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      setFormState((prev) => ({ ...prev, bookingType: 'Studio Rental — Photography Studio' }));
                      setIsBookingModalOpen(true);
                    }}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                  >
                    Book Photo Studio
                  </button>
                </div>
              </div>
            </div>

            {/* Podcast Studio */}
            <div
              id="podcast-studio"
              className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div>
                <div className="h-64 sm:h-72 overflow-hidden relative bg-slate-950">
                  <img
                    src={studioRentals[1].image}
                    alt={studioRentals[1].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded bg-slate-950/80 backdrop-blur-xs text-xs font-semibold uppercase tracking-wider text-blue-300 border border-slate-800">
                    Acoustically Soundproofed
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold mb-1">
                    Audio &amp; Vodcast Suite
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {studioRentals[1].title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {studioRentals[1].description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Facility Amenities:
                    </span>
                    {studioRentals[1].features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Ideal For:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {studioRentals[1].idealFor.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded bg-slate-950 text-[11px] text-slate-300 border border-slate-800"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-800">
                  <button
                    onClick={() => setSelectedStudioModal(studioRentals[1])}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Learn More Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      setFormState((prev) => ({ ...prev, bookingType: 'Studio Rental — Podcast Studio' }));
                      setIsBookingModalOpen(true);
                    }}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                  >
                    Book Podcast Suite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 9: PHOTOGRAPHY SERVICES ==================== */}
      <section id="services" className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <Camera className="w-4 h-4" />
              <span>Full-Spectrum Production</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Professional Photography Services in Mumbai
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Capturing milestones and commercial campaigns through artistic wedding photojournalism, romantic pre-weddings, dynamic fashion lookbooks, and high-detail product catalogs.
            </p>
          </div>

          {/* 4 Core Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {photographyServices.map((service) => (
              <div
                key={service.id}
                className="bg-slate-950 rounded-2xl border border-slate-800 hover:border-slate-700 overflow-hidden flex flex-col justify-between transition-all group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
              >
                <div>
                  <div className="h-52 overflow-hidden relative bg-slate-900">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-slate-900/80 backdrop-blur-xs text-[10px] font-semibold uppercase tracking-wider text-blue-300 border border-slate-800">
                      {service.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-slate-900">
                      {service.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] text-slate-300">
                          <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-900">
                    <button
                      onClick={() => setSelectedServiceModal(service)}
                      className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => {
                        setFormState((prev) => ({ ...prev, bookingType: `Photography — ${service.title}` }));
                        setIsBookingModalOpen(true);
                      }}
                      className="px-3 py-1.5 bg-slate-800 hover:bg-blue-600 text-white text-[11px] font-medium rounded-lg transition-colors cursor-pointer"
                    >
                      Book Shoot
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold uppercase tracking-wider rounded-lg border border-slate-700 transition-colors"
            >
              <span>View All Portfolio Work</span>
              <ArrowDown className="w-3.5 h-3.5 text-blue-400" />
            </a>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 10: WHY CHOOSE US ==================== */}
      <section id="why-choose-us" className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>The Ollar Studios Advantage</span>
            </div>
            {/* Preserving exact source heading spelling */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              Why Chooes us?
            </h2>
            <h3 className="text-base text-blue-400 font-semibold mb-4">
              Why People Love Working With Us:
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              We empower creators and couples with fully managed shoot spaces, high-end production cameras, transparent hourly rental policies, and creative styling guidance.
            </p>
          </div>

          {/* 4 Benefit Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((benefit, i) => (
              <div
                key={i}
                className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-blue-500/50 flex items-center justify-center text-blue-400 mb-5 transition-colors">
                  {i === 0 ? <Sparkles className="w-6 h-6" /> :
                   i === 1 ? <Video className="w-6 h-6" /> :
                   i === 2 ? <Sliders className="w-6 h-6" /> :
                   <MapPin className="w-6 h-6" />}
                </div>
                <div className="text-[11px] font-mono text-blue-400 font-semibold uppercase tracking-wider mb-1">
                  {benefit.subtitle}
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {benefit.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mulund Central Location Callout */}
          <div className="mt-12 bg-slate-900 rounded-2xl border border-slate-800 p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 shrink-0">
              <MapPin className="w-7 h-7" />
            </div>
            <div className="grow text-center md:text-left">
              <h4 className="text-base font-bold text-white mb-1">
                Centrally Located Creative Hub in Mulund West, Mumbai
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Office Number 26, Ashok Industrial Co-op Society, Near Marathon Galaxy, L.B.S. Marg, Mulund (W). Seamless highway connectivity from South Mumbai, Western suburbs, and Thane.
              </p>
            </div>
            <a
              href={brand.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg border border-slate-700 flex items-center gap-2 shrink-0"
            >
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 12: WORK PORTFOLIO ==================== */}
      <section id="portfolio" className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
                <Eye className="w-4 h-4" />
                <span>Showcase Portfolio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
                See Our Work Portfolio
              </h2>
              <p className="text-sm text-slate-400 max-w-xl">
                Explore our portfolio of wedding celebrations, romantic pre-weddings, high-fashion campaigns, commercial product catalogs, and podcast studio recordings.
              </p>
            </div>

            {/* Filter Pills matching captured source */}
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: 'all', label: 'All' },
                { id: 'wedding', label: 'Wedding' },
                { id: 'pre-wedding', label: 'Pre-Wedding' },
                { id: 'fashion', label: 'Fashion' },
                { id: 'product', label: 'Product' },
                { id: 'photography', label: 'Photography' },
                { id: 'podcast-studio', label: 'Podcast Studio' },
                { id: 'photography-studio', label: 'Photography Studio' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setPortfolioFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    portfolioFilter === tab.id
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item) => {
              const originalIndex = portfolio.findIndex((p) => p.id === item.id);

              return (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(originalIndex)}
                  className="group relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60"
                >
                  <div className="h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur-xs text-[10px] font-mono font-semibold uppercase tracking-wider text-blue-300 border border-slate-800">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Expand Trigger */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-300 group-hover:text-blue-400 group-hover:scale-110 transition-all">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Bottom Text */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[11px] font-mono text-blue-400 font-semibold mb-0.5">
                      {item.title}
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors mb-1">
                      {item.label}
                    </h4>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 13: CLIENT TESTIMONIALS ==================== */}
      <section id="testimonials" className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <Star className="w-4 h-4 fill-blue-400 text-blue-400" />
              <span>Client Testimonials</span>
            </div>
            {/* Captured heading */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              What Our Clients Say About Us
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Real feedback from couples who celebrated their weddings with Ollar Weds, brands who shot campaigns in our photo bays, and creators who host podcasts in our soundproof studio.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-slate-900 p-6 rounded-2xl border border-slate-800 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="px-2.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-semibold uppercase tracking-wider text-blue-400">
                      {test.serviceUsed}
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                    "{test.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <h5 className="text-sm font-bold text-white">{test.name}</h5>
                    <p className="text-xs text-slate-400">{test.clientRole}</p>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 14: LATEST BLOGS ==================== */}
      <section id="blogs" className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <BookOpen className="w-4 h-4" />
              <span>Studio Insights &amp; Guides</span>
            </div>
            {/* Captured heading */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              Latest Blogs
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Read practical advice from our Mumbai studio producers on podcast guest booking, studio rental checklists, and branded content creation.
            </p>
          </div>

          {/* 3 Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between group hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="h-48 overflow-hidden bg-slate-900 relative">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-xs text-[10px] font-semibold uppercase tracking-wider text-blue-300 border border-slate-800">
                      {blog.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-2 font-mono">
                      <span>{blog.date}</span>
                      <span>·</span>
                      <span>{blog.readTime}</span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors mb-2 line-clamp-2">
                      {blog.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {blog.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-slate-900 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedBlogModal(blog)}
                      className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={`https://ollarstudios.com/${blog.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-slate-500 hover:text-slate-300 flex items-center gap-1"
                      title="Open blog on original site"
                    >
                      <span>Original</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 15: CONTACT & BOOKING ==================== */}
      <section id="contact" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
                  <Phone className="w-4 h-4" />
                  <span>Start A Project</span>
                </div>
                {/* Captured source heading */}
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                  Let’s Create Something Beautiful Together
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Whether you are planning a wedding celebration, fashion lookbook, or looking to rent our 1,800 sq. ft. photo studio or podcast recording room in Mumbai, our studio team is here to assist you.
                </p>
              </div>

              {/* Working Contact Cards */}
              <div className="space-y-4">
                <a
                  href={brand.contact.telLink}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Direct Studio Line</div>
                    <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                      {brand.contact.displayPhone}
                    </div>
                    <div className="text-[11px] text-slate-500">Call for immediate slot checking</div>
                  </div>
                </a>

                <a
                  href={brand.contact.mailtoLink}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Inquiry</div>
                    <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                      {brand.contact.email}
                    </div>
                    <div className="text-[11px] text-slate-500">Prompt responses for quotes &amp; briefs</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Mumbai Studio Address</div>
                    <div className="text-xs font-medium text-white leading-relaxed mt-0.5">
                      {brand.contact.address}
                    </div>
                    <a
                      href={brand.contact.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-blue-400 hover:underline mt-1 inline-flex items-center gap-1"
                    >
                      View on Google Maps <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Operating Monday – Sunday: 9:00 AM – 9:00 PM (24/7 Studio Bookings on Request)</span>
              </div>
            </div>

            {/* Interactive Booking Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-2">
                  Check Studio Availability &amp; Request Quote
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Select your required service or studio rental slot. We will confirm calendar availability promptly.
                </p>

                {formSubmitted ? (
                  <div className="p-6 bg-slate-950 border border-emerald-800/50 rounded-xl text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-600/50 flex items-center justify-center text-emerald-400 mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-white">Inquiry Prepared Successfully!</h4>
                    <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-white">{formState.name}</span>! Your inquiry for <span className="text-blue-400 font-semibold">{formState.bookingType}</span> has been logged.
                    </p>
                    <div className="p-3 bg-slate-900 rounded-lg text-xs text-slate-400 text-left space-y-1">
                      <div><strong className="text-white">Phone:</strong> {formState.phone}</div>
                      <div><strong className="text-white">Preferred Date:</strong> {formState.date || 'To be scheduled'}</div>
                      <div><strong className="text-white">Duration / Scope:</strong> {formState.duration}</div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <a
                        href={`https://wa.me/919004344101?text=Hello%20Ollar%20Studios,%20I%20am%20${encodeURIComponent(formState.name)}.%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(formState.bookingType)}%20on%20${encodeURIComponent(formState.date || 'upcoming%20date')}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send via WhatsApp (+91 9004344101)</span>
                      </a>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="w-full sm:w-auto px-4 py-2 text-xs text-slate-400 hover:text-white"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="e.g. Siddharth Joshi"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-hidden focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          placeholder="e.g. +91 98200 12345"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-hidden focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                          Service or Studio Type *
                        </label>
                        <select
                          value={formState.bookingType}
                          onChange={(e) => setFormState({ ...formState, bookingType: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-blue-500"
                        >
                          <option value="Studio Rental — Photography Studio">Studio Rental — Photography Studio (1800 Sq. Ft.)</option>
                          <option value="Studio Rental — Podcast Studio">Studio Rental — Podcast Studio</option>
                          <option value="Photography — Wedding Photography">Photography — Wedding Photography</option>
                          <option value="Photography — Pre wedding Photography">Photography — Pre wedding Photography</option>
                          <option value="Photography — Fashion Photography">Photography — Fashion Photography</option>
                          <option value="Photography — Product Photography">Photography — Product Photography</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={formState.date}
                          onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Duration / Scope
                      </label>
                      <select
                        value={formState.duration}
                        onChange={(e) => setFormState({ ...formState, duration: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-blue-500"
                      >
                        <option value="2-3 Hours Recording / Shoot">2-3 Hours Recording / Shoot</option>
                        <option value="Half Day (4 Hours)">Half Day (4 Hours)</option>
                        <option value="Full Day (8 Hours)">Full Day (8 Hours)</option>
                        <option value="Multi-Day Production / Wedding">Multi-Day Production / Wedding</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Specific Requirements / Setup Details
                      </label>
                      <textarea
                        rows={3}
                        value={formState.notes}
                        onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                        placeholder="Tell us about equipment needs, lighting requirements, mics count, or shoot vision..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-hidden focus:border-blue-500"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {formSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Checking Calendar Availability...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Booking Request</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-slate-950 border-t border-slate-800 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Col 1: Brand & Manifesto */}
            <div>
              <div className="mb-4">
                <img src={assets.logoDark} alt={brand.name} className="h-10 w-auto" />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                At Ollar Studios, we capture your best moments and ideas — from wedding shoots to product photography, and also offer fully-equipped photo and podcast studios on rent in Mumbai.
              </p>
              <div className="text-xs text-slate-500">
                Official Website:{' '}
                <a
                  href={brand.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  ollarstudios.com
                </a>
              </div>
            </div>

            {/* Col 2: Photography Services */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                Photography Services
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <a href="#services" className="hover:text-blue-400 transition-colors">
                    Wedding Photography
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-blue-400 transition-colors">
                    Pre-wedding Shoots
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-blue-400 transition-colors">
                    Fashion Photography
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-blue-400 transition-colors">
                    Product Photography
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Studio Rentals */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                Studio Rentals
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <a href="#photography-studio" className="hover:text-blue-400 transition-colors">
                    Photography Studio (1,800 Sq. Ft.)
                  </a>
                </li>
                <li>
                  <a href="#podcast-studio" className="hover:text-blue-400 transition-colors">
                    Podcast Production Studio
                  </a>
                </li>
                <li>
                  <a href="#studio-rentals" className="hover:text-blue-400 transition-colors">
                    Chroma Video Shoot Bay
                  </a>
                </li>
                <li>
                  <a href="#studio-rentals" className="hover:text-blue-400 transition-colors">
                    Vanity Room &amp; Changing Bay
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Quick Links & Contact */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                Studio Office
              </h4>
              <address className="not-italic text-xs text-slate-400 space-y-2">
                <p>{brand.contact.address}</p>
                <p>
                  <strong className="text-slate-300">Phone:</strong>{' '}
                  <a href={brand.contact.telLink} className="text-blue-400 hover:underline">
                    {brand.contact.displayPhone}
                  </a>
                </p>
                <p>
                  <strong className="text-slate-300">Email:</strong>{' '}
                  <a href={brand.contact.mailtoLink} className="text-blue-400 hover:underline">
                    {brand.contact.email}
                  </a>
                </p>
              </address>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © 2026 Ollar Studio. All Rights Reserved.
            </div>
            <div className="flex items-center gap-4">
              <a href="#home" className="hover:text-slate-300">Back to Top ↑</a>
              <span>·</span>
              <a
                href={brand.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white flex items-center gap-1"
              >
                <span>Original Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ==================== FLOATING ACTIONS ==================== */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5">
        <a
          href={brand.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 flex items-center justify-center transition-transform hover:scale-110"
          title="Chat with Ollar Studios on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href={brand.contact.telLink}
          className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/30 flex items-center justify-center transition-transform hover:scale-110"
          title="Call +91 9004344101"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* ==================== LIGHTBOX MODAL ==================== */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={() => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + portfolio.length) % portfolio.length : null))}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % portfolio.length : null))}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={portfolio[lightboxIndex].image}
              alt={portfolio[lightboxIndex].title}
              className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center max-w-xl">
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider">
                {portfolio[lightboxIndex].categoryLabel} · {portfolio[lightboxIndex].title} · {lightboxIndex + 1} of {portfolio.length}
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                {portfolio[lightboxIndex].label}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {portfolio[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ==================== STUDIO RENTAL DETAIL MODAL ==================== */}
      {selectedStudioModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl">
            <div className="h-52 relative">
              <img
                src={selectedStudioModal.image}
                alt={selectedStudioModal.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedStudioModal(null)}
                className="absolute top-3 right-3 text-white bg-black/60 hover:bg-black/80 p-1.5 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider font-semibold">
                {selectedStudioModal.dimensions}
              </span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">
                {selectedStudioModal.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {selectedStudioModal.description}
              </p>

              <div className="space-y-2 mb-6">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Included Amenities:
                </span>
                {selectedStudioModal.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setSelectedStudioModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedStudioModal.title;
                    setSelectedStudioModal(null);
                    setFormState((prev) => ({ ...prev, bookingType: `Studio Rental — ${title}` }));
                    setIsBookingModalOpen(true);
                  }}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider rounded-lg"
                >
                  Book This Space
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== SERVICE DETAIL MODAL ==================== */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl">
            <div className="h-52 relative">
              <img
                src={selectedServiceModal.image}
                alt={selectedServiceModal.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="absolute top-3 right-3 text-white bg-black/60 hover:bg-black/80 p-1.5 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider font-semibold">
                {selectedServiceModal.category}
              </span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">
                {selectedServiceModal.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {selectedServiceModal.description}
              </p>

              <div className="space-y-2 mb-6">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Service Inclusions:
                </span>
                {selectedServiceModal.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-blue-400" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setSelectedServiceModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedServiceModal.title;
                    setSelectedServiceModal(null);
                    setFormState((prev) => ({ ...prev, bookingType: `Photography — ${title}` }));
                    setIsBookingModalOpen(true);
                  }}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider rounded-lg"
                >
                  Request Shoot Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== BLOG MODAL ==================== */}
      {selectedBlogModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-4 shadow-2xl relative">
            <button
              onClick={() => setSelectedBlogModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
              {selectedBlogModal.category} · {selectedBlogModal.date}
            </span>

            <h3 className="text-xl font-bold text-white">
              {selectedBlogModal.title}
            </h3>

            <div className="rounded-xl overflow-hidden h-48 bg-slate-950">
              <img
                src={selectedBlogModal.image}
                alt={selectedBlogModal.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedBlogModal.summary}
            </p>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400 leading-relaxed">
              Ollar Studios provides acoustically treated recording rooms, professional dynamic microphones, 4K multi-camera video vodcast angles, and in-house audio mixing support for podcasters across Mumbai.
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-800">
              <a
                href={`https://ollarstudios.com/${selectedBlogModal.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>Read Full Article on ollarstudios.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={() => {
                  setSelectedBlogModal(null);
                  setFormState((prev) => ({ ...prev, bookingType: 'Studio Rental — Podcast Studio' }));
                  setIsBookingModalOpen(true);
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg"
              >
                Book Podcast Room
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================== QUICK INQUIRY MODAL ==================== */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-1">
              <Calendar className="w-4 h-4" />
              <span>Ollar Studios Booking</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">
              Check Date &amp; Rental Slot
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              Mulund West, Mumbai · Tel: +91 9004344101
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsBookingModalOpen(false);
                setFormSubmitted(true);
                const contactEl = document.getElementById('contact');
                if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="space-y-3.5"
            >
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Tanmay Bhatia"
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  placeholder="e.g. +91 98200 54321"
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                  Booking Requirement *
                </label>
                <select
                  value={formState.bookingType}
                  onChange={(e) => setFormState({ ...formState, bookingType: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-blue-500"
                >
                  <option value="Studio Rental — Photography Studio">Studio Rental — Photography Studio (1800 Sq. Ft.)</option>
                  <option value="Studio Rental — Podcast Studio">Studio Rental — Podcast Studio</option>
                  <option value="Photography — Wedding Photography">Photography — Wedding Photography</option>
                  <option value="Photography — Pre wedding Photography">Photography — Pre wedding Photography</option>
                  <option value="Photography — Fashion Photography">Photography — Fashion Photography</option>
                  <option value="Photography — Product Photography">Photography — Product Photography</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={formState.date}
                    onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                    Duration
                  </label>
                  <select
                    value={formState.duration}
                    onChange={(e) => setFormState({ ...formState, duration: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-blue-500"
                  >
                    <option value="2-3 Hours">2-3 Hours</option>
                    <option value="Half Day (4h)">Half Day (4h)</option>
                    <option value="Full Day (8h)">Full Day (8h)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Check Slot Availability</span>
              </button>

              <div className="text-center pt-2">
                <a
                  href={brand.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Or Message Directly on WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
