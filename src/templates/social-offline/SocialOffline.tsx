import React, { useState, useEffect } from 'react';
import {
  socialOfflineConfig,
  OutletInfo,
  MenuItem
} from './social-offline.config';
import {
  MapPin,
  Phone,
  Clock,
  Calendar,
  Users,
  Wifi,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  X,
  ExternalLink,
  CheckCircle2,
  Share2,
  UtensilsCrossed,
  Wine,
  Briefcase,
  Award,
  Music,
  ShoppingBag,
  ArrowRight,
  Search,
  SlidersHorizontal,
  Info,
  Download,
  Send,
  Coffee,
  Check,
  Building2,
  Radio,
  Settings
} from 'lucide-react';

export default function SocialOffline() {
  // Navigation & Sub-view states
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hero carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = socialOfflineConfig.heroSlides;

  // Auto rotate hero
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Outlets filter state
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [outletSearch, setOutletSearch] = useState('');
  const [selectedOutletModal, setSelectedOutletModal] = useState<OutletInfo | null>(null);

  // Menu filter state
  const [selectedMenuCategory, setSelectedMenuCategory] = useState<string>('all');
  const [selectedDietFilter, setSelectedDietFilter] = useState<'all' | 'veg' | 'nonveg'>('all');

  // Interactive Modal States
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isWorkpassModalOpen, setIsWorkpassModalOpen] = useState(false);
  const [isClubModalOpen, setIsClubModalOpen] = useState(false);
  const [isPlaceholdersOpen, setIsPlaceholdersOpen] = useState(false);

  // Form states
  const [reservationData, setReservationData] = useState({
    city: 'Delhi',
    outletId: socialOfflineConfig.outlets[0].id,
    date: '2026-10-12',
    time: '20:00',
    guests: '2',
    name: '',
    phone: '',
    notes: ''
  });
  const [reservationSuccess, setReservationSuccess] = useState(false);

  const [workpassData, setWorkpassData] = useState({
    outletId: socialOfflineConfig.outlets[0].id,
    passType: 'day-pass',
    name: '',
    email: '',
    phone: '',
    profession: ''
  });
  const [workpassSuccess, setWorkpassSuccess] = useState(false);

  // Notification Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Filtered outlets
  const cities = ['All', 'Delhi', 'Mumbai', 'Bengaluru', 'Pune', 'Chandigarh', 'Kolkata', 'Hyderabad', 'Lucknow'];
  const filteredOutlets = socialOfflineConfig.outlets.filter((outlet) => {
    const matchesCity = selectedCity === 'All' || outlet.city.toLowerCase() === selectedCity.toLowerCase();
    const matchesSearch =
      outlet.name.toLowerCase().includes(outletSearch.toLowerCase()) ||
      outlet.city.toLowerCase().includes(outletSearch.toLowerCase()) ||
      outlet.address.toLowerCase().includes(outletSearch.toLowerCase());
    return matchesCity && matchesSearch;
  });

  // Filtered menu items
  const filteredMenuItems = socialOfflineConfig.menuItems.filter((item) => {
    const matchesCat = selectedMenuCategory === 'all' || item.category === selectedMenuCategory;
    const matchesDiet =
      selectedDietFilter === 'all' ||
      (selectedDietFilter === 'veg' && item.isVeg) ||
      (selectedDietFilter === 'nonveg' && !item.isVeg);
    return matchesCat && matchesDiet;
  });

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReservationSuccess(true);
    setTimeout(() => {
      showToast(`Table confirmed at ${socialOfflineConfig.outlets.find((o) => o.id === reservationData.outletId)?.name || 'Social'}! SMS confirmation sent.`);
    }, 400);
  };

  const handleWorkpassSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWorkpassSuccess(true);
    setTimeout(() => {
      showToast(`Workpass confirmed! F&B credit token sent to ${workpassData.phone || 'your phone'}.`);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#0a0b0e] text-[#f8fafc] font-sans selection:bg-[#f95721] selection:text-white">
      {/* 1. TOP TICKER PROTOCOL BANNER */}
      <div className="bg-[#111317] border-b border-[#20242e] text-[11px] text-[#94a3b8] px-4 py-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 font-semibold text-[#f95721] tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#f95721] animate-ping"></span>
            SOCIAL OFFLINE
          </span>
          <span className="text-[#333a4d]">|</span>
          <span className="hidden md:inline text-[#cbd5e1]">
            India's Favourite Place to Chill · 55+ Outlets in 20+ Cities · All Day Work, All Night Play
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaceholdersOpen(true)}
            className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#1e2330] hover:bg-[#2d3548] text-[#93c5fd] border border-[#3b4866] transition cursor-pointer"
            title="Inspect & test configurable business placeholders"
          >
            <Settings className="w-3 h-3 text-[#60a5fa]" />
            <span>Placeholders Mode</span>
          </button>
          <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-700/80 text-emerald-300 font-mono">
            Template #2
          </span>
        </div>
      </div>

      {/* 2. STICKY MAIN HEADER */}
      <header className="sticky top-0 z-40 bg-[#090a0d]/95 backdrop-blur-md border-b border-[#1f232d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Logo & Slogan */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection('home');
            }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <img
              src="/assets/social-offline/social-logo.png"
              alt="SOCIAL Offline"
              className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#13161f] p-1.5 rounded-full border border-[#232736] text-xs font-semibold tracking-wider uppercase">
            <a
              href="#outlets"
              onClick={() => setActiveSection('outlets')}
              className={`px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${
                activeSection === 'outlets' ? 'bg-[#f95721] text-white shadow-md shadow-[#f95721]/30' : 'text-[#cbd5e1] hover:text-white hover:bg-[#1e2230]'
              }`}
            >
              Outlets ({socialOfflineConfig.metrics.outletsCount})
            </a>
            <a
              href="#menu"
              onClick={() => setActiveSection('menu')}
              className={`px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${
                activeSection === 'menu' ? 'bg-[#f95721] text-white shadow-md shadow-[#f95721]/30' : 'text-[#cbd5e1] hover:text-white hover:bg-[#1e2230]'
              }`}
            >
              Food & Drinks
            </a>
            <a
              href="#social-works"
              onClick={() => setActiveSection('social-works')}
              className={`px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${
                activeSection === 'social-works' ? 'bg-[#f95721] text-white shadow-md shadow-[#f95721]/30' : 'text-[#cbd5e1] hover:text-white hover:bg-[#1e2230]'
              }`}
            >
              Social Wrks
            </a>
            <a
              href="#social-club"
              onClick={() => setActiveSection('social-club')}
              className={`px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${
                activeSection === 'social-club' ? 'bg-[#f95721] text-white shadow-md shadow-[#f95721]/30' : 'text-[#cbd5e1] hover:text-white hover:bg-[#1e2230]'
              }`}
            >
              Social Club
            </a>
            <a
              href="#culture"
              onClick={() => setActiveSection('culture')}
              className={`px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${
                activeSection === 'culture' ? 'bg-[#f95721] text-white shadow-md shadow-[#f95721]/30' : 'text-[#cbd5e1] hover:text-white hover:bg-[#1e2230]'
              }`}
            >
              antiSOCIAL
            </a>
            <a
              href="#about"
              onClick={() => setActiveSection('about')}
              className={`px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${
                activeSection === 'about' ? 'bg-[#f95721] text-white shadow-md shadow-[#f95721]/30' : 'text-[#cbd5e1] hover:text-white hover:bg-[#1e2230]'
              }`}
            >
              About
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsOrderModalOpen(true)}
              className="px-4 py-2 bg-[#1a1d26] hover:bg-[#252a38] text-white text-xs font-bold tracking-wider uppercase rounded-lg border border-[#2b3142] transition-all flex items-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#f95721]" />
              <span>Order Food</span>
            </button>
            <button
              onClick={() => {
                setReservationSuccess(false);
                setIsReserveModalOpen(true);
              }}
              className="px-5 py-2.5 bg-gradient-to-r from-[#f95721] to-[#e52e2e] hover:from-[#fa6c3a] hover:to-[#ee3a3a] text-white text-xs font-bold tracking-wider uppercase rounded-lg shadow-lg shadow-[#f95721]/25 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Table</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#14161f] border border-[#262a3a] text-white hover:bg-[#1e2230] cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <div className="w-6 h-5 flex flex-col justify-between"><span className="w-full h-0.5 bg-white"></span><span className="w-4 h-0.5 bg-[#f95721]"></span><span className="w-full h-0.5 bg-white"></span></div>}
          </button>
        </div>

        {/* Mobile slide-over drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0d0f14] border-b border-[#232736] px-4 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-2 gap-2 text-xs font-bold uppercase tracking-wider">
              <a
                href="#outlets"
                onClick={() => {
                  setActiveSection('outlets');
                  setMobileMenuOpen(false);
                }}
                className="p-3 bg-[#151822] rounded-lg border border-[#262c3e] text-white hover:border-[#f95721] flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#f95721]" />
                Outlets (55+)
              </a>
              <a
                href="#menu"
                onClick={() => {
                  setActiveSection('menu');
                  setMobileMenuOpen(false);
                }}
                className="p-3 bg-[#151822] rounded-lg border border-[#262c3e] text-white hover:border-[#f95721] flex items-center gap-2"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#f95721]" />
                Food & Drinks
              </a>
              <a
                href="#social-works"
                onClick={() => {
                  setActiveSection('social-works');
                  setMobileMenuOpen(false);
                }}
                className="p-3 bg-[#151822] rounded-lg border border-[#262c3e] text-white hover:border-[#f95721] flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4 text-[#f95721]" />
                Social Wrks
              </a>
              <a
                href="#social-club"
                onClick={() => {
                  setActiveSection('social-club');
                  setMobileMenuOpen(false);
                }}
                className="p-3 bg-[#151822] rounded-lg border border-[#262c3e] text-white hover:border-[#f95721] flex items-center gap-2"
              >
                <Award className="w-4 h-4 text-[#f95721]" />
                Social Club
              </a>
              <a
                href="#culture"
                onClick={() => {
                  setActiveSection('culture');
                  setMobileMenuOpen(false);
                }}
                className="p-3 bg-[#151822] rounded-lg border border-[#262c3e] text-white hover:border-[#f95721] flex items-center gap-2"
              >
                <Music className="w-4 h-4 text-[#f95721]" />
                antiSOCIAL
              </a>
              <a
                href="#about"
                onClick={() => {
                  setActiveSection('about');
                  setMobileMenuOpen(false);
                }}
                className="p-3 bg-[#151822] rounded-lg border border-[#262c3e] text-white hover:border-[#f95721] flex items-center gap-2"
              >
                <Info className="w-4 h-4 text-[#f95721]" />
                About Us
              </a>
            </div>

            <div className="flex gap-2 pt-2 border-t border-[#1e2330]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsOrderModalOpen(true);
                }}
                className="flex-1 py-3 bg-[#1a1d26] text-white text-xs font-bold uppercase rounded-lg border border-[#2a3040] flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-[#f95721]" />
                Order Online
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setReservationSuccess(false);
                  setIsReserveModalOpen(true);
                }}
                className="flex-1 py-3 bg-[#f95721] text-white text-xs font-bold uppercase rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-[#f95721]/30"
              >
                <Calendar className="w-4 h-4" />
                Reserve Table
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION WITH IMAGE SLIDER */}
      <section id="home" className="relative min-h-[580px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-black">
        {/* Background slide images */}
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center filter brightness-50"
            />
            {/* Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0e] via-[#0a0b0e]/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/80"></div>
          </div>
        ))}

        {/* Hero Overlay Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#f95721]/40 backdrop-blur-md text-[#f95721] font-mono text-xs uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-[#f95721] animate-pulse"></span>
            {slides[currentSlide].badge}
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase max-w-4xl leading-[1.05] drop-shadow-lg font-sans">
            {slides[currentSlide].title}
          </h1>

          <p className="mt-4 text-base sm:text-xl font-bold tracking-widest text-[#f95721] uppercase">
            {slides[currentSlide].subtitle}
          </p>

          <p className="mt-4 text-sm sm:text-base text-[#cbd5e1] max-w-2xl font-normal leading-relaxed">
            {slides[currentSlide].description}
          </p>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                setReservationSuccess(false);
                setIsReserveModalOpen(true);
              }}
              className="px-8 py-3.5 bg-gradient-to-r from-[#f95721] to-[#e52e2e] hover:from-[#fa6c3a] hover:to-[#f03838] text-white text-sm font-black tracking-wider uppercase rounded-xl shadow-xl shadow-[#f95721]/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </button>
            <a
              href="#menu"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white text-sm font-black tracking-wider uppercase rounded-xl backdrop-blur-md border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <UtensilsCrossed className="w-4 h-4 text-[#f95721]" />
              <span>Explore Menu</span>
            </a>
            <button
              onClick={() => setIsWorkpassModalOpen(true)}
              className="px-6 py-3.5 bg-[#141722]/80 hover:bg-[#1f2436] text-[#93c5fd] text-sm font-bold tracking-wider uppercase rounded-xl border border-[#2c364e] backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Briefcase className="w-4 h-4 text-[#60a5fa]" />
              <span>Buy Workpass</span>
            </button>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center w-full max-w-3xl">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white">{socialOfflineConfig.metrics.outletsCount}</div>
              <div className="text-[11px] font-mono text-[#94a3b8] uppercase tracking-wider mt-1">Neighbourhood Outlets</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-[#f95721]">{socialOfflineConfig.metrics.citiesCount}</div>
              <div className="text-[11px] font-mono text-[#94a3b8] uppercase tracking-wider mt-1">Major Indian Cities</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white">{socialOfflineConfig.metrics.communityMembers}</div>
              <div className="text-[11px] font-mono text-[#94a3b8] uppercase tracking-wider mt-1">Active Community</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-[#f5a623]">{socialOfflineConfig.metrics.foundedYear}</div>
              <div className="text-[11px] font-mono text-[#94a3b8] uppercase tracking-wider mt-1">Disrupting Hospitality</div>
            </div>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-2 mt-8">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 transition-all rounded-full cursor-pointer ${
                  currentSlide === idx ? 'w-8 bg-[#f95721]' : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Prev / Next buttons */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 items-center justify-center text-white transition backdrop-blur-sm cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 items-center justify-center text-white transition backdrop-blur-sm cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* 4. THE SOCIAL MANIFESTO / STATEMENT STRIP */}
      <section className="bg-[#12141a] border-y border-[#212530] py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <p className="text-xs font-mono uppercase tracking-widest text-[#f95721]">The Philosophy</p>
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-snug">
            "SOCIAL is where work meets play, where the mundane blends with the extraordinary and where conversations are free flowing. It’s a reflection of the passion, vibrance and energy that connects neighbourhoods across India."
          </blockquote>
          <p className="text-xs text-[#94a3b8] uppercase tracking-wider font-semibold">
            — Impresario Entertainment & Hospitality
          </p>
        </div>
      </section>

      {/* 5. OUTLETS DIRECTORY & CITY SELECTOR */}
      <section id="outlets" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#f95721] uppercase tracking-widest mb-2">
              <MapPin className="w-3.5 h-3.5" />
              Find Your Local Hood
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              SOCIAL Outlets
            </h2>
            <p className="text-sm text-[#94a3b8] mt-2 max-w-xl">
              Each SOCIAL outlet is uniquely handcrafted to reflect the spirit, subculture, and history of its neighborhood. Find your nearest spot.
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-[#64748b] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search outlet or area..."
              value={outletSearch}
              onChange={(e) => setOutletSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#141720] border border-[#242938] text-xs text-white placeholder-[#64748b] focus:outline-none focus:border-[#f95721]"
            />
          </div>
        </div>

        {/* City Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none text-xs font-bold uppercase tracking-wider">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition cursor-pointer ${
                selectedCity === city
                  ? 'bg-[#f95721] text-white shadow-lg shadow-[#f95721]/30'
                  : 'bg-[#151722] text-[#94a3b8] hover:text-white hover:bg-[#1e2233] border border-[#232736]'
              }`}
            >
              {city} {city === 'All' ? `(${socialOfflineConfig.outlets.length})` : ''}
            </button>
          ))}
        </div>

        {/* Outlet Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOutlets.map((outlet) => (
            <div
              key={outlet.id}
              className="bg-[#12141c] rounded-2xl border border-[#202533] overflow-hidden group hover:border-[#f95721]/50 transition-all flex flex-col justify-between shadow-xl"
            >
              {/* Image banner & badges */}
              <div className="relative h-48 overflow-hidden bg-[#181b24]">
                <img
                  src={outlet.image}
                  alt={outlet.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-black/30 to-transparent"></div>

                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[10px] font-bold text-white border border-white/20 uppercase">
                    {outlet.city}
                  </span>
                  {outlet.hasCoworking && (
                    <span className="px-2.5 py-1 rounded bg-[#f95721]/90 backdrop-blur-md text-[10px] font-bold text-white uppercase flex items-center gap-1">
                      <Briefcase className="w-2.5 h-2.5" /> Wrks
                    </span>
                  )}
                </div>

                {/* Outlet Logo Badge */}
                <div className="absolute bottom-3 right-3 w-12 h-12 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 p-1 flex items-center justify-center">
                  <img
                    src={outlet.logo}
                    alt={outlet.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              {/* Outlet details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-white uppercase group-hover:text-[#f95721] transition-colors">
                    {outlet.name}
                  </h3>
                  <div className="mt-3 space-y-2 text-xs text-[#94a3b8]">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#f95721] shrink-0 mt-0.5" />
                      <span className="leading-snug">{outlet.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#f5a623] shrink-0" />
                      <span>{outlet.hours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <a href={`tel:${outlet.phone}`} className="hover:text-white">
                        {outlet.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-4 border-t border-[#1c212e] flex items-center gap-2">
                  <button
                    onClick={() => {
                      setReservationData((prev) => ({
                        ...prev,
                        city: outlet.city,
                        outletId: outlet.id
                      }));
                      setReservationSuccess(false);
                      setIsReserveModalOpen(true);
                    }}
                    className="flex-1 py-2 bg-[#f95721] hover:bg-[#fa6c3a] text-white text-xs font-bold uppercase rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-[#f95721]/20 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book Table
                  </button>
                  <button
                    onClick={() => setSelectedOutletModal(outlet)}
                    className="px-3 py-2 bg-[#1b1f2b] hover:bg-[#252a3a] text-[#cbd5e1] hover:text-white text-xs font-semibold rounded-lg border border-[#2c3345] transition cursor-pointer"
                    title="View full details and amenities"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FOOD & DRINKS (KHAANA & PEENA MENU) */}
      <section id="menu" className="py-20 bg-[#0d0e14] border-t border-[#1d212c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#f95721] uppercase tracking-widest mb-2">
                <UtensilsCrossed className="w-3.5 h-3.5" />
                Khaana & Peena Menu
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                Food & Legendary Drinks
              </h2>
              <p className="text-sm text-[#94a3b8] mt-2 max-w-xl">
                From street comfort food to our trademark 1000ml LLIIT cocktail towers, explore the iconic flavours crafted at SOCIAL.
              </p>
            </div>

            {/* Diet Filter Chips */}
            <div className="flex items-center gap-2 bg-[#141722] p-1.5 rounded-xl border border-[#232838] text-xs font-bold uppercase">
              <button
                onClick={() => setSelectedDietFilter('all')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  selectedDietFilter === 'all' ? 'bg-[#f95721] text-white' : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                All Menu
              </button>
              <button
                onClick={() => setSelectedDietFilter('veg')}
                className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 cursor-pointer ${
                  selectedDietFilter === 'veg' ? 'bg-emerald-600 text-white' : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Veg Only
              </button>
              <button
                onClick={() => setSelectedDietFilter('nonveg')}
                className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 cursor-pointer ${
                  selectedDietFilter === 'nonveg' ? 'bg-rose-600 text-white' : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-rose-400"></span> Non-Veg
              </button>
            </div>
          </div>

          {/* Menu Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none text-xs font-bold uppercase tracking-wider">
            {[
              { id: 'all', label: 'Complete Menu' },
              { id: 'munchies', label: 'Small Plates & Munchies' },
              { id: 'baos', label: 'Baos & Dimsums' },
              { id: 'mains', label: 'Mains & Biryanis' },
              { id: 'drinks', label: 'Cocktails & Signature LLIIT' },
              { id: 'desserts', label: 'Epic Desserts' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedMenuCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl whitespace-nowrap transition cursor-pointer ${
                  selectedMenuCategory === cat.id
                    ? 'bg-gradient-to-r from-[#f95721] to-[#e52e2e] text-white shadow-lg shadow-[#f95721]/20'
                    : 'bg-[#151722] text-[#94a3b8] hover:text-white hover:bg-[#1f2334] border border-[#232738]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMenuItems.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-[#12141c] border border-[#202533] hover:border-[#f95721]/40 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center p-0.5 ${
                          item.isVeg ? 'border-emerald-500' : 'border-rose-500'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
                      </span>
                      <span className="text-xs text-[#94a3b8] font-mono uppercase">{item.categoryLabel}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {item.isLegendary && (
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-bold uppercase">
                          Legendary
                        </span>
                      )}
                      {item.isChefSpecial && (
                        <span className="px-2 py-0.5 rounded bg-[#f95721]/20 border border-[#f95721]/40 text-[#f95721] text-[10px] font-bold uppercase">
                          Special
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-white group-hover:text-[#f95721] transition-colors uppercase">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs text-[#94a3b8] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1c212e] flex items-center justify-between">
                  <span className="text-lg font-black text-white font-mono">{item.price}</span>
                  <button
                    onClick={() => {
                      showToast(`Added "${item.name}" to online order bag.`);
                      setIsOrderModalOpen(true);
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-[#1a1e2b] hover:bg-[#f95721] hover:text-white text-xs font-bold text-[#cbd5e1] border border-[#283042] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Order
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Online Order Delivery Partners Card */}
          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#171a24] to-[#12141c] border border-[#2a3042] flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#f95721] uppercase tracking-wider mb-2">
                <Radio className="w-3.5 h-3.5 text-[#f95721] animate-pulse" />
                Live Cloud Ordering
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase">
                Order Direct & Get Exclusive Perks
              </h3>
              <p className="text-xs sm:text-sm text-[#94a3b8] mt-2 max-w-xl">
                Order directly through socialoffline.in for free delivery, live order status on WhatsApp, and 10% Social Club coins back.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsOrderModalOpen(true)}
                className="px-6 py-3 bg-[#f95721] hover:bg-[#fa6c3a] text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-lg shadow-[#f95721]/30 transition flex items-center gap-2 cursor-pointer"
              >
                <img
                  src="/assets/social-offline/social-favlogo-white.png"
                  alt="Direct"
                  className="w-4 h-4 object-contain"
                />
                <span>Direct Ordering</span>
              </button>
              <button
                onClick={() => {
                  showToast('Redirecting to Zomato Social Store...');
                  window.open('https://www.zomato.com', '_blank');
                }}
                className="px-6 py-3 bg-[#cb202d] hover:bg-[#dc2836] text-white text-xs font-black uppercase tracking-wider rounded-xl transition flex items-center gap-2 cursor-pointer"
              >
                <img
                  src="/assets/social-offline/logo_zomato.png"
                  alt="Zomato"
                  className="h-3.5 w-auto object-contain"
                />
              </button>
              <button
                onClick={() => {
                  showToast('Redirecting to Swiggy Social Store...');
                  window.open('https://www.swiggy.com', '_blank');
                }}
                className="px-6 py-3 bg-[#fc8019] hover:bg-[#fd8f30] text-white text-xs font-black uppercase tracking-wider rounded-xl transition flex items-center gap-2 cursor-pointer"
              >
                <span>SWIGGY</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SOCIAL WRKS — CO-WORKING SPACE */}
      <section id="social-works" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#f95721] uppercase tracking-widest">
              <Briefcase className="w-3.5 h-3.5" />
              Collaborative Workspace
            </div>

            <img
              src="/assets/social-offline/SOCIAL-Works-Logo.png"
              alt="SOCIAL WRKS"
              className="max-h-20 w-auto object-contain filter brightness-110"
            />

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase leading-tight">
              Where India's Creatives, Founders & Freethinkers Clock In
            </h2>

            <p className="text-sm text-[#94a3b8] leading-relaxed">
              India’s first co-working cafe ecosystem. Designed for those who reject dull corporate cubicles. Walk in, pick an ergonomic booth with dedicated power sockets, tap into high-speed fiber Wi-Fi, and turn your pass into delicious food and fresh drinks.
            </p>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#141722] border border-[#232838] flex items-center gap-3">
                <Wifi className="w-5 h-5 text-[#f95721] shrink-0" />
                <div>
                  <div className="font-bold text-white">Gigabit Wi-Fi</div>
                  <div className="text-[#94a3b8]">Dual-band high speed</div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#141722] border border-[#232838] flex items-center gap-3">
                <UtensilsCrossed className="w-5 h-5 text-[#f5a623] shrink-0" />
                <div>
                  <div className="font-bold text-white">100% F&B Credit</div>
                  <div className="text-[#94a3b8]">Pass redeemable on food</div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#141722] border border-[#232838] flex items-center gap-3">
                <Users className="w-5 h-5 text-[#60a5fa] shrink-0" />
                <div>
                  <div className="font-bold text-white">Meeting Pods</div>
                  <div className="text-[#94a3b8]">Whiteboards & AV kits</div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#141722] border border-[#232838] flex items-center gap-3">
                <Coffee className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-bold text-white">Coffee All Day</div>
                  <div className="text-[#94a3b8]">Artisanal brews on tap</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setWorkpassSuccess(false);
                setIsWorkpassModalOpen(true);
              }}
              className="px-8 py-3.5 bg-gradient-to-r from-[#f95721] to-[#e52e2e] hover:from-[#fa6c3a] hover:to-[#f03838] text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-lg shadow-[#f95721]/30 transition flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Purchase Workpass Online</span>
            </button>
          </div>

          {/* Pricing Passes Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-4">
            {socialOfflineConfig.coworkingPasses.map((pass) => (
              <div
                key={pass.id}
                className={`p-6 rounded-2xl flex flex-col justify-between border transition-all ${
                  pass.id === 'day-pass'
                    ? 'bg-[#151824] border-[#f95721] shadow-xl shadow-[#f95721]/10'
                    : 'bg-[#12141c] border-[#222736]'
                }`}
              >
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded bg-[#f95721]/20 text-[#f95721] border border-[#f95721]/40 text-[10px] font-black uppercase tracking-wider mb-4">
                    {pass.benefitTag}
                  </span>

                  <h3 className="text-base font-black text-white uppercase">{pass.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white font-mono">{pass.price}</span>
                    <span className="text-[10px] text-[#94a3b8] uppercase">{pass.billing}</span>
                  </div>

                  <p className="mt-3 text-xs text-[#94a3b8] leading-relaxed">
                    {pass.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-[#1e2330] space-y-2">
                    {pass.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-start gap-2 text-[11px] text-[#cbd5e1]">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setWorkpassData((prev) => ({ ...prev, passType: pass.id }));
                    setWorkpassSuccess(false);
                    setIsWorkpassModalOpen(true);
                  }}
                  className={`mt-6 w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                    pass.id === 'day-pass'
                      ? 'bg-[#f95721] hover:bg-[#fa6c3a] text-white shadow-md'
                      : 'bg-[#1c202d] hover:bg-[#272d3f] text-white border border-[#2d3548]'
                  }`}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. THE SOCIAL CLUB (LOYALTY PROGRAM) */}
      <section id="social-club" className="py-20 bg-[#0d0f15] border-t border-[#1d212c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <img
              src="/assets/social-offline/SOCIAL-Club-logo.png"
              alt="THE SOCIAL CLUB"
              className="max-h-14 mx-auto mb-4 object-contain filter brightness-110"
            />
            <div className="text-xs font-mono text-[#f95721] uppercase tracking-widest mb-2">Loyalty Redefined</div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              The Club That Never Disappoints
            </h2>
            <p className="text-sm text-[#94a3b8] mt-3">
              Get exclusive rewards every time you visit your neighbourhood hangout place. Earn coins on every bite and sip, and unlock VIP privileges across India.
            </p>
          </div>

          {/* Tier Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialOfflineConfig.loyaltyTiers.map((tier, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#12141c] border border-[#212636] relative overflow-hidden group hover:border-[#f95721]/50 transition-all flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#f95721]/5 rounded-bl-full pointer-events-none"></div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#f95721] font-bold">Tier 0{idx + 1}</span>
                    <Award className="w-5 h-5 text-[#f5a623]" />
                  </div>

                  <h3 className="text-2xl font-black text-white tracking-wide uppercase">{tier.tier}</h3>
                  <div className="text-xs font-mono text-[#94a3b8] mt-1">{tier.visits}</div>

                  <p className="mt-4 text-xs text-[#cbd5e1] leading-relaxed">
                    {tier.perk}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1c212e] text-[11px] text-[#94a3b8] font-mono">
                  Auto-unlocks on visits
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setIsClubModalOpen(true)}
              className="px-8 py-3.5 bg-gradient-to-r from-[#f95721] to-[#e52e2e] hover:from-[#fa6c3a] hover:to-[#f03838] text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-lg shadow-[#f95721]/30 transition inline-flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore The Social Club & Join</span>
            </button>
          </div>
        </div>
      </section>

      {/* 9. antiSOCIAL — THE CULTURAL UNDERGROUND */}
      <section id="culture" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-black border border-[#272b38] relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#f95721]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <img
                  src="/assets/social-offline/anti-social-logo-2.png"
                  alt="antiSOCIAL"
                  className="h-10 w-auto object-contain"
                />
                <span className="px-2.5 py-0.5 rounded bg-rose-950/80 border border-rose-700 text-rose-300 text-[10px] font-bold uppercase tracking-wider">
                  Culture & Subversion
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                antiSOCIAL — Live Gigs, Art & Subculture
              </h2>

              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed max-w-2xl">
                The cultural laboratory of SOCIAL. Dedicated spaces in Hauz Khas Delhi, Lower Parel Mumbai, and Bengaluru hosting underground techno, live indie bands, spoken word poetry, drag nights, and cutting-edge visual installations.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => {
                    showToast('Opening upcoming gig calendar...');
                    window.open('https://www.instagram.com/live.at.social/', '_blank');
                  }}
                  className="px-6 py-3 bg-white text-black hover:bg-neutral-200 text-xs font-black uppercase tracking-wider rounded-xl transition flex items-center gap-2 cursor-pointer"
                >
                  <Music className="w-4 h-4 text-[#f95721]" />
                  <span>Check Gig Calendar (@live.at.social)</span>
                </button>
                <button
                  onClick={() => {
                    showToast('Opening WhatsApp Community invite...');
                    window.open('https://linktr.ee/Social_Community', '_blank');
                  }}
                  className="px-6 py-3 bg-[#1e2330] hover:bg-[#2b3346] text-white text-xs font-bold uppercase tracking-wider rounded-xl border border-[#3b455f] transition flex items-center gap-2 cursor-pointer"
                >
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>Join Community Channel</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/assets/social-offline/slide_Women-bartenders-7.webp"
                  alt="antiSOCIAL Gigs"
                  className="w-full h-72 object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. ABOUT US & FOUNDER ETHOS */}
      <section id="about" className="py-20 bg-[#0d0f15] border-t border-[#1d212c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#f95721] uppercase tracking-widest">
                <Building2 className="w-3.5 h-3.5" />
                About The Brand
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                Crafting India's Modern Public Spaces
              </h2>

              <p className="text-sm text-[#cbd5e1] leading-relaxed">
                Founded in 2014 by Riyaaz Amlani under Impresario Entertainment & Hospitality, SOCIAL revolutionized the Indian restaurant industry by inventing the hybrid café-bar-workspace format.
              </p>

              <p className="text-xs text-[#94a3b8] leading-relaxed">
                From repurposing industrial warehouses and old bungalows to integrating local slang, street art, and sustainable recycled elements into interior decor, each SOCIAL reflects its distinct postal code. Whether you're pitching a pitch deck over morning chai or clinking cocktails under disco balls, you belong at SOCIAL.
              </p>

              <div className="p-4 rounded-xl bg-[#141722] border border-[#232838] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white uppercase">Corporate & Private Buyouts</div>
                  <div className="text-[11px] text-[#94a3b8]">Host company offsites, product launches & parties</div>
                </div>
                <a
                  href="mailto:events@impresario.in"
                  className="px-4 py-2 bg-[#1f2434] hover:bg-[#2b334a] text-white text-xs font-bold uppercase rounded-lg border border-[#30394f] transition"
                >
                  Inquire
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-[#242938]">
                <img
                  src="/assets/social-offline/VK-3.jpg"
                  alt="Social Vasant Kunj"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#242938]">
                <img
                  src="/assets/social-offline/Sarjapur-3.jpg"
                  alt="Social Sarjapur"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#242938]">
                <img
                  src="/assets/social-offline/slide_OG-menu-105.webp"
                  alt="Social Menu"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#242938]">
                <img
                  src="/assets/social-offline/hauz-khas-social-1.webp"
                  alt="Hauz Khas Social"
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOOTER WITH IMPRESARIO ATTRIBUTION */}
      <footer className="bg-[#08090c] border-t border-[#1a1e28] text-xs text-[#94a3b8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <img
                src="/assets/social-offline/social-logo.png"
                alt="SOCIAL Offline"
                className="h-10 w-auto object-contain"
              />
              <p className="text-xs text-[#828fa3] max-w-sm leading-relaxed">
                SOCIAL is a flagship brand of Impresario Entertainment & Hospitality Private Limited. All day work, all night play.
              </p>
              <div className="text-[11px] text-[#64748b]">
                Registered Office: American Express Bakery House, 1st Floor, Mirza Galib Rd, Byculla West, Mumbai, Maharashtra 400008.
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.instagram.com/socialoffline/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#141722] hover:bg-[#1e2333] border border-[#242a3a] text-white transition flex items-center gap-1.5"
                >
                  <span>@socialoffline</span>
                </a>
                <a
                  href="https://www.instagram.com/live.at.social/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#141722] hover:bg-[#1e2333] border border-[#242a3a] text-white transition flex items-center gap-1.5"
                >
                  <span>@live.at.social</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Explore</h4>
              <ul className="space-y-2.5">
                <li><a href="#outlets" className="hover:text-white transition">All Outlets</a></li>
                <li><a href="#menu" className="hover:text-white transition">Khaana & Peena Menu</a></li>
                <li><a href="#social-works" className="hover:text-white transition">Social Wrks Passes</a></li>
                <li><a href="#social-club" className="hover:text-white transition">The Social Club</a></li>
                <li><a href="#culture" className="hover:text-white transition">antiSOCIAL Gigs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Cities</h4>
              <ul className="space-y-2.5">
                <li><a href="#outlets" onClick={() => setSelectedCity('Delhi')} className="hover:text-white transition">Delhi NCR</a></li>
                <li><a href="#outlets" onClick={() => setSelectedCity('Mumbai')} className="hover:text-white transition">Mumbai</a></li>
                <li><a href="#outlets" onClick={() => setSelectedCity('Bengaluru')} className="hover:text-white transition">Bengaluru</a></li>
                <li><a href="#outlets" onClick={() => setSelectedCity('Pune')} className="hover:text-white transition">Pune</a></li>
                <li><a href="#outlets" onClick={() => setSelectedCity('Chandigarh')} className="hover:text-white transition">Chandigarh</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Connect</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="mailto:feedback@impresario.in" className="hover:text-white transition flex items-center gap-1.5">
                    feedback@impresario.in
                  </a>
                </li>
                <li>
                  <a href="tel:+918657993155" className="hover:text-white transition flex items-center gap-1.5">
                    +91 86579 93155
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setIsPlaceholdersOpen(true)}
                    className="text-[#60a5fa] hover:underline cursor-pointer"
                  >
                    Configure Placeholders
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#181c26] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#64748b]">
            <div>
              © 2026 Impresario Entertainment & Hospitality Private Limited. Recreated for Raoz Demo Factory.
            </div>
            <div className="flex items-center gap-4">
              <span>Template #2 (social-offline)</span>
              <span>•</span>
              <span>100% Isolated Architecture</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* MODAL 1: TABLE RESERVATION MODAL */}
      {/* ========================================================================= */}
      {isReserveModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#12141c] border border-[#252b3b] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <button
              onClick={() => setIsReserveModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#94a3b8] hover:text-white bg-[#191d29] rounded-lg border border-[#293144] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!reservationSuccess ? (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#f95721] uppercase tracking-wider mb-2">
                  <Calendar className="w-4 h-4" />
                  Instant Table Booking
                </div>
                <h3 className="text-2xl font-black text-white uppercase">Reserve a Table at SOCIAL</h3>
                <p className="text-xs text-[#94a3b8] mt-1 mb-6">
                  Select your neighborhood outlet, time slot, and party size.
                </p>

                <form onSubmit={handleReservationSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-[#cbd5e1] font-bold uppercase mb-1">Select Outlet</label>
                    <select
                      value={reservationData.outletId}
                      onChange={(e) => setReservationData({ ...reservationData, outletId: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#191c28] border border-[#2b3348] text-white focus:outline-none focus:border-[#f95721]"
                    >
                      {socialOfflineConfig.outlets.map((o) => (
                        <option key={o.id} value={o.id}>
                          {o.name} ({o.city})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#cbd5e1] font-bold uppercase mb-1">Date</label>
                      <input
                        type="date"
                        value={reservationData.date}
                        onChange={(e) => setReservationData({ ...reservationData, date: e.target.value })}
                        required
                        className="w-full p-3 rounded-xl bg-[#191c28] border border-[#2b3348] text-white focus:outline-none focus:border-[#f95721]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#cbd5e1] font-bold uppercase mb-1">Time Slot</label>
                      <select
                        value={reservationData.time}
                        onChange={(e) => setReservationData({ ...reservationData, time: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#191c28] border border-[#2b3348] text-white focus:outline-none focus:border-[#f95721]"
                      >
                        <option value="12:30">12:30 PM (Lunch)</option>
                        <option value="14:00">02:00 PM (Afternoon)</option>
                        <option value="17:00">05:00 PM (Sundowner)</option>
                        <option value="19:30">07:30 PM (Dinner)</option>
                        <option value="21:00">09:00 PM (Night Vibe)</option>
                        <option value="22:30">10:30 PM (Late Night)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#cbd5e1] font-bold uppercase mb-1">Number of Guests</label>
                      <select
                        value={reservationData.guests}
                        onChange={(e) => setReservationData({ ...reservationData, guests: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#191c28] border border-[#2b3348] text-white focus:outline-none focus:border-[#f95721]"
                      >
                        <option value="1">1 Person (Solo Work)</option>
                        <option value="2">2 Guests (Table for Two)</option>
                        <option value="4">4 Guests</option>
                        <option value="6">6 Guests</option>
                        <option value="8">8 Guests (Large Booth)</option>
                        <option value="12">12+ Guests (Party/Buyout)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#cbd5e1] font-bold uppercase mb-1">Your Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={reservationData.name}
                        onChange={(e) => setReservationData({ ...reservationData, name: e.target.value })}
                        required
                        className="w-full p-3 rounded-xl bg-[#191c28] border border-[#2b3348] text-white focus:outline-none focus:border-[#f95721]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#cbd5e1] font-bold uppercase mb-1">Phone Number (for SMS & WhatsApp)</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={reservationData.phone}
                      onChange={(e) => setReservationData({ ...reservationData, phone: e.target.value })}
                      required
                      className="w-full p-3 rounded-xl bg-[#191c28] border border-[#2b3348] text-white focus:outline-none focus:border-[#f95721]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#cbd5e1] font-bold uppercase mb-1">Special Occasion or Seating Request</label>
                    <input
                      type="text"
                      placeholder="e.g. Birthday celebration / Quiet booth near power plug"
                      value={reservationData.notes}
                      onChange={(e) => setReservationData({ ...reservationData, notes: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#191c28] border border-[#2b3348] text-white focus:outline-none focus:border-[#f95721]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3.5 bg-gradient-to-r from-[#f95721] to-[#e52e2e] hover:from-[#fa6c3a] hover:to-[#f03838] text-white font-black uppercase tracking-wider rounded-xl shadow-lg shadow-[#f95721]/30 transition cursor-pointer"
                  >
                    Confirm Reservation
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase">Table Confirmed!</h3>
                <p className="text-xs text-[#94a3b8] max-w-sm mx-auto">
                  We've reserved a table for <strong className="text-white">{reservationData.guests} guests</strong> at{' '}
                  <strong className="text-[#f95721]">
                    {socialOfflineConfig.outlets.find((o) => o.id === reservationData.outletId)?.name}
                  </strong>{' '}
                  on <strong className="text-white">{reservationData.date}</strong> at{' '}
                  <strong className="text-white">{reservationData.time}</strong>.
                </p>

                <div className="p-4 rounded-xl bg-[#181c28] border border-[#2b3348] text-left text-xs text-[#cbd5e1] space-y-1 font-mono">
                  <div>Booking ID: <span className="text-[#f95721]">SOC-{Math.floor(100000 + Math.random() * 900000)}</span></div>
                  <div>Guest Name: {reservationData.name || 'Valued Guest'}</div>
                  <div>Phone: {reservationData.phone || '+91 98765 43210'}</div>
                  <div>Status: <span className="text-emerald-400 font-bold">Confirmed</span></div>
                </div>

                <button
                  onClick={() => setIsReserveModalOpen(false)}
                  className="px-6 py-2.5 bg-[#1f2434] hover:bg-[#2b334a] text-white text-xs font-bold uppercase rounded-lg border border-[#333d54] cursor-pointer"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: ORDER FOOD MODAL */}
      {/* ========================================================================= */}
      {isOrderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#12141c] border border-[#252b3b] rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setIsOrderModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#94a3b8] hover:text-white bg-[#191d29] rounded-lg border border-[#293144] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#f95721] uppercase tracking-wider mb-2">
              <ShoppingBag className="w-4 h-4" />
              Order Food Online
            </div>
            <h3 className="text-2xl font-black text-white uppercase">Choose Delivery Platform</h3>
            <p className="text-xs text-[#94a3b8] mt-1 mb-6">
              Order directly for lowest prices and live WhatsApp tracking, or select your preferred food delivery app.
            </p>

            <div className="space-y-3">
              {/* Direct Order Card */}
              <div
                onClick={() => {
                  showToast('Direct delivery simulator active — 10% Social Club coins applied!');
                  setIsOrderModalOpen(false);
                }}
                className="p-4 rounded-xl bg-gradient-to-r from-[#1b1f2d] to-[#161822] border border-[#f95721] hover:border-white transition-all cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#f95721] flex items-center justify-center text-white font-black text-sm">
                    SOC
                  </div>
                  <div>
                    <div className="text-xs font-black text-white uppercase group-hover:text-[#f95721] transition">
                      Order Direct (Official)
                    </div>
                    <div className="text-[11px] text-emerald-400">Save 15% + WhatsApp Updates</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#f95721] group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Zomato */}
              <div
                onClick={() => {
                  window.open('https://www.zomato.com', '_blank');
                  setIsOrderModalOpen(false);
                }}
                className="p-4 rounded-xl bg-[#171a25] border border-[#262c3e] hover:border-rose-500 transition-all cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#cb202d] flex items-center justify-center text-white font-black text-xs">
                    ZOM
                  </div>
                  <div>
                    <div className="text-xs font-black text-white uppercase group-hover:text-rose-400 transition">
                      Zomato
                    </div>
                    <div className="text-[11px] text-[#94a3b8]">Order from nearest outlet on Zomato</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#94a3b8] group-hover:text-white" />
              </div>

              {/* Swiggy */}
              <div
                onClick={() => {
                  window.open('https://www.swiggy.com', '_blank');
                  setIsOrderModalOpen(false);
                }}
                className="p-4 rounded-xl bg-[#171a25] border border-[#262c3e] hover:border-[#fc8019] transition-all cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#fc8019] flex items-center justify-center text-white font-black text-xs">
                    SWG
                  </div>
                  <div>
                    <div className="text-xs font-black text-white uppercase group-hover:text-[#fc8019] transition">
                      Swiggy
                    </div>
                    <div className="text-[11px] text-[#94a3b8]">Order via Swiggy Delivery</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#94a3b8] group-hover:text-white" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 3: WORKPASS BOOKING MODAL */}
      {/* ========================================================================= */}
      {isWorkpassModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#12141c] border border-[#252b3b] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setIsWorkpassModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#94a3b8] hover:text-white bg-[#191d29] rounded-lg border border-[#293144] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!workpassSuccess ? (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#f95721] uppercase tracking-wider mb-2">
                  <Briefcase className="w-4 h-4" />
                  SOCIAL WRKS Registration
                </div>
                <h3 className="text-2xl font-black text-white uppercase">Buy Co-Working Pass</h3>
                <p className="text-xs text-[#94a3b8] mt-1 mb-6">
                  100% of your pass value is redeemable on food & beverage at the outlet.
                </p>

                <form onSubmit={handleWorkpassSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-[#cbd5e1] font-bold uppercase mb-1">Select Pass Plan</label>
                    <select
                      value={workpassData.passType}
                      onChange={(e) => setWorkpassData({ ...workpassData, passType: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#191c28] border border-[#2b3348] text-white focus:outline-none focus:border-[#f95721]"
                    >
                      {socialOfflineConfig.coworkingPasses.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} — {p.price} ({p.billing})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#cbd5e1] font-bold uppercase mb-1">Preferred Outlet Location</label>
                    <select
                      value={workpassData.outletId}
                      onChange={(e) => setWorkpassData({ ...workpassData, outletId: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#191c28] border border-[#2b3348] text-white focus:outline-none focus:border-[#f95721]"
                    >
                      {socialOfflineConfig.outlets.filter((o) => o.hasCoworking).map((o) => (
                        <option key={o.id} value={o.id}>
                          {o.name} ({o.city})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#cbd5e1] font-bold uppercase mb-1">Your Full Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Alex Sharma"
                        value={workpassData.name}
                        onChange={(e) => setWorkpassData({ ...workpassData, name: e.target.value })}
                        required
                        className="w-full p-3 rounded-xl bg-[#191c28] border border-[#2b3348] text-white focus:outline-none focus:border-[#f95721]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#cbd5e1] font-bold uppercase mb-1">Profession / Industry</label>
                      <input
                        type="text"
                        placeholder="Designer, Founder, Writer"
                        value={workpassData.profession}
                        onChange={(e) => setWorkpassData({ ...workpassData, profession: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#191c28] border border-[#2b3348] text-white focus:outline-none focus:border-[#f95721]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#cbd5e1] font-bold uppercase mb-1">Mobile Number</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={workpassData.phone}
                        onChange={(e) => setWorkpassData({ ...workpassData, phone: e.target.value })}
                        required
                        className="w-full p-3 rounded-xl bg-[#191c28] border border-[#2b3348] text-white focus:outline-none focus:border-[#f95721]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#cbd5e1] font-bold uppercase mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="alex@company.com"
                        value={workpassData.email}
                        onChange={(e) => setWorkpassData({ ...workpassData, email: e.target.value })}
                        required
                        className="w-full p-3 rounded-xl bg-[#191c28] border border-[#2b3348] text-white focus:outline-none focus:border-[#f95721]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3.5 bg-gradient-to-r from-[#f95721] to-[#e52e2e] hover:from-[#fa6c3a] hover:to-[#f03838] text-white font-black uppercase tracking-wider rounded-xl shadow-lg shadow-[#f95721]/30 transition cursor-pointer"
                  >
                    Activate Workpass & Generate Voucher
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase">Workpass Activated!</h3>
                <p className="text-xs text-[#94a3b8] max-w-sm mx-auto">
                  Your pass token is active for{' '}
                  <strong className="text-[#f95721]">
                    {socialOfflineConfig.outlets.find((o) => o.id === workpassData.outletId)?.name}
                  </strong>. Show this screen or the SMS code to the manager upon arrival.
                </p>

                <div className="p-4 rounded-xl bg-[#181c28] border border-[#2b3348] text-left text-xs text-[#cbd5e1] space-y-1 font-mono">
                  <div>Voucher Code: <span className="text-[#f95721]">WRKS-{Math.floor(200000 + Math.random() * 800000)}</span></div>
                  <div>Redeemable F&B Value: <span className="text-emerald-400 font-bold">100% of Pass Cost</span></div>
                  <div>Wi-Fi SSID: <span className="text-white">SOCIAL_GUEST_GIGABIT</span></div>
                </div>

                <button
                  onClick={() => setIsWorkpassModalOpen(false)}
                  className="px-6 py-2.5 bg-[#1f2434] hover:bg-[#2b334a] text-white text-xs font-bold uppercase rounded-lg border border-[#333d54] cursor-pointer"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 4: OUTLET DETAIL MODAL */}
      {/* ========================================================================= */}
      {selectedOutletModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#12141c] border border-[#252b3b] rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setSelectedOutletModal(null)}
              className="absolute top-4 right-4 z-10 p-2 text-white bg-black/60 hover:bg-black/80 rounded-lg border border-white/20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-60 bg-[#181b24]">
              <img
                src={selectedOutletModal.image}
                alt={selectedOutletModal.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-6">
                <span className="px-2.5 py-0.5 rounded bg-[#f95721] text-white text-[10px] font-bold uppercase">
                  {selectedOutletModal.city}
                </span>
                <h3 className="text-2xl font-black text-white uppercase mt-1">
                  {selectedOutletModal.name}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#171b26] border border-[#262e40]">
                <div>
                  <div className="text-[#94a3b8] font-bold uppercase text-[10px]">Service Hours</div>
                  <div className="text-white font-semibold mt-0.5">{selectedOutletModal.hours}</div>
                </div>
                <div>
                  <div className="text-[#94a3b8] font-bold uppercase text-[10px]">Direct Phone</div>
                  <div className="text-[#f95721] font-semibold mt-0.5">{selectedOutletModal.phone}</div>
                </div>
                <div>
                  <div className="text-[#94a3b8] font-bold uppercase text-[10px]">Coworking Facility</div>
                  <div className="text-white font-semibold mt-0.5">
                    {selectedOutletModal.hasCoworking ? 'Available (High-Speed Wi-Fi)' : 'Dining & Bar Only'}
                  </div>
                </div>
                <div>
                  <div className="text-[#94a3b8] font-bold uppercase text-[10px]">Seating Layout</div>
                  <div className="text-white font-semibold mt-0.5">
                    {selectedOutletModal.hasOutdoor ? 'Indoor Lounge + Outdoor Patio' : 'High-Energy Indoor Lounge'}
                  </div>
                </div>
              </div>

              <div>
                <div className="text-[#cbd5e1] font-bold uppercase text-[11px] mb-1">Full Location Address</div>
                <p className="text-[#94a3b8] leading-relaxed">{selectedOutletModal.address}</p>
              </div>

              <div className="pt-4 border-t border-[#1e2330] flex gap-3">
                <button
                  onClick={() => {
                    setReservationData((prev) => ({
                      ...prev,
                      city: selectedOutletModal.city,
                      outletId: selectedOutletModal.id
                    }));
                    setSelectedOutletModal(null);
                    setReservationSuccess(false);
                    setIsReserveModalOpen(true);
                  }}
                  className="flex-1 py-3 bg-[#f95721] hover:bg-[#fa6c3a] text-white font-bold uppercase rounded-xl transition cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Book Table Here
                </button>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(selectedOutletModal.name + ' ' + selectedOutletModal.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3 bg-[#1e2332] hover:bg-[#2b3346] text-white font-bold uppercase rounded-xl border border-[#353f57] transition flex items-center justify-center gap-1.5"
                >
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 5: THE SOCIAL CLUB MODAL */}
      {/* ========================================================================= */}
      {isClubModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#12141c] border border-[#252b3b] rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setIsClubModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#94a3b8] hover:text-white bg-[#191d29] rounded-lg border border-[#293144] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-3">
              <Award className="w-10 h-10 text-[#f5a623] mx-auto" />
              <h3 className="text-2xl font-black text-white uppercase">Join The Social Club</h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Enter your mobile number to check existing coins balance or register for free membership.
              </p>

              <div className="space-y-3 text-xs pt-4 text-left">
                <div>
                  <label className="block text-[#cbd5e1] font-bold uppercase mb-1">Mobile Phone (OTP verification)</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full p-3 rounded-xl bg-[#191c28] border border-[#2b3348] text-white focus:outline-none focus:border-[#f95721]"
                  />
                </div>
                <button
                  onClick={() => {
                    showToast('Club membership verified! 250 welcome coins loaded into wallet.');
                    setIsClubModalOpen(false);
                  }}
                  className="w-full py-3.5 bg-gradient-to-r from-[#f95721] to-[#e52e2e] text-white font-black uppercase tracking-wider rounded-xl shadow-lg shadow-[#f95721]/30 transition cursor-pointer"
                >
                  Send One-Time Passcode
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 6: CONFIGURABLE PLACEHOLDERS DRAWER */}
      {/* ========================================================================= */}
      {isPlaceholdersOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#12141c] border border-[#252b3b] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setIsPlaceholdersOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#94a3b8] hover:text-white bg-[#191d29] rounded-lg border border-[#293144] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#60a5fa] uppercase tracking-wider mb-2">
              <Settings className="w-4 h-4 text-[#60a5fa]" />
              Raoz Demo Factory — Business Placeholders
            </div>
            <h3 className="text-2xl font-black text-white uppercase">Integration Config</h3>
            <p className="text-xs text-[#94a3b8] mt-1 mb-6">
              When migrating to a client's private brand in Raoz Website Maker, these placeholders automatically swap to their custom credentials.
            </p>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-[#181c28] border border-[#293246]">
                <div className="text-[#64748b] font-mono text-[10px]">BRAND NAME:</div>
                <div className="text-white font-bold">{socialOfflineConfig.placeholders.brandName}</div>
              </div>
              <div className="p-3 rounded-xl bg-[#181c28] border border-[#293246]">
                <div className="text-[#64748b] font-mono text-[10px]">HEADQUARTERS ADDRESS:</div>
                <div className="text-white font-bold">{socialOfflineConfig.placeholders.corporateOffice}</div>
              </div>
              <div className="p-3 rounded-xl bg-[#181c28] border border-[#293246]">
                <div className="text-[#64748b] font-mono text-[10px]">CUSTOMER SERVICE PHONE:</div>
                <div className="text-white font-bold">{socialOfflineConfig.placeholders.customerCarePhone}</div>
              </div>
              <div className="p-3 rounded-xl bg-[#181c28] border border-[#293246]">
                <div className="text-[#64748b] font-mono text-[10px]">FEEDBACK & COLLABORATION EMAIL:</div>
                <div className="text-white font-bold">{socialOfflineConfig.placeholders.customerCareEmail}</div>
              </div>
            </div>

            <button
              onClick={() => setIsPlaceholdersOpen(false)}
              className="mt-6 w-full py-2.5 bg-[#1e2332] hover:bg-[#2a3248] text-white text-xs font-bold uppercase rounded-lg border border-[#353f57] cursor-pointer"
            >
              Close Config Inspector
            </button>
          </div>
        </div>
      )}

      {/* TOAST POPUP */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#141824] border border-[#f95721] text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <CheckCircle2 className="w-4 h-4 text-[#f95721] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
