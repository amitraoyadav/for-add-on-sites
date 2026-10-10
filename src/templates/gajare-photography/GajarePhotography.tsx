import React, { useState, useEffect } from 'react';
import {
  Camera,
  Calendar,
  Clock,
  Phone,
  Mail,
  MapPin,
  Star,
  ChevronRight,
  ChevronLeft,
  X,
  Play,
  CheckCircle2,
  Heart,
  Share2,
  Film,
  Sparkles,
  Printer,
  Award,
  ArrowRight,
  MessageCircle,
  Menu,
  ShieldCheck,
  Eye,
  SlidersHorizontal,
  Compass
} from 'lucide-react';
import {
  GAJARE_CONFIG,
  StoryItem,
  PortfolioItem,
  FilmItem,
  ServiceItem,
  PackageItem,
  FaqItem
} from './gajare-photography.config';

export const GajarePhotography: React.FC = () => {
  // Navigation & Sub-routing
  const [activeTab, setActiveTab] = useState<'home' | 'stories' | 'portfolio' | 'services' | 'booth' | 'about' | 'pricing' | 'contact'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hero Slider
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Portfolio Filter
  const [portfolioFilter, setPortfolioFilter] = useState<string>('All');

  // Modals
  const [lightboxImage, setLightboxImage] = useState<PortfolioItem | null>(null);
  const [activeStoryModal, setActiveStoryModal] = useState<StoryItem | null>(null);
  const [activeVideoModal, setActiveVideoModal] = useState<FilmItem | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);
  const [selectedJournalArticle, setSelectedJournalArticle] = useState<typeof GAJARE_CONFIG.journalArticles[0] | null>(null);

  // Booking Form State
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Wedding',
    eventDate: '',
    venue: '',
    estimatedBudget: '₹1,50,000 - ₹3,00,000',
    services: ['Candid Photography', 'Cinematic Film'],
    notes: ''
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Auto-advance hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % GAJARE_CONFIG.heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Filtered portfolio
  const filteredPortfolio = portfolioFilter === 'All'
    ? GAJARE_CONFIG.portfolioItems
    : GAJARE_CONFIG.portfolioItems.filter((item) => item.category === portfolioFilter);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      // Auto close after 4s
      setTimeout(() => {
        setBookingSubmitted(false);
        setBookingModalOpen(false);
      }, 3500);
    }, 500);
  };

  const toggleServiceCheckbox = (srv: string) => {
    setBookingForm((prev) => {
      const exists = prev.services.includes(srv);
      return {
        ...prev,
        services: exists ? prev.services.filter((s) => s !== srv) : [...prev.services, srv]
      };
    });
  };

  return (
    <div className="min-h-screen bg-[#0B0C10] text-[#F3F4F6] font-sans antialiased selection:bg-[#D4AF37]/30 selection:text-[#F3F4F6]">
      {/* =========================================================================
          TOP ANNOUNCEMENT & CONTACT BAR
      ========================================================================= */}
      <div className="bg-[#12141C] border-b border-[#232733] text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[#9CA3AF]">
            <span className="flex items-center gap-1.5 text-[#D4AF37]">
              <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
              <strong className="text-white font-medium">4.9 / 5.0</strong> (500+ Google Reviews)
            </span>
            <span className="hidden md:inline text-gray-600">|</span>
            <span className="hidden md:flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              Mumbai · Thane · Destination Across India
            </span>
          </div>

          <div className="flex items-center gap-4 text-[#9CA3AF]">
            <a
              href={`tel:${GAJARE_CONFIG.brand.contact.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{GAJARE_CONFIG.brand.contact.phone}</span>
            </a>
            <span className="text-gray-600">|</span>
            <a
              href={`https://wa.me/${GAJARE_CONFIG.brand.contact.whatsapp}?text=Hi%20Gajare%20Photography%2C%20I%20would%20like%20to%20check%20availability%20for%20my%20event.`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-[#25D366] hover:text-[#28df6c] transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================================
          STICKY MAIN NAVIGATION HEADER
      ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#0B0C10]/95 backdrop-blur-md border-b border-[#1E2230] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <img
              src={GAJARE_CONFIG.brand.assets.logo}
              alt="Gajare Photography"
              className="h-11 sm:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium tracking-wide">
            <button
              onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`transition-colors uppercase text-xs tracking-wider pb-1 border-b-2 ${
                activeTab === 'home'
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-gray-300 border-transparent hover:text-white hover:border-gray-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => { setActiveTab('stories'); }}
              className={`transition-colors uppercase text-xs tracking-wider pb-1 border-b-2 ${
                activeTab === 'stories'
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-gray-300 border-transparent hover:text-white hover:border-gray-600'
              }`}
            >
              Stories
            </button>
            <button
              onClick={() => { setActiveTab('portfolio'); }}
              className={`transition-colors uppercase text-xs tracking-wider pb-1 border-b-2 ${
                activeTab === 'portfolio'
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-gray-300 border-transparent hover:text-white hover:border-gray-600'
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => { setActiveTab('services'); }}
              className={`transition-colors uppercase text-xs tracking-wider pb-1 border-b-2 ${
                activeTab === 'services'
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-gray-300 border-transparent hover:text-white hover:border-gray-600'
              }`}
            >
              Services & Films
            </button>
            <button
              onClick={() => { setActiveTab('booth'); }}
              className={`relative transition-colors uppercase text-xs tracking-wider pb-1 border-b-2 ${
                activeTab === 'booth'
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-amber-300 border-transparent hover:text-amber-200'
              }`}
            >
              <span>Instant Photo Booth</span>
              <span className="absolute -top-2.5 -right-6 px-1.5 py-0.2 bg-[#D4AF37] text-black text-[9px] font-bold rounded-full uppercase tracking-tighter">
                Live
              </span>
            </button>
            <button
              onClick={() => { setActiveTab('about'); }}
              className={`transition-colors uppercase text-xs tracking-wider pb-1 border-b-2 ${
                activeTab === 'about'
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-gray-300 border-transparent hover:text-white hover:border-gray-600'
              }`}
            >
              About
            </button>
            <button
              onClick={() => { setActiveTab('pricing'); }}
              className={`transition-colors uppercase text-xs tracking-wider pb-1 border-b-2 ${
                activeTab === 'pricing'
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-gray-300 border-transparent hover:text-white hover:border-gray-600'
              }`}
            >
              FAQ & Pricing
            </button>
            <button
              onClick={() => { setActiveTab('contact'); }}
              className={`transition-colors uppercase text-xs tracking-wider pb-1 border-b-2 ${
                activeTab === 'contact'
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-gray-300 border-transparent hover:text-white hover:border-gray-600'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setBookingModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-[#E5BF45] hover:to-[#C5A030] text-black shadow-lg shadow-[#D4AF37]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Check The Date</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#12141D] border-b border-[#232733] px-6 py-6 animate-fadeIn">
            <div className="flex flex-col gap-4 text-sm font-medium">
              <button
                onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
                className={`text-left py-2 border-b border-gray-800 ${activeTab === 'home' ? 'text-[#D4AF37]' : 'text-gray-300'}`}
              >
                Home
              </button>
              <button
                onClick={() => { setActiveTab('stories'); setMobileMenuOpen(false); }}
                className={`text-left py-2 border-b border-gray-800 ${activeTab === 'stories' ? 'text-[#D4AF37]' : 'text-gray-300'}`}
              >
                Stories (Featured Celebrations)
              </button>
              <button
                onClick={() => { setActiveTab('portfolio'); setMobileMenuOpen(false); }}
                className={`text-left py-2 border-b border-gray-800 ${activeTab === 'portfolio' ? 'text-[#D4AF37]' : 'text-gray-300'}`}
              >
                Portfolio Gallery
              </button>
              <button
                onClick={() => { setActiveTab('services'); setMobileMenuOpen(false); }}
                className={`text-left py-2 border-b border-gray-800 ${activeTab === 'services' ? 'text-[#D4AF37]' : 'text-gray-300'}`}
              >
                Services & Films
              </button>
              <button
                onClick={() => { setActiveTab('booth'); setMobileMenuOpen(false); }}
                className={`text-left py-2 border-b border-gray-800 ${activeTab === 'booth' ? 'text-[#D4AF37]' : 'text-amber-300 flex items-center justify-between'}`}
              >
                <span>Premium Instant Photo Booth</span>
                <span className="px-2 py-0.5 bg-[#D4AF37] text-black text-[10px] font-bold rounded-full">POPULAR</span>
              </button>
              <button
                onClick={() => { setActiveTab('about'); setMobileMenuOpen(false); }}
                className={`text-left py-2 border-b border-gray-800 ${activeTab === 'about' ? 'text-[#D4AF37]' : 'text-gray-300'}`}
              >
                About Gajare Photography
              </button>
              <button
                onClick={() => { setActiveTab('pricing'); setMobileMenuOpen(false); }}
                className={`text-left py-2 border-b border-gray-800 ${activeTab === 'pricing' ? 'text-[#D4AF37]' : 'text-gray-300'}`}
              >
                FAQ & Pricing Guidance
              </button>
              <button
                onClick={() => { setActiveTab('contact'); setMobileMenuOpen(false); }}
                className={`text-left py-2 border-b border-gray-800 ${activeTab === 'contact' ? 'text-[#D4AF37]' : 'text-gray-300'}`}
              >
                Contact & Studio Directions
              </button>

              <button
                onClick={() => { setBookingModalOpen(true); setMobileMenuOpen(false); }}
                className="mt-3 w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] to-[#B38F24] text-black text-center"
              >
                Check Date Availability
              </button>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================================
          VIEW SWITCHER / MAIN CONTENT
      ========================================================================= */}
      <main>
        {/* TAB: HOME */}
        {activeTab === 'home' && (
          <div>
            {/* HERO SLIDER SECTION */}
            <section className="relative h-[82vh] min-h-[580px] max-h-[850px] overflow-hidden flex items-center">
              {/* Background Slide Image with Crossfade */}
              {GAJARE_CONFIG.heroSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentSlideIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover object-center filter brightness-[0.55] transform scale-105 animate-pulse-slow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-black/40 to-black/60" />
                </div>
              ))}

              {/* Slider Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full">
                <div className="max-w-3xl">
                  {/* Location / Tag badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#D4AF37]/40 text-[#D4AF37] text-xs uppercase tracking-widest font-semibold mb-4 backdrop-blur-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{GAJARE_CONFIG.heroSlides[currentSlideIndex].tag}</span>
                  </div>

                  {/* Main Title */}
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white leading-[1.15] mb-4 whitespace-pre-line drop-shadow-md">
                    {GAJARE_CONFIG.heroSlides[currentSlideIndex].title}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-base sm:text-lg text-gray-200 max-w-2xl font-light leading-relaxed mb-8 drop-shadow">
                    {GAJARE_CONFIG.heroSlides[currentSlideIndex].subtitle}
                  </p>

                  {/* Hero CTAs */}
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => setActiveTab('portfolio')}
                      className="px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#E5BF45] text-black shadow-xl shadow-[#D4AF37]/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Portfolio</span>
                    </button>

                    <button
                      onClick={() => setBookingModalOpen(true)}
                      className="px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md transition-all hover:scale-105 flex items-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Check Availability</span>
                    </button>

                    <button
                      onClick={() => setActiveVideoModal(GAJARE_CONFIG.films[0])}
                      className="px-5 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-white flex items-center gap-2 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                      </div>
                      <span>Watch Reel</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Slider Navigation Dots */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-black/40 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                {GAJARE_CONFIG.heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentSlideIndex ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-gray-500 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </section>

            {/* TRUST & STATS STRIP */}
            <section className="bg-[#12141C] border-y border-[#1E2230] py-8 px-4 sm:px-8">
              <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
                {GAJARE_CONFIG.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-[#D4AF37] mb-1">
                      {stat.value}
                    </span>
                    <span className="text-sm font-semibold text-white tracking-wide">
                      {stat.label}
                    </span>
                    <span className="text-xs text-[#9CA3AF]">
                      {stat.note}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* GOOGLE REVIEWS & TESTIMONIAL BANNER */}
            <section className="py-12 px-4 sm:px-8 bg-gradient-to-b from-[#12141C] to-[#0B0C10]">
              <div className="max-w-5xl mx-auto bg-[#171A24] border border-[#262B3A] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl">
                <div className="flex items-center gap-4 shrink-0">
                  <img
                    src={GAJARE_CONFIG.brand.assets.googleIcon}
                    alt="Google Reviews"
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <div className="flex items-center gap-1 text-[#D4AF37]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-400 font-medium mt-1 block">
                      500+ Verified 5-Star Reviews
                    </span>
                  </div>
                </div>

                <div className="h-px md:h-12 w-full md:w-px bg-gray-700/50" />

                <div className="grow">
                  <p className="text-sm sm:text-base text-gray-200 italic font-serif leading-relaxed">
                    "{GAJARE_CONFIG.testimonials[0].content}"
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs font-bold text-[#D4AF37]">
                      — {GAJARE_CONFIG.testimonials[0].author}
                    </span>
                    <span className="text-xs text-gray-500">·</span>
                    <span className="text-xs text-gray-400">
                      {GAJARE_CONFIG.testimonials[0].event}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* FEATURED STORIES SECTION */}
            <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
                    <Heart className="w-3.5 h-3.5 fill-[#D4AF37]" />
                    <span>Featured Stories</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white tracking-tight">
                    Six celebrations. Six stories worth returning to.
                  </h2>
                  <p className="text-sm text-gray-400 mt-2 max-w-xl">
                    A selection of authentic moments, captured from morning rituals to midnight goodbyes.
                  </p>
                </div>

                <button
                  onClick={() => setActiveTab('stories')}
                  className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:text-[#F3E5AB] transition-colors"
                >
                  <span>Explore All Real Weddings</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Stories Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {GAJARE_CONFIG.featuredStories.slice(0, 3).map((story) => (
                  <div
                    key={story.id}
                    onClick={() => setActiveStoryModal(story)}
                    className="group bg-[#14161F] border border-[#222634] rounded-xl overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
                      <img
                        src={story.coverImage}
                        alt={story.couple}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                      {story.highlightBadge && (
                        <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/70 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider rounded">
                          {story.highlightBadge}
                        </div>
                      )}

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-gray-300">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                          {story.location}
                        </span>
                        <span>{story.date}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <span className="text-[11px] uppercase font-bold tracking-wider text-[#D4AF37]">
                        {story.category}
                      </span>
                      <h3 className="text-xl font-serif font-medium text-white mt-1 group-hover:text-[#D4AF37] transition-colors">
                        {story.couple}
                      </h3>
                      <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                        {story.excerpt}
                      </p>

                      <div className="mt-4 pt-4 border-t border-[#222634] flex items-center justify-between text-xs font-semibold text-gray-300 group-hover:text-[#D4AF37] transition-colors">
                        <span>View Full Story & Gallery</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CURATED SERVICES OVERVIEW */}
            <section className="py-20 px-4 sm:px-8 bg-[#12141C] border-y border-[#1E2230]">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
                    <Camera className="w-3.5 h-3.5" />
                    <span>What We Offer</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white tracking-tight">
                    Every story deserves its own way of being remembered.
                  </h2>
                  <p className="text-sm text-gray-400 mt-3">
                    At GAJARE, we craft timeless visual stories with intention, artistry, and an eye for every meaningful detail.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {GAJARE_CONFIG.services.slice(0, 3).map((srv) => (
                    <div
                      key={srv.id}
                      className="bg-[#181B26] border border-[#252A3B] rounded-xl p-6 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-all group"
                    >
                      <div>
                        <div className="aspect-[16/9] rounded-lg overflow-hidden mb-5 bg-gray-900">
                          <img
                            src={srv.image}
                            alt={srv.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                          {srv.subtitle}
                        </span>
                        <h3 className="text-xl font-serif text-white font-medium mt-1">
                          {srv.title}
                        </h3>
                        <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                          {srv.description}
                        </p>

                        <div className="mt-4 space-y-1.5">
                          {srv.features.map((feat, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#252A3B]">
                        <button
                          onClick={() => {
                            setBookingForm((prev) => ({ ...prev, eventType: srv.title }));
                            setBookingModalOpen(true);
                          }}
                          className="w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-[#D4AF37] hover:text-black text-gray-200 border border-white/10 hover:border-[#D4AF37] transition-all text-center"
                        >
                          Inquire This Service
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <button
                    onClick={() => setActiveTab('services')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:text-black transition-all"
                  >
                    <span>View All 5 Specialized Services & Films</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>

            {/* INSTANT PHOTO BOOTH SPOTLIGHT */}
            <section className="py-20 px-4 sm:px-8 bg-gradient-to-r from-[#141620] via-[#1A1D2A] to-[#141620]">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                <div className="w-full lg:w-1/2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase font-bold tracking-widest mb-4">
                    <Printer className="w-3.5 h-3.5" />
                    <span>Exclusive Guest Experience</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white tracking-tight">
                    Click. Print. Take Home the Memory.
                  </h2>
                  <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                    Make your celebration unforgettable with Gajare Photography's Premium Instant Photo Booth Service across Mumbai. Guests receive lab-quality, customized framed photo prints in just 8 seconds alongside instant QR digital downloads for social media.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="p-3.5 bg-black/40 rounded-lg border border-white/5">
                      <span className="text-xl font-bold text-[#D4AF37] block">8 Sec</span>
                      <span className="text-xs text-gray-300">Instant Dye-Sub Prints</span>
                    </div>
                    <div className="p-3.5 bg-black/40 rounded-lg border border-white/5">
                      <span className="text-xl font-bold text-[#D4AF37] block">QR Code</span>
                      <span className="text-xs text-gray-300">Direct Mobile Phone Save</span>
                    </div>
                    <div className="p-3.5 bg-black/40 rounded-lg border border-white/5">
                      <span className="text-xl font-bold text-[#D4AF37] block">Custom</span>
                      <span className="text-xs text-gray-300">Couple / Brand Borders</span>
                    </div>
                    <div className="p-3.5 bg-black/40 rounded-lg border border-white/5">
                      <span className="text-xl font-bold text-[#D4AF37] block">2 Attendants</span>
                      <span className="text-xs text-gray-300">Full Setup & Posing Help</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-8">
                    <button
                      onClick={() => setActiveTab('booth')}
                      className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D4AF37] text-black hover:bg-[#E5BF45] transition-all"
                    >
                      Explore Photo Booth Details
                    </button>
                    <button
                      onClick={() => {
                        setBookingForm((prev) => ({ ...prev, eventType: 'Instant Photo Booth' }));
                        setBookingModalOpen(true);
                      }}
                      className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
                    >
                      Check Booth Availability
                    </button>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                  <img
                    src={GAJARE_CONFIG.brand.assets.boothService}
                    alt="Photo Booth Service"
                    className="rounded-xl object-cover aspect-square shadow-xl border border-white/10"
                  />
                  <img
                    src={GAJARE_CONFIG.brand.assets.boothLive}
                    alt="Live Photo Printing"
                    className="rounded-xl object-cover aspect-square shadow-xl border border-white/10 mt-6"
                  />
                </div>
              </div>
            </section>

            {/* OUR 4-STEP PROCESS */}
            <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                  How We Work
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white tracking-tight mt-1">
                  From First Hello to Final Delivery
                </h2>
                <p className="text-sm text-gray-400 mt-2">
                  A seamless, attentive journey designed to let you celebrate without photographic stress.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { step: '01', title: 'Share Your Vision', desc: 'Tell us your dates, family rituals, aesthetic preferences, and what matters most to you.' },
                  { step: '02', title: 'Plan Together', desc: 'We coordinate timelines, lighting cues, key family portraits, and contingency buffers.' },
                  { step: '03', title: 'Celebrate Freely', desc: 'Immerse yourself in the celebration while our synchronized crew works quietly and attentively.' },
                  { step: '04', title: 'Relive Forever', desc: 'Receive quick preview teasers in 72 hours, followed by master retouched albums and 4K films.' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-[#14161F] border border-[#222634] rounded-xl hover:border-[#D4AF37]/50 transition-all relative group"
                  >
                    <span className="text-3xl font-serif font-bold text-[#D4AF37]/30 group-hover:text-[#D4AF37] transition-colors">
                      {item.step}
                    </span>
                    <h3 className="text-lg font-serif font-medium text-white mt-3">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* CINEMATIC FILMS SHOWCASE */}
            <section className="py-20 px-4 sm:px-8 bg-[#12141C] border-t border-[#1E2230]">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                      Stories in Motion
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white tracking-tight mt-1">
                      Featured Cinematic Wedding Films
                    </h2>
                    <p className="text-sm text-gray-400 mt-2">
                      Moving image poetry with dialogue audio, rich color grading, and licensed emotional scores.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab('services')}
                    className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:underline"
                  >
                    Explore Cinema Packages →
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {GAJARE_CONFIG.films.map((film) => (
                    <div
                      key={film.id}
                      onClick={() => setActiveVideoModal(film)}
                      className="group bg-[#171A24] border border-[#262B3A] rounded-xl overflow-hidden cursor-pointer hover:border-[#D4AF37]/60 transition-all shadow-lg"
                    >
                      <div className="relative aspect-video overflow-hidden bg-black">
                        <img
                          src={film.thumbnail}
                          alt={film.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play className="w-5 h-5 fill-black ml-0.5" />
                          </div>
                        </div>
                        <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 bg-black/80 text-[10px] font-bold text-white rounded">
                          {film.duration}
                        </div>
                      </div>
                      <div className="p-5">
                        <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
                          {film.location}
                        </span>
                        <h3 className="text-base font-serif font-medium text-white mt-1 group-hover:text-[#D4AF37] transition-colors">
                          {film.title}
                        </h3>
                        <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                          {film.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB: STORIES (REAL WEDDINGS) */}
        {activeTab === 'stories' && (
          <div className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                The Gajare Journal & Real Celebrations
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif font-medium text-white mt-2">
                The Stories Behind the Frames
              </h1>
              <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                People, celebrations, and the unrepeatable moments that make them unforgettable. Each story represents a complete couple journey from dawn preparation to the final farewell.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {GAJARE_CONFIG.featuredStories.map((story) => (
                <div
                  key={story.id}
                  onClick={() => setActiveStoryModal(story)}
                  className="bg-[#14161F] border border-[#222634] rounded-xl overflow-hidden hover:border-[#D4AF37]/60 transition-all cursor-pointer group shadow-xl hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] bg-gray-900 overflow-hidden">
                    <img
                      src={story.coverImage}
                      alt={story.couple}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded text-[11px] text-gray-300 font-medium">
                      {story.gallery.length} Photos
                    </div>
                    <div className="absolute bottom-3 left-3 text-xs text-gray-300">
                      <span className="text-[#D4AF37] font-semibold">{story.category}</span> · {story.location}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-serif font-medium text-white group-hover:text-[#D4AF37] transition-colors">
                      {story.couple}
                    </h3>
                    <h4 className="text-xs text-gray-400 font-medium mt-1">
                      {story.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-3 line-clamp-3 leading-relaxed">
                      {story.fullStory}
                    </p>

                    <div className="mt-5 pt-4 border-t border-[#222634] flex items-center justify-between text-xs font-bold text-[#D4AF37]">
                      <span>Open Full Photo Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: PORTFOLIO */}
        {activeTab === 'portfolio' && (
          <div className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Master Gallery
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif font-medium text-white mt-2">
                Not Every Frame. Only the Ones That Matter.
              </h1>
              <p className="text-sm text-gray-300 mt-3">
                Selected for emotion, craft, and consistency across Indian weddings, portraits, and commercial campaigns.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {['All', 'Weddings', 'Pre-Wedding', 'Maternity & Baby', 'Corporate & Events', 'Food & Product'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setPortfolioFilter(tab)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all uppercase ${
                    portfolioFilter === tab
                      ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20 font-bold'
                      : 'bg-[#171A24] text-gray-300 hover:text-white hover:bg-[#202433] border border-white/5'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPortfolio.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxImage(item)}
                  className="group relative bg-[#14161F] border border-[#222634] rounded-xl overflow-hidden cursor-pointer hover:border-[#D4AF37]/60 transition-all duration-300 shadow-lg hover:shadow-2xl"
                >
                  <div className="aspect-[4/5] bg-gray-900 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37]">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-serif font-medium text-white mt-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-300 mt-1">
                        {item.subtitle} · {item.location}
                      </p>
                      <div className="mt-3 flex items-center gap-1.5 text-xs text-[#D4AF37] font-semibold">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View High Resolution</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: SERVICES & FILMS */}
        {activeTab === 'services' && (
          <div className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Craft & Coverage
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif font-medium text-white mt-2">
                Photography & Cinematic Films
              </h1>
              <p className="text-sm text-gray-300 mt-3">
                Tailored services designed for couples, families, and organizations looking for timeless visual heritage.
              </p>
            </div>

            <div className="space-y-16">
              {GAJARE_CONFIG.services.map((srv, idx) => (
                <div
                  key={srv.id}
                  className={`flex flex-col lg:flex-row items-center gap-10 p-8 sm:p-10 bg-[#14161F] border border-[#222634] rounded-2xl ${
                    idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-full lg:w-1/2 aspect-[16/10] rounded-xl overflow-hidden bg-gray-900 border border-white/10 shadow-2xl">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="w-full lg:w-1/2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                      {srv.subtitle}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-medium text-white mt-1">
                      {srv.title}
                    </h2>
                    <p className="text-xs text-gray-400 italic mt-1 font-serif">
                      "{srv.tagline}"
                    </p>
                    <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                      {srv.description}
                    </p>

                    <div className="mt-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-2">
                        Key Deliverables:
                      </span>
                      <ul className="space-y-2">
                        {srv.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 text-xs text-gray-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#222634] flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => {
                          setBookingForm((prev) => ({ ...prev, eventType: srv.title }));
                          setBookingModalOpen(true);
                        }}
                        className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#E5BF45] text-black transition-all"
                      >
                        Request Quote for This Service
                      </button>
                      <a
                        href={`https://wa.me/${GAJARE_CONFIG.brand.contact.whatsapp}?text=Hi%20Gajare%20Photography%2C%20I%20am%20interested%20in%20${encodeURIComponent(srv.title)}.`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-3 rounded-full text-xs font-semibold text-gray-300 hover:text-white border border-gray-700 hover:border-gray-500 transition-colors flex items-center gap-1.5"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                        <span>Discuss on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: INSTANT PHOTO BOOTH */}
        {activeTab === 'booth' && (
          <div className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase font-bold tracking-widest mb-3">
                <Printer className="w-3.5 h-3.5" />
                <span>Mumbai's #1 Live Guest Activation</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-serif font-medium text-white tracking-tight">
                Premium Instant Photo Booth Service
              </h1>
              <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                Make your celebration unforgettable. Give your guests customized, lab-quality physical photo keepsakes printed in 8 seconds, paired with instant QR scan mobile downloads.
              </p>
            </div>

            {/* Visual Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-[#14161F] border border-[#222634] rounded-xl overflow-hidden p-3">
                <img
                  src={GAJARE_CONFIG.brand.assets.boothService}
                  alt="Instant Photo Booth Service"
                  className="w-full aspect-[4/3] object-cover rounded-lg"
                />
                <h3 className="text-sm font-semibold text-white mt-3 text-center">
                  Live Studio Lighting & Touchscreen Kiosk
                </h3>
              </div>
              <div className="bg-[#14161F] border border-[#222634] rounded-xl overflow-hidden p-3">
                <img
                  src={GAJARE_CONFIG.brand.assets.boothLive}
                  alt="Live Photo Printing"
                  className="w-full aspect-[4/3] object-cover rounded-lg"
                />
                <h3 className="text-sm font-semibold text-white mt-3 text-center">
                  Instant 8-Second Lab Quality Prints
                </h3>
              </div>
              <div className="bg-[#14161F] border border-[#222634] rounded-xl overflow-hidden p-3">
                <img
                  src={GAJARE_CONFIG.brand.assets.boothPremium}
                  alt="Custom Event Branding"
                  className="w-full aspect-[4/3] object-cover rounded-lg"
                />
                <h3 className="text-sm font-semibold text-white mt-3 text-center">
                  Custom Couple / Brand Border Templates
                </h3>
              </div>
            </div>

            {/* Why Choose Gajare Photo Booth */}
            <div className="bg-[#12141C] border border-[#222634] rounded-2xl p-8 sm:p-12 mb-16">
              <h2 className="text-2xl sm:text-3xl font-serif text-white text-center mb-10">
                Why Gajare Photography Photo Booth?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {GAJARE_CONFIG.boothFeatures.map((feat, idx) => (
                  <div key={idx} className="bg-[#181B26] p-6 rounded-xl border border-white/5">
                    <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-xs mb-3">
                      {idx + 1}
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking CTA Banner */}
            <div className="bg-gradient-to-r from-[#D4AF37]/20 via-[#1A1D2A] to-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-2xl p-8 text-center max-w-4xl mx-auto">
              <h3 className="text-2xl font-serif text-white font-medium">
                Reserve the Photo Booth for Your Upcoming Event
              </h3>
              <p className="text-xs text-gray-300 mt-2 max-w-xl mx-auto">
                We accept limited event bookings per weekend across Mumbai and Thane to guarantee premium attendant focus and equipment precision.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => {
                    setBookingForm((prev) => ({ ...prev, eventType: 'Instant Photo Booth' }));
                    setBookingModalOpen(true);
                  }}
                  className="px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#E5BF45] text-black shadow-lg"
                >
                  Check Photo Booth Availability
                </button>
                <a
                  href={`https://wa.me/${GAJARE_CONFIG.brand.contact.whatsapp}?text=Hi%20Gajare%20Photography%2C%20I%20would%20like%20to%20inquire%20about%20the%20Instant%20Photo%20Booth%20packages.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20"
                >
                  WhatsApp Quote
                </a>
              </div>
            </div>
          </div>
        )}

        {/* TAB: ABOUT US */}
        {activeTab === 'about' && (
          <div className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
            {/* The Smartphone to Gajare Story */}
            <div className="max-w-4xl mx-auto mb-20">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                The Story Behind the Lens
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif font-medium text-white mt-2 leading-tight">
                From a Smartphone to Gajare Photography
              </h1>

              <div className="prose prose-invert max-w-none text-gray-300 mt-6 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Every great journey starts somewhere. The journey of <strong>Gajare Photography</strong> did not begin with a studio full of expensive equipment. It began with a smartphone and a genuine curiosity for how light, emotion, and everyday moments come alive in a photograph.
                </p>
                <p>
                  That passion led to the first camera — a basic camera purchased with a loan of approximately <strong>₹20,000</strong>. Instead of stopping there, the journey continued through tireless learning, experimenting, and working alongside established wedding masters across Mumbai.
                </p>
                <p>
                  With time, the equipment evolved, experience grew, and the passion matured into an internationally recognized profession. Today, having preserved over <strong>650+ celebrations</strong> with more than <strong>500 verified 5-star Google ratings</strong>, the studio's core philosophy remains unchanged:
                </p>
                <blockquote className="border-l-4 border-[#D4AF37] pl-4 py-2 italic text-[#D4AF37] font-serif text-lg my-6 bg-[#171A24]/60 rounded-r">
                  "Keep learning. Keep improving. Keep telling better stories."
                </blockquote>
              </div>
            </div>

            {/* Experience Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 bg-[#12141C] border border-[#222634] rounded-2xl p-8 text-center">
              <div>
                <span className="text-3xl sm:text-4xl font-serif font-bold text-[#D4AF37]">8+</span>
                <span className="text-xs text-gray-300 block mt-1">Years of Dedication</span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-serif font-bold text-[#D4AF37]">650+</span>
                <span className="text-xs text-gray-300 block mt-1">Celebrations Preserved</span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-serif font-bold text-[#D4AF37]">25+</span>
                <span className="text-xs text-gray-300 block mt-1">Destinations Covered</span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-serif font-bold text-[#D4AF37]">500+</span>
                <span className="text-xs text-gray-300 block mt-1">5-Star Google Reviews</span>
              </div>
            </div>

            {/* Journal Articles Preview */}
            <div className="mt-16">
              <h2 className="text-2xl sm:text-3xl font-serif text-white mb-8 text-center">
                From the Gajare Journal
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {GAJARE_CONFIG.journalArticles.map((article) => (
                  <div
                    key={article.id}
                    onClick={() => setSelectedJournalArticle(article)}
                    className="bg-[#14161F] border border-[#222634] rounded-xl overflow-hidden cursor-pointer hover:border-[#D4AF37]/50 transition-all group"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-gray-900">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between text-[11px] text-gray-400 mb-2">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="text-base font-serif font-medium text-white group-hover:text-[#D4AF37] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-2 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <span className="text-xs font-bold text-[#D4AF37] mt-3 block">
                        Read Full Article →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB: FAQ & PRICING */}
        {activeTab === 'pricing' && (
          <div className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Investment & Clarity
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif font-medium text-white mt-2">
                Investment, Tailored to Your Story
              </h1>
              <p className="text-sm text-gray-300 mt-3">
                Our coverage is customized according to your event dates, hours, team size, cinematography, albums, and destination logistics.
              </p>
            </div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {GAJARE_CONFIG.packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`bg-[#14161F] rounded-2xl p-8 flex flex-col justify-between border relative transition-all ${
                    pkg.popular
                      ? 'border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/10 -translate-y-2'
                      : 'border-[#222634] hover:border-gray-700'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#D4AF37] text-black text-[11px] font-bold uppercase tracking-wider rounded-full shadow">
                      Most Popular Wedding Choice
                    </div>
                  )}

                  <div>
                    <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                      {pkg.subtitle}
                    </span>
                    <h3 className="text-2xl font-serif font-medium text-white mt-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2">
                      {pkg.recommendedFor}
                    </p>

                    <div className="mt-6 pt-6 border-t border-[#222634]">
                      <span className="text-xs text-gray-400 block mb-1">Pricing Guidance:</span>
                      <span className="text-lg font-serif font-bold text-white">
                        {pkg.priceNote}
                      </span>
                    </div>

                    <div className="mt-6 space-y-2.5">
                      {pkg.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#222634]">
                    <button
                      onClick={() => {
                        setBookingForm((prev) => ({ ...prev, eventType: pkg.name }));
                        setBookingModalOpen(true);
                      }}
                      className={`w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all text-center ${
                        pkg.popular
                          ? 'bg-[#D4AF37] hover:bg-[#E5BF45] text-black shadow-lg shadow-[#D4AF37]/20'
                          : 'bg-white/10 hover:bg-white/20 text-white'
                      }`}
                    >
                      Inquire Custom Package
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Candid vs Traditional Explanation */}
            <div className="bg-[#12141C] border border-[#222634] rounded-2xl p-8 sm:p-12 mb-20">
              <h2 className="text-2xl sm:text-3xl font-serif text-white text-center mb-8">
                Candid or Traditional Photography?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#171A24] p-6 rounded-xl border border-white/5">
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">
                    Unscripted Emotion
                  </span>
                  <h3 className="text-xl font-serif text-white font-medium mb-3">
                    Candid Photography
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Captures genuine, unposed moments: silent glances, spontaneous laughter, quiet tears, and real interactions. Uses fast prime lenses and natural light without disrupting your rhythm or instructing you to pose.
                  </p>
                </div>

                <div className="bg-[#171A24] p-6 rounded-xl border border-white/5">
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">
                    Formal Heritage
                  </span>
                  <h3 className="text-xl font-serif text-white font-medium mb-3">
                    Traditional Photography
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Ensures clear, well-lit formal stage photos with extended family members, elders, and comprehensive step-by-step documentation of religious rituals so that no relation is missed in your family archive.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-serif text-white text-center mb-8">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {GAJARE_CONFIG.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-[#14161F] border border-[#222634] rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveFaqIndex(activeFaqIndex === idx ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base text-white hover:text-[#D4AF37] transition-colors"
                    >
                      <span>{faq.question}</span>
                      <span className="text-lg font-mono text-[#D4AF37]">
                        {activeFaqIndex === idx ? '−' : '+'}
                      </span>
                    </button>
                    {activeFaqIndex === idx && (
                      <div className="p-5 pt-0 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-[#222634]/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB: CONTACT US */}
        {activeTab === 'contact' && (
          <div className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Connect With Us
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif font-medium text-white mt-2">
                Let's Create Something Timeless
              </h1>
              <p className="text-sm text-gray-300 mt-3">
                Every celebration is unique, and so is every story. Reach out to verify date availability or arrange a studio consultation in Mumbai.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information Cards */}
              <div className="space-y-6">
                <div className="p-6 bg-[#14161F] border border-[#222634] rounded-2xl flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-serif font-semibold text-white">Call & WhatsApp</h3>
                    <p className="text-xs text-gray-400 mt-1">Direct inquiries & instant responses</p>
                    <div className="mt-2 space-y-1">
                      <a href={`tel:${GAJARE_CONFIG.brand.contact.phone.replace(/\s+/g, '')}`} className="text-sm font-medium text-[#D4AF37] hover:underline block">
                        {GAJARE_CONFIG.brand.contact.phone}
                      </a>
                      <a href={`tel:${GAJARE_CONFIG.brand.contact.phoneSecondary.replace(/\s+/g, '')}`} className="text-sm text-gray-300 hover:underline block">
                        {GAJARE_CONFIG.brand.contact.phoneSecondary}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-[#14161F] border border-[#222634] rounded-2xl flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-serif font-semibold text-white">Email Desk</h3>
                    <p className="text-xs text-gray-400 mt-1">Detailed event briefs & corporate decks</p>
                    <a href={`mailto:${GAJARE_CONFIG.brand.contact.email}`} className="text-sm font-medium text-[#D4AF37] hover:underline block mt-2">
                      {GAJARE_CONFIG.brand.contact.email}
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-[#14161F] border border-[#222634] rounded-2xl flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-serif font-semibold text-white">Working Hours</h3>
                    <p className="text-xs text-gray-400 mt-1">Dedicated customer & couple support</p>
                    <p className="text-sm text-gray-200 mt-2 font-medium">
                      {GAJARE_CONFIG.brand.contact.workingHours}
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-[#14161F] border border-[#222634] rounded-2xl flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-serif font-semibold text-white">Coverage Base</h3>
                    <p className="text-xs text-gray-400 mt-1">Serving all premier venues</p>
                    <p className="text-sm text-gray-200 mt-2">
                      {GAJARE_CONFIG.brand.contact.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Date Request Form */}
              <div className="bg-[#14161F] border border-[#222634] rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-serif text-white font-medium mb-2">
                  Enquiry & Date Request
                </h3>
                <p className="text-xs text-gray-400 mb-6">
                  Fill in your details below and we will confirm date availability within a few hours.
                </p>

                {bookingSubmitted ? (
                  <div className="p-8 text-center bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl animate-fadeIn">
                    <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto mb-3" />
                    <h4 className="text-lg font-serif font-medium text-white">Date Request Received!</h4>
                    <p className="text-xs text-gray-300 mt-2">
                      Thank you, {bookingForm.name || 'friend'}. Our studio lead will connect with you via WhatsApp ({bookingForm.phone || GAJARE_CONFIG.brand.contact.phone}) shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs text-gray-300 block mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        placeholder="e.g. Anjali Deshmukh"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#0B0C10] border border-[#262B3A] text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-300 block mb-1">WhatsApp / Phone *</label>
                        <input
                          type="tel"
                          required
                          value={bookingForm.phone}
                          onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-lg bg-[#0B0C10] border border-[#262B3A] text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-300 block mb-1">Email Address</label>
                        <input
                          type="email"
                          value={bookingForm.email}
                          onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                          placeholder="name@gmail.com"
                          className="w-full px-4 py-2.5 rounded-lg bg-[#0B0C10] border border-[#262B3A] text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-300 block mb-1">Event Type *</label>
                        <select
                          value={bookingForm.eventType}
                          onChange={(e) => setBookingForm({ ...bookingForm, eventType: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg bg-[#0B0C10] border border-[#262B3A] text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                        >
                          <option>Wedding</option>
                          <option>Pre-Wedding</option>
                          <option>Instant Photo Booth</option>
                          <option>Engagement</option>
                          <option>Maternity & Baby Shower</option>
                          <option>Corporate Event</option>
                          <option>Food & Product</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs text-gray-300 block mb-1">Event Date</label>
                        <input
                          type="date"
                          value={bookingForm.eventDate}
                          onChange={(e) => setBookingForm({ ...bookingForm, eventDate: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg bg-[#0B0C10] border border-[#262B3A] text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-gray-300 block mb-1">Venue / City Location</label>
                      <input
                        type="text"
                        value={bookingForm.venue}
                        onChange={(e) => setBookingForm({ ...bookingForm, venue: e.target.value })}
                        placeholder="e.g. St. Regis Mumbai / Lonavala"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#0B0C10] border border-[#262B3A] text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-300 block mb-1">Estimated Budget (INR)</label>
                      <select
                        value={bookingForm.estimatedBudget}
                        onChange={(e) => setBookingForm({ ...bookingForm, estimatedBudget: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#0B0C10] border border-[#262B3A] text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                      >
                        <option>Under ₹1,00,000 (Single Event / Photo Booth)</option>
                        <option>₹1,00,000 - ₹2,50,000 (Essential Moments)</option>
                        <option>₹2,50,000 - ₹4,50,000 (Complete Celebration)</option>
                        <option>₹4,50,000+ (Grand Multi-Day Destination)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#E5BF45] text-black shadow-lg shadow-[#D4AF37]/20 transition-all mt-4"
                    >
                      Submit Date & Availability Request
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* =========================================================================
          SITE FOOTER
      ========================================================================= */}
      <footer className="bg-[#08090D] border-t border-[#191C26] pt-16 pb-12 px-4 sm:px-8 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1A1D29]">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <img
                src={GAJARE_CONFIG.brand.assets.footerLogo}
                alt="Gajare Photography"
                className="h-12 w-auto object-contain mb-4"
              />
              <p className="text-gray-400 text-xs leading-relaxed max-w-sm mb-4">
                Stories Worth Remembering. Moments Worth Reliving. Best wedding photographer and cinematic film studio based in Mumbai, covering celebrations across India and worldwide destinations.
              </p>
              <div className="flex items-center gap-2 text-white text-xs font-semibold">
                <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                <span>Google Rating: 4.9 / 5.0 (500+ Verified Reviews)</span>
              </div>
            </div>

            {/* Navigation links */}
            <div>
              <h4 className="text-white font-serif text-sm font-semibold mb-4 tracking-wider uppercase text-[11px]">
                Explore
              </h4>
              <ul className="space-y-2">
                <li><button onClick={() => setActiveTab('home')} className="hover:text-[#D4AF37] transition-colors">Home</button></li>
                <li><button onClick={() => setActiveTab('stories')} className="hover:text-[#D4AF37] transition-colors">Real Weddings</button></li>
                <li><button onClick={() => setActiveTab('portfolio')} className="hover:text-[#D4AF37] transition-colors">Portfolio Gallery</button></li>
                <li><button onClick={() => setActiveTab('about')} className="hover:text-[#D4AF37] transition-colors">Our Story & Craft</button></li>
                <li><button onClick={() => setActiveTab('pricing')} className="hover:text-[#D4AF37] transition-colors">FAQ & Pricing</button></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-serif text-sm font-semibold mb-4 tracking-wider uppercase text-[11px]">
                Specialties
              </h4>
              <ul className="space-y-2">
                <li><button onClick={() => setActiveTab('services')} className="hover:text-[#D4AF37] transition-colors">Candid Weddings</button></li>
                <li><button onClick={() => setActiveTab('services')} className="hover:text-[#D4AF37] transition-colors">Cinematography</button></li>
                <li><button onClick={() => setActiveTab('services')} className="hover:text-[#D4AF37] transition-colors">Pre-Wedding Shoots</button></li>
                <li><button onClick={() => setActiveTab('booth')} className="hover:text-[#D4AF37] transition-colors">Instant Photo Booth</button></li>
                <li><button onClick={() => setActiveTab('services')} className="hover:text-[#D4AF37] transition-colors">Maternity & Milestones</button></li>
              </ul>
            </div>

            {/* Direct contact */}
            <div>
              <h4 className="text-white font-serif text-sm font-semibold mb-4 tracking-wider uppercase text-[11px]">
                Get in Touch
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <a href={`tel:${GAJARE_CONFIG.brand.contact.phone.replace(/\s+/g, '')}`} className="hover:text-white">
                    {GAJARE_CONFIG.brand.contact.phone}
                  </a>
                </li>
                <li className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <a href={`mailto:${GAJARE_CONFIG.brand.contact.email}`} className="hover:text-white">
                    {GAJARE_CONFIG.brand.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Mumbai & Thane, Maharashtra, India</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
            <p>© {new Date().getFullYear()} Gajare Photography - Best Photographer in Mumbai. All Rights Reserved.</p>
            <p className="text-gray-600">Recreated faithfully for RaozSite Showcase Platform</p>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          FLOATING QUICK ACTIONS (WHATSAPP & BOOKING)
      ========================================================================= */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3">
        <button
          onClick={() => setBookingModalOpen(true)}
          className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1A1D28] text-white border border-[#D4AF37]/40 shadow-xl hover:border-[#D4AF37] text-xs font-semibold backdrop-blur-md transition-all hover:scale-105"
        >
          <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Check Date</span>
        </button>

        <a
          href={`https://wa.me/${GAJARE_CONFIG.brand.contact.whatsapp}?text=Hello%20Gajare%20Photography%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20photography%20and%20cinematography%20services.`}
          target="_blank"
          rel="noreferrer"
          className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>

      {/* =========================================================================
          MODAL: CHECK DATE / BOOKING
      ========================================================================= */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#14161F] border border-[#222634] rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl animate-scaleUp">
            <button
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Date Availability & Quote
            </span>
            <h3 className="text-2xl font-serif text-white font-medium mt-1">
              Check Your Celebration Date
            </h3>
            <p className="text-xs text-gray-400 mt-1 mb-6">
              Tell us a few details and our studio team will confirm availability within 2 hours.
            </p>

            {bookingSubmitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="w-16 h-16 text-[#D4AF37] mx-auto mb-4 animate-bounce" />
                <h4 className="text-xl font-serif text-white">Date Inquiry Received!</h4>
                <p className="text-xs text-gray-300 mt-2 max-w-sm mx-auto">
                  We have queued your date check. Our Mumbai office will reach out to you directly via WhatsApp ({bookingForm.phone || '+91 7208659598'}).
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="text-xs text-gray-300 block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    placeholder="e.g. Sayali Patel"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#0B0C10] border border-[#262B3A] text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-300 block mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#0B0C10] border border-[#262B3A] text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-300 block mb-1">Event Date *</label>
                    <input
                      type="date"
                      required
                      value={bookingForm.eventDate}
                      onChange={(e) => setBookingForm({ ...bookingForm, eventDate: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#0B0C10] border border-[#262B3A] text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-300 block mb-1">Event Type *</label>
                  <select
                    value={bookingForm.eventType}
                    onChange={(e) => setBookingForm({ ...bookingForm, eventType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#0B0C10] border border-[#262B3A] text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option>Wedding</option>
                    <option>Pre-Wedding Romance</option>
                    <option>Instant Photo Booth</option>
                    <option>Engagement</option>
                    <option>Maternity / Baby Shower</option>
                    <option>Corporate Gala / Conference</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-gray-300 block mb-1.5">Services Desired:</label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      'Candid Photography',
                      'Traditional Photo',
                      'Cinematic Film (4K)',
                      'Instant Photo Booth',
                      'Drone Aerial Shots',
                      'Handcrafted Album'
                    ].map((srv) => (
                      <label key={srv} className="flex items-center gap-2 cursor-pointer text-gray-300">
                        <input
                          type="checkbox"
                          checked={bookingForm.services.includes(srv)}
                          onChange={() => toggleServiceCheckbox(srv)}
                          className="rounded text-[#D4AF37] focus:ring-0 bg-[#0B0C10] border-gray-700"
                        />
                        <span>{srv}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-300 block mb-1">Location / Venue</label>
                  <input
                    type="text"
                    value={bookingForm.venue}
                    onChange={(e) => setBookingForm({ ...bookingForm, venue: e.target.value })}
                    placeholder="e.g. Taj Lands End, Mumbai"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#0B0C10] border border-[#262B3A] text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#E5BF45] text-black shadow-lg shadow-[#D4AF37]/20 transition-all mt-4"
                >
                  Confirm Date Availability Check
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: LIGHTBOX HIGH-RES PHOTO VIEWER
      ========================================================================= */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-white hover:text-[#D4AF37] p-2 z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
            <img
              src={lightboxImage.image}
              alt={lightboxImage.title}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                {lightboxImage.category} · {lightboxImage.location}
              </span>
              <h3 className="text-xl font-serif text-white font-medium mt-1">
                {lightboxImage.title}
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                {lightboxImage.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: STORY DEEP-DIVE
      ========================================================================= */}
      {activeStoryModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#14161F] border border-[#222634] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl animate-scaleUp">
            <button
              onClick={() => setActiveStoryModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              {activeStoryModal.category} · {activeStoryModal.location}
            </span>
            <h2 className="text-3xl font-serif text-white font-medium mt-1">
              {activeStoryModal.couple}
            </h2>
            <h3 className="text-sm text-gray-400 font-serif mt-1">
              {activeStoryModal.title} · {activeStoryModal.date}
            </h3>

            <p className="text-sm text-gray-200 mt-4 leading-relaxed font-light">
              {activeStoryModal.fullStory}
            </p>

            <div className="mt-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">
                Curated Story Album ({activeStoryModal.gallery.length} Frames)
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {activeStoryModal.gallery.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${activeStoryModal.couple} frame ${idx + 1}`}
                    className="w-full aspect-[4/3] object-cover rounded-lg border border-white/10"
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#222634] flex items-center justify-between">
              <button
                onClick={() => {
                  setBookingForm((prev) => ({ ...prev, notes: `Inspired by ${activeStoryModal.couple} story` }));
                  setActiveStoryModal(null);
                  setBookingModalOpen(true);
                }}
                className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D4AF37] text-black"
              >
                Inquire a Similar Celebration
              </button>
              <button
                onClick={() => setActiveStoryModal(null)}
                className="text-xs text-gray-400 hover:text-white"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: VIDEO TEASER PLAYER
      ========================================================================= */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#14161F] border border-[#222634] rounded-2xl max-w-3xl w-full p-6 relative shadow-2xl">
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Cinematic Wedding Film · {activeVideoModal.duration}
            </span>
            <h3 className="text-2xl font-serif text-white font-medium mt-1">
              {activeVideoModal.title}
            </h3>

            {/* Simulated 4K Player Canvas */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black mt-4 border border-white/10 flex items-center justify-center">
              <img
                src={activeVideoModal.thumbnail}
                alt={activeVideoModal.title}
                className="w-full h-full object-cover filter brightness-75"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-2xl animate-pulse">
                  <Play className="w-8 h-8 fill-black ml-1" />
                </div>
                <span className="text-xs font-semibold text-white mt-3 uppercase tracking-wider">
                  4K Master Preview Stream Ready
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-300 mt-4 leading-relaxed">
              {activeVideoModal.description}
            </p>

            <div className="mt-6 pt-4 border-t border-[#222634] flex items-center justify-between">
              <button
                onClick={() => {
                  setBookingForm((prev) => ({ ...prev, services: [...prev.services, 'Cinematic Film'] }));
                  setActiveVideoModal(null);
                  setBookingModalOpen(true);
                }}
                className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D4AF37] text-black"
              >
                Inquire Wedding Cinematography
              </button>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="text-xs text-gray-400 hover:text-white"
              >
                Close Reel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: JOURNAL ARTICLE READER
      ========================================================================= */}
      {selectedJournalArticle && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#14161F] border border-[#222634] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl animate-scaleUp">
            <button
              onClick={() => setSelectedJournalArticle(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              The Gajare Journal · {selectedJournalArticle.readTime}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-medium mt-1">
              {selectedJournalArticle.title}
            </h2>
            <div className="flex items-center gap-2 text-xs text-gray-400 mt-1 mb-4">
              <span>By {selectedJournalArticle.author}</span>
              <span>·</span>
              <span>{selectedJournalArticle.date}</span>
            </div>

            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-gray-900 mb-6 border border-white/10">
              <img
                src={selectedJournalArticle.image}
                alt={selectedJournalArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-invert text-gray-200 text-sm leading-relaxed space-y-4 font-light">
              <p>{selectedJournalArticle.content}</p>
              <p>
                Every celebration is an ecosystem of delicate emotion and cultural symbolism. When approaching an Indian wedding, our visual storytellers focus on preserving the sacred dignity of traditional pheras while staying alert for the spontaneous laughter that erupts during candid breaks.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#222634] flex items-center justify-between">
              <button
                onClick={() => {
                  setSelectedJournalArticle(null);
                  setBookingModalOpen(true);
                }}
                className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D4AF37] text-black"
              >
                Plan Your Photography Timeline
              </button>
              <button
                onClick={() => setSelectedJournalArticle(null)}
                className="text-xs text-gray-400 hover:text-white"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GajarePhotography;
