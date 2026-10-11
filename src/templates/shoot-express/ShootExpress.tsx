import React, { useState, useEffect } from 'react';
import {
  SHOOT_EXPRESS_CONFIG,
  OccasionItem,
  PortfolioItem
} from './shoot-express.config';
import {
  Camera,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CheckCircle2,
  Star,
  ChevronDown,
  ChevronUp,
  X,
  Menu,
  ExternalLink,
  MessageCircle,
  ArrowRight,
  Award,
  Zap,
  Tag,
  Clock,
  CheckCircle,
  Building2,
  Users,
  Compass,
  Maximize2,
  ArrowUpRight,
  Shield,
  HelpCircle,
  Send,
  Eye,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function ShootExpress() {
  const { brand, assets, statistics, occasions, portfolio, whyChooseUs, faqs, locationsServed, reviews, publications } = SHOOT_EXPRESS_CONFIG;

  // Navigation state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Filter state for occasions & portfolio
  const [occasionFilter, setOccasionFilter] = useState<string>('all');
  const [portfolioFilter, setPortfolioFilter] = useState<string>('all');

  // Modal states
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [selectedOccasion, setSelectedOccasion] = useState<OccasionItem | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  // Accordion state for FAQs
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Contact form state
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    occasion: 'Wedding Photography',
    date: '',
    location: 'Powai / Andheri East',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'occasions', 'why-us', 'portfolio', 'reviews', 'faqs', 'locations', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
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

  const filteredOccasions = occasionFilter === 'all'
    ? occasions
    : occasions.filter((o) => {
        if (occasionFilter === 'celebration') return ['wedding', 'candid', 'event', 'family'].includes(o.id);
        if (occasionFilter === 'commercial') return ['food', 'product', 'interior'].includes(o.id);
        if (occasionFilter === 'portrait') return ['maternity', 'fashion', 'family', 'candid'].includes(o.id);
        return true;
      });

  const filteredPortfolio = portfolioFilter === 'all'
    ? portfolio
    : portfolio.filter((p) => p.tag.toLowerCase() === portfolioFilter.toLowerCase());

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased selection:bg-rose-600 selection:text-white">
      {/* Top Notification Bar / Source Transparency */}
      <div className="bg-slate-950 border-b border-slate-800 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            <span className="font-medium text-white">Shoot Express Photography</span>
            <span className="text-slate-500 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">Mumbai's Premier Photography & Videography Studio</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={brand.contact.telLink}
              className="flex items-center gap-1.5 text-rose-400 hover:text-rose-300 transition-colors font-medium"
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
              <span>shootexpress.com</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src={assets.logoDark}
              alt={brand.name}
              className="h-11 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-slate-300">
            <a
              href="#home"
              className={`transition-colors hover:text-rose-400 ${activeSection === 'home' ? 'text-rose-400' : ''}`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`transition-colors hover:text-rose-400 ${activeSection === 'about' ? 'text-rose-400' : ''}`}
            >
              About
            </a>
            <a
              href="#occasions"
              className={`transition-colors hover:text-rose-400 ${activeSection === 'occasions' ? 'text-rose-400' : ''}`}
            >
              Occasions
            </a>
            <a
              href="#why-us"
              className={`transition-colors hover:text-rose-400 ${activeSection === 'why-us' ? 'text-rose-400' : ''}`}
            >
              Why Choose Us
            </a>
            <a
              href="#portfolio"
              className={`transition-colors hover:text-rose-400 ${activeSection === 'portfolio' ? 'text-rose-400' : ''}`}
            >
              Portfolio
            </a>
            <a
              href="#reviews"
              className={`transition-colors hover:text-rose-400 ${activeSection === 'reviews' ? 'text-rose-400' : ''}`}
            >
              Reviews
            </a>
            <a
              href="#faqs"
              className={`transition-colors hover:text-rose-400 ${activeSection === 'faqs' ? 'text-rose-400' : ''}`}
            >
              FAQs
            </a>
            <a
              href="#locations"
              className={`transition-colors hover:text-rose-400 ${activeSection === 'locations' ? 'text-rose-400' : ''}`}
            >
              Locations
            </a>
            <a
              href="#contact"
              className={`transition-colors hover:text-rose-400 ${activeSection === 'contact' ? 'text-rose-400' : ''}`}
            >
              Contact
            </a>
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsInquiryModalOpen(true)}
              className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-all shadow-md shadow-rose-600/30 flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Shoot</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white focus:outline-hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-6 py-5 space-y-3">
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
              <a
                href="#home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-900 hover:text-rose-400"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-900 hover:text-rose-400"
              >
                About Us
              </a>
              <a
                href="#occasions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-900 hover:text-rose-400"
              >
                Occasions
              </a>
              <a
                href="#why-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-900 hover:text-rose-400"
              >
                Why Choose Us
              </a>
              <a
                href="#portfolio"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-900 hover:text-rose-400"
              >
                Portfolio
              </a>
              <a
                href="#reviews"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-900 hover:text-rose-400"
              >
                Reviews
              </a>
              <a
                href="#faqs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-900 hover:text-rose-400"
              >
                FAQs
              </a>
              <a
                href="#locations"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-900 hover:text-rose-400"
              >
                Locations
              </a>
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsInquiryModalOpen(true);
                }}
                className="w-full py-2.5 bg-rose-600 text-white text-xs font-semibold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Shoot Inquiry</span>
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

      {/* SECTION A: HERO */}
      <section id="home" className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src={assets.heroBanner}
            alt="Shoot Express Photography Mumbai"
            className="w-full h-full object-cover object-center filter brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.85)_100%)]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/80 border border-rose-800/60 text-rose-300 text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
            {brand.brandHeading}
          </div>

          {/* Main H1 Headline from source */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Best Photographer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-500 to-amber-300">
              In Mumbai
            </span>
          </h1>

          {/* Supporting Copy from source */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            {brand.subHeading}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button
              onClick={() => setIsInquiryModalOpen(true)}
              className="px-7 py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-rose-600/30 flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book A Photoshoot</span>
            </button>

            <a
              href="#portfolio"
              className="px-7 py-3.5 bg-slate-800/90 hover:bg-slate-700 text-white font-semibold text-sm uppercase tracking-wider rounded-xl border border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Eye className="w-4 h-4 text-rose-400" />
              <span>Explore Portfolio</span>
            </a>

            <a
              href={brand.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-emerald-700/80 hover:bg-emerald-600 text-white font-semibold text-sm uppercase tracking-wider rounded-xl border border-emerald-600/50 transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Quick Chat</span>
            </a>
          </div>

          {/* Key Trust Metrics Strip */}
          <div className="inline-grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-3xl mx-auto pt-8 border-t border-slate-800/80 text-left">
            <div>
              <div className="flex items-center gap-1 text-amber-400 text-sm font-bold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>4.9 / 5.0</span>
              </div>
              <p className="text-xs text-slate-400">870+ Verified Reviews</p>
            </div>
            <div>
              <div className="text-white text-sm font-bold">7+ Years</div>
              <p className="text-xs text-slate-400">Established in 2018</p>
            </div>
            <div>
              <div className="text-white text-sm font-bold">7,120+</div>
              <p className="text-xs text-slate-400">Functions Covered</p>
            </div>
            <div>
              <div className="text-white text-sm font-bold">Indoor Studio</div>
              <p className="text-xs text-slate-400">Powai, Mumbai</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E: STATISTICS STRIP */}
      <section className="bg-slate-950 border-y border-slate-800 py-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {statistics.map((stat, i) => (
              <div key={i} className={`pt-4 md:pt-0 ${i !== 0 ? 'md:pl-6' : ''}`}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-rose-500 font-mono tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Verified Shoot Express Milestones
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION B: ABOUT US */}
      <section id="about" className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                <img
                  src={assets.studioIndoor}
                  alt="Shoot Express Indoor Studio Powai Mumbai"
                  className="w-full h-[420px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-700/60">
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Indoor Shoot Facility</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Oberoi Garden Estate, Chandivali Farm Road, Powai, Mumbai — equipped with calibrated backdrops, modifiers, and cinema rigs.
                  </p>
                </div>
              </div>

              {/* Float Experience Tag */}
              <div className="absolute -top-4 -right-4 bg-rose-600 text-white p-4 rounded-xl shadow-xl hidden sm:block">
                <div className="text-2xl font-black font-mono">7+ YRS</div>
                <div className="text-[10px] uppercase tracking-wider font-semibold">Excellence</div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-widest mb-3">
                <Camera className="w-4 h-4" />
                <span>Shoot Express Mumbai</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
                About Us
              </h2>

              <p className="text-slate-300 text-base leading-relaxed mb-5">
                Shoot Express is a leading professional photography and videography company based in Mumbai. We are driven by a singular mission: to capture our clients’ most meaningful moments with emotional depth, artistic clarity, and technical precision.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                From joyous wedding rituals and spontaneous candid smiles to creative maternity sessions, family portraits, culinary styling, and PR-ready corporate conferences, our experienced team of 70+ photographers and videographers combines documentary sensitivity with high-end camera technology.
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-rose-950/60 border border-rose-800/40 flex items-center justify-center text-rose-400 mb-3">
                    <Users className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">70+ Specialists</h4>
                  <p className="text-[11px] text-slate-400">Candid photographers, drone pilots, and editors.</p>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-rose-950/60 border border-rose-800/40 flex items-center justify-center text-rose-400 mb-3">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Cinema Gear</h4>
                  <p className="text-[11px] text-slate-400">Full-frame bodies, prime glass, and 3-axis gimbals.</p>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-rose-950/60 border border-rose-800/40 flex items-center justify-center text-rose-400 mb-3">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">After-Shoot Care</h4>
                  <p className="text-[11px] text-slate-400">Album design, retouching, and secure delivery.</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsInquiryModalOpen(true)}
                  className="px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Connect With Our Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="#occasions"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors"
                >
                  Explore Occasions Covered
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: OCCASIONS COVERED BY US */}
      <section id="occasions" className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <Camera className="w-4 h-4" />
              <span>Full-Spectrum Visual Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Occasions Covered By Us
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Every occasion holds a distinctive cadence. From grand wedding celebrations and gentle maternity glows to commercial food and interior shoots, we deliver focused visual storytelling.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {[
                { id: 'all', label: 'All 9 Categories' },
                { id: 'celebration', label: 'Weddings & Celebrations' },
                { id: 'portrait', label: 'Portraits & Family' },
                { id: 'commercial', label: 'Commercial & Interiors' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setOccasionFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                    occasionFilter === tab.id
                      ? 'bg-rose-600 text-white font-semibold shadow-sm'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Occasions 3x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOccasions.map((occasion) => (
              <div
                key={occasion.id}
                className="bg-slate-900 rounded-2xl border border-slate-800 hover:border-slate-700 overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
              >
                <div>
                  {/* Card Thumbnail */}
                  <div className="h-56 overflow-hidden relative bg-slate-950">
                    <img
                      src={occasion.image}
                      alt={occasion.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-xs text-[10px] font-semibold uppercase tracking-wider text-rose-300 border border-slate-800">
                      {occasion.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors mb-2">
                      {occasion.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {occasion.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                      {occasion.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 pt-0">
                  <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-800">
                    <button
                      onClick={() => setSelectedOccasion(occasion)}
                      className="text-xs font-semibold text-rose-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => {
                        setFormState((prev) => ({ ...prev, occasion: occasion.title }));
                        setIsInquiryModalOpen(true);
                      }}
                      className="px-3 py-1.5 bg-slate-800 hover:bg-rose-600 text-white text-[11px] font-medium rounded-lg transition-colors cursor-pointer"
                    >
                      Book This
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Extended services banner */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-rose-950/40 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                Looking for pre-wedding, jewellery or architectural photography?
              </h4>
              <p className="text-xs text-slate-400">
                Shoot Express also offers pre-wedding films, jewellery macro shoots, corporate headshots, and architectural coverage across Mumbai.
              </p>
            </div>
            <button
              onClick={() => setIsInquiryModalOpen(true)}
              className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors shrink-0 cursor-pointer"
            >
              Request Custom Package
            </button>
          </div>
        </div>
      </section>

      {/* SECTION D: WHY CHOOSE US */}
      <section id="why-us" className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <Shield className="w-4 h-4" />
              <span>The Shoot Express Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Why Choose Us
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              We stand apart through comprehensive in-house facilities, trained creative personnel, competitive pricing, and attentive after-shoot album design.
            </p>
          </div>

          {/* 6 Benefit Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((benefit, i) => {
              const IconComponent =
                benefit.icon === 'Camera' ? Camera :
                benefit.icon === 'Award' ? Award :
                benefit.icon === 'Tag' ? Tag :
                benefit.icon === 'Clock' ? Clock :
                benefit.icon === 'CheckCircle' ? CheckCircle : Zap;

              return (
                <div
                  key={i}
                  className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-rose-500/50 flex items-center justify-center text-rose-400 mb-5 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-[11px] font-mono text-rose-400 font-semibold uppercase tracking-wider mb-1">
                    {benefit.subtitle}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-rose-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Indoor facility callout */}
          <div className="mt-12 bg-slate-950 rounded-2xl border border-slate-800 p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-rose-950/80 border border-rose-800/60 flex items-center justify-center text-rose-400 shrink-0">
              <Building2 className="w-7 h-7" />
            </div>
            <div className="grow text-center md:text-left">
              <h4 className="text-base font-bold text-white mb-1">
                Dedicated Indoor Shoot Facility in Chandivali-Powai
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Need controlled studio lighting for maternity, newborns, food, jewellery, or executive headshots? Visit our studio at Office No. 3146, Oberoi Garden Estate, Chandivali Farm Road, Powai.
              </p>
            </div>
            <a
              href={brand.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg border border-slate-700 flex items-center gap-2 shrink-0"
            >
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION F: PHOTOGRAPHY PORTFOLIO */}
      <section id="portfolio" className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-widest mb-3">
                <Eye className="w-4 h-4" />
                <span>Original Works & Showcases</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
                Photography Portfolio
              </h2>
              <p className="text-sm text-slate-400 max-w-xl">
                Browse our labeled showcases including wedding couples, maternity, newborn, food, corporate events, jewellery, and architectural spaces.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: 'all', label: 'All Works' },
                { id: 'weddings', label: 'Weddings' },
                { id: 'maternity', label: 'Maternity' },
                { id: 'baby', label: 'Baby' },
                { id: 'family', label: 'Family' },
                { id: 'product', label: 'Jewellery' },
                { id: 'food', label: 'Food' },
                { id: 'corporate', label: 'Corporate' },
                { id: 'fashion', label: 'Fashion' },
                { id: 'interior', label: 'Interior' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setPortfolioFilter(tab.id)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                    portfolioFilter === tab.id
                      ? 'bg-rose-600 text-white font-semibold'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Masonry / 3x3 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item, idx) => {
              const originalIndex = portfolio.findIndex((p) => p.id === item.id);

              return (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(originalIndex)}
                  className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60"
                >
                  <div className="h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-xs text-[10px] font-mono font-semibold uppercase tracking-wider text-rose-300 border border-slate-800">
                      {item.category}
                    </span>
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-950/80 border border-slate-800 flex items-center justify-center text-slate-300 group-hover:text-rose-400 group-hover:scale-110 transition-all">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Bottom Captions */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-base font-bold text-white group-hover:text-rose-300 transition-colors mb-1">
                      {item.title}
                    </h3>
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

      {/* SECTION G: REVIEWS & AS SEEN ON */}
      <section id="reviews" className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <Star className="w-4 h-4 fill-rose-400 text-rose-400" />
              <span>Customer Satisfaction</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              What People Say About Our Photography Service
            </h2>
            <div className="flex items-center justify-center gap-3 text-sm text-slate-300">
              <span className="flex items-center text-amber-400 gap-1 font-bold">
                <Star className="w-4 h-4 fill-amber-400" />
                4.9 / 5.0 Rating
              </span>
              <span className="text-slate-600">·</span>
              <span>Based on 870+ Customer Reviews in Mumbai</span>
            </div>
          </div>

          {/* Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-slate-950 p-6 rounded-2xl border border-slate-800 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">{rev.date}</span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed italic mb-5">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">{rev.name}</div>
                    <div className="text-[11px] text-slate-400">{rev.location}</div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-semibold uppercase tracking-wider text-rose-400">
                    {rev.occasion}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* AS SEEN ON SUBSECTION */}
          <div className="pt-10 border-t border-slate-800">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-widest font-bold text-slate-400">
                As Seen On & Industry Recognitions
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {publications.map((pub, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center hover:border-slate-700 transition-colors"
                >
                  <div className="text-sm font-bold text-white mb-0.5">{pub.name}</div>
                  <div className="text-[11px] text-rose-400 font-semibold mb-1">{pub.highlight}</div>
                  <div className="text-[10px] text-slate-500">{pub.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION H: FREQUENTLY ASKED QUESTIONS */}
      <section id="faqs" className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <HelpCircle className="w-4 h-4" />
              <span>Transparent Guidance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Clear answers regarding our photography services, team, booking advances, payment terms, and deliverable timelines.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div
                  key={index}
                  className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-850"
                  >
                    <span className="text-sm font-semibold text-white">
                      {faq.question}
                    </span>
                    <span className="text-rose-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-900/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-xs text-slate-400">
            Have a question not listed here?{' '}
            <a
              href={brand.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-400 font-semibold hover:underline inline-flex items-center gap-1"
            >
              Ask on WhatsApp <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION I: LOCATIONS WE SERVE */}
      <section id="locations" className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <Compass className="w-4 h-4" />
              <span>Coverage Across Mumbai Metro</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Locations We Serve
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Our photographers travel to all venues, residences, banquet halls, and outdoor locations across Mumbai and surrounding suburbs.
            </p>
          </div>

          {/* Locations Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {locationsServed.map((loc, i) => (
              <div
                key={i}
                className="bg-slate-950 hover:bg-slate-850 p-3.5 rounded-xl border border-slate-800 text-center transition-all group"
              >
                <MapPin className="w-4 h-4 text-rose-500 mx-auto mb-1.5 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-slate-200 group-hover:text-white">
                  {loc}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-400">
            Also covering destination shoots across Alibaug, Lonavala, Goa, and across India upon prior scheduling.
          </div>
        </div>
      </section>

      {/* SECTION J: CONTACT & INQUIRY */}
      <section id="contact" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Information & Office Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-widest mb-3">
                  <Phone className="w-4 h-4" />
                  <span>Get In Touch</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                  Contact Shoot Express
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Have an upcoming wedding, baby arrival, family gathering, or commercial shoot? Speak with our Mumbai studio coordinator for customized packages and date availability.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-4">
                <a
                  href={brand.contact.telLink}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-rose-950/80 border border-rose-800/60 flex items-center justify-center text-rose-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Direct Phone Call</div>
                    <div className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors">
                      {brand.contact.displayPhone}
                    </div>
                    <div className="text-[11px] text-slate-500">24*7 Customer Assistance</div>
                  </div>
                </a>

                <a
                  href={brand.contact.mailtoLink}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-rose-950/80 border border-rose-800/60 flex items-center justify-center text-rose-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Inquiry</div>
                    <div className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors">
                      {brand.contact.email}
                    </div>
                    <div className="text-[11px] text-slate-500">Direct response within 4 hours</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-rose-950/80 border border-rose-800/60 flex items-center justify-center text-rose-400 shrink-0">
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
                      className="text-[11px] text-rose-400 hover:underline mt-1 inline-flex items-center gap-1"
                    >
                      View on Google Maps <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Working hours badge */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Operating 7 Days a Week: 9:00 AM – 9:00 PM (Shoot Coverage 24/7)</span>
              </div>
            </div>

            {/* Interactive Booking Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-2">
                  Request Shoot Availability & Free Quote
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Fill in your details below to check crew availability for your preferred date and venue.
                </p>

                {formSubmitted ? (
                  <div className="p-6 bg-slate-950 border border-emerald-800/50 rounded-xl text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-600/50 flex items-center justify-center text-emerald-400 mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-white">Inquiry Prepared Successfully!</h4>
                    <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-white">{formState.name}</span>! Your inquiry for <span className="text-rose-400 font-semibold">{formState.occasion}</span> has been logged.
                    </p>
                    <div className="p-3 bg-slate-900 rounded-lg text-xs text-slate-400 text-left space-y-1">
                      <div><strong className="text-white">Phone:</strong> {formState.phone}</div>
                      <div><strong className="text-white">Preferred Date:</strong> {formState.date || 'TBD'}</div>
                      <div><strong className="text-white">Location:</strong> {formState.location}</div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <a
                        href={`https://wa.me/917738111094?text=Hello%20Ashwin,%20I%20am%20${encodeURIComponent(formState.name)}.%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(formState.occasion)}%20on%20${encodeURIComponent(formState.date || 'upcoming%20date')}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send via WhatsApp (+91 7738111094)</span>
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
                          placeholder="e.g. Rohan Sharma"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-hidden focus:border-rose-500"
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
                          placeholder="e.g. 98200 12345"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-hidden focus:border-rose-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                          Occasion Type *
                        </label>
                        <select
                          value={formState.occasion}
                          onChange={(e) => setFormState({ ...formState, occasion: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-rose-500"
                        >
                          {occasions.map((o) => (
                            <option key={o.id} value={o.title}>
                              {o.title}
                            </option>
                          ))}
                          <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                          <option value="Newborn Baby Shoot">Newborn Baby Shoot</option>
                          <option value="Jewellery & Product Shoot">Jewellery & Product Shoot</option>
                          <option value="Architectural / Interior Shoot">Architectural / Interior Shoot</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                          Preferred Shoot Date
                        </label>
                        <input
                          type="date"
                          value={formState.date}
                          onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-rose-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Shoot Location / Venue in Mumbai
                      </label>
                      <input
                        type="text"
                        value={formState.location}
                        onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                        placeholder="e.g. Powai / Andheri West / South Mumbai"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-hidden focus:border-rose-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Specific Requirements or Questions
                      </label>
                      <textarea
                        rows={3}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Tell us about hours of coverage, videography requirements, guest count, or album preferences..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-hidden focus:border-rose-500"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full py-3.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {formSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Checking Date & Pricing...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Booking Inquiry</span>
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

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Col 1: Brand & Bio */}
            <div>
              <div className="mb-4">
                <img src={assets.logoDark} alt={brand.name} className="h-10 w-auto" />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {brand.subHeading}
              </p>
              <div className="text-xs text-slate-500">
                Official Website:{' '}
                <a
                  href={brand.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-400 hover:underline"
                >
                  shootexpress.com
                </a>
              </div>
            </div>

            {/* Col 2: Occasions Covered */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                Occasions Covered
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                {occasions.slice(0, 6).map((occ) => (
                  <li key={occ.id}>
                    <a href="#occasions" className="hover:text-rose-400 transition-colors">
                      {occ.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Key Locations */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                Locations in Mumbai
              </h4>
              <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-400">
                {locationsServed.slice(0, 8).map((loc, i) => (
                  <span key={i} className="hover:text-slate-300">
                    {loc}
                  </span>
                ))}
              </div>
              <a href="#locations" className="text-xs text-rose-400 hover:underline block mt-3">
                View all 16 locations →
              </a>
            </div>

            {/* Col 4: Studio Contact */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                Studio Office
              </h4>
              <address className="not-italic text-xs text-slate-400 space-y-2">
                <p>{brand.contact.address}</p>
                <p>
                  <strong className="text-slate-300">Phone:</strong>{' '}
                  <a href={brand.contact.telLink} className="text-rose-400 hover:underline">
                    {brand.contact.displayPhone}
                  </a>
                </p>
                <p>
                  <strong className="text-slate-300">Email:</strong>{' '}
                  <a href={brand.contact.mailtoLink} className="text-rose-400 hover:underline">
                    {brand.contact.email}
                  </a>
                </p>
              </address>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © 2018–2026 {brand.name}. Best Photographer In Mumbai. All Rights Reserved.
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

      {/* FLOATING ACTION PILL */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5">
        <a
          href={brand.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 flex items-center justify-center transition-transform hover:scale-110"
          title="Chat with Shoot Express on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href={brand.contact.telLink}
          className="w-12 h-12 rounded-full bg-rose-600 hover:bg-rose-500 text-white shadow-xl shadow-rose-600/30 flex items-center justify-center transition-transform hover:scale-110"
          title="Call +91 7738111094"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* LIGHTBOX MODAL */}
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
              alt={portfolio[lightboxIndex].alt}
              className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center max-w-xl">
              <span className="text-[11px] font-mono text-rose-400 uppercase tracking-wider">
                {portfolio[lightboxIndex].category} · {lightboxIndex + 1} of {portfolio.length}
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                {portfolio[lightboxIndex].title}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {portfolio[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* OCCASION DETAIL MODAL */}
      {selectedOccasion && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl">
            <div className="h-48 relative">
              <img
                src={selectedOccasion.image}
                alt={selectedOccasion.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedOccasion(null)}
                className="absolute top-3 right-3 text-white bg-black/60 hover:bg-black/80 p-1.5 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <span className="text-[11px] font-mono text-rose-400 uppercase tracking-wider font-semibold">
                {selectedOccasion.category}
              </span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">
                {selectedOccasion.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {selectedOccasion.description}
              </p>

              <div className="space-y-2 mb-6">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Included Features:
                </span>
                {selectedOccasion.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setSelectedOccasion(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedOccasion.title;
                    setSelectedOccasion(null);
                    setFormState((prev) => ({ ...prev, occasion: title }));
                    setIsInquiryModalOpen(true);
                  }}
                  className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold uppercase tracking-wider rounded-lg"
                >
                  Book This Occasion
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* QUICK INQUIRY MODAL */}
      {isInquiryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setIsInquiryModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-widest mb-1">
              <Calendar className="w-4 h-4" />
              <span>Shoot Express Booking</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">
              Inquire Photoshoot in Mumbai
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              Office No. 3146, Oberoi Garden Estate, Powai · Tel: 7738111094
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsInquiryModalOpen(false);
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
                  placeholder="e.g. Priyanshu Mehta"
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-rose-500"
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
                  placeholder="e.g. 98190 54321"
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-rose-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                    Occasion *
                  </label>
                  <select
                    value={formState.occasion}
                    onChange={(e) => setFormState({ ...formState, occasion: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-rose-500"
                  >
                    {occasions.map((o) => (
                      <option key={o.id} value={o.title}>
                        {o.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={formState.date}
                    onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-rose-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Check Availability Now</span>
              </button>

              <div className="text-center pt-2">
                <a
                  href={brand.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Or Chat Directly on WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
