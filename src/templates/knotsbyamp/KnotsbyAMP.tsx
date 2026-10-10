import React, { useState, useEffect } from 'react';
import {
  Camera,
  Film,
  Heart,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  Star,
  Play,
  X,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  CheckCircle2,
  Share2,
  Sparkles,
  ExternalLink,
  MessageCircle,
  Menu,
  SlidersHorizontal,
  Users,
  Compass,
  Search,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import {
  KNOTSBYAMP_CONFIG,
  WeddingStory,
  WeddingFilm,
  CoupleShootItem,
  TestimonialItem,
  FaqItem
} from './knotsbyamp.config';

export default function KnotsbyAMP() {
  const [activeTab, setActiveTab] = useState<
    'home' | 'stories' | 'films' | 'couple-shoot' | 'about' | 'testimonials' | 'faqs' | 'contact'
  >('home');

  // Filters for wedding stories
  const [selectedCulture, setSelectedCulture] = useState<string>('All');
  const [selectedDestination, setSelectedDestination] = useState<string>('All');

  // Interactive Modals
  const [selectedStory, setSelectedStory] = useState<WeddingStory | null>(null);
  const [activeVideoModal, setActiveVideoModal] = useState<WeddingFilm | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [lightboxGallery, setLightboxGallery] = useState<string[]>([]);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDates: '',
    cityVenue: '',
    guestCount: '200-500',
    services: ['Candid Photography', 'Cinematic Wedding Film'],
    referral: 'Google Search',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [faqCategory, setFaqCategory] = useState<string>('All');

  // Lightbox handlers
  const openLightbox = (imgUrl: string, gallery: string[] = []) => {
    const list = gallery.length > 0 ? gallery : [imgUrl];
    setLightboxGallery(list);
    const idx = list.indexOf(imgUrl);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setLightboxImage(imgUrl);
  };

  const nextLightboxImage = () => {
    if (lightboxGallery.length > 0) {
      const nextIdx = (lightboxIndex + 1) % lightboxGallery.length;
      setLightboxIndex(nextIdx);
      setLightboxImage(lightboxGallery[nextIdx]);
    }
  };

  const prevLightboxImage = () => {
    if (lightboxGallery.length > 0) {
      const prevIdx = (lightboxIndex - 1 + lightboxGallery.length) % lightboxGallery.length;
      setLightboxIndex(prevIdx);
      setLightboxImage(lightboxGallery[prevIdx]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedStory(null);
        setActiveVideoModal(null);
        setLightboxImage(null);
        setIsBookingModalOpen(false);
      } else if (e.key === 'ArrowRight' && lightboxImage) {
        nextLightboxImage();
      } else if (e.key === 'ArrowLeft' && lightboxImage) {
        prevLightboxImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage, lightboxIndex, lightboxGallery]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsBookingModalOpen(false);
    }, 3500);
  };

  const toggleService = (srv: string) => {
    if (formData.services.includes(srv)) {
      setFormData({
        ...formData,
        services: formData.services.filter((s) => s !== srv)
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, srv]
      });
    }
  };

  // Filtered stories
  const filteredStories = KNOTSBYAMP_CONFIG.stories.filter((s) => {
    const matchCulture = selectedCulture === 'All' || s.culture === selectedCulture;
    const matchDestination = selectedDestination === 'All' || s.destinationType === selectedDestination;
    return matchCulture && matchDestination;
  });

  // Filtered FAQs
  const filteredFaqs = KNOTSBYAMP_CONFIG.faqs.filter((f) => {
    return faqCategory === 'All' || f.category === faqCategory;
  });

  return (
    <div className="min-h-screen bg-[#0e0e11] text-[#eae7e1] font-sans antialiased selection:bg-[#c99d66] selection:text-black">
      {/* 1. TOP ANNOUNCEMENT / UTILITY BAR */}
      <div className="bg-[#141419] border-b border-white/5 py-2 px-4 text-xs text-white/70">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="flex items-center gap-1.5 text-white/90">
              <MapPin className="w-3.5 h-3.5 text-[#c99d66]" />
              <span>Belapur, Navi Mumbai (HQ) · Worldwide Coverage</span>
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#c99d66]" />
              <span>Mon – Sat: 11:00 AM – 7:00 PM IST</span>
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="flex items-center gap-1.5 text-[#c99d66] font-medium">
              <Award className="w-3.5 h-3.5" />
              <span>WeddingSutra 2024 Winners</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${KNOTSBYAMP_CONFIG.contact.phone}`}
              className="flex items-center gap-1 hover:text-[#c99d66] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#c99d66]" />
              <span>{KNOTSBYAMP_CONFIG.contact.phone}</span>
            </a>
            <span className="text-white/30">•</span>
            <a
              href={`mailto:${KNOTSBYAMP_CONFIG.contact.email}`}
              className="flex items-center gap-1 hover:text-[#c99d66] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#c99d66]" />
              <span>{KNOTSBYAMP_CONFIG.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION HEADER */}
      <header className="sticky top-0 z-40 bg-[#0e0e11]/95 backdrop-blur-md border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 text-left group"
          >
            <img
              src={KNOTSBYAMP_CONFIG.brand.logo}
              alt="KnotsbyAMP"
              className="h-10 sm:h-12 w-auto object-contain brightness-105"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-wide uppercase font-medium">
            {[
              { id: 'home', label: 'Home' },
              { id: 'stories', label: 'Wedding Stories' },
              { id: 'films', label: 'Wedding Films' },
              { id: 'couple-shoot', label: 'Couple Shoot' },
              { id: 'about', label: 'About Us' },
              { id: 'testimonials', label: 'Testimonials' },
              { id: 'faqs', label: 'FAQs' },
              { id: 'contact', label: 'Contact' }
            ].map((nav) => (
              <button
                key={nav.id}
                onClick={() => {
                  setActiveTab(nav.id as any);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`transition-colors py-1 relative ${
                  activeTab === nav.id
                    ? 'text-[#c99d66] font-semibold'
                    : 'text-white/80 hover:text-[#c99d66]'
                }`}
              >
                {nav.label}
                {activeTab === nav.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c99d66]" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="px-4 py-2 bg-[#c99d66] hover:bg-[#d8af77] text-black font-semibold text-xs tracking-wider uppercase rounded transition-all shadow-md hover:shadow-[#c99d66]/20 flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Check Date / Book</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#141419] border-b border-white/10 px-6 py-5 space-y-3">
            {[
              { id: 'home', label: 'Home' },
              { id: 'stories', label: 'Wedding Stories' },
              { id: 'films', label: 'Wedding Films' },
              { id: 'couple-shoot', label: 'Couple Shoot' },
              { id: 'about', label: 'About Us' },
              { id: 'testimonials', label: 'Testimonials' },
              { id: 'faqs', label: 'FAQs' },
              { id: 'contact', label: 'Contact' }
            ].map((nav) => (
              <button
                key={nav.id}
                onClick={() => {
                  setActiveTab(nav.id as any);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`block w-full text-left py-2 text-sm uppercase tracking-wider ${
                  activeTab === nav.id
                    ? 'text-[#c99d66] font-semibold'
                    : 'text-white/80 hover:text-[#c99d66]'
                }`}
              >
                {nav.label}
              </button>
            ))}
            <div className="pt-3 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsBookingModalOpen(true);
                }}
                className="w-full py-2.5 bg-[#c99d66] text-black font-semibold text-xs tracking-wider uppercase rounded text-center"
              >
                Check Date / Book Consultation
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION (Dynamic depending on tab or prominent on Home) */}
      {activeTab === 'home' && (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          {/* Hero Background Image with Atmospheric Gradients */}
          <div className="absolute inset-0 z-0">
            <img
              src={KNOTSBYAMP_CONFIG.brand.heroOg}
              alt="KnotsbyAMP Wedding Hero"
              className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-[#0e0e11]/60 to-[#0e0e11]/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e11]/80 via-transparent to-[#0e0e11]/80" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-20">
            {/* Prestige badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-[#c99d66] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-medium tracking-wide">
                International Award-Winning Wedding Photography & Films
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-white leading-tight tracking-tight mb-4">
              Beautiful Weddings, <br />
              <span className="italic font-normal text-[#c99d66]">Breathtaking Films</span>
            </h1>

            <p className="text-base sm:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed mb-8">
              Celebrating love with every frame. Tying the knot, one authentic, unscripted story at a time across Mumbai, Goa, Rajasthan, and worldwide destinations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button
                onClick={() => {
                  setActiveTab('stories');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#c99d66] hover:bg-[#d8af77] text-black font-semibold text-xs uppercase tracking-widest rounded transition-all shadow-lg hover:shadow-[#c99d66]/30 flex items-center justify-center gap-2"
              >
                <Camera className="w-4 h-4" />
                <span>Explore Wedding Stories</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('films');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-3.5 bg-black/60 hover:bg-black/80 text-white border border-white/20 font-semibold text-xs uppercase tracking-widest rounded transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <Play className="w-4 h-4 text-[#c99d66]" />
                <span>Watch Wedding Films</span>
              </button>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-6 border-t border-white/10 max-w-4xl mx-auto">
              {KNOTSBYAMP_CONFIG.stats.map((st, i) => (
                <div key={i} className="text-center p-2">
                  <div className="text-2xl sm:text-3xl font-serif text-[#c99d66] font-bold">
                    {st.value}
                  </div>
                  <div className="text-[11px] text-white/60 tracking-wider uppercase mt-1">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. AWARDS & PRESS LOGOS STRIP */}
      <section className="bg-[#121216] border-y border-white/5 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-[11px] uppercase tracking-widest text-white/50 mb-6">
            Recognized & Honored by Global Wedding Authorities
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 opacity-90 hover:opacity-100 transition-opacity">
            <img
              src={KNOTSBYAMP_CONFIG.brand.awardsKnots}
              alt="KnotsbyAMP Press and Awards"
              className="max-h-12 w-auto object-contain filter invert contrast-125"
            />
            <div className="h-8 w-[1px] bg-white/10 hidden md:block" />
            <img
              src={KNOTSBYAMP_CONFIG.brand.awardsLaurel}
              alt="Awards Laurels"
              className="max-h-12 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* 5. TAB-SPECIFIC CONTENT ROUTER */}

      {/* TAB: HOME */}
      {activeTab === 'home' && (
        <div className="space-y-24 py-16">
          {/* Featured Wedding Stories Preview */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#c99d66] font-semibold">
                  Real Love Stories
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-white mt-1">
                  Featured Wedding Stories
                </h2>
                <p className="text-white/60 text-sm mt-2 max-w-xl">
                  Each celebration is a handcrafted tapestry of heartfelt laughs, sacred rituals, and unforgettable midnight memories.
                </p>
              </div>

              <button
                onClick={() => {
                  setActiveTab('stories');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#c99d66] hover:text-[#d8af77] font-semibold"
              >
                <span>View All 12+ Stories</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {KNOTSBYAMP_CONFIG.stories.slice(0, 4).map((story) => (
                <div
                  key={story.id}
                  onClick={() => setSelectedStory(story)}
                  className="group bg-[#15151c] rounded-lg overflow-hidden border border-white/5 hover:border-[#c99d66]/50 transition-all duration-300 flex flex-col cursor-pointer shadow-lg hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={story.coverImage}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/70 backdrop-blur-sm rounded text-[10px] uppercase tracking-wider text-[#c99d66] font-medium border border-white/10">
                      {story.culture} Wedding
                    </div>
                    <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-[10px] text-white/80 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#c99d66]" />
                      <span>{story.destinationType}</span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg text-white group-hover:text-[#c99d66] transition-colors leading-snug">
                        {story.title}
                      </h3>
                      <p className="text-xs text-white/60 mt-2 line-clamp-2 leading-relaxed">
                        {story.excerpt}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#c99d66] font-medium">
                      <span>Read Story & Gallery</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Films Showcase */}
          <section className="bg-[#121217] py-16 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#c99d66] font-semibold">
                    Cinematic Filmmaking
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-white mt-1">
                    Award-Winning Wedding Films
                  </h2>
                  <p className="text-white/60 text-sm mt-2 max-w-xl">
                    Shot on cinema-grade cameras with custom musical scoring, sound design, and poetic storytelling that makes you feel like the leads in a feature film.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setActiveTab('films');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#c99d66] hover:text-[#d8af77] font-semibold"
                >
                  <span>Explore All Films</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {KNOTSBYAMP_CONFIG.films.slice(0, 4).map((film) => (
                  <div
                    key={film.id}
                    onClick={() => setActiveVideoModal(film)}
                    className="group relative bg-black rounded-lg overflow-hidden border border-white/10 hover:border-[#c99d66] transition-all cursor-pointer shadow-xl"
                  >
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <img
                        src={film.posterImage}
                        alt={film.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-[#c99d66]/90 group-hover:bg-[#c99d66] text-black flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 fill-black ml-0.5" />
                        </div>
                      </div>

                      <div className="absolute top-3 right-3 px-2 py-1 bg-black/80 rounded text-[10px] text-white font-mono">
                        {film.duration}
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-[11px] text-[#c99d66] uppercase tracking-wider font-semibold">
                          {film.location}
                        </div>
                        <h3 className="font-serif text-lg text-white font-medium leading-snug mt-1">
                          {film.title}
                        </h3>
                        <p className="text-xs text-white/70 italic mt-1 line-clamp-1">
                          {film.tagline}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why KnotsbyAMP Pillars */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-widest text-[#c99d66] font-semibold">
                Our Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-white mt-1">
                What Makes Us The Frame-Worthy Choice?
              </h2>
              <p className="text-white/60 text-sm mt-3">
                Since 2014, we have dedicated ourselves to one simple truth: real emotion outshines staged perfection every single time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {KNOTSBYAMP_CONFIG.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-[#15151c] rounded-lg border border-white/5 hover:border-[#c99d66]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#c99d66]/10 border border-[#c99d66]/30 flex items-center justify-center text-[#c99d66] font-serif font-bold mb-5">
                      0{idx + 1}
                    </div>
                    <h3 className="text-xl font-serif text-white font-medium">
                      {pillar.title}
                    </h3>
                    <div className="text-xs text-[#c99d66] font-medium tracking-wide uppercase mt-1 mb-3">
                      {pillar.subtitle}
                    </div>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonial Quote Carousel Teaser */}
          <section className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="p-8 sm:p-12 bg-gradient-to-b from-[#181822] to-[#121218] rounded-2xl border border-white/10 text-center relative overflow-hidden">
              <div className="absolute top-6 left-8 text-7xl font-serif text-white/5 select-none">
                “
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-1 text-[#c99d66] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c99d66]" />
                  ))}
                </div>

                <p className="text-lg sm:text-2xl font-serif text-white/95 italic leading-relaxed max-w-3xl mx-auto">
                  “The right mixes and timing of the Wedding Film is so unique that it made us feel like the leads of a cinematic film. If you are getting a chance to work with them, jump and take it without hesitation!”
                </p>

                <div className="mt-6">
                  <div className="font-medium text-white text-base">Maitri & Anish</div>
                  <div className="text-xs text-[#c99d66] uppercase tracking-wider mt-0.5">
                    Taj Cidade De Goa · Destination Wedding
                  </div>
                </div>

                <button
                  onClick={() => {
                    setActiveTab('testimonials');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="mt-8 px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white text-xs uppercase tracking-wider rounded border border-white/10 transition-colors inline-flex items-center gap-2"
                >
                  <span>Read More Client Stories</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </section>

          {/* FAQ Accordion Teaser on Home */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-widest text-[#c99d66] font-semibold">
                Got Questions?
              </span>
              <h2 className="text-3xl font-serif text-white mt-1">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {KNOTSBYAMP_CONFIG.faqs.slice(0, 4).map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-[#15151c] rounded-lg border border-white/5 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between text-white font-medium text-sm sm:text-base hover:text-[#c99d66] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#c99d66] transition-transform ${
                        openFaqIndex === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <button
                onClick={() => {
                  setActiveTab('faqs');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs text-[#c99d66] hover:underline uppercase tracking-wider font-medium"
              >
                View all FAQs & Delivery Details →
              </button>
            </div>
          </section>
        </div>
      )}

      {/* TAB: WEDDING STORIES */}
      {activeTab === 'stories' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#c99d66] font-semibold">
              Real Weddings & Celebrations
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-white mt-2">
              Wedding Stories
            </h1>
            <p className="text-white/60 text-sm mt-3 leading-relaxed">
              Explore authentic multi-day photo-stories across distinct wedding cultures, royal palaces, coastal shorelines, and international destinations.
            </p>
          </div>

          {/* Filters Bar */}
          <div className="bg-[#15151c] p-4 rounded-lg border border-white/10 mb-10 flex flex-wrap items-center justify-between gap-4">
            {/* Culture Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-white/50 uppercase tracking-wider mr-1">
                Culture:
              </span>
              {[
                'All',
                'Gujarati',
                'Marwari',
                'Christian',
                'Muslim',
                'Two States',
                'North Indian',
                'Maharashtrian'
              ].map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCulture(c)}
                  className={`px-3 py-1.5 rounded text-xs transition-colors ${
                    selectedCulture === c
                      ? 'bg-[#c99d66] text-black font-semibold'
                      : 'bg-white/5 text-white/80 hover:bg-white/10'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Destination Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-white/50 uppercase tracking-wider mr-1">
                Destination:
              </span>
              {['All', 'Mumbai', 'Goa', 'Udaipur', 'Karjat', 'International'].map((d) => (
                <button
                  key={d}
                  onClick={() => setSelectedDestination(d)}
                  className={`px-3 py-1.5 rounded text-xs transition-colors ${
                    selectedDestination === d
                      ? 'bg-[#c99d66] text-black font-semibold'
                      : 'bg-white/5 text-white/80 hover:bg-white/10'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                onClick={() => setSelectedStory(story)}
                className="group bg-[#15151c] rounded-lg overflow-hidden border border-white/5 hover:border-[#c99d66] transition-all duration-300 flex flex-col cursor-pointer shadow-lg hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={story.coverImage}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/70 backdrop-blur-sm rounded text-[10px] uppercase tracking-wider text-[#c99d66] font-medium border border-white/10">
                    {story.culture} Wedding
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-[10px] text-white/80 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#c99d66]" />
                    <span>{story.location}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] text-[#c99d66] uppercase tracking-widest font-semibold mb-1">
                      {story.couple}
                    </div>
                    <h3 className="font-serif text-xl text-white group-hover:text-[#c99d66] transition-colors leading-snug">
                      {story.title}
                    </h3>
                    <p className="text-xs text-white/60 mt-2 line-clamp-3 leading-relaxed">
                      {story.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#c99d66] font-semibold">
                    <span>View Gallery & Full Story ({story.gallery.length} Photos)</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB: WEDDING FILMS */}
      {activeTab === 'films' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#c99d66] font-semibold">
              The Cinema Experience
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-white mt-2">
              Cinematic Wedding Films
            </h1>
            <p className="text-white/60 text-sm mt-3 leading-relaxed">
              Handcrafted wedding films with custom music direction, crisp audio vows, and emotional pacing that preserve the heartbeat of your wedding day forever.
            </p>
          </div>

          {/* Films Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {KNOTSBYAMP_CONFIG.films.map((film) => (
              <div
                key={film.id}
                onClick={() => setActiveVideoModal(film)}
                className="group relative bg-[#15151c] rounded-lg overflow-hidden border border-white/10 hover:border-[#c99d66] transition-all cursor-pointer shadow-xl flex flex-col"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={film.posterImage}
                    alt={film.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#c99d66]/90 group-hover:bg-[#c99d66] text-black flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 fill-black ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute top-3 right-3 px-2 py-1 bg-black/80 rounded text-[10px] text-white font-mono">
                    {film.duration}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[11px] text-[#c99d66] uppercase tracking-wider font-semibold">
                      {film.location}
                    </div>
                    <h3 className="font-serif text-lg text-white font-medium leading-snug mt-1">
                      {film.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 bg-[#141419] flex-1 flex flex-col justify-between">
                  <p className="text-xs text-white/70 italic line-clamp-2">
                    “{film.tagline}”
                  </p>
                  <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-xs text-[#c99d66] font-semibold">
                    <span>Watch Film</span>
                    <Play className="w-3 h-3 fill-[#c99d66]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB: COUPLE SHOOT */}
      {activeTab === 'couple-shoot' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#c99d66] font-semibold">
              Pre-Wedding & Engagement Shoots
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-white mt-2">
              Couple Shoots
            </h1>
            <p className="text-white/60 text-sm mt-3 leading-relaxed">
              No stiff studio sets. We travel to destinations with meaningful connections to you—from Amsterdam canals and Goan cliff sides to quiet heritage alleyways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {KNOTSBYAMP_CONFIG.coupleShoots.map((cs) => (
              <div
                key={cs.id}
                onClick={() => openLightbox(cs.image)}
                className="group bg-[#15151c] rounded-xl overflow-hidden border border-white/10 hover:border-[#c99d66] transition-all cursor-pointer shadow-xl"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/70 backdrop-blur-sm rounded text-[10px] text-[#c99d66] uppercase font-medium">
                    {cs.location}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs text-[#c99d66] font-semibold uppercase tracking-wider">
                    {cs.theme}
                  </div>
                  <h3 className="font-serif text-2xl text-white mt-1 group-hover:text-[#c99d66] transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 mt-2 leading-relaxed">
                    {cs.story}
                  </p>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#c99d66] font-medium">
                    <span>View High-Res Photo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Couple Shoot Full Gallery Grid */}
          <div className="mt-16">
            <h2 className="text-2xl font-serif text-white text-center mb-8">
              Moments of Intimacy & Connection
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                '/assets/knotsbyamp/gallery-1.jpg',
                '/assets/knotsbyamp/gallery-2.jpg',
                '/assets/knotsbyamp/gallery-3.jpg',
                '/assets/knotsbyamp/gallery-4.jpg',
                '/assets/knotsbyamp/gallery-5.jpg',
                '/assets/knotsbyamp/gallery-6.jpg',
                '/assets/knotsbyamp/gallery-7.jpg',
                '/assets/knotsbyamp/gallery-8.jpg'
              ].map((imgUrl, i) => (
                <div
                  key={i}
                  onClick={() => openLightbox(imgUrl)}
                  className="aspect-[4/5] rounded-lg overflow-hidden cursor-pointer group relative border border-white/5"
                >
                  <img
                    src={imgUrl}
                    alt={`Couple Shoot ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Search className="w-6 h-6 text-[#c99d66]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB: ABOUT US */}
      {activeTab === 'about' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-20">
          {/* Header & Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#c99d66] font-semibold">
                Through The Lens Since 2014
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif text-white mt-2 leading-tight">
                About KnotsbyAMP
              </h1>
              <div className="space-y-4 text-white/80 text-sm sm:text-base leading-relaxed mt-6">
                <p>
                  KnotsbyAMP is an international award-winning wedding photography and filmmaking studio based in Mumbai, India. Founded in 2014, we are regarded among the premier wedding photography companies in India, with unbroken 5-star reviews on Google and WedMeGood.
                </p>
                <p>
                  The key to great photographs, we believe, lies in connecting deeply with the subjects and providing them with comfort that helps bring out their true persona. We don’t ask you to freeze awkward smiles or perform rehearsed theatrics.
                </p>
                <p>
                  We have a strong documentary approach to wedding photography with emphasis on lighting, natural emotions, and capturing fine details. Our work is not about five award-winning photos, but about the whole photo-story.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <div>
                  <div className="text-3xl font-serif text-[#c99d66] font-bold">850+</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">Weddings Documented</div>
                </div>
                <div className="h-10 w-[1px] bg-white/10" />
                <div>
                  <div className="text-3xl font-serif text-[#c99d66] font-bold">35+</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">National & Global Awards</div>
                </div>
                <div className="h-10 w-[1px] bg-white/10" />
                <div>
                  <div className="text-3xl font-serif text-[#c99d66] font-bold">14+</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">Countries Covered</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={KNOTSBYAMP_CONFIG.brand.weddingSutraBadge}
                  alt="KnotsbyAMP Team Award"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-4 bg-[#181822] border border-[#c99d66]/50 rounded-xl shadow-xl hidden sm:block max-w-xs">
                <div className="flex items-center gap-2 text-[#c99d66] font-medium text-xs mb-1">
                  <Award className="w-4 h-4" />
                  <span>WeddingSutra Photography Awards 2024</span>
                </div>
                <div className="text-xs text-white/70">
                  KnotsbyAMP team celebrating our gold recognition for excellence in wedding cinematography & storytelling.
                </div>
              </div>
            </div>
          </div>

          {/* 6 Key Pillars */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-widest text-[#c99d66] font-semibold">
                Our Work Ethic
              </span>
              <h2 className="text-3xl font-serif text-white mt-1">
                The Core Principles of KnotsbyAMP
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {KNOTSBYAMP_CONFIG.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#15151c] rounded-xl border border-white/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[#c99d66] font-serif font-bold text-lg mb-2">
                      0{idx + 1}.
                    </div>
                    <h3 className="text-lg font-serif text-white font-medium">
                      {pillar.title}
                    </h3>
                    <div className="text-[11px] text-[#c99d66] font-medium tracking-wide uppercase mb-2">
                      {pillar.subtitle}
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The Team / Dreamers & Doers */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-widest text-[#c99d66] font-semibold">
                The Creative Minds
              </span>
              <h2 className="text-3xl font-serif text-white mt-1">
                The Dreamers & Doers of KnotsbyAMP
              </h2>
              <p className="text-white/60 text-xs sm:text-sm mt-2">
                Our multi-disciplinary team brings together film directors, photojournalists, audio designers, and light masters dedicated to preserving your moments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {KNOTSBYAMP_CONFIG.team.map((member, i) => (
                <div
                  key={i}
                  className="p-6 bg-[#15151c] rounded-xl border border-white/5 hover:border-[#c99d66]/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-xl text-white font-semibold">
                      {member.name}
                    </h3>
                    {member.badge && (
                      <span className="px-2 py-0.5 rounded text-[10px] bg-[#c99d66]/15 text-[#c99d66] font-medium border border-[#c99d66]/30">
                        {member.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[#c99d66] font-medium tracking-wide mb-3">
                    {member.role}
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB: TESTIMONIALS */}
      {activeTab === 'testimonials' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#c99d66] font-semibold">
              Words From Our Couples
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-white mt-2">
              Love Stories Unwrapped
            </h1>
            <p className="text-white/60 text-sm mt-3 leading-relaxed">
              Read how couples across India and internationally experienced their wedding days with our team by their side.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {KNOTSBYAMP_CONFIG.testimonials.map((testi, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#15151c] rounded-xl border border-white/10 hover:border-[#c99d66]/50 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#c99d66]">
                      {[...Array(testi.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#c99d66]" />
                      ))}
                    </div>
                    <span className="text-[11px] text-white/50">{testi.weddingDate}</span>
                  </div>

                  <h3 className="font-serif text-lg text-white font-medium italic mb-4 leading-snug text-[#eae7e1]">
                    {testi.highlight}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                    {testi.reviewText}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white text-sm">
                      {testi.couple}
                    </div>
                    <div className="text-xs text-[#c99d66] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      <span>{testi.location}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => openLightbox(testi.photoUrl)}
                    className="text-xs text-white/60 hover:text-[#c99d66] transition-colors flex items-center gap-1"
                  >
                    <span>View Wedding</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Google & WedMeGood Trust Banner */}
          <div className="mt-16 p-8 bg-[#181822] rounded-xl border border-white/10 text-center max-w-3xl mx-auto">
            <div className="text-3xl font-serif text-[#c99d66] font-bold">5.0 ★ Rating</div>
            <p className="text-xs sm:text-sm text-white/80 mt-2">
              Rated 5 out of 5 across 400+ verified couple reviews on Google Business & WedMeGood.
            </p>
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-white/60">
              <span>✓ 100% On-Time Delivery</span>
              <span>•</span>
              <span>✓ Dedicated Redundant Backup</span>
              <span>•</span>
              <span>✓ Lifetime Gallery Access</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB: FAQS */}
      {activeTab === 'faqs' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#c99d66] font-semibold">
              Transparency First
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-white mt-2">
              Frequently Asked Questions
            </h1>
            <p className="text-white/60 text-sm mt-3 leading-relaxed">
              Everything you need to know about our documentary style, crew sizes, pricing structure, travel policies, and deliverables.
            </p>
          </div>

          {/* Categories */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
            {['All', 'General', 'Booking & Pricing', 'Style & Films', 'Deliverables'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFaqCategory(cat)}
                className={`px-3.5 py-1.5 rounded text-xs transition-colors ${
                  faqCategory === cat
                    ? 'bg-[#c99d66] text-black font-semibold'
                    : 'bg-white/5 text-white/80 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#15151c] rounded-xl border border-white/5 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between text-white font-medium text-base hover:text-[#c99d66] transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#c99d66] shrink-0 transition-transform ${
                      openFaqIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === idx && (
                  <div className="px-6 pb-6 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Service Packages Overview */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-widest text-[#c99d66] font-semibold">
                Investment & Packages
              </span>
              <h2 className="text-3xl font-serif text-white mt-1">
                Signature Service Packages
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {KNOTSBYAMP_CONFIG.servicePackages.map((pkg, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-xl border flex flex-col justify-between ${
                    pkg.popular
                      ? 'bg-[#181824] border-[#c99d66] shadow-xl'
                      : 'bg-[#15151c] border-white/5'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-serif text-xl text-white font-semibold">{pkg.name}</h3>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-[#c99d66]/15 text-[#c99d66] font-medium border border-[#c99d66]/30">
                        {pkg.badge}
                      </span>
                    </div>
                    <p className="text-xs text-white/60 mb-6">{pkg.description}</p>

                    <div className="space-y-2.5">
                      {pkg.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-white/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#c99d66] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setIsBookingModalOpen(true)}
                    className={`mt-8 w-full py-2.5 rounded text-xs uppercase tracking-wider font-semibold transition-colors ${
                      pkg.popular
                        ? 'bg-[#c99d66] hover:bg-[#d8af77] text-black'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    Inquire Custom Quote
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB: CONTACT */}
      {activeTab === 'contact' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#c99d66] font-semibold">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-white mt-2">
              Get Us To Shoot You!
            </h1>
            <p className="text-white/60 text-sm mt-3 leading-relaxed">
              Tell us about your wedding dreams, venue ideas, and celebration dates. We reply within 24 hours with dates availability and bespoke pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details & Info (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 bg-[#15151c] rounded-xl border border-white/10 space-y-6">
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-[#c99d66] font-semibold mb-2">
                    Head Office (Navi Mumbai)
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#c99d66] shrink-0 mt-0.5" />
                    <span>{KNOTSBYAMP_CONFIG.contact.headOffice}</span>
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <h3 className="text-xs uppercase tracking-widest text-[#c99d66] font-semibold mb-2">
                    Phone & Call Support
                  </h3>
                  <a
                    href={`tel:${KNOTSBYAMP_CONFIG.contact.phone}`}
                    className="text-base text-white hover:text-[#c99d66] transition-colors flex items-center gap-3 font-medium"
                  >
                    <Phone className="w-4 h-4 text-[#c99d66]" />
                    <span>{KNOTSBYAMP_CONFIG.contact.phone}</span>
                  </a>
                  <div className="text-xs text-white/50 mt-1 pl-7">
                    {KNOTSBYAMP_CONFIG.contact.hours}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <h3 className="text-xs uppercase tracking-widest text-[#c99d66] font-semibold mb-2">
                    Email Inquiries
                  </h3>
                  <a
                    href={`mailto:${KNOTSBYAMP_CONFIG.contact.email}`}
                    className="text-base text-white hover:text-[#c99d66] transition-colors flex items-center gap-3 font-medium"
                  >
                    <Mail className="w-4 h-4 text-[#c99d66]" />
                    <span>{KNOTSBYAMP_CONFIG.contact.email}</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <h3 className="text-xs uppercase tracking-widest text-[#c99d66] font-semibold mb-2">
                    Studio Locations & Coverage
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs text-white/70">
                    {KNOTSBYAMP_CONFIG.contact.hubs.map((hub, i) => (
                      <span key={i} className="px-2.5 py-1 bg-white/5 rounded border border-white/5">
                        {hub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Quick Connect */}
              <div className="p-6 bg-[#0f2316] rounded-xl border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">Prefer WhatsApp?</div>
                  <div className="text-xs text-white/70 mt-0.5">Chat directly with client manager</div>
                </div>
                <a
                  href={`https://wa.me/${KNOTSBYAMP_CONFIG.contact.whatsapp}?text=Hi%20KnotsbyAMP!%20I'd%20like%20to%20inquire%20about%20wedding%20photography%20and%20films.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase rounded transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Now</span>
                </a>
              </div>
            </div>

            {/* Booking Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#15151c] p-8 sm:p-10 rounded-xl border border-white/10">
              <h2 className="text-2xl font-serif text-white mb-2">
                Check Dates & Request Proposal
              </h2>
              <p className="text-xs sm:text-sm text-white/60 mb-6">
                Fill out the form below. We will check our availability and share a tailored quote.
              </p>

              {formSubmitted ? (
                <div className="p-8 bg-[#182a1d] border border-emerald-500/40 rounded-xl text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                  <h3 className="text-xl font-serif text-white font-medium">Thank You!</h3>
                  <p className="text-xs sm:text-sm text-white/80 mt-2">
                    Your inquiry has been received. Our team will review your dates and reply to {formData.email} within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ananya & Arjun"
                        className="w-full bg-[#0e0e11] border border-white/10 rounded px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#c99d66] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#0e0e11] border border-white/10 rounded px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#c99d66] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full bg-[#0e0e11] border border-white/10 rounded px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#c99d66] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5">
                        Event Dates *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.eventDates}
                        onChange={(e) => setFormData({ ...formData, eventDates: e.target.value })}
                        placeholder="e.g. Dec 12 - Dec 14, 2026"
                        className="w-full bg-[#0e0e11] border border-white/10 rounded px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#c99d66] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5">
                        Wedding City / Venue *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.cityVenue}
                        onChange={(e) => setFormData({ ...formData, cityVenue: e.target.value })}
                        placeholder="e.g. Taj Cidade, Goa"
                        className="w-full bg-[#0e0e11] border border-white/10 rounded px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#c99d66] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5">
                        Estimated Guest Count
                      </label>
                      <select
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        className="w-full bg-[#0e0e11] border border-white/10 rounded px-3.5 py-2.5 text-sm text-white focus:border-[#c99d66] focus:outline-none"
                      >
                        <option value="Under 150">Intimate (Under 150)</option>
                        <option value="150-350">Medium (150 – 350)</option>
                        <option value="350-700">Grand (350 – 700)</option>
                        <option value="700+">Royal (700+ Guests)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-2">
                      Services Required:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        'Candid Photography',
                        'Cinematic Wedding Film',
                        'Drone Cinematography',
                        'Pre-Wedding Shoot'
                      ].map((srv) => (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => toggleService(srv)}
                          className={`px-3 py-2 rounded text-xs text-left transition-colors flex items-center gap-1.5 ${
                            formData.services.includes(srv)
                              ? 'bg-[#c99d66] text-black font-semibold'
                              : 'bg-[#0e0e11] text-white/70 border border-white/10 hover:border-white/30'
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{srv}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5">
                      Tell us about your wedding & vibe
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your wedding story, key ceremonies, functions, or specific expectations..."
                      className="w-full bg-[#0e0e11] border border-white/10 rounded px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#c99d66] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#c99d66] hover:bg-[#d8af77] text-black font-semibold text-xs uppercase tracking-widest rounded transition-all shadow-lg"
                  >
                    Submit Wedding Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 6. INTERACTIVE STORY MODAL */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[#15151c] border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative my-auto">
            {/* Close button */}
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cover Banner */}
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img
                src={selectedStory.coverImage}
                alt={selectedStory.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15151c] via-transparent to-black/40" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-block px-2.5 py-1 bg-[#c99d66] text-black text-[10px] uppercase font-bold tracking-wider rounded mb-2">
                  {selectedStory.culture} Wedding · {selectedStory.location}
                </div>
                <h2 className="text-2xl sm:text-4xl font-serif text-white font-medium">
                  {selectedStory.title}
                </h2>
                <div className="text-xs text-white/80 mt-1 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#c99d66]" />
                  <span>{selectedStory.venue}</span>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[#c99d66] font-semibold mb-2">
                  The Story
                </h3>
                <p className="text-white/85 text-sm sm:text-base leading-relaxed">
                  {selectedStory.fullStory}
                </p>
              </div>

              {/* Photo Gallery Grid */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[#c99d66] font-semibold mb-3">
                  Gallery Highlights ({selectedStory.gallery.length} Photos)
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {selectedStory.gallery.map((img, i) => (
                    <div
                      key={i}
                      onClick={() => openLightbox(img, selectedStory.gallery)}
                      className="aspect-square rounded-lg overflow-hidden border border-white/5 cursor-pointer group relative"
                    >
                      <img
                        src={img}
                        alt={`Story Photo ${i + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Search className="w-5 h-5 text-[#c99d66]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {selectedStory.tags.map((tg, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-white/5 rounded text-[11px] text-white/70"
                  >
                    #{tg}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    setSelectedStory(null);
                    setIsBookingModalOpen(true);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#c99d66] hover:bg-[#d8af77] text-black font-semibold text-xs uppercase tracking-wider rounded"
                >
                  Book A Wedding Like This
                </button>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="text-xs text-white/60 hover:text-white"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. VIDEO PLAYER MODAL */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#15151c] border border-white/10 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Embedded YouTube Iframe */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoModal.youtubeId}?autoplay=1&rel=0`}
                title={activeVideoModal.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-6 bg-[#141419]">
              <div className="text-xs text-[#c99d66] font-semibold uppercase tracking-wider">
                {activeVideoModal.location} · {activeVideoModal.duration}
              </div>
              <h2 className="text-xl sm:text-2xl font-serif text-white font-medium mt-1">
                {activeVideoModal.title}
              </h2>
              <p className="text-xs sm:text-sm text-white/70 mt-2">
                {activeVideoModal.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 8. LIGHTBOX VIEWER */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 select-none">
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
          >
            <X className="w-6 h-6" />
          </button>

          {lightboxGallery.length > 1 && (
            <>
              <button
                onClick={prevLightboxImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={nextLightboxImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}

          <img
            src={lightboxImage}
            alt="Enlarged gallery preview"
            className="max-h-[85vh] max-w-[90vw] object-contain rounded"
          />

          {lightboxGallery.length > 1 && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/10 rounded-full text-xs text-white/80 font-mono">
              {lightboxIndex + 1} / {lightboxGallery.length}
            </div>
          )}
        </div>
      )}

      {/* 9. DATE AVAILABILITY MODAL */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#15151c] border border-white/10 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl my-auto">
            <button
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>

            <h2 className="text-2xl font-serif text-white font-medium mb-1">
              Check Date Availability
            </h2>
            <p className="text-xs text-white/60 mb-6">
              We take a limited number of weddings each season to ensure pristine creative attention.
            </p>

            {formSubmitted ? (
              <div className="p-6 bg-[#182a1d] border border-emerald-500/40 rounded-xl text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                <h3 className="text-lg font-serif text-white font-medium">Inquiry Received!</h3>
                <p className="text-xs text-white/80 mt-1">
                  Our director will verify calendar availability and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                    Couple Names *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Radhika & Pranav"
                    className="w-full bg-[#0e0e11] border border-white/10 rounded px-3.5 py-2 text-sm text-white placeholder-white/30 focus:border-[#c99d66] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 9987..."
                      className="w-full bg-[#0e0e11] border border-white/10 rounded px-3.5 py-2 text-sm text-white placeholder-white/30 focus:border-[#c99d66] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@email.com"
                      className="w-full bg-[#0e0e11] border border-white/10 rounded px-3.5 py-2 text-sm text-white placeholder-white/30 focus:border-[#c99d66] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                      Wedding Dates *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.eventDates}
                      onChange={(e) => setFormData({ ...formData, eventDates: e.target.value })}
                      placeholder="e.g. Nov 24, 2026"
                      className="w-full bg-[#0e0e11] border border-white/10 rounded px-3.5 py-2 text-sm text-white placeholder-white/30 focus:border-[#c99d66] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                      Venue / Destination *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.cityVenue}
                      onChange={(e) => setFormData({ ...formData, cityVenue: e.target.value })}
                      placeholder="e.g. Udaipur / Goa"
                      className="w-full bg-[#0e0e11] border border-white/10 rounded px-3.5 py-2 text-sm text-white placeholder-white/30 focus:border-[#c99d66] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                    Notes or Questions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us a little about your wedding plans..."
                    className="w-full bg-[#0e0e11] border border-white/10 rounded px-3.5 py-2 text-sm text-white placeholder-white/30 focus:border-[#c99d66] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#c99d66] hover:bg-[#d8af77] text-black font-semibold text-xs uppercase tracking-widest rounded transition-all shadow-lg mt-2"
                >
                  Verify Availability Now
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 10. FLOATING WHATSAPP & INQUIRY BUTTON */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2.5">
        <a
          href={`https://wa.me/${KNOTSBYAMP_CONFIG.contact.whatsapp}?text=Hello%20KnotsbyAMP!%20I'd%20like%20to%20inquire%20about%20wedding%20photography%20and%20cinematic%20films.`}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
          aria-label="Direct WhatsApp Chat"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
        </a>
      </div>

      {/* 11. FOOTER */}
      <footer className="bg-[#08080a] border-t border-white/10 pt-16 pb-12 text-white/70 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* Col 1: Brand Info */}
            <div className="lg:col-span-2 space-y-4">
              <img
                src={KNOTSBYAMP_CONFIG.brand.logo}
                alt="KnotsbyAMP"
                className="h-10 w-auto object-contain brightness-110"
              />
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-sm">
                KnotsbyAMP is an International award-winning wedding photography and filmmaking company based in Mumbai, India. Founded in 2014, they are regarded among the top wedding photographers in India.
              </p>
              <div className="text-[11px] text-[#c99d66]">
                5.0 ★ Google & WedMeGood Verified Studio
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-4">
                Explore Portfolios
              </h4>
              <ul className="space-y-2.5 text-xs text-white/60">
                <li>
                  <button
                    onClick={() => {
                      setActiveTab('stories');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#c99d66] transition-colors"
                  >
                    Wedding Stories
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setActiveTab('films');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#c99d66] transition-colors"
                  >
                    Wedding Films
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setActiveTab('couple-shoot');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#c99d66] transition-colors"
                  >
                    Couple & Pre-Wedding Shoots
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setActiveTab('about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#c99d66] transition-colors"
                  >
                    About Us & Team
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setActiveTab('testimonials');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#c99d66] transition-colors"
                  >
                    Client Testimonials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setActiveTab('faqs');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#c99d66] transition-colors"
                  >
                    Frequently Asked Questions
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Wedding Cultures */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-4">
                Weddings By Culture
              </h4>
              <ul className="space-y-2 text-xs text-white/60">
                <li>Gujarati Weddings</li>
                <li>Marwari Palace Weddings</li>
                <li>South Indian Weddings</li>
                <li>Christian & Church Weddings</li>
                <li>Muslim Nikah Ceremonies</li>
                <li>Two States Weddings</li>
                <li>Bengali & Cross-Border Unions</li>
              </ul>
            </div>

            {/* Col 4: Studio Office */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-4">
                Studio Headquarters
              </h4>
              <div className="space-y-2.5 text-xs text-white/60 leading-relaxed">
                <div>
                  KnotsbyAMP, Office no 802 & 803, B wing, Mahavir Icon, Plot no 90, Sector 15, CBD Belapur, Navi Mumbai: 400614
                </div>
                <div>
                  <span className="text-white/40">Phone: </span>
                  <a href={`tel:${KNOTSBYAMP_CONFIG.contact.phone}`} className="hover:text-[#c99d66]">
                    {KNOTSBYAMP_CONFIG.contact.phone}
                  </a>
                </div>
                <div>
                  <span className="text-white/40">Email: </span>
                  <a href={`mailto:${KNOTSBYAMP_CONFIG.contact.email}`} className="hover:text-[#c99d66]">
                    {KNOTSBYAMP_CONFIG.contact.email}
                  </a>
                </div>
                <div>
                  <span className="text-white/40">Hours: </span>
                  {KNOTSBYAMP_CONFIG.contact.hours}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
            <div>
              © 2026 KnotsbyAMP Photography & Films. All Rights Reserved. Recreated faithfully for RaozSite showcase demo.
            </div>
            <div className="flex items-center gap-4">
              <span>Terms & Conditions</span>
              <span>•</span>
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Shipping & Deliverables Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
