import React, { useState, useEffect } from 'react';
import {
  phoCafeConfig,
  PhoLocation,
  PhoDish
} from './pho-cafe.config';
import {
  MapPin,
  Phone,
  Clock,
  Calendar,
  Users,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  X,
  ExternalLink,
  CheckCircle2,
  UtensilsCrossed,
  ShieldCheck,
  Flame,
  Leaf,
  ShoppingBag,
  ArrowRight,
  Search,
  Settings,
  GraduationCap,
  Heart,
  Send,
  Navigation,
  Check,
  HelpCircle,
  Menu as MenuIcon
} from 'lucide-react';

export default function PhoCafe() {
  // Navigation & Sub-view states
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Food Slider state
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const foodSlides = phoCafeConfig.foodSliderDishes;

  // Auto rotate food slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % foodSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [foodSlides.length]);

  // Location filter state
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [locationSearch, setLocationSearch] = useState('');
  const [selectedLocationModal, setSelectedLocationModal] = useState<PhoLocation | null>(null);

  // Menu filter state
  const [selectedMenuCategory, setSelectedMenuCategory] = useState<string>('all');
  const [selectedDietFilter, setSelectedDietFilter] = useState<'all' | 'gf' | 'vegan'>('all');

  // Interactive Modal States
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isNutritionModalOpen, setIsNutritionModalOpen] = useState(false);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [isPlaceholdersOpen, setIsPlaceholdersOpen] = useState(false);

  // Form states
  const [bookingData, setBookingData] = useState({
    locationId: phoCafeConfig.locations[0].id,
    date: '2026-10-14',
    time: '19:00',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    dietaryNotes: ''
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Filtered locations
  const regions = ['All', 'London', 'South & East', 'Midlands & North', 'Scotland & Wales'];
  const filteredLocations = phoCafeConfig.locations.filter((loc) => {
    const matchesRegion = selectedRegion === 'All' || loc.region === selectedRegion;
    const matchesSearch =
      loc.name.toLowerCase().includes(locationSearch.toLowerCase()) ||
      loc.address.toLowerCase().includes(locationSearch.toLowerCase()) ||
      loc.postcode.toLowerCase().includes(locationSearch.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  // Filtered menu items
  const filteredMenuItems = phoCafeConfig.menuItems.filter((dish) => {
    const matchesCategory = selectedMenuCategory === 'all' || dish.category === selectedMenuCategory;
    const matchesDiet =
      selectedDietFilter === 'all' ||
      (selectedDietFilter === 'gf' && dish.isGlutenFree) ||
      (selectedDietFilter === 'vegan' && dish.isVegan);
    return matchesCategory && matchesDiet;
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    const locName = phoCafeConfig.locations.find((l) => l.id === bookingData.locationId)?.name || 'Pho';
    setTimeout(() => {
      showToast(`Table booked at ${locName}! Confirmation sent to ${bookingData.email || 'your email'}.`);
    }, 300);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      showToast('Thank you for subscribing! Your welcome voucher has been dispatched.');
      setNewsletterEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1A1A1A] font-sans selection:bg-[#E21837] selection:text-white">
      {/* 1. TOP PROTOCOL BAR */}
      <div className="bg-[#141414] text-[#A3A3A3] text-[11px] px-4 py-2 border-b border-[#262626] flex flex-wrap items-center justify-between gap-2 z-50 relative">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 font-bold text-[#E21837] tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#E21837] animate-pulse"></span>
            PHO CAFE
          </span>
          <span className="text-[#333333]">|</span>
          <span className="hidden md:inline text-[#D4D4D4]">
            Vietnamese Street Food · 98% Gluten Free · 12-Hour Bone Broths · Accredited by Coeliac UK
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaceholdersOpen(true)}
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#262626] hover:bg-[#333333] text-[#93c5fd] border border-[#404040] transition cursor-pointer"
          >
            <Settings className="w-3 h-3 text-[#60a5fa]" />
            <span>Placeholders Mode</span>
          </button>
          <span className="px-2 py-0.5 rounded bg-emerald-950/90 border border-emerald-700/80 text-emerald-300 font-mono">
            Template #3
          </span>
        </div>
      </div>

      {/* 2. DISTINCTIVE FLOATING BLACK PILL HEADER */}
      <header className="sticky top-3 z-40 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="bg-black text-white rounded-[22px] py-2.5 px-5 sm:px-6 flex items-center justify-between gap-4 shadow-2xl border border-white/10 backdrop-blur-md">
          {/* Official Pho Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection('home');
            }}
            className="flex items-center gap-2 group cursor-pointer flex-shrink-0"
          >
            <img
              src="/assets/pho-cafe/pho-logo.svg"
              alt="Pho Vietnamese Street Food"
              className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 text-[13px] font-bold tracking-wider uppercase">
            <a
              href="#menu"
              onClick={() => setActiveSection('menu')}
              className={`px-3.5 py-2 rounded-full transition-colors ${
                activeSection === 'menu' ? 'bg-[#E21837] text-white' : 'text-[#D4D4D4] hover:text-white hover:bg-white/10'
              }`}
            >
              Menus
            </a>
            <a
              href="#locations"
              onClick={() => setActiveSection('locations')}
              className={`px-3.5 py-2 rounded-full transition-colors ${
                activeSection === 'locations' ? 'bg-[#E21837] text-white' : 'text-[#D4D4D4] hover:text-white hover:bg-white/10'
              }`}
            >
              Locations ({phoCafeConfig.metrics.locationsCount})
            </a>
            <a
              href="#nutrition"
              onClick={() => setActiveSection('nutrition')}
              className={`px-3.5 py-2 rounded-full transition-colors ${
                activeSection === 'nutrition' ? 'bg-[#E21837] text-white' : 'text-[#D4D4D4] hover:text-white hover:bg-white/10'
              }`}
            >
              Nutrition & Coeliac
            </a>
            <a
              href="#pho-to-go"
              onClick={() => setActiveSection('pho-to-go')}
              className={`px-3.5 py-2 rounded-full transition-colors ${
                activeSection === 'pho-to-go' ? 'bg-[#E21837] text-white' : 'text-[#D4D4D4] hover:text-white hover:bg-white/10'
              }`}
            >
              Pho To Go
            </a>
            <a
              href="#students"
              onClick={() => setActiveSection('students')}
              className={`px-3.5 py-2 rounded-full transition-colors ${
                activeSection === 'students' ? 'bg-[#E21837] text-white' : 'text-[#D4D4D4] hover:text-white hover:bg-white/10'
              }`}
            >
              Students (15% Off)
            </a>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => {
                const el = document.getElementById('locations');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                setActiveSection('locations');
              }}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition flex items-center justify-center cursor-pointer"
              title="Find A Pho Near You"
            >
              <MapPin className="w-4 h-4 text-[#FFCE00]" />
            </button>

            <button
              onClick={() => {
                setBookingSuccess(false);
                setIsBookModalOpen(true);
              }}
              className="px-5 py-2 rounded-full bg-white hover:bg-[#EEE4DA] text-black text-xs font-black tracking-wider uppercase transition shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E21837]" />
              <span>Book a Table</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-2 bg-black text-white rounded-2xl p-5 border border-white/15 shadow-2xl space-y-4 animate-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2 text-xs font-bold uppercase tracking-wider">
              <a
                href="#menu"
                onClick={() => {
                  setActiveSection('menu');
                  setMobileMenuOpen(false);
                }}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 flex items-center gap-2 border border-white/10"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#E21837]" />
                Our Menus
              </a>
              <a
                href="#locations"
                onClick={() => {
                  setActiveSection('locations');
                  setMobileMenuOpen(false);
                }}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 flex items-center gap-2 border border-white/10"
              >
                <MapPin className="w-4 h-4 text-[#FFCE00]" />
                Locations (45+)
              </a>
              <a
                href="#nutrition"
                onClick={() => {
                  setActiveSection('nutrition');
                  setMobileMenuOpen(false);
                }}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 flex items-center gap-2 border border-white/10"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                98% Gluten Free
              </a>
              <a
                href="#pho-to-go"
                onClick={() => {
                  setActiveSection('pho-to-go');
                  setMobileMenuOpen(false);
                }}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 flex items-center gap-2 border border-white/10"
              >
                <ShoppingBag className="w-4 h-4 text-[#E21837]" />
                Pho To Go
              </a>
              <a
                href="#students"
                onClick={() => {
                  setActiveSection('students');
                  setMobileMenuOpen(false);
                }}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 flex items-center gap-2 border border-white/10 col-span-2"
              >
                <GraduationCap className="w-4 h-4 text-[#FFCE00]" />
                Students (15% Off All Year)
              </a>
            </div>

            <div className="flex gap-2 pt-2 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsOrderModalOpen(true);
                }}
                className="flex-1 py-3 bg-white/10 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-[#E21837]" />
                Order To Go
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBookingSuccess(false);
                  setIsBookModalOpen(true);
                }}
                className="flex-1 py-3 bg-[#E21837] text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                Book Table
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION — LARGE VIETNAMESE STREET FOOD BANNER */}
      <section id="home" className="relative min-h-[560px] lg:min-h-[680px] flex items-center justify-center overflow-hidden -mt-16 sm:-mt-20 pt-24 pb-16">
        {/* Background Image with Street Vibe */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/pho-cafe/hero-bg.webp"
            alt="Pho Vietnamese Street Food"
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FBF9F5] via-transparent to-black/60"></div>
          <div className="absolute inset-0 bg-radial from-transparent to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          {/* Lines & Bowl Neon Graphic Emblem */}
          <div className="flex items-center gap-2 mb-4 opacity-90">
            <img
              src="/assets/pho-cafe/pho-logo-lines.svg"
              alt=""
              className="h-6 w-auto"
            />
            <img
              src="/assets/pho-cafe/pho-logo-bowl.svg"
              alt=""
              className="h-8 w-auto"
            />
            <img
              src="/assets/pho-cafe/pho-logo-lines.svg"
              alt=""
              className="h-6 w-auto"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/70 border border-[#E21837]/50 text-white font-mono text-xs uppercase tracking-widest mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#E21837] animate-ping"></span>
            Coeliac UK Accredited · 98% Gluten Free
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.95] drop-shadow-2xl">
            VIETNAMESE
            <span className="block text-[#FFCE00]">STREET FOOD</span>
          </h1>

          <p className="mt-5 text-sm sm:text-lg text-[#EEE4DA] max-w-2xl font-medium leading-relaxed drop-shadow">
            Nutritious rice noodle soups simmered for a minimum of 12 hours. Healthy, vibrant street food cooked fresh from scratch every single day.
          </p>

          {/* Action Triggers */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                setBookingSuccess(false);
                setIsBookModalOpen(true);
              }}
              className="px-8 py-3.5 bg-[#E21837] hover:bg-[#b8122c] text-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-full shadow-xl shadow-[#E21837]/30 transition transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Table</span>
            </button>
            <a
              href="#menu"
              className="px-8 py-3.5 bg-black/80 hover:bg-black text-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-full backdrop-blur-md border border-white/20 transition flex items-center gap-2 cursor-pointer"
            >
              <UtensilsCrossed className="w-4 h-4 text-[#FFCE00]" />
              <span>Explore Menu</span>
            </a>
            <button
              onClick={() => setIsOrderModalOpen(true)}
              className="px-7 py-3.5 bg-white/90 hover:bg-white text-black text-xs sm:text-sm font-black uppercase tracking-wider rounded-full transition flex items-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#E21837]" />
              <span>Pho To Go</span>
            </button>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-12 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center w-full max-w-3xl text-white">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-[#FFCE00]">{phoCafeConfig.metrics.glutenFreePercentage}</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#D4D4D4] mt-0.5">Gluten Free Menu</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white">{phoCafeConfig.metrics.brothSimmerHours}</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#D4D4D4] mt-0.5">Slow-Simmered Broth</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-[#E21837]">{phoCafeConfig.metrics.locationsCount}</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#D4D4D4] mt-0.5">Restaurants Across UK</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white">0%</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#D4D4D4] mt-0.5">Frozen Broths or Base</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RED PROMOTIONAL DUO CARDS */}
      <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto -mt-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Our Menu */}
          <div className="bg-[#E21837] rounded-3xl p-8 sm:p-12 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-white/5 rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>

            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-black/30 text-white font-mono text-[11px] uppercase tracking-wider">
                Fresh Street Food
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase leading-tight">
                Our Menu
              </h2>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-md">
                Everything is made fresh in each restaurant, every day. Crispy spring rolls, fragrant curries, bun noodles and 12-hour broths.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-black text-white hover:bg-neutral-900 text-xs font-black uppercase tracking-wider transition-all shadow-lg"
              >
                <span>View Menu</span>
                <ArrowRight className="w-4 h-4 text-[#FFCE00]" />
              </a>
            </div>
          </div>

          {/* Card 2: Pho To Go */}
          <div id="pho-to-go" className="bg-[#E21837] rounded-3xl p-8 sm:p-12 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-white/5 rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>

            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-black/30 text-white font-mono text-[11px] uppercase tracking-wider">
                Click & Collect or Delivery
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase leading-tight">
                Pho To Go
              </h2>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-md">
                Order hot, comforting Vietnamese food for collection or delivery straight to your desk or sofa in sustainable packaging.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <button
                onClick={() => setIsOrderModalOpen(true)}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black hover:bg-[#EEE4DA] text-xs font-black uppercase tracking-wider transition-all shadow-lg cursor-pointer"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4 text-[#E21837]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOD SLIDER & NUTRITION SECTION ("SOMETHING PHO EVERYONE") */}
      <section id="nutrition" className="py-20 bg-[#F5EFEB] border-y border-[#E5DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E21837] uppercase tracking-widest mb-2">
              <Heart className="w-3.5 h-3.5 fill-[#E21837]" />
              Health & Freshness
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-black uppercase tracking-tight">
              Something Pho Everyone
            </h2>
            <p className="text-sm text-[#525252] mt-3 leading-relaxed">
              Vietnamese cuisine is celebrated worldwide for its clean, fresh ingredients and light, nourishing qualities. At Pho, healthy eating is delicious and uncompromised.
            </p>
          </div>

          {/* Interactive Dish Showcase Carousel */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#E5DDD5] mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Dish Visual */}
              <div className="lg:col-span-6 relative flex items-center justify-center p-4">
                <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#F5EFEB] flex items-center justify-center relative overflow-hidden shadow-inner">
                  <img
                    src={foodSlides[currentSlideIndex].image}
                    alt={foodSlides[currentSlideIndex].title}
                    className="w-full h-full object-contain p-4 transition-all duration-700 transform hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#E21837] text-white text-[11px] font-black uppercase tracking-wider shadow">
                    {foodSlides[currentSlideIndex].badge}
                  </span>
                </div>
              </div>

              {/* Dish Description & Controls */}
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Accredited by Coeliac UK · Gluten Free
                </div>

                <h3 className="text-2xl sm:text-4xl font-black text-black uppercase leading-tight">
                  {foodSlides[currentSlideIndex].title}
                </h3>

                <p className="text-sm text-[#525252] leading-relaxed">
                  {foodSlides[currentSlideIndex].description}
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => setIsNutritionModalOpen(true)}
                    className="px-6 py-2.5 rounded-full bg-black text-white hover:bg-neutral-800 text-xs font-bold uppercase tracking-wider transition cursor-pointer"
                  >
                    Nutrition Details
                  </button>
                  <button
                    onClick={() => {
                      showToast(`Added ${foodSlides[currentSlideIndex].title} to order!`);
                      setIsOrderModalOpen(true);
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#E21837] text-white hover:bg-[#b8122c] text-xs font-bold uppercase tracking-wider transition cursor-pointer"
                  >
                    Order Pho To Go
                  </button>
                </div>

                {/* Slider pagination */}
                <div className="flex items-center justify-between pt-6 border-t border-[#E5DDD5]">
                  <div className="flex items-center gap-2">
                    {foodSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlideIndex(idx)}
                        className={`h-2.5 rounded-full transition-all cursor-pointer ${
                          currentSlideIndex === idx ? 'w-8 bg-[#E21837]' : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentSlideIndex((prev) => (prev - 1 + foodSlides.length) % foodSlides.length)}
                      className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-black transition cursor-pointer"
                      aria-label="Previous Dish"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % foodSlides.length)}
                      className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-black transition cursor-pointer"
                      aria-label="Next Dish"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Nutrition Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {phoCafeConfig.nutritionPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E5DDD5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#E21837]/10 text-[#E21837] flex items-center justify-center mb-4">
                    {pillar.icon === 'ShieldCheck' && <ShieldCheck className="w-6 h-6" />}
                    {pillar.icon === 'Flame' && <Flame className="w-6 h-6" />}
                    {pillar.icon === 'Leaf' && <Leaf className="w-6 h-6" />}
                    {pillar.icon === 'Sparkles' && <Sparkles className="w-6 h-6" />}
                  </div>
                  <h4 className="text-lg font-black text-black uppercase tracking-tight mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#525252] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <button
                  onClick={() => setIsNutritionModalOpen(true)}
                  className="mt-6 text-[11px] font-bold text-[#E21837] uppercase tracking-wider inline-flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <span>Nutrition Info</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FULL MENU SECTION */}
      <section id="menu" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E21837] uppercase tracking-widest mb-2">
              <UtensilsCrossed className="w-3.5 h-3.5" />
              Cooked Fresh From Scratch
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black uppercase">
              Our Complete Menu
            </h2>
            <p className="text-sm text-[#525252] mt-2 max-w-xl">
              Freshly prepared street food, 12-hour simmered broths, rice noodle bowls and fragrant curries. 98% gluten free and accredited by Coeliac UK.
            </p>
          </div>

          {/* Dietary Filter Pills */}
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-full border border-[#E5DDD5] text-xs font-bold uppercase shadow-sm">
            <button
              onClick={() => setSelectedDietFilter('all')}
              className={`px-4 py-2 rounded-full transition cursor-pointer ${
                selectedDietFilter === 'all' ? 'bg-[#E21837] text-white' : 'text-[#737373] hover:text-black'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setSelectedDietFilter('gf')}
              className={`px-4 py-2 rounded-full transition flex items-center gap-1.5 cursor-pointer ${
                selectedDietFilter === 'gf' ? 'bg-black text-white' : 'text-[#737373] hover:text-black'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Gluten Free
            </button>
            <button
              onClick={() => setSelectedDietFilter('vegan')}
              className={`px-4 py-2 rounded-full transition flex items-center gap-1.5 cursor-pointer ${
                selectedDietFilter === 'vegan' ? 'bg-emerald-600 text-white' : 'text-[#737373] hover:text-black'
              }`}
            >
              <Leaf className="w-3.5 h-3.5" />
              Vegan
            </button>
          </div>
        </div>

        {/* Menu Category Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none text-xs font-bold uppercase tracking-wider">
          {[
            { id: 'all', label: 'All Dishes' },
            { id: 'starters', label: 'Street Food & Starters' },
            { id: 'pho-soups', label: 'Classic Pho Soups' },
            { id: 'bun-noodles', label: 'Bún Vermicelli Bowls' },
            { id: 'curries', label: 'Vietnamese Curries' },
            { id: 'drinks', label: 'Vietnamese Coffee & Drinks' },
            { id: 'desserts', label: 'Desserts' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedMenuCategory(cat.id)}
              className={`px-4 py-2.5 rounded-full whitespace-nowrap transition cursor-pointer ${
                selectedMenuCategory === cat.id
                  ? 'bg-black text-white shadow-md'
                  : 'bg-white text-[#525252] hover:text-black hover:bg-neutral-100 border border-[#E5DDD5]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMenuItems.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-2xl p-6 border border-[#E5DDD5] hover:border-[#E21837]/50 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="text-[11px] font-mono text-[#737373] uppercase">{dish.categoryLabel}</span>
                  <div className="flex items-center gap-1.5">
                    {dish.isGlutenFree && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase border border-emerald-200">
                        GF
                      </span>
                    )}
                    {dish.isVegan && (
                      <span className="px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase border border-green-200">
                        VEGAN
                      </span>
                    )}
                    {dish.isPopular && (
                      <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold uppercase border border-amber-200">
                        POPULAR
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-black text-black group-hover:text-[#E21837] transition-colors uppercase">
                  {dish.name}
                </h3>
                {dish.vietnameseName && (
                  <div className="text-xs font-serif italic text-[#737373] mt-0.5">
                    {dish.vietnameseName}
                  </div>
                )}
                <p className="mt-2 text-xs text-[#525252] leading-relaxed">
                  {dish.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F5EFEB] flex items-center justify-between">
                <div>
                  <span className="text-lg font-black text-black font-mono">{dish.price}</span>
                  <span className="text-[11px] text-[#A3A3A3] ml-2 font-mono">({dish.calories})</span>
                </div>
                <button
                  onClick={() => {
                    showToast(`Added ${dish.name} to Pho To Go order!`);
                    setIsOrderModalOpen(true);
                  }}
                  className="px-3.5 py-1.5 rounded-full bg-neutral-100 hover:bg-[#E21837] hover:text-white text-xs font-bold text-black transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. "FIND A PHO" (LOCATION SEARCH & RESTAURANT FINDER) */}
      <section id="locations" className="py-20 bg-[#F5EFEB] border-t border-[#E5DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E21837] uppercase tracking-widest mb-2">
                <MapPin className="w-3.5 h-3.5" />
                Across the UK
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black uppercase">
                Find A Pho
              </h2>
              <p className="text-sm text-[#525252] mt-2 max-w-xl">
                45+ restaurants across London, England, Scotland and Wales. Find your nearest location, check opening times, or book a table.
              </p>
            </div>

            {/* Location Search Bar */}
            <div className="w-full md:w-80 relative">
              <Search className="w-4 h-4 text-[#A3A3A3] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search town, city or postcode..."
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-[#E5DDD5] text-xs text-black placeholder-[#A3A3A3] focus:outline-none focus:border-[#E21837] shadow-sm"
              />
            </div>
          </div>

          {/* Region Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none text-xs font-bold uppercase tracking-wider">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition cursor-pointer ${
                  selectedRegion === reg
                    ? 'bg-[#E21837] text-white shadow-md'
                    : 'bg-white text-[#525252] hover:text-black hover:bg-neutral-100 border border-[#E5DDD5]'
                }`}
              >
                {reg} {reg === 'All' ? `(${phoCafeConfig.locations.length})` : ''}
              </button>
            ))}
          </div>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((loc) => (
              <div
                key={loc.id}
                className="bg-white rounded-2xl p-6 border border-[#E5DDD5] hover:border-[#E21837]/50 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-[#525252] text-[10px] font-bold uppercase">
                      {loc.region}
                    </span>
                    {loc.hasClickAndCollect && (
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-[#E21837] text-[10px] font-bold uppercase">
                        Click & Collect
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-black text-black group-hover:text-[#E21837] transition-colors uppercase">
                    {loc.name}
                  </h3>

                  <div className="mt-3 space-y-2 text-xs text-[#525252]">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#E21837] shrink-0 mt-0.5" />
                      <span>{loc.address}, {loc.postcode}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#FFCE00] shrink-0" />
                      <span>{loc.hours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                      <a href={`tel:${loc.phone}`} className="hover:text-black font-semibold">
                        {loc.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F5EFEB] flex items-center gap-2">
                  <button
                    onClick={() => {
                      setBookingData((prev) => ({
                        ...prev,
                        locationId: loc.id
                      }));
                      setBookingSuccess(false);
                      setIsBookModalOpen(true);
                    }}
                    className="flex-1 py-2.5 bg-[#E21837] hover:bg-[#b8122c] text-white text-xs font-black uppercase tracking-wider rounded-full transition flex items-center justify-center gap-1.5 shadow-md shadow-[#E21837]/20 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book Table
                  </button>
                  <button
                    onClick={() => setSelectedLocationModal(loc)}
                    className="px-3.5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-black text-xs font-bold rounded-full transition cursor-pointer"
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. "JUST PHO STUDENTS!" (STUDENT DISCOUNT PROMOTION) */}
      <section id="students" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#E21837] rounded-3xl overflow-hidden shadow-2xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Student Image Banner */}
            <div className="lg:col-span-6 h-72 sm:h-96 lg:h-[480px] relative overflow-hidden">
              <img
                src="/assets/pho-cafe/students-promo.webp"
                alt="Just Pho Students 15% Off"
                className="w-full h-full object-cover object-center filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="px-3.5 py-1.5 rounded-full bg-black text-[#FFCE00] font-black text-xs uppercase tracking-widest shadow">
                  15% OFF FOOD
                </span>
              </div>
            </div>

            {/* Promo Text & Action */}
            <div className="lg:col-span-6 p-8 sm:p-12 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-white/90 uppercase tracking-widest">
                <GraduationCap className="w-4 h-4 text-[#FFCE00]" />
                Student Perk
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase leading-tight">
                JUST PHO STUDENTS!
              </h2>

              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                Fuel your study sessions with fresh, healthy Vietnamese street food. Flash your Student Beans ID or valid university card at any Pho location for <strong>15% off food</strong> all year round, dine-in and takeaway.
              </p>

              <div className="space-y-2 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FFCE00]" />
                  <span>Valid Monday to Sunday on all dine-in and collection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FFCE00]" />
                  <span>Applies to steaming pho bowls, crispy spring rolls, and noodles</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setIsStudentModalOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-black text-white hover:bg-neutral-900 text-xs font-black uppercase tracking-wider transition shadow-xl inline-flex items-center gap-2 cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4 text-[#FFCE00]" />
                  <span>Claim Student Discount</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. OPERATIONS VOICES & SOCIAL GALLERY */}
      <section className="py-20 bg-[#F5EFEB] border-t border-[#E5DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-[#E21837] uppercase tracking-widest block mb-2">
              Our People & Passion
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-black uppercase tracking-tight">
              Behind the Broth
            </h2>
            <p className="text-sm text-[#525252] mt-2">
              Meet the managers and chefs ensuring every single cauldron meets our strict 12-hour standards.
            </p>
          </div>

          {/* Team Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {phoCafeConfig.teamQuotes.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E5DDD5] shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#E21837]"
                    />
                    <div>
                      <h4 className="text-base font-black text-black uppercase">{member.name}</h4>
                      <div className="text-xs text-[#737373]">{member.role}</div>
                    </div>
                  </div>
                  <blockquote className="text-xs text-[#525252] leading-relaxed italic">
                    "{member.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          {/* Real Pho Atmosphere Mosaic Gallery */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black text-black uppercase tracking-tight flex items-center gap-2">
                <span>#PhoCafe on Instagram</span>
              </h3>
              <a
                href="https://www.instagram.com/phorestaurant/"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-[#E21837] uppercase tracking-wider hover:underline"
              >
                Follow @phorestaurant
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
              {[
                '/assets/pho-cafe/gallery-1.webp',
                '/assets/pho-cafe/gallery-2.webp',
                '/assets/pho-cafe/gallery-3.webp',
                '/assets/pho-cafe/gallery-4.webp',
                '/assets/pho-cafe/gallery-5.webp',
                '/assets/pho-cafe/gallery-6.webp',
                '/assets/pho-cafe/gallery-7.webp'
              ].map((imgSrc, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden shadow-sm group">
                  <img
                    src={imgSrc}
                    alt={`Pho Atmosphere ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. NEWSLETTER SIGNUP */}
      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-mono text-[#FFCE00] uppercase tracking-widest">
            Join The Pho Family
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
            Sign Up For Exclusive News & Offers
          </h2>
          <p className="text-xs sm:text-sm text-[#A3A3A3] max-w-lg mx-auto">
            Get early access to seasonal specials, secret off-menu items, and a complimentary serving of summer rolls on your birthday.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="pt-4 max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email address..."
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              className="flex-1 px-5 py-3 rounded-full bg-[#262626] border border-[#404040] text-xs text-white placeholder-[#737373] focus:outline-none focus:border-[#E21837]"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-[#E21837] hover:bg-[#b8122c] text-white text-xs font-black uppercase tracking-wider transition shadow-lg shrink-0 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-black text-[#A3A3A3] text-xs pt-16 pb-12 border-t border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-4">
              <img
                src="/assets/pho-cafe/footer-logo.svg"
                alt="Pho Logo"
                className="h-10 w-auto object-contain"
              />
              <p className="text-xs text-[#737373] max-w-sm leading-relaxed">
                Founded in 2005 by Stephen and Juliette Wall after travelling around Vietnam. 98% gluten free and accredited by Coeliac UK.
              </p>
              <div className="text-[11px] text-[#525252]">
                Pho HQ: 48-49 Russell Square, Bloomsbury, London WC1B 4JP
              </div>
              <div className="flex items-center gap-2 pt-2">
                <span className="px-2.5 py-1 rounded bg-[#1A1A1A] text-emerald-400 font-bold border border-emerald-900 text-[10px]">
                  Coeliac UK Approved
                </span>
                <span className="px-2.5 py-1 rounded bg-[#1A1A1A] text-[#FFCE00] font-bold border border-yellow-900 text-[10px]">
                  12-Hour Broths
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Locations</h4>
              <ul className="space-y-2">
                <li><a href="#locations" onClick={() => setSelectedRegion('London')} className="hover:text-white transition">London Borough Market</a></li>
                <li><a href="#locations" onClick={() => setSelectedRegion('London')} className="hover:text-white transition">Oxford Circus</a></li>
                <li><a href="#locations" onClick={() => setSelectedRegion('London')} className="hover:text-white transition">Covent Garden</a></li>
                <li><a href="#locations" onClick={() => setSelectedRegion('Midlands & North')} className="hover:text-white transition">Manchester Corn Exchange</a></li>
                <li><a href="#locations" onClick={() => setSelectedRegion('Scotland & Wales')} className="hover:text-white transition">Edinburgh St James</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Our Food</h4>
              <ul className="space-y-2">
                <li><a href="#menu" className="hover:text-white transition">Classic Pho Soups</a></li>
                <li><a href="#menu" className="hover:text-white transition">Bún Vermicelli Bowls</a></li>
                <li><a href="#menu" className="hover:text-white transition">Vietnamese Curries</a></li>
                <li><a href="#nutrition" className="hover:text-white transition">Gluten Free Guide</a></li>
                <li><a href="#nutrition" className="hover:text-white transition">Vegan Menu</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Get In Touch</h4>
              <ul className="space-y-2">
                <li><a href="mailto:info@phocafe.co.uk" className="hover:text-white transition">info@phocafe.co.uk</a></li>
                <li><a href="tel:+442074364488" className="hover:text-white transition">+44 (0)20 7436 4488</a></li>
                <li><a href="#students" className="hover:text-white transition">Just Pho Students</a></li>
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

          <div className="pt-8 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#525252]">
            <div>
              © 2026 Pho Cafe Limited. Recreated faithfully for Raoz Demo Factory (Template #3).
            </div>
            <div className="flex items-center gap-4">
              <span>Template #3: pho-cafe</span>
              <span>•</span>
              <span>100% Isolated Architecture</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* MODAL 1: BOOK A TABLE MODAL */}
      {/* ========================================================================= */}
      {isBookModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setIsBookModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-black bg-neutral-100 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingSuccess ? (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#E21837] uppercase tracking-wider mb-2">
                  <Calendar className="w-4 h-4" />
                  Table Reservation
                </div>
                <h3 className="text-2xl font-black text-black uppercase">Book A Table at Pho</h3>
                <p className="text-xs text-[#525252] mt-1 mb-6">
                  Select your restaurant, date, and party size. Walk-ins are also always welcome!
                </p>

                <form onSubmit={handleBookingSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-black font-bold uppercase mb-1">Select Restaurant</label>
                    <select
                      value={bookingData.locationId}
                      onChange={(e) => setBookingData({ ...bookingData, locationId: e.target.value })}
                      className="w-full p-3 rounded-xl bg-neutral-100 border border-neutral-300 text-black focus:outline-none focus:border-[#E21837]"
                    >
                      {phoCafeConfig.locations.map((loc) => (
                        <option key={loc.id} value={loc.id}>
                          {loc.name} ({loc.region})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-black font-bold uppercase mb-1">Date</label>
                      <input
                        type="date"
                        value={bookingData.date}
                        onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                        required
                        className="w-full p-3 rounded-xl bg-neutral-100 border border-neutral-300 text-black focus:outline-none focus:border-[#E21837]"
                      />
                    </div>
                    <div>
                      <label className="block text-black font-bold uppercase mb-1">Time Slot</label>
                      <select
                        value={bookingData.time}
                        onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                        className="w-full p-3 rounded-xl bg-neutral-100 border border-neutral-300 text-black focus:outline-none focus:border-[#E21837]"
                      >
                        <option value="12:00">12:00 PM (Lunch)</option>
                        <option value="13:00">01:00 PM</option>
                        <option value="17:30">05:30 PM (Early Dinner)</option>
                        <option value="19:00">07:00 PM (Dinner)</option>
                        <option value="20:30">08:30 PM</option>
                        <option value="21:30">09:30 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-black font-bold uppercase mb-1">Number of Guests</label>
                      <select
                        value={bookingData.guests}
                        onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })}
                        className="w-full p-3 rounded-xl bg-neutral-100 border border-neutral-300 text-black focus:outline-none focus:border-[#E21837]"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="6">6 Guests</option>
                        <option value="8">8+ Guests (Large Party)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-black font-bold uppercase mb-1">Your Full Name</label>
                      <input
                        type="text"
                        placeholder="Emma Watson"
                        value={bookingData.name}
                        onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                        required
                        className="w-full p-3 rounded-xl bg-neutral-100 border border-neutral-300 text-black focus:outline-none focus:border-[#E21837]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-black font-bold uppercase mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="emma@example.com"
                        value={bookingData.email}
                        onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                        required
                        className="w-full p-3 rounded-xl bg-neutral-100 border border-neutral-300 text-black focus:outline-none focus:border-[#E21837]"
                      />
                    </div>
                    <div>
                      <label className="block text-black font-bold uppercase mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="07123 456789"
                        value={bookingData.phone}
                        onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                        required
                        className="w-full p-3 rounded-xl bg-neutral-100 border border-neutral-300 text-black focus:outline-none focus:border-[#E21837]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-black font-bold uppercase mb-1">Dietary Requirements / Allergies</label>
                    <input
                      type="text"
                      placeholder="e.g. Coeliac / Vegan / Nut allergy"
                      value={bookingData.dietaryNotes}
                      onChange={(e) => setBookingData({ ...bookingData, dietaryNotes: e.target.value })}
                      className="w-full p-3 rounded-xl bg-neutral-100 border border-neutral-300 text-black focus:outline-none focus:border-[#E21837]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3.5 bg-[#E21837] hover:bg-[#b8122c] text-white font-black uppercase tracking-wider rounded-full shadow-lg shadow-[#E21837]/30 transition cursor-pointer"
                  >
                    Confirm Table Booking
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-black uppercase">Table Booked!</h3>
                <p className="text-xs text-[#525252] max-w-sm mx-auto">
                  Your table for <strong className="text-black">{bookingData.guests} guests</strong> at{' '}
                  <strong className="text-[#E21837]">
                    {phoCafeConfig.locations.find((l) => l.id === bookingData.locationId)?.name}
                  </strong>{' '}
                  has been reserved for <strong className="text-black">{bookingData.date}</strong> at{' '}
                  <strong className="text-black">{bookingData.time}</strong>.
                </p>

                <div className="p-4 rounded-2xl bg-neutral-100 text-left text-xs text-[#525252] space-y-1 font-mono border border-neutral-200">
                  <div>Booking Reference: <span className="text-[#E21837] font-bold">PHO-{Math.floor(100000 + Math.random() * 900000)}</span></div>
                  <div>Guest: {bookingData.name || 'Emma Watson'}</div>
                  <div>Dietary: {bookingData.dietaryNotes || 'Standard Menu (98% Gluten Free)'}</div>
                  <div>Status: <span className="text-emerald-700 font-bold">Confirmed</span></div>
                </div>

                <button
                  onClick={() => setIsBookModalOpen(false)}
                  className="px-6 py-2.5 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase rounded-full cursor-pointer"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: PHO TO GO ORDER MODAL */}
      {/* ========================================================================= */}
      {isOrderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setIsOrderModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-black bg-neutral-100 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#E21837] uppercase tracking-wider mb-2">
              <ShoppingBag className="w-4 h-4" />
              Pho To Go
            </div>
            <h3 className="text-2xl font-black text-black uppercase">How would you like your Pho?</h3>
            <p className="text-xs text-[#525252] mt-1 mb-6">
              Select your pickup restaurant for Click & Collect or order direct to your door with Deliveroo.
            </p>

            <div className="space-y-3">
              {/* Click & Collect Option */}
              <div
                onClick={() => {
                  showToast('Click & Collect simulator active — Ready in 20 minutes!');
                  setIsOrderModalOpen(false);
                }}
                className="p-4 rounded-2xl bg-neutral-50 border-2 border-[#E21837] hover:bg-rose-50/40 transition-all cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E21837] text-white flex items-center justify-center font-bold">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-black uppercase group-hover:text-[#E21837] transition">
                      Click & Collect (Direct)
                    </div>
                    <div className="text-[11px] text-[#525252]">Pick up warm broth & noodles in 20 mins</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#E21837] group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Deliveroo Option */}
              <div
                onClick={() => {
                  window.open('https://deliveroo.co.uk', '_blank');
                  setIsOrderModalOpen(false);
                }}
                className="p-4 rounded-2xl bg-neutral-50 border border-neutral-300 hover:border-[#00cdbc] transition-all cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00cdbc] text-white flex items-center justify-center font-black text-xs">
                    DEL
                  </div>
                  <div>
                    <div className="text-xs font-black text-black uppercase group-hover:text-[#00cdbc] transition">
                      Deliveroo Delivery
                    </div>
                    <div className="text-[11px] text-[#525252]">Delivered fresh by local rider</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#737373] group-hover:text-black" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 3: NUTRITION & ALLERGEN DETAILS */}
      {/* ========================================================================= */}
      {isNutritionModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setIsNutritionModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-black bg-neutral-100 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              Coeliac UK Accredited Guide
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-black uppercase">
              Nutritional & Allergen Standards
            </h3>
            <p className="text-xs text-[#525252] mt-1 mb-6">
              Pho was the first UK national restaurant chain to be fully accredited by Coeliac UK. 98% of our menu is naturally gluten free.
            </p>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2">
                <div className="font-bold uppercase flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Gluten Free Guarantee
                </div>
                <p className="leading-relaxed">
                  All our noodle soups, bun salads, and stir-fries are made with pure rice noodles and naturally gluten-free tamari/soy sauce alternatives. Our spring rolls are wrapped in rice paper, not wheat.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-900 space-y-2">
                <div className="font-bold uppercase flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#E21837]" />
                  12-Hour Bone Broth Science
                </div>
                <p className="leading-relaxed text-[#525252]">
                  Simmered overnight with roasted marrow bones, charred ginger, star anise, cardamom pods and cinnamon. Natural gelatin and amino acids make our broths gut-friendly, low-fat, and nutrient-dense.
                </p>
              </div>

              <div className="border border-neutral-200 rounded-2xl overflow-hidden">
                <div className="bg-neutral-100 px-4 py-2 font-bold text-black uppercase text-[11px]">
                  Sample Calorie & Nutrient Profile
                </div>
                <div className="divide-y divide-neutral-200">
                  {phoCafeConfig.menuItems.slice(0, 5).map((dish) => (
                    <div key={dish.id} className="p-3 flex items-center justify-between text-[11px]">
                      <div>
                        <div className="font-bold text-black">{dish.name}</div>
                        <div className="text-[#737373]">{dish.isGlutenFree ? 'Gluten-Free' : ''} {dish.isVegan ? '· Vegan' : ''}</div>
                      </div>
                      <div className="font-mono font-bold text-[#E21837]">{dish.calories}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsNutritionModalOpen(false)}
              className="mt-6 w-full py-3 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase rounded-full cursor-pointer"
            >
              Close Nutrition Guide
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 4: STUDENT DISCOUNT MODAL */}
      {/* ========================================================================= */}
      {isStudentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative text-center">
            <button
              onClick={() => setIsStudentModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-black bg-neutral-100 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-[#E21837]/10 text-[#E21837] flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-black uppercase">15% Student Discount</h3>
            <p className="text-xs text-[#525252] mt-1 mb-6 leading-relaxed">
              Show this digital pass or your Student Beans ID at the till when ordering to apply 15% off your food bill.
            </p>

            <div className="p-4 rounded-2xl bg-neutral-100 border border-neutral-200 font-mono text-left space-y-1 text-xs">
              <div className="text-[#E21837] font-bold text-base">CODE: PHO-STUDENT-15</div>
              <div className="text-neutral-600">Applies to: All Pho Dine-In & Takeaway</div>
              <div className="text-neutral-600">Expiry: Active All Academic Year</div>
            </div>

            <button
              onClick={() => {
                showToast('Student discount code copied to clipboard!');
                setIsStudentModalOpen(false);
              }}
              className="mt-6 w-full py-3 bg-[#E21837] hover:bg-[#b8122c] text-white text-xs font-bold uppercase rounded-full cursor-pointer shadow-lg"
            >
              Copy Code & Close
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 5: LOCATION DETAIL MODAL */}
      {/* ========================================================================= */}
      {selectedLocationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedLocationModal(null)}
              className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-black bg-neutral-100 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#E21837] uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4" />
              {selectedLocationModal.region}
            </div>
            <h3 className="text-2xl font-black text-black uppercase">
              {selectedLocationModal.name}
            </h3>

            <div className="mt-4 p-4 rounded-2xl bg-neutral-100 space-y-3 text-xs text-[#525252]">
              <div>
                <strong className="text-black block font-bold uppercase text-[10px]">Address</strong>
                <span>{selectedLocationModal.address}, {selectedLocationModal.postcode}</span>
              </div>
              <div>
                <strong className="text-black block font-bold uppercase text-[10px]">Opening Hours</strong>
                <span>{selectedLocationModal.hours}</span>
              </div>
              <div>
                <strong className="text-black block font-bold uppercase text-[10px]">Telephone</strong>
                <a href={`tel:${selectedLocationModal.phone}`} className="text-[#E21837] font-bold">
                  {selectedLocationModal.phone}
                </a>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => {
                  setBookingData((prev) => ({
                    ...prev,
                    locationId: selectedLocationModal.id
                  }));
                  setSelectedLocationModal(null);
                  setBookingSuccess(false);
                  setIsBookModalOpen(true);
                }}
                className="flex-1 py-3 bg-[#E21837] hover:bg-[#b8122c] text-white text-xs font-black uppercase rounded-full transition cursor-pointer"
              >
                Book Table Here
              </button>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(selectedLocationModal.name + ' ' + selectedLocationModal.address)}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 bg-neutral-100 hover:bg-neutral-200 text-black text-xs font-bold uppercase rounded-full transition flex items-center justify-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                <span>Maps</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 6: PLACEHOLDERS INSPECTOR MODAL */}
      {/* ========================================================================= */}
      {isPlaceholdersOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setIsPlaceholdersOpen(false)}
              className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-black bg-neutral-100 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#60a5fa] uppercase tracking-wider mb-2">
              <Settings className="w-4 h-4 text-[#60a5fa]" />
              Raoz Demo Factory — Business Placeholders
            </div>
            <h3 className="text-2xl font-black text-black uppercase">Template #3 Placeholders</h3>
            <p className="text-xs text-[#525252] mt-1 mb-6">
              When transferred to a custom restaurant client inside Raoz Website Maker, these placeholders automatically swap to their custom credentials.
            </p>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-neutral-100 border border-neutral-200">
                <div className="text-[#737373] font-mono text-[10px]">BRAND NAME:</div>
                <div className="text-black font-bold">{phoCafeConfig.placeholders.brandName}</div>
              </div>
              <div className="p-3 rounded-xl bg-neutral-100 border border-neutral-200">
                <div className="text-[#737373] font-mono text-[10px]">HEAD OFFICE ADDRESS:</div>
                <div className="text-black font-bold">{phoCafeConfig.placeholders.headOffice}</div>
              </div>
              <div className="p-3 rounded-xl bg-neutral-100 border border-neutral-200">
                <div className="text-[#737373] font-mono text-[10px]">CUSTOMER SERVICE PHONE:</div>
                <div className="text-black font-bold">{phoCafeConfig.placeholders.customerCarePhone}</div>
              </div>
              <div className="p-3 rounded-xl bg-neutral-100 border border-neutral-200">
                <div className="text-[#737373] font-mono text-[10px]">INQUIRIES & BOOKINGS EMAIL:</div>
                <div className="text-black font-bold">{phoCafeConfig.placeholders.customerCareEmail}</div>
              </div>
            </div>

            <button
              onClick={() => setIsPlaceholdersOpen(false)}
              className="mt-6 w-full py-2.5 bg-neutral-200 hover:bg-neutral-300 text-black text-xs font-bold uppercase rounded-full cursor-pointer"
            >
              Close Config Inspector
            </button>
          </div>
        </div>
      )}

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-black border border-[#E21837] text-white text-xs font-semibold px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <CheckCircle2 className="w-4 h-4 text-[#E21837] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
