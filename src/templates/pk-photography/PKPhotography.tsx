import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Camera,
  Calendar,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  X,
  MessageCircle,
  Menu,
  CheckCircle2,
  Star,
  MapPin,
  Play,
  Film,
  Building,
  User,
  Image as ImageIcon,
  HelpCircle,
  Clock,
  Shield,
  Layers,
  Award,
  Video,
  ChevronDown
} from 'lucide-react';
import {
  PK_PHOTOGRAPHY_CONFIG,
  ServiceItem,
  ReviewItem,
  FaqItem,
  ClientLogo
} from './pk-photography.config';

export const PKPhotography: React.FC = () => {
  // Navigation tabs
  const [activeTab, setActiveTab] = useState<'home' | 'services' | 'portfolio' | 'pricing' | 'reviews' | 'about' | 'contact'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filter state for services & logos
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLogoCategory, setSelectedLogoCategory] = useState<string>('all');

  // Modals
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedPackageForBooking, setSelectedPackageForBooking] = useState<string>('Full Wedding Day Master');
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string; category: string } | null>(null);

  // FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Booking Form State
  const [bookingFormData, setBookingFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Weddings & Films',
    eventDate: '',
    location: 'Mumbai',
    message: ''
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const cfg = PK_PHOTOGRAPHY_CONFIG;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      setIsBookingModalOpen(false);
    }, 2800);
  };

  // Filter client logos
  const filteredLogos = selectedLogoCategory === 'all'
    ? cfg.clientLogos
    : cfg.clientLogos.filter((l: ClientLogo) => l.category === selectedLogoCategory);

  const curatedGalleryItems = [
    {
      title: 'Real Wedding Rituals & Romance',
      category: 'Weddings',
      url: cfg.assets.curatedWedding,
      location: 'Mumbai & Goa',
      specs: 'Sony Alpha FX3 + G-Master 35mm f/1.4'
    },
    {
      title: 'Actor & Model Fashion Folio',
      category: 'Fashion & Portfolio',
      url: cfg.assets.curatedPortfolio,
      location: 'Andheri West Studio',
      specs: 'Profoto Strobes + 85mm f/1.2'
    },
    {
      title: 'Corporate Leadership Headshots',
      category: 'Executive',
      url: cfg.assets.curatedHeadshot,
      location: 'Bandra Kurla Complex',
      specs: 'Natural Softbox Key + 50mm f/1.2'
    },
    {
      title: 'The Modern Couple Editorial',
      category: 'Couples',
      url: cfg.assets.homeDuo,
      location: 'Morjim Beach, Goa',
      specs: 'Sunset Golden Hour + 24-70mm'
    },
    {
      title: 'Architectural & Space Narrative',
      category: 'Commercial',
      url: cfg.assets.homeEditorial,
      location: 'Luxury Villa, North Goa',
      specs: 'Tilt-Shift 24mm + Ambient Flare'
    },
    {
      title: 'Intimate Ceremonial Details',
      category: 'Ceremony',
      url: cfg.assets.weddingDetails,
      location: 'Heritage Haveli',
      specs: 'Macro 90mm f/2.8 Prime'
    },
    {
      title: 'Studio Lighting & Character Studies',
      category: 'Fine Art Portrait',
      url: cfg.assets.personalPortrait,
      location: 'PK Studio Mumbai',
      specs: 'Dual Rim Glow + Flagged Grid'
    },
    {
      title: 'Creative Direction & Editorial Production',
      category: 'Studio Editorial',
      url: cfg.assets.studioEditorial,
      location: 'Evershine Cosmic Studio',
      specs: 'Broncolor Para + Octa Fill'
    }
  ];

  return (
    <div className="min-h-screen bg-[#090A0C] text-[#E5E7EB] font-sans selection:bg-[#C5A880]/30 selection:text-[#E8D7B8]">
      {/* Top Concierge Announcement Bar */}
      <div className="bg-[#111317] border-b border-[#22252C] text-xs py-2 px-4 sm:px-8 text-[#A1A7B4]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#1C1F26] text-[#C5A880] font-medium border border-[#2E333F]">
              <Star className="w-3 h-3 fill-[#C5A880]" />
              {cfg.brand.rating} Rating ({cfg.brand.reviewCount}+ Google Reviews)
            </span>
            <span className="hidden md:inline text-[#6B7280]">·</span>
            <span className="hidden md:inline font-light text-[#D1D5DB]">
              {cfg.brand.statement}
            </span>
          </div>
          <div className="flex items-center gap-4 text-[#D1D5DB]">
            <a
              href={`tel:${cfg.brand.contact.mumbaiPhone}`}
              className="hover:text-[#C5A880] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Mumbai: {cfg.brand.contact.mumbaiPhone}</span>
            </a>
            <span className="text-[#374151]">|</span>
            <a
              href={`https://wa.me/${cfg.brand.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:brightness-125 transition-all flex items-center gap-1 font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Header & Nav */}
      <header className="sticky top-0 z-40 bg-[#090A0C]/90 backdrop-blur-md border-b border-[#1E222B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3.5 cursor-pointer group"
          >
            <img
              src={cfg.assets.logo}
              alt={cfg.brand.name}
              className="h-10 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-lg font-serif font-semibold tracking-wider text-white uppercase group-hover:text-[#C5A880] transition-colors">
                {cfg.brand.name}
              </span>
              <span className="text-[10px] tracking-widest text-[#9CA3AF] uppercase">
                Mumbai · Goa · Worldwide
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest font-medium">
            <button
              onClick={() => setActiveTab('home')}
              className={`transition-colors py-2 cursor-pointer ${
                activeTab === 'home'
                  ? 'text-[#C5A880] border-b-2 border-[#C5A880]'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              Stories
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`transition-colors py-2 cursor-pointer ${
                activeTab === 'services'
                  ? 'text-[#C5A880] border-b-2 border-[#C5A880]'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`transition-colors py-2 cursor-pointer ${
                activeTab === 'portfolio'
                  ? 'text-[#C5A880] border-b-2 border-[#C5A880]'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              Curated Folio
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`transition-colors py-2 cursor-pointer ${
                activeTab === 'pricing'
                  ? 'text-[#C5A880] border-b-2 border-[#C5A880]'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              Packages
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`transition-colors py-2 cursor-pointer ${
                activeTab === 'reviews'
                  ? 'text-[#C5A880] border-b-2 border-[#C5A880]'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              Reviews
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`transition-colors py-2 cursor-pointer ${
                activeTab === 'about'
                  ? 'text-[#C5A880] border-b-2 border-[#C5A880]'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              Prabhakar Kumar
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`transition-colors py-2 cursor-pointer ${
                activeTab === 'contact'
                  ? 'text-[#C5A880] border-b-2 border-[#C5A880]'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => {
                setSelectedPackageForBooking('Custom Consultation');
                setIsBookingModalOpen(true);
              }}
              className="px-5 py-2.5 bg-gradient-to-r from-[#C5A880] to-[#E0CAAA] text-[#090A0C] text-xs font-semibold uppercase tracking-wider rounded transition-all hover:brightness-110 shadow-lg shadow-[#C5A880]/15 cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              Check Availability
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#9CA3AF] hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#111317] border-b border-[#22252C] px-6 py-6 space-y-4 text-sm uppercase tracking-wider">
            {(['home', 'services', 'portfolio', 'pricing', 'reviews', 'about', 'contact'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 font-medium ${
                  activeTab === tab ? 'text-[#C5A880]' : 'text-[#9CA3AF]'
                }`}
              >
                {tab === 'home' ? 'Home & Stories' : tab}
              </button>
            ))}
            <button
              onClick={() => {
                setIsBookingModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full mt-4 py-3 bg-[#C5A880] text-[#090A0C] font-semibold text-center rounded text-xs uppercase tracking-widest"
            >
              Inquire Now
            </button>
          </div>
        )}
      </header>

      {/* Main View Router */}
      <main>
        {activeTab === 'home' && (
          <>
            {/* HERO SECTION */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-[#1E222B]">
              {/* Background Backdrop Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={cfg.assets.homeEditorial}
                  alt={cfg.brand.headline}
                  className="w-full h-full object-cover object-center brightness-[0.38] contrast-105 scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-[#090A0C]/50 to-transparent"></div>
                <div className="absolute inset-0 bg-radial from-transparent via-[#090A0C]/30 to-[#090A0C]/90"></div>
              </div>

              {/* Hero Content */}
              <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-20 text-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1D24]/80 border border-[#2D3341] text-xs text-[#C5A880] tracking-widest uppercase mb-6 backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  {cfg.brand.subheadline}
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-white mb-6 leading-tight tracking-tight">
                  {cfg.brand.headline}
                </h1>

                <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#B0B7C3] mb-10 font-light leading-relaxed">
                  {cfg.brand.description}
                </p>

                {/* Hero CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                  <button
                    onClick={() => {
                      setSelectedPackageForBooking('Full Wedding Day Master');
                      setIsBookingModalOpen(true);
                    }}
                    className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#C5A880] to-[#E0CAAA] text-[#090A0C] font-semibold text-xs uppercase tracking-widest rounded hover:brightness-110 transition-all shadow-xl shadow-[#C5A880]/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Book Your Date</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#171A21]/90 hover:bg-[#20242E] text-white border border-[#2E3442] font-medium text-xs uppercase tracking-widest rounded transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-sm"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Watch Cinematic Reel</span>
                  </button>
                </div>

                {/* 4-Step Narrative Workflow */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
                  {cfg.heroSteps.map((s, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#12151D]/80 border border-[#232733] backdrop-blur-md hover:border-[#C5A880]/40 transition-colors"
                    >
                      <div className="text-[#C5A880] text-xs font-mono font-semibold mb-1">
                        {s.step}
                      </div>
                      <div className="text-white text-sm font-serif font-medium mb-1">
                        {s.title}
                      </div>
                      <div className="text-[#9CA3AF] text-xs leading-normal">
                        {s.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CURATED SERVICES GRID */}
            <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-b border-[#1E222B]">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                  <span className="text-[#C5A880] text-xs uppercase tracking-widest font-semibold block mb-2">
                    Studio Specialisations
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-white">
                    Photography & Films Crafted With Calm Direction
                  </h2>
                </div>
                <button
                  onClick={() => setActiveTab('services')}
                  className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] hover:text-white uppercase tracking-wider font-medium cursor-pointer"
                >
                  <span>Explore all services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cfg.services.slice(0, 6).map((service: ServiceItem) => (
                  <div
                    key={service.id}
                    className="p-7 rounded-2xl bg-[#11141B] border border-[#1F232D] hover:border-[#C5A880]/50 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 rounded-full bg-[#181C26] text-[11px] text-[#C5A880] font-mono border border-[#2A303F]">
                          {service.destination}
                        </span>
                        <Camera className="w-5 h-5 text-[#6B7280] group-hover:text-[#C5A880] transition-colors" />
                      </div>
                      <h3 className="text-xl font-serif text-white font-medium mb-2 group-hover:text-[#E8D7B8] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#9CA3AF] leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="text-xs text-[#CBD5E1] flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => setSelectedServiceModal(service)}
                      className="w-full py-2.5 px-4 bg-[#181C26] hover:bg-[#C5A880] text-[#CBD5E1] hover:text-[#090A0C] text-xs font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer text-center"
                    >
                      View Details & Pricing
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* CURATED VISUAL FOLIO WITH LIGHTBOX */}
            <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-b border-[#1E222B]">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <span className="text-[#C5A880] text-xs uppercase tracking-widest font-semibold block mb-2">
                  Portfolio Highlights
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">
                  Moments That Still Feel Like You
                </h2>
                <p className="text-sm text-[#9CA3AF]">
                  From sea-breeze vows in Morjim to high-profile executive portraits in BKC, explore our recent commissions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {curatedGalleryItems.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setLightboxImage(item)}
                    className="relative group rounded-xl overflow-hidden aspect-[3/4] cursor-pointer bg-[#141720] border border-[#202531]"
                  >
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C]/90 via-[#090A0C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-end">
                      <span className="text-[10px] uppercase font-mono text-[#C5A880] tracking-wider mb-1">
                        {item.category} · {item.location}
                      </span>
                      <h4 className="text-sm font-serif font-medium text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#9CA3AF] line-clamp-1">
                        {item.specs}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* TRUSTED CLIENTS & CORPORATE PARTNERS MARQUEE */}
            <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-b border-[#1E222B]">
              <div className="text-center mb-10">
                <span className="text-xs font-mono uppercase tracking-widest text-[#6B7280] block mb-1">
                  Trusted by Over 100+ Leading Indian & Global Brands
                </span>
                <h3 className="text-xl font-serif text-white">
                  Corporate, Fashion, Hospitality & Real Estate Clients
                </h3>
              </div>

              {/* Logo Categories Filter */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-8 text-xs">
                {['all', 'Corporate', 'Hospitality', 'Fashion', 'Technology', 'Real estate', 'Consumer'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedLogoCategory(cat)}
                    className={`px-3 py-1 rounded-full uppercase tracking-wider transition-colors cursor-pointer ${
                      selectedLogoCategory === cat
                        ? 'bg-[#C5A880] text-[#090A0C] font-semibold'
                        : 'bg-[#151821] text-[#9CA3AF] hover:text-white border border-[#232836]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Logos Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4">
                {filteredLogos.map((logo: ClientLogo, idx: number) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#11141B] border border-[#1D212B] rounded-lg flex flex-col items-center justify-center text-center gap-2 hover:border-[#C5A880]/30 transition-colors group"
                  >
                    <img
                      src={`/assets/pk-photography/client-logos/${logo.filename}`}
                      alt={logo.name}
                      className="h-8 max-w-[80px] object-contain opacity-70 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                    />
                    <span className="text-[10px] text-[#9CA3AF] truncate max-w-full">
                      {logo.name}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* PACKAGES SUMMARY */}
            <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-b border-[#1E222B]">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <span className="text-[#C5A880] text-xs uppercase tracking-widest font-semibold block mb-2">
                  Transparent Pricing
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">
                  Signature Photography & Film Packages
                </h2>
                <p className="text-sm text-[#9CA3AF]">
                  Every package includes in-house coordination, color-calibrated edits, high-resolution delivery, and printed heirloom albums.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cfg.packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`rounded-2xl p-6 flex flex-col justify-between border transition-all ${
                      pkg.popular
                        ? 'bg-[#141822] border-[#C5A880] shadow-xl shadow-[#C5A880]/10'
                        : 'bg-[#11141B] border-[#202531] hover:border-[#2D3444]'
                    }`}
                  >
                    <div>
                      {pkg.popular && (
                        <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#C5A880] text-[#090A0C] text-[10px] font-bold uppercase tracking-wider mb-4">
                          Most Requested
                        </div>
                      )}
                      <span className="text-xs font-mono text-[#9CA3AF] uppercase block mb-1">
                        {pkg.category}
                      </span>
                      <h3 className="text-xl font-serif text-white font-medium mb-3">
                        {pkg.title}
                      </h3>
                      <div className="text-2xl font-serif text-[#C5A880] font-bold mb-4">
                        {pkg.price}
                      </div>
                      <p className="text-xs text-[#9CA3AF] leading-relaxed mb-4">
                        {pkg.description}
                      </p>
                      <div className="pt-4 border-t border-[#1F2430] space-y-2 mb-6">
                        <div className="text-xs text-[#CBD5E1]">
                          <span className="text-[#64748B]">Duration:</span> {pkg.duration}
                        </div>
                        <div className="text-xs text-[#CBD5E1]">
                          <span className="text-[#64748B]">Deliverables:</span> {pkg.deliverables}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedPackageForBooking(pkg.title);
                        setIsBookingModalOpen(true);
                      }}
                      className={`w-full py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        pkg.popular
                          ? 'bg-[#C5A880] text-[#090A0C] hover:brightness-110 shadow-lg'
                          : 'bg-[#1B1F2A] hover:bg-[#C5A880] text-[#E2E8F0] hover:text-[#090A0C]'
                      }`}
                    >
                      Book This Package
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-b border-[#1E222B]">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181C26] text-[#C5A880] text-xs font-medium border border-[#29303F] mb-3">
                  <Star className="w-3.5 h-3.5 fill-[#C5A880]" />
                  <span>5.0 Star Verified Reviews</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif text-white mb-3">
                  What Clients Say About Working With Prabhakar
                </h2>
                <p className="text-sm text-[#9CA3AF]">
                  Genuine feedback from brides, executives, fashion models, and brand directors.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cfg.testimonials.slice(0, 3).map((rev: ReviewItem) => (
                  <div
                    key={rev.id}
                    className="p-7 rounded-2xl bg-[#11141B] border border-[#1E232E] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-1 text-[#C5A880] mb-4">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#C5A880]" />
                        ))}
                      </div>
                      <p className="text-sm text-[#D1D5DB] font-light italic leading-relaxed mb-6">
                        "{rev.quote}"
                      </p>
                    </div>
                    <div className="pt-4 border-t border-[#1C202B]">
                      <div className="text-white font-medium text-sm">
                        {rev.author}
                      </div>
                      <div className="text-xs text-[#C5A880]">
                        {rev.role} · {rev.location}
                      </div>
                      <div className="text-[11px] text-[#64748B] mt-1">
                        {rev.serviceCategory}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQS ACCORDION */}
            <section className="py-20 px-4 sm:px-8 max-w-4xl mx-auto border-b border-[#1E222B]">
              <div className="text-center mb-12">
                <span className="text-[#C5A880] text-xs uppercase tracking-widest font-semibold block mb-2">
                  Frequently Asked Questions
                </span>
                <h2 className="text-3xl font-serif text-white">
                  Coverage, Pricing & Delivery Guidance
                </h2>
              </div>

              <div className="space-y-3">
                {cfg.faqs.map((faq: FaqItem, idx: number) => (
                  <div
                    key={idx}
                    className="rounded-xl bg-[#11141B] border border-[#1E232E] overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#151922] transition-colors"
                    >
                      <span className="text-sm font-medium text-white">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#C5A880] transition-transform ${
                          openFaqIndex === idx ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaqIndex === idx && (
                      <div className="px-5 pb-5 text-xs text-[#9CA3AF] leading-relaxed border-t border-[#191D27] pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* SERVICES TAB */}
        {activeTab === 'services' && (
          <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#C5A880] text-xs uppercase tracking-widest font-semibold block mb-2">
                Complete Service Directory
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">
                Photography & Cinematography Services in Mumbai & Goa
              </h2>
              <p className="text-sm text-[#9CA3AF]">
                Weddings, destination rituals, pre-wedding films, corporate summits, actor folios, and commercial production.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cfg.services.map((service: ServiceItem) => (
                <div
                  key={service.id}
                  className="p-7 rounded-2xl bg-[#11141B] border border-[#1F232D] hover:border-[#C5A880]/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#181C26] text-[11px] text-[#C5A880] font-mono border border-[#2A303F]">
                        {service.destination}
                      </span>
                      <Camera className="w-5 h-5 text-[#6B7280]" />
                    </div>
                    <h3 className="text-xl font-serif text-white font-medium mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="text-xs text-[#CBD5E1] flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedPackageForBooking(service.title);
                      setIsBookingModalOpen(true);
                    }}
                    className="w-full py-2.5 px-4 bg-[#C5A880] hover:bg-[#E0CAAA] text-[#090A0C] text-xs font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer text-center"
                  >
                    Inquire For {service.title}
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PORTFOLIO TAB */}
        {activeTab === 'portfolio' && (
          <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#C5A880] text-xs uppercase tracking-widest font-semibold block mb-2">
                Visual Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">
                Curated Photographic Commissions
              </h2>
              <p className="text-sm text-[#9CA3AF]">
                Click any gallery frame below to view the high-resolution shot and camera optics specifications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {curatedGalleryItems.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxImage(item)}
                  className="rounded-xl overflow-hidden aspect-[3/4] cursor-pointer bg-[#141720] border border-[#202531] relative group"
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C]/90 via-[#090A0C]/30 to-transparent p-5 flex flex-col justify-end">
                    <span className="text-[10px] uppercase font-mono text-[#C5A880]">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-serif font-medium text-white">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#9CA3AF]">
                      {item.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PRICING TAB */}
        {activeTab === 'pricing' && (
          <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#C5A880] text-xs uppercase tracking-widest font-semibold block mb-2">
                Investment & Deliverables
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">
                Transparent Studio Rates
              </h2>
              <p className="text-sm text-[#9CA3AF]">
                Reserve with 20% advance booking or pay full online to receive a 10% prepayment benefit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {cfg.packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`rounded-2xl p-6 flex flex-col justify-between border transition-all ${
                    pkg.popular
                      ? 'bg-[#141822] border-[#C5A880] shadow-xl shadow-[#C5A880]/10'
                      : 'bg-[#11141B] border-[#202531]'
                  }`}
                >
                  <div>
                    {pkg.popular && (
                      <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#C5A880] text-[#090A0C] text-[10px] font-bold uppercase tracking-wider mb-4">
                        Signature Choice
                      </div>
                    )}
                    <span className="text-xs font-mono text-[#9CA3AF] uppercase block mb-1">
                      {pkg.category}
                    </span>
                    <h3 className="text-xl font-serif text-white font-medium mb-3">
                      {pkg.title}
                    </h3>
                    <div className="text-2xl font-serif text-[#C5A880] font-bold mb-4">
                      {pkg.price}
                    </div>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed mb-4">
                      {pkg.description}
                    </p>
                    <div className="pt-4 border-t border-[#1F2430] space-y-2 mb-6">
                      <div className="text-xs text-[#CBD5E1]">
                        <span className="text-[#64748B]">Coverage:</span> {pkg.duration}
                      </div>
                      <div className="text-xs text-[#CBD5E1]">
                        <span className="text-[#64748B]">Deliverables:</span> {pkg.deliverables}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedPackageForBooking(pkg.title);
                      setIsBookingModalOpen(true);
                    }}
                    className="w-full py-2.5 bg-[#C5A880] hover:bg-[#E0CAAA] text-[#090A0C] font-semibold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
                  >
                    Reserve Date
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* REVIEWS TAB */}
        {activeTab === 'reviews' && (
          <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#C5A880] text-xs uppercase tracking-widest font-semibold block mb-2">
                Client Testimonials
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">
                4.9 Stars Across 197+ Client Reviews
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cfg.testimonials.map((rev: ReviewItem) => (
                <div
                  key={rev.id}
                  className="p-7 rounded-2xl bg-[#11141B] border border-[#1E232E] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 text-[#C5A880] mb-4">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#C5A880]" />
                      ))}
                    </div>
                    <p className="text-sm text-[#D1D5DB] font-light italic leading-relaxed mb-6">
                      "{rev.quote}"
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#1C202B]">
                    <div className="text-white font-medium text-sm">
                      {rev.author}
                    </div>
                    <div className="text-xs text-[#C5A880]">
                      {rev.role} · {rev.location}
                    </div>
                    <div className="text-[11px] text-[#64748B] mt-1">
                      {rev.serviceCategory}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ABOUT TAB */}
        {activeTab === 'about' && (
          <section className="py-16 px-4 sm:px-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#141720] border border-[#202531]">
                <img
                  src={cfg.assets.studioEditorial}
                  alt={cfg.brand.founder}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div>
                <span className="text-[#C5A880] text-xs uppercase tracking-widest font-semibold block mb-2">
                  Meet The Founder & Lead Director
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-white mb-6">
                  {cfg.brand.founder}
                </h2>
                <div className="space-y-4 text-sm text-[#9CA3AF] leading-relaxed mb-8">
                  <p>
                    Photography feels different when you feel understood. For over a decade, Prabhakar Kumar has directed intimate weddings, luxury destination celebrations, and high-stakes commercial imagery across Mumbai and Goa.
                  </p>
                  <p>
                    Rather than posing clients into stiff molds, our team brings gentle, calm direction. We observe the unscripted laughter, the subtle glances between family members, and the atmospheric pulse of the venue.
                  </p>
                  <p>
                    Our studios in Andheri West (Mumbai) and Morjim (Goa) are fully equipped with cutting-edge lighting, 4K cinema gear, and private proofing suites.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#1E232E]">
                  <div>
                    <div className="text-2xl font-serif text-[#C5A880] font-bold">12+</div>
                    <div className="text-xs text-[#9CA3AF]">Years of Dedicated Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-serif text-[#C5A880] font-bold">500+</div>
                    <div className="text-xs text-[#9CA3AF]">Weddings & Projects Filmed</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CONTACT TAB */}
        {activeTab === 'contact' && (
          <section className="py-16 px-4 sm:px-8 max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#C5A880] text-xs uppercase tracking-widest font-semibold block mb-2">
                Connect With Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">
                Studios in Mumbai & Goa
              </h2>
              <p className="text-sm text-[#9CA3AF]">
                Have a wedding date in mind or need an executive headshot session? Reach out directly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Mumbai Studio */}
              <div className="p-8 rounded-2xl bg-[#11141B] border border-[#1E232E]">
                <div className="flex items-center gap-2 text-[#C5A880] text-sm font-medium mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>Mumbai Studio Headquarters</span>
                </div>
                <p className="text-xs text-[#CBD5E1] leading-relaxed mb-6">
                  {cfg.brand.contact.mumbaiAddress}
                </p>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center gap-2 text-[#9CA3AF]">
                    <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                    <a href={`tel:${cfg.brand.contact.mumbaiPhone}`} className="hover:text-white">
                      {cfg.brand.contact.mumbaiPhone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-[#9CA3AF]">
                    <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                    <a href={`mailto:${cfg.brand.contact.email}`} className="hover:text-white">
                      {cfg.brand.contact.displayEmail}
                    </a>
                  </div>
                </div>
              </div>

              {/* Goa Studio */}
              <div className="p-8 rounded-2xl bg-[#11141B] border border-[#1E232E]">
                <div className="flex items-center gap-2 text-[#C5A880] text-sm font-medium mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>Goa Destination Office</span>
                </div>
                <p className="text-xs text-[#CBD5E1] leading-relaxed mb-6">
                  {cfg.brand.contact.goaAddress}
                </p>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center gap-2 text-[#9CA3AF]">
                    <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                    <a href={`tel:${cfg.brand.contact.goaPhone}`} className="hover:text-white">
                      {cfg.brand.contact.goaPhone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-[#9CA3AF]">
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <a
                      href={`https://wa.me/${cfg.brand.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      WhatsApp Concierge (+91 8888766739)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-[#07080A] border-t border-[#191D26] py-14 px-4 sm:px-8 text-xs text-[#6B7280]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src={cfg.assets.logo}
              alt={cfg.brand.name}
              className="h-8 w-auto object-contain opacity-80"
            />
            <span>
              © {new Date().getFullYear()} {cfg.brand.name}. Directed by {cfg.brand.founder}. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={cfg.brand.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5A880] transition-colors"
            >
              Instagram
            </a>
            <a
              href={cfg.brand.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5A880] transition-colors"
            >
              YouTube
            </a>
            <a
              href={cfg.brand.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5A880] transition-colors"
            >
              Facebook
            </a>
            <a
              href={cfg.brand.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5A880] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href={`https://wa.me/${cfg.brand.contact.whatsapp}?text=Hi%20Prabhakar,%20I%20am%20inquiring%20about%20photography%20and%20films`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full shadow-2xl shadow-green-500/30 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>

      {/* Video Reel Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-[#11141B] rounded-2xl overflow-hidden border border-[#232733] shadow-2xl">
            <div className="p-4 border-b border-[#1E232E] flex items-center justify-between">
              <span className="text-sm font-serif text-white">
                PK Photography Cinematic Reel (Mumbai & Goa)
              </span>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1.5 text-[#9CA3AF] hover:text-white rounded-lg hover:bg-[#1E232E]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center">
              <video
                src={cfg.assets.videoReel}
                poster={cfg.assets.videoPoster}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Image Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-[#C5A880] transition-colors"
            >
              <X className="w-7 h-7" />
            </button>
            <img
              src={lightboxImage.url}
              alt={lightboxImage.title}
              className="max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl border border-[#232733]"
            />
            <div className="mt-4 text-center">
              <div className="text-xs font-mono text-[#C5A880] uppercase tracking-wider">
                {lightboxImage.category}
              </div>
              <div className="text-lg font-serif text-white">
                {lightboxImage.title}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Service Detail Modal */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-[#11141B] border border-[#252A36] rounded-2xl p-7 text-left shadow-2xl">
            <button
              onClick={() => setSelectedServiceModal(null)}
              className="absolute top-5 right-5 p-2 text-[#9CA3AF] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="px-3 py-1 rounded-full bg-[#181C26] text-xs font-mono text-[#C5A880] border border-[#2A303F] mb-3 inline-block">
              {selectedServiceModal.destination}
            </span>
            <h3 className="text-2xl font-serif text-white font-medium mb-2">
              {selectedServiceModal.title}
            </h3>
            <p className="text-xs text-[#9CA3AF] leading-relaxed mb-6">
              {selectedServiceModal.description}
            </p>

            <div className="mb-6">
              <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-3">
                Key Features Included:
              </span>
              <ul className="space-y-2">
                {selectedServiceModal.features.map((f, i) => (
                  <li key={i} className="text-xs text-[#CBD5E1] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setSelectedPackageForBooking(selectedServiceModal.title);
                  setSelectedServiceModal(null);
                  setIsBookingModalOpen(true);
                }}
                className="flex-1 py-3 bg-[#C5A880] hover:bg-[#E0CAAA] text-[#090A0C] font-semibold text-xs uppercase tracking-wider rounded transition-colors"
              >
                Book This Service
              </button>
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="px-6 py-3 bg-[#181C26] text-[#9CA3AF] hover:text-white rounded text-xs uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Consultation Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-xl bg-[#11141B] border border-[#252A36] rounded-2xl p-7 text-left shadow-2xl">
            <button
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-[#9CA3AF] hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingSubmitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-16 h-16 text-[#C5A880] mx-auto mb-4 animate-bounce" />
                <h3 className="text-2xl font-serif text-white mb-2">
                  Inquiry Received with Gratitude!
                </h3>
                <p className="text-xs text-[#9CA3AF] max-w-md mx-auto">
                  Prabhakar Kumar and the PK Photography production desk will review your date and contact you within 24 hours.
                </p>
              </div>
            ) : (
              <div>
                <span className="text-[#C5A880] text-xs font-mono uppercase tracking-wider block mb-1">
                  Availability Check · {selectedPackageForBooking}
                </span>
                <h3 className="text-2xl font-serif text-white font-medium mb-2">
                  Reserve Your Date
                </h3>
                <p className="text-xs text-[#9CA3AF] mb-6">
                  Provide your celebration dates and location to check crew schedules across Mumbai and Goa.
                </p>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] text-[#9CA3AF] uppercase mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={bookingFormData.name}
                        onChange={(e) => setBookingFormData({ ...bookingFormData, name: e.target.value })}
                        placeholder="e.g. Ananya Sen"
                        className="w-full px-3.5 py-2.5 bg-[#171A23] border border-[#282E3E] rounded text-xs text-white focus:outline-none focus:border-[#C5A880]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-[#9CA3AF] uppercase mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={bookingFormData.phone}
                        onChange={(e) => setBookingFormData({ ...bookingFormData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 bg-[#171A23] border border-[#282E3E] rounded text-xs text-white focus:outline-none focus:border-[#C5A880]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] text-[#9CA3AF] uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={bookingFormData.email}
                        onChange={(e) => setBookingFormData({ ...bookingFormData, email: e.target.value })}
                        placeholder="ananya@example.com"
                        className="w-full px-3.5 py-2.5 bg-[#171A23] border border-[#282E3E] rounded text-xs text-white focus:outline-none focus:border-[#C5A880]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-[#9CA3AF] uppercase mb-1">
                        Shoot / Event Date
                      </label>
                      <input
                        type="date"
                        value={bookingFormData.eventDate}
                        onChange={(e) => setBookingFormData({ ...bookingFormData, eventDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#171A23] border border-[#282E3E] rounded text-xs text-white focus:outline-none focus:border-[#C5A880]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-[#9CA3AF] uppercase mb-1">
                      Shoot Location
                    </label>
                    <select
                      value={bookingFormData.location}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#171A23] border border-[#282E3E] rounded text-xs text-white focus:outline-none focus:border-[#C5A880]"
                    >
                      <option value="Mumbai">Mumbai (Studio / City / BKC / Andheri)</option>
                      <option value="North Goa">North Goa (Morjim, Anjuna, Panaji)</option>
                      <option value="South Goa">South Goa (Cavelossim, Utorda Resorts)</option>
                      <option value="Destination India">Destination India (Udaipur, Jaipur, etc.)</option>
                      <option value="International">International</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] text-[#9CA3AF] uppercase mb-1">
                      Event Notes & Vision
                    </label>
                    <textarea
                      rows={3}
                      value={bookingFormData.message}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, message: e.target.value })}
                      placeholder="Tell us a little about your wedding rituals, event timeline, or headshot requirements..."
                      className="w-full px-3.5 py-2.5 bg-[#171A23] border border-[#282E3E] rounded text-xs text-white focus:outline-none focus:border-[#C5A880]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#C5A880] hover:bg-[#E0CAAA] text-[#090A0C] font-semibold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
                  >
                    Send Booking Inquiry
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PKPhotography;

